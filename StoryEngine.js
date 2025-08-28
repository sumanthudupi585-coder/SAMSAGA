/**
 * StoryEngine.js
 * 
 * Connects player state to story data and drives scene/act transitions.
 */

(function () {
  class StoryEngine {
    constructor(gameStateManager) {
      this.gameStateManager = gameStateManager;
      this.allActs = {
        1: window.ACT1_STORY_DATA,
        2: window.ACT2_STORY_DATA,
        3: window.ACT3_STORY_DATA,
      };
    }

    // -------- Act & Scene helpers --------
    getFirstSceneIdForAct(act) {
      const firstScenes = { 1: 'JOURNEY_START', 2: 'ACT2_START', 3: 'ACT3_START' };
      return firstScenes[act] || 'JOURNEY_START';
    }

    getActiveStoryData() {
      const currentAct = this.gameStateManager.playerState.currentAct;
      return this.allActs[currentAct];
    }

    getCurrentScene() {
      const storyData = this.getActiveStoryData();
      if (!storyData || !Array.isArray(storyData.scenes)) return null;
      const currentSceneId = this.gameStateManager.playerState.currentSceneId;
      const scene = storyData.scenes.find((s) => s.id === currentSceneId) || null;
      if (!scene) console.error(`Scene with ID "${currentSceneId}" not found in Act ${this.gameStateManager.playerState.currentAct}`);
      return scene;
    }

    // -------- Choice gathering --------
    getAvailableChoices() {
      const scene = this.getCurrentScene();
      if (!scene) return [];

      const gameState = this.gameStateManager.getState();
      const baseChoices = Array.isArray(scene.choices) ? scene.choices : [];

      const standardChoices = baseChoices.filter((choice) => {
        if (!choice.condition) return true;
        const conditionFunc = typeof choice.condition === 'string' ? new Function('gameState', `return ${choice.condition}`) : choice.condition;
        try {
          return !!conditionFunc(gameState);
        } catch (e) {
          console.error(`Error evaluating condition for choice "${choice.id}":`, e);
          return false;
        }
      });

      const special = [
        ...this.getNakshatraSpecialChoices(scene),
        ...this.getGanaSpecialChoices(scene),
      ];

      return [...standardChoices, ...special];
    }

    getNakshatraSpecialChoices(scene) {
      const nakshatra = this.gameStateManager.playerProfile.nakshatra;
      if (!nakshatra || !scene || !scene.nakshatraChoices) return [];
      const choices = scene.nakshatraChoices[nakshatra] || [];
      return choices.map((c) => ({ ...c, isNakshatraChoice: true }));
    }

    getGanaSpecialChoices(scene) {
      const gana = this.gameStateManager.playerProfile.gana;
      if (!gana || !scene || !scene.ganaChoices) return [];
      const choices = scene.ganaChoices[gana] || [];
      return choices.map((c) => ({ ...c, isGanaChoice: true }));
    }

    // -------- Choice processing --------
    processChoice(choiceId) {
      const scene = this.getCurrentScene();
      if (!scene) return false;

      // locate choice in choices or interactions
      let choice = null;
      if (Array.isArray(scene.choices)) choice = scene.choices.find((c) => c.id === choiceId) || null;
      if (!choice && Array.isArray(scene.interactions)) choice = scene.interactions.find((i) => i.id === choiceId) || null;
      if (!choice) {
        console.error(`Choice with ID "${choiceId}" not found in current scene`);
        return false;
      }

      // Effects
      if (choice.effects) {
        this.processEffects(choice.effects);
      }

      // World state triggers
      if (choice.worldStateTriggers) {
        Object.entries(choice.worldStateTriggers).forEach(([key, value]) => {
          this.gameStateManager.updateState(key, value);
        });
      }

      // Act change
      if (choice.nextAct) return this.transitionToAct(choice.nextAct);
      if (choice.transitionToAct !== undefined) return this.transitionToAct(choice.transitionToAct);

      // Scene change
      if (choice.nextScene) {
        this.gameStateManager.playerState.currentSceneId = choice.nextScene;
        return true;
      }

      return true;
    }

    processEffects(effects) {
      if (!effects) return;
      // Karma
      if (typeof effects.karma === 'number') {
        this.gameStateManager.updateKarma(effects.karma);
      }
      // Inventory
      if (effects.inventory) {
        if (Array.isArray(effects.inventory.add)) {
          effects.inventory.add.forEach((item) => this.gameStateManager.addToInventory(item));
        }
        if (Array.isArray(effects.inventory.remove)) {
          effects.inventory.remove.forEach((item) => this.gameStateManager.removeFromInventory(item));
        }
      }
      // Dharmic profile
      if (effects.dharmicProfile) {
        Object.entries(effects.dharmicProfile).forEach(([aspect, val]) => {
          this.gameStateManager.updateDharmicProfile(aspect, val);
        });
      }
    }

    transitionToAct(actNumber) {
      const hasAct = !!this.allActs[actNumber];
      if (!hasAct) return false;
      this.gameStateManager.playerState.currentAct = actNumber;
      this.gameStateManager.playerState.currentSceneId = this.getFirstSceneIdForAct(actNumber);
      try { this.gameStateManager.saveGame(); } catch (e) {}
      return true;
    }

    getCurrentPuzzle() {
      const scene = this.getCurrentScene();
      return scene && scene.puzzle ? scene.puzzle : null;
    }
  }

  // Expose globally
  window.StoryEngine = StoryEngine;
})();

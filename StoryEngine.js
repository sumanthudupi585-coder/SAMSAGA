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
      if (!storyData) return null;
      const currentSceneId = this.gameStateManager.playerState.currentSceneId;

      let scene = null;
      if (Array.isArray(storyData.scenes)) {
        scene = storyData.scenes.find((s) => s.id === currentSceneId) || null;
      } else if (typeof storyData === 'object') {
        scene = storyData[currentSceneId] || null;
      }

      if (!scene) console.error(`Scene with ID "${currentSceneId}" not found in Act ${this.gameStateManager.playerState.currentAct}`);
      return scene;
    }

    // -------- Choice gathering --------
    getAvailableChoices() {
      const scene = this.getCurrentScene();
      if (!scene) return [];

      const gameState = this.gameStateManager.getState();
      const baseChoices = Array.isArray(scene.choices) ? scene.choices : [];

      const evalCondition = (cond) => {
        if (!cond) return true;
        try {
          if (typeof cond === 'function') {
            return !!(cond(gameState) || cond(gameState.playerProfile));
          }
          const fn = new Function('gameState', `return ${cond}`);
          return !!fn(gameState);
        } catch (e) {
          console.error('Error evaluating condition:', e);
          return false;
        }
      };

      const standardChoices = baseChoices
        .filter((choice) => evalCondition(choice.condition))
        .map((c) => ({ id: c.id || c.nextScene || c.text, ...c }));

      const interactionChoices = Array.isArray(scene.interactions)
        ? scene.interactions.map((i) => ({ id: i.id || i.scene || `${i.verb}_${i.noun}`, text: `${i.verb} ${i.noun}`, nextScene: i.scene }))
        : [];

      const special = [
        ...this.getNakshatraSpecialChoices(scene),
        ...this.getGanaSpecialChoices(scene),
      ];

      return [...standardChoices, ...interactionChoices, ...special];
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

      const allChoices = this.getAvailableChoices();
      const choice = allChoices.find((c) => c.id === choiceId) || null;
      if (!choice) {
        console.error(`Choice with ID "${choiceId}" not found in current scene`);
        return false;
      }

      if (choice.effects) this.processEffects(choice.effects);
      if (choice.worldStateTriggers) {
        Object.entries(choice.worldStateTriggers).forEach(([key, value]) => this.gameStateManager.updateState(key, value));
      }

      if (choice.nextAct !== undefined) return this.transitionToAct(choice.nextAct);
      if (choice.transitionToAct !== undefined) return this.transitionToAct(choice.transitionToAct);

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

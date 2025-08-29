/**
 * GameStateManager.js
 * Centralized game state and persistence manager
 */

(function(){
  const STORAGE_KEY = 'samsaraSagaSave';
  const SAVE_VERSION = '2.0.0';

  function deepClone(obj){ return JSON.parse(JSON.stringify(obj)); }

  class GameStateManager {
    constructor(){
      this.playerProfile = {
        nakshatra: null,
        gana: null,
        shakti: null,
        gunas: { sattva: 0, rajas: 0, tamas: 0 },
        avatar: null
      };

      this.playerState = {
        currentAct: 1,
        currentSceneId: 'JOURNEY_START',
        karma: 0,
        dharmicProfile: { dharma: 0, artha: 0, kama: 0, moksha: 0 },
        inventory: [],
        specialItems: [],
        progression: {
          xp: 0,
          level: 1,
          abilities: [],
          achievements: [],
          questsCompleted: 0,
          puzzlesSolved: 0,
          choicesMade: 0,
          specialItemsFound: 0,
          meditationPerformed: 0,
          lastMeditationScene: null,
          karmaGained: 0,
          karmaLost: 0
        },
        quests: { active: [], completed: [], failed: [] },
        settings: {
          musicVolume: 0.5,
          effectsVolume: 0.8,
          masterVolume: 0.7,
          muted: false,
          showTutorials: true,
          enableAnimations: true
        }
      };

      this.worldState = {};

      this.gameStats = {
        totalPlayTime: 0,
        startTime: Date.now(),
        scenesVisited: {},
        choicesMade: 0,
        karmaGained: 0,
        karmaLost: 0,
        itemsCollected: 0,
        puzzlesSolved: 0,
        puzzlesFailed: 0,
        questsCompleted: 0,
        questsFailed: 0,
        achievementsUnlocked: 0,
        levelsGained: 0,
        meditationsPerformed: 0
      };

      this.sessionData = {
        lastUpdateTime: Date.now(),
        currentMusic: null,
        activeEffects: [],
        pendingNotifications: []
      };

      this._autoSaveTimer = null;
      this._debounceTimer = null;
      this._debounceMs = 1500;
    }

    init(nakshatraChoice = null){
      this.playerState.currentAct = 1;
      this.playerState.currentSceneId = 'JOURNEY_START';
      this.playerState.karma = 0;
      this.playerState.inventory = [];
      this.playerState.specialItems = [];
      this.worldState = {};

      this.playerState.progression = {
        xp: 0,
        level: 1,
        abilities: [],
        achievements: [],
        questsCompleted: 0,
        puzzlesSolved: 0,
        choicesMade: 0,
        specialItemsFound: 0,
        meditationPerformed: 0,
        lastMeditationScene: null,
        karmaGained: 0,
        karmaLost: 0
      };

      this.playerState.quests = { active: [], completed: [], failed: [] };

      this.gameStats = {
        totalPlayTime: 0,
        startTime: Date.now(),
        scenesVisited: {},
        choicesMade: 0,
        karmaGained: 0,
        karmaLost: 0,
        itemsCollected: 0,
        puzzlesSolved: 0,
        puzzlesFailed: 0,
        questsCompleted: 0,
        questsFailed: 0,
        achievementsUnlocked: 0,
        levelsGained: 0,
        meditationsPerformed: 0
      };

      if (nakshatraChoice) this.setupPlayerProfile(nakshatraChoice);
    }

    setupPlayerProfile(nakshatraChoice){
      const data = (window.NAKSHATRA_ATTRIBUTES || []).find(n => (n.name||'').toLowerCase() === String(nakshatraChoice).toLowerCase());
      if (data){
        this.playerProfile.nakshatra = data.name;
        this.playerProfile.gana = data.gana;
        this.playerProfile.shakti = data.shakti;
        this.playerProfile.gunas = { sattva: data.gunas?.sattva||0, rajas: data.gunas?.rajas||0, tamas: data.gunas?.tamas||0 };
        this.playerProfile.avatar = this.getAvatarForNakshatra(data.name);
        if (data.ability) this.playerState.progression.abilities.push(data.ability);
      }
    }

    getAvatarForNakshatra(nakshatra){
      const byNameToGana = {
        'Ashwini': 'Deva','Bharani': 'Manushya','Krittika': 'Rakshasa','Rohini': 'Manushya','Mrigashira': 'Deva','Ardra': 'Manushya','Punarvasu': 'Deva','Pushya': 'Deva','Ashlesha': 'Rakshasa','Magha': 'Rakshasa','Purva Phalguni': 'Manushya','Uttara Phalguni': 'Manushya','Hasta': 'Manushya','Chitra': 'Rakshasa','Swati': 'Deva','Vishakha': 'Rakshasa','Anuradha': 'Deva','Jyeshtha': 'Rakshasa','Mula': 'Rakshasa','Purva Ashadha': 'Manushya','Uttara Ashadha': 'Manushya','Shravana': 'Deva','Dhanishta': 'Rakshasa','Shatabhisha': 'Rakshasa','Purva Bhadrapada': 'Manushya','Uttara Bhadrapada': 'Manushya','Revati': 'Deva'
      };
      const gana = byNameToGana[nakshatra] || 'Deva';
      switch (gana){
        case 'Deva': return 'images/avatars/deva.png';
        case 'Manushya': return 'images/avatars/manushya.png';
        case 'Rakshasa': return 'images/avatars/rakshasa.png';
        default: return 'images/avatars/default.png';
      }
    }

    // ----- Persistence -----
    _safeSet(key, value){ try{ localStorage.setItem(key, value); return true; }catch(e){ console.error('Save failed', e); return false; } }
    _safeGet(key){ try{ return localStorage.getItem(key); }catch(e){ console.warn('Load failed', e); return null; } }

    saveGame(){
      const saveData = {
        __version: SAVE_VERSION,
        timestamp: Date.now(),
        playerProfile: this.playerProfile,
        playerState: this.playerState,
        worldState: this.worldState,
        gameStats: this.gameStats
      };
      const ok = this._safeSet(STORAGE_KEY, JSON.stringify(saveData));
      if (ok && window.EventBus){ window.EventBus.emit('state:saved', { key: STORAGE_KEY, timestamp: saveData.timestamp }); }
      return ok;
    }

    saveGameDebounced(){
      clearTimeout(this._debounceTimer);
      this._debounceTimer = setTimeout(()=> this.saveGame(), this._debounceMs);
    }

    loadGame(){
      const raw = this._safeGet(STORAGE_KEY);
      if(!raw) return false;
      try{
        const data = JSON.parse(raw);
        if (data.playerProfile) this.playerProfile = data.playerProfile;
        if (data.playerState) this.playerState = data.playerState;
        if (data.worldState) this.worldState = data.worldState;
        if (data.gameStats) this.gameStats = { ...data.gameStats, startTime: Date.now() };
        this.sessionData = { lastUpdateTime: Date.now(), currentMusic: null, activeEffects: [], pendingNotifications: [] };
        if (window.EventBus){ window.EventBus.emit('state:loaded', { key: STORAGE_KEY, version: data.__version||'1.x' }); }
        return true;
      } catch(e){ console.error('Error parsing save data', e); return false; }
    }

    hasSavedGame(){ return this._safeGet(STORAGE_KEY) !== null; }
    deleteSavedGame(){ try{ localStorage.removeItem(STORAGE_KEY); return true; }catch(e){ console.error('Delete failed', e); return false; } }

    setupAutoSave(intervalMs){
      if (this._autoSaveTimer){ clearInterval(this._autoSaveTimer); this._autoSaveTimer = null; }
      if (intervalMs && intervalMs > 0){
        this._autoSaveTimer = setInterval(()=> this.saveGame(), intervalMs);
      }
    }

    // ----- State mutation helpers -----
    updateState(key, value){
      if (key in this.playerState){ this.playerState[key] = value; return; }
      if (key.includes('.')){
        const [p, c] = key.split('.');
        if (p in this.playerState && typeof this.playerState[p] === 'object'){ this.playerState[p][c] = value; return; }
      }
      this.worldState[key] = value;
    }

    addToInventory(item){ if (!this.playerState.inventory.includes(item)){ this.playerState.inventory.push(item); this.gameStats.itemsCollected++; } }
    removeFromInventory(item){ const i = this.playerState.inventory.indexOf(item); if (i!==-1){ this.playerState.inventory.splice(i,1); } }
    hasItem(item){ return this.playerState.inventory.includes(item); }

    addSpecialItem(item){ if (!this.playerState.specialItems.some(i=> i.id===item.id)){ this.playerState.specialItems.push(item); this.playerState.progression.specialItemsFound++; this.gameStats.itemsCollected++; } }
    removeSpecialItem(itemId){ const i = this.playerState.specialItems.findIndex(i=> i.id===itemId); if (i!==-1){ this.playerState.specialItems.splice(i,1); } }
    hasSpecialItem(itemId){ return this.playerState.specialItems.some(i=> i.id===itemId); }

    updateKarma(amount){ this.playerState.karma += amount; return this.playerState.karma; }
    updateDharmicProfile(aspect, value){ if (aspect in this.playerState.dharmicProfile){ this.playerState.dharmicProfile[aspect] += value; return true; } return false; }

    trackSceneVisit(sceneId){ this.gameStats.scenesVisited[sceneId] = (this.gameStats.scenesVisited[sceneId]||0)+1; }
    trackChoiceMade(){ this.gameStats.choicesMade++; this.playerState.progression.choicesMade++; }
    trackPuzzleSolved(){ this.gameStats.puzzlesSolved++; this.playerState.progression.puzzlesSolved++; }
    trackPuzzleFailed(){ this.gameStats.puzzlesFailed++; }
    trackQuestCompleted(){ this.gameStats.questsCompleted++; this.playerState.progression.questsCompleted++; }
    trackQuestFailed(){ this.gameStats.questsFailed++; }
    trackAchievementUnlocked(){ this.gameStats.achievementsUnlocked++; }
    trackLevelGained(){ this.gameStats.levelsGained++; }
    trackMeditationPerformed(){ this.gameStats.meditationsPerformed++; this.playerState.progression.meditationPerformed++; }

    updatePlayTime(){ const now = Date.now(); const dt = (now - this.sessionData.lastUpdateTime)/1000; this.gameStats.totalPlayTime += dt; this.sessionData.lastUpdateTime = now; }
    getFormattedPlayTime(){ this.updatePlayTime(); let s = Math.floor(this.gameStats.totalPlayTime); const h = Math.floor(s/3600); s%=3600; const m = Math.floor(s/60); s%=60; return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }

    addNotification(n){ this.sessionData.pendingNotifications.push(n); }
    getPendingNotifications(){ const n=[...this.sessionData.pendingNotifications]; this.sessionData.pendingNotifications=[]; return n; }
    updateSettings(settings){ this.playerState.settings = { ...this.playerState.settings, ...settings }; }

    getState(){ this.updatePlayTime(); return { playerProfile: deepClone(this.playerProfile), playerState: deepClone(this.playerState), worldState: deepClone(this.worldState), gameStats: deepClone(this.gameStats) }; }
  }

  window.gameStateManager = window.gameStateManager || new GameStateManager();
})();

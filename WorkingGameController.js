/**
 * WorkingGameController.js
 * 
 * Comprehensive game controller that ensures reliable Act 1 gameplay
 * by integrating all systems and providing robust error handling.
 */

console.log('🎮 Loading Working Game Controller...');

class WorkingGameController {
    constructor() {
        this.isInitialized = false;
        this.currentSystem = null;
        this.uiSystem = null;
        this.gameState = {
            currentAct: 1,
            currentScene: 'AWAKENING_PROLOGUE',
            playerProfile: null,
            worldState: {},
            progression: {
                choicesMade: 0,
                questsCompleted: 0,
                puzzlesSolved: 0
            }
        };
        
        this.initializationAttempts = 0;
        this.maxInitializationAttempts = 3;
        
        // Start initialization
        this.initialize();
    }
    
    async initialize() {
        this.initializationAttempts++;
        console.log(`🔧 Initializing Game Controller (attempt ${this.initializationAttempts})...`);
        
        try {
            // Step 1: Check browser compatibility
            if (!this.checkBrowserCompatibility()) {
                throw new Error('Browser compatibility check failed');
            }
            
            // Step 2: Load character data
            await this.loadCharacterData();
            
            // Step 3: Initialize story system
            await this.initializeStorySystem();
            
            // Step 4: Initialize UI system
            await this.initializeUISystem();
            
            // Step 5: Start game
            this.startGame();
            
            this.isInitialized = true;
            console.log('✅ Game Controller initialized successfully');
            
        } catch (error) {
            console.error('❌ Game Controller initialization failed:', error);
            
            if (this.initializationAttempts < this.maxInitializationAttempts) {
                console.log('🔄 Retrying initialization...');
                setTimeout(() => this.initialize(), 1000);
            } else {
                this.showFallbackMode(error);
            }
        }
    }
    
    checkBrowserCompatibility() {
        const requiredFeatures = [
            'localStorage',
            'JSON',
            'Promise',
            'addEventListener'
        ];
        
        for (const feature of requiredFeatures) {
            if (typeof window[feature] === 'undefined' && typeof globalThis[feature] === 'undefined') {
                console.error('Missing required feature:', feature);
                return false;
            }
        }
        
        return true;
    }
    
    async loadCharacterData() {
        console.log('📱 Loading character data...');
        
        // Try URL parameters first (from character creation)
        const urlParams = new URLSearchParams(window.location.search);
        const nakshatra = urlParams.get('nakshatra');
        const guna1 = urlParams.get('guna1');
        const pada = urlParams.get('pada');
        const guna3 = urlParams.get('guna3');
        
        if (nakshatra) {
            this.gameState.playerProfile = {
                nakshatra: this.getNakshatraName(parseInt(nakshatra)),
                nakshatraNumber: parseInt(nakshatra),
                guna1: guna1,
                pada: pada,
                guna3: guna3,
                attributes: {
                    wisdom: 2,
                    compassion: 2,
                    spiritual_insight: 2,
                    determination: 2,
                    detachment: 2
                }
            };
            
            console.log('✅ Character data loaded from URL:', this.gameState.playerProfile);
            return;
        }
        
        // Try localStorage
        try {
            const savedData = localStorage.getItem('samsaraSaga_workingGame');
            if (savedData) {
                const parsed = JSON.parse(savedData);
                this.gameState = { ...this.gameState, ...parsed };
                console.log('✅ Character data loaded from save');
                return;
            }
        } catch (error) {
            console.warn('Failed to load from localStorage:', error);
        }
        
        // Default fallback character
        this.gameState.playerProfile = {
            nakshatra: 'Seeker',
            attributes: {
                wisdom: 2,
                compassion: 2,
                spiritual_insight: 2,
                determination: 2,
                detachment: 2
            }
        };
        
        console.log('ℹ️ Using default character profile');
    }
    
    getNakshatraName(number) {
        const names = {
            1: 'Ashwini', 2: 'Bharani', 3: 'Krittika', 4: 'Rohini', 5: 'Mrigashira',
            6: 'Ardra', 7: 'Punarvasu', 8: 'Pushya', 9: 'Ashlesha', 10: 'Magha',
            11: 'Purva Phalguni', 12: 'Uttara Phalguni', 13: 'Hasta', 14: 'Chitra',
            15: 'Swati', 16: 'Vishakha', 17: 'Anuradha', 18: 'Jyeshtha', 19: 'Mula',
            20: 'Purva Ashadha', 21: 'Uttara Ashadha', 22: 'Shravana', 23: 'Dhanishta',
            24: 'Shatabhisha', 25: 'Purva Bhadrapada', 26: 'Uttara Bhadrapada', 27: 'Revati'
        };
        return names[number] || 'Seeker';
    }
    
    async initializeStorySystem() {
        console.log('📚 Initializing story system...');

        // Prefer Kashi Khanda data if present
        if (window.ACT1_STORY_DATA && (window.ACT1_STORY_DATA['JOURNEY_START'] || window.ACT1_STORY_DATA.JOURNEY_START)) {
            this.currentSystem = new this.BasicStorySystem(window.ACT1_STORY_DATA, 'JOURNEY_START');
            console.log('✅ Using Kashi Khanda Act I data (JOURNEY_START)');
            return;
        }

        // Then try fixed legacy system
        if (window.FixedACT1StorySystem) {
            this.currentSystem = new window.FixedACT1StorySystem();
            console.log('✅ Using Fixed ACT1 Story System');
            return;
        }

        // Enhanced story data
        if (window.ENHANCED_ACT1_STORY_DATA) {
            this.currentSystem = new this.BasicStorySystem(window.ENHANCED_ACT1_STORY_DATA);
            console.log('✅ Using Enhanced ACT1 Story Data with basic system');
            return;
        }

        // Legacy story data (no explicit start)
        if (window.ACT1_STORY_DATA) {
            this.currentSystem = new this.BasicStorySystem(window.ACT1_STORY_DATA);
            console.log('✅ Using Legacy ACT1 Story Data with basic system');
            return;
        }

        // Final fallback - create minimal story system
        this.currentSystem = new this.MinimalStorySystem();
        console.log('ℹ️ Using minimal fallback story system');
    }
    
    async initializeUISystem() {
        console.log('🎨 Initializing UI system...');
        
        // Try to use existing CinematicUISystem
        if (window.CinematicUISystem && this.currentSystem) {
            try {
                this.uiSystem = new window.CinematicUISystem(this.currentSystem);
                console.log('✅ Using Cinematic UI System');
                return;
            } catch (error) {
                console.warn('Failed to initialize CinematicUISystem:', error);
            }
        }
        
        // Fallback to our built-in UI system
        this.uiSystem = new this.BasicUISystem();
        console.log('✅ Using basic fallback UI system');
    }
    
    startGame() {
        console.log('🚀 Starting game...');
        
        // Hide loading screen if it exists
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        
        // Set up UI
        this.setupGameUI();
        
        // Load first scene
        this.loadCurrentScene();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Show welcome message
        this.showNotification('Welcome to your spiritual journey!', 'success');
        
        console.log('✅ Game started successfully');
    }
    
    setupGameUI() {
        // Create or update game container
        let gameContainer = document.getElementById('game-container');
        if (!gameContainer) {
            gameContainer = document.createElement('div');
            gameContainer.id = 'game-container';
            document.body.appendChild(gameContainer);
        }
        
        gameContainer.innerHTML = `
            <div class="working-game-ui">
                <!-- Header -->
                <header class="game-header">
                    <div class="title-section">
                        <h1>Samsara Saga</h1>
                        <div class="subtitle">Act 1: The Awakening</div>
                    </div>
                    <div class="character-info">
                        <div class="character-name">${this.gameState.playerProfile?.nakshatra || 'Seeker'}</div>
                        <div class="character-attributes">
                            ${Object.entries(this.gameState.playerProfile?.attributes || {}).map(([attr, value]) =>
                                `<span class="attribute" data-attribute="${attr}">${this.getAttributeIcon(attr)} ${value}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <button class="action-btn journal-open-btn" id="journal-btn">📖 Journal</button>
                </header>

                <!-- Main Content -->
                <main class="game-content">
                    <section class="scene-section">
                        <div class="scene-display">
                            <div class="scene-header">
                                <h2 class="scene-title">Loading...</h2>
                                <div class="scene-subtitle"></div>
                            </div>
                            <div class="scene-text">
                                <p>Preparing your spiritual journey...</p>
                            </div>
                            <div class="atmospheric-description"></div>
                        </div>
                    </section>

                    <aside class="choices-section">
                        <h3>Choose your path:</h3>
                        <div class="choices-list">
                            <!-- Choices will be populated here -->
                        </div>
                    </aside>
                </main>

                <!-- Footer Actions -->
                <footer class="game-footer">
                    <div class="game-actions">
                        <button class="action-btn meditation-btn is-hidden" id="meditation-btn">
                            🧘 Meditate
                        </button>
                        <button class="action-btn save-btn" id="save-btn">
                            💾 Save Progress
                        </button>
                        <button class="action-btn status-btn" id="status-btn">
                            📊 View Status
                        </button>
                    </div>
                </footer>

                <!-- Notifications -->
                <div class="notifications-container" id="notifications"></div>

                <!-- Status Modal -->
                <div class="modal is-hidden" id="status-modal">
                    <div class="modal-content">
                        <h3>Character Status</h3>
                        <div class="status-content"></div>
                        <button class="close-modal">Close</button>
                    </div>
                </div>

                <!-- Journal Modal -->
                <div class="modal is-hidden" id="journal-modal">
                    <div class="modal-content journal-content">
                        <div class="journal-header">
                            <h3>Field Journal</h3>
                            <button class="close-modal">Close</button>
                        </div>
                        <div class="journal-tabs">
                            <button class="journal-tab active" data-tab="profile">Profile</button>
                            <button class="journal-tab" data-tab="objectives">Objectives</button>
                            <button class="journal-tab" data-tab="clues">Clues & Notes</button>
                            <button class="journal-tab" data-tab="inventory">Inventory</button>
                        </div>
                        <div class="journal-panels">
                            <div class="journal-panel active" id="journal-profile"></div>
                            <div class="journal-panel" id="journal-objectives"></div>
                            <div class="journal-panel" id="journal-clues"></div>
                            <div class="journal-panel" id="journal-inventory"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Apply styles
        this.applyGameStyles();
    }
    
    applyGameStyles() {
        // Create or update style element
        let styleElement = document.getElementById('working-game-styles');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'working-game-styles';
            document.head.appendChild(styleElement);
        }
        
        styleElement.textContent = `
            html, body { height: 100%; }
            body { overflow: hidden; }
            .is-hidden { display: none !important; }

            .working-game-ui {
                height: 100vh;
                background: linear-gradient(135deg, #0a0908 0%, #1a1817 50%, #2a2827 100%);
                color: #c5c1b9;
                font-family: 'Georgia', serif;
                line-height: 1.6;
                display: flex;
                flex-direction: column;
            }

            .game-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 2rem;
                background: rgba(224, 150, 88, 0.1);
                border-bottom: 2px solid rgba(224, 150, 88, 0.3);
                flex: 0 0 auto;
            }

            .title-section h1 {
                font-size: 2rem;
                color: #e09658;
                margin: 0;
                text-shadow: 0 0 10px rgba(224, 150, 88, 0.5);
            }

            .subtitle {
                color: #a97142;
                font-style: italic;
            }

            .character-name {
                font-size: 1.2rem;
                font-weight: bold;
                color: #e09658;
            }

            .character-attributes {
                display: flex;
                gap: 1rem;
                margin-top: 0.5rem;
                flex-wrap: wrap;
                justify-content: flex-end;
            }

            .attribute {
                background: rgba(224, 150, 88, 0.2);
                padding: 0.25rem 0.5rem;
                border-radius: 15px;
                font-size: 0.9rem;
                border: 1px solid rgba(224, 150, 88, 0.3);
            }

            .game-content {
                flex: 1 1 auto;
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: 1.5rem;
                padding: 2rem;
                max-width: 1200px;
                width: 100%;
                margin: 0 auto;
                box-sizing: border-box;
            }

            .scene-section, .choices-section { min-height: 0; }

            .scene-display {
                background: rgba(26, 24, 23, 0.8);
                padding: 2rem;
                border-radius: 15px;
                border: 1px solid rgba(224, 150, 88, 0.2);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                height: 100%;
                overflow-y: auto;
            }

            .scene-title {
                font-size: 2rem;
                color: #e09658;
                margin-bottom: 0.5rem;
                text-shadow: 0 0 8px rgba(224, 150, 88, 0.4);
            }

            .scene-subtitle {
                font-style: italic;
                color: #a97142;
                margin-bottom: 1rem;
            }

            .scene-text {
                font-size: 1.1rem;
                margin-bottom: 1rem;
                line-height: 1.8;
            }

            .atmospheric-description {
                font-style: italic;
                color: #8a7a6a;
                padding: 1rem;
                background: rgba(224, 150, 88, 0.05);
                border-left: 3px solid #e09658;
                margin-top: 0.5rem;
            }

            .choices-section {
                display: flex;
                flex-direction: column;
            }

            .choices-section h3 {
                color: #e09658;
                margin: 0 0 0.75rem;
                text-align: center;
            }

            .choices-list {
                flex: 1 1 auto;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .choice-option {
                background: linear-gradient(145deg, rgba(26, 24, 23, 0.8), rgba(42, 40, 39, 0.6));
                border: 2px solid rgba(224, 150, 88, 0.3);
                border-radius: 10px;
                padding: 1.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .choice-option:hover {
                border-color: #e09658;
                background: linear-gradient(145deg, rgba(224, 150, 88, 0.1), rgba(26, 24, 23, 0.9));
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(224, 150, 88, 0.2);
            }

            .choice-option:active { transform: translateY(0); }

            .choice-text { font-size: 1.1rem; margin-bottom: 0.5rem; }

            .choice-theme { font-size: 0.9rem; color: #a97142; font-style: italic; }

            .game-footer {
                padding: 0.75rem 2rem;
                background: rgba(224, 150, 88, 0.08);
                border-top: 2px solid rgba(224, 150, 88, 0.3);
                flex: 0 0 auto;
            }

            .game-actions {
                display: flex;
                justify-content: center;
                gap: 1rem;
            }

            .action-btn {
                background: linear-gradient(145deg, #e09658, #a97142);
                border: none;
                border-radius: 25px;
                padding: 0.75rem 1.5rem;
                color: #0a0908;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 1rem;
            }

            .action-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 15px rgba(224, 150, 88, 0.4);
            }

            .notifications-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
            }

            .notification {
                background: rgba(224, 150, 88, 0.9);
                color: #0a0908;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                margin-bottom: 0.5rem;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                animation: slideIn 0.3s ease;
            }
            .notification.success { background: rgba(76, 175, 80, 0.9); }
            .notification.warning { background: rgba(255, 193, 7, 0.9); }
            .notification.error { background: rgba(244, 67, 54, 0.9); color: white; }

            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }

            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            }

            .modal-content {
                background: #1a1817;
                padding: 2rem;
                border-radius: 15px;
                border: 2px solid #e09658;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
            }

            .modal-content h3 { color: #e09658; margin-bottom: 1rem; text-align: center; }

            .close-modal {
                background: #e09658;
                border: none;
                border-radius: 5px;
                padding: 0.5rem 1rem;
                color: #0a0908;
                cursor: pointer;
                margin-top: 1rem;
                width: 100%;
                font-weight: bold;
            }

            @media (max-width: 1024px) {
                .game-content { grid-template-columns: 1.5fr 1fr; }
            }
            @media (max-width: 768px) {
                .game-header { flex-direction: column; gap: 1rem; text-align: center; }
                .character-attributes { justify-content: center; }
                .game-content { padding: 1rem; grid-template-columns: 1fr; grid-auto-rows: 1fr; }
                .choices-section { order: 2; }
                .scene-section { order: 1; }
                .game-actions { flex-direction: column; align-items: center; }
            }
        `;
        let extra = document.getElementById('working-game-styles-ux');
        if (!extra) { extra = document.createElement('style'); extra.id = 'working-game-styles-ux'; document.head.appendChild(extra); }
        extra.textContent = `
            .journal-open-btn { margin-left: 1rem; }
            #journal-modal .journal-content { max-width: 800px; width: 95%; }
            .journal-header { display:flex; justify-content: space-between; align-items:center; margin-bottom: .5rem; }
            .journal-tabs { display:flex; gap:.5rem; margin-bottom:.5rem; }
            .journal-tab { background: rgba(224,150,88,.15); border:1px solid rgba(224,150,88,.4); color:#e09658; padding:.4rem .8rem; border-radius:6px; cursor:pointer; }
            .journal-tab.active { background: rgba(224,150,88,.35); }
            .journal-panels { background: rgba(26,24,23,.6); border:1px solid rgba(224,150,88,.25); border-radius:8px; padding:1rem; max-height:60vh; overflow:auto; }
            .journal-panel { display:none; }
            .journal-panel.active { display:block; }
            .ritual-cipher { background: radial-gradient(circle at 50% 50%, rgba(99,180,209,0.15), transparent 60%); border:1px solid rgba(224,150,88,.3); border-radius:12px; padding:1rem; margin-bottom:1rem; position:relative; min-height:220px; }
            .bowl { width:260px; height:160px; border-radius:50%/60% 60% 40% 40%; background: radial-gradient(ellipse at center, rgba(224,150,88,.15), rgba(26,24,23,.6)); border:1px solid rgba(224,150,88,.4); margin:0 auto; position:relative; overflow:hidden; }
            .petal { width:24px; height:24px; border-radius:50% 50% 0 50%; transform: rotate(45deg); background:#ffc58f; position:absolute; left:50%; top:15%; cursor:grab; box-shadow:0 0 8px rgba(224,150,88,.6); }
            .rc-instructions { text-align:center; color:#a97142; margin-top:.5rem; }
            .torch-area { position:relative; height:220px; border:1px solid rgba(224,150,88,.3); border-radius:10px; overflow:hidden; background:#0d0b08; margin-bottom:1rem; }
            .torch-reveal { position:absolute; inset:0; background: radial-gradient(120px 120px at var(--x,50%) var(--y,50%), transparent 0%, rgba(0,0,0,.92) 60%); pointer-events:none; }
            .torch-etch { position:absolute; inset:0; background: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%2280%22 stroke=%22%23e09658%22 stroke-width=%221%22 fill=%22none%22/%3E%3C/svg%3E') center/contain no-repeat; opacity:.0; transition: opacity .3s; }
            .torch-etch.visible { opacity:.35; }
            .rings { display:flex; justify-content:center; gap:.5rem; margin:.5rem 0; }
            .ring { width:90px; height:90px; border:2px dashed rgba(224,150,88,.5); border-radius:50%; display:flex; align-items:center; justify-content:center; color:#e09658; cursor:pointer; transition: transform .2s; }
            .heads { display:flex; gap:.5rem; justify-content:center; margin:.5rem 0; }
            .head { padding:.6rem 1rem; border:1px solid rgba(224,150,88,.4); border-radius:8px; cursor:pointer; color:#e09658; }
            .head.active { background: rgba(224,150,88,.2); }
            .dravya-checklist { background: rgba(26,24,23,.6); border:1px solid rgba(224,150,88,.25); border-radius:10px; padding: .75rem 1rem; margin-bottom:1rem; }
            .dravya-list { display:grid; grid-template-columns: repeat(3,1fr); gap:.4rem .8rem; }
            .dravya-item { color:#c5c1b9; }
            .dravya-item.done { color:#81c784; }
            .glitch-overlay { position:fixed; inset:0; background:rgba(0,20,0,.95); color:#00ff88; font-family: monospace; z-index:5000; display:flex; align-items:center; justify-content:center; opacity:0; pointer-events:none; transition: opacity .1s; }
            .glitch-overlay.active { opacity:1; }
        `;
    }

    getAttributeIcon(attribute) {
        const icons = {
            wisdom: '🧠',
            compassion: '💝',
            spiritual_insight: '👁️',
            determination: '💪',
            detachment: '🕊️'
        };
        return icons[attribute] || '✨';
    }
    
    loadCurrentScene() {
        if (!this.currentSystem) {
            console.error('No story system available');
            return;
        }
        
        const scene = this.currentSystem.getCurrentScene ? 
            this.currentSystem.getCurrentScene() : 
            this.currentSystem.getScene(this.gameState.currentScene);
        
        if (!scene) {
            console.error('Scene not found:', this.gameState.currentScene);
            this.showFallbackScene();
            return;
        }
        
        this.displayScene(scene);
    }
    
    displayScene(scene) {
        // Update scene display
        const titleElement = document.querySelector('.scene-title');
        const subtitleElement = document.querySelector('.scene-subtitle');
        const textElement = document.querySelector('.scene-text');
        const atmosphericElement = document.querySelector('.atmospheric-description');
        
        if (titleElement) titleElement.textContent = scene.title || 'Untitled Scene';
        if (subtitleElement) subtitleElement.textContent = scene.subtitle || '';
        if (textElement) textElement.innerHTML = this.formatText(scene.text || 'No description available.');
        if (atmosphericElement) {
            if (scene.atmosphericDescription) {
                atmosphericElement.innerHTML = `<em>${scene.atmosphericDescription}</em>`;
                atmosphericElement.style.display = 'block';
            } else {
                atmosphericElement.style.display = 'none';
            }
        }
        
        // Load choices
        this.loadChoices(scene.choices || []);

        // Inject scene-specific UX
        this.injectSceneUX(this.gameState.currentScene, scene);
        if (this.gameState.currentScene === 'WARDEN_MONOLOGUE') { this.showGlitchEffect(); }

        // Handle meditation
        const meditationBtn = document.getElementById('meditation-btn');
        if (meditationBtn) {
            const available = !!(scene.meditation && scene.meditation.available);
            meditationBtn.classList.toggle('is-hidden', !available);
        }
        
        console.log('✅ Scene loaded:', scene.title);
    }
    
    formatText(text) {
        if (Array.isArray(text)) {
            return text.map(p => `<p>${p}</p>`).join('');
        }
        
        // Convert plain text to paragraphs
        return text.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
    }
    
    loadChoices(choices) {
        const choicesContainer = document.querySelector('.choices-list');
        if (!choicesContainer) return;
        
        choicesContainer.innerHTML = '';
        
        // Filter choices based on requirements
        const availableChoices = choices.filter(choice => this.checkChoiceRequirements(choice));
        
        if (availableChoices.length === 0) {
            choicesContainer.innerHTML = '<p style="text-align: center; font-style: italic; color: #8a7a6a;">No choices available. The story continues...</p>';
            return;
        }
        
        availableChoices.forEach((choice, index) => {
            const choiceElement = document.createElement('div');
            choiceElement.className = 'choice-option';
            choiceElement.innerHTML = `
                <div class="choice-text">${choice.text}</div>
                ${choice.philosophicalTheme ? `<div class="choice-theme">Theme: ${choice.philosophicalTheme}</div>` : ''}
            `;
            
            choiceElement.addEventListener('click', () => this.selectChoice(choice));
            choicesContainer.appendChild(choiceElement);
        });
    }
    
    checkChoiceRequirements(choice) {
        if (!choice.requirements) return true;
        const req = choice.requirements;

        // Check nested attribute requirements
        if (req.attributes) {
            for (const [attr, minValue] of Object.entries(req.attributes)) {
                if ((this.gameState.playerProfile?.attributes?.[attr] || 0) < minValue) {
                    return false;
                }
            }
        }

        // Check flag requirements
        if (req.flags) {
            for (const flag of req.flags) {
                if (!this.gameState.worldState?.[flag]) {
                    return false;
                }
            }
        }

        // Check top-level numeric requirements (e.g., spiritual_insight: 3)
        for (const [key, value] of Object.entries(req)) {
            if (key !== 'attributes' && key !== 'flags') {
                if ((this.gameState.playerProfile?.attributes?.[key] || 0) < value) {
                    return false;
                }
            }
        }

        return true;
    }
    
    selectChoice(choice) {
        console.log('🎯 Choice selected:', choice.text);
        
        // Apply choice effects
        if (choice.effects) {
            this.applyChoiceEffects(choice.effects);
        }
        
        // Track choice
        this.gameState.progression.choicesMade++;
        
        // Navigate to next scene
        if (choice.nextScene) {
            this.gameState.currentScene = choice.nextScene;

            // Update story system if possible
            if (this.currentSystem && this.currentSystem.currentScene !== undefined) {
                this.currentSystem.currentScene = choice.nextScene;
            }

            // Persist world flags if provided
            if (choice.worldStateTriggers) {
                this.gameState.worldState = { ...this.gameState.worldState, ...choice.worldStateTriggers };
            }
            
            // Load new scene
            setTimeout(() => {
                this.loadCurrentScene();
            }, 500);
        }
        
        // Handle special actions
        if (choice.nextAct) {
            this.showNotification(`Advancing to Act ${choice.nextAct}!`, 'success');
            // Handle act transition
            this.gameState.currentAct = choice.nextAct;
        }
        
        // Save progress
        this.saveProgress();
        
        // Show feedback
        this.showChoiceFeedback(choice);
    }
    
    applyChoiceEffects(effects) {
        if (!effects) return;
        
        // Apply attribute changes
        if (effects.attributes) {
            for (const [attr, value] of Object.entries(effects.attributes)) {
                if (attr === 'all') {
                    // Apply to all attributes
                    for (const key of Object.keys(this.gameState.playerProfile.attributes)) {
                        this.gameState.playerProfile.attributes[key] += value;
                    }
                } else if (this.gameState.playerProfile.attributes[attr] !== undefined) {
                    this.gameState.playerProfile.attributes[attr] += value;
                    
                    // Show attribute gain notification
                    this.showNotification(`${this.getAttributeName(attr)} increased by ${value}!`, 'success');
                }
            }
            
            // Update UI
            this.updateCharacterDisplay();
        }
        
        // Apply flags
        if (effects.flags) {
            Object.assign(this.gameState.worldState, effects.flags);
        }
        
        // Apply inventory changes
        if (effects.inventory) {
            if (!this.gameState.inventory) this.gameState.inventory = [];
            if (Array.isArray(effects.inventory)) {
                this.gameState.inventory.push(...effects.inventory);
                effects.inventory.forEach(item => this.showNotification(`Received: ${item}`, 'success'));
            } else {
                const { add = [], remove = [] } = effects.inventory;
                if (add.length) {
                    this.gameState.inventory.push(...add);
                    add.forEach(item => this.showNotification(`Received: ${item}`, 'success'));
                }
                if (remove.length) {
                    remove.forEach(item => {
                        const idx = this.gameState.inventory.indexOf(item);
                        if (idx !== -1) this.gameState.inventory.splice(idx, 1);
                        this.showNotification(`Used: ${item}`, 'warning');
                    });
                }
            }
        }
        
        // Apply progression changes
        if (effects.progression) {
            Object.assign(this.gameState.progression, effects.progression);
        }
    }
    
    getAttributeName(attr) {
        const names = {
            wisdom: 'Wisdom',
            compassion: 'Compassion',
            spiritual_insight: 'Spiritual Insight',
            determination: 'Determination',
            detachment: 'Detachment'
        };
        return names[attr] || attr;
    }
    
    updateCharacterDisplay() {
        const attributeElements = document.querySelectorAll('.attribute');
        attributeElements.forEach(element => {
            const attr = element.dataset.attribute;
            const value = this.gameState.playerProfile?.attributes?.[attr] || 0;
            element.innerHTML = `${this.getAttributeIcon(attr)} ${value}`;
        });
    }
    
    showChoiceFeedback(choice) {
        // Add visual feedback to the selected choice
        const choiceElements = document.querySelectorAll('.choice-option');
        choiceElements.forEach(element => {
            if (element.querySelector('.choice-text').textContent === choice.text) {
                element.style.background = 'linear-gradient(145deg, rgba(224, 150, 88, 0.3), rgba(169, 113, 66, 0.3))';
                element.style.borderColor = '#e09658';
                
                // Add checkmark
                const checkmark = document.createElement('div');
                checkmark.innerHTML = '✓';
                checkmark.style.position = 'absolute';
                checkmark.style.top = '10px';
                checkmark.style.right = '15px';
                checkmark.style.color = '#e09658';
                checkmark.style.fontSize = '1.5rem';
                checkmark.style.fontWeight = 'bold';
                element.appendChild(checkmark);
            } else {
                element.style.opacity = '0.5';
            }
        });
    }
    
    setupEventListeners() {
        // Save button
        const saveBtn = document.getElementById('save-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                if (this.saveProgress()) {
                    this.showNotification('Progress saved!', 'success');
                } else {
                    this.showNotification('Failed to save progress', 'error');
                }
            });
        }
        
        // Status button
        const statusBtn = document.getElementById('status-btn');
        if (statusBtn) {
            statusBtn.addEventListener('click', () => this.showStatusModal());
        }
        
        // Meditation button
        const meditationBtn = document.getElementById('meditation-btn');
        if (meditationBtn) {
            meditationBtn.addEventListener('click', () => this.performMeditation());
        }
        
        // Modal close buttons
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('close-modal')) {
                const modal = event.target.closest('.modal');
                if (modal) modal.classList.add('is-hidden');
            }
        });
        
        // Auto-save every 30 seconds
        setInterval(() => {
            this.saveProgress();
        }, 30000);
    }
    
    performMeditation() {
        const scene = this.currentSystem?.getCurrentScene?.() || this.currentSystem?.getScene?.(this.gameState.currentScene);
        
        if (scene && scene.meditation && scene.meditation.available) {
            this.applyChoiceEffects(scene.meditation.effects);
            this.showNotification('You enter a state of peaceful meditation...', 'success');
            
            // Visual feedback
            const meditationBtn = document.getElementById('meditation-btn');
            if (meditationBtn) {
                meditationBtn.style.background = 'linear-gradient(145deg, #4caf50, #388e3c)';
                meditationBtn.textContent = '🧘 Meditated ✓';
                setTimeout(() => {
                    meditationBtn.textContent = '🧘 Meditate';
                    meditationBtn.style.background = '';
                }, 3000);
            }
        }
    }
    
    showStatusModal() {
        const modal = document.getElementById('status-modal');
        if (!modal) return;
        
        const content = modal.querySelector('.status-content');
        content.innerHTML = `
            <div class="status-section">
                <h4>Character Attributes</h4>
                ${Object.entries(this.gameState.playerProfile?.attributes || {}).map(([attr, value]) =>
                    `<div>${this.getAttributeName(attr)}: ${value}</div>`
                ).join('')}
            </div>
            
            <div class="status-section">
                <h4>Progress</h4>
                <div>Choices Made: ${this.gameState.progression.choicesMade}</div>
                <div>Quests Completed: ${this.gameState.progression.questsCompleted}</div>
                <div>Puzzles Solved: ${this.gameState.progression.puzzlesSolved}</div>
            </div>
            
            <div class="status-section">
                <h4>Current Location</h4>
                <div>Scene: ${this.gameState.currentScene}</div>
                <div>Act: ${this.gameState.currentAct}</div>
            </div>
        `;
        
        modal.classList.remove('is-hidden');
    }
    
    saveProgress() {
        try {
            const saveData = {
                ...this.gameState,
                timestamp: Date.now()
            };
            
            localStorage.setItem('samsaraSaga_workingGame', JSON.stringify(saveData));
            
            // Also update story system save if available
            if (this.currentSystem && this.currentSystem.saveProgress) {
                this.currentSystem.saveProgress();
            }
            
            return true;
        } catch (error) {
            console.error('Failed to save progress:', error);
            return false;
        }
    }
    
    showFallbackScene() {
        this.displayScene({
            title: 'Your Journey Continues',
            text: 'You find yourself at a crossroads in your spiritual journey. Though the path ahead is unclear, your determination remains strong.',
            choices: [
                {
                    id: 'restart',
                    text: '🔄 Return to the beginning of your journey',
                    nextScene: 'AWAKENING_PROLOGUE'
                },
                {
                    id: 'explore',
                    text: '🌟 Continue exploring with courage',
                    nextScene: 'AWAKENING_PROLOGUE'
                }
            ]
        });
    }
    
    showFallbackMode(error) {
        console.error('Entering fallback mode due to error:', error);
        
        // Create minimal fallback UI
        document.body.innerHTML = `
            <div style="padding: 2rem; text-align: center; color: #c5c1b9; background: #0a0908; min-height: 100vh; font-family: Georgia, serif;">
                <h1 style="color: #e09658; margin-bottom: 2rem;">Samsara Saga - Fallback Mode</h1>
                <p style="margin-bottom: 2rem; font-size: 1.1rem;">
                    We encountered some technical difficulties, but your spiritual journey can still continue.
                </p>
                <div style="max-width: 600px; margin: 0 auto; text-align: left; background: rgba(26, 24, 23, 0.8); padding: 2rem; border-radius: 10px; border: 1px solid rgba(224, 150, 88, 0.3);">
                    <h2 style="color: #e09658;">Your Journey Begins</h2>
                    <p>In the peaceful village of Dharmapura, you begin to understand the deeper mysteries of existence. The path of spiritual awakening lies before you.</p>
                    <div style="margin-top: 2rem;">
                        <button onclick="location.reload()" style="background: #e09658; border: none; padding: 1rem 2rem; border-radius: 5px; color: #0a0908; font-weight: bold; cursor: pointer; margin-right: 1rem;">
                            🔄 Try Again
                        </button>
                        <button onclick="window.location.href='index.html'" style="background: #a97142; border: none; padding: 1rem 2rem; border-radius: 5px; color: #0a0908; font-weight: bold; cursor: pointer;">
                            ���� Return Home
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    populateJournal() {
        const prof = document.getElementById('journal-profile');
        const obj = document.getElementById('journal-objectives');
        const clues = document.getElementById('journal-clues');
        const inv = document.getElementById('journal-inventory');
        if (prof) {
            const p = this.gameState.playerProfile || {}; const a = p.attributes || {};
            prof.innerHTML = `<div><strong>Nakshatra:</strong> ${p.nakshatra || 'Unknown'}</div>
                <div><strong>Guna:</strong> ${p.guna1 || '-'} / ${p.guna3 || '-'}</div>
                <div><strong>Pada:</strong> ${p.pada || '-'}</div>
                <hr/><div><strong>Attributes</strong></div>
                ${Object.entries(a).map(([k,v])=>`<div>${this.getAttributeName(k)}: ${v}</div>`).join('')}`;
        }
        if (obj) {
            obj.innerHTML = `<ul>
                <li>${this.gameState.worldState.ritual_signal_sent ? '✓' : '○'} Decode the ritual at the Ghat</li>
                <li>${this.gameState.worldState.has_pearl ? '✓' : '○'} Secure the Pearl Earring</li>
                <li>${(this.gameState.worldState.dravya_prithvi && this.gameState.worldState.dravya_manas) ? '✓' : '○'} Awaken the Nine Dravyas</li>
            </ul>`;
        }
        if (clues) {
            const flags = Object.keys(this.gameState.worldState||{}).filter(k=>this.gameState.worldState[k]);
            clues.innerHTML = flags.length ? `<ul>${flags.map(f=>`<li>${f.replace(/_/g,' ')}</li>`).join('')}</ul>` : '<em>No clues recorded yet.</em>';
        }
        if (inv) {
            const items = this.gameState.inventory || [];
            inv.innerHTML = items.length ? `<ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul>` : '<em>Inventory empty.</em>';
        }
    }

    injectSceneUX(sceneId, scene){
        const choicesContainer = document.querySelector('.choices-list');
        if (!choicesContainer) return;

        if (sceneId === 'RITUAL_CIPHER') {
            choicesContainer.innerHTML = '';
            const wrap = document.createElement('div');
            wrap.className = 'ritual-cipher';
            wrap.innerHTML = `<div class=\"bowl\"><div class=\"petal\" id=\"petal\" style=\"left:48%; top:18%\"></div></div><div class=\"rc-instructions\">Drag the petal: Lower → Crowd → Center</div>`;
            choicesContainer.parentElement.prepend(wrap);
            const bowl = wrap.querySelector('.bowl');
            const petal = wrap.querySelector('#petal');
            let seq=[]; let dragging=false; let offset={x:0,y:0};
            petal.addEventListener('pointerdown',e=>{ dragging=true; petal.setPointerCapture(e.pointerId); offset.x=e.offsetX; offset.y=e.offsetY; });
            petal.addEventListener('pointermove',e=>{ if(!dragging) return; const r=bowl.getBoundingClientRect(); const x=e.clientX - r.left - offset.x; const y=e.clientY - r.top - offset.y; petal.style.left = Math.max(0, Math.min(r.width-24, x)) + 'px'; petal.style.top = Math.max(0, Math.min(r.height-24, y)) + 'px'; const relY = (y/r.height); const relX = (x/r.width); if (relY>0.7 && !seq.includes('down')) seq.push('down'); if (relX>0.65 && !seq.includes('crowd')) seq.push('crowd'); if (Math.abs(relX-0.5)<0.1 && Math.abs(relY-0.5)<0.1 && !seq.includes('center')) seq.push('center'); if (seq.length>=3){ const ok = seq.join('-')==='down-crowd-center'; if (ok){ const ch=(scene.choices||[]).find(c=>c.id==='send_signal')||scene.choices?.[0]; if (ch) this.selectChoice(ch); } } });
            petal.addEventListener('pointerup',()=>{ dragging=false; });
            return;
        }

        if (sceneId === 'NYAYA_PERCEPTION'){
            const box=document.createElement('div'); box.className='torch-area';
            box.innerHTML = `<div class=\"torch-etch\" id=\"etch\"></div><div class=\"torch-reveal\" id=\"reveal\"></div>`;
            choicesContainer.parentElement.prepend(box);
            const reveal=box.querySelector('#reveal'); const etch=box.querySelector('#etch'); let moved=0;
            box.addEventListener('pointermove',(e)=>{ const r=box.getBoundingClientRect(); const x=e.clientX - r.left; const y=e.clientY - r.top; reveal.style.setProperty('--x', x+'px'); reveal.style.setProperty('--y', y+'px'); moved++; if (moved>80){ etch.classList.add('visible'); setTimeout(()=>{ const ch= (scene.choices||[])[0]; if (ch) this.selectChoice(ch); },600);} });
            return;
        }

        if (sceneId === 'NYAYA_INFERENCE'){
            const wrap=document.createElement('div'); wrap.innerHTML=`<div style=\"display:flex; gap:.5rem; align-items:center; justify-content:center; margin:.5rem 0;\">\n                <input id=\"inference-input\" placeholder=\"Type SACRED GEOMETRY\" style=\"padding:.5rem 1rem; border-radius:6px; border:1px solid rgba(224,150,88,.4); background:#1a1817; color:#c5c1b9;\"/>\n                <button class=\"action-btn\">Confirm</button>\n            </div>`; choicesContainer.parentElement.prepend(wrap);
            const btn=wrap.querySelector('button'); const inp=wrap.querySelector('#inference-input');
            btn.addEventListener('click',()=>{ if ((inp.value||'').trim().toUpperCase()==='SACRED GEOMETRY'){ const ch=(scene.choices||[])[0]; if (ch) this.selectChoice(ch); } else { inp.classList.add('shake'); setTimeout(()=>inp.classList.remove('shake'),400);} });
            return;
        }

        if (sceneId === 'NYAYA_UPAMANA'){
            const wrap=document.createElement('div'); wrap.innerHTML=`<div class=\"rings\"><div class=\"ring\" id=\"r1\">◯</div><div class=\"ring\" id=\"r2\">◯</div><div class=\"ring\" id=\"r3\">◯</div></div><div style=\"text-align:center; color:#a97142\">Rotate to align 0°, 120°, 240°</div>`; choicesContainer.parentElement.prepend(wrap);
            const rings=[{el:wrap.querySelector('#r1'),v:0},{el:wrap.querySelector('#r2'),v:0},{el:wrap.querySelector('#r3'),v:0}];
            rings.forEach((r,i)=>{ r.el.addEventListener('click',()=>{ r.v=(r.v+30)%360; r.el.style.transform=`rotate(${r.v}deg)`; const ok = rings[0].v%360===0 && rings[1].v%360===120 && rings[2].v%360===240; if (ok){ const ch=(scene.choices||[])[0]; if (ch) this.selectChoice(ch); } }); });
            return;
        }

        if (sceneId === 'NYAYA_SABDA'){
            const wrap=document.createElement('div'); wrap.innerHTML=`<div class=\"heads\"><div class=\"head\" data-id=\"A\">Head A</div><div class=\"head\" data-id=\"B\">Head B</div><div class=\"head\" data-id=\"C\">Head C</div></div><div style=\"text-align:center; color:#a97142\">Click a head, then click again to confirm.</div>`; choicesContainer.parentElement.prepend(wrap);
            let last=null; wrap.querySelectorAll('.head').forEach(h=>{ h.addEventListener('click',()=>{ wrap.querySelectorAll('.head').forEach(x=>x.classList.remove('active')); h.classList.add('active'); if (last===h.dataset.id){ const ch=(scene.choices||[])[0]; if (ch) this.selectChoice(ch); } last=h.dataset.id; }); });
            return;
        }

        if (sceneId==='VAISESIKA_MACHINE' || sceneId.startsWith('DRAVYA_') || sceneId==='DRAVYA_CHECK'){
            this.renderDravyaChecklist();
        }
    }

    renderDravyaChecklist(){
        const host = document.querySelector('.choices-section'); if (!host) return;
        const box=document.createElement('div'); box.className='dravya-checklist';
        const f=this.gameState.worldState||{};
        const items=[["prithvi","Earth"],["ap","Water"],["tejas","Fire"],["vayu","Air"],["akasha","Ether"],["kala","Time"],["dik","Direction"],["atman","Atman"],["manas","Manas"]];
        box.innerHTML = `<div style=\"color:#e09658; font-weight:bold; margin-bottom:.4rem;\">Nine Dravyas</div><div class=\"dravya-list\">${items.map(([k,n])=>`<div class=\"dravya-item ${f['dravya_'+k]?'done':''}\">${f['dravya_'+k]?'✓':'○'} ${n}</div>`).join('')}</div>`;
        host.prepend(box);
    }

    showGlitchEffect(){
        const o=document.createElement('div'); o.className='glitch-overlay'; o.textContent='01100110 01101111 01110010 00100000 01100001 00100000 01101110 01100001 01101110 01101111 01110011 01100101 01100011 01101111 01101110 01100100';
        document.body.appendChild(o); requestAnimationFrame(()=>o.classList.add('active')); setTimeout(()=>{ o.classList.remove('active'); setTimeout(()=>o.remove(),150); },250);
    }

    showNotification(message, type = 'info', duration = 4000) {
        const container = document.getElementById('notifications');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        container.appendChild(notification);
        
        // Auto-remove after duration
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, duration);
    }
    
    // ===== FALLBACK STORY SYSTEMS =====
    
    BasicStorySystem = class {
        constructor(storyData, startScene) {
            this.storyData = storyData;
            this.currentScene = startScene || (storyData && (storyData['JOURNEY_START'] || storyData.JOURNEY_START) ? 'JOURNEY_START' : 'AWAKENING_PROLOGUE');
        }
        
        getCurrentScene() {
            return this.storyData[this.currentScene] || null;
        }
        
        getScene(sceneId) {
            return this.storyData[sceneId] || null;
        }
    };
    
    MinimalStorySystem = class {
        constructor() {
            this.currentScene = 'AWAKENING_PROLOGUE';
            this.storyData = {
                'AWAKENING_PROLOGUE': {
                    title: 'The Awakening',
                    text: 'Your spiritual journey begins in the peaceful village of Dharmapura. Though the full story system is still loading, your path of discovery starts now.',
                    choices: [
                        {
                            id: 'begin',
                            text: '🌟 Begin your spiritual journey',
                            nextScene: 'AWAKENING_PROLOGUE'
                        }
                    ]
                }
            };
        }
        
        getCurrentScene() {
            return this.storyData[this.currentScene];
        }
        
        getScene(sceneId) {
            return this.storyData[sceneId] || this.storyData['AWAKENING_PROLOGUE'];
        }
    };
    
    BasicUISystem = class {
        constructor() {
            console.log('✅ Basic UI System initialized');
        }
        
        loadScene(scene) {
            // Basic implementation - the main controller handles UI
            console.log('📖 Basic UI loading scene:', scene?.title);
        }
    };
}

// Initialize the working game controller
window.WorkingGameController = WorkingGameController;

console.log('✅ Working Game Controller loaded successfully');

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('🚀 Auto-initializing Working Game Controller...');
            window.workingGameController = new WorkingGameController();
        });
    } else {
        console.log('🚀 Immediately initializing Working Game Controller...');
        window.workingGameController = new WorkingGameController();
    }
}

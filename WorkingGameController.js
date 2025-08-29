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
        
        // Try to use the fixed story system first
        if (window.FixedACT1StorySystem) {
            this.currentSystem = new window.FixedACT1StorySystem();
            console.log('✅ Using Fixed ACT1 Story System');
            return;
        }
        
        // Fallback to enhanced story data
        if (window.ENHANCED_ACT1_STORY_DATA) {
            this.currentSystem = new this.BasicStorySystem(window.ENHANCED_ACT1_STORY_DATA);
            console.log('✅ Using Enhanced ACT1 Story Data with basic system');
            return;
        }
        
        // Fallback to legacy story data
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
                </header>
                
                <!-- Main Content -->
                <main class="game-content">
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
                    
                    <div class="choices-section">
                        <h3>Choose your path:</h3>
                        <div class="choices-list">
                            <!-- Choices will be populated here -->
                        </div>
                    </div>
                    
                    <div class="game-actions">
                        <button class="action-btn meditation-btn" id="meditation-btn" style="display: none;">
                            🧘 Meditate
                        </button>
                        <button class="action-btn save-btn" id="save-btn">
                            💾 Save Progress
                        </button>
                        <button class="action-btn status-btn" id="status-btn">
                            📊 View Status
                        </button>
                    </div>
                </main>
                
                <!-- Notifications -->
                <div class="notifications-container" id="notifications"></div>
                
                <!-- Status Modal -->
                <div class="modal" id="status-modal" style="display: none;">
                    <div class="modal-content">
                        <h3>Character Status</h3>
                        <div class="status-content">
                            <!-- Status info will be populated here -->
                        </div>
                        <button class="close-modal">Close</button>
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
            .working-game-ui {
                min-height: 100vh;
                background: linear-gradient(135deg, #0a0908 0%, #1a1817 50%, #2a2827 100%);
                color: #c5c1b9;
                font-family: 'Georgia', serif;
                line-height: 1.6;
            }
            
            .game-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 2rem;
                background: rgba(224, 150, 88, 0.1);
                border-bottom: 2px solid rgba(224, 150, 88, 0.3);
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
            }
            
            .attribute {
                background: rgba(224, 150, 88, 0.2);
                padding: 0.25rem 0.5rem;
                border-radius: 15px;
                font-size: 0.9rem;
                border: 1px solid rgba(224, 150, 88, 0.3);
            }
            
            .game-content {
                padding: 2rem;
                max-width: 900px;
                margin: 0 auto;
            }
            
            .scene-display {
                background: rgba(26, 24, 23, 0.8);
                padding: 2rem;
                border-radius: 15px;
                margin-bottom: 2rem;
                border: 1px solid rgba(224, 150, 88, 0.2);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
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
                margin-bottom: 1.5rem;
            }
            
            .scene-text {
                font-size: 1.1rem;
                margin-bottom: 1.5rem;
                line-height: 1.8;
            }
            
            .atmospheric-description {
                font-style: italic;
                color: #8a7a6a;
                padding: 1rem;
                background: rgba(224, 150, 88, 0.05);
                border-left: 3px solid #e09658;
                margin-top: 1rem;
            }
            
            .choices-section h3 {
                color: #e09658;
                margin-bottom: 1rem;
                text-align: center;
            }
            
            .choices-list {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-bottom: 2rem;
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
            
            .choice-option:active {
                transform: translateY(0);
            }
            
            .choice-text {
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
            }
            
            .choice-theme {
                font-size: 0.9rem;
                color: #a97142;
                font-style: italic;
            }
            
            .game-actions {
                display: flex;
                justify-content: center;
                gap: 1rem;
                margin-top: 2rem;
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
            
            .notification.success {
                background: rgba(76, 175, 80, 0.9);
            }
            
            .notification.warning {
                background: rgba(255, 193, 7, 0.9);
            }
            
            .notification.error {
                background: rgba(244, 67, 54, 0.9);
                color: white;
            }
            
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
            
            .modal-content h3 {
                color: #e09658;
                margin-bottom: 1rem;
                text-align: center;
            }
            
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
            
            @media (max-width: 768px) {
                .game-header {
                    flex-direction: column;
                    gap: 1rem;
                    text-align: center;
                }
                
                .character-attributes {
                    justify-content: center;
                }
                
                .game-content {
                    padding: 1rem;
                }
                
                .game-actions {
                    flex-direction: column;
                    align-items: center;
                }
            }
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
        
        // Handle meditation
        const meditationBtn = document.getElementById('meditation-btn');
        if (meditationBtn) {
            if (scene.meditation && scene.meditation.available) {
                meditationBtn.style.display = 'block';
            } else {
                meditationBtn.style.display = 'none';
            }
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
        
        // Check if we have the required attributes
        if (choice.requirements.attributes) {
            for (const [attr, minValue] of Object.entries(choice.requirements.attributes)) {
                if ((this.gameState.playerProfile?.attributes?.[attr] || 0) < minValue) {
                    return false;
                }
            }
        }
        
        // Check flags
        if (choice.requirements.flags) {
            for (const flag of choice.requirements.flags) {
                if (!this.gameState.worldState[flag]) {
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
            this.gameState.inventory.push(...effects.inventory);
            
            effects.inventory.forEach(item => {
                this.showNotification(`Received: ${item}`, 'success');
            });
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
                if (modal) modal.style.display = 'none';
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
        
        modal.style.display = 'flex';
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
                            🏠 Return Home
                        </button>
                    </div>
                </div>
            </div>
        `;
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
        constructor(storyData) {
            this.storyData = storyData;
            this.currentScene = 'AWAKENING_PROLOGUE';
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

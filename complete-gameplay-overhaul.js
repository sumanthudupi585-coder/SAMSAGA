/**
 * Complete Gameplay Overhaul Integration
 * Transforms the entire game experience from boring clicking into an engaging
 * spiritual adventure with escape room atmosphere, treasure hunt mechanics,
 * and deep environmental storytelling
 */

class GameplayOverhaulEngine {
    constructor(gameStateManager) {
        this.gameStateManager = gameStateManager;
        this.adventureEngine = new SpiritualAdventureEngine(gameStateManager);
        this.currentLocation = 'DHARMAPURA_SQUARE';
        this.explorationMode = true;
        this.discoveryPoints = 0;
        this.mysteryLevel = 1;
        
        // Escape room and treasure hunt mechanics
        this.hiddenClues = new Map();
        this.treasureMap = new Map();
        this.secretAreas = new Set();
        this.environmentalPuzzles = new Map();
        
        // Enhanced story progression
        this.storyLayers = [];
        this.narrativeBranches = new Map();
        this.philosophicalDiscoveries = [];
        
        // Dynamic content system
        this.contentAdaptation = {
            difficulty: 1,
            philosophical_depth: 1,
            mystery_complexity: 1,
            hidden_content_access: 1
        };
        
        this.init();
    }
    
    init() {
        this.setupGameplayOverhaul();
        this.initializeExplorationSystem();
        this.createTreasureHuntMechanics();
        this.setupEnvironmentalStorytelling();
        this.loadGameProgress();
        this.startEnhancedGameplay();
    }
    
    setupGameplayOverhaul() {
        // Replace the boring UI with an enhanced adventure interface
        this.createEnhancedGameInterface();
        this.setupAdvancedInteractionSystems();
        this.initializeAtmosphericEffects();
        this.createDiscoveryNotificationSystem();
    }

    setupAdvancedInteractionSystems() {
        // Setup advanced interaction mechanics
        console.log('Setting up advanced interaction systems');

        // Enable enhanced mouse and keyboard interactions
        this.setupEnhancedInputHandling();

        // Setup gesture recognition for touch devices
        this.setupGestureRecognition();

        // Initialize voice command system (if supported)
        this.initializeVoiceCommands();

        // Setup accessibility features
        this.setupAccessibilityFeatures();
    }

    initializeAtmosphericEffects() {
        // Initialize atmospheric effect systems
        console.log('Initializing atmospheric effects');

        // Setup particle systems
        this.initializeParticleSystems();

        // Initialize lighting effects
        this.initializeLightingEffects();

        // Setup sound atmosphere
        this.initializeSoundAtmosphere();

        // Initialize weather and environmental effects
        this.initializeEnvironmentalEffects();
    }

    createDiscoveryNotificationSystem() {
        // Create the discovery notification system
        console.log('Creating discovery notification system');

        // Setup notification container if it doesn't exist
        this.setupNotificationContainer();

        // Initialize notification types
        this.initializeNotificationTypes();

        // Setup notification sound effects
        this.setupNotificationSounds();

        // Initialize celebration effects
        this.initializeCelebrationEffects();
    }

    loadGameProgress() {
        // Load saved game progress
        console.log('Loading game progress');

        // Load from localStorage or game state manager
        this.loadFromStorage();

        // Restore player progress
        this.restorePlayerProgress();

        // Apply loaded state to UI
        this.applyLoadedStateToUI();

        // Validate loaded data
        this.validateLoadedData();
    }

    // Helper methods for initialization
    setupEnhancedInputHandling() {
        // Enhanced input handling for better user experience
        this.inputHandling = {
            mouseTracking: true,
            keyboardShortcuts: true,
            multiTouch: true
        };
    }

    setupGestureRecognition() {
        // Setup gesture recognition for touch devices
        this.gestureRecognition = {
            swipeGestures: true,
            pinchZoom: false, // Disabled for UI stability
            tapHold: true
        };
    }

    initializeVoiceCommands() {
        // Initialize voice command system (placeholder)
        this.voiceCommands = {
            enabled: false, // Disabled by default
            commands: []
        };
    }

    setupAccessibilityFeatures() {
        // Setup accessibility features
        this.accessibility = {
            highContrast: false,
            largeText: false,
            reducedMotion: false,
            screenReaderSupport: true
        };
    }

    initializeParticleSystems() {
        // Initialize particle systems
        this.particleSystems = {
            mysticalParticles: true,
            environmentalEffects: true,
            interactionFeedback: true
        };
    }

    initializeLightingEffects() {
        // Initialize lighting effects
        this.lightingEffects = {
            ambientLighting: true,
            dynamicShadows: false, // Performance consideration
            colorTemperature: 'warm'
        };
    }

    initializeSoundAtmosphere() {
        // Initialize sound atmosphere
        this.soundAtmosphere = {
            ambientSounds: true,
            interactionSounds: true,
            musicEnabled: true,
            volume: 0.5
        };
    }

    initializeEnvironmentalEffects() {
        // Initialize environmental effects
        this.environmentalEffects = {
            weatherEffects: false, // Disabled for performance
            seasonalChanges: false,
            timeOfDayEffects: true
        };
    }

    setupNotificationContainer() {
        // Setup notification container
        if (!document.getElementById('notification-container')) {
            const container = document.createElement('div');
            container.id = 'notification-container';
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
    }

    initializeNotificationTypes() {
        // Initialize different notification types
        this.notificationTypes = {
            discovery: { icon: '🌟', duration: 4000 },
            achievement: { icon: '🏆', duration: 5000 },
            insight: { icon: '💡', duration: 6000 },
            error: { icon: '⚠️', duration: 3000 },
            success: { icon: '✅', duration: 3000 }
        };
    }

    setupNotificationSounds() {
        // Setup notification sound effects (placeholder)
        this.notificationSounds = {
            discovery: 'chime',
            achievement: 'fanfare',
            insight: 'gong',
            error: 'error',
            success: 'success'
        };
    }

    initializeCelebrationEffects() {
        // Initialize celebration effects
        this.celebrationEffects = {
            particleBurst: true,
            screenFlash: false, // Accessibility consideration
            confetti: true
        };
    }

    loadFromStorage() {
        // Load game state from localStorage or game state manager
        if (this.gameStateManager && this.gameStateManager.worldState) {
            const savedState = this.gameStateManager.worldState.gameplayOverhaulState;
            if (savedState) {
                this.restoreFromSavedState(savedState);
            }
        }
    }

    restorePlayerProgress() {
        // Restore player progress from saved state
        if (this.gameStateManager) {
            // Restore location
            this.currentLocation = this.gameStateManager.worldState.currentLocation || 'DHARMAPURA_SQUARE';

            // Restore discovery points
            this.discoveryPoints = this.gameStateManager.worldState.discoveryPoints || 0;

            // Restore mystery level
            this.mysteryLevel = this.gameStateManager.worldState.mysteryLevel || 1;
        }
    }

    applyLoadedStateToUI() {
        // Apply loaded state to the UI
        this.updateLocationDisplay = this.updateLocationDisplay || (() => {});
        this.updateDiscoveryProgress = this.updateDiscoveryProgress || (() => {});
        this.updateAtmosphericMeters = this.updateAtmosphericMeters || (() => {});
    }

    validateLoadedData() {
        // Validate that loaded data is consistent
        if (this.discoveryPoints < 0) this.discoveryPoints = 0;
        if (this.mysteryLevel < 1) this.mysteryLevel = 1;
        if (this.mysteryLevel > 4) this.mysteryLevel = 4;
    }

    restoreFromSavedState(savedState) {
        // Restore specific state from saved data
        this.currentLocation = savedState.currentLocation || this.currentLocation;
        this.discoveryPoints = savedState.discoveryPoints || this.discoveryPoints;
        this.mysteryLevel = savedState.mysteryLevel || this.mysteryLevel;
        this.philosophicalDiscoveries = savedState.philosophicalDiscoveries || [];
    }

    createEnhancedGameInterface() {
        // Find the main game container and transform it
        const gameWrapper = document.querySelector('.game-wrapper');
        if (!gameWrapper) return;
        
        // Create the new enhanced interface
        const enhancedInterface = document.createElement('div');
        enhancedInterface.className = 'enhanced-adventure-game';
        enhancedInterface.innerHTML = `
            <!-- Atmospheric Background Effects -->
            <div class="atmospheric-background">
                <div class="mystical-particles"></div>
                <div class="spiritual-energy-streams"></div>
            </div>
            
            <!-- Enhanced Story and Exploration Panel -->
            <div class="enhanced-main-panel">
                <!-- Mystery Investigation Header -->
                <div class="mystery-header">
                    <div class="location-display">
                        <div class="location-icon">📍</div>
                        <div class="location-info">
                            <div class="location-name" id="current-location-name">Village Square of Dharma</div>
                            <div class="location-atmosphere" id="location-atmosphere">Ancient energies swirl around you...</div>
                        </div>
                    </div>
                    
                    <div class="discovery-progress">
                        <div class="progress-label">Mysteries Unveiled</div>
                        <div class="discovery-meter">
                            <div class="discovery-fill" id="discovery-fill"></div>
                        </div>
                        <div class="discovery-count" id="discovery-count">0 / 12</div>
                    </div>
                </div>
                
                <!-- Enhanced Story Container -->
                <div class="mystery-story-container" id="enhanced-story-container">
                    <div class="atmospheric-story-text" id="enhanced-story-text">
                        <!-- Enhanced story content will be populated here -->
                    </div>
                </div>
                
                <!-- Environmental Interaction System -->
                <div class="environmental-elements" id="environmental-elements">
                    <!-- Interactive elements will be populated dynamically -->
                </div>
                
                <!-- Enhanced Puzzle Container -->
                <div class="enhanced-puzzle-area" id="enhanced-puzzle-area">
                    <!-- Enhanced puzzles will be loaded here -->
                </div>
                
                <!-- Enhanced Choice System -->
                <div class="enhanced-choices-container" id="enhanced-choices-container">
                    <!-- Enhanced choices will be populated here -->
                </div>
                
                <!-- Treasure Hunt Interface -->
                <div class="treasure-hunt-panel" id="treasure-hunt-panel" style="display: none;">
                    <div class="treasure-panel-title">🗺️ Mysteries & Discoveries</div>
                    <div class="clue-collection" id="clue-collection">
                        <!-- Collected clues will appear here -->
                    </div>
                    <div class="treasure-map-view" id="treasure-map-view">
                        <!-- Interactive treasure map -->
                    </div>
                </div>
            </div>
            
            <!-- Enhanced Character & Discovery Panel -->
            <div class="enhanced-side-panel">
                <!-- Character Summary (Nakshatra) -->
                <div class="character-summary">
                    <div class="character-symbol">
                        <svg viewBox="0 0 100 100" id="character-symbol-svg"></svg>
                    </div>
                    <h2 class="character-name" id="character-name">Jiva</h2>
                </div>

                <!-- Traditional Player Attributes -->
                <div class="player-attributes-panel panel-section">
                    <h3 class="panel-title">Spiritual Attributes</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-label">Karma</span>
                            <div class="stat-bar karma-bar"><div id="karma-fill" style="width: 50%;"></div></div>
                            <span id="karma-value" class="stat-value">0</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Sattva</span>
                            <div class="stat-bar sattva-bar"><div id="sattva-fill" style="width: 30%;"></div></div>
                            <span id="sattva-value" class="stat-value">0</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Rajas</span>
                            <div class="stat-bar rajas-bar"><div id="rajas-fill" style="width: 80%;"></div></div>
                            <span id="rajas-value" class="stat-value">0</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Tamas</span>
                            <div class="stat-bar tamas-bar"><div id="tamas-fill" style="width: 10%;"></div></div>
                            <span id="tamas-value" class="stat-value">0</span>
                        </div>
                    </div>
                </div>

                <!-- Elemental Affinity -->
                <div class="elemental-affinity-panel panel-section">
                    <h3 class="panel-title">Elemental Affinity</h3>
                    <div class="element-display" id="element-display">
                        <!-- Populated by JS -->
                    </div>
                </div>

                <!-- Inventory -->
                <div class="inventory-panel panel-section">
                    <h3 class="panel-title">Inventory</h3>
                    <ul id="inventory-list">
                        <li class="inventory-empty">(Empty)</li>
                    </ul>
                </div>

                <!-- Enhanced Character Progression -->
                <div class="character-abilities-panel panel-section">
                    <h3 class="panel-title">Spiritual Awakening</h3>
                    <div class="ability-items" id="ability-items">
                        <!-- Abilities will be populated dynamically -->
                    </div>
                </div>

                <!-- Discovery Journal -->
                <div class="discovery-journal-panel">
                    <div class="journal-title">📖 Discovery Journal</div>
                    <div class="journal-entries" id="journal-entries">
                        <div class="journal-placeholder">Your discoveries will be recorded here...</div>
                    </div>
                </div>
                
                <!-- Hidden Secrets Panel -->
                <div class="secrets-panel" id="secrets-panel" style="display: none;">
                    <div class="secrets-title">🔮 Hidden Knowledge</div>
                    <div class="secret-items" id="secret-items">
                        <!-- Secret discoveries will appear here -->
                    </div>
                </div>
                
                <!-- Environmental Status -->
                <div class="environmental-status-panel">
                    <div class="status-title">Atmospheric Resonance</div>
                    <div class="atmosphere-meters" id="atmosphere-meters">
                        <div class="meter-item">
                            <div class="meter-label">Spiritual Energy</div>
                            <div class="meter-bar">
                                <div class="meter-fill spiritual-energy" id="spiritual-energy-fill"></div>
                            </div>
                        </div>
                        <div class="meter-item">
                            <div class="meter-label">Mystery Intensity</div>
                            <div class="meter-bar">
                                <div class="meter-fill mystery-intensity" id="mystery-intensity-fill"></div>
                            </div>
                        </div>
                        <div class="meter-item">
                            <div class="meter-label">Hidden Awareness</div>
                            <div class="meter-bar">
                                <div class="meter-fill hidden-awareness" id="hidden-awareness-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Quick Action Panel -->
                <div class="quick-actions-panel">
                    <button class="action-btn exploration-btn" id="exploration-mode-btn">
                        <span class="btn-icon">🔍</span>
                        <span class="btn-text">Explore</span>
                    </button>
                    <button class="action-btn treasure-btn" id="treasure-hunt-btn">
                        <span class="btn-icon">🗺️</span>
                        <span class="btn-text">Clues</span>
                    </button>
                    <button class="action-btn meditation-btn" id="meditation-btn">
                        <span class="btn-icon">🧘</span>
                        <span class="btn-text">Meditate</span>
                    </button>
                    <button class="action-btn insight-btn" id="insight-btn">
                        <span class="btn-icon">💡</span>
                        <span class="btn-text">Insights</span>
                    </button>
                </div>
            </div>
        `;
        
        // Replace the existing interface
        gameWrapper.innerHTML = '';
        gameWrapper.appendChild(enhancedInterface);

        // Add CSS styles for the traditional player attributes
        this.addTraditionalPlayerAttributesCSS();
        
        // Initialize the enhanced interface
        this.populateEnhancedInterface();
    }

    addTraditionalPlayerAttributesCSS() {
        // Add CSS styles for traditional player attributes
        const style = document.createElement('style');
        style.textContent = `
            /* Traditional Player Attributes Styles */
            .character-summary {
                text-align: center;
                padding-bottom: 1.5rem;
                border-bottom: 1px solid rgba(224, 150, 88, 0.1);
                margin-bottom: 1.5rem;
            }

            .character-symbol {
                width: 80px;
                height: 80px;
                margin: 0 auto 1rem;
                filter: drop-shadow(0 0 15px var(--color-shadow));
                animation: float 4s ease-in-out infinite;
            }

            .character-name {
                font-family: var(--font-title);
                font-size: 1.8rem;
                color: var(--color-primary-glow);
                margin: 0;
            }

            .panel-section {
                padding-bottom: 1.5rem;
                border-bottom: 1px solid rgba(224, 150, 88, 0.1);
                margin-bottom: 1.5rem;
            }

            .panel-section:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }

            .panel-title {
                font-family: var(--font-title);
                font-size: 1.1rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: var(--color-primary);
                margin-bottom: 1rem;
                text-align: center;
            }

            .stats-grid {
                display: grid;
                gap: 0.75rem;
            }

            .stat-item {
                display: grid;
                grid-template-columns: 50px 1fr 30px;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.9rem;
            }

            .stat-label {
                color: var(--color-text-muted);
                font-size: 0.85rem;
            }

            .stat-value {
                text-align: right;
                font-weight: bold;
                color: var(--color-text);
            }

            .stat-bar {
                height: 8px;
                background: rgba(0,0,0,0.3);
                border-radius: 4px;
                overflow: hidden;
                border: 1px solid rgba(224, 150, 88, 0.2);
            }

            .stat-bar > div {
                height: 100%;
                border-radius: 4px;
                transition: width 0.5s ease-in-out;
                box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
            }

            .karma-bar > div {
                background: linear-gradient(90deg, #bca06a, #d9c69a);
            }

            .sattva-bar > div {
                background: linear-gradient(90deg, #63b4d1, #9fd2e4);
            }

            .rajas-bar > div {
                background: linear-gradient(90deg, #d96c47, #f09b7c);
            }

            .tamas-bar > div {
                background: linear-gradient(90deg, #5c527f, #8a80a8);
            }

            .element-display {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                font-size: 1.2rem;
                text-transform: capitalize;
            }

            .element-icon {
                font-size: 2rem;
            }

            .element-earth { color: #8c6a46; }
            .element-water { color: #5c8b9c; }
            .element-fire { color: #d96c47; }
            .element-air { color: #a9b7c0; }
            .element-ether { color: #8c6da6; }

            #inventory-list {
                list-style: none;
                text-align: center;
                min-height: 40px;
                font-size: 0.9rem;
            }

            #inventory-list li {
                padding: 0.25rem 0;
                color: var(--color-text);
            }

            .inventory-empty {
                color: var(--color-text-muted);
                font-style: italic;
            }

            .abilities-title {
                font-family: var(--font-title);
                font-size: 1.1rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: var(--color-primary);
                margin-bottom: 1rem;
                text-align: center;
            }

            /* Float animation for character symbol */
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
            }

            /* Karma animation effects */
            .karma-increase { animation: karma-flash-green 1s; }
            .karma-decrease { animation: karma-flash-red 1s; }

            @keyframes karma-flash-green {
                50% { color: #63b4d1; transform: scale(1.1); }
            }

            @keyframes karma-flash-red {
                50% { color: #d96c47; transform: scale(1.1); }
            }
        `;

        document.head.appendChild(style);
    }
    
    initializeExplorationSystem() {
        // Create escape room style exploration mechanics
        this.explorationSystem = {
            interactableElements: new Map(),
            hiddenAreas: new Map(),
            secretMechanisms: new Map(),
            explorationHistory: []
        };
        
        // Define interactive elements for current location
        this.createLocationElements(this.currentLocation);
        
        // Setup exploration event listeners
        this.setupExplorationInteractions();
    }
    
    createLocationElements(locationId) {
        const location = this.adventureEngine.locations[locationId];
        if (!location) return;
        
        const elementsContainer = document.getElementById('environmental-elements');
        if (!elementsContainer) return;
        
        elementsContainer.innerHTML = '';
        
        location.interactableElements.forEach(element => {
            const elementDiv = document.createElement('div');
            elementDiv.className = `interactive-element ${this.getElementStatusClass(element)}`;
            elementDiv.dataset.elementId = element.id;
            elementDiv.setAttribute('tabindex', '0');
            
            // Check if player has required ability
            const hasRequiredAbility = !element.requiresAbility || 
                this.adventureEngine.characterAbilities[element.requiresAbility] >= (element.level || 1);
            
            if (!hasRequiredAbility) {
                elementDiv.classList.add('requires-ability');
            }
            
            elementDiv.innerHTML = `
                <div class="element-icon">${this.getElementIcon(element)}</div>
                <div class="element-content">
                    <div class="element-title">${element.name}</div>
                    <div class="element-description">${element.description}</div>
                    ${!hasRequiredAbility ? 
                        `<div class="element-ability-requirement">
                            Requires: ${element.requiresAbility} (Level ${element.level || 1})
                        </div>` : 
                        ''
                    }
                </div>
            `;
            
            elementsContainer.appendChild(elementDiv);
        });
        
        // Update location display
        this.updateLocationDisplay(location);
    }
    
    getElementIcon(element) {
        const iconMap = {
            'mandala-stones': '🪨',
            'wisdom-pillar': '🏛️',
            'hidden-shrine': '⛩️',
            'corruption-crystal': '💎',
            'hermit-belongings': '🎒',
            'shadow-guardians': '👤',
            'ancient-tree': '🌳',
            'crystal-spring': '💧',
            'sacred-fire': '🔥',
            'wind-chimes': '🎐'
        };
        
        return iconMap[element.id] || '✨';
    }
    
    getElementStatusClass(element) {
        if (element.discovered) return 'discovered';
        if (element.secret) return 'secret';
        if (!element.requiresAbility) return 'discoverable';
        return 'locked';
    }

    updateLocationDisplay(location) {
        // Update the location name and atmosphere display
        const locationNameEl = document.getElementById('current-location-name');
        const locationAtmosphereEl = document.getElementById('location-atmosphere');

        if (locationNameEl) {
            locationNameEl.textContent = location.name;
        }

        if (locationAtmosphereEl) {
            locationAtmosphereEl.textContent = location.description;
        }

        // Update the atmospheric effects for this location
        this.updateLocationAtmosphere(location);
    }

    updateLocationAtmosphere(location) {
        // Update atmospheric background based on location
        const atmosphericBg = document.querySelector('.atmospheric-background');
        if (atmosphericBg) {
            // Remove existing atmosphere classes
            atmosphericBg.classList.remove('mystical-dawn', 'dark-mystical', 'sacred-grove', 'corrupted-cave');

            // Add new atmosphere class based on location
            const atmosphereClass = this.getAtmosphereClass(location.atmosphere);
            if (atmosphereClass) {
                atmosphericBg.classList.add(atmosphereClass);
            }
        }

        // Update particle effects
        this.updateLocationParticles(location);
    }

    getAtmosphereClass(atmosphere) {
        const atmosphereMap = {
            'mystical-dawn': 'mystical-dawn',
            'dark-mystical': 'dark-mystical',
            'sacred-grove': 'sacred-grove',
            'corrupted-cave': 'corrupted-cave'
        };

        return atmosphereMap[atmosphere] || 'mystical-dawn';
    }

    updateLocationParticles(location) {
        // Update particle system based on location
        const particleContainer = document.querySelector('.mystical-particles');
        if (particleContainer) {
            // Clear existing particles
            particleContainer.innerHTML = '';

            // Add new particles based on location atmosphere
            const particleType = this.getParticleType(location.atmosphere);
            this.createLocationParticles(particleContainer, particleType);
        }
    }

    getParticleType(atmosphere) {
        const particleMap = {
            'mystical-dawn': 'golden-motes',
            'dark-mystical': 'shadow-wisps',
            'sacred-grove': 'nature-sparkles',
            'corrupted-cave': 'dark-energy'
        };

        return particleMap[atmosphere] || 'golden-motes';
    }

    createLocationParticles(container, particleType) {
        // Create appropriate particles for the location
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = `particle ${particleType}`;

            // Randomize particle properties
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';

            container.appendChild(particle);
        }
    }

    setupExplorationInteractions() {
        // Enhanced click/touch interactions
        document.addEventListener('click', (e) => {
            const element = e.target.closest('.interactive-element');
            if (element) {
                this.handleElementInteraction(element);
            }
        });
        
        // Keyboard navigation for accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const focusedElement = document.activeElement.closest('.interactive-element');
                if (focusedElement) {
                    e.preventDefault();
                    this.handleElementInteraction(focusedElement);
                }
            }
        });
        
        // Quick action buttons
        document.getElementById('exploration-mode-btn')?.addEventListener('click', () => {
            this.toggleExplorationMode();
        });
        
        document.getElementById('treasure-hunt-btn')?.addEventListener('click', () => {
            this.toggleTreasureHuntPanel();
        });
        
        document.getElementById('meditation-btn')?.addEventListener('click', () => {
            this.enterMeditationMode();
        });
        
        document.getElementById('insight-btn')?.addEventListener('click', () => {
            this.showPhilosophicalInsights();
        });
    }

    toggleExplorationMode() {
        // Toggle exploration mode on/off
        this.explorationMode = !this.explorationMode;

        const explorationBtn = document.getElementById('exploration-mode-btn');
        if (explorationBtn) {
            if (this.explorationMode) {
                explorationBtn.classList.add('active');
                explorationBtn.querySelector('.btn-text').textContent = 'Exit Explore';
            } else {
                explorationBtn.classList.remove('active');
                explorationBtn.querySelector('.btn-text').textContent = 'Explore';
            }
        }

        // Update UI based on mode
        this.updateExplorationModeUI();
    }

    toggleTreasureHuntPanel() {
        // Toggle treasure hunt panel visibility
        const treasurePanel = document.getElementById('treasure-hunt-panel');
        if (treasurePanel) {
            const isVisible = treasurePanel.style.display !== 'none';
            treasurePanel.style.display = isVisible ? 'none' : 'block';

            const treasureBtn = document.getElementById('treasure-hunt-btn');
            if (treasureBtn) {
                if (isVisible) {
                    treasureBtn.classList.remove('active');
                } else {
                    treasureBtn.classList.add('active');
                }
            }
        }
    }

    showPhilosophicalInsights() {
        // Show philosophical insights to the player
        const insights = this.adventureEngine.philosophicalInsights || [];

        if (insights.length === 0) {
            this.showNotification('No philosophical insights discovered yet. Continue exploring!', 'info');
            return;
        }

        // Create insights modal
        const insightsModal = document.createElement('div');
        insightsModal.className = 'insights-modal active';
        insightsModal.innerHTML = `
            <div class="insights-content">
                <div class="insights-header">
                    <h2>📖 Philosophical Insights</h2>
                    <button class="close-insights">&times;</button>
                </div>
                <div class="insights-body">
                    ${insights.map((insight, index) => `
                        <div class="insight-item">
                            <div class="insight-number">${index + 1}</div>
                            <div class="insight-content">
                                <div class="insight-teaching">"${insight.teaching}"</div>
                                <div class="insight-source">— ${insight.source}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(insightsModal);

        // Setup close handler
        insightsModal.querySelector('.close-insights').addEventListener('click', () => {
            insightsModal.remove();
        });

        // Close on background click
        insightsModal.addEventListener('click', (e) => {
            if (e.target === insightsModal) {
                insightsModal.remove();
            }
        });
    }

    updateExplorationModeUI() {
        // Update UI based on exploration mode
        const gameInterface = document.querySelector('.enhanced-adventure-game');
        if (gameInterface) {
            if (this.explorationMode) {
                gameInterface.classList.add('exploration-mode');
            } else {
                gameInterface.classList.remove('exploration-mode');
            }
        }
    }

    showInsufficientAbilityMessage(elementId) {
        // Show message when player lacks required ability
        const element = this.adventureEngine.locations[this.currentLocation]?.interactableElements.find(el => el.id === elementId);

        if (element && element.requiresAbility) {
            const abilityName = element.requiresAbility.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            const requiredLevel = element.level || 1;

            this.showNotification(
                `This requires ${abilityName} (Level ${requiredLevel}). Continue exploring to develop your spiritual abilities.`,
                'error'
            );
        }
    }

    checkForUnlockedContent() {
        // Check if any new content should be unlocked
        const totalDiscoveries = this.adventureEngine.discoveries.size + this.philosophicalDiscoveries.length;

        // Check for new mystery level
        const newMysteryLevel = Math.floor(totalDiscoveries / 3) + 1;
        if (newMysteryLevel > this.mysteryLevel) {
            this.mysteryLevel = newMysteryLevel;
            this.showNotification(`🔮 Mystery Level ${this.mysteryLevel} Unlocked!`, 'achievement');
            this.adaptContentToMysteryLevel();
        }

        // Check for specific unlock thresholds
        this.checkSpecificUnlocks(totalDiscoveries);
    }

    checkSpecificUnlocks(totalDiscoveries) {
        // Check for specific content unlocks
        const unlockThresholds = {
            3: () => this.showNotification('🌟 Advanced exploration features unlocked!', 'achievement'),
            6: () => this.showNotification('🔮 Mystical abilities enhanced!', 'achievement'),
            9: () => this.showNotification('✨ Transcendent content accessible!', 'achievement'),
            12: () => this.showNotification('🏆 Master Explorer Achievement Unlocked!', 'achievement')
        };

        const unlock = unlockThresholds[totalDiscoveries];
        if (unlock) {
            unlock();
        }
    }

    handleElementInteraction(elementDiv) {
        const elementId = elementDiv.dataset.elementId;
        
        if (elementDiv.classList.contains('requires-ability')) {
            this.showInsufficientAbilityMessage(elementId);
            return;
        }
        
        // Investigate the element
        const result = this.adventureEngine.investigateElement(elementId, this.currentLocation);
        
        if (result) {
            // Mark as discovered
            elementDiv.classList.remove('discoverable');
            elementDiv.classList.add('discovered');
            
            // Show discovery effect
            this.createDiscoveryEffect(elementDiv, result);
            
            // Add to discovery journal
            this.addToDiscoveryJournal(result);
            
            // Update discovery progress
            this.updateDiscoveryProgress();
            
            // Check for unlocked content
            this.checkForUnlockedContent();
            
            // Trigger atmospheric changes
            this.updateAtmosphericEffects(elementId, result);
        }
    }
    
    createTreasureHuntMechanics() {
        // Initialize treasure hunt system
        this.treasureHunt = {
            activeClues: [],
            discoveredClues: [],
            treasureLocations: new Map(),
            hintSystem: new Map(),
            mysteryConnections: new Map()
        };
        
        // Define treasure hunt content
        this.initializeTreasureHuntContent();
        
        // Setup treasure hunt UI
        this.setupTreasureHuntInterface();
    }
    
    initializeTreasureHuntContent() {
        // Define mysterious clues and treasures
        this.treasureHunt.clues = [
            {
                id: 'ancient_wisdom_fragment',
                title: 'Ancient Wisdom Fragment',
                description: 'A piece of ancient text that speaks of the interconnectedness of all things.',
                location: 'DHARMAPURA_SQUARE',
                requiredDiscovery: 'mandala-stones',
                reward: 'philosophical_insight_1',
                hint: 'Where sacred geometry meets ancient stone...',
                philosophical: 'The patterns you see in these stones reflect the mathematical principles underlying all of creation.'
            },
            {
                id: 'hermit_final_message',
                title: 'The Hermit\'s Final Message',
                description: 'A hidden message left by the hermit, revealing his true purpose.',
                location: 'CORRUPTED_CAVE',
                requiredDiscovery: 'hermit-belongings',
                reward: 'purification_knowledge',
                hint: 'In the darkness of despair, look for the light of sacrifice...',
                philosophical: 'True spiritual progress sometimes requires great sacrifice, not for others, but for the evolution of consciousness itself.'
            },
            {
                id: 'unity_teaching',
                title: 'Teaching of Unity',
                description: 'A profound realization about the nature of separation and unity.',
                location: 'DHARMAPURA_SQUARE',
                requiredDiscovery: 'hidden-shrine',
                reward: 'unity_consciousness',
                hint: 'Where the hidden becomes visible to awakened sight...',
                philosophical: 'What appears as many is actually one consciousness exploring itself through countless forms.'
            }
        ];
        
        this.treasureHunt.mysteryConnections = new Map([
            ['ancient_wisdom_fragment', ['hermit_final_message']],
            ['hermit_final_message', ['unity_teaching']],
            ['unity_teaching', ['final_revelation']]
        ]);
    }
    
    setupTreasureHuntInterface() {
        const treasurePanel = document.getElementById('treasure-hunt-panel');
        if (!treasurePanel) return;
        
        // Create clue collection interface
        this.updateClueCollection();
        
        // Create interactive treasure map
        this.createInteractiveTreasureMap();
    }
    
    updateClueCollection() {
        const clueContainer = document.getElementById('clue-collection');
        if (!clueContainer) return;
        
        clueContainer.innerHTML = '';
        
        this.treasureHunt.discoveredClues.forEach(clue => {
            const clueElement = document.createElement('div');
            clueElement.className = 'discovered-clue';
            clueElement.innerHTML = `
                <div class="clue-header">
                    <div class="clue-icon">📜</div>
                    <div class="clue-title">${clue.title}</div>
                </div>
                <div class="clue-description">${clue.description}</div>
                <div class="clue-philosophical">"${clue.philosophical}"</div>
                <div class="clue-connections" id="connections-${clue.id}">
                    <!-- Connected clues will be shown here -->
                </div>
            `;
            
            clueContainer.appendChild(clueElement);
        });
        
        // Update mystery connections
        this.updateMysteryConnections();
    }
    
    createInteractiveTreasureMap() {
        const mapContainer = document.getElementById('treasure-map-view');
        if (!mapContainer) return;
        
        mapContainer.innerHTML = `
            <div class="treasure-map">
                <div class="map-title">🗺️ Spiritual Journey Map</div>
                <div class="map-locations" id="map-locations">
                    <!-- Map locations will be populated -->
                </div>
                <div class="map-connections" id="map-connections">
                    <!-- Connections between discoveries will be shown -->
                </div>
            </div>
        `;
        
        this.updateTreasureMap();
    }
    
    setupEnvironmentalStorytelling() {
        // Create system for environmental narrative
        this.environmentalStory = {
            storyLayers: new Map(),
            narrativeElements: [],
            atmosphericChanges: new Map(),
            philosophicalReflections: []
        };
        
        // Initialize environmental narratives for locations
        this.initializeEnvironmentalNarratives();
        
        // Setup dynamic story adaptation
        this.setupStoryAdaptation();
    }
    
    initializeEnvironmentalNarratives() {
        this.environmentalStory.storyLayers.set('DHARMAPURA_SQUARE', {
            base: 'You stand in an ancient village square where countless spiritual seekers have walked before you.',
            discoveries: {
                'mandala-stones': 'The stones beneath your feet pulse with geometric harmony. You begin to understand that this entire village is built upon sacred mathematical principles.',
                'wisdom-pillar': 'Ancient Sanskrit inscriptions shimmer on the weathered pillar. The words seem to shift and change, revealing different meanings as your understanding deepens.',
                'hidden-shrine': 'A concealed shrine materializes before your enhanced perception. This sacred space has been waiting for someone with the sight to perceive it.'
            },
            philosophical: 'Every step in this square is a step deeper into the mystery of existence itself.'
        });
        
        this.environmentalStory.storyLayers.set('CORRUPTED_CAVE', {
            base: 'Negative energy swirls through this cavern, but you sense it\'s not truly evil—just energy that has lost its way.',
            discoveries: {
                'corruption-crystal': 'The dark crystal pulses with accumulated suffering. You realize this crystallized pain is crying out for compassion, not destruction.',
                'hermit-belongings': 'Personal artifacts tell the story of one man\'s spiritual struggle. Each object carries the weight of sacrifice and the hope of purification.',
                'shadow-guardians': 'Dark figures emerge, but they are not enemies—they are aspects of the psyche that have been rejected and seek integration.'
            },
            philosophical: 'What we call darkness is often just light that has forgotten its true nature.'
        });
    }
    
    setupStoryAdaptation() {
        // Create dynamic story system that adapts based on player discoveries
        this.storyAdaptation = {
            narrativeBranches: new Map(),
            philosophicalDepth: 1,
            mysteryComplexity: 1,
            characterGrowthLevel: 1
        };
        
        // Define how story adapts based on player progress
        this.defineStoryAdaptationRules();
    }
    
    defineStoryAdaptationRules() {
        this.storyAdaptation.rules = [
            {
                trigger: 'discovery_count >= 3',
                effect: () => {
                    this.storyAdaptation.mysteryComplexity += 1;
                    this.revealDeeperMysteries();
                }
            },
            {
                trigger: 'ability_unlocked',
                effect: (abilityName) => {
                    this.storyAdaptation.philosophicalDepth += 1;
                    this.unlockPhilosophicalContent(abilityName);
                }
            },
            {
                trigger: 'puzzle_solved',
                effect: (puzzleName) => {
                    this.storyAdaptation.characterGrowthLevel += 1;
                    this.adaptNarrativeComplexity(puzzleName);
                }
            }
        ];
    }
    
    // Enhanced puzzle integration
    loadEnhancedPuzzle(puzzleId) {
        const puzzleContainer = document.getElementById('enhanced-puzzle-area');
        if (!puzzleContainer) return;
        
        // Clear existing puzzle
        puzzleContainer.innerHTML = '';
        
        if (puzzleId === 'BanyanTreeHarmony') {
            const enhancedBanyanPuzzle = new EnhancedBanyanTreeHarmony(
                puzzleContainer,
                this.gameStateManager,
                this.adventureEngine,
                () => this.handlePuzzleCompletion('BanyanTreeHarmony')
            );
            
            this.currentPuzzle = enhancedBanyanPuzzle;
        } else if (puzzleId === 'BarrierOfNegativity') {
            const enhancedBarrierPuzzle = new EnhancedBarrierOfNegativity(
                puzzleContainer,
                this.gameStateManager,
                this.adventureEngine,
                () => this.handlePuzzleCompletion('BarrierOfNegativity')
            );
            
            this.currentPuzzle = enhancedBarrierPuzzle;
        }
        
        // Trigger atmospheric changes for puzzle
        this.triggerPuzzleAtmosphere(puzzleId);
    }
    
    handlePuzzleCompletion(puzzleId) {
        // Award discovery points
        this.discoveryPoints += 50;
        
        // Unlock new content based on puzzle
        this.unlockPuzzleRewards(puzzleId);
        
        // Update atmospheric effects
        this.updatePostPuzzleAtmosphere(puzzleId);
        
        // Check for story progression
        this.checkStoryProgression();
        
        // Save progress
        this.saveEnhancedGameState();
    }
    
    unlockPuzzleRewards(puzzleId) {
        const puzzleRewards = {
            'BanyanTreeHarmony': {
                discoveries: ['tree_consciousness_understanding', 'sacred_geometry_knowledge'],
                abilities: ['nature_communion', 'pattern_recognition'],
                secrets: ['living_mandala_access', 'ecological_consciousness'],
                philosophical: 'The tree has taught you that all apparent separation is illusion—you and nature are one consciousness expressing itself.'
            },
            'BarrierOfNegativity': {
                discoveries: ['shadow_integration_mastery', 'compassion_cultivation'],
                abilities: ['maya_piercing_vision', 'unity_recognition'],
                secrets: ['inner_light_access', 'non_dual_awareness'],
                philosophical: 'By embracing what you once rejected, you have discovered that every obstacle is actually a teacher in disguise.'
            }
        };
        
        const rewards = puzzleRewards[puzzleId];
        if (rewards) {
            // Add discoveries
            rewards.discoveries.forEach(discovery => {
                this.addPhilosophicalDiscovery(discovery);
            });
            
            // Unlock abilities
            rewards.abilities.forEach(ability => {
                this.adventureEngine.unlockAbility(ability.replace('_', ''), 1);
            });
            
            // Reveal secrets
            rewards.secrets.forEach(secret => {
                this.revealSecret(secret);
            });
            
            // Add philosophical insight
            this.addPhilosophicalInsight(rewards.philosophical);
        }
    }
    
    // Discovery and progression systems
    addToDiscoveryJournal(discovery) {
        const journalContainer = document.getElementById('journal-entries');
        if (!journalContainer) return;
        
        // Remove placeholder if present
        const placeholder = journalContainer.querySelector('.journal-placeholder');
        if (placeholder) {
            placeholder.remove();
        }
        
        const journalEntry = document.createElement('div');
        journalEntry.className = 'journal-entry';
        journalEntry.innerHTML = `
            <div class="entry-header">
                <div class="entry-icon">📖</div>
                <div class="entry-title">${discovery.discovery}</div>
                <div class="entry-timestamp">${new Date().toLocaleTimeString()}</div>
            </div>
            <div class="entry-content">${discovery.reward}</div>
            <div class="entry-philosophical">"${discovery.philosophicalInsight}"</div>
        `;
        
        journalContainer.insertBefore(journalEntry, journalContainer.firstChild);
        
        // Limit journal entries to prevent overflow
        const entries = journalContainer.querySelectorAll('.journal-entry');
        if (entries.length > 10) {
            entries[entries.length - 1].remove();
        }
    }
    
    addPhilosophicalDiscovery(discoveryId) {
        this.philosophicalDiscoveries.push({
            id: discoveryId,
            timestamp: Date.now(),
            location: this.currentLocation
        });
        
        // Update discovery count
        this.updateDiscoveryProgress();
    }
    
    addPhilosophicalInsight(insight) {
        this.adventureEngine.philosophicalInsights.push({
            teaching: insight,
            source: 'Enhanced Gameplay Discovery',
            timestamp: Date.now()
        });
        
        // Show insight notification
        this.showPhilosophicalInsightNotification(insight);
    }
    
    updateDiscoveryProgress() {
        const totalDiscoveries = 12; // Total possible discoveries
        const currentDiscoveries = this.adventureEngine.discoveries.size + this.philosophicalDiscoveries.length;
        
        const progressFill = document.getElementById('discovery-fill');
        const progressCount = document.getElementById('discovery-count');
        
        if (progressFill) {
            const percentage = (currentDiscoveries / totalDiscoveries) * 100;
            progressFill.style.width = `${percentage}%`;
        }
        
        if (progressCount) {
            progressCount.textContent = `${currentDiscoveries} / ${totalDiscoveries}`;
        }
        
        // Update mystery level based on discoveries
        this.mysteryLevel = Math.floor(currentDiscoveries / 3) + 1;
        this.adaptContentToMysteryLevel();
    }
    
    adaptContentToMysteryLevel() {
        // Unlock new content based on mystery level
        const mysteryLevelEffects = {
            1: () => {
                // Basic exploration
                this.unlockBasicExploration();
            },
            2: () => {
                // Intermediate mysteries
                this.unlockIntermediateMysteries();
                this.revealSecretAreas(['HIDDEN_MEDITATION_CAVE']);
            },
            3: () => {
                // Advanced spiritual content
                this.unlockAdvancedSpiritualContent();
                this.revealSecretAreas(['ANCIENT_LIBRARY_RUINS']);
            },
            4: () => {
                // Transcendent mysteries
                this.unlockTranscendentMysteries();
                this.revealSecretAreas(['COSMIC_CONSCIOUSNESS_CHAMBER']);
            }
        };
        
        const effect = mysteryLevelEffects[this.mysteryLevel];
        if (effect) {
            effect();
        }
    }

    unlockBasicExploration() {
        // Unlock basic exploration features
        console.log('Basic exploration unlocked');

        // Enable basic environmental interactions
        this.enableBasicInteractions();

        // Show tutorial hints for new players
        this.showBasicExplorationHints();

        // Unlock basic discovery mechanics
        this.unlockBasicDiscoveryMechanics();
    }

    unlockIntermediateMysteries() {
        // Unlock intermediate mystery content
        console.log('Intermediate mysteries unlocked');

        // Enable advanced environmental storytelling
        this.enableAdvancedStorytelling();

        // Unlock deeper philosophical content
        this.unlockIntermediatePhilosophy();

        // Enable mystery investigation tools
        this.enableMysteryInvestigationTools();
    }

    unlockAdvancedSpiritualContent() {
        // Unlock advanced spiritual content
        console.log('Advanced spiritual content unlocked');

        // Enable transcendent experiences
        this.enableTranscendentExperiences();

        // Unlock advanced meditation techniques
        this.unlockAdvancedMeditation();

        // Enable consciousness exploration
        this.enableConsciousnessExploration();
    }

    unlockTranscendentMysteries() {
        // Unlock the highest level of mysteries
        console.log('Transcendent mysteries unlocked');

        // Enable cosmic consciousness experiences
        this.enableCosmicConsciousness();

        // Unlock reality transformation abilities
        this.unlockRealityTransformation();

        // Enable unity consciousness mechanics
        this.enableUnityConsciousness();
    }

    revealSecretAreas(areaIds) {
        // Reveal hidden areas to the player
        areaIds.forEach(areaId => {
            console.log(`Secret area revealed: ${areaId}`);

            // Add area to accessible locations
            this.secretAreas.add(areaId);

            // Create notification for discovered area
            this.showSecretAreaNotification(areaId);

            // Update treasure map with new area
            this.updateTreasureMapWithSecretArea(areaId);
        });
    }

    // Helper methods for unlocked content
    enableBasicInteractions() {
        // Enable basic environmental interactions
        this.basicInteractionsEnabled = true;

        // Add hover effects to discoverable elements
        this.addBasicHoverEffects();
    }

    showBasicExplorationHints() {
        // Show helpful hints for new players
        this.showHint('Click on glowing elements to discover secrets!', 'exploration');
    }

    unlockBasicDiscoveryMechanics() {
        // Enable basic discovery mechanics
        this.discoveryMechanics = {
            highlighting: true,
            tooltips: true,
            basicFeedback: true
        };
    }

    enableAdvancedStorytelling() {
        // Enable more complex narrative elements
        this.advancedStorytellingEnabled = true;

        // Unlock branching narratives
        this.unlockBranchingNarratives();
    }

    unlockIntermediatePhilosophy() {
        // Unlock deeper philosophical content
        this.philosophicalDepth = 'intermediate';

        // Enable philosophical choice mechanics
        this.enablePhilosophicalChoices();
    }

    enableMysteryInvestigationTools() {
        // Enable investigation tools in UI
        const investigationPanel = document.getElementById('treasure-hunt-panel');
        if (investigationPanel) {
            investigationPanel.style.display = 'block';
        }

        // Show clue collection interface
        this.showClueCollectionInterface();
    }

    enableTranscendentExperiences() {
        // Enable transcendent experience mechanics
        this.transcendentExperiencesEnabled = true;

        // Unlock reality-shifting visuals
        this.unlockRealityShiftingVisuals();
    }

    unlockAdvancedMeditation() {
        // Unlock advanced meditation techniques
        this.advancedMeditationUnlocked = true;

        // Add advanced meditation options
        this.addAdvancedMeditationOptions();
    }

    enableConsciousnessExploration() {
        // Enable consciousness exploration mechanics
        this.consciousnessExplorationEnabled = true;

        // Unlock inner journey mechanics
        this.unlockInnerJourneyMechanics();
    }

    enableCosmicConsciousness() {
        // Enable cosmic consciousness experiences
        this.cosmicConsciousnessEnabled = true;

        // Unlock universal perspective mechanics
        this.unlockUniversalPerspective();
    }

    unlockRealityTransformation() {
        // Unlock reality transformation abilities
        this.realityTransformationUnlocked = true;

        // Enable environmental manipulation
        this.enableEnvironmentalManipulation();
    }

    enableUnityConsciousness() {
        // Enable unity consciousness mechanics
        this.unityConsciousnessEnabled = true;

        // Unlock non-dual awareness features
        this.unlockNonDualAwareness();
    }

    showSecretAreaNotification(areaId) {
        // Show notification for discovered secret area
        const areaNames = {
            'HIDDEN_MEDITATION_CAVE': 'Hidden Meditation Cave',
            'ANCIENT_LIBRARY_RUINS': 'Ancient Library Ruins',
            'COSMIC_CONSCIOUSNESS_CHAMBER': 'Cosmic Consciousness Chamber'
        };

        const areaName = areaNames[areaId] || areaId;
        this.showNotification(`🗺️ Secret area discovered: ${areaName}!`, 'success');
    }

    updateTreasureMapWithSecretArea(areaId) {
        // Update treasure map to show new secret area
        const mapContainer = document.getElementById('map-locations');
        if (mapContainer) {
            const areaElement = document.createElement('div');
            areaElement.className = 'secret-area-marker';
            areaElement.dataset.areaId = areaId;
            areaElement.innerHTML = `
                <div class="area-icon">🏛️</div>
                <div class="area-name">${areaId.replace(/_/g, ' ')}</div>
            `;
            mapContainer.appendChild(areaElement);
        }
    }

    showHint(message, type = 'info') {
        // Show helpful hint to player
        const hint = document.createElement('div');
        hint.className = `exploration-hint ${type}`;
        hint.innerHTML = `
            <div class="hint-icon">💡</div>
            <div class="hint-message">${message}</div>
        `;

        document.body.appendChild(hint);

        // Auto-remove hint after delay
        setTimeout(() => {
            hint.classList.add('fade-out');
            setTimeout(() => hint.remove(), 500);
        }, 4000);
    }

    addBasicHoverEffects() {
        // Add CSS class for basic hover effects
        document.body.classList.add('basic-interactions-enabled');
    }

    unlockBranchingNarratives() {
        // Enable branching narrative mechanics
        this.branchingNarrativesEnabled = true;
    }

    enablePhilosophicalChoices() {
        // Enable philosophical choice mechanics
        this.philosophicalChoicesEnabled = true;
    }

    showClueCollectionInterface() {
        // Show the clue collection interface
        const cluePanel = document.getElementById('clue-collection');
        if (cluePanel) {
            cluePanel.classList.add('active');
        }
    }

    unlockRealityShiftingVisuals() {
        // Unlock reality-shifting visual effects
        this.realityShiftingVisualsEnabled = true;
    }

    addAdvancedMeditationOptions() {
        // Add advanced meditation options to meditation interface
        this.advancedMeditationOptions = [
            'Consciousness Expansion',
            'Karmic Healing',
            'Unity Realization',
            'Transcendent Awareness'
        ];
    }

    unlockInnerJourneyMechanics() {
        // Unlock inner journey exploration mechanics
        this.innerJourneyMechanicsEnabled = true;
    }

    unlockUniversalPerspective() {
        // Unlock universal perspective mechanics
        this.universalPerspectiveEnabled = true;
    }

    enableEnvironmentalManipulation() {
        // Enable environmental manipulation abilities
        this.environmentalManipulationEnabled = true;
    }

    unlockNonDualAwareness() {
        // Unlock non-dual awareness features
        this.nonDualAwarenessEnabled = true;
    }

    showNotification(message, type = 'info') {
        // Show notification to player
        const notification = document.createElement('div');
        notification.className = `game-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-message">${message}</div>
            </div>
        `;

        // Add to notification container or body
        const container = document.getElementById('notification-container') || document.body;
        container.appendChild(notification);

        // Show notification with animation
        setTimeout(() => notification.classList.add('show'), 10);

        // Auto-remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Atmospheric and environmental effects
    updateAtmosphericEffects(discoveryId, result) {
        // Update atmospheric meters
        this.updateAtmosphericMeters();
        
        // Create environmental changes
        this.createEnvironmentalChanges(discoveryId, result);
        
        // Adjust background effects
        this.adjustBackgroundEffects();
    }
    
    updateAtmosphericMeters() {
        const spiritualEnergyLevel = Math.min(100, this.adventureEngine.discoveries.size * 15);
        const mysteryIntensityLevel = Math.min(100, this.mysteryLevel * 25);
        const hiddenAwarenessLevel = Math.min(100, Object.values(this.adventureEngine.characterAbilities).reduce((a, b) => a + b, 0) * 10);
        
        const spiritualFill = document.getElementById('spiritual-energy-fill');
        const mysteryFill = document.getElementById('mystery-intensity-fill');
        const awarenessFill = document.getElementById('hidden-awareness-fill');
        
        if (spiritualFill) spiritualFill.style.width = `${spiritualEnergyLevel}%`;
        if (mysteryFill) mysteryFill.style.width = `${mysteryIntensityLevel}%`;
        if (awarenessFill) awarenessFill.style.width = `${hiddenAwarenessLevel}%`;
    }
    
    createEnvironmentalChanges(discoveryId, result) {
        // Trigger visual effects based on discovery
        const changeEffects = {
            'mandala-stones': () => this.createGeometricLightPatterns(),
            'wisdom-pillar': () => this.createAncientTextGlow(),
            'corruption-crystal': () => this.createPurificationWaves(),
            'hermit-belongings': () => this.createKarmicMemoryEchoes()
        };
        
        const effect = changeEffects[discoveryId];
        if (effect) {
            effect();
        }
    }

    adjustBackgroundEffects() {
        // Adjust background atmospheric effects based on current state
        const atmosphericBg = document.querySelector('.atmospheric-background');
        if (atmosphericBg) {
            // Adjust intensity based on discoveries and abilities
            const intensity = Math.min(1, (this.adventureEngine.discoveries.size + Object.values(this.adventureEngine.characterAbilities).reduce((a, b) => a + b, 0)) / 10);
            atmosphericBg.style.opacity = 0.3 + (intensity * 0.4);
        }

        // Update particle density
        this.updateParticleDensity();
    }

    createGeometricLightPatterns() {
        // Create geometric light patterns effect
        console.log('Creating geometric light patterns...');

        const effect = document.createElement('div');
        effect.className = 'geometric-light-effect';
        effect.innerHTML = `
            <div class="sacred-geometry-pattern">
                <div class="mandala-light"></div>
                <div class="fibonacci-spiral"></div>
                <div class="golden-ratio-grid"></div>
            </div>
        `;

        document.body.appendChild(effect);

        // Animate and remove after duration
        setTimeout(() => {
            effect.classList.add('fade-out');
            setTimeout(() => effect.remove(), 1000);
        }, 3000);
    }

    createAncientTextGlow() {
        // Create ancient text glowing effect
        console.log('Creating ancient text glow...');

        const effect = document.createElement('div');
        effect.className = 'ancient-text-glow-effect';
        effect.innerHTML = `
            <div class="sanskrit-symbols">
                <div class="symbol">ॐ</div>
                <div class="symbol">सत्</div>
                <div class="symbol">चित्</div>
                <div class="symbol">आनन्द</div>
            </div>
        `;

        document.body.appendChild(effect);

        // Animate and remove after duration
        setTimeout(() => {
            effect.classList.add('fade-out');
            setTimeout(() => effect.remove(), 1000);
        }, 4000);
    }

    createPurificationWaves() {
        // Create purification wave effects
        console.log('Creating purification waves...');

        const effect = document.createElement('div');
        effect.className = 'purification-wave-effect';
        effect.innerHTML = `
            <div class="energy-waves">
                <div class="wave wave-1"></div>
                <div class="wave wave-2"></div>
                <div class="wave wave-3"></div>
            </div>
        `;

        document.body.appendChild(effect);

        // Animate and remove after duration
        setTimeout(() => {
            effect.classList.add('fade-out');
            setTimeout(() => effect.remove(), 1000);
        }, 3500);
    }

    createKarmicMemoryEchoes() {
        // Create karmic memory echo effects
        console.log('Creating karmic memory echoes...');

        const effect = document.createElement('div');
        effect.className = 'karmic-memory-effect';
        effect.innerHTML = `
            <div class="memory-echoes">
                <div class="echo past-life"></div>
                <div class="echo present-moment"></div>
                <div class="echo future-potential"></div>
            </div>
        `;

        document.body.appendChild(effect);

        // Animate and remove after duration
        setTimeout(() => {
            effect.classList.add('fade-out');
            setTimeout(() => effect.remove(), 1000);
        }, 4500);
    }

    updateParticleDensity() {
        // Update particle density based on spiritual progress
        const particleContainer = document.querySelector('.mystical-particles');
        if (particleContainer) {
            const baseDensity = 20;
            const progressMultiplier = 1 + (this.adventureEngine.discoveries.size * 0.1);
            const newDensity = Math.min(50, baseDensity * progressMultiplier);

            // Update particle count if significantly different
            const currentParticles = particleContainer.children.length;
            if (Math.abs(currentParticles - newDensity) > 5) {
                // Clear and recreate particles with new density
                const atmosphereType = this.getCurrentAtmosphereType();
                this.createLocationParticles(particleContainer, atmosphereType);
            }
        }
    }

    getCurrentAtmosphereType() {
        // Get current atmosphere type based on location
        const location = this.adventureEngine.locations[this.currentLocation];
        return location ? this.getParticleType(location.atmosphere) : 'golden-motes';
    }

    // Enhanced interaction systems
    enterMeditationMode() {
        // Create meditation interface
        this.createMeditationInterface();
        
        // Provide meditation benefits
        this.provideMeditationBenefits();
    }
    
    createMeditationInterface() {
        const meditationOverlay = document.createElement('div');
        meditationOverlay.className = 'meditation-overlay active';
        meditationOverlay.innerHTML = `
            <div class="meditation-content">
                <div class="meditation-title">🧘 Spiritual Meditation</div>
                <div class="meditation-guidance">
                    <p>Close your eyes and breathe deeply. Let your consciousness expand beyond the boundaries of the individual self...</p>
                    <div class="meditation-timer" id="meditation-timer">3:00</div>
                </div>
                <div class="meditation-benefits">
                    <div class="benefit-item">✨ Increases spiritual sensitivity</div>
                    <div class="benefit-item">🔍 Reveals hidden elements</div>
                    <div class="benefit-item">💡 Provides philosophical insights</div>
                </div>
                <button class="meditation-end-btn" id="end-meditation-btn">Complete Meditation</button>
            </div>
        `;
        
        document.body.appendChild(meditationOverlay);
        
        // Start meditation timer
        this.startMeditationTimer();
        
        // Setup end meditation handler
        document.getElementById('end-meditation-btn').addEventListener('click', () => {
            this.completeMeditation();
            meditationOverlay.remove();
        });
    }
    
    provideMeditationBenefits() {
        // Enhance spiritual abilities
        Object.keys(this.adventureEngine.characterAbilities).forEach(ability => {
            if (this.adventureEngine.characterAbilities[ability] > 0) {
                this.adventureEngine.characterAbilities[ability] += 0.1;
            }
        });
        
        // Reveal hidden elements
        this.revealNearbyHiddenElements();
        
        // Provide insight
        this.provideMeditationInsight();
    }
    
    // Save and load system
    saveEnhancedGameState() {
        const enhancedState = {
            currentLocation: this.currentLocation,
            discoveryPoints: this.discoveryPoints,
            mysteryLevel: this.mysteryLevel,
            philosophicalDiscoveries: this.philosophicalDiscoveries,
            treasureHunt: this.treasureHunt,
            contentAdaptation: this.contentAdaptation,
            environmentalStory: {
                storyLayers: Object.fromEntries(this.environmentalStory.storyLayers),
                narrativeElements: this.environmentalStory.narrativeElements
            }
        };
        
        // Save adventure engine state
        this.adventureEngine.saveEnhancedGameState();
        
        // Save overhaul state
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.gameplayOverhaulState = enhancedState;
        }
    }
    
    loadEnhancedGameState() {
        if (this.gameStateManager && 
            this.gameStateManager.worldState && 
            this.gameStateManager.worldState.gameplayOverhaulState) {
            
            const state = this.gameStateManager.worldState.gameplayOverhaulState;
            
            this.currentLocation = state.currentLocation || 'DHARMAPURA_SQUARE';
            this.discoveryPoints = state.discoveryPoints || 0;
            this.mysteryLevel = state.mysteryLevel || 1;
            this.philosophicalDiscoveries = state.philosophicalDiscoveries || [];
            this.treasureHunt = state.treasureHunt || this.treasureHunt;
            this.contentAdaptation = state.contentAdaptation || this.contentAdaptation;
            
            if (state.environmentalStory) {
                this.environmentalStory.storyLayers = new Map(Object.entries(state.environmentalStory.storyLayers));
                this.environmentalStory.narrativeElements = state.environmentalStory.narrativeElements || [];
            }
        }
        
        // Load adventure engine state
        this.adventureEngine.loadEnhancedGameState();
    }
    
    // Integration methods
    populateEnhancedInterface() {
        // Initialize traditional character information
        this.initializeCharacterInformation();

        // Initialize traditional player attributes
        this.initializeTraditionalAttributes();

        // Initialize element display
        this.initializeElementDisplay();

        // Initialize inventory
        this.initializeInventoryDisplay();

        // Populate character abilities
        this.updateCharacterAbilitiesDisplay();

        // Setup initial location
        this.createLocationElements(this.currentLocation);

        // Initialize atmospheric meters
        this.updateAtmosphericMeters();

        // Setup discovery progress
        this.updateDiscoveryProgress();
    }

    initializeCharacterInformation() {
        // Initialize character name and symbol from nakshatra data
        const urlParams = new URLSearchParams(window.location.search);
        const nakshatraNum = urlParams.get('nakshatra');

        if (nakshatraNum && window.nakshatraData && window.nakshatraData[nakshatraNum]) {
            const nakshatra = window.nakshatraData[nakshatraNum];

            // Update character name
            const characterNameEl = document.getElementById('character-name');
            if (characterNameEl) {
                characterNameEl.textContent = nakshatra.name;
            }

            // Update character symbol
            const symbolSvg = document.getElementById('character-symbol-svg');
            if (symbolSvg && window.nakshatraSvgPaths) {
                symbolSvg.innerHTML = window.nakshatraSvgPaths[nakshatraNum] || '';
            }
        }
    }

    initializeTraditionalAttributes() {
        // Initialize traditional spiritual attributes (Karma, Sattva, Rajas, Tamas)
        const urlParams = new URLSearchParams(window.location.search);
        const nakshatraNum = parseInt(urlParams.get('nakshatra')) || 1;

        // Calculate guna values based on nakshatra
        let sattva = 0, rajas = 0, tamas = 0, karma = 0;

        if (nakshatraNum >= 1 && nakshatraNum <= 9) {
            sattva = 1;
            rajas = 2;
            tamas = 0;
        } else if (nakshatraNum >= 10 && nakshatraNum <= 18) {
            sattva = 0;
            rajas = 1;
            tamas = 2;
        } else {
            sattva = 2;
            rajas = 0;
            tamas = 1;
        }

        // Get karma from game state if available
        if (this.gameStateManager && this.gameStateManager.playerState) {
            karma = this.gameStateManager.playerState.karma || 0;
        }

        // Update the UI
        this.updateAttributeDisplay('karma', karma, 50);
        this.updateAttributeDisplay('sattva', sattva, sattva * 33);
        this.updateAttributeDisplay('rajas', rajas, rajas * 40);
        this.updateAttributeDisplay('tamas', tamas, tamas * 50);
    }

    updateAttributeDisplay(attributeName, value, barWidth) {
        // Update attribute value and bar
        const valueEl = document.getElementById(`${attributeName}-value`);
        const fillEl = document.getElementById(`${attributeName}-fill`);

        if (valueEl) {
            valueEl.textContent = value;
        }

        if (fillEl) {
            fillEl.style.width = `${Math.min(100, barWidth)}%`;
        }
    }

    initializeElementDisplay() {
        // Initialize elemental affinity display
        const urlParams = new URLSearchParams(window.location.search);
        const nakshatraNum = urlParams.get('nakshatra');

        if (nakshatraNum && window.nakshatraData && window.nakshatraData[nakshatraNum]) {
            const nakshatra = window.nakshatraData[nakshatraNum];
            const elementDisplay = document.getElementById('element-display');

            if (elementDisplay && window.elementIcons) {
                const elementIcon = window.elementIcons[nakshatra.element] || '✨';
                const elementName = nakshatra.element.charAt(0).toUpperCase() + nakshatra.element.slice(1);

                elementDisplay.innerHTML = `
                    <div class="element-icon">${elementIcon}</div>
                    <div class="element-name">${elementName}</div>
                `;
                elementDisplay.className = `element-display element-${nakshatra.element}`;
            }
        }
    }

    initializeInventoryDisplay() {
        // Initialize inventory display from game state
        const inventoryEl = document.getElementById('inventory-list');
        if (!inventoryEl) return;

        inventoryEl.innerHTML = '';

        // Get inventory from game state
        let items = new Set();
        if (this.gameStateManager && this.gameStateManager.playerState) {
            items = new Set(this.gameStateManager.playerState.inventory || []);

            // Add special items from world state
            if (this.gameStateManager.worldState) {
                if (this.gameStateManager.worldState.has_lotus_petal) {
                    items.add('Lotus Petal');
                }
            }
        }

        if (items.size === 0) {
            const li = document.createElement('li');
            li.className = 'inventory-empty';
            li.textContent = '(Empty)';
            inventoryEl.appendChild(li);
        } else {
            items.forEach(itemName => {
                const li = document.createElement('li');
                li.textContent = itemName;
                inventoryEl.appendChild(li);
            });
        }
    }

    updateKarma(amount) {
        // Update karma value with animation
        if (!this.gameStateManager || !this.gameStateManager.playerState) return;

        const currentKarma = this.gameStateManager.playerState.karma || 0;
        const newKarma = currentKarma + amount;

        // Update game state
        this.gameStateManager.playerState.karma = newKarma;

        // Update UI with animation
        const karmaValueEl = document.getElementById('karma-value');
        if (karmaValueEl) {
            // Add animation class
            karmaValueEl.classList.add(amount > 0 ? 'karma-increase' : 'karma-decrease');

            // Update value after brief delay
            setTimeout(() => {
                karmaValueEl.textContent = newKarma;

                // Update karma bar
                const karmaFillEl = document.getElementById('karma-fill');
                if (karmaFillEl) {
                    const karmaPercentage = Math.max(0, Math.min(100, 50 + newKarma * 5));
                    karmaFillEl.style.width = `${karmaPercentage}%`;
                }

                // Remove animation class
                setTimeout(() => {
                    karmaValueEl.classList.remove('karma-increase', 'karma-decrease');
                }, 1000);
            }, 500);
        }
    }

    updateCharacterAbilitiesDisplay() {
        const abilitiesContainer = document.getElementById('ability-items');
        if (!abilitiesContainer) return;
        
        abilitiesContainer.innerHTML = '';
        
        Object.entries(this.adventureEngine.characterAbilities).forEach(([abilityName, level]) => {
            const abilityElement = document.createElement('div');
            abilityElement.className = `ability-item ${level > 0 ? 'enhanced' : ''}`;
            abilityElement.innerHTML = `
                <div class="ability-icon">${this.getAbilityIcon(abilityName)}</div>
                <div class="ability-details">
                    <div class="ability-name">${this.formatAbilityName(abilityName)}</div>
                    <div class="ability-description">${this.getAbilityDescription(abilityName, level)}</div>
                </div>
                <div class="ability-level">
                    ${Array.from({length: 3}, (_, i) => 
                        `<div class="level-indicator ${i < level ? 'active' : ''}"></div>`
                    ).join('')}
                </div>
            `;
            
            abilitiesContainer.appendChild(abilityElement);
        });
    }
    
    getAbilityIcon(abilityName) {
        const iconMap = {
            spiritualSight: '👁️',
            karmicResonance: '⚖️',
            ancientWisdom: '📚',
            elementalHarmony: '🌊',
            mysticalIntuition: '🔮'
        };
        
        return iconMap[abilityName] || '✨';
    }
    
    formatAbilityName(abilityName) {
        return abilityName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }
    
    getAbilityDescription(abilityName, level) {
        const descriptions = {
            spiritualSight: {
                0: 'Dormant spiritual perception',
                1: 'You begin to perceive subtle energies',
                2: 'Hidden spiritual elements become visible',
                3: 'You see the interconnected web of consciousness'
            },
            karmicResonance: {
                0: 'Unaware of karmic patterns',
                1: 'You sense karmic weight and consequences',
                2: 'Past-life memories become accessible',
                3: 'You understand the mechanics of karma'
            },
            ancientWisdom: {
                0: 'Ancient texts remain mysterious',
                1: 'Ancient symbols begin revealing meanings',
                2: 'You access accumulated spiritual wisdom',
                3: 'Highest teachings become direct knowledge'
            },
            elementalHarmony: {
                0: 'Elements seem separate and distant',
                1: 'You feel the living presence in elements',
                2: 'Elemental forces respond to your intention',
                3: 'You work directly with creation forces'
            },
            mysticalIntuition: {
                0: 'Intuition remains undeveloped',
                1: 'Hidden patterns become apparent',
                2: 'You sense concealed areas and teachings',
                3: 'Direct knowing arises spontaneously'
            }
        };
        
        return descriptions[abilityName]?.[level] || 'Unknown ability state';
    }
    
    startEnhancedGameplay() {
        // Initialize the enhanced experience
        this.populateEnhancedInterface();
        
        // Start atmospheric effects
        this.startAtmosphericEffects();
        
        // Begin mystery progression
        this.initiateMysteryProgression();
        
        // Setup auto-save
        setInterval(() => {
            this.saveEnhancedGameState();
        }, 30000); // Auto-save every 30 seconds
    }
    
    startAtmosphericEffects() {
        // Initiate background particle systems
        this.createBackgroundParticles();
        
        // Start ambient audio
        this.startAmbientAudio();
        
        // Begin environmental animations
        this.startEnvironmentalAnimations();
    }
    
    initiateMysteryProgression() {
        // Show initial mystery prompt
        this.showInitialMysteryPrompt();
        
        // Setup discovery triggers
        this.setupDiscoveryTriggers();
        
        // Begin atmospheric story
        this.beginAtmosphericStory();
    }
    
    showInitialMysteryPrompt() {
        const storyContainer = document.getElementById('enhanced-story-text');
        if (!storyContainer) return;
        
        storyContainer.innerHTML = `
            <div class="discovery-highlight">Ancient energies swirl around you</div> as you stand in the village square of Dharmapura. 
            The very stones beneath your feet seem to <span class="discovery-highlight" data-element="mandala-stones">pulse with geometric harmony</span>, 
            and in the distance, you notice <span class="discovery-highlight" data-element="wisdom-pillar">a weathered pillar covered in shifting Sanskrit inscriptions</span>.
            
            <div class="secret-knowledge">
                Something tells you that this is no ordinary village. Hidden secrets await those with the eyes to see and the wisdom to understand.
            </div>
        `;
        
        // Make discovery highlights interactive
        document.querySelectorAll('.discovery-highlight[data-element]').forEach(highlight => {
            highlight.addEventListener('click', (e) => {
                const elementId = e.target.dataset.element;
                this.highlightInteractableElement(elementId);
            });
        });
    }
    
    highlightInteractableElement(elementId) {
        const element = document.querySelector(`[data-element-id="${elementId}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('highlighted');
            setTimeout(() => element.classList.remove('highlighted'), 2000);
        }
    }
    
    // Utility methods for enhanced effects
    createDiscoveryEffect(element, result) {
        // Create visual discovery effect
        const rect = element.getBoundingClientRect();
        const effect = document.createElement('div');
        effect.className = 'discovery-effect';
        effect.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top + rect.height/2}px;
            width: 40px;
            height: 40px;
            background: radial-gradient(circle, #ffc58f, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1001;
            animation: discovery-burst 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 1500);
        
        // Show discovery notification
        this.showDiscoveryNotification(result);
    }
    
    showDiscoveryNotification(result) {
        const notification = document.createElement('div');
        notification.className = 'discovery-notification show';
        notification.innerHTML = `
            <div class="notification-header">
                <div class="notification-icon">🌟</div>
                <div class="notification-title">Discovery Made!</div>
            </div>
            <div class="notification-content">${result.discovery}</div>
            <div class="philosophical-insight">"${result.philosophicalInsight}"</div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 800);
        }, 5000);
    }
}

// Integration function to replace existing game systems
function initializeCompleteGameplayOverhaul(gameStateManager) {
    // Create the enhanced gameplay engine
    const gameplayOverhaul = new GameplayOverhaulEngine(gameStateManager);
    
    // Replace existing render function
    window.originalRenderScene = window.renderScene;
    window.renderScene = function() {
        // Use the enhanced system instead of the original
        if (window.gameplayOverhaul) {
            window.gameplayOverhaul.refreshEnhancedInterface();
        } else {
            // Fallback to original if overhaul isn't ready
            if (window.originalRenderScene) {
                window.originalRenderScene();
            }
        }
    };
    
    // Make globally available
    window.gameplayOverhaul = gameplayOverhaul;
    
    // Override puzzle loading
    window.loadEnhancedPuzzle = function(puzzleId) {
        if (window.gameplayOverhaul) {
            window.gameplayOverhaul.loadEnhancedPuzzle(puzzleId);
        }
    };
    
    return gameplayOverhaul;
}

// Export for integration
window.GameplayOverhaulEngine = GameplayOverhaulEngine;
window.initializeCompleteGameplayOverhaul = initializeCompleteGameplayOverhaul;

/**
 * Complete Gameplay Overhaul Integration System
 * Brings together all enhanced systems into a cohesive premium philosophical adventure experience
 * Orchestrates atmospheric effects, puzzles, progression, and escape room mechanics
 */

function initializeCompleteGameplayOverhaul(gameStateManager) {
    // Initialize all enhanced systems
    const enhancedSystems = {
        atmospheric: new UltraEnhancedAtmosphericSystem(),
        escapeRoom: new UltraEnhancedEscapeRoomSystem(gameStateManager, window.storyEngine),
        progression: new UltraEnhancedProgressionSystem(gameStateManager),
        banyanPuzzle: null, // Initialized when needed
        barrierPuzzle: null  // Initialized when needed
    };
    
    // Create integration orchestrator
    const gameplayOrchestrator = {
        systems: enhancedSystems,
        activeEnhancements: new Set(),
        currentExperience: 'standard',
        cinematicMode: false,
        
        // Initialize the complete overhaul
        init() {
            console.log('🌟 Initializing Complete Gameplay Overhaul...');
            
            this.setupCrossSystemIntegration();
            this.enhanceExistingGameElements();
            this.createCinematicExperiences();
            this.setupPerformanceOptimization();
            this.activateEnhancedMode();
            
            console.log('✨ Complete Gameplay Overhaul Active!');
        },
        
        // Integrate all systems to work together
        setupCrossSystemIntegration() {
            // Connect atmospheric system to game state changes
            this.systems.atmospheric.onGameStateChange = (state) => {
                this.updateAtmosphericResponse(state);
            };
            
            // Connect escape room discoveries to progression system
            this.systems.escapeRoom.onDiscovery = (discovery) => {
                this.systems.progression.trackSpiritualGrowth('discovery', discovery.type, discovery.context);
                this.systems.atmospheric.createDiscoveryEffect(discovery);
            };
            
            // Connect progression milestones to atmospheric changes
            this.systems.progression.onMilestone = (milestone) => {
                this.systems.atmospheric.createMilestoneEffect(milestone);
                this.systems.escapeRoom.checkSecretAreaUnlocks();
            };
            
            // Set up event broadcasting between systems
            this.setupEventBroadcasting();
        },
        
        setupEventBroadcasting() {
            const eventBus = {
                events: new Map(),
                
                on(event, callback) {
                    if (!this.events.has(event)) {
                        this.events.set(event, []);
                    }
                    this.events.get(event).push(callback);
                },
                
                emit(event, data) {
                    if (this.events.has(event)) {
                        this.events.get(event).forEach(callback => callback(data));
                    }
                }
            };
            
            // Make event bus available to all systems
            Object.values(this.systems).forEach(system => {
                if (system && typeof system === 'object') {
                    system.eventBus = eventBus;
                }
            });
            
            // Setup key event listeners
            eventBus.on('choice_made', (choice) => this.handleChoiceMade(choice));
            eventBus.on('puzzle_solved', (puzzle) => this.handlePuzzleSolved(puzzle));
            eventBus.on('meditation_performed', (meditation) => this.handleMeditationPerformed(meditation));
            eventBus.on('discovery_made', (discovery) => this.handleDiscoveryMade(discovery));
            eventBus.on('consciousness_shift', (shift) => this.handleConsciousnessShift(shift));
            
            this.eventBus = eventBus;
        },
        
        // Enhance existing game elements with new capabilities
        enhanceExistingGameElements() {
            this.enhanceChoiceButtons();
            this.enhanceSceneTransitions();
            this.enhanceStatusDisplays();
            this.enhanceInventorySystem();
            this.enhanceStoryPresentation();
        },
        
        enhanceChoiceButtons() {
            // Add hover effects that reveal choice consequences
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const choices = node.querySelectorAll('.choice-button');
                            choices.forEach(choice => this.enhanceChoiceButton(choice));
                        }
                    });
                });
            });
            
            observer.observe(document.body, { childList: true, subtree: true });
        },
        
        enhanceChoiceButton(button) {
            if (button.enhanced) return;
            button.enhanced = true;
            
            // Add karma preview on hover
            button.addEventListener('mouseenter', () => {
                this.showChoicePreview(button);
            });
            
            button.addEventListener('mouseleave', () => {
                this.hideChoicePreview();
            });
            
            // Add spiritual resonance visualization
            this.addSpiritualResonanceVisualization(button);
        },
        
        addSpiritualResonanceVisualization(button) {
            const resonanceIndicator = document.createElement('div');
            resonanceIndicator.className = 'spiritual-resonance-indicator';
            
            // Calculate resonance based on player's spiritual development
            const resonance = this.calculateChoiceResonance(button);
            resonanceIndicator.style.opacity = resonance;
            resonanceIndicator.style.background = this.getResonanceColor(resonance);
            
            button.appendChild(resonanceIndicator);
        },
        
        calculateChoiceResonance(button) {
            const choiceText = button.textContent.toLowerCase();
            const playerProfile = gameStateManager.playerProfile;
            const consciousnessLevel = this.systems.progression.getCurrentConsciousnessLevel();
            
            // Analyze choice alignment with player's nature and development
            let resonance = 0.5; // Base resonance
            
            // Nakshatra-specific resonance
            if (playerProfile.nakshatra) {
                const nakshatraResonance = this.getNakshatraChoiceResonance(choiceText, playerProfile.nakshatra);
                resonance += nakshatraResonance * 0.3;
            }
            
            // Consciousness level resonance
            const consciousnessResonance = this.getConsciousnessChoiceResonance(choiceText, consciousnessLevel);
            resonance += consciousnessResonance * 0.2;
            
            return Math.min(1.0, Math.max(0.1, resonance));
        },
        
        getNakshatraChoiceResonance(choiceText, nakshatra) {
            const nakshatraAffinities = {
                'Ashwini': ['heal', 'help', 'quick', 'action'],
                'Bharani': ['transform', 'change', 'bear', 'endure'],
                'Krittika': ['cut', 'truth', 'clear', 'burn'],
                // ... Add all 27 Nakshatras
            };
            
            const affinities = nakshatraAffinities[nakshatra] || [];
            return affinities.some(word => choiceText.includes(word)) ? 0.8 : 0.2;
        },
        
        getConsciousnessChoiceResonance(choiceText, level) {
            const levelAffinities = {
                'reactive': ['immediate', 'emotional', 'personal'],
                'responsive': ['think', 'consider', 'balanced'],
                'creative': ['create', 'innovative', 'positive'],
                'integral': ['holistic', 'comprehensive', 'wise'],
                'transcendent': ['unity', 'love', 'transcend']
            };
            
            const affinities = levelAffinities[level] || [];
            return affinities.some(word => choiceText.includes(word)) ? 0.9 : 0.3;
        },
        
        getResonanceColor(resonance) {
            if (resonance > 0.8) return 'radial-gradient(circle, #FFD700, #FFA500)'; // Golden
            if (resonance > 0.6) return 'radial-gradient(circle, #00FF7F, #32CD32)'; // Green
            if (resonance > 0.4) return 'radial-gradient(circle, #87CEEB, #4169E1)'; // Blue
            return 'radial-gradient(circle, #DDA0DD, #9370DB)'; // Purple
        },
        
        // Create cinematic experiences for key moments
        createCinematicExperiences() {
            this.cinematicTriggers = {
                'first_choice': () => this.createFirstChoiceCinematic(),
                'puzzle_solved': (puzzle) => this.createPuzzleSolvedCinematic(puzzle),
                'wisdom_gained': (wisdom) => this.createWisdomGainedCinematic(wisdom),
                'consciousness_shift': (shift) => this.createConsciousnessShiftCinematic(shift),
                'discovery_made': (discovery) => this.createDiscoveryCinematic(discovery),
                'act_completion': (act) => this.createActCompletionCinematic(act)
            };
        },
        
        createFirstChoiceCinematic() {
            const cinematicOverlay = document.createElement('div');
            cinematicOverlay.className = 'cinematic-overlay first-choice';
            cinematicOverlay.innerHTML = `
                <div class="cinematic-content">
                    <h2 class="cinematic-title">Your Journey Begins</h2>
                    <p class="cinematic-text">Every choice you make shapes not only your story, but your very consciousness...</p>
                    <div class="cinematic-symbol">⚡</div>
                </div>
            `;
            
            this.showCinematicSequence(cinematicOverlay, 4000);
        },
        
        createPuzzleSolvedCinematic(puzzle) {
            const cinematicOverlay = document.createElement('div');
            cinematicOverlay.className = 'cinematic-overlay puzzle-solved';
            cinematicOverlay.innerHTML = `
                <div class="cinematic-content">
                    <h2 class="cinematic-title">Wisdom Unlocked</h2>
                    <p class="cinematic-text">Through understanding, the path forward becomes clear...</p>
                    <div class="cinematic-symbol">🧩</div>
                </div>
            `;
            
            this.showCinematicSequence(cinematicOverlay, 3000);
            this.systems.atmospheric.createCinematicMoments('puzzle_resolution', puzzle);
        },
        
        createConsciousnessShiftCinematic(shift) {
            const cinematicOverlay = document.createElement('div');
            cinematicOverlay.className = 'cinematic-overlay consciousness-shift';
            cinematicOverlay.innerHTML = `
                <div class="cinematic-content">
                    <h2 class="cinematic-title">Consciousness Expands</h2>
                    <p class="cinematic-text">You feel your awareness expanding, embracing new levels of understanding...</p>
                    <div class="cinematic-symbol expanding">🌟</div>
                </div>
            `;
            
            this.showCinematicSequence(cinematicOverlay, 5000);
            this.systems.atmospheric.createCinematicMoments('consciousness_expansion', shift);
        },
        
        showCinematicSequence(overlay, duration) {
            this.cinematicMode = true;
            document.body.appendChild(overlay);
            
            setTimeout(() => overlay.classList.add('active'), 100);
            
            setTimeout(() => {
                overlay.classList.remove('active');
                setTimeout(() => {
                    overlay.remove();
                    this.cinematicMode = false;
                }, 1000);
            }, duration);
        },
        
        // Enhanced puzzle loading system
        loadEnhancedPuzzle(puzzleId) {
            switch (puzzleId) {
                case 'BanyanTreeHarmony':
                    return this.loadEnhancedBanyanPuzzle();
                case 'BarrierOfNegativity':
                    return this.loadEnhancedBarrierPuzzle();
                default:
                    console.log(`No enhanced version available for puzzle: ${puzzleId}`);
                    return false;
            }
        },
        
        loadEnhancedBanyanPuzzle() {
            const puzzleContainer = document.getElementById('puzzle-container');
            if (!puzzleContainer) return false;
            
            if (window.BanyanPuzzleFactory) {
                this.systems.banyanPuzzle = window.BanyanPuzzleFactory.create(
                    puzzleContainer,
                    gameStateManager,
                    () => this.handlePuzzleCompletion('BanyanTreeHarmony'),
                    { variant: 'ultra' }
                );
            } else {
                this.systems.banyanPuzzle = new UltraEnhancedBanyanPuzzle(
                    puzzleContainer,
                    gameStateManager,
                    () => this.handlePuzzleCompletion('BanyanTreeHarmony')
                );
            }
            
            return true;
        },
        
        loadEnhancedBarrierPuzzle() {
            const puzzleContainer = document.getElementById('puzzle-container');
            if (!puzzleContainer) return false;
            
            this.systems.barrierPuzzle = new UltraEnhancedBarrierPuzzle(
                puzzleContainer,
                gameStateManager,
                () => this.handlePuzzleCompletion('BarrierOfNegativity')
            );
            
            return true;
        },
        
        handlePuzzleCompletion(puzzleId) {
            // Track the completion in progression system
            this.systems.progression.trackSpiritualGrowth('puzzle_mastery', puzzleId, {
                depth: 'profound',
                impact: 'transformative'
            });
            
            // Create completion cinematic
            this.eventBus.emit('puzzle_solved', { puzzleId, timestamp: Date.now() });
            
            // Check for new unlocks
            this.systems.escapeRoom.checkSecretAreaUnlocks();
            
            // Continue story progression
            this.continueStoryProgression(puzzleId);
        },
        
        continueStoryProgression(puzzleId) {
            // Update game state and continue story
            const completionKey = `${puzzleId}_completed`;
            gameStateManager.updateState(completionKey, true);
            
            // Trigger story continuation
            if (window.uiController && window.uiController.render) {
                setTimeout(() => {
                    window.uiController.render();
                }, 1500); // Allow time for cinematics
            }
        },
        
        // Performance optimization system
        setupPerformanceOptimization() {
            this.performanceMonitor = {
                frameRate: 60,
                lastFrameTime: 0,
                frameCount: 0,
                averageFrameTime: 16.67, // 60fps target
                
                startMonitoring() {
                    this.monitorLoop();
                },
                
                monitorLoop: () => {
                    const currentTime = performance.now();
                    const deltaTime = currentTime - this.performanceMonitor.lastFrameTime;
                    
                    this.performanceMonitor.frameCount++;
                    this.performanceMonitor.averageFrameTime = 
                        (this.performanceMonitor.averageFrameTime * 0.9) + (deltaTime * 0.1);
                    
                    // Adjust effects quality based on performance
                    if (this.performanceMonitor.averageFrameTime > 20) { // Below 50fps
                        this.reduceEffectsQuality();
                    } else if (this.performanceMonitor.averageFrameTime < 14) { // Above 70fps
                        this.increaseEffectsQuality();
                    }
                    
                    this.performanceMonitor.lastFrameTime = currentTime;
                    requestAnimationFrame(this.performanceMonitor.monitorLoop);
                }
            };
            
            this.performanceMonitor.startMonitoring();
        },
        
        reduceEffectsQuality() {
            // Reduce particle counts
            if (this.systems.atmospheric.particleEngine) {
                this.systems.atmospheric.particleEngine.qualityLevel = 'medium';
            }
            
            // Simplify animations
            document.documentElement.style.setProperty('--animation-complexity', 'reduced');
        },
        
        increaseEffectsQuality() {
            // Increase particle counts
            if (this.systems.atmospheric.particleEngine) {
                this.systems.atmospheric.particleEngine.qualityLevel = 'high';
            }
            
            // Enable full animations
            document.documentElement.style.setProperty('--animation-complexity', 'full');
        },
        
        // Event handlers for cross-system integration
        handleChoiceMade(choice) {
            // Track in progression system
            this.systems.progression.trackSpiritualGrowth('conscious_choice', choice.type, choice.context);
            
            // Update atmospheric response
            this.systems.atmospheric.updateEnvironmentalResponse('choice_made', choice);
            
            // Check for escape room implications
            this.systems.escapeRoom.examineEnvironmentCarefully(choice.location, 'choice_consequences');
        },
        
        handleMeditationPerformed(meditation) {
            // Track spiritual growth
            this.systems.progression.trackSpiritualGrowth('meditation', 'deep_practice', {
                duration: meditation.duration,
                depth: meditation.depth
            });
            
            // Create meditative atmospheric effects
            this.systems.atmospheric.createCinematicMoments('meditation_depth', meditation);
            
            // Potentially unlock hidden discoveries
            const discoveries = this.systems.escapeRoom.searchForTreasure(meditation.location, 'meditative_insight');
            discoveries.forEach(discovery => this.eventBus.emit('discovery_made', discovery));
        },
        
        handleDiscoveryMade(discovery) {
            // Track in progression
            this.systems.progression.trackSpiritualGrowth('discovery', discovery.type, discovery);
            
            // Create discovery effects
            this.systems.atmospheric.createDiscoveryEffect(discovery);
            
            // Update escape room state
            this.systems.escapeRoom.mysteryProgress.set(discovery.id, Date.now());
        },
        
        handleConsciousnessShift(shift) {
            // Update atmospheric system to match new consciousness level
            this.systems.atmospheric.updateEnvironmentalComplexity(shift.newLevel);
            
            // Unlock new escape room layers
            this.systems.escapeRoom.updateRevelationLayers();
            
            // Create consciousness shift cinematic
            this.createConsciousnessShiftCinematic(shift);
        },
        
        // Enhanced save/load integration
        saveEnhancedGameState() {
            const enhancedState = {
                atmospheric: this.systems.atmospheric.saveEnhancedGameState(),
                escapeRoom: {
                    discoveredClues: Object.fromEntries(this.systems.escapeRoom.discoveredClues),
                    mysteryProgress: Object.fromEntries(this.systems.escapeRoom.mysteryProgress),
                    unlockedAreas: Array.from(this.systems.escapeRoom.unlockedAreas),
                    solvedPuzzles: Array.from(this.systems.escapeRoom.solvedPuzzles)
                },
                progression: this.systems.progression.exportProgressionData(),
                gameplayOverhaulVersion: '1.0.0'
            };
            
            gameStateManager.updateState('enhancedGameplayState', enhancedState);
            return enhancedState;
        },
        
        loadEnhancedGameState() {
            const enhancedState = gameStateManager.worldState.enhancedGameplayState;
            if (!enhancedState) return false;
            
            // Load atmospheric state
            if (enhancedState.atmospheric) {
                this.systems.atmospheric.loadEnhancedGameState();
            }
            
            // Load escape room state
            if (enhancedState.escapeRoom) {
                const escapeRoomState = enhancedState.escapeRoom;
                this.systems.escapeRoom.discoveredClues = new Map(Object.entries(escapeRoomState.discoveredClues || {}));
                this.systems.escapeRoom.mysteryProgress = new Map(Object.entries(escapeRoomState.mysteryProgress || {}));
                this.systems.escapeRoom.unlockedAreas = new Set(escapeRoomState.unlockedAreas || []);
                this.systems.escapeRoom.solvedPuzzles = new Set(escapeRoomState.solvedPuzzles || []);
            }
            
            // Load progression state
            if (enhancedState.progression) {
                this.systems.progression.importProgressionData(enhancedState.progression);
            }
            
            return true;
        },
        
        // Activate enhanced mode
        activateEnhancedMode() {
            this.currentExperience = 'enhanced';
            this.activeEnhancements.add('atmospheric_system');
            this.activeEnhancements.add('escape_room_mechanics');
            this.activeEnhancements.add('enhanced_progression');
            this.activeEnhancements.add('cinematic_experiences');
            
            // Add enhanced mode indicator to UI
            this.addEnhancedModeIndicator();
            
            // Apply enhanced styles
            this.applyEnhancedStyling();
        },
        
        addEnhancedModeIndicator() {
            const indicator = document.createElement('div');
            indicator.className = 'enhanced-mode-indicator';
            indicator.innerHTML = '✨ Enhanced Experience Active';
            indicator.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: linear-gradient(45deg, #FFD700, #FFA500);
                color: #000;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                z-index: 10000;
                animation: pulse 2s ease-in-out infinite;
            `;
            
            document.body.appendChild(indicator);
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                indicator.style.opacity = '0.3';
                indicator.style.transform = 'scale(0.8)';
            }, 5000);
        },
        
        applyEnhancedStyling() {
            // Add enhanced mode CSS variables
            document.documentElement.style.setProperty('--enhanced-mode', '1');
            document.documentElement.style.setProperty('--atmospheric-intensity', '1.0');
            document.documentElement.style.setProperty('--cinematic-mode', 'enabled');
            
            // Load enhanced styles
            if (!document.getElementById('enhanced-gameplay-styles')) {
                const linkElement = document.createElement('link');
                linkElement.id = 'enhanced-gameplay-styles';
                linkElement.rel = 'stylesheet';
                linkElement.href = 'enhanced-banyan-integration.css';
                document.head.appendChild(linkElement);
            }
        }
    };
    
    // Initialize the complete gameplay overhaul
    gameplayOrchestrator.init();
    
    // Make the orchestrator globally available
    window.gameplayOverhaul = gameplayOrchestrator;
    
    return gameplayOrchestrator;
}

// Auto-initialize when dependencies are loaded
if (typeof window !== 'undefined') {
    window.initializeCompleteGameplayOverhaul = initializeCompleteGameplayOverhaul;
    
    // Check if we should auto-initialize
    if (window.gameStateManager && 
        window.UltraEnhancedAtmosphericSystem && 
        window.UltraEnhancedEscapeRoomSystem && 
        window.UltraEnhancedProgressionSystem) {
        
        console.log('🎮 Auto-initializing Complete Gameplay Overhaul...');
        initializeCompleteGameplayOverhaul(window.gameStateManager);
    }
}

/**
 * UnifiedGameFlow.js
 * 
 * Master controller for the entire Samsara Saga experience.
 * Manages seamless data flow, progression, and philosophical integration
 * across all game sections and provides beautiful transitions.
 */

class UnifiedGameFlow {
    constructor() {
        // Core game progression states
        this.gamePhases = {
            CHARACTER_CREATION: 'character_creation',
            PHILOSOPHICAL_AWAKENING: 'philosophical_awakening', 
            ACT_1_INTRODUCTION: 'act1_introduction',
            ACT_1_TRIALS: 'act1_trials',
            ACT_1_MASTERY: 'act1_mastery',
            ACT_2_JOURNEY: 'act2_journey',
            ACT_3_TRANSCENDENCE: 'act3_transcendence',
            ENLIGHTENMENT: 'enlightenment'
        };
        
        // Current game state
        this.currentPhase = this.gamePhases.CHARACTER_CREATION;
        this.gameStartTime = Date.now();
        
        // Unified player profile with enhanced attributes
        this.playerProfile = {
            // Core Identity
            nakshatra: null,
            nakshatraNumber: null,
            gana: null,
            shakti: null,
            pada: null,
            gunas: {
                sattva: 0,
                rajas: 0,
                tamas: 0
            },
            
            // Philosophical Development
            philosophicalUnderstanding: {
                karma: { level: 0, insights: [] },
                dharma: { level: 0, insights: [] },
                moksha: { level: 0, insights: [] },
                samsara: { level: 0, insights: [] }
            },
            
            // Character Development
            attributes: {
                wisdom: 0,
                compassion: 0,
                detachment: 0,
                determination: 0,
                spiritual_insight: 0
            },
            
            // Journey Progress
            journeyMilestones: [],
            decisionHistory: [],
            karmaPath: {
                positive: 0,
                negative: 0,
                balance: 0
            }
        };
        
        // World state and story progression
        this.worldState = {
            currentAct: 1,
            currentScene: 'JOURNEY_START',
            completedTrials: [],
            unlockedRegions: ['DHARMAPURA'],
            activeQuests: [],
            inventory: [],
            relationships: {},
            environmentalChanges: {}
        };
        
        // UI and experience state
        this.experienceState = {
            uiComplexity: 'simple',
            availableFeatures: ['basic_navigation', 'character_display'],
            transitionQueue: [],
            philosophicalDepth: 'introductory',
            visualTheme: 'dawn'
        };
        
        // Initialize systems
        this.initializeSystems();
    }
    
    /**
     * Initialize all game systems and establish data persistence
     */
    initializeSystems() {
        console.log('🌟 Initializing Unified Game Flow System...');
        
        // Set up auto-save system
        this.setupAutoSave();
        
        // Initialize philosophical progression system
        this.initializePhilosophicalSystem();
        
        // Set up transition system
        this.initializeTransitionSystem();
        
        // Load existing progress if available
        this.loadGameProgress();
        
        // Set up event listeners for seamless experience
        this.setupEventListeners();
        
        console.log('✅ Game Flow System initialized successfully');
    }
    
    /**
     * Initialize the philosophical progression system
     */
    initializePhilosophicalSystem() {
        this.philosophicalConcepts = {
            karma: {
                stages: [
                    { level: 0, concept: 'Action and Consequence', description: 'Every action creates ripples in the cosmic web' },
                    { level: 1, concept: 'Intentional Living', description: 'The quality of intention shapes the nature of outcome' },
                    { level: 2, concept: 'Karmic Liberation', description: 'Transcending the cycle through conscious action' }
                ]
            },
            dharma: {
                stages: [
                    { level: 0, concept: 'Righteous Path', description: 'Understanding duty and moral responsibility' },
                    { level: 1, concept: 'Cosmic Order', description: 'Aligning personal purpose with universal harmony' },
                    { level: 2, concept: 'Dharmic Mastery', description: 'Becoming a pillar of cosmic righteousness' }
                ]
            },
            moksha: {
                stages: [
                    { level: 0, concept: 'Liberation Seeking', description: 'Recognizing the chains of worldly attachment' },
                    { level: 1, concept: 'Ego Dissolution', description: 'Releasing the illusion of separate self' },
                    { level: 2, concept: 'Unity Consciousness', description: 'Realizing oneness with the cosmic absolute' }
                ]
            },
            samsara: {
                stages: [
                    { level: 0, concept: 'Cycle Recognition', description: 'Seeing the patterns of existence and rebirth' },
                    { level: 1, concept: 'Cycle Mastery', description: 'Conscious participation in the cosmic dance' },
                    { level: 2, concept: 'Cycle Transcendence', description: 'Breaking free from unconscious repetition' }
                ]
            }
        };
    }
    
    /**
     * Set up the cinematic transition system
     */
    initializeTransitionSystem() {
        this.transitionTemplates = {
            philosophical_insight: {
                duration: 3000,
                type: 'lotus_bloom',
                message: 'A profound understanding blossoms within...'
            },
            phase_advancement: {
                duration: 5000,
                type: 'cosmic_spiral',
                message: 'The journey deepens...'
            },
            trial_completion: {
                duration: 4000,
                type: 'mandala_formation',
                message: 'Wisdom crystallizes into understanding...'
            },
            scene_change: {
                duration: 2000,
                type: 'flowing_energy',
                message: null
            }
        };
    }
    
    /**
     * Load character data from various sources and integrate seamlessly
     */
    loadCharacterData(source = 'url') {
        console.log('📱 Loading character data from:', source);
        
        if (source === 'url') {
            // Extract from URL parameters (CB transfer)
            const urlParams = new URLSearchParams(window.location.search);
            const nakshatraNum = urlParams.get('nakshatra');
            const guna1 = urlParams.get('guna1');
            const pada = urlParams.get('pada');
            const guna3 = urlParams.get('guna3');
            
            if (nakshatraNum) {
                this.setCharacterFromNakshatra(parseInt(nakshatraNum), guna1, pada, guna3);
                this.advancePhase(this.gamePhases.PHILOSOPHICAL_AWAKENING);
                return true;
            }
        }
        
        // Try loading from localStorage
        const savedData = localStorage.getItem('samsaraSagaUnified');
        if (savedData) {
            try {
                const gameData = JSON.parse(savedData);
                this.restoreFromSave(gameData);
                return true;
            } catch (error) {
                console.warn('Failed to load saved data:', error);
            }
        }
        
        return false;
    }
    
    /**
     * Set character profile from nakshatra data
     */
    setCharacterFromNakshatra(nakshatraNumber, guna1, pada, guna3) {
        const nakshatraData = this.getNakshatraData(nakshatraNumber);
        if (!nakshatraData) return false;
        
        // Set core identity
        this.playerProfile.nakshatra = nakshatraData.name;
        this.playerProfile.nakshatraNumber = nakshatraNumber;
        this.playerProfile.gana = nakshatraData.gana;
        this.playerProfile.shakti = nakshatraData.shakti;
        this.playerProfile.pada = pada || 'Dharma';
        
        // Calculate gunas
        this.playerProfile.gunas = {
            sattva: this.calculateGunaValue('sattva', nakshatraNumber, guna1, guna3),
            rajas: this.calculateGunaValue('rajas', nakshatraNumber, guna1, guna3),
            tamas: this.calculateGunaValue('tamas', nakshatraNumber, guna1, guna3)
        };
        
        // Set initial attributes based on nakshatra
        this.setInitialAttributes(nakshatraData);
        
        // Log character creation milestone
        this.addJourneyMilestone('character_created', {
            nakshatra: this.playerProfile.nakshatra,
            gana: this.playerProfile.gana,
            timestamp: Date.now()
        });
        
        console.log('✨ Character profile established:', this.playerProfile);
        return true;
    }
    
    /**
     * Get nakshatra data by number
     */
    getNakshatraData(number) {
        const nakshatraDatabase = {
            1: { name: 'Ashwini', gana: 'Deva', element: 'fire', shakti: 'To heal quickly', deity: 'Ashvins' },
            2: { name: 'Bharani', gana: 'Manushya', element: 'earth', shakti: 'To renew and purify', deity: 'Yama' },
            3: { name: 'Krittika', gana: 'Rakshasa', element: 'fire', shakti: 'To burn illusion', deity: 'Agni' },
            4: { name: 'Rohini', gana: 'Manushya', element: 'earth', shakti: 'To make things grow', deity: 'Brahma' },
            5: { name: 'Mrigashira', gana: 'Deva', element: 'air', shakti: 'To find fulfillment', deity: 'Soma' },
            6: { name: 'Ardra', gana: 'Manushya', element: 'water', shakti: 'To feel and act', deity: 'Rudra' },
            7: { name: 'Punarvasu', gana: 'Deva', element: 'air', shakti: 'To regenerate and recover', deity: 'Aditi' },
            8: { name: 'Pushya', gana: 'Deva', element: 'water', shakti: 'To create spiritual energy', deity: 'Brihaspati' },
            9: { name: 'Ashlesha', gana: 'Rakshasa', element: 'water', shakti: 'To poison and heal', deity: 'Nagas' },
            10: { name: 'Magha', gana: 'Rakshasa', element: 'fire', shakti: 'To leave the body', deity: 'Pitrs' },
            11: { name: 'Purva Phalguni', gana: 'Manushya', element: 'fire', shakti: 'To find love and enjoyment', deity: 'Bhaga' },
            12: { name: 'Uttara Phalguni', gana: 'Manushya', element: 'fire', shakti: 'To accumulate security', deity: 'Aryaman' },
            13: { name: 'Hasta', gana: 'Manushya', element: 'fire', shakti: 'To manifest desires', deity: 'Savitri' },
            14: { name: 'Chitra', gana: 'Rakshasa', element: 'fire', shakti: 'To gather merit', deity: 'Vishvakarma' },
            15: { name: 'Swati', gana: 'Deva', element: 'air', shakti: 'To scatter and disperse', deity: 'Vayu' },
            16: { name: 'Vishakha', gana: 'Rakshasa', element: 'fire', shakti: 'To achieve goals', deity: 'Indra-Agni' },
            17: { name: 'Anuradha', gana: 'Deva', element: 'water', shakti: 'To worship and connect', deity: 'Mitra' },
            18: { name: 'Jyeshtha', gana: 'Rakshasa', element: 'air', shakti: 'To be eldest', deity: 'Indra' },
            19: { name: 'Mula', gana: 'Rakshasa', element: 'air', shakti: 'To destroy', deity: 'Nirriti' },
            20: { name: 'Purva Ashadha', gana: 'Manushya', element: 'water', shakti: 'To invigorate', deity: 'Apas' },
            21: { name: 'Uttara Ashadha', gana: 'Manushya', element: 'water', shakti: 'To gain victory', deity: 'Vishvadevas' },
            22: { name: 'Shravana', gana: 'Deva', element: 'air', shakti: 'To connect and link', deity: 'Vishnu' },
            23: { name: 'Dhanishta', gana: 'Rakshasa', element: 'air', shakti: 'To give fame', deity: 'Vasus' },
            24: { name: 'Shatabhisha', gana: 'Rakshasa', element: 'air', shakti: 'To heal', deity: 'Varuna' },
            25: { name: 'Purva Bhadrapada', gana: 'Manushya', element: 'air', shakti: 'To raise up', deity: 'Aja Ekapada' },
            26: { name: 'Uttara Bhadrapada', gana: 'Manushya', element: 'air', shakti: 'To bring rain', deity: 'Ahir Budhnya' },
            27: { name: 'Revati', gana: 'Deva', element: 'air', shakti: 'To nourish and protect', deity: 'Pushan' }
        };
        
        return nakshatraDatabase[number] || null;
    }
    
    /**
     * Calculate guna values based on nakshatra and choices
     */
    calculateGunaValue(guna, nakshatraNumber, guna1, guna3) {
        let value = 1; // Base value
        
        // Add nakshatra-specific modifiers
        const nakshatraGunaMap = {
            sattva: [8, 17, 22, 27, 20, 21, 25, 26, 19, 23, 24],
            rajas: [1, 5, 7, 2, 4, 6, 3, 9],
            tamas: [13, 15, 11, 12, 10, 14, 16, 18]
        };
        
        if (nakshatraGunaMap[guna].includes(nakshatraNumber)) {
            value += 1;
        }
        
        // Add choice-based modifiers
        if (guna1 === guna.charAt(0).toUpperCase() + guna.slice(1)) {
            value += 1;
        }
        if (guna3 === guna.charAt(0).toUpperCase() + guna.slice(1)) {
            value += 1;
        }
        
        return value;
    }
    
    /**
     * Set initial character attributes based on nakshatra
     */
    setInitialAttributes(nakshatraData) {
        const baseAttributes = {
            wisdom: 2,
            compassion: 2,
            detachment: 2,
            determination: 2,
            spiritual_insight: 2
        };
        
        // Modify based on gana
        switch (nakshatraData.gana) {
            case 'Deva':
                baseAttributes.compassion += 2;
                baseAttributes.spiritual_insight += 1;
                break;
            case 'Manushya':
                baseAttributes.wisdom += 1;
                baseAttributes.determination += 2;
                break;
            case 'Rakshasa':
                baseAttributes.determination += 2;
                baseAttributes.detachment += 1;
                break;
        }
        
        this.playerProfile.attributes = baseAttributes;
    }
    
    /**
     * Advance to the next game phase with transition
     */
    advancePhase(newPhase, transitionType = 'phase_advancement') {
        if (this.currentPhase === newPhase) return;
        
        console.log(`🚀 Advancing from ${this.currentPhase} to ${newPhase}`);
        
        const oldPhase = this.currentPhase;
        this.currentPhase = newPhase;
        
        // Queue transition
        this.queueTransition(transitionType, {
            from: oldPhase,
            to: newPhase,
            callback: () => this.onPhaseAdvanced(newPhase)
        });
        
        // Update UI complexity and available features
        this.updateExperienceState();
        
        // Save progress
        this.saveGameProgress();
    }
    
    /**
     * Handle phase advancement completion
     */
    onPhaseAdvanced(newPhase) {
        // Add milestone
        this.addJourneyMilestone('phase_advanced', {
            phase: newPhase,
            timestamp: Date.now()
        });

        // Unlock new features based on phase
        this.unlockPhaseFeatures(newPhase);

        // Trigger phase-specific events
        this.triggerPhaseEvents(newPhase);
    }

    /**
     * Unlock new features based on game phase
     */
    unlockPhaseFeatures(phase) {
        const phaseFeatures = {
            [this.gamePhases.CHARACTER_CREATION]: [
                'basic_navigation',
                'character_display'
            ],
            [this.gamePhases.PHILOSOPHICAL_AWAKENING]: [
                'philosophical_insights',
                'attribute_display',
                'decision_tracking'
            ],
            [this.gamePhases.ACT_1_INTRODUCTION]: [
                'story_progression',
                'choice_consequences',
                'karma_tracking'
            ],
            [this.gamePhases.ACT_1_TRIALS]: [
                'puzzle_system',
                'quest_tracking',
                'inventory_management',
                'meditation_ability'
            ],
            [this.gamePhases.ACT_1_MASTERY]: [
                'advanced_choices',
                'philosophical_mastery',
                'character_abilities',
                'achievement_system'
            ],
            [this.gamePhases.ACT_2_JOURNEY]: [
                'expanded_world',
                'advanced_puzzles',
                'relationship_system'
            ],
            [this.gamePhases.ACT_3_TRANSCENDENCE]: [
                'cosmic_awareness',
                'reality_manipulation',
                'enlightened_choices'
            ],
            [this.gamePhases.ENLIGHTENMENT]: [
                'complete_mastery',
                'universal_consciousness',
                'cosmic_influence'
            ]
        };

        const newFeatures = phaseFeatures[phase] || [];

        // Add new features to available features
        newFeatures.forEach(feature => {
            if (!this.experienceState.availableFeatures.includes(feature)) {
                this.experienceState.availableFeatures.push(feature);
                console.log(`🔓 Feature unlocked: ${feature}`);
            }
        });

        // Notify UI about new features if available
        if (window.gameUI && window.gameUI.onFeaturesUnlocked) {
            window.gameUI.onFeaturesUnlocked(newFeatures);
        }
    }

    /**
     * Trigger phase-specific events and setup
     */
    triggerPhaseEvents(phase) {
        console.log(`🎭 Triggering events for phase: ${phase}`);

        switch (phase) {
            case this.gamePhases.CHARACTER_CREATION:
                this.onCharacterCreationPhase();
                break;

            case this.gamePhases.PHILOSOPHICAL_AWAKENING:
                this.onPhilosophicalAwakeningPhase();
                break;

            case this.gamePhases.ACT_1_INTRODUCTION:
                this.onAct1IntroductionPhase();
                break;

            case this.gamePhases.ACT_1_TRIALS:
                this.onAct1TrialsPhase();
                break;

            case this.gamePhases.ACT_1_MASTERY:
                this.onAct1MasteryPhase();
                break;

            case this.gamePhases.ACT_2_JOURNEY:
                this.onAct2JourneyPhase();
                break;

            case this.gamePhases.ACT_3_TRANSCENDENCE:
                this.onAct3TranscendencePhase();
                break;

            case this.gamePhases.ENLIGHTENMENT:
                this.onEnlightenmentPhase();
                break;

            default:
                console.warn(`Unknown phase: ${phase}`);
        }

        // Dispatch custom event for UI systems
        if (typeof document !== 'undefined') {
            document.dispatchEvent(new CustomEvent('phaseAdvanced', {
                detail: {
                    phase: phase,
                    features: this.experienceState.availableFeatures,
                    playerProfile: this.playerProfile
                }
            }));
        }
    }

    /**
     * Character Creation phase setup
     */
    onCharacterCreationPhase() {
        console.log('🌱 Entering Character Creation phase');
        // Set up character creation specific elements
        this.worldState.currentScene = 'CHARACTER_SELECTION';
    }

    /**
     * Philosophical Awakening phase setup
     */
    onPhilosophicalAwakeningPhase() {
        console.log('🧘 Entering Philosophical Awakening phase');
        // Initialize philosophical tracking
        this.worldState.currentScene = 'AWAKENING_PROLOGUE';

        // Award initial philosophical insight
        if (this.playerProfile.nakshatra) {
            this.addJourneyMilestone('awakening_begins', {
                nakshatra: this.playerProfile.nakshatra,
                message: `The ${this.playerProfile.nakshatra} star awakens within you...`
            });
        }
    }

    /**
     * Act 1 Introduction phase setup
     */
    onAct1IntroductionPhase() {
        console.log('📖 Entering Act 1 Introduction phase');
        this.worldState.currentAct = 1;
        this.worldState.currentScene = 'JOURNEY_START';

        // Initialize story tracking
        this.worldState.completedTrials = [];
        this.worldState.activeQuests = [];
    }

    /**
     * Act 1 Trials phase setup
     */
    onAct1TrialsPhase() {
        console.log('⚔️ Entering Act 1 Trials phase');

        // Unlock meditation ability if not already present
        if (!this.experienceState.availableFeatures.includes('meditation_ability')) {
            this.experienceState.availableFeatures.push('meditation_ability');
        }

        // Initialize trial tracking
        this.addJourneyMilestone('trials_begin', {
            message: 'The trials of Dharmapura await...'
        });
    }

    /**
     * Act 1 Mastery phase setup
     */
    onAct1MasteryPhase() {
        console.log('🏆 Entering Act 1 Mastery phase');

        // Calculate mastery achievements
        const totalPhilosophicalLevel = Object.values(this.playerProfile.philosophicalUnderstanding)
            .reduce((sum, understanding) => sum + understanding.level, 0);

        if (totalPhilosophicalLevel >= 4) {
            this.addJourneyMilestone('philosophical_mastery', {
                level: totalPhilosophicalLevel,
                message: 'Your understanding of cosmic principles deepens...'
            });
        }
    }

    /**
     * Act 2 Journey phase setup
     */
    onAct2JourneyPhase() {
        console.log('🌄 Entering Act 2 Journey phase');
        this.worldState.currentAct = 2;
        this.worldState.unlockedRegions.push('EXPANDED_WORLD');
    }

    /**
     * Act 3 Transcendence phase setup
     */
    onAct3TranscendencePhase() {
        console.log('✨ Entering Act 3 Transcendence phase');
        this.worldState.currentAct = 3;
        this.worldState.unlockedRegions.push('COSMIC_REALMS');
    }

    /**
     * Enlightenment phase setup
     */
    onEnlightenmentPhase() {
        console.log('🌟 Entering Enlightenment phase');

        // Mark complete enlightenment
        this.addJourneyMilestone('enlightenment_achieved', {
            message: 'The cycle of Samsara is transcended...',
            finalAttributes: { ...this.playerProfile.attributes },
            finalPhilosophicalLevel: Object.values(this.playerProfile.philosophicalUnderstanding)
                .reduce((sum, understanding) => sum + understanding.level, 0)
        });
    }
    
    /**
     * Queue a cinematic transition
     */
    queueTransition(type, options = {}) {
        const transition = {
            type,
            template: this.transitionTemplates[type] || this.transitionTemplates.scene_change,
            options,
            id: Date.now() + Math.random()
        };
        
        this.experienceState.transitionQueue.push(transition);
        
        // If no transition is currently playing, start this one
        if (!this.currentTransition) {
            this.playNextTransition();
        }
    }
    
    /**
     * Play the next transition in queue
     */
    playNextTransition() {
        if (this.experienceState.transitionQueue.length === 0) {
            this.currentTransition = null;
            return;
        }
        
        const transition = this.experienceState.transitionQueue.shift();
        this.currentTransition = transition;
        
        console.log('🎬 Playing transition:', transition.type);
        
        // Create transition overlay
        this.createTransitionOverlay(transition);
        
        // Schedule completion
        setTimeout(() => {
            this.completeTransition(transition);
        }, transition.template.duration);
    }
    
    /**
     * Create beautiful transition overlay
     */
    createTransitionOverlay(transition) {
        // Remove existing overlay
        const existingOverlay = document.getElementById('unified-transition-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
        
        // Create new overlay
        const overlay = document.createElement('div');
        overlay.id = 'unified-transition-overlay';
        overlay.className = `transition-overlay ${transition.template.type}`;
        
        const content = `
            <div class="transition-content">
                <div class="transition-visual ${transition.template.type}">
                    ${this.getTransitionVisual(transition.template.type)}
                </div>
                ${transition.template.message ? `
                    <div class="transition-message">
                        ${transition.template.message}
                    </div>
                ` : ''}
            </div>
        `;
        
        overlay.innerHTML = content;
        document.body.appendChild(overlay);
        
        // Animate in
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
    }
    
    /**
     * Get transition visual based on type
     */
    getTransitionVisual(type) {
        const visuals = {
            lotus_bloom: `
                <svg class="lotus-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <g class="lotus-petals">
                        <path d="M100,100 Q120,80 100,60 Q80,80 100,100" class="petal" style="--delay: 0s"/>
                        <path d="M100,100 Q120,80 140,100 Q120,120 100,100" class="petal" style="--delay: 0.2s"/>
                        <path d="M100,100 Q120,120 100,140 Q80,120 100,100" class="petal" style="--delay: 0.4s"/>
                        <path d="M100,100 Q80,120 60,100 Q80,80 100,100" class="petal" style="--delay: 0.6s"/>
                    </g>
                    <circle cx="100" cy="100" r="15" class="lotus-center"/>
                </svg>
            `,
            cosmic_spiral: `
                <svg class="cosmic-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100,100 Q150,100 150,50 Q150,0 100,0 Q50,0 50,50 Q50,100 100,100 Q150,100 150,150 Q150,200 100,200" 
                          class="spiral-path" fill="none" stroke="url(#spiral-gradient)" stroke-width="3"/>
                    <defs>
                        <linearGradient id="spiral-gradient">
                            <stop offset="0%" stop-color="#e09658"/>
                            <stop offset="100%" stop-color="#63b4d1"/>
                        </linearGradient>
                    </defs>
                </svg>
            `,
            mandala_formation: `
                <svg class="mandala-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <g class="mandala-rings">
                        <circle cx="100" cy="100" r="20" class="ring ring-1"/>
                        <circle cx="100" cy="100" r="40" class="ring ring-2"/>
                        <circle cx="100" cy="100" r="60" class="ring ring-3"/>
                        <circle cx="100" cy="100" r="80" class="ring ring-4"/>
                    </g>
                </svg>
            `,
            flowing_energy: `
                <div class="energy-flow">
                    <div class="energy-stream stream-1"></div>
                    <div class="energy-stream stream-2"></div>
                    <div class="energy-stream stream-3"></div>
                </div>
            `
        };
        
        return visuals[type] || visuals.flowing_energy;
    }
    
    /**
     * Complete transition and clean up
     */
    completeTransition(transition) {
        const overlay = document.getElementById('unified-transition-overlay');
        if (overlay) {
            overlay.classList.add('fadeout');
            setTimeout(() => {
                overlay.remove();
            }, 500);
        }
        
        // Execute callback if provided
        if (transition.options.callback) {
            transition.options.callback();
        }
        
        // Play next transition
        setTimeout(() => {
            this.playNextTransition();
        }, 100);
    }
    
    /**
     * Record a decision in the player's history
     */
    recordDecision(decision) {
        this.playerProfile.decisionHistory.push({
            ...decision,
            timestamp: Date.now(),
            phase: this.currentPhase,
            scene: this.worldState.currentScene
        });
        
        // Analyze decision for philosophical growth
        this.analyzeDecisionForGrowth(decision);
        
        // Save progress
        this.saveGameProgress();
    }
    
    /**
     * Analyze decision for philosophical understanding growth
     */
    analyzeDecisionForGrowth(decision) {
        // Detect philosophical themes in the decision
        const themes = this.detectPhilosophicalThemes(decision);
        
        themes.forEach(theme => {
            this.advancePhilosophicalUnderstanding(theme, decision);
        });
    }
    
    /**
     * Detect philosophical themes in a decision
     */
    detectPhilosophicalThemes(decision) {
        const themes = [];
        const text = (decision.text || '').toLowerCase();
        
        // Karma-related keywords
        if (text.includes('consequence') || text.includes('result') || text.includes('action')) {
            themes.push('karma');
        }
        
        // Dharma-related keywords
        if (text.includes('duty') || text.includes('right') || text.includes('moral') || text.includes('should')) {
            themes.push('dharma');
        }
        
        // Moksha-related keywords
        if (text.includes('freedom') || text.includes('liberation') || text.includes('transcend')) {
            themes.push('moksha');
        }
        
        // Samsara-related keywords
        if (text.includes('cycle') || text.includes('pattern') || text.includes('repeat')) {
            themes.push('samsara');
        }
        
        return themes;
    }
    
    /**
     * Advance philosophical understanding
     */
    advancePhilosophicalUnderstanding(theme, decision) {
        const understanding = this.playerProfile.philosophicalUnderstanding[theme];
        if (!understanding) return;
        
        // Add insight
        understanding.insights.push({
            decision: decision.text,
            context: decision.context || '',
            timestamp: Date.now()
        });
        
        // Check for level advancement
        const insightCount = understanding.insights.length;
        const newLevel = Math.min(2, Math.floor(insightCount / 3));
        
        if (newLevel > understanding.level) {
            understanding.level = newLevel;
            this.triggerPhilosophicalInsight(theme, newLevel);
        }
    }
    
    /**
     * Trigger philosophical insight event
     */
    triggerPhilosophicalInsight(theme, level) {
        const concept = this.philosophicalConcepts[theme].stages[level];
        
        console.log(`💡 Philosophical insight gained: ${theme} level ${level}`);
        
        // Queue insight transition
        this.queueTransition('philosophical_insight', {
            theme,
            level,
            concept,
            callback: () => {
                this.displayPhilosophicalInsight(theme, concept);
            }
        });
        
        // Increase relevant attribute
        this.increaseAttributeFromPhilosophy(theme);
    }
    
    /**
     * Display philosophical insight to player
     */
    displayPhilosophicalInsight(theme, concept) {
        // This will be called by the UI system
        if (window.gameUI) {
            window.gameUI.showPhilosophicalInsight(theme, concept);
        }
    }
    
    /**
     * Increase character attributes from philosophical growth
     */
    increaseAttributeFromPhilosophy(theme) {
        const attributeMap = {
            karma: 'wisdom',
            dharma: 'determination',
            moksha: 'detachment',
            samsara: 'spiritual_insight'
        };
        
        const attribute = attributeMap[theme];
        if (attribute && this.playerProfile.attributes[attribute] < 10) {
            this.playerProfile.attributes[attribute]++;
            this.playerProfile.attributes.compassion = Math.min(10, this.playerProfile.attributes.compassion + 0.5);
        }
    }
    
    /**
     * Update experience state based on current progress
     */
    updateExperienceState() {
        // Determine UI complexity
        const phaseComplexity = {
            [this.gamePhases.CHARACTER_CREATION]: 'simple',
            [this.gamePhases.PHILOSOPHICAL_AWAKENING]: 'enhanced',
            [this.gamePhases.ACT_1_INTRODUCTION]: 'advanced',
            [this.gamePhases.ACT_1_TRIALS]: 'sophisticated',
            [this.gamePhases.ACT_1_MASTERY]: 'master'
        };
        
        this.experienceState.uiComplexity = phaseComplexity[this.currentPhase] || 'simple';
        
        // Update philosophical depth
        const totalPhilosophicalLevel = Object.values(this.playerProfile.philosophicalUnderstanding)
            .reduce((sum, understanding) => sum + understanding.level, 0);
        
        if (totalPhilosophicalLevel >= 6) {
            this.experienceState.philosophicalDepth = 'advanced';
        } else if (totalPhilosophicalLevel >= 3) {
            this.experienceState.philosophicalDepth = 'intermediate';
        } else {
            this.experienceState.philosophicalDepth = 'introductory';
        }
        
        // Update visual theme based on progress
        this.updateVisualTheme();
    }
    
    /**
     * Update visual theme based on spiritual progress
     */
    updateVisualTheme() {
        const totalAttributes = Object.values(this.playerProfile.attributes)
            .reduce((sum, attr) => sum + attr, 0);
        
        if (totalAttributes >= 40) {
            this.experienceState.visualTheme = 'enlightened';
        } else if (totalAttributes >= 30) {
            this.experienceState.visualTheme = 'illuminated';
        } else if (totalAttributes >= 20) {
            this.experienceState.visualTheme = 'awakened';
        } else {
            this.experienceState.visualTheme = 'dawn';
        }
    }
    
    /**
     * Add journey milestone
     */
    addJourneyMilestone(type, data) {
        this.playerProfile.journeyMilestones.push({
            type,
            data,
            timestamp: Date.now(),
            phase: this.currentPhase
        });
    }
    
    /**
     * Set up auto-save system
     */
    setupAutoSave() {
        // Save every 30 seconds
        setInterval(() => {
            this.saveGameProgress();
        }, 30000);
        
        // Save on page unload
        window.addEventListener('beforeunload', () => {
            this.saveGameProgress();
        });
    }
    
    /**
     * Save complete game progress
     */
    saveGameProgress() {
        const saveData = {
            version: '2.0.0',
            timestamp: Date.now(),
            gameStartTime: this.gameStartTime,
            currentPhase: this.currentPhase,
            playerProfile: this.playerProfile,
            worldState: this.worldState,
            experienceState: this.experienceState
        };
        
        try {
            localStorage.setItem('samsaraSagaUnified', JSON.stringify(saveData));
            console.log('💾 Game progress saved successfully');
            return true;
        } catch (error) {
            console.error('Failed to save game progress:', error);
            return false;
        }
    }
    
    /**
     * Load game progress
     */
    loadGameProgress() {
        try {
            const savedData = localStorage.getItem('samsaraSagaUnified');
            if (!savedData) return false;
            
            const gameData = JSON.parse(savedData);
            this.restoreFromSave(gameData);
            return true;
        } catch (error) {
            console.error('Failed to load game progress:', error);
            return false;
        }
    }
    
    /**
     * Restore game state from save data
     */
    restoreFromSave(gameData) {
        this.gameStartTime = gameData.gameStartTime || Date.now();
        this.currentPhase = gameData.currentPhase || this.gamePhases.CHARACTER_CREATION;
        this.playerProfile = { ...this.playerProfile, ...gameData.playerProfile };
        this.worldState = { ...this.worldState, ...gameData.worldState };
        this.experienceState = { ...this.experienceState, ...gameData.experienceState };
        
        console.log('���� Game progress restored from save');
    }
    
    /**
     * Set up event listeners for seamless experience
     */
    setupEventListeners() {
        // Listen for page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                // Page became visible - sync any missed updates
                this.syncGameState();
            }
        });
        
        // Listen for storage events (multiple tabs)
        window.addEventListener('storage', (event) => {
            if (event.key === 'samsaraSagaUnified') {
                // Another tab updated the save - reload if needed
                this.handleExternalSaveUpdate(event.newValue);
            }
        });
    }
    
    /**
     * Sync game state when page becomes visible
     */
    syncGameState() {
        // Check if we need to reload from localStorage
        const currentSave = localStorage.getItem('samsaraSagaUnified');
        if (currentSave) {
            try {
                const saveData = JSON.parse(currentSave);
                if (saveData.timestamp > this.lastSyncTime) {
                    console.log('🔄 Syncing with updated save data');
                    this.restoreFromSave(saveData);
                }
            } catch (error) {
                console.warn('Failed to sync save data:', error);
            }
        }
        this.lastSyncTime = Date.now();
    }
    
    /**
     * Handle save updates from other tabs
     */
    handleExternalSaveUpdate(newSaveData) {
        if (!newSaveData) return;
        
        try {
            const saveData = JSON.parse(newSaveData);
            if (saveData.timestamp > this.lastSyncTime) {
                console.log('🌐 Detected save update from another tab');
                this.restoreFromSave(saveData);
                
                // Trigger UI update if available
                if (window.gameUI) {
                    window.gameUI.refresh();
                }
            }
        } catch (error) {
            console.warn('Failed to handle external save update:', error);
        }
    }
    
    /**
     * Get current game status for UI display
     */
    getGameStatus() {
        return {
            phase: this.currentPhase,
            character: {
                name: this.playerProfile.nakshatra,
                gana: this.playerProfile.gana,
                level: this.calculatePlayerLevel(),
                attributes: this.playerProfile.attributes
            },
            progress: {
                philosophical: this.getPhilosophicalProgress(),
                journey: this.playerProfile.journeyMilestones.length,
                decisions: this.playerProfile.decisionHistory.length
            },
            ui: this.experienceState
        };
    }
    
    /**
     * Calculate player's overall level
     */
    calculatePlayerLevel() {
        const totalAttributes = Object.values(this.playerProfile.attributes)
            .reduce((sum, attr) => sum + attr, 0);
        return Math.floor(totalAttributes / 5) + 1;
    }
    
    /**
     * Get philosophical progress summary
     */
    getPhilosophicalProgress() {
        const progress = {};
        Object.entries(this.playerProfile.philosophicalUnderstanding).forEach(([theme, understanding]) => {
            progress[theme] = {
                level: understanding.level,
                insights: understanding.insights.length,
                nextLevelProgress: understanding.insights.length % 3
            };
        });
        return progress;
    }
}

// Export for global use
window.UnifiedGameFlow = UnifiedGameFlow;

// CSS styles for transitions
const transitionStyles = `
<style>
.transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(10, 9, 8, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.8s ease;
}

.transition-overlay.active {
    opacity: 1;
}

.transition-overlay.fadeout {
    opacity: 0;
    transition: opacity 0.5s ease;
}

.transition-content {
    text-align: center;
    color: #e09658;
}

.transition-visual {
    width: 200px;
    height: 200px;
    margin: 0 auto 2rem;
}

.transition-message {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    margin-top: 2rem;
    opacity: 0;
    animation: fadeInMessage 1s ease 1s forwards;
}

@keyframes fadeInMessage {
    to { opacity: 1; }
}

/* Lotus Bloom Animation */
.lotus-svg {
    width: 100%;
    height: 100%;
}

.lotus-petals .petal {
    fill: #e09658;
    opacity: 0;
    transform-origin: 100px 100px;
    animation: petalBloom 2s ease var(--delay) forwards;
}

.lotus-center {
    fill: #ffc994;
    opacity: 0;
    animation: centerGlow 1s ease 1.5s forwards;
}

@keyframes petalBloom {
    0% { opacity: 0; transform: scale(0) rotate(-90deg); }
    100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
}

@keyframes centerGlow {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

/* Cosmic Spiral Animation */
.cosmic-svg {
    width: 100%;
    height: 100%;
}

.spiral-path {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: spiralDraw 3s ease forwards;
}

@keyframes spiralDraw {
    to { stroke-dashoffset: 0; }
}

/* Mandala Formation Animation */
.mandala-svg {
    width: 100%;
    height: 100%;
}

.mandala-rings .ring {
    fill: none;
    stroke: #e09658;
    stroke-width: 2;
    opacity: 0;
    transform-origin: 100px 100px;
}

.ring-1 { animation: ringForm 0.8s ease 0s forwards; }
.ring-2 { animation: ringForm 0.8s ease 0.3s forwards; }
.ring-3 { animation: ringForm 0.8s ease 0.6s forwards; }
.ring-4 { animation: ringForm 0.8s ease 0.9s forwards; }

@keyframes ringForm {
    0% { opacity: 0; transform: scale(0); }
    100% { opacity: 0.7; transform: scale(1); }
}

/* Energy Flow Animation */
.energy-flow {
    position: relative;
    width: 200px;
    height: 200px;
}

.energy-stream {
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #63b4d1, transparent);
    opacity: 0;
}

.stream-1 {
    left: 50%;
    animation: streamFlow 2s ease 0s infinite;
}

.stream-2 {
    left: 30%;
    animation: streamFlow 2s ease 0.3s infinite;
}

.stream-3 {
    left: 70%;
    animation: streamFlow 2s ease 0.6s infinite;
}

@keyframes streamFlow {
    0%, 100% { opacity: 0; transform: translateY(100px); }
    50% { opacity: 1; transform: translateY(-100px); }
}
</style>
`;

// Inject transition styles
if (typeof document !== 'undefined') {
    document.head.insertAdjacentHTML('beforeend', transitionStyles);
}

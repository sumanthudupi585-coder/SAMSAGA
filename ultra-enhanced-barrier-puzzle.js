/**
 * Ultra-Enhanced BarrierOfNegativity Challenge System
 * Transforms the basic drag-drop interface into a sophisticated psychological and spiritual
 * transformation experience with multi-layered shadow work, karmic healing, and consciousness evolution
 */

class UltraEnhancedBarrierOfNegativity {
    constructor(container, gameStateManager, adventureEngine, onSolved) {
        this.container = container;
        this.gameStateManager = gameStateManager;
        this.adventureEngine = adventureEngine;
        this.onSolved = onSolved;
        
        // Multi-dimensional psychological challenge system
        this.psychologicalDimensions = {
            shadow_integration: 0,
            karmic_healing: 0,
            emotional_alchemy: 0,
            thought_transcendence: 0,
            unity_recognition: 0,
            compassion_cultivation: 0,
            wisdom_embodiment: 0
        };
        
        // Dynamic barrier consciousness simulation
        this.barrierConsciousness = {
            core_fear_patterns: this.generateCoreFearPatterns(),
            shadow_aspects: this.generateShadowAspects(),
            karmic_entanglements: this.generateKarmicEntanglements(),
            collective_unconscious_echoes: this.generateCollectiveEchoes(),
            personal_trauma_signatures: this.generateTraumaSignatures(),
            resistance_mechanisms: this.generateResistanceMechanisms()
        };
        
        // Adaptive challenge complexity
        this.adaptiveComplexity = {
            psychological_readiness: this.assessPsychologicalReadiness(),
            spiritual_maturity: this.assessSpiritualMaturity(),
            shadow_work_experience: this.assessShadowWorkExperience(),
            emotional_regulation_capacity: this.assessEmotionalCapacity(),
            philosophical_understanding: this.assessPhilosophicalUnderstanding()
        };
        
        // Interactive transformation phases
        this.transformationPhases = {
            1: { name: 'Recognition', description: 'Recognizing the barrier as projection' },
            2: { name: 'Acceptance', description: 'Accepting rejected aspects with compassion' },
            3: { name: 'Integration', description: 'Integrating shadow elements as teachers' },
            4: { name: 'Transmutation', description: 'Transmuting negative energy into wisdom' },
            5: { name: 'Transcendence', description: 'Transcending the duality of positive/negative' },
            6: { name: 'Unity', description: 'Recognizing the barrier as another face of consciousness' },
            7: { name: 'Liberation', description: 'Complete freedom from the concept of barriers' }
        };
        
        // Real-time psychological state monitoring
        this.psychologicalState = {
            current_emotional_frequency: 0,
            resistance_level: 100,
            compassion_quotient: 0,
            shadow_integration_depth: 0,
            ego_dissolution_progress: 0,
            heart_opening_capacity: 0,
            wisdom_embodiment_level: 0
        };
        
        // Escape room style psychological puzzles
        this.psychologicalPuzzles = {
            mirror_dialogues: this.createMirrorDialogues(),
            karmic_web_navigation: this.createKarmicWebNavigation(),
            emotion_alchemy_chambers: this.createEmotionAlchemyChambers(),
            thought_deconstruction_labs: this.createThoughtDeconstructionLabs(),
            unity_paradox_chambers: this.createUnityParadoxChambers(),
            wisdom_crystallization_process: this.createWisdomCrystallization()
        };
        
        this.currentPhase = 1;
        this.totalPhases = Object.keys(this.transformationPhases).length;
        this.hiddenChambers = new Set();
        this.unlockedWisdomKeys = new Set();
        
        this.init();
    }
    
    init() {
        this.calculateAdaptiveComplexity();
        this.createUltraEnhancedInterface();
        this.initializeBarrierConsciousnessSimulation();
        this.setupPsychologicalMonitoringSystems();
        this.activateTransformationPhase(1);
        this.startRealTimePsychologicalFeedback();
        this.loadTransformationProgress();
    }
    
    assessPsychologicalReadiness() {
        // Analyze player's readiness for deep psychological work
        const playerStats = this.gameStateManager.playerState.stats || {};
        const choices = this.gameStateManager.playerState.choiceHistory || [];
        const discoveries = this.adventureEngine.discoveries.size;
        
        // Analyze choice patterns for emotional maturity indicators
        const compassionateChoices = choices.filter(choice => 
            choice.type === 'compassionate' || choice.karma > 5
        ).length;
        
        const selfReflectiveChoices = choices.filter(choice => 
            choice.philosophical || choice.introspective
        ).length;
        
        return Math.min(100, 
            (compassionateChoices * 10) + 
            (selfReflectiveChoices * 15) + 
            (discoveries * 5) +
            (playerStats.meditationMinutes || 0)
        );
    }
    
    assessSpiritualMaturity() {
        const abilities = this.adventureEngine.characterAbilities;
        const totalAbilityLevels = Object.values(abilities).reduce((sum, level) => sum + level, 0);
        const insights = this.adventureEngine.philosophicalInsights.length;
        const karmaBalance = this.gameStateManager.playerState.karma || 0;
        
        return Math.min(100, 
            (totalAbilityLevels * 8) + 
            (insights * 12) + 
            Math.max(0, karmaBalance * 2)
        );
    }
    
    createUltraEnhancedInterface() {
        this.container.innerHTML = `
            <div class="ultra-barrier-transformation-container psychological-interface">
                <!-- Barrier Consciousness Visualization -->
                <div class="barrier-consciousness-field" id="barrier-field">
                    <div class="field-title">🌊 The Living Barrier: Maya's Teaching Form</div>
                    <canvas id="barrier-consciousness-canvas" width="800" height="500"></canvas>
                    <div class="barrier-nature-display">
                        <div class="nature-indicator">Current Nature: <span id="barrier-nature">Dense Resistance</span></div>
                        <div class="opacity-meter">
                            <div class="opacity-fill" id="barrier-opacity" style="width: 100%"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Transformation Phase Tracker -->
                <div class="transformation-phase-tracker">
                    <div class="tracker-title">🔄 Psychological Transformation Journey</div>
                    <div class="phase-progression" id="phase-progression">
                        ${Object.entries(this.transformationPhases).map(([phaseNum, phase]) => `
                            <div class="transformation-phase ${phaseNum == 1 ? 'active' : 'locked'}" 
                                 data-phase="${phaseNum}">
                                <div class="phase-number">${phaseNum}</div>
                                <div class="phase-name">${phase.name}</div>
                                <div class="phase-description">${phase.description}</div>
                                <div class="phase-progress-ring">
                                    <div class="progress-ring-fill" id="phase-${phaseNum}-progress"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Psychological State Monitor -->
                <div class="psychological-state-monitor">
                    <div class="monitor-title">🧠 Real-Time Psychological State Analysis</div>
                    <div class="state-dashboard" id="psychological-dashboard">
                        ${Object.keys(this.psychologicalState).map(state => `
                            <div class="psychological-meter">
                                <div class="meter-label">${this.formatStateName(state)}</div>
                                <div class="meter-visualization">
                                    <div class="meter-bar">
                                        <div class="meter-fill" id="${state}-fill" 
                                             style="--meter-color: ${this.getPsychologicalStateColor(state)}"></div>
                                    </div>
                                    <div class="meter-value" id="${state}-value">0%</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Active Transformation Phase Interface -->
                <div class="active-transformation-interface" id="active-interface">
                    <!-- Phase-specific content will be loaded here -->
                </div>
                
                <!-- Shadow Work Laboratory -->
                <div class="shadow-work-laboratory" id="shadow-lab" style="display: none;">
                    <div class="lab-title">🪞 Shadow Integration Laboratory</div>
                    <div class="shadow-mirror-chamber">
                        <div class="mirror-interface" id="shadow-mirror">
                            <!-- Interactive shadow dialogue interface -->
                        </div>
                        <div class="shadow-aspects-grid" id="shadow-aspects">
                            <!-- Dynamic shadow aspects will be populated here -->
                        </div>
                    </div>
                </div>
                
                <!-- Karmic Healing Chamber -->
                <div class="karmic-healing-chamber" id="karmic-chamber" style="display: none;">
                    <div class="chamber-title">⚖️ Karmic Pattern Resolution Chamber</div>
                    <div class="karmic-web-visualization">
                        <canvas id="karmic-web-canvas" width="600" height="400"></canvas>
                    </div>
                    <div class="karmic-dialogue-interface" id="karmic-dialogue">
                        <!-- Karmic pattern dialogue will appear here -->
                    </div>
                </div>
                
                <!-- Emotion Alchemy Laboratory -->
                <div class="emotion-alchemy-lab" id="alchemy-lab" style="display: none;">
                    <div class="lab-title">🧪 Emotional Alchemy Transformation Lab</div>
                    <div class="alchemy-interface">
                        <div class="emotion-cauldron" id="emotion-cauldron">
                            <canvas id="alchemy-cauldron-canvas" width="300" height="300"></canvas>
                        </div>
                        <div class="alchemy-controls" id="alchemy-controls">
                            <!-- Emotion transformation controls -->
                        </div>
                    </div>
                </div>
                
                <!-- Wisdom Crystallization Chamber -->
                <div class="wisdom-crystallization-chamber" id="wisdom-chamber" style="display: none;">
                    <div class="chamber-title">💎 Wisdom Crystallization Chamber</div>
                    <div class="crystallization-interface">
                        <div class="wisdom-crystal-formation" id="crystal-formation">
                            <canvas id="wisdom-crystal-canvas" width="400" height="400"></canvas>
                        </div>
                        <div class="wisdom-insights-display" id="wisdom-insights">
                            <!-- Crystallized wisdom will appear here -->
                        </div>
                    </div>
                </div>
                
                <!-- Advanced Psychological Tools -->
                <div class="advanced-psychological-tools">
                    <div class="tools-title">🔧 Advanced Consciousness Tools</div>
                    <div class="tool-categories">
                        <div class="tool-category">
                            <button class="psychological-tool primary" id="deep-introspection-btn">
                                <span class="tool-icon">🔍</span>
                                <span class="tool-name">Deep Introspection</span>
                            </button>
                            <button class="psychological-tool secondary" id="shadow-dialogue-btn" disabled>
                                <span class="tool-icon">🪞</span>
                                <span class="tool-name">Shadow Dialogue</span>
                            </button>
                            <button class="psychological-tool tertiary" id="karmic-healing-btn" disabled>
                                <span class="tool-icon">⚖️</span>
                                <span class="tool-name">Karmic Healing</span>
                            </button>
                        </div>
                        
                        <div class="tool-category">
                            <button class="psychological-tool advanced" id="emotion-alchemy-btn" disabled>
                                <span class="tool-icon">🧪</span>
                                <span class="tool-name">Emotion Alchemy</span>
                            </button>
                            <button class="psychological-tool master" id="unity-recognition-btn" disabled>
                                <span class="tool-icon">☯️</span>
                                <span class="tool-name">Unity Recognition</span>
                            </button>
                            <button class="psychological-tool transcendent" id="barrier-dissolution-btn" disabled>
                                <span class="tool-icon">∞</span>
                                <span class="tool-name">Barrier Dissolution</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Resistance Pattern Analysis -->
                <div class="resistance-pattern-analysis" id="resistance-analysis">
                    <div class="analysis-title">🛡️ Resistance Pattern Recognition</div>
                    <div class="resistance-patterns" id="resistance-patterns">
                        <!-- Dynamic resistance patterns will be shown here -->
                    </div>
                </div>
                
                <!-- Real-time Transformation Feedback -->
                <div class="transformation-feedback-stream">
                    <div class="feedback-title">💫 Consciousness Transformation Stream</div>
                    <div class="feedback-display" id="transformation-feedback">
                        <div class="feedback-message">
                            Scanning psychological patterns... Barrier consciousness initializing...
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.initializeBarrierVisualization();
        this.setupAdvancedEventListeners();
        this.updatePsychologicalStateDisplay();
    }
    
    activateTransformationPhase(phaseNumber) {
        this.currentPhase = phaseNumber;
        this.updatePhaseDisplay();
        
        const phases = {
            1: () => this.activatePhase1_Recognition(),
            2: () => this.activatePhase2_Acceptance(),
            3: () => this.activatePhase3_Integration(),
            4: () => this.activatePhase4_Transmutation(),
            5: () => this.activatePhase5_Transcendence(),
            6: () => this.activatePhase6_Unity(),
            7: () => this.activatePhase7_Liberation()
        };
        
        const phaseFunction = phases[phaseNumber];
        if (phaseFunction) {
            phaseFunction();
            this.updateBarrierConsciousness();
            this.providePsychologicalFeedback(`Entering Phase ${phaseNumber}: ${this.transformationPhases[phaseNumber].name}`);
        }
    }
    
    activatePhase1_Recognition() {
        const interface = document.getElementById('active-interface');
        interface.innerHTML = `
            <div class="phase-container recognition-phase">
                <div class="phase-title">Phase 1: The Mirror of Recognition</div>
                <div class="phase-description">
                    "This barrier is not external—it is a reflection of your own inner resistance. 
                    What you see 'out there' exists first within your own consciousness."
                </div>
                
                <div class="recognition-interface">
                    <div class="projection-awareness-exercise">
                        <div class="exercise-title">🎭 Projection Recognition Exercise</div>
                        <div class="projection-scenario">
                            <p>Look at the barrier. What qualities do you see in it?</p>
                            <div class="barrier-quality-selector">
                                <div class="quality-prompt">Select the qualities you perceive in the barrier:</div>
                                <div class="quality-options" id="barrier-qualities">
                                    ${this.generateBarrierQualityOptions().map(quality => `
                                        <label class="quality-option">
                                            <input type="checkbox" value="${quality.id}" class="quality-checkbox">
                                            <span class="quality-label">${quality.name}</span>
                                            <span class="quality-description">${quality.description}</span>
                                        </label>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div class="projection-insight" id="projection-insight" style="display: none;">
                                <div class="insight-title">🌟 Recognition Insight</div>
                                <div class="insight-content" id="insight-content">
                                    <!-- Personalized insight will appear here -->
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="inner-barrier-exploration">
                        <div class="exploration-title">🔍 Inner Barrier Archaeology</div>
                        <div class="exploration-prompt">
                            "Now look within. Where in your life do you create similar barriers?"
                        </div>
                        <div class="inner-exploration-interface">
                            <div class="life-area-selector">
                                <div class="area-prompt">Explore these areas of your inner life:</div>
                                <div class="life-areas" id="life-areas">
                                    <div class="life-area" data-area="relationships">
                                        <div class="area-icon">❤️</div>
                                        <div class="area-name">Relationships</div>
                                        <div class="area-barrier-check">
                                            <button class="explore-btn" data-exploration="relationships">Explore Barriers</button>
                                        </div>
                                    </div>
                                    <div class="life-area" data-area="creativity">
                                        <div class="area-icon">🎨</div>
                                        <div class="area-name">Creative Expression</div>
                                        <div class="area-barrier-check">
                                            <button class="explore-btn" data-exploration="creativity">Explore Barriers</button>
                                        </div>
                                    </div>
                                    <div class="life-area" data-area="spirituality">
                                        <div class="area-icon">🙏</div>
                                        <div class="area-name">Spiritual Growth</div>
                                        <div class="area-barrier-check">
                                            <button class="explore-btn" data-exploration="spirituality">Explore Barriers</button>
                                        </div>
                                    </div>
                                    <div class="life-area" data-area="authenticity">
                                        <div class="area-icon">✨</div>
                                        <div class="area-name">Authentic Self</div>
                                        <div class="area-barrier-check">
                                            <button class="explore-btn" data-exploration="authenticity">Explore Barriers</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="inner-barrier-revelation" id="inner-revelation" style="display: none;">
                                <div class="revelation-content" id="revelation-content">
                                    <!-- Personal barrier insights will appear here -->
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="recognition-completion-chamber">
                        <div class="completion-title">🎯 Recognition Integration</div>
                        <div class="completion-challenge">
                            Complete this statement with radical honesty:
                        </div>
                        <div class="completion-interface">
                            <div class="statement-completion">
                                <p>"This barrier exists because I am avoiding..."</p>
                                <textarea id="recognition-statement" 
                                          placeholder="Write your recognition here..."></textarea>
                                <button id="integrate-recognition-btn" class="integration-btn">
                                    Integrate Recognition
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupRecognitionInteractions();
    }
    
    activatePhase2_Acceptance() {
        const interface = document.getElementById('active-interface');
        interface.innerHTML = `
            <div class="phase-container acceptance-phase">
                <div class="phase-title">Phase 2: The Heart of Acceptance</div>
                <div class="phase-description">
                    "Resistance only strengthens what you resist. True transformation begins with 
                    accepting what is, including the parts of yourself you've been fighting."
                </div>
                
                <div class="acceptance-interface">
                    <div class="self-compassion-practice">
                        <div class="practice-title">💗 Self-Compassion Cultivation</div>
                        <div class="compassion-guidance">
                            <p>Place your hand on your heart and speak to yourself as you would to a beloved friend:</p>
                            <div class="compassion-phrases">
                                <div class="phrase-category">
                                    <div class="category-title">Acknowledge Your Struggle:</div>
                                    <div class="phrase-options">
                                        <button class="compassion-phrase" data-category="struggle">
                                            "This is a moment of suffering"
                                        </button>
                                        <button class="compassion-phrase" data-category="struggle">
                                            "I am experiencing difficulty"
                                        </button>
                                        <button class="compassion-phrase" data-category="struggle">
                                            "This feels painful right now"
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="phrase-category">
                                    <div class="category-title">Remember Universal Human Experience:</div>
                                    <div class="phrase-options">
                                        <button class="compassion-phrase" data-category="universal">
                                            "Suffering is part of the human experience"
                                        </button>
                                        <button class="compassion-phrase" data-category="universal">
                                            "I am not alone in this struggle"
                                        </button>
                                        <button class="compassion-phrase" data-category="universal">
                                            "All beings experience challenges"
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="phrase-category">
                                    <div class="category-title">Offer Yourself Kindness:</div>
                                    <div class="phrase-options">
                                        <button class="compassion-phrase" data-category="kindness">
                                            "May I be kind to myself"
                                        </button>
                                        <button class="compassion-phrase" data-category="kindness">
                                            "May I give myself the compassion I need"
                                        </button>
                                        <button class="compassion-phrase" data-category="kindness">
                                            "May I accept myself exactly as I am"
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="compassion-heart-monitor">
                                <div class="heart-title">Heart Opening Measurement</div>
                                <div class="heart-meter">
                                    <div class="heart-fill" id="heart-opening-fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="rejected-aspects-ceremony">
                        <div class="ceremony-title">🕯️ Welcoming the Rejected Aspects</div>
                        <div class="ceremony-description">
                            "What we reject in ourselves becomes the shadow that haunts us. 
                            Today, we invite these rejected parts back home with love."
                        </div>
                        <div class="ceremony-interface">
                            <div class="rejected-aspects-altar" id="aspects-altar">
                                <!-- Rejected aspects will be dynamically populated -->
                            </div>
                            <div class="welcoming-ritual">
                                <div class="ritual-instruction">
                                    For each rejected aspect, speak these words of welcome:
                                </div>
                                <div class="ritual-phrases">
                                    <button class="ritual-phrase" id="welcome-phrase-1">
                                        "I see you and acknowledge your presence"
                                    </button>
                                    <button class="ritual-phrase" id="welcome-phrase-2">
                                        "I understand you have been trying to protect me"
                                    </button>
                                    <button class="ritual-phrase" id="welcome-phrase-3">
                                        "I welcome you back into my conscious awareness"
                                    </button>
                                    <button class="ritual-phrase" id="welcome-phrase-4">
                                        "I am grateful for the gifts you bring"
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="acceptance-integration-chamber">
                        <div class="integration-title">🌊 Acceptance Integration</div>
                        <div class="integration-meditation">
                            <div class="meditation-guidance">
                                <p>Breathe deeply and repeat this acceptance mantra:</p>
                                <div class="mantra-display">
                                    "I accept all aspects of myself with love and compassion"
                                </div>
                                <button id="begin-acceptance-meditation" class="meditation-btn">
                                    Begin Acceptance Meditation
                                </button>
                                <div class="meditation-timer" id="acceptance-timer" style="display: none;">
                                    <div class="timer-display">3:00</div>
                                    <div class="breathing-guide">
                                        <div class="breath-instruction" id="breath-instruction">Breathe in love...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupAcceptanceInteractions();
        this.populateRejectedAspects();
    }
    
    activatePhase3_Integration() {
        const interface = document.getElementById('active-interface');
        interface.innerHTML = `
            <div class="phase-container integration-phase">
                <div class="phase-title">Phase 3: The Alchemy of Integration</div>
                <div class="phase-description">
                    "Integration doesn't mean becoming the shadow—it means discovering the 
                    gold hidden within it. Every rejected aspect carries a gift."
                </div>
                
                <div class="integration-interface">
                    <div class="shadow-gift-discovery">
                        <div class="discovery-title">💝 Discovering the Hidden Gifts</div>
                        <div class="gift-exploration-matrix">
                            <div class="matrix-instructions">
                                For each shadow aspect, discover its hidden gift:
                            </div>
                            <div class="shadow-gift-pairs" id="shadow-gift-matrix">
                                <!-- Shadow-gift pairs will be populated -->
                            </div>
                        </div>
                    </div>
                    
                    <div class="personality-integration-lab">
                        <div class="lab-title">🧬 Personality Integration Laboratory</div>
                        <div class="integration-process">
                            <div class="process-visualization">
                                <canvas id="integration-process-canvas" width="500" height="300"></canvas>
                            </div>
                            <div class="integration-controls">
                                <div class="control-title">Integration Process Controls</div>
                                <div class="integration-sliders">
                                    <div class="slider-group">
                                        <label>Compassion Level</label>
                                        <input type="range" id="compassion-slider" min="0" max="100" value="50">
                                        <span id="compassion-value">50%</span>
                                    </div>
                                    <div class="slider-group">
                                        <label>Understanding Depth</label>
                                        <input type="range" id="understanding-slider" min="0" max="100" value="30">
                                        <span id="understanding-value">30%</span>
                                    </div>
                                    <div class="slider-group">
                                        <label>Wisdom Synthesis</label>
                                        <input type="range" id="wisdom-slider" min="0" max="100" value="20">
                                        <span id="wisdom-value">20%</span>
                                    </div>
                                </div>
                                
                                <div class="integration-harmony-meter">
                                    <div class="harmony-title">Integration Harmony</div>
                                    <div class="harmony-level" id="integration-harmony">0%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="wisdom-synthesis-chamber">
                        <div class="synthesis-title">📚 Wisdom Synthesis Chamber</div>
                        <div class="synthesis-process">
                            <div class="synthesis-question">
                                "How can you embody this shadow aspect's gift in a healthy, conscious way?"
                            </div>
                            <div class="synthesis-interface">
                                <div class="aspect-selector">
                                    <label>Choose an integrated aspect:</label>
                                    <select id="integrated-aspect-selector">
                                        <!-- Integrated aspects will be populated -->
                                    </select>
                                </div>
                                <div class="wisdom-formulation">
                                    <label>Formulate your wisdom integration:</label>
                                    <textarea id="wisdom-integration-text" 
                                              placeholder="Describe how you will consciously express this aspect's gift..."></textarea>
                                </div>
                                <button id="crystallize-wisdom-btn" class="crystallization-btn">
                                    Crystallize Wisdom
                                </button>
                            </div>
                            
                            <div class="crystallized-wisdom-display" id="wisdom-crystals" style="display: none;">
                                <div class="crystals-title">💎 Crystallized Wisdom Gems</div>
                                <div class="wisdom-gems" id="wisdom-gems-container">
                                    <!-- Wisdom gems will appear here -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupIntegrationInteractions();
        this.populateShadowGiftMatrix();
        this.initializeIntegrationVisualization();
    }
    
    generateBarrierQualityOptions() {
        const baseQualities = [
            { id: 'dark', name: 'Dark/Shadowy', description: 'Appears black, ominous, or threatening' },
            { id: 'solid', name: 'Solid/Immovable', description: 'Seems completely impenetrable' },
            { id: 'hostile', name: 'Hostile/Aggressive', description: 'Feels actively antagonistic' },
            { id: 'cold', name: 'Cold/Distant', description: 'Emotionally unavailable or distant' },
            { id: 'chaotic', name: 'Chaotic/Unpredictable', description: 'Unstable and confusing' },
            { id: 'judgmental', name: 'Judgmental/Critical', description: 'Seems to criticize or judge' },
            { id: 'fearful', name: 'Fear-Inducing', description: 'Creates fear or anxiety' },
            { id: 'heavy', name: 'Heavy/Oppressive', description: 'Feels burdensome or overwhelming' }
        ];
        
        // Adapt based on player's psychological readiness
        if (this.adaptiveComplexity.psychological_readiness > 60) {
            baseQualities.push(
                { id: 'protective', name: 'Protective/Defensive', description: 'Might be trying to protect something' },
                { id: 'wounded', name: 'Wounded/Hurt', description: 'Seems to be in pain or suffering' },
                { id: 'misunderstood', name: 'Misunderstood', description: 'May not be what it appears to be' }
            );
        }
        
        return baseQualities;
    }
    
    generateCoreFearPatterns() {
        return [
            {
                id: 'abandonment',
                name: 'Fear of Abandonment',
                description: 'Deep fear of being left alone or rejected',
                psychological_root: 'Early attachment wounds',
                transformation_key: 'Self-love and inner security',
                manifestation_strength: 70 + Math.random() * 30
            },
            {
                id: 'inadequacy',
                name: 'Fear of Inadequacy',
                description: 'Core belief of not being good enough',
                psychological_root: 'Conditional love and perfectionism',
                transformation_key: 'Inherent worth recognition',
                manifestation_strength: 60 + Math.random() * 40
            },
            {
                id: 'powerlessness',
                name: 'Fear of Powerlessness',
                description: 'Terror of being helpless or controlled',
                psychological_root: 'Trauma and loss of agency',
                transformation_key: 'Reclaiming personal power',
                manifestation_strength: 50 + Math.random() * 50
            },
            {
                id: 'meaninglessness',
                name: 'Fear of Meaninglessness',
                description: 'Existential anxiety about purpose and significance',
                psychological_root: 'Disconnection from source',
                transformation_key: 'Spiritual reconnection',
                manifestation_strength: 40 + Math.random() * 60
            }
        ];
    }
    
    generateShadowAspects() {
        const shadowAspects = [
            {
                id: 'anger',
                name: 'Suppressed Anger',
                description: 'Rage that was deemed unacceptable and pushed down',
                gift: 'Healthy boundaries and righteous action',
                integration_challenge: 'Express anger constructively',
                wisdom_teaching: 'Anger is energy for change and protection of what you value'
            },
            {
                id: 'selfishness',
                name: 'Rejected Selfishness',
                description: 'Self-care that was labeled as selfish',
                gift: 'Healthy self-love and self-advocacy',
                integration_challenge: 'Care for yourself without guilt',
                wisdom_teaching: 'You cannot pour from an empty cup - self-care enables service'
            },
            {
                id: 'vulnerability',
                name: 'Hidden Vulnerability',
                description: 'Softness that was seen as weakness',
                gift: 'Authentic connection and emotional intelligence',
                integration_challenge: 'Show your tender heart safely',
                wisdom_teaching: 'Vulnerability is the birthplace of courage, creativity, and change'
            },
            {
                id: 'wildness',
                name: 'Tamed Wildness',
                description: 'Natural spontaneity that was socialized away',
                gift: 'Creative freedom and authentic expression',
                integration_challenge: 'Express your wild nature appropriately',
                wisdom_teaching: 'Your wildness is your life force - channel it, don\'t suppress it'
            }
        ];
        
        // Personalize based on player choices and karma
        const karma = this.gameStateManager.playerState.karma || 0;
        if (karma < 0) {
            shadowAspects.push({
                id: 'guilt',
                name: 'Accumulated Guilt',
                description: 'Self-punishment for past actions',
                gift: 'Moral sensitivity and capacity for growth',
                integration_challenge: 'Forgive yourself and make amends',
                wisdom_teaching: 'Guilt is meant to guide you back to love, not punish you forever'
            });
        }
        
        return shadowAspects;
    }
    
    setupAdvancedEventListeners() {
        // Deep introspection
        document.getElementById('deep-introspection-btn')?.addEventListener('click', () => {
            this.initiateDeepIntrospection();
        });
        
        // Shadow dialogue
        document.getElementById('shadow-dialogue-btn')?.addEventListener('click', () => {
            this.openShadowDialogue();
        });
        
        // Karmic healing
        document.getElementById('karmic-healing-btn')?.addEventListener('click', () => {
            this.initializeKarmicHealing();
        });
        
        // Emotion alchemy
        document.getElementById('emotion-alchemy-btn')?.addEventListener('click', () => {
            this.openEmotionAlchemy();
        });
        
        // Unity recognition
        document.getElementById('unity-recognition-btn')?.addEventListener('click', () => {
            this.initiateUnityRecognition();
        });
        
        // Barrier dissolution
        document.getElementById('barrier-dissolution-btn')?.addEventListener('click', () => {
            this.initiateBarrierDissolution();
        });
        
        // Phase progression clicks
        document.querySelectorAll('.transformation-phase').forEach(phase => {
            phase.addEventListener('click', (e) => {
                const phaseNum = parseInt(e.currentTarget.dataset.phase);
                if (!e.currentTarget.classList.contains('locked')) {
                    this.activateTransformationPhase(phaseNum);
                }
            });
        });
        
        this.setupRealTimePsychologicalMonitoring();
    }
    
    setupRecognitionInteractions() {
        // Quality selection
        document.querySelectorAll('.quality-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.processQualitySelection();
            });
        });
        
        // Life area exploration
        document.querySelectorAll('.explore-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const area = e.target.dataset.exploration;
                this.exploreLifeAreaBarriers(area);
            });
        });
        
        // Recognition integration
        document.getElementById('integrate-recognition-btn')?.addEventListener('click', () => {
            this.integrateRecognition();
        });
    }
    
    processQualitySelection() {
        const selectedQualities = Array.from(document.querySelectorAll('.quality-checkbox:checked'))
            .map(checkbox => checkbox.value);
        
        if (selectedQualities.length >= 3) {
            this.generateProjectionInsight(selectedQualities);
            this.psychologicalDimensions.shadow_integration += 10;
            this.updatePsychologicalStateDisplay();
        }
    }
    
    generateProjectionInsight(qualities) {
        const insightContainer = document.getElementById('projection-insight');
        const insightContent = document.getElementById('insight-content');
        
        const insights = {
            dark: "Darkness often represents the unknown or unexplored aspects of yourself.",
            solid: "Rigidity in the barrier may reflect areas where you've become inflexible in your life.",
            hostile: "Perceived hostility might mirror your own inner critic or rejected anger.",
            cold: "Emotional distance could reflect places where you've shut down your heart for protection.",
            fearful: "The fear you see may be your own fear of change or growth projected outward."
        };
        
        const selectedInsights = qualities.map(quality => insights[quality]).filter(Boolean);
        
        insightContent.innerHTML = `
            <p><strong>Your Projection Pattern:</strong></p>
            <p>${selectedInsights.join(' ')}</p>
            <p><strong>Recognition Wisdom:</strong> What you see in the barrier exists first within your own consciousness. By recognizing this, you begin to reclaim your projections and transform them.</p>
        `;
        
        insightContainer.style.display = 'block';
        
        // Update resistance level
        this.psychologicalState.resistance_level -= 15;
        this.providePsychologicalFeedback("Projection patterns recognized. Inner awareness expanding...");
    }
    
    exploreLifeAreaBarriers(area) {
        const revelationContainer = document.getElementById('inner-revelation');
        const revelationContent = document.getElementById('revelation-content');
        
        const areaInsights = {
            relationships: {
                barriers: ["Fear of vulnerability", "Need for control", "Attachment to being right"],
                insight: "In relationships, we often recreate the same barriers we see in this spiritual challenge."
            },
            creativity: {
                barriers: ["Fear of judgment", "Perfectionism", "Comparison with others"],
                insight: "Creative blocks mirror the same resistance patterns that create spiritual barriers."
            },
            spirituality: {
                barriers: ["Doubt", "Unworthiness", "Intellectual pride"],
                insight: "Spiritual barriers often reflect our deepest fears about our true nature."
            },
            authenticity: {
                barriers: ["Social conditioning", "Fear of rejection", "Imposter syndrome"],
                insight: "The mask we wear to fit in becomes the barrier between us and our true self."
            }
        };
        
        const areaData = areaInsights[area];
        if (areaData) {
            revelationContent.innerHTML = `
                <div class="area-exploration-result">
                    <h4>Inner Barriers in ${area.charAt(0).toUpperCase() + area.slice(1)}:</h4>
                    <ul>
                        ${areaData.barriers.map(barrier => `<li>${barrier}</li>`).join('')}
                    </ul>
                    <p class="area-insight"><strong>Insight:</strong> ${areaData.insight}</p>
                </div>
            `;
            
            revelationContainer.style.display = 'block';
            
            // Update psychological state
            this.psychologicalDimensions.shadow_integration += 8;
            this.psychologicalState.resistance_level -= 10;
            this.updatePsychologicalStateDisplay();
        }
    }
    
    integrateRecognition() {
        const statement = document.getElementById('recognition-statement').value.trim();
        
        if (statement.length > 20) {
            this.providePsychologicalFeedback("Recognition statement integrated. Moving to Acceptance phase...");
            
            // Update psychological dimensions
            this.psychologicalDimensions.shadow_integration += 25;
            this.psychologicalState.resistance_level -= 25;
            this.psychologicalState.compassion_quotient += 15;
            
            // Store the recognition
            this.storePersonalInsight('recognition', statement);
            
            // Progress to next phase
            setTimeout(() => {
                this.completePhase(1);
                this.activateTransformationPhase(2);
            }, 2000);
        } else {
            this.providePsychologicalFeedback("Please share a more complete recognition for deeper integration.");
        }
    }
    
    completePhase(phaseNumber) {
        const phaseElement = document.querySelector(`[data-phase="${phaseNumber}"]`);
        if (phaseElement) {
            phaseElement.classList.remove('active');
            phaseElement.classList.add('completed');
        }
        
        // Unlock next phase
        const nextPhaseElement = document.querySelector(`[data-phase="${phaseNumber + 1}"]`);
        if (nextPhaseElement) {
            nextPhaseElement.classList.remove('locked');
            nextPhaseElement.classList.add('active');
        }
        
        // Update barrier consciousness
        this.updateBarrierTransformation(phaseNumber);
        
        // Check for tool unlocks
        this.checkForToolUnlocks();
    }
    
    updateBarrierTransformation(completedPhase) {
        // Reduce barrier opacity and resistance
        const opacityReduction = completedPhase * 15;
        const newOpacity = Math.max(0, 100 - opacityReduction);
        
        const opacityFill = document.getElementById('barrier-opacity');
        if (opacityFill) {
            opacityFill.style.width = `${newOpacity}%`;
        }
        
        // Update barrier nature
        const natureDisplay = document.getElementById('barrier-nature');
        if (natureDisplay) {
            const natures = [
                'Dense Resistance',
                'Softening Edges',
                'Permeable Boundary',
                'Translucent Veil',
                'Shimmering Energy',
                'Unity Field',
                'Pure Consciousness'
            ];
            natureDisplay.textContent = natures[completedPhase] || 'Transcended';
        }
        
        // Update resistance level
        this.psychologicalState.resistance_level = Math.max(0, this.psychologicalState.resistance_level - (completedPhase * 15));
    }
    
    checkForToolUnlocks() {
        const totalProgress = Object.values(this.psychologicalDimensions).reduce((sum, val) => sum + val, 0);
        
        // Unlock tools based on progress
        if (totalProgress >= 50) {
            this.unlockTool('shadow-dialogue-btn');
        }
        if (totalProgress >= 100) {
            this.unlockTool('karmic-healing-btn');
        }
        if (totalProgress >= 150) {
            this.unlockTool('emotion-alchemy-btn');
        }
        if (totalProgress >= 200) {
            this.unlockTool('unity-recognition-btn');
        }
        if (totalProgress >= 250) {
            this.unlockTool('barrier-dissolution-btn');
        }
    }
    
    unlockTool(toolId) {
        const tool = document.getElementById(toolId);
        if (tool) {
            tool.disabled = false;
            tool.classList.add('unlocked');
            this.providePsychologicalFeedback(`New tool unlocked: ${tool.querySelector('.tool-name').textContent}`);
        }
    }
    
    updatePsychologicalStateDisplay() {
        Object.keys(this.psychologicalState).forEach(state => {
            const fill = document.getElementById(`${state}-fill`);
            const value = document.getElementById(`${state}-value`);
            
            if (fill && value) {
                const percentage = Math.min(100, Math.max(0, this.psychologicalState[state]));
                fill.style.width = `${percentage}%`;
                value.textContent = `${Math.round(percentage)}%`;
            }
        });
        
        // Check for phase completion
        this.checkPhaseCompletion();
    }
    
    checkPhaseCompletion() {
        const currentPhaseProgress = this.calculateCurrentPhaseProgress();
        
        if (currentPhaseProgress >= 80 && this.currentPhase < this.totalPhases) {
            // Auto-advance to next phase
            setTimeout(() => {
                this.completePhase(this.currentPhase);
                this.activateTransformationPhase(this.currentPhase + 1);
            }, 1000);
        } else if (currentPhaseProgress >= 90 && this.currentPhase === this.totalPhases) {
            // Complete the entire transformation
            this.completeUltraEnhancedTransformation();
        }
    }
    
    calculateCurrentPhaseProgress() {
        // Calculate progress based on current phase requirements
        const phaseRequirements = {
            1: () => this.psychologicalDimensions.shadow_integration >= 30,
            2: () => this.psychologicalState.compassion_quotient >= 40,
            3: () => this.psychologicalDimensions.emotional_alchemy >= 50,
            4: () => this.psychologicalDimensions.thought_transcendence >= 60,
            5: () => this.psychologicalDimensions.unity_recognition >= 70,
            6: () => this.psychologicalState.ego_dissolution_progress >= 80,
            7: () => this.psychologicalState.wisdom_embodiment_level >= 90
        };
        
        const requirement = phaseRequirements[this.currentPhase];
        return requirement ? (requirement() ? 100 : 50) : 0;
    }
    
    completeUltraEnhancedTransformation() {
        this.providePsychologicalFeedback("🌟 Complete psychological transformation achieved! The barrier dissolves into pure consciousness.");
        
        // Mark as completed with full understanding
        this.gameStateManager.updateState('barrier_transcended', true);
        this.gameStateManager.updateState('psychological_mastery_achieved', true);
        
        // Award ultimate psychological abilities
        this.adventureEngine.unlockAbility('shadowIntegration', 3);
        this.adventureEngine.unlockAbility('emotionalAlchemy', 3);
        this.adventureEngine.unlockAbility('unityConsciousness', 3);
        
        // Add transcendent philosophical insight
        this.adventureEngine.philosophicalInsights.push({
            teaching: "You have discovered that there never was a barrier—only consciousness exploring itself through the play of apparent separation. The barrier was your teacher, showing you the very beliefs that limit your infinite nature.",
            source: "Ultra-Enhanced Barrier Transcendence",
            timestamp: Date.now(),
            significance: "ultimate_psychological_breakthrough"
        });
        
        // Create dissolution effect
        this.createBarrierDissolutionEffect();
        
        // Save state
        this.saveTransformationState();
        
        // Complete puzzle
        setTimeout(() => {
            if (this.onSolved) {
                this.onSolved();
            }
        }, 4000);
    }
    
    createBarrierDissolutionEffect() {
        const effect = document.createElement('div');
        effect.className = 'barrier-dissolution-effect';
        effect.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at center, 
                rgba(139, 125, 155, 0.8) 0%, 
                rgba(255, 197, 143, 0.6) 40%, 
                rgba(212, 175, 55, 0.4) 70%, 
                transparent 100%);
            pointer-events: none;
            z-index: 9999;
            animation: barrier-dissolution 4s ease-out forwards;
        `;
        
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 4000);
    }
    
    // Utility methods
    formatStateName(state) {
        return state.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    getPsychologicalStateColor(state) {
        const colors = {
            current_emotional_frequency: '#e74c3c',
            resistance_level: '#8b4513',
            compassion_quotient: '#27ae60',
            shadow_integration_depth: '#8b7d9b',
            ego_dissolution_progress: '#3498db',
            heart_opening_capacity: '#e91e63',
            wisdom_embodiment_level: '#f39c12'
        };
        return colors[state] || '#95a5a6';
    }
    
    providePsychologicalFeedback(message) {
        const feedbackDisplay = document.getElementById('transformation-feedback');
        if (feedbackDisplay) {
            const messageElement = feedbackDisplay.querySelector('.feedback-message');
            if (messageElement) {
                messageElement.style.opacity = '0';
                setTimeout(() => {
                    messageElement.textContent = message;
                    messageElement.style.opacity = '1';
                }, 200);
            }
        }
        
        console.log(`Psychological Feedback: ${message}`);
    }
    
    // Save/load transformation state
    saveTransformationState() {
        const state = {
            currentPhase: this.currentPhase,
            psychologicalDimensions: this.psychologicalDimensions,
            psychologicalState: this.psychologicalState,
            adaptiveComplexity: this.adaptiveComplexity,
            hiddenChambers: Array.from(this.hiddenChambers),
            unlockedWisdomKeys: Array.from(this.unlockedWisdomKeys),
            personalInsights: this.personalInsights || [],
            completionTimestamp: Date.now()
        };
        
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.ultra_barrier_transformation_state = state;
        }
    }
    
    loadTransformationProgress() {
        if (this.gameStateManager && 
            this.gameStateManager.worldState && 
            this.gameStateManager.worldState.ultra_barrier_transformation_state) {
            
            const state = this.gameStateManager.worldState.ultra_barrier_transformation_state;
            
            this.currentPhase = state.currentPhase || 1;
            this.psychologicalDimensions = { ...this.psychologicalDimensions, ...state.psychologicalDimensions };
            this.psychologicalState = { ...this.psychologicalState, ...state.psychologicalState };
            this.adaptiveComplexity = { ...this.adaptiveComplexity, ...state.adaptiveComplexity };
            this.hiddenChambers = new Set(state.hiddenChambers || []);
            this.unlockedWisdomKeys = new Set(state.unlockedWisdomKeys || []);
            this.personalInsights = state.personalInsights || [];
        }
    }
    
    storePersonalInsight(type, content) {
        if (!this.personalInsights) {
            this.personalInsights = [];
        }
        
        this.personalInsights.push({
            type: type,
            content: content,
            timestamp: Date.now(),
            phase: this.currentPhase
        });
    }
    
    // Placeholder methods for complex systems (would be fully implemented)
    calculateAdaptiveComplexity() { /* Complex psychological assessment */ }
    assessShadowWorkExperience() { return 30; }
    assessEmotionalCapacity() { return 40; }
    assessPhilosophicalUnderstanding() { return 50; }
    initializeBarrierConsciousnessSimulation() { /* Barrier simulation */ }
    setupPsychologicalMonitoringSystems() { /* Monitoring setup */ }
    startRealTimePsychologicalFeedback() { /* Real-time feedback */ }
    initializeBarrierVisualization() { /* Barrier visualization */ }
    updatePhaseDisplay() { /* Phase display update */ }
    updateBarrierConsciousness() { /* Barrier consciousness update */ }
    setupRealTimePsychologicalMonitoring() { /* Real-time monitoring */ }
    setupAcceptanceInteractions() { /* Acceptance interactions */ }
    populateRejectedAspects() { /* Populate aspects */ }
    setupIntegrationInteractions() { /* Integration interactions */ }
    populateShadowGiftMatrix() { /* Shadow gift matrix */ }
    initializeIntegrationVisualization() { /* Integration visualization */ }
    generateKarmicEntanglements() { return []; }
    generateCollectiveEchoes() { return []; }
    generateTraumaSignatures() { return []; }
    generateResistanceMechanisms() { return []; }
    createMirrorDialogues() { return []; }
    createKarmicWebNavigation() { return []; }
    createEmotionAlchemyChambers() { return []; }
    createThoughtDeconstructionLabs() { return []; }
    createUnityParadoxChambers() { return []; }
    createWisdomCrystallization() { return []; }
    initiateDeepIntrospection() { /* Deep introspection */ }
    openShadowDialogue() { /* Shadow dialogue */ }
    initializeKarmicHealing() { /* Karmic healing */ }
    openEmotionAlchemy() { /* Emotion alchemy */ }
    initiateUnityRecognition() { /* Unity recognition */ }
    initiateBarrierDissolution() { /* Barrier dissolution */ }
    activatePhase4_Transmutation() { /* Phase 4 */ }
    activatePhase5_Transcendence() { /* Phase 5 */ }
    activatePhase6_Unity() { /* Phase 6 */ }
    activatePhase7_Liberation() { /* Phase 7 */ }
}

// CSS for ultra-enhanced barrier interface
const ultraBarrierCSS = `
<style>
.ultra-barrier-transformation-container {
    min-height: 100vh;
    background: 
        radial-gradient(circle at 30% 20%, rgba(139, 125, 155, 0.1) 0%, transparent 60%),
        radial-gradient(circle at 70% 80%, rgba(231, 76, 60, 0.05) 0%, transparent 50%),
        linear-gradient(135deg, #0d0b08 0%, #1a1512 50%, #2a2117 100%);
    padding: 2rem;
    position: relative;
}

.barrier-consciousness-field {
    background: rgba(26, 21, 18, 0.9);
    border: 3px solid rgba(139, 125, 155, 0.4);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(15px);
    position: relative;
    overflow: hidden;
}

.barrier-consciousness-field::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #8b7d9b, #e74c3c, #8b4513, #8b7d9b);
    background-size: 400% 400%;
    border-radius: 20px;
    z-index: -1;
    animation: barrier-energy-flow 10s ease-in-out infinite;
}

@keyframes barrier-energy-flow {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 100% 100%; }
    75% { background-position: 0% 100%; }
}

.field-title {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    text-align: center;
    color: #8b7d9b;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 15px rgba(139, 125, 155, 0.6);
}

.barrier-nature-display {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
}

.nature-indicator {
    color: #dcd1c7;
    font-weight: bold;
}

.nature-indicator span {
    color: #8b7d9b;
}

.opacity-meter {
    width: 200px;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.opacity-fill {
    height: 100%;
    background: linear-gradient(90deg, #e74c3c, #8b4513);
    border-radius: 10px;
    transition: width 1s ease;
}

.transformation-phase-tracker {
    background: rgba(42, 33, 23, 0.9);
    border: 2px solid rgba(139, 125, 155, 0.3);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 2rem;
}

.tracker-title {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    text-align: center;
    color: #8b7d9b;
    margin-bottom: 2rem;
    text-shadow: 0 0 12px rgba(139, 125, 155, 0.5);
}

.phase-progression {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.transformation-phase {
    width: 120px;
    padding: 1rem;
    background: rgba(139, 125, 155, 0.1);
    border: 2px solid rgba(139, 125, 155, 0.3);
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
}

.transformation-phase.active {
    background: rgba(139, 125, 155, 0.3);
    border-color: #8b7d9b;
    box-shadow: 0 0 20px rgba(139, 125, 155, 0.6);
    transform: scale(1.05);
}

.transformation-phase.completed {
    background: rgba(74, 144, 226, 0.3);
    border-color: #4a90e2;
    box-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
}

.transformation-phase.locked {
    opacity: 0.4;
    cursor: not-allowed;
}

.phase-number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #8b7d9b;
    margin-bottom: 0.5rem;
}

.phase-name {
    font-size: 0.9rem;
    color: #dcd1c7;
    font-weight: bold;
    margin-bottom: 0.3rem;
}

.phase-description {
    font-size: 0.7rem;
    color: #918070;
    line-height: 1.2;
}

.psychological-state-monitor {
    background: rgba(26, 21, 18, 0.8);
    border: 2px solid rgba(231, 76, 60, 0.3);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.monitor-title {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    text-align: center;
    color: #e74c3c;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 10px rgba(231, 76, 60, 0.5);
}

.state-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.psychological-meter {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.meter-label {
    font-size: 0.9rem;
    color: #dcd1c7;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
}

.meter-visualization {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.meter-bar {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.meter-fill {
    height: 100%;
    background: var(--meter-color, #8b7d9b);
    border-radius: 4px;
    transition: width 0.6s ease;
    box-shadow: 0 0 8px var(--meter-color, #8b7d9b);
}

.meter-value {
    font-size: 0.8rem;
    color: #918070;
    min-width: 40px;
    text-align: right;
}

.active-transformation-interface {
    background: rgba(26, 21, 18, 0.9);
    border: 2px solid rgba(255, 197, 143, 0.4);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(15px);
    min-height: 500px;
}

.phase-container {
    position: relative;
}

.phase-title {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    text-align: center;
    color: #ffc58f;
    margin-bottom: 1rem;
    text-shadow: 0 0 15px rgba(255, 197, 143, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.phase-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #dcd1c7;
    text-align: center;
    margin-bottom: 2rem;
    font-style: italic;
    opacity: 0.9;
}

.advanced-psychological-tools {
    background: rgba(42, 33, 23, 0.9);
    border: 2px solid rgba(255, 197, 143, 0.3);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
}

.tools-title {
    font-family: 'Cinzel', serif;
    color: #ffc58f;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
}

.tool-categories {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.tool-category {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.psychological-tool {
    padding: 1rem 1.5rem;
    background: linear-gradient(135deg, rgba(139, 125, 155, 0.2), rgba(74, 144, 226, 0.1));
    border: 2px solid rgba(139, 125, 155, 0.4);
    border-radius: 8px;
    color: #8b7d9b;
    font-family: 'Cinzel', serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    min-width: 200px;
    justify-content: center;
}

.psychological-tool:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(139, 125, 155, 0.4), rgba(74, 144, 226, 0.3));
    border-color: #8b7d9b;
    box-shadow: 0 0 20px rgba(139, 125, 155, 0.4);
    transform: translateY(-2px);
}

.psychological-tool:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.psychological-tool.unlocked {
    animation: tool-unlock 1s ease-out;
}

@keyframes tool-unlock {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); box-shadow: 0 0 30px rgba(139, 125, 155, 0.8); }
    100% { transform: scale(1); }
}

.psychological-tool.primary { border-color: rgba(46, 204, 113, 0.4); color: #2ecc71; }
.psychological-tool.secondary { border-color: rgba(52, 152, 219, 0.4); color: #3498db; }
.psychological-tool.tertiary { border-color: rgba(155, 89, 182, 0.4); color: #9b59b6; }
.psychological-tool.advanced { border-color: rgba(230, 126, 34, 0.4); color: #e67e22; }
.psychological-tool.master { border-color: rgba(241, 196, 15, 0.4); color: #f1c40f; }
.psychological-tool.transcendent { border-color: rgba(231, 76, 60, 0.4); color: #e74c3c; }

.tool-icon {
    font-size: 1.2rem;
}

.transformation-feedback-stream {
    background: rgba(13, 11, 8, 0.9);
    border: 2px solid rgba(139, 125, 155, 0.2);
    border-radius: 8px;
    padding: 1rem;
    margin-top: 2rem;
}

.feedback-title {
    font-family: 'Cinzel', serif;
    color: #8b7d9b;
    margin-bottom: 0.5rem;
    text-align: center;
}

.feedback-display {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    padding: 1rem;
}

.feedback-message {
    color: #dcd1c7;
    text-align: center;
    font-style: italic;
    transition: opacity 0.3s ease;
}

@keyframes barrier-dissolution {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    30% {
        opacity: 1;
        transform: scale(1.1);
    }
    70% {
        opacity: 0.8;
        transform: scale(1.3);
    }
    100% {
        opacity: 0;
        transform: scale(2);
    }
}

/* Recognition Phase Specific Styles */
.quality-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
}

.quality-option {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: rgba(139, 125, 155, 0.1);
    border: 2px solid rgba(139, 125, 155, 0.2);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.quality-option:hover {
    background: rgba(139, 125, 155, 0.2);
    border-color: rgba(139, 125, 155, 0.4);
}

.quality-checkbox {
    margin-bottom: 0.5rem;
}

.quality-label {
    font-weight: bold;
    color: #8b7d9b;
    margin-bottom: 0.3rem;
}

.quality-description {
    font-size: 0.9rem;
    color: #918070;
    line-height: 1.4;
}

.life-areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
}

.life-area {
    background: rgba(255, 197, 143, 0.1);
    border: 2px solid rgba(255, 197, 143, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
}

.life-area:hover {
    background: rgba(255, 197, 143, 0.2);
    border-color: rgba(255, 197, 143, 0.4);
    transform: translateY(-2px);
}

.area-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.area-name {
    font-weight: bold;
    color: #ffc58f;
    margin-bottom: 1rem;
}

.explore-btn {
    background: linear-gradient(135deg, rgba(255, 197, 143, 0.3), rgba(212, 175, 55, 0.2));
    border: 2px solid rgba(255, 197, 143, 0.4);
    border-radius: 6px;
    color: #ffc58f;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.explore-btn:hover {
    background: linear-gradient(135deg, rgba(255, 197, 143, 0.5), rgba(212, 175, 55, 0.4));
    box-shadow: 0 0 15px rgba(255, 197, 143, 0.4);
}

@media (max-width: 768px) {
    .ultra-barrier-transformation-container {
        padding: 1rem;
    }
    
    .phase-progression {
        flex-direction: column;
        align-items: center;
    }
    
    .transformation-phase {
        width: 90%;
        max-width: 300px;
    }
    
    .tool-categories {
        flex-direction: column;
        align-items: center;
    }
    
    .psychological-tool {
        width: 100%;
        max-width: 300px;
    }
}
</style>
`;

// Inject CSS
const barrierStyleSheet = document.createElement('style');
barrierStyleSheet.textContent = ultraBarrierCSS;
document.head.appendChild(barrierStyleSheet);

// Export for use in the main game
window.UltraEnhancedBarrierOfNegativity = UltraEnhancedBarrierOfNegativity;

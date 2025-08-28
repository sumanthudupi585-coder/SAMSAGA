/**
 * Ultra-Enhanced BanyanTreeHarmony Puzzle System
 * Transforms the existing sophisticated puzzle into an even more complex,
 * interconnected spiritual challenge with escape room mechanics, hidden layers,
 * and dynamic difficulty that adapts to player skill and spiritual development
 */

class UltraEnhancedBanyanTreeHarmony {
    constructor(container, gameStateManager, adventureEngine, onSolved) {
        this.container = container;
        this.gameStateManager = gameStateManager;
        this.adventureEngine = adventureEngine;
        this.onSolved = onSolved;
        
        // Ultra-complex multi-dimensional puzzle state
        this.currentDimension = 1;
        this.totalDimensions = 7; // Chakra-based progression
        this.dimensionalProgress = {};
        this.cosmicInterconnections = new Map();
        this.secretMechanicsUnlocked = new Set();
        this.hiddenLayersRevealed = new Set();
        
        // Quantum tree consciousness simulation
        this.quantumStates = {
            consciousness: 0,
            unity: 0,
            cosmic_alignment: 0,
            temporal_synchronization: 0,
            dimensional_awareness: 0,
            karmic_resonance: 0,
            enlightenment_proximity: 0
        };
        
        // Dynamic complexity adaptation
        this.adaptiveComplexity = {
            base_difficulty: 3,
            player_skill_assessment: 0,
            spiritual_development_level: 0,
            discovery_pattern_analysis: [],
            time_complexity_factor: 1,
            frustration_mitigation: 0
        };
        
        // Interconnected puzzle ecosystem
        this.ecosystemConnections = {
            other_puzzles_influence: new Map(),
            player_choice_ripples: [],
            karmic_debt_calculations: {},
            universal_harmony_index: 0,
            collective_consciousness_resonance: 0
        };
        
        // Hidden escape room mechanics
        this.escapeRoomElements = {
            secret_combinations: new Map(),
            environmental_clues: [],
            timeline_puzzles: [],
            metaphysical_riddles: [],
            consciousness_tests: [],
            unity_challenges: []
        };
        
        // Time-based progression system
        this.temporalMechanics = {
            lunar_cycle_position: this.calculateLunarPosition(),
            seasonal_energy_influence: this.calculateSeasonalEnergy(),
            time_of_day_effects: this.calculateTimeEffects(),
            astrological_alignments: this.calculateAstrologicalInfluence()
        };
        
        this.init();
    }
    
    init() {
        this.assessPlayerSkillLevel();
        this.calculateAdaptiveComplexity();
        this.createUltraEnhancedInterface();
        this.initializeQuantumTreeConsciousness();
        this.setupEscapeRoomMechanics();
        this.activateInterconnectedSystems();
        this.startTemporalProgressionEngine();
        this.loadQuantumProgressionState();
    }
    
    assessPlayerSkillLevel() {
        // Analyze player's past performance to set appropriate difficulty
        const playerStats = this.gameStateManager.playerState.stats || {};
        const puzzlesSolved = playerStats.puzzlesSolved || 0;
        const averageSolveTime = playerStats.averagePuzzleSolveTime || 300;
        const hintUsage = playerStats.averageHintsUsed || 5;
        const discoveries = this.adventureEngine.discoveries.size;
        
        // Calculate skill assessment
        this.adaptiveComplexity.player_skill_assessment = 
            (puzzlesSolved * 10) + 
            (discoveries * 15) +
            Math.max(0, (300 - averageSolveTime) / 10) +
            Math.max(0, (5 - hintUsage) * 10);
        
        // Calculate spiritual development level
        const totalAbilityLevels = Object.values(this.adventureEngine.characterAbilities).reduce((a, b) => a + b, 0);
        this.adaptiveComplexity.spiritual_development_level = totalAbilityLevels;
        
        console.log(`Player skill assessment: ${this.adaptiveComplexity.player_skill_assessment}`);
        console.log(`Spiritual development: ${this.adaptiveComplexity.spiritual_development_level}`);
    }
    
    calculateAdaptiveComplexity() {
        // Dynamic difficulty calculation based on multiple factors
        const baseComplexity = 3;
        const skillBonus = Math.floor(this.adaptiveComplexity.player_skill_assessment / 50);
        const spiritualBonus = Math.floor(this.adaptiveComplexity.spiritual_development_level / 3);
        const temporalFactor = this.calculateTemporalComplexityFactor();
        
        this.adaptiveComplexity.base_difficulty = Math.min(10, baseComplexity + skillBonus + spiritualBonus + temporalFactor);
        
        // Adjust puzzle layers based on complexity
        this.totalDimensions = Math.min(12, 7 + Math.floor(this.adaptiveComplexity.base_difficulty / 2));
        
        console.log(`Adaptive complexity level: ${this.adaptiveComplexity.base_difficulty}`);
        console.log(`Total dimensions unlocked: ${this.totalDimensions}`);
    }
    
    createUltraEnhancedInterface() {
        this.container.innerHTML = `
            <div class="ultra-banyan-harmony-container quantum-spiritual-interface">
                <!-- Quantum Consciousness Visualization -->
                <div class="quantum-consciousness-field" id="consciousness-field">
                    <canvas id="quantum-tree-canvas" width="800" height="600"></canvas>
                    <div class="dimensional-overlays" id="dimensional-overlays"></div>
                </div>
                
                <!-- Multi-Dimensional Progress Tracker -->
                <div class="dimensional-progression-tracker">
                    <div class="tracker-title">🌌 Dimensional Awakening Progress</div>
                    <div class="dimension-circles" id="dimension-circles">
                        ${Array.from({length: this.totalDimensions}, (_, i) => 
                            `<div class="dimension-circle ${i === 0 ? 'active' : 'locked'}" 
                                 data-dimension="${i + 1}" title="${this.getDimensionName(i + 1)}">
                                <div class="dimension-number">${i + 1}</div>
                                <div class="dimension-name">${this.getDimensionName(i + 1)}</div>
                                <div class="dimension-progress-ring">
                                    <div class="progress-fill" id="dimension-${i + 1}-progress"></div>
                                </div>
                            </div>`
                        ).join('')}
                    </div>
                </div>
                
                <!-- Quantum State Monitor -->
                <div class="quantum-state-monitor">
                    <div class="monitor-title">���️ Quantum Tree State Resonance</div>
                    <div class="state-meters" id="state-meters">
                        ${Object.keys(this.quantumStates).map(state => `
                            <div class="state-meter">
                                <div class="state-label">${this.formatStateName(state)}</div>
                                <div class="state-bar">
                                    <div class="state-fill" id="${state}-fill" style="--state-color: ${this.getStateColor(state)}"></div>
                                </div>
                                <div class="state-value" id="${state}-value">0%</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Active Dimension Interface -->
                <div class="active-dimension-interface" id="active-dimension">
                    <!-- Dimension-specific content will be populated here -->
                </div>
                
                <!-- Interconnection Web Visualization -->
                <div class="interconnection-web-container" style="display: none;" id="web-container">
                    <div class="web-title">🕸️ Cosmic Interconnection Web</div>
                    <canvas id="interconnection-canvas" width="600" height="400"></canvas>
                    <div class="connection-insights" id="connection-insights"></div>
                </div>
                
                <!-- Hidden Mechanics Discovery Panel -->
                <div class="hidden-mechanics-panel" id="hidden-mechanics-panel">
                    <div class="panel-title">🔮 Awakened Cosmic Mechanics</div>
                    <div class="mechanics-grid" id="mechanics-grid">
                        <!-- Hidden mechanics will be revealed here -->
                    </div>
                </div>
                
                <!-- Escape Room Elements Container -->
                <div class="escape-room-elements" id="escape-room-elements">
                    <div class="elements-title">🗝️ Mystical Puzzle Elements</div>
                    <div class="mystery-elements-grid" id="mystery-grid">
                        <!-- Escape room style elements will appear here -->
                    </div>
                </div>
                
                <!-- Temporal Influence Display -->
                <div class="temporal-influence-display">
                    <div class="temporal-title">⏰ Cosmic Temporal Influences</div>
                    <div class="temporal-factors" id="temporal-factors">
                        <div class="temporal-factor">
                            <div class="factor-icon">🌙</div>
                            <div class="factor-label">Lunar Phase</div>
                            <div class="factor-value" id="lunar-value">${this.temporalMechanics.lunar_cycle_position.toFixed(1)}%</div>
                        </div>
                        <div class="temporal-factor">
                            <div class="factor-icon">🌺</div>
                            <div class="factor-label">Seasonal Energy</div>
                            <div class="factor-value" id="seasonal-value">${this.temporalMechanics.seasonal_energy_influence.toFixed(1)}%</div>
                        </div>
                        <div class="temporal-factor">
                            <div class="factor-icon">☀️</div>
                            <div class="factor-label">Solar Position</div>
                            <div class="factor-value" id="solar-value">${this.temporalMechanics.time_of_day_effects.toFixed(1)}%</div>
                        </div>
                        <div class="temporal-factor">
                            <div class="factor-icon">⭐</div>
                            <div class="factor-label">Stellar Alignment</div>
                            <div class="factor-value" id="stellar-value">${this.temporalMechanics.astrological_alignments.toFixed(1)}%</div>
                        </div>
                    </div>
                </div>
                
                <!-- Advanced Interaction Controls -->
                <div class="ultra-advanced-controls">
                    <div class="primary-controls">
                        <button class="quantum-btn primary" id="consciousness-sync-btn">
                            <span class="btn-icon">🧠</span>
                            <span class="btn-text">Synchronize Consciousness</span>
                        </button>
                        <button class="quantum-btn secondary" id="dimensional-shift-btn">
                            <span class="btn-icon">🌀</span>
                            <span class="btn-text">Shift Dimensions</span>
                        </button>
                        <button class="quantum-btn tertiary" id="interconnect-analyze-btn">
                            <span class="btn-icon">🕸️</span>
                            <span class="btn-text">Analyze Interconnections</span>
                        </button>
                    </div>
                    
                    <div class="advanced-controls">
                        <button class="quantum-btn mystery" id="reveal-hidden-btn" disabled>
                            <span class="btn-icon">👁️</span>
                            <span class="btn-text">Reveal Hidden Layer</span>
                        </button>
                        <button class="quantum-btn cosmic" id="unity-transcendence-btn" disabled>
                            <span class="btn-icon">∞</span>
                            <span class="btn-text">Transcend Unity</span>
                        </button>
                        <button class="quantum-btn emergency" id="quantum-reset-btn">
                            <span class="btn-icon">⚡</span>
                            <span class="btn-text">Quantum Reset</span>
                        </button>
                    </div>
                </div>
                
                <!-- Real-time Feedback Display -->
                <div class="real-time-feedback" id="real-time-feedback">
                    <div class="feedback-title">💫 Cosmic Feedback Stream</div>
                    <div class="feedback-content" id="feedback-content">
                        Quantum field harmonizing... Stand by for dimensional alignment...
                    </div>
                </div>
            </div>
        `;
        
        this.initializeQuantumVisualization();
        this.updateQuantumStateDisplay();
        this.setupUltraAdvancedEventListeners();
    }
    
    initializeQuantumTreeConsciousness() {
        const canvas = document.getElementById('quantum-tree-canvas');
        const ctx = canvas.getContext('2d');
        
        // Create quantum tree visualization with multiple consciousness layers
        this.quantumTree = {
            consciousness_nodes: this.generateConsciousnessNodes(),
            quantum_connections: this.generateQuantumConnections(),
            dimensional_aspects: this.generateDimensionalAspects(),
            temporal_fluctuations: this.generateTemporalFluctuations()
        };
        
        this.startQuantumVisualizationLoop();
    }
    
    generateConsciousnessNodes() {
        const nodes = [];
        const centerX = 400;
        const centerY = 300;
        
        // Generate nodes based on sacred geometry and quantum principles
        for (let dimension = 1; dimension <= this.totalDimensions; dimension++) {
            const radius = 50 + (dimension * 30);
            const nodeCount = Math.min(12, 3 + dimension);
            
            for (let i = 0; i < nodeCount; i++) {
                const angle = (i / nodeCount) * Math.PI * 2 + (dimension * 0.5);
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                
                nodes.push({
                    id: `consciousness_${dimension}_${i}`,
                    x: x,
                    y: y,
                    dimension: dimension,
                    consciousness_level: 0,
                    quantum_state: 'superposition',
                    activation_threshold: 0.5 + (dimension * 0.1),
                    interconnection_strength: 0,
                    hidden_properties: this.generateHiddenNodeProperties(dimension)
                });
            }
        }
        
        return nodes;
    }
    
    generateHiddenNodeProperties(dimension) {
        const properties = {
            fibonacci_resonance: this.calculateFibonacciResonance(dimension),
            chakra_alignment: this.calculateChakraAlignment(dimension),
            vedic_frequency: this.calculateVedicFrequency(dimension),
            karmic_weight: this.calculateKarmicWeight(dimension),
            unity_potential: this.calculateUnityPotential(dimension)
        };
        
        // Add secret properties based on player's spiritual development
        if (this.adventureEngine.characterAbilities.mysticalIntuition >= 2) {
            properties.hidden_teaching = this.generateHiddenTeaching(dimension);
        }
        
        if (this.adventureEngine.characterAbilities.ancientWisdom >= 3) {
            properties.cosmic_code = this.generateCosmicCode(dimension);
        }
        
        return properties;
    }
    
    setupEscapeRoomMechanics() {
        // Create interconnected escape room style challenges
        this.escapeRoomElements = {
            pattern_locks: this.createPatternLocks(),
            sequence_puzzles: this.createSequencePuzzles(),
            consciousness_riddles: this.createConsciousnessRiddles(),
            hidden_symbol_combinations: this.createHiddenSymbolCombinations(),
            temporal_alignment_challenges: this.createTemporalAlignmentChallenges(),
            unity_paradox_tests: this.createUnityParadoxTests()
        };
        
        this.renderEscapeRoomElements();
        this.setupEscapeRoomInteractions();
    }
    
    createPatternLocks() {
        return [
            {
                id: 'fibonacci_spiral_lock',
                name: 'Fibonacci Spiral Lock',
                description: 'Trace the golden spiral pattern to unlock deeper consciousness',
                pattern: this.generateFibonacciSpiralPattern(),
                difficulty: this.adaptiveComplexity.base_difficulty,
                unlock_condition: 'fibonacci_sequence_mastery',
                revealed: false
            },
            {
                id: 'mandala_geometry_lock',
                name: 'Sacred Mandala Geometry Lock',
                description: 'Align the geometric patterns to match cosmic harmonies',
                pattern: this.generateMandalaGeometryPattern(),
                difficulty: this.adaptiveComplexity.base_difficulty + 1,
                unlock_condition: 'sacred_geometry_understanding',
                revealed: false
            },
            {
                id: 'chakra_resonance_lock',
                name: 'Chakra Resonance Lock',
                description: 'Harmonize the seven energy centers in perfect balance',
                pattern: this.generateChakraResonancePattern(),
                difficulty: this.adaptiveComplexity.base_difficulty + 2,
                unlock_condition: 'energy_mastery',
                revealed: false
            }
        ];
    }
    
    createConsciousnessRiddles() {
        const baseRiddles = [
            {
                id: 'observer_paradox',
                question: 'What observes the observer? What is aware of awareness itself?',
                philosophical_depth: 'ultimate',
                hint_progression: [
                    'Look deeper than the mind that thinks',
                    'Who or what is present even in deep sleep?',
                    'Before the first thought arises, what is already here?'
                ],
                solution_type: 'recognition',
                unlock_reward: 'consciousness_transcendence_ability'
            },
            {
                id: 'tree_unity_paradox',
                question: 'If you and the tree are one, who is solving this puzzle?',
                philosophical_depth: 'profound',
                hint_progression: [
                    'Consider the space in which both tree and person appear',
                    'What remains constant while tree and person change?',
                    'Who asks this question about who?'
                ],
                solution_type: 'paradox_resolution',
                unlock_reward: 'non_dual_understanding'
            },
            {
                id: 'temporal_consciousness',
                question: 'How can consciousness experience time when consciousness is timeless?',
                philosophical_depth: 'mystical',
                hint_progression: [
                    'Time appears in consciousness, not the reverse',
                    'What dreams the dream of time?',
                    'In deep meditation, where does time go?'
                ],
                solution_type: 'temporal_transcendence',
                unlock_reward: 'timeless_awareness'
            }
        ];
        
        // Adapt riddles based on player's spiritual development
        return baseRiddles.map(riddle => ({
            ...riddle,
            adapted_difficulty: this.calculateRiddleComplexity(riddle),
            dynamic_hints: this.generateDynamicHints(riddle),
            personalized_context: this.personalizeRiddleContext(riddle)
        }));
    }
    
    startDimension(dimensionNumber) {
        this.currentDimension = dimensionNumber;
        this.updateDimensionDisplay();
        
        const dimensions = {
            1: () => this.activateDimension1_QuantumAwareness(),
            2: () => this.activateDimension2_FibonacciHarmonics(),
            3: () => this.activateDimension3_SacredGeometry(),
            4: () => this.activateDimension4_ConsciousnessAlignment(),
            5: () => this.activateDimension5_TemporalSynchronization(),
            6: () => this.activateDimension6_CosmicInterconnection(),
            7: () => this.activateDimension7_UnityTranscendence()
        };
        
        // Extended dimensions for advanced players
        if (dimensionNumber > 7) {
            this.activateAdvancedDimension(dimensionNumber);
        } else {
            const dimensionFunction = dimensions[dimensionNumber];
            if (dimensionFunction) {
                dimensionFunction();
            }
        }
        
        this.updateQuantumFieldVisualization();
        this.checkForHiddenMechanicUnlocks();
    }
    
    activateDimension1_QuantumAwareness() {
        const interface = document.getElementById('active-dimension');
        interface.innerHTML = `
            <div class="dimension-container quantum-awareness-dimension">
                <div class="dimension-title">Dimension 1: Quantum Awareness Awakening</div>
                <div class="dimension-description">
                    The tree exists in quantum superposition until observed. Your consciousness collapses 
                    the wave function, bringing it into specific reality. Master the observer effect.
                </div>
                
                <div class="quantum-observation-interface">
                    <div class="quantum-states-display">
                        <div class="state-superposition" id="tree-superposition">
                            <div class="superposition-indicator">🌊 Quantum Superposition</div>
                            <div class="probability-clouds" id="probability-display">
                                <!-- Probability clouds will be generated -->
                            </div>
                        </div>
                    </div>
                    
                    <div class="observation-controls">
                        <div class="observation-method-selector">
                            <div class="method-title">Choose Your Observation Method:</div>
                            <button class="observation-btn" data-method="mindful" disabled>
                                <span class="method-icon">🧘</span>
                                <span class="method-name">Mindful Observation</span>
                                <span class="consciousness-requirement">Requires: Consciousness Level 10</span>
                            </button>
                            <button class="observation-btn" data-method="intuitive">
                                <span class="method-icon">💫</span>
                                <span class="method-name">Intuitive Sensing</span>
                                <span class="consciousness-requirement">Natural ability</span>
                            </button>
                            <button class="observation-btn" data-method="quantum" disabled>
                                <span class="method-icon">⚛️</span>
                                <span class="method-name">Quantum Entanglement</span>
                                <span class="consciousness-requirement">Requires: Unity Level 25</span>
                            </button>
                        </div>
                        
                        <div class="wave-function-collapse-meter">
                            <div class="meter-title">Wave Function Collapse Progress</div>
                            <div class="collapse-meter">
                                <div class="collapse-fill" id="collapse-progress"></div>
                            </div>
                            <div class="collapse-percentage" id="collapse-percentage">0%</div>
                        </div>
                    </div>
                    
                    <div class="quantum-insights" id="quantum-insights" style="display: none;">
                        <div class="insight-title">🌟 Quantum Consciousness Insight</div>
                        <div class="insight-content">
                            "Reality is not independent of consciousness—consciousness and reality 
                            co-create each other in an eternal dance of observation and manifestation."
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupQuantumObservationMechanics();
        this.generateProbabilityClouds();
        this.updateObservationButtonStates();
    }
    
    activateDimension2_FibonacciHarmonics() {
        const interface = document.getElementById('active-dimension');
        interface.innerHTML = `
            <div class="dimension-container fibonacci-harmonics-dimension">
                <div class="dimension-title">Dimension 2: Fibonacci Harmonic Resonance</div>
                <div class="dimension-description">
                    The tree grows according to the golden ratio, the same mathematical principle 
                    that governs galaxies, nautilus shells, and DNA. Tune into this cosmic frequency.
                </div>
                
                <div class="fibonacci-harmonic-interface">
                    <div class="golden-ratio-visualizer">
                        <div class="visualizer-title">🌀 Golden Ratio Spiral Harmonics</div>
                        <canvas id="fibonacci-spiral-canvas" width="400" height="400"></canvas>
                        <div class="harmonic-frequency-display">
                            <div class="frequency-meter">
                                <div class="frequency-label">Harmonic Resonance</div>
                                <div class="frequency-value" id="harmonic-frequency">432 Hz</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="fibonacci-sequence-challenge">
                        <div class="challenge-title">🔢 Interactive Fibonacci Discovery</div>
                        <div class="sequence-interface">
                            <div class="current-sequence" id="current-fibonacci">1, 1, 2, 3, 5, ?, ?, ?</div>
                            <div class="sequence-input-method">
                                <div class="method-title">Discover the next numbers through:</div>
                                <button class="discovery-method" data-method="mathematical">
                                    <span class="method-icon">🧮</span>
                                    Mathematical Logic
                                </button>
                                <button class="discovery-method" data-method="intuitive">
                                    <span class="method-icon">🎯</span>
                                    Intuitive Recognition
                                </button>
                                <button class="discovery-method" data-method="nature" disabled>
                                    <span class="method-icon">🌿</span>
                                    Natural Pattern Sensing
                                    <span class="requirement">Requires: Nature Communion</span>
                                </button>
                            </div>
                        </div>
                        
                        <div class="fibonacci-layers" id="fibonacci-layers">
                            <!-- Multiple layers of Fibonacci patterns will be revealed -->
                        </div>
                    </div>
                    
                    <div class="harmonic-tuning-controls">
                        <div class="tuning-title">🎵 Cosmic Frequency Tuning</div>
                        <div class="frequency-sliders">
                            <div class="slider-group">
                                <label>Base Frequency (Hz)</label>
                                <input type="range" id="base-freq" min="200" max="600" value="432">
                                <span id="base-freq-value">432</span>
                            </div>
                            <div class="slider-group">
                                <label>Harmonic Multiplier</label>
                                <input type="range" id="harmonic-mult" min="1" max="21" value="8" step="1">
                                <span id="harmonic-mult-value">8</span>
                            </div>
                            <div class="slider-group">
                                <label>Golden Ratio Precision</label>
                                <input type="range" id="golden-precision" min="1000" max="1700" value="1618" step="1">
                                <span id="golden-precision-value">1.618</span>
                            </div>
                        </div>
                        
                        <div class="harmonic-resonance-meter">
                            <div class="resonance-title">Harmonic Lock Status</div>
                            <div class="resonance-bars" id="resonance-bars">
                                <!-- Resonance frequency bars -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupFibonacciHarmonicMechanics();
        this.generateFibonacciSpiralVisualization();
        this.initializeHarmonicFrequencySystem();
    }
    
    activateDimension3_SacredGeometry() {
        const interface = document.getElementById('active-dimension');
        interface.innerHTML = `
            <div class="dimension-container sacred-geometry-dimension">
                <div class="dimension-title">Dimension 3: Sacred Geometric Matrix</div>
                <div class="dimension-description">
                    All existence is built upon geometric principles. The tree's structure embodies 
                    the flower of life, the merkaba, and other sacred forms. Align with the cosmic blueprint.
                </div>
                
                <div class="sacred-geometry-interface">
                    <div class="geometry-matrix-display">
                        <div class="matrix-title">🔯 Cosmic Geometric Matrix</div>
                        <svg id="sacred-geometry-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <!-- Sacred geometry patterns will be dynamically generated -->
                        </svg>
                        <div class="geometry-controls">
                            <button class="geometry-btn" data-pattern="flower-of-life">Flower of Life</button>
                            <button class="geometry-btn" data-pattern="merkaba">Merkaba</button>
                            <button class="geometry-btn" data-pattern="sri-yantra">Sri Yantra</button>
                            <button class="geometry-btn" data-pattern="platonic-solids">Platonic Solids</button>
                        </div>
                    </div>
                    
                    <div class="geometric-alignment-challenge">
                        <div class="alignment-title">⚡ Geometric Resonance Alignment</div>
                        <div class="alignment-interface">
                            <div class="pattern-overlay-system">
                                <div class="overlay-title">Layer the geometric patterns to create harmony:</div>
                                <div class="pattern-layers" id="pattern-layers">
                                    <!-- Interactive geometric layers -->
                                </div>
                            </div>
                            
                            <div class="geometric-calculator">
                                <div class="calculator-title">Sacred Ratio Calculator</div>
                                <div class="ratio-inputs">
                                    <div class="input-group">
                                        <label>Enter discovered ratio:</label>
                                        <input type="number" id="ratio-input" step="0.001" placeholder="1.618">
                                        <button id="calculate-harmony">Calculate Harmony</button>
                                    </div>
                                </div>
                                <div class="harmony-result" id="harmony-result"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="dimensional-portal-chamber" style="display: none;" id="portal-chamber">
                        <div class="portal-title">🌀 Dimensional Portal Chamber</div>
                        <div class="portal-description">
                            Perfect geometric alignment opens portals to higher dimensions of consciousness...
                        </div>
                        <canvas id="portal-visualization" width="300" height="300"></canvas>
                    </div>
                </div>
            </div>
        `;
        
        this.setupSacredGeometryMechanics();
        this.generateSacredGeometryPatterns();
        this.initializeGeometricCalculator();
    }
    
    activateDimension4_ConsciousnessAlignment() {
        const interface = document.getElementById('active-dimension');
        interface.innerHTML = `
            <div class="dimension-container consciousness-alignment-dimension">
                <div class="dimension-title">Dimension 4: Multi-Layered Consciousness Alignment</div>
                <div class="dimension-description">
                    Consciousness operates on multiple levels simultaneously. Align your individual awareness 
                    with the tree's consciousness, the forest's consciousness, and universal consciousness.
                </div>
                
                <div class="consciousness-alignment-interface">
                    <div class="consciousness-layers-visualization">
                        <div class="layers-title">🧠 Consciousness Layer Alignment</div>
                        <div class="consciousness-layers" id="consciousness-layers">
                            <div class="consciousness-layer individual-layer">
                                <div class="layer-title">Individual Consciousness</div>
                                <div class="layer-state" id="individual-state">Fragmented</div>
                                <div class="layer-controls">
                                    <button class="align-btn" data-layer="individual">Harmonize Self</button>
                                </div>
                            </div>
                            
                            <div class="consciousness-layer tree-layer">
                                <div class="layer-title">Tree Consciousness</div>
                                <div class="layer-state" id="tree-state">Dormant</div>
                                <div class="layer-controls">
                                    <button class="align-btn" data-layer="tree" disabled>Commune with Tree</button>
                                </div>
                            </div>
                            
                            <div class="consciousness-layer forest-layer">
                                <div class="layer-title">Forest Network Consciousness</div>
                                <div class="layer-state" id="forest-state">Inaccessible</div>
                                <div class="layer-controls">
                                    <button class="align-btn" data-layer="forest" disabled>Join Forest Mind</button>
                                </div>
                            </div>
                            
                            <div class="consciousness-layer universal-layer">
                                <div class="layer-title">Universal Consciousness</div>
                                <div class="layer-state" id="universal-state">Veiled</div>
                                <div class="layer-controls">
                                    <button class="align-btn" data-layer="universal" disabled>Merge with Cosmic Mind</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="brainwave-synchronization">
                        <div class="sync-title">🌊 Brainwave Frequency Synchronization</div>
                        <div class="brainwave-display">
                            <canvas id="brainwave-canvas" width="500" height="200"></canvas>
                        </div>
                        <div class="frequency-targets">
                            <div class="target-frequency" data-freq="gamma">
                                <div class="freq-name">Gamma (40Hz)</div>
                                <div class="freq-state">Transcendence</div>
                                <div class="freq-progress">
                                    <div class="freq-fill" id="gamma-progress"></div>
                                </div>
                            </div>
                            <div class="target-frequency" data-freq="beta">
                                <div class="freq-name">Beta (14Hz)</div>
                                <div class="freq-state">Active Awareness</div>
                                <div class="freq-progress">
                                    <div class="freq-fill" id="beta-progress"></div>
                                </div>
                            </div>
                            <div class="target-frequency" data-freq="alpha">
                                <div class="freq-name">Alpha (8Hz)</div>
                                <div class="freq-state">Relaxed Focus</div>
                                <div class="freq-progress">
                                    <div class="freq-fill" id="alpha-progress"></div>
                                </div>
                            </div>
                            <div class="target-frequency" data-freq="theta">
                                <div class="freq-name">Theta (4Hz)</div>
                                <div class="freq-state">Deep Meditation</div>
                                <div class="freq-progress">
                                    <div class="freq-fill" id="theta-progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="consciousness-merger-chamber" style="display: none;" id="merger-chamber">
                        <div class="merger-title">💫 Consciousness Merger Protocol</div>
                        <div class="merger-visualization">
                            <canvas id="consciousness-merger-canvas" width="400" height="400"></canvas>
                        </div>
                        <div class="merger-status" id="merger-status">
                            Preparing for consciousness fusion...
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupConsciousnessAlignmentMechanics();
        this.initializeBrainwaveVisualization();
        this.startConsciousnessLayerDetection();
    }
    
    setupUltraAdvancedEventListeners() {
        // Consciousness synchronization
        document.getElementById('consciousness-sync-btn')?.addEventListener('click', () => {
            this.initiateConsciousnessSynchronization();
        });
        
        // Dimensional shifting
        document.getElementById('dimensional-shift-btn')?.addEventListener('click', () => {
            this.initiateDimensionalShift();
        });
        
        // Interconnection analysis
        document.getElementById('interconnect-analyze-btn')?.addEventListener('click', () => {
            this.analyzeCosmicInterconnections();
        });
        
        // Hidden layer revelation
        document.getElementById('reveal-hidden-btn')?.addEventListener('click', () => {
            this.revealHiddenLayer();
        });
        
        // Unity transcendence
        document.getElementById('unity-transcendence-btn')?.addEventListener('click', () => {
            this.initiateUnityTranscendence();
        });
        
        // Quantum reset
        document.getElementById('quantum-reset-btn')?.addEventListener('click', () => {
            this.performQuantumReset();
        });
        
        // Dimension circle clicks
        document.querySelectorAll('.dimension-circle').forEach(circle => {
            circle.addEventListener('click', (e) => {
                const dimension = parseInt(e.currentTarget.dataset.dimension);
                if (!e.currentTarget.classList.contains('locked')) {
                    this.startDimension(dimension);
                }
            });
        });
        
        // Real-time quantum state monitoring
        this.setupQuantumStateMonitoring();
        
        // Temporal progression tracking
        this.startTemporalProgressionTracking();
    }
    
    initiateConsciousnessSynchronization() {
        this.provideFeedback("Initiating consciousness synchronization protocol...");
        
        // Analyze current consciousness state
        const currentState = this.assessCurrentConsciousnessState();
        this.provideFeedback(`Current consciousness frequency: ${currentState.frequency}Hz`);
        
        // Begin synchronization process
        this.startConsciousnessSyncAnimation();
        
        // Update quantum states
        this.quantumStates.consciousness += 15;
        this.quantumStates.unity += 10;
        
        // Check for hidden mechanic unlocks
        this.checkForHiddenMechanicUnlocks();
        
        this.updateQuantumStateDisplay();
        
        setTimeout(() => {
            this.provideFeedback("Consciousness synchronization achieving resonance...");
            this.unlockNewDimensionalLayer();
        }, 3000);
    }
    
    initiateDimensionalShift() {
        const currentDim = this.currentDimension;
        const nextDim = Math.min(this.totalDimensions, currentDim + 1);
        
        if (this.isDimensionUnlocked(nextDim)) {
            this.provideFeedback(`Shifting from dimension ${currentDim} to dimension ${nextDim}...`);
            this.createDimensionalShiftEffect();
            
            setTimeout(() => {
                this.startDimension(nextDim);
                this.provideFeedback(`Successfully entered dimension ${nextDim}: ${this.getDimensionName(nextDim)}`);
            }, 2000);
        } else {
            this.provideFeedback(`Dimension ${nextDim} requires higher consciousness development to access.`);
        }
    }
    
    analyzeCosmicInterconnections() {
        this.provideFeedback("Analyzing cosmic interconnection patterns...");
        
        // Reveal interconnection web
        const webContainer = document.getElementById('web-container');
        webContainer.style.display = 'block';
        
        // Generate interconnection analysis
        this.generateInterconnectionVisualization();
        
        // Update cosmic resonance
        this.quantumStates.cosmic_alignment += 20;
        this.ecosystemConnections.collective_consciousness_resonance += 25;
        
        this.updateQuantumStateDisplay();
        
        setTimeout(() => {
            this.provideFeedback("Interconnection analysis complete. New cosmic patterns revealed.");
            this.revealCosmicInsights();
        }, 4000);
    }
    
    revealHiddenLayer() {
        if (this.hiddenLayersRevealed.size < 3) {
            const layerId = `hidden_layer_${this.hiddenLayersRevealed.size + 1}`;
            this.hiddenLayersRevealed.add(layerId);
            
            this.provideFeedback(`Revealing hidden layer: ${this.getHiddenLayerName(layerId)}`);
            this.createHiddenLayerRevealEffect();
            
            // Add new mechanics and challenges
            this.addHiddenLayerContent(layerId);
            
            // Check if all hidden layers revealed
            if (this.hiddenLayersRevealed.size >= 3) {
                this.unlockFinalTranscendencePhase();
            }
        }
    }
    
    // Utility methods for complex calculations
    calculateLunarPosition() {
        const now = new Date();
        const lunarCycle = 29.53058867; // Average lunar cycle in days
        const newMoonRef = new Date('2000-01-06'); // Reference new moon
        const daysSinceRef = (now - newMoonRef) / (1000 * 60 * 60 * 24);
        const currentCyclePosition = daysSinceRef % lunarCycle;
        return (currentCyclePosition / lunarCycle) * 100;
    }
    
    calculateSeasonalEnergy() {
        const now = new Date();
        const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const seasonalPosition = ((dayOfYear - 80) % 365) / 365; // Spring equinox as reference
        return 50 + (Math.sin(seasonalPosition * Math.PI * 2) * 50);
    }
    
    calculateTimeEffects() {
        const now = new Date();
        const hourAngle = (now.getHours() + now.getMinutes() / 60) * 15; // Degrees
        const solarInfluence = 50 + (Math.sin((hourAngle - 180) * Math.PI / 180) * 50);
        return Math.max(0, solarInfluence);
    }
    
    calculateAstrologicalInfluence() {
        // Simplified astrological calculation for mystical effect
        const now = new Date();
        const yearProgress = (now.getTime() % (365.25 * 24 * 60 * 60 * 1000)) / (365.25 * 24 * 60 * 60 * 1000);
        return 25 + (Math.sin(yearProgress * Math.PI * 12) * 25) + (Math.cos(yearProgress * Math.PI * 8) * 25);
    }
    
    getDimensionName(dimension) {
        const names = {
            1: 'Quantum Awareness',
            2: 'Fibonacci Harmonics',
            3: 'Sacred Geometry',
            4: 'Consciousness Alignment',
            5: 'Temporal Synchronization',
            6: 'Cosmic Interconnection',
            7: 'Unity Transcendence',
            8: 'Dimensional Mastery',
            9: 'Cosmic Wisdom',
            10: 'Infinite Consciousness',
            11: 'Transcendent Unity',
            12: 'Ultimate Reality'
        };
        return names[dimension] || `Advanced Dimension ${dimension}`;
    }
    
    getStateColor(state) {
        const colors = {
            consciousness: '#4a90e2',
            unity: '#ffc58f',
            cosmic_alignment: '#d4af37',
            temporal_synchronization: '#8b7d9b',
            dimensional_awareness: '#e09658',
            karmic_resonance: '#9b59b6',
            enlightenment_proximity: '#f39c12'
        };
        return colors[state] || '#ffffff';
    }
    
    formatStateName(state) {
        return state.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    provideFeedback(message) {
        const feedbackContent = document.getElementById('feedback-content');
        if (feedbackContent) {
            feedbackContent.style.opacity = '0';
            setTimeout(() => {
                feedbackContent.textContent = message;
                feedbackContent.style.opacity = '1';
            }, 200);
        }
        
        // Also log for debugging
        console.log(`Quantum Feedback: ${message}`);
    }
    
    updateQuantumStateDisplay() {
        Object.keys(this.quantumStates).forEach(state => {
            const fill = document.getElementById(`${state}-fill`);
            const value = document.getElementById(`${state}-value`);
            
            if (fill && value) {
                const percentage = Math.min(100, this.quantumStates[state]);
                fill.style.width = `${percentage}%`;
                value.textContent = `${Math.round(percentage)}%`;
            }
        });
        
        // Update consciousness meter
        this.updateOverallConsciousnessLevel();
    }
    
    updateOverallConsciousnessLevel() {
        const averageConsciousness = Object.values(this.quantumStates).reduce((a, b) => a + b, 0) / Object.keys(this.quantumStates).length;
        
        // Update various UI elements based on consciousness level
        this.updateButtonStates(averageConsciousness);
        this.checkForNewUnlocks(averageConsciousness);
        
        return averageConsciousness;
    }
    
    updateButtonStates(consciousnessLevel) {
        // Enable/disable buttons based on consciousness level
        const revealBtn = document.getElementById('reveal-hidden-btn');
        const unityBtn = document.getElementById('unity-transcendence-btn');
        
        if (revealBtn) {
            revealBtn.disabled = consciousnessLevel < 50;
        }
        
        if (unityBtn) {
            unityBtn.disabled = consciousnessLevel < 80;
        }
    }
    
    // Save/load enhanced state
    saveQuantumProgressionState() {
        const state = {
            currentDimension: this.currentDimension,
            dimensionalProgress: this.dimensionalProgress,
            quantumStates: this.quantumStates,
            secretMechanicsUnlocked: Array.from(this.secretMechanicsUnlocked),
            hiddenLayersRevealed: Array.from(this.hiddenLayersRevealed),
            adaptiveComplexity: this.adaptiveComplexity,
            ecosystemConnections: {
                other_puzzles_influence: Object.fromEntries(this.ecosystemConnections.other_puzzles_influence),
                player_choice_ripples: this.ecosystemConnections.player_choice_ripples,
                karmic_debt_calculations: this.ecosystemConnections.karmic_debt_calculations,
                universal_harmony_index: this.ecosystemConnections.universal_harmony_index,
                collective_consciousness_resonance: this.ecosystemConnections.collective_consciousness_resonance
            },
            temporalMechanics: this.temporalMechanics,
            completionTimestamp: Date.now()
        };
        
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.ultra_banyan_quantum_state = state;
        }
    }
    
    loadQuantumProgressionState() {
        if (this.gameStateManager && 
            this.gameStateManager.worldState && 
            this.gameStateManager.worldState.ultra_banyan_quantum_state) {
            
            const state = this.gameStateManager.worldState.ultra_banyan_quantum_state;
            
            this.currentDimension = state.currentDimension || 1;
            this.dimensionalProgress = state.dimensionalProgress || {};
            this.quantumStates = { ...this.quantumStates, ...state.quantumStates };
            this.secretMechanicsUnlocked = new Set(state.secretMechanicsUnlocked || []);
            this.hiddenLayersRevealed = new Set(state.hiddenLayersRevealed || []);
            this.adaptiveComplexity = { ...this.adaptiveComplexity, ...state.adaptiveComplexity };
            
            if (state.ecosystemConnections) {
                this.ecosystemConnections.other_puzzles_influence = new Map(Object.entries(state.ecosystemConnections.other_puzzles_influence || {}));
                this.ecosystemConnections.player_choice_ripples = state.ecosystemConnections.player_choice_ripples || [];
                this.ecosystemConnections.karmic_debt_calculations = state.ecosystemConnections.karmic_debt_calculations || {};
                this.ecosystemConnections.universal_harmony_index = state.ecosystemConnections.universal_harmony_index || 0;
                this.ecosystemConnections.collective_consciousness_resonance = state.ecosystemConnections.collective_consciousness_resonance || 0;
            }
            
            this.temporalMechanics = { ...this.temporalMechanics, ...state.temporalMechanics };
        }
    }
    
    // Final completion and transcendence
    completeUltraEnhancedPuzzle() {
        this.provideFeedback("🌟 Ultra-Enhanced Banyan Tree Harmony achieved! You have transcended all dimensional limitations.");
        
        // Mark as completed with maximum understanding
        this.gameStateManager.updateState('banyan_ultra_enhanced_completion', true);
        this.gameStateManager.updateState('consciousness_transcendence_achieved', true);
        
        // Award ultimate rewards
        this.adventureEngine.unlockAbility('cosmicConsciousness', 3);
        this.adventureEngine.unlockAbility('dimensionalMastery', 3);
        this.adventureEngine.unlockAbility('quantumAwareness', 3);
        
        // Add transcendent philosophical insight
        this.adventureEngine.philosophicalInsights.push({
            teaching: "You have discovered that consciousness is not something you have—consciousness is what you are. The tree, the puzzle, the solver, and the solution are all movements within the same infinite awareness.",
            source: "Ultra-Enhanced Banyan Tree Transcendence",
            timestamp: Date.now(),
            significance: "ultimate"
        });
        
        // Create transcendence effect
        this.createTranscendenceEffect();
        
        // Save final state
        this.saveQuantumProgressionState();
        
        // Complete puzzle
        setTimeout(() => {
            if (this.onSolved) {
                this.onSolved();
            }
        }, 5000);
    }
    
    createTranscendenceEffect() {
        const effect = document.createElement('div');
        effect.className = 'transcendence-effect';
        effect.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at center, 
                rgba(212, 175, 55, 0.8) 0%, 
                rgba(255, 197, 143, 0.6) 30%, 
                rgba(74, 144, 226, 0.4) 60%, 
                transparent 100%);
            pointer-events: none;
            z-index: 9999;
            animation: transcendence-wave 5s ease-out forwards;
        `;
        
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 5000);
    }
    
    // Placeholder methods for complex systems (would be fully implemented)
    startQuantumVisualizationLoop() { /* Complex quantum visualization */ }
    generateQuantumConnections() { return []; }
    generateDimensionalAspects() { return []; }
    generateTemporalFluctuations() { return []; }
    setupEscapeRoomInteractions() { /* Complex escape room mechanics */ }
    generateFibonacciSpiralPattern() { return []; }
    generateMandalaGeometryPattern() { return []; }
    generateChakraResonancePattern() { return []; }
    calculateRiddleComplexity(riddle) { return riddle.philosophical_depth; }
    generateDynamicHints(riddle) { return riddle.hint_progression; }
    personalizeRiddleContext(riddle) { return riddle.question; }
    setupQuantumObservationMechanics() { /* Quantum mechanics implementation */ }
    generateProbabilityClouds() { /* Probability visualization */ }
    updateObservationButtonStates() { /* Button state management */ }
    setupFibonacciHarmonicMechanics() { /* Fibonacci system */ }
    generateFibonacciSpiralVisualization() { /* Spiral generation */ }
    initializeHarmonicFrequencySystem() { /* Frequency system */ }
    setupSacredGeometryMechanics() { /* Geometry mechanics */ }
    generateSacredGeometryPatterns() { /* Pattern generation */ }
    initializeGeometricCalculator() { /* Calculator system */ }
    setupConsciousnessAlignmentMechanics() { /* Consciousness mechanics */ }
    initializeBrainwaveVisualization() { /* Brainwave visualization */ }
    startConsciousnessLayerDetection() { /* Layer detection */ }
    setupQuantumStateMonitoring() { /* Real-time monitoring */ }
    startTemporalProgressionTracking() { /* Temporal tracking */ }
    startConsciousnessSyncAnimation() { /* Sync animation */ }
    createDimensionalShiftEffect() { /* Shift effect */ }
    generateInterconnectionVisualization() { /* Web visualization */ }
    revealCosmicInsights() { /* Insight system */ }
    createHiddenLayerRevealEffect() { /* Reveal effect */ }
    addHiddenLayerContent(layerId) { /* Hidden content */ }
    unlockFinalTranscendencePhase() { /* Final phase */ }
    checkForHiddenMechanicUnlocks() { /* Unlock checking */ }
    unlockNewDimensionalLayer() { /* Layer unlocking */ }
    isDimensionUnlocked(dimension) { return dimension <= this.currentDimension + 1; }
    getHiddenLayerName(layerId) { return `Hidden Layer ${layerId.split('_')[2]}`; }
    assessCurrentConsciousnessState() { return { frequency: 432 }; }
    checkForNewUnlocks(level) { /* Unlock checking */ }
    calculateTemporalComplexityFactor() { return 1; }
    updateDimensionDisplay() { /* Display update */ }
    updateQuantumFieldVisualization() { /* Field visualization */ }
    activateAdvancedDimension(dimensionNumber) { /* Advanced dimensions */ }
    calculateFibonacciResonance(dimension) { return dimension * 1.618; }
    calculateChakraAlignment(dimension) { return dimension * 7; }
    calculateVedicFrequency(dimension) { return 432 + (dimension * 108); }
    calculateKarmicWeight(dimension) { return dimension * 0.1; }
    calculateUnityPotential(dimension) { return Math.min(1, dimension * 0.15); }
    generateHiddenTeaching(dimension) { return `Hidden teaching ${dimension}`; }
    generateCosmicCode(dimension) { return `CC${dimension}${Date.now()}`; }
    createSequencePuzzles() { return []; }
    createHiddenSymbolCombinations() { return []; }
    createTemporalAlignmentChallenges() { return []; }
    createUnityParadoxTests() { return []; }
    renderEscapeRoomElements() { /* Render elements */ }
    startTemporalProgressionEngine() { /* Temporal engine */ }
}

// CSS for the ultra-enhanced interface
const ultraEnhancedCSS = `
<style>
.ultra-banyan-harmony-container {
    min-height: 100vh;
    background: 
        radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(74, 144, 226, 0.03) 0%, transparent 50%),
        linear-gradient(135deg, #0d0b08 0%, #1a1512 50%, #2a2117 100%);
    padding: 2rem;
    position: relative;
    overflow-x: auto;
}

.quantum-consciousness-field {
    position: relative;
    background: rgba(26, 21, 18, 0.8);
    border: 3px solid transparent;
    background-clip: padding-box;
    border-radius: 20px;
    margin-bottom: 2rem;
    backdrop-filter: blur(15px);
}

.quantum-consciousness-field::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #ffc58f, #d4af37, #4a90e2, #8b7d9b, #ffc58f);
    background-size: 400% 400%;
    border-radius: 20px;
    z-index: -1;
    animation: quantum-border 8s ease-in-out infinite;
}

@keyframes quantum-border {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 100% 100%; }
    75% { background-position: 0% 100%; }
}

.dimensional-progression-tracker {
    background: rgba(42, 33, 23, 0.9);
    border: 2px solid rgba(255, 197, 143, 0.3);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
}

.tracker-title {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    text-align: center;
    color: #d4af37;
    margin-bottom: 2rem;
    text-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
}

.dimension-circles {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.dimension-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 197, 143, 0.1);
    border: 2px solid rgba(255, 197, 143, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.dimension-circle.active {
    background: rgba(212, 175, 55, 0.3);
    border-color: #d4af37;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
    transform: scale(1.1);
}

.dimension-circle.completed {
    background: rgba(74, 144, 226, 0.3);
    border-color: #4a90e2;
    box-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
}

.dimension-circle.locked {
    opacity: 0.4;
    cursor: not-allowed;
}

.dimension-number {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffc58f;
}

.dimension-name {
    font-size: 0.7rem;
    color: #dcd1c7;
    text-align: center;
    margin-top: 0.3rem;
}

.quantum-state-monitor {
    background: rgba(26, 21, 18, 0.8);
    border: 2px solid rgba(139, 125, 155, 0.3);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
}

.monitor-title {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    text-align: center;
    color: #8b7d9b;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 10px rgba(139, 125, 155, 0.5);
}

.state-meters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.state-meter {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.state-label {
    font-size: 0.9rem;
    color: #dcd1c7;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
}

.state-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
}

.state-fill {
    height: 100%;
    background: var(--state-color, #ffc58f);
    border-radius: 4px;
    transition: width 0.6s ease;
    box-shadow: 0 0 8px var(--state-color, #ffc58f);
}

.state-value {
    font-size: 0.8rem;
    color: #918070;
    text-align: right;
}

.active-dimension-interface {
    background: rgba(26, 21, 18, 0.9);
    border: 2px solid rgba(255, 197, 143, 0.4);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(15px);
    min-height: 400px;
}

.dimension-container {
    position: relative;
}

.dimension-title {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    text-align: center;
    color: #ffc58f;
    margin-bottom: 1rem;
    text-shadow: 0 0 15px rgba(255, 197, 143, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.dimension-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #dcd1c7;
    text-align: center;
    margin-bottom: 2rem;
    font-style: italic;
    opacity: 0.9;
}

.ultra-advanced-controls {
    background: rgba(42, 33, 23, 0.9);
    border: 2px solid rgba(255, 197, 143, 0.3);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
}

.primary-controls,
.advanced-controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.quantum-btn {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, rgba(255, 197, 143, 0.2), rgba(212, 175, 55, 0.1));
    border: 2px solid rgba(255, 197, 143, 0.4);
    border-radius: 8px;
    color: #ffc58f;
    font-family: 'Cinzel', serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.quantum-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(255, 197, 143, 0.4), rgba(212, 175, 55, 0.3));
    border-color: #ffc58f;
    box-shadow: 0 0 20px rgba(255, 197, 143, 0.4);
    transform: translateY(-2px);
}

.quantum-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.quantum-btn.secondary {
    border-color: rgba(74, 144, 226, 0.4);
    color: #4a90e2;
}

.quantum-btn.secondary:hover:not(:disabled) {
    border-color: #4a90e2;
    box-shadow: 0 0 20px rgba(74, 144, 226, 0.4);
}

.quantum-btn.mystery {
    border-color: rgba(139, 125, 155, 0.4);
    color: #8b7d9b;
}

.quantum-btn.cosmic {
    border-color: rgba(212, 175, 55, 0.6);
    color: #d4af37;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(255, 197, 143, 0.2));
}

.quantum-btn.emergency {
    border-color: rgba(231, 76, 60, 0.4);
    color: #e74c3c;
}

.btn-icon {
    font-size: 1.2rem;
}

.real-time-feedback {
    background: rgba(13, 11, 8, 0.9);
    border: 2px solid rgba(255, 197, 143, 0.2);
    border-radius: 8px;
    padding: 1rem;
    margin-top: 2rem;
}

.feedback-title {
    font-family: 'Cinzel', serif;
    color: #ffc58f;
    margin-bottom: 0.5rem;
    text-align: center;
}

.feedback-content {
    color: #dcd1c7;
    text-align: center;
    font-style: italic;
    transition: opacity 0.3s ease;
}

.temporal-influence-display {
    background: rgba(26, 21, 18, 0.8);
    border: 2px solid rgba(139, 125, 155, 0.3);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.temporal-title {
    font-family: 'Cinzel', serif;
    color: #8b7d9b;
    text-align: center;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px rgba(139, 125, 155, 0.5);
}

.temporal-factors {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.temporal-factor {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.factor-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.factor-label {
    font-size: 0.9rem;
    color: #dcd1c7;
    margin-bottom: 0.3rem;
}

.factor-value {
    font-weight: bold;
    color: #ffc58f;
}

@keyframes transcendence-wave {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    50% {
        opacity: 1;
        transform: scale(1.2);
    }
    100% {
        opacity: 0;
        transform: scale(2);
    }
}

@media (max-width: 768px) {
    .ultra-banyan-harmony-container {
        padding: 1rem;
    }
    
    .dimension-circles {
        gap: 0.5rem;
    }
    
    .dimension-circle {
        width: 60px;
        height: 60px;
    }
    
    .primary-controls,
    .advanced-controls {
        flex-direction: column;
        align-items: center;
    }
    
    .quantum-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
}
</style>
`;

// Inject CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = ultraEnhancedCSS;
document.head.appendChild(styleSheet);

// Export for use in the main game
window.UltraEnhancedBanyanTreeHarmony = UltraEnhancedBanyanTreeHarmony;

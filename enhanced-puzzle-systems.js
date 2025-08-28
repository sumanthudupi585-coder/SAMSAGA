/**
 * Enhanced Multi-Stage Puzzle Systems
 * Creates complex, engaging spiritual puzzles with progressive difficulty,
 * hidden mechanics, and deep philosophical integration
 */

class EnhancedBanyanTreeHarmony {
    constructor(container, gameStateManager, adventureEngine, onSolved) {
        this.container = container;
        this.gameStateManager = gameStateManager;
        this.adventureEngine = adventureEngine;
        this.onSolved = onSolved;
        
        // Multi-stage puzzle state
        this.currentStage = 1;
        this.totalStages = 4;
        this.stageProgress = {};
        this.hiddenMechanicsUnlocked = [];
        this.patternDiscoveries = [];
        this.cosmicAlignment = 0;
        
        // Tree consciousness simulation
        this.treeMemories = [];
        this.rootNetworkState = this.initializeRootNetwork();
        this.seasonalCycle = 'spring'; // Affects puzzle behavior
        this.consciousnessLevel = 0;
        
        // Advanced puzzle mechanics
        this.fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        this.sacredGeometryPatterns = this.initializeSacredPatterns();
        this.ecologicalConnections = this.initializeEcologicalWeb();
        
        this.init();
    }
    
    init() {
        this.createEnhancedPuzzleInterface();
        this.setupAdvancedEventListeners();
        this.loadPuzzleProgress();
        this.startStage(this.currentStage);
        this.activateAtmosphericEffects();
    }
    
    createEnhancedPuzzleInterface() {
        this.container.innerHTML = `
            <div class="mystery-puzzle-container banyan-harmony-advanced">
                <!-- Puzzle Phase Indicators -->
                <div class="puzzle-phase-indicator">
                    ${Array.from({length: this.totalStages}, (_, i) => 
                        `<div class="phase-dot ${i < this.currentStage ? 'completed' : i === this.currentStage - 1 ? 'active' : ''}" 
                             data-stage="${i + 1}"></div>`
                    ).join('')}
                </div>
                
                <!-- Puzzle Title and Context -->
                <div class="puzzle-title">The Living Banyan's Cosmic Dance</div>
                <div class="puzzle-philosophical-context">
                    "The banyan tree teaches that what appears as many is actually one—
                    one consciousness expressing itself through countless forms."
                </div>
                
                <!-- Main Puzzle Area -->
                <div class="banyan-puzzle-main" id="banyan-main-area">
                    <!-- Stage-specific content will be populated here -->
                </div>
                
                <!-- Tree Consciousness Meter -->
                <div class="consciousness-meter-container">
                    <div class="meter-label">Tree Consciousness Resonance</div>
                    <div class="consciousness-meter">
                        <div class="consciousness-fill" id="consciousness-fill"></div>
                        <div class="consciousness-text" id="consciousness-text">0%</div>
                    </div>
                </div>
                
                <!-- Discovered Patterns Display -->
                <div class="pattern-discoveries" id="pattern-discoveries" style="display: none;">
                    <div class="discoveries-title">🌟 Sacred Patterns Discovered</div>
                    <div class="discoveries-list" id="discoveries-list"></div>
                </div>
                
                <!-- Hidden Mechanics Container -->
                <div class="hidden-mechanics-container" id="hidden-mechanics">
                    <div class="hidden-mechanics-title">🔮 Awakened Mysteries</div>
                    <div class="hidden-mechanics-list" id="mechanics-list"></div>
                </div>
                
                <!-- Advanced Controls -->
                <div class="advanced-puzzle-controls">
                    <button class="mystery-button primary" id="tree-commune-btn" disabled>
                        <span class="btn-icon">🌳</span>
                        Commune with Tree
                    </button>
                    <button class="mystery-button secondary" id="pattern-analyze-btn" disabled>
                        <span class="btn-icon">📐</span>
                        Analyze Patterns
                    </button>
                    <button class="mystery-button secondary" id="root-network-btn" disabled>
                        <span class="btn-icon">🕸️</span>
                        Access Root Network
                    </button>
                    <button class="mystery-button hint" id="cosmic-insight-btn">
                        <span class="btn-icon">✨</span>
                        Cosmic Insight
                    </button>
                </div>
                
                <!-- Stage Progress Display -->
                <div class="stage-progress-display">
                    <div class="current-stage">Stage ${this.currentStage}: <span id="stage-name"></span></div>
                    <div class="stage-description" id="stage-description"></div>
                </div>
            </div>
        `;
        
        this.updateConsciousnessDisplay();
    }
    
    startStage(stageNumber) {
        this.currentStage = stageNumber;
        this.updatePhaseIndicators();
        
        const stages = {
            1: () => this.createStage1_PatternRecognition(),
            2: () => this.createStage2_RootNetworkBalance(),
            3: () => this.createStage3_ConsciousnessShift(),
            4: () => this.createStage4_TranscendentUnity()
        };
        
        const stageFunction = stages[stageNumber];
        if (stageFunction) {
            stageFunction();
            this.activateStageSpecificMechanics(stageNumber);
        }
    }
    
    createStage1_PatternRecognition() {
        const mainArea = document.getElementById('banyan-main-area');
        document.getElementById('stage-name').textContent = 'Awakening the Tree Consciousness';
        document.getElementById('stage-description').textContent = 'Discover the hidden Fibonacci sequence in the sacred branch patterns';
        
        mainArea.innerHTML = `
            <div class="stage-container stage-pattern-recognition">
                <div class="tree-visualization">
                    <svg class="banyan-tree-interactive" id="tree-svg" viewBox="0 0 400 400">
                        <!-- Tree will be dynamically generated based on Fibonacci patterns -->
                    </svg>
                </div>
                
                <div class="pattern-interface">
                    <div class="pattern-challenge">
                        <h3>🌿 Sacred Geometry Challenge</h3>
                        <p>Click on the branches that follow the Fibonacci sequence. The tree's consciousness responds to mathematical harmony.</p>
                        
                        <div class="fibonacci-guide" id="fibonacci-guide" style="display: none;">
                            <div class="sequence-display">
                                <span>Fibonacci Sequence:</span>
                                ${this.fibonacciSequence.slice(0, 8).map((num, index) => 
                                    `<span class="fib-number" data-fib="${num}" data-index="${index}">${num}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="pattern-progress">
                            <div class="progress-label">Pattern Recognition Progress</div>
                            <div class="progress-bar">
                                <div class="progress-fill" id="pattern-progress-fill"></div>
                            </div>
                            <div class="progress-text" id="pattern-progress-text">0/8 patterns found</div>
                        </div>
                    </div>
                </div>
                
                <div class="spiritual-insights" id="stage1-insights" style="display: none;">
                    <div class="insight-content">
                        <div class="insight-icon">🌟</div>
                        <div class="insight-text">
                            "The same mathematical principles that govern the spiral of galaxies 
                            also determine the arrangement of leaves on this sacred tree. 
                            You are beginning to see the underlying unity of all creation."
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.generateFibonacciTree();
        this.setupPatternRecognitionInteractions();
    }
    
    createStage2_RootNetworkBalance() {
        const mainArea = document.getElementById('banyan-main-area');
        document.getElementById('stage-name').textContent = 'Harmonizing Root Networks';
        document.getElementById('stage-description').textContent = 'Balance the underground energy flow through the living root system';
        
        mainArea.innerHTML = `
            <div class="stage-container stage-root-network">
                <div class="network-visualization">
                    <div class="underground-view">
                        <canvas id="root-network-canvas" width="600" height="400"></canvas>
                    </div>
                </div>
                
                <div class="network-controls">
                    <div class="energy-flow-panel">
                        <h3>🌊 Energy Flow Management</h3>
                        <div class="flow-controls">
                            <div class="flow-node" data-node="source">
                                <div class="node-label">Source Spring</div>
                                <input type="range" class="flow-slider" min="0" max="100" value="50" 
                                       id="source-flow" data-node="source">
                                <div class="flow-value">50%</div>
                            </div>
                            <div class="flow-node" data-node="primary">
                                <div class="node-label">Primary Roots</div>
                                <input type="range" class="flow-slider" min="0" max="100" value="30" 
                                       id="primary-flow" data-node="primary">
                                <div class="flow-value">30%</div>
                            </div>
                            <div class="flow-node" data-node="secondary">
                                <div class="node-label">Secondary Network</div>
                                <input type="range" class="flow-slider" min="0" max="100" value="70" 
                                       id="secondary-flow" data-node="secondary">
                                <div class="flow-value">70%</div>
                            </div>
                            <div class="flow-node" data-node="mycelial">
                                <div class="node-label">Mycelial Web</div>
                                <input type="range" class="flow-slider" min="0" max="100" value="20" 
                                       id="mycelial-flow" data-node="mycelial">
                                <div class="flow-value">20%</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="balance-indicator">
                        <div class="balance-title">Network Harmony</div>
                        <div class="harmony-display">
                            <div class="harmony-level" id="network-harmony">23%</div>
                            <div class="harmony-status" id="harmony-status">Seeking Balance...</div>
                        </div>
                    </div>
                </div>
                
                <div class="ecological-wisdom" id="stage2-insights" style="display: none;">
                    <div class="insight-content">
                        <div class="insight-icon">🕸️</div>
                        <div class="insight-text">
                            "The underground network mirrors the neural networks of consciousness itself. 
                            As you balance these flows, you understand that all life is interconnected 
                            through invisible threads of energy and information."
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.initializeRootNetworkVisualization();
        this.setupNetworkBalanceInteractions();
    }
    
    createStage3_ConsciousnessShift() {
        const mainArea = document.getElementById('banyan-main-area');
        document.getElementById('stage-name').textContent = 'Transcending Individual Perspective';
        document.getElementById('stage-description').textContent = 'See the puzzle from the tree\'s perspective, not your own';
        
        mainArea.innerHTML = `
            <div class="stage-container stage-consciousness-shift">
                <div class="perspective-interface">
                    <div class="consciousness-tabs">
                        <button class="perspective-tab active" data-perspective="human">
                            <span class="tab-icon">👤</span>
                            Human View
                        </button>
                        <button class="perspective-tab" data-perspective="tree">
                            <span class="tab-icon">🌳</span>
                            Tree Consciousness
                        </button>
                        <button class="perspective-tab locked" data-perspective="cosmic">
                            <span class="tab-icon">🌌</span>
                            Cosmic Perspective
                        </button>
                    </div>
                    
                    <div class="perspective-display" id="perspective-display">
                        <!-- Perspective-specific content -->
                    </div>
                </div>
                
                <div class="consciousness-puzzle">
                    <div class="puzzle-title">🧠 The Paradox of Separation</div>
                    <div class="paradox-challenge">
                        <p>From your human perspective, you see yourself as separate from the tree. 
                        But what if that separation is itself an illusion?</p>
                        
                        <div class="perspective-questions">
                            <div class="question-card" data-question="1">
                                <div class="question-text">
                                    If you are consciousness observing the tree, and the tree is consciousness expressing itself, what is the difference between observer and observed?
                                </div>
                                <div class="answer-options">
                                    <button class="answer-option" data-answer="different">They are fundamentally different</button>
                                    <button class="answer-option" data-answer="same">They are the same consciousness</button>
                                    <button class="answer-option" data-answer="illusion">The question itself is the illusion</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="unity-visualization" id="unity-viz" style="display: none;">
                            <canvas id="consciousness-canvas" width="400" height="300"></canvas>
                        </div>
                    </div>
                </div>
                
                <div class="non-dual-wisdom" id="stage3-insights" style="display: none;">
                    <div class="insight-content">
                        <div class="insight-icon">☯️</div>
                        <div class="insight-text">
                            "The boundary between self and tree dissolves. You realize that consciousness 
                            is not located 'in' you or 'in' the tree—you and the tree are movements 
                            within consciousness itself."
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupConsciousnessShiftInteractions();
        this.createPerspectiveVisualization('human');
    }
    
    createStage4_TranscendentUnity() {
        const mainArea = document.getElementById('banyan-main-area');
        document.getElementById('stage-name').textContent = 'The Living Mandala';
        document.getElementById('stage-description').textContent = 'Recognize the complete unity of all existence';
        
        mainArea.innerHTML = `
            <div class="stage-container stage-transcendent-unity">
                <div class="unity-mandala-container">
                    <div class="living-mandala" id="living-mandala">
                        <canvas id="mandala-canvas" width="500" height="500"></canvas>
                    </div>
                </div>
                
                <div class="transcendence-interface">
                    <div class="unity-controls">
                        <div class="control-group">
                            <label>Consciousness Integration</label>
                            <div class="integration-slider-container">
                                <input type="range" id="integration-slider" min="0" max="100" value="0">
                                <div class="integration-level" id="integration-level">0%</div>
                            </div>
                        </div>
                        
                        <div class="control-group">
                            <label>Dimensional Awareness</label>
                            <div class="dimension-selector">
                                <button class="dimension-btn" data-dimension="3d">3D Reality</button>
                                <button class="dimension-btn" data-dimension="4d">4D Spacetime</button>
                                <button class="dimension-btn" data-dimension="5d">5D Consciousness</button>
                                <button class="dimension-btn locked" data-dimension="unity">Unity Field</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="final-realization">
                        <div class="realization-prompt">
                            <p>In this final stage, can you see that the tree, the earth, the sky, and you are not separate things, but one seamless movement of consciousness?</p>
                            
                            <div class="unity-action-buttons">
                                <button class="unity-btn" id="dissolve-boundaries-btn">
                                    <span class="btn-icon">🌊</span>
                                    Dissolve All Boundaries
                                </button>
                                <button class="unity-btn" id="recognize-unity-btn">
                                    <span class="btn-icon">⭐</span>
                                    Recognize Unity
                                </button>
                                <button class="unity-btn" id="become-tree-btn">
                                    <span class="btn-icon">🌳</span>
                                    Become the Tree
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="enlightenment-wisdom" id="stage4-insights" style="display: none;">
                    <div class="insight-content">
                        <div class="insight-icon">🕉️</div>
                        <div class="insight-text">
                            "You are no longer solving a puzzle about a tree. You ARE the tree, 
                            the puzzle, the solver, and the solution. The banyan has taught you 
                            the deepest truth: there is only One, appearing as many."
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupTranscendentUnityInteractions();
        this.createLivingMandala();
    }
    
    setupAdvancedEventListeners() {
        // Tree communion
        document.addEventListener('click', (e) => {
            if (e.target.id === 'tree-commune-btn') {
                this.communeWithTree();
            } else if (e.target.id === 'pattern-analyze-btn') {
                this.analyzePatterns();
            } else if (e.target.id === 'root-network-btn') {
                this.accessRootNetwork();
            } else if (e.target.id === 'cosmic-insight-btn') {
                this.provideCosmicInsight();
            }
        });
        
        // Advanced keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'c' && e.ctrlKey) {
                e.preventDefault();
                this.communeWithTree();
            } else if (e.key === 't' && e.ctrlKey) {
                e.preventDefault();
                this.switchTreePerspective();
            } else if (e.key === 'm' && e.ctrlKey) {
                e.preventDefault();
                this.activateUnityConsciousness();
            }
        });
    }
    
    generateFibonacciTree() {
        const svg = document.getElementById('tree-svg');
        const centerX = 200;
        const centerY = 350;
        
        // Generate branches based on Fibonacci spiral
        let currentAngle = 0;
        const angleIncrement = 137.5; // Golden angle
        
        for (let i = 0; i < this.fibonacciSequence.length; i++) {
            const fibNum = this.fibonacciSequence[i];
            const radius = fibNum * 8;
            const x = centerX + radius * Math.cos(currentAngle * Math.PI / 180);
            const y = centerY - radius * Math.sin(currentAngle * Math.PI / 180);
            
            // Create branch
            const branch = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            branch.setAttribute('x1', centerX);
            branch.setAttribute('y1', centerY);
            branch.setAttribute('x2', x);
            branch.setAttribute('y2', y);
            branch.setAttribute('stroke', '#8b7355');
            branch.setAttribute('stroke-width', Math.max(1, 8 - i));
            branch.setAttribute('class', 'tree-branch fibonacci-branch');
            branch.setAttribute('data-fib-index', i);
            branch.setAttribute('data-fib-value', fibNum);
            
            // Add interactive elements
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', Math.max(3, fibNum / 2));
            circle.setAttribute('fill', 'transparent');
            circle.setAttribute('stroke', '#ffc58f');
            circle.setAttribute('stroke-width', '2');
            circle.setAttribute('class', 'fibonacci-node');
            circle.setAttribute('data-fib-index', i);
            circle.setAttribute('data-fib-value', fibNum);
            
            svg.appendChild(branch);
            svg.appendChild(circle);
            
            currentAngle += angleIncrement;
        }
        
        // Add central trunk
        const trunk = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        trunk.setAttribute('cx', centerX);
        trunk.setAttribute('cy', centerY);
        trunk.setAttribute('r', '15');
        trunk.setAttribute('fill', '#8b7355');
        trunk.setAttribute('class', 'tree-trunk');
        svg.appendChild(trunk);
    }
    
    setupPatternRecognitionInteractions() {
        const fibNodes = document.querySelectorAll('.fibonacci-node');
        let discoveredPatterns = 0;
        let expectedSequence = 0;
        
        fibNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                const fibIndex = parseInt(e.target.dataset.fibIndex);
                const fibValue = parseInt(e.target.dataset.fibValue);
                
                if (fibIndex === expectedSequence) {
                    // Correct sequence
                    e.target.setAttribute('fill', '#ffc58f');
                    e.target.classList.add('discovered');
                    discoveredPatterns++;
                    expectedSequence++;
                    
                    // Visual feedback
                    this.createPatternDiscoveryEffect(e.target);
                    
                    // Update progress
                    this.updatePatternProgress(discoveredPatterns, this.fibonacciSequence.length);
                    
                    // Check completion
                    if (discoveredPatterns >= 6) { // First 6 Fibonacci numbers
                        this.completeStage1();
                    }
                } else {
                    // Wrong sequence - provide feedback
                    this.showPatternFeedback('Follow the sequence from smallest to largest');
                    e.target.classList.add('incorrect');
                    setTimeout(() => e.target.classList.remove('incorrect'), 1000);
                }
            });
        });
    }
    
    completeStage1() {
        document.getElementById('stage1-insights').style.display = 'block';
        this.stageProgress[1] = true;
        this.consciousnessLevel += 25;
        this.updateConsciousnessDisplay();
        
        // Unlock pattern analysis ability
        document.getElementById('pattern-analyze-btn').disabled = false;
        
        // Reveal Fibonacci guide for future reference
        document.getElementById('fibonacci-guide').style.display = 'block';
        
        setTimeout(() => {
            if (this.adventureEngine) {
                this.adventureEngine.unlockAbility('spiritualSight', 1);
            }
            this.proceedToNextStage();
        }, 3000);
    }
    
    initializeRootNetworkVisualization() {
        const canvas = document.getElementById('root-network-canvas');
        const ctx = canvas.getContext('2d');
        
        // Create root network nodes and connections
        this.rootNetwork = {
            nodes: [
                { id: 'source', x: 300, y: 50, energy: 50, type: 'source' },
                { id: 'primary1', x: 150, y: 150, energy: 30, type: 'primary' },
                { id: 'primary2', x: 450, y: 150, energy: 30, type: 'primary' },
                { id: 'secondary1', x: 100, y: 250, energy: 70, type: 'secondary' },
                { id: 'secondary2', x: 200, y: 250, energy: 70, type: 'secondary' },
                { id: 'secondary3', x: 400, y: 250, energy: 70, type: 'secondary' },
                { id: 'secondary4', x: 500, y: 250, energy: 70, type: 'secondary' },
                { id: 'mycelial1', x: 75, y: 350, energy: 20, type: 'mycelial' },
                { id: 'mycelial2', x: 175, y: 350, energy: 20, type: 'mycelial' },
                { id: 'mycelial3', x: 275, y: 350, energy: 20, type: 'mycelial' },
                { id: 'mycelial4', x: 375, y: 350, energy: 20, type: 'mycelial' },
                { id: 'mycelial5', x: 475, y: 350, energy: 20, type: 'mycelial' },
                { id: 'mycelial6', x: 525, y: 350, energy: 20, type: 'mycelial' }
            ],
            connections: [
                { from: 'source', to: 'primary1', flow: 0 },
                { from: 'source', to: 'primary2', flow: 0 },
                { from: 'primary1', to: 'secondary1', flow: 0 },
                { from: 'primary1', to: 'secondary2', flow: 0 },
                { from: 'primary2', to: 'secondary3', flow: 0 },
                { from: 'primary2', to: 'secondary4', flow: 0 },
                { from: 'secondary1', to: 'mycelial1', flow: 0 },
                { from: 'secondary1', to: 'mycelial2', flow: 0 },
                { from: 'secondary2', to: 'mycelial2', flow: 0 },
                { from: 'secondary2', to: 'mycelial3', flow: 0 },
                { from: 'secondary3', to: 'mycelial4', flow: 0 },
                { from: 'secondary3', to: 'mycelial5', flow: 0 },
                { from: 'secondary4', to: 'mycelial5', flow: 0 },
                { from: 'secondary4', to: 'mycelial6', flow: 0 }
            ]
        };
        
        this.renderRootNetwork();
    }
    
    renderRootNetwork() {
        const canvas = document.getElementById('root-network-canvas');
        const ctx = canvas.getContext('2d');
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        this.rootNetwork.connections.forEach(conn => {
            const fromNode = this.rootNetwork.nodes.find(n => n.id === conn.from);
            const toNode = this.rootNetwork.nodes.find(n => n.id === conn.to);
            
            if (fromNode && toNode) {
                ctx.strokeStyle = `rgba(255, 197, 143, ${0.3 + (conn.flow / 100) * 0.7})`;
                ctx.lineWidth = 2 + (conn.flow / 100) * 4;
                ctx.beginPath();
                ctx.moveTo(fromNode.x, fromNode.y);
                ctx.lineTo(toNode.x, toNode.y);
                ctx.stroke();
            }
        });
        
        // Draw nodes
        this.rootNetwork.nodes.forEach(node => {
            const radius = node.type === 'source' ? 12 : 
                          node.type === 'primary' ? 10 : 
                          node.type === 'secondary' ? 8 : 6;
            
            const intensity = node.energy / 100;
            
            // Node glow
            ctx.shadowColor = '#ffc58f';
            ctx.shadowBlur = intensity * 20;
            
            // Node fill
            ctx.fillStyle = `rgba(255, 197, 143, ${0.4 + intensity * 0.6})`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Node border
            ctx.strokeStyle = '#ffc58f';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Reset shadow
            ctx.shadowBlur = 0;
        });
    }
    
    setupNetworkBalanceInteractions() {
        const sliders = document.querySelectorAll('.flow-slider');
        
        sliders.forEach(slider => {
            slider.addEventListener('input', (e) => {
                const nodeType = e.target.dataset.node;
                const value = parseInt(e.target.value);
                
                // Update display
                e.target.nextElementSibling.textContent = `${value}%`;
                
                // Update network energy
                this.updateNetworkEnergy(nodeType, value);
                
                // Calculate harmony
                const harmony = this.calculateNetworkHarmony();
                document.getElementById('network-harmony').textContent = `${Math.round(harmony)}%`;
                
                // Update status
                this.updateHarmonyStatus(harmony);
                
                // Re-render network
                this.renderRootNetwork();
                
                // Check completion
                if (harmony >= 85) {
                    this.completeStage2();
                }
            });
        });
    }
    
    updateNetworkEnergy(nodeType, energy) {
        this.rootNetwork.nodes.forEach(node => {
            if (node.type === nodeType) {
                node.energy = energy;
            }
        });
        
        // Update connection flows based on energy balance
        this.calculateFlowDynamics();
    }
    
    calculateFlowDynamics() {
        // Simplified flow calculation - in reality this would be much more complex
        this.rootNetwork.connections.forEach(conn => {
            const fromNode = this.rootNetwork.nodes.find(n => n.id === conn.from);
            const toNode = this.rootNetwork.nodes.find(n => n.id === conn.to);
            
            if (fromNode && toNode) {
                const energyDiff = fromNode.energy - toNode.energy;
                conn.flow = Math.max(0, Math.min(100, 50 + energyDiff));
            }
        });
    }
    
    calculateNetworkHarmony() {
        // Calculate balance based on energy distribution principles
        const sourceEnergy = this.rootNetwork.nodes.find(n => n.type === 'source').energy;
        const primaryAvg = this.rootNetwork.nodes.filter(n => n.type === 'primary')
            .reduce((sum, n) => sum + n.energy, 0) / 2;
        const secondaryAvg = this.rootNetwork.nodes.filter(n => n.type === 'secondary')
            .reduce((sum, n) => sum + n.energy, 0) / 4;
        const mycelialAvg = this.rootNetwork.nodes.filter(n => n.type === 'mycelial')
            .reduce((sum, n) => sum + n.energy, 0) / 6;
        
        // Ideal energy cascade: 80 -> 60 -> 40 -> 20
        const sourceIdeal = 80;
        const primaryIdeal = 60;
        const secondaryIdeal = 40;
        const mycelialIdeal = 20;
        
        const sourceBalance = 100 - Math.abs(sourceEnergy - sourceIdeal);
        const primaryBalance = 100 - Math.abs(primaryAvg - primaryIdeal);
        const secondaryBalance = 100 - Math.abs(secondaryAvg - secondaryIdeal);
        const mycelialBalance = 100 - Math.abs(mycelialAvg - mycelialIdeal);
        
        return (sourceBalance + primaryBalance + secondaryBalance + mycelialBalance) / 4;
    }
    
    completeStage2() {
        document.getElementById('stage2-insights').style.display = 'block';
        this.stageProgress[2] = true;
        this.consciousnessLevel += 25;
        this.updateConsciousnessDisplay();
        
        // Unlock root network access
        document.getElementById('root-network-btn').disabled = false;
        
        // Add to hidden mechanics
        this.addHiddenMechanic('Network Flow Mastery', 'You can now perceive and influence the underground energy networks that connect all life');
        
        setTimeout(() => {
            if (this.adventureEngine) {
                this.adventureEngine.unlockAbility('elementalHarmony', 1);
            }
            this.proceedToNextStage();
        }, 3000);
    }
    
    setupConsciousnessShiftInteractions() {
        // Perspective tabs
        document.querySelectorAll('.perspective-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                if (tab.classList.contains('locked')) return;
                
                // Update active tab
                document.querySelectorAll('.perspective-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Switch perspective
                const perspective = tab.dataset.perspective;
                this.createPerspectiveVisualization(perspective);
            });
        });
        
        // Answer options
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('answer-option')) {
                const answer = e.target.dataset.answer;
                this.processConsciousnessAnswer(answer);
            }
        });
    }
    
    createPerspectiveVisualization(perspective) {
        const display = document.getElementById('perspective-display');
        
        const perspectives = {
            human: {
                title: '👁️ Human Perspective',
                description: 'You see yourself as separate from the tree. You are the observer, the tree is the observed.',
                visualization: `
                    <div class="perspective-view human-view">
                        <div class="observer">👤 You (Observer)</div>
                        <div class="separation-line">———————————————</div>
                        <div class="observed">🌳 Tree (Observed)</div>
                        <div class="perspective-note">Experience: Duality - I am here, the tree is there</div>
                    </div>
                `
            },
            tree: {
                title: '🌳 Tree Consciousness',
                description: 'From the tree\'s perspective, you are part of its extended awareness. The boundary between self and other becomes fluid.',
                visualization: `
                    <div class="perspective-view tree-view">
                        <div class="tree-consciousness">
                            <div class="consciousness-center">🌳 Tree Awareness</div>
                            <div class="awareness-field">
                                <div class="awareness-node">🍃 Leaves sensing sunlight</div>
                                <div class="awareness-node">🌿 Roots feeling earth</div>
                                <div class="awareness-node">👤 Human consciousness touching tree awareness</div>
                                <div class="awareness-node">🐦 Birds in branches</div>
                                <div class="awareness-node">🦋 Insects on bark</div>
                            </div>
                        </div>
                        <div class="perspective-note">Experience: Expanded awareness - All beings are part of one field of consciousness</div>
                    </div>
                `
            },
            cosmic: {
                title: '🌌 Cosmic Perspective',
                description: 'From the cosmic view, tree, human, earth, and stars are all movements within one infinite consciousness.',
                visualization: `
                    <div class="perspective-view cosmic-view">
                        <div class="cosmic-consciousness">
                            <div class="unity-field">
                                <div class="cosmic-element">⭐ Stars</div>
                                <div class="cosmic-element">🌍 Earth</div>
                                <div class="cosmic-element">🌳 Tree</div>
                                <div class="cosmic-element">👤 Human</div>
                                <div class="cosmic-element">🌊 Oceans</div>
                                <div class="cosmic-element">☁️ Clouds</div>
                            </div>
                            <div class="unity-center">∞ One Consciousness</div>
                        </div>
                        <div class="perspective-note">Experience: Unity - No separation, only one infinite awareness expressing as everything</div>
                    </div>
                `
            }
        };
        
        display.innerHTML = perspectives[perspective].visualization;
    }
    
    processConsciousnessAnswer(answer) {
        const correctAnswers = {
            'illusion': 'Perfect! You see that the very concept of separation is the illusion. When this is understood, the cosmic perspective opens.',
            'same': 'Very good! You recognize the fundamental unity. The next step is to see that even this question assumes separation.',
            'different': 'This is the common view, but look deeper. What is it that knows both the observer and the observed?'
        };
        
        const feedback = correctAnswers[answer];
        this.showConsciousnessFeedback(feedback);
        
        if (answer === 'illusion') {
            // Unlock cosmic perspective
            const cosmicTab = document.querySelector('[data-perspective="cosmic"]');
            cosmicTab.classList.remove('locked');
            
            // Show unity visualization
            document.getElementById('unity-viz').style.display = 'block';
            this.createUnityVisualization();
            
            setTimeout(() => this.completeStage3(), 2000);
        }
    }
    
    completeStage3() {
        document.getElementById('stage3-insights').style.display = 'block';
        this.stageProgress[3] = true;
        this.consciousnessLevel += 25;
        this.updateConsciousnessDisplay();
        
        // Add to hidden mechanics
        this.addHiddenMechanic('Non-Dual Awareness', 'You can now perceive reality from multiple levels of consciousness simultaneously');
        
        setTimeout(() => {
            if (this.adventureEngine) {
                this.adventureEngine.unlockAbility('mysticalIntuition', 2);
            }
            this.proceedToNextStage();
        }, 3000);
    }
    
    setupTranscendentUnityInteractions() {
        // Integration slider
        const integrationSlider = document.getElementById('integration-slider');
        integrationSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            document.getElementById('integration-level').textContent = `${value}%`;
            this.updateMandalaIntegration(value);
            
            if (value >= 90) {
                // Unlock unity field dimension
                const unityBtn = document.querySelector('[data-dimension="unity"]');
                unityBtn.classList.remove('locked');
            }
        });
        
        // Dimension buttons
        document.querySelectorAll('.dimension-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (btn.classList.contains('locked')) return;
                
                const dimension = btn.dataset.dimension;
                this.switchDimensionalView(dimension);
                
                // Update active state
                document.querySelectorAll('.dimension-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Unity action buttons
        document.getElementById('dissolve-boundaries-btn').addEventListener('click', () => {
            this.dissolveBoundaries();
        });
        
        document.getElementById('recognize-unity-btn').addEventListener('click', () => {
            this.recognizeUnity();
        });
        
        document.getElementById('become-tree-btn').addEventListener('click', () => {
            this.becomeTree();
        });
    }
    
    createLivingMandala() {
        const canvas = document.getElementById('mandala-canvas');
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Animate the mandala to show the living nature of consciousness
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const time = Date.now() * 0.001;
            
            // Draw concentric circles representing levels of reality
            for (let i = 1; i <= 8; i++) {
                const radius = i * 30;
                const alpha = 0.3 + 0.2 * Math.sin(time * 0.5 + i * 0.5);
                
                ctx.strokeStyle = `rgba(255, 197, 143, ${alpha})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                ctx.stroke();
            }
            
            // Draw sacred geometry patterns
            const petals = 12;
            for (let i = 0; i < petals; i++) {
                const angle = (i / petals) * Math.PI * 2 + time * 0.3;
                const x1 = centerX + 100 * Math.cos(angle);
                const y1 = centerY + 100 * Math.sin(angle);
                const x2 = centerX + 150 * Math.cos(angle + Math.PI / petals);
                const y2 = centerY + 150 * Math.sin(angle + Math.PI / petals);
                
                ctx.strokeStyle = `rgba(212, 175, 55, ${0.4 + 0.3 * Math.sin(time + i)})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.closePath();
                ctx.stroke();
            }
            
            // Central unity point
            const pulseRadius = 10 + 5 * Math.sin(time * 2);
            ctx.fillStyle = `rgba(255, 197, 143, ${0.8 + 0.2 * Math.sin(time * 3)})`;
            ctx.beginPath();
            ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
            ctx.fill();
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    dissolveBoundaries() {
        this.consciousnessLevel += 10;
        this.updateConsciousnessDisplay();
        this.createBoundaryDissolutionEffect();
    }
    
    recognizeUnity() {
        this.consciousnessLevel += 15;
        this.updateConsciousnessDisplay();
        this.createUnityRecognitionEffect();
        
        // Check if ready for completion
        if (this.consciousnessLevel >= 100) {
            this.completeFinalStage();
        }
    }
    
    becomeTree() {
        this.consciousnessLevel = 100;
        this.updateConsciousnessDisplay();
        this.completeFinalStage();
    }
    
    completeFinalStage() {
        document.getElementById('stage4-insights').style.display = 'block';
        this.stageProgress[4] = true;
        
        // Add final hidden mechanic
        this.addHiddenMechanic('Unity Consciousness', 'You have achieved the highest realization - the recognition that all is One');
        
        // Create enlightenment effect
        this.createEnlightenmentEffect();
        
        setTimeout(() => {
            if (this.adventureEngine) {
                this.adventureEngine.unlockAbility('mysticalIntuition', 3);
                this.adventureEngine.philosophicalInsights.push({
                    teaching: "The banyan tree has revealed the ultimate truth: there is no 'you' and 'tree' - there is only consciousness, playing as both observer and observed.",
                    source: "Banyan Tree Enlightenment",
                    timestamp: Date.now()
                });
            }
            
            // Mark puzzle as completed with full understanding
            this.gameStateManager.updateState('banyan_transcendent_completion', true);
            
            // Trigger completion
            if (this.onSolved) {
                this.onSolved();
            }
        }, 4000);
    }
    
    // Utility methods
    updateConsciousnessDisplay() {
        const fill = document.getElementById('consciousness-fill');
        const text = document.getElementById('consciousness-text');
        
        if (fill) fill.style.width = `${this.consciousnessLevel}%`;
        if (text) text.textContent = `${Math.round(this.consciousnessLevel)}%`;
        
        // Change color based on level
        if (fill) {
            if (this.consciousnessLevel >= 100) {
                fill.style.background = 'linear-gradient(90deg, #d4af37, #ffc58f)';
            } else if (this.consciousnessLevel >= 75) {
                fill.style.background = 'linear-gradient(90deg, #4a90e2, #8b7d9b)';
            } else if (this.consciousnessLevel >= 50) {
                fill.style.background = 'linear-gradient(90deg, #ffc58f, #e09658)';
            }
        }
    }
    
    updatePhaseIndicators() {
        const phaseDots = document.querySelectorAll('.phase-dot');
        phaseDots.forEach((dot, index) => {
            dot.classList.remove('active', 'completed');
            
            if (index < this.currentStage - 1) {
                dot.classList.add('completed');
            } else if (index === this.currentStage - 1) {
                dot.classList.add('active');
            }
        });
    }
    
    addHiddenMechanic(name, description) {
        const mechanicsContainer = document.getElementById('hidden-mechanics');
        const mechanicsList = document.getElementById('mechanics-list');
        
        mechanicsContainer.classList.add('revealed');
        
        const mechanic = document.createElement('div');
        mechanic.className = 'hidden-mechanic';
        mechanic.innerHTML = `
            <div class="mechanic-name">${name}</div>
            <div class="mechanic-description">${description}</div>
        `;
        
        mechanicsList.appendChild(mechanic);
        this.hiddenMechanicsUnlocked.push({ name, description });
    }
    
    proceedToNextStage() {
        if (this.currentStage < this.totalStages) {
            setTimeout(() => {
                this.startStage(this.currentStage + 1);
            }, 1000);
        }
    }
    
    // Advanced effect methods
    createPatternDiscoveryEffect(element) {
        // Create visual effect for pattern discovery
        const rect = element.getBoundingClientRect();
        const effect = document.createElement('div');
        effect.className = 'pattern-discovery-effect';
        effect.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top + rect.height/2}px;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #ffc58f, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: discovery-burst 1s ease-out forwards;
        `;
        
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 1000);
    }
    
    createEnlightenmentEffect() {
        const effect = document.createElement('div');
        effect.className = 'enlightenment-effect';
        effect.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
            pointer-events: none;
            z-index: 999;
            animation: enlightenment-wave 4s ease-out forwards;
        `;
        
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 4000);
    }
    
    // Save/load methods
    savePuzzleProgress() {
        const progress = {
            currentStage: this.currentStage,
            stageProgress: this.stageProgress,
            consciousnessLevel: this.consciousnessLevel,
            hiddenMechanicsUnlocked: this.hiddenMechanicsUnlocked,
            patternDiscoveries: this.patternDiscoveries
        };
        
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.banyan_advanced_progress = progress;
        }
    }
    
    loadPuzzleProgress() {
        if (this.gameStateManager && this.gameStateManager.worldState && this.gameStateManager.worldState.banyan_advanced_progress) {
            const progress = this.gameStateManager.worldState.banyan_advanced_progress;
            
            this.currentStage = progress.currentStage || 1;
            this.stageProgress = progress.stageProgress || {};
            this.consciousnessLevel = progress.consciousnessLevel || 0;
            this.hiddenMechanicsUnlocked = progress.hiddenMechanicsUnlocked || [];
            this.patternDiscoveries = progress.patternDiscoveries || [];
        }
    }
    
    // Initialize methods
    initializeSacredPatterns() {
        return {
            fibonacci: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
            goldenRatio: 1.618033988749,
            sacredGeometry: ['vesicaPiscis', 'flowerOfLife', 'merkaba', 'sriYantra'],
            elementalSymbols: ['🜃', '🜂', '🜁', '🜄', '🜅'] // Classical elements
        };
    }
    
    initializeEcologicalWeb() {
        return {
            treeConnections: ['roots', 'mycorrhizae', 'airborne_chemicals', 'bird_networks'],
            energyFlows: ['photosynthesis', 'nutrient_cycling', 'water_transport', 'carbon_sequestration'],
            consciousness_levels: ['individual', 'forest', 'ecosystem', 'planetary', 'cosmic']
        };
    }
    
    initializeRootNetwork() {
        return {
            primary_roots: { depth: 50, spread: 200, energy: 30 },
            secondary_roots: { depth: 100, spread: 150, energy: 70 },
            fine_roots: { depth: 30, spread: 300, energy: 20 },
            mycorrhizal_network: { extent: 500, connections: 1000, energy: 20 }
        };
    }
}

// Enhanced Barrier of Negativity Puzzle
class EnhancedBarrierOfNegativity {
    constructor(container, gameStateManager, adventureEngine, onSolved) {
        this.container = container;
        this.gameStateManager = gameStateManager;
        this.adventureEngine = adventureEngine;
        this.onSolved = onSolved;
        
        // Psychological challenge state
        this.shadowAspects = [];
        this.karmicPatterns = [];
        this.transformationLevel = 0;
        this.compassionDeveloped = 0;
        this.unityRecognition = 0;
        
        // Dynamic barrier state
        this.barrierIntensity = 100;
        this.barrierNature = 'solid'; // solid -> permeable -> transparent -> non-existent
        this.negativePatternsActive = [];
        
        this.init();
    }
    
    init() {
        this.createEnhancedBarrierInterface();
        this.setupPsychologicalChallenges();
        this.loadTransformationProgress();
        this.startBarrierAnalysis();
    }
    
    createEnhancedBarrierInterface() {
        this.container.innerHTML = `
            <div class="mystery-puzzle-container barrier-transformation-advanced">
                <div class="puzzle-title">The Illusion of Separation: Overcoming Maya</div>
                <div class="puzzle-philosophical-context">
                    "This barrier is not your enemy—it is your teacher, showing you the very beliefs that limit your freedom."
                </div>
                
                <!-- Barrier Visualization -->
                <div class="barrier-visualization-container">
                    <canvas id="barrier-canvas" width="600" height="400"></canvas>
                    <div class="barrier-overlay">
                        <div class="barrier-nature-display" id="barrier-nature">Solid Resistance</div>
                        <div class="barrier-intensity" id="barrier-intensity">100%</div>
                    </div>
                </div>
                
                <!-- Shadow Work Interface -->
                <div class="shadow-work-container">
                    <div class="shadow-title">🪞 Shadow Integration</div>
                    <div class="shadow-aspects" id="shadow-aspects">
                        <!-- Shadow aspects will be populated dynamically -->
                    </div>
                </div>
                
                <!-- Karmic Understanding Interface -->
                <div class="karmic-understanding-container">
                    <div class="karmic-title">⚖️ Karmic Pattern Recognition</div>
                    <div class="karmic-web" id="karmic-web">
                        <canvas id="karmic-canvas" width="500" height="300"></canvas>
                    </div>
                </div>
                
                <!-- Transformation Progress -->
                <div class="transformation-progress">
                    <div class="progress-category">
                        <div class="category-label">Shadow Integration</div>
                        <div class="progress-bar">
                            <div class="progress-fill shadow-progress" id="shadow-progress"></div>
                        </div>
                        <div class="progress-text" id="shadow-text">0%</div>
                    </div>
                    <div class="progress-category">
                        <div class="category-label">Compassion Development</div>
                        <div class="progress-bar">
                            <div class="progress-fill compassion-progress" id="compassion-progress"></div>
                        </div>
                        <div class="progress-text" id="compassion-text">0%</div>
                    </div>
                    <div class="progress-category">
                        <div class="category-label">Unity Recognition</div>
                        <div class="progress-bar">
                            <div class="progress-fill unity-progress" id="unity-progress"></div>
                        </div>
                        <div class="progress-text" id="unity-text">0%</div>
                    </div>
                </div>
                
                <!-- Advanced Transformation Actions -->
                <div class="transformation-actions">
                    <button class="transformation-btn shadow-btn" id="integrate-shadow-btn">
                        <span class="btn-icon">🌓</span>
                        Integrate Shadow
                    </button>
                    <button class="transformation-btn karmic-btn" id="transform-karma-btn">
                        <span class="btn-icon">🔄</span>
                        Transform Karma
                    </button>
                    <button class="transformation-btn unity-btn" id="recognize-unity-btn" disabled>
                        <span class="btn-icon">☯️</span>
                        Recognize Unity
                    </button>
                    <button class="transformation-btn transcend-btn" id="transcend-duality-btn" disabled>
                        <span class="btn-icon">∞</span>
                        Transcend Duality
                    </button>
                </div>
            </div>
        `;
        
        this.initializeBarrierVisualization();
        this.generateShadowAspects();
        this.updateTransformationDisplay();
    }
    
    generateShadowAspects() {
        this.shadowAspects = [
            {
                name: "Rejected Anger",
                description: "The anger you've pushed away contains the energy for necessary boundaries and change.",
                wisdom: "Anger transformed becomes clarity and determination.",
                integrated: false
            },
            {
                name: "Hidden Pride",
                description: "The pride you've denied contains the seed of healthy self-worth and confidence.",
                wisdom: "Pride transformed becomes humility with strength.",
                integrated: false
            },
            {
                name: "Suppressed Fear",
                description: "The fear you've avoided contains information about what you truly value.",
                wisdom: "Fear transformed becomes cautious wisdom and protection of what matters.",
                integrated: false
            },
            {
                name: "Denied Greed",
                description: "The greed you've rejected contains the energy for manifestation and abundance.",
                wisdom: "Greed transformed becomes generous appreciation and skillful acquisition.",
                integrated: false
            }
        ];
        
        this.renderShadowAspects();
    }
    
    renderShadowAspects() {
        const container = document.getElementById('shadow-aspects');
        container.innerHTML = '';
        
        this.shadowAspects.forEach((aspect, index) => {
            const aspectElement = document.createElement('div');
            aspectElement.className = `shadow-aspect ${aspect.integrated ? 'integrated' : 'unintegrated'}`;
            aspectElement.innerHTML = `
                <div class="aspect-header">
                    <div class="aspect-name">${aspect.name}</div>
                    <div class="aspect-status">${aspect.integrated ? '✨ Integrated' : '🚫 Rejected'}</div>
                </div>
                <div class="aspect-description">${aspect.description}</div>
                <div class="aspect-wisdom" style="display: ${aspect.integrated ? 'block' : 'none'}">
                    <strong>Wisdom Gained:</strong> ${aspect.wisdom}
                </div>
                <button class="integrate-aspect-btn" data-aspect="${index}" 
                        ${aspect.integrated ? 'disabled' : ''}>
                    ${aspect.integrated ? 'Integrated' : 'Embrace This Aspect'}
                </button>
            `;
            
            container.appendChild(aspectElement);
        });
    }
    
    setupPsychologicalChallenges() {
        // Shadow integration
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('integrate-aspect-btn') && !e.target.disabled) {
                const aspectIndex = parseInt(e.target.dataset.aspect);
                this.integrateShadowAspect(aspectIndex);
            }
        });
        
        // Main transformation buttons
        document.getElementById('integrate-shadow-btn').addEventListener('click', () => {
            this.startShadowIntegrationProcess();
        });
        
        document.getElementById('transform-karma-btn').addEventListener('click', () => {
            this.startKarmicTransformation();
        });
        
        document.getElementById('recognize-unity-btn').addEventListener('click', () => {
            this.recognizeUnity();
        });
        
        document.getElementById('transcend-duality-btn').addEventListener('click', () => {
            this.transcendDuality();
        });
    }
    
    integrateShadowAspect(aspectIndex) {
        const aspect = this.shadowAspects[aspectIndex];
        if (aspect && !aspect.integrated) {
            aspect.integrated = true;
            this.transformationLevel += 25;
            
            // Update barrier intensity
            this.barrierIntensity -= 20;
            this.updateBarrierState();
            
            // Show integration effect
            this.createShadowIntegrationEffect(aspect);
            
            // Re-render aspects
            this.renderShadowAspects();
            this.updateTransformationDisplay();
            
            // Check if shadow work is complete
            if (this.shadowAspects.every(a => a.integrated)) {
                this.completeShadowWork();
            }
        }
    }
    
    completeShadowWork() {
        this.compassionDeveloped += 50;
        
        // Unlock karmic transformation
        document.getElementById('transform-karma-btn').disabled = false;
        
        // Show shadow completion insight
        this.showTransformationInsight(
            "Shadow Integration Complete",
            "By embracing what you once rejected, you have reclaimed your wholeness. The barrier begins to soften as you no longer fight against parts of yourself."
        );
        
        this.updateTransformationDisplay();
    }
    
    startKarmicTransformation() {
        // Initialize karmic web visualization
        this.initializeKarmicWeb();
        
        // Show karmic understanding interface
        this.showKarmicChallenges();
    }
    
    initializeKarmicWeb() {
        const canvas = document.getElementById('karmic-canvas');
        const ctx = canvas.getContext('2d');
        
        // Create karmic pattern visualization
        this.karmicNodes = [
            { x: 250, y: 50, type: 'action', label: 'Past Actions', karma: 80 },
            { x: 100, y: 150, type: 'consequence', label: 'Current Situation', karma: 60 },
            { x: 400, y: 150, type: 'pattern', label: 'Behavioral Patterns', karma: 70 },
            { x: 250, y: 250, type: 'choice', label: 'Present Choice', karma: 0 }
        ];
        
        this.renderKarmicWeb();
    }
    
    renderKarmicWeb() {
        const canvas = document.getElementById('karmic-canvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        const connections = [
            [0, 1], [0, 2], [1, 3], [2, 3]
        ];
        
        connections.forEach(([from, to]) => {
            const nodeA = this.karmicNodes[from];
            const nodeB = this.karmicNodes[to];
            
            ctx.strokeStyle = `rgba(139, 125, 155, ${0.3 + (nodeA.karma / 100) * 0.7})`;
            ctx.lineWidth = 2 + (nodeA.karma / 100) * 3;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
        });
        
        // Draw nodes
        this.karmicNodes.forEach(node => {
            const radius = 20 + (node.karma / 100) * 15;
            const intensity = node.karma / 100;
            
            // Node glow
            ctx.shadowColor = '#8b7d9b';
            ctx.shadowBlur = intensity * 20;
            
            // Node fill
            ctx.fillStyle = `rgba(139, 125, 155, ${0.4 + intensity * 0.6})`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Node border
            ctx.strokeStyle = '#8b7d9b';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Reset shadow
            ctx.shadowBlur = 0;
            
            // Label
            ctx.fillStyle = '#c5c1b9';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(node.label, node.x, node.y - radius - 10);
        });
    }
    
    recognizeUnity() {
        this.unityRecognition += 50;
        this.barrierIntensity -= 30;
        
        // Show unity recognition effect
        this.createUnityRecognitionEffect();
        
        // Update barrier nature
        if (this.barrierIntensity <= 30) {
            this.barrierNature = 'transparent';
            document.getElementById('transcend-duality-btn').disabled = false;
        }
        
        this.updateBarrierState();
        this.updateTransformationDisplay();
        
        this.showTransformationInsight(
            "Unity Recognition",
            "You begin to see that the barrier and you are not separate things. The barrier is made of the same consciousness as the one who perceives it."
        );
    }
    
    transcendDuality() {
        this.unityRecognition = 100;
        this.barrierIntensity = 0;
        this.barrierNature = 'non-existent';
        
        // Complete barrier transformation
        this.completeBarrierTransformation();
    }
    
    completeBarrierTransformation() {
        // Show transcendence effect
        this.createTranscendenceEffect();
        
        // Update game state
        this.gameStateManager.updateState('barrier_transcended', true);
        
        // Add profound philosophical insight
        if (this.adventureEngine) {
            this.adventureEngine.philosophicalInsights.push({
                teaching: "The barrier was never 'out there'—it was a reflection of inner resistance to what is. When resistance dissolves, there is no barrier to transcend.",
                source: "Barrier Transcendence",
                timestamp: Date.now()
            });
        }
        
        this.showTransformationInsight(
            "Complete Transcendence",
            "There was never a barrier to overcome. What you thought was an obstacle was simply consciousness appearing as resistance to itself. In recognizing this, all barriers dissolve."
        );
        
        setTimeout(() => {
            if (this.onSolved) {
                this.onSolved();
            }
        }, 4000);
    }
    
    // Visual effect methods
    initializeBarrierVisualization() {
        const canvas = document.getElementById('barrier-canvas');
        const ctx = canvas.getContext('2d');
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const time = Date.now() * 0.001;
            const intensity = this.barrierIntensity / 100;
            
            // Draw barrier based on current nature
            if (this.barrierNature === 'solid') {
                this.drawSolidBarrier(ctx, time, intensity);
            } else if (this.barrierNature === 'permeable') {
                this.drawPermeableBarrier(ctx, time, intensity);
            } else if (this.barrierNature === 'transparent') {
                this.drawTransparentBarrier(ctx, time, intensity);
            } else if (this.barrierNature === 'non-existent') {
                this.drawUnityField(ctx, time);
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    drawSolidBarrier(ctx, time, intensity) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        
        // Dark, impenetrable barrier
        ctx.fillStyle = `rgba(40, 20, 20, ${intensity * 0.8})`;
        ctx.fillRect(centerX - 50, 0, 100, ctx.canvas.height);
        
        // Pulsing negative energy
        for (let i = 0; i < 5; i++) {
            const radius = 20 + i * 15 + 10 * Math.sin(time * 2 + i);
            ctx.strokeStyle = `rgba(139, 69, 19, ${intensity * (0.8 - i * 0.15)})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    
    drawPermeableBarrier(ctx, time, intensity) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        
        // Semi-transparent barrier with holes
        ctx.fillStyle = `rgba(40, 20, 20, ${intensity * 0.5})`;
        ctx.fillRect(centerX - 50, 0, 100, ctx.canvas.height);
        
        // Openings in the barrier
        for (let i = 0; i < 3; i++) {
            const y = (i + 1) * ctx.canvas.height / 4;
            const holeSize = 20 + 10 * Math.sin(time + i);
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(centerX, y, holeSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
        }
    }
    
    drawTransparentBarrier(ctx, time, intensity) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        
        // Barely visible, shimmering boundary
        ctx.strokeStyle = `rgba(139, 125, 155, ${intensity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, ctx.canvas.height);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Gentle energy waves
        for (let i = 0; i < 3; i++) {
            const waveY = centerY + 50 * Math.sin(time * 0.5 + i * Math.PI / 3);
            ctx.strokeStyle = `rgba(139, 125, 155, ${intensity * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(centerX - 30, waveY);
            ctx.lineTo(centerX + 30, waveY);
            ctx.stroke();
        }
    }
    
    drawUnityField(ctx, time) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        
        // Unity field - everything is one
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 200);
        gradient.addColorStop(0, 'rgba(212, 175, 55, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 197, 143, 0.1)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        // Unity patterns
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2 + time * 0.2;
            const x = centerX + 100 * Math.cos(angle);
            const y = centerY + 100 * Math.sin(angle);
            
            ctx.fillStyle = `rgba(212, 175, 55, ${0.3 + 0.2 * Math.sin(time + i)})`;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    updateBarrierState() {
        document.getElementById('barrier-intensity').textContent = `${Math.round(this.barrierIntensity)}%`;
        
        const natureTexts = {
            'solid': 'Solid Resistance',
            'permeable': 'Softening Boundaries',
            'transparent': 'Transparent Illusion',
            'non-existent': 'Unity Recognized'
        };
        
        document.getElementById('barrier-nature').textContent = natureTexts[this.barrierNature];
        
        // Update barrier nature based on intensity
        if (this.barrierIntensity > 60) {
            this.barrierNature = 'solid';
        } else if (this.barrierIntensity > 30) {
            this.barrierNature = 'permeable';
        } else if (this.barrierIntensity > 0) {
            this.barrierNature = 'transparent';
        } else {
            this.barrierNature = 'non-existent';
        }
    }
    
    updateTransformationDisplay() {
        // Update progress bars
        const shadowProgress = (this.shadowAspects.filter(a => a.integrated).length / this.shadowAspects.length) * 100;
        document.getElementById('shadow-progress').style.width = `${shadowProgress}%`;
        document.getElementById('shadow-text').textContent = `${Math.round(shadowProgress)}%`;
        
        document.getElementById('compassion-progress').style.width = `${this.compassionDeveloped}%`;
        document.getElementById('compassion-text').textContent = `${Math.round(this.compassionDeveloped)}%`;
        
        document.getElementById('unity-progress').style.width = `${this.unityRecognition}%`;
        document.getElementById('unity-text').textContent = `${Math.round(this.unityRecognition)}%`;
        
        // Enable buttons based on progress
        if (shadowProgress >= 100 && this.compassionDeveloped >= 50) {
            document.getElementById('recognize-unity-btn').disabled = false;
        }
    }
    
    showTransformationInsight(title, message) {
        // Create and show insight notification similar to discovery system
        const insight = document.createElement('div');
        insight.className = 'transformation-insight';
        insight.innerHTML = `
            <div class="insight-header">
                <div class="insight-icon">✨</div>
                <div class="insight-title">${title}</div>
            </div>
            <div class="insight-message">${message}</div>
        `;
        
        insight.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgba(139, 125, 155, 0.9), rgba(212, 175, 55, 0.8));
            color: #0a0908;
            padding: 1.5rem;
            border-radius: 12px;
            max-width: 400px;
            z-index: 1000;
            transform: translateX(120%);
            transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        `;
        
        document.body.appendChild(insight);
        
        // Animate in
        setTimeout(() => {
            insight.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto-remove
        setTimeout(() => {
            insight.style.transform = 'translateX(120%)';
            setTimeout(() => insight.remove(), 800);
        }, 5000);
    }
    
    createShadowIntegrationEffect(aspect) {
        // Visual effect for shadow integration
        const effect = document.createElement('div');
        effect.textContent = `💫 ${aspect.name} Integrated`;
        effect.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(139, 125, 155, 0.9);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: bold;
            z-index: 1001;
            animation: integration-effect 2s ease-out forwards;
        `;
        
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 2000);
    }
    
    createTranscendenceEffect() {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at center, rgba(212, 175, 55, 0.4) 0%, transparent 70%);
            pointer-events: none;
            z-index: 999;
            animation: transcendence-wave 4s ease-out forwards;
        `;
        
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 4000);
    }
    
    // Save/load methods
    loadTransformationProgress() {
        if (this.gameStateManager && this.gameStateManager.worldState && this.gameStateManager.worldState.barrier_transformation_progress) {
            const progress = this.gameStateManager.worldState.barrier_transformation_progress;
            
            this.transformationLevel = progress.transformationLevel || 0;
            this.compassionDeveloped = progress.compassionDeveloped || 0;
            this.unityRecognition = progress.unityRecognition || 0;
            this.barrierIntensity = progress.barrierIntensity || 100;
            this.shadowAspects = progress.shadowAspects || this.shadowAspects;
        }
    }
    
    saveTransformationProgress() {
        const progress = {
            transformationLevel: this.transformationLevel,
            compassionDeveloped: this.compassionDeveloped,
            unityRecognition: this.unityRecognition,
            barrierIntensity: this.barrierIntensity,
            shadowAspects: this.shadowAspects
        };
        
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.barrier_transformation_progress = progress;
        }
    }
}

// Export enhanced puzzle classes
window.EnhancedBanyanTreeHarmony = EnhancedBanyanTreeHarmony;
window.EnhancedBarrierOfNegativity = EnhancedBarrierOfNegativity;

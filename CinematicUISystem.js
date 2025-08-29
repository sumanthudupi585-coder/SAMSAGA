/**
 * CinematicUISystem.js
 * 
 * Provides beautiful cinematic transitions and contextual UI that evolves
 * as players progress through their spiritual journey.
 */

class CinematicUISystem {
    constructor(unifiedGameFlow) {
        this.gameFlow = unifiedGameFlow;
        this.currentTheme = 'dawn';
        this.transitionQueue = [];
        this.isTransitioning = false;
        this.uiElements = {};
        
        // Initialize the UI system
        this.initialize();
    }
    
    /**
     * Initialize the complete UI system
     */
    initialize() {
        console.log('🎬 Initializing Cinematic UI System...');
        
        // Create base UI structure
        this.createBaseStructure();
        
        // Initialize theme system
        this.initializeThemes();
        
        // Set up responsive layout
        this.setupResponsiveLayout();
        
        // Initialize transition effects
        this.initializeTransitionEffects();
        
        // Set up dynamic UI evolution
        this.setupUIEvolution();

        // Setup enhanced puzzle styles
        this.setupPuzzleStyles?.();

        console.log('✅ Cinematic UI System initialized');
    }
    
    /**
     * Create the foundational UI structure
     */
    createBaseStructure() {
        // Remove any existing game UI
        const existingUI = document.getElementById('cinematic-game-ui');
        if (existingUI) existingUI.remove();
        
        // Create main UI container
        const uiContainer = document.createElement('div');
        uiContainer.id = 'cinematic-game-ui';
        uiContainer.className = 'cinematic-ui-container';
        
        uiContainer.innerHTML = `
            <!-- Background Layers -->
            <div class="cosmic-background">
                <div class="starfield"></div>
                <div class="energy-flows"></div>
                <div class="sacred-geometry"></div>
            </div>
            
            <!-- Main Game Interface -->
            <div class="game-interface">
                <!-- Header -->
                <header class="game-header">
                    <div class="title-section">
                        <h1 class="game-title">Samsara Saga</h1>
                        <div class="phase-indicator">
                            <span class="phase-name">Awakening</span>
                            <div class="progress-lotus">
                                <svg viewBox="0 0 100 100" class="lotus-progress">
                                    <circle cx="50" cy="50" r="45" class="lotus-base"/>
                                    <g class="lotus-petals">
                                        <path d="M50,5 Q65,25 50,45 Q35,25 50,5" class="petal" data-petal="1"/>
                                        <path d="M75,20 Q80,40 60,55 Q55,35 75,20" class="petal" data-petal="2"/>
                                        <path d="M95,50 Q75,65 55,50 Q75,35 95,50" class="petal" data-petal="3"/>
                                        <path d="M75,80 Q55,85 60,65 Q80,60 75,80" class="petal" data-petal="4"/>
                                        <path d="M50,95 Q35,75 50,55 Q65,75 50,95" class="petal" data-petal="5"/>
                                        <path d="M25,80 Q45,85 40,65 Q20,60 25,80" class="petal" data-petal="6"/>
                                        <path d="M5,50 Q25,35 45,50 Q25,65 5,50" class="petal" data-petal="7"/>
                                        <path d="M25,20 Q45,15 40,35 Q20,40 25,20" class="petal" data-petal="8"/>
                                    </g>
                                    <circle cx="50" cy="50" r="15" class="lotus-center"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div class="character-summary">
                        <div class="character-avatar">
                            <div class="avatar-glow"></div>
                            <div class="nakshatra-symbol"></div>
                        </div>
                        <div class="character-info">
                            <div class="character-name">Seeker</div>
                            <div class="character-path">Path of Discovery</div>
                        </div>
                    </div>
                    
                    <div class="spiritual-indicators">
                        <div class="indicator wisdom" data-attribute="wisdom">
                            <div class="indicator-icon">🧠</div>
                            <div class="indicator-value">0</div>
                        </div>
                        <div class="indicator compassion" data-attribute="compassion">
                            <div class="indicator-icon">💝</div>
                            <div class="indicator-value">0</div>
                        </div>
                        <div class="indicator insight" data-attribute="spiritual_insight">
                            <div class="indicator-icon">👁️</div>
                            <div class="indicator-value">0</div>
                        </div>
                    </div>
                </header>
                
                <!-- Main Content Area -->
                <main class="game-content">
                    <div class="story-display">
                        <div class="scene-header">
                            <h2 class="scene-title">Welcome, Seeker</h2>
                            <div class="scene-subtitle">Your journey begins...</div>
                        </div>
                        
                        <div class="scene-content">
                            <div class="scene-text">
                                <p>Preparing your spiritual journey...</p>
                            </div>
                            
                            <div class="atmospheric-description">
                                <em>The cosmic winds stir as consciousness takes form...</em>
                            </div>
                        </div>
                        
                        <div class="choices-container">
                            <div class="choices-header">
                                <span>Choose your path:</span>
                            </div>
                            <div class="choices-list">
                                <!-- Choices will be populated dynamically -->
                            </div>
                        </div>
                        
                        <div class="meditation-corner">
                            <button class="meditation-button" id="meditation-btn">
                                <span class="meditation-icon">🧘</span>
                                <span class="meditation-text">Meditate</span>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Philosophical Insights Panel -->
                    <div class="insights-panel">
                        <h3>Philosophical Insights</h3>
                        <div class="insights-list">
                            <!-- Insights will be populated dynamically -->
                        </div>
                    </div>
                </main>
                
                <!-- Footer Actions -->
                <footer class="game-footer">
                    <div class="action-buttons">
                        <button class="action-btn save-btn" id="save-game">
                            <span class="btn-icon">💾</span>
                            <span class="btn-text">Save Journey</span>
                        </button>
                        
                        <button class="action-btn journal-btn" id="view-journal">
                            <span class="btn-icon">📖</span>
                            <span class="btn-text">View Journal</span>
                        </button>
                        
                        <button class="action-btn settings-btn" id="game-settings">
                            <span class="btn-icon">⚙️</span>
                            <span class="btn-text">Settings</span>
                        </button>
                    </div>
                    
                    <div class="progress-summary">
                        <div class="journey-stats">
                            <span class="stat">Insights: <span id="insights-count">0</span></span>
                            <span class="stat">Decisions: <span id="decisions-count">0</span></span>
                            <span class="stat">Growth: <span id="growth-level">Awakening</span></span>
                        </div>
                    </div>
                </footer>
            </div>
            
            <!-- Transition Overlays -->
            <div class="transition-overlays">
                <div class="transition-overlay philosophical-insight" id="insight-overlay">
                    <div class="insight-content">
                        <div class="insight-mandala">
                            <svg viewBox="0 0 200 200" class="mandala-svg">
                                <circle cx="100" cy="100" r="90" class="mandala-outer"/>
                                <circle cx="100" cy="100" r="60" class="mandala-middle"/>
                                <circle cx="100" cy="100" r="30" class="mandala-inner"/>
                                <circle cx="100" cy="100" r="10" class="mandala-center"/>
                            </svg>
                        </div>
                        <div class="insight-text">
                            <h3 class="insight-title"></h3>
                            <p class="insight-description"></p>
                        </div>
                    </div>
                </div>
                
                <div class="transition-overlay scene-transition" id="scene-overlay">
                    <div class="transition-visual">
                        <div class="flowing-energy">
                            <div class="energy-stream"></div>
                            <div class="energy-stream"></div>
                            <div class="energy-stream"></div>
                        </div>
                    </div>
                    <div class="transition-message"></div>
                </div>
                
                <div class="transition-overlay phase-advancement" id="phase-overlay">
                    <div class="phase-visual">
                        <div class="cosmic-spiral">
                            <svg viewBox="0 0 400 400" class="spiral-svg">
                                <path d="M200,200 Q300,200 300,100 Q300,0 200,0 Q100,0 100,100 Q100,200 200,200 Q300,200 300,300 Q300,400 200,400 Q100,400 100,300 Q100,200 200,200"
                                      class="spiral-path"/>
                            </svg>
                        </div>
                    </div>
                    <div class="phase-text">
                        <h2 class="phase-title"></h2>
                        <p class="phase-description"></p>
                    </div>
                </div>
            </div>

            <!-- Puzzle Overlay -->
            <div class="puzzle-overlay" id="puzzle-overlay">
                <div id="puzzle-content" class="puzzle-content"></div>
            </div>

            <!-- Floating Notifications -->
            <div class="notification-system">
                <div class="notifications-container" id="notifications"></div>
            </div>
            
            <!-- Journal Modal -->
            <div class="modal journal-modal" id="journal-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Spiritual Journal</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="journal-tabs">
                            <button class="tab-btn active" data-tab="insights">Insights</button>
                            <button class="tab-btn" data-tab="decisions">Decisions</button>
                            <button class="tab-btn" data-tab="growth">Growth</button>
                        </div>
                        <div class="journal-content">
                            <div class="tab-content active" id="insights-tab">
                                <!-- Philosophical insights history -->
                            </div>
                            <div class="tab-content" id="decisions-tab">
                                <!-- Decision history -->
                            </div>
                            <div class="tab-content" id="growth-tab">
                                <!-- Character growth timeline -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert into DOM
        document.body.appendChild(uiContainer);
        
        // Store UI element references
        this.uiElements = {
            container: uiContainer,
            header: uiContainer.querySelector('.game-header'),
            content: uiContainer.querySelector('.game-content'),
            footer: uiContainer.querySelector('.game-footer'),
            sceneTitle: uiContainer.querySelector('.scene-title'),
            sceneSubtitle: uiContainer.querySelector('.scene-subtitle'),
            sceneText: uiContainer.querySelector('.scene-text'),
            choicesList: uiContainer.querySelector('.choices-list'),
            insightsPanel: uiContainer.querySelector('.insights-panel'),
            characterName: uiContainer.querySelector('.character-name'),
            characterPath: uiContainer.querySelector('.character-path'),
            nakshatraSymbol: uiContainer.querySelector('.nakshatra-symbol')
        };
        
        // Set up event listeners
        this.setupEventListeners();
    }
    
    /**
     * Inject styles for puzzle overlay and widgets
     */
    setupPuzzleStyles() {
        const styles = `
        <style id="puzzle-styles">
        .puzzle-overlay { display:none; position:fixed; inset:0; background: radial-gradient(1200px 600px at 50% 30%, rgba(224,150,88,0.08), rgba(0,0,0,0.85)); z-index:20000; align-items:center; justify-content:center; padding:24px; }
        .puzzle-content { background: var(--color-surface, #1a1817); border: 1px solid var(--color-primary, #e09658); border-radius: 14px; width: min(880px, 92vw); max-height: 86vh; overflow:auto; box-shadow: 0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.03); }
        .puzzle-header { position:sticky; top:0; backdrop-filter: blur(6px); background: linear-gradient(180deg, rgba(26,24,23,0.9), rgba(26,24,23,0.6)); border-bottom:1px solid rgba(224,150,88,0.25); padding:18px 22px; display:flex; align-items:center; gap:14px; z-index:2; }
        .puzzle-icon { font-size:22px; filter: drop-shadow(0 0 6px rgba(224,150,88,0.35)); }
        .puzzle-title-wrap { display:flex; flex-direction:column; }
        .puzzle-title { margin:0; font-size:1.4rem; color: var(--color-text, #c5c1b9); letter-spacing:0.3px; }
        .puzzle-sub { margin:4px 0 0; font-size:0.95rem; color: #bca06a; opacity:0.9; }
        .puzzle-body { padding:20px 22px 24px; display:grid; gap:18px; }
        .puzzle-hint-row { display:flex; gap:10px; align-items:center; justify-content:space-between; }
        .hint-btn, .close-btn, .primary-btn, .ghost-btn { border:1px solid var(--color-primary, #e09658); color: var(--color-text, #c5c1b9); background: transparent; border-radius:10px; padding:8px 12px; cursor:pointer; transition: all .2s ease; }
        .primary-btn { background: linear-gradient(180deg, rgba(224,150,88,0.2), rgba(224,150,88,0.05)); }
        .ghost-btn { border-color: rgba(224,150,88,0.35); opacity:0.9; }
        .hint-text { font-size:0.9rem; color:#d2c8be; opacity:0.9; display:none; }
        .hint-text.show { display:block; animation: fadeIn .25s ease; }
        @keyframes fadeIn { from { opacity:0; transform: translateY(4px);} to { opacity:1; transform:none; } }
        .themed-panel { border:1px solid rgba(224,150,88,0.18); border-radius:12px; padding:14px; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); }
        /* Rotational Alignment UI */
        .rings-wrap { display:grid; grid-template-columns: minmax(240px,1fr) minmax(260px,1fr); gap:18px; align-items:center; }
        .mandala-preview { position:relative; aspect-ratio:1/1; background: radial-gradient(circle at 50% 50%, rgba(255,220,148,0.06), transparent 65%); border-radius:12px; border:1px solid rgba(224,150,88,0.25); overflow:hidden; }
        .ring { position:absolute; inset:10%; border:1px dashed rgba(224,150,88,0.25); border-radius:50%; pointer-events:none; }
        .ring.r2 { inset:20%; }
        .ring.r3 { inset:30%; }
        .ring-marker { position:absolute; top:0; left:50%; width:2px; height:12%; background: #ffc994; transform-origin: bottom center; box-shadow: 0 0 10px rgba(255,201,148,0.6); }
        .sliders { display:grid; gap:12px; }
        .slider-row { display:flex; align-items:center; gap:10px; }
        .slider-row label { min-width:84px; color:#d2c8be; opacity:0.9; }
        .slider-row input[type=range] { width:100%; accent-color: #e09658; }
        .alignment-meter { height:8px; background: linear-gradient(90deg, #7b3f00, #b37a3c, #ffc994); border-radius:999px; overflow:hidden; position:relative; }
        .alignment-fill { position:absolute; top:0; left:0; bottom:0; width:0%; background: linear-gradient(90deg, #b37a3c, #ffc994); box-shadow: 0 0 16px rgba(255,201,148,0.6); transition: width .2s ease; }
        /* Item Application (Barrier) */
        .barrier-grid { display:grid; grid-template-columns: 1.2fr 1fr; gap:18px; }
        .barrier-zone { position:relative; border-radius:12px; border:1px solid rgba(224,150,88,0.25); min-height:220px; display:flex; align-items:center; justify-content:center; background: radial-gradient(240px 140px at 50% 50%, rgba(99,180,209,0.12), rgba(0,0,0,0.15)); overflow:hidden; }
        .barrier-veil { position:absolute; inset:0; background: repeating-linear-gradient(45deg, rgba(99,180,209,0.18) 0 6px, transparent 6px 12px); animation: shimmer 2.5s linear infinite; }
        @keyframes shimmer { from {transform: translateX(-20%);} to { transform: translateX(20%);} }
        .inventory { display:flex; flex-wrap:wrap; gap:10px; align-content:flex-start; }
        .token { border:1px solid rgba(224,150,88,0.35); padding:8px 10px; border-radius:999px; cursor:grab; user-select:none; background: rgba(224,150,88,0.06); transition: transform .15s ease; }
        .token:active { transform: scale(0.98); cursor:grabbing; }
        .drop-hint { position:absolute; bottom:10px; color:#bca06a; font-size:0.85rem; opacity:0.9; }
        /* Crafting */
        .craft-stage { display:flex; align-items:center; gap:10px; }
        .progress { flex:1; height:8px; background: rgba(255,255,255,0.06); border-radius:999px; overflow:hidden; }
        .progress > span { display:block; height:100%; width:0%; background: linear-gradient(90deg,#63b4d1,#ffc994); transition: width .3s ease; }
        .stage-list { display:grid; gap:10px; }
        .stage-item { display:flex; align-items:center; gap:10px; padding:10px; border-radius:10px; border:1px solid rgba(224,150,88,0.2); background: rgba(255,255,255,0.02); }
        .stage-item.active { border-color:#e09658; box-shadow: 0 0 12px rgba(224,150,88,0.15) inset; }
        /* Musical Sequence */
        .chimes { display:flex; gap:10px; flex-wrap:wrap; }
        .chime { padding:12px 14px; border-radius:10px; border:1px solid rgba(224,150,88,0.3); background: rgba(99,180,209,0.08); cursor:pointer; transition: transform .08s ease, box-shadow .2s ease; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.03); }
        .chime:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(99,180,209,0.2); }
        .sequence { display:flex; gap:8px; min-height:36px; align-items:center; }
        .seq-note { padding:6px 10px; border-radius:999px; border:1px solid rgba(224,150,88,0.3); color:#ffc994; }
        /* Theming */
        .puzzle-overlay.theme-banyan .puzzle-content { background: radial-gradient(800px 400px at 50% 0%, rgba(188,160,106,0.06), rgba(26,24,23,1)); }
        .puzzle-overlay.theme-barrier .puzzle-content { background: radial-gradient(800px 400px at 50% 0%, rgba(99,180,209,0.08), rgba(26,24,23,1)); }
        .puzzle-overlay.theme-crafting .puzzle-content { background: radial-gradient(800px 400px at 50% 0%, rgba(255,201,148,0.08), rgba(26,24,23,1)); }
        .puzzle-overlay.theme-harmony .puzzle-content { background: radial-gradient(800px 400px at 50% 0%, rgba(123,206,255,0.08), rgba(26,24,23,1)); }
        </style>`;
        if (!document.getElementById('puzzle-styles')) document.head.insertAdjacentHTML('beforeend', styles);
    }

    /**
     * Initialize theme system with evolving visual styles
     */
    initializeThemes() {
        this.themes = {
            dawn: {
                name: 'Dawn of Awareness',
                colors: {
                    primary: '#e09658',
                    secondary: '#63b4d1',
                    accent: '#bca06a',
                    background: '#0a0908',
                    surface: '#1a1817',
                    text: '#c5c1b9'
                },
                atmosphere: 'gentle_awakening'
            },
            awakened: {
                name: 'Awakened Consciousness',
                colors: {
                    primary: '#ffc994',
                    secondary: '#7bc7e8',
                    accent: '#d4b885',
                    background: '#0d0a09',
                    surface: '#1d1a18',
                    text: '#d2c8be'
                },
                atmosphere: 'expanding_awareness'
            },
            illuminated: {
                name: 'Illuminated Understanding',
                colors: {
                    primary: '#ffdc94',
                    secondary: '#94d4ff',
                    accent: '#f4e4a6',
                    background: '#0f0c0a',
                    surface: '#1f1c1a',
                    text: '#dfd6cc'
                },
                atmosphere: 'radiant_wisdom'
            },
            enlightened: {
                name: 'Enlightened Being',
                colors: {
                    primary: '#fff5bb',
                    secondary: '#bbf0ff',
                    accent: '#fff5bb',
                    background: '#111009',
                    surface: '#211e1c',
                    text: '#ece3d9'
                },
                atmosphere: 'transcendent_light'
            }
        };
        
        // Apply initial theme
        this.setTheme(this.currentTheme);
    }
    
    /**
     * Initialize transition effects system
     */
    initializeTransitionEffects() {
        this.transitionTemplates = {
            scene_change: {
                duration: 2000,
                type: 'flowing_energy',
                message: null
            },
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
            choice_selection: {
                duration: 1000,
                type: 'ripple_effect',
                message: null
            }
        };

        console.log('✨ Transition effects system initialized');
    }

    /**
     * Set up dynamic UI evolution system
     */
    setupUIEvolution() {
        // Set up system to evolve UI based on player progress
        this.evolutionStages = {
            'dawn': {
                complexity: 'simple',
                features: ['basic_navigation', 'character_display'],
                depth: 'introductory'
            },
            'awakened': {
                complexity: 'enhanced',
                features: ['basic_navigation', 'character_display', 'insights_panel'],
                depth: 'intermediate'
            },
            'illuminated': {
                complexity: 'advanced',
                features: ['basic_navigation', 'character_display', 'insights_panel', 'journal', 'meditation'],
                depth: 'advanced'
            },
            'enlightened': {
                complexity: 'master',
                features: ['all'],
                depth: 'expert'
            }
        };

        // Set initial stage
        this.currentEvolutionStage = 'dawn';

        console.log('🌱 UI evolution system initialized');
    }

    /**
     * Evolve UI based on player progress
     */
    evolveUI(newStage) {
        if (this.currentEvolutionStage === newStage) return;

        console.log(`🔄 Evolving UI from ${this.currentEvolutionStage} to ${newStage}`);

        const evolutionData = this.evolutionStages[newStage];
        if (!evolutionData) {
            console.warn('Unknown evolution stage:', newStage);
            return;
        }

        this.currentEvolutionStage = newStage;

        // Update UI complexity
        this.updateUIComplexity(evolutionData.complexity);

        // Enable/disable features
        this.updateAvailableFeatures(evolutionData.features);

        // Update philosophical depth
        this.updatePhilosophicalDepth(evolutionData.depth);

        // Trigger evolution transition
        this.queueTransition('ui_evolution', {
            from: this.currentEvolutionStage,
            to: newStage,
            callback: () => {
                console.log(`✅ UI evolved to ${newStage} stage`);
            }
        });
    }

    /**
     * Update UI complexity level
     */
    updateUIComplexity(complexity) {
        const container = this.uiElements.container;
        if (!container) return;

        // Remove existing complexity classes
        container.classList.remove('complexity-simple', 'complexity-enhanced', 'complexity-advanced', 'complexity-master');

        // Add new complexity class
        container.classList.add(`complexity-${complexity}`);
    }

    /**
     * Update available UI features
     */
    updateAvailableFeatures(features) {
        const container = this.uiElements.container;
        if (!container) return;

        // Show/hide features based on evolution stage
        const allFeatures = ['insights_panel', 'journal', 'meditation', 'advanced_stats', 'cosmic_map'];

        allFeatures.forEach(feature => {
            const element = container.querySelector(`[data-feature="${feature}"]`);
            if (element) {
                if (features.includes(feature) || features.includes('all')) {
                    element.style.display = '';
                    element.classList.remove('feature-locked');
                } else {
                    element.style.display = 'none';
                    element.classList.add('feature-locked');
                }
            }
        });
    }

    /**
     * Update philosophical depth indicators
     */
    updatePhilosophicalDepth(depth) {
        const container = this.uiElements.container;
        if (!container) return;

        // Remove existing depth classes
        container.classList.remove('depth-introductory', 'depth-intermediate', 'depth-advanced', 'depth-expert');

        // Add new depth class
        container.classList.add(`depth-${depth}`);

        // Update content complexity indicators
        const depthIndicators = container.querySelectorAll('[data-depth]');
        depthIndicators.forEach(indicator => {
            const requiredDepth = indicator.dataset.depth;
            const depthLevels = ['introductory', 'intermediate', 'advanced', 'expert'];
            const currentLevel = depthLevels.indexOf(depth);
            const requiredLevel = depthLevels.indexOf(requiredDepth);

            if (currentLevel >= requiredLevel) {
                indicator.classList.remove('depth-locked');
                indicator.style.opacity = '1';
            } else {
                indicator.classList.add('depth-locked');
                indicator.style.opacity = '0.3';
            }
        });
    }

    /**
     * Set visual theme based on spiritual progress
     */
    setTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) return;
        
        this.currentTheme = themeName;
        const container = this.uiElements.container;
        
        // Remove existing theme classes
        Object.keys(this.themes).forEach(name => {
            container.classList.remove(`theme-${name}`);
        });
        
        // Add new theme class
        container.classList.add(`theme-${themeName}`);
        
        // Update CSS custom properties
        const root = document.documentElement;
        Object.entries(theme.colors).forEach(([property, value]) => {
            root.style.setProperty(`--color-${property}`, value);
        });
        
        // Trigger atmosphere change
        this.setAtmosphere(theme.atmosphere);
    }
    
    /**
     * Set atmospheric effects
     */
    setAtmosphere(atmosphereType) {
        const background = this.uiElements.container.querySelector('.cosmic-background');
        
        // Remove existing atmosphere classes
        background.className = 'cosmic-background';
        background.classList.add(`atmosphere-${atmosphereType}`);
        
        // Update particle effects based on atmosphere
        this.updateParticleEffects(atmosphereType);
    }
    
    /**
     * Update particle effects for current atmosphere
     */
    updateParticleEffects(atmosphereType) {
        const starfield = this.uiElements.container.querySelector('.starfield');
        const energyFlows = this.uiElements.container.querySelector('.energy-flows');
        
        // Clear existing effects
        starfield.innerHTML = '';
        energyFlows.innerHTML = '';
        
        switch (atmosphereType) {
            case 'gentle_awakening':
                this.createGentleStarfield(starfield);
                this.createSubtleEnergyFlows(energyFlows);
                break;
            case 'expanding_awareness':
                this.createExpandingStarfield(starfield);
                this.createFlowingEnergyStreams(energyFlows);
                break;
            case 'radiant_wisdom':
                this.createRadiantStarfield(starfield);
                this.createWisdomEnergyFlows(energyFlows);
                break;
            case 'transcendent_light':
                this.createTranscendentStarfield(starfield);
                this.createDivineEnergyFlows(energyFlows);
                break;
        }
    }
    
    /**
     * Create gentle starfield for early stages
     */
    createGentleStarfield(container) {
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star gentle';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            container.appendChild(star);
        }
    }
    
    /**
     * Create subtle energy flows
     */
    createSubtleEnergyFlows(container) {
        for (let i = 0; i < 3; i++) {
            const flow = document.createElement('div');
            flow.className = 'energy-flow subtle';
            flow.style.animationDelay = `${i * 2}s`;
            container.appendChild(flow);
        }
    }
    
    /**
     * Load and display a story scene
     */
    loadScene(sceneData) {
        if (!sceneData) return;
        
        // Update scene header
        this.uiElements.sceneTitle.textContent = sceneData.title || 'Untitled';
        this.uiElements.sceneSubtitle.textContent = sceneData.subtitle || '';
        
        // Update scene content with cinematic reveal
        this.revealSceneContent(sceneData);
        
        // Load choices (including special nakshatra/gana choices)
        this.loadChoices(sceneData.choices || [], sceneData);

        // Handle special scene features
        this.handleSpecialFeatures(sceneData);
        
        // Update progress indicators
        this.updateProgressIndicators();
    }

    /**
     * Handle special scene features like meditation, insights, special items
     */
    handleSpecialFeatures(sceneData) {
        if (!sceneData) return;

        // Puzzle integration
        this.handlePuzzleIntegration?.(sceneData);

        // Handle meditation availability
        if (sceneData.meditation && sceneData.meditation.available) {
            this.enableMeditation(sceneData.meditation);
        } else {
            this.disableMeditation();
        }

        // Handle philosophical insights
        if (sceneData.philosophicalGrowth) {
            this.showPhilosophicalGrowth(sceneData.philosophicalGrowth);
        }

        // Handle special items
        if (sceneData.specialItems && Array.isArray(sceneData.specialItems)) {
            this.displaySpecialItems(sceneData.specialItems);
        }

        // Handle acquired knowledge
        if (sceneData.acquiredKnowledge && Array.isArray(sceneData.acquiredKnowledge)) {
            this.displayAcquiredKnowledge(sceneData.acquiredKnowledge);
        }

        // Handle nakshatra and gana specific choices
        if (sceneData.nakshatraChoices || sceneData.ganaChoices) {
            this.handleSpecialChoices(sceneData);
        }

        // Handle atmospheric changes
        if (sceneData.atmosphericDescription) {
            this.updateAtmosphere(sceneData.atmosphericDescription);
        }

        console.log('✨ Special scene features handled');
    }

    /**
     * Integrate puzzles into scenes by providing a Start Puzzle entry
     */
    handlePuzzleIntegration(sceneData) {
        const puzzleId = sceneData.puzzleId || (sceneData.puzzle && (sceneData.puzzle.id || sceneData.puzzle.puzzleId));
        if (!puzzleId || !window.PUZZLES || !window.PUZZLES[puzzleId]) return;
        const existing = this.uiElements.choicesList.querySelector('[data-puzzle-entry]');
        if (existing) existing.remove();
        const entry = document.createElement('div');
        entry.className = 'choice-option';
        entry.dataset.puzzleEntry = 'true';
        entry.innerHTML = `<div class="choice-content"><div class="choice-text">🧩 Begin Puzzle: ${window.PUZZLES[puzzleId].title || puzzleId}</div></div>`;
        entry.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); this.launchPuzzle(puzzleId, sceneData); });
        this.uiElements.choicesList.prepend(entry);
    }

    launchPuzzle(puzzleId, sceneData) {
        if (!this.puzzleEngine) {
            try {
                const gsm = window.gameStateManager || new window.GameStateManager();
                this.puzzleEngine = new window.PuzzleEngine(gsm, null);
            } catch (e) { console.warn('PuzzleEngine init failed', e); this.showNotification?.('Unable to initialize puzzle system.', 'error', 3000); return; }
        }
        let overlay = document.getElementById('puzzle-overlay');
        let content = document.getElementById('puzzle-content');
        const puzzle = (window.PUZZLES && window.PUZZLES[puzzleId]) ? window.PUZZLES[puzzleId] : null;
        if (!overlay || !content) {
            const container = this.uiElements?.container || document.body;
            overlay = document.createElement('div');
            overlay.id = 'puzzle-overlay';
            overlay.className = 'puzzle-overlay';
            content = document.createElement('div');
            content.id = 'puzzle-content';
            content.className = 'puzzle-content';
            overlay.appendChild(content);
            container.appendChild(overlay);
        }
        if (!puzzle) { this.showNotification?.('Puzzle data missing. Please try again.', 'warning', 2500); return; }
        // Apply theme class
        overlay.classList.remove('theme-banyan','theme-barrier','theme-crafting','theme-harmony');
        if (puzzleId === 'BanyanTreeHarmony') overlay.classList.add('theme-banyan');
        else if (puzzleId === 'BarrierOfNegativity') overlay.classList.add('theme-barrier');
        else if (puzzleId === 'ShilpaShastraCrafting') overlay.classList.add('theme-crafting');
        else if (puzzleId === 'HarmonicResonance') overlay.classList.add('theme-harmony');

        const header = `
            <div class=\"puzzle-header\">
                <div class=\"puzzle-icon\">🧩</div>
                <div class=\"puzzle-title-wrap\">
                    <h3 class=\"puzzle-title\">${puzzle.title || 'Puzzle'}</h3>
                    <div class=\"puzzle-sub\">${puzzle.description || ''}</div>
                </div>
                <div style=\"margin-left:auto; display:flex; gap:8px;\">
                    <button class=\"ghost-btn\" id=\"puzzle-close\">✖</button>
                </div>
            </div>`;
        const type = puzzle.mechanics?.type;
        let body = '';
        if (type === 'RotationalAlignment') {
            const rings = puzzle.uiConfig?.rings || [];
            body += `
            <div class=\"puzzle-body\">
              <div class=\"themed-panel rings-wrap\">
                <div class=\"mandala-preview\" id=\"mandala-preview\">
                    <div class=\"ring r1\"><div class=\"ring-marker\" data-marker=\"vitality\"></div></div>
                    <div class=\"ring r2\"><div class=\"ring-marker\" data-marker=\"wisdom\"></div></div>
                    <div class=\"ring r3\"><div class=\"ring-marker\" data-marker=\"harmony\"></div></div>
                </div>
                <div class=\"sliders\">
                    ${rings.map(r => `
                    <div class=\"slider-row\">
                        <label>${r.id}</label>
                        <input type=\"range\" min=\"0\" max=\"359\" value=\"${r.initialRotation||0}\" data-ring=\"${r.id}\">
                        <span class=\"deg\" data-deg=\"${r.id}\">${r.initialRotation||0}°</span>
                    </div>`).join('')}
                    <div class=\"alignment-meter\"><div class=\"alignment-fill\" id=\"align-fill\"></div></div>
                    <div style=\"display:flex; gap:10px;\">
                        <button id=\"puzzle-check\" class=\"primary-btn\">Check Alignment</button>
                        <button id=\"reset-rings\" class=\"ghost-btn\">Reset</button>
                    </div>
                </div>
              </div>
              <div class=\"puzzle-hint-row\"><button class=\"hint-btn\" id=\"show-hint\">Show hint</button><div class=\"hint-text\" id=\"hint-text\">${(puzzle.hints && puzzle.hints[0]) || ''}</div></div>
            </div>`;
        } else if (type === 'ItemApplication' || type === 'PurityAlignment') {
            const items = (puzzle.mechanics?.solution?.validItems) || [];
            body += `
            <div class=\"puzzle-body\">
              <div class=\"themed-panel barrier-grid\">
                <div class=\"barrier-zone\" id=\"drop-zone\">
                    <div class=\"barrier-veil\"></div>
                    <div class=\"drop-hint\">Drag a pure item here</div>
                </div>
                <div>
                    <div class=\"inventory\">
                        ${items.map(it => `<div class=\"token\" draggable=\"true\" data-item=\"${it}\">${it}</div>`).join('')}
                    </div>
                    <div style=\"margin-top:10px; display:flex; gap:10px;\">
                        ${items.map(it => `<button class=\"ghost-btn\" data-item-click=\"${it}\">Use ${it}</button>`).join('')}
                    </div>
                </div>
              </div>
              <div class=\"puzzle-hint-row\"><button class=\"hint-btn\" id=\"show-hint\">Show hint</button><div class=\"hint-text\" id=\"hint-text\">${(puzzle.hints && puzzle.hints[0]) || ''}</div></div>
            </div>`;
        } else if (type === 'MultiStageCrafting') {
            const stages = puzzle.stages || [];
            body += `
            <div class=\"puzzle-body\">
              <div class=\"themed-panel\">
                <div class=\"craft-stage\">
                  <div class=\"progress\"><span id=\"craft-progress\"></span></div>
                  <button id=\"advance-stage\" class=\"primary-btn\">Advance Stage</button>
                </div>
                <div class=\"stage-list\">
                  ${stages.map((s, i) => `<div class=\"stage-item\" data-stage-item=\"${i+1}\"><strong>${i+1}. ${s.name}</strong><span style=\"opacity:.8\">— ${s.description}</span></div>`).join('')}
                </div>
              </div>
              <div class=\"puzzle-hint-row\"><button class=\"hint-btn\" id=\"show-hint\">Show hint</button><div class=\"hint-text\" id=\"hint-text\">${(puzzle.hints && puzzle.hints[0]) || ''}</div></div>
            </div>`;
        } else if (type === 'MusicalSequence') {
            const notes = puzzle.mechanics?.notes || ['Sa','Ga','Pa','Dha','Ni'];
            body += `
            <div class=\"puzzle-body\">
              <div class=\"themed-panel\">
                <div class=\"chimes\">
                    ${notes.map(n => `<button class=\"chime\" data-note=\"${n}\">${n}</button>`).join('')}
                </div>
                <div style=\"margin-top:10px; display:flex; gap:10px; align-items:center;\">
                    <div class=\"sequence\" id=\"sequence\"></div>
                    <button id=\"seq-reset\" class=\"ghost-btn\">Reset</button>
                </div>
              </div>
              <div class=\"puzzle-hint-row\"><button class=\"hint-btn\" id=\"show-hint\">Show hint</button><div class=\"hint-text\" id=\"hint-text\">${(puzzle.hints && puzzle.hints[0]) || ''}</div></div>
            </div>`;
        } else {
            body += `<div class=\"puzzle-body\"><p>Interactive UI not available; auto-solving for demo.</p><button id=\"auto-solve\" class=\"primary-btn\">Complete</button></div>`;
        }
        content.innerHTML = `${header}${body}`;
        overlay.style.display = 'flex';
        const finish = () => {
            overlay.style.display = 'none';
            const successScene = (sceneData.puzzle && sceneData.puzzle.successScene) || puzzle.nextSceneOnSuccess || 'ACT1_CONCLUSION';
            if (successScene) this.transitionToScene(successScene);
        };
        // Common hint toggle
        const hintBtn = content.querySelector('#show-hint');
        if (hintBtn) hintBtn.addEventListener('click', () => {
            const t = content.querySelector('#hint-text');
            if (t) t.classList.toggle('show');
        });
        // Close
        const closeBtnEl = content.querySelector('#puzzle-close');
        if (closeBtnEl) closeBtnEl.addEventListener('click', () => overlay.style.display = 'none');

        if (type === 'RotationalAlignment') {
            const inputs = Array.from(content.querySelectorAll('input[data-ring]'));
            const degEls = Object.fromEntries(inputs.map(i => [i.dataset.ring, content.querySelector(`[data-deg="${i.dataset.ring}"]`)]));
            const markers = {
                vitality: content.querySelector('[data-marker="vitality"]'),
                wisdom: content.querySelector('[data-marker="wisdom"]'),
                harmony: content.querySelector('[data-marker="harmony"]')
            };
            const fill = content.querySelector('#align-fill');
            const updatePreview = () => {
                const values = {};
                inputs.forEach(i => { values[i.dataset.ring] = parseInt(i.value)||0; if (degEls[i.dataset.ring]) degEls[i.dataset.ring].textContent = `${values[i.dataset.ring]}°`; });
                if (markers.vitality) markers.vitality.style.transform = `rotate(${values.vitality||0}deg)`;
                if (markers.wisdom) markers.wisdom.style.transform = `rotate(${values.wisdom||0}deg)`;
                if (markers.harmony) markers.harmony.style.transform = `rotate(${values.harmony||0}deg)`;
                const avgDelta = Object.values(values).reduce((a,v)=> a + Math.min(Math.abs(v%360), 360-Math.abs(v%360)), 0) / 3;
                const pct = Math.max(0, 100 - (avgDelta/180)*100);
                if (fill) fill.style.width = `${pct}%`;
            };
            inputs.forEach(i => i.addEventListener('input', updatePreview));
            updatePreview();
            const check = content.querySelector('#puzzle-check');
            if (check) check.addEventListener('click', () => {
                const ringRotations = {};
                inputs.forEach(i => ringRotations[i.dataset.ring] = parseInt(i.value));
                const solved = this.puzzleEngine.evaluatePuzzleAttempt(puzzleId, { ringRotations });
                if (solved) finish();
            });
            const reset = content.querySelector('#reset-rings');
            if (reset) reset.addEventListener('click', () => { inputs.forEach(i => { i.value = 0; }); updatePreview(); });
        } else if (type === 'ItemApplication' || type === 'PurityAlignment') {
            const zone = content.querySelector('#drop-zone');
            const onSolve = (item) => {
                const solved = this.puzzleEngine.evaluatePuzzleAttempt(puzzleId, { droppedItem: item });
                if (solved) finish();
            };
            content.querySelectorAll('[data-item-click]').forEach(btn => btn.addEventListener('click', () => onSolve(btn.dataset.itemClick)));
            content.querySelectorAll('.token').forEach(tok => {
                tok.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', tok.dataset.item); });
            });
            if (zone) {
                zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.style.outline = '2px solid #63b4d1'; });
                zone.addEventListener('dragleave', () => { zone.style.outline = 'none'; });
                zone.addEventListener('drop', (e) => { e.preventDefault(); zone.style.outline = 'none'; const item = e.dataTransfer.getData('text/plain'); onSolve(item); });
            }
        } else if (type === 'MultiStageCrafting') {
            const progress = content.querySelector('#craft-progress');
            const items = Array.from(content.querySelectorAll('[data-stage-item]'));
            const update = () => {
                const state = this.puzzleEngine.activePuzzle?.activeState || { currentStage: 1 };
                const total = (puzzle.stages||[]).length;
                const pct = Math.min(100, ((state.currentStage-1)/total)*100);
                if (progress) progress.style.width = `${pct}%`;
                items.forEach((el, idx) => el.classList.toggle('active', idx < state.currentStage));
            };
            this.puzzleEngine.startPuzzle(puzzleId);
            update();
            const adv = content.querySelector('#advance-stage');
            if (adv) adv.addEventListener('click', () => {
                this.puzzleEngine.handleInteraction({ action: 'advance_stage' });
                update();
                if (this.puzzleEngine.activePuzzle?.isSolved()) finish();
            });
        } else if (type === 'MusicalSequence') {
            this.puzzleEngine.startPuzzle(puzzleId);
            const seq = content.querySelector('#sequence');
            const reset = content.querySelector('#seq-reset');
            const addNote = (n) => {
                const tag = document.createElement('div');
                tag.className = 'seq-note';
                tag.textContent = n;
                seq.appendChild(tag);
                this.puzzleEngine.handleInteraction({ note: n });
                if (this.puzzleEngine.activePuzzle?.isSolved()) finish();
            };
            content.querySelectorAll('[data-note]').forEach(btn => btn.addEventListener('click', () => addNote(btn.dataset.note)));
            if (reset) reset.addEventListener('click', () => { seq.innerHTML=''; this.puzzleEngine.activePuzzle.activeState.sequence = []; });
        } else {
            const auto = document.getElementById('auto-solve');
            if (auto) auto.onclick = finish;
        }
    }

    /**
     * Enable meditation for current scene
     */
    enableMeditation(meditationData) {
        const meditationBtn = document.getElementById('meditation-btn');
        if (meditationBtn) {
            meditationBtn.style.display = 'flex';
            meditationBtn.title = meditationData.text || 'Enter meditation';

            // Update meditation text
            const meditationText = meditationBtn.querySelector('.meditation-text');
            if (meditationText && meditationData.text) {
                meditationText.textContent = 'Meditate';
            }
        }
    }

    /**
     * Disable meditation for current scene
     */
    disableMeditation() {
        const meditationBtn = document.getElementById('meditation-btn');
        if (meditationBtn) {
            meditationBtn.style.display = 'none';
        }
    }

    /**
     * Show philosophical growth insight
     */
    showPhilosophicalGrowth(growthData) {
        if (!growthData.concept) return;

        // Queue philosophical insight transition
        this.queueTransition('philosophical_insight', {
            concept: growthData.concept,
            insight: growthData.insight,
            effects: growthData.effects,
            callback: () => {
                // Apply growth effects
                if (growthData.effects && this.gameFlow) {
                    this.applyGrowthEffects(growthData.effects);
                }
            }
        });
    }

    /**
     * Apply growth effects to player
     */
    applyGrowthEffects(effects) {
        if (!this.gameFlow) return;

        // Apply philosophical advancement
        if (effects.philosophical) {
            Object.entries(effects.philosophical).forEach(([theme, advancement]) => {
                if (typeof this.gameFlow.advancePhilosophicalUnderstanding === 'function') {
                    this.gameFlow.advancePhilosophicalUnderstanding(theme, { text: advancement });
                }
            });
        }

        // Apply attribute increases
        if (effects.attributes) {
            Object.entries(effects.attributes).forEach(([attr, value]) => {
                if (this.gameFlow.playerProfile.attributes[attr] !== undefined) {
                    this.gameFlow.playerProfile.attributes[attr] += value;

                    // Show growth notification
                    this.showNotification(
                        `${this.getAttributeName(attr)} increased by ${value}!`,
                        'growth',
                        2000
                    );
                }
            });

            // Update UI to reflect changes
            this.updateCharacterDisplay();
        }
    }

    /**
     * Display special items found in scene
     */
    displaySpecialItems(items) {
        items.forEach(item => {
            // Check if item condition is met
            if (item.condition && !this.checkItemCondition(item.condition)) {
                return;
            }

            // Show item discovery notification
            this.showNotification(
                `✨ You discovered: ${item.name}`,
                'success',
                4000
            );

            // Add to player inventory if gameFlow available
            if (this.gameFlow && typeof this.gameFlow.addSpecialItem === 'function') {
                this.gameFlow.addSpecialItem(item);
            }
        });
    }

    /**
     * Check if item condition is met
     */
    checkItemCondition(condition) {
        // Simple condition checking - can be expanded
        switch (condition) {
            case 'earned_through_service':
                return this.gameFlow?.playerProfile?.attributes?.compassion >= 3;
            case 'wisdom_threshold':
                return this.gameFlow?.playerProfile?.attributes?.wisdom >= 5;
            case 'spiritual_insight_high':
                return this.gameFlow?.playerProfile?.attributes?.spiritual_insight >= 4;
            default:
                return true;
        }
    }

    /**
     * Display acquired knowledge
     */
    displayAcquiredKnowledge(knowledge) {
        knowledge.forEach(item => {
            this.showNotification(
                `📚 Knowledge gained: ${item}`,
                'insight',
                3000
            );
        });

        // Add to player profile if gameFlow available
        if (this.gameFlow && this.gameFlow.playerProfile) {
            if (!this.gameFlow.playerProfile.acquiredKnowledge) {
                this.gameFlow.playerProfile.acquiredKnowledge = [];
            }
            knowledge.forEach(item => {
                if (!this.gameFlow.playerProfile.acquiredKnowledge.includes(item)) {
                    this.gameFlow.playerProfile.acquiredKnowledge.push(item);
                }
            });
        }
    }

    /**
     * Handle special choices (nakshatra/gana specific)
     */
    handleSpecialChoices(sceneData) {
        // This is handled in loadChoices, but we can add visual indicators here
        if (sceneData.nakshatraChoices || sceneData.ganaChoices) {
            // Add special indicator that player has unique options
            const choicesHeader = this.uiElements.container.querySelector('.choices-header');
            if (choicesHeader) {
                const indicator = document.createElement('span');
                indicator.className = 'special-choices-indicator';
                indicator.innerHTML = ' ✨ <em>Your unique nature reveals special paths...</em>';
                indicator.style.color = 'var(--color-primary)';
                indicator.style.fontSize = '0.9rem';
                indicator.style.marginLeft = '1rem';

                // Remove existing indicator
                const existing = choicesHeader.querySelector('.special-choices-indicator');
                if (existing) existing.remove();

                choicesHeader.appendChild(indicator);
            }
        }
    }

    /**
     * Update atmospheric effects based on scene description
     */
    updateAtmosphere(description) {
        // Simple atmospheric updates based on keywords in description
        const atmosphericContainer = this.uiElements.container.querySelector('.cosmic-background');
        if (!atmosphericContainer) return;

        // Remove existing atmospheric classes
        atmosphericContainer.classList.remove(
            'atmosphere-tense', 'atmosphere-peaceful', 'atmosphere-sacred',
            'atmosphere-mysterious', 'atmosphere-joyful'
        );

        // Add atmospheric class based on description content
        const lowerDesc = description.toLowerCase();
        if (lowerDesc.includes('tense') || lowerDesc.includes('tension')) {
            atmosphericContainer.classList.add('atmosphere-tense');
        } else if (lowerDesc.includes('peace') || lowerDesc.includes('calm')) {
            atmosphericContainer.classList.add('atmosphere-peaceful');
        } else if (lowerDesc.includes('sacred') || lowerDesc.includes('temple')) {
            atmosphericContainer.classList.add('atmosphere-sacred');
        } else if (lowerDesc.includes('mysterious') || lowerDesc.includes('ancient')) {
            atmosphericContainer.classList.add('atmosphere-mysterious');
        } else if (lowerDesc.includes('joy') || lowerDesc.includes('celebration')) {
            atmosphericContainer.classList.add('atmosphere-joyful');
        }
    }

    /**
     * Get readable attribute name for notifications
     */
    getAttributeName(attr) {
        const names = {
            wisdom: 'Wisdom',
            compassion: 'Compassion',
            spiritual_insight: 'Spiritual Insight',
            determination: 'Determination',
            detachment: 'Detachment'
        };
        return names[attr] || attr.charAt(0).toUpperCase() + attr.slice(1);
    }

    /**
     * Reveal scene content with beautiful animation
     */
    revealSceneContent(sceneData) {
        const textContainer = this.uiElements.sceneText;
        const atmosphericDesc = this.uiElements.container.querySelector('.atmospheric-description');
        
        // Fade out current content
        textContainer.style.opacity = '0';
        atmosphericDesc.style.opacity = '0';
        
        setTimeout(() => {
            // Update text content
            if (typeof sceneData.text === 'string') {
                textContainer.innerHTML = `<p>${sceneData.text}</p>`;
            } else if (Array.isArray(sceneData.text)) {
                textContainer.innerHTML = sceneData.text.map(p => `<p>${p}</p>`).join('');
            }
            
            // Update atmospheric description
            if (sceneData.atmosphericDescription) {
                atmosphericDesc.innerHTML = `<em>${sceneData.atmosphericDescription}</em>`;
            }
            
            // Fade in with staggered timing
            textContainer.style.opacity = '1';
            setTimeout(() => {
                atmosphericDesc.style.opacity = '1';
            }, 500);
        }, 300);
    }
    
    /**
     * Load and display choices with beautiful styling
     */
    loadChoices(choices, sceneData = null) {
        const choicesContainer = this.uiElements.choicesList;

        // Clear existing choices
        choicesContainer.innerHTML = '';

        // Combine regular choices with special choices
        const allChoices = [...choices];

        // Add nakshatra-specific choices if available
        if (sceneData && sceneData.nakshatraChoices && this.gameFlow && this.gameFlow.playerProfile) {
            const playerNakshatra = this.gameFlow.playerProfile.nakshatra;
            if (playerNakshatra && sceneData.nakshatraChoices[playerNakshatra]) {
                try {
                    const nakshatraChoices = sceneData.nakshatraChoices[playerNakshatra].map(choice => ({
                        ...choice,
                        isNakshatraChoice: true
                    }));
                    allChoices.push(...nakshatraChoices);
                    console.log(`✨ Added ${nakshatraChoices.length} nakshatra-specific choices for ${playerNakshatra}`);
                } catch (error) {
                    console.warn('Error processing nakshatra choices:', error);
                }
            }
        }

        // Add gana-specific choices if available
        if (sceneData && sceneData.ganaChoices && this.gameFlow && this.gameFlow.playerProfile) {
            const playerGana = this.gameFlow.playerProfile.gana;
            if (playerGana && sceneData.ganaChoices[playerGana]) {
                try {
                    const ganaChoices = sceneData.ganaChoices[playerGana].map(choice => ({
                        ...choice,
                        isGanaChoice: true
                    }));
                    allChoices.push(...ganaChoices);
                    console.log(`✨ Added ${ganaChoices.length} gana-specific choices for ${playerGana}`);
                } catch (error) {
                    console.warn('Error processing gana choices:', error);
                }
            }
        }

        // Add each choice with appropriate styling
        allChoices.forEach((choice, index) => {
            const choiceElement = this.createChoiceElement(choice, index);
            choicesContainer.appendChild(choiceElement);
        });

        // Animate choices in
        this.animateChoicesIn();
    }
    
    /**
     * Create a single choice element
     */
    createChoiceElement(choice, index) {
        const choiceDiv = document.createElement('div');
        choiceDiv.className = 'choice-option';
        
        // Add special styling for different choice types
        if (choice.isNakshatraChoice) {
            choiceDiv.classList.add('nakshatra-choice');
        }
        if (choice.isGanaChoice) {
            choiceDiv.classList.add('gana-choice');
        }
        if (choice.philosophicalTheme) {
            choiceDiv.classList.add(`theme-${choice.philosophicalTheme}`);
        }
        
        choiceDiv.innerHTML = `
            <div class="choice-content">
                <div class="choice-text">${choice.text}</div>
                ${choice.philosophicalTheme ? `
                    <div class="choice-theme">
                        <span class="theme-icon">${this.getThemeIcon(choice.philosophicalTheme)}</span>
                        <span class="theme-name">${this.getThemeName(choice.philosophicalTheme)}</span>
                    </div>
                ` : ''}
            </div>
            <div class="choice-effects">
                ${this.renderChoiceEffects(choice.effects)}
            </div>
        `;
        
        // Add click handler
        choiceDiv.addEventListener('click', () => this.handleChoiceSelection(choice));
        
        return choiceDiv;
    }
    
    /**
     * Get icon for philosophical theme
     */
    getThemeIcon(theme) {
        const icons = {
            mindfulness: '🧭',
            compassion: '💝',
            devotion: '🕉️',
            wisdom: '🧠',
            service: '🤲',
            understanding: '💡',
            unity: '🔄',
            teaching: '📿',
            learning: '📚'
        };
        return icons[theme] || '✨';
    }
    
    /**
     * Get readable name for philosophical theme
     */
    getThemeName(theme) {
        const names = {
            mindfulness: 'Mindful Awareness',
            compassion: 'Compassionate Action',
            devotion: 'Devotional Practice',
            wisdom: 'Wisdom Cultivation',
            service: 'Selfless Service',
            understanding: 'Deep Understanding',
            unity: 'Unity Consciousness',
            teaching: 'Teaching Wisdom',
            learning: 'Continuous Learning'
        };
        return names[theme] || 'Spiritual Growth';
    }
    
    /**
     * Render choice effects preview
     */
    renderChoiceEffects(effects) {
        if (!effects) return '';
        
        const effectsHtml = [];
        
        if (effects.attributes) {
            Object.entries(effects.attributes).forEach(([attr, value]) => {
                effectsHtml.push(`<span class="effect attribute">${this.getAttributeIcon(attr)} +${value}</span>`);
            });
        }
        
        return effectsHtml.join('');
    }
    
    /**
     * Get icon for attribute
     */
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
    
    /**
     * Animate choices appearing
     */
    animateChoicesIn() {
        const choices = this.uiElements.choicesList.querySelectorAll('.choice-option');
        choices.forEach((choice, index) => {
            choice.style.opacity = '0';
            choice.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                choice.style.transition = 'all 0.5s ease';
                choice.style.opacity = '1';
                choice.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }
    
    /**
     * Handle choice selection
     */
    handleChoiceSelection(choice) {
        // Visual feedback
        this.showChoiceSelection(choice);
        
        // Process choice through game flow
        if (this.gameFlow && typeof this.gameFlow.recordDecision === 'function') {
            this.gameFlow.recordDecision(choice);
        } else {
            console.log('✨ Choice recorded (gameFlow method not available):', choice.text);
        }
        
        // Handle scene transition
        if (choice.nextScene) {
            this.transitionToScene(choice.nextScene);
        }
    }
    
    /**
     * Show visual feedback for choice selection
     */
    showChoiceSelection(choice) {
        const choiceElements = this.uiElements.choicesList.querySelectorAll('.choice-option');
        choiceElements.forEach(el => {
            if (el.querySelector('.choice-text').textContent === choice.text) {
                el.classList.add('selected');
                
                // Show ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'choice-ripple';
                el.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 1000);
            } else {
                el.classList.add('dimmed');
            }
        });
    }
    
    /**
     * Transition to a new scene
     */
    transitionToScene(sceneId) {
        // Queue scene transition
        this.queueTransition('scene_change', {
            targetScene: sceneId,
            callback: () => {
                // Load new scene data
                this.loadNewScene(sceneId);
            }
        });
    }
    
    /**
     * Load a new scene by ID
     */
    loadNewScene(sceneId) {
        // This would integrate with the story data
        if (window.ENHANCED_ACT1_STORY_DATA && window.ENHANCED_ACT1_STORY_DATA[sceneId]) {
            this.loadScene(window.ENHANCED_ACT1_STORY_DATA[sceneId]);
        } else {
            const fallback = 'THE_GREAT_CONVERGENCE';
            if (window.ENHANCED_ACT1_STORY_DATA && window.ENHANCED_ACT1_STORY_DATA[fallback]) {
                this.loadScene(window.ENHANCED_ACT1_STORY_DATA[fallback]);
                if (this.showNotification) {
                    this.showNotification('Guiding to a key convergence point...', 'info', 2500);
                }
            }
        }
    }
    
    /**
     * Queue a cinematic transition
     */
    queueTransition(type, options = {}) {
        this.transitionQueue.push({ type, options });
        
        if (!this.isTransitioning) {
            this.processNextTransition();
        }
    }
    
    /**
     * Process the next transition in queue
     */
    processNextTransition() {
        if (this.transitionQueue.length === 0) {
            this.isTransitioning = false;
            return;
        }
        
        this.isTransitioning = true;
        const transition = this.transitionQueue.shift();
        
        switch (transition.type) {
            case 'scene_change':
                this.playSceneTransition(transition.options);
                break;
            case 'philosophical_insight':
                this.playInsightTransition(transition.options);
                break;
            case 'phase_advancement':
                this.playPhaseTransition(transition.options);
                break;
            default:
                this.playGenericTransition(transition.options);
        }
    }
    
    /**
     * Play scene change transition
     */
    playSceneTransition(options) {
        const overlay = document.getElementById('scene-overlay');
        overlay.style.display = 'flex';
        
        // Animate in
        setTimeout(() => {
            overlay.classList.add('active');
        }, 50);
        
        // Complete transition
        setTimeout(() => {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.style.display = 'none';
                if (options.callback) options.callback();
                this.processNextTransition();
            }, 500);
        }, 2000);
    }
    
    /**
     * Play philosophical insight transition
     */
    playInsightTransition(options) {
        const overlay = document.getElementById('insight-overlay');
        const title = overlay.querySelector('.insight-title');
        const description = overlay.querySelector('.insight-description');
        
        // Set content
        title.textContent = options.concept?.concept || 'Spiritual Insight';
        description.textContent = options.concept?.insight || 'A new understanding has emerged...';
        
        overlay.style.display = 'flex';
        
        // Animate in
        setTimeout(() => {
            overlay.classList.add('active');
        }, 50);
        
        // Complete transition
        setTimeout(() => {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.style.display = 'none';
                if (options.callback) options.callback();
                this.processNextTransition();
            }, 500);
        }, 4000);
    }

    /**
     * Play phase advancement transition
     */
    playPhaseTransition(options) {
        const overlay = document.getElementById('phase-overlay');
        const title = overlay?.querySelector('.phase-title');
        const description = overlay?.querySelector('.phase-description');

        if (!overlay) {
            console.warn('Phase overlay not found, using generic transition');
            this.playGenericTransition(options);
            return;
        }

        // Set content
        if (title) title.textContent = options.title || 'Advancing to New Phase';
        if (description) description.textContent = options.description || 'Your spiritual journey deepens...';

        overlay.style.display = 'flex';

        // Animate in
        setTimeout(() => {
            overlay.classList.add('active');
        }, 50);

        // Complete transition
        setTimeout(() => {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.style.display = 'none';
                if (options.callback) options.callback();
                this.processNextTransition();
            }, 500);
        }, 5000);
    }

    /**
     * Play generic transition
     */
    playGenericTransition(options) {
        console.log('🎬 Playing generic transition:', options);

        // Create a simple fade transition
        const mainContent = this.uiElements.content;
        if (!mainContent) {
            // If we can't find the main content, just call the callback
            setTimeout(() => {
                if (options.callback) options.callback();
                this.processNextTransition();
            }, 500);
            return;
        }

        // Fade out
        mainContent.style.transition = 'opacity 0.3s ease';
        mainContent.style.opacity = '0.7';

        setTimeout(() => {
            // Execute callback in the middle of transition
            if (options.callback) options.callback();

            // Fade back in
            mainContent.style.opacity = '1';

            setTimeout(() => {
                this.processNextTransition();
            }, 300);
        }, 200);
    }

    /**
     * Show philosophical insight to the player
     */
    showPhilosophicalInsight(theme, concept) {
        console.log(`💡 Showing philosophical insight: ${theme}`, concept);

        // Queue the insight transition
        this.queueTransition('philosophical_insight', {
            theme,
            concept,
            callback: () => {
                // Add insight to player's journal if gameFlow available
                if (this.gameFlow && this.gameFlow.playerProfile) {
                    if (!this.gameFlow.playerProfile.philosophicalInsights) {
                        this.gameFlow.playerProfile.philosophicalInsights = [];
                    }

                    this.gameFlow.playerProfile.philosophicalInsights.push({
                        theme,
                        concept: concept.concept || concept,
                        insight: concept.insight || '',
                        timestamp: Date.now()
                    });
                }

                // Show success notification
                this.showNotification(
                    `🌟 Philosophical insight gained: ${concept.concept || theme}`,
                    'insight',
                    4000
                );

                // Update insights panel if it exists
                this.updateInsightsPanel();
            }
        });
    }

    /**
     * Update the insights panel with latest philosophical insights
     */
    updateInsightsPanel() {
        const insightsPanel = this.uiElements.insightsPanel;
        if (!insightsPanel || !this.gameFlow) return;

        const insightsList = insightsPanel.querySelector('.insights-list');
        if (!insightsList) return;

        // Clear existing insights
        insightsList.innerHTML = '';

        // Get recent insights
        const insights = this.gameFlow.playerProfile?.philosophicalInsights || [];
        const recentInsights = insights.slice(-5); // Show last 5 insights

        if (recentInsights.length === 0) {
            insightsList.innerHTML = '<p style="color: var(--color-text-muted); font-style: italic;">Begin making philosophical choices to gain insights...</p>';
            return;
        }

        // Display insights
        recentInsights.forEach(insight => {
            const insightElement = document.createElement('div');
            insightElement.className = 'insight-item';
            insightElement.innerHTML = `
                <div class="insight-theme">${insight.theme}</div>
                <div class="insight-concept">${insight.concept}</div>
                <div class="insight-description">${insight.insight}</div>
            `;
            insightsList.appendChild(insightElement);
        });
    }

    /**
     * Update character display
     */
    updateCharacterDisplay() {
        if (!this.gameFlow) return;
        
        const profile = this.gameFlow.playerProfile;
        const status = this.gameFlow.getGameStatus();
        
        // Update character name and path
        this.uiElements.characterName.textContent = profile.nakshatra || 'Seeker';
        this.uiElements.characterPath.textContent = `${profile.gana || 'Divine'} Path`;
        
        // Update attribute indicators
        const indicators = this.uiElements.container.querySelectorAll('.spiritual-indicators .indicator');
        indicators.forEach(indicator => {
            const attribute = indicator.dataset.attribute;
            const value = profile.attributes?.[attribute] || 0;
            const valueElement = indicator.querySelector('.indicator-value');
            
            if (valueElement) {
                this.animateValueChange(valueElement, parseInt(valueElement.textContent) || 0, value);
            }
        });
        
        // Update phase indicator
        this.updatePhaseIndicator(status.phase);
    }
    
    /**
     * Animate value change
     */
    animateValueChange(element, fromValue, toValue) {
        if (fromValue === toValue) return;
        
        const duration = 1000;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.round(fromValue + (toValue - fromValue) * progress);
            element.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }
    
    /**
     * Update phase indicator lotus
     */
    updatePhaseIndicator(phase) {
        const phaseIndicator = this.uiElements.container.querySelector('.phase-indicator');
        const phaseName = phaseIndicator.querySelector('.phase-name');
        
        const phaseNames = {
            'character_creation': 'Birth',
            'philosophical_awakening': 'Awakening',
            'act1_introduction': 'Discovery', 
            'act1_trials': 'Trials',
            'act1_mastery': 'Mastery'
        };
        
        phaseName.textContent = phaseNames[phase] || 'Journey';
        
        // Update lotus petals based on progress
        this.updateLotusPetals(phase);
    }
    
    /**
     * Update lotus petals to show progress
     */
    updateLotusPetals(phase) {
        const petals = this.uiElements.container.querySelectorAll('.lotus-petals .petal');
        const phaseProgress = {
            'character_creation': 1,
            'philosophical_awakening': 2,
            'act1_introduction': 4,
            'act1_trials': 6,
            'act1_mastery': 8
        };
        
        const activePetals = phaseProgress[phase] || 0;
        
        petals.forEach((petal, index) => {
            if (index < activePetals) {
                petal.classList.add('bloomed');
            } else {
                petal.classList.remove('bloomed');
            }
        });
    }
    
    /**
     * Show floating notification
     */
    showNotification(message, type = 'info', duration = 3000) {
        const container = document.getElementById('notifications');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">${this.getNotificationIcon(type)}</div>
                <div class="notification-message">${message}</div>
            </div>
        `;
        
        container.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 50);
        
        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);
    }
    
    /**
     * Get notification icon based on type
     */
    getNotificationIcon(type) {
        const icons = {
            info: 'ℹ️',
            success: '✅',
            warning: '⚠️',
            error: '❌',
            insight: '💡',
            growth: '🌱'
        };
        return icons[type] || 'ℹ️';
    }
    
    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Save game button
        const saveBtn = document.getElementById('save-game');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                if (this.gameFlow && typeof this.gameFlow.saveGameProgress === 'function') {
                    const success = this.gameFlow.saveGameProgress();
                    this.showNotification(
                        success ? 'Journey saved successfully!' : 'Failed to save journey',
                        success ? 'success' : 'error'
                    );
                }
            });
        }
        
        // Journal button
        const journalBtn = document.getElementById('view-journal');
        if (journalBtn) {
            journalBtn.addEventListener('click', () => {
                this.showJournal();
            });
        }
        
        // Meditation button
        const meditationBtn = document.getElementById('meditation-btn');
        if (meditationBtn) {
            meditationBtn.addEventListener('click', () => {
                this.performMeditation();
            });
        }
        
        // Modal close buttons
        const closeButtons = document.querySelectorAll('.close-modal');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                }
            });
        });
    }
    
    /**
     * Show spiritual journal
     */
    showJournal() {
        const modal = document.getElementById('journal-modal');
        modal.classList.add('active');
        
        // Populate journal content
        this.populateJournalContent();
    }
    
    /**
     * Populate journal with player's journey data
     */
    populateJournalContent() {
        if (!this.gameFlow) return;
        
        const profile = this.gameFlow.playerProfile;
        
        // Populate insights tab
        const insightsTab = document.getElementById('insights-tab');
        const insights = profile.philosophicalUnderstanding || {};
        let insightsHtml = '';
        
        Object.entries(insights).forEach(([theme, understanding]) => {
            if (understanding.insights && understanding.insights.length > 0) {
                insightsHtml += `
                    <div class="insight-group">
                        <h4>${theme.charAt(0).toUpperCase() + theme.slice(1)}</h4>
                        <div class="insight-level">Level ${understanding.level}</div>
                        <div class="insights-list">
                            ${understanding.insights.map(insight => `
                                <div class="insight-entry">
                                    <div class="insight-context">${insight.context}</div>
                                    <div class="insight-decision">"${insight.decision}"</div>
                                    <div class="insight-timestamp">${new Date(insight.timestamp).toLocaleDateString()}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        });
        
        insightsTab.innerHTML = insightsHtml || '<p>Begin making philosophical choices to gain insights...</p>';
    }
    
    /**
     * Perform meditation
     */
    performMeditation() {
        // Visual meditation effect
        this.showMeditationEffect();
        
        // Apply meditation benefits through game flow
        if (this.gameFlow && typeof this.gameFlow.performMeditation === 'function') {
            this.gameFlow.performMeditation();
        } else {
            console.log('🧘 Meditation benefits applied (gameFlow method not available)');
        }
        
        this.showNotification('Deep meditation brings clarity and wisdom...', 'insight', 4000);
    }
    
    /**
     * Show meditation visual effect
     */
    showMeditationEffect() {
        const container = this.uiElements.container;
        container.classList.add('meditating');
        
        setTimeout(() => {
            container.classList.remove('meditating');
        }, 3000);
    }
    
    /**
     * Set up responsive layout
     */
    setupResponsiveLayout() {
        // Handle window resize
        window.addEventListener('resize', () => {
            this.adjustLayoutForScreenSize();
        });
        
        // Initial adjustment
        this.adjustLayoutForScreenSize();
    }
    
    /**
     * Adjust layout for current screen size
     */
    adjustLayoutForScreenSize() {
        const container = this.uiElements.container;
        const width = window.innerWidth;
        
        // Remove existing responsive classes
        container.classList.remove('mobile', 'tablet', 'desktop');
        
        // Add appropriate class
        if (width < 768) {
            container.classList.add('mobile');
        } else if (width < 1024) {
            container.classList.add('tablet');
        } else {
            container.classList.add('desktop');
        }
    }
    
    /**
     * Public method to refresh the entire UI
     */
    refresh() {
        this.updateCharacterDisplay();
        this.updateProgressIndicators();
        
        // Update theme if needed
        if (this.gameFlow && typeof this.gameFlow.getGameStatus === 'function') {
            const status = this.gameFlow.getGameStatus();
            const newTheme = status.ui?.visualTheme || 'dawn';
            if (newTheme !== this.currentTheme) {
                this.setTheme(newTheme);
            }
        }
    }
    
    /**
     * Update all progress indicators
     */
    updateProgressIndicators() {
        if (!this.gameFlow || typeof this.gameFlow.getGameStatus !== 'function') return;

        try {
            const status = this.gameFlow.getGameStatus();

            // Update stats in footer
            const insightsCount = document.getElementById('insights-count');
            const decisionsCount = document.getElementById('decisions-count');
            const growthLevel = document.getElementById('growth-level');

            if (insightsCount) {
                const philosophicalCount = status.progress?.philosophical ||
                    Object.values(status.progress?.philosophical || {}).reduce((sum, p) => sum + (p.insights || 0), 0) || 0;
                insightsCount.textContent = philosophicalCount;
            }

            if (decisionsCount) {
                decisionsCount.textContent = status.progress?.decisions || 0;
            }

            if (growthLevel) {
                growthLevel.textContent = this.getGrowthLevelName(status.character?.level || 1);
            }

            // Update insights panel
            this.updateInsightsPanel();

        } catch (error) {
            console.warn('Error updating progress indicators:', error);
        }
    }
    
    /**
     * Get readable growth level name
     */
    getGrowthLevelName(level) {
        const levels = {
            1: 'Awakening',
            2: 'Seeker',
            3: 'Student', 
            4: 'Practitioner',
            5: 'Adept',
            6: 'Sage',
            7: 'Master',
            8: 'Enlightened'
        };
        return levels[level] || 'Transcendent';
    }
}

// Export for global use
window.CinematicUISystem = CinematicUISystem;

// CSS styles for the cinematic UI
const cinematicUIStyles = `
<style>
/* ===== CINEMATIC UI SYSTEM STYLES ===== */

.cinematic-ui-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'Marcellus', serif;
    color: var(--color-text, #c5c1b9);
    z-index: 1000;
    overflow: hidden;
}

/* Theme Variables */
:root {
    --color-primary: #e09658;
    --color-secondary: #63b4d1;
    --color-accent: #bca06a;
    --color-background: #0a0908;
    --color-surface: #1a1817;
    --color-text: #c5c1b9;
}

/* Cosmic Background */
.cosmic-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.starfield {
    position: absolute;
    width: 100%;
    height: 100%;
}

.star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--color-primary);
    border-radius: 50%;
    opacity: 0;
    animation: starTwinkle 3s infinite ease-in-out;
}

.star.gentle {
    animation-duration: 4s;
}

@keyframes starTwinkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.8; }
}

.energy-flows {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.energy-flow {
    position: absolute;
    width: 2px;
    height: 100vh;
    background: linear-gradient(180deg, 
        transparent 0%, 
        var(--color-secondary) 50%, 
        transparent 100%);
    opacity: 0.3;
    animation: energyFlow 10s infinite linear;
}

.energy-flow.subtle {
    opacity: 0.1;
    animation-duration: 15s;
}

@keyframes energyFlow {
    0% { transform: translateY(-100vh); }
    100% { transform: translateY(100vh); }
}

/* Game Interface */
.game-interface {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: rgba(10, 9, 8, 0.8);
    backdrop-filter: blur(10px);
}

/* Header */
.game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: rgba(26, 24, 23, 0.9);
    border-bottom: 2px solid var(--color-primary);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.title-section {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.game-title {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px var(--color-primary);
}

.phase-indicator {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.phase-name {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    color: var(--color-secondary);
}

.progress-lotus {
    width: 60px;
    height: 60px;
}

.lotus-progress {
    width: 100%;
    height: 100%;
}

.lotus-base, .lotus-petals .petal {
    fill: none;
    stroke: var(--color-primary);
    stroke-width: 1;
    opacity: 0.3;
    transition: all 0.5s ease;
}

.lotus-petals .petal.bloomed {
    fill: var(--color-primary);
    opacity: 0.8;
    animation: petalBloom 1s ease;
}

.lotus-center {
    fill: var(--color-secondary);
    opacity: 0.9;
}

@keyframes petalBloom {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 0.8; }
}

/* Character Summary */
.character-summary {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.character-avatar {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--color-primary);
    opacity: 0.2;
    animation: avatarGlow 3s infinite ease-in-out;
}

@keyframes avatarGlow {
    0%, 100% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.1); opacity: 0.4; }
}

.character-info {
    text-align: left;
}

.character-name {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-primary);
}

.character-path {
    font-size: 0.9rem;
    color: var(--color-secondary);
    opacity: 0.8;
}

/* Spiritual Indicators */
.spiritual-indicators {
    display: flex;
    gap: 1.5rem;
}

.indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    background: rgba(26, 24, 23, 0.6);
    border-radius: 8px;
    border: 1px solid var(--color-primary);
    min-width: 60px;
}

.indicator-icon {
    font-size: 1.5rem;
}

.indicator-value {
    font-family: 'Cinzel', serif;
    font-weight: 600;
    color: var(--color-primary);
}

/* Main Content */
.game-content {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
    padding: 2rem;
    overflow-y: auto;
}

.story-display {
    background: rgba(26, 24, 23, 0.8);
    border: 2px solid var(--color-secondary);
    border-radius: 15px;
    padding: 2rem;
    overflow-y: auto;
}

.scene-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-primary);
}

.scene-title {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    color: var(--color-primary);
    margin: 0 0 0.5rem 0;
}

.scene-subtitle {
    color: var(--color-secondary);
    font-style: italic;
    font-size: 1.1rem;
}

.scene-content {
    margin-bottom: 2rem;
}

.scene-text {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    transition: opacity 0.3s ease;
}

.atmospheric-description {
    color: var(--color-secondary);
    font-style: italic;
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem;
    background: rgba(99, 180, 209, 0.1);
    border-radius: 8px;
    transition: opacity 0.3s ease;
}

/* Choices */
.choices-container {
    margin-bottom: 2rem;
}

.choices-header {
    font-family: 'Cinzel', serif;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.choices-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.choice-option {
    background: rgba(26, 24, 23, 0.9);
    border: 2px solid var(--color-accent);
    border-radius: 10px;
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.choice-option:hover {
    border-color: var(--color-primary);
    background: rgba(224, 150, 88, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(224, 150, 88, 0.3);
}

.choice-option.selected {
    border-color: var(--color-secondary);
    background: rgba(99, 180, 209, 0.2);
    transform: scale(1.02);
}

.choice-option.dimmed {
    opacity: 0.5;
}

.choice-option.nakshatra-choice {
    border-color: var(--color-primary);
    background: rgba(224, 150, 88, 0.1);
}

.choice-option.gana-choice {
    border-color: var(--color-secondary);
    background: rgba(99, 180, 209, 0.1);
}

.choice-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.choice-text {
    font-size: 1.1rem;
    font-weight: 500;
}

.choice-theme {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-secondary);
    opacity: 0.8;
}

.choice-effects {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.effect {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    background: rgba(224, 150, 88, 0.2);
    border-radius: 4px;
    color: var(--color-primary);
}

.choice-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: rippleEffect 1s ease-out;
}

@keyframes rippleEffect {
    to {
        width: 200px;
        height: 200px;
        opacity: 0;
    }
}

/* Meditation Corner */
.meditation-corner {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
}

.meditation-button {
    background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
    border: none;
    border-radius: 50px;
    padding: 1rem 1.5rem;
    color: var(--color-background);
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.meditation-button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(224, 150, 88, 0.4);
}

/* Insights Panel */
.insights-panel {
    background: rgba(26, 24, 23, 0.8);
    border: 2px solid var(--color-accent);
    border-radius: 15px;
    padding: 1.5rem;
    height: fit-content;
}

.insights-panel h3 {
    font-family: 'Cinzel', serif;
    color: var(--color-secondary);
    margin-bottom: 1rem;
    text-align: center;
}

/* Footer */
.game-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(26, 24, 23, 0.9);
    border-top: 2px solid var(--color-primary);
}

.action-buttons {
    display: flex;
    gap: 1rem;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba(224, 150, 88, 0.2);
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    color: var(--color-text);
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}

.action-btn:hover {
    background: rgba(224, 150, 88, 0.3);
    transform: translateY(-2px);
}

.progress-summary {
    color: var(--color-secondary);
    font-size: 0.9rem;
}

.journey-stats {
    display: flex;
    gap: 1.5rem;
}

/* Transition Overlays */
.transition-overlays {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2000;
}

.transition-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(10, 9, 8, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%);
    display: none;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.8s ease;
}

.transition-overlay.active {
    opacity: 1;
}

/* Philosophical Insight Overlay */
.insight-content {
    text-align: center;
    color: var(--color-primary);
}

.insight-mandala {
    width: 200px;
    height: 200px;
    margin: 0 auto 2rem;
}

.mandala-svg {
    width: 100%;
    height: 100%;
}

.mandala-outer, .mandala-middle, .mandala-inner, .mandala-center {
    fill: none;
    stroke: var(--color-primary);
    stroke-width: 1;
    opacity: 0;
    animation: mandalaForm 2s ease forwards;
}

.mandala-outer { animation-delay: 0s; }
.mandala-middle { animation-delay: 0.5s; }
.mandala-inner { animation-delay: 1s; }
.mandala-center { animation-delay: 1.5s; fill: var(--color-primary); }

@keyframes mandalaForm {
    to { opacity: 0.8; }
}

.insight-title {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.insight-description {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Scene Transition Overlay */
.flowing-energy {
    width: 300px;
    height: 300px;
    position: relative;
}

.energy-stream {
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--color-secondary), transparent);
    animation: streamFlow 2s ease infinite;
}

.energy-stream:nth-child(1) { left: 20%; animation-delay: 0s; }
.energy-stream:nth-child(2) { left: 50%; animation-delay: 0.3s; }
.energy-stream:nth-child(3) { left: 80%; animation-delay: 0.6s; }

@keyframes streamFlow {
    0%, 100% { opacity: 0; transform: translateY(100px); }
    50% { opacity: 1; transform: translateY(-100px); }
}

/* Notifications */
.notification-system {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 3000;
    pointer-events: none;
}

.notification {
    background: rgba(26, 24, 23, 0.95);
    border: 2px solid var(--color-primary);
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    transform: translateX(120%);
    opacity: 0;
    transition: all 0.5s ease;
    min-width: 300px;
}

.notification.show {
    transform: translateX(0);
    opacity: 1;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.notification-icon {
    font-size: 1.5rem;
}

.notification.success { border-color: #4ade80; }
.notification.warning { border-color: #fbbf24; }
.notification.error { border-color: #ef4444; }
.notification.insight { border-color: var(--color-secondary); }

/* Modal System */
.modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 4000;
}

.modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background: rgba(26, 24, 23, 0.95);
    border: 2px solid var(--color-primary);
    border-radius: 15px;
    width: 90%;
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
}

.modal-header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid var(--color-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h2 {
    font-family: 'Cinzel', serif;
    color: var(--color-primary);
    margin: 0;
}

.close-modal {
    background: none;
    border: none;
    color: var(--color-text);
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-modal:hover {
    color: var(--color-primary);
}

.modal-body {
    padding: 2rem;
}

/* Journal Tabs */
.journal-tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--color-primary);
}

.tab-btn {
    background: none;
    border: none;
    color: var(--color-text);
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
    font-family: inherit;
}

.tab-btn.active,
.tab-btn:hover {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Special States */
.cinematic-ui-container.meditating {
    animation: meditationGlow 3s ease-in-out;
}

@keyframes meditationGlow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2) saturate(1.3); }
}

/* Responsive Design */
.cinematic-ui-container.mobile .game-content {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
}

.cinematic-ui-container.mobile .game-header {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
}

.cinematic-ui-container.mobile .spiritual-indicators {
    gap: 0.5rem;
}

.cinematic-ui-container.mobile .game-title {
    font-size: 2rem;
}

.cinematic-ui-container.tablet .game-content {
    grid-template-columns: 2fr 1fr;
}

/* Insight Items */
.insight-item {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--color-secondary);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

.insight-item:hover {
    background: rgba(99, 180, 209, 0.1);
    transform: translateY(-2px);
}

.insight-theme {
    font-weight: bold;
    color: var(--color-secondary);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.insight-concept {
    font-family: var(--font-title);
    color: var(--color-primary);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.insight-description {
    color: var(--color-text);
    font-size: 0.9rem;
    line-height: 1.4;
    font-style: italic;
}

/* Special Choice Indicators */
.special-choices-indicator {
    animation: gentleGlow 2s infinite ease-in-out;
}

@keyframes gentleGlow {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}

/* Atmospheric Classes */
.atmosphere-tense .starfield .star {
    animation-duration: 1s;
    color: #d96c47;
}

.atmosphere-peaceful .energy-flows .energy-flow {
    opacity: 0.5;
    animation-duration: 20s;
}

.atmosphere-sacred .cosmic-background {
    background: radial-gradient(circle, rgba(224, 150, 88, 0.1) 0%, transparent 50%);
}

.atmosphere-mysterious .starfield .star {
    animation-duration: 5s;
    opacity: 0.6;
}

.atmosphere-joyful .energy-flows .energy-flow {
    background: linear-gradient(180deg,
        transparent 0%,
        #ffc994 50%,
        transparent 100%);
}

/* UI Complexity Variations */
.complexity-simple .advanced-feature {
    display: none;
}

.complexity-enhanced .intermediate-feature {
    display: block;
}

.complexity-advanced .advanced-feature {
    display: block;
}

.complexity-master .master-feature {
    display: block;
}

/* Philosophical Depth Indicators */
.depth-locked {
    opacity: 0.3;
    pointer-events: none;
}

.depth-introductory .depth-advanced,
.depth-introductory .depth-expert {
    display: none;
}

.depth-intermediate .depth-expert {
    display: none;
}

/* Theme Variations */
.cinematic-ui-container.theme-awakened {
    --color-primary: #ffc994;
    --color-secondary: #7bc7e8;
}

.cinematic-ui-container.theme-illuminated {
    --color-primary: #ffdc94;
    --color-secondary: #94d4ff;
}

.cinematic-ui-container.theme-enlightened {
    --color-primary: #fff5bb;
    --color-secondary: #bbf0ff;
}
</style>
`;

// Inject styles
if (typeof document !== 'undefined') {
    document.head.insertAdjacentHTML('beforeend', cinematicUIStyles);
}

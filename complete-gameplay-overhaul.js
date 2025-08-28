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
                <!-- Enhanced Character Progression -->
                <div class="character-abilities-panel">
                    <div class="abilities-title">Spiritual Awakening</div>
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
        
        // Initialize the enhanced interface
        this.populateEnhancedInterface();
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
        // Populate character abilities
        this.updateCharacterAbilitiesDisplay();
        
        // Setup initial location
        this.createLocationElements(this.currentLocation);
        
        // Initialize atmospheric meters
        this.updateAtmosphericMeters();
        
        // Setup discovery progress
        this.updateDiscoveryProgress();
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

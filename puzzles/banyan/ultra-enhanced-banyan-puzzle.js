/**
 * Ultra-Enhanced Banyan Tree Puzzle
 * A sophisticated multi-stage puzzle that combines visual mandala mechanics
 * with deep Hindu philosophical concepts and progressive spiritual development
 */

class UltraEnhancedBanyanPuzzle {
    constructor(container, gameStateManager, onSuccess) {
        this.container = container;
        this.gameStateManager = gameStateManager;
        this.onSuccess = onSuccess;
        
        // Puzzle state tracking
        this.currentStage = 1;
        this.totalStages = 5;
        this.spiritualInsights = [];
        this.completedGesturesSequence = [];
        this.meditationDepth = 0;
        this.consciousnessLevel = 0;
        
        // Enhanced puzzle mechanics
        this.mandalaNature = this.initializeMandalaNature();
        this.philosophicalLayers = this.initializePhilosophicalLayers();
        this.progressiveRealization = this.initializeProgressiveRealization();
        
        this.init();
    }
    
    initializeMandalaNature() {
        return {
            // The banyan tree as a living mandala with consciousness
            energyFields: {
                roots: { 
                    consciousness: 'grounding_awareness',
                    philosophy: 'material_existence_understanding',
                    energy: 0.3,
                    balanced: false
                },
                trunk: {
                    consciousness: 'individual_self_awareness', 
                    philosophy: 'personal_dharma_realization',
                    energy: 0.5,
                    balanced: false
                },
                branches: {
                    consciousness: 'universal_connection_awareness',
                    philosophy: 'cosmic_dharma_understanding', 
                    energy: 0.7,
                    balanced: false
                },
                leaves: {
                    consciousness: 'transcendent_awareness',
                    philosophy: 'unity_consciousness_realization',
                    energy: 0.9,
                    balanced: false
                }
            },
            
            cosmicAlignment: {
                earthElement: { aligned: false, vibration: 256 }, // Root chakra frequency
                waterElement: { aligned: false, vibration: 288 }, // Sacral chakra frequency  
                fireElement: { aligned: false, vibration: 320 },  // Solar plexus frequency
                airElement: { aligned: false, vibration: 341.3 }, // Heart chakra frequency
                etherElement: { aligned: false, vibration: 384 }  // Throat chakra frequency
            },
            
            nakshatraResonance: this.calculateNakshatraResonance()
        };
    }
    
    initializePhilosophicalLayers() {
        return {
            stage1: {
                concept: 'Prakriti_Purusha_Duality',
                title: 'Understanding the Dance of Nature and Consciousness',
                teaching: 'The tree represents Prakriti (nature) expressing the divine Purusha (consciousness). Learn to see both the material form and the consciousness that animates it.',
                mechanic: 'dual_perception_training',
                insights: [
                    'Form is consciousness expressing itself',
                    'Matter and spirit are not separate',
                    'The tree breathes with universal life force'
                ]
            },
            
            stage2: {
                concept: 'Dharma_Levels',
                title: 'The Four Levels of Dharmic Expression',
                teaching: 'Each part of the tree represents a different level of dharma: personal (svadharma), social (varnashrama), universal (rita), and cosmic (sanatana).',
                mechanic: 'dharmic_resonance_matching',
                insights: [
                    'Personal dharma flows into social responsibility',
                    'Social dharma aligns with universal order',
                    'Universal dharma reflects eternal principles'
                ]
            },
            
            stage3: {
                concept: 'Guna_Transformation',
                title: 'Transcending the Three Gunas',
                teaching: 'Balance the three gunas (sattva, rajas, tamas) within each part of the tree to achieve transcendence (gunatita state).',
                mechanic: 'guna_balance_meditation',
                insights: [
                    'Tamas provides stability and grounding',
                    'Rajas creates movement and growth', 
                    'Sattva brings clarity and illumination',
                    'Transcendence comes through perfect balance'
                ]
            },
            
            stage4: {
                concept: 'Akashic_Connection',
                title: 'Accessing the Tree\'s Memory',
                teaching: 'Every tree contains the akashic records of all who have meditated beneath it. Access this cosmic memory through deep contemplation.',
                mechanic: 'consciousness_archaeology',
                insights: [
                    'All wisdom seekers are connected across time',
                    'The tree holds the memories of enlightened beings',
                    'Past, present, and future merge in consciousness'
                ]
            },
            
            stage5: {
                concept: 'Moksha_Realization',
                title: 'The Ultimate Freedom',
                teaching: 'Realize that you, the tree, and the entire universe are expressions of one infinite consciousness. This is moksha - the ultimate liberation.',
                mechanic: 'unity_consciousness_experience',
                insights: [
                    'Individual self dissolves into universal Self',
                    'All separation is illusion (maya)',
                    'You are the tree, the tree is you, all is One'
                ]
            }
        };
    }
    
    initializeProgressiveRealization() {
        return {
            awarenessStages: [
                {
                    name: 'surface_observation',
                    description: 'Seeing the tree as a physical object',
                    unlocks: ['basic_interaction', 'simple_energy_perception']
                },
                {
                    name: 'energy_perception',
                    description: 'Feeling the life force within the tree',
                    unlocks: ['energy_visualization', 'chakra_resonance']
                },
                {
                    name: 'consciousness_recognition',
                    description: 'Recognizing the tree as a conscious being',
                    unlocks: ['telepathic_communication', 'memory_access']
                },
                {
                    name: 'cosmic_identification',
                    description: 'Experiencing oneness with the tree',
                    unlocks: ['reality_transformation', 'moksha_glimpse']
                }
            ]
        };
    }
    
    init() {
        this.createPuzzleInterface();
        this.setupNakshatraAdaptation();
        this.initializeStage1();
    }
    
    createPuzzleInterface() {
        this.container.innerHTML = `
            <div class="enhanced-banyan-puzzle">
                <div class="puzzle-header">
                    <h3 class="stage-title">The Living Mandala of Dharma</h3>
                    <div class="stage-progress">
                        <div class="stage-indicator">
                            ${Array.from({length: this.totalStages}, (_, i) => 
                                `<div class="stage-dot ${i < this.currentStage ? 'completed' : i === this.currentStage - 1 ? 'active' : ''}"></div>`
                            ).join('')}
                        </div>
                        <p class="stage-description">Stage ${this.currentStage}: Awakening to the Tree's Consciousness</p>
                    </div>
                </div>
                
                <div class="philosophical-teaching">
                    <div class="teaching-scroll">
                        <p class="philosophical-text" id="current-teaching">
                            Behold the sacred Banyan - not merely wood and leaf, but a living mandala of cosmic consciousness. 
                            Each ring represents a level of spiritual understanding. Align them to unlock the tree's wisdom.
                        </p>
                    </div>
                </div>
                
                <div class="mandala-container" id="mandala-container">
                    <div class="cosmic-background">
                        <div class="chakra-frequency-visualizer" id="frequency-visualizer"></div>
                    </div>
                    
                    <div class="banyan-mandala" id="banyan-mandala">
                        <div class="energy-ring roots-ring" data-level="roots" data-angle="0">
                            <div class="ring-symbols">
                                <div class="symbol symbol-earth">🌍</div>
                                <div class="symbol symbol-stability">⛰️</div>
                                <div class="symbol symbol-foundation">🏗️</div>
                                <div class="symbol symbol-grounding">⚓</div>
                            </div>
                        </div>
                        
                        <div class="energy-ring trunk-ring" data-level="trunk" data-angle="0">
                            <div class="ring-symbols">
                                <div class="symbol symbol-self">🧘</div>
                                <div class="symbol symbol-growth">🌱</div>
                                <div class="symbol symbol-dharma">��️</div>
                                <div class="symbol symbol-purpose">🎯</div>
                            </div>
                        </div>
                        
                        <div class="energy-ring branches-ring" data-level="branches" data-angle="0">
                            <div class="ring-symbols">
                                <div class="symbol symbol-connection">🤝</div>
                                <div class="symbol symbol-service">❤️</div>
                                <div class="symbol symbol-wisdom">📿</div>
                                <div class="symbol symbol-teaching">📚</div>
                            </div>
                        </div>
                        
                        <div class="energy-ring leaves-ring" data-level="leaves" data-angle="0">
                            <div class="ring-symbols">
                                <div class="symbol symbol-transcendence">✨</div>
                                <div class="symbol symbol-unity">🕉️</div>
                                <div class="symbol symbol-liberation">🕊️</div>
                                <div class="symbol symbol-infinity">♾️</div>
                            </div>
                        </div>
                        
                        <div class="consciousness-center">
                            <div class="om-symbol">ॐ</div>
                            <div class="consciousness-pulse"></div>
                        </div>
                    </div>
                </div>
                
                <div class="meditation-interface">
                    <div class="breath-guidance">
                        <div class="breath-circle" id="breath-circle">
                            <span class="breath-instruction" id="breath-instruction">Breathe with the tree...</span>
                        </div>
                    </div>
                    
                    <div class="guna-balance-display">
                        <div class="guna-meter sattva-meter">
                            <label>Sattva (Purity)</label>
                            <div class="meter-bar"><div class="meter-fill" data-guna="sattva"></div></div>
                        </div>
                        <div class="guna-meter rajas-meter">
                            <label>Rajas (Activity)</label>
                            <div class="meter-bar"><div class="meter-fill" data-guna="rajas"></div></div>
                        </div>
                        <div class="guna-meter tamas-meter">
                            <label>Tamas (Stability)</label>
                            <div class="meter-bar"><div class="meter-fill" data-guna="tamas"></div></div>
                        </div>
                    </div>
                </div>
                
                <div class="insight-revelation" id="insight-revelation">
                    <div class="insight-text"></div>
                </div>
                
                <div class="puzzle-actions">
                    <button class="action-btn meditate-btn" id="meditate-btn">
                        🧘 Enter Deep Meditation
                    </button>
                    <button class="action-btn align-btn" id="align-btn">
                        ⚡ Align Energies
                    </button>
                    <button class="action-btn transcend-btn" id="transcend-btn" style="display: none;">
                        ✨ Transcend to Unity
                    </button>
                </div>
            </div>
        `;
        
        this.setupInteractions();
    }
    
    setupInteractions() {
        // Enhanced ring rotation with consciousness mechanics
        const rings = this.container.querySelectorAll('.energy-ring');
        rings.forEach(ring => this.setupRingInteraction(ring));
        
        // Meditation interface
        const meditateBtn = this.container.querySelector('#meditate-btn');
        meditateBtn.addEventListener('click', () => this.enterMeditation());
        
        // Energy alignment
        const alignBtn = this.container.querySelector('#align-btn');
        alignBtn.addEventListener('click', () => this.attemptAlignment());
        
        // Transcendence trigger
        const transcendBtn = this.container.querySelector('#transcend-btn');
        transcendBtn.addEventListener('click', () => this.transcendToUnity());
        
        // Breathing synchronization
        this.startBreathGuidance();
    }
    
    setupRingInteraction(ring) {
        let isDragging = false;
        let lastAngle = 0;
        
        const handleStart = (e) => {
            isDragging = true;
            ring.classList.add('active');
            this.playChakraFrequency(ring.dataset.level);
        };
        
        const handleMove = (e) => {
            if (!isDragging) return;
            
            const rect = ring.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            const clientY = e.clientY || (e.touches && e.touches[0].clientY);
            
            const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
            const normalizedAngle = (angle + 360) % 360;
            
            ring.style.transform = `rotate(${normalizedAngle}deg)`;
            ring.dataset.angle = normalizedAngle;
            
            this.updateEnergyField(ring.dataset.level, normalizedAngle);
            this.checkPhilosophicalAlignment();
        };
        
        const handleEnd = (e) => {
            isDragging = false;
            ring.classList.remove('active');
            this.snapToNearestPhilosophicalPosition(ring);
        };
        
        // Mouse events
        ring.addEventListener('mousedown', handleStart);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        
        // Touch events for mobile
        ring.addEventListener('touchstart', handleStart);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
    }
    
    updateEnergyField(level, angle) {
        const field = this.mandalaNature.energyFields[level];
        if (!field) return;
        
        // Calculate energy based on philosophical alignment
        const philosophicalAlignment = this.calculatePhilosophicalAlignment(level, angle);
        field.energy = philosophicalAlignment;
        
        // Update visual feedback
        this.updateEnergyVisualization(level, field.energy);
        
        // Trigger consciousness expansion if aligned
        if (field.energy > 0.8) {
            this.triggerConsciousnessExpansion(level);
        }
    }
    
    calculatePhilosophicalAlignment(level, angle) {
        // Each level has optimal angles based on Hindu philosophical concepts
        const optimalAngles = {
            roots: [0, 90, 180, 270], // Four directions, material stability
            trunk: [45, 135, 225, 315], // Diagonal, personal growth
            branches: [30, 60, 120, 150, 210, 240, 300, 330], // 8-fold path, service
            leaves: [15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345] // 12-fold, transcendence
        };
        
        const targetAngles = optimalAngles[level] || [0];
        const minDistance = Math.min(...targetAngles.map(target => {
            const diff = Math.abs(angle - target);
            return Math.min(diff, 360 - diff);
        }));
        
        return Math.max(0, 1 - (minDistance / 30)); // 30 degree tolerance
    }
    
    checkPhilosophicalAlignment() {
        const fields = Object.values(this.mandalaNature.energyFields);
        const alignedFields = fields.filter(field => field.energy > 0.7);
        
        if (alignedFields.length === fields.length) {
            this.triggerStageCompletion();
        }
        
        // Update guna balance based on alignment
        this.updateGunaBalance();
    }
    
    enterMeditation() {
        this.meditationDepth++;
        
        // Progressive meditation deepening
        const meditationStages = [
            { name: 'surface_calming', insight: 'The mind begins to settle like a calm lake...' },
            { name: 'breath_awareness', insight: 'Feel your breath synchronizing with the tree\'s life force...' },
            { name: 'energy_perception', insight: 'The tree\'s energy field becomes visible to your inner sight...' },
            { name: 'consciousness_merging', insight: 'The boundary between self and tree begins to dissolve...' },
            { name: 'unity_experience', insight: 'You ARE the tree. The tree is YOU. All is One consciousness expressing itself.' }
        ];
        
        const currentStage = meditationStages[Math.min(this.meditationDepth - 1, meditationStages.length - 1)];
        
        this.revealInsight(currentStage.insight);
        this.enhanceConsciousnessLevel();
        
        // Unlock advanced mechanics based on meditation depth
        if (this.meditationDepth >= 3) {
            this.unlockAdvancedMechanics();
        }
    }
    
    revealInsight(insight) {
        const insightElement = this.container.querySelector('#insight-revelation .insight-text');
        insightElement.textContent = insight;
        insightElement.parentElement.classList.add('revealed');
        
        setTimeout(() => {
            insightElement.parentElement.classList.remove('revealed');
        }, 4000);
        
        this.spiritualInsights.push(insight);
    }
    
    enhanceConsciousnessLevel() {
        this.consciousnessLevel++;
        
        // Visual feedback for consciousness expansion
        const center = this.container.querySelector('.consciousness-center');
        center.classList.add('expanded');
        
        setTimeout(() => {
            center.classList.remove('expanded');
        }, 2000);
    }
    
    unlockAdvancedMechanics() {
        // Reveal transcendence button
        const transcendBtn = this.container.querySelector('#transcend-btn');
        transcendBtn.style.display = 'block';
        
        // Enable akashic memory access
        this.enableAkashicAccess();
    }
    
    enableAkashicAccess() {
        // Add memory fragments that appear during deep meditation
        const mandala = this.container.querySelector('#banyan-mandala');
        
        const memoryFragments = [
            '🕉️ Ancient sages once meditated here...',
            '📿 The tree remembers countless enlightenments...',
            '✨ Buddha himself may have sat beneath these branches...',
            '🌸 Every prayer ever offered still resonates in its bark...'
        ];
        
        memoryFragments.forEach((memory, index) => {
            setTimeout(() => {
                this.createMemoryFragment(memory, mandala);
            }, index * 3000);
        });
    }
    
    createMemoryFragment(text, container) {
        const fragment = document.createElement('div');
        fragment.className = 'memory-fragment';
        fragment.textContent = text;
        fragment.style.position = 'absolute';
        fragment.style.left = Math.random() * 80 + 10 + '%';
        fragment.style.top = Math.random() * 80 + 10 + '%';
        fragment.style.opacity = '0';
        fragment.style.transition = 'opacity 2s ease';
        
        container.appendChild(fragment);
        
        setTimeout(() => fragment.style.opacity = '1', 100);
        setTimeout(() => {
            fragment.style.opacity = '0';
            setTimeout(() => fragment.remove(), 2000);
        }, 4000);
    }
    
    transcendToUnity() {
        // Ultimate transcendence sequence
        this.createUnityExperience();
        
        setTimeout(() => {
            this.completePuzzle();
        }, 5000);
    }
    
    createUnityExperience() {
        // Create a profound visual/experiential moment of unity consciousness
        const unityOverlay = document.createElement('div');
        unityOverlay.className = 'unity-consciousness-overlay';
        unityOverlay.innerHTML = `
            <div class="unity-content">
                <div class="dissolving-boundaries"></div>
                <div class="cosmic-om">ॐ</div>
                <div class="unity-text">
                    <p>In this moment, all separation dissolves...</p>
                    <p>You are the tree, the earth, the sky, the infinite...</p>
                    <p>SAT-CHIT-ANANDA: Existence-Consciousness-Bliss</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(unityOverlay);
        
        setTimeout(() => {
            unityOverlay.classList.add('active');
        }, 100);
        
        setTimeout(() => {
            unityOverlay.remove();
        }, 5000);
    }
    
    calculateNakshatraResonance() {
        const nakshatra = this.gameStateManager.playerProfile.nakshatra;
        
        // Each Nakshatra has unique resonance patterns with the tree
        const resonancePatterns = {
            'Ashwini': { frequency: 256, element: 'healing_fire', special: 'rapid_growth_acceleration' },
            'Bharani': { frequency: 288, element: 'transformative_earth', special: 'death_rebirth_cycles' },
            'Krittika': { frequency: 320, element: 'purifying_fire', special: 'illusion_burning' },
            // ... etc for all 27 Nakshatras
        };
        
        return resonancePatterns[nakshatra] || resonancePatterns['Ashwini'];
    }
    
    setupNakshatraAdaptation() {
        const nakshatra = this.gameStateManager.playerProfile.nakshatra;
        const resonance = this.mandalaNature.nakshatraResonance;
        
        // Adapt puzzle mechanics based on player's Nakshatra
        this.adaptMechanicsForNakshatra(nakshatra, resonance);
    }
    
    adaptMechanicsForNakshatra(nakshatra, resonance) {
        // Customize the puzzle experience based on player's spiritual archetype
        const adaptations = {
            'Ashwini': {
                focusArea: 'healing_energy_flows',
                specialMechanic: 'rapid_energy_balancing',
                uniqueInsight: 'The tree\'s wounds heal instantly through your touch'
            },
            'Bharani': {
                focusArea: 'transformation_cycles',
                specialMechanic: 'death_rebirth_meditation',
                uniqueInsight: 'You see the tree\'s eternal cycle of death and renewal'
            }
            // ... continue for all Nakshatras
        };
        
        const adaptation = adaptations[nakshatra];
        if (adaptation) {
            this.implementNakshatraSpecificMechanics(adaptation);
        }
    }
    
    completePuzzle() {
        // Record spiritual achievements
        this.gameStateManager.updateState('banyan_consciousness_achieved', true);
        this.gameStateManager.updateState('spiritual_insights_gained', this.spiritualInsights);
        this.gameStateManager.updateState('consciousness_level', this.consciousnessLevel);
        
        // Award special abilities based on puzzle completion
        this.awardSpiritualAbilities();
        
        // Trigger success callback
        if (this.onSuccess) {
            this.onSuccess();
        }
    }
    
    awardSpiritualAbilities() {
        const abilities = [
            'Tree Consciousness Communication',
            'Energy Field Perception', 
            'Guna Balance Mastery',
            'Philosophical Insight Enhancement',
            'Unity Consciousness Glimpses'
        ];
        
        abilities.forEach(ability => {
            this.gameStateManager.addSpecialItem({
                id: ability.toLowerCase().replace(/\s+/g, '_'),
                name: ability,
                type: 'spiritual_ability',
                description: `Gained through deep communion with the sacred Banyan tree`,
                icon: '✨'
            });
        });
    }
}

// Export for use in the game
window.UltraEnhancedBanyanPuzzle = UltraEnhancedBanyanPuzzle;

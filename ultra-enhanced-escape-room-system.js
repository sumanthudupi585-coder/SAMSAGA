/**
 * Ultra-Enhanced Escape Room System
 * Transforms Samsara Saga into a premium escape room/treasure hunting experience
 * with layered mysteries, progressive discovery, and philosophical depth
 */

class UltraEnhancedEscapeRoomSystem {
    constructor(gameStateManager, storyEngine) {
        this.gameStateManager = gameStateManager;
        this.storyEngine = storyEngine;
        
        // Core escape room mechanics
        this.discoveredClues = new Map();
        this.solvedPuzzles = new Set();
        this.unlockedAreas = new Set();
        this.mysteryProgress = new Map();
        this.hiddenSecrets = new Map();
        
        // Progressive revelation system
        this.revelationLayers = this.initializeRevelationLayers();
        this.mysteryChains = this.initializeMysteryChains();
        this.treasureHunts = this.initializeTreasureHunts();
        this.philosophicalMysteries = this.initializePhilosophicalMysteries();
        
        // Advanced discovery mechanics
        this.environmentalClues = new Map();
        this.sequentialPuzzles = new Map();
        this.metaPuzzles = new Map();
        this.narrativeSecrets = new Map();
        
        this.init();
    }
    
    initializeRevelationLayers() {
        return {
            surface: {
                name: 'Surface Exploration',
                description: 'Obvious elements visible to all players',
                revealThreshold: 0,
                elements: [
                    'basic_scene_descriptions',
                    'obvious_interactive_objects',
                    'standard_choice_options',
                    'simple_puzzles'
                ]
            },
            
            observational: {
                name: 'Careful Observation',
                description: 'Details revealed through attentive exploration',
                revealThreshold: 3, // 3 careful examinations
                elements: [
                    'hidden_environmental_details',
                    'subtle_interactive_elements',
                    'background_story_clues',
                    'pattern_recognition_puzzles'
                ]
            },
            
            contemplative: {
                name: 'Contemplative Insights',
                description: 'Deeper meanings accessible through reflection',
                revealThreshold: 5, // 5 meaningful choices or meditations
                elements: [
                    'philosophical_easter_eggs',
                    'symbolic_interpretations',
                    'meditation_visions',
                    'wisdom_tradition_references'
                ]
            },
            
            intuitive: {
                name: 'Intuitive Discoveries',
                description: 'Secrets accessible only through spiritual intuition',
                revealThreshold: 10, // High spiritual development
                elements: [
                    'consciousness_based_puzzles',
                    'non_linear_revelations',
                    'synchronicity_patterns',
                    'transcendent_perspectives'
                ]
            },
            
            transcendent: {
                name: 'Transcendent Mysteries',
                description: 'Ultimate secrets for those who achieve deep realization',
                revealThreshold: 20, // Master level
                elements: [
                    'reality_transformation_experiences',
                    'unity_consciousness_puzzles',
                    'akashic_record_access',
                    'cosmic_mystery_revelations'
                ]
            }
        };
    }
    
    initializeMysteryChains() {
        return {
            village_origins: {
                name: 'The True History of Dharmapura',
                startingClue: 'ancient_inscription_fragments',
                totalStages: 7,
                revelationPath: [
                    { clue: 'ancient_inscription_fragments', location: 'village_square', discovery: 'examine_stones_repeatedly' },
                    { clue: 'elder_family_lineage', location: 'elder_dwelling', discovery: 'genealogy_research' },
                    { clue: 'hidden_temple_connection', location: 'banyan_tree', discovery: 'root_system_exploration' },
                    { clue: 'ancient_catastrophe_evidence', location: 'river_source', discovery: 'geological_investigation' },
                    { clue: 'survivor_settlement_proof', location: 'village_boundary', discovery: 'archaeological_discovery' },
                    { clue: 'spiritual_protection_ritual', location: 'temple_entrance', discovery: 'ritual_reenactment' },
                    { revelation: 'cosmic_sanctuary_truth', reward: 'village_guardian_status' }
                ]
            },
            
            banyan_consciousness: {
                name: 'The Secret of the Living Tree',
                startingClue: 'tree_breathing_observation',
                totalStages: 6,
                revelationPath: [
                    { clue: 'tree_breathing_observation', location: 'banyan_tree', discovery: 'patient_observation' },
                    { clue: 'root_network_communication', location: 'underground_roots', discovery: 'root_meditation' },
                    { clue: 'tree_memory_access', location: 'banyan_trunk', discovery: 'consciousness_merging' },
                    { clue: 'inter_tree_network', location: 'forest_edge', discovery: 'network_sensing' },
                    { clue: 'planetary_consciousness_grid', location: 'temple_apex', discovery: 'cosmic_connection' },
                    { revelation: 'tree_as_cosmic_antenna', reward: 'botanical_telepathy_ability' }
                ]
            },
            
            hermit_sacrifice: {
                name: 'The Hermit\'s Ultimate Teaching',
                startingClue: 'hermit_belongings_resonance',
                totalStages: 5,
                revelationPath: [
                    { clue: 'hermit_belongings_resonance', location: 'corrupted_cave', discovery: 'meditative_examination' },
                    { clue: 'daily_practice_reconstruction', location: 'cave_meditation_spot', discovery: 'practice_reenactment' },
                    { clue: 'spiritual_progression_timeline', location: 'journal_fragments', discovery: 'chronological_study' },
                    { clue: 'sacrifice_decision_moment', location: 'cave_altar', discovery: 'empathetic_understanding' },
                    { revelation: 'conscious_suffering_teaching', reward: 'compassionate_sacrifice_wisdom' }
                ]
            },
            
            temple_builders: {
                name: 'The Architects of Consciousness',
                startingClue: 'sacred_geometry_patterns',
                totalStages: 8,
                revelationPath: [
                    { clue: 'sacred_geometry_patterns', location: 'temple_entrance', discovery: 'mathematical_analysis' },
                    { clue: 'builder_civilization_traces', location: 'temple_foundation', discovery: 'archaeological_study' },
                    { clue: 'cosmic_alignment_purpose', location: 'temple_apex', discovery: 'astronomical_observation' },
                    { clue: 'consciousness_technology_evidence', location: 'inner_sanctum', discovery: 'technology_recognition' },
                    { clue: 'builder_ascension_records', location: 'akashic_chamber', discovery: 'record_access' },
                    { clue: 'departure_preparation_signs', location: 'departure_platform', discovery: 'preparation_understanding' },
                    { clue: 'return_prophecy_encoding', location: 'prophecy_chamber', discovery: 'prophecy_decoding' },
                    { revelation: 'builders_return_preparation', reward: 'cosmic_architect_understanding' }
                ]
            }
        };
    }
    
    initializeTreasureHunts() {
        return {
            wisdom_gems: {
                name: 'The Scattered Gems of Wisdom',
                description: 'Ancient knowledge crystallized into physical form',
                totalTreasures: 27, // One for each Nakshatra
                huntType: 'philosophical_understanding',
                treasures: this.generateWisdomGems(),
                completionReward: 'omniscient_wisdom_crown'
            },
            
            sacred_artifacts: {
                name: 'Artifacts of the Awakened',
                description: 'Tools left behind by enlightened beings',
                totalTreasures: 12,
                huntType: 'spiritual_development',
                treasures: this.generateSacredArtifacts(),
                completionReward: 'enlightened_masters_blessing'
            },
            
            hidden_teachings: {
                name: 'Secret Teachings of the Sages',
                description: 'Concealed wisdom for advanced practitioners',
                totalTreasures: 8,
                huntType: 'consciousness_expansion',
                treasures: this.generateHiddenTeachings(),
                completionReward: 'direct_transmission_ability'
            }
        };
    }
    
    initializePhilosophicalMysteries() {
        return {
            nature_of_reality: {
                name: 'What is the True Nature of Reality?',
                investigationPath: [
                    'examine_maya_illusions',
                    'study_consciousness_primacy', 
                    'experience_non_dual_awareness',
                    'integrate_relative_absolute_truth'
                ],
                finalRealization: 'reality_is_consciousness_itself',
                wisdom: 'All apparent multiplicity is the play of one infinite consciousness'
            },
            
            purpose_of_suffering: {
                name: 'Why Does Suffering Exist?',
                investigationPath: [
                    'observe_attachment_patterns',
                    'understand_ego_construction',
                    'recognize_resistance_futility',
                    'discover_suffering_as_teacher'
                ],
                finalRealization: 'suffering_as_awakening_catalyst',
                wisdom: 'Suffering is consciousness forgetting its true nature and the path back home'
            },
            
            meaning_of_death: {
                name: 'What is Death Really?',
                investigationPath: [
                    'contemplate_impermanence',
                    'study_consciousness_continuity',
                    'experience_ego_dissolution',
                    'recognize_deathless_awareness'
                ],
                finalRealization: 'death_as_transformation_illusion',
                wisdom: 'Death is the dropping of limitations, not the end of being'
            },
            
            path_to_liberation: {
                name: 'How Does One Achieve True Liberation?',
                investigationPath: [
                    'practice_self_inquiry',
                    'dissolve_false_identifications',
                    'surrender_personal_will',
                    'recognize_natural_freedom'
                ],
                finalRealization: 'liberation_as_recognition_not_achievement',
                wisdom: 'Liberation is recognizing what you already are, not becoming something new'
            }
        };
    }
    
    generateWisdomGems() {
        const nakshatras = [
            'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha',
            'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha',
            'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishtha', 'Shatabhisha',
            'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
        ];
        
        return nakshatras.map((nakshatra, index) => ({
            id: `wisdom_gem_${nakshatra.toLowerCase()}`,
            name: `${nakshatra} Wisdom Gem`,
            description: `A crystallized essence of ${nakshatra}'s cosmic wisdom`,
            location: this.generateRandomLocation(),
            discoveryMethod: this.generateDiscoveryMethod(nakshatra),
            wisdom: this.generateNakshatraWisdom(nakshatra),
            power: this.generateNakshatraPower(nakshatra)
        }));
    }
    
    generateSacredArtifacts() {
        const artifacts = [
            { name: 'Meditation Bowl of Silence', power: 'deep_stillness_access' },
            { name: 'Prayer Beads of Intention', power: 'manifestation_focus' },
            { name: 'Singing Bowl of Harmony', power: 'energy_balancing' },
            { name: 'Crystal of Clear Seeing', power: 'truth_perception' },
            { name: 'Flame of Inner Light', power: 'illumination_guidance' },
            { name: 'Water of Purification', power: 'karmic_cleansing' },
            { name: 'Staff of Spiritual Authority', power: 'dharmic_leadership' },
            { name: 'Mirror of Self-Knowledge', power: 'shadow_integration' },
            { name: 'Key of Hidden Doorways', power: 'secret_access' },
            { name: 'Compass of True Direction', power: 'life_path_guidance' },
            { name: 'Scroll of Ancient Wisdom', power: 'knowledge_downloading' },
            { name: 'Crown of Enlightenment', power: 'consciousness_expansion' }
        ];
        
        return artifacts.map((artifact, index) => ({
            id: `artifact_${index + 1}`,
            ...artifact,
            location: this.generateRandomLocation(),
            discoveryMethod: this.generateArtifactDiscovery(artifact),
            activation: this.generateActivationMethod(artifact)
        }));
    }
    
    generateHiddenTeachings() {
        const teachings = [
            { name: 'The Paradox of Seeking', wisdom: 'What you seek is what is seeking' },
            { name: 'The Illusion of Progress', wisdom: 'You are already what you are trying to become' },
            { name: 'The Secret of Surrender', wisdom: 'Letting go is not loss but return to wholeness' },
            { name: 'The Truth of Time', wisdom: 'All of eternity exists in this single moment' },
            { name: 'The Nature of Love', wisdom: 'Love is not an emotion but the fabric of reality' },
            { name: 'The Mystery of Consciousness', wisdom: 'You are the awareness in which all experience appears' },
            { name: 'The Cosmic Joke', wisdom: 'The one who asks "Who am I?" is the answer' },
            { name: 'The Final Understanding', wisdom: 'There is nothing to understand and no one to understand it' }
        ];
        
        return teachings.map((teaching, index) => ({
            id: `teaching_${index + 1}`,
            ...teaching,
            location: this.generateRandomLocation(),
            discoveryMethod: this.generateTeachingDiscovery(teaching),
            integration: this.generateIntegrationMethod(teaching)
        }));
    }
    
    // Enhanced discovery and interaction systems
    examineEnvironmentCarefully(location, element) {
        const examinationKey = `${location}_${element}_examination`;
        let examinationCount = this.discoveredClues.get(examinationKey) || 0;
        examinationCount++;
        this.discoveredClues.set(examinationKey, examinationCount);
        
        // Progressive revelation based on examination count
        const revelations = this.getProgressiveRevelations(location, element, examinationCount);
        
        // Check if this triggers any mystery chain progression
        this.checkMysteryChainProgression(location, element, examinationCount);
        
        // Update revelation layer accessibility
        this.updateRevelationLayers();
        
        return {
            newRevelations: revelations,
            totalExaminations: examinationCount,
            newSecretsUnlocked: this.checkForNewSecrets(location, element, examinationCount)
        };
    }
    
    getProgressiveRevelations(location, element, count) {
        const revelationDatabase = {
            'DHARMAPURA_SQUARE_ancient_stones': {
                1: "The stones are arranged in a perfect mandala pattern, each one carefully placed.",
                3: "You notice subtle Sanskrit inscriptions carved into the stones, worn by time but still visible.",
                5: "The inscriptions tell fragments of a story about a great catastrophe and a sanctuary.",
                8: "Touching the stones in a specific sequence, you feel a subtle energy resonance.",
                12: "The stones begin to glow faintly, revealing their role as a protective ward for the village."
            },
            
            'BANYAN_TREE_root_system': {
                1: "The root system extends far beyond what's visible, creating an underground network.",
                3: "Some roots pulse with a subtle rhythm, like a slow, deep heartbeat.",
                5: "You sense that the roots are connected to other trees, forming a communication network.",
                8: "Placing your hands on the roots, you receive flashes of memories from the tree's long life.",
                12: "The entire root network lights up in your perception, revealing a planetary consciousness grid."
            },
            
            'CORRUPTED_CAVE_hermit_belongings': {
                1: "Simple belongings of a spiritual seeker: a meditation mat, prayer beads, and a worn journal.",
                3: "The journal contains daily entries tracking a profound spiritual transformation.",
                5: "The final entries speak of a growing awareness of the cave's corruption and a difficult choice.",
                8: "You realize the hermit deliberately took on the cave's negative energy to prevent it from spreading.",
                12: "The hermit's sacrifice was an act of conscious love, transforming the corruption through compassionate absorption."
            }
        };
        
        const locationKey = `${location}_${element}`;
        const revelations = revelationDatabase[locationKey] || {};
        
        return Object.entries(revelations)
            .filter(([threshold]) => parseInt(threshold) === count)
            .map(([, revelation]) => revelation);
    }
    
    checkMysteryChainProgression(location, element, count) {
        Object.entries(this.mysteryChains).forEach(([mysteryId, mystery]) => {
            mystery.revelationPath.forEach((stage, index) => {
                if (stage.location === location && 
                    stage.discovery === element && 
                    count >= (stage.requiredExaminations || 3)) {
                    
                    this.progressMysteryChain(mysteryId, index);
                }
            });
        });
    }
    
    progressMysteryChain(mysteryId, stageIndex) {
        const currentProgress = this.mysteryProgress.get(mysteryId) || 0;
        
        if (stageIndex === currentProgress) {
            this.mysteryProgress.set(mysteryId, stageIndex + 1);
            
            const mystery = this.mysteryChains[mysteryId];
            const completedStage = mystery.revelationPath[stageIndex];
            
            // Award clue discovery
            this.awardClueDiscovery(mysteryId, completedStage);
            
            // Check if mystery is complete
            if (stageIndex + 1 >= mystery.totalStages) {
                this.completeMysteryChain(mysteryId);
            }
            
            return true;
        }
        
        return false;
    }
    
    completeMysteryChain(mysteryId) {
        const mystery = this.mysteryChains[mysteryId];
        
        // Award final revelation
        this.awardMysteryCompletion(mysteryId, mystery);
        
        // Unlock new areas or abilities
        this.unlockMysteryRewards(mysteryId, mystery);
        
        // Trigger cinematic revelation
        this.triggerMysteryRevelationCinematic(mysteryId, mystery);
    }
    
    // Treasure hunting mechanics
    searchForTreasure(location, searchMethod) {
        const possibleTreasures = this.getTreasuresAtLocation(location);
        
        return possibleTreasures.filter(treasure => {
            return this.attemptTreasureDiscovery(treasure, searchMethod);
        });
    }
    
    getTreasuresAtLocation(location) {
        const allTreasures = [
            ...this.treasureHunts.wisdom_gems.treasures,
            ...this.treasureHunts.sacred_artifacts.treasures,
            ...this.treasureHunts.hidden_teachings.treasures
        ];
        
        return allTreasures.filter(treasure => 
            treasure.location === location && 
            !this.solvedPuzzles.has(treasure.id)
        );
    }
    
    attemptTreasureDiscovery(treasure, searchMethod) {
        const discoveryMethods = treasure.discoveryMethod;
        
        if (Array.isArray(discoveryMethods)) {
            return discoveryMethods.includes(searchMethod);
        } else {
            return discoveryMethods === searchMethod;
        }
    }
    
    // Philosophical mystery investigation
    investigatePhilosophicalMystery(mysteryId, investigationAction) {
        const mystery = this.philosophicalMysteries[mysteryId];
        if (!mystery) return null;
        
        const currentProgress = this.mysteryProgress.get(`philosophical_${mysteryId}`) || 0;
        const nextStep = mystery.investigationPath[currentProgress];
        
        if (nextStep === investigationAction) {
            const newProgress = currentProgress + 1;
            this.mysteryProgress.set(`philosophical_${mysteryId}`, newProgress);
            
            if (newProgress >= mystery.investigationPath.length) {
                return this.completePhilosophicalMystery(mysteryId, mystery);
            } else {
                return this.providePhilosophicalInsight(mysteryId, newProgress);
            }
        }
        
        return null;
    }
    
    completePhilosophicalMystery(mysteryId, mystery) {
        // Award the final realization
        this.gameStateManager.addSpecialItem({
            id: `realization_${mysteryId}`,
            name: `Realization: ${mystery.name}`,
            type: 'philosophical_understanding',
            description: mystery.wisdom,
            icon: '💡'
        });
        
        return {
            realization: mystery.finalRealization,
            wisdom: mystery.wisdom,
            transformationLevel: 'profound'
        };
    }
    
    // Meta-puzzle system (puzzles that span multiple locations/times)
    checkMetaPuzzleProgress() {
        // Check if player actions across different scenes form a meta-pattern
        const actionsPattern = this.getPlayerActionsPattern();
        
        Object.entries(this.metaPuzzles).forEach(([puzzleId, puzzle]) => {
            if (this.matchesMetaPattern(actionsPattern, puzzle.pattern)) {
                this.triggerMetaPuzzleResolution(puzzleId, puzzle);
            }
        });
    }
    
    getPlayerActionsPattern() {
        // Analyze player's choice patterns across the game
        const choices = this.gameStateManager.worldState.choiceHistory || [];
        return {
            compassionChoices: choices.filter(c => c.type === 'compassionate').length,
            wisdomChoices: choices.filter(c => c.type === 'wisdom').length,
            courageChoices: choices.filter(c => c.type === 'courage').length,
            meditationFrequency: this.gameStateManager.worldState.meditationCount || 0,
            helpingActions: choices.filter(c => c.helpsOthers).length
        };
    }
    
    // Secret area unlocking system
    checkSecretAreaUnlocks() {
        const unlockedAreas = [];
        
        // Check consciousness-based unlocks
        if (this.calculateConsciousnessLevel() >= 'transcendent') {
            if (!this.unlockedAreas.has('AKASHIC_LIBRARY')) {
                this.unlockSecretArea('AKASHIC_LIBRARY');
                unlockedAreas.push('AKASHIC_LIBRARY');
            }
        }
        
        // Check mystery completion unlocks
        if (this.mysteryProgress.get('village_origins') >= 7) {
            if (!this.unlockedAreas.has('ANCIENT_SANCTUARY')) {
                this.unlockSecretArea('ANCIENT_SANCTUARY');
                unlockedAreas.push('ANCIENT_SANCTUARY');
            }
        }
        
        // Check treasure hunt completion unlocks
        if (this.getTreasureHuntCompletionCount() >= 2) {
            if (!this.unlockedAreas.has('MASTERS_COUNCIL_CHAMBER')) {
                this.unlockSecretArea('MASTERS_COUNCIL_CHAMBER');
                unlockedAreas.push('MASTERS_COUNCIL_CHAMBER');
            }
        }
        
        return unlockedAreas;
    }
    
    unlockSecretArea(areaId) {
        this.unlockedAreas.add(areaId);
        
        // Add the area to the story engine's available scenes
        this.addSecretAreaToStory(areaId);
        
        // Create cinematic unlock sequence
        this.triggerAreaUnlockCinematic(areaId);
    }
    
    // Integration with main game systems
    updateMainGameState() {
        // Update game state with escape room progress
        this.gameStateManager.updateState('escape_room_discoveries', Object.fromEntries(this.discoveredClues));
        this.gameStateManager.updateState('mystery_progress', Object.fromEntries(this.mysteryProgress));
        this.gameStateManager.updateState('unlocked_areas', Array.from(this.unlockedAreas));
        this.gameStateManager.updateState('solved_puzzles', Array.from(this.solvedPuzzles));
    }
    
    // Utility methods
    calculateConsciousnessLevel() {
        const transformationDepth = this.gameStateManager.worldState.transformation_depth || 0;
        const spiritualInsights = this.gameStateManager.worldState.spiritual_insights || [];
        const mysteryCompletions = this.getMysteryCompletionCount();
        
        const consciousnessScore = transformationDepth + (spiritualInsights.length * 2) + (mysteryCompletions * 5);
        
        if (consciousnessScore >= 50) return 'transcendent';
        if (consciousnessScore >= 30) return 'creative';
        if (consciousnessScore >= 15) return 'responsive';
        return 'reactive';
    }
    
    getMysteryCompletionCount() {
        return Array.from(this.mysteryProgress.values()).filter(progress => progress >= 5).length;
    }
    
    getTreasureHuntCompletionCount() {
        let completedHunts = 0;
        
        Object.values(this.treasureHunts).forEach(hunt => {
            const foundTreasures = hunt.treasures.filter(treasure => 
                this.solvedPuzzles.has(treasure.id)
            ).length;
            
            if (foundTreasures >= hunt.totalTreasures * 0.8) { // 80% completion threshold
                completedHunts++;
            }
        });
        
        return completedHunts;
    }
    
    // Generate random content for dynamic treasure placement
    generateRandomLocation() {
        const locations = [
            'DHARMAPURA_SQUARE', 'BANYAN_TREE', 'RIVERBANK', 'CORRUPTED_CAVE',
            'TEMPLE_ENTRANCE', 'VILLAGE_BOUNDARY', 'FOREST_EDGE', 'HIDDEN_GROVE'
        ];
        return locations[Math.floor(Math.random() * locations.length)];
    }
    
    generateDiscoveryMethod(nakshatra) {
        const methods = {
            'Ashwini': 'healing_meditation_focus',
            'Bharani': 'transformation_ritual_participation',
            'Krittika': 'illusion_cutting_insight',
            // ... continue for all nakshatras
        };
        return methods[nakshatra] || 'deep_contemplation';
    }
    
    generateNakshatraWisdom(nakshatra) {
        const wisdoms = {
            'Ashwini': 'Swift healing comes not from rushing, but from perfect presence in the moment of need.',
            'Bharani': 'Every ending contains the seed of a new beginning. Embrace the transformative power of completion.',
            'Krittika': 'Truth cuts through illusion not with violence, but with the precision of absolute clarity.',
            // ... continue for all nakshatras
        };
        return wisdoms[nakshatra] || 'The stars hold infinite wisdom for those who learn to listen.';
    }
    
    generateNakshatraPower(nakshatra) {
        const powers = {
            'Ashwini': 'instant_healing_ability',
            'Bharani': 'transformation_mastery',
            'Krittika': 'truth_discernment',
            // ... continue for all nakshatras
        };
        return powers[nakshatra] || 'cosmic_connection_enhancement';
    }
}

// Export for use in the main game
window.UltraEnhancedEscapeRoomSystem = UltraEnhancedEscapeRoomSystem;

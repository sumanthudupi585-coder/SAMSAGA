/**
 * Ultra-Enhanced Escape Room & Treasure Hunt System
 * Transforms Act 1 into an engaging mystery adventure with hidden secrets,
 * interconnected clues, progressive revelation, and escape room mechanics
 */

class UltraEnhancedEscapeRoomSystem {
    constructor(gameStateManager, adventureEngine, progressionSystem, atmosphericSystem) {
        this.gameStateManager = gameStateManager;
        this.adventureEngine = adventureEngine;
        this.progressionSystem = progressionSystem;
        this.atmosphericSystem = atmosphericSystem;
        
        // Multi-layered mystery system
        this.mysteryLayers = {
            surface_mysteries: new Map(), // Immediately visible puzzles
            hidden_mysteries: new Map(),  // Require discovery to reveal
            deep_mysteries: new Map(),    // Require multiple clues/high consciousness
            cosmic_mysteries: new Map(),  // Ultimate secrets for advanced players
            meta_mysteries: new Map()     // Mysteries about the nature of mystery itself
        };
        
        // Interconnected clue network
        this.clueNetwork = {
            physical_clues: new Map(),      // Objects, inscriptions, symbols
            environmental_clues: new Map(), // Atmospheric hints, energy patterns
            temporal_clues: new Map(),      // Time-based revelations
            consciousness_clues: new Map(), // Only visible to developed awareness
            karmic_clues: new Map(),       // Based on player's choices/karma
            synchronicity_clues: new Map()  // Meaningful coincidences
        };
        
        // Progressive revelation system
        this.revelationSystem = {
            discovery_chains: new Map(),      // Sequences of discoveries
            understanding_layers: new Map(),  // Deepening comprehension levels
            wisdom_unlocks: new Map(),       // Insights that unlock new content
            consciousness_gates: new Map(),   // Barriers requiring spiritual development
            paradox_resolutions: new Map(),   // Non-linear puzzle solutions
            unity_recognitions: new Map()    // Ultimate understanding rewards
        };
        
        // Hidden area access system
        this.hiddenAreas = {
            secret_chambers: new Map(),       // Physical hidden spaces
            dimensional_pockets: new Map(),   // Consciousness-accessed areas
            temporal_windows: new Map(),      // Past/future accessible spaces
            astral_planes: new Map(),        // Out-of-body accessible areas
            dream_realms: new Map(),         // Sleep/meditation accessible spaces
            unity_fields: new Map()          // Non-dual awareness spaces
        };
        
        // Treasure & reward system
        this.treasureSystem = {
            wisdom_artifacts: new Map(),      // Items that contain teachings
            consciousness_keys: new Map(),    // Unlock spiritual abilities
            karmic_crystals: new Map(),      // Resolve past-life issues
            unity_symbols: new Map(),        // Represent non-dual understanding
            compassion_seeds: new Map(),     // Grow into service opportunities
            enlightenment_fragments: new Map() // Pieces of ultimate realization
        };
        
        // Interactive object system
        this.interactiveObjects = {
            puzzle_mechanisms: new Map(),     // Physical puzzle components
            consciousness_detectors: new Map(), // Respond to awareness level
            karmic_resonators: new Map(),    // React to moral alignment
            time_manipulators: new Map(),    // Affect temporal perception
            reality_shifters: new Map(),     // Change environmental state
            unity_manifesters: new Map()     // Create non-dual experiences
        };
        
        // Investigation system
        this.investigationSystem = {
            evidence_collection: new Set(),   // Gathered clues/evidence
            hypothesis_formation: new Map(),  // Player theories
            deduction_chains: new Map(),     // Logical reasoning paths
            intuitive_insights: new Map(),   // Non-rational understanding
            synthesis_moments: new Map(),    // Integration of multiple clues
            revelation_experiences: new Map() // Sudden understanding events
        };
        
        // Dynamic hint system
        this.hintSystem = {
            progressive_hints: new Map(),     // Increasingly specific guidance
            consciousness_hints: new Map(),   // Hints based on spiritual development
            karmic_guidance: new Map(),      // Hints based on past choices
            synchronistic_signs: new Map(),  // Meaningful coincidence hints
            environmental_whispers: new Map(), // Atmospheric hint delivery
            direct_knowing: new Map()        // Immediate understanding downloads
        };
        
        this.currentMysteryLevel = 1;
        this.totalMysteryLevels = 7;
        this.discoveredSecrets = new Set();
        this.activeInvestigations = new Map();
        this.unlockedAreas = new Set();
        
        this.init();
    }
    
    init() {
        this.initializeMysteryLayers();
        this.setupClueNetworks();
        this.createHiddenAreas();
        this.populateTreasureSystem();
        this.setupInteractiveObjects();
        this.activateInvestigationSystem();
        this.initializeDynamicHints();
        this.startEscapeRoomExperience();
        this.loadEscapeRoomState();
    }
    
    initializeMysteryLayers() {
        // Surface mysteries - immediately discoverable
        this.mysteryLayers.surface_mysteries.set('village_geometry_mystery', {
            title: 'The Sacred Geometry of Dharmapura',
            description: 'The village layout follows an ancient pattern. Understanding its meaning may unlock deeper secrets.',
            initial_clues: ['mandala_stone_patterns', 'building_placement_geometry', 'path_sacred_ratios'],
            investigation_methods: ['pattern_recognition', 'mathematical_analysis', 'spiritual_intuition'],
            required_consciousness: 0,
            rewards: ['geometric_understanding', 'mandala_activation_ability', 'sacred_space_recognition'],
            progression_unlock: 'hidden_shrine_access'
        });
        
        this.mysteryLayers.surface_mysteries.set('hermit_disappearance_mystery', {
            title: 'The Hermit\'s Sacrifice',
            description: 'A holy man vanished while trying to purify corruption. His belongings hold clues to his fate.',
            initial_clues: ['hermit_journal_fragments', 'abandoned_possessions', 'corruption_containment_evidence'],
            investigation_methods: ['object_examination', 'psychic_reading', 'karmic_trace_following'],
            required_consciousness: 10,
            rewards: ['purification_knowledge', 'sacrifice_understanding', 'containment_techniques'],
            progression_unlock: 'deep_cave_access'
        });
        
        // Hidden mysteries - require discovery to reveal
        this.mysteryLayers.hidden_mysteries.set('ancient_teaching_lineage', {
            title: 'The Forgotten Teaching Lineage',
            description: 'Hidden symbols throughout the village point to an ancient spiritual tradition.',
            discovery_trigger: 'decode_three_surface_mysteries',
            clues: ['hidden_symbols', 'architectural_codes', 'energy_signature_patterns'],
            investigation_methods: ['symbol_decoding', 'historical_research', 'akashic_record_access'],
            required_consciousness: 30,
            rewards: ['lineage_connection', 'ancient_meditation_techniques', 'wisdom_transmission_ability'],
            progression_unlock: 'astral_library_access'
        });
        
        this.mysteryLayers.hidden_mysteries.set('consciousness_evolution_experiment', {
            title: 'The Great Consciousness Experiment',
            description: 'The entire village may be a designed environment for accelerating spiritual evolution.',
            discovery_trigger: 'achieve_25_consciousness_level',
            clues: ['environmental_design_purpose', 'consciousness_acceleration_mechanisms', 'experiment_documentation'],
            investigation_methods: ['meta_analysis', 'consciousness_archaeology', 'purpose_recognition'],
            required_consciousness: 50,
            rewards: ['experiment_understanding', 'acceleration_techniques', 'designer_contact'],
            progression_unlock: 'cosmic_laboratory_access'
        });
        
        // Deep mysteries - require high consciousness or multiple mystery solutions
        this.mysteryLayers.deep_mysteries.set('reality_nature_revelation', {
            title: 'The Nature of Reality Itself',
            description: 'All mysteries point to a fundamental truth about the nature of existence.',
            discovery_trigger: 'solve_five_mysteries_and_achieve_60_consciousness',
            clues: ['reality_construction_evidence', 'consciousness_primacy_proofs', 'illusion_dissolution_keys'],
            investigation_methods: ['direct_inquiry', 'consciousness_investigation', 'reality_examination'],
            required_consciousness: 75,
            rewards: ['reality_understanding', 'illusion_piercing_ability', 'truth_recognition'],
            progression_unlock: 'unity_chamber_access'
        });
        
        // Cosmic mysteries - ultimate secrets
        this.mysteryLayers.cosmic_mysteries.set('the_one_mystery', {
            title: 'The Mystery of Consciousness Itself',
            description: 'The ultimate mystery: What is the consciousness that investigates all mysteries?',
            discovery_trigger: 'solve_all_other_mysteries_and_achieve_90_consciousness',
            clues: ['self_inquiry_pointers', 'awareness_investigation_tools', 'being_recognition_keys'],
            investigation_methods: ['self_inquiry', 'awareness_investigation', 'being_recognition'],
            required_consciousness: 95,
            rewards: ['self_realization', 'mystery_dissolution', 'ultimate_understanding'],
            progression_unlock: 'game_transcendence'
        });
        
        // Meta mysteries - about the nature of mystery itself
        this.mysteryLayers.meta_mysteries.set('why_mysteries_exist', {
            title: 'Why Do Mysteries Exist?',
            description: 'The deepest question: Why does consciousness create the appearance of mysteries to solve?',
            discovery_trigger: 'achieve_meta_cognitive_awareness',
            clues: ['play_of_consciousness', 'hide_and_seek_understanding', 'joy_of_discovery_recognition'],
            investigation_methods: ['meta_inquiry', 'play_recognition', 'joy_investigation'],
            required_consciousness: 85,
            rewards: ['play_understanding', 'mystery_appreciation', 'cosmic_humor_recognition'],
            progression_unlock: 'infinite_mystery_access'
        });
    }
    
    setupClueNetworks() {
        // Physical clues scattered throughout the environment
        this.clueNetwork.physical_clues.set('mandala_stone_sequence', {
            type: 'pattern_recognition',
            location: 'DHARMAPURA_SQUARE',
            description: 'Ancient stones arranged in a specific sequence that encodes spiritual teachings.',
            interaction_methods: ['visual_examination', 'touch_sequence', 'meditation_beside'],
            clue_content: {
                'visual': 'The stones form a Fibonacci spiral when viewed from above.',
                'touch': 'Each stone vibrates at a different frequency when touched in sequence.',
                'meditation': 'The pattern downloads directly into consciousness during meditation.'
            },
            connected_mysteries: ['village_geometry_mystery', 'ancient_teaching_lineage'],
            consciousness_reveals: {
                25: 'Mathematical perfection becomes visually apparent',
                50: 'Spiritual significance of each ratio is understood',
                75: 'The pattern is recognized as a map of consciousness evolution'
            }
        });
        
        this.clueNetwork.physical_clues.set('hermit_journal_fragments', {
            type: 'textual_evidence',
            location: 'CORRUPTED_CAVE',
            description: 'Torn pages from the hermit\'s journal describing his purification attempts.',
            interaction_methods: ['careful_reading', 'psychic_impression', 'karmic_resonance'],
            clue_content: {
                'reading': 'Progressive desperation as conventional methods fail.',
                'psychic': 'Emotional imprints of determination and eventual peace.',
                'karmic': 'Understanding of his karmic purpose and willing sacrifice.'
            },
            connected_mysteries: ['hermit_disappearance_mystery', 'consciousness_evolution_experiment'],
            reconstruction_puzzle: true,
            complete_message: 'The darkness cannot be fought - it must be understood and loved.'
        });
        
        // Environmental clues embedded in the atmosphere
        this.clueNetwork.environmental_clues.set('energy_flow_patterns', {
            type: 'energy_detection',
            requires_ability: 'spiritual_sight',
            description: 'Subtle energy currents that reveal the underlying structure of reality.',
            detection_methods: ['energy_sensitivity', 'aura_vision', 'consciousness_expansion'],
            pattern_meanings: {
                'spiral_flows': 'Indicates evolution and growth points',
                'geometric_nodes': 'Shows power accumulation areas',
                'disrupted_streams': 'Reveals areas needing healing',
                'unity_fields': 'Marks places of transcendent potential'
            },
            dynamic_changes: true,
            player_interaction_affects: true
        });
        
        // Consciousness-based clues only visible to developed awareness
        this.clueNetwork.consciousness_clues.set('akashic_impressions', {
            type: 'consciousness_archaeology',
            requires_consciousness: 40,
            description: 'Memory impressions left in the akashic field by past events.',
            access_methods: ['deep_meditation', 'consciousness_expansion', 'time_perception_shift'],
            impression_categories: {
                'teaching_moments': 'Great spiritual transmissions that occurred here',
                'awakening_events': 'Moments of enlightenment experienced by seekers',
                'sacrifice_memories': 'Records of selfless service and surrender',
                'unity_recognitions': 'Instances of non-dual realization'
            },
            integration_required: true,
            wisdom_downloads: true
        });
        
        // Synchronicity-based clues that appear as meaningful coincidences
        this.clueNetwork.synchronicity_clues.set('meaningful_coincidences', {
            type: 'synchronicity_recognition',
            appears_randomly: true,
            consciousness_correlation: 'higher_consciousness_increases_frequency',
            manifestation_types: [
                'number_patterns_appearing_in_environment',
                'symbolic_animal_appearances',
                'overheard_conversations_with_relevant_content',
                'objects_appearing_in_meaningful_arrangements',
                'weather_changes_synchronizing_with_insights'
            ],
            interpretation_skill: 'develops_with_practice',
            guidance_quality: 'subtle_but_profound'
        });
    }
    
    createHiddenAreas() {
        // Secret chambers accessible through physical discovery
        this.hiddenAreas.secret_chambers.set('hidden_meditation_cave', {
            access_method: 'solve_mandala_stone_sequence',
            location: 'behind_banyan_tree',
            description: 'A natural cave enhanced with sacred geometry for meditation practice.',
            contents: [
                'ancient_meditation_cushions',
                'carved_Sanskrit_mantras',
                'crystal_formations_tuned_to_chakras',
                'wisdom_artifact_inner_peace_crystal'
            ],
            special_properties: {
                'meditation_amplification': 'doubles_consciousness_development_rate',
                'healing_acceleration': 'rapid_emotional_and_spiritual_healing',
                'insight_enhancement': 'prophetic_dreams_and_visions',
                'protection_field': 'safe_space_from_negative_influences'
            },
            guardian_spirit: 'ancient_meditation_master'
        });
        
        this.hiddenAreas.secret_chambers.set('akashic_library_ruins', {
            access_method: 'decode_ancient_teaching_lineage',
            location: 'beneath_wisdom_pillar',
            description: 'Ruins of an ancient library containing the akashic records of all who have sought wisdom here.',
            contents: [
                'consciousness_crystalline_data_storage',
                'wisdom_transmission_apparatus',
                'evolutionary_timeline_displays',
                'individual_soul_journey_records'
            ],
            special_properties: {
                'knowledge_access': 'any_question_can_be_researched',
                'past_life_viewing': 'see_your_own_spiritual_evolution',
                'future_possibility_glimpses': 'potential_spiritual_destinations',
                'collective_wisdom': 'access_understanding_of_all_past_seekers'
            },
            consciousness_requirement: 50
        });
        
        // Dimensional pockets accessible through consciousness expansion
        this.hiddenAreas.dimensional_pockets.set('consciousness_laboratory', {
            access_method: 'expand_consciousness_beyond_personal_boundaries',
            dimension: 'fourth_dimensional_overlay',
            description: 'A space where consciousness can experiment with different states and possibilities.',
            contents: [
                'consciousness_state_modulators',
                'reality_perception_adjusters',
                'time_dilation_chambers',
                'unity_experience_generators'
            ],
            experiments_available: [
                'ego_dissolution_practice',
                'past_life_exploration',
                'future_self_communication',
                'parallel_reality_observation',
                'cosmic_consciousness_sampling'
            ],
            consciousness_requirement: 60
        });
        
        // Astral planes accessible through out-of-body states
        this.hiddenAreas.astral_planes.set('celestial_council_chamber', {
            access_method: 'achieve_astral_projection',
            plane: 'higher_astral',
            description: 'A council chamber where enlightened beings guide the spiritual evolution of seekers.',
            inhabitants: [
                'ascended_spiritual_masters',
                'angelic_guidance_beings',
                'evolved_human_consciousness',
                'cosmic_intelligence_representatives'
            ],
            available_guidance: [
                'personalized_spiritual_direction',
                'karmic_pattern_healing',
                'life_purpose_clarification',
                'cosmic_perspective_transmission'
            ],
            consciousness_requirement: 70
        });
        
        // Unity fields accessible only through non-dual awareness
        this.hiddenAreas.unity_fields.set('the_heart_of_existence', {
            access_method: 'recognize_ultimate_nature_of_consciousness',
            nature: 'non_local_field_of_pure_awareness',
            description: 'The source and substance of all existence, where all mysteries dissolve into understanding.',
            experience_qualities: [
                'infinite_peace_beyond_understanding',
                'love_that_encompasses_all_beings',
                'wisdom_that_sees_through_all_illusions',
                'joy_of_pure_existence',
                'freedom_from_all_limitations'
            ],
            revelations_available: [
                'true_nature_of_self',
                'purpose_of_spiritual_journey',
                'meaning_of_all_experiences',
                'unity_of_all_existence',
                'source_of_all_peace_and_love'
            ],
            consciousness_requirement: 95,
            permanent_transformation: true
        });
    }
    
    populateTreasureSystem() {
        // Wisdom artifacts that contain spiritual teachings
        this.treasureSystem.wisdom_artifacts.set('scroll_of_self_inquiry', {
            discovery_location: 'hidden_meditation_cave',
            appearance: 'Ancient palm leaf manuscript with Sanskrit verses',
            teaching_content: 'Progressive questions for investigating the nature of the self',
            interaction_method: 'contemplative_study',
            wisdom_unlock: 'self_inquiry_methodology',
            consciousness_effect: '+15 wisdom_embodiment',
            special_ability: 'ability_to_question_any_belief_or_assumption',
            preservation_requirement: 'regular_practice_of_teachings'
        });
        
        this.treasureSystem.consciousness_keys.set('crystal_of_third_eye_opening', {
            discovery_location: 'akashic_library_ruins',
            appearance: 'Indigo crystal that pulses with inner light',
            function: 'Activates and enhances spiritual sight abilities',
            activation_method: 'meditation_while_holding_crystal',
            consciousness_effect: '+25 spiritual_awareness',
            special_ability: 'see_energy_patterns_and_auras',
            side_effects: 'initial_overwhelm_from_expanded_perception',
            integration_time: '7_days_of_gradual_adjustment'
        });
        
        this.treasureSystem.karmic_crystals.set('gem_of_forgiveness', {
            discovery_location: 'consciousness_laboratory',
            appearance: 'Rose quartz infused with golden light',
            function: 'Dissolves karmic debt through genuine forgiveness',
            activation_method: 'heart_centered_forgiveness_practice',
            karmic_effect: 'clears_negative_karma_through_compassion',
            special_ability: 'transmute_resentment_into_understanding',
            healing_range: 'extends_to_past_lives_and_future_incarnations',
            consciousness_requirement: 40
        });
        
        this.treasureSystem.unity_symbols.set('mandala_of_infinite_connection', {
            discovery_location: 'celestial_council_chamber',
            appearance: 'Living geometric pattern that shifts and evolves',
            function: 'Reveals the interconnectedness of all existence',
            contemplation_method: 'meditative_absorption_into_pattern',
            consciousness_effect: '+30 mystical_attunement',
            revelation: 'direct_experience_of_unity_consciousness',
            integration_challenge: 'maintaining_unity_awareness_in_daily_life',
            mastery_reward: 'permanent_unity_perception'
        });
        
        this.treasureSystem.enlightenment_fragments.set('spark_of_original_awareness', {
            discovery_location: 'the_heart_of_existence',
            appearance: 'Point of pure light that contains infinite depth',
            function: 'Direct transmission of enlightened understanding',
            reception_method: 'complete_ego_surrender',
            consciousness_effect: 'quantum_leap_in_spiritual_development',
            transformation: 'fundamental_shift_in_identity_and_perception',
            integration_requirement: 'total_life_restructuring',
            final_realization: 'recognition_of_what_you_always_already_are'
        });
    }
    
    setupInteractiveObjects() {
        // Puzzle mechanisms that respond to different interaction types
        this.interactiveObjects.puzzle_mechanisms.set('consciousness_resonance_device', {
            location: 'DHARMAPURA_SQUARE',
            appearance: 'Crystalline structure that hums with barely audible tones',
            interaction_types: {
                'thought_projection': 'device_responds_to_mental_intentions',
                'emotional_resonance': 'heart_energy_activates_different_functions',
                'consciousness_focus': 'concentrated_awareness_unlocks_hidden_features'
            },
            functions: {
                'consciousness_level_detection': 'displays_current_spiritual_development',
                'energy_pattern_analysis': 'shows_aura_and_chakra_state',
                'karmic_reading': 'reveals_current_karmic_patterns',
                'future_potential_glimpse': 'brief_visions_of_possible_spiritual_destinations'
            },
            upgrade_path: 'consciousness_development_unlocks_new_functions'
        });
        
        // Objects that detect and respond to consciousness level
        this.interactiveObjects.consciousness_detectors.set('awareness_mirror', {
            location: 'hidden_meditation_cave',
            appearance: 'Mirror that reflects not physical form but consciousness itself',
            consciousness_responses: {
                0: 'reflects_confusion_and_searching',
                25: 'shows_awakening_light_in_the_eyes',
                50: 'reflects_peaceful_presence_and_wisdom',
                75: 'shows_radiant_compassion_and_understanding',
                100: 'reflects_pure_awareness_itself'
            },
            teaching_method: 'mirror_provides_visual_feedback_on_spiritual_progress',
            integration_tool: 'helps_student_recognize_their_own_development',
            advanced_function: 'shows_the_formless_awareness_that_observes_all_forms'
        });
        
        // Karmic resonators that react to moral alignment
        this.interactiveObjects.karmic_resonators.set('justice_scales_of_ma_at', {
            location: 'akashic_library_ruins',
            appearance: 'Ancient scales that weigh hearts against the feather of truth',
            karma_responses: {
                'negative_karma': 'scales_tip_heavily_showing_burden_of_unconscious_actions',
                'neutral_karma': 'scales_balance_showing_equal_positive_and_negative',
                'positive_karma': 'scales_tip_toward_light_showing_service_and_compassion',
                'transcendent_karma': 'scales_dissolve_showing_movement_beyond_duality'
            },
            purification_function: 'provides_specific_guidance_for_karmic_healing',
            teaching_revelation: 'ultimately_shows_that_karma_is_a_tool_for_learning_love'
        });
        
        // Reality shifters that change environmental state
        this.interactiveObjects.reality_shifters.set('perception_altar', {
            location: 'consciousness_laboratory',
            appearance: 'Crystalline altar that responds to different states of consciousness',
            reality_shifts: {
                'ordinary_consciousness': 'environment_appears_normal_and_physical',
                'expanded_awareness': 'energy_patterns_become_visible',
                'unity_consciousness': 'all_boundaries_become_transparent',
                'cosmic_consciousness': 'environment_reveals_itself_as_pure_awareness'
            },
            interaction_method: 'place_hands_on_altar_while_in_different_consciousness_states',
            teaching_function: 'demonstrates_how_consciousness_creates_experienced_reality',
            mastery_goal: 'learn_to_shift_perception_without_external_device'
        });
    }
    
    activateInvestigationSystem() {
        // Evidence collection system
        this.createEvidenceTracker();
        
        // Hypothesis formation interface
        this.createHypothesisInterface();
        
        // Deduction chain visualizer
        this.createDeductionVisualizer();
        
        // Synthesis moment recognizer
        this.createSynthesisTracker();
        
        // Investigation progress monitor
        this.createProgressMonitor();
    }
    
    createEvidenceTracker() {
        const evidenceTracker = document.createElement('div');
        evidenceTracker.id = 'evidence-tracker';
        evidenceTracker.className = 'evidence-tracker';
        evidenceTracker.innerHTML = `
            <div class="tracker-header">
                <div class="tracker-title">🔍 Investigation Evidence</div>
                <button class="tracker-toggle" id="evidence-toggle">📂</button>
            </div>
            <div class="evidence-content" id="evidence-content">
                <div class="evidence-categories">
                    <div class="evidence-category" data-category="physical">
                        <div class="category-title">📦 Physical Evidence</div>
                        <div class="evidence-items" id="physical-evidence"></div>
                    </div>
                    <div class="evidence-category" data-category="environmental">
                        <div class="category-title">🌿 Environmental Clues</div>
                        <div class="evidence-items" id="environmental-evidence"></div>
                    </div>
                    <div class="evidence-category" data-category="consciousness">
                        <div class="category-title">💭 Consciousness Insights</div>
                        <div class="evidence-items" id="consciousness-evidence"></div>
                    </div>
                    <div class="evidence-category" data-category="synchronicity">
                        <div class="category-title">✨ Synchronicities</div>
                        <div class="evidence-items" id="synchronicity-evidence"></div>
                    </div>
                </div>
                
                <div class="evidence-connections">
                    <div class="connections-title">🕸️ Evidence Connections</div>
                    <canvas id="evidence-connections-canvas" width="400" height="200"></canvas>
                </div>
            </div>
        `;
        
        evidenceTracker.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 350px;
            background: rgba(13, 11, 8, 0.95);
            border: 2px solid rgba(255, 197, 143, 0.3);
            border-radius: 12px;
            backdrop-filter: blur(15px);
            z-index: 1000;
            font-family: 'Jost', sans-serif;
            color: #dcd1c7;
        `;
        
        document.body.appendChild(evidenceTracker);
        
        // Setup toggle functionality
        document.getElementById('evidence-toggle').addEventListener('click', () => {
            const content = document.getElementById('evidence-content');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    collectEvidence(evidenceId, evidenceData) {
        // Add evidence to the investigation system
        this.investigationSystem.evidence_collection.add(evidenceId);
        
        // Display evidence in tracker
        this.displayEvidence(evidenceData);
        
        // Check for new connections
        this.checkEvidenceConnections();
        
        // Update hypothesis formation
        this.updateHypotheses();
        
        // Check for synthesis moments
        this.checkForSynthesis();
        
        // Provide investigation feedback
        this.provideInvestigationFeedback(`Evidence collected: ${evidenceData.name}`);
    }
    
    displayEvidence(evidenceData) {
        const categoryContainer = document.getElementById(`${evidenceData.category}-evidence`);
        if (!categoryContainer) return;
        
        const evidenceElement = document.createElement('div');
        evidenceElement.className = 'evidence-item';
        evidenceElement.innerHTML = `
            <div class="evidence-header">
                <div class="evidence-icon">${evidenceData.icon || '📋'}</div>
                <div class="evidence-name">${evidenceData.name}</div>
            </div>
            <div class="evidence-description">${evidenceData.description}</div>
            <div class="evidence-significance">${evidenceData.significance || ''}</div>
        `;
        
        evidenceElement.style.cssText = `
            margin-bottom: 0.8rem;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 6px;
            border-left: 3px solid ${evidenceData.color || '#ffc58f'};
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        evidenceElement.addEventListener('click', () => {
            this.examineEvidence(evidenceData);
        });
        
        categoryContainer.appendChild(evidenceElement);
    }
    
    examineEvidence(evidenceData) {
        // Create detailed evidence examination modal
        const modal = document.createElement('div');
        modal.className = 'evidence-examination-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">🔍 Evidence Examination: ${evidenceData.name}</div>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="evidence-details">
                        <div class="detail-section">
                            <h4>Description</h4>
                            <p>${evidenceData.description}</p>
                        </div>
                        
                        <div class="detail-section">
                            <h4>Analysis Methods</h4>
                            <div class="analysis-options">
                                ${evidenceData.analysis_methods?.map(method => 
                                    `<button class="analysis-btn" data-method="${method}">${this.formatMethodName(method)}</button>`
                                ).join('') || '<p>No special analysis available</p>'}
                            </div>
                        </div>
                        
                        <div class="detail-section" id="analysis-results">
                            <h4>Analysis Results</h4>
                            <div class="results-content">Select an analysis method above.</div>
                        </div>
                        
                        <div class="detail-section">
                            <h4>Connections</h4>
                            <div class="evidence-connections">
                                ${this.getEvidenceConnections(evidenceData.id).map(connection => 
                                    `<div class="connection-item">${connection}</div>`
                                ).join('') || '<p>No connections discovered yet.</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        `;
        
        document.body.appendChild(modal);
        
        // Setup analysis method handlers
        modal.querySelectorAll('.analysis-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const method = e.target.dataset.method;
                this.performEvidenceAnalysis(evidenceData, method);
            });
        });
        
        // Setup modal close
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    performEvidenceAnalysis(evidenceData, method) {
        const resultsContainer = document.querySelector('#analysis-results .results-content');
        if (!resultsContainer) return;
        
        // Check if player has required abilities for this analysis method
        const requiredAbility = this.getRequiredAbilityForMethod(method);
        if (requiredAbility && !this.hasRequiredAbility(requiredAbility)) {
            resultsContainer.innerHTML = `
                <div class="analysis-requirement">
                    <p>This analysis method requires: <strong>${this.formatAbilityName(requiredAbility)}</strong></p>
                    <p>Continue your spiritual development to unlock this capability.</p>
                </div>
            `;
            return;
        }
        
        // Perform the analysis
        const analysisResult = this.getAnalysisResult(evidenceData, method);
        resultsContainer.innerHTML = `
            <div class="analysis-result">
                <div class="result-content">${analysisResult.content}</div>
                ${analysisResult.new_clues ? 
                    `<div class="new-clues">
                        <h5>New Clues Discovered:</h5>
                        <ul>${analysisResult.new_clues.map(clue => `<li>${clue}</li>`).join('')}</ul>
                    </div>` : ''
                }
                ${analysisResult.connections ? 
                    `<div class="new-connections">
                        <h5>New Connections:</h5>
                        <ul>${analysisResult.connections.map(conn => `<li>${conn}</li>`).join('')}</ul>
                    </div>` : ''
                }
            </div>
        `;
        
        // Award investigation experience
        if (this.progressionSystem) {
            this.progressionSystem.awardExperience('mystical_attunement', 10, 'evidence_analysis');
        }
        
        // Check for breakthrough moments
        if (analysisResult.breakthrough) {
            this.triggerInvestigationBreakthrough(analysisResult.breakthrough);
        }
    }
    
    checkForSynthesis() {
        // Check if collected evidence creates synthesis opportunities
        const evidenceCount = this.investigationSystem.evidence_collection.size;
        const connectionStrength = this.calculateConnectionStrength();
        
        if (evidenceCount >= 3 && connectionStrength > 0.7) {
            this.triggerSynthesisMoment();
        }
    }
    
    triggerSynthesisMoment() {
        // Create synthesis experience
        const synthesisModal = document.createElement('div');
        synthesisModal.className = 'synthesis-moment-modal';
        synthesisModal.innerHTML = `
            <div class="synthesis-content">
                <div class="synthesis-header">
                    <div class="synthesis-icon">💡</div>
                    <div class="synthesis-title">Synthesis Moment</div>
                </div>
                <div class="synthesis-body">
                    <p>The evidence you've collected suddenly clicks together in a moment of understanding...</p>
                    <div class="synthesis-revelation" id="synthesis-revelation">
                        <!-- Revelation content will be populated -->
                    </div>
                    <div class="synthesis-actions">
                        <button class="synthesis-accept-btn">Integrate Understanding</button>
                        <button class="synthesis-contemplate-btn">Contemplate Further</button>
                    </div>
                </div>
            </div>
        `;
        
        synthesisModal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.95), rgba(255, 197, 143, 0.9));
            color: #0d0b08;
            padding: 2rem;
            border-radius: 16px;
            border: 3px solid #d4af37;
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.8);
            z-index: 3000;
            text-align: center;
            max-width: 500px;
            animation: synthesis-appear 1s ease-out;
        `;
        
        document.body.appendChild(synthesisModal);
        
        // Generate synthesis revelation
        this.generateSynthesisRevelation();
        
        // Setup synthesis handlers
        synthesisModal.querySelector('.synthesis-accept-btn').addEventListener('click', () => {
            this.integrateSynthesis();
            synthesisModal.remove();
        });
        
        synthesisModal.querySelector('.synthesis-contemplate-btn').addEventListener('click', () => {
            this.contemplatesSynthesis();
            synthesisModal.remove();
        });
    }
    
    // Progressive hint system
    initializeDynamicHints() {
        this.hintSystem.progressive_hints.set('stuck_investigation', {
            triggers: ['no_progress_for_5_minutes', 'multiple_failed_attempts'],
            hint_levels: [
                'gentle_guidance_toward_overlooked_clue',
                'specific_direction_to_useful_analysis_method',
                'direct_suggestion_for_next_investigation_step',
                'philosophical_hint_about_investigation_approach',
                'spiritual_guidance_about_surrender_and_openness'
            ],
            delivery_methods: ['environmental_whisper', 'synchronicity_sign', 'consciousness_insight']
        });
        
        this.hintSystem.consciousness_hints.set('spiritual_development_guidance', {
            consciousness_thresholds: [25, 50, 75, 90],
            guidance_types: {
                25: 'hints_about_deeper_spiritual_practices',
                50: 'guidance_toward_non_dual_understanding',
                75: 'pointers_toward_direct_self_inquiry',
                90: 'transmission_of_final_understanding'
            },
            integration_support: true
        });
    }
    
    provideHint(hintType, playerState) {
        const hint = this.generateContextualHint(hintType, playerState);
        this.deliverHint(hint);
    }
    
    generateContextualHint(hintType, playerState) {
        // Generate hints based on player's current state and needs
        const consciousnessLevel = playerState.consciousness_level || 0;
        const currentLocation = playerState.current_location || 'DHARMAPURA_SQUARE';
        const investigationProgress = this.investigationSystem.evidence_collection.size;
        
        // Dynamic hint generation based on multiple factors
        if (investigationProgress === 0) {
            return {
                content: "Begin by examining your immediate surroundings. What patterns do you notice? What calls to your attention?",
                delivery: "environmental_whisper",
                follow_up: "trust_your_intuition"
            };
        } else if (investigationProgress < 3) {
            return {
                content: "Look deeper. Each clue connects to others. What relationships can you discover between what you've found?",
                delivery: "consciousness_insight",
                follow_up: "practice_synthesis_thinking"
            };
        } else if (consciousnessLevel < 25) {
            return {
                content: "Your spiritual development opens new ways of seeing. Consider meditation or contemplative practice.",
                delivery: "wisdom_download",
                follow_up: "spiritual_practice_guidance"
            };
        } else {
            return {
                content: "The ultimate clue is the consciousness that seeks all clues. Who or what is the investigator?",
                delivery: "direct_transmission",
                follow_up: "self_inquiry_guidance"
            };
        }
    }
    
    deliverHint(hint) {
        // Create hint delivery experience based on delivery method
        const deliveryMethods = {
            'environmental_whisper': () => this.createEnvironmentalWhisper(hint.content),
            'consciousness_insight': () => this.createConsciousnessInsight(hint.content),
            'wisdom_download': () => this.createWisdomDownload(hint.content),
            'direct_transmission': () => this.createDirectTransmission(hint.content),
            'synchronicity_sign': () => this.createSynchronicitySign(hint.content)
        };
        
        const deliveryMethod = deliveryMethods[hint.delivery];
        if (deliveryMethod) {
            deliveryMethod();
        }
    }
    
    createEnvironmentalWhisper(content) {
        // Subtle environmental hint delivery
        const whisper = document.createElement('div');
        whisper.className = 'environmental-whisper';
        whisper.textContent = content;
        whisper.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 197, 143, 0.1);
            border: 1px solid rgba(255, 197, 143, 0.3);
            border-radius: 8px;
            padding: 1rem 2rem;
            color: #ffc58f;
            font-style: italic;
            z-index: 1500;
            animation: whisper-fade-in-out 6s ease-in-out;
            max-width: 400px;
            text-align: center;
        `;
        
        document.body.appendChild(whisper);
        setTimeout(() => whisper.remove(), 6000);
    }
    
    // Utility methods
    formatMethodName(method) {
        return method.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    formatAbilityName(ability) {
        return ability.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    getRequiredAbilityForMethod(method) {
        const requirements = {
            'psychic_reading': 'mystical_attunement_25',
            'akashic_record_access': 'mystical_attunement_50',
            'consciousness_archaeology': 'spiritual_awareness_40',
            'karmic_trace_following': 'karmic_understanding_30',
            'energy_pattern_analysis': 'spiritual_perception_20'
        };
        return requirements[method];
    }
    
    hasRequiredAbility(requiredAbility) {
        // Check if player has the required ability level
        if (!this.progressionSystem) return true; // Default to allow if no progression system
        
        const [ability, levelStr] = requiredAbility.split('_').slice(0, -1).join('_').split('_');
        const level = parseInt(levelStr.slice(-2));
        
        const playerAbilities = this.progressionSystem.characterDimensions || {};
        const relevantDimension = this.getRelevantDimensionForAbility(ability);
        
        return (playerAbilities[relevantDimension]?.level || 0) >= (level || 0);
    }
    
    getRelevantDimensionForAbility(ability) {
        const mapping = {
            'mystical': 'mystical_attunement',
            'spiritual': 'spiritual_awareness',
            'karmic': 'karmic_understanding',
            'psychological': 'psychological_mastery'
        };
        return mapping[ability] || 'spiritual_awareness';
    }
    
    getAnalysisResult(evidenceData, method) {
        // Generate analysis results based on evidence and method
        const results = {
            'visual_examination': {
                content: `Careful visual analysis reveals ${evidenceData.visual_details || 'subtle patterns and symbols'}.`,
                new_clues: evidenceData.visual_clues || ['Pattern recognition enhanced'],
                connections: evidenceData.visual_connections || []
            },
            'psychic_reading': {
                content: `Psychic impression reveals ${evidenceData.psychic_impression || 'emotional and energetic imprints'}.`,
                new_clues: evidenceData.psychic_clues || ['Emotional history accessed'],
                connections: evidenceData.psychic_connections || [],
                breakthrough: evidenceData.psychic_breakthrough
            },
            'meditation_beside': {
                content: `Meditation reveals ${evidenceData.meditation_insight || 'deeper spiritual significance'}.`,
                new_clues: evidenceData.meditation_clues || ['Spiritual meaning understood'],
                connections: evidenceData.meditation_connections || [],
                breakthrough: evidenceData.meditation_breakthrough
            }
        };
        
        return results[method] || {
            content: 'Standard analysis yields basic information about this evidence.',
            new_clues: ['Basic understanding gained']
        };
    }
    
    getEvidenceConnections(evidenceId) {
        // Return connections for this evidence
        return Array.from(this.investigationSystem.evidence_collection)
            .filter(id => id !== evidenceId)
            .map(id => `Connected to: ${id}`)
            .slice(0, 3); // Limit display
    }
    
    calculateConnectionStrength() {
        // Calculate how well evidence pieces connect
        const evidenceCount = this.investigationSystem.evidence_collection.size;
        if (evidenceCount < 2) return 0;
        
        // Simplified connection strength calculation
        return Math.min(1, evidenceCount * 0.2);
    }
    
    provideInvestigationFeedback(message) {
        console.log(`Investigation: ${message}`);
        
        // Also could integrate with atmospheric system for environmental feedback
        if (this.atmosphericSystem) {
            // this.atmosphericSystem.provideFeedback(message);
        }
    }
    
    // Save/load escape room state
    saveEscapeRoomState() {
        const state = {
            currentMysteryLevel: this.currentMysteryLevel,
            discoveredSecrets: Array.from(this.discoveredSecrets),
            unlockedAreas: Array.from(this.unlockedAreas),
            investigationEvidence: Array.from(this.investigationSystem.evidence_collection),
            activeInvestigations: Object.fromEntries(this.activeInvestigations),
            hintHistory: this.hintHistory || [],
            lastSaveTimestamp: Date.now()
        };
        
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.ultra_escape_room_state = state;
        }
    }
    
    loadEscapeRoomState() {
        if (this.gameStateManager && 
            this.gameStateManager.worldState && 
            this.gameStateManager.worldState.ultra_escape_room_state) {
            
            const state = this.gameStateManager.worldState.ultra_escape_room_state;
            
            this.currentMysteryLevel = state.currentMysteryLevel || 1;
            this.discoveredSecrets = new Set(state.discoveredSecrets || []);
            this.unlockedAreas = new Set(state.unlockedAreas || []);
            this.investigationSystem.evidence_collection = new Set(state.investigationEvidence || []);
            this.activeInvestigations = new Map(Object.entries(state.activeInvestigations || {}));
            this.hintHistory = state.hintHistory || [];
        }
    }
    
    // Placeholder methods for complex systems
    createHypothesisInterface() { /* Hypothesis formation UI */ }
    createDeductionVisualizer() { /* Deduction chain visualization */ }
    createSynthesisTracker() { /* Synthesis moment tracking */ }
    createProgressMonitor() { /* Investigation progress monitoring */ }
    checkEvidenceConnections() { /* Evidence connection analysis */ }
    updateHypotheses() { /* Hypothesis update logic */ }
    triggerInvestigationBreakthrough(breakthrough) { /* Breakthrough experience */ }
    generateSynthesisRevelation() { /* Synthesis revelation generation */ }
    integrateSynthesis() { /* Synthesis integration */ }
    contemplatesSynthesis() { /* Synthesis contemplation */ }
    startEscapeRoomExperience() { /* Initial experience setup */ }
    createConsciousnessInsight(content) { /* Consciousness insight delivery */ }
    createWisdomDownload(content) { /* Wisdom download experience */ }
    createDirectTransmission(content) { /* Direct transmission experience */ }
    createSynchronicitySign(content) { /* Synchronicity sign manifestation */ }
}

// CSS for the escape room system
const escapeRoomCSS = `
<style>
.evidence-tracker {
    font-family: 'Jost', sans-serif;
    border: 2px solid rgba(255, 197, 143, 0.3);
    border-radius: 12px;
    backdrop-filter: blur(15px);
    overflow: hidden;
}

.tracker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 197, 143, 0.1);
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 197, 143, 0.2);
}

.tracker-title {
    font-family: 'Cinzel', serif;
    font-weight: bold;
    color: #ffc58f;
}

.tracker-toggle {
    background: none;
    border: none;
    color: #ffc58f;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.tracker-toggle:hover {
    transform: scale(1.1);
}

.evidence-content {
    padding: 1rem;
    max-height: 60vh;
    overflow-y: auto;
}

.evidence-categories {
    margin-bottom: 1rem;
}

.evidence-category {
    margin-bottom: 1.5rem;
}

.category-title {
    font-weight: bold;
    color: #d4af37;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.evidence-items {
    margin-left: 1rem;
}

.evidence-item {
    transition: all 0.3s ease;
}

.evidence-item:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    transform: translateX(5px);
}

.evidence-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
}

.evidence-icon {
    font-size: 1rem;
}

.evidence-name {
    font-weight: bold;
    color: #ffc58f;
    font-size: 0.9rem;
}

.evidence-description {
    font-size: 0.8rem;
    color: #dcd1c7;
    line-height: 1.4;
    margin-bottom: 0.3rem;
}

.evidence-significance {
    font-size: 0.7rem;
    color: #918070;
    font-style: italic;
}

.evidence-connections {
    border-top: 1px solid rgba(255, 197, 143, 0.2);
    padding-top: 1rem;
}

.connections-title {
    font-weight: bold;
    color: #d4af37;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

#evidence-connections-canvas {
    width: 100%;
    height: 150px;
    border: 1px solid rgba(255, 197, 143, 0.2);
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.2);
}

.evidence-examination-modal {
    font-family: 'Jost', sans-serif;
}

.modal-content {
    background: linear-gradient(135deg, rgba(26, 21, 18, 0.95), rgba(42, 33, 23, 0.9));
    border: 2px solid rgba(255, 197, 143, 0.4);
    border-radius: 16px;
    width: 90%;
    max-width: 700px;
    max-height: 90vh;
    overflow-y: auto;
    backdrop-filter: blur(15px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(255, 197, 143, 0.2);
    background: rgba(255, 197, 143, 0.1);
}

.modal-title {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    color: #ffc58f;
    font-weight: bold;
}

.modal-close {
    background: none;
    border: none;
    color: #dcd1c7;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.modal-close:hover {
    color: #ffc58f;
    transform: rotate(90deg);
}

.modal-body {
    padding: 2rem;
}

.detail-section {
    margin-bottom: 2rem;
}

.detail-section h4 {
    color: #d4af37;
    font-family: 'Cinzel', serif;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
    padding-bottom: 0.5rem;
}

.detail-section p {
    color: #dcd1c7;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.analysis-options {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.analysis-btn {
    background: rgba(255, 197, 143, 0.2);
    border: 2px solid rgba(255, 197, 143, 0.4);
    border-radius: 6px;
    color: #ffc58f;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
}

.analysis-btn:hover {
    background: rgba(255, 197, 143, 0.4);
    border-color: #ffc58f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 197, 143, 0.3);
}

.results-content {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 1rem;
    color: #dcd1c7;
    min-height: 100px;
}

.analysis-requirement {
    text-align: center;
    color: #918070;
    font-style: italic;
}

.analysis-result {
    line-height: 1.6;
}

.result-content {
    margin-bottom: 1rem;
    color: #dcd1c7;
}

.new-clues,
.new-connections {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(255, 197, 143, 0.1);
    border-radius: 6px;
    border-left: 3px solid #ffc58f;
}

.new-clues h5,
.new-connections h5 {
    color: #ffc58f;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.new-clues ul,
.new-connections ul {
    margin: 0;
    padding-left: 1.5rem;
    color: #dcd1c7;
}

.new-clues li,
.new-connections li {
    margin-bottom: 0.3rem;
    line-height: 1.4;
}

.evidence-connections .connection-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    padding: 0.5rem;
    margin-bottom: 0.3rem;
    color: #918070;
    font-size: 0.8rem;
}

.synthesis-moment-modal {
    font-family: 'Jost', sans-serif;
    text-align: center;
}

.synthesis-content {
    position: relative;
}

.synthesis-header {
    margin-bottom: 1.5rem;
}

.synthesis-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.synthesis-title {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.synthesis-body p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.synthesis-revelation {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
    font-size: 1rem;
    line-height: 1.6;
}

.synthesis-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.synthesis-accept-btn,
.synthesis-contemplate-btn {
    background: rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    color: #0d0b08;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Cinzel', serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.synthesis-accept-btn:hover,
.synthesis-contemplate-btn:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.environmental-whisper {
    font-family: 'Jost', sans-serif;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(255, 197, 143, 0.2);
}

@keyframes synthesis-appear {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes whisper-fade-in-out {
    0%, 100% {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
    }
    10%, 90% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}

/* Responsive design */
@media (max-width: 768px) {
    .evidence-tracker {
        width: 90%;
        right: 5%;
    }
    
    .modal-content {
        width: 95%;
        margin: 2.5%;
    }
    
    .modal-body {
        padding: 1rem;
    }
    
    .analysis-options {
        flex-direction: column;
    }
    
    .analysis-btn {
        width: 100%;
    }
    
    .synthesis-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .synthesis-accept-btn,
    .synthesis-contemplate-btn {
        width: 100%;
        max-width: 250px;
    }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
    .synthesis-moment-modal,
    .environmental-whisper {
        animation: none !important;
    }
    
    .tracker-toggle,
    .analysis-btn,
    .synthesis-accept-btn,
    .synthesis-contemplate-btn {
        transition: none !important;
    }
}
</style>
`;

// Inject CSS
const escapeRoomStyleSheet = document.createElement('style');
escapeRoomStyleSheet.textContent = escapeRoomCSS;
document.head.appendChild(escapeRoomStyleSheet);

// Export for use in the main game
window.UltraEnhancedEscapeRoomSystem = UltraEnhancedEscapeRoomSystem;

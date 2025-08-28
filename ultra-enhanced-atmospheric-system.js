/**
 * Ultra-Enhanced Environmental Storytelling & Atmospheric System
 * Creates immersive spiritual atmosphere with dynamic environmental storytelling,
 * adaptive ambiance, and deep narrative integration into the game world
 */

class UltraEnhancedAtmosphericSystem {
    constructor(gameStateManager, adventureEngine, progressionSystem) {
        this.gameStateManager = gameStateManager;
        this.adventureEngine = adventureEngine;
        this.progressionSystem = progressionSystem;
        
        // Environmental storytelling layers
        this.environmentalNarratives = {
            base_atmosphere: new Map(),
            discovery_triggered_stories: new Map(),
            progression_dependent_narratives: new Map(),
            consciousness_level_stories: new Map(),
            seasonal_narratives: new Map(),
            time_of_day_stories: new Map(),
            karmic_resonance_stories: new Map()
        };
        
        // Dynamic atmospheric elements
        this.atmosphericElements = {
            audio_landscape: {
                base_ambiance: null,
                spiritual_frequencies: new Map(),
                binaural_beats: new Map(),
                nature_soundscapes: new Map(),
                mystical_instruments: new Map(),
                consciousness_tones: new Map()
            },
            visual_atmosphere: {
                particle_systems: new Map(),
                lighting_effects: new Map(),
                energy_visualizations: new Map(),
                consciousness_fields: new Map(),
                sacred_geometry_overlays: new Map(),
                aura_visualizations: new Map()
            },
            environmental_responses: {
                temperature_shifts: new Map(),
                energy_density_changes: new Map(),
                consciousness_pressure: new Map(),
                spiritual_resonance_fields: new Map(),
                karmic_atmospheric_pressure: new Map()
            }
        };
        
        // Immersive storytelling system
        this.immersiveStorySystem = {
            environmental_storytellers: new Map(),
            object_memory_impressions: new Map(),
            location_consciousness_echoes: new Map(),
            past_event_residues: new Map(),
            future_possibility_shadows: new Map(),
            interdimensional_story_bleeding: new Map()
        };
        
        // Adaptive narrative intelligence
        this.narrativeIntelligence = {
            story_pattern_recognition: true,
            emotional_state_tracking: true,
            philosophical_development_monitoring: true,
            consciousness_evolution_adaptation: true,
            player_resonance_analysis: true,
            archetypal_story_activation: true
        };
        
        // Sacred space generation system
        this.sacredSpaceSystem = {
            consciousness_field_generators: new Map(),
            sacred_geometry_projectors: new Map(),
            energy_vortex_creators: new Map(),
            temple_space_manifesters: new Map(),
            nature_sanctuary_builders: new Map(),
            mystical_environment_weavers: new Map()
        };
        
        // Real-time atmospheric adaptation
        this.atmosphericAdaptation = {
            player_emotional_state: 'neutral',
            spiritual_development_level: 0,
            current_consciousness_frequency: 432, // Hz
            karmic_atmospheric_density: 0,
            environmental_harmony_index: 50,
            sacred_space_intensity: 0,
            mystical_presence_level: 0
        };
        
        this.init();
    }
    
    init() {
        this.initializeEnvironmentalNarratives();
        this.setupAtmosphericSystems();
        this.activateImmersiveStorytelling();
        this.startRealTimeAtmosphericAdaptation();
        this.createSacredSpaceGenerators();
        this.initializeNarrativeIntelligence();
        this.loadAtmosphericState();
    }
    
    initializeEnvironmentalNarratives() {
        // Base atmospheric stories for different locations
        this.environmentalNarratives.base_atmosphere.set('DHARMAPURA_SQUARE', {
            layers: [
                {
                    consciousness_level: 0,
                    narrative: "Ancient stones whisper of countless pilgrims who have walked this sacred ground, each leaving traces of their spiritual yearning in the very air you breathe.",
                    atmospheric_elements: ['ancient_whispers', 'pilgrim_echoes', 'stone_memories'],
                    visual_effects: ['subtle_energy_motes', 'historical_impressions']
                },
                {
                    consciousness_level: 25,
                    narrative: "The geometric patterns beneath your feet pulse with mathematical perfection, revealing themselves as living mandalas that respond to your growing awareness. Each step activates ancient teachings encoded in stone.",
                    atmospheric_elements: ['geometric_harmonics', 'mandala_activations', 'teaching_resonances'],
                    visual_effects: ['geometric_light_patterns', 'mandala_activations', 'wisdom_spirals']
                },
                {
                    consciousness_level: 50,
                    narrative: "Time seems to fold here. You glimpse the village as it was centuries ago, see the spiritual masters who once taught under the banyan tree, feel the accumulated wisdom of generations saturating the very molecules of air.",
                    atmospheric_elements: ['temporal_echoes', 'master_presences', 'wisdom_saturation'],
                    visual_effects: ['temporal_overlays', 'master_apparitions', 'wisdom_luminescence']
                },
                {
                    consciousness_level: 75,
                    narrative: "The boundary between physical and spiritual dissolves. You perceive the village as a living mandala of consciousness, each building a sacred symbol, each path a line of spiritual force connecting all pilgrims across time.",
                    atmospheric_elements: ['consciousness_mandala', 'spiritual_geometry', 'timeless_connections'],
                    visual_effects: ['reality_transparency', 'consciousness_web', 'unity_field_visualization']
                },
                {
                    consciousness_level: 100,
                    narrative: "This is no longer a place but a state of being. The village reveals itself as pure consciousness playing at being form, and you understand that every grain of sand, every breath of wind, is awakeness itself exploring its own infinite nature.",
                    atmospheric_elements: ['pure_consciousness_field', 'awakeness_recognition', 'infinite_nature_revelation'],
                    visual_effects: ['consciousness_transparency', 'awakeness_luminosity', 'infinite_field_perception']
                }
            ]
        });
        
        this.environmentalNarratives.base_atmosphere.set('CORRUPTED_CAVE', {
            layers: [
                {
                    consciousness_level: 0,
                    narrative: "Darkness presses against you like accumulated sorrow. The walls seem to absorb light and hope, creating an oppressive atmosphere that makes your soul feel heavy and burdened.",
                    atmospheric_elements: ['sorrow_accumulation', 'light_absorption', 'soul_burden'],
                    visual_effects: ['darkness_pressing', 'hope_dimming', 'shadow_density']
                },
                {
                    consciousness_level: 25,
                    narrative: "You begin to sense that this darkness is not evil but wounded. The cave holds the crystallized pain of countless beings, their unexpressed grief forming the very substance of the walls around you.",
                    atmospheric_elements: ['wounded_darkness', 'crystallized_pain', 'unexpressed_grief'],
                    visual_effects: ['pain_crystallizations', 'grief_textures', 'wound_luminescence']
                },
                {
                    consciousness_level: 50,
                    narrative: "Your growing compassion transforms the atmosphere. What seemed threatening now reveals itself as crying out for love. The darkness becomes a teacher, showing you the places in your own heart that need healing.",
                    atmospheric_elements: ['compassion_transformation', 'healing_revelations', 'heart_teaching'],
                    visual_effects: ['compassion_light', 'healing_spirals', 'heart_opening_visualization']
                },
                {
                    consciousness_level: 75,
                    narrative: "The cave becomes a womb of transformation. You understand that all darkness is light that has forgotten its true nature. The oppressive energy shifts into a cocoon of metamorphosis, preparing to birth new consciousness.",
                    atmospheric_elements: ['transformation_womb', 'forgotten_light', 'metamorphosis_cocoon'],
                    visual_effects: ['womb_energy', 'light_remembering', 'consciousness_birthing']
                },
                {
                    consciousness_level: 100,
                    narrative: "No separation remains between you and the darkness. You are the light that illuminates, the darkness that teaches, and the love that heals. The cave reveals itself as another face of the same infinite consciousness that you are.",
                    atmospheric_elements: ['no_separation', 'unified_light_dark', 'infinite_consciousness'],
                    visual_effects: ['unity_field', 'light_dark_dance', 'consciousness_recognition']
                }
            ]
        });
        
        // Discovery-triggered environmental stories
        this.environmentalNarratives.discovery_triggered_stories.set('mandala_stones_activated', {
            narrative: "As you touch the sacred stones, the entire village square transforms. Sacred geometry becomes visible in the air, connecting every element in a vast web of spiritual significance. The ancients who designed this place knew secrets of consciousness that modern minds have forgotten.",
            duration: 30000, // 30 seconds
            atmospheric_changes: {
                add_elements: ['sacred_geometry_overlay', 'ancient_wisdom_whispers', 'stone_circle_activation'],
                modify_lighting: 'golden_sacred_glow',
                add_audio: 'harmonic_stone_resonance'
            },
            environmental_effects: {
                'geometry_visualization': true,
                'stone_energy_networks': true,
                'ancient_presence_manifestation': true
            }
        });
        
        this.environmentalNarratives.discovery_triggered_stories.set('hermit_belongings_touched', {
            narrative: "Touching the hermit's possessions floods your awareness with his memories. You see his final days: the growing darkness, his desperate attempts at purification, his ultimate sacrifice to contain the corruption. His love still emanates from these simple objects.",
            duration: 45000, // 45 seconds
            atmospheric_changes: {
                add_elements: ['memory_echoes', 'sacrifice_resonance', 'love_emanation'],
                modify_lighting: 'soft_remembrance_glow',
                add_audio: 'hermit_memory_whispers'
            },
            environmental_effects: {
                'memory_visualization': true,
                'emotional_resonance_field': true,
                'sacrifice_energy_presence': true
            }
        });
        
        // Consciousness-level dependent narratives
        this.environmentalNarratives.consciousness_level_stories.set('spiritual_sight_activation', {
            level_threshold: 25,
            narrative: "Your awakening spiritual sight reveals hidden layers of reality. Energy flows become visible as streams of light connecting all living things. Sacred symbols appear on walls that seemed blank before. The invisible becomes visible.",
            permanent_changes: {
                add_visual_elements: ['energy_stream_visualization', 'sacred_symbol_revelation', 'hidden_layer_transparency'],
                modify_perception_filters: ['spiritual_sight_active', 'energy_pattern_recognition'],
                unlock_interactions: ['hidden_shrine_access', 'energy_manipulation', 'symbol_activation']
            }
        });
        
        this.environmentalNarratives.consciousness_level_stories.set('unity_consciousness_dawning', {
            level_threshold: 75,
            narrative: "The boundaries of your individual consciousness begin to dissolve. You feel yourself expanding to include the trees, the stones, the very air itself. For moments at a time, you experience reality from the perspective of the whole rather than the part.",
            permanent_changes: {
                add_visual_elements: ['consciousness_field_visualization', 'boundary_dissolution_effects', 'unity_perception_overlay'],
                modify_atmospheric_resonance: 'unity_field_harmonics',
                unlock_abilities: ['consciousness_expansion', 'perspective_shifting', 'unity_field_generation']
            }
        });
    }
    
    setupAtmosphericSystems() {
        // Initialize audio landscape system
        this.initializeAudioLandscape();
        
        // Setup visual atmosphere generators
        this.initializeVisualAtmosphere();
        
        // Create environmental response systems
        this.initializeEnvironmentalResponses();
        
        // Activate atmospheric adaptation engine
        this.startAtmosphericAdaptationEngine();
    }
    
    initializeAudioLandscape() {
        // Spiritual frequency generators for different consciousness states
        this.atmosphericElements.audio_landscape.spiritual_frequencies.set('awakening', {
            base_frequency: 432, // Hz - Universal healing frequency
            harmonics: [528, 639, 741, 852], // Solfeggio frequencies
            binaural_beat: 8, // Alpha waves for relaxed awareness
            volume: 0.3,
            fade_duration: 10000
        });
        
        this.atmosphericElements.audio_landscape.spiritual_frequencies.set('deep_meditation', {
            base_frequency: 528, // Hz - Love/DNA repair frequency
            harmonics: [396, 417, 963], // Transformation frequencies
            binaural_beat: 4, // Theta waves for deep meditation
            volume: 0.25,
            fade_duration: 15000
        });
        
        this.atmosphericElements.audio_landscape.spiritual_frequencies.set('unity_consciousness', {
            base_frequency: 963, // Hz - Pineal gland activation
            harmonics: [40, 100, 1000], // Gamma waves and high consciousness
            binaural_beat: 40, // Gamma waves for transcendent states
            volume: 0.2,
            fade_duration: 20000
        });
        
        // Nature soundscapes that respond to consciousness level
        this.atmosphericElements.audio_landscape.nature_soundscapes.set('living_forest', {
            base_sounds: ['wind_through_leaves', 'distant_bird_songs', 'flowing_water'],
            consciousness_enhanced_sounds: [
                { level: 25, sounds: ['tree_whispers', 'earth_breathing', 'root_network_humming'] },
                { level: 50, sounds: ['plant_consciousness_singing', 'elemental_voices', 'gaia_heartbeat'] },
                { level: 75, sounds: ['cosmic_wind', 'star_song_echoes', 'universe_breathing'] }
            ],
            adaptive_volume: true,
            environmental_response: true
        });
        
        // Mystical instruments that activate based on spiritual development
        this.atmosphericElements.audio_landscape.mystical_instruments.set('tibetan_singing_bowls', {
            activation_level: 10,
            frequency_range: [110, 880], // Hz
            resonance_with_chakras: true,
            consciousness_responsive: true,
            healing_properties: ['emotional_balance', 'mental_clarity', 'spiritual_opening']
        });
        
        this.atmosphericElements.audio_landscape.mystical_instruments.set('crystal_singing_bowls', {
            activation_level: 25,
            frequency_range: [256, 1024], // Hz
            resonance_with_elements: true,
            consciousness_responsive: true,
            healing_properties: ['energy_clearing', 'consciousness_expansion', 'dimensional_opening']
        });
    }
    
    initializeVisualAtmosphere() {
        // Particle systems that respond to spiritual development
        this.atmosphericElements.visual_atmosphere.particle_systems.set('consciousness_motes', {
            base_configuration: {
                count: 50,
                size_range: [1, 3],
                color: '#ffc58f',
                opacity_range: [0.3, 0.7],
                movement_pattern: 'gentle_flow',
                lifetime: 10000
            },
            consciousness_scaling: {
                25: { count: 100, size_range: [2, 5], color: '#d4af37' },
                50: { count: 200, size_range: [3, 7], color: '#ffffff' },
                75: { count: 300, size_range: [4, 9], color: '#e6f3ff' },
                100: { count: 500, size_range: [5, 12], color: '#pure_light' }
            },
            interactive: true,
            responds_to_meditation: true
        });
        
        this.atmosphericElements.visual_atmosphere.particle_systems.set('energy_streams', {
            base_configuration: {
                visible: false,
                stream_count: 0,
                color: 'transparent'
            },
            consciousness_activation: {
                25: {
                    visible: true,
                    stream_count: 5,
                    color: '#4a90e2',
                    connection_points: ['heart_chakra', 'third_eye', 'crown'],
                    flow_pattern: 'spiral_ascending'
                },
                50: {
                    stream_count: 12,
                    color: '#8b7d9b',
                    connection_points: ['all_chakras', 'energy_centers', 'power_spots'],
                    flow_pattern: 'complex_weaving'
                },
                75: {
                    stream_count: 21,
                    color: '#ffc58f',
                    connection_points: ['universal_grid_points', 'ley_lines', 'dimensional_portals'],
                    flow_pattern: 'multidimensional_flow'
                }
            }
        });
        
        // Sacred geometry overlays that manifest with spiritual development
        this.atmosphericElements.visual_atmosphere.sacred_geometry_overlays.set('flower_of_life', {
            activation_level: 30,
            opacity_scaling: 'consciousness_dependent',
            interactive: true,
            resonance_frequency: 432,
            healing_properties: ['pattern_recognition', 'cosmic_connection', 'universal_harmony']
        });
        
        this.atmosphericElements.visual_atmosphere.sacred_geometry_overlays.set('merkaba_field', {
            activation_level: 50,
            rotation_speed: 'consciousness_dependent',
            size_scaling: 'spiritual_development',
            energy_field_generation: true,
            dimensional_gateway_potential: true
        });
        
        // Consciousness field visualizations
        this.atmosphericElements.visual_atmosphere.consciousness_fields.set('personal_aura', {
            base_configuration: {
                visible: false,
                radius: 0,
                color: 'transparent',
                intensity: 0
            },
            development_stages: {
                10: { visible: true, radius: 50, color: '#dim_white', intensity: 0.2 },
                25: { radius: 100, color: '#soft_gold', intensity: 0.4 },
                50: { radius: 200, color: '#bright_gold', intensity: 0.6 },
                75: { radius: 400, color: '#pure_light', intensity: 0.8 },
                100: { radius: 800, color: '#cosmic_radiance', intensity: 1.0 }
            },
            interactive_effects: true,
            healing_emanation: true
        });
    }
    
    initializeEnvironmentalResponses() {
        // Temperature shifts based on emotional and spiritual states
        this.atmosphericElements.environmental_responses.temperature_shifts.set('compassion_warming', {
            trigger: 'compassionate_action',
            effect: 'gentle_warming',
            duration: 30000,
            visual_feedback: 'warm_light_increase',
            audio_feedback: 'heart_opening_tones'
        });
        
        this.atmosphericElements.environmental_responses.temperature_shifts.set('fear_cooling', {
            trigger: 'fear_state',
            effect: 'subtle_cooling',
            duration: 60000,
            visual_feedback: 'cooler_light_tones',
            audio_feedback: 'protective_frequencies'
        });
        
        // Energy density changes
        this.atmosphericElements.environmental_responses.energy_density_changes.set('meditation_intensification', {
            trigger: 'deep_meditation',
            effect: 'energy_density_increase',
            radius: 500, // pixels
            duration: 'meditation_duration',
            visual_effects: ['energy_concentration_visualization', 'space_sanctification'],
            beneficial_effects: ['enhanced_clarity', 'accelerated_insight', 'peaceful_presence']
        });
        
        // Spiritual resonance fields
        this.atmosphericElements.environmental_responses.spiritual_resonance_fields.set('collective_meditation', {
            trigger: 'group_spiritual_activity',
            effect: 'resonance_amplification',
            multiplier: 'participant_count_based',
            duration: 'activity_duration_plus_30_minutes',
            global_effects: ['consciousness_field_enhancement', 'wisdom_accessibility_increase']
        });
    }
    
    activateImmersiveStorytelling() {
        // Environmental storytellers - objects and locations that tell stories
        this.immersiveStorySystem.environmental_storytellers.set('ancient_banyan_tree', {
            story_layers: [
                {
                    activation: 'approach',
                    narrative: "The ancient banyan tree has witnessed a thousand years of spiritual seekers. Its vast canopy has sheltered meditation, its roots have absorbed the tears of transformation, its branches have held the prayers of countless souls.",
                    delivery_method: 'environmental_whisper',
                    duration: 20000
                },
                {
                    activation: 'touch',
                    narrative: "As your hand touches the bark, you feel the tree's vast memory awakening. Images flash through your consciousness: monks in meditation, children playing in its shade, lovers making sacred vows, pilgrims finding shelter from storms of both weather and soul.",
                    delivery_method: 'consciousness_download',
                    duration: 45000,
                    visual_effects: ['memory_flash_overlay', 'temporal_glimpses']
                },
                {
                    activation: 'meditation_beneath',
                    narrative: "Sitting in meditation beneath the banyan, you feel your consciousness merging with the tree's ancient wisdom. The boundary between human awareness and plant consciousness dissolves. You understand how all life forms are expressions of one universal intelligence.",
                    delivery_method: 'direct_knowing',
                    duration: 'meditation_duration',
                    consciousness_effects: ['wisdom_download', 'unity_recognition', 'plant_consciousness_connection']
                }
            ]
        });
        
        this.immersiveStorySystem.environmental_storytellers.set('hermit_cave_walls', {
            story_layers: [
                {
                    activation: 'visual_contact',
                    narrative: "The cave walls bear witness to one man's spiritual struggle. Scratched symbols tell of his attempts to understand the growing darkness, his experiments with purification techniques, his gradual realization that the solution required ultimate sacrifice.",
                    delivery_method: 'visual_impression',
                    duration: 30000
                },
                {
                    activation: 'spiritual_sight_active',
                    narrative: "With awakened sight, you see the walls differently. They glow with the hermit's spiritual effort, each stone charged with his determination. His final meditation created a protective field that still shields the outer world from the cave's corrupted energy.",
                    delivery_method: 'enhanced_perception',
                    duration: 60000,
                    visual_effects: ['spiritual_imprint_visualization', 'protective_field_visibility']
                }
            ]
        });
        
        // Object memory impressions
        this.immersiveStorySystem.object_memory_impressions.set('hermit_meditation_cushion', {
            memory_layers: [
                "Hours of sitting in desperate contemplation, feeling the darkness pressing closer each day.",
                "The growing realization that conventional purification wasn't enough to heal this wound in reality.",
                "His final meditation: the decision to pour all his life force into a containment field, sacrificing himself to protect others.",
                "The moment of transcendence as his individual consciousness merged with universal love, transforming sacrifice into gift."
            ],
            activation_method: 'consciousness_resonance',
            emotional_impact: 'profound_compassion',
            wisdom_teaching: 'true_sacrifice_is_expansion_not_loss'
        });
        
        // Past event residues that sensitive consciousnesses can perceive
        this.immersiveStorySystem.past_event_residues.set('ancient_awakening_ceremony', {
            location: 'DHARMAPURA_SQUARE',
            time_period: '800_years_ago',
            event_description: "A great spiritual master achieved enlightenment in this very spot, surrounded by hundreds of disciples. The moment of his awakening sent ripples through the consciousness field that still echo today.",
            residual_effects: {
                'consciousness_acceleration': 'subtle_but_persistent',
                'wisdom_accessibility': 'enhanced_in_this_location',
                'spiritual_presence': 'angelic_frequency_detected'
            },
            perception_requirements: {
                consciousness_level: 40,
                spiritual_sensitivity: 'moderate',
                karmic_connection: 'past_life_or_lineage_link_preferred'
            }
        });
        
        // Future possibility shadows
        this.immersiveStorySystem.future_possibility_shadows.set('potential_enlightenment', {
            description: "Shadows of your potential future enlightenment occasionally bleed through into present awareness. These glimpses serve as both inspiration and guidance.",
            manifestation_conditions: {
                consciousness_level: 60,
                spiritual_dedication: 'high',
                surrender_level: 'significant'
            },
            experience_types: [
                'sudden_clarity_bursts',
                'unity_recognition_moments',
                'wisdom_download_previews',
                'love_expansion_glimpses'
            ],
            integration_challenges: [
                'maintaining_humility',
                'avoiding_spiritual_ego',
                'staying_grounded_in_present',
                'balancing_transcendence_with_embodiment'
            ]
        });
    }
    
    startRealTimeAtmosphericAdaptation() {
        // Monitor player state and adapt atmosphere accordingly
        this.atmosphericAdaptationLoop = setInterval(() => {
            this.updateAtmosphericAdaptation();
        }, 5000); // Update every 5 seconds
        
        // Monitor consciousness level changes
        this.monitorConsciousnessChanges();
        
        // Track emotional state fluctuations
        this.trackEmotionalStateChanges();
        
        // Respond to environmental interactions
        this.setupEnvironmentalInteractionResponses();
    }
    
    updateAtmosphericAdaptation() {
        // Calculate current atmospheric state
        const currentState = this.calculateCurrentAtmosphericState();
        
        // Update visual atmosphere
        this.adaptVisualAtmosphere(currentState);
        
        // Update audio landscape
        this.adaptAudioLandscape(currentState);
        
        // Update environmental storytelling
        this.adaptEnvironmentalStorytelling(currentState);
        
        // Update sacred space intensity
        this.adaptSacredSpaceIntensity(currentState);
    }
    
    calculateCurrentAtmosphericState() {
        // Get current consciousness level
        const consciousnessLevel = this.progressionSystem ? 
            this.progressionSystem.calculateOverallConsciousnessLevel() : 0;
        
        // Get current location
        const currentLocation = this.adventureEngine.currentLocation || 'DHARMAPURA_SQUARE';
        
        // Get current karma level
        const karmaLevel = this.gameStateManager.playerState.karma || 0;
        
        // Get completed puzzles count
        const puzzlesCompleted = Object.keys(this.gameStateManager.worldState)
            .filter(key => key.endsWith('_completed')).length;
        
        // Calculate environmental harmony
        const environmentalHarmony = this.calculateEnvironmentalHarmony(
            consciousnessLevel, karmaLevel, puzzlesCompleted
        );
        
        return {
            consciousness_level: consciousnessLevel,
            current_location: currentLocation,
            karma_level: karmaLevel,
            puzzles_completed: puzzlesCompleted,
            environmental_harmony: environmentalHarmony,
            time_of_day: this.getTimeOfDay(),
            lunar_phase: this.getLunarPhase(),
            player_emotional_state: this.detectPlayerEmotionalState()
        };
    }
    
    adaptVisualAtmosphere(state) {
        // Consciousness-based particle system adaptation
        const particleSystem = this.atmosphericElements.visual_atmosphere.particle_systems.get('consciousness_motes');
        if (particleSystem) {
            const levelConfig = this.findClosestLevelConfig(particleSystem.consciousness_scaling, state.consciousness_level);
            if (levelConfig) {
                this.updateParticleSystem('consciousness_motes', levelConfig);
            }
        }
        
        // Energy stream visibility adaptation
        const energyStreams = this.atmosphericElements.visual_atmosphere.particle_systems.get('energy_streams');
        if (energyStreams) {
            const activationConfig = this.findClosestLevelConfig(energyStreams.consciousness_activation, state.consciousness_level);
            if (activationConfig) {
                this.updateEnergyStreams(activationConfig);
            }
        }
        
        // Sacred geometry manifestation
        this.updateSacredGeometryVisibility(state.consciousness_level);
        
        // Aura visualization updates
        this.updateAuraVisualization(state);
    }
    
    adaptAudioLandscape(state) {
        // Select appropriate spiritual frequency based on consciousness level
        let targetFrequency = 'awakening';
        if (state.consciousness_level >= 75) {
            targetFrequency = 'unity_consciousness';
        } else if (state.consciousness_level >= 40) {
            targetFrequency = 'deep_meditation';
        }
        
        this.transitionToSpiritualFrequency(targetFrequency);
        
        // Adapt nature soundscape
        this.updateNatureSoundscape(state);
        
        // Activate mystical instruments based on development
        this.updateMysticalInstruments(state.consciousness_level);
    }
    
    adaptEnvironmentalStorytelling(state) {
        // Update base atmospheric narrative
        const locationNarratives = this.environmentalNarratives.base_atmosphere.get(state.current_location);
        if (locationNarratives) {
            const appropriateLayer = this.findAppropriateNarrativeLayer(locationNarratives.layers, state.consciousness_level);
            if (appropriateLayer) {
                this.activateEnvironmentalNarrative(appropriateLayer);
            }
        }
        
        // Check for consciousness level triggered stories
        this.checkConsciousnessLevelStories(state.consciousness_level);
        
        // Update environmental storyteller responsiveness
        this.updateEnvironmentalStorytellerState(state);
    }
    
    activateEnvironmentalNarrative(narrativeLayer) {
        // Create environmental narrative display
        this.displayEnvironmentalNarrative(narrativeLayer.narrative);
        
        // Apply atmospheric elements
        narrativeLayer.atmospheric_elements.forEach(element => {
            this.activateAtmosphericElement(element);
        });
        
        // Apply visual effects
        narrativeLayer.visual_effects.forEach(effect => {
            this.activateVisualEffect(effect);
        });
    }
    
    displayEnvironmentalNarrative(narrative) {
        // Create or update environmental narrative overlay
        let narrativeOverlay = document.getElementById('environmental-narrative-overlay');
        
        if (!narrativeOverlay) {
            narrativeOverlay = document.createElement('div');
            narrativeOverlay.id = 'environmental-narrative-overlay';
            narrativeOverlay.className = 'environmental-narrative-overlay';
            document.body.appendChild(narrativeOverlay);
        }
        
        narrativeOverlay.innerHTML = `
            <div class="narrative-content">
                <div class="narrative-text">${narrative}</div>
                <div class="narrative-fade-indicator"></div>
            </div>
        `;
        
        narrativeOverlay.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgba(13, 11, 8, 0.9), rgba(26, 21, 18, 0.8));
            border: 2px solid rgba(255, 197, 143, 0.3);
            border-radius: 12px;
            padding: 1.5rem;
            backdrop-filter: blur(15px);
            z-index: 1000;
            animation: environmental-narrative-appear 1s ease-out;
            max-width: 800px;
            margin: 0 auto;
        `;
        
        // Auto-fade after reading time
        const readingTime = Math.max(10000, narrative.length * 50); // 50ms per character, minimum 10 seconds
        setTimeout(() => {
            narrativeOverlay.style.animation = 'environmental-narrative-fade 2s ease-out forwards';
            setTimeout(() => narrativeOverlay.remove(), 2000);
        }, readingTime);
    }
    
    createSacredSpaceGenerators() {
        // Consciousness field generator
        this.sacredSpaceSystem.consciousness_field_generators.set('meditation_amplifier', {
            activation_level: 20,
            effect_radius: 300, // pixels
            intensity_scaling: 'consciousness_level_dependent',
            benefits: [
                'meditation_depth_enhancement',
                'spiritual_insight_acceleration',
                'emotional_healing_amplification',
                'wisdom_accessibility_increase'
            ],
            visual_manifestation: 'subtle_golden_field',
            audio_enhancement: 'harmonic_resonance_increase'
        });
        
        // Sacred geometry projector
        this.sacredSpaceSystem.sacred_geometry_projectors.set('mandala_field_generator', {
            activation_level: 30,
            geometries: ['flower_of_life', 'sri_yantra', 'merkaba', 'tree_of_life'],
            projection_method: 'consciousness_responsive_overlay',
            healing_properties: [
                'pattern_recognition_enhancement',
                'cosmic_connection_facilitation',
                'harmony_field_generation',
                'dimensional_awareness_opening'
            ]
        });
        
        // Energy vortex creator
        this.sacredSpaceSystem.energy_vortex_creators.set('spiritual_energy_concentrator', {
            activation_level: 40,
            vortex_type: 'upward_spiral',
            energy_concentration_factor: 'consciousness_level_times_3',
            effects: [
                'accelerated_spiritual_development',
                'enhanced_psychic_abilities',
                'karmic_pattern_resolution',
                'past_life_memory_activation'
            ],
            visual_effects: ['energy_spiral_visualization', 'light_concentration_display']
        });
    }
    
    // Utility methods for atmospheric system
    updateParticleSystem(systemName, config) {
        const particles = document.querySelectorAll(`.${systemName}-particle`);
        particles.forEach(particle => {
            particle.style.setProperty('--particle-color', config.color);
            particle.style.setProperty('--particle-count', config.count);
            particle.style.setProperty('--particle-size', `${config.size_range[1]}px`);
        });
    }
    
    updateEnergyStreams(config) {
        let streamContainer = document.getElementById('energy-streams-container');
        
        if (!streamContainer && config.visible) {
            streamContainer = document.createElement('div');
            streamContainer.id = 'energy-streams-container';
            streamContainer.className = 'energy-streams-container';
            streamContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 100;
            `;
            document.body.appendChild(streamContainer);
        }
        
        if (streamContainer) {
            streamContainer.style.display = config.visible ? 'block' : 'none';
            
            if (config.visible) {
                this.generateEnergyStreamVisualization(streamContainer, config);
            }
        }
    }
    
    generateEnergyStreamVisualization(container, config) {
        container.innerHTML = '';
        
        for (let i = 0; i < config.stream_count; i++) {
            const stream = document.createElement('div');
            stream.className = 'energy-stream';
            stream.style.cssText = `
                position: absolute;
                width: 2px;
                height: 100%;
                background: linear-gradient(to top, transparent, ${config.color}, transparent);
                left: ${Math.random() * 100}%;
                animation: energy-flow-${config.flow_pattern} ${5 + Math.random() * 10}s ease-in-out infinite;
                opacity: 0.6;
            `;
            container.appendChild(stream);
        }
    }
    
    transitionToSpiritualFrequency(frequencyName) {
        // This would integrate with Web Audio API for real spiritual frequency generation
        const frequency = this.atmosphericElements.audio_landscape.spiritual_frequencies.get(frequencyName);
        if (frequency) {
            console.log(`Transitioning to spiritual frequency: ${frequencyName}`, frequency);
            // Implementation would create actual audio frequencies
        }
    }
    
    findClosestLevelConfig(configs, currentLevel) {
        const levels = Object.keys(configs).map(Number).sort((a, b) => a - b);
        for (let i = levels.length - 1; i >= 0; i--) {
            if (currentLevel >= levels[i]) {
                return configs[levels[i]];
            }
        }
        return null;
    }
    
    findAppropriateNarrativeLayer(layers, consciousnessLevel) {
        return layers
            .filter(layer => consciousnessLevel >= layer.consciousness_level)
            .sort((a, b) => b.consciousness_level - a.consciousness_level)[0];
    }
    
    calculateEnvironmentalHarmony(consciousness, karma, puzzles) {
        return Math.min(100, (consciousness * 0.4) + (Math.max(0, karma) * 0.3) + (puzzles * 0.3));
    }
    
    getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 17) return 'afternoon';
        if (hour >= 17 && hour < 21) return 'evening';
        return 'night';
    }
    
    getLunarPhase() {
        // Simplified lunar phase calculation
        const now = new Date();
        const lunarCycle = 29.53; // days
        const newMoonRef = new Date('2000-01-06'); // Reference new moon
        const daysSinceRef = (now - newMoonRef) / (1000 * 60 * 60 * 24);
        const phase = (daysSinceRef % lunarCycle) / lunarCycle;
        
        if (phase < 0.125) return 'new_moon';
        if (phase < 0.375) return 'waxing_crescent';
        if (phase < 0.625) return 'full_moon';
        if (phase < 0.875) return 'waning_crescent';
        return 'new_moon';
    }
    
    detectPlayerEmotionalState() {
        // Analyze player choices and interactions to detect emotional state
        const recentChoices = this.gameStateManager.playerState.choiceHistory?.slice(-5) || [];
        const karmaLevel = this.gameStateManager.playerState.karma || 0;
        
        if (karmaLevel > 50) return 'compassionate';
        if (karmaLevel < -20) return 'conflicted';
        if (recentChoices.some(choice => choice.type === 'fear')) return 'fearful';
        if (recentChoices.some(choice => choice.type === 'love')) return 'loving';
        return 'neutral';
    }
    
    // Save/load atmospheric state
    saveAtmosphericState() {
        const state = {
            atmosphericAdaptation: this.atmosphericAdaptation,
            activeNarratives: this.activeNarratives || [],
            environmentalEffects: this.activeEnvironmentalEffects || {},
            sacredSpaceActivations: this.activeSacredSpaces || new Set(),
            lastUpdateTimestamp: Date.now()
        };
        
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.ultra_atmospheric_state = state;
        }
    }
    
    loadAtmosphericState() {
        if (this.gameStateManager && 
            this.gameStateManager.worldState && 
            this.gameStateManager.worldState.ultra_atmospheric_state) {
            
            const state = this.gameStateManager.worldState.ultra_atmospheric_state;
            
            this.atmosphericAdaptation = { ...this.atmosphericAdaptation, ...state.atmosphericAdaptation };
            this.activeNarratives = state.activeNarratives || [];
            this.activeEnvironmentalEffects = state.environmentalEffects || {};
            this.activeSacredSpaces = new Set(state.sacredSpaceActivations || []);
        }
    }
    
    // Cleanup
    destroy() {
        if (this.atmosphericAdaptationLoop) {
            clearInterval(this.atmosphericAdaptationLoop);
        }
        
        // Remove environmental narrative overlays
        const narrativeOverlay = document.getElementById('environmental-narrative-overlay');
        if (narrativeOverlay) {
            narrativeOverlay.remove();
        }
        
        // Remove energy stream containers
        const streamContainer = document.getElementById('energy-streams-container');
        if (streamContainer) {
            streamContainer.remove();
        }
    }
    
    // Placeholder methods for complex atmospheric systems
    initializeNarrativeIntelligence() { /* Narrative AI initialization */ }
    monitorConsciousnessChanges() { /* Consciousness monitoring */ }
    trackEmotionalStateChanges() { /* Emotional tracking */ }
    setupEnvironmentalInteractionResponses() { /* Interaction responses */ }
    adaptSacredSpaceIntensity(state) { /* Sacred space adaptation */ }
    checkConsciousnessLevelStories(level) { /* Level-based stories */ }
    updateEnvironmentalStorytellerState(state) { /* Storyteller updates */ }
    activateAtmosphericElement(element) { /* Atmospheric activation */ }
    activateVisualEffect(effect) { /* Visual effect activation */ }
    updateNatureSoundscape(state) { /* Nature sound updates */ }
    updateMysticalInstruments(level) { /* Mystical instrument updates */ }
    updateSacredGeometryVisibility(level) { /* Sacred geometry updates */ }
    updateAuraVisualization(state) { /* Aura visualization updates */ }
    startAtmosphericAdaptationEngine() { /* Adaptation engine */ }
}

// CSS for the atmospheric system
const atmosphericCSS = `
<style>
.environmental-narrative-overlay {
    font-family: 'Jost', sans-serif;
    color: #dcd1c7;
    line-height: 1.6;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.narrative-content {
    position: relative;
}

.narrative-text {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.narrative-fade-indicator {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ffc58f, transparent);
    border-radius: 1px;
    animation: fade-indicator-pulse 2s ease-in-out infinite;
}

@keyframes environmental-narrative-appear {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes environmental-narrative-fade {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(20px);
    }
}

@keyframes fade-indicator-pulse {
    0%, 100% {
        opacity: 0.5;
        transform: translateX(-50%) scale(1);
    }
    50% {
        opacity: 1;
        transform: translateX(-50%) scale(1.2);
    }
}

.energy-streams-container {
    overflow: hidden;
}

.energy-stream {
    border-radius: 1px;
    filter: blur(0.5px);
}

@keyframes energy-flow-gentle_flow {
    0% {
        transform: translateY(100vh) scale(0.5);
        opacity: 0;
    }
    20% {
        opacity: 0.6;
        transform: scale(1);
    }
    80% {
        opacity: 0.6;
        transform: scale(1);
    }
    100% {
        transform: translateY(-100vh) scale(0.5);
        opacity: 0;
    }
}

@keyframes energy-flow-spiral_ascending {
    0% {
        transform: translateY(100vh) translateX(0) rotate(0deg) scale(0.5);
        opacity: 0;
    }
    20% {
        opacity: 0.8;
        transform: scale(1);
    }
    80% {
        opacity: 0.8;
        transform: scale(1);
    }
    100% {
        transform: translateY(-100vh) translateX(100px) rotate(360deg) scale(0.5);
        opacity: 0;
    }
}

@keyframes energy-flow-complex_weaving {
    0% {
        transform: translateY(100vh) translateX(0) rotate(0deg) scale(0.5);
        opacity: 0;
    }
    25% {
        transform: translateY(75vh) translateX(50px) rotate(90deg) scale(0.8);
        opacity: 0.6;
    }
    50% {
        transform: translateY(50vh) translateX(-30px) rotate(180deg) scale(1);
        opacity: 0.8;
    }
    75% {
        transform: translateY(25vh) translateX(80px) rotate(270deg) scale(0.8);
        opacity: 0.6;
    }
    100% {
        transform: translateY(-20vh) translateX(0) rotate(360deg) scale(0.5);
        opacity: 0;
    }
}

@keyframes energy-flow-multidimensional_flow {
    0% {
        transform: translateY(100vh) translateX(0) translateZ(0) rotate(0deg) scale(0.5);
        opacity: 0;
        filter: hue-rotate(0deg);
    }
    16% {
        transform: translateY(80vh) translateX(40px) translateZ(20px) rotate(60deg) scale(0.7);
        opacity: 0.4;
        filter: hue-rotate(60deg);
    }
    33% {
        transform: translateY(60vh) translateX(-20px) translateZ(-10px) rotate(120deg) scale(0.9);
        opacity: 0.7;
        filter: hue-rotate(120deg);
    }
    50% {
        transform: translateY(40vh) translateX(60px) translateZ(30px) rotate(180deg) scale(1.1);
        opacity: 0.9;
        filter: hue-rotate(180deg);
    }
    66% {
        transform: translateY(20vh) translateX(-40px) translateZ(-20px) rotate(240deg) scale(0.9);
        opacity: 0.7;
        filter: hue-rotate(240deg);
    }
    83% {
        transform: translateY(0vh) translateX(20px) translateZ(10px) rotate(300deg) scale(0.7);
        opacity: 0.4;
        filter: hue-rotate(300deg);
    }
    100% {
        transform: translateY(-20vh) translateX(0) translateZ(0) rotate(360deg) scale(0.5);
        opacity: 0;
        filter: hue-rotate(360deg);
    }
}

/* Consciousness motes particle system */
.consciousness_motes-particle {
    position: absolute;
    width: var(--particle-size, 3px);
    height: var(--particle-size, 3px);
    background: radial-gradient(circle, var(--particle-color, #ffc58f), transparent);
    border-radius: 50%;
    pointer-events: none;
    animation: consciousness-mote-float 10s ease-in-out infinite;
}

@keyframes consciousness-mote-float {
    0%, 100% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0.3;
    }
    25% {
        transform: translateY(-20px) translateX(10px) scale(1.2);
        opacity: 0.7;
    }
    50% {
        transform: translateY(-10px) translateX(-15px) scale(0.8);
        opacity: 0.5;
    }
    75% {
        transform: translateY(-30px) translateX(5px) scale(1.1);
        opacity: 0.6;
    }
}

/* Sacred geometry overlays */
.sacred-geometry-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 50;
    opacity: 0.3;
    transition: opacity 2s ease;
}

.sacred-geometry-overlay.active {
    opacity: 0.6;
    animation: sacred-geometry-pulse 8s ease-in-out infinite;
}

@keyframes sacred-geometry-pulse {
    0%, 100% {
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
        opacity: 0.3;
    }
    50% {
        transform: translate(-50%, -50%) scale(1.05) rotate(180deg);
        opacity: 0.8;
    }
}

/* Responsive design */
@media (max-width: 768px) {
    .environmental-narrative-overlay {
        left: 10px;
        right: 10px;
        bottom: 10px;
        padding: 1rem;
    }
    
    .narrative-text {
        font-size: 1rem;
    }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
    .energy-stream,
    .consciousness_motes-particle,
    .sacred-geometry-overlay {
        animation: none !important;
    }
    
    .environmental-narrative-overlay {
        animation: none !important;
    }
}
</style>
`;

// Inject CSS
const atmosphericStyleSheet = document.createElement('style');
atmosphericStyleSheet.textContent = atmosphericCSS;
document.head.appendChild(atmosphericStyleSheet);

// Export for use in the main game
window.UltraEnhancedAtmosphericSystem = UltraEnhancedAtmosphericSystem;

/**
 * Ultra-Enhanced Character Development & Progression System
 * Creates meaningful spiritual growth with visible gameplay impact, dynamic unlocks,
 * and interconnected development across multiple dimensions of consciousness
 */

class UltraEnhancedProgressionSystem {
    constructor(gameStateManager, adventureEngine) {
        this.gameStateManager = gameStateManager;
        this.adventureEngine = adventureEngine;
        
        // Multi-dimensional character development
        this.characterDimensions = {
            spiritual_awareness: {
                level: 0,
                experience: 0,
                maxLevel: 100,
                unlocked_abilities: new Set(),
                mastery_paths: new Map(),
                transcendence_markers: []
            },
            psychological_mastery: {
                level: 0,
                experience: 0,
                maxLevel: 100,
                shadow_integration_progress: 0,
                emotional_intelligence_quotient: 0,
                wisdom_crystallizations: []
            },
            karmic_understanding: {
                level: 0,
                experience: 0,
                maxLevel: 100,
                karmic_debt_resolved: 0,
                dharmic_alignment_score: 0,
                past_life_insights: []
            },
            mystical_attunement: {
                level: 0,
                experience: 0,
                maxLevel: 100,
                dimensional_access_clearance: 0,
                cosmic_consciousness_depth: 0,
                unity_realization_stages: []
            },
            wisdom_embodiment: {
                level: 0,
                experience: 0,
                maxLevel: 100,
                philosophical_understanding_depth: 0,
                teaching_transmission_capacity: 0,
                enlightenment_proximity: 0
            }
        };
        
        // Dynamic ability system with real gameplay impact
        this.dynamicAbilities = {
            // Spiritual Sight Abilities
            spiritual_perception: {
                levels: {
                    1: { name: 'Aura Sensing', effect: 'See energy fields around beings and objects' },
                    2: { name: 'Dimensional Layers', effect: 'Perceive multiple reality layers simultaneously' },
                    3: { name: 'Consciousness Reading', effect: 'Directly perceive others\' states of consciousness' },
                    4: { name: 'Karmic Threads', effect: 'See karmic connections between all beings' },
                    5: { name: 'Unity Vision', effect: 'Perceive the underlying unity of all existence' }
                },
                gameplayImpact: {
                    1: ['reveal_hidden_elements', 'detect_spiritual_presences'],
                    2: ['access_secret_areas', 'see_through_illusions'],
                    3: ['understand_npc_motivations', 'predict_outcomes'],
                    4: ['navigate_karmic_puzzles', 'heal_relationships'],
                    5: ['solve_unity_paradoxes', 'transcend_duality_challenges']
                }
            },
            
            // Mystical Intuition Abilities
            intuitive_knowing: {
                levels: {
                    1: { name: 'Pattern Recognition', effect: 'Instantly recognize hidden patterns' },
                    2: { name: 'Synchronicity Awareness', effect: 'Notice meaningful coincidences' },
                    3: { name: 'Prophetic Glimpses', effect: 'Brief visions of possible futures' },
                    4: { name: 'Akashic Access', effect: 'Tap into universal memory' },
                    5: { name: 'Omniscient Flashes', effect: 'Momentary access to infinite knowledge' }
                },
                gameplayImpact: {
                    1: ['solve_puzzles_faster', 'discover_secrets_easily'],
                    2: ['timing_based_puzzle_mastery', 'perfect_action_timing'],
                    3: ['predict_puzzle_solutions', 'avoid_negative_outcomes'],
                    4: ['access_ancient_knowledge', 'understand_any_language'],
                    5: ['instant_puzzle_comprehension', 'transcendent_problem_solving']
                }
            },
            
            // Emotional Alchemy Abilities
            emotional_mastery: {
                levels: {
                    1: { name: 'Emotional Awareness', effect: 'Recognize emotions as they arise' },
                    2: { name: 'Feeling Transmutation', effect: 'Transform negative emotions into wisdom' },
                    3: { name: 'Empathic Resonance', effect: 'Feel and heal others\' emotional states' },
                    4: { name: 'Love Embodiment', effect: 'Radiate unconditional love naturally' },
                    5: { name: 'Bliss Consciousness', effect: 'Maintain constant state of inner joy' }
                },
                gameplayImpact: {
                    1: ['emotional_stability_bonus', 'resist_fear_effects'],
                    2: ['transform_negative_encounters', 'heal_psychological_damage'],
                    3: ['influence_npc_emotions', 'resolve_conflicts_peacefully'],
                    4: ['convert_enemies_to_allies', 'spread_positive_energy'],
                    5: ['create_harmony_fields', 'achieve_perfect_emotional_balance']
                }
            },
            
            // Karmic Manipulation Abilities
            karmic_mastery: {
                levels: {
                    1: { name: 'Karma Sensing', effect: 'See the karmic weight of actions' },
                    2: { name: 'Debt Resolution', effect: 'Actively resolve karmic debts' },
                    3: { name: 'Dharmic Alignment', effect: 'Always know the righteous path' },
                    4: { name: 'Karmic Acceleration', effect: 'Speed up karmic consequences' },
                    5: { name: 'Karma Transcendence', effect: 'Move beyond the law of karma' }
                },
                gameplayImpact: {
                    1: ['karma_preview_system', 'choice_consequence_prediction'],
                    2: ['instant_karma_balancing', 'negative_karma_healing'],
                    3: ['dharmic_choice_highlighting', 'perfect_moral_compass'],
                    4: ['accelerated_spiritual_growth', 'rapid_lesson_integration'],
                    5: ['transcend_moral_limitations', 'beyond_good_evil_choices']
                }
            },
            
            // Consciousness Manipulation Abilities
            consciousness_mastery: {
                levels: {
                    1: { name: 'Mind Quieting', effect: 'Achieve deep meditative states instantly' },
                    2: { name: 'Thought Observation', effect: 'Watch thoughts without identification' },
                    3: { name: 'Awareness Expansion', effect: 'Expand consciousness beyond body' },
                    4: { name: 'Ego Dissolution', effect: 'Temporarily transcend personal identity' },
                    5: { name: 'Pure Consciousness', effect: 'Rest in awareness itself' }
                },
                gameplayImpact: {
                    1: ['meditation_bonuses', 'mental_clarity_enhancement'],
                    2: ['thought_based_puzzle_mastery', 'mental_interference_immunity'],
                    3: ['remote_viewing_abilities', 'consciousness_projection'],
                    4: ['unity_puzzle_solutions', 'perspective_shifting_powers'],
                    5: ['transcendent_puzzle_bypass', 'direct_knowing_access']
                }
            }
        };
        
        // Achievement system with meaningful rewards
        this.achievementSystem = {
            spiritual_milestones: new Map([
                ['first_awakening', { 
                    name: 'First Glimpse of Truth',
                    description: 'Experience your first moment of spiritual awakening',
                    reward: { ability: 'spiritual_perception', level: 1 },
                    unlocks: ['meditation_chamber_access', 'spiritual_teacher_dialogue']
                }],
                ['shadow_integration', {
                    name: 'Shadow Work Master',
                    description: 'Successfully integrate your shadow aspects',
                    reward: { ability: 'emotional_mastery', level: 2 },
                    unlocks: ['psychological_healing_chamber', 'shadow_guidance_system']
                }],
                ['karmic_liberation', {
                    name: 'Karmic Freedom',
                    description: 'Resolve all major karmic debts',
                    reward: { ability: 'karmic_mastery', level: 3 },
                    unlocks: ['karmic_tribunal_access', 'past_life_integration']
                }],
                ['unity_realization', {
                    name: 'Non-Dual Awareness',
                    description: 'Recognize the unity underlying all apparent diversity',
                    reward: { ability: 'consciousness_mastery', level: 4 },
                    unlocks: ['unity_field_generator', 'transcendence_portal']
                }],
                ['enlightenment_threshold', {
                    name: 'Threshold of Enlightenment',
                    description: 'Approach the final stages of spiritual realization',
                    reward: { ability: 'all_abilities', level: 5 },
                    unlocks: ['teaching_transmission_ability', 'reality_modification_powers']
                }]
            ]),
            
            puzzle_mastery: new Map([
                ['puzzle_virtuoso', {
                    name: 'Puzzle Virtuoso',
                    description: 'Solve 10 complex puzzles without hints',
                    reward: { ability: 'intuitive_knowing', level: 2 },
                    unlocks: ['advanced_puzzle_access', 'puzzle_creation_tools']
                }],
                ['mind_bender', {
                    name: 'Mind Bender',
                    description: 'Solve paradox puzzles using non-linear thinking',
                    reward: { ability: 'consciousness_mastery', level: 2 },
                    unlocks: ['paradox_chamber', 'reality_shifting_puzzles']
                }]
            ]),
            
            wisdom_embodiment: new Map([
                ['philosophical_depth', {
                    name: 'Philosophical Depth',
                    description: 'Demonstrate profound understanding of spiritual principles',
                    reward: { wisdom_points: 100 },
                    unlocks: ['wisdom_council_access', 'teaching_opportunities']
                }],
                ['compassion_embodiment', {
                    name: 'Living Compassion',
                    description: 'Consistently choose compassion in difficult situations',
                    reward: { ability: 'emotional_mastery', level: 3 },
                    unlocks: ['healing_temple_access', 'compassion_amplification']
                }]
            ])
        };
        
        // Visible character transformation system
        this.characterTransformation = {
            physical_manifestation: {
                aura_color: 'dim_white',
                aura_intensity: 0,
                energy_signature: 'basic_human',
                presence_impact: 0,
                consciousness_radiance: 0
            },
            behavioral_changes: {
                dialogue_options: new Set(['basic_responses']),
                action_capabilities: new Set(['standard_actions']),
                perception_filters: new Set(['physical_reality']),
                influence_radius: 0,
                teaching_capacity: 0
            },
            environmental_impact: {
                sacred_space_creation: false,
                reality_stabilization: false,
                consciousness_field_generation: false,
                karmic_healing_emanation: false,
                enlightenment_transmission: false
            }
        };
        
        // Dynamic content unlocking system
        this.contentUnlockSystem = {
            areas: new Map([
                ['meditation_caves', { required_ability: 'spiritual_perception', level: 2 }],
                ['akashic_library', { required_ability: 'intuitive_knowing', level: 3 }],
                ['karmic_tribunal', { required_ability: 'karmic_mastery', level: 3 }],
                ['consciousness_laboratory', { required_ability: 'consciousness_mastery', level: 4 }],
                ['unity_field_chamber', { required_ability: 'all_abilities', level: 4 }],
                ['enlightenment_sanctuary', { required_ability: 'transcendent_state', level: 5 }]
            ]),
            npcs: new Map([
                ['spiritual_master', { required_ability: 'spiritual_perception', level: 3 }],
                ['shadow_guide', { required_ability: 'emotional_mastery', level: 2 }],
                ['karmic_counselor', { required_ability: 'karmic_mastery', level: 2 }],
                ['consciousness_researcher', { required_ability: 'consciousness_mastery', level: 3 }],
                ['enlightened_being', { required_ability: 'transcendent_state', level: 4 }]
            ]),
            storylines: new Map([
                ['advanced_teachings', { required_wisdom: 200 }],
                ['past_life_integration', { required_ability: 'karmic_mastery', level: 3 }],
                ['cosmic_consciousness_journey', { required_ability: 'consciousness_mastery', level: 4 }],
                ['teaching_others_path', { required_ability: 'wisdom_embodiment', level: 4 }],
                ['reality_transcendence_path', { required_ability: 'all_abilities', level: 5 }]
            ])
        };
        
        // Real-time progression feedback
        this.progressionFeedback = {
            visual_indicators: new Map(),
            audio_cues: new Map(),
            environmental_responses: new Map(),
            consciousness_state_display: null,
            growth_trajectory_predictor: null
        };
        
        this.init();
    }
    
    init() {
        this.loadProgressionState();
        this.initializeProgressionInterface();
        this.setupRealTimeProgressionTracking();
        this.activateVisibleCharacterTransformation();
        this.initializeDynamicContentSystem();
        this.startProgressionFeedbackLoop();
    }
    
    initializeProgressionInterface() {
        // Create enhanced progression display that integrates with existing UI
        const progressionContainer = this.createProgressionContainer();
        this.setupProgressionEventListeners();
        this.updateAllProgressionDisplays();
    }
    
    createProgressionContainer() {
        const container = document.createElement('div');
        container.id = 'ultra-progression-system';
        container.className = 'ultra-progression-container';
        container.innerHTML = `
            <!-- Character Consciousness Avatar -->
            <div class="consciousness-avatar-display" id="consciousness-avatar">
                <div class="avatar-title">🧘 Consciousness State</div>
                <div class="avatar-visualization">
                    <canvas id="consciousness-avatar-canvas" width="200" height="200"></canvas>
                    <div class="consciousness-level-indicator" id="consciousness-level">
                        Awakening Seeker
                    </div>
                </div>
                <div class="aura-intensity-meter">
                    <div class="aura-title">Spiritual Radiance</div>
                    <div class="aura-meter">
                        <div class="aura-fill" id="aura-intensity-fill"></div>
                    </div>
                    <div class="aura-color-indicator" id="aura-color"></div>
                </div>
            </div>
            
            <!-- Multi-Dimensional Progress Tracker -->
            <div class="dimensional-progress-tracker" id="dimensional-tracker">
                <div class="tracker-title">📈 Consciousness Development</div>
                <div class="dimension-progress-grid">
                    ${Object.keys(this.characterDimensions).map(dimension => `
                        <div class="dimension-progress-item" data-dimension="${dimension}">
                            <div class="dimension-icon">${this.getDimensionIcon(dimension)}</div>
                            <div class="dimension-info">
                                <div class="dimension-name">${this.formatDimensionName(dimension)}</div>
                                <div class="dimension-level">Level <span id="${dimension}-level">0</span></div>
                                <div class="dimension-progress-bar">
                                    <div class="progress-fill" id="${dimension}-progress" 
                                         style="--dimension-color: ${this.getDimensionColor(dimension)}"></div>
                                </div>
                                <div class="dimension-experience">
                                    <span id="${dimension}-exp">0</span> / <span id="${dimension}-next">100</span> XP
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Dynamic Abilities Showcase -->
            <div class="abilities-showcase" id="abilities-showcase">
                <div class="showcase-title">✨ Awakened Abilities</div>
                <div class="abilities-grid" id="abilities-grid">
                    <!-- Dynamic abilities will be populated here -->
                </div>
                <div class="ability-evolution-tracker">
                    <div class="evolution-title">🌱 Ability Evolution Path</div>
                    <canvas id="ability-evolution-canvas" width="400" height="200"></canvas>
                </div>
            </div>
            
            <!-- Achievement Gallery -->
            <div class="achievement-gallery" id="achievement-gallery">
                <div class="gallery-title">🏆 Spiritual Milestones</div>
                <div class="achievement-categories">
                    <div class="category-tabs">
                        <button class="category-tab active" data-category="spiritual_milestones">Spiritual</button>
                        <button class="category-tab" data-category="puzzle_mastery">Mastery</button>
                        <button class="category-tab" data-category="wisdom_embodiment">Wisdom</button>
                    </div>
                    <div class="achievement-display" id="achievement-display">
                        <!-- Achievements will be populated dynamically -->
                    </div>
                </div>
            </div>
            
            <!-- Transformation Impact Visualization -->
            <div class="transformation-impact-display" id="transformation-impact">
                <div class="impact-title">🌟 Your Impact on Reality</div>
                <div class="impact-metrics">
                    <div class="impact-metric">
                        <div class="metric-icon">🌍</div>
                        <div class="metric-label">Environmental Harmony</div>
                        <div class="metric-value" id="environmental-impact">0%</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-icon">❤️</div>
                        <div class="metric-label">Consciousness Elevation</div>
                        <div class="metric-value" id="consciousness-elevation">0%</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-icon">⚖️</div>
                        <div class="metric-label">Karmic Healing</div>
                        <div class="metric-value" id="karmic-healing-impact">0%</div>
                    </div>
                    <div class="impact-metric">
                        <div class="metric-icon">🌟</div>
                        <div class="metric-label">Enlightenment Radiance</div>
                        <div class="metric-value" id="enlightenment-radiance">0%</div>
                    </div>
                </div>
            </div>
            
            <!-- Real-time Growth Feedback -->
            <div class="growth-feedback-stream" id="growth-feedback">
                <div class="feedback-title">💫 Growth Recognition Stream</div>
                <div class="feedback-messages" id="feedback-messages">
                    <div class="feedback-message">
                        Consciousness awakening... Tracking spiritual development...
                    </div>
                </div>
            </div>
        `;
        
        // Insert into existing UI structure
        const sidePanel = document.querySelector('.enhanced-side-panel') || 
                          document.querySelector('#game-sidebar') || 
                          document.body;
        sidePanel.appendChild(container);
        
        return container;
    }
    
    // Experience awarding system with complex calculation
    awardExperience(category, amount, source, multipliers = {}) {
        const dimension = this.characterDimensions[category];
        if (!dimension) return;
        
        // Calculate experience with multipliers
        let finalAmount = amount;
        
        // Spiritual milestone multipliers
        if (this.hasAchievement('first_awakening')) finalAmount *= 1.2;
        if (this.hasAchievement('shadow_integration')) finalAmount *= 1.15;
        if (this.hasAchievement('unity_realization')) finalAmount *= 1.3;
        
        // Source-specific multipliers
        const sourceMultipliers = {
            'puzzle_solved': 1.0,
            'philosophical_insight': 1.5,
            'compassionate_action': 1.3,
            'shadow_work': 1.4,
            'meditation': 1.2,
            'teaching_others': 1.6,
            'unity_recognition': 2.0
        };
        
        finalAmount *= (sourceMultipliers[source] || 1.0);
        
        // Apply custom multipliers
        Object.values(multipliers).forEach(mult => finalAmount *= mult);
        
        // Award experience
        dimension.experience += Math.round(finalAmount);
        
        // Check for level up
        this.checkLevelUp(category);
        
        // Provide feedback
        this.providePro gressionFeedback(`+${Math.round(finalAmount)} ${this.formatDimensionName(category)} XP from ${source}`);
        
        // Update displays
        this.updateDimensionDisplay(category);
        this.updateCharacterTransformation();
        
        // Check for content unlocks
        this.checkContentUnlocks();
        
        // Save progress
        this.saveProgressionState();
    }
    
    checkLevelUp(dimension) {
        const dim = this.characterDimensions[dimension];
        const experienceForNextLevel = this.calculateExperienceForLevel(dim.level + 1);
        
        if (dim.experience >= experienceForNextLevel && dim.level < dim.maxLevel) {
            const oldLevel = dim.level;
            dim.level++;
            
            // Level up effects
            this.triggerLevelUpEffects(dimension, oldLevel, dim.level);
            
            // Check for ability unlocks
            this.checkAbilityUnlocks(dimension, dim.level);
            
            // Update visual representation
            this.updateCharacterVisualTransformation(dimension, dim.level);
            
            // Provide celebration feedback
            this.celebrateLevelUp(dimension, dim.level);
        }
    }
    
    triggerLevelUpEffects(dimension, oldLevel, newLevel) {
        // Dimension-specific level up effects
        const levelUpEffects = {
            spiritual_awareness: {
                5: () => this.unlockSpiritualSight(),
                10: () => this.unlockDimensionalPerception(),
                20: () => this.unlockUnityGlimpses(),
                50: () => this.unlockCosmicConsciousness(),
                100: () => this.unlockEnlightenmentRealization()
            },
            psychological_mastery: {
                5: () => this.unlockEmotionalIntelligence(),
                10: () => this.unlockShadowIntegration(),
                20: () => this.unlockEmotionalAlchemy(),
                50: () => this.unlockPsychologicalHealing(),
                100: () => this.unlockMindMastery()
            },
            karmic_understanding: {
                5: () => this.unlockKarmaSensing(),
                10: () => this.unlockDebtResolution(),
                20: () => this.unlockDharmicAlignment(),
                50: () => this.unlockKarmicAcceleration(),
                100: () => this.unlockKarmaTranscendence()
            },
            mystical_attunement: {
                5: () => this.unlockIntuitivePowers(),
                10: () => this.unlockPsychicAbilities(),
                20: () => this.unlockDimensionalAccess(),
                50: () => this.unlockCosmicAwareness(),
                100: () => this.unlockMysticalMastery()
            },
            wisdom_embodiment: {
                5: () => this.unlockPhilosophicalInsight(),
                10: () => this.unlockTeachingCapacity(),
                20: () => this.unlockWisdomTransmission(),
                50: () => this.unlockEnlightenedGuidance(),
                100: () => this.unlockPerfectWisdom()
            }
        };
        
        const effectFunction = levelUpEffects[dimension]?.[newLevel];
        if (effectFunction) {
            effectFunction();
        }
        
        // Universal level up benefits
        this.grantUniversalLevelUpBenefits(dimension, newLevel);
    }
    
    grantUniversalLevelUpBenefits(dimension, level) {
        // Increase overall character power
        this.characterTransformation.presence_impact += level * 2;
        this.characterTransformation.consciousness_radiance += level * 1.5;
        
        // Unlock new dialogue options
        this.characterTransformation.behavioral_changes.dialogue_options.add(`${dimension}_level_${level}`);
        
        // Increase environmental impact
        if (level >= 10) {
            this.characterTransformation.environmental_impact.sacred_space_creation = true;
        }
        if (level >= 20) {
            this.characterTransformation.environmental_impact.reality_stabilization = true;
        }
        if (level >= 50) {
            this.characterTransformation.environmental_impact.consciousness_field_generation = true;
        }
        if (level >= 100) {
            this.characterTransformation.environmental_impact.enlightenment_transmission = true;
        }
    }
    
    checkAbilityUnlocks(dimension, level) {
        // Check for new ability unlocks based on dimension and level
        Object.entries(this.dynamicAbilities).forEach(([abilityCategory, abilityData]) => {
            const relevantDimension = this.getRelevantDimension(abilityCategory);
            
            if (relevantDimension === dimension) {
                // Check each level of the ability
                Object.keys(abilityData.levels).forEach(abilityLevel => {
                    const requiredLevel = parseInt(abilityLevel) * 10; // Level 1 ability = Dimension level 10
                    
                    if (level >= requiredLevel && !this.hasAbility(abilityCategory, abilityLevel)) {
                        this.unlockAbility(abilityCategory, abilityLevel);
                    }
                });
            }
        });
    }
    
    unlockAbility(abilityCategory, abilityLevel) {
        const ability = this.dynamicAbilities[abilityCategory];
        if (!ability) return;
        
        const levelData = ability.levels[abilityLevel];
        if (!levelData) return;
        
        // Mark ability as unlocked
        const dimension = this.getRelevantDimension(abilityCategory);
        this.characterDimensions[dimension].unlocked_abilities.add(`${abilityCategory}_${abilityLevel}`);
        
        // Apply gameplay impacts
        const gameplayImpacts = ability.gameplayImpact[abilityLevel] || [];
        gameplayImpacts.forEach(impact => {
            this.applyGameplayImpact(impact, abilityLevel);
        });
        
        // Update character transformation
        this.updateCharacterAbilityTransformation(abilityCategory, abilityLevel);
        
        // Celebrate ability unlock
        this.celebrateAbilityUnlock(abilityCategory, abilityLevel, levelData);
        
        // Check for achievement unlocks
        this.checkAchievementProgress();
    }
    
    applyGameplayImpact(impact, level) {
        const impactMap = {
            // Spiritual Perception Impacts
            'reveal_hidden_elements': () => this.activateHiddenElementReveal(level),
            'detect_spiritual_presences': () => this.activateSpiritualDetection(level),
            'access_secret_areas': () => this.unlockSecretAreaAccess(level),
            'see_through_illusions': () => this.activateIllusionPiercing(level),
            'understand_npc_motivations': () => this.activateMotivationReading(level),
            'predict_outcomes': () => this.activateOutcomePrediction(level),
            'navigate_karmic_puzzles': () => this.activateKarmicNavigation(level),
            'heal_relationships': () => this.activateRelationshipHealing(level),
            'solve_unity_paradoxes': () => this.activateUnityProblemSolving(level),
            'transcend_duality_challenges': () => this.activateDualityTranscendence(level),
            
            // Intuitive Knowing Impacts
            'solve_puzzles_faster': () => this.activateFastPuzzleSolving(level),
            'discover_secrets_easily': () => this.activateSecretDiscovery(level),
            'timing_based_puzzle_mastery': () => this.activateTimingMastery(level),
            'perfect_action_timing': () => this.activatePerfectTiming(level),
            'predict_puzzle_solutions': () => this.activateSolutionPrediction(level),
            'avoid_negative_outcomes': () => this.activateNegativeAvoidance(level),
            'access_ancient_knowledge': () => this.activateAncientKnowledgeAccess(level),
            'understand_any_language': () => this.activateUniversalLanguage(level),
            'instant_puzzle_comprehension': () => this.activateInstantComprehension(level),
            'transcendent_problem_solving': () => this.activateTranscendentSolving(level),
            
            // Emotional Mastery Impacts
            'emotional_stability_bonus': () => this.activateEmotionalStability(level),
            'resist_fear_effects': () => this.activateFearResistance(level),
            'transform_negative_encounters': () => this.activateNegativeTransformation(level),
            'heal_psychological_damage': () => this.activatePsychologicalHealing(level),
            'influence_npc_emotions': () => this.activateEmotionalInfluence(level),
            'resolve_conflicts_peacefully': () => this.activatePeacefulResolution(level),
            'convert_enemies_to_allies': () => this.activateEnemyConversion(level),
            'spread_positive_energy': () => this.activatePositiveEnergyField(level),
            'create_harmony_fields': () => this.activateHarmonyFieldGeneration(level),
            'achieve_perfect_emotional_balance': () => this.activatePerfectEmotionalBalance(level)
        };
        
        const impactFunction = impactMap[impact];
        if (impactFunction) {
            impactFunction();
            this.providePro gressionFeedback(`🌟 Gameplay Enhancement Activated: ${this.formatImpactName(impact)}`);
        }
    }
    
    // Specific gameplay impact implementations
    activateHiddenElementReveal(level) {
        // Reveal hidden elements in the current scene based on level
        const hiddenElements = document.querySelectorAll('.hidden-element, .secret-element');
        hiddenElements.forEach((element, index) => {
            if (index < level * 2) { // Reveal more elements with higher levels
                element.style.opacity = '0.7';
                element.classList.add('spiritually-revealed');
                element.title = 'Revealed by Spiritual Sight';
            }
        });
    }
    
    activateSecretAreaAccess(level) {
        // Unlock secret areas based on level
        const secretAreas = ['meditation_caves', 'hidden_shrines', 'astral_planes', 'akashic_records', 'unity_chambers'];
        for (let i = 0; i < Math.min(level, secretAreas.length); i++) {
            this.unlockArea(secretAreas[i]);
        }
    }
    
    activateFastPuzzleSolving(level) {
        // Reduce puzzle solving time and provide hints
        const puzzleContainers = document.querySelectorAll('.puzzle-container, .enhanced-puzzle-area');
        puzzleContainers.forEach(container => {
            container.setAttribute('data-fast-solve-level', level);
            container.classList.add('intuition-enhanced');
        });
        
        // Add hint system
        if (level >= 2) {
            this.activateIntuitivePuzzleHints();
        }
    }
    
    activateEmotionalStability(level) {
        // Provide emotional stability bonuses
        this.characterTransformation.behavioral_changes.emotional_resilience = level * 20;
        
        // Visual feedback
        const emotionalMeters = document.querySelectorAll('.emotional-meter, .psychological-meter');
        emotionalMeters.forEach(meter => {
            meter.classList.add('emotionally-stable');
            meter.setAttribute('data-stability-bonus', level);
        });
    }
    
    updateCharacterVisualTransformation(dimension, level) {
        // Update aura visualization
        this.updateAuraVisualization(dimension, level);
        
        // Update consciousness avatar
        this.updateConsciousnessAvatar();
        
        // Update environmental effects
        this.updateEnvironmentalEffects(dimension, level);
        
        // Update character presence
        this.updateCharacterPresence();
    }
    
    updateAuraVisualization(dimension, level) {
        const auraFill = document.getElementById('aura-intensity-fill');
        const auraColor = document.getElementById('aura-color');
        
        if (auraFill && auraColor) {
            // Calculate aura intensity based on all dimensions
            const totalLevels = Object.values(this.characterDimensions).reduce((sum, dim) => sum + dim.level, 0);
            const auraIntensity = Math.min(100, totalLevels * 2);
            
            auraFill.style.width = `${auraIntensity}%`;
            
            // Determine aura color based on highest dimension
            const highestDimension = this.getHighestDimension();
            const auraColors = {
                'spiritual_awareness': 'Golden Light',
                'psychological_mastery': 'Healing Blue',
                'karmic_understanding': 'Purple Wisdom',
                'mystical_attunement': 'Silver Radiance',
                'wisdom_embodiment': 'Pure White Light'
            };
            
            auraColor.textContent = auraColors[highestDimension] || 'Developing Light';
            auraColor.style.color = this.getDimensionColor(highestDimension);
        }
    }
    
    updateConsciousnessAvatar() {
        const canvas = document.getElementById('consciousness-avatar-canvas');
        const levelIndicator = document.getElementById('consciousness-level');
        
        if (canvas && levelIndicator) {
            const ctx = canvas.getContext('2d');
            this.drawConsciousnessAvatar(ctx);
            
            // Update consciousness level title
            const level = this.calculateOverallConsciousnessLevel();
            const levelTitles = {
                0: 'Sleeping Seeker',
                10: 'Awakening Student',
                25: 'Conscious Practitioner',
                50: 'Wise Seeker',
                75: 'Enlightened Teacher',
                90: 'Realized Master',
                100: 'Transcendent Being'
            };
            
            const title = Object.entries(levelTitles)
                .reverse()
                .find(([threshold]) => level >= threshold)?.[1] || 'Developing Consciousness';
            
            levelIndicator.textContent = title;
        }
    }
    
    drawConsciousnessAvatar(ctx) {
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw consciousness field based on development
        const dimensions = this.characterDimensions;
        
        // Base consciousness circle
        const baseRadius = 30;
        ctx.fillStyle = `rgba(255, 197, 143, ${0.3 + dimensions.spiritual_awareness.level * 0.01})`;
        ctx.beginPath();
        ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Dimension-specific energy rings
        Object.entries(dimensions).forEach(([name, data], index) => {
            const radius = baseRadius + (index + 1) * 15;
            const intensity = data.level / 100;
            const color = this.getDimensionColor(name);
            
            ctx.strokeStyle = this.hexToRgba(color, intensity);
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.stroke();
        });
        
        // Central consciousness point
        ctx.fillStyle = '#ffc58f';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
        ctx.fill();
    }
    
    checkAchievementProgress() {
        // Check all achievement categories
        Object.entries(this.achievementSystem).forEach(([category, achievements]) => {
            achievements.forEach((achievement, achievementId) => {
                if (!this.hasAchievement(achievementId)) {
                    if (this.meetsAchievementRequirements(achievementId, achievement)) {
                        this.unlockAchievement(achievementId, achievement);
                    }
                }
            });
        });
    }
    
    meetsAchievementRequirements(achievementId, achievement) {
        // Achievement-specific requirement checking
        const requirementChecks = {
            'first_awakening': () => {
                return Object.values(this.characterDimensions).some(dim => dim.level >= 5);
            },
            'shadow_integration': () => {
                return this.characterDimensions.psychological_mastery.level >= 15 &&
                       this.hasCompletedPuzzle('BarrierOfNegativity');
            },
            'karmic_liberation': () => {
                return this.characterDimensions.karmic_understanding.level >= 25 &&
                       this.gameStateManager.playerState.karma >= 50;
            },
            'unity_realization': () => {
                return this.characterDimensions.mystical_attunement.level >= 30 &&
                       this.hasCompletedPuzzle('BanyanTreeHarmony');
            },
            'enlightenment_threshold': () => {
                return Object.values(this.characterDimensions).every(dim => dim.level >= 50);
            },
            'puzzle_virtuoso': () => {
                const stats = this.gameStateManager.playerState.stats || {};
                return (stats.puzzlesSolvedWithoutHints || 0) >= 10;
            },
            'philosophical_depth': () => {
                return this.adventureEngine.philosophicalInsights.length >= 20;
            },
            'compassion_embodiment': () => {
                const karma = this.gameStateManager.playerState.karma || 0;
                const compassionateChoices = this.getCompassionateChoiceCount();
                return karma >= 100 && compassionateChoices >= 15;
            }
        };
        
        const checker = requirementChecks[achievementId];
        return checker ? checker() : false;
    }
    
    unlockAchievement(achievementId, achievement) {
        // Mark achievement as unlocked
        if (!this.unlockedAchievements) {
            this.unlockedAchievements = new Set();
        }
        this.unlockedAchievements.add(achievementId);
        
        // Apply achievement rewards
        if (achievement.reward) {
            this.applyAchievementReward(achievement.reward);
        }
        
        // Unlock new content
        if (achievement.unlocks) {
            achievement.unlocks.forEach(unlock => {
                this.processContentUnlock(unlock);
            });
        }
        
        // Celebrate achievement
        this.celebrateAchievement(achievementId, achievement);
        
        // Update display
        this.updateAchievementDisplay();
    }
    
    celebrateAchievement(achievementId, achievement) {
        // Create achievement celebration effect
        this.createAchievementCelebrationEffect(achievement.name);
        
        // Provide feedback
        this.providePro gressionFeedback(`🏆 Achievement Unlocked: ${achievement.name}!`);
        
        // Audio celebration
        this.playAchievementSound();
        
        // Update character transformation
        this.updateCharacterTransformation();
    }
    
    createAchievementCelebrationEffect(achievementName) {
        const celebration = document.createElement('div');
        celebration.className = 'achievement-celebration';
        celebration.innerHTML = `
            <div class="celebration-content">
                <div class="celebration-icon">🏆</div>
                <div class="celebration-title">Achievement Unlocked!</div>
                <div class="celebration-name">${achievementName}</div>
            </div>
        `;
        celebration.style.cssText = `
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
            z-index: 10000;
            animation: achievement-celebration 4s ease-out forwards;
            text-align: center;
            font-family: 'Cinzel', serif;
        `;
        
        document.body.appendChild(celebration);
        setTimeout(() => celebration.remove(), 4000);
    }
    
    updateAllProgressionDisplays() {
        // Update all dimension displays
        Object.keys(this.characterDimensions).forEach(dimension => {
            this.updateDimensionDisplay(dimension);
        });
        
        // Update abilities display
        this.updateAbilitiesDisplay();
        
        // Update achievement display
        this.updateAchievementDisplay();
        
        // Update impact metrics
        this.updateImpactMetrics();
        
        // Update avatar and aura
        this.updateConsciousnessAvatar();
        this.updateAuraVisualization();
    }
    
    updateDimensionDisplay(dimension) {
        const dim = this.characterDimensions[dimension];
        const levelElement = document.getElementById(`${dimension}-level`);
        const progressElement = document.getElementById(`${dimension}-progress`);
        const expElement = document.getElementById(`${dimension}-exp`);
        const nextElement = document.getElementById(`${dimension}-next`);
        
        if (levelElement) levelElement.textContent = dim.level;
        if (expElement) expElement.textContent = dim.experience;
        
        if (progressElement) {
            const expForCurrentLevel = this.calculateExperienceForLevel(dim.level);
            const expForNextLevel = this.calculateExperienceForLevel(dim.level + 1);
            const progressPercentage = ((dim.experience - expForCurrentLevel) / (expForNextLevel - expForCurrentLevel)) * 100;
            progressElement.style.width = `${Math.min(100, progressPercentage)}%`;
        }
        
        if (nextElement) {
            const expForNextLevel = this.calculateExperienceForLevel(dim.level + 1);
            nextElement.textContent = expForNextLevel;
        }
    }
    
    // Utility methods
    calculateExperienceForLevel(level) {
        // Exponential experience curve with spiritual progression in mind
        return Math.floor(100 * Math.pow(1.5, level - 1));
    }
    
    getDimensionIcon(dimension) {
        const icons = {
            'spiritual_awareness': '🧘',
            'psychological_mastery': '🧠',
            'karmic_understanding': '⚖️',
            'mystical_attunement': '🔮',
            'wisdom_embodiment': '📚'
        };
        return icons[dimension] || '✨';
    }
    
    getDimensionColor(dimension) {
        const colors = {
            'spiritual_awareness': '#ffc58f',
            'psychological_mastery': '#4a90e2',
            'karmic_understanding': '#8b7d9b',
            'mystical_attunement': '#e09658',
            'wisdom_embodiment': '#d4af37'
        };
        return colors[dimension] || '#ffffff';
    }
    
    formatDimensionName(dimension) {
        return dimension.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    getRelevantDimension(abilityCategory) {
        const mapping = {
            'spiritual_perception': 'spiritual_awareness',
            'intuitive_knowing': 'mystical_attunement',
            'emotional_mastery': 'psychological_mastery',
            'karmic_mastery': 'karmic_understanding',
            'consciousness_mastery': 'wisdom_embodiment'
        };
        return mapping[abilityCategory] || 'spiritual_awareness';
    }
    
    hasAbility(category, level) {
        const dimension = this.getRelevantDimension(category);
        return this.characterDimensions[dimension].unlocked_abilities.has(`${category}_${level}`);
    }
    
    hasAchievement(achievementId) {
        return this.unlockedAchievements && this.unlockedAchievements.has(achievementId);
    }
    
    hasCompletedPuzzle(puzzleId) {
        return this.gameStateManager.worldState[`${puzzleId}_completed`] || false;
    }
    
    getHighestDimension() {
        return Object.entries(this.characterDimensions)
            .reduce((highest, [name, data]) => 
                data.level > (this.characterDimensions[highest]?.level || 0) ? name : highest, 
                'spiritual_awareness'
            );
    }
    
    calculateOverallConsciousnessLevel() {
        const totalLevels = Object.values(this.characterDimensions).reduce((sum, dim) => sum + dim.level, 0);
        const maxPossibleLevels = Object.keys(this.characterDimensions).length * 100;
        return Math.round((totalLevels / maxPossibleLevels) * 100);
    }
    
    providePro gressionFeedback(message) {
        const feedbackMessages = document.getElementById('feedback-messages');
        if (feedbackMessages) {
            const messageElement = document.createElement('div');
            messageElement.className = 'feedback-message new';
            messageElement.textContent = message;
            
            feedbackMessages.insertBefore(messageElement, feedbackMessages.firstChild);
            
            // Fade in new message
            setTimeout(() => messageElement.classList.remove('new'), 100);
            
            // Remove old messages
            const messages = feedbackMessages.querySelectorAll('.feedback-message');
            if (messages.length > 10) {
                messages[messages.length - 1].remove();
            }
        }
        
        console.log(`Progression: ${message}`);
    }
    
    // Save/load progression state
    saveProgressionState() {
        const state = {
            characterDimensions: this.characterDimensions,
            characterTransformation: this.characterTransformation,
            unlockedAchievements: this.unlockedAchievements ? Array.from(this.unlockedAchievements) : [],
            progressionHistory: this.progressionHistory || [],
            lastSaveTimestamp: Date.now()
        };
        
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.ultra_progression_state = state;
        }
    }
    
    loadProgressionState() {
        if (this.gameStateManager && 
            this.gameStateManager.worldState && 
            this.gameStateManager.worldState.ultra_progression_state) {
            
            const state = this.gameStateManager.worldState.ultra_progression_state;
            
            this.characterDimensions = { ...this.characterDimensions, ...state.characterDimensions };
            this.characterTransformation = { ...this.characterTransformation, ...state.characterTransformation };
            this.unlockedAchievements = new Set(state.unlockedAchievements || []);
            this.progressionHistory = state.progressionHistory || [];
        }
    }
    
    // Placeholder methods for complex systems (would be fully implemented)
    setupProgressionEventListeners() { /* Event listener setup */ }
    setupRealTimeProgressionTracking() { /* Real-time tracking */ }
    activateVisibleCharacterTransformation() { /* Visual transformation */ }
    initializeDynamicContentSystem() { /* Content system */ }
    startProgressionFeedbackLoop() { /* Feedback loop */ }
    celebrateLevelUp(dimension, level) { /* Level up celebration */ }
    celebrateAbilityUnlock(category, level, data) { /* Ability unlock celebration */ }
    unlockArea(areaId) { /* Area unlocking */ }
    activateIntuitivePuzzleHints() { /* Puzzle hint system */ }
    updateEnvironmentalEffects(dimension, level) { /* Environmental effects */ }
    updateCharacterPresence() { /* Character presence */ }
    updateAbilitiesDisplay() { /* Abilities display */ }
    updateAchievementDisplay() { /* Achievement display */ }
    updateImpactMetrics() { /* Impact metrics */ }
    applyAchievementReward(reward) { /* Apply rewards */ }
    processContentUnlock(unlock) { /* Process unlocks */ }
    playAchievementSound() { /* Achievement audio */ }
    getCompassionateChoiceCount() { return 0; }
    updateCharacterTransformation() { /* Character transformation */ }
    checkContentUnlocks() { /* Content unlock checking */ }
    updateCharacterAbilityTransformation(category, level) { /* Ability transformation */ }
    hexToRgba(hex, alpha) { return `rgba(255, 255, 255, ${alpha})`; }
    formatImpactName(impact) { return impact.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); }
    
    // Placeholder gameplay impact methods
    activateSpiritualDetection(level) { /* Spiritual detection */ }
    activateIllusionPiercing(level) { /* Illusion piercing */ }
    activateMotivationReading(level) { /* Motivation reading */ }
    activateOutcomePrediction(level) { /* Outcome prediction */ }
    activateKarmicNavigation(level) { /* Karmic navigation */ }
    activateRelationshipHealing(level) { /* Relationship healing */ }
    activateUnityProblemSolving(level) { /* Unity problem solving */ }
    activateDualityTranscendence(level) { /* Duality transcendence */ }
    activateSecretDiscovery(level) { /* Secret discovery */ }
    activateTimingMastery(level) { /* Timing mastery */ }
    activatePerfectTiming(level) { /* Perfect timing */ }
    activateSolutionPrediction(level) { /* Solution prediction */ }
    activateNegativeAvoidance(level) { /* Negative avoidance */ }
    activateAncientKnowledgeAccess(level) { /* Ancient knowledge */ }
    activateUniversalLanguage(level) { /* Universal language */ }
    activateInstantComprehension(level) { /* Instant comprehension */ }
    activateTranscendentSolving(level) { /* Transcendent solving */ }
    activateFearResistance(level) { /* Fear resistance */ }
    activateNegativeTransformation(level) { /* Negative transformation */ }
    activatePsychologicalHealing(level) { /* Psychological healing */ }
    activateEmotionalInfluence(level) { /* Emotional influence */ }
    activatePeacefulResolution(level) { /* Peaceful resolution */ }
    activateEnemyConversion(level) { /* Enemy conversion */ }
    activatePositiveEnergyField(level) { /* Positive energy field */ }
    activateHarmonyFieldGeneration(level) { /* Harmony field generation */ }
    activatePerfectEmotionalBalance(level) { /* Perfect emotional balance */ }
    
    // Spiritual ability unlock methods
    unlockSpiritualSight() { /* Spiritual sight unlocking */ }
    unlockDimensionalPerception() { /* Dimensional perception */ }
    unlockUnityGlimpses() { /* Unity glimpses */ }
    unlockCosmicConsciousness() { /* Cosmic consciousness */ }
    unlockEnlightenmentRealization() { /* Enlightenment realization */ }
    unlockEmotionalIntelligence() { /* Emotional intelligence */ }
    unlockShadowIntegration() { /* Shadow integration */ }
    unlockEmotionalAlchemy() { /* Emotional alchemy */ }
    unlockPsychologicalHealing() { /* Psychological healing */ }
    unlockMindMastery() { /* Mind mastery */ }
    unlockKarmaSensing() { /* Karma sensing */ }
    unlockDebtResolution() { /* Debt resolution */ }
    unlockDharmicAlignment() { /* Dharmic alignment */ }
    unlockKarmicAcceleration() { /* Karmic acceleration */ }
    unlockKarmaTranscendence() { /* Karma transcendence */ }
    unlockIntuitivePowers() { /* Intuitive powers */ }
    unlockPsychicAbilities() { /* Psychic abilities */ }
    unlockDimensionalAccess() { /* Dimensional access */ }
    unlockCosmicAwareness() { /* Cosmic awareness */ }
    unlockMysticalMastery() { /* Mystical mastery */ }
    unlockPhilosophicalInsight() { /* Philosophical insight */ }
    unlockTeachingCapacity() { /* Teaching capacity */ }
    unlockWisdomTransmission() { /* Wisdom transmission */ }
    unlockEnlightenedGuidance() { /* Enlightened guidance */ }
    unlockPerfectWisdom() { /* Perfect wisdom */ }
    grantUniversalLevelUpBenefits(dimension, level) { /* Universal benefits */ }
}

// CSS for the ultra-enhanced progression system
const ultraProgressionCSS = `
<style>
.ultra-progression-container {
    background: rgba(13, 11, 8, 0.95);
    border: 2px solid rgba(255, 197, 143, 0.3);
    border-radius: 16px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(15px);
    max-height: 80vh;
    overflow-y: auto;
}

.consciousness-avatar-display {
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem;
    background: rgba(255, 197, 143, 0.1);
    border-radius: 12px;
}

.avatar-title {
    font-family: 'Cinzel', serif;
    color: #ffc58f;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.avatar-visualization {
    position: relative;
    display: inline-block;
}

.consciousness-level-indicator {
    margin-top: 0.5rem;
    font-weight: bold;
    color: #d4af37;
    font-size: 0.9rem;
}

.aura-intensity-meter {
    margin-top: 1rem;
}

.aura-title {
    font-size: 0.9rem;
    color: #dcd1c7;
    margin-bottom: 0.5rem;
}

.aura-meter {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
}

.aura-fill {
    height: 100%;
    background: linear-gradient(90deg, #ffc58f, #d4af37);
    border-radius: 4px;
    transition: width 1s ease;
    box-shadow: 0 0 10px rgba(255, 197, 143, 0.6);
}

.aura-color-indicator {
    font-size: 0.8rem;
    font-style: italic;
}

.dimensional-progress-tracker {
    margin-bottom: 2rem;
}

.tracker-title {
    font-family: 'Cinzel', serif;
    color: #ffc58f;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
}

.dimension-progress-grid {
    display: grid;
    gap: 1rem;
}

.dimension-progress-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.dimension-progress-item:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
}

.dimension-icon {
    font-size: 1.5rem;
    width: 40px;
    text-align: center;
}

.dimension-info {
    flex: 1;
}

.dimension-name {
    font-weight: bold;
    color: #dcd1c7;
    margin-bottom: 0.3rem;
}

.dimension-level {
    font-size: 0.9rem;
    color: #918070;
    margin-bottom: 0.5rem;
}

.dimension-progress-bar {
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 0.3rem;
}

.progress-fill {
    height: 100%;
    background: var(--dimension-color, #ffc58f);
    border-radius: 3px;
    transition: width 0.8s ease;
    box-shadow: 0 0 6px var(--dimension-color, #ffc58f);
}

.dimension-experience {
    font-size: 0.8rem;
    color: #918070;
}

.abilities-showcase {
    margin-bottom: 2rem;
    background: rgba(255, 197, 143, 0.05);
    border-radius: 12px;
    padding: 1.5rem;
}

.showcase-title {
    font-family: 'Cinzel', serif;
    color: #ffc58f;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
}

.abilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.ability-item {
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    transition: all 0.4s ease;
}

.ability-item.unlocked {
    border-color: rgba(255, 197, 143, 0.6);
    box-shadow: 0 0 15px rgba(255, 197, 143, 0.3);
    animation: ability-glow 2s ease-in-out infinite alternate;
}

@keyframes ability-glow {
    0% { box-shadow: 0 0 15px rgba(255, 197, 143, 0.3); }
    100% { box-shadow: 0 0 25px rgba(255, 197, 143, 0.6); }
}

.ability-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.ability-name {
    font-weight: bold;
    color: #ffc58f;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
}

.ability-description {
    font-size: 0.8rem;
    color: #918070;
    line-height: 1.3;
}

.achievement-gallery {
    margin-bottom: 2rem;
}

.gallery-title {
    font-family: 'Cinzel', serif;
    color: #d4af37;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
}

.category-tabs {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.category-tab {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: #dcd1c7;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    font-size: 0.8rem;
}

.category-tab.active {
    background: rgba(212, 175, 55, 0.3);
    border-color: #d4af37;
    color: #d4af37;
}

.category-tab:hover:not(.active) {
    background: rgba(255, 255, 255, 0.15);
}

.achievement-display {
    min-height: 150px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    padding: 1rem;
}

.achievement-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    margin-bottom: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.achievement-item.unlocked {
    border-color: rgba(212, 175, 55, 0.6);
    background: rgba(212, 175, 55, 0.1);
}

.achievement-icon {
    font-size: 1.5rem;
    width: 40px;
    text-align: center;
}

.achievement-info {
    flex: 1;
}

.achievement-name {
    font-weight: bold;
    color: #d4af37;
    margin-bottom: 0.3rem;
}

.achievement-description {
    font-size: 0.9rem;
    color: #918070;
    line-height: 1.3;
}

.transformation-impact-display {
    margin-bottom: 2rem;
    background: rgba(139, 125, 155, 0.05);
    border-radius: 12px;
    padding: 1.5rem;
}

.impact-title {
    font-family: 'Cinzel', serif;
    color: #8b7d9b;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
}

.impact-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.impact-metric {
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1rem;
}

.metric-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.metric-label {
    font-size: 0.8rem;
    color: #dcd1c7;
    margin-bottom: 0.3rem;
}

.metric-value {
    font-weight: bold;
    color: #8b7d9b;
    font-size: 1.1rem;
}

.growth-feedback-stream {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    padding: 1rem;
}

.feedback-title {
    font-family: 'Cinzel', serif;
    color: #ffc58f;
    margin-bottom: 1rem;
    text-align: center;
}

.feedback-messages {
    max-height: 150px;
    overflow-y: auto;
}

.feedback-message {
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    margin-bottom: 0.5rem;
    color: #dcd1c7;
    font-size: 0.9rem;
    opacity: 1;
    transition: opacity 0.3s ease;
}

.feedback-message.new {
    opacity: 0;
    animation: feedback-fade-in 0.5s ease forwards;
}

@keyframes feedback-fade-in {
    to { opacity: 1; }
}

@keyframes achievement-celebration {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
    }
    20% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1);
    }
    80% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
}

.celebration-content {
    text-align: center;
}

.celebration-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.celebration-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.celebration-name {
    font-size: 1.2rem;
    font-style: italic;
}

/* Responsive design */
@media (max-width: 768px) {
    .ultra-progression-container {
        padding: 1rem;
    }
    
    .dimension-progress-item {
        flex-direction: column;
        text-align: center;
    }
    
    .abilities-grid {
        grid-template-columns: 1fr;
    }
    
    .impact-metrics {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .category-tabs {
        flex-direction: column;
        align-items: center;
    }
}

/* Enhanced visual effects for progression elements */
.spiritually-revealed {
    animation: spiritual-reveal 2s ease-out;
    filter: drop-shadow(0 0 10px rgba(255, 197, 143, 0.6));
}

@keyframes spiritual-reveal {
    0% {
        opacity: 0;
        filter: blur(5px) drop-shadow(0 0 0px transparent);
    }
    100% {
        opacity: 0.7;
        filter: blur(0px) drop-shadow(0 0 10px rgba(255, 197, 143, 0.6));
    }
}

.intuition-enhanced {
    position: relative;
}

.intuition-enhanced::after {
    content: '👁️ Intuition Active';
    position: absolute;
    top: -30px;
    right: 10px;
    background: rgba(255, 197, 143, 0.9);
    color: #0d0b08;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: bold;
    animation: pulse 2s ease-in-out infinite;
}

.emotionally-stable {
    border: 2px solid rgba(46, 204, 113, 0.5);
    background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), transparent);
}

@keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}
</style>
`;

// Inject CSS
const progressionStyleSheet = document.createElement('style');
progressionStyleSheet.textContent = ultraProgressionCSS;
document.head.appendChild(progressionStyleSheet);

// Export for use in the main game
window.UltraEnhancedProgressionSystem = UltraEnhancedProgressionSystem;
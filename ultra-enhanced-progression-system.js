/**
 * Ultra-Enhanced Progression System
 * A comprehensive spiritual development tracking system that goes beyond traditional RPG mechanics
 * to create meaningful progression through consciousness expansion and wisdom integration
 */

class UltraEnhancedProgressionSystem {
    constructor(gameStateManager) {
        this.gameStateManager = gameStateManager;
        
        // Multi-dimensional progression tracking
        this.consciousnessLevels = this.initializeConsciousnessLevels();
        this.wisdomTraditions = this.initializeWisdomTraditions();
        this.spiritualAbilities = this.initializeSpiritualAbilities();
        this.karmaLaws = this.initializeKarmaLaws();
        this.dharmicProgression = this.initializeDharmicProgression();
        this.realizations = this.initializeRealizations();
        
        // Achievement and milestone systems
        this.spiritualMilestones = new Map();
        this.wisdomAchievements = new Map();
        this.compassionMilestones = new Map();
        this.enlightenmentProgress = new Map();
        
        // Integration tracking
        this.experientialWisdom = new Map();
        this.characterTransformation = new Map();
        this.relationalGrowth = new Map();
        this.serviceContributions = new Map();
        
        this.init();
    }
    
    initializeConsciousnessLevels() {
        return {
            reactive: {
                name: 'Reactive Consciousness',
                description: 'Unconsciously driven by emotions and external circumstances',
                requirements: { awakening: 0 },
                capacities: [
                    'basic_self_awareness',
                    'emotional_recognition',
                    'choice_awareness'
                ],
                challenges: [
                    'emotional_reactivity',
                    'victim_consciousness',
                    'blame_patterns'
                ],
                growthOpportunities: [
                    'mindfulness_practice',
                    'emotional_intelligence_development',
                    'response_choice_recognition'
                ]
            },
            
            responsive: {
                name: 'Responsive Consciousness',
                description: 'Able to pause between stimulus and response, making conscious choices',
                requirements: { awakening: 25 },
                capacities: [
                    'emotional_regulation',
                    'conscious_choice_making',
                    'perspective_taking',
                    'basic_empathy'
                ],
                challenges: [
                    'habitual_patterns',
                    'ego_defensiveness',
                    'limited_perspective'
                ],
                growthOpportunities: [
                    'meditation_practice',
                    'shadow_work_introduction',
                    'compassion_cultivation'
                ]
            },
            
            creative: {
                name: 'Creative Consciousness',
                description: 'Actively creating responses that serve growth and harmony',
                requirements: { awakening: 50 },
                capacities: [
                    'proactive_creation',
                    'win_win_thinking',
                    'systems_awareness',
                    'intuitive_guidance'
                ],
                challenges: [
                    'spiritual_ego',
                    'perfectionism',
                    'controlling_tendencies'
                ],
                growthOpportunities: [
                    'surrender_practice',
                    'service_orientation',
                    'wisdom_integration'
                ]
            },
            
            integral: {
                name: 'Integral Consciousness',
                description: 'Integrating multiple perspectives and levels of reality',
                requirements: { awakening: 75 },
                capacities: [
                    'multi_perspective_holding',
                    'paradox_integration',
                    'wisdom_discernment',
                    'compassionate_action'
                ],
                challenges: [
                    'complexity_overwhelm',
                    'spiritual_bypassing',
                    'teacher_projection'
                ],
                growthOpportunities: [
                    'non_dual_inquiry',
                    'embodied_wisdom',
                    'authentic_service'
                ]
            },
            
            transcendent: {
                name: 'Transcendent Consciousness',
                description: 'Established in awareness beyond all states and stages',
                requirements: { awakening: 95 },
                capacities: [
                    'non_dual_recognition',
                    'effortless_presence',
                    'spontaneous_compassion',
                    'wisdom_transmission'
                ],
                challenges: [
                    'integration_with_human_form',
                    'communication_across_levels',
                    'maintaining_relatability'
                ],
                growthOpportunities: [
                    'embodied_enlightenment',
                    'conscious_teaching',
                    'bodhisattva_vow'
                ]
            }
        };
    }
    
    initializeWisdomTraditions() {
        return {
            advaita_vedanta: {
                name: 'Advaita Vedanta',
                description: 'Non-dual wisdom recognizing the unity of all existence',
                keyPractices: [
                    'self_inquiry_who_am_i',
                    'neti_neti_discrimination',
                    'witness_consciousness_cultivation',
                    'maya_recognition'
                ],
                progressionStages: [
                    'intellectual_understanding',
                    'glimpse_experiences',
                    'stabilizing_recognition',
                    'abiding_realization'
                ],
                masterTeachers: ['Ramana Maharshi', 'Nisargadatta Maharaj', 'Papaji'],
                currentProgress: 0
            },
            
            karma_yoga: {
                name: 'Karma Yoga',
                description: 'The path of selfless action and service',
                keyPractices: [
                    'selfless_service',
                    'action_without_attachment',
                    'dharmic_duty_fulfillment',
                    'ego_dissolution_through_service'
                ],
                progressionStages: [
                    'service_motivation',
                    'ego_reduction',
                    'selfless_action',
                    'action_as_worship'
                ],
                masterTeachers: ['Krishna', 'Mahatma Gandhi', 'Mother Teresa'],
                currentProgress: 0
            },
            
            bhakti_yoga: {
                name: 'Bhakti Yoga',
                description: 'The path of devotion and divine love',
                keyPractices: [
                    'devotional_surrender',
                    'divine_name_repetition',
                    'love_cultivation',
                    'ego_offering'
                ],
                progressionStages: [
                    'emotional_devotion',
                    'heart_opening',
                    'divine_love_recognition',
                    'lover_beloved_unity'
                ],
                masterTeachers: ['Mirabai', 'Tulsidas', 'Rumi'],
                currentProgress: 0
            },
            
            raja_yoga: {
                name: 'Raja Yoga',
                description: 'The royal path of meditation and mental mastery',
                keyPractices: [
                    'eight_limbed_path',
                    'meditation_mastery',
                    'mind_control',
                    'samadhi_achievement'
                ],
                progressionStages: [
                    'ethical_foundation',
                    'physical_preparation',
                    'mental_concentration',
                    'transcendent_absorption'
                ],
                masterTeachers: ['Patanjali', 'Swami Vivekananda', 'Paramahansa Yogananda'],
                currentProgress: 0
            }
        };
    }
    
    initializeSpiritualAbilities() {
        return {
            // Perception Abilities
            energy_sensing: {
                name: 'Energy Field Perception',
                description: 'Ability to perceive subtle energy fields around beings and objects',
                developmentStages: ['basic_sensitivity', 'color_perception', 'detailed_analysis', 'healing_guidance'],
                prerequisites: ['mindfulness_foundation'],
                applications: ['healing_work', 'environmental_assessment', 'relationship_dynamics']
            },
            
            intuitive_knowing: {
                name: 'Intuitive Wisdom Access',
                description: 'Direct knowing that bypasses rational analysis',
                developmentStages: ['gut_feelings', 'symbolic_insights', 'direct_knowing', 'omniscient_wisdom'],
                prerequisites: ['mental_quieting'],
                applications: ['decision_making', 'problem_solving', 'creative_inspiration']
            },
            
            empathic_resonance: {
                name: 'Empathic Resonance',
                description: 'Deep feeling connection with all life forms',
                developmentStages: ['emotional_sensitivity', 'emotional_mirroring', 'healing_empathy', 'cosmic_compassion'],
                prerequisites: ['heart_opening'],
                applications: ['healing_work', 'counseling', 'environmental_healing']
            },
            
            // Transformation Abilities
            consciousness_transmission: {
                name: 'Consciousness Transmission',
                description: 'Ability to transmit awakened states to others',
                developmentStages: ['presence_sharing', 'peace_transmission', 'wisdom_downloading', 'enlightenment_catalyst'],
                prerequisites: ['stabilized_awakening'],
                applications: ['teaching', 'healing', 'awakening_facilitation']
            },
            
            reality_shaping: {
                name: 'Conscious Reality Shaping',
                description: 'Ability to influence reality through conscious intention',
                developmentStages: ['positive_thinking', 'manifestation_skill', 'co_creation_mastery', 'reality_architect'],
                prerequisites: ['ego_transcendence'],
                applications: ['manifestation', 'healing', 'environmental_harmony']
            },
            
            karmic_transformation: {
                name: 'Karmic Transformation',
                description: 'Ability to consciously transform karmic patterns',
                developmentStages: ['pattern_recognition', 'conscious_choice', 'karmic_healing', 'karma_transcendence'],
                prerequisites: ['karma_understanding'],
                applications: ['personal_healing', 'ancestral_healing', 'collective_healing']
            }
        };
    }
    
    initializeKarmaLaws() {
        return {
            law_of_cause_effect: {
                name: 'Law of Cause and Effect',
                description: 'Every action creates corresponding results',
                understanding_levels: [
                    'basic_recognition',
                    'pattern_awareness',
                    'multi_life_understanding',
                    'instantaneous_karma_mastery'
                ],
                applications: [
                    'conscious_choice_making',
                    'responsibility_acceptance',
                    'future_creation',
                    'karma_yoga_practice'
                ]
            },
            
            law_of_attraction: {
                name: 'Law of Attraction',
                description: 'Like attracts like in consciousness and experience',
                understanding_levels: [
                    'thought_observation',
                    'vibration_awareness',
                    'conscious_attraction',
                    'reality_co_creation'
                ],
                applications: [
                    'manifestation_practice',
                    'relationship_creation',
                    'abundance_cultivation',
                    'spiritual_community_building'
                ]
            },
            
            law_of_dharma: {
                name: 'Law of Dharma',
                description: 'Each being has a unique purpose and path',
                understanding_levels: [
                    'purpose_seeking',
                    'dharma_recognition',
                    'dharma_alignment',
                    'dharma_embodiment'
                ],
                applications: [
                    'life_path_clarity',
                    'decision_making_guidance',
                    'service_orientation',
                    'authentic_expression'
                ]
            }
        };
    }
    
    initializeDharmicProgression() {
        return {
            personal_dharma: {
                name: 'Svadharma - Personal Dharma',
                description: 'Living in alignment with your unique nature and purpose',
                aspects: [
                    'self_knowledge',
                    'authentic_expression',
                    'natural_talents_use',
                    'life_purpose_fulfillment'
                ],
                development_practices: [
                    'self_inquiry',
                    'talent_exploration',
                    'purpose_meditation',
                    'authentic_living'
                ]
            },
            
            social_dharma: {
                name: 'Varnashrama Dharma - Social Dharma',
                description: 'Fulfilling your role in society and relationships',
                aspects: [
                    'family_responsibilities',
                    'professional_contribution',
                    'community_service',
                    'social_harmony'
                ],
                development_practices: [
                    'relationship_mastery',
                    'professional_excellence',
                    'community_engagement',
                    'conflict_resolution'
                ]
            },
            
            universal_dharma: {
                name: 'Rita - Universal Dharma',
                description: 'Living in harmony with natural and cosmic laws',
                aspects: [
                    'natural_law_alignment',
                    'seasonal_awareness',
                    'cosmic_rhythm_attunement',
                    'environmental_stewardship'
                ],
                development_practices: [
                    'nature_connection',
                    'seasonal_practices',
                    'astronomical_awareness',
                    'ecological_consciousness'
                ]
            },
            
            eternal_dharma: {
                name: 'Sanatana Dharma - Eternal Dharma',
                description: 'Embodying timeless spiritual principles',
                aspects: [
                    'truth_embodiment',
                    'compassion_expression',
                    'wisdom_sharing',
                    'love_manifestation'
                ],
                development_practices: [
                    'truth_practice',
                    'compassion_cultivation',
                    'wisdom_study',
                    'love_expression'
                ]
            }
        };
    }
    
    initializeRealizations() {
        return {
            identity_realizations: [
                { level: 'ego_identification', description: 'I am my thoughts, emotions, and roles' },
                { level: 'witness_awareness', description: 'I am the observer of my thoughts and emotions' },
                { level: 'pure_consciousness', description: 'I am consciousness itself, unlimited and eternal' },
                { level: 'unity_recognition', description: 'I am everything and everything is me' },
                { level: 'beyond_identity', description: 'There is no "I" separate from the totality' }
            ],
            
            reality_realizations: [
                { level: 'material_reality', description: 'Reality consists of separate physical objects' },
                { level: 'energy_reality', description: 'Everything is energy vibrating at different frequencies' },
                { level: 'consciousness_reality', description: 'All experiences arise within consciousness' },
                { level: 'unity_reality', description: 'All apparent multiplicity is one consciousness' },
                { level: 'mystery_reality', description: 'Reality is beyond all concepts and understanding' }
            ],
            
            love_realizations: [
                { level: 'personal_love', description: 'Love is an emotion directed toward specific beings' },
                { level: 'universal_love', description: 'Love is the natural expression of an open heart' },
                { level: 'divine_love', description: 'Love is the fundamental force of creation' },
                { level: 'love_as_being', description: 'I am love itself, not separate from it' },
                { level: 'love_beyond_love', description: 'What I call love is the very fabric of existence' }
            ]
        };
    }
    
    // Core progression tracking methods
    trackSpiritualGrowth(category, action, context = {}) {
        const growthEvent = {
            timestamp: Date.now(),
            category: category,
            action: action,
            context: context,
            impact: this.calculateGrowthImpact(category, action, context)
        };
        
        this.recordGrowthEvent(growthEvent);
        this.updateProgressionMetrics(growthEvent);
        this.checkMilestoneAchievements(growthEvent);
        this.triggerProgressionEffects(growthEvent);
        
        return growthEvent;
    }
    
    calculateGrowthImpact(category, action, context) {
        const impactMap = {
            'meditation': { consciousness: 2, wisdom: 1, peace: 3 },
            'compassionate_action': { compassion: 3, karma: 2, service: 2 },
            'wisdom_study': { wisdom: 3, understanding: 2, discernment: 1 },
            'shadow_integration': { wholeness: 3, authenticity: 2, freedom: 2 },
            'selfless_service': { karma_yoga: 3, ego_dissolution: 2, love: 1 },
            'truth_recognition': { advaita: 3, liberation: 2, clarity: 1 },
            'surrender_practice': { bhakti: 3, ego_release: 2, trust: 1 },
            'dharmic_action': { dharma: 3, alignment: 2, purpose: 1 }
        };
        
        const baseImpact = impactMap[action] || { general_growth: 1 };
        
        // Apply context multipliers
        let multiplier = 1;
        if (context.depth === 'profound') multiplier *= 2;
        if (context.sincerity === 'complete') multiplier *= 1.5;
        if (context.difficulty === 'challenging') multiplier *= 1.3;
        
        // Apply consciousness level multiplier
        const consciousnessLevel = this.getCurrentConsciousnessLevel();
        const levelMultipliers = { reactive: 1, responsive: 1.2, creative: 1.4, integral: 1.6, transcendent: 1.8 };
        multiplier *= levelMultipliers[consciousnessLevel] || 1;
        
        // Calculate final impact
        const finalImpact = {};
        Object.entries(baseImpact).forEach(([metric, value]) => {
            finalImpact[metric] = Math.round(value * multiplier);
        });
        
        return finalImpact;
    }
    
    updateProgressionMetrics(growthEvent) {
        const playerProgression = this.gameStateManager.playerState.progression || {};
        
        // Update consciousness development
        if (!playerProgression.consciousness) playerProgression.consciousness = {};
        
        Object.entries(growthEvent.impact).forEach(([metric, value]) => {
            if (!playerProgression.consciousness[metric]) playerProgression.consciousness[metric] = 0;
            playerProgression.consciousness[metric] += value;
        });
        
        // Update awakening level
        const totalAwakening = this.calculateTotalAwakening(playerProgression.consciousness);
        playerProgression.consciousness.awakening = totalAwakening;
        
        // Update wisdom traditions progress
        this.updateWisdomTraditionProgress(growthEvent);
        
        // Update spiritual abilities
        this.updateSpiritualAbilities(growthEvent);
        
        // Save updated progression
        this.gameStateManager.playerState.progression = playerProgression;
    }
    
    calculateTotalAwakening(consciousnessMetrics) {
        const weights = {
            consciousness: 0.3,
            wisdom: 0.2,
            compassion: 0.2,
            peace: 0.15,
            clarity: 0.15
        };
        
        let totalAwakening = 0;
        Object.entries(weights).forEach(([metric, weight]) => {
            const value = consciousnessMetrics[metric] || 0;
            totalAwakening += value * weight;
        });
        
        return Math.min(100, totalAwakening); // Cap at 100
    }
    
    updateWisdomTraditionProgress(growthEvent) {
        const { action, impact } = growthEvent;
        
        // Map actions to wisdom traditions
        const traditionMapping = {
            'self_inquiry': 'advaita_vedanta',
            'witness_practice': 'advaita_vedanta',
            'selfless_service': 'karma_yoga',
            'dharmic_action': 'karma_yoga',
            'devotional_practice': 'bhakti_yoga',
            'surrender_practice': 'bhakti_yoga',
            'meditation': 'raja_yoga',
            'concentration_practice': 'raja_yoga'
        };
        
        const tradition = traditionMapping[action];
        if (tradition && this.wisdomTraditions[tradition]) {
            this.wisdomTraditions[tradition].currentProgress += impact.general_growth || 1;
        }
    }
    
    updateSpiritualAbilities(growthEvent) {
        const { action, impact } = growthEvent;
        
        // Determine which abilities are enhanced by this growth
        const abilityEnhancements = this.getAbilityEnhancements(action, impact);
        
        abilityEnhancements.forEach(enhancement => {
            this.enhanceSpiritualAbility(enhancement.ability, enhancement.amount);
        });
    }
    
    getAbilityEnhancements(action, impact) {
        const enhancements = [];
        
        // Map impact types to ability enhancements
        if (impact.consciousness) {
            enhancements.push({ ability: 'intuitive_knowing', amount: impact.consciousness });
        }
        if (impact.compassion) {
            enhancements.push({ ability: 'empathic_resonance', amount: impact.compassion });
        }
        if (impact.wisdom) {
            enhancements.push({ ability: 'consciousness_transmission', amount: impact.wisdom });
        }
        if (impact.clarity) {
            enhancements.push({ ability: 'energy_sensing', amount: impact.clarity });
        }
        
        return enhancements;
    }
    
    enhanceSpiritualAbility(abilityName, amount) {
        const playerProgression = this.gameStateManager.playerState.progression;
        if (!playerProgression.spiritualAbilities) playerProgression.spiritualAbilities = {};
        
        if (!playerProgression.spiritualAbilities[abilityName]) {
            playerProgression.spiritualAbilities[abilityName] = { level: 0, experience: 0 };
        }
        
        const ability = playerProgression.spiritualAbilities[abilityName];
        ability.experience += amount;
        
        // Check for level advancement
        const newLevel = this.calculateAbilityLevel(ability.experience);
        if (newLevel > ability.level) {
            ability.level = newLevel;
            this.triggerAbilityLevelUp(abilityName, newLevel);
        }
    }
    
    calculateAbilityLevel(experience) {
        // Progressive level thresholds
        const thresholds = [0, 10, 25, 50, 100, 200, 400, 800, 1600, 3200];
        
        for (let i = thresholds.length - 1; i >= 0; i--) {
            if (experience >= thresholds[i]) {
                return i;
            }
        }
        
        return 0;
    }
    
    // Milestone and achievement system
    checkMilestoneAchievements(growthEvent) {
        this.checkConsciousnessMilestones();
        this.checkWisdomTraditionMilestones();
        this.checkSpiritualAbilityMilestones();
        this.checkDharmicProgressionMilestones();
        this.checkRealizationMilestones();
    }
    
    checkConsciousnessMilestones() {
        const awakening = this.getCurrentAwakeningLevel();
        const currentLevel = this.getCurrentConsciousnessLevel();
        
        Object.entries(this.consciousnessLevels).forEach(([levelName, levelData]) => {
            if (awakening >= levelData.requirements.awakening && 
                !this.spiritualMilestones.has(`consciousness_${levelName}`)) {
                
                this.awardMilestone(`consciousness_${levelName}`, {
                    name: `${levelData.name} Achievement`,
                    description: levelData.description,
                    rewards: this.getConsciousnessLevelRewards(levelName)
                });
            }
        });
    }
    
    awardMilestone(milestoneId, milestoneData) {
        this.spiritualMilestones.set(milestoneId, {
            ...milestoneData,
            achievedAt: Date.now()
        });
        
        // Award milestone rewards
        if (milestoneData.rewards) {
            this.awardMilestoneRewards(milestoneData.rewards);
        }
        
        // Trigger milestone celebration
        this.triggerMilestoneCelebration(milestoneId, milestoneData);
    }
    
    awardMilestoneRewards(rewards) {
        rewards.forEach(reward => {
            switch (reward.type) {
                case 'ability_unlock':
                    this.unlockSpiritualAbility(reward.ability);
                    break;
                case 'wisdom_access':
                    this.unlockWisdomTradition(reward.tradition);
                    break;
                case 'special_item':
                    this.gameStateManager.addSpecialItem(reward.item);
                    break;
                case 'area_unlock':
                    this.unlockSecretArea(reward.area);
                    break;
            }
        });
    }
    
    // Integration and application system
    trackWisdomIntegration(wisdom, context) {
        const integrationKey = `${wisdom}_integration`;
        const currentLevel = this.experientialWisdom.get(integrationKey) || 0;
        
        const integrationIncrease = this.calculateIntegrationValue(wisdom, context);
        this.experientialWisdom.set(integrationKey, currentLevel + integrationIncrease);
        
        // Check for wisdom mastery
        if (currentLevel + integrationIncrease >= 100) {
            this.achieveWisdomMastery(wisdom);
        }
    }
    
    calculateIntegrationValue(wisdom, context) {
        let baseValue = 5;
        
        if (context.application === 'real_life_situation') baseValue *= 2;
        if (context.depth === 'profound_understanding') baseValue *= 1.5;
        if (context.consistency === 'repeated_application') baseValue *= 1.3;
        
        return Math.round(baseValue);
    }
    
    achieveWisdomMastery(wisdom) {
        this.gameStateManager.addSpecialItem({
            id: `wisdom_mastery_${wisdom}`,
            name: `Mastery of ${wisdom}`,
            type: 'wisdom_achievement',
            description: `Deep integration and embodiment of ${wisdom}`,
            icon: '🧠'
        });
        
        // Unlock related teachings and abilities
        this.unlockWisdomMasteryRewards(wisdom);
    }
    
    // Utility methods
    getCurrentConsciousnessLevel() {
        const awakening = this.getCurrentAwakeningLevel();
        
        if (awakening >= 95) return 'transcendent';
        if (awakening >= 75) return 'integral';
        if (awakening >= 50) return 'creative';
        if (awakening >= 25) return 'responsive';
        return 'reactive';
    }
    
    getCurrentAwakeningLevel() {
        const progression = this.gameStateManager.playerState.progression;
        return progression?.consciousness?.awakening || 0;
    }
    
    getSpiritualAbilityLevel(abilityName) {
        const progression = this.gameStateManager.playerState.progression;
        return progression?.spiritualAbilities?.[abilityName]?.level || 0;
    }
    
    getWisdomTraditionProgress(traditionName) {
        return this.wisdomTraditions[traditionName]?.currentProgress || 0;
    }
    
    // Export progression data for saving
    exportProgressionData() {
        return {
            consciousnessLevels: this.consciousnessLevels,
            wisdomTraditions: Object.fromEntries(
                Object.entries(this.wisdomTraditions).map(([key, value]) => [key, {
                    ...value,
                    currentProgress: value.currentProgress
                }])
            ),
            spiritualMilestones: Object.fromEntries(this.spiritualMilestones),
            experientialWisdom: Object.fromEntries(this.experientialWisdom),
            characterTransformation: Object.fromEntries(this.characterTransformation)
        };
    }
    
    // Import progression data for loading
    importProgressionData(data) {
        if (data.wisdomTraditions) {
            Object.entries(data.wisdomTraditions).forEach(([key, value]) => {
                if (this.wisdomTraditions[key]) {
                    this.wisdomTraditions[key].currentProgress = value.currentProgress;
                }
            });
        }
        
        if (data.spiritualMilestones) {
            this.spiritualMilestones = new Map(Object.entries(data.spiritualMilestones));
        }
        
        if (data.experientialWisdom) {
            this.experientialWisdom = new Map(Object.entries(data.experientialWisdom));
        }
        
        if (data.characterTransformation) {
            this.characterTransformation = new Map(Object.entries(data.characterTransformation));
        }
    }
}

// Export for use in the main game
window.UltraEnhancedProgressionSystem = UltraEnhancedProgressionSystem;

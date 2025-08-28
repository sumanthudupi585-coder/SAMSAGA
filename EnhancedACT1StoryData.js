/**
 * EnhancedACT1StoryData.js
 *
 * Complete Act 1 story progression designed for seamless integration with UnifiedGameFlow.
 * Features progressive philosophical learning, meaningful character development, and clear objectives.
 */

console.log('🌟 Loading Enhanced ACT1 Story Data...');

const ENHANCED_ACT1_STORY_DATA = {
    
    // ===== PROLOGUE: AWAKENING =====
    
    "AWAKENING_PROLOGUE": {
        "title": "The Moment of Awakening",
        "subtitle": "Your journey into consciousness begins...",
        "text": `The cosmic winds stir, and consciousness flows into form. You are ${window.unifiedGameFlow?.playerProfile?.nakshatra || 'a seeker'}, embodying the essence of ${window.unifiedGameFlow?.playerProfile?.gana || 'divine'} nature. The Oracle's wisdom echoes in your mind as you materialize on the sacred grounds of Dharmapura, a village where the ancient and eternal converge.
        
        Before you stretches a path of discovery—one that will test not just your choices, but your very understanding of existence itself. The villagers speak of troubles, of spiritual malaise that has begun to affect their daily lives. But perhaps... perhaps this is why you have been called here.`,
        "atmosphericDescription": "Golden morning light filters through ancient trees. The air carries the scent of incense and distant temple bells. You sense both peace and underlying tension.",
        "choices": [
            {
                "id": "observe_surroundings",
                "text": "🧭 Observe your surroundings carefully before acting",
                "nextScene": "DHARMAPURA_OBSERVATION",
                "philosophicalTheme": "mindfulness",
                "effects": {
                    "attributes": { "wisdom": 1 },
                    "philosophical": { "samsara": "awareness" }
                }
            },
            {
                "id": "approach_villagers",
                "text": "🤝 Approach the villagers directly to understand their troubles",
                "nextScene": "VILLAGER_ENCOUNTER",
                "philosophicalTheme": "compassion",
                "effects": {
                    "attributes": { "compassion": 1 },
                    "philosophical": { "dharma": "service" }
                }
            },
            {
                "id": "seek_temple",
                "text": "🕉️ Seek the village temple for spiritual guidance first",
                "nextScene": "TEMPLE_APPROACH",
                "philosophicalTheme": "devotion",
                "effects": {
                    "attributes": { "spiritual_insight": 1 },
                    "philosophical": { "moksha": "seeking" }
                }
            }
        ],
        "nakshatraChoices": {
            "Mrigashira": [
                {
                    "id": "mrigashira_special",
                    "text": "🦌 Your seeking nature compels you to explore the village's hidden paths",
                    "nextScene": "HIDDEN_PATHS_DISCOVERY",
                    "isNakshatraChoice": true,
                    "effects": { "attributes": { "determination": 2 } }
                }
            ],
            "Pushya": [
                {
                    "id": "pushya_special", 
                    "text": "🌙 Channel spiritual energy to sense the village's true need",
                    "nextScene": "ENERGY_SENSING",
                    "isNakshatraChoice": true,
                    "effects": { "attributes": { "spiritual_insight": 2 } }
                }
            ]
        },
        "meditation": {
            "available": true,
            "text": "Take a moment to center yourself and align with cosmic forces",
            "effects": { "attributes": { "wisdom": 1, "detachment": 1 } }
        }
    },
    
    // ===== OBSERVATION PATH =====
    
    "DHARMAPURA_OBSERVATION": {
        "title": "The Observer's Wisdom",
        "text": `Standing quietly at the village edge, you let your senses expand. The morning reveals its secrets to the patient observer:
        
        **What you notice:**
        • A great Banyan tree at the village center, its leaves rustling despite no wind
        • Villagers moving with subtle tension, avoiding eye contact
        • Two groups forming around different leaders—an Elder and a Priestess
        • Subtle signs of spiritual disturbance: withered flowers, restless animals
        • The temple bells ring irregularly, as if something disrupts their rhythm
        
        Your ${window.unifiedGameFlow?.playerProfile?.gana || 'Deva'} nature allows you to perceive that this is more than a simple village dispute. There are layers of meaning here, connections between the physical and metaphysical realms.`,
        "choices": [
            {
                "id": "analyze_patterns",
                "text": "🔍 Analyze the patterns you observe to understand the deeper issue",
                "nextScene": "PATTERN_ANALYSIS",
                "philosophicalTheme": "understanding",
                "effects": {
                    "attributes": { "wisdom": 2 },
                    "worldState": { "observation_depth": "profound" }
                }
            },
            {
                "id": "approach_banyan",
                "text": "🌳 Approach the Banyan tree, sensing it's central to the disturbance",
                "nextScene": "BANYAN_INVESTIGATION",
                "philosophicalTheme": "nature_connection"
            },
            {
                "id": "listen_to_debate",
                "text": "👂 Move closer to hear the debate between the Elder and Priestess",
                "nextScene": "DEBATE_LISTENING",
                "philosophicalTheme": "perspective"
            }
        ],
        "insight": {
            "text": "💡 **Philosophical Insight**: The act of mindful observation itself changes both the observer and the observed. In taking time to truly see, you have already begun to heal the village's blindness to its own patterns.",
            "theme": "samsara"
        }
    },
    
    "PATTERN_ANALYSIS": {
        "title": "The Web of Connections",
        "text": `Your careful analysis reveals a profound truth: the village's troubles stem from a disconnection between its physical and spiritual aspects. The Banyan tree, ancient and sacred, has become the focal point of a conflict between:
        
        **The Elder's Position**: Practical needs require using the tree's wood for repairs
        **The Priestess's Position**: The tree is sacred and must remain untouched
        
        But you see what they cannot—this is a false dichotomy. The tree's spiritual "illness" manifests as physical symptoms because the village has forgotten the principle of **integrated existence**: that matter and spirit are one, not separate.
        
        This understanding marks your first deep philosophical insight in this lifetime.`,
        "choices": [
            {
                "id": "propose_integration",
                "text": "🔄 Propose a solution that integrates both perspectives",
                "nextScene": "INTEGRATION_PROPOSAL",
                "philosophicalTheme": "unity",
                "effects": {
                    "attributes": { "wisdom": 2, "compassion": 1 },
                    "worldState": { "reputation": "wise_mediator" }
                }
            },
            {
                "id": "investigate_deeper",
                "text": "🕳️ Investigate the root cause of the tree's spiritual illness",
                "nextScene": "ROOT_INVESTIGATION",
                "philosophicalTheme": "causation"
            },
            {
                "id": "share_vision",
                "text": "✨ Share your vision of integrated existence with the villagers",
                "nextScene": "TEACHING_MOMENT",
                "philosophicalTheme": "teaching"
            }
        ],
        "philosophicalGrowth": {
            "concept": "Advaita (Non-Duality)",
            "insight": "The apparent separation between material and spiritual is an illusion. True wisdom lies in perceiving their fundamental unity.",
            "effects": {
                "philosophical": { "moksha": "unity_glimpse" },
                "attributes": { "spiritual_insight": 2 }
            }
        }
    },
    
    // ===== VILLAGER PATH =====
    
    "VILLAGER_ENCOUNTER": {
        "title": "Hearts in Need",
        "text": `You approach a group of worried villagers gathered near the market stalls. Their faces brighten with cautious hope as you draw near—strangers are rare in Dharmapura, and perhaps you bring new perspective to their troubles.
        
        **Kamala**, an elderly woman selling marigolds, speaks first: "Traveler, you arrive at a troubled time. Our sacred Banyan has grown... strange. Its presence used to bless our village, but now..." She gestures toward withered flowers in her basket.
        
        **Arjun**, a young farmer, adds urgently: "The crops near the tree grow poorly, the children have nightmares, and our temple bells ring out of rhythm. The Elder says we must cut the tree, but the Priestess forbids it. We are caught between earth and heaven."`,
        "choices": [
            {
                "id": "listen_deeper",
                "text": "👂 Listen deeply to each person's specific concerns",
                "nextScene": "DEEP_LISTENING",
                "philosophicalTheme": "compassion",
                "effects": {
                    "attributes": { "compassion": 2 },
                    "worldState": { "villager_trust": "high" }
                }
            },
            {
                "id": "ask_about_history",
                "text": "📚 Ask about the village's history with the Banyan tree",
                "nextScene": "VILLAGE_HISTORY",
                "philosophicalTheme": "understanding"
            },
            {
                "id": "offer_immediate_help",
                "text": "🤲 Offer to help with their immediate daily struggles",
                "nextScene": "SEVA_PATH",
                "philosophicalTheme": "service"
            }
        ],
        "ganaChoices": {
            "Deva": [
                {
                    "id": "deva_blessing",
                    "text": "🌟 Offer a blessing to ease their immediate suffering",
                    "nextScene": "DIVINE_BLESSING",
                    "isGanaChoice": true,
                    "effects": { "worldState": { "village_mood": "hopeful" } }
                }
            ],
            "Manushya": [
                {
                    "id": "manushya_practical",
                    "text": "🔨 Suggest practical steps they can take while seeking a solution",
                    "nextScene": "PRACTICAL_WISDOM",
                    "isGanaChoice": true
                }
            ],
            "Rakshasa": [
                {
                    "id": "rakshasa_direct",
                    "text": "⚡ Confront the situation directly—sometimes bold action is needed",
                    "nextScene": "DIRECT_ACTION",
                    "isGanaChoice": true
                }
            ]
        }
    },
    
    "DEEP_LISTENING": {
        "title": "The Art of Deep Listening",
        "text": `You practice **Shravanam**—the sacred art of deep listening. As you give each villager your complete attention, something beautiful happens: they begin to truly hear each other as well.
        
        **Kamala reveals**: "I've been here seventy years. The tree was different when I was young—it seemed to pulse with life. Now it feels... empty."
        
        **Arjun shares**: "My grandfather planted new roots around the tree when he was young. He said it was to 'anchor the world tree to the earth.' I never understood what he meant."
        
        **A child speaks up**: "In my dreams, the tree talks, but I can't understand its words. It seems sad."
        
        Through deep listening, you realize this isn't just about the tree—it's about a village that has lost its ability to truly communicate, with each other and with the sacred.`,
        "choices": [
            {
                "id": "teach_listening",
                "text": "🎭 Teach the villagers the art of deep listening to each other",
                "nextScene": "COMMUNICATION_HEALING",
                "philosophicalTheme": "communication",
                "effects": {
                    "attributes": { "compassion": 2, "wisdom": 1 },
                    "worldState": { "village_harmony": "improving" }
                }
            },
            {
                "id": "investigate_grandfather",
                "text": "👴 Investigate what Arjun's grandfather meant about 'anchoring'",
                "nextScene": "GRANDFATHER_MYSTERY",
                "philosophicalTheme": "tradition"
            },
            {
                "id": "speak_with_child",
                "text": "👶 Speak privately with the child about the tree's messages",
                "nextScene": "CHILD_WISDOM",
                "philosophicalTheme": "innocence"
            }
        ],
        "philosophicalGrowth": {
            "concept": "Shravanam (Sacred Listening)",
            "insight": "True listening is a form of meditation that heals both listener and speaker. When we truly hear others, we create space for wisdom to emerge.",
            "effects": {
                "philosophical": { "dharma": "compassionate_action" },
                "attributes": { "compassion": 2 }
            }
        }
    },
    
    // ===== TEMPLE PATH =====
    
    "TEMPLE_APPROACH": {
        "title": "Sacred Threshold",
        "text": `You approach the village temple, a modest stone structure crowned with intricate carvings of lotus flowers and dancing figures. The building seems to pulse with accumulated centuries of devotion, yet something feels... muted.
        
        As you near the entrance, you notice the temple bells hanging silent despite a breeze that should stir them. The usual sounds of morning prayers are absent. Instead, you hear a low humming—not quite chant, not quite song—coming from within.
        
        At the threshold, you pause. Your ${window.unifiedGameFlow?.playerProfile?.nakshatra || 'Mrigashira'} nature resonates with this sacred space, but you also sense the spiritual disturbance that affects the entire village.`,
        "choices": [
            {
                "id": "enter_respectfully",
                "text": "🙏 Enter with proper respect and reverence",
                "nextScene": "TEMPLE_INTERIOR",
                "philosophicalTheme": "devotion",
                "effects": {
                    "attributes": { "spiritual_insight": 1 },
                    "worldState": { "temple_respect": "high" }
                }
            },
            {
                "id": "meditate_threshold",
                "text": "🧘 Meditate at the threshold before entering",
                "nextScene": "THRESHOLD_MEDITATION",
                "philosophicalTheme": "preparation"
            },
            {
                "id": "examine_carvings",
                "text": "🔍 Examine the temple carvings for wisdom or clues",
                "nextScene": "CARVING_STUDY",
                "philosophicalTheme": "symbolism"
            }
        ],
        "meditation": {
            "available": true,
            "text": "Center yourself before entering this sacred space",
            "effects": { "attributes": { "spiritual_insight": 2 } }
        }
    },
    
    "TEMPLE_INTERIOR": {
        "title": "Within the Sacred Space",
        "text": `Inside, the temple reveals its secrets. The usual oil lamps flicker irregularly, and the altar seems dimmed despite fresh flower offerings. In the center of the space sits **Guruji**, an ancient priest whose eyes hold depths of understanding.
        
        He speaks without looking up from his meditation beads: "Welcome, seeker. I felt your approach—your spirit carries the mark of awakening. You arrive at a time when even sacred spaces struggle to maintain their connection to the divine."
        
        His voice carries both sadness and hope: "The village suffers from **Vicheda**—separation. We have forgotten that the sacred and mundane are one. The Banyan tree, our village's spiritual anchor, reflects this disconnection in its distress."
        
        "But perhaps," he continues, finally meeting your eyes, "perhaps this is why you have been sent to us."`,
        "choices": [
            {
                "id": "seek_teaching",
                "text": "📿 Ask Guruji to teach you about Vicheda and its healing",
                "nextScene": "GURUJI_TEACHING",
                "philosophicalTheme": "learning",
                "effects": {
                    "attributes": { "wisdom": 2, "spiritual_insight": 1 }
                }
            },
            {
                "id": "offer_service",
                "text": "🛕 Offer to help restore the temple's spiritual connection",
                "nextScene": "TEMPLE_SERVICE",
                "philosophicalTheme": "seva"
            },
            {
                "id": "share_vision",
                "text": "👁️ Share your own spiritual insights about the situation",
                "nextScene": "MUTUAL_WISDOM",
                "philosophicalTheme": "sharing"
            }
        ],
        "specialItems": [
            {
                "id": "sacred_beads",
                "name": "Guruji's Blessed Mala",
                "description": "A string of prayer beads blessed for meditation and spiritual protection",
                "effects": { "spiritual_insight": 2 },
                "condition": "earned_through_service"
            }
        ]
    },
    
    // ===== PHILOSOPHICAL TEACHING SCENES =====
    
    "GURUJI_TEACHING": {
        "title": "The Teaching of Unity",
        "text": `Guruji's eyes twinkle with ancient wisdom as he begins to share the deeper teachings:
        
        "**Vicheda**, child, means 'cutting apart' or 'separation.' It is the illusion that the material world and spiritual realm are different things. When a community falls into Vicheda, the sacred loses its power to nourish the mundane, and the mundane loses its ability to express the sacred.
        
        **The Banyan's Role**: Your village Banyan is what we call a **Sthanu**—a pillar between worlds. It channels cosmic energy into earthly form. When the community separates spirit from matter in their thinking, the Sthanu can no longer bridge the gap effectively.
        
        **The True Solution**: Healing requires **Yoga**—not just the physical practice, but its deeper meaning: 'to yoke' or 'to unite.' The village must remember that every action can be sacred, every sacred practice must touch daily life."
        
        He hands you a small scroll: "This contains a meditation practice for **Aikya**—unity consciousness. But remember, true understanding comes not from reading, but from living the teaching."`,
        "choices": [
            {
                "id": "practice_aikya",
                "text": "🧘‍♀️ Begin practicing Aikya meditation immediately",
                "nextScene": "AIKYA_PRACTICE",
                "philosophicalTheme": "unity",
                "effects": {
                    "attributes": { "spiritual_insight": 3, "wisdom": 1 },
                    "philosophical": { "moksha": "unity_practice" }
                }
            },
            {
                "id": "teach_village",
                "text": "👥 Ask to help teach these concepts to the villagers",
                "nextScene": "VILLAGE_TEACHING",
                "philosophicalTheme": "teaching"
            },
            {
                "id": "heal_banyan_directly",
                "text": "🌳 Use this knowledge to attempt healing the Banyan directly",
                "nextScene": "BANYAN_HEALING",
                "philosophicalTheme": "application"
            }
        ],
        "philosophicalGrowth": {
            "concept": "Yoga (Unity/Integration)",
            "insight": "True yoga means integrating all aspects of existence. Separation between sacred and mundane is the root of suffering.",
            "effects": {
                "philosophical": { "moksha": "integration_understanding" },
                "attributes": { "wisdom": 2, "spiritual_insight": 2 }
            }
        },
        "acquiredKnowledge": [
            "Vicheda (Separation) - Understanding of how spiritual disconnection manifests",
            "Sthanu (World Pillar) - Knowledge of sacred anchor points",
            "Aikya (Unity Consciousness) - Practice for healing separation"
        ]
    },
    
    // ===== MAJOR STORY CONVERGENCE POINT =====
    
    "THE_GREAT_CONVERGENCE": {
        "title": "Where All Paths Meet",
        "subtitle": "The moment of truth arrives...",
        "text": `All your experiences in Dharmapura have led to this moment. Whether you came to understand through observation, compassion for the villagers, or spiritual guidance, you now stand before the great Banyan tree with a profound realization:
        
        **The tree's illness is a mirror of the village's spiritual state.**
        
        The Elder, the Priestess, and the villagers have gathered, drawn by an inexplicable sense that resolution is at hand. The ancient tree's leaves rustle with anticipation, as if it too knows that change comes.
        
        Your journey has prepared you for this moment. You possess:
        • The wisdom gained through your unique journey
        • Deep understanding of the patterns connecting all things
        • Strong bonds of trust with the community
        
        The time has come to heal not just the tree, but the deeper wound of separation that afflicts this entire community.`,
        "choices": [
            {
                "id": "perform_integration_ritual",
                "text": "🔮 Perform a ritual to reintegrate the sacred and mundane",
                "nextScene": "INTEGRATION_RITUAL",
                "philosophicalTheme": "synthesis",
                "requirements": ["spiritual_insight >= 5"],
                "effects": {
                    "worldState": { "banyan_healed": true, "village_unified": true },
                    "attributes": { "all": 2 }
                }
            },
            {
                "id": "teach_collective_wisdom",
                "text": "🎓 Guide the community to discover the solution together",
                "nextScene": "COLLECTIVE_WISDOM",
                "philosophicalTheme": "collaborative_growth",
                "requirements": ["compassion >= 5"]
            },
            {
                "id": "demonstrate_unity",
                "text": "✨ Demonstrate the principle of unity through action",
                "nextScene": "UNITY_DEMONSTRATION",
                "philosophicalTheme": "embodied_teaching",
                "requirements": ["wisdom >= 5"]
            }
        ],
        "specialNote": "This scene adapts based on your journey so far. Your choices and growth throughout Act 1 determine which options are available and how the scene unfolds."
    },
    
    // ===== INTEGRATION AND RESOLUTION =====
    
    "INTEGRATION_RITUAL": {
        "title": "The Ritual of Reunion",
        "text": `You step forward, drawing upon all the wisdom you've gained. The ritual you perform is not from any single tradition, but rather an expression of the deepest truth you've discovered: the fundamental unity of all existence.
        
        **Your actions:**
        • You place one hand on the Banyan's trunk, one on the earth
        • You speak to both the practical concerns and spiritual needs
        • You invite everyone present to participate, making them co-creators rather than observers
        
        As the ritual unfolds, something miraculous happens. The tree's leaves shimmer with renewed vitality, the temple bells begin to ring in perfect harmony, and the villagers feel a deep sense of peace they haven't known in months.
        
        **Elder Raghavan** speaks with wonder: "I... I see now. The tree isn't just wood OR just spirit—it's both, fully integrated. We can honor its sacredness while also meeting our practical needs."
        
        **Priestess Lakshmi** nods: "And our spiritual practice isn't separate from daily life—it IS daily life, sanctified."
        
        You have facilitated a profound healing that will resonate through this community for generations.`,
        "outcomes": {
            "immediate": [
                "Banyan tree restored to full spiritual health",
                "Village harmony reestablished", 
                "Elder and Priestess reconciled",
                "Community learns integration practice"
            ],
            "longTerm": [
                "Dharmapura becomes a model community for integrated living",
                "Your reputation as a wisdom teacher spreads",
                "The healing ripples outward to neighboring villages"
            ]
        },
        "rewards": {
            "attributes": { "wisdom": 3, "spiritual_insight": 3, "compassion": 2 },
            "philosophical": {
                "moksha": "integration_mastery",
                "dharma": "community_service", 
                "karma": "positive_creation"
            },
            "specialItems": [
                {
                    "id": "banyan_blessing",
                    "name": "Blessing of the Sacred Tree",
                    "description": "A permanent blessing that allows you to sense and heal spiritual disconnection",
                    "permanentEffect": true
                }
            ]
        },
        "choices": [
            {
                "id": "stay_teach",
                "text": "🏠 Stay in Dharmapura to teach and guide the community",
                "nextScene": "TEACHER_PATH",
                "philosophicalTheme": "service"
            },
            {
                "id": "journey_continues",
                "text": "🛤️ Continue your journey, carrying this wisdom to other places",
                "nextScene": "ACT1_CONCLUSION",
                "philosophicalTheme": "wandering_sage"
            },
            {
                "id": "deeper_study", 
                "text": "📚 Seek deeper spiritual training based on what you've learned",
                "nextScene": "ADVANCED_TEACHING",
                "philosophicalTheme": "continued_learning"
            }
        ]
    },
    
    // ===== ACT 1 CONCLUSION =====
    
    "ACT1_CONCLUSION": {
        "title": "The First Awakening Complete",
        "subtitle": "Your journey in Dharmapura ends, but your path continues...",
        "text": `As you prepare to leave Dharmapura, you reflect on the profound transformation that has occurred—not just in the village, but within yourself. You arrived as a newly awakened being, uncertain of your purpose. You leave as one who has begun to understand the deeper patterns of existence.
        
        **What you have learned:**
        • Understanding of integration between sacred and mundane
        • Experience with compassionate action and deep listening
        • Knowledge of how spiritual disconnection manifests in communities
        • Practice with unity consciousness and healing meditation
        
        **Your character has grown:**
        • Wisdom: Enhanced through careful observation and learning
        • Compassion: Deepened through service to others
        • Spiritual Insight: Expanded through sacred practices
        • Determination: Strengthened through overcoming challenges
        
        The village gathers to bid you farewell, but this isn't an ending—it's a graduation. You have completed your first great teaching, learned your first profound lesson about the nature of reality.
        
        As you walk toward the horizon, new adventures await. The path of spiritual evolution has many stages, and you have successfully navigated the first: **The Awakening of Compassionate Wisdom.**`,
        "finalRewards": {
            "title": "Master of Integration",
            "permanent_abilities": [
                "Sense Spiritual Disconnection",
                "Facilitate Community Healing", 
                "Bridge Sacred and Mundane"
            ],
            "phase_advancement": "ACT_1_TRIALS"
        },
        "choices": [
            {
                "id": "begin_act2",
                "text": "🌅 Begin the next phase of your spiritual journey",
                "nextAct": 2,
                "nextScene": "ACT2_OPENING"
            },
            {
                "id": "explore_trials",
                "text": "⚔️ Undertake advanced spiritual trials to deepen your understanding",
                "nextScene": "ADVANCED_TRIALS_INTRO"
            },
            {
                "id": "meditation_retreat",
                "text": "🧘 Enter a period of deep meditation and reflection",
                "nextScene": "DEEP_MEDITATION_PHASE"
            }
        ]
    },
    
    // ===== UTILITY FUNCTIONS =====

    getPlayerKnowledge: function() {
        // This would dynamically generate based on actual player choices
        const knowledge = [];
        if (window.unifiedGameFlow?.worldState?.observation_depth === 'profound') {
            knowledge.push("• Deep understanding of the patterns connecting all things");
        }
        if (window.unifiedGameFlow?.worldState?.villager_trust === 'high') {
            knowledge.push("• Strong bonds of trust with the community");
        }
        if (window.unifiedGameFlow?.playerProfile?.acquiredKnowledge?.includes('Aikya')) {
            knowledge.push("• The practice of Aikya (Unity Consciousness)");
        }

        return knowledge.length > 0 ? knowledge.join('\n        ') : "• The wisdom gained through your unique journey";
    },

    getPhilosophicalSummary: function() {
        // Generate based on actual philosophical progress
        return `• Understanding of integration between sacred and mundane
        • Experience with compassionate action and deep listening
        • Knowledge of how spiritual disconnection manifests in communities
        • Practice with unity consciousness and healing meditation`;
    },

    getAttributeSummary: function() {
        // Generate based on actual attribute growth
        return `• Wisdom: Enhanced through careful observation and learning
        • Compassion: Deepened through service to others
        • Spiritual Insight: Expanded through sacred practices
        • Determination: Strengthened through overcoming challenges`;
    }
};

// Export for integration with other systems
if (typeof window !== 'undefined') {
    window.ENHANCED_ACT1_STORY_DATA = ENHANCED_ACT1_STORY_DATA;
    console.log('✅ ENHANCED_ACT1_STORY_DATA loaded successfully');
} else {
    console.error('❌ Window object not available for ENHANCED_ACT1_STORY_DATA export');
}

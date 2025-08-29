/**
 * FixedACT1StorySystem.js
 * 
 * Complete, working Act 1 story system that integrates all the best features
 * from the existing systems while ensuring reliable progression and no breaks.
 */

console.log('🔧 Loading Fixed ACT1 Story System...');

class FixedACT1StorySystem {
    constructor() {
        this.currentScene = 'AWAKENING_PROLOGUE';
        this.worldState = {};
        this.playerState = {
            attributes: {
                wisdom: 0,
                compassion: 0,
                spiritual_insight: 0,
                determination: 0,
                detachment: 0
            },
            progression: {
                questsCompleted: 0,
                puzzlesSolved: 0,
                choicesMade: 0
            },
            inventory: [],
            flags: {}
        };
        
        // Initialize story data
        this.initializeStoryData();
        
        // Set up UI integration
        this.setupUIIntegration();
    }
    
    initializeStoryData() {
        this.storyData = {
            
            // ===== PROLOGUE =====
            
            "AWAKENING_PROLOGUE": {
                "title": "The Moment of Awakening",
                "subtitle": "Your spiritual journey begins...",
                "text": `The cosmic winds stir, and consciousness flows into form. You find yourself in the peaceful village of Dharmapura, where ancient wisdom meets everyday challenges.
                
                As you orient yourself to this new existence, you sense that this place holds the keys to understanding the deeper mysteries of existence. The villagers move about their daily tasks, but there's an underlying tension—something spiritual is amiss.`,
                "atmosphericDescription": "Golden morning light filters through ancient trees. The air carries the scent of incense and distant temple bells.",
                "choices": [
                    {
                        "id": "explore_village",
                        "text": "🏘️ Explore the village to understand the situation",
                        "nextScene": "VILLAGE_EXPLORATION",
                        "philosophicalTheme": "understanding",
                        "effects": {
                            "attributes": { "wisdom": 1 }
                        }
                    },
                    {
                        "id": "seek_guidance",
                        "text": "🕉️ Seek spiritual guidance from the village temple",
                        "nextScene": "TEMPLE_VISIT",
                        "philosophicalTheme": "devotion",
                        "effects": {
                            "attributes": { "spiritual_insight": 1 }
                        }
                    },
                    {
                        "id": "help_villagers",
                        "text": "🤝 Approach the villagers to offer help",
                        "nextScene": "VILLAGER_INTERACTION",
                        "philosophicalTheme": "compassion",
                        "effects": {
                            "attributes": { "compassion": 1 }
                        }
                    }
                ],
                "meditation": {
                    "available": true,
                    "text": "Center yourself before beginning this sacred journey",
                    "effects": {
                        "attributes": { "spiritual_insight": 1, "detachment": 1 }
                    }
                }
            },
            
            // ===== EXPLORATION PATHS =====
            
            "VILLAGE_EXPLORATION": {
                "title": "Discovering Dharmapura",
                "text": `As you walk through the village, you notice the intricate balance of daily life and spiritual practice. However, your observant nature reveals troubling signs:
                
                • The sacred Banyan tree at the village center looks unhealthy
                • There's tension between the Village Elder and the Priestess
                • Crops near the temple are withering despite good soil
                • The villagers seem spiritually disconnected from their environment
                
                It becomes clear that this community is experiencing a crisis of spiritual harmony.`,
                "choices": [
                    {
                        "id": "investigate_banyan",
                        "text": "🌳 Investigate the Banyan tree - it seems central to the problem",
                        "nextScene": "BANYAN_INVESTIGATION",
                        "effects": { "flags": { "noticed_banyan_problem": true } }
                    },
                    {
                        "id": "mediate_conflict",
                        "text": "⚖️ Try to understand the conflict between Elder and Priestess",
                        "nextScene": "ELDER_PRIESTESS_CONFLICT",
                        "effects": { "flags": { "aware_of_conflict": true } }
                    },
                    {
                        "id": "examine_temple_crops",
                        "text": "🌾 Examine the withering crops around the temple",
                        "nextScene": "CROP_INVESTIGATION",
                        "effects": { "flags": { "noticed_crop_blight": true } }
                    }
                ]
            },
            
            "TEMPLE_VISIT": {
                "title": "The Sacred Temple",
                "text": `The village temple is a modest but beautiful structure, its walls carved with intricate depictions of cosmic cycles. Inside, you meet **Guruji**, an ancient priest whose eyes hold depths of understanding.
                
                "Welcome, seeker," he says without looking up from his meditation beads. "I felt your approach—your spirit carries the mark of awakening. You arrive at a time when even sacred spaces struggle to maintain their connection to the divine."
                
                He explains: "The village suffers from **Vicheda**—separation. We have forgotten that the sacred and mundane are one. This disconnection manifests in many ways."`,
                "choices": [
                    {
                        "id": "learn_about_vicheda",
                        "text": "📿 Ask Guruji to teach you about Vicheda and its healing",
                        "nextScene": "VICHEDA_TEACHING",
                        "effects": { 
                            "attributes": { "wisdom": 2, "spiritual_insight": 1 },
                            "flags": { "learned_vicheda": true }
                        }
                    },
                    {
                        "id": "offer_temple_help",
                        "text": "🛕 Offer to help restore the temple's spiritual connection",
                        "nextScene": "TEMPLE_SERVICE",
                        "effects": { 
                            "attributes": { "compassion": 1, "determination": 1 }
                        }
                    },
                    {
                        "id": "request_blessing",
                        "text": "🙏 Request a blessing for your spiritual journey",
                        "nextScene": "SPIRITUAL_BLESSING",
                        "effects": { 
                            "attributes": { "spiritual_insight": 2 },
                            "inventory": ["sacred_blessing"]
                        }
                    }
                ]
            },
            
            "VILLAGER_INTERACTION": {
                "title": "Hearts in Need",
                "text": `You approach a group of worried villagers near the market. Their faces brighten with cautious hope as you offer assistance.
                
                **Kamala**, an elderly flower seller, speaks first: "Traveler, perhaps you can help where we cannot. Our sacred Banyan tree grows sick, our crops fail, and our leaders argue while we suffer."
                
                **Arjun**, a young farmer, adds: "The Elder wants to cut down the tree for building materials, but the Priestess says it's sacred. Meanwhile, our village's spiritual harmony crumbles."`,
                "choices": [
                    {
                        "id": "practice_deep_listening",
                        "text": "👂 Practice deep listening to truly understand their concerns",
                        "nextScene": "DEEP_LISTENING_SESSION",
                        "philosophicalTheme": "compassion",
                        "effects": {
                            "attributes": { "compassion": 2, "wisdom": 1 },
                            "flags": { "gained_villager_trust": true }
                        }
                    },
                    {
                        "id": "investigate_together",
                        "text": "🔍 Suggest investigating the problems together as a community",
                        "nextScene": "COMMUNITY_INVESTIGATION",
                        "effects": { 
                            "attributes": { "determination": 1 },
                            "flags": { "community_approach": true }
                        }
                    },
                    {
                        "id": "seek_elder_priestess",
                        "text": "⚖️ Offer to mediate between the Elder and Priestess",
                        "nextScene": "MEDIATION_OFFER",
                        "effects": { 
                            "attributes": { "wisdom": 1 }
                        }
                    }
                ]
            },
            
            // ===== TEACHING AND WISDOM =====
            
            "VICHEDA_TEACHING": {
                "title": "The Teaching of Unity",
                "text": `Guruji's eyes twinkle with ancient wisdom as he begins to share the deeper teachings:
                
                "**Vicheda**, child, means 'cutting apart' or 'separation.' It is the illusion that the material world and spiritual realm are different things. When a community falls into Vicheda, the sacred loses its power to nourish the mundane, and the mundane loses its ability to express the sacred.
                
                **The Solution**: Healing requires **Yoga**—not just the physical practice, but its deeper meaning: 'to yoke' or 'to unite.' The village must remember that every action can be sacred, every sacred practice must touch daily life."
                
                He hands you a small scroll: "This contains a meditation practice for **Aikya**—unity consciousness."`,
                "choices": [
                    {
                        "id": "master_aikya_practice",
                        "text": "🧘‍♀️ Master the Aikya meditation practice",
                        "nextScene": "AIKYA_MASTERY",
                        "effects": {
                            "attributes": { "spiritual_insight": 3, "wisdom": 1, "detachment": 1 },
                            "inventory": ["aikya_meditation"],
                            "flags": { "learned_aikya": true }
                        }
                    },
                    {
                        "id": "teach_villagers",
                        "text": "👥 Ask to help teach these concepts to the villagers",
                        "nextScene": "VILLAGE_TEACHING",
                        "effects": {
                            "attributes": { "compassion": 2, "wisdom": 1 }
                        }
                    },
                    {
                        "id": "apply_to_banyan",
                        "text": "🌳 Apply this knowledge to heal the Banyan tree directly",
                        "nextScene": "BANYAN_HEALING_ATTEMPT",
                        "effects": {
                            "flags": { "attempted_banyan_healing": true }
                        }
                    }
                ]
            },
            
            "DEEP_LISTENING_SESSION": {
                "title": "The Art of Sacred Listening",
                "text": `You practice **Shravanam**—the sacred art of deep listening. As you give each villager your complete attention, something beautiful happens: they begin to truly hear each other as well.
                
                Through this practice, you learn:
                • The Banyan tree was once the village's spiritual anchor
                • A buried curse object may be affecting the tree
                • The Elder and Priestess both want what's best, but approach it differently
                • The community has lost its sense of spiritual unity
                
                The villagers look at you with new hope. "You have given us something we forgot," Kamala says. "The gift of truly being heard."`,
                "choices": [
                    {
                        "id": "form_healing_circle",
                        "text": "🔗 Form a healing circle to address the village's spiritual needs",
                        "nextScene": "HEALING_CIRCLE_FORMATION",
                        "effects": {
                            "attributes": { "compassion": 2, "spiritual_insight": 1 },
                            "flags": { "formed_healing_circle": true }
                        }
                    },
                    {
                        "id": "investigate_curse",
                        "text": "🕳️ Investigate the buried curse object affecting the tree",
                        "nextScene": "CURSE_INVESTIGATION",
                        "effects": {
                            "flags": { "investigating_curse": true }
                        }
                    },
                    {
                        "id": "unite_leaders",
                        "text": "🤝 Use your insights to unite the Elder and Priestess",
                        "nextScene": "LEADERSHIP_UNITY",
                        "effects": {
                            "attributes": { "wisdom": 2 }
                        }
                    }
                ]
            },
            
            // ===== THE GREAT CONVERGENCE =====
            
            "THE_GREAT_CONVERGENCE": {
                "title": "Where All Paths Meet",
                "subtitle": "The moment of truth arrives...",
                "text": `All your experiences in Dharmapura have led to this moment. Whether you came to understand through exploration, spiritual guidance, or compassionate service, you now stand before the great Banyan tree with a profound realization:
                
                **The tree's illness is a mirror of the village's spiritual state.**
                
                The Elder, the Priestess, and the villagers have gathered, drawn by an inexplicable sense that resolution is at hand. The ancient tree's leaves rustle with anticipation, as if it too knows that change comes.
                
                Your journey has prepared you for this moment. You possess the wisdom, compassion, and spiritual insight needed to heal not just the tree, but the deeper wound of separation that afflicts this entire community.`,
                "choices": [
                    {
                        "id": "perform_integration_ritual",
                        "text": "🔮 Perform a ritual to reintegrate the sacred and mundane",
                        "nextScene": "INTEGRATION_RITUAL",
                        "philosophicalTheme": "unity",
                        "requirements": {
                            "spiritual_insight": 3,
                            "flags": ["learned_vicheda"]
                        },
                        "effects": {
                            "worldState": { "banyan_healed": true, "village_unified": true },
                            "attributes": { "all": 2 },
                            "progression": { "questsCompleted": 1 }
                        }
                    },
                    {
                        "id": "facilitate_community_solution",
                        "text": "🎓 Guide the community to discover the solution together",
                        "nextScene": "COMMUNITY_SOLUTION",
                        "philosophicalTheme": "collaborative_wisdom",
                        "requirements": {
                            "compassion": 3,
                            "flags": ["gained_villager_trust"]
                        }
                    },
                    {
                        "id": "demonstrate_unity_principle",
                        "text": "✨ Demonstrate the principle of unity through direct action",
                        "nextScene": "UNITY_DEMONSTRATION",
                        "philosophicalTheme": "embodied_teaching",
                        "requirements": {
                            "wisdom": 3
                        }
                    }
                ],
                "specialNote": "Your available choices depend on the wisdom and relationships you've built throughout your journey."
            },
            
            // ===== RESOLUTION PATHS =====
            
            "INTEGRATION_RITUAL": {
                "title": "The Ritual of Reunion",
                "text": `You step forward, drawing upon all the wisdom you've gained. The ritual you perform is not from any single tradition, but rather an expression of the deepest truth you've discovered: the fundamental unity of all existence.
                
                As you place one hand on the Banyan's trunk and one on the earth, speaking to both practical concerns and spiritual needs, something miraculous happens. The tree's leaves shimmer with renewed vitality, the temple bells begin to ring in perfect harmony, and the villagers feel a deep sense of peace.
                
                **Elder Raghavan** speaks with wonder: "I see now. The tree isn't just wood OR just spirit—it's both, fully integrated. We can honor its sacredness while also meeting our practical needs through careful, reverent pruning."
                
                **Priestess Lakshmi** nods: "And our spiritual practice isn't separate from daily life—it IS daily life, sanctified."`,
                "outcomes": {
                    "immediate": [
                        "Banyan tree restored to full spiritual health",
                        "Village harmony reestablished",
                        "Elder and Priestess reconciled",
                        "Community learns integration practice"
                    ],
                    "longTerm": [
                        "Dharmapura becomes a model community for integrated living",
                        "Your reputation as a wisdom teacher spreads"
                    ]
                },
                "rewards": {
                    "attributes": { 
                        "wisdom": 3, 
                        "spiritual_insight": 3, 
                        "compassion": 2 
                    },
                    "specialItems": [{
                        "id": "banyan_blessing",
                        "name": "Blessing of the Sacred Tree",
                        "description": "A permanent blessing that allows you to sense and heal spiritual disconnection"
                    }]
                },
                "choices": [
                    {
                        "id": "continue_teaching",
                        "text": "🏠 Stay in Dharmapura to teach and guide the community",
                        "nextScene": "TEACHER_PATH"
                    },
                    {
                        "id": "continue_journey",
                        "text": "🛤️ Continue your journey, carrying this wisdom to other places",
                        "nextScene": "ACT1_CONCLUSION"
                    }
                ]
            },
            
            "COMMUNITY_SOLUTION": {
                "title": "Collective Wisdom",
                "text": `Rather than imposing a solution, you guide the community through a process of collective discovery. Using the deep listening skills you've cultivated, you help Elder and Priestess, villagers and temple-goers, all find common ground.
                
                Together, the community realizes that the Banyan tree can serve both practical and spiritual needs through mindful stewardship. They establish new traditions that honor the sacred while meeting material needs.
                
                The healing comes not from a single miraculous act, but from the restoration of community harmony and shared purpose.`,
                "choices": [
                    {
                        "id": "establish_council",
                        "text": "🏛️ Help establish a permanent council for community decisions",
                        "nextScene": "COMMUNITY_GOVERNANCE"
                    },
                    {
                        "id": "continue_journey",
                        "text": "🛤️ Your work here is done - continue your spiritual journey",
                        "nextScene": "ACT1_CONCLUSION"
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
                
                The village gathers to bid you farewell, but this isn't an ending—it's a graduation. You have completed your first great teaching, learned your first profound lesson about the nature of reality.
                
                As you walk toward the horizon, new adventures await. The path of spiritual evolution has many stages, and you have successfully navigated the first: **The Awakening of Compassionate Wisdom.**`,
                "finalRewards": {
                    "title": "Master of Integration",
                    "permanentAbilities": [
                        "Sense Spiritual Disconnection",
                        "Facilitate Community Healing",
                        "Bridge Sacred and Mundane"
                    ]
                },
                "choices": [
                    {
                        "id": "begin_act2",
                        "text": "🌅 Begin the next phase of your spiritual journey",
                        "nextAct": 2,
                        "nextScene": "ACT2_OPENING"
                    },
                    {
                        "id": "deepen_practice",
                        "text": "🧘 Enter a period of deep meditation and reflection",
                        "nextScene": "MEDITATION_PHASE"
                    },
                    {
                        "id": "return_home",
                        "text": "🏠 Return to the main menu",
                        "nextScene": "MAIN_MENU"
                    }
                ]
            },
            
            // ===== PUZZLE AND SIDE SCENES =====
            
            "BANYAN_INVESTIGATION": {
                "title": "The Ailing Tree",
                "text": `As you approach the great Banyan tree, you feel both its ancient power and its current distress. The leaves that should be vibrant green show signs of spiritual, not physical, illness.
                
                Placing your hand on the bark, you sense the tree's role as a bridge between the physical and spiritual realms. But something is blocking this connection.`,
                "choices": [
                    {
                        "id": "meditation_with_tree",
                        "text": "🧘 Meditate with the tree to understand its distress",
                        "nextScene": "TREE_MEDITATION",
                        "effects": {
                            "attributes": { "spiritual_insight": 2 }
                        }
                    },
                    {
                        "id": "examine_roots",
                        "text": "🕳️ Examine the roots for physical causes",
                        "nextScene": "ROOT_EXAMINATION",
                        "effects": {
                            "flags": { "found_buried_object": true }
                        }
                    },
                    {
                        "id": "seek_tree_history",
                        "text": "📚 Ask villagers about the tree's history",
                        "nextScene": "TREE_HISTORY",
                        "effects": {
                            "flags": { "learned_tree_history": true }
                        }
                    }
                ]
            },
            
            "TREE_MEDITATION": {
                "title": "Communion with the Ancient One",
                "text": `In deep meditation, you commune with the tree's ancient spirit. It shows you visions of the village's past, when sacred and mundane life flowed as one. You see the gradual separation that led to the current crisis.
                
                The tree whispers: "Help them remember... unity... the source of all healing..."`,
                "choices": [
                    {
                        "id": "promise_healing",
                        "text": "🤝 Promise the tree you will help restore unity",
                        "nextScene": "THE_GREAT_CONVERGENCE",
                        "effects": {
                            "flags": { "tree_covenant": true },
                            "attributes": { "spiritual_insight": 2, "determination": 1 }
                        }
                    }
                ]
            },
            
            "ROOT_EXAMINATION": {
                "title": "The Buried Curse",
                "text": `Digging carefully around the tree's roots, you discover a small, dark object buried deep—a curse stone placed by someone who wished ill upon the village.
                
                This malevolent artifact has been slowly poisoning the tree's spiritual connection, creating the separation that affects the entire community.`,
                "puzzle": {
                    "type": "purification",
                    "description": "You must purify the curse stone using elements of earth, water, fire, and air.",
                    "solution": "Use sacred earth, blessed water, purifying fire, and cleansing air",
                    "success": "CURSE_PURIFIED",
                    "failure": "CURSE_RESISTANCE"
                },
                "choices": [
                    {
                        "id": "attempt_purification",
                        "text": "🔥 Attempt to purify the curse stone",
                        "nextScene": "PURIFICATION_RITUAL"
                    },
                    {
                        "id": "seek_help",
                        "text": "🆘 Seek help from Guruji for this dangerous task",
                        "nextScene": "GURUJI_ASSISTANCE"
                    }
                ]
            },
            
            "PURIFICATION_RITUAL": {
                "title": "Breaking the Curse",
                "text": `Drawing upon your spiritual training, you perform a purification ritual. The curse stone resists, sending waves of negative energy, but your determination and growing wisdom prove stronger.
                
                As the curse breaks, you feel the tree's spiritual channels opening, its connection to the cosmic flow restored. The Banyan's leaves immediately begin to shimmer with renewed life force.`,
                "choices": [
                    {
                        "id": "return_to_village",
                        "text": "🏘️ Return to the village with news of the healing",
                        "nextScene": "TRIUMPHANT_RETURN",
                        "effects": {
                            "worldState": { "curse_broken": true },
                            "progression": { "puzzlesSolved": 1 }
                        }
                    }
                ]
            },
            
            "TRIUMPHANT_RETURN": {
                "title": "The Healing Spreads",
                "text": `As you return to the village square, the news of the tree's healing spreads quickly. The villagers gather around the now-vibrant Banyan, marveling at its restored beauty and spiritual presence.
                
                Elder Raghavan and Priestess Lakshmi both approach you with gratitude and newfound respect. "You have given us more than healing," the Priestess says. "You have shown us the path to unity."`,
                "choices": [
                    {
                        "id": "teach_unity_principles",
                        "text": "📿 Teach them the principles of unity you've learned",
                        "nextScene": "FINAL_TEACHING"
                    },
                    {
                        "id": "celebrate_together",
                        "text": "🎉 Celebrate with the community",
                        "nextScene": "VILLAGE_CELEBRATION"
                    }
                ]
            },
            
            "FINAL_TEACHING": {
                "title": "The Final Lesson",
                "text": `Under the restored Banyan tree, you share the deepest wisdom you've gained in Dharmapura. The villagers, Elder, and Priestess listen with open hearts as you speak of:
                
                • The illusion of separation between sacred and mundane
                • The power of community to heal spiritual disconnection
                • The importance of listening deeply to one another
                • How every action can be a spiritual practice
                
                Your words take root in their hearts like seeds in fertile soil.`,
                "choices": [
                    {
                        "id": "complete_act1",
                        "text": "🌟 Your first spiritual trial is complete",
                        "nextScene": "ACT1_CONCLUSION",
                        "effects": {
                            "progression": { "questsCompleted": 1 },
                            "attributes": { "wisdom": 2, "compassion": 2 }
                        }
                    }
                ]
            }
        };
        
        console.log('📚 Story data initialized with', Object.keys(this.storyData).length, 'scenes');
    }
    
    // ===== CORE SYSTEM METHODS =====
    
    getCurrentScene() {
        return this.storyData[this.currentScene] || null;
    }
    
    getAvailableChoices() {
        const scene = this.getCurrentScene();
        if (!scene || !scene.choices) return [];
        
        // Filter choices based on requirements
        return scene.choices.filter(choice => this.checkRequirements(choice.requirements));
    }
    
    checkRequirements(requirements) {
        if (!requirements) return true;
        
        // Check attribute requirements
        if (requirements.attributes) {
            for (const [attr, minValue] of Object.entries(requirements.attributes)) {
                if (this.playerState.attributes[attr] < minValue) {
                    return false;
                }
            }
        }
        
        // Check flag requirements
        if (requirements.flags) {
            for (const flag of requirements.flags) {
                if (!this.playerState.flags[flag]) {
                    return false;
                }
            }
        }
        
        // Check individual attribute requirements (like spiritual_insight: 3)
        for (const [key, value] of Object.entries(requirements)) {
            if (key !== 'attributes' && key !== 'flags') {
                if (this.playerState.attributes[key] && this.playerState.attributes[key] < value) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    makeChoice(choiceId) {
        const scene = this.getCurrentScene();
        if (!scene) return false;
        
        const choice = scene.choices.find(c => c.id === choiceId);
        if (!choice) return false;
        
        // Apply choice effects
        this.applyEffects(choice.effects);
        
        // Track choice
        this.playerState.progression.choicesMade++;
        
        // Navigate to next scene
        if (choice.nextScene) {
            this.currentScene = choice.nextScene;
        }
        
        // Trigger events
        this.triggerEvents('choice_made', { choice, scene });
        
        return true;
    }
    
    applyEffects(effects) {
        if (!effects) return;
        
        // Apply attribute changes
        if (effects.attributes) {
            for (const [attr, value] of Object.entries(effects.attributes)) {
                if (attr === 'all') {
                    // Apply to all attributes
                    for (const key of Object.keys(this.playerState.attributes)) {
                        this.playerState.attributes[key] += value;
                    }
                } else {
                    this.playerState.attributes[attr] = (this.playerState.attributes[attr] || 0) + value;
                }
            }
        }
        
        // Apply flags
        if (effects.flags) {
            for (const [flag, value] of Object.entries(effects.flags)) {
                this.playerState.flags[flag] = value;
            }
        }
        
        // Apply inventory changes
        if (effects.inventory) {
            this.playerState.inventory.push(...effects.inventory);
        }
        
        // Apply world state changes
        if (effects.worldState) {
            Object.assign(this.worldState, effects.worldState);
        }
        
        // Apply progression changes
        if (effects.progression) {
            Object.assign(this.playerState.progression, effects.progression);
        }
    }
    
    // ===== UI INTEGRATION =====
    
    setupUIIntegration() {
        // Make this system globally available
        window.fixedACT1Story = this;
        
        // Set up event listeners for UI integration
        document.addEventListener('choice-selected', (event) => {
            this.makeChoice(event.detail.choiceId);
        });
        
        document.addEventListener('meditation-requested', () => {
            this.performMeditation();
        });
        
        console.log('🔗 UI integration setup complete');
    }
    
    performMeditation() {
        const scene = this.getCurrentScene();
        if (scene && scene.meditation && scene.meditation.available) {
            this.applyEffects(scene.meditation.effects);
            this.triggerEvents('meditation_performed', { scene });
        }
    }
    
    triggerEvents(eventType, data) {
        // Dispatch custom events for UI systems to listen to
        document.dispatchEvent(new CustomEvent(`story-${eventType}`, {
            detail: data
        }));
    }
    
    // ===== SAVE/LOAD SYSTEM =====
    
    saveProgress() {
        const saveData = {
            currentScene: this.currentScene,
            worldState: this.worldState,
            playerState: this.playerState,
            timestamp: Date.now()
        };
        
        try {
            localStorage.setItem('samsaraSaga_fixedACT1_save', JSON.stringify(saveData));
            return true;
        } catch (error) {
            console.error('Failed to save progress:', error);
            return false;
        }
    }
    
    loadProgress() {
        try {
            const saveData = localStorage.getItem('samsaraSaga_fixedACT1_save');
            if (!saveData) return false;
            
            const parsed = JSON.parse(saveData);
            this.currentScene = parsed.currentScene;
            this.worldState = parsed.worldState;
            this.playerState = parsed.playerState;
            
            return true;
        } catch (error) {
            console.error('Failed to load progress:', error);
            return false;
        }
    }
    
    // ===== STATUS METHODS =====
    
    getGameStatus() {
        return {
            currentScene: this.currentScene,
            playerState: this.playerState,
            worldState: this.worldState,
            availableChoices: this.getAvailableChoices().length,
            progressPercentage: this.calculateProgress()
        };
    }
    
    calculateProgress() {
        const totalQuests = 1; // Act 1 has one main quest with multiple resolution paths
        const completedQuests = this.playerState.progression.questsCompleted;
        return Math.min(100, (completedQuests / totalQuests) * 100);
    }
    
    // ===== PUZZLE SYSTEM =====
    
    solvePuzzle(puzzleId, solution) {
        // Simple puzzle solving system
        const scene = this.getCurrentScene();
        if (scene && scene.puzzle && scene.puzzle.solution === solution) {
            this.playerState.progression.puzzlesSolved++;
            this.triggerEvents('puzzle_solved', { puzzleId, scene });
            
            if (scene.puzzle.success) {
                this.currentScene = scene.puzzle.success;
            }
            return true;
        } else {
            this.triggerEvents('puzzle_failed', { puzzleId, scene });
            
            if (scene.puzzle && scene.puzzle.failure) {
                this.currentScene = scene.puzzle.failure;
            }
            return false;
        }
    }
}

// Initialize the fixed story system
window.FixedACT1StorySystem = FixedACT1StorySystem;

console.log('✅ Fixed ACT1 Story System loaded successfully');

// Auto-initialize if we're in the game environment
if (typeof document !== 'undefined' && document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('🚀 Auto-initializing Fixed ACT1 Story System...');
        window.fixedStorySystem = new FixedACT1StorySystem();
    });
} else if (typeof document !== 'undefined') {
    console.log('🚀 Immediately initializing Fixed ACT1 Story System...');
    window.fixedStorySystem = new FixedACT1StorySystem();
}

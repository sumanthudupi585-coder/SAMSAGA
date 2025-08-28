/**
 * @file Puzzles.js
 * @description Defines all puzzles for Samsara Saga, redesigned for visual and interactive gameplay.
 * @version 5.0.0 (Visual/Motion UI/UX Enhancement)
 * @license MIT
 */

window.PUZZLES = {

    /**
     * =================================================================
     * ACT I PUZZLES
     * =================================================================
     */

    /**
     * Banyan Tree Harmony Puzzle
     * Visual-First Redesign: This is no longer a text-based choice. It's an interactive mandala
     * where the player rotates three concentric rings (representing Vitality, Wisdom, Harmony)
     * to align symbols and visually balance the tree's energy.
     */
    "BanyanTreeHarmony": {
        "id": "BanyanTreeHarmony",
        "title": "The Sacred Balance",
        "description": "Align the celestial rings to balance the spiritual energies of the Banyan tree.",
        "nextSceneOnSuccess": "BANYAN_HARMONY_SUCCESS",
        "difficulty": "Medium",
        "visualType": "MandalaWheel", // UIController will render an interactive mandala
        "uiConfig": {
            "backgroundImage": "images/puzzles/banyan_mandala_base.png",
            "rings": [
                { "id": "vitality", "image": "images/puzzles/vitality_ring.png", "initialRotation": 30 },
                { "id": "wisdom", "image": "images/puzzles/wisdom_ring.png", "initialRotation": 70 },
                { "id": "harmony", "image": "images/puzzles/harmony_ring.png", "initialRotation": 20 }
            ],
            "solutionAngle": 0, // All rings must be aligned at 0 degrees
            "solutionTolerance": 5 // Degrees of tolerance
        },
        "mechanics": {
            "type": "RotationalAlignment",
             "energyTypes": [
                {"name": "Vitality", "currentLevel": 30, "idealLevel": 50, "minLevel": 0, "maxLevel": 100},
                {"name": "Wisdom", "currentLevel": 70, "idealLevel": 50, "minLevel": 0, "maxLevel": 100},
                {"name": "Harmony", "currentLevel": 20, "idealLevel": 50, "minLevel": 0, "maxLevel": 100}
            ],
            "balanceThreshold": 10, // How close to ideal each energy must be
            "adjustmentMethods": [
                {"name": "Meditation", "effect": {"Vitality": 0, "Wisdom": +5, "Harmony": +10}},
                {"name": "Offering", "effect": {"Vitality": +10, "Wisdom": 0, "Harmony": +5}},
                {"name": "Chanting", "effect": {"Vitality": +5, "Wisdom": +10, "Harmony": 0}}
            ],
            "attempts": 0,
            "maxAttempts": 5
        },
        "hints": [
            "The symbols on the rings must align perfectly at the top.",
            "Each ring moves independently. Find the balance point where all patterns converge."
        ],
        "rewards": {
            "item": "Banyan Leaf Talisman",
            "ability": "Nature Communion",
            "knowledge": "Understanding of natural energy flows"
        },
        "completed": false
    },

    /**
     * Barrier of Negativity Puzzle
     * Visual-First Redesign: A drag-and-drop interface. The player sees the shimmering barrier
     * and must drag the correct item from their visual inventory onto it. The barrier will
     * visually react, either repelling incorrect items or dissolving for the correct one.
     */
    "BarrierOfNegativity": {
        "id": "BarrierOfNegativity",
        "title": "The Barrier of Spiritual Despair",
        "description": "Drag an object of pure spiritual intent from your inventory to dissolve the barrier.",
        "nextSceneOnSuccess": "PURIFY_CRYSTAL_SUCCESS",
        "difficulty": "Medium",
        "visualType": "SymbolDnd", // UIController renders a drag-and-drop target and inventory
        "uiConfig": {
            "targetImage": "images/puzzles/barrier_animation.gif",
            "dropZone": { "x": "50%", "y": "50%", "radius": "100px" },
            "feedback": {
                "successAnimation": "dissolve",
                "failureAnimation": "repel"
            }
        },
        "mechanics": {
            "type": "ItemApplication",
            "solution": {
                "requiresItem": true,
                "validItems": ["Pure Crystal", "Blessed Water", "Sacred Flame", "Lotus Petal"]
            },
             "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "The barrier responds to purity of both object and intention.",
            "Something that has never been tainted by negative emotions might work."
        ],
        "rewards": {
            "access": "Purified Crystal",
            "ability": "Enhanced spiritual perception",
            "knowledge": "Understanding of how purity can counteract corruption"
        },
        "completed": false
    },

    /**
     * =================================================================
     * ACT II PUZZLES
     * =================================================================
     */

    /**
     * Shilpa Shastra Crafting System
     * Visual-First Redesign: A multi-stage mini-game.
     * 1. Atma Shuddhi: A "connect-the-dots" style game on a mandala pattern.
     * 2. Vastu Vidya: A visual selection screen with images of materials.
     * 3. Yantra Sthapana: A drag-and-drop puzzle to assemble a geometric yantra.
     * 4. Prana Pratishtha: A rhythmic tapping game to a sacred mantra's cadence.
     */
    "ShilpaShastraCrafting": {
        "title": "The Sacred Art of Divine Crafting",
        "description": "Follow the sacred stages to craft a divine artifact.",
         "difficulty": "Variable",
        "visualType": "MultiStageCrafting", // UIController renders a sequence of mini-games
        "stages": [
            {
                "name": "Atma Shuddhi (Self-Purification)",
                 "description": "Purify your spiritual energy through meditation",
                "challenge": "Complete a mandala pattern by selecting the correct sequence of energy points",
                "difficulty": "Easy",
                "visualType": "PatternTrace",
                "uiConfig": {
                    "patternImage": "images/puzzles/mandala_trace.svg",
                    "traceColor": "#ffc58f"
                }
            },
            {
                "name": "Vastu Vidya (Material Knowledge)",
                 "description": "Select the proper materials with divine resonance",
                "challenge": "Identify materials with the correct spiritual properties for your intended creation",
                "difficulty": "Medium",
                "visualType": "VisualSelection",
                "uiConfig": {
                    "items": [
                        { "id": "celestial_bronze", "image": "images/items/celestial_bronze.png" },
                        { "id": "river_pearl", "image": "images/items/river_pearl.png" },
                        // ... more items
                    ],
                    "correctSelection": ["celestial_bronze", "river_pearl", "sandalwood"]
                }
            },
            {
                "name": "Yantra Sthapana (Sacred Geometry)",
                 "description": "Arrange the components in a sacred geometric pattern",
                "challenge": "Place components according to cosmic mathematical principles",
                "difficulty": "Hard",
                "visualType": "GeometricAssembly",
                "uiConfig": {
                    "yantraPieces": [
                        { "id": "piece1", "image": "images/puzzles/yantra_piece1.svg" },
                        // ... more pieces
                    ],
                    "solutionLayout": "images/puzzles/yantra_solution.svg"
                }
            },
            {
                "name": "Prana Pratishtha (Life Installation)",
                "description": "Infuse the creation with divine life force",
                "challenge": "Channel your spiritual energy into the creation through proper mantras and visualization",
                "difficulty": "Very Hard",
                "visualType": "RhythmicTap",
                "uiConfig": {
                    "mantra": "Om Ghanta Nada Brahma",
                    "beatmap": [1.0, 1.5, 2.0, 2.5, 3.5] // Timing for taps
                }
            }
        ],
         "mechanics": {
            "type": "MultiStageCrafting",
            "craftableItems": [
                {
                    "name": "Resonance Bell",
                    "materials": ["Celestial Bronze", "River Pearl", "Sandalwood"],
                    "pattern": "Triangular Yantra",
                    "mantra": "Om Ghanta Nada Brahma",
                    "difficulty": "Medium",
                    "effects": ["Reveals hidden spiritual energies", "Clears negative vibrations"]
                },
                {
                    "name": "Dharma Compass",
                    "materials": ["Purified Gold", "Lodestone", "Lotus Fiber"],
                    "pattern": "Circular Mandala",
                    "mantra": "Om Dharma Marga Darshaka",
                    "difficulty": "Hard",
                    "effects": ["Points toward your spiritual path", "Reveals moral choices"]
                }
            ],
            "skillProgression": true,
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Each stage builds upon the previous one; errors compound if not corrected.",
            "Your intention while crafting is as important as the physical actions."
        ],
        "rewards": {
            "item": "Resonance Bell",
            "abilities": ["Detect divine vibrations", "Amplify celestial sounds"],
             "craftingExperience": 100
        },
        "completed": false,
        "currentStage": 1
    },

     /**
     * Harmonic Resonance Puzzle
     * Visual-First Redesign: An interactive set of 5 crystal chimes. Players must click the
     * chimes in the correct sequence. Each click plays a note and a visual effect. The puzzle
     * also requires holding the click for the correct duration (timing) and clicking a specific
     * area of the chime for intensity.
     */
    "HarmonicResonance": {
        "title": "The Celestial Harmony",
        "description": "Play the five sacred notes with perfect timing and intensity to unlock the temple.",
        "difficulty": "Medium",
        "visualType": "InteractiveInstrument", // UIController renders clickable chimes
        "uiConfig": {
            "instrument": "CrystalChimes",
            "chimes": [
                { "id": "Sa", "note": "C4", "visualEffect": "earth_glow" },
                { "id": "Ga", "note": "E4", "visualEffect": "water_ripple" },
                { "id": "Pa", "note": "G4", "visualEffect": "fire_ember" },
                { "id": "Dha", "note": "A4", "visualEffect": "wind_swirl" },
                { "id": "Ni", "note": "B4", "visualEffect": "ether_sparkle" }
            ]
        },
        "mechanics": {
            "type": "MusicalSequence",
            "notes": ["Sa", "Ga", "Pa", "Dha", "Ni"],
            "correctSequence": ["Sa", "Ga", "Pa", "Dha", "Ni"],
             "harmonicRequirements": {
                "timing": {
                    "description": "Each note must be played with precise timing, following the cosmic rhythm",
                    "pattern": [1, 0.5, 0.5, 1, 2], // Duration multipliers for each note
                    "tolerance": 0.2 // Acceptable error margin
                },
                "intensity": {
                    "description": "Each note must be played with the correct intensity to activate its corresponding element",
                    "pattern": ["medium", "soft", "medium", "strong", "soft"],
                    "elementalAssociations": {
                        "Sa": "Earth",
                        "Ga": "Water",
                        "Pa": "Fire",
                        "Dha": "Air",
                        "Ni": "Ether"
                    }
                }
            },
            "attempts": 0,
            "maxAttempts": 3
        },
        "hints": [
            "The elements follow a pattern from densest to most subtle.",
            "The timing reflects the cosmic breath - expansion and contraction."
        ],
        "rewards": {
            "access": "Inner Temple Sanctum",
            "ability": "Elemental Attunement",
             "knowledge": "Understanding of sound as the bridge between matter and spirit"
        },
        "completed": false
    },

    /**
     * Celestial Court Puzzle
     * A diplomatic puzzle requiring navigation of divine politics
     */
    "CelestialCourt": {
        "title": "The Celestial Court",
        "description": "Navigate the complex politics of the divine court to gain an audience with Indra.",
        "difficulty": "Hard",
        "mechanics": {
            "type": "DiplomaticNavigation",
            "courtMembers": [
                {
                    "name": "Brihaspati",
                    "title": "Guru of the Devas",
                    "domain": "Wisdom and Counsel",
                    "disposition": "Neutral",
                    "desires": ["Intellectual discussion", "Respect for tradition"],
                    "dislikes": ["Impulsiveness", "Disrespect for hierarchy"]
                },
                {
                    "name": "Agni",
                    "title": "God of Fire",
                    "domain": "Transformation and Ritual",
                    "disposition": "Favorable",
                    "desires": ["Offerings", "Directness"],
                    "dislikes": ["Deception", "Water imagery"]
                },
                {
                    "name": "Varuna",
                    "title": "Lord of Waters",
                    "domain": "Celestial Order and Justice",
                    "disposition": "Unfavorable",
                    "desires": ["Adherence to cosmic law", "Humility"],
                    "dislikes": ["Chaos", "Pride"]
                },
                {
                    "name": "Saraswati",
                    "title": "Goddess of Knowledge",
                    "domain": "Arts and Learning",
                    "disposition": "Neutral",
                    "desires": ["Poetic speech", "New knowledge"],
                    "dislikes": ["Ignorance", "Crude expression"]
                },
                {
                    "name": "Yama",
                    "title": "Lord of Dharma",
                    "domain": "Celestial Authority",
                    "disposition": "Unfavorable",
                    "desires": ["Honesty", "Acceptance of natural order"],
                    "dislikes": ["Attempts to circumvent fate", "Dishonesty"]
                }
            ],
            "interactions": [
                {
                    "name": "Formal Greeting",
                    "description": "How you initially address each deity",
                    "options": ["Traditional", "Creative", "Direct", "Humble"]
                },
                {
                    "name": "Conversation Topic",
                    "description": "What subject you choose to discuss",
                    "options": ["Cosmic Philosophy", "Current Celestial Affairs", "Personal Journey", "The Celestial Silence"]
                },
                {
                    "name": "Offering",
                    "description": "What you present as a token of respect",
                    "options": ["Symbolic Item", "Knowledge", "Service", "Nothing"]
                },
                {
                    "name": "Request Style",
                    "description": "How you frame your request for assistance",
                    "options": ["Appeal to Duty", "Appeal to Compassion", "Appeal to Curiosity", "Appeal to Order"]
                }
            ],
            "events": [
                {
                    "name": "Celestial Debate",
                    "description": "A formal debate on the proper response to the Celestial Silence",
                    "participants": ["Brihaspati", "Varuna", "Saraswati"],
                    "keyInsight": "The silence is not an absence but a presence that requires understanding, not action"
                },
                {
                    "name": "Divine Council",
                    "description": "A gathering of deities to discuss cosmic matters",
                    "participants": ["All court members"],
                    "keyInsight": "The court is divided on whether to intervene in mortal affairs during this unusual time"
                }
            ],
            "successConditions": {
                "minimumFavorableDeities": 3,
                "requiredAllies": ["Brihaspati"],
                "avoidedEnemies": ["Yama"]
            },
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Each deity responds differently to different approaches.",
            "Your Nakshatra may give you natural affinity with certain deities."
        ],
        "rewards": {
            "access": "Indra's Audience Chamber",
            "ability": "Divine Etiquette",
            "knowledge": "Understanding of celestial politics"
        },
        "completed": false
    },

    /**
     * Celestial Silence Investigation
     * An investigative puzzle about the mysterious silence affecting the heavens
     */
    "CelestialSilence": {
        "title": "The Great Silence",
        "description": "Investigate the mysterious silence that has fallen over the celestial realms.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "MysteryInvestigation",
            "clueLocations": [
                {
                    "name": "Hall of Echoes",
                    "description": "A chamber where all cosmic sounds converge",
                    "clues": ["Residual vibrations show the silence began precisely at the last celestial conjunction", "The silence affects divine communication but not physical sound"]
                },
                {
                    "name": "Akashic Library",
                    "description": "Repository of all cosmic knowledge",
                    "clues": ["Similar silences have occurred five times in recorded cosmic history", "Each previous silence preceded a major shift in cosmic order"]
                },
                {
                    "name": "Observatory of Ages",
                    "description": "Where celestial movements are tracked",
                    "clues": ["The planets have subtly altered their orbits", "The constellation of the Saptarishi (Seven Sages) has dimmed"]
                },
                {
                    "name": "Divine Communication Nexus",
                    "description": "Central hub for messages between realms",
                    "clues": ["Messages to the higher realms beyond Svarga are completely blocked", "Messages between deities are delayed and distorted"]
                }
            ],
            "suspects": [
                {
                    "name": "Rahu",
                    "motive": "Revenge for being eternally separated from his lower half",
                    "evidence": ["Shadow energy detected in the Hall of Echoes", "Increased eclipse activity"],
                    "alibi": "Was observed in the far reaches of space during the onset"
                },
                {
                    "name": "Shukra",
                    "motive": "Protest against the devas for their treatment of the asuras",
                    "evidence": ["Diplomatic communications with asuras increased before the silence", "Known expert in sound-absorbing mantras"],
                    "alibi": "No solid alibi, claims to have been in meditation"
                },
                {
                    "name": "Cosmic Cycle Itself",
                    "motive": "Natural transition to a new cosmic age",
                    "evidence": ["Timing aligns with ancient prophecies", "Similar patterns observed at ends of previous yugas"],
                    "alibi": "Not applicable - natural phenomenon"
                }
            ],
            "investigationMethods": [
                {
                    "name": "Divine Perception",
                    "description": "Using heightened senses to detect subtle energies",
                    "effectiveness": "High for energy traces, low for intentions"
                },
                {
                    "name": "Astral Projection",
                    "description": "Sending consciousness to witness past events",
                    "effectiveness": "Medium for events, high for locations"
                },
                {
                    "name": "Witness Interviews",
                    "description": "Speaking with celestial beings who observed anomalies",
                    "effectiveness": "High for perspectives, low for objective facts"
                }
            ],
            "solution": {
                "culprit": "Cosmic Cycle Itself",
                "explanation": "The silence is a natural phenomenon marking the transition between cosmic ages, not a malicious act",
                "evidence": ["Pattern matching with historical transitions", "Planetary alignment confirmation", "Energy signature analysis"],
                "resolution": "The silence cannot be broken, but can be understood and navigated"
            },
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Not all mysteries have villains; some are simply natural transitions.",
            "Pay attention to historical patterns rather than current suspicions."
        ],
        "rewards": {
            "knowledge": "Understanding of cosmic cycles and transitions",
            "ability": "Clarity of Perception - ability to see through illusions and distractions",
            "insight": "Recognition that change, even disruptive change, is part of the cosmic order"
        },
        "completed": false
    },

    /**
     * Navaratri Festival Puzzle
     * A nine-night festival puzzle requiring gathering specific components
     */
    "NavaratriFestival": {
        "title": "The Nine Nights of the Goddess",
        "description": "Participate in the divine Navaratri festival to counter the effects of the Celestial Silence.",
        "difficulty": "Hard",
        "mechanics": {
            "type": "RitualPreparation",
            "nights": [
                {
                    "name": "Shailaputri Night",
                    "deity": "Goddess of the Mountains",
                    "element": "Earth",
                    "offering": "Soil from a sacred mountain peak",
                    "ritual": "Grounding meditation at sunset",
                    "benefit": "Stability in chaos"
                },
                {
                    "name": "Brahmacharini Night",
                    "deity": "Goddess of Asceticism",
                    "element": "Water",
                    "offering": "Water from the confluence of three rivers",
                    "ritual": "Fasting and purification",
                    "benefit": "Clarity of purpose"
                },
                {
                    "name": "Chandraghanta Night",
                    "deity": "Goddess of Courage",
                    "element": "Fire",
                    "offering": "Oil lamp with seven wicks",
                    "ritual": "Bell-ringing at midnight",
                    "benefit": "Dispelling of fear"
                },
                {
                    "name": "Kushmanda Night",
                    "deity": "Goddess of the Cosmic Egg",
                    "element": "Solar energy",
                    "offering": "Sun-ripened fruits",
                    "ritual": "Visualization of inner light",
                    "benefit": "Vitality and health"
                },
                {
                    "name": "Skandamata Night",
                    "deity": "Mother of Skanda",
                    "element": "Air",
                    "offering": "Incense of five fragrances",
                    "ritual": "Recitation of protective mantras",
                    "benefit": "Divine protection"
                },
                {
                    "name": "Katyayani Night",
                    "deity": "Warrior Goddess",
                    "element": "Storm",
                    "offering": "Weapons adorned with flowers",
                    "ritual": "Martial dance at twilight",
                    "benefit": "Courage in battle"
                },
                {
                    "name": "Kalaratri Night",
                    "deity": "Goddess of Darkness",
                    "element": "Shadow",
                    "offering": "Black sesame seeds and iron",
                    "ritual": "Facing fears in darkness",
                    "benefit": "Destruction of obstacles"
                },
                {
                    "name": "Mahagauri Night",
                    "deity": "Goddess of Purity",
                    "element": "Ether",
                    "offering": "White flowers and milk",
                    "ritual": "Bathing ritual at dawn",
                    "benefit": "Purification of karma"
                },
                {
                    "name": "Siddhidatri Night",
                    "deity": "Goddess of Perfection",
                    "element": "Cosmic consciousness",
                    "offering": "Nine types of grains arranged in a yantra",
                    "ritual": "Integration meditation uniting all elements",
                    "benefit": "Spiritual attainment"
                }
            ],
            "gatheringChallenges": {
                "difficulty": "Variable by component",
                "timeConstraint": "Each component must be gathered before its corresponding night",
                "purityRequirements": "Gatherer must maintain specific observances while collecting each item"
            },
            "ritualRequirements": {
                "timing": "Each ritual must be performed at its auspicious time",
                "sequence": "The nine nights must be observed in order",
                "participation": "Different celestial beings must be invited on different nights"
            },
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Each component must be gathered with the specific intention aligned with its associated deity.",
            "The order of the nine nights follows a spiritual progression from grounding to transcendence."
        ],
        "rewards": {
            "abilities": "Nine distinct divine blessings, one from each night of the festival",
            "knowledge": "Deeper understanding of the cosmic feminine principles that counter the Celestial Silence",
            "communityEffect": "Strengthened bonds with divine beings across Svarga"
        },
        "completed": false
    },


    /**
     * =================================================================
     * ACT III PUZZLES
     * =================================================================
     */

    /**
     * Labyrinth of Maya Puzzle
     * Visual-First Redesign: A dynamic, shifting maze. Walls are semi-transparent and made of
     * light and shadow. Paths change based on the player's gaze. The "Mirrors" are interactive
     * visual puzzles within the maze itself, not just text prompts.
     */
    "LabyrinthOfMaya": {
        "title": "The Shifting Paths of Illusion",
        "description": "Navigate the Labyrinth of Maya, where your own attachments manifest as paths and obstacles.",
        "difficulty": "Hard",
        "visualType": "DynamicMaze", // UIController renders a navigable, shifting maze
        "uiConfig": {
            "wallTexture": "images/textures/maya_walls.png",
            "floorTexture": "images/textures/maya_floor.png"
        },
        "mechanics": {
            "type": "SelfReflectiveNavigation",
             "labyrinthProperties": {
                "description": "A maze that shifts based on the player's attachments and beliefs",
                "nature": "The labyrinth is not a physical space but a mental construct that reflects the player's own mind",
                "challenges": [
                    "Paths shift when not directly observed",
                    "Obstacles represent the player's own fears and attachments",
                    "Solutions require recognizing and releasing specific attachments"
                ]
            },
            "mirrors": [
                {
                    "name": "Mirror of Action",
                    "puzzleId": "KarmaReflection", // Triggers the KarmaReflection puzzle
                    "location": { "x": 10, "y": 5 }
                },
                {
                    "name": "Mirror of Devotion",
                    "puzzleId": "DevotionTranscendence",
                    "location": { "x": 3, "y": 12 }
                },
                {
                    "name": "Mirror of Self",
                    "puzzleId": "SelfInquiry",
                    "location": { "x": 15, "y": 18 }
                }
            ],
            "convergencePoint": {
                "name": "The Heart of Maya",
                "description": "A chamber where the figure of Maya poses a riddle",
                "riddle": "I create the appearance of many from the reality of one. I am neither true nor false, neither existent nor non-existent. Those who call me 'mere illusion' do not understand my power. Those who take me as ultimate reality remain bound. What am I, truly?",
                "correctAnswer": "The creative power of Brahman itself, neither separate from reality nor identical with ultimate truth. Real as an experience but not as an independent existence.",
                "insight": "Maya is not other than Brahman, yet creates the appearance of otherness. When understood, it is no longer an obstacle but a revelation.",
                "puzzleId": "MayaRiddle"
            },
             "attempts": 0,
            "maxAttempts": null
        },
         "hints": [
            "The labyrinth is not trying to trap you but to reveal your own assumptions and attachments.",
            "When a path seems to vanish, question what belief or expectation made you think it should remain."
        ],
        "rewards": {
            "ability": "Maya-Darshana - the ability to see through illusions.",
            "insight": "The mind that created the labyrinth is the same mind that navigates it"
        },
        "completed": false
    },

    /**
     * Karma Reflection Puzzle
     * Visual-First Redesign: An interactive timeline of the player's key actions. The player must
     * drag a "Lens of Self" over the actions. The correct insight is to drag the lens over the
     * "Actor" (a silhouette of the player) itself, signifying that the illusion is the doer, not the deeds.
     */
    "KarmaReflection": {
        "title": "Karma's Echo",
        "description": "Use the Lens of Self to identify the true source of karmic bondage.",
         "difficulty": "Hard",
        "visualType": "InteractiveTimeline",
        "uiConfig": {
            "timelineEvents": [ /* Populated from GameStateManager */ ],
            "lensImage": "images/puzzles/lens_of_self.png",
            "solutionTarget": "player_actor_silhouette"
        },
        "mechanics": {
            "type": "ConceptualDragAndDrop",
            "correctInsight": "The doer is itself a thought arising in awareness",
             "challenge": "Before you stands a mirror that reflects not your physical form but the consequences of your actions in Dharmapura. To proceed, you must recognize which of your past actions was based on the deepest illusion of separateness.",
            "attempts": 0,
            "maxAttempts": null
        },
         "hints": [
            "Look beyond the specific actions to the underlying assumption behind all of them.",
            "The question is not which action was most separate, but what makes any action seem separate."
        ],
        "rewards": {
            "ability": "Witness Consciousness",
            "insight": "The doer is itself a thought arising in awareness"
             },
        "completed": false
    },

    /**
     * Devotion Transcendence Puzzle
     * Visual-First Redesign: A visual puzzle where the player sees two separate entities: a silhouette
     * of themselves (Worshipper) and a divine form (Worshipped). The player must physically drag the
     * two images together until they merge into a single, radiant form.
     */
    "DevotionTranscendence": {
        "title": "Bhakti's Reflection",
        "description": "Merge the devotee and the divine to realize their ultimate unity.",
        "difficulty": "Hard",
        "visualType": "ImageMerge",
        "uiConfig": {
            "devoteeImage": "images/puzzles/devotee_silhouette.png",
            "divineImage": "images/puzzles/divine_form.png",
            "mergedImage": "images/puzzles/unified_radiance.png"
        },
        "mechanics": {
            "type": "VisualUnification",
            "correctInsight": "The worshipper and the worshipped are ultimately one.",
            "challenge": "Before you floats a divine form that shifts between different deities you encountered in Svarga. To proceed, you must recognize the ultimate truth about the relationship between worshipper and worshipped.",
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Devotion creates a relationship that maintains duality.",
            "The highest form of devotion dissolves the devotee."
        ],
        "rewards": {
            "ability": "Heart-Mind Unity",
            "insight": "Love is the recognition of unity, not the bridge between separate entities"
             },
        "completed": false
    },

    /**
     * Self Inquiry Puzzle
     * Visual-First Redesign: The player is surrounded by floating, reflective shards (mirrors).
     * Each shard shows a different aspect (thoughts, body, emotions). The player must click on the
     * empty space *between* the shards, representing the awareness that perceives them all.
     */
    "SelfInquiry": {
        "title": "The Mirror of Self",
        "description": "Identify the true Self by looking beyond the reflections.",
         "difficulty": "Hard",
        "visualType": "InteractiveReflectionSpace",
        "uiConfig": {
            "reflections": [
                { "id": "body", "video": "videos/reflection_body.mp4" },
                { "id": "mind", "video": "videos/reflection_mind.mp4" },
                { "id": "emotion", "video": "videos/reflection_emotion.mp4" }
            ],
            "solutionTarget": "empty_space" // Clicking the background
        },
        "mechanics": {
            "type": "ConceptualSelection",
            "correctInsight": "The true Self is the awareness observing all reflections.",
             "challenge": "Before you stands a series of mirrors, each reflecting a different aspect of what you've considered to be 'yourself.' To proceed, you must identify which reflection represents the true Self (Atman).",
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "What you call 'yourself' is a process, not an entity.",
            "The observer cannot be the observed."
        ],
        "rewards": {
            "ability": "Self-Abidance",
            "insight": "The Self is not an object of experience but the subject of all experience"
             },
        "completed": false
    },

     /**
     * Maya Riddle Puzzle
     * The final puzzle in the Labyrinth of Maya
     */
    "MayaRiddle": {
        "title": "The Riddle of Appearance",
        "description": "Solve Maya's riddle about the nature of illusion and reality.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "PhilosophicalRiddle",
            "riddle": "I create the appearance of many from the reality of one. I am neither true nor false, neither existent nor non-existent. Those who call me 'mere illusion' do not understand my power. Those who take me as ultimate reality remain bound. What am I, truly?",
            "correctAnswer": "You are the creative power of Brahman itself, neither separate from reality nor identical with ultimate truth. You are real as an experience but not as an independent existence.",
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Maya is not simply falsehood; it has its own kind of reality.",
            "Consider the relationship between the wave and the ocean."
        ],
        "rewards": {
            "insight": "Maya is not other than Brahman, yet creates the appearance of otherness. When understood, it is no longer an obstacle but a revelation.",
            "ability": "Clear Seeing - ability to perceive both the relative and absolute nature of reality simultaneously"
        },
        "completed": false
    },

    /**
     * Upanishadic Riddles Puzzle
     * A complex puzzle representing the three philosophical schools at the Asura University
     */
    "UpanishadicRiddles": {
        "title": "The Three Schools of Wisdom",
        "description": "Master the philosophical challenges presented by the three schools of the Asura University of Prajna.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "PhilosophicalInquiry",
            "schools": [
                {
                    "name": "School of Radical Non-Duality",
                    "description": "Investigates the ultimate truth that all apparent distinctions are constructs of thought",
                    "teachingMethod": "Guided contemplations to reveal the illusory nature of separation",
                    "centralQuestion": "If there is truly no separation between observer and observed, between self and world, then what is it that seeks enlightenment, and what is there to be found?",
                    "correctResponse": "The seeker is the sought; the very search creates the illusion of separation from what is already the case.",
                    "insight": "Enlightenment is not an achievement but a recognition.",
                    "reward": "Non-Duality Crystal - Reveals the underlying unity of all phenomena",
                    "puzzleId": "NonDualityRealization"
                },
                {
                    "name": "School of Logical Deconstruction",
                    "description": "Uses rigorous analysis to reveal the inherent contradictions in all conceptual thinking",
                    "teachingMethod": "Logical analyses designed to reveal the limitations of conceptual thinking",
                    "centralQuestion": "Apply logical analysis to the concept of the 'self' that seeks enlightenment. What contradiction do you discover?",
                    "correctResponse": "If the self is unenlightened, it cannot cause its own enlightenment, as it lacks what it seeks. If the self already contains enlightenment, then it is already enlightened and there is nothing to seek. Either way, the concept of an unenlightened self seeking enlightenment is logically incoherent.",
                    "insight": "True understanding cannot be reached through conceptual thinking alone—it requires a direct recognition that transcends the limitations of logic.",
                    "reward": "Logic Puzzle Box - Contains nothing, yet solving it reveals everything",
                    "puzzleId": "LogicalParadox"
                },
                {
                    "name": "School of Experiential Paradox",
                    "description": "Transcends intellectual understanding through direct experience of paradox",
                    "teachingMethod": "Immersion in paradoxical experiences until the mind surrenders its need for conceptual resolution",
                    "centralQuestion": "What lies beyond the opposites of existence and non-existence, self and other, knowing and not-knowing?",
                    "correctResponse": "Instead of answering verbally, simply rest in the awareness that contains all paradoxes without needing to resolve them.",
                    "insight": "The resolution of paradox is found in recognizing the awareness that contains all opposites without being limited by them.",
                    "reward": "Paradox Mirror - Shows completely different scenes from different angles",
                    "puzzleId": "ParadoxResolution"
                }
            ],
            "completion": {
                "requirement": "Master all three schools to gain a complete understanding",
                "synthesis": "Each offers a different path to the same truth: that ultimate reality transcends all conceptual understanding while being immediately present in every experience.",
                "finalInsight": "The three approaches—non-dual recognition, logical deconstruction, and paradoxical experience—are complementary facets of the same truth."
            },
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Each school offers a different approach to the same ultimate truth.",
            "The limitations of one school are addressed by the strengths of another."
        ],
        "rewards": {
            "insight": "Ultimate truth can be approached through multiple paths, each revealing different aspects of the same reality",
            "ability": "Philosophical Integration - ability to see the unity underlying diverse spiritual approaches",
            "items": ["Asura Wisdom Trident"]
        },
        "completed": false
    },

    /**
     * Final Riddle Puzzle
     * The ultimate philosophical challenge about suffering and the Self
     */
    "FinalRiddle": {
        "title": "The Riddle of the Self",
        "description": "Answer the ultimate question about the nature of suffering and the Self to achieve moksha.",
        "difficulty": "Transcendent",
        "visualType": "SymbolicSentenceConstruction",
        "mechanics": {
            "type": "UltimateInquiry",
            "setting": {
                "description": "A perfectly circular chamber with walls, floor, and ceiling made of a material that seems both perfectly reflective and infinitely deep",
                "centralElement": "A reflection of the player's own Jiva (embodied individual self)",
                "atmosphere": "A sense of timelessness and profound significance"
            },
            "riddle": "If, as the sages claim, the Atman is one with the universal Brahman, from whence comes the illusion of my suffering?",
            "answers": {
                "devaGana": {
                    "Ashwini": "The illusion of suffering is a sickness of perception. It comes from a wound that separates the Self from the Whole.",
                    "Mrigashira": "It comes from the act of seeking. The moment the Self seeks Brahman, it creates a distance to be crossed.",
                    "Punarvasu": "It is a memory of a forgotten wholeness. Like a vessel that remembers the rain, the soul remembers its source.",
                    "Pushya": "It comes from a lack of nourishment. The individual soul, when not fed by the light of Brahman, feels an ache.",
                    "Hasta": "It is a phantom created by the hand of Maya. The illusion arises because the Self mistakes the tools of creation for the Creator.",
                    "Swati": "It is like a single gust of wind that believes it is separate from the sky. The illusion comes from mistaking movement for identity.",
                    "Anuradha": "It comes from a lack of devotion. The illusion of 'my' suffering arises when the heart does not see every act as an offering to the One.",
                    "Shravana": "It comes from listening to the voice of the ego instead of the echo of the cosmos. The illusion is noise.",
                    "Revati": "It is the suffering of a single fish that believes it is separate from the ocean. The illusion comes from the boundary of the skin."
                },
                "manushyaGana": {
                    "Bharani": "The illusion of suffering is the womb from which the new Self is born. It comes from the necessary death of the ego.",
                    "Rohini": "It is the seed of desire, planted by Prakriti. The illusion grows because the Self identifies with the flowering plant of worldly experience.",
                    "Ardra": "It is a teardrop of Rudra, a storm of divine feeling. The illusion of suffering is real because the pain is real.",
                    "PurvaPhalguni": "It comes from seeking enjoyment in the reflection, not the source. The illusion is believing the joy from the world is your own.",
                    "UttaraPhalguni": "It is the pain of a sacred pact forgotten. The soul makes a pact with Maya to experience individuality.",
                    "PurvaAshadha": "It is an unconquerable challenge that invigorates the soul. The illusion of suffering is a divine adversary.",
                    "UttaraAshadha": "It comes from mistaking a lesser dharma for the ultimate Dharma. The illusion of 'my' suffering is the soul's attachment to worldly duties.",
                    "PurvaBhadrapada": "It comes from the fire of aspiration. The soul, like a flame, always reaches upward.",
                    "UttaraBhadrapada": "It is the ripple from a single stone dropped into the calm, deep ocean of Brahman. The illusion of suffering is real, but temporary."
                },
                "rakshasaGana": {
                    "Krittika": "There is no 'whence.' The question itself is the illusion. To ask for the origin of suffering is to affirm its reality.",
                    "Ashlesha": "It is a self-inflicted poison. The ego, the serpent of 'I', bites its own tail and calls the venom 'suffering.'",
                    "Magha": "It is the inheritance of our ancestors, the karmic echo of every soul that has ever believed itself to be separate.",
                    "Chitra": "It is a flaw in the design of perception. The illusion of suffering is a beautiful, intricate, but ultimately false jewel created by the senses.",
                    "Vishakha": "It comes from the ambition of the part to comprehend the whole. The illusion of suffering is the consequence of a limited perspective.",
                    "Jyeshtha": "It is a challenge from a fallen king—the ego. The illusion of suffering is the ego's claim to sovereignty over your consciousness.",
                    "Mula": "You are looking for a root that does not exist. The illusion of suffering has no source. It is the absence of knowledge.",
                    "Dhanishtha": "It is the silence between the notes of a divine song. The illusion of suffering is not a thing in itself, but the perceived absence of bliss.",
                    "Shatabhisha": "It is the ailment of the one who believes they are a single drop, not the ocean. The illusion of suffering requires a healer, but there is nothing to heal."
                }
            },
            "resolution": {
                "description": "As you complete your answer, your reflection begins to merge with you. The boundaries between observer and observed dissolve.",
                "experience": "A profound shift in perception—not a new piece of knowledge, but a fundamental transformation in the knower.",
                "realization": "What you have been calling 'yourself' was never separate from the universal consciousness. The illusion of separation dissolves, and with it, the root of all suffering."
            },
            "finalChoice": {
                "options": [
                    {
                        "name": "Complete Merger with Brahman",
                        "description": "Dissolve your individual story into the cosmic ocean of consciousness",
                        "outcome": "Transcendence of individual existence"
                    },
                    {
                        "name": "Remain as a Jivanmukta",
                        "description": "Continue to participate in creation while knowing its ultimate nature",
                        "outcome": "Liberation within embodied existence"
                    }
                ],
                "nature": "This choice is not made from desire or fear, but from the spontaneous expression of your true nature"
            },
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Your Nakshatra's inherent nature will guide you to your unique answer.",
            "There is no single correct answer, but your answer must be a perfect expression of your Nakshatra's wisdom."
        ],
        "rewards": {
            "insight": "The ultimate nature of reality is beyond all concepts yet immediately present in every experience",
            "ability": "Liberation (Moksha) - freedom from the cycle of suffering",
            "achievement": "Moksha"
        },
        "completed": false
    },

    /**
     * Non-Duality Realization Puzzle
     * A philosophical puzzle from the School of Radical Non-Duality
     */
    "NonDualityRealization": {
        "title": "The Illusion of Separation",
        "description": "Recognize the illusory nature of the distinction between subject and object.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "PhilosophicalInquiry",
            "question": "If there is truly no separation between observer and observed, between self and world, then what is it that seeks enlightenment, and what is there to be found?",
            "correctAnswer": "The seeker is the sought; the very search creates the illusion of separation from what is already the case.",
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "The question contains a hidden assumption.",
            "Consider what happens when the seeker turns attention back upon itself."
        ],
        "rewards": {
            "insight": "Enlightenment is not an achievement but a recognition",
            "ability": "Non-Dual Awareness - direct perception of unity underlying apparent diversity",
            "items": ["Non-Duality Crystal"]
        },
        "completed": false
    },

    /**
     * Logical Paradox Puzzle
     * A philosophical puzzle from the School of Logical Deconstruction
     */
    "LogicalParadox": {
        "title": "The Limits of Thought",
        "description": "Apply logical analysis to reveal the inherent contradictions in the concept of spiritual seeking.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "LogicalAnalysis",
            "question": "Apply logical analysis to the concept of the 'self' that seeks enlightenment. What contradiction do you discover?",
            "correctAnswer": "If the self is unenlightened, it cannot cause its own enlightenment, as it lacks what it seeks. If the self already contains enlightenment, then it is already enlightened and there is nothing to seek. Either way, the concept of an unenlightened self seeking enlightenment is logically incoherent.",
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "Apply the principle of causality to the seeker and the sought.",
            "Consider the qualifications necessary for a cause to produce its effect."
        ],
        "rewards": {
            "insight": "True understanding cannot be reached through conceptual thinking alone—it requires a direct recognition that transcends the limitations of logic",
            "ability": "Paradox Navigation - comfort with logical contradictions as pointers to transcendent truth",
            "items": ["Logic Puzzle Box"]
        },
        "completed": false
    },

    /**
     * Paradox Resolution Puzzle
     * A philosophical puzzle from the School of Experiential Paradox
     */
    "ParadoxResolution": {
        "title": "The Experience Beyond Thought",
        "description": "Transcend conceptual understanding through direct experience of paradox.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "ExperientialParadox",
            "question": "What lies beyond the opposites of existence and non-existence, self and other, knowing and not-knowing?",
            "correctResponse": "Instead of answering verbally, simply rest in the awareness that contains all paradoxes without needing to resolve them.",
            "attempts": 0,
            "maxAttempts": null
        },
        "hints": [
            "The answer is not conceptual but experiential.",
            "Notice the awareness in which all opposites appear."
        ],
        "rewards": {
            "insight": "The resolution of paradox is found in recognizing the awareness that contains all opposites without being limited by them",
            "ability": "Paradoxical Wisdom - ability to hold contradictory truths simultaneously",
            "items": ["Paradox Mirror"]
        },
        "completed": false
    }

};

/**
 * Helper functions for puzzle management
 */
window.puzzleUtils = {
    /**
     * Initialize a puzzle for a player
     * @param {string} puzzleId - The ID of the puzzle to initialize
     * @param {object} playerState - The current state of the player
     * @returns {object} Updated player state with initialized puzzle
     */
    initializePuzzle: function(puzzleId, playerState) {
        if (!playerState.puzzles) {
            playerState.puzzles = {};
        }

        if (!playerState.puzzles[puzzleId]) {
            playerState.puzzles[puzzleId] = {
                active: true,
                started: true,
                completed: false,
                currentStage: 1,
                attempts: 0,
                progress: {}
            };
        }

        return playerState;
    },

    /**
     * Record an attempt at solving a puzzle
     * @param {string} puzzleId - The ID of the puzzle being attempted
     * @param {object} playerState - The current state of the player
     * @param {boolean} successful - Whether the attempt was successful
     * @returns {object} Updated player state with attempt recorded
     */
    recordAttempt: function(puzzleId, playerState, successful) {
        // Initialize if needed
        playerState = this.initializePuzzle(puzzleId, playerState);

        // Increment attempts
        playerState.puzzles[puzzleId].attempts++;

        // Record success if applicable
        if (successful) {
            playerState.puzzles[puzzleId].completed = true;
            playerState = this.grantRewards(puzzleId, playerState);
        }

        return playerState;
    },

    /**
     * Advance a puzzle to the next stage
     * @param {string} puzzleId - The ID of the puzzle to advance
     * @param {object} playerState - The current state of the player
     * @returns {object} Updated player state with advanced puzzle stage
     */
    advancePuzzleStage: function(puzzleId, playerState) {
        // Initialize if needed
        playerState = this.initializePuzzle(puzzleId, playerState);

        // Advance stage
        playerState.puzzles[puzzleId].currentStage++;

        return playerState;
    },

    /**
     * Check if a player has completed a puzzle
     * @param {string} puzzleId - The ID of the puzzle to check
     * @param {object} playerState - The current state of the player
     * @returns {boolean} Whether the puzzle is completed
     */
    isPuzzleCompleted: function(puzzleId, playerState) {
        if (!playerState.puzzles || !playerState.puzzles[puzzleId]) {
            return false;
        }

        return playerState.puzzles[puzzleId].completed;
    },

    /**
     * Grant rewards for completing a puzzle
     * @param {string} puzzleId - The ID of the completed puzzle
     * @param {object} playerState - The current state of the player
     * @returns {object} Updated player state with rewards granted
     */
    grantRewards: function(puzzleId, playerState) {
        const puzzle = window.PUZZLES[puzzleId];
        if (!puzzle || !puzzle.rewards) {
            return playerState;
        }

        const rewards = puzzle.rewards;

        // Initialize rewards structure if needed
        if (!playerState.rewards) {
            playerState.rewards = {
                items: [],
                abilities: [],
                knowledge: [],
                insights: [],
                achievements: []
            };
        }

        // Apply item rewards
        if (rewards.item) {
            playerState.rewards.items.push(rewards.item);

            // Set specific item flags
            if (rewards.item === "Banyan Leaf Talisman") {
                playerState.has_banyan_talisman = true;
            }
            if (rewards.item === "Resonance Bell") {
                playerState.has_resonance_bell = true;
            }
            if (rewards.item === "Asura Wisdom Trident") {
                playerState.has_wisdom_trident = true;
            }
        }

        // Apply multiple items
        if (rewards.items) {
            playerState.rewards.items = [
                ...playerState.rewards.items,
                ...rewards.items
            ];

            // Set specific item flags
            if (rewards.items.includes("Non-Duality Crystal")) {
                playerState.has_nonduality_crystal = true;
            }
            if (rewards.items.includes("Logic Puzzle Box")) {
                playerState.has_logic_puzzle = true;
            }
            if (rewards.items.includes("Paradox Mirror")) {
                playerState.has_paradox_mirror = true;
            }
        }

        // Apply ability rewards
        if (rewards.abilities) {
            playerState.rewards.abilities = [
                ...playerState.rewards.abilities,
                ...rewards.abilities
            ];
        }

        // Apply single ability reward
        if (rewards.ability) {
            playerState.rewards.abilities.push(rewards.ability);
        }

        // Apply knowledge rewards
        if (rewards.knowledge) {
            playerState.rewards.knowledge.push(rewards.knowledge);
        }

        // Apply insight reward
        if (rewards.insight) {
            playerState.rewards.insights.push(rewards.insight);
        }

        // Apply achievement rewards
        if (rewards.achievement) {
            playerState.rewards.achievements.push(rewards.achievement);

            // Set specific achievement flags
            if (rewards.achievement === "Moksha") {
                playerState.achieved_moksha = true;
            }
        }

        // Apply specific access rewards
        if (rewards.access) {
            playerState[`access_${rewards.access.toLowerCase().replace(/\s+/g, '_')}`] = true;
        }

        return playerState;
    }

};

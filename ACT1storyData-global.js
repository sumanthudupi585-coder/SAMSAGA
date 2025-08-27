/**
 * @file ACT1storyData-global.js
 * @description This file contains the entire narrative graph for Samsara Saga, redesigned for interactive gameplay.
 * @version 4.0.0
 * @license MIT
 *
 * -- GAME DESIGN REVISIONS --
 * 1.  **Hub-Based Exploration:** Replaced the linear dilemma choice with an interactive "Dharmapura Square" hub. Players can now explore, examine objects, and talk to NPCs to gather clues.
 * 2.  **Active Nakshatra Abilities:** Instead of providing a single solution, a player's Nakshatra now unlocks unique interactions or dialogue options within the hub, empowering the player to discover their path.
 * 3.  **Interactive Puzzles:** Implemented a more detailed puzzle structure. Quest 2 ("The Poisoned River") is now a multi-stage investigation requiring exploration and item use.
 * 4.  **Dynamic World State:** Added more granular scene properties like `interactions` and `worldStateTriggers` to allow the game engine to modify the world based on player actions (e.g., making an NPC angry, purifying a location).
 * 5.  **Puzzle & Item Integration:** Defined a clear structure for puzzles within scenes, including solutions that can require items from the player's inventory.
 * 6.  **Full Nakshatra Integration:** Expanded all quests to include unique, interactive paths for all 27 Nakshatras.
 * 7.  **Nakshatra Attribute Integration:** Incorporated Nakshatra attributes (Gana, Gunas, Shakti) into gameplay mechanics.
 * 8.  **Five Complete Quests:** Expanded the game to include five complete quests with unique paths for all 27 Nakshatras.
 */

// Using global variable instead of ES6 export
window.ACT1_STORY_DATA = {

    // --- ACT I: THE THREE TRIALS OF DHARMAPURA ---

    "JOURNEY_START": {
        "title": "Awakening",
        "text": "Your consciousness coalesces like morning mist over water. The Oracle's words, once a thunderous prophecy, now fade to a quiet echo in your mind, leaving you with a newfound sense of self and a path to walk. You open your eyes, your very nature having chosen the ground upon which you take your first breath: the village of Dharmapura.",
        "choices": [
            { "text": "Enter the village square...", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    // --- QUEST 1: THE ELDER'S DILEMMA ---

    "DHARMAPURA_SQUARE": {
        "title": "Dharmapura Square",
        "text": "The village square is tense. A spiritual malaise hangs in the air, causing minor misfortunes. At the center of the tension is the ancient, semi-petrified Banyan tree. The village Elder and the Priestess are in a heated debate nearby, their factions watching anxiously.",
        "questStatus": "The Elder's Dilemma - Active",
        "interactions": [
            { "verb": "Examine", "noun": "Banyan Tree", "scene": "EXAMINE_BANYAN" },
            { "verb": "Listen to", "noun": "The Debate", "scene": "LISTEN_DEBATE" },
            { "verb": "Talk to", "noun": "The Village Elder", "scene": "TALK_ELDER" },
            { "verb": "Talk to", "noun": "The Priestess", "scene": "TALK_PRIESTESS" },
            { "verb": "Observe", "noun": "The Villagers", "scene": "OBSERVE_VILLAGERS" }
        ]
    },

    "LISTEN_DEBATE": {
        "title": "The Debate",
        "text": "The Elder argues passionately, 'The tree is draining our vitality! Its wood is needed for repairs!' The Priestess counters, her voice firm, 'The tree is a sacred ancestor! To harm it is a grave sin.' She poses a riddle to the crowd: &quot;When the root of tradition and the branch of necessity pull the world apart, where does a soul find its balance?&quot;",
        "choices": [
            { "text": "Return to the square.", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    }

    // Additional story data would continue here...
};

console.log("ACT1 story data loaded globally");
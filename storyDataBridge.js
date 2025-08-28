/**
 * storyDataBridge.js
 * 
 * This file verifies that all story data is properly loaded.
 */

(function() {
    // Check if story data is loaded
    console.log("Story data bridge initialized");
    console.log("ACT1 data loaded:", !!window.ACT1_STORY_DATA);
    console.log("ACT2 data loaded:", !!window.ACT2_STORY_DATA);
    console.log("ACT3 data loaded:", !!window.ACT3_STORY_DATA);
    console.log("Puzzles data loaded:", !!window.PUZZLES);
    
    // If any data is missing, log an error and provide minimal fallbacks so gameplay is not blank
    if (!window.ACT1_STORY_DATA) {
        console.warn("ACT1_STORY_DATA missing. Injecting minimal fallback.");
        window.ACT1_STORY_DATA = {
            "JOURNEY_START": {
                "title": "Awakening",
                "text": "You awaken in Dharmapura. The village square beckons.",
                "choices": [{ "text": "Enter the village square...", "nextScene": "DHARMAPURA_SQUARE" }]
            },
            "DHARMAPURA_SQUARE": {
                "title": "Dharmapura Square",
                "text": "Tension fills the air around the ancient Banyan tree.",
                "interactions": [
                    { "verb": "Examine", "noun": "Banyan Tree", "scene": "EXAMINE_BANYAN" },
                    { "verb": "Talk to", "noun": "The Elder", "scene": "LISTEN_DEBATE" }
                ]
            },
            "EXAMINE_BANYAN": {
                "title": "The Great Banyan",
                "text": "The tree is ancient and powerful, but its energy feels stagnant.",
                "choices": [{ "text": "Return to the square.", "nextScene": "DHARMAPURA_SQUARE" }]
            },
            "LISTEN_DEBATE": {
                "title": "The Debate",
                "text": "The Elder and Priestess argue; the village awaits your guidance.",
                "choices": [{ "text": "Return to the square.", "nextScene": "DHARMAPURA_SQUARE" }]
            }
        };
    }
    if (!window.ACT2_STORY_DATA) {
        console.warn("ACT2_STORY_DATA missing. Injecting minimal fallback.");
        window.ACT2_STORY_DATA = { "ACT2_START": { "title": "The Path Beyond", "text": "Your journey continues...", "choices": [] } };
    }
    if (!window.ACT3_STORY_DATA) {
        console.warn("ACT3_STORY_DATA missing. Injecting minimal fallback.");
        window.ACT3_STORY_DATA = { "ACT3_START": { "title": "Higher Realms", "text": "A greater trial awaits...", "choices": [] } };
    }
    if (!window.PUZZLES) {
        console.warn("PUZZLES data missing. Injecting minimal fallback.");
        window.PUZZLES = {};
    }
})();

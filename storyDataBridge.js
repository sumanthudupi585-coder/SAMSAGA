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
    
    // If any data is missing, log an error
    if (!window.ACT1_STORY_DATA || !window.ACT2_STORY_DATA || !window.ACT3_STORY_DATA || !window.PUZZLES) {
        console.error("Some story data failed to load. Check script loading order.");
    }
})();

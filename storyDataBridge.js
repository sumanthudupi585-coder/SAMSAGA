/**
 * storyDataBridge.js
 * 
 * This file bridges between ES6 module exports in the ACT story data files
 * and the global variables expected by StoryEngine.js.
 */

// Import the story data from the ACT files
import { storyData as ACT1Data } from './ACT1storyData.js';
import { storyData as ACT2Data } from './ACT2storyData.js';
import { storyData as ACT3Data } from './ACT3storyData.js';

// Assign to global variables expected by StoryEngine.js
window.ACT1_STORY_DATA = ACT1Data;
window.ACT2_STORY_DATA = ACT2Data;
window.ACT3_STORY_DATA = ACT3Data;

console.log("Story data bridge initialized successfully");
console.log("ACT1 data loaded:", !!window.ACT1_STORY_DATA);
console.log("ACT2 data loaded:", !!window.ACT2_STORY_DATA);
console.log("ACT3 data loaded:", !!window.ACT3_STORY_DATA);
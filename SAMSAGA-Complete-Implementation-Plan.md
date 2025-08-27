# SAMSAGA Complete Implementation Plan

## Table of Contents
1. [Project Overview](#project-overview)
2. [Current Status Assessment](#current-status-assessment)
3. [Implementation Phases](#implementation-phases)
   - [Phase 1: Foundation](#phase-1-foundation)
   - [Phase 2: Core Mechanics](#phase-2-core-mechanics)
   - [Phase 3: Story Integration](#phase-3-story-integration)
   - [Phase 4: Polish and Refinement](#phase-4-polish-and-refinement)
   - [Phase 5: Testing and Deployment](#phase-5-testing-and-deployment)
4. [Detailed Implementation Steps](#detailed-implementation-steps)
5. [Testing Checklist](#testing-checklist)
6. [Troubleshooting Common Issues](#troubleshooting-common-issues)

## Project Overview

SAMSAGA is an interactive narrative game based on Hindu mythology and spiritual concepts. The game allows players to create a character based on their Nakshatra (birth star), make choices that affect their karma, solve puzzles, and progress through a story divided into three acts.

The game architecture follows a modular design with these key components:
- **GameStateManager**: Manages player profile, game state, and persistence
- **StoryEngine**: Handles narrative flow and player choices
- **PuzzleEngine**: Implements puzzle mechanics and evaluation
- **UIController**: Renders the game interface and handles user interaction
- **ProgressionSystem**: Tracks player advancement and achievements
- **AudioManager**: Handles sound effects and music
- **VisualEffects**: Manages animations and visual feedback

## Current Status Assessment

### Completed Components
- **Index.html**: Landing page with main menu
- **CB-fixed.html**: Character building interface
- **Gameplay-fixed.html**: Main gameplay interface
- **Character-profile.html**: Character stats display
- **Story Data**: Content for all three acts (ACT1storyData.js, ACT2storyData.js, ACT3storyData.js)
- **Basic JavaScript Modules**: Core game engine components exist but need integration

### Components Needing Work
- **Module Integration**: ES6 module imports/exports need to be fixed
- **Asset Creation**: Avatar images (0-byte files) and other visual assets need to be created
- **Game Flow**: Navigation between pages and acts needs implementation
- **Puzzle System**: Puzzle mechanics need to be completed and integrated
- **State Management**: Game state persistence between pages needs implementation
- **Story Integration**: Acts need to be connected with proper transitions

## Implementation Phases

### Phase 1: Foundation
**Timeframe: 1-2 weeks**
**Goal: Fix core technical issues and establish the basic framework**

1. Fix module loading issues
2. Create missing assets
3. Implement basic game state management
4. Set up navigation between pages

### Phase 2: Core Mechanics
**Timeframe: 2-3 weeks**
**Goal: Implement the fundamental gameplay systems**

1. Complete puzzle system implementation
2. Enhance game state management with save/load functionality
3. Implement character attribute integration
4. Create the game menu system

### Phase 3: Story Integration
**Timeframe: 2-3 weeks**
**Goal: Connect all narrative elements into a cohesive experience**

1. Connect all three acts with proper transitions
2. Implement conditional story paths based on character attributes
3. Create act endings and beginning scenes
4. Implement dynamic text replacement for personalized content

### Phase 4: Polish and Refinement
**Timeframe: 1-2 weeks**
**Goal: Enhance the user experience with visual and audio elements**

1. Implement consistent UI across all pages
2. Add animations for transitions and effects
3. Implement sound effects and music
4. Create visual feedback for player actions

### Phase 5: Testing and Deployment
**Timeframe: 1 week**
**Goal: Ensure the game works correctly and is ready for players**

1. Test game flow from start to finish
2. Verify all story paths and puzzles
3. Debug any issues found
4. Create documentation and deployment instructions

## Detailed Implementation Steps

### Phase 1: Foundation

#### 1.1 Fix Module Loading Issues

**Step 1: Update ACT Story Data Files**

Convert ES6 module exports to global variables in all three act files:

```javascript
// ACT1storyData.js
// Remove this line:
// export const storyData = {

// Replace with:
window.ACT1_STORY_DATA = {
    // Keep the rest of the file as is
};
```

Do the same for ACT2storyData.js and ACT3storyData.js.

**Step 2: Update puzzles.js**

```javascript
// puzzles.js
// Remove these lines:
// export const puzzles = {
// export const puzzleUtils = {

// Replace with:
window.PUZZLES = {
    // Keep the puzzle definitions as is
};

window.puzzleUtils = {
    // Keep the utility functions as is
};
```

**Step 3: Replace storyDataBridge.js**

```javascript
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
```

**Step 4: Update HTML Files to Load Scripts in Correct Order**

Update the script loading section in Gameplay-fixed.html:

```html
<!-- Data files first -->
<script src="ACT1storyData.js"></script>
<script src="ACT2storyData.js"></script>
<script src="ACT3storyData.js"></script>
<script src="puzzles.js"></script>
<script src="nakshatraData.js"></script>
<script src="storyDataBridge.js"></script>

<!-- Then engine components -->
<script src="GameStateManager.js"></script>
<script src="StoryEngine.js"></script>
<script src="ProgressionSystem.js"></script>
<script src="PuzzleEngine.js"></script>
<script src="QuestSystem.js"></script>
<script src="AudioManager.js"></script>
<script src="UIController.js"></script>
<script src="VisualEffects.js"></script>

<!-- Finally, main script -->
<script src="main.js"></script>
```

**Step 5: Update StoryEngine.js and PuzzleEngine.js**

Ensure they correctly reference the global variables:

```javascript
// In StoryEngine.js constructor
this.allActs = {
    1: window.ACT1_STORY_DATA,
    2: window.ACT2_STORY_DATA,
    3: window.ACT3_STORY_DATA
};

// In PuzzleEngine.js constructor
this.puzzleData = window.PUZZLES || {};
```

#### 1.2 Create Missing Assets

**Step 1: Create Avatar Images**

Create four avatar images in the images/avatars/ directory:
- default.png - A neutral character silhouette
- deva.png - A divine/celestial character appearance
- manushya.png - A human character appearance
- rakshasa.png - A fierce/powerful character appearance

Use free resources or create simple placeholder images that match the game's aesthetic.

**Step 2: Check for Other Missing Assets**

```bash
# Find all image references
grep -r "src=" --include="*.html" --include="*.js" .
grep -r "background-image" --include="*.css" .
```

Create any other missing assets identified.

#### 1.3 Implement Basic Game State Management

**Step 1: Enhance GameStateManager.js**

```javascript
class GameStateManager {
    constructor() {
        // Initialize state
        this.init();
    }

    /**
     * Initialize a new game state
     */
    init() {
        // Immutable data set at character creation
        this.playerProfile = {
            nakshatra: null,
            gana: null,
            shakti: null,
            gunas: {
                sattva: 0,
                rajas: 0,
                tamas: 0
            },
            avatar: null // Character avatar path
        };

        // Dynamic data that changes during play
        this.playerState = {
            currentAct: 1,
            currentSceneId: "JOURNEY_START",
            karma: 0,
            dharmicProfile: {
                dharma: 0,
                artha: 0,
                kama: 0,
                moksha: 0
            },
            inventory: [],
            specialItems: [] // Special items with powers
        };

        // World state flags
        this.worldState = {};
        
        // Check for temporary character data
        this.loadTemporaryCharacter();
    }

    /**
     * Get the complete game state
     */
    getState() {
        return {
            playerProfile: this.playerProfile,
            playerState: this.playerState,
            worldState: this.worldState
        };
    }

    /**
     * Save temporary character data (for page transitions)
     */
    saveTemporaryCharacter() {
        try {
            localStorage.setItem('samsagaTemporaryCharacter', JSON.stringify(this.playerProfile));
            return true;
        } catch (error) {
            console.error("Error saving temporary character:", error);
            return false;
        }
    }

    /**
     * Load temporary character data (for page transitions)
     */
    loadTemporaryCharacter() {
        try {
            const tempData = localStorage.getItem('samsagaTemporaryCharacter');
            if (tempData) {
                this.playerProfile = JSON.parse(tempData);
                // Clear temporary data after loading
                localStorage.removeItem('samsagaTemporaryCharacter');
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error loading temporary character:", error);
            return false;
        }
    }
}

// Create a singleton instance
window.gameStateManager = window.gameStateManager || new GameStateManager();
```

#### 1.4 Set Up Navigation Between Pages

**Step 1: Create navigation.js**

```javascript
/**
 * navigation.js
 * 
 * This module handles navigation between pages while preserving game state.
 */

class NavigationManager {
    constructor(gameStateManager) {
        this.gameStateManager = gameStateManager;
    }
    
    /**
     * Navigate to another page
     */
    navigateTo(page) {
        // Save current game state if needed
        if (this.gameStateManager) {
            this.gameStateManager.saveTemporaryCharacter();
        }
        
        // Add transition effect
        const transitionElement = document.querySelector('.page-transition');
        if (transitionElement) {
            transitionElement.classList.add('active');
            
            // Navigate after transition
            setTimeout(() => {
                window.location.href = page;
            }, 500);
        } else {
            // Navigate immediately if no transition element
            window.location.href = page;
        }
    }
    
    /**
     * Navigate to character creation
     */
    navigateToCharacterCreation() {
        window.location.href = 'CB-fixed.html';
    }
    
    /**
     * Navigate to gameplay with current character
     */
    navigateToGameplay() {
        this.navigateTo('Gameplay-fixed.html');
    }
    
    /**
     * Navigate to character profile
     */
    navigateToCharacterProfile() {
        this.navigateTo('character-profile.html');
    }
    
    /**
     * Return to main menu
     */
    navigateToMainMenu() {
        this.navigateTo('index.html');
    }
}

// Create a singleton instance
window.navigationManager = window.navigationManager || new NavigationManager(window.gameStateManager);
```

**Step 2: Add navigation.js to all HTML files**

Add this script to all HTML files after GameStateManager.js:

```html
<script src="GameStateManager.js"></script>
<script src="navigation.js"></script>
```

**Step 3: Update Character Creation to Save Data**

Add to CB-fixed.html:

```javascript
function finalizeCharacter() {
    // Get selected character attributes
    const characterData = {
        nakshatra: selectedNakshatra,
        gana: selectedGana,
        shakti: nakshatraAttributes[selectedNakshatraIndex].shakti,
        gunas: nakshatraAttributes[selectedNakshatraIndex].gunas,
        avatar: `images/avatars/${selectedGana.toLowerCase()}.png`
    };
    
    // Save character data to game state
    if (window.gameStateManager) {
        window.gameStateManager.playerProfile = characterData;
        window.gameStateManager.saveTemporaryCharacter();
    }
    
    // Navigate to gameplay
    if (window.navigationManager) {
        window.navigationManager.navigateToGameplay();
    } else {
        window.location.href = 'Gameplay-fixed.html';
    }
}
```

### Phase 2: Core Mechanics

#### 2.1 Complete Puzzle System Implementation

**Step 1: Define Puzzle Data Structure in puzzles.js**

```javascript
window.PUZZLES = {
    "BanyanTreeHarmony": {
        "title": "The Sacred Balance",
        "description": "Balance the spiritual energies of the Banyan tree to resolve the village's dilemma.",
        "difficulty": "Medium",
        "mechanics": {
            "type": "EnergyBalancing",
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
        "solutions": [
            {
                "id": "balance_all",
                "description": "Balance all energies within threshold",
                "successScene": "BANYAN_BALANCED",
                "effects": {
                    "karma": 15,
                    "inventory": {
                        "add": ["Banyan Leaf Talisman"]
                    },
                    "dharmicProfile": {
                        "dharma": 5,
                        "moksha": 3
                    }
                },
                "worldStateTriggers": {
                    "banyan_balanced": true
                }
            }
        ],
        "defaultFailure": {
            "nextScene": "BANYAN_IMBALANCED",
            "effects": {
                "karma": -5
            }
        },
        "solvedFlag": "banyan_balanced",
        "hints": [
            "The tree requires equal parts of all three energies.",
            "Each adjustment method affects multiple energy types.",
            "Plan your sequence of adjustments to reach balance efficiently."
        ]
    },
    
    // Add more puzzles here...
};
```

**Step 2: Enhance PuzzleEngine.js**

```javascript
class PuzzleEngine {
    constructor(gameStateManager, storyEngine) {
        this.gameStateManager = gameStateManager;
        this.storyEngine = storyEngine;
        this.puzzleData = window.PUZZLES || {};
    }

    /**
     * Handle different puzzle types
     */
    handlePuzzle(puzzleId, action, params = {}) {
        const puzzle = this.getPuzzleById(puzzleId);
        if (!puzzle) {
            console.error(`Puzzle with ID "${puzzleId}" not found`);
            return false;
        }
        
        // Handle based on puzzle type
        switch (puzzle.mechanics.type) {
            case 'EnergyBalancing':
                return this.handleEnergyBalancingPuzzle(puzzle, action, params);
            // Add more puzzle types as needed
            default:
                console.error(`Unknown puzzle type: ${puzzle.mechanics.type}`);
                return false;
        }
    }

    /**
     * Handle energy balancing puzzles
     */
    handleEnergyBalancingPuzzle(puzzle, action, params) {
        switch (action) {
            case 'adjust':
                const { methodName } = params;
                const method = puzzle.mechanics.adjustmentMethods.find(m => m.name === methodName);
                if (!method) return false;
                
                // Apply adjustment to energy levels
                puzzle.mechanics.energyTypes.forEach(energy => {
                    const effect = method.effect[energy.name] || 0;
                    energy.currentLevel = Math.max(energy.minLevel, Math.min(energy.maxLevel, energy.currentLevel + effect));
                });
                
                // Increment attempt counter
                puzzle.mechanics.attempts++;
                
                // Check if puzzle is solved
                return this.checkEnergyBalanceSolution(puzzle);
            
            case 'check':
                return this.checkEnergyBalanceSolution(puzzle);
            
            default:
                return false;
        }
    }

    /**
     * Check if an energy balancing puzzle is solved
     */
    checkEnergyBalanceSolution(puzzle) {
        // Check if all energies are within threshold of ideal
        const allBalanced = puzzle.mechanics.energyTypes.every(energy => {
            const difference = Math.abs(energy.currentLevel - energy.idealLevel);
            return difference <= puzzle.mechanics.balanceThreshold;
        });
        
        if (allBalanced) {
            return this.processPuzzleSuccess(puzzle);
        } else if (puzzle.mechanics.maxAttempts > 0 && puzzle.mechanics.attempts >= puzzle.mechanics.maxAttempts) {
            return this.processPuzzleFailure(puzzle);
        }
        
        return false;
    }

    /**
     * Process successful puzzle solution
     */
    processPuzzleSuccess(puzzle) {
        // Find the success solution
        const solution = puzzle.solutions[0]; // Assuming first solution is the success one
        
        // Process effects
        if (solution.effects) {
            this.processEffects(solution.effects);
        }
        
        // Process world state triggers
        if (solution.worldStateTriggers) {
            Object.entries(solution.worldStateTriggers).forEach(([key, value]) => {
                this.gameStateManager.updateState(key, value);
            });
        }
        
        // Set solved flag
        if (puzzle.solvedFlag) {
            this.gameStateManager.worldState[puzzle.solvedFlag] = true;
        }
        
        // Move to success scene
        if (solution.successScene) {
            this.gameStateManager.playerState.currentSceneId = solution.successScene;
        }
        
        return true;
    }

    /**
     * Process puzzle failure
     */
    processPuzzleFailure(puzzle) {
        const failure = puzzle.defaultFailure;
        
        // Process failure effects
        if (failure.effects) {
            this.processEffects(failure.effects);
        }
        
        // Move to failure scene
        if (failure.nextScene) {
            this.gameStateManager.playerState.currentSceneId = failure.nextScene;
        }
        
        return false;
    }

    /**
     * Process effects from puzzle solutions
     */
    processEffects(effects) {
        // Process karma effects
        if (effects.karma !== undefined) {
            this.gameStateManager.updateKarma(effects.karma);
        }
        
        // Process inventory effects
        if (effects.inventory) {
            if (effects.inventory.add) {
                effects.inventory.add.forEach(item => {
                    this.gameStateManager.addToInventory(item);
                });
            }
            
            if (effects.inventory.remove) {
                effects.inventory.remove.forEach(item => {
                    this.gameStateManager.removeFromInventory(item);
                });
            }
        }
        
        // Process dharmic profile effects
        if (effects.dharmicProfile) {
            Object.entries(effects.dharmicProfile).forEach(([aspect, value]) => {
                this.gameStateManager.updateDharmicProfile(aspect, value);
            });
        }
    }

    /**
     * Get puzzle data by ID
     */
    getPuzzleById(puzzleId) {
        return this.puzzleData[puzzleId];
    }

    /**
     * Check if a puzzle is solved based on world state
     */
    isPuzzleSolved(puzzleId) {
        const puzzle = this.getPuzzleById(puzzleId);
        if (!puzzle || !puzzle.solvedFlag) {
            return false;
        }
        
        return !!this.gameStateManager.worldState[puzzle.solvedFlag];
    }
}
```

**Step 3: Add Puzzle Rendering to UIController.js**

```javascript
/**
 * Render a puzzle based on its type
 */
renderPuzzle(puzzleId) {
    const puzzle = this.puzzleEngine.getPuzzleById(puzzleId);
    if (!puzzle) {
        console.error(`Puzzle with ID "${puzzleId}" not found`);
        return;
    }
    
    // Clear puzzle container
    this.elements.puzzleContainer.innerHTML = '';
    this.elements.puzzleContainer.dataset.puzzleId = puzzleId;
    
    // Create puzzle header
    const puzzleHeader = document.createElement('div');
    puzzleHeader.className = 'puzzle-header';
    puzzleHeader.innerHTML = `
        <h3>${puzzle.title}</h3>
        <p>${puzzle.description}</p>
    `;
    this.elements.puzzleContainer.appendChild(puzzleHeader);
    
    // Render puzzle based on type
    switch (puzzle.mechanics.type) {
        case 'EnergyBalancing':
            this.renderEnergyBalancingPuzzle(puzzle);
            break;
        // Add more puzzle types as needed
        default:
            console.error(`Unknown puzzle type: ${puzzle.mechanics.type}`);
            this.elements.puzzleContainer.innerHTML += `<p>Puzzle type not supported: ${puzzle.mechanics.type}</p>`;
    }
    
    // Show puzzle container
    this.elements.puzzleContainer.classList.add('active');
}

/**
 * Render an energy balancing puzzle
 */
renderEnergyBalancingPuzzle(puzzle) {
    // Create energy bars
    const energyContainer = document.createElement('div');
    energyContainer.className = 'energy-container';
    
    puzzle.mechanics.energyTypes.forEach(energy => {
        const energyBar = document.createElement('div');
        energyBar.className = 'energy-bar';
        
        // Calculate if this energy is balanced
        const difference = Math.abs(energy.currentLevel - energy.idealLevel);
        const isBalanced = difference <= puzzle.mechanics.balanceThreshold;
        
        energyBar.innerHTML = `
            <div class="energy-name">${energy.name}</div>
            <div class="energy-level-container">
                <div class="energy-level ${isBalanced ? 'balanced' : ''}" style="width: ${energy.currentLevel}%"></div>
                <div class="energy-ideal" style="left: ${energy.idealLevel}%"></div>
            </div>
            <div class="energy-value">${energy.currentLevel}/${energy.maxLevel}</div>
        `;
        energyContainer.appendChild(energyBar);
    });
    
    this.elements.puzzleContainer.appendChild(energyContainer);
    
    // Create adjustment buttons
    const adjustmentContainer = document.createElement('div');
    adjustmentContainer.className = 'adjustment-container';
    
    puzzle.mechanics.adjustmentMethods.forEach(method => {
        const button = document.createElement('button');
        button.className = 'adjustment-button';
        button.textContent = method.name;
        button.addEventListener('click', () => this.handlePuzzleAction(puzzle.id, 'adjust', { methodName: method.name }));
        adjustmentContainer.appendChild(button);
    });
    
    this.elements.puzzleContainer.appendChild(adjustmentContainer);
    
    // Add attempts counter if there's a limit
    if (puzzle.mechanics.maxAttempts > 0) {
        const attemptsCounter = document.createElement('div');
        attemptsCounter.className = 'attempts-counter';
        attemptsCounter.textContent = `Attempts: ${puzzle.mechanics.attempts}/${puzzle.mechanics.maxAttempts}`;
        this.elements.puzzleContainer.appendChild(attemptsCounter);
    }
}

/**
 * Handle puzzle actions
 */
handlePuzzleAction(puzzleId, action, params = {}) {
    const result = this.puzzleEngine.handlePuzzle(puzzleId, action, params);
    
    // Play appropriate sound
    if (result === true) {
        if (this.audioManager) {
            this.audioManager.playSound('puzzle_solve');
        }
        if (this.visualEffects) {
            this.visualEffects.showPuzzleSuccess();
        }
        
        // Update UI after a short delay to show success animation
        setTimeout(() => {
            this.render();
        }, 1500);
    } else if (result === false && action !== 'check') {
        // Only play action sound for actual attempts, not just checks
        if (this.audioManager) {
            this.audioManager.playSound('puzzle_action');
        }
        
        // Update the puzzle display
        this.updatePuzzleDisplay(puzzleId);
    }
    
    return result;
}
```

**Step 4: Add CSS for Puzzles**

```css
/* Puzzle Container */
.puzzle-container {
    background-color: rgba(26, 26, 26, 0.9);
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    display: none;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.puzzle-container.active {
    display: block;
}

.puzzle-header {
    text-align: center;
    margin-bottom: 20px;
}

.puzzle-header h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 10px;
}

/* Energy Balancing Puzzle */
.energy-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
}

.energy-bar {
    display: flex;
    align-items: center;
    gap: 10px;
}

.energy-name {
    width: 80px;
    text-align: right;
    font-weight: bold;
}

.energy-level-container {
    position: relative;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    flex-grow: 1;
    overflow: hidden;
}

.energy-level {
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 10px;
    transition: width 0.3s ease;
}

.energy-level.balanced {
    background-color: var(--success-color);
}

.energy-ideal {
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
}

.energy-value {
    width: 60px;
    text-align: left;
}

.adjustment-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.adjustment-button {
    background-color: var(--secondary-color);
    color: var(--text-color);
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    padding: 8px 15px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.adjustment-button:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

/* Attempts Counter */
.attempts-counter {
    text-align: center;
    margin-top: 15px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
}
```

#### 2.2 Enhance Game State Management with Save/Load Functionality

**Step 1: Add Save/Load Methods to GameStateManager.js**

```javascript
/**
 * Save game to localStorage
 */
saveGame() {
    const saveData = {
        playerProfile: this.playerProfile,
        playerState: this.playerState,
        worldState: this.worldState,
        timestamp: new Date().toISOString()
    };
    
    try {
        localStorage.setItem('samsagaSaveGame', JSON.stringify(saveData));
        console.log("Game saved successfully");
        return true;
    } catch (error) {
        console.error("Error saving game:", error);
        return false;
    }
}

/**
 * Load game from localStorage
 */
loadGame() {
    try {
        const saveData = localStorage.getItem('samsagaSaveGame');
        if (!saveData) {
            console.error("No saved game found");
            return false;
        }
        
        const parsedData = JSON.parse(saveData);
        
        // Restore player profile
        this.playerProfile = parsedData.playerProfile;
        
        // Restore player state
        this.playerState = parsedData.playerState;
        
        // Restore world state
        this.worldState = parsedData.worldState;
        
        console.log("Game loaded successfully");
        return true;
    } catch (error) {
        console.error("Error loading saved game:", error);
        return false;
    }
}

/**
 * Check if a saved game exists
 */
hasSavedGame() {
    return localStorage.getItem('samsagaSaveGame') !== null;
}

/**
 * Delete saved game
 */
deleteSavedGame() {
    try {
        localStorage.removeItem('samsagaSaveGame');
        return true;
    } catch (error) {
        console.error("Error deleting saved game:", error);
        return false;
    }
}
```

**Step 2: Add Auto-Save Functionality**

```javascript
/**
 * Set up auto-save
 */
setupAutoSave(interval = 60000) { // Default: save every minute
    // Clear any existing auto-save
    if (this.autoSaveInterval) {
        clearInterval(this.autoSaveInterval);
    }
    
    // Set up new auto-save interval
    this.autoSaveInterval = setInterval(() => {
        this.saveGame();
        console.log("Auto-saved game");
    }, interval);
    
    return true;
}

/**
 * Stop auto-save
 */
stopAutoSave() {
    if (this.autoSaveInterval) {
        clearInterval(this.autoSaveInterval);
        this.autoSaveInterval = null;
        return true;
    }
    return false;
}
```

**Step 3: Initialize Auto-Save in Gameplay Page**

Add to the initialization code in Gameplay-fixed.html:

```javascript
// Set up auto-save
if (window.gameStateManager) {
    window.gameStateManager.setupAutoSave(60000); // Auto-save every minute
}
```

#### 2.3 Implement Character Attribute Integration

**Step 1: Add Methods to GameStateManager.js**

```javascript
/**
 * Update karma value
 */
updateKarma(amount) {
    this.playerState.karma += amount;
    return this.playerState.karma;
}

/**
 * Update dharmic profile
 */
updateDharmicProfile(aspect, value) {
    if (aspect in this.playerState.dharmicProfile) {
        this.playerState.dharmicProfile[aspect] += value;
        return true;
    }
    return false;
}

/**
 * Add item to inventory
 */
addToInventory(item) {
    if (!this.playerState.inventory.includes(item)) {
        this.playerState.inventory.push(item);
        return true;
    }
    return false;
}

/**
 * Remove item from inventory
 */
removeFromInventory(item) {
    const index = this.playerState.inventory.indexOf(item);
    if (index !== -1) {
        this.playerState.inventory.splice(index, 1);
        return true;
    }
    return false;
}

/**
 * Check if player has an item
 */
hasItem(item) {
    return this.playerState.inventory.includes(item);
}

/**
 * Update state value
 */
updateState(key, value) {
    // Check if key is in playerState
    if (key in this.playerState) {
        this.playerState[key] = value;
        return true;
    }
    
    // Otherwise, update worldState
    this.worldState[key] = value;
    return true;
}
```

**Step 2: Enhance StoryEngine.js to Consider Character Attributes**

```javascript
/**
 * Get all available choices for the current scene based on conditions
 */
getAvailableChoices() {
    const scene = this.getCurrentScene();
    if (!scene || !scene.choices) {
        return [];
    }
    
    const gameState = this.gameStateManager.getState();
    let availableChoices = [];
    
    // Get standard choices based on conditions
    const standardChoices = scene.choices.filter(choice => {
        // If no condition, always available
        if (!choice.condition) {
            return true;
        }
        
        // Convert string condition to function if needed
        const conditionFunc = typeof choice.condition === 'string' 
            ? new Function('gameState', `return ${choice.condition}`)
            : choice.condition;
        
        // Evaluate condition
        try {
            return conditionFunc(gameState);
        } catch (error) {
            console.error(`Error evaluating condition for choice "${choice.id}":`, error);
            return false;
        }
    });
    
    availableChoices = [...standardChoices];
    
    // Add nakshatra-specific choices if available
    const nakshatraChoices = this.getNakshatraSpecialChoices(scene);
    if (nakshatraChoices.length > 0) {
        availableChoices = [...availableChoices, ...nakshatraChoices];
    }
    
    // Add gana-specific choices if available
    const ganaChoices = this.getGanaSpecialChoices(scene);
    if (ganaChoices.length > 0) {
        availableChoices = [...availableChoices, ...ganaChoices];
    }
    
    return availableChoices;
}

/**
 * Get special choices based on player's nakshatra
 */
getNakshatraSpecialChoices(scene) {
    const nakshatra = this.gameStateManager.playerProfile.nakshatra;
    if (!nakshatra || !scene.nakshatraChoices) {
        return [];
    }
    
    // Get special choices for this nakshatra
    const choices = scene.nakshatraChoices[nakshatra] || [];
    
    // Mark these as nakshatra choices for UI
    return choices.map(choice => ({
        ...choice,
        isNakshatraChoice: true
    }));
}

/**
 * Get special choices based on player's gana
 */
getGanaSpecialChoices(scene) {
    const gana = this.gameStateManager.playerProfile.gana;
    if (!gana || !scene.ganaChoices) {
        return [];
    }
    
    // Get special choices for this gana
    const choices = scene.ganaChoices[gana] || [];
    
    // Mark these as gana choices for UI
    return choices.map(choice => ({
        ...choice,
        isGanaChoice: true
    }));
}
```

#### 2.4 Create the Game Menu System

**Step 1: Add Game Menu HTML and CSS**

Add to main.css:

```css
/* Game Menu */
.menu-button {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: rgba(26, 26, 26, 0.7);
    border: 1px solid var(--primary-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 900;
    transition: all 0.2s ease;
}

.menu-button:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

.game-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 950;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.game-menu.active {
    opacity: 1;
    pointer-events: auto;
}

.game-menu-content {
    background-color: rgba(26, 26, 26, 0.95);
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    padding: 30px;
    width: 300px;
    text-align: center;
}

.game-menu-content h3 {
    color: var(--primary-color);
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.menu-item {
    display: block;
    width: 100%;
    background-color: var(--secondary-color);
    color: var(--text-color);
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.menu-item:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}
```

**Step 2: Add Game Menu Implementation to UIController.js**

```javascript
/**
 * Initialize game menu
 */
initGameMenu() {
    // Create menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.addEventListener('click', () => {
        this.toggleGameMenu();
    });
    
    // Create game menu
    const gameMenu = document.createElement('div');
    gameMenu.className = 'game-menu';
    gameMenu.innerHTML = `
        <div class="game-menu-content">
            <h3>Game Menu</h3>
            <button class="menu-item" data-action="continue">Continue Game</button>
            <button class="menu-item" data-action="save">Save Game</button>
            <button class="menu-item" data-action="load">Load Game</button>
            <button class="menu-item" data-action="character">Character Profile</button>
            <button class="menu-item" data-action="quit">Quit to Main Menu</button>
        </div>
    `;
    
    // Add event listeners to menu items
    const menuItems = gameMenu.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            this.handleMenuAction(action);
        });
    });
    
    // Add to document
    document.body.appendChild(menuButton);
    document.body.appendChild(gameMenu);
    
    // Store references
    this.elements.menuButton = menuButton;
    this.elements.gameMenu = gameMenu;
    
    // Hide menu initially
    this.hideGameMenu();
}

/**
 * Toggle game menu
 */
toggleGameMenu() {
    if (this.elements.gameMenu.classList.contains('active')) {
        this.hideGameMenu();
    } else {
        this.showGameMenu();
    }
}

/**
 * Show game menu
 */
showGameMenu() {
    // Pause game
    this.pauseGame();
    
    // Show menu
    this.elements.gameMenu.classList.add('active');
}

/**
 * Hide game menu
 */
hideGameMenu() {
    // Hide menu
    this.elements.gameMenu.classList.remove('active');
    
    // Resume game
    this.resumeGame();
}

/**
 * Handle menu action
 */
handleMenuAction(action) {
    switch (action) {
        case 'continue':
            this.hideGameMenu();
            break;
        case 'save':
            this.saveGame();
            this.hideGameMenu();
            break;
        case 'load':
            this.loadGame();
            this.hideGameMenu();
            break;
        case 'character':
            this.hideGameMenu();
            if (window.navigationManager) {
                window.navigationManager.navigateToCharacterProfile();
            } else {
                window.location.href = 'character-profile.html';
            }
            break;
        case 'quit':
            if (confirm('Are you sure you want to quit? Any unsaved progress will be lost.')) {
                this.quitToMainMenu();
            }
            break;
        default:
            console.error(`Unknown menu action: ${action}`);
    }
}

/**
 * Save game
 */
saveGame() {
    const success = this.gameStateManager.saveGame();
    
    if (success) {
        this.showNotification('Game saved successfully');
    } else {
        this.showNotification('Failed to save game', 'error');
    }
}

/**
 * Load game
 */
loadGame() {
    const success = this.gameStateManager.loadGame();
    
    if (success) {
        this.showNotification('Game loaded successfully');
        this.render();
    } else {
        this.showNotification('Failed to load game', 'error');
    }
}

/**
 * Quit to main menu
 */
quitToMainMenu() {
    // Save game before quitting
    this.gameStateManager.saveGame();
    
    // Navigate to main menu
    if (window.navigationManager) {
        window.navigationManager.navigateToMainMenu();
    } else {
        window.location.href = 'index.html';
    }
}

/**
 * Show notification
 */
showNotification(message, type = 'success') {
    // Create notification element if it doesn't exist
    if (!this.elements.notification) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
        this.elements.notification = notification;
    }
    
    // Set notification content and type
    this.elements.notification.textContent = message;
    this.elements.notification.className = `notification ${type}`;
    
    // Show notification
    this.elements.notification.classList.add('active');
    
    // Hide notification after a delay
    setTimeout(() => {
        this.elements.notification.classList.remove('active');
    }, 3000);
}

/**
 * Pause game
 */
pauseGame() {
    // Set game paused flag
    this.gamePaused = true;
    
    // Pause audio
    if (this.audioManager) {
        this.audioManager.pauseMusic();
    }
}

/**
 * Resume game
 */
resumeGame() {
    // Clear game paused flag
    this.gamePaused = false;
    
    // Resume audio
    if (this.audioManager) {
        this.audioManager.resumeMusic();
    }
}
```

**Step 3: Add Notification CSS**

```css
/* Notification */
.notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(26, 26, 26, 0.9);
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    padding: 10px 20px;
    color: var(--text-color);
    font-size: 0.9rem;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.notification.active {
    opacity: 1;
}

.notification.success {
    border-color: var(--success-color);
}

.notification.error {
    border-color: var(--error-color);
}
```

### Phase 3: Story Integration

#### 3.1 Connect All Three Acts with Proper Transitions

**Step 1: Add Act Transition Method to StoryEngine.js**

```javascript
/**
 * Get the first scene ID for a given act
 */
getFirstSceneIdForAct(act) {
    // Define the first scene for each act
    const firstScenes = {
        1: "JOURNEY_START",
        2: "ACT2_START",
        3: "ACT3_START"
    };
    
    return firstScenes[act] || "JOURNEY_START";
}

/**
 * Transition to the next act
 */
transitionToNextAct() {
    const currentAct = this.gameStateManager.playerState.currentAct;
    const nextAct = currentAct + 1;
    
    // Check if next act exists
    if (this.allActs[nextAct]) {
        // Update game state
        this.gameStateManager.playerState.currentAct = nextAct;
        this.gameStateManager.playerState.currentSceneId = this.getFirstSceneIdForAct(nextAct);
        
        // Save game
        this.gameStateManager.saveGame();
        
        return true;
    }
    
    return false;
}
```

**Step 2: Update processChoice Method in StoryEngine.js**

```javascript
/**
 * Process a choice selection
 */
processChoice(choiceId) {
    const scene = this.getCurrentScene();
    const choice = scene.choices.find(c => c.id === choiceId);
    
    if (!choice) {
        console.error(`Choice with ID "${choiceId}" not found in current scene`);
        return false;
    }
    
    // Process effects
    if (choice.effects) {
        this.processEffects(choice.effects);
    }
    
    // Process world state triggers
    if (choice.worldStateTriggers) {
        Object.entries(choice.worldStateTriggers).forEach(([key, value]) => {
            this.gameStateManager.updateState(key, value);
        });
    }
    
    // Check for act transition
    if (choice.nextAct) {
        return this.transitionToNextAct();
    }
    
    // Move to next scene
    if (choice.nextScene) {
        this.gameStateManager.playerState.currentSceneId = choice.nextScene;
        return true;
    }
    
    return false;
}
```

**Step 3: Add Act Transition Scenes to Story Data**

Add to ACT1storyData.js:

```javascript
"ACT1_ENDING": {
    "title": "The First Trial Completed",
    "text": "As you complete the final challenge, a sense of accomplishment washes over you. The village of Dharmapura seems brighter, its people more at peace. Yet, you sense that your journey has only just begun. A new path opens before you, leading to unknown challenges and greater mysteries.",
    "choices": [
        {
            "id": "continue_to_act2",
            "text": "Continue your journey...",
            "nextAct": 2,
            "effects": {
                "karma": 10,
                "dharmicProfile": {
                    "moksha": 5
                }
            }
        }
    ]
}
```

Add to ACT2storyData.js:

```javascript
"ACT2_START": {
    "title": "The Path Beyond",
    "text": "The morning sun casts long shadows as you leave Dharmapura behind. The lessons of the village have strengthened your resolve, but greater challenges await. The path ahead leads through ancient forests and sacred mountains, where the veil between worlds grows thin. Your journey of self-discovery continues.",
    "choices": [
        {
            "id": "enter_forest",
            "text": "Enter the ancient forest...",
            "nextScene": "FOREST_ENTRANCE"
        }
    ]
},

"ACT2_ENDING": {
    "title": "The Second Trial Completed",
    "text": "The challenges of the forest and mountains have tested you in ways you never imagined. You have grown stronger, wiser, and more attuned to the cosmic forces that shape existence. As you stand at the precipice of the final leg of your journey, you feel a profound transformation taking place within you.",
    "choices": [
        {
            "id": "continue_to_act3",
            "text": "Embrace the final challenge...",
            "nextAct": 3,
            "effects": {
                "karma": 15,
                "dharmicProfile": {
                    "moksha": 10
                }
            }
        }
    ]
}
```

Add to ACT3storyData.js:

```javascript
"ACT3_START": {
    "title": "The Final Threshold",
    "text": "The air grows thin as you ascend the sacred mountain. Behind you lies the world you've known—the village of Dharmapura, the ancient forest, the trials that have shaped you. Ahead lies the ultimate challenge: the Temple of Transcendence, where the final mysteries of existence await. Your nakshatra essence pulses within you, ready for the culmination of your journey.",
    "choices": [
        {
            "id": "approach_temple",
            "text": "Approach the temple...",
            "nextScene": "TEMPLE_ENTRANCE"
        }
    ]
},

"ACT3_ENDING": {
    "title": "Journey's End",
    "text": "You have walked the path of dharma, faced your inner demons, and transcended the cycle of samsara. The journey that began in the humble village of Dharmapura has led you to profound spiritual awakening. As you look back on your choices and the lives you've touched, you understand that every step was necessary for your growth.",
    "choices": [
        {
            "id": "complete_journey",
            "text": "Reflect on your journey...",
            "nextScene": "FINAL_REFLECTION",
            "effects": {
                "karma": 20,
                "dharmicProfile": {
                    "moksha": 20
                }
            }
        }
    ]
}
```

**Step 4: Add Visual Effects for Act Transitions**

Add to VisualEffects.js:

```javascript
/**
 * Play act transition effect
 */
playActTransition(fromAct, toAct) {
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'act-transition-overlay';
    
    // Add content to overlay
    overlay.innerHTML = `
        <div class="act-transition-content">
            <h2>Act ${fromAct} Complete</h2>
            <div class="act-transition-divider"></div>
            <h3>Beginning Act ${toAct}</h3>
            <div class="act-transition-mandala">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" stroke="#FFC58F" stroke-width="0.5" fill="none"/>
                    <circle cx="50" cy="50" r="30" stroke="#FFC58F" stroke-width="0.5" fill="none"/>
                    <circle cx="50" cy="50" r="15" stroke="#FFC58F" stroke-width="0.5" fill="none"/>
                    <circle cx="50" cy="50" r="5" fill="#FFC58F"/>
                </svg>
            </div>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(overlay);
    
    // Play transition sound
    if (window.audioManager) {
        window.audioManager.playSound('act_transition');
    }
    
    // Add active class after a short delay to trigger animation
    setTimeout(() => {
        overlay.classList.add('active');
    }, 100);
    
    // Remove overlay after animation completes
    setTimeout(() => {
        overlay.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 1000);
    }, 5000);
}
```

Add CSS for act transitions:

```css
/* Act Transition */
.act-transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 1s ease;
}

.act-transition-overlay.active {
    opacity: 1;
}

.act-transition-content {
    text-align: center;
    color: var(--primary-color);
}

.act-transition-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeInDown 1s ease forwards 0.5s;
}

.act-transition-divider {
    width: 100px;
    height: 2px;
    background-color: var(--primary-color);
    margin: 1rem auto;
    opacity: 0;
    animation: expandWidth 1s ease forwards 1s;
}

.act-transition-content h3 {
    font-size: 2rem;
    margin-top: 1rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease forwards 1.5s;
}

.act-transition-mandala {
    width: 200px;
    height: 200px;
    margin: 2rem auto 0;
    opacity: 0;
    animation: fadeIn 1s ease forwards 2s, rotate 20s linear infinite 2s;
}

@keyframes fadeInDown {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes expandWidth {
    to {
        opacity: 1;
        width: 200px;
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```

#### 3.2 Implement Conditional Story Paths Based on Character Attributes

**Step 1: Add Character-Specific Choices to Story Data**

Example scene with nakshatra-specific choices:

```javascript
"FOREST_CLEARING": {
    "title": "The Mystical Clearing",
    "text": "You discover a clearing bathed in ethereal light. Ancient symbols are carved into a stone at the center, and the air hums with energy. Your nakshatra essence resonates with this place, offering you unique insights.",
    "choices": [
        {
            "id": "examine_stone",
            "text": "Examine the stone more closely",
            "nextScene": "STONE_EXAMINATION"
        },
        {
            "id": "leave_clearing",
            "text": "Leave the clearing",
            "nextScene": "FOREST_PATH"
        }
    ],
    "nakshatraChoices": {
        "Ashwini": [
            {
                "id": "ashwini_healing",
                "text": "Use your healing shakti to commune with the stone",
                "nextScene": "ASHWINI_STONE_COMMUNION",
                "effects": {
                    "karma": 5,
                    "dharmicProfile": {
                        "moksha": 3
                    }
                }
            }
        ],
        "Bharani": [
            {
                "id": "bharani_purification",
                "text": "Purify the clearing with your transformative energy",
                "nextScene": "BHARANI_PURIFICATION",
                "effects": {
                    "karma": 5,
                    "dharmicProfile": {
                        "dharma": 3
                    }
                }
            }
        ]
    },
    "ganaChoices": {
        "Deva": [
            {
                "id": "deva_harmony",
                "text": "Harmonize with the divine energy of the clearing",
                "nextScene": "DEVA_HARMONY",
                "effects": {
                    "karma": 5,
                    "dharmicProfile": {
                        "dharma": 3
                    }
                }
            }
        ],
        "Manushya": [
            {
                "id": "manushya_balance",
                "text": "Find the balance between the mundane and spiritual",
                "nextScene": "MANUSHYA_BALANCE",
                "effects": {
                    "karma": 5,
                    "dharmicProfile": {
                        "artha": 3
                    }
                }
            }
        ],
        "Rakshasa": [
            {
                "id": "rakshasa_power",
                "text": "Channel the primal power of the clearing",
                "nextScene": "RAKSHASA_POWER",
                "effects": {
                    "karma": 5,
                    "dharmicProfile": {
                        "kama": 3
                    }
                }
            }
        ]
    }
}
```

**Step 2: Update UIController.js to Style Special Choices**

```css
/* Special Choices */
.choice-button.nakshatra-choice {
    background-color: rgba(255, 197, 143, 0.2);
    border: 1px solid var(--primary-color);
    position: relative;
}

.choice-button.nakshatra-choice::before {
    content: "✧";
    position: absolute;
    left: 10px;
    color: var(--primary-color);
}

.choice-button.gana-choice {
    background-color: rgba(143, 197, 255, 0.2);
    border: 1px solid #8fc5ff;
    position: relative;
}

.choice-button.gana-choice::before {
    content: "⦿";
    position: absolute;
    left: 10px;
    color: #8fc5ff;
}
```

Update the renderChoices method in UIController.js:

```javascript
/**
 * Render choices
 */
renderChoices(choices) {
    // Clear choices container
    this.elements.choicesContainer.innerHTML = '';
    
    // Render choices
    choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.className = 'choice-button';
        choiceButton.dataset.choiceId = choice.id;
        choiceButton.textContent = choice.text;
        
        // Add special styling for nakshatra/gana choices
        if (choice.isNakshatraChoice) {
            choiceButton.classList.add('nakshatra-choice');
        } else if (choice.isGanaChoice) {
            choiceButton.classList.add('gana-choice');
        }
        
        // Add click handler
        choiceButton.addEventListener('click', () => {
            this.handleChoiceSelection(choice.id);
        });
        
        this.elements.choicesContainer.appendChild(choiceButton);
    });
}
```

#### 3.3 Implement Dynamic Text Replacement

**Step 1: Add Dynamic Text Processing to StoryEngine.js**

```javascript
/**
 * Process dynamic text in scene
 */
processDynamicText(scene) {
    if (!scene.dynamicText) {
        return scene;
    }
    
    const processedScene = { ...scene };
    const gameState = this.gameStateManager.getState();
    
    // Replace {karma} with actual karma value
    processedScene.text = processedScene.text.replace(/{karma}/g, gameState.playerState.karma);
    
    // Replace {dominantDharma} with the player's dominant dharmic aspect
    const dharmicProfile = gameState.playerState.dharmicProfile;
    let dominantAspect = 'balance';
    let highestValue = 0;
    
    Object.entries(dharmicProfile).forEach(([aspect, value]) => {
        if (value > highestValue) {
            highestValue = value;
            dominantAspect = aspect;
        }
    });
    
    processedScene.text = processedScene.text.replace(/{dominantDharma}/g, dominantAspect);
    
    // Replace {nakshatra} with player's nakshatra
    processedScene.text = processedScene.text.replace(/{nakshatra}/g, gameState.playerProfile.nakshatra);
    
    // Replace {gana} with player's gana
    processedScene.text = processedScene.text.replace(/{gana}/g, gameState.playerProfile.gana);
    
    return processedScene;
}
```

**Step 2: Update getCurrentScene Method to Process Dynamic Text**

```javascript
getCurrentScene() {
    const storyData = this.getActiveStoryData();
    const currentSceneId = this.gameStateManager.playerState.currentSceneId;
    
    // Find the scene in the current act's data
    const scene = storyData.scenes.find(scene => scene.id === currentSceneId);
    
    if (!scene) {
        console.error(`Scene with ID "${currentSceneId}" not found in Act ${this.gameStateManager.playerState.currentAct}`);
        return null;
    }
    
    // Process dynamic text if needed
    if (scene.dynamicText) {
        return this.processDynamicText(scene);
    }
    
    return scene;
}
```

**Step 3: Add Final Reflection Scene with Dynamic Text**

Add to ACT3storyData.js:

```javascript
"FINAL_REFLECTION": {
    "title": "The Tapestry of Your Journey",
    "text": "As you reach the end of your journey, you reflect on the path you've traveled. The choices you've made, the lives you've touched, and the wisdom you've gained have all contributed to your spiritual growth. Your karma stands at {karma}, reflecting the balance of your actions. Your dharmic profile shows your focus on {dominantDharma}, revealing your spiritual priorities.",
    "dynamicText": true,
    "choices": [
        {
            "id": "view_journey_summary",
            "text": "View your journey summary",
            "nextScene": "JOURNEY_SUMMARY"
        },
        {
            "id": "begin_new_cycle",
            "text": "Begin a new cycle of existence",
            "nextScene": "NEW_CYCLE"
        }
    ]
}
```

### Phase 4: Polish and Refinement

#### 4.1 Implement Consistent UI Across All Pages

**Step 1: Create Common Header and Footer Components**

Add to all HTML files:

```html
<header class="game-header">
    <div class="logo">Samsara Saga</div>
    <nav class="main-nav">
        <a href="index.html" class="nav-link">Home</a>
        <a href="character-profile.html" class="nav-link">Character</a>
    </nav>
</header>

<footer class="game-footer">
    <div class="footer-content">
        <p>&copy; 2025 Samsara Saga</p>
    </div>
</footer>
```

Add CSS:

```css
/* Header */
.game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: rgba(26, 26, 26, 0.9);
    border-bottom: 2px solid var(--primary-color);
}

.logo {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.main-nav {
    display: flex;
    gap: 1rem;
}

.nav-link {
    color: var(--text-color);
    text-decoration: none;
    padding: 0.5rem;
    transition: all 0.2s ease;
}

.nav-link:hover {
    color: var(--primary-color);
}

/* Footer */
.game-footer {
    padding: 1rem;
    background-color: rgba(26, 26, 26, 0.9);
    border-top: 2px solid var(--primary-color);
    text-align: center;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
}
```

#### 4.2 Add Animations for Transitions

**Step 1: Add Page Transition Animation**

Add CSS:

```css
/* Page Transition */
.page-transition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
}

.page-transition.active {
    opacity: 1;
    pointer-events: auto;
}

.page-transition-content {
    text-align: center;
}

.page-transition-mandala {
    width: 150px;
    height: 150px;
    animation: rotate 4s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```

**Step 2: Add Choice Selection Animation**

Add CSS:

```css
/* Choice Selection Animation */
.choice-button {
    position: relative;
    overflow: hidden;
}

.choice-button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.choice-button:hover::after {
    transform: translateX(0);
}

.choice-button.selected::after {
    background-color: rgba(255, 197, 143, 0.3);
    transform: translateX(0);
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        opacity: 0.3;
    }
    50% {
        opacity: 0.6;
    }
    100% {
        opacity: 0.3;
    }
}
```

Update handleChoiceSelection in UIController.js:

```javascript
handleChoiceSelection(choiceId) {
    // Find the choice button
    const choiceButton = document.querySelector(`.choice-button[data-choice-id="${choiceId}"]`);
    
    if (choiceButton) {
        // Add selected class for animation
        choiceButton.classList.add('selected');
        
        // Process after animation
        setTimeout(() => {
            // Process the choice
            const success = this.storyEngine.processChoice(choiceId);
            
            if (success) {
                // Play selection sound
                if (this.audioManager) {
                    this.audioManager.playSound('choice_select');
                }
                
                // Update UI
                this.render();
            }
        }, 500);
    } else {
        // Process immediately if button not found
        const success = this.storyEngine.processChoice(choiceId);
        
        if (success) {
            // Update UI
            this.render();
        }
    }
}
```

#### 4.3 Implement Sound Effects and Music

**Step 1: Enhance AudioManager.js**

```javascript
class AudioManager {
    constructor() {
        this.musicVolume = 0.5;
        this.soundVolume = 0.7;
        this.currentMusic = null;
        this.sounds = {};
        this.music = {};
        
        // Initialize sounds and music
        this.initSounds();
        this.initMusic();
    }
    
    /**
     * Initialize sound effects
     */
    initSounds() {
        // Define sound effects
        const soundEffects = {
            'choice_select': 'sounds/choice_select.mp3',
            'puzzle_solve': 'sounds/puzzle_solve.mp3',
            'puzzle_action': 'sounds/puzzle_action.mp3',
            'act_transition': 'sounds/act_transition.mp3',
            'karma_gain': 'sounds/karma_gain.mp3',
            'karma_loss': 'sounds/karma_loss.mp3',
            'menu_open': 'sounds/menu_open.mp3',
            'menu_close': 'sounds/menu_close.mp3'
        };
        
        // Create Audio objects
        Object.entries(soundEffects).forEach(([name, path]) => {
            this.sounds[name] = new Audio(path);
            this.sounds[name].volume = this.soundVolume;
        });
    }
    
    /**
     * Initialize music tracks
     */
    initMusic() {
        // Define music tracks
        const musicTracks = {
            'menu': 'music/menu_theme.mp3',
            'act1': 'music/act1_theme.mp3',
            'act2': 'music/act2_theme.mp3',
            'act3': 'music/act3_theme.mp3',
            'meditation': 'music/meditation.mp3'
        };
        
        // Create Audio objects
        Object.entries(musicTracks).forEach(([name, path]) => {
            this.music[name] = new Audio(path);
            this.music[name].volume = this.musicVolume;
            this.music[name].loop = true;
        });
    }
    
    /**
     * Play a sound effect
     */
    playSound(soundName) {
        const sound = this.sounds[soundName];
        if (sound) {
            // Clone the sound to allow overlapping playback
            const soundClone = sound.cloneNode();
            soundClone.volume = this.soundVolume;
            soundClone.play().catch(error => {
                console.error(`Error playing sound ${soundName}:`, error);
            });
        } else {
            console.warn(`Sound "${soundName}" not found`);
        }
    }
    
    /**
     * Play music track
     */
    playMusic(trackName) {
        // Stop current music if playing
        this.stopMusic();
        
        const track = this.music[trackName];
        if (track) {
            track.currentTime = 0;
            this.currentMusic = track;
            track.play().catch(error => {
                console.error(`Error playing music ${trackName}:`, error);
            });
        } else {
            console.warn(`Music track "${trackName}" not found`);
        }
    }
    
    /**
     * Play music for current act
     */
    playMusicForAct(act) {
        const trackName = `act${act}`;
        this.playMusic(trackName);
    }
    
    /**
     * Stop current music
     */
    stopMusic() {
        if (this.currentMusic) {
            this.currentMusic.pause();
            this.currentMusic.currentTime = 0;
            this.currentMusic = null;
        }
    }
    
    /**
     * Pause current music
     */
    pauseMusic() {
        if (this.currentMusic) {
            this.currentMusic.pause();
        }
    }
    
    /**
     * Resume current music
     */
    resumeMusic() {
        if (this.currentMusic) {
            this.currentMusic.play().catch(error => {
                console.error(`Error resuming music:`, error);
            });
        }
    }
    
    /**
     * Set music volume
     */
    setMusicVolume(volume) {
        this.musicVolume = Math.max(0, Math.min(1, volume));
        
        // Update all music tracks
        Object.values(this.music).forEach(track => {
            track.volume = this.musicVolume;
        });
    }
    
    /**
     * Set sound volume
     */
    setSoundVolume(volume) {
        this.soundVolume = Math.max(0, Math.min(1, volume));
        
        // Update all sound effects
        Object.values(this.sounds).forEach(sound => {
            sound.volume = this.soundVolume;
        });
    }
}
```

**Step 2: Initialize Audio in Gameplay Page**

Add to the initialization code in Gameplay-fixed.html:

```javascript
// Initialize audio
if (window.audioManager) {
    // Play music for current act
    const currentAct = window.gameStateManager.playerState.currentAct;
    window.audioManager.playMusicForAct(currentAct);
}
```

#### 4.4 Create Visual Feedback for Player Actions

**Step 1: Add Karma Change Animation**

Add to VisualEffects.js:

```javascript
/**
 * Show karma change animation
 */
showKarmaChange(amount) {
    // Create floating number
    const floatingNumber = document.createElement('div');
    floatingNumber.className = `floating-number ${amount > 0 ? 'positive' : 'negative'}`;
    floatingNumber.textContent = amount > 0 ? `+${amount}` : amount;
    
    // Position near karma display
    const karmaDisplay = document.getElementById('karma-display');
    if (karmaDisplay) {
        const rect = karmaDisplay.getBoundingClientRect();
        floatingNumber.style.left = `${rect.left + rect.width / 2}px`;
        floatingNumber.style.top = `${rect.top}px`;
    } else {
        // Default position if karma display not found
        floatingNumber.style.left = '50%';
        floatingNumber.style.top = '100px';
    }
    
    // Add to document
    document.body.appendChild(floatingNumber);
    
    // Animate and remove
    setTimeout(() => {
        floatingNumber.classList.add('animate');
        setTimeout(() => {
            document.body.removeChild(floatingNumber);
        }, 1000);
    }, 10);
}
```

Add CSS:

```css
/* Floating Number Animation */
.floating-number {
    position: fixed;
    font-size: 1.5rem;
    font-weight: bold;
    pointer-events: none;
    z-index: 1000;
    transform: translate(-50%, 0);
    opacity: 0;
}

.floating-number.positive {
    color: var(--success-color);
}

.floating-number.negative {
    color: var(--error-color);
}

.floating-number.animate {
    animation: float-up 1s ease-out forwards;
}

@keyframes float-up {
    0% {
        opacity: 0;
        transform: translate(-50%, 0);
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50px);
    }
}
```

**Step 2: Add Inventory Item Acquisition Animation**

Add to VisualEffects.js:

```javascript
/**
 * Show item acquisition animation
 */
showItemAcquired(itemName) {
    // Create item notification
    const notification = document.createElement('div');
    notification.className = 'item-notification';
    notification.innerHTML = `
        <div class="item-icon">✦</div>
        <div class="item-info">
            <div class="item-title">Item Acquired</div>
            <div class="item-name">${itemName}</div>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('active');
        
        // Hide and remove after delay
        setTimeout(() => {
            notification.classList.remove('active');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }, 10);
}
```

Add CSS:

```css
/* Item Notification */
.item-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: rgba(26, 26, 26, 0.9);
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    transform: translateX(120%);
    transition: transform 0.3s ease;
    z-index: 1000;
}

.item-notification.active {
    transform: translateX(0);
}

.item-icon {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.item-info {
    display: flex;
    flex-direction: column;
}

.item-title {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
}

.item-name {
    font-weight: bold;
    color: var(--primary-color);
}
```

**Step 3: Update GameStateManager.js to Trigger Visual Effects**

```javascript
/**
 * Add item to inventory with visual effect
 */
addToInventory(item) {
    if (!this.playerState.inventory.includes(item)) {
        this.playerState.inventory.push(item);
        
        // Show item acquisition animation
        if (window.visualEffects) {
            window.visualEffects.showItemAcquired(item);
        }
        
        // Play sound
        if (window.audioManager) {
            window.audioManager.playSound('item_get');
        }
        
        return true;
    }
    return false;
}

/**
 * Update karma with visual effect
 */
updateKarma(amount) {
    this.playerState.karma += amount;
    
    // Show karma change animation
    if (window.visualEffects) {
        window.visualEffects.showKarmaChange(amount);
    }
    
    // Play sound
    if (window.audioManager) {
        if (amount > 0) {
            window.audioManager.playSound('karma_gain');
        } else if (amount < 0) {
            window.audioManager.playSound('karma_loss');
        }
    }
    
    return this.playerState.karma;
}
```

### Phase 5: Testing and Deployment

#### 5.1 Test Game Flow from Start to Finish

**Step 1: Create a Testing Checklist**

```
# SAMSAGA Testing Checklist

## Character Creation
- [ ] Character creation page loads correctly
- [ ] All Nakshatra options are displayed
- [ ] Gana selection works
- [ ] Character attributes are displayed correctly
- [ ] Character creation completes successfully

## Game Initialization
- [ ] Game loads correctly after character creation
- [ ] Player profile is properly loaded
- [ ] Starting scene is displayed
- [ ] UI elements are properly initialized

## Act 1
- [ ] All scenes in Act 1 are accessible
- [ ] Choices affect game state correctly
- [ ] Puzzles can be solved
- [ ] Inventory items can be acquired
- [ ] Act 1 ending transitions to Act 2

## Act 2
- [ ] Act 2 starts correctly
- [ ] All scenes in Act 2 are accessible
- [ ] Choices affect game state correctly
- [ ] Puzzles can be solved
- [ ] Act 2 ending transitions to Act 3

## Act 3
- [ ] Act 3 starts correctly
- [ ] All scenes in Act 3 are accessible
- [ ] Choices affect game state correctly
- [ ] Puzzles can be solved
- [ ] Game ending is displayed correctly

## Game State Management
- [ ] Game state is saved correctly
- [ ] Game state is loaded correctly
- [ ] Auto-save works
- [ ] State persists between page navigations

## UI/UX
- [ ] All UI elements are displayed correctly
- [ ] Animations work correctly
- [ ] Sound effects play correctly
- [ ] Music plays correctly
- [ ] Visual feedback is provided for player actions

## Character Profile
- [ ] Character profile page loads correctly
- [ ] Character attributes are displayed correctly
- [ ] Inventory is displayed correctly
- [ ] Navigation back to game works correctly

## Game Menu
- [ ] Game menu opens and closes correctly
- [ ] Save/load functionality works
- [ ] Navigation to character profile works
- [ ] Quitting to main menu works
```

#### 5.2 Debug Common Issues

**Step 1: Create a Debugging Tool**

Add to main.js:

```javascript
/**
 * Debug tool
 */
function initDebugTool() {
    // Check if we're in development mode
    const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (!isDev) return;
    
    // Create debug panel
    const debugPanel = document.createElement('div');
    debugPanel.className = 'debug-panel';
    debugPanel.innerHTML = `
        <div class="debug-header">
            <h3>Debug Panel</h3>
            <button class="debug-toggle">▼</button>
        </div>
        <div class="debug-content">
            <div class="debug-section">
                <h4>Game State</h4>
                <button class="debug-button" data-action="log-state">Log State</button>
                <button class="debug-button" data-action="reset-state">Reset State</button>
            </div>
            <div class="debug-section">
                <h4>Navigation</h4>
                <button class="debug-button" data-action="goto-act1">Go to Act 1</button>
                <button class="debug-button" data-action="goto-act2">Go to Act 2</button>
                <button class="debug-button" data-action="goto-act3">Go to Act 3</button>
            </div>
            <div class="debug-section">
                <h4>Character</h4>
                <button class="debug-button" data-action="add-karma">Add Karma (+10)</button>
                <button class="debug-button" data-action="sub-karma">Sub Karma (-10)</button>
                <button class="debug-button" data-action="add-item">Add Test Item</button>
            </div>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(debugPanel);
    
    // Add event listeners
    const debugToggle = debugPanel.querySelector('.debug-toggle');
    debugToggle.addEventListener('click', () => {
        debugPanel.classList.toggle('collapsed');
        debugToggle.textContent = debugPanel.classList.contains('collapsed') ? '▲' : '▼';
    });
    
    // Add button event listeners
    const debugButtons = debugPanel.querySelectorAll('.debug-button');
    debugButtons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            handleDebugAction(action);
        });
    });
}

/**
 * Handle debug actions
 */
function handleDebugAction(action) {
    switch (action) {
        case 'log-state':
            console.log('Game State:', window.gameStateManager.getState());
            break;
        case 'reset-state':
            window.gameStateManager.init();
            window.location.reload();
            break;
        case 'goto-act1':
            window.gameStateManager.playerState.currentAct = 1;
            window.gameStateManager.playerState.currentSceneId = 'JOURNEY_START';
            window.location.reload();
            break;
        case 'goto-act2':
            window.gameStateManager.playerState.currentAct = 2;
            window.gameStateManager.playerState.currentSceneId = 'ACT2_START';
            window.location.reload();
            break;
        case 'goto-act3':
            window.gameStateManager.playerState.currentAct = 3;
            window.gameStateManager.playerState.currentSceneId = 'ACT3_START';
            window.location.reload();
            break;
        case 'add-karma':
            window.gameStateManager.updateKarma(10);
            window.uiController.updateStatusDisplay();
            break;
        case 'sub-karma':
            window.gameStateManager.updateKarma(-10);
            window.uiController.updateStatusDisplay();
            break;
        case 'add-item':
            window.gameStateManager.addToInventory('Debug Test Item');
            window.uiController.updateStatusDisplay();
            break;
        default:
            console.error(`Unknown debug action: ${action}`);
    }
}

// Initialize debug tool in development mode
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    document.addEventListener('DOMContentLoaded', initDebugTool);
}
```

Add CSS:

```css
/* Debug Panel */
.debug-panel {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.9);
    border: 1px solid #ff5722;
    border-radius: 4px 0 0 0;
    z-index: 9999;
    transition: transform 0.3s ease;
}

.debug-panel.collapsed .debug-content {
    display: none;
}

.debug-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background-color: #ff5722;
    color: #000;
}

.debug-header h3 {
    margin: 0;
    font-size: 0.9rem;
}

.debug-toggle {
    background: none;
    border: none;
    color: #000;
    cursor: pointer;
    font-size: 0.8rem;
}

.debug-content {
    padding: 10px;
}

.debug-section {
    margin-bottom: 10px;
}

.debug-section h4 {
    margin: 0 0 5px 0;
    font-size: 0.8rem;
    color: #ff5722;
}

.debug-button {
    background-color: #333;
    color: #fff;
    border: 1px solid #ff5722;
    border-radius: 3px;
    padding: 3px 8px;
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 0.7rem;
    cursor: pointer;
}

.debug-button:hover {
    background-color: #ff5722;
    color: #000;
}
```

#### 5.3 Deployment Instructions

**Step 1: Create a Deployment Guide**

```
# SAMSAGA Deployment Guide

## Prerequisites
- Node.js (v14 or higher)
- A web server (for production deployment)

## Local Development
1. Clone the repository
2. Navigate to the project directory
3. Run `node server.js` to start the development server
4. Access the game at http://localhost:3000

## Production Deployment

### Option 1: Static Web Server
1. Copy all files to your web server's public directory
2. Ensure all file permissions are set correctly
3. Access the game at your server's URL

### Option 2: Node.js Server
1. Copy all files to your server
2. Install Node.js if not already installed
3. Run `node server.js` to start the server
4. Configure a reverse proxy (Nginx or Apache) to forward requests to port 3000
5. Set up the server to run as a service for continuous operation

### Option 3: GitHub Pages
1. Push the project to a GitHub repository
2. Enable GitHub Pages in the repository settings
3. Set the source to the main branch
4. Access the game at your GitHub Pages URL

## Important Notes
- Ensure all assets (images, sounds, etc.) are properly referenced with relative paths
- Test the game thoroughly after deployment to ensure all features work correctly
- Check browser console for any errors or warnings
```

## Testing Checklist

Use this checklist to verify that all components of the game are working correctly:

1. **Character Creation**
   - [ ] Character creation page loads correctly
   - [ ] All Nakshatra options are displayed
   - [ ] Gana selection works
   - [ ] Character attributes are displayed correctly
   - [ ] Character creation completes successfully

2. **Game Initialization**
   - [ ] Game loads correctly after character creation
   - [ ] Player profile is properly loaded
   - [ ] Starting scene is displayed
   - [ ] UI elements are properly initialized

3. **Game Flow**
   - [ ] All scenes are accessible
   - [ ] Choices affect game state correctly
   - [ ] Puzzles can be solved
   - [ ] Act transitions work correctly
   - [ ] Game ending is displayed correctly

4. **Game State Management**
   - [ ] Game state is saved correctly
   - [ ] Game state is loaded correctly
   - [ ] Auto-save works
   - [ ] State persists between page navigations

5. **UI/UX**
   - [ ] All UI elements are displayed correctly
   - [ ] Animations work correctly
   - [ ] Sound effects play correctly
   - [ ] Music plays correctly
   - [ ] Visual feedback is provided for player actions

## Troubleshooting Common Issues

### Module Loading Issues
- **Issue**: Scripts not loading in the correct order
  - **Solution**: Check the script tags in the HTML files and ensure they're in the correct order

- **Issue**: "X is not defined" errors in console
  - **Solution**: Check that all global variables are properly defined and accessible

### Game State Issues
- **Issue**: Game state not persisting between pages
  - **Solution**: Check that the temporary character data is being saved and loaded correctly

- **Issue**: Save/load functionality not working
  - **Solution**: Check that localStorage is available and working correctly

### UI Issues
- **Issue**: UI elements not displaying correctly
  - **Solution**: Check the CSS and ensure all required styles are loaded

- **Issue**: Animations not working
  - **Solution**: Check for JavaScript errors that might be preventing animations from running

### Audio Issues
- **Issue**: Sound effects or music not playing
  - **Solution**: Check that the audio files exist and are correctly referenced
  - **Solution**: Some browsers require user interaction before playing audio; add a sound initialization on first click

### Puzzle Issues
- **Issue**: Puzzles not evaluating correctly
  - **Solution**: Check the puzzle evaluation logic in PuzzleEngine.js
  - **Solution**: Verify that puzzle data is correctly defined in puzzles.js
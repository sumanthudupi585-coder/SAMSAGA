/**
 * PuzzleEngine.js
 * * This module is the puzzle master. It has been re-architected to manage the lifecycle
 * and logic for complex, interactive, and visual puzzles. It uses a Strategy design
 * pattern to handle different puzzle mechanics in a modular and extensible way.
 * * @version 3.0.0 (Architectural Enhancement)
 * @license MIT
 */

// =================================================================
// SECTION 1: PUZZLE STRATEGY INTERFACE (Abstract Base Class)
// =================================================================

/**
 * Defines the interface for all puzzle evaluation strategies.
 * Each puzzle type (e.g., EnergyBalancing, RotationalAlignment) will have its own
 * concrete strategy class that implements this interface. This adheres to the
 * Strategy design pattern and SOLID principles (Open/Closed, Liskov Substitution).
 */
class BasePuzzleStrategy {
    /**
     * @param {object} puzzleData The static puzzle definition from puzzles.js.
     * @param {object} initialGameState The current state of the game from GameStateManager.
     */
    constructor(puzzleData, initialGameState) {
        this.puzzleData = puzzleData;
        this.gameState = initialGameState;
        // The activeState holds the mutable, in-progress data for the puzzle instance.
        this.activeState = this.initializeActiveState();
    }

    /**
     * Initializes the specific state for this puzzle instance.
     * Must be implemented by subclasses.
     * @returns {object} The initial state for the active puzzle.
     */
    initializeActiveState() {
        throw new Error("PuzzleStrategy subclasses must implement initializeActiveState()");
    }

    /**
     * Handles a user interaction and updates the puzzle's active state.
     * Must be implemented by subclasses.
     * @param {object} interactionData Data from the UI event (e.g., { ringId: 'wisdom', angle: 90 }).
     * @returns {object} An object with feedback for the UI, e.g., { stateUpdated: true }.
     */
    handleInteraction(interactionData) {
        throw new Error("PuzzleStrategy subclasses must implement handleInteraction()");
    }

    /**
     * Evaluates the current activeState to see if the puzzle is solved.
     * Must be implemented by subclasses.
     * @returns {boolean} True if the puzzle is solved, false otherwise.
     */
    isSolved() {
        throw new Error("PuzzleStrategy subclasses must implement isSolved()");
    }

    /**
     * Provides the current state of the puzzle for the UI to render.
     * @returns {object} The current active state of the puzzle.
     */
    getState() {
        return this.activeState;
    }
}

// =================================================================
// SECTION 2: CONCRETE PUZZLE STRATEGIES
// =================================================================

/**
 * Strategy for the Banyan Tree's EnergyBalancing puzzle.
 * Manages the state of the three energy levels.
 */
class EnergyBalancingStrategy extends BasePuzzleStrategy {
    initializeActiveState() {
        // Clone the initial energy levels to create a mutable state for this puzzle instance.
        return {
            energyTypes: JSON.parse(JSON.stringify(this.puzzleData.mechanics.energyTypes)),
            attempts: 0
        };
    }

    handleInteraction(interactionData) {
        const { action } = interactionData;
        const method = this.puzzleData.mechanics.adjustmentMethods.find(m => m.name === action);

        if (!method) {
            console.error(`Invalid adjustment method: ${action}`);
            return { stateUpdated: false, error: "Invalid action" };
        }

        if (this.activeState.attempts >= this.puzzleData.mechanics.maxAttempts) {
            return { stateUpdated: false, feedback: "Max attempts reached." };
        }

        this.activeState.attempts++;

        // Apply the energy adjustments to the active state
        this.activeState.energyTypes.forEach(energy => {
            const effect = method.effect[energy.name] || 0;
            energy.currentLevel = Math.max(energy.minLevel, Math.min(energy.maxLevel, energy.currentLevel + effect));
        });

        return { stateUpdated: true };
    }

    isSolved() {
        const { balanceThreshold } = this.puzzleData.mechanics;
        return this.activeState.energyTypes.every(energy => 
            Math.abs(energy.currentLevel - energy.idealLevel) <= balanceThreshold
        );
    }
}

/**
 * Strategy for Rotational Alignment puzzles like the MandalaWheel.
 * Manages the rotation state of each ring.
 */
class RotationalAlignmentStrategy extends BasePuzzleStrategy {
    initializeActiveState() {
        const ringRotations = {};
        this.puzzleData.uiConfig.rings.forEach(ring => {
            ringRotations[ring.id] = ring.initialRotation;
        });
        return { ringRotations };
    }

    handleInteraction(interactionData) {
        const { ringId, newAngle } = interactionData;
        if (this.activeState.ringRotations.hasOwnProperty(ringId)) {
            this.activeState.ringRotations[ringId] = newAngle % 360;
            return { stateUpdated: true };
        }
        return { stateUpdated: false, error: `Invalid ring ID: ${ringId}` };
    }

    isSolved() {
        const { solutionAngle, solutionTolerance } = this.puzzleData.uiConfig;
        return Object.values(this.activeState.ringRotations).every(angle => {
            const difference = Math.abs(angle - solutionAngle);
            // Handle circular angle difference (e.g., 359 degrees is close to 0)
            const circularDifference = Math.min(difference, 360 - difference);
            return circularDifference <= solutionTolerance;
        });
    }
}

/**
 * Strategy for Item Application puzzles like the SymbolDnd.
 */
class ItemApplicationStrategy extends BasePuzzleStrategy {
    initializeActiveState() {
        return { lastAttemptedItem: null };
    }

    handleInteraction(interactionData) {
        const { droppedItem } = interactionData;
        this.activeState.lastAttemptedItem = droppedItem;
        // The check for success happens immediately in isSolved after this interaction.
        return { stateUpdated: true };
    }

    isSolved() {
        const { validItems } = this.puzzleData.mechanics.solution;
        return validItems.includes(this.activeState.lastAttemptedItem);
    }
}

// Additional strategies
class MultiStageCraftingStrategy extends BasePuzzleStrategy {
    initializeActiveState() { return { currentStage: 1, attempts: 0 }; }
    handleInteraction(interactionData) {
        const { action } = interactionData || {};
        if (action === 'advance_stage') { this.activeState.currentStage++; return { stateUpdated: true }; }
        return { stateUpdated: false };
    }
    isSolved() {
        const totalStages = Array.isArray(this.puzzleData.stages) ? this.puzzleData.stages.length : 1;
        return this.activeState.currentStage > totalStages;
    }
}
class MusicalSequenceStrategy extends BasePuzzleStrategy {
    initializeActiveState() { return { sequence: [], attempts: 0 }; }
    handleInteraction(interactionData) {
        const { note } = interactionData || {};
        if (!note) return { stateUpdated: false };
        this.activeState.sequence.push(note);
        return { stateUpdated: true };
    }
    isSolved() {
        const target = this.puzzleData.mechanics?.correctSequence || [];
        if (this.activeState.sequence.length !== target.length) return false;
        return this.activeState.sequence.every((n, i) => n === target[i]);
    }
}

/**
 * Strategy: Orrery (Navagraha) harmonic alignment
 * - activeState.angles: { bodyId: degrees }
 * - mechanics.friendPairs: [[a,b], ...] must be within friendTolerance
 * - mechanics.enemyPairs: [[a,b], ...] must be separated by >= enemySeparation
 * - mechanics.targetConjunctions: [[a,b], ...] must be within conjunctionTolerance
 */
class OrreryMechanicStrategy extends BasePuzzleStrategy {
    initializeActiveState() {
        const initialAngles = this.puzzleData.uiConfig?.initialAngles || {};
        return { angles: { ...initialAngles } };
    }
    handleInteraction(interactionData) {
        const { angles, bodyId, angle } = interactionData || {};
        if (angles && typeof angles === 'object') {
            this.activeState.angles = { ...this.activeState.angles, ...angles };
            return { stateUpdated: true };
        }
        if (bodyId && typeof angle === 'number') {
            this.activeState.angles[bodyId] = ((angle % 360) + 360) % 360;
            return { stateUpdated: true };
        }
        return { stateUpdated: false };
    }
    isSolved() {
        const degDiff = (a, b) => {
            const d = Math.abs(a - b) % 360;
            return Math.min(d, 360 - d);
        };
        const { friendPairs = [], enemyPairs = [], targetConjunctions = [] } = this.puzzleData.mechanics || {};
        const friendTolerance = this.puzzleData.mechanics?.friendTolerance ?? 10;
        const enemySeparation = this.puzzleData.mechanics?.enemySeparation ?? 120;
        const conjunctionTolerance = this.puzzleData.mechanics?.conjunctionTolerance ?? 8;
        // Check friend pairs near
        for (const [a, b] of friendPairs) {
            if (degDiff(this.activeState.angles[a], this.activeState.angles[b]) > friendTolerance) return false;
        }
        // Check enemy pairs far
        for (const [a, b] of enemyPairs) {
            if (degDiff(this.activeState.angles[a], this.activeState.angles[b]) < enemySeparation) return false;
        }
        // Check required conjunctions
        for (const [a, b] of targetConjunctions) {
            if (degDiff(this.activeState.angles[a], this.activeState.angles[b]) > conjunctionTolerance) return false;
        }
        return true;
    }
}

/**
 * Strategy: Klesha trials (five inner obstacles). Solved when all stages resolved.
 * interactionData: { stageId, action: 'resolve' }
 */
class KleshaResolutionStrategy extends BasePuzzleStrategy {
    initializeActiveState() {
        const stages = (this.puzzleData.mechanics?.stages || []).map(s => s.id);
        const completed = {};
        stages.forEach(id => completed[id] = false);
        return { completed };
    }
    handleInteraction(interactionData) {
        const { stageId, action } = interactionData || {};
        if (action === 'resolve' && stageId && this.activeState.completed.hasOwnProperty(stageId)) {
            this.activeState.completed[stageId] = true;
            return { stateUpdated: true };
        }
        return { stateUpdated: false };
    }
    isSolved() {
        return Object.values(this.activeState.completed).every(Boolean);
    }
}

/**
 * Strategy: Dharma scales (balance choices). Sum weights; solved if within tolerance after all scenarios answered.
 * interactionData: { choiceWeight }
 */
class BalanceScaleChoiceStrategy extends BasePuzzleStrategy {
    initializeActiveState() {
        return { totalBias: 0, answered: 0 };
    }
    handleInteraction(interactionData) {
        const { choiceWeight } = interactionData || {};
        if (typeof choiceWeight !== 'number') return { stateUpdated: false };
        this.activeState.totalBias += choiceWeight;
        this.activeState.answered += 1;
        return { stateUpdated: true };
    }
    isSolved() {
        const required = (this.puzzleData.mechanics?.scenarios || []).length || 0;
        const tolerance = this.puzzleData.mechanics?.balanceTolerance ?? 1;
        return this.activeState.answered >= required && Math.abs(this.activeState.totalBias) <= tolerance;
    }
}

// =================================================================
// SECTION 3: THE PUZZLE ENGINE (Main Class)
// =================================================================

class PuzzleEngine {
    constructor(gameStateManager, storyEngine) {
        this.gameStateManager = gameStateManager;
        this.storyEngine = storyEngine; // Used for applying effects/scene changes
        
        this.puzzleData = window.PUZZLES || {};
        this.activePuzzle = null; // Holds the currently active puzzle strategy instance

        // The Strategy Map. This is the key to the extensible architecture.
        // To add a new puzzle type, just add a new entry here.
        this.strategyMap = {
            'EnergyBalancing': EnergyBalancingStrategy,
            'RotationalAlignment': RotationalAlignmentStrategy,
            'ItemApplication': ItemApplicationStrategy,
            'PurityAlignment': ItemApplicationStrategy,
            'MultiStageCrafting': MultiStageCraftingStrategy,
            'MusicalSequence': MusicalSequenceStrategy,
            'OrreryMechanic': OrreryMechanicStrategy,
            'KleshaResolution': KleshaResolutionStrategy,
            'BalanceScaleChoice': BalanceScaleChoiceStrategy
        };
    }

    /**
     * Starts a new puzzle, creating an instance of the correct strategy.
     * This should be called by the UIController when a puzzle scene is rendered.
     * @param {string} puzzleId The ID of the puzzle from puzzles.js.
     */
    startPuzzle(puzzleId) {
        const puzzleData = this.getPuzzleById(puzzleId);
        if (!puzzleData) {
            console.error(`Puzzle with ID "${puzzleId}" not found.`);
            return;
        }

        const StrategyClass = this.strategyMap[puzzleData.mechanics.type];
        if (!StrategyClass) {
            console.error(`No strategy found for puzzle type: "${puzzleData.mechanics.type}"`);
            return;
        }

        const initialGameState = this.gameStateManager.getState();
        this.activePuzzle = new StrategyClass(puzzleData, initialGameState);
        console.log(`Puzzle started: ${puzzleId}`, this.activePuzzle.getState());
    }

    /**
     * The main entry point for all user interactions with a puzzle.
     * The UIController calls this method with data from the user's action.
     * @param {object} interactionData Describes the user's action.
     */
    handleInteraction(interactionData) {
        if (!this.activePuzzle) {
            console.warn("handleInteraction called with no active puzzle.");
            return;
        }

        // 1. Delegate the interaction to the active strategy
        const updateResult = this.activePuzzle.handleInteraction(interactionData);

        if (updateResult.stateUpdated) {
            // 2. Check if the puzzle has been solved
            if (this.activePuzzle.isSolved()) {
                this.processPuzzleSuccess();
            } else {
                // Optional: Provide feedback for non-solving moves
                if (updateResult.feedback) {
                    // e.g., UIController.showNotification(updateResult.feedback);
                }
                // Check for failure conditions when a maxAttempts is defined
                const maxAttempts = this.activePuzzle.puzzleData?.mechanics?.maxAttempts;
                if (typeof maxAttempts === 'number' && this.activePuzzle.activeState.attempts >= maxAttempts) {
                    this.processPuzzleFailure();
                }
            }
        }
    }

    /**
     * Convenience API used by UI to evaluate an attempt in one call.
     * Ensures a strategy is started, applies interaction, and returns whether solved.
     * @param {string} puzzleId
     * @param {object} interactionData
     * @returns {boolean} true if solved, false otherwise
     */
    evaluatePuzzleAttempt(puzzleId, interactionData) {
        if (!this.activePuzzle || this.activePuzzle?.puzzleData?.id !== puzzleId) {
            this.startPuzzle(puzzleId);
        }
        if (!this.activePuzzle) return false;

        // Allow bulk state updates from UI (e.g., ringRotations)
        if (interactionData && interactionData.ringRotations && this.activePuzzle.activeState?.ringRotations) {
            this.activePuzzle.activeState.ringRotations = { ...interactionData.ringRotations };
        } else {
            this.handleInteraction(interactionData || {});
        }

        if (this.activePuzzle && this.activePuzzle.isSolved()) {
            this.processPuzzleSuccess();
            return true;
        }
        return false;
    }

    /**
     * Processes the effects and state changes for a successful puzzle.
     */
    processPuzzleSuccess() {
        const puzzleData = this.activePuzzle.puzzleData;
        console.log(`Puzzle ${puzzleData.id} solved successfully!`);

        // Apply rewards
        if (puzzleData.rewards) {
            if (puzzleData.rewards.item) {
                try { this.gameStateManager.addToInventory(puzzleData.rewards.item); } catch (_) {}
            }
            if (puzzleData.rewards.ability) {
                try {
                    const prog = this.gameStateManager.playerState.progression;
                    if (prog && Array.isArray(prog.abilities) && !prog.abilities.includes(puzzleData.rewards.ability)) {
                        prog.abilities.push(puzzleData.rewards.ability);
                    }
                } catch (_) {}
            }
        }

        // Update world state to mark puzzle as completed
        this.gameStateManager.updateState(`${puzzleData.id}_completed`, true);

        // Determine success scene
        let nextSceneId = null;
        const currentScene = this.storyEngine && typeof this.storyEngine.getCurrentScene === 'function' ? this.storyEngine.getCurrentScene() : null;
        if (currentScene && currentScene.puzzle && Array.isArray(currentScene.puzzle.solutions)) {
            const sol = currentScene.puzzle.solutions.find(s => s.successScene);
            if (sol && sol.successScene) nextSceneId = sol.successScene;
        }
        if (!nextSceneId && puzzleData.nextSceneOnSuccess) {
            nextSceneId = puzzleData.nextSceneOnSuccess;
        }

        if (nextSceneId) {
            // Transition by directly setting the scene id
            this.gameStateManager.playerState.currentSceneId = nextSceneId;
        }

        this.endPuzzle();
    }

    /**
     * Processes the effects for a failed puzzle attempt.
     */
    processPuzzleFailure() {
        const puzzleData = this.activePuzzle.puzzleData;
        console.log(`Puzzle ${puzzleData.id} failed.`);

        // Apply failure effects
        const scene = this.storyEngine && typeof this.storyEngine.getCurrentScene === 'function' ? this.storyEngine.getCurrentScene() : null;
        const failureInfo = scene && scene.puzzle ? scene.puzzle.defaultFailure : null;
        if (failureInfo) {
            if (failureInfo.effects) this.storyEngine.processEffects(failureInfo.effects);
            if (failureInfo.nextScene) {
                this.gameStateManager.playerState.currentSceneId = failureInfo.nextScene;
            }
        }

        this.endPuzzle();
    }

    /**
     * Cleans up the active puzzle state.
     */
    endPuzzle() {
        this.activePuzzle = null;
    }

    /**
     * Get puzzle data by ID from the global puzzle object.
     * @param {string} puzzleId
     * @returns {object | undefined}
     */
    getPuzzleById(puzzleId) {
        return this.puzzleData[puzzleId];
    }
}

// Expose globally
if (typeof window !== 'undefined') {
    window.PuzzleEngine = PuzzleEngine;
}

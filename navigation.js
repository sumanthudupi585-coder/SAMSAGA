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

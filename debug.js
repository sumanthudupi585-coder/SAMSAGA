// Debug script to help identify issues with the character creation flow
document.addEventListener('DOMContentLoaded', () => {
    // Add a debug button to the page
    const debugButton = document.createElement('button');
    debugButton.textContent = 'Debug: Show Result Screen';
    debugButton.style.position = 'fixed';
    debugButton.style.bottom = '10px';
    debugButton.style.right = '10px';
    debugButton.style.zIndex = '9999';
    debugButton.style.padding = '10px';
    debugButton.style.backgroundColor = '#ff5722';
    debugButton.style.color = 'white';
    debugButton.style.border = 'none';
    debugButton.style.borderRadius = '5px';
    debugButton.style.cursor = 'pointer';
    
    // Add click event to show the result screen
    debugButton.addEventListener('click', () => {
        console.log('Debug: Attempting to show result screen');
        
        // Log current state
        console.log('Current question:', currentQuestion);
        console.log('User answers:', JSON.stringify(userAnswers));
        
        // Set default values if needed
        if (!userAnswers.nakshatraNum) userAnswers.nakshatraNum = 1; // Ashwini
        if (!userAnswers.pada) userAnswers.pada = 'Dharma';
        if (!userAnswers.guna3) userAnswers.guna3 = 'Sattva';
        
        // Try to show result screen
        try {
            showResult();
            console.log('Debug: showResult() called successfully');
        } catch (error) {
            console.error('Error showing result screen:', error);
            
            // Try direct screen transition
            try {
                const resultScreen = document.getElementById('result-screen');
                if (resultScreen) {
                    console.log('Debug: Found result-screen element, showing directly');
                    
                    // Hide current screen
                    const currentScreen = document.querySelector('.screen.active');
                    if (currentScreen) {
                        currentScreen.classList.remove('active');
                    }
                    
                    // Show result screen
                    resultScreen.classList.add('active');
                    currentQuestion = 'result-screen';
                } else {
                    console.error('Debug: result-screen element not found');
                }
            } catch (err) {
                console.error('Error in direct screen transition:', err);
            }
        }
    });
    
    document.body.appendChild(debugButton);
    
    // Add event listener to the fifth question options
    const q5Options = document.querySelectorAll('#q5 .option');
    q5Options.forEach(option => {
        option.addEventListener('click', (e) => {
            console.log('Debug: Q5 option clicked:', e.target);
            
            // Store the value
            const value = e.target.closest('.option').dataset.value;
            console.log('Debug: Selected value:', value);
            
            // Set the value in userAnswers
            userAnswers.guna3 = value;
            
            // Add a small delay and then try to show result
            setTimeout(() => {
                console.log('Debug: Attempting to show result after delay');
                try {
                    showResult();
                } catch (error) {
                    console.error('Error showing result after delay:', error);
                }
            }, 1000);
        });
    });
});
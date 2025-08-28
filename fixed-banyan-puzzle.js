/**
 * Fixed BanyanTreeHarmony Puzzle Implementation
 * Focuses on intuitive physics, clear visual communication, and natural interactions
 */

class FixedBanyanTreeHarmony {
    constructor(container, gameStateManager, onSolved) {
        this.container = container;
        this.gameStateManager = gameStateManager;
        this.onSolved = onSolved;
        
        // Simplified puzzle state
        this.rings = {
            vitality: { 
                angle: 30, 
                target: 0, 
                color: '#d96c47', 
                name: 'Vitality',
                radius: 140, // Distance from center
                size: 280    // Total ring size
            },
            wisdom: { 
                angle: 70, 
                target: 0, 
                color: '#63b4d1', 
                name: 'Wisdom',
                radius: 120,
                size: 240
            },
            harmony: { 
                angle: 20, 
                target: 0, 
                color: '#5c527f', 
                name: 'Harmony',
                radius: 100,
                size: 200
            }
        };
        
        // Interaction state
        this.isDragging = false;
        this.currentRing = null;
        this.dragStartAngle = 0;
        this.snapIncrement = 15; // Snap every 15 degrees
        this.tolerance = 10; // Alignment tolerance
        
        // Visual feedback
        this.showingHints = false;
        this.attempts = 0;
        
        this.init();
    }
    
    init() {
        this.createPuzzleHTML();
        this.setupEventListeners();
        this.loadSavedState();
        this.updateAllVisuals();
        this.showInitialInstructions();
    }
    
    createPuzzleHTML() {
        this.container.innerHTML = `
            <div class="fixed-banyan-puzzle">
                <!-- Instructions Panel -->
                <div class="puzzle-instructions" id="instructions-panel">
                    <div class="instruction-text">
                        <span class="instruction-icon">🎯</span>
                        <strong>Rotate the rings to align all symbols at the top</strong>
                    </div>
                    <div class="instruction-hint">Click and drag the handles around each ring</div>
                </div>
                
                <!-- Main Puzzle Area -->
                <div class="puzzle-mandala" id="puzzle-mandala">
                    <!-- Central Tree -->
                    <div class="puzzle-center">
                        <div class="center-symbol">🌳</div>
                        <div class="center-text">Sacred<br>Banyan</div>
                    </div>
                    
                    <!-- Alignment Target Line -->
                    <div class="alignment-target"></div>
                    
                    <!-- Energy Rings with Clear Handles -->
                    <div class="energy-ring" 
                         data-ring="vitality" 
                         style="width: 280px; height: 280px; top: 60px; left: 60px;">
                        <div class="ring-track"></div>
                        <div class="ring-handle" data-ring="vitality">
                            <div class="handle-grip">
                                <span class="handle-icon">🔥</span>
                                <span class="handle-label">Vitality</span>
                            </div>
                        </div>
                        <div class="ring-progress-indicator"></div>
                    </div>
                    
                    <div class="energy-ring" 
                         data-ring="wisdom" 
                         style="width: 240px; height: 240px; top: 80px; left: 80px;">
                        <div class="ring-track"></div>
                        <div class="ring-handle" data-ring="wisdom">
                            <div class="handle-grip">
                                <span class="handle-icon">💧</span>
                                <span class="handle-label">Wisdom</span>
                            </div>
                        </div>
                        <div class="ring-progress-indicator"></div>
                    </div>
                    
                    <div class="energy-ring" 
                         data-ring="harmony" 
                         style="width: 200px; height: 200px; top: 100px; left: 100px;">
                        <div class="ring-track"></div>
                        <div class="ring-handle" data-ring="harmony">
                            <div class="handle-grip">
                                <span class="handle-icon">🌿</span>
                                <span class="handle-label">Harmony</span>
                            </div>
                        </div>
                        <div class="ring-progress-indicator"></div>
                    </div>
                    
                    <!-- Success Overlay -->
                    <div class="success-overlay" id="success-overlay">
                        <div class="success-content">
                            <div class="success-icon">✨</div>
                            <div class="success-text">Perfect Harmony Achieved!</div>
                        </div>
                    </div>
                </div>
                
                <!-- Progress Panel -->
                <div class="progress-panel">
                    <div class="progress-title">Alignment Progress</div>
                    <div class="progress-rings">
                        <div class="progress-item" data-ring="vitality">
                            <div class="progress-label">
                                <span class="progress-icon">🔥</span>
                                <span>Vitality</span>
                            </div>
                            <div class="progress-value" id="vitality-progress">30°</div>
                            <div class="progress-status" id="vitality-status">❌</div>
                        </div>
                        <div class="progress-item" data-ring="wisdom">
                            <div class="progress-label">
                                <span class="progress-icon">💧</span>
                                <span>Wisdom</span>
                            </div>
                            <div class="progress-value" id="wisdom-progress">70°</div>
                            <div class="progress-status" id="wisdom-status">❌</div>
                        </div>
                        <div class="progress-item" data-ring="harmony">
                            <div class="progress-label">
                                <span class="progress-icon">🌿</span>
                                <span>Harmony</span>
                            </div>
                            <div class="progress-value" id="harmony-progress">20°</div>
                            <div class="progress-status" id="harmony-status">❌</div>
                        </div>
                    </div>
                    
                    <!-- Overall Progress Bar -->
                    <div class="overall-progress">
                        <div class="overall-progress-label">Overall Harmony</div>
                        <div class="overall-progress-bar">
                            <div class="overall-progress-fill" id="overall-progress-fill"></div>
                        </div>
                        <div class="overall-progress-text" id="overall-progress-text">0%</div>
                    </div>
                </div>
                
                <!-- Control Panel -->
                <div class="control-panel">
                    <button class="control-btn primary" id="check-btn">
                        <span class="btn-icon">✓</span>
                        Check Alignment
                    </button>
                    <button class="control-btn secondary" id="reset-btn">
                        <span class="btn-icon">↻</span>
                        Reset
                    </button>
                    <button class="control-btn secondary" id="hint-btn">
                        <span class="btn-icon">💡</span>
                        Show Hints
                    </button>
                </div>
                
                <!-- Hint Panel -->
                <div class="hint-panel" id="hint-panel">
                    <div class="hint-content">
                        <div class="hint-title">💡 Helpful Hints</div>
                        <ul class="hint-list">
                            <li>🎯 Drag the colored handles around each ring</li>
                            <li>📐 Rings snap to 15-degree increments for precision</li>
                            <li>🎨 Watch the progress indicators change color when close</li>
                            <li>🎵 Listen for audio feedback with each movement</li>
                            <li>⌨️ Use keyboard: 1/2/3 to select rings, ←/→ to rotate</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        this.updateAllVisuals();
    }
    
    setupEventListeners() {
        // Handle drag interactions - only on handles, not entire rings
        const handles = this.container.querySelectorAll('.ring-handle');
        handles.forEach(handle => {
            handle.addEventListener('mousedown', this.startDrag.bind(this));
            handle.addEventListener('touchstart', this.startDrag.bind(this), { passive: false });
        });
        
        // Global drag handlers
        document.addEventListener('mousemove', this.handleDrag.bind(this));
        document.addEventListener('mouseup', this.endDrag.bind(this));
        document.addEventListener('touchmove', this.handleDrag.bind(this), { passive: false });
        document.addEventListener('touchend', this.endDrag.bind(this));
        
        // Button controls
        this.container.querySelector('#check-btn').addEventListener('click', this.checkAlignment.bind(this));
        this.container.querySelector('#reset-btn').addEventListener('click', this.resetPuzzle.bind(this));
        this.container.querySelector('#hint-btn').addEventListener('click', this.toggleHints.bind(this));
        
        // Keyboard support
        document.addEventListener('keydown', this.handleKeyboard.bind(this));
        
        // Ring selection (clicking on ring selects it for keyboard control)
        const rings = this.container.querySelectorAll('.energy-ring');
        rings.forEach(ring => {
            ring.addEventListener('click', (e) => {
                if (!this.isDragging) {
                    this.selectRing(ring.dataset.ring);
                }
            });
        });
    }
    
    startDrag(event) {
        event.preventDefault();
        event.stopPropagation();
        
        const handle = event.currentTarget;
        const ringName = handle.dataset.ring;
        
        if (!ringName) return;
        
        this.isDragging = true;
        this.currentRing = ringName;
        this.dragStartAngle = this.rings[ringName].angle;
        
        // Visual feedback
        handle.classList.add('dragging');
        this.container.querySelector(`[data-ring="${ringName}"]`).classList.add('active');
        
        // Audio feedback
        this.playInteractionSound('grab');
        
        // Calculate initial mouse angle
        const ring = this.container.querySelector(`.energy-ring[data-ring="${ringName}"]`);
        const rect = ring.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        
        this.initialMouseAngle = Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI;
        this.initialRingAngle = this.rings[ringName].angle;
        
        // Show drag instructions
        this.showDragInstructions(ringName);
    }
    
    handleDrag(event) {
        if (!this.isDragging || !this.currentRing) return;
        
        event.preventDefault();
        
        const ring = this.container.querySelector(`.energy-ring[data-ring="${this.currentRing}"]`);
        const rect = ring.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        
        const currentMouseAngle = Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI;
        const deltaAngle = currentMouseAngle - this.initialMouseAngle;
        
        let newAngle = this.initialRingAngle + deltaAngle;
        
        // Normalize angle to 0-360 range
        newAngle = ((newAngle % 360) + 360) % 360;
        
        // Apply snap-to-grid for better UX
        const snappedAngle = Math.round(newAngle / this.snapIncrement) * this.snapIncrement;
        
        // Only update if angle actually changed (reduces unnecessary updates)
        if (snappedAngle !== this.rings[this.currentRing].angle) {
            this.rings[this.currentRing].angle = snappedAngle;
            this.updateRingVisual(this.currentRing);
            this.updateProgress();
            this.playInteractionSound('rotate');
        }
    }
    
    endDrag() {
        if (this.isDragging && this.currentRing) {
            // Remove visual feedback
            const handle = this.container.querySelector(`.ring-handle[data-ring="${this.currentRing}"]`);
            const ring = this.container.querySelector(`.energy-ring[data-ring="${this.currentRing}"]`);
            
            handle.classList.remove('dragging');
            ring.classList.remove('active');
            
            // Audio feedback
            this.playInteractionSound('release');
            
            // Save state and check progress
            this.saveState();
            this.attempts++;
            this.checkForAutoSolution();
            
            // Hide drag instructions
            this.hideDragInstructions();
        }
        
        this.isDragging = false;
        this.currentRing = null;
    }
    
    handleKeyboard(event) {
        // Ring selection
        if (event.key >= '1' && event.key <= '3') {
            const ringNames = ['vitality', 'wisdom', 'harmony'];
            this.selectRing(ringNames[parseInt(event.key) - 1]);
            event.preventDefault();
            return;
        }
        
        // Ring rotation
        if (this.currentRing) {
            let increment = 0;
            switch(event.key) {
                case 'ArrowLeft':
                    increment = -this.snapIncrement;
                    break;
                case 'ArrowRight':
                    increment = this.snapIncrement;
                    break;
                case 'ArrowUp':
                    increment = -this.snapIncrement;
                    break;
                case 'ArrowDown':
                    increment = this.snapIncrement;
                    break;
            }
            
            if (increment !== 0) {
                this.rotateRing(this.currentRing, increment);
                event.preventDefault();
            }
        }
        
        // Other controls
        switch(event.key) {
            case ' ':
            case 'Enter':
                this.checkAlignment();
                event.preventDefault();
                break;
            case 'r':
            case 'R':
                this.resetPuzzle();
                event.preventDefault();
                break;
            case 'h':
            case 'H':
                this.toggleHints();
                event.preventDefault();
                break;
        }
    }
    
    selectRing(ringName) {
        // Clear previous selection
        this.container.querySelectorAll('.energy-ring').forEach(ring => {
            ring.classList.remove('selected');
        });
        
        // Select new ring
        this.currentRing = ringName;
        const ring = this.container.querySelector(`.energy-ring[data-ring="${ringName}"]`);
        ring.classList.add('selected');
        
        // Audio feedback
        this.playInteractionSound('select');
        
        // Show selection instructions
        this.showSelectionInstructions(ringName);
    }
    
    rotateRing(ringName, degrees) {
        let newAngle = this.rings[ringName].angle + degrees;
        newAngle = ((newAngle % 360) + 360) % 360;
        
        this.rings[ringName].angle = newAngle;
        this.updateRingVisual(ringName);
        this.updateProgress();
        this.playInteractionSound('rotate');
        this.saveState();
        this.checkForAutoSolution();
    }
    
    updateRingVisual(ringName) {
        const ring = this.rings[ringName];
        const handle = this.container.querySelector(`.ring-handle[data-ring="${ringName}"]`);
        const progressIndicator = this.container.querySelector(`[data-ring="${ringName}"] .ring-progress-indicator`);
        
        // Update handle position
        handle.style.transform = `rotate(${ring.angle}deg) translateY(-50%)`;
        
        // Update progress indicator based on alignment
        const isAligned = this.isRingAligned(ringName);
        const distanceFromTarget = Math.abs(ring.angle - ring.target);
        const circularDistance = Math.min(distanceFromTarget, 360 - distanceFromTarget);
        
        if (isAligned) {
            progressIndicator.className = 'ring-progress-indicator aligned';
        } else if (circularDistance <= this.tolerance * 2) {
            progressIndicator.className = 'ring-progress-indicator close';
        } else {
            progressIndicator.className = 'ring-progress-indicator';
        }
    }
    
    updateProgress() {
        Object.keys(this.rings).forEach(ringName => {
            const progressValue = this.container.querySelector(`#${ringName}-progress`);
            const progressStatus = this.container.querySelector(`#${ringName}-status`);
            
            progressValue.textContent = `${Math.round(this.rings[ringName].angle)}°`;
            
            const isAligned = this.isRingAligned(ringName);
            progressStatus.textContent = isAligned ? '✅' : '❌';
            progressStatus.className = `progress-status ${isAligned ? 'aligned' : 'misaligned'}`;
        });
        
        // Update overall progress
        const overallAlignment = this.calculateOverallAlignment();
        const progressFill = this.container.querySelector('#overall-progress-fill');
        const progressText = this.container.querySelector('#overall-progress-text');
        
        progressFill.style.width = `${overallAlignment}%`;
        progressText.textContent = `${Math.round(overallAlignment)}%`;
        
        if (overallAlignment >= 95) {
            progressFill.className = 'overall-progress-fill perfect';
        } else if (overallAlignment >= 70) {
            progressFill.className = 'overall-progress-fill good';
        } else {
            progressFill.className = 'overall-progress-fill';
        }
    }
    
    updateAllVisuals() {
        Object.keys(this.rings).forEach(ringName => {
            this.updateRingVisual(ringName);
        });
        this.updateProgress();
    }
    
    isRingAligned(ringName) {
        const ring = this.rings[ringName];
        const diff = Math.abs(ring.angle - ring.target);
        const circularDiff = Math.min(diff, 360 - diff);
        return circularDiff <= this.tolerance;
    }
    
    calculateOverallAlignment() {
        let totalAlignment = 0;
        const ringCount = Object.keys(this.rings).length;
        
        Object.keys(this.rings).forEach(ringName => {
            const ring = this.rings[ringName];
            const diff = Math.abs(ring.angle - ring.target);
            const circularDiff = Math.min(diff, 360 - diff);
            const alignment = Math.max(0, 100 - (circularDiff / 180) * 100);
            totalAlignment += alignment;
        });
        
        return totalAlignment / ringCount;
    }
    
    checkForAutoSolution() {
        const allAligned = Object.keys(this.rings).every(ringName => this.isRingAligned(ringName));
        
        if (allAligned) {
            this.triggerSuccess();
        }
    }
    
    checkAlignment() {
        const allAligned = Object.keys(this.rings).every(ringName => this.isRingAligned(ringName));
        
        if (allAligned) {
            this.triggerSuccess();
        } else {
            // Provide helpful feedback
            const overallAlignment = this.calculateOverallAlignment();
            let message;
            
            if (overallAlignment >= 80) {
                message = "Very close! Fine-tune the alignment.";
            } else if (overallAlignment >= 60) {
                message = "Good progress! Keep adjusting.";
            } else {
                message = "Keep trying! Watch the progress indicators.";
            }
            
            this.showFeedback(message, 'info');
            this.playInteractionSound('feedback');
        }
    }
    
    triggerSuccess() {
        // Show success animation
        const successOverlay = this.container.querySelector('#success-overlay');
        successOverlay.classList.add('active');
        
        // Play success sound
        this.playInteractionSound('success');
        
        // Update game state
        if (this.gameStateManager) {
            this.gameStateManager.updateState('banyan_balanced', true);
        }
        
        // Trigger completion after animation
        setTimeout(() => {
            if (this.onSolved) {
                this.onSolved();
            }
        }, 2000);
    }
    
    resetPuzzle() {
        // Reset to initial positions
        this.rings.vitality.angle = 30;
        this.rings.wisdom.angle = 70;
        this.rings.harmony.angle = 20;
        
        this.updateAllVisuals();
        this.attempts = 0;
        this.currentRing = null;
        
        // Clear selections
        this.container.querySelectorAll('.energy-ring').forEach(ring => {
            ring.classList.remove('selected', 'active');
        });
        
        this.showFeedback("Puzzle reset to starting position", 'info');
        this.playInteractionSound('reset');
        this.saveState();
    }
    
    toggleHints() {
        const hintPanel = this.container.querySelector('#hint-panel');
        this.showingHints = !this.showingHints;
        hintPanel.classList.toggle('visible', this.showingHints);
        
        const hintBtn = this.container.querySelector('#hint-btn');
        hintBtn.classList.toggle('active', this.showingHints);
    }
    
    showInitialInstructions() {
        setTimeout(() => {
            this.showFeedback("Click and drag the colored handles to rotate the rings!", 'instruction');
        }, 1000);
    }
    
    showDragInstructions(ringName) {
        const ring = this.rings[ringName];
        this.showFeedback(`Rotating ${ring.name} ring. Release to set position.`, 'instruction');
    }
    
    hideDragInstructions() {
        // Instructions will auto-hide
    }
    
    showSelectionInstructions(ringName) {
        const ring = this.rings[ringName];
        this.showFeedback(`${ring.name} ring selected. Use arrow keys to rotate.`, 'instruction');
    }
    
    showFeedback(message, type = 'info') {
        // Remove existing feedback
        const existingFeedback = this.container.querySelector('.feedback-message');
        if (existingFeedback) {
            existingFeedback.remove();
        }
        
        // Create new feedback
        const feedback = document.createElement('div');
        feedback.className = `feedback-message ${type}`;
        feedback.textContent = message;
        
        const instructionsPanel = this.container.querySelector('#instructions-panel');
        instructionsPanel.appendChild(feedback);
        
        // Auto-remove after delay
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }
    
    playInteractionSound(type) {
        // Simple audio feedback using Web Audio API
        if (typeof AudioContext === 'undefined' && typeof webkitAudioContext === 'undefined') {
            return; // No audio support
        }
        
        try {
            const AudioCtx = AudioContext || webkitAudioContext;
            const audioCtx = new AudioCtx();
            
            const frequencies = {
                grab: 440,
                rotate: 523,
                release: 349,
                select: 294,
                feedback: 392,
                success: [261, 329, 392], // C major chord
                reset: 220
            };
            
            const freq = frequencies[type];
            
            if (Array.isArray(freq)) {
                // Play chord for success
                freq.forEach((f, index) => {
                    setTimeout(() => {
                        this.playTone(audioCtx, f, 0.1, 0.5);
                    }, index * 100);
                });
            } else {
                this.playTone(audioCtx, freq, 0.05, 0.2);
            }
        } catch (e) {
            // Ignore audio errors
        }
    }
    
    playTone(audioCtx, frequency, volume, duration) {
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + duration);
    }
    
    saveState() {
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.banyan_puzzle_state = {
                rings: { ...this.rings },
                attempts: this.attempts
            };
        }
    }
    
    loadSavedState() {
        if (this.gameStateManager && this.gameStateManager.worldState && this.gameStateManager.worldState.banyan_puzzle_state) {
            const state = this.gameStateManager.worldState.banyan_puzzle_state;
            
            if (state.rings) {
                Object.keys(state.rings).forEach(ringName => {
                    if (this.rings[ringName] && typeof state.rings[ringName].angle === 'number') {
                        this.rings[ringName].angle = state.rings[ringName].angle;
                    }
                });
            }
            
            if (typeof state.attempts === 'number') {
                this.attempts = state.attempts;
            }
        }
    }
    
    destroy() {
        // Clean up event listeners
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.endDrag);
        document.removeEventListener('touchmove', this.handleDrag);
        document.removeEventListener('touchend', this.endDrag);
        document.removeEventListener('keydown', this.handleKeyboard);
    }
}

// Export for use in the main game
window.FixedBanyanTreeHarmony = FixedBanyanTreeHarmony;

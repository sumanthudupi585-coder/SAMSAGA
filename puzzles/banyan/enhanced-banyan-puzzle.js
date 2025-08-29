/**
 * Enhanced BanyanTreeHarmony Puzzle Implementation
 * A complete interactive redesign with intuitive controls and stunning visuals
 */

class EnhancedBanyanTreeHarmony {
    constructor(container, gameStateManager, onSolved) {
        this.container = container;
        this.gameStateManager = gameStateManager;
        this.onSolved = onSolved;
        
        // Puzzle state
        this.rings = {
            vitality: { angle: 30, target: 0, color: '#d96c47', symbol: '🔥', name: 'Vitality' },
            wisdom: { angle: 70, target: 0, color: '#63b4d1', symbol: '💧', name: 'Wisdom' },
            harmony: { angle: 20, target: 0, color: '#5c527f', symbol: '🌿', name: 'Harmony' }
        };
        
        // Interaction state
        this.isDragging = false;
        this.currentRing = null;
        this.startAngle = 0;
        this.startMouseAngle = 0;
        
        // Progress tracking
        this.hintsRevealed = 0;
        this.attempts = 0;
        this.tolerance = 5; // degrees
        this.meditationMode = false;
        
        // Animation and effects
        this.particles = [];
        this.animationFrame = null;
        
        this.init();
    }
    
    init() {
        this.createPuzzleHTML();
        this.setupEventListeners();
        this.loadSavedState();
        this.startAnimationLoop();
        this.revealInitialHints();
    }
    
    createPuzzleHTML() {
        this.container.innerHTML = `
            <div class="banyan-harmony-puzzle">
                <div class="banyan-sacred-ground"></div>
                
                <div class="banyan-mandala-container" id="mandala-container">
                    <!-- Central Banyan Tree -->
                    <div class="banyan-tree-center">
                        <svg class="banyan-tree-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="treeGradient" cx="50%" cy="50%">
                                    <stop offset="0%" style="stop-color:#e09658;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#a97142;stop-opacity:0.8" />
                                </radialGradient>
                                <filter id="treeGlow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                    <feMerge> 
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            
                            <!-- Banyan Tree Trunk -->
                            <path d="M45,85 Q50,80 55,85 L60,90 Q50,95 40,90 Z" 
                                  fill="url(#treeGradient)" filter="url(#treeGlow)"/>
                            
                            <!-- Main Canopy -->
                            <circle cx="50" cy="45" r="25" fill="url(#treeGradient)" filter="url(#treeGlow)" opacity="0.9"/>
                            
                            <!-- Aerial Roots -->
                            <path d="M30,60 Q35,50 35,40 M70,60 Q65,50 65,40 M50,70 Q50,60 50,50" 
                                  stroke="url(#treeGradient)" stroke-width="2" fill="none" filter="url(#treeGlow)"/>
                            
                            <!-- Sacred Symbol at Center -->
                            <circle cx="50" cy="45" r="8" fill="#ffc58f" filter="url(#treeGlow)"/>
                            <path d="M46,41 L54,41 M46,49 L54,49 M50,37 L50,53" 
                                  stroke="#0a0908" stroke-width="1.5"/>
                        </svg>
                    </div>
                    
                    <!-- Energy Rings -->
                    <div class="energy-ring vitality-ring" data-ring="vitality">
                        <div class="ring-symbol"></div>
                    </div>
                    <div class="energy-ring wisdom-ring" data-ring="wisdom">
                        <div class="ring-symbol"></div>
                    </div>
                    <div class="energy-ring harmony-ring" data-ring="harmony">
                        <div class="ring-symbol"></div>
                    </div>
                    
                    <!-- Alignment Indicators -->
                    <div class="alignment-indicators">
                        <div class="alignment-marker" id="alignment-marker"></div>
                    </div>
                    
                    <!-- Particle Container -->
                    <div class="harmony-particles" id="particle-container"></div>
                    
                    <!-- Meditation Overlay -->
                    <div class="meditation-overlay" id="meditation-overlay">
                        <div class="meditation-text" id="meditation-text"></div>
                    </div>
                    
                    <!-- Success Animation -->
                    <div class="harmony-success" id="success-animation">
                        <div class="success-mandala">
                            <div class="success-symbol">🕉️</div>
                        </div>
                    </div>
                </div>
                
                <!-- Progress Display -->
                <div class="harmony-progress">
                    <div class="progress-rings">
                        <div class="progress-ring vitality-progress">
                            <div class="progress-label">Vitality</div>
                            <div class="progress-value" style="--ring-color: #d96c47" id="vitality-value">30°</div>
                        </div>
                        <div class="progress-ring wisdom-progress">
                            <div class="progress-label">Wisdom</div>
                            <div class="progress-value" style="--ring-color: #63b4d1" id="wisdom-value">70°</div>
                        </div>
                        <div class="progress-ring harmony-progress">
                            <div class="progress-label">Harmony</div>
                            <div class="progress-value" style="--ring-color: #5c527f" id="harmony-value">20°</div>
                        </div>
                    </div>
                    
                    <div class="harmony-meter">
                        <div class="harmony-fill" id="harmony-fill"></div>
                    </div>
                </div>
                
                <!-- Hint System -->
                <div class="banyan-hints" id="hint-container">
                    <!-- Hints will be populated dynamically -->
                </div>
                
                <!-- Action Controls -->
                <div class="harmony-controls">
                    <button class="harmony-action" id="meditate-btn">
                        <i class="fas fa-lotus"></i> Meditate
                    </button>
                    <button class="harmony-action" id="reset-btn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                    <button class="harmony-action" id="check-alignment-btn">
                        <i class="fas fa-check-circle"></i> Check Alignment
                    </button>
                </div>
            </div>
        `;
        
        // Apply initial ring rotations
        this.updateRingVisuals();
        this.updateProgress();
    }
    
    setupEventListeners() {
        // Ring interaction
        const rings = this.container.querySelectorAll('.energy-ring');
        rings.forEach(ring => {
            ring.addEventListener('mousedown', this.startDrag.bind(this));
            ring.addEventListener('touchstart', this.startDrag.bind(this), { passive: false });
        });
        
        // Global mouse/touch events
        document.addEventListener('mousemove', this.handleDrag.bind(this));
        document.addEventListener('mouseup', this.endDrag.bind(this));
        document.addEventListener('touchmove', this.handleDrag.bind(this), { passive: false });
        document.addEventListener('touchend', this.endDrag.bind(this));
        
        // Action buttons
        const meditateBtn = this.container.querySelector('#meditate-btn');
        const resetBtn = this.container.querySelector('#reset-btn');
        const checkBtn = this.container.querySelector('#check-alignment-btn');
        
        meditateBtn.addEventListener('click', this.enterMeditationMode.bind(this));
        resetBtn.addEventListener('click', this.resetPuzzle.bind(this));
        checkBtn.addEventListener('click', this.checkAlignment.bind(this));
        
        // Keyboard support
        document.addEventListener('keydown', this.handleKeyboard.bind(this));
    }
    
    startDrag(event) {
        event.preventDefault();
        const ring = event.currentTarget;
        const ringName = ring.dataset.ring;
        
        if (!ringName || this.meditationMode) return;
        
        this.isDragging = true;
        this.currentRing = ringName;
        this.startAngle = this.rings[ringName].angle;
        
        const rect = ring.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        
        this.startMouseAngle = Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI;
        
        ring.style.cursor = 'grabbing';
        this.playRingSound(ringName);
    }
    
    handleDrag(event) {
        if (!this.isDragging || !this.currentRing) return;
        
        event.preventDefault();
        const ring = this.container.querySelector(`[data-ring="${this.currentRing}"]`);
        const rect = ring.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        
        const currentMouseAngle = Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI;
        const deltaAngle = currentMouseAngle - this.startMouseAngle;
        
        let newAngle = (this.startAngle + deltaAngle) % 360;
        if (newAngle < 0) newAngle += 360;
        
        this.rings[this.currentRing].angle = newAngle;
        this.updateRingVisuals();
        this.updateProgress();
        this.checkForAlignment();
    }
    
    endDrag() {
        if (this.isDragging && this.currentRing) {
            const ring = this.container.querySelector(`[data-ring="${this.currentRing}"]`);
            ring.style.cursor = 'grab';
            
            this.saveState();
            this.attempts++;
            this.checkForHints();
        }
        
        this.isDragging = false;
        this.currentRing = null;
    }
    
    handleKeyboard(event) {
        if (this.meditationMode) return;
        
        const selectedRing = this.currentRing || 'vitality';
        const increment = event.shiftKey ? 1 : 5;
        
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                this.rotateRing(selectedRing, -increment);
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.rotateRing(selectedRing, increment);
                break;
            case '1':
                this.currentRing = 'vitality';
                break;
            case '2':
                this.currentRing = 'wisdom';
                break;
            case '3':
                this.currentRing = 'harmony';
                break;
            case ' ':
                event.preventDefault();
                this.checkAlignment();
                break;
            case 'r':
                this.resetPuzzle();
                break;
            case 'm':
                this.enterMeditationMode();
                break;
        }
    }
    
    rotateRing(ringName, degrees) {
        this.rings[ringName].angle = (this.rings[ringName].angle + degrees) % 360;
        if (this.rings[ringName].angle < 0) this.rings[ringName].angle += 360;
        
        this.updateRingVisuals();
        this.updateProgress();
        this.checkForAlignment();
        this.playRingSound(ringName);
        this.saveState();
    }
    
    updateRingVisuals() {
        Object.keys(this.rings).forEach(ringName => {
            const ring = this.container.querySelector(`[data-ring="${ringName}"]`);
            const angle = this.rings[ringName].angle;
            
            ring.style.setProperty('--rotation', `${angle}deg`);
            ring.style.transform = `rotate(${angle}deg)`;
        });
    }
    
    updateProgress() {
        Object.keys(this.rings).forEach(ringName => {
            const valueEl = this.container.querySelector(`#${ringName}-value`);
            const angle = Math.round(this.rings[ringName].angle);
            valueEl.textContent = `${angle}°`;
            
            // Check if aligned
            const isAligned = this.isRingAligned(ringName);
            valueEl.classList.toggle('aligned', isAligned);
        });
        
        // Update harmony meter
        const overallAlignment = this.calculateOverallAlignment();
        const harmonyFill = this.container.querySelector('#harmony-fill');
        harmonyFill.style.width = `${overallAlignment}%`;
        harmonyFill.classList.toggle('perfect', overallAlignment >= 95);
    }
    
    isRingAligned(ringName) {
        const ring = this.rings[ringName];
        const diff = Math.abs(ring.angle - ring.target);
        return Math.min(diff, 360 - diff) <= this.tolerance;
    }
    
    calculateOverallAlignment() {
        let totalAlignment = 0;
        
        Object.keys(this.rings).forEach(ringName => {
            const ring = this.rings[ringName];
            const diff = Math.abs(ring.angle - ring.target);
            const circularDiff = Math.min(diff, 360 - diff);
            const alignment = Math.max(0, 100 - (circularDiff / 180) * 100);
            totalAlignment += alignment;
        });
        
        return totalAlignment / Object.keys(this.rings).length;
    }
    
    checkForAlignment() {
        const allAligned = Object.keys(this.rings).every(ringName => this.isRingAligned(ringName));
        
        if (allAligned) {
            this.triggerSuccess();
        } else {
            // Create alignment particles for close alignments
            Object.keys(this.rings).forEach(ringName => {
                if (this.isRingAligned(ringName)) {
                    this.createAlignmentParticles(ringName);
                }
            });
        }
        
        // Update alignment marker
        const marker = this.container.querySelector('#alignment-marker');
        marker.classList.toggle('active', allAligned);
    }
    
    checkForHints() {
        // Progressive hint revelation based on attempts
        if (this.attempts >= 3 && this.hintsRevealed < 1) {
            this.revealHint('observation');
        } else if (this.attempts >= 6 && this.hintsRevealed < 2) {
            this.revealHint('meditation');
        } else if (this.attempts >= 10 && this.hintsRevealed < 3) {
            this.revealHint('unity');
        }
    }
    
    revealInitialHints() {
        this.revealHint('welcome');
    }
    
    revealHint(hintType) {
        const hints = {
            welcome: {
                icon: '🙏',
                text: 'Welcome, seeker. The three rings represent the fundamental energies of existence. Align them to restore harmony to the sacred Banyan.'
            },
            observation: {
                icon: '👁️',
                text: 'Observe how each ring moves in its own rhythm. True harmony comes not from force, but from understanding the natural flow.'
            },
            meditation: {
                icon: '🧘',
                text: 'Enter meditation to feel the subtle vibrations. When the rings sing in unison, you will know alignment is near.'
            },
            unity: {
                icon: '☯️',
                text: 'All paths lead to the same center. The separation between rings is an illusion - they are one energy expressing in three forms.'
            }
        };
        
        const hint = hints[hintType];
        if (!hint) return;
        
        const hintContainer = this.container.querySelector('#hint-container');
        const hintElement = document.createElement('div');
        hintElement.className = 'hint-item';
        hintElement.innerHTML = `
            <div class="hint-icon">${hint.icon}</div>
            <div class="hint-text">${hint.text}</div>
        `;
        
        hintContainer.appendChild(hintElement);
        hintContainer.classList.add('revealed');
        
        // Animate in
        setTimeout(() => {
            hintElement.style.opacity = '0';
            hintElement.style.transform = 'translateY(20px)';
            hintElement.style.transition = 'all 0.5s ease';
            
            requestAnimationFrame(() => {
                hintElement.style.opacity = '1';
                hintElement.style.transform = 'translateY(0)';
            });
        }, 100);
        
        this.hintsRevealed++;
    }
    
    enterMeditationMode() {
        this.meditationMode = true;
        const overlay = this.container.querySelector('#meditation-overlay');
        const text = this.container.querySelector('#meditation-text');
        
        const meditationTexts = [
            "Breathe deeply and feel the energy flowing through the rings...",
            "Listen to the subtle harmony that underlies all apparent discord...",
            "Notice how your intention affects the movement of the energies...",
            "Rest in the awareness that observes all three rings as one..."
        ];
        
        const randomText = meditationTexts[Math.floor(Math.random() * meditationTexts.length)];
        text.textContent = randomText;
        overlay.classList.add('active');
        
        // Auto-exit after meditation period
        setTimeout(() => {
            this.exitMeditationMode();
        }, 5000);
        
        // Create meditation particles
        this.createMeditationParticles();
    }
    
    exitMeditationMode() {
        this.meditationMode = false;
        const overlay = this.container.querySelector('#meditation-overlay');
        overlay.classList.remove('active');
        
        // Provide subtle guidance after meditation
        this.provideGuidance();
    }
    
    provideGuidance() {
        // Subtle visual hints about optimal directions
        Object.keys(this.rings).forEach(ringName => {
            const ring = this.rings[ringName];
            const current = ring.angle;
            const target = ring.target;
            
            let diff = target - current;
            if (diff > 180) diff -= 360;
            if (diff < -180) diff += 360;
            
            // Create subtle particles showing direction
            if (Math.abs(diff) > this.tolerance) {
                this.createDirectionalHint(ringName, diff > 0);
            }
        });
    }
    
    resetPuzzle() {
        // Reset to initial positions with animation
        this.rings.vitality.angle = 30;
        this.rings.wisdom.angle = 70;
        this.rings.harmony.angle = 20;
        
        this.updateRingVisuals();
        this.updateProgress();
        this.attempts = 0;
        
        // Clear hints except welcome
        const hintContainer = this.container.querySelector('#hint-container');
        hintContainer.innerHTML = '';
        this.hintsRevealed = 0;
        this.revealInitialHints();
        
        this.saveState();
    }
    
    checkAlignment() {
        const allAligned = Object.keys(this.rings).every(ringName => this.isRingAligned(ringName));
        
        if (allAligned) {
            this.triggerSuccess();
        } else {
            // Provide feedback about current state
            const overallAlignment = this.calculateOverallAlignment();
            let feedback;
            
            if (overallAlignment >= 80) {
                feedback = "Very close! Fine-tune the alignment - feel the subtle vibrations.";
            } else if (overallAlignment >= 60) {
                feedback = "Good progress. Trust your intuition to guide the final adjustments.";
            } else if (overallAlignment >= 40) {
                feedback = "You're on the right path. Consider how the energies want to flow together.";
            } else {
                feedback = "The energies are still in discord. Step back and observe their natural patterns.";
            }
            
            this.showFeedback(feedback);
        }
    }
    
    triggerSuccess() {
        // Stop all interactions
        this.isDragging = false;
        this.currentRing = null;
        
        // Show success animation
        const successAnimation = this.container.querySelector('#success-animation');
        successAnimation.classList.add('active');
        
        // Create victory particles
        this.createVictoryParticles();
        
        // Play success sound
        this.playSuccessSound();
        
        // Update game state
        this.gameStateManager.updateState('banyan_balanced', true);
        this.saveState();
        
        // Trigger completion after animation
        setTimeout(() => {
            if (this.onSolved) {
                this.onSolved();
            }
        }, 3000);
    }
    
    showFeedback(message) {
        // Create temporary feedback display
        const feedback = document.createElement('div');
        feedback.className = 'harmony-feedback';
        feedback.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(26, 24, 23, 0.9);
            color: #ffc58f;
            padding: 1rem 2rem;
            border-radius: 8px;
            border: 1px solid #e09658;
            text-align: center;
            z-index: 1000;
            animation: fadeInOut 3s ease-in-out;
        `;
        feedback.textContent = message;
        
        this.container.querySelector('.banyan-mandala-container').appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }
    
    // Particle and Effect Systems
    createAlignmentParticles(ringName) {
        const ring = this.rings[ringName];
        const color = ring.color;
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createParticle(color, 'alignment');
            }, i * 100);
        }
    }
    
    createMeditationParticles() {
        const colors = ['#ffc58f', '#e09658', '#d96c47', '#63b4d1', '#5c527f'];
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const color = colors[Math.floor(Math.random() * colors.length)];
                this.createParticle(color, 'meditation');
            }, i * 200);
        }
    }
    
    createVictoryParticles() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                this.createParticle('#ffc58f', 'victory');
            }, i * 50);
        }
    }
    
    createDirectionalHint(ringName, clockwise) {
        const ring = this.rings[ringName];
        const color = ring.color;
        
        // Create subtle directional particles
        this.createParticle(color, 'hint', { direction: clockwise ? 1 : -1 });
    }
    
    createParticle(color, type, options = {}) {
        const container = this.container.querySelector('#particle-container');
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position within the mandala
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 150 + 50;
        const x = 200 + Math.cos(angle) * radius;
        const y = 200 + Math.sin(angle) * radius;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
        
        // Type-specific animations
        switch(type) {
            case 'alignment':
                particle.style.animation = 'float-particle 2s ease-out forwards';
                break;
            case 'meditation':
                particle.style.animation = 'float-particle 4s ease-in-out forwards';
                break;
            case 'victory':
                particle.style.animation = 'float-particle 3s ease-out forwards';
                particle.style.transform = `scale(${Math.random() * 2 + 1})`;
                break;
            case 'hint':
                const direction = options.direction || 1;
                particle.style.animation = `float-particle 2s ease-out forwards`;
                particle.style.transform = `translateX(${direction * 20}px)`;
                break;
        }
        
        container.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 4000);
    }
    
    // Audio System
    playRingSound(ringName) {
        // Web Audio API implementation for subtle ring sounds
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            const AudioCtx = AudioContext || webkitAudioContext;
            const audioCtx = new AudioCtx();
            
            const frequencies = {
                vitality: 261.63, // C4
                wisdom: 329.63,   // E4
                harmony: 392.00   // G4
            };
            
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.frequency.setValueAtTime(frequencies[ringName], audioCtx.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
            
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.3);
        }
    }
    
    playSuccessSound() {
        // Harmonic chord for success
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            const AudioCtx = AudioContext || webkitAudioContext;
            const audioCtx = new AudioCtx();
            
            const frequencies = [261.63, 329.63, 392.00]; // C-E-G chord
            
            frequencies.forEach((freq, index) => {
                setTimeout(() => {
                    const oscillator = audioCtx.createOscillator();
                    const gainNode = audioCtx.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioCtx.destination);
                    
                    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
                    oscillator.type = 'sine';
                    
                    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
                    gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.1);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2);
                    
                    oscillator.start(audioCtx.currentTime);
                    oscillator.stop(audioCtx.currentTime + 2);
                }, index * 200);
            });
        }
    }
    
    // State Management
    saveState() {
        const state = {
            rings: this.rings,
            attempts: this.attempts,
            hintsRevealed: this.hintsRevealed
        };
        
        if (this.gameStateManager && this.gameStateManager.worldState) {
            this.gameStateManager.worldState.banyan_puzzle_state = state;
        }
    }
    
    loadSavedState() {
        if (this.gameStateManager && this.gameStateManager.worldState && this.gameStateManager.worldState.banyan_puzzle_state) {
            const state = this.gameStateManager.worldState.banyan_puzzle_state;
            
            if (state.rings) {
                this.rings = { ...this.rings, ...state.rings };
            }
            if (typeof state.attempts === 'number') {
                this.attempts = state.attempts;
            }
            if (typeof state.hintsRevealed === 'number') {
                this.hintsRevealed = state.hintsRevealed;
            }
        }
    }
    
    // Animation Loop
    startAnimationLoop() {
        const animate = () => {
            // Subtle continuous animations and updates
            this.updateBackgroundEffects();
            this.animationFrame = requestAnimationFrame(animate);
        };
        animate();
    }
    
    updateBackgroundEffects() {
        // Subtle pulsing effects based on alignment
        const overallAlignment = this.calculateOverallAlignment();
        const mandala = this.container.querySelector('.banyan-mandala-container');
        
        if (mandala) {
            const pulseIntensity = overallAlignment / 100;
            mandala.style.filter = `drop-shadow(0 0 ${20 + pulseIntensity * 20}px rgba(224, 150, 88, ${0.3 + pulseIntensity * 0.3}))`;
        }
    }
    
    // Cleanup
    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        
        // Remove event listeners
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.endDrag);
        document.removeEventListener('touchmove', this.handleDrag);
        document.removeEventListener('touchend', this.endDrag);
        document.removeEventListener('keydown', this.handleKeyboard);
    }
}

// Export for use in the main game
window.EnhancedBanyanTreeHarmony = EnhancedBanyanTreeHarmony;

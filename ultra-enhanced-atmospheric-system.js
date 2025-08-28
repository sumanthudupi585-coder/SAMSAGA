/**
 * Ultra-Enhanced Atmospheric System
 * Transforms Samsara Saga into a premium escape room/treasure hunting experience
 * with cinematic atmosphere, dynamic environments, and immersive storytelling
 */

class UltraEnhancedAtmosphericSystem {
    constructor() {
        this.environmentalStates = new Map();
        this.dynamicElements = new Map();
        this.narrativeLayers = new Map();
        this.discoverySystem = new Map();
        this.cinematicEffects = new Map();
        
        // Enhanced atmospheric configurations
        this.atmosphericProfiles = this.initializeAtmosphericProfiles();
        this.narrativeAdaptations = this.initializeNarrativeAdaptations();
        this.discoveryMechanics = this.initializeDiscoveryMechanics();
        
        this.init();
    }
    
    init() {
        this.createCinematicCanvas();
        this.setupDynamicLighting();
        this.initializeParticlePhysics();
        this.setupAudioSpatialization();
        this.createInteractiveEnvironments();
        this.initializeProgressiveDiscovery();
    }
    
    initializeAtmosphericProfiles() {
        return {
            'DHARMAPURA_VILLAGE': {
                name: "Sacred Village of Dharma",
                timeOfDay: 'golden_hour',
                weatherPattern: 'mystical_mist',
                soundscape: {
                    ambient: ['temple_bells_distant', 'gentle_wind', 'bird_songs'],
                    interactive: ['footsteps_earth', 'rustling_leaves', 'water_drops'],
                    emotional: ['spiritual_harmonics', 'meditative_tones']
                },
                lighting: {
                    primary: { color: '#ffc58f', intensity: 0.8, direction: 'top_left' },
                    secondary: { color: '#e09658', intensity: 0.4, direction: 'bottom_right' },
                    dynamic: ['floating_orbs', 'spiritual_glow', 'sunlight_filtering']
                },
                particles: {
                    'golden_motes': { count: 150, behavior: 'mystical_drift', physics: true },
                    'lotus_petals': { count: 30, behavior: 'gentle_fall', interactive: true },
                    'spiritual_energy': { count: 80, behavior: 'sacred_flow', responsive: true }
                },
                interactiveElements: [
                    {
                        id: 'ancient_stones',
                        type: 'mandala_circle',
                        position: { x: '50%', y: '60%' },
                        behavior: 'responsive_to_presence',
                        effects: ['energy_resonance', 'harmonic_frequencies'],
                        discovery: 'sacred_geometry_secrets'
                    },
                    {
                        id: 'banyan_tree',
                        type: 'living_entity',
                        position: { x: '70%', y: '40%' },
                        behavior: 'breathing_presence',
                        effects: ['leaf_rustling', 'root_energy_pulse'],
                        discovery: 'tree_consciousness_communication'
                    },
                    {
                        id: 'wisdom_fountain',
                        type: 'spiritual_nexus',
                        position: { x: '30%', y: '70%' },
                        behavior: 'flowing_energy',
                        effects: ['water_singing', 'light_reflection_patterns'],
                        discovery: 'hidden_philosophical_teachings'
                    }
                ],
                hiddenSecrets: [
                    {
                        id: 'ancient_inscription',
                        trigger: 'examine_stones_repeatedly',
                        reveal: 'sanskrit_wisdom_verse',
                        reward: 'philosophical_insight_boost'
                    },
                    {
                        id: 'tree_hollow_cache',
                        trigger: 'meditate_near_banyan',
                        reveal: 'hidden_meditation_spot',
                        reward: 'enhanced_spiritual_perception'
                    }
                ]
            },
            
            'CORRUPTED_CAVE': {
                name: "Cave of Karmic Purification",
                timeOfDay: 'eternal_twilight',
                weatherPattern: 'spiritual_storms',
                soundscape: {
                    ambient: ['echoing_drops', 'distant_chanting', 'crystal_resonance'],
                    interactive: ['footsteps_stone', 'crystal_touching', 'energy_crackling'],
                    emotional: ['purification_harmonics', 'transformative_frequencies']
                },
                lighting: {
                    primary: { color: '#4a3422', intensity: 0.3, direction: 'omni' },
                    secondary: { color: '#e09658', intensity: 0.6, direction: 'crystal_emanation' },
                    dynamic: ['corruption_shadows', 'purification_light', 'karmic_energy_flows']
                },
                particles: {
                    'shadow_wisps': { count: 100, behavior: 'swirling_darkness', emotional: true },
                    'purification_sparks': { count: 60, behavior: 'healing_ascension', transformative: true },
                    'karmic_echoes': { count: 40, behavior: 'memory_fragments', story_revealing: true }
                },
                interactiveElements: [
                    {
                        id: 'corruption_crystal',
                        type: 'karmic_catalyst',
                        position: { x: '50%', y: '50%' },
                        behavior: 'pulsing_with_accumulated_karma',
                        effects: ['negative_energy_waves', 'purification_opportunity'],
                        discovery: 'understanding_of_karmic_mechanics'
                    },
                    {
                        id: 'hermit_belongings',
                        type: 'story_artifacts',
                        position: { x: '30%', y: '80%' },
                        behavior: 'emanating_memories',
                        effects: ['vision_fragments', 'emotional_echoes'],
                        discovery: 'hermit_spiritual_journey_story'
                    },
                    {
                        id: 'purification_altar',
                        type: 'ritual_nexus',
                        position: { x: '80%', y: '30%' },
                        behavior: 'awaiting_proper_offering',
                        effects: ['sacred_energy_field', 'transformation_potential'],
                        discovery: 'ancient_purification_ritual_knowledge'
                    }
                ],
                hiddenSecrets: [
                    {
                        id: 'hermit_final_message',
                        trigger: 'combine_meditation_with_belongings',
                        reveal: 'ultimate_spiritual_teaching',
                        reward: 'wisdom_of_conscious_sacrifice'
                    },
                    {
                        id: 'cave_exit_portal',
                        trigger: 'successfully_purify_all_elements',
                        reveal: 'hidden_passage_to_temple',
                        reward: 'direct_access_to_temple_mysteries'
                    }
                ]
            }
        };
    }
    
    initializeNarrativeAdaptations() {
        return {
            // Adapts narrative based on player choices and spiritual development
            'spiritual_progression': {
                beginner: {
                    language: 'accessible_metaphors',
                    complexity: 'introductory_concepts',
                    guidance: 'explicit_direction'
                },
                intermediate: {
                    language: 'deeper_symbolism',
                    complexity: 'interconnected_concepts', 
                    guidance: 'subtle_hints'
                },
                advanced: {
                    language: 'pure_wisdom_transmission',
                    complexity: 'non_dual_understanding',
                    guidance: 'intuitive_discovery'
                }
            },
            
            'nakshatra_resonance': {
                // Adapts environmental elements to resonate with player's Nakshatra
                'Ashwini': {
                    environmental_emphasis: 'healing_energy_flows',
                    interactive_enhancements: 'rapid_response_elements',
                    discovery_focus: 'healing_wisdom_secrets'
                },
                'Bharani': {
                    environmental_emphasis: 'transformation_cycles',
                    interactive_enhancements: 'renewal_mechanics',
                    discovery_focus: 'death_rebirth_mysteries'
                },
                'Krittika': {
                    environmental_emphasis: 'purifying_fire_elements',
                    interactive_enhancements: 'truth_revealing_interactions',
                    discovery_focus: 'illusion_cutting_wisdom'
                }
                // ... Continue for all 27 Nakshatras
            }
        };
    }
    
    initializeDiscoveryMechanics() {
        return {
            'progressive_revelation': {
                // Secrets reveal based on player spiritual development
                layers: [
                    {
                        threshold: 'first_insight',
                        reveals: ['environmental_responsiveness', 'basic_hidden_elements'],
                        mechanics: ['hover_revelations', 'proximity_discoveries']
                    },
                    {
                        threshold: 'deeper_understanding', 
                        reveals: ['philosophical_easter_eggs', 'advanced_interactions'],
                        mechanics: ['meditation_visions', 'symbolic_pattern_recognition']
                    },
                    {
                        threshold: 'wisdom_integration',
                        reveals: ['ultimate_truth_glimpses', 'cosmic_connection_experiences'],
                        mechanics: ['consciousness_expansion_moments', 'unity_awareness_triggers']
                    }
                ]
            },
            
            'environmental_memory': {
                // Environment remembers and responds to player actions
                remembers: [
                    'meditation_locations',
                    'contemplation_duration',
                    'choice_emotional_resonance',
                    'interaction_patterns',
                    'spiritual_breakthrough_moments'
                ],
                responds_with: [
                    'enhanced_atmospheric_beauty',
                    'increased_discovery_opportunities',
                    'deeper_philosophical_content',
                    'personalized_wisdom_teachings',
                    'transcendent_experience_moments'
                ]
            }
        };
    }
    
    createCinematicCanvas() {
        // Create high-performance canvas for complex visual effects
        const cinematicCanvas = document.createElement('canvas');
        cinematicCanvas.id = 'cinematic-canvas';
        cinematicCanvas.style.position = 'fixed';
        cinematicCanvas.style.top = '0';
        cinematicCanvas.style.left = '0';
        cinematicCanvas.style.width = '100vw';
        cinematicCanvas.style.height = '100vh';
        cinematicCanvas.style.pointerEvents = 'none';
        cinematicCanvas.style.zIndex = '1';
        
        document.body.appendChild(cinematicCanvas);
        
        this.cinematicContext = cinematicCanvas.getContext('2d');
        this.cinematicCanvas = cinematicCanvas;
        this.setupCanvasResizing(cinematicCanvas);
        this.startCinematicRenderLoop();
    }

    setupCanvasResizing(canvas) {
        // Handle canvas resizing for responsive display
        const resizeCanvas = () => {
            const pixelRatio = window.devicePixelRatio || 1;
            const displayWidth = window.innerWidth;
            const displayHeight = window.innerHeight;

            canvas.width = displayWidth * pixelRatio;
            canvas.height = displayHeight * pixelRatio;
            canvas.style.width = displayWidth + 'px';
            canvas.style.height = displayHeight + 'px';

            // Scale the context to handle high DPI displays
            this.cinematicContext.scale(pixelRatio, pixelRatio);
        };

        // Initial resize
        resizeCanvas();

        // Listen for window resize events
        window.addEventListener('resize', resizeCanvas);

        // Store resize function for cleanup if needed
        this.resizeHandler = resizeCanvas;
    }

    startCinematicRenderLoop() {
        // Initialize the main render loop for cinematic effects
        this.lastFrameTime = performance.now();
        this.deltaTime = 0;

        const renderFrame = (currentTime) => {
            this.deltaTime = (currentTime - this.lastFrameTime) / 1000;
            this.lastFrameTime = currentTime;

            // Only update if frame rate is optimal (avoid excessive computation)
            if (this.deltaTime < 0.1) {
                this.updateAllSystems(this.deltaTime);
                this.renderAllEffects();
            }

            requestAnimationFrame(renderFrame);
        };

        requestAnimationFrame(renderFrame);
    }

    setupDynamicLighting() {
        // Create dynamic lighting system that responds to player spiritual state
        this.lightingSystem = {
            globalIllumination: 0.7,
            spiritualResonance: 0.0,
            karmaInfluence: 0.0,
            
            updateLighting: (playerState) => {
                const spiritualLevel = this.calculateSpiritualLevel(playerState);
                const karmaBalance = this.calculateKarmaBalance(playerState);
                
                // Adjust global lighting based on spiritual development
                this.globalIllumination = 0.5 + (spiritualLevel * 0.4);
                
                // Create karma-influenced color shifts
                this.karmaInfluence = karmaBalance;
                
                this.applyLightingEffects();
            }
        };
    }

    applyLightingEffects() {
        // Apply dynamic lighting effects to the cinematic canvas
        if (!this.cinematicContext) return;

        const canvas = this.cinematicCanvas;
        const ctx = this.cinematicContext;

        // Create gradient based on spiritual and karma levels
        const gradient = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
        );

        // Adjust colors based on karma influence
        const karmaHue = this.lightingSystem.karmaInfluence > 0 ? 45 :
                        this.lightingSystem.karmaInfluence < 0 ? 0 : 30;
        const spiritualAlpha = this.lightingSystem.globalIllumination * 0.3;

        gradient.addColorStop(0, `hsla(${karmaHue}, 70%, 60%, ${spiritualAlpha})`);
        gradient.addColorStop(1, `hsla(${karmaHue}, 50%, 30%, 0)`);

        // Apply lighting overlay
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
    }

    initializeParticlePhysics() {
        // Advanced particle system with physics simulation
        this.particleEngine = {
            particles: [],
            forces: {
                gravity: { x: 0, y: 0.1 },
                spiritualWind: { x: 0, y: 0 },
                karmaField: { x: 0, y: 0 }
            },
            
            createParticle: (type, position, properties) => {
                return {
                    type: type,
                    position: { ...position },
                    velocity: { x: 0, y: 0 },
                    acceleration: { x: 0, y: 0 },
                    life: 1.0,
                    maxLife: properties.maxLife || 5.0,
                    size: properties.size || 2,
                    color: properties.color || '#ffc58f',
                    behavior: properties.behavior || 'drift',
                    physics: properties.physics || true,
                    interactive: properties.interactive || false,
                    spiritual: properties.spiritual || false
                };
            },
            
            updateParticles: (deltaTime) => {
                this.particleEngine.particles.forEach((particle, index) => {
                    this.updateParticlePhysics(particle, deltaTime);
                    this.updateParticleBehavior(particle, deltaTime);
                    
                    particle.life -= deltaTime / particle.maxLife;
                    
                    if (particle.life <= 0) {
                        this.particleEngine.particles.splice(index, 1);
                    }
                });
            }
        };
    }
    
    createInteractiveEnvironments() {
        // Create responsive environmental elements
        const interactiveElements = document.querySelectorAll('.interactive-element');
        
        interactiveElements.forEach(element => {
            this.enhanceElementInteractivity(element);
        });
        
        // Add hidden interactive areas
        this.createHiddenInteractionZones();
    }
    
    enhanceElementInteractivity(element) {
        // Add sophisticated interaction behaviors
        let proximityLevel = 0;
        let interactionState = 'dormant';
        let discoveryProgress = 0;
        
        element.addEventListener('mouseenter', (e) => {
            this.triggerProximityEffects(element, 'approach');
            interactionState = 'aware';
        });
        
        element.addEventListener('mouseleave', (e) => {
            this.triggerProximityEffects(element, 'departure'); 
            interactionState = 'dormant';
        });
        
        element.addEventListener('click', (e) => {
            this.triggerInteractionEffects(element, 'activation');
            discoveryProgress += 0.2;
            
            if (discoveryProgress >= 1.0) {
                this.revealElementSecrets(element);
            }
        });
        
        // Add continuous presence detection
        this.addPresenceDetection(element);
    }
    
    createHiddenInteractionZones() {
        // Create invisible zones that reveal secrets when discovered
        const hiddenZones = [
            {
                id: 'meditation_circle',
                area: { x: '40%', y: '50%', radius: '5%' },
                discoveryMethod: 'stillness_detection',
                reward: 'enhanced_meditation_ability'
            },
            {
                id: 'wisdom_vortex', 
                area: { x: '75%', y: '25%', radius: '3%' },
                discoveryMethod: 'circular_mouse_movement',
                reward: 'philosophical_insight_boost'
            },
            {
                id: 'compassion_nexus',
                area: { x: '20%', y: '80%', radius: '4%' },
                discoveryMethod: 'repeated_gentle_clicks',
                reward: 'empathy_enhancement'
            }
        ];
        
        hiddenZones.forEach(zone => this.createHiddenZone(zone));
    }
    
    // Enhanced discovery and secret revelation systems
    revealProgressiveSecrets(playerProgress) {
        const currentLevel = this.calculateProgressionLevel(playerProgress);
        const availableSecrets = this.discoverySystem.get('progressive_secrets') || [];
        
        availableSecrets.forEach(secret => {
            if (secret.requiredLevel <= currentLevel && !secret.revealed) {
                this.revealSecret(secret);
            }
        });
    }
    
    createCinematicMoments(triggerType, context) {
        // Create movie-quality cinematic moments for key discoveries
        const cinematicConfig = {
            'first_wisdom_discovery': {
                duration: 3000,
                effects: ['golden_particle_burst', 'harmonic_resonance', 'screen_glow'],
                cameraMovement: 'gentle_zoom_to_discovery',
                audioTiming: 'synchronized_revelation_chord'
            },
            'karmic_breakthrough': {
                duration: 4000,
                effects: ['energy_wave_propagation', 'color_spectrum_shift', 'reality_shimmer'],
                cameraMovement: 'consciousness_expansion_zoom',
                audioTiming: 'transcendent_harmony_build'
            },
            'temple_access_unlock': {
                duration: 5000,
                effects: ['divine_light_rays', 'mandala_formation', 'cosmic_connection'],
                cameraMovement: 'ascension_perspective_shift',
                audioTiming: 'celestial_choir_crescendo'
            }
        };
        
        const config = cinematicConfig[triggerType];
        if (config) {
            this.executeCinematicSequence(config, context);
        }
    }
    
    // Performance optimization for 60fps gameplay
    optimizePerformance() {
        // Use requestAnimationFrame for smooth 60fps
        this.frameRate = 60;
        this.lastFrameTime = 0;
        this.deltaTime = 0;
        
        this.startOptimizedRenderLoop();
    }
    
    startOptimizedRenderLoop() {
        const renderFrame = (currentTime) => {
            this.deltaTime = currentTime - this.lastFrameTime;
            this.lastFrameTime = currentTime;
            
            // Only update if frame rate is optimal
            if (this.deltaTime >= (1000 / this.frameRate)) {
                this.updateAllSystems(this.deltaTime);
                this.renderAllEffects();
            }
            
            requestAnimationFrame(renderFrame);
        };
        
        requestAnimationFrame(renderFrame);
    }
    
    // Utility methods for calculations
    calculateSpiritualLevel(playerState) {
        const progression = playerState.progression || {};
        const abilities = progression.abilities || [];
        const karma = playerState.karma || 0;
        
        return Math.min(1.0, (abilities.length * 0.2) + (Math.abs(karma) * 0.01));
    }
    
    calculateKarmaBalance(playerState) {
        const karma = playerState.karma || 0;
        return Math.max(-1, Math.min(1, karma / 100));
    }
    
    updateAllSystems(deltaTime) {
        // Update all atmospheric systems
        this.particleEngine.updateParticles(deltaTime);
        this.lightingSystem.updateLighting(this.getCurrentPlayerState());
        this.updateInteractiveElements(deltaTime);
        this.updateDiscoveryProgress(deltaTime);
    }
    
    renderAllEffects() {
        // Render all visual effects to the cinematic canvas
        this.cinematicContext.clearRect(0, 0, this.cinematicCanvas.width, this.cinematicCanvas.height);
        
        this.renderParticles();
        this.renderLighting();
        this.renderDiscoveryEffects();
        this.renderCinematicElements();
    }

    renderParticles() {
        // Render particle effects to the cinematic canvas
        if (!this.cinematicContext || !this.particleEngine) return;

        const ctx = this.cinematicContext;
        this.particleEngine.particles.forEach(particle => {
            if (particle.life > 0) {
                ctx.save();
                ctx.globalAlpha = particle.life;
                ctx.fillStyle = particle.color || '#FFC58F';
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        });
    }

    renderLighting() {
        // Render dynamic lighting effects
        if (!this.cinematicContext || !this.lightingSystem) return;

        // Lighting effects are handled in applyLightingEffects
        this.applyLightingEffects();
    }

    renderDiscoveryEffects() {
        // Render discovery and interaction effects
        if (!this.cinematicContext) return;

        // Placeholder for discovery visual effects
        // Can be expanded based on discovery system needs
    }

    renderCinematicElements() {
        // Render cinematic overlays and effects
        if (!this.cinematicContext) return;

        // Placeholder for cinematic effects like transitions, overlays, etc.
        // Can be expanded based on cinematic needs
    }

    updateParticlePhysics(particle, deltaTime) {
        // Update particle physics
        if (!particle) return;

        // Apply forces
        particle.vx += (this.particleEngine.forces.gravity?.x || 0) * deltaTime;
        particle.vy += (this.particleEngine.forces.gravity?.y || 0) * deltaTime;

        // Update position
        particle.x += particle.vx * deltaTime * 60;
        particle.y += particle.vy * deltaTime * 60;

        // Apply bounds checking
        const canvas = this.cinematicCanvas;
        if (canvas) {
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;
        }
    }

    updateParticleBehavior(particle, deltaTime) {
        // Update particle behavior patterns
        if (!particle || !particle.behavior) return;

        switch (particle.behavior) {
            case 'mystical_drift':
                particle.vx += (Math.sin(Date.now() * 0.001) * 0.1);
                particle.vy += (Math.cos(Date.now() * 0.001) * 0.1);
                break;
            case 'gentle_fall':
                particle.vy += 0.1;
                particle.vx += (Math.sin(Date.now() * 0.002) * 0.05);
                break;
            case 'sacred_flow':
                const angle = Date.now() * 0.001;
                particle.vx = Math.cos(angle) * 0.5;
                particle.vy = Math.sin(angle) * 0.5;
                break;
        }
    }

    updateInteractiveElements(deltaTime) {
        // Update interactive environmental elements
        // Placeholder for interactive element updates
    }

    updateDiscoveryProgress(deltaTime) {
        // Update discovery system progress
        // Placeholder for discovery progress updates
    }

    getCurrentPlayerState() {
        // Get current player state for atmospheric adjustments
        return window.gameStateManager ? window.gameStateManager.getState() : {};
    }
}

// Export for use in main game
window.UltraEnhancedAtmosphericSystem = UltraEnhancedAtmosphericSystem;

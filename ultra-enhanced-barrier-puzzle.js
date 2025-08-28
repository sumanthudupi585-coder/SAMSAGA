/**
 * Ultra-Enhanced Barrier of Negativity Puzzle
 * A sophisticated psychological transformation experience that goes beyond simple item application
 * to create a deep journey of shadow integration and spiritual purification
 */

class UltraEnhancedBarrierPuzzle {
    constructor(container, gameStateManager, onSuccess) {
        this.container = container;
        this.gameStateManager = gameStateManager;
        this.onSuccess = onSuccess;
        
        // Psychological transformation tracking
        this.shadowAspects = [];
        this.integrationProgress = 0;
        this.emotionalAlchemy = new Map();
        this.negativeEnergySources = [];
        this.purificationLayers = [];
        this.transformationDepth = 0;
        
        // Enhanced barrier mechanics
        this.barrierNature = this.initializeBarrierNature();
        this.transformationStages = this.initializeTransformationStages();
        this.alchemicalProcess = this.initializeAlchemicalProcess();
        this.consciousnessLevels = this.initializeConsciousnessLevels();
        
        this.init();
    }
    
    initializeBarrierNature() {
        return {
            // The barrier as manifestation of collective shadow
            energyComposition: {
                fear: { intensity: 0.8, source: 'unknown_future', transformable: true },
                anger: { intensity: 0.6, source: 'unmet_expectations', transformable: true },
                grief: { intensity: 0.7, source: 'loss_attachment', transformable: true },
                shame: { intensity: 0.5, source: 'perceived_inadequacy', transformable: true },
                despair: { intensity: 0.9, source: 'meaning_void', transformable: true }
            },
            
            manifestationLayers: {
                personal: {
                    description: 'Your own rejected emotions and shadow aspects',
                    visibility: 1.0,
                    transformationMethod: 'self_acceptance'
                },
                ancestral: {
                    description: 'Inherited trauma and unresolved family patterns',
                    visibility: 0.3,
                    transformationMethod: 'ancestral_healing'
                },
                collective: {
                    description: 'Societal shadows and cultural wounds',
                    visibility: 0.1,
                    transformationMethod: 'collective_compassion'
                },
                cosmic: {
                    description: 'Universal suffering and existential challenges',
                    visibility: 0.05,
                    transformationMethod: 'transcendent_wisdom'
                }
            },
            
            defenseMechanisms: [
                'projection', 'denial', 'suppression', 'avoidance', 'blame'
            ],
            
            transformationTools: [
                'compassionate_awareness', 'loving_acceptance', 'understanding_wisdom',
                'forgiveness_grace', 'transcendent_perspective'
            ]
        };
    }
    
    initializeTransformationStages() {
        return {
            recognition: {
                title: 'Recognizing the Shadow',
                teaching: 'The first step in transformation is acknowledging what we have rejected within ourselves.',
                challenge: 'Face your own reflected darkness without judgment',
                mechanics: 'shadow_mirror_contemplation',
                insights: [
                    'What I dislike in others exists within me',
                    'My reactions reveal my hidden aspects',
                    'Judgment is often self-rejection projected outward'
                ]
            },
            
            acceptance: {
                title: 'Embracing What Is',
                teaching: 'Resistance creates persistence. Acceptance allows transformation.',
                challenge: 'Hold space for your difficult emotions without trying to change them',
                mechanics: 'emotional_container_meditation',
                insights: [
                    'All emotions have wisdom to offer',
                    'Acceptance does not mean agreement',
                    'Love can encompass even the darkest feelings'
                ]
            },
            
            understanding: {
                title: 'Seeing the Deeper Truth',
                teaching: 'Behind every negative emotion lies a deeper need or wound seeking healing.',
                challenge: 'Discover the gift hidden within each shadow aspect',
                mechanics: 'compassionate_inquiry_dialogue',
                insights: [
                    'Anger protects what I value',
                    'Fear alerts me to what matters',
                    'Sadness honors what I have loved'
                ]
            },
            
            integration: {
                title: 'Alchemical Transformation',
                teaching: 'Through conscious love, lead is transformed into gold, darkness into light.',
                challenge: 'Actively transform negative energy into wisdom and compassion',
                mechanics: 'conscious_energy_transmutation',
                insights: [
                    'I can choose my response to any emotion',
                    'Consciousness transforms whatever it touches',
                    'My shadows become my greatest teachers'
                ]
            },
            
            transcendence: {
                title: 'Beyond Duality',
                teaching: 'In the highest understanding, there is no "positive" or "negative" - only consciousness expressing itself.',
                challenge: 'Recognize the unity behind all apparent opposites',
                mechanics: 'non_dual_awareness_realization',
                insights: [
                    'Light and shadow are both expressions of one reality',
                    'I am the awareness that observes all experiences',
                    'Perfect peace exists beyond all mental constructs'
                ]
            }
        };
    }
    
    initializeAlchemicalProcess() {
        return {
            // The hermetic principle of transformation
            stages: {
                nigredo: {
                    name: 'Blackening - Facing the Shadow',
                    description: 'Confronting the darkness without flinching',
                    color: '#000000',
                    element: 'earth',
                    emotion: 'fear_acceptance'
                },
                albedo: {
                    name: 'Whitening - Purification',
                    description: 'Washing away illusions with truth',
                    color: '#FFFFFF',
                    element: 'water',
                    emotion: 'clarity_emergence'
                },
                citrinitas: {
                    name: 'Yellowing - Illumination',
                    description: 'The dawn of wisdom and understanding',
                    color: '#FFD700',
                    element: 'air',
                    emotion: 'insight_dawning'
                },
                rubedo: {
                    name: 'Reddening - Integration',
                    description: 'The marriage of opposites in conscious love',
                    color: '#DC143C',
                    element: 'fire',
                    emotion: 'love_unity'
                }
            },
            
            transformationEquations: [
                'Fear + Acceptance = Courage',
                'Anger + Understanding = Compassion',
                'Sadness + Meaning = Wisdom',
                'Shame + Love = Authenticity',
                'Despair + Connection = Hope'
            ]
        };
    }
    
    initializeConsciousnessLevels() {
        return {
            reactive: {
                description: 'Unconsciously controlled by emotions',
                capabilities: ['basic_recognition'],
                limitations: ['projection', 'blame', 'victimhood']
            },
            responsive: {
                description: 'Able to pause between stimulus and response',
                capabilities: ['emotional_awareness', 'choice_recognition'],
                limitations: ['occasional_reactivity', 'incomplete_integration']
            },
            creative: {
                description: 'Consciously choosing responses that serve growth',
                capabilities: ['emotional_alchemy', 'shadow_integration', 'wisdom_application'],
                limitations: ['ego_subtlety', 'spiritual_pride']
            },
            transcendent: {
                description: 'Established in awareness beyond all emotional states',
                capabilities: ['non_dual_perception', 'spontaneous_compassion', 'effortless_presence'],
                limitations: ['none_within_relative_reality']
            }
        };
    }
    
    init() {
        this.createTransformationInterface();
        this.setupShadowDetection();
        this.initializeEmotionalAlchemy();
        this.startTransformationJourney();
    }
    
    createTransformationInterface() {
        this.container.innerHTML = `
            <div class="enhanced-barrier-puzzle">
                <div class="transformation-header">
                    <h3 class="puzzle-title">The Mirror of Shadow Transformation</h3>
                    <div class="consciousness-level-indicator">
                        <span class="current-level" id="consciousness-level">Reactive</span>
                        <div class="level-progress" id="level-progress"></div>
                    </div>
                </div>
                
                <div class="philosophical-teaching-barrier">
                    <div class="teaching-content">
                        <p class="barrier-teaching" id="current-barrier-teaching">
                            Before you stands not merely a barrier of energy, but a mirror reflecting the shadows 
                            of consciousness itself. What blocks your path is not external - it is the very aspects 
                            of yourself you have rejected. To pass through, you must embrace what you have denied.
                        </p>
                    </div>
                </div>
                
                <div class="barrier-manifestation-container">
                    <div class="barrier-energy-field" id="barrier-field">
                        <div class="shadow-layer personal-shadow active" data-layer="personal">
                            <div class="shadow-aspects" id="personal-aspects">
                                <div class="shadow-aspect" data-emotion="fear">
                                    <div class="aspect-symbol">😰</div>
                                    <div class="aspect-label">Fear</div>
                                    <div class="aspect-intensity" data-intensity="0.8"></div>
                                </div>
                                <div class="shadow-aspect" data-emotion="anger">
                                    <div class="aspect-symbol">😠</div>
                                    <div class="aspect-label">Anger</div>
                                    <div class="aspect-intensity" data-intensity="0.6"></div>
                                </div>
                                <div class="shadow-aspect" data-emotion="grief">
                                    <div class="aspect-symbol">😢</div>
                                    <div class="aspect-label">Grief</div>
                                    <div class="aspect-intensity" data-intensity="0.7"></div>
                                </div>
                                <div class="shadow-aspect" data-emotion="shame">
                                    <div class="aspect-symbol">😔</div>
                                    <div class="aspect-label">Shame</div>
                                    <div class="aspect-intensity" data-intensity="0.5"></div>
                                </div>
                                <div class="shadow-aspect" data-emotion="despair">
                                    <div class="aspect-symbol">😞</div>
                                    <div class="aspect-label">Despair</div>
                                    <div class="aspect-intensity" data-intensity="0.9"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="shadow-layer ancestral-shadow" data-layer="ancestral">
                            <div class="layer-label">Ancestral Patterns</div>
                            <div class="ancestral-wisps"></div>
                        </div>
                        
                        <div class="shadow-layer collective-shadow" data-layer="collective">
                            <div class="layer-label">Collective Unconscious</div>
                            <div class="collective-streams"></div>
                        </div>
                        
                        <div class="barrier-core">
                            <div class="transformation-catalyst" id="transformation-catalyst">
                                <div class="catalyst-symbol">🔮</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="transformation-tools">
                    <div class="alchemy-station">
                        <h4>Emotional Alchemy</h4>
                        <div class="alchemy-process" id="alchemy-process">
                            <div class="alchemical-stage nigredo" data-stage="nigredo">
                                <div class="stage-symbol">🖤</div>
                                <div class="stage-name">Nigredo</div>
                                <div class="stage-progress"></div>
                            </div>
                            <div class="alchemical-stage albedo" data-stage="albedo">
                                <div class="stage-symbol">🤍</div>
                                <div class="stage-name">Albedo</div>
                                <div class="stage-progress"></div>
                            </div>
                            <div class="alchemical-stage citrinitas" data-stage="citrinitas">
                                <div class="stage-symbol">���</div>
                                <div class="stage-name">Citrinitas</div>
                                <div class="stage-progress"></div>
                            </div>
                            <div class="alchemical-stage rubedo" data-stage="rubedo">
                                <div class="stage-symbol">❤️</div>
                                <div class="stage-name">Rubedo</div>
                                <div class="stage-progress"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="compassion-cultivation">
                        <h4>Cultivation of Compassion</h4>
                        <div class="compassion-meter">
                            <div class="compassion-fill" id="compassion-fill"></div>
                            <span class="compassion-label">Compassionate Awareness</span>
                        </div>
                    </div>
                </div>
                
                <div class="transformation-actions">
                    <button class="transformation-btn recognize-btn" id="recognize-shadow">
                        🪞 Recognize My Shadow
                    </button>
                    <button class="transformation-btn accept-btn" id="accept-emotion">
                        🤗 Embrace with Love
                    </button>
                    <button class="transformation-btn understand-btn" id="understand-wisdom">
                        💡 Seek the Wisdom
                    </button>
                    <button class="transformation-btn integrate-btn" id="integrate-aspect">
                        ⚗️ Transform Energy
                    </button>
                    <button class="transformation-btn transcend-btn" id="transcend-duality" style="display: none;">
                        ✨ Transcend Duality
                    </button>
                </div>
                
                <div class="insight-emergence" id="transformation-insight">
                    <div class="insight-content"></div>
                </div>
                
                <div class="purification-inventory">
                    <h4>Tools of Purification</h4>
                    <div class="purification-items" id="purification-items">
                        <!-- Dynamically populated based on player inventory -->
                    </div>
                </div>
            </div>
        `;
        
        this.setupTransformationInteractions();
    }
    
    setupTransformationInteractions() {
        // Shadow aspect interactions
        const shadowAspects = this.container.querySelectorAll('.shadow-aspect');
        shadowAspects.forEach(aspect => this.setupShadowAspectInteraction(aspect));
        
        // Transformation button interactions
        const recognizeBtn = this.container.querySelector('#recognize-shadow');
        recognizeBtn.addEventListener('click', () => this.recognizeShadow());
        
        const acceptBtn = this.container.querySelector('#accept-emotion');
        acceptBtn.addEventListener('click', () => this.acceptEmotion());
        
        const understandBtn = this.container.querySelector('#understand-wisdom');
        understandBtn.addEventListener('click', () => this.understandWisdom());
        
        const integrateBtn = this.container.querySelector('#integrate-aspect');
        integrateBtn.addEventListener('click', () => this.integrateAspect());
        
        const transcendBtn = this.container.querySelector('#transcend-duality');
        transcendBtn.addEventListener('click', () => this.transcendDuality());
        
        // Setup purification item interactions
        this.setupPurificationItems();
    }
    
    setupShadowAspectInteraction(aspectElement) {
        const emotion = aspectElement.dataset.emotion;
        
        aspectElement.addEventListener('click', () => {
            this.selectShadowAspect(emotion, aspectElement);
        });
        
        aspectElement.addEventListener('mouseenter', () => {
            this.showShadowInsight(emotion);
        });
        
        aspectElement.addEventListener('mouseleave', () => {
            this.hideShadowInsight();
        });
    }
    
    selectShadowAspect(emotion, element) {
        // Clear previous selections
        this.container.querySelectorAll('.shadow-aspect').forEach(el => {
            el.classList.remove('selected');
        });
        
        // Select current aspect
        element.classList.add('selected');
        this.currentSelectedEmotion = emotion;
        
        // Update teaching based on selected emotion
        this.updateEmotionTeaching(emotion);
        
        // Enable appropriate transformation buttons
        this.updateAvailableActions();
    }
    
    updateEmotionTeaching(emotion) {
        const teachings = {
            fear: "Fear is not your enemy - it is your protector, alerting you to what you value most. When embraced with love, fear becomes courage.",
            anger: "Anger is the guardian of your boundaries, the flame that protects what you hold sacred. Transform its fire into the warmth of compassion.",
            grief: "Grief is love with nowhere to go. It honors what you have cherished. Let it flow through you like a sacred river, cleansing and purifying.",
            shame: "Shame whispers lies about your worth. But beneath its voice lies your deepest longing to belong and be loved. You are worthy as you are.",
            despair: "Despair arises when meaning feels lost. But you are meaning itself - consciousness expressing and experiencing itself. You are never truly lost."
        };
        
        const teachingElement = this.container.querySelector('#current-barrier-teaching');
        teachingElement.textContent = teachings[emotion] || teachings.fear;
    }
    
    recognizeShadow() {
        if (!this.currentSelectedEmotion) {
            this.showTransformationInsight("First, select a shadow aspect to work with.");
            return;
        }
        
        const emotion = this.currentSelectedEmotion;
        const recognitionInsights = {
            fear: "I see that my fear of the unknown keeps me from growing. I recognize this pattern within me.",
            anger: "I acknowledge the anger within me. It arises when my expectations are not met. I see this clearly now.",
            grief: "I recognize the grief in my heart - the love that still seeks its beloved. I honor this sacred feeling.",
            shame: "I see the shame that whispers I am not enough. I recognize this as a learned pattern, not truth.",
            despair: "I acknowledge the despair that arises when meaning feels absent. I see this as a call for deeper connection."
        };
        
        this.showTransformationInsight(recognitionInsights[emotion]);
        this.updateAlchemicalStage('nigredo', 0.25);
        this.transformationDepth += 1;
        this.updateConsciousnessLevel();
    }
    
    acceptEmotion() {
        if (!this.currentSelectedEmotion) {
            this.showTransformationInsight("First, select a shadow aspect to work with.");
            return;
        }
        
        const emotion = this.currentSelectedEmotion;
        const acceptanceInsights = {
            fear: "I welcome my fear with open arms. You are part of me, and I accept you with love.",
            anger: "I embrace my anger without judgment. You have protected me, and I honor your service.",
            grief: "I hold space for my grief with infinite tenderness. You are love itself in another form.",
            shame: "I wrap my shame in loving acceptance. You arose from wounds, and I offer you healing.",
            despair: "I sit with my despair in compassionate presence. You are not my enemy, but my teacher."
        };
        
        this.showTransformationInsight(acceptanceInsights[emotion]);
        this.updateAlchemicalStage('albedo', 0.5);
        this.transformationDepth += 1;
        this.updateCompassionLevel(0.2);
        this.updateConsciousnessLevel();
    }
    
    understandWisdom() {
        if (!this.currentSelectedEmotion) {
            this.showTransformationInsight("First, select a shadow aspect to work with.");
            return;
        }
        
        const emotion = this.currentSelectedEmotion;
        const wisdomInsights = {
            fear: "I understand now - my fear points to what I value most. It asks me to proceed with wisdom and care.",
            anger: "I see the gift in my anger - it guards my boundaries and shows me what matters deeply to my heart.",
            grief: "I understand that grief is love persisting. It teaches me about impermanence and the preciousness of connection.",
            shame: "I see that shame arose to help me belong, but I no longer need its protection. I belong by nature of being.",
            despair: "I understand that despair is a call to remember my true nature - I AM the meaning I seek."
        };
        
        this.showTransformationInsight(wisdomInsights[emotion]);
        this.updateAlchemicalStage('citrinitas', 0.75);
        this.transformationDepth += 1;
        this.updateCompassionLevel(0.3);
        this.updateConsciousnessLevel();
    }
    
    integrateAspect() {
        if (!this.currentSelectedEmotion) {
            this.showTransformationInsight("First, select a shadow aspect to work with.");
            return;
        }
        
        const emotion = this.currentSelectedEmotion;
        
        // Perform alchemical transformation
        this.performEmotionalAlchemy(emotion);
        
        // Update visual representation
        this.transformShadowAspect(emotion);
        
        // Complete the integration
        this.updateAlchemicalStage('rubedo', 1.0);
        this.transformationDepth += 1;
        this.updateCompassionLevel(0.5);
        this.updateConsciousnessLevel();
        
        // Check if all aspects are integrated
        this.checkTransformationCompletion();
    }
    
    performEmotionalAlchemy(emotion) {
        const transformations = {
            fear: { result: 'courage', symbol: '🦁', insight: 'Fear transformed becomes courage - the willingness to act despite uncertainty.' },
            anger: { result: 'compassion', symbol: '💝', insight: 'Anger transformed becomes compassion - fierce love that protects all beings.' },
            grief: { result: 'wisdom', symbol: '🦉', insight: 'Grief transformed becomes wisdom - understanding of love\'s eternal nature.' },
            shame: { result: 'authenticity', symbol: '🌟', insight: 'Shame transformed becomes authenticity - the courage to be perfectly yourself.' },
            despair: { result: 'hope', symbol: '🕊️', insight: 'Despair transformed becomes hope - the recognition of infinite possibility.' }
        };
        
        const transformation = transformations[emotion];
        this.emotionalAlchemy.set(emotion, transformation);
        
        this.showTransformationInsight(
            `✨ Transformation Complete: ${emotion} → ${transformation.result} ${transformation.symbol}\n\n${transformation.insight}`
        );
    }
    
    transformShadowAspect(emotion) {
        const aspectElement = this.container.querySelector(`[data-emotion="${emotion}"]`);
        const transformation = this.emotionalAlchemy.get(emotion);
        
        if (aspectElement && transformation) {
            aspectElement.classList.add('transformed');
            
            // Update visual representation
            const symbolElement = aspectElement.querySelector('.aspect-symbol');
            const labelElement = aspectElement.querySelector('.aspect-label');
            const intensityElement = aspectElement.querySelector('.aspect-intensity');
            
            symbolElement.textContent = transformation.symbol;
            labelElement.textContent = transformation.result;
            intensityElement.dataset.intensity = '0.0'; // Transformed aspects have no negative intensity
            
            // Add golden glow effect
            aspectElement.style.boxShadow = '0 0 20px #FFD700';
            aspectElement.style.borderColor = '#FFD700';
        }
    }
    
    updateAlchemicalStage(stage, progress) {
        const stageElement = this.container.querySelector(`[data-stage="${stage}"]`);
        const progressElement = stageElement.querySelector('.stage-progress');
        
        progressElement.style.width = `${progress * 100}%`;
        
        if (progress >= 1.0) {
            stageElement.classList.add('completed');
        }
    }
    
    updateCompassionLevel(increase) {
        this.compassionLevel = Math.min(1.0, (this.compassionLevel || 0) + increase);
        
        const compassionFill = this.container.querySelector('#compassion-fill');
        compassionFill.style.width = `${this.compassionLevel * 100}%`;
        
        if (this.compassionLevel >= 0.8) {
            compassionFill.classList.add('radiant');
        }
    }
    
    updateConsciousnessLevel() {
        const levels = ['reactive', 'responsive', 'creative', 'transcendent'];
        const currentIndex = Math.min(Math.floor(this.transformationDepth / 5), levels.length - 1);
        const currentLevel = levels[currentIndex];
        
        const levelElement = this.container.querySelector('#consciousness-level');
        levelElement.textContent = currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1);
        levelElement.className = `current-level ${currentLevel}`;
        
        if (currentLevel === 'transcendent') {
            const transcendBtn = this.container.querySelector('#transcend-duality');
            transcendBtn.style.display = 'block';
        }
    }
    
    transcendDuality() {
        // Ultimate transcendence experience
        this.createNonDualExperience();
        
        setTimeout(() => {
            this.completeTransformation();
        }, 6000);
    }
    
    createNonDualExperience() {
        const overlay = document.createElement('div');
        overlay.className = 'non-dual-experience-overlay';
        overlay.innerHTML = `
            <div class="non-dual-content">
                <div class="dissolving-barrier"></div>
                <div class="unity-realization">
                    <h2>The Ultimate Recognition</h2>
                    <p>There was never any barrier...</p>
                    <p>There was never anything to overcome...</p>
                    <p>There is only consciousness, appearing as all experiences...</p>
                    <p>You are That which is aware of all states,</p>
                    <p>untouched by any experience,</p>
                    <p>pure awareness itself.</p>
                    <div class="truth-symbol">⚪</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.classList.add('active');
        }, 100);
        
        setTimeout(() => {
            overlay.remove();
        }, 6000);
    }
    
    setupPurificationItems() {
        const purificationContainer = this.container.querySelector('#purification-items');
        const playerInventory = this.gameStateManager.playerState.inventory || [];
        const specialItems = this.gameStateManager.playerState.specialItems || [];
        
        // Check for special purification items
        const purificationItems = [
            ...playerInventory,
            ...specialItems.map(item => item.name)
        ].filter(item => 
            item.toLowerCase().includes('lotus') ||
            item.toLowerCase().includes('pure') ||
            item.toLowerCase().includes('blessed') ||
            item.toLowerCase().includes('sacred')
        );
        
        if (purificationItems.length === 0) {
            purificationContainer.innerHTML = '<p class="no-items">No purification items found. The transformation must come from within.</p>';
        } else {
            purificationContainer.innerHTML = purificationItems.map(item => 
                `<div class="purification-item" data-item="${item}">
                    <div class="item-icon">✨</div>
                    <div class="item-name">${item}</div>
                </div>`
            ).join('');
            
            // Add item interaction
            const itemElements = purificationContainer.querySelectorAll('.purification-item');
            itemElements.forEach(element => {
                element.addEventListener('click', () => {
                    this.usePurificationItem(element.dataset.item);
                });
            });
        }
    }
    
    usePurificationItem(itemName) {
        if (itemName.toLowerCase().includes('lotus')) {
            this.accelerateTransformation();
            this.showTransformationInsight(
                `The lotus petal's pure essence accelerates your transformation. ` +
                `Like the lotus rising from mud to bloom in light, you too transform ` +
                `darkness into beauty.`
            );
        } else {
            this.updateCompassionLevel(0.3);
            this.showTransformationInsight(
                `The ${itemName} amplifies your compassionate awareness, ` +
                `making the transformation process more gentle and swift.`
            );
        }
    }
    
    accelerateTransformation() {
        // Rapidly progress through remaining transformations
        this.updateAlchemicalStage('nigredo', 1.0);
        this.updateAlchemicalStage('albedo', 1.0);
        this.updateAlchemicalStage('citrinitas', 1.0);
        this.updateAlchemicalStage('rubedo', 1.0);
        this.updateCompassionLevel(1.0);
        this.transformationDepth += 10;
        this.updateConsciousnessLevel();
    }
    
    checkTransformationCompletion() {
        const transformedAspects = this.container.querySelectorAll('.shadow-aspect.transformed').length;
        const totalAspects = this.container.querySelectorAll('.shadow-aspect').length;
        
        if (transformedAspects >= totalAspects * 0.8) { // 80% transformation threshold
            this.enableBarrierDissolution();
        }
    }
    
    enableBarrierDissolution() {
        // Create dissolving barrier effect
        const barrierField = this.container.querySelector('#barrier-field');
        barrierField.classList.add('dissolving');
        
        this.showTransformationInsight(
            "The barrier begins to dissolve as you embrace all aspects of yourself " +
            "with love. What seemed like an obstacle was actually a doorway to " +
            "greater wholeness."
        );
        
        setTimeout(() => {
            this.completeTransformation();
        }, 3000);
    }
    
    completeTransformation() {
        // Record transformation achievements
        this.gameStateManager.updateState('shadow_integration_completed', true);
        this.gameStateManager.updateState('emotional_alchemy_mastered', true);
        this.gameStateManager.updateState('transformation_insights', Array.from(this.emotionalAlchemy.values()));
        this.gameStateManager.updateState('consciousness_level_achieved', this.transformationDepth);
        
        // Award transformation abilities
        this.awardTransformationAbilities();
        
        // Complete the puzzle
        if (this.onSuccess) {
            this.onSuccess();
        }
    }
    
    awardTransformationAbilities() {
        const abilities = [
            'Shadow Integration Mastery',
            'Emotional Alchemy',
            'Compassionate Awareness',
            'Non-Dual Recognition',
            'Conscious Response Choice'
        ];
        
        abilities.forEach(ability => {
            this.gameStateManager.addSpecialItem({
                id: ability.toLowerCase().replace(/\s+/g, '_'),
                name: ability,
                type: 'consciousness_ability',
                description: 'Gained through deep psychological transformation and shadow integration',
                icon: '⚗️'
            });
        });
    }
    
    showTransformationInsight(insight) {
        const insightElement = this.container.querySelector('#transformation-insight .insight-content');
        insightElement.textContent = insight;
        insightElement.parentElement.classList.add('visible');
        
        setTimeout(() => {
            insightElement.parentElement.classList.remove('visible');
        }, 6000);
    }
    
    updateAvailableActions() {
        // Enable actions based on current progress and selected emotion
        const hasSelection = !!this.currentSelectedEmotion;
        const recognizeBtn = this.container.querySelector('#recognize-shadow');
        const acceptBtn = this.container.querySelector('#accept-emotion');
        const understandBtn = this.container.querySelector('#understand-wisdom');
        const integrateBtn = this.container.querySelector('#integrate-aspect');
        
        recognizeBtn.disabled = !hasSelection;
        acceptBtn.disabled = !hasSelection || this.transformationDepth < 1;
        understandBtn.disabled = !hasSelection || this.transformationDepth < 2;
        integrateBtn.disabled = !hasSelection || this.transformationDepth < 3;
    }
}

// Export for use in the game
window.UltraEnhancedBarrierPuzzle = UltraEnhancedBarrierPuzzle;

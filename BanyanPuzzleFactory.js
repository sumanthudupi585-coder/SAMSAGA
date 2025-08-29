(function(){
  function isLowPower(){
    try{
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const saveData = conn && conn.saveData;
      const downlink = conn && conn.downlink;
      const hardware = navigator.hardwareConcurrency || 4;
      return !!saveData || (downlink && downlink < 1.5) || hardware <= 2;
    }catch(e){ return false; }
  }

  function defaultVariant(gsm){
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const low = isLowPower();
    const settings = (gsm && gsm.playerState && gsm.playerState.settings) || {};
    if (prefersReducedMotion || low || settings.enableAnimations === false) return 'fixed';
    return 'enhanced';
  }

  function create(container, gameStateManager, onSolved, options){
    const variant = (options && options.variant) || defaultVariant(gameStateManager);
    let instance = null;
    if (variant === 'ultra' && window.UltraEnhancedBanyanPuzzle){
      instance = new window.UltraEnhancedBanyanPuzzle(container, gameStateManager, onSolved);
    } else if (variant === 'enhanced' && window.EnhancedBanyanTreeHarmony){
      instance = new window.EnhancedBanyanTreeHarmony(container, gameStateManager, onSolved);
    } else if (window.FixedBanyanTreeHarmony){
      instance = new window.FixedBanyanTreeHarmony(container, gameStateManager, onSolved);
    } else if (window.EnhancedBanyanTreeHarmony){
      instance = new window.EnhancedBanyanTreeHarmony(container, gameStateManager, onSolved);
    } else if (window.UltraEnhancedBanyanPuzzle){
      instance = new window.UltraEnhancedBanyanPuzzle(container, gameStateManager, onSolved);
    }
    if (window.EventBus){ window.EventBus.emit('puzzle:created', { id: 'BanyanTreeHarmony', variant }); }
    return instance;
  }

  window.BanyanPuzzleFactory = window.BanyanPuzzleFactory || { create };
})();

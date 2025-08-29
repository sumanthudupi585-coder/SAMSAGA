(function(){
  class EventBus {
    constructor(){
      this._listeners = new Map();
    }
    on(event, handler){
      if(!this._listeners.has(event)) this._listeners.set(event, new Set());
      this._listeners.get(event).add(handler);
      return () => this.off(event, handler);
    }
    once(event, handler){
      const off = this.on(event, (...args)=>{ off(); handler(...args); });
      return off;
    }
    off(event, handler){
      const set = this._listeners.get(event);
      if(set){ set.delete(handler); if(set.size===0) this._listeners.delete(event); }
    }
    emit(event, payload){
      const set = this._listeners.get(event);
      if(set){ for(const fn of Array.from(set)){ try{ fn(payload); }catch(e){ /* no-op */ } } }
    }
    clear(){ this._listeners.clear(); }
  }
  window.EventBus = window.EventBus || new EventBus();
})();

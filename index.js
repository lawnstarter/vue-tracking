export function initialize(method) {
  return {
    bind(el, binding) {
      const { ...trackEvent } = binding.value;
      if (binding.modifiers.blur) {
        el.onblur = function(e) {
          trackEvent.type = "blur";
          trackEvent.value =
            e.target && e.target.value ? e.target.value : undefined;
          method(trackEvent);
        };
      }
      if (binding.modifiers.change) {
        el.onchange = function(e) {
          trackEvent.type = "change";
          trackEvent.value =
            e.target && e.target.value ? e.target.value : undefined;
          method(trackEvent);
        };
      }
      if (binding.modifiers.click) {
        el.onclick = function(e) {
          trackEvent.type = "click";
          trackEvent.value =
            e.target && e.target.value ? e.target.value : undefined;
          method(trackEvent);
        };
      }
      if (binding.modifiers.focus) {
        el.onfocus = function(e) {
          trackEvent.type = "focus";
          trackEvent.value =
            e.target && e.target.value ? e.target.value : undefined;
          method(trackEvent);
        };
      }
    }
  };
}

(function(window) {
  window.fivenine = window.fivenine || {};
  var callbacks = [];
  var signalAdblockDetected = function(adblockEnabled) {
    callbacks.forEach(function(callback) {
      callback(adblockEnabled);
    });
    callbacks = [];
  };
  var onload = function(event) {
    signalAdblockDetected(true);
    document.head.removeChild(event.target);
  };
  var createScriptTag = function() {
    var script = document.createElement("script");
    script.addEventListener("error", onload);
    script.addEventListener("load", onload);
    script.src = "https://assets.5x9.io/ads.js/bait.js";
    script.async = true;
    document.head.appendChild(script);
  };
  window.fivenine.detectAdblock = function(callback) {
    callbacks.push(callback);
    if(callbacks.length === 1) {
      createScriptTag();
    }
  };
  window.fivenine._signalAdblockDisabled = function() {
    signalAdblockDetected(false);
  };
})(window);

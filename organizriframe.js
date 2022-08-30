  // Create browser compatible event handler.
  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
  // Listen for a message from the iframe.
  eventer(messageEvent, function(e) {
    if (isNaN(e.data)) return;

    // replace #sizetracker with what ever what ever iframe id you need
    document.getElementById('grafanaiframe').style.height = e.data + 'px';

  }, false);
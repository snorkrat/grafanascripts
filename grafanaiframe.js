function sendHeight()
{
    if(parent.postMessage)
    {
        // replace #wrapper with element that contains 
        // actual page content
        var height= document.getElementById('body').offsetHeight;
        parent.postMessage(height, '*');
    }
}

// Create browser compatible event handler.
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen for a message from the iframe.
eventer(messageEvent, function(e) {

    if (isNaN(e.data)) return;

    sendHeight();

}, 
false);

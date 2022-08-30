/* Set configuration options and start the observer */
 
// Select the entire DOM for observing:
const target = document.querySelector('body');
 
// Create a new observer instance:
const observer = new MutationObserver(function() {
    if (document.getElementsByClassName('track-horizontal')) {
        console.log("track-horizontal was just appended!");
        var list, index;
	    list = document.getElementsByClassName("react-grid-item");
	    for (index = 0; index < list.length; ++index) {
		list[index].setAttribute("data-iframe-height", "");
	    }
        console.log("Added data-iframe-height to all react-grid-items");
    }
});
 
// Set configuration object:
const config = { childList: true };
 
// Start the observer
observer.observe(target, config);

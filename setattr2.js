/* Set configuration options and start the observer */
 
// Select the entire DOM for observing:
const target = document.querySelector('body');
 
// Create a new observer instance:
const observer = new MutationObserver(function() {
    if (document.getElementsByClassName('react-grid-item')[0]) {
        console.log("react-grid-item was just appended!");
    }
});
 
// Set configuration object:
const config = { childList: true };
 
// Start the observer
observer.observe(target, config);

document.getElementsByClassName('track-horizontal')[0].setAttribute("data-iframe-height","");

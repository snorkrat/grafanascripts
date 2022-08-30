/* Set configuration options and start the observer */
 
// Select the entire DOM for observing:
const target = document.querySelector('body');
 
// Create a new observer instance:
const observer = new MutationObserver(function() {
    if (document.getElementsByClassName('react-grid-item')[0]) {
        console.log("The new react-grid-item was just appended!");
        document.getElementsByClassName('react-grid-item')[0].setAttribute("data-iframe-height","");
    }
});
 
// Set configuration object:
const config = { childList: true };
 
// Start the observer
observer.observe(target, config);

/* Set configuration options and start the observer */
 
// Select the entire DOM for observing:
const target = document.querySelector('body');
 
// Create a new observer instance:
const observer = new MutationObserver(function() {
    if (document.querySelector('[data-panelid="63301"]')) {
        console.log("data-panelid 63301 was just appended!");
        document.querySelector('[data-panelid="63301"]').setAttribute("data-iframe-height","");
    }
});
 
// Set configuration object:
const config = { childList: true };
 
// Start the observer
observer.observe(target, config);

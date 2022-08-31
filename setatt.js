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
			console.log("Added data-iframe-height to all react-grid-items");
		}

		// Find css- classes and remove padding:
		var list2, index2;
		list2 = document.querySelectorAll("[class^=css-]");
		for (index2 = 0; index2 < list2.length; ++index2) {
			list2[index2].style.padding = "0px";
			console.log("Added 0px padding to all css- classes");
		}
	}
});

// Set configuration object:
const config = {
	childList: true
};

// Start the observer
observer.observe(target, config);

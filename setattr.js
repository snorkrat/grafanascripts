//document.addEventListener("DOMContentLoaded", function(event) {
      //console.log("DOM fully loaded and parsed");
      //document.getElementsByClassName('react-grid-item')[0].setAttribute("data-iframe-height","");
//});

document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");
	var list, index;
	list = document.getElementsByClassName("react-grid-item");
	for (index = 0; index < list.length; ++index) {
		list[index].setAttribute("data-iframe-height", "123");
	}
});

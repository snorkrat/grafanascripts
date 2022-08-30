document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
      document.getElementsByClassName('react-grid-item')[0].setAttribute("data-iframe-height","");
});

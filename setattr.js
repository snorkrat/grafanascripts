// wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(event){
  // your code here
  // first set panelid of panel in grafana
  document.querySelector('[data-panelid="63301"]').setAttribute("data-iframe-height","123");
});

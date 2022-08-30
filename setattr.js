// wait until panel is fully loaded
// first set panelid of panel in grafana

document.addEventListener('load',()=>{
  document.querySelector('[data-panelid="63301"]');
});;

// first set panelid of panel in grafana

document.querySelector('[data-panelid="63301"]').setAttribute("data-iframe-height","123");

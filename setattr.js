// wait until DOM is fully loaded

function handleSomeDiv(someDiv) { 
    console.log("div was handled");
}

const observer = new MutationObserver(function (mutations, mutationInstance) {
    const someDiv = document.querySelector('[data-panelid="63301"]');
    if (someDiv) {
        handleSomeDiv(someDiv);
        mutationInstance.disconnect();
    }
});


observer.observe(document, {
    childList: true,
    subtree:   true
});

// first set panelid of panel in grafana

document.querySelector('[data-panelid="63301"]').setAttribute("data-iframe-height","123");

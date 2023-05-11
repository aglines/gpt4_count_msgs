// Get the count from the background script and display it
function updateCount() {
    browser.runtime.getBackgroundPage().then(page => {
        document.getElementById('count').textContent = "Msgs used : " + page.getCount() + " times.";
    });
}

// Update the count whenever the popup is opened
updateCount();

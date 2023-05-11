function updateCount() {
    browser.runtime.getBackgroundPage().then(page => {
        const count = page.getMessageCount();
        document.getElementById('count').textContent = `Msgs in last 3h: ${count}`;
    });
}

updateCount();

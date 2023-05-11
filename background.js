let messageTimestamps = [];

// Listen for outgoing HTTP requests
browser.webRequest.onCompleted.addListener(
    details => {
        if (details.url.includes('https://chat.openai.com/backend-api/moderations') && details.method === "POST") {
            // Store the message timestamp
            messageTimestamps.push(Date.now());
            removeOldTimestamps();
            updateBadge();
        }
    },
    {urls: ["https://chat.openai.com/*"]}
);

function removeOldTimestamps() {
    const threeHoursAgo = Date.now() - 3 * 60 * 60 * 1000;
    messageTimestamps = messageTimestamps.filter(timestamp => timestamp >= threeHoursAgo);
}

function updateBadge() {
    const count = messageTimestamps.length;
    browser.browserAction.setBadgeText({text: String(count)});
    browser.browserAction.setBadgeBackgroundColor({color: "red"});
}

function getMessageCount() {
    return messageTimestamps.length;
}

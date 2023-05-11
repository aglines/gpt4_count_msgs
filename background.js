let count = 0;

// Listen for outgoing HTTP requests
browser.webRequest.onCompleted.addListener(
    // This function is called whenever a request is made
    details => {
        // Check if the request is the one we're looking for
        if (details.url.includes('https://chat.openai.com/backend-api/moderations') && details.method === "POST") {
            count++;
            // Update the badge
            browser.browserAction.setBadgeText({text: String(count)});
            browser.browserAction.setBadgeBackgroundColor({color: "red"});
        }
    },
    // Filter to only listen for the URLs we're interested in
    {urls: ["https://chat.openai.com/*"]}
);

// Make count accessible from other scripts
function getCount() {
    return count;
}

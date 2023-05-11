# ChatGPT4 Message Cap tracker
- This is an experimental Firefox add-on which displays the number of ChatGPT4 messages sent recently, to stay under the cap (currently 25 msgs per 3 hours)

## Issues
- Disadvantage : The extension counts all POST requests from a certain URL as if they are user-sent messages. It does not distinguish between user-sent POST requests and ChatGPT4 responses, so the badge numbers displayed are higher than the acutal count.  This renders the extension only partially useful. 
- Advantage : I spent a good long day testing and probing headers and responses so I learned a good bit about what's going on as you use the tool.  Neat!

## Done
- find the event to listen for - a POST request method to URL https://chat.openai.com/backend-api/moderations 
- add manifest.json
- add bkgrd.js, popup.js for addon, popup.html
- created icon
- tested badge count - happy path SEEMS ok so far...
- keep track of timestamps, ignore msgs older than 3h
- fix popup.html font, display etc

## To do
- update in realtime

## Maybe someday
- enact browser persistence btwn sessions
- port to other browsers .. Mullvad?

### FAQ
- "If you're worried about overuse, just use the API, since it's pay-per-token?" True. the focus here is specifically the web interface. Token counts & their costs are a future project 

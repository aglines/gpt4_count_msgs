# ChatGPT4 Message Cap tracker
- This is a Firefox add-on to show the number of ChatGPT4 messages sent recently, to stay under the cap (currently 25 msgs per 3 hours)
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


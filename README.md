# MAIN
- Goal : create a Firefox add-on to show the number of ChatGPT4 messages sent recently, to stay under the cap (currently 25 msgs per 3 hours)
## Done
- find the event to listen for - a POST request method to URL https://chat.openai.com/backend-api/moderations 
- add manifest.json
- add bkgrd.js, popup.js for addon, popup.html to display badge count
## To do
- add icon, test badge count
- calculate time elapsed so as to no longer count older msgs

### FAQ
- "If you're worried, why not just use the API, since it is pay-per-token?" True. the focus here is specifically the web interface. Token counts & their costs are a future project 


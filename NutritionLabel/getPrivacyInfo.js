var store = require('app-store-scraper');

const app_id_dictionary = {
  'Facebook': 284882215,
  'Instagram': 389801252,
  'Line': 443904275,
  'Twitter': 333903271,
  'WhatsApp': 310633997,
  'Discord': 333903271,
  'Google_Map':  585027354,
  'Booking.com': 367003839,
  'Weather_Channel': 295646461,
  'Uber': 368677368,
  'Lyft': 529379082,
  'Yelp': 284910350,
  'Google_Earth': 293622097,
  'AirBnB':  401626263,
  'Expedia': 427916203,
  'TripAdvisor': 284876795,
  'Amazon': 297606951,
  'Ebay': 282614216,
  'Target':  297430070,
  'Walmart': 338137227,
  'Doordash': 719972451,
  'Muncho':  1531327391,
  'Starbucks': 331177714,
  'Weee': 921864548,
  'Gmail': 422689480,
  'Canvas': 480883488,
  'Box': 290853822,
  'Zoom': 546505307,
  'Linked_in': 288429040,
  'Glassdoor': 589698942,
  'Handshake': 1220620171,
  'Microsoft_Team': 1113153706,
  'Piazza': 453142230,
  'Slack': 618783545,
  'Netflix': 363590051,
  'Youtube': 544007664,
  'Spotify': 324684580,
  'Tiktok':  835599320,
  'Candy_crush': 553834731,
  'Wild_rift': 1480616990,
  'Among_Us': 1351168404,
  'Duolingo': 570060128,
  'Venmo': 351727428,
  'Paypal': 283646709,
  'Chase': 298867247,
  'Wells_Fargo': 311548709,
  'Citibank': 301724680,
  'health': 1242545199,
  'weather': 1542742219,
  'Maps': 1305237481,
  'Find_My': 1535446066,
  'Stocks': 1265086241
}

const args = process.argv.slice(2);

appID = app_id_dictionary[args];

store.privacy({
  id: appID,
})
.then(console.log)
.catch(console.log);
import subprocess
import datetime

timestamp = datetime.datetime.now().strftime("%d%m%Y")

APPList = [
    'Facebook',
    'Instagram',
    'Line',
    'Twitter',
    'WhatsApp',
    'Discord',
    'Google_Map',
    'Booking.com',
    'Weather_Channel',
    'Uber',
    'Lyft',
    'Yelp',
    'Google_Earth',
    'AirBnB',
    'Expedia',
    'TripAdvisor',
    'Amazon',
    'Ebay',
    'Target',
    'Walmart',
    'Doordash',
    'Muncho',
    'Starbucks',
    'Weee',
    'Gmail',
    'Canvas',
    'Box',
    'Zoom',
    'Linked_in',
    'Glassdoor',
    'Handshake',
    'Microsoft_Team',
    'Piazza',
    'Slack',
    'Netflix',
    'Youtube',
    'Spotify',
    'Tiktok',
    'Candy_crush',
    'Wild_rift',
    'Among_Us',
    'Duolingo',
    'Venmo',
    'Paypal',
    'Chase',
    'Wells_Fargo',
    'Citibank',
    'health',
    'weather',
    'Maps',
    'Find_My',
    'Stocks',
]

for app in APPList:
    command = f"node getPrivacyInfo.js {app} > ./nutrition_result/{app}_{timestamp}.txt"  # create command string
    output = subprocess.run(command, capture_output=True, text=True, shell=True)  # execute command and capture output
    print(output.stdout)  # print output to console
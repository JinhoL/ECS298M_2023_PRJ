# App Tracking Transparency: Is iOS doing their job right?


## 1. Network Trafffic Data
Proxyman, an iOS HTTP Proxy application, was used as the main tool to intercept network traffic.(https://proxyman.io/)

Traffic is categorized into Allow tracking, Not Allow tracking, and Not Prompted Allow when using the app. 

## 2. Domain List Data
From the network traffic we collected, we gathered a list of domains accessed by each app. 

Domain lists are also categorized into Allow tracking, Not Allow tracking, and Not Prompted Allow when using the app.

To do this, In Proxyman tool,
- Select collected Apps > Export > as CSV

And using the below command, extract the domain list from the exported file.

    cat {exported_filename}.csv | awk -F ',' '{print $2}' > URL_list.txt
    cat URL_list.txt | awk -F '/' '{print $3}' | sort | uniq > {save_filename}.txt

## 3.Privacy Nutrition Labels Data

Install npm packages
```bash
npm install app-store-scraper
```
Usage

We use the app-scraper-tool below as a baseline and modified some code to get the detailed information of the label.

* search: Retrieves a list of apps that results of searching by the given term.

Run 
* Change the privacy.js file in the node_modules/app-store-scrapper/lib directory to the privacy.js file in here.
* Collect $id$ values for iOS apps using searchApp.js
* In getPrivacyInfo.js file, write App name and $id$ value
* Modify Applist in privacy_get_automation.py code
```bash
python privacy_get_automation.py
```

Collected nutrition labels store data saved in the Collected_NutritionLables directory.


## References
1. https://github.com/facundoolano/app-store-scraper#privac# App Tracking Transparency: Is iOS doing their job right?


## 1. Network Trafffic Data
Proxyman, an iOS HTTP Proxy application, was used as the main tool to intercept network traffic.(https://proxyman.io/)

Traffic is categorized into Allow tracking, Not Allow tracking, and Not Prompted Allow when using the app. 

## 2. Domain List Data
From the network traffic we collected, we gathered a list of domains accessed by each app. 

Domain lists are also categorized into Allow tracking, Not Allow tracking, and Not Prompted Allow when using the app.

To do this, In Proxyman tool,
- Select collected Apps > Export > as CSV

And using the below command, extract the domain list from the exported file.

    cat {exported_filename}.csv | awk -F ',' '{print $2}' > URL_list.txt
    cat URL_list.txt | awk -F '/' '{print $3}' | sort | uniq > {save_filename}.txt

## 3.Privacy Nutrition Labels Data

Install npm packages
```bash
npm install app-store-scraper
```
Usage

We use the app-scraper-tool below as a baseline and modified some code to get the detailed information of the label.

* search: Retrieves a list of apps that results of searching by the given term.

Run 
* Change the privacy.js file in the node_modules/app-store-scrapper/lib directory to the privacy.js file in here.
* Collect $id$ values for iOS apps using searchApp.js
* In getPrivacyInfo.js file, write App name and $id$ value
* Modify Applist in privacy_get_automation.py code
```bash
python privacy_get_automation.py
```

Collected nutrition labels store data saved in the Collected_NutritionLables directory.


## References
1. https://github.com/facundoolano/app-store-scraper#privacyy

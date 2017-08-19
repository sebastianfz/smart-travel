let config = {
    "port": 8080,
    "bodyLimit": "100kb",
    "corsHeaders": [
        "Link"
    ],
    "sessionSecret": "smarttravel",
    "sessionCollection": "sessions",
    "db": "mongodb://admin:admin@ds163698.mlab.com:63698/smart-travel",
    "googlekey": 'AIzaSyAduOLW-YfvIWSgXaUIJITwfHufHqKjenY',
    "googlePlaceSearch": "https://maps.googleapis.com/maps/api/place/textsearch/json?",
    "googlePlaceDetails": "https://maps.googleapis.com/maps/api/place/details/json?"
};
export default config;

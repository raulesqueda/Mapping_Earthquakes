// Creating map object
var myMap = L.map("map",{
  center: [40.7128,-74.0059],
  zoom:11
})
  
// Add a tile layer
let features = L.titleLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/titles/{z}/{x}/{y}?access_token={accessToken}',{
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  accessToken: API_KEY
}).addTo(myMap);

// If data.beta.nyc is down comment out this link
var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
  "35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";


// Use this link to get the geojson data.
 //var link = "static/data/nyc.geojson";


// Get our GeoJSON data using d3.json
d3.json(link, function(data){
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(myMap);
});
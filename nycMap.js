// Creating the map object
let myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// get the GeoJSON data from the nyc.geojson file
let file = "nyc.geojson";

// use the properties.borough attribute to color the boroughs
    // Bronx, Brooklyn, Queens, Manhattan, Staten Island
function boroughColor(borough){
    // use borough name as a parameter to choose one of the following colors
    if (borough == "Brooklyn") return "yellow";
    else if (borough == "Bronx") return "red";
    else if (borough == "Manhattan") return "orange";
    else if (borough == "Queens") return "green";
    else if (borough == "Staten Island") return "purple";
    else return "black";
}

// use D3 to load the data from the GeoJSON file
d3.json(file).then(
    function(data){
        // quick console log of the data from the file
        console.log(data);

        // make a quick outline of the boroughs by using L.geoJson() to process the data from the file
        // L.geoJson(data).addTo(myMap);

        // expand on the properties of L.geoJson to style the outline of the neighborhoods in NYC
        L.geoJson(data,
            {
                // use the style attribute to go and add some different styling to the outline
                /*style: {
                    color: "purple",
                    fillColor: "black",
                    fillOpacity: 0.45,
                    weight: 2
                }*/

                // use the style attribute with an inline function to choose the borough color
                style: function(feature){
                    return {                    
                        // use feature.properties.borough to get the name of the borough
                        color: "black",
                        fillColor: boroughColor(feature.properties.borough),
                        fillOpacity: 0.6,
                        weight: 2
                    }
                },

                // onEachFeature property, can be used to tell what happens when we interact with
                // the drawn out portions of the map (the boroughs and neighborhoods)
                onEachFeature: function(feature, layer){
                        // use layer.on to handle mouse events
                        layer.on({
                            // mouseover, what happens when you hover the mouse over a neighborhood
                            mouseover: function(event){
                                layer = event.target;
                                layer.setStyle({
                                    fillOpacity: 1
                                });
                            },

                            // mouseout, what happens when you move the mouse from over a neighborhood
                            mouseout: function(event){
                                layer = event.target;
                                layer.setStyle({
                                    fillOpacity: 0.6
                                });
                            },

                            // click, what happens when the neighborhood is clicked
                            click: function(event){
                                // use fitBounds functions to enlarge the neighborhood and center it
                                myMap.fitBounds(event.target.getBounds());
                            }
                        });

                        // Giving each feature a popup with information that's relevant to it
                        layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");
                    }
                }
        ).addTo(myMap);
    }
);

//where in he world?

// todo customize these number
let mapCenter = [45, -93] //this is the start point of the map

//how much are we zoomed in/out?
let zoomlevel = 5

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

//add title - the pictures that make up the map

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(bridgeMap); //todo change this name if you copied this from zoom chat; //todo change this name if you copied this from zoom chat

//When we have a set of objects, and they are all basically the same - they all
//have the same attributes

//all the things are bridges
//all the bridges have a name
//all the bridges have a span

//it's 


let bridgeList = [
    {name: 'Verrazano-Narrows', location: 'New York, NY', span:'1298.4', coordinates[40.6066, -74.0447] },
    {name: 'Golden Gate Briges', location: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783] },
    //todo the rest of the bridge
]

bridgeList.forEach(function(bridgeObject){
    let bridgeName = bridgeObject.name
    let bridgeCoordinates = bridgeObject.coordinates


    let bridgeMarker = L.marker(bridgeCoordinates)
    bridgeMarker.bindPopup('Hello') //todo change this text to text customized to this bridge
    bridgeMarker.addto(bridgeMarker)
})

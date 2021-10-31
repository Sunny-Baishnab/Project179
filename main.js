mapboxgl.accessToken = "pk.eyJ1Ijoic3VubnktYmFpc2huYWIiLCJhIjoiY2t2MmJjd3pkMDF2YjJybDdleXI5bmtkaCJ9.n-WUtJnxWmEFnbgenS5E9w"
let Latitude = 22.7868542 , Longitude = 88.3643296;

let latitude
let longitude 
let destination

$(document).ready(function(){
    alert('Please allow the Device to acces  your Location')
    initGeoLocator()
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function initGeoLocator(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }
    else{
        alert('Your Browser is not supporting Geo Location')
    }
}

function success(position){
    console.log(position)
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    var map = new mapboxgl.Map({
        container:'map',
        style:'mapbox://styles/mapbox/streets-v11',
        center:[Longitude,Latitude],
        zoom:4
    });
    
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        }).on('result',function(e){
            destination = e.result.center
        })
    );

    var img1 = document.querySelector("#amber")
    //Create a Amber Palace , Jaipur Marker and add it to the map.
    var marker1 = new mapboxgl.Marker({
        element:img1
    })
    .setLngLat([75.8513,26.9855])
    .addTo(map);

    var img2 = document.querySelector("#gateway")
    //Create a Gateway of India , Mumbai Marker and add it to the map.
    var marker2 = new mapboxgl.Marker({
        element:img2
    })
    .setLngLat([72.8347,18.9220])
    .addTo(map);

    var img3 = document.querySelector("#gate")
    //Create a India Gate , Delhi Marker and add it to the map.
    var marker3 = new mapboxgl.Marker({
        element:img3
    })
    .setLngLat([77.2295,28.6129])
    .addTo(map);

    var img4 = document.querySelector("#lotus")
    //Create a Lotus Temple , New Delhi Marker and add it to the map.
    var marker4 = new mapboxgl.Marker({
        element:img4
    })
    .setLngLat([77.2588,28.5535])
    .addTo(map);

    var img5 = document.querySelector("#victoria")
    //Create a Victoria Memorial , Kolkata Marker and add it to the map.
    var marker5 = new mapboxgl.Marker({
        element:img5
    })
    .setLngLat([88.3426,22.5448])
    .addTo(map);
}
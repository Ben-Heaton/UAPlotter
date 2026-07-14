$(document).ready(function() {

  // Initializes the map.
  let map = L.map('map').setView([13.00, 11.00], 3);  //...([Latitude, Longtitude], Zoom);

  // Map tile layer.
  let Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    minZoom: 3,
    maxZoom: 16
  });

  // Add tile layer to map.
  Esri_NatGeoWorldMap.addTo(map);

  // AFTER map finishes loading.
  $('#loading_screen').fadeOut('slow');

});

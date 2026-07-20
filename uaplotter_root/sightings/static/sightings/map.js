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

  // Hiding the side panel divs
  $("#side_panel_blade_open").hide();
  $("#side_panel").hide();

  // When map finishes loading.
  $('#loading_screen').fadeOut('slow');

  /*==== Listeners ========================================================== */

  // When the side panel opens...
  $("#side_panel_blade_closed").click(function() {
    $("#side_panel").toggle("slide");
    $("#side_panel_blade_closed").hide();
    $("#side_panel_blade_open").show();
  });

  // ...and closes.
  $("#side_panel_blade_open").click(function() {
    $("#side_panel").toggle("slide");
    $("#side_panel_blade_open").hide();
    $("#side_panel_blade_closed").show();
  });


});
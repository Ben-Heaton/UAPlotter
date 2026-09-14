$(document).ready(function() {

  // Initializes the map.
  let map = L.map('map').setView([13.00, 11.00], 3);  //...([Latitude, Longtitude], Zoom);

  // Map tile layer.
  let esriNatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    minZoom: 3,
    maxZoom: 16
  });
  
  // Add tile layer to map.
  esriNatGeoWorldMap.addTo(map);

  // Adding another attribution.
  map.attributionControl.addAttribution('&#124 Alien head design by <a href="https://www.vecteezy.com/members/inamiku">Inamiku Nanami</a>');

  // Hiding the side panel divs
  $("#side_panel_blade_open").hide();
  $("#side_panel").hide();

  // The cusom marker.
  const alienIcon = L.icon({ iconUrl: alienIconUrl });

  // Loops through every sighting coord (from the work done in map.html) and drops a marker on the map.
  sightings.forEach(function(sighting) {

    const popupContent = `
        <b>Local Date:</b> ${sighting.date}<br>
        <b>Local Time:</b> ${sighting.time}<br>
        <b>City:</b> ${sighting.city}<br>
        <b>Shape:</b> ${sighting.shape}<br>
        <b>Media:</b> ${sighting.media}<br>
        <b>Summary:</b> ${sighting.summary}...<br>
        <b>NUFORC Link:</b> <a href="${sighting.link}">${sighting.link}</a><br>
    `;

    L.marker([sighting.lat, sighting.lng], {icon: alienIcon})
     .addTo(map)
     .bindPopup(popupContent);
  });

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
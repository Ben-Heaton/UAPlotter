$(document).ready(function() {

  // Initialises the map.
  let map = L.map('map').setView([13.00, 11.00], 3);

  // Map tile layer.
  let esriNatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    minZoom: 3,
    maxZoom: 16
  });

  // Add tile layer to map.
  esriNatGeoWorldMap.addTo(map);

  // Additional attribution.
  map.attributionControl.addAttribution('&#124 Alien head design by <a href="https://www.vecteezy.com/members/inamiku">Inamiku Nanami</a>');

  // Hide side panel on load.
  $("#side_panel_blade_open").hide();
  $("#side_panel").hide();

  // Custom marker icon.
  const alienIcon = L.icon({ iconUrl: alienIconUrl });

  // Layer group to hold markers — allows clearing without affecting the map.
  let markerLayer = L.layerGroup().addTo(map);

  /* ==== Functions ========================================================= */

  // Reads all checked decade switches and returns them as an array.
  function getCheckedDecades() {
    let decades = [];
    $('.decade-switch:checked').each(function() {
      decades.push($(this).val());
    });
    return decades;
  }

  // Fetches sightings from the Django API and draws markers on the map.
  function loadSightings() {

    const decades = getCheckedDecades();

    // Build the URL — pass checked decades as a comma separated list.
    const url = decades.length > 0
      ? `/sightings/api/?decades=${decades.join(',')}`
      : `/sightings/api/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {

        // Clear existing markers before drawing new ones.
        markerLayer.clearLayers();

        // Draw a marker for each sighting.
        data.forEach(function(sighting) {
          const popupContent = `
            <b>Local Date:</b> ${sighting.date}<br>
            <b>Local Time:</b> ${sighting.time}<br>
            <b>City:</b> ${sighting.city}<br>
            <b>Shape:</b> ${sighting.shape}<br>
            <b>Media:</b> ${sighting.media}<br>
            <b>Summary:</b> ${sighting.summary}...<hr>
            <b>NUFORC Report Link:</b> <a href="${sighting.link}" target="_blank">${sighting.link}</a>
          `;
          L.marker([sighting.lat, sighting.lng], { icon: alienIcon })
           .addTo(markerLayer)
           .bindPopup(popupContent);
        });

        // Hide loading screen once markers are drawn.
        $('#loading_screen').fadeOut('slow');
      });
  }

  /* ==== Listeners ========================================================= */

  // When any decade switch is toggled, reload sightings.
  $('.decade-switch').on('change', function() {
    loadSightings();
  });

  // Side panel open.
  $("#side_panel_blade_closed").click(function() {
    $("#side_panel").toggle("slide");
    $("#side_panel_blade_closed").hide();
    $("#side_panel_blade_open").show();
  });

  // Side panel close.
  $("#side_panel_blade_open").click(function() {
    $("#side_panel").toggle("slide");
    $("#side_panel_blade_open").hide();
    $("#side_panel_blade_closed").show();
  });

  // Load all sightings on page load.
  loadSightings();

});
var cities = [
    { lat: 36.2371868, lng: -113.781447, zoom: 4, name: 'Choose Your City' },
    { lat: 35.085334, lng: -106.605553, zoom: 10, name: "Albuquerque" },
    { lat: 33.748995, lng: -84.387982, zoom: 10, name: "Atlanta" },
    { lat: 30.267153, lng: -97.743061, zoom: 10, name: "Austin" },
    { lat: 39.290385, lng: -76.612189, zoom: 10, name: "Baltimore" },
    { lat: 42.360082, lng: -71.058880, zoom: 10, name: "Boston" },
    { lat: 42.886447, lng: -78.878369, zoom: 10, name: "Buffalo" },
    { lat: 35.227087, lng: -80.843127, zoom: 10, name: "Charlotte" },
    { lat: 41.878114, lng: -87.629798, zoom: 10, name: "Chicago" },
    { lat: 39.103118, lng: -84.512020, zoom: 10, name: "Cincinnati" },
    { lat: 41.499320, lng: -81.694361, zoom: 10, name: "Cleveland" },
    { lat: 38.833882, lng: -104.821363, zoom: 10, name: "Colorado Springs" },
    { lat: 39.961176, lng: -82.998794, zoom: 10, name: "Columbus" },
    { lat: 39.739236, lng: -104.990251, zoom: 10, name: "Denver" },
    { lat: 42.331427, lng: -83.045754, zoom: 10, name: "Detroit" },
    { lat: 32.773069, lng: -97.063609, zoom: 10, name: "Dallas, Forth Worth, Arlington" },
    { lat: 31.8113477, lng: -106.5649472, zoom: 10, name: "El Paso" },
    { lat: 36.746842, lng: -119.772587, zoom: 10, name: "Fresno" },
    { lat: 21.306944, lng: -157.858333, zoom: 10, name: "Honolulu" },
    { lat: 29.760427, lng: -95.369803, zoom: 10, name: "Houston" },
    { lat: 39.768403, lng: -86.158068, zoom: 10, name: "Indianapolis" },
    { lat: 39.099727, lng: -94.578567, zoom: 10, name: "Kansas City" },
    { lat: 36.1251954, lng: -115.3154293, zoom: 10, name: "Las Vegas" },
    { lat: 34.0207289, lng: -118.6926129, zoom: 10, name: "Los Angeles" },
    { lat: 38.252665, lng: -85.758456, zoom: 10, name: "Louisville" },
    { lat: 25.761680, lng: -80.191790, zoom: 10, name: "Miami" },
    { lat: 43.0580565, lng: -88.1078585, zoom: 10, name: "Milwaukee" },
    { lat: 36.162664, lng: -86.781602, zoom: 10, name: "Nashville" },
    { lat: 30.0332191, lng: -90.4432205, zoom: 10, name: "New Orleans" },
    { lat: 40.6976684, lng: -74.2605579, zoom: 10, name: "New York City" },
    { lat: 37.804364, lng: -122.271114, zoom: 10, name: "Oakland" },
    { lat: 35.467560, lng: -97.516428, zoom: 10, name: "Oklahoma City" },
    { lat: 28.538335, lng: -81.379237, zoom: 10, name: "Orlando" },
    { lat: 39.952584, lng: -75.165222, zoom: 10, name: "Philadelphia" },
    { lat: 33.392442, lng: -111.889890, zoom: 10, name: "Phoenix, Tempe, Mesa" },
    { lat: 45.523062, lng: -122.676481, zoom: 10, name: "Portland" },
    { lat: 35.899168, lng: -78.863640, zoom: 10, name: "Raleigh-Durham" },
    { lat: 38.581572, lng: -121.494400, zoom: 10, name: "Sacramento" },
    { lat: 29.424122, lng: -98.493628, zoom: 10, name: "San Antonio" },
    { lat: 32.715738, lng: -117.161084, zoom: 10, name: "San Diego" },
    { lat: 37.7578149, lng: -122.507812, zoom: 10, name: "San Francisco" },
    { lat: 37.338208, lng: -121.886329, zoom: 10, name: "San Jose" },
    { lat: 47.606209, lng: -122.332071, zoom: 10, name: "Seattle" },
    { lat: 38.627003, lng: -90.199404, zoom: 10, name: "St. Louis" },
    { lat: 32.221743, lng: -110.926479, zoom: 10, name: "Tuscon" },
    { lat: 44.937483, lng: -93.201000, zoom: 10, name: "Twin Cities" },
    { lat: 38.8937796, lng: -77.155005, zoom: 10, name: "Washington D.C." },
    { lat: 37.6647975, lng: -97.5841226, zoom: 10, name: "Wichita" },

];
var map;
function initialize() {
    cities.forEach(function (data) {
        jQuery("#focusCities").append('<option value="' + [data.lat, data.lng, data.zoom].join('|') + '">' + data.name + '</option>');
    });
    var mapDiv = document.getElementById('googft-mapCanvas');
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
        (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
        var viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    mapDiv.style.width = isMobile ? '100%' : '100%';
    mapDiv.style.height = isMobile ? '500px' : '500px';
    map = new google.maps.Map(mapDiv, {
        center: new google.maps.LatLng(35.509676719418415, -95.47241826181306),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col2",
        from: "1kfOX2HX-d4V8g3aRbOwHnwkuDIQd4X_POx2uv1qg",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
jQuery(document).on('change', '#focusCities', function () {
    var latlngzoom = jQuery(this).val().split('|');
    var newzoom = 1 * latlngzoom[2],
        newlat = 1 * latlngzoom[0],
        newlng = 1 * latlngzoom[1];
    map.setZoom(newzoom);
    map.setCenter({ lat: newlat, lng: newlng });
});
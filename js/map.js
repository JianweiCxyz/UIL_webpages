var dist = {};
dist["Choose Your State"] = [0, [36.2371868, -113.781447], 4];
dist["California"] = [1, [36.778261, -119.4179324], 7];
dist["Maine"] = [2, [45.253783, -69.4454689], 7];
dist["Nevada"] = [2, [38.8026097, -116.419389], 7];
dist["North Carolina"] = [2, [35.7595731, -79.01929969999999], 7];
dist["Hawaii"] = [2, [19.8967662, -155.5827818], 7];
dist["Oregon"] = [3, [43.8041334, -120.5542012], 7];
dist["Delaware"] = [3, [38.9108325, -75.52766989999999], 7];
dist["Montana"] = [3, [46.8796822, -110.3625658], 7];
dist["Texas"] = [4, [31.9685988, -99.9018131], 7];
dist["Vermont"] = [5, [44.5588028, -72.57784149999999], 7];
dist["Kansas"] = [5, [39.011902, -98.4842465], 7];
dist["Pennsylvania"] = [5, [41.2033216, -77.1945247], 7];
dist["New York"] = [6, [40.7127753, -74.0059728], 7];
dist["Tennessee"] = [6, [35.5174913, -86.5804473], 7];
dist["West Virginia"] = [7, [38.5976262, -80.4549026], 7];
dist["Wyoming"] = [7, [43.0759678, -107.2902839], 7];
dist["Georgia"] = [7, [32.1656221, -82.9000751], 7];
dist["Florida"] = [8, [27.6648274, -81.5157535], 7];
dist["Alaska"] = [8, [64.2008413, -149.4936733], 7];
dist["Utah"] = [8, [39.3209801, -111.0937311], 7];
dist["Illinois"] = [9, [40.6331249, -89.3985283], 7];
dist["Ohio"] = [9, [40.4172871, -82.90712300000001], 7];
dist["Missouri"] = [10, [37.9642529, -91.8318334], 7];
dist["Washington"] = [10, [47.7510741, -120.7401385], 7];
dist["Alabama"] = [10, [32.3182314, -86.902298], 7];
dist["Mississippi"] = [11, [32.3546679, -89.3985283], 7];
dist["Arkansas"] = [11, [35.20105, -91.8318334], 7];
dist["Nebraska"] = [11, [41.4925374, -99.9018131], 7];
dist["Massachusetts"] = [11, [42.4072107, -71.3824374], 7];
dist["New Jersey"] = [12, [40.0583238, -74.4056612], 7];
dist["Maryland"] = [12, [39.0457549, -76.64127119999999], 7];
dist["South Carolina"] = [12, [33.836081, -81.1637245], 7];
dist["Idaho"] = [12, [44.0682019, -114.7420408], 7];
dist["New Hampshire"] = [12, [43.1938516, -71.5723953], 7];
dist["Wisconsin"] = [13, [43.7844397, -88.7878678], 7];
dist["Minnesota"] = [13, [46.729553, -94.6858998], 7];
dist["Louisiana"] = [13, [30.9842977, -91.96233269999999], 7];
dist["Iowa"] = [14, [41.8780025, -93.097702], 7];
dist["Connecticut"] = [14, [41.6032207, -73.087749], 7];
dist["South Dakota"] = [14, [43.9695148, -99.9018131], 7];
dist["Virginia"] = [14, [37.4315734, -78.6568942], 7];
dist["Indiana"] = [15, [40.2671941, -86.1349019], 7];
dist["Arizona"] = [15, [34.0489281, -111.0937311], 7];
dist["Oklahoma"] = [15, [35.0077519, -97.092877], 7];
dist["New Mexico"] = [15, [34.5199402, -105.8700901], 7];
dist["Michigan"] = [16, [44.3148443, -85.60236429999999], 7];
dist["North Dakota"] = [16, [47.5514926, -101.0020119], 7];
dist["Rhode Island"] = [16, [41.5800945, -71.4774291], 7];
dist["Kentucky"] = [16, [37.8393332, -84.2700179], 7];
dist["Colorado"] = [17, [39.5500507, -105.7820674], 7];
dist["Washington, D.C."] = [17, [38.9071923, -77.0368707], 11];
var states = ['California', 'Maine', 'Nevada', 'North Carolina', 'Hawaii', 'Oregon', 'Delaware', 'Montana', 'Texas',
    'Vermont', 'Kansas', 'Pennsylvania', 'New York', 'Tennessee', 'West Virginia', 'Wyoming', 'Georgia', 'Florida', 'Alaska',
    'Utah', 'Illinois', 'Ohio', 'Missouri', 'Washington', 'Alabama', 'Mississippi', 'Arkansas', 'Nebraska', 'Massachusetts',
    'New Jersey', 'Maryland', 'South Carolina', 'Idaho', 'New Hampshire', 'Wisconsin', 'Minnesota', 'Louisiana', 'Iowa',
    'Connecticut', 'South Dakota', 'Virginia', 'Indiana', 'Arizona', 'Oklahoma', 'New Mexico', 'Michigan', 'North Dakota',
    'Rhode Island', 'Kentucky', 'Colorado', 'Washington, D.C.'
]
states.sort();
states.splice(0, 0, "Choose Your State");

var map;
var layer;
var src = Array(18).fill("1oZGlrBmrRHFubCa20c1py35so5zIbSklpeWjxL4g");
src[11] = "1MjzTpkz_jwQWtrf0f7G_3Z_I_hEPWOMVdm0OENlI";
src[12] = "1ttfm8GoY3cPpiqiW398jqqWAPYzsVOG6AyisB0xY";
src[13] = "17kwAk9jmstGMyfNPklgvryjxmmBpiEHhoDVmx-nq";
src[14] = "1ITBrh7gI0oOuc_MMEnq_TuMhpJK6eAH3aQM6Yi7Y";
src[15] = "1kU78f3LNDCZAwpJwTtyeEwyPFNStDMcHRULAZAsa";
src[16] = "1e5Ehwt1ysYyViSs7M2AX3ySd9RCs6AA5W2aA5n9R";
src[17] = "1ecWyXg6SxW61za8diJ23l8aGZ1kEgZfPSVLMZ1Hh";

function initialize() {
    for (var idx in states) {
        jQuery("#focusStates").append('<option value="' + states[idx] + '">' + states[idx] + '</option>');
    }
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
        heatmap: {
            enabled: false
        },
        query: {
            select: "col2",
            from: "1oZGlrBmrRHFubCa20c1py35so5zIbSklpeWjxL4g",
            where: ""
        },
        options: {
            styleId: 2,
            templateId: 2
        }
    });
    google.maps.event.addListener(layer, 'click', function (e) {
        geoid = e.row["geoid"].value;
        e.infoWindowHtml = ' <div class="googft-info-window" align="left"> <b>Ratio of Transit Dependent Population:</b>' + e.row["Ratio of Transit Dependent Population"].value + ' <br> <form action="vote.php" method="post" target="_blank"> Have a different opinion? </br> <input onclick="initVote(true);" type="radio" name="opinion" value="1" id="yes"> <label for="yes">This is a transit desert!</label> </br> <input onclick="initVote(false);" type="radio" name="opinion" value="0" id="no"> <label for="no">This is <b>not</b> a transit desert!</label> </br> <div id="isDesert" style="display:none"> Why do you think this blockgroup is a transit desert?</br> <input type="checkbox" name="why[]" value="1" id="yes1"> <label for="yes1">Walking and biking are difficult. </label> </br> <input type="checkbox" name="why[]" value="2" id="yes2"> <label for="yes2">The buses or trains are usually too crowded.</label> </br> <input type="checkbox" name="why[]" value="3" id="yes3"> <label for="yes3">Transit service is not frequent enough.</label> </br> <input type="checkbox" name="why[]" value="4" id="yes4"> <label for="yes4">Too many transfers to important locations. </label> </br> <input type="checkbox" name="why[]" value="5" id="yes5"> <label for="yes5">It is difficult to drive places.</label></br> <textarea cols="50" rows="3" name="reasonYes" placeholder="Other reasons (Please explain with less than 280 characters):"></textarea> </div> <div id="notDesert" style="display:none"> Why do you think this blockgroup is <b>not</b> a transit desert?</br> <input type="checkbox" name="why[]" value="1" id="no1"> <label for="no1">There are enough transit lines and stops.</label> </br> <input type="checkbox" name="why[]" value="2" id = "no2"> <label for="no2">Most people have cars and the roads are good.</label> </br> <input type="checkbox" name="why[]" value="3" id="no3"> <label for="no3">I can walk and/or bike where I need to go.</label> </br> <input type="checkbox" name="why[]" value="4" id="no4"> <label for="no4">I use a combination of services (walking, biking, Uber etc.) to get where I need to go.</label> </br> <textarea cols="50" rows="3" name="reasonNo" placeholder="Other reasons (Please explain with less than 280 characters):"></textarea> </div> <input type="hidden" name="geoid" value="' + geoid + '"/>	<input type="submit" value="submit"> </form> </div> </div> ';
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
jQuery(document).on('change', '#focusStates', function () {
    var state = jQuery(this).val();
    var newzoom = 1 * dist[state][2],
        newlat = 1 * dist[state][1][0],
        newlng = 1 * dist[state][1][1];
    layer.setOptions({
        query: {
            select: "col3",
            from: src[dist[state][0]],
            where: ""
        },
        options: {
            styleId: 2,
            templateId: 2
        }
    });
    map.setZoom(newzoom);
    map.setCenter({
        lat: newlat,
        lng: newlng
    });
});

function initVote(vote) {
    document.getElementById("isDesert").style.display = vote ? "inline" : "none";
    document.getElementById("notDesert").style.display = vote ? "none" : "inline";
}

function vote(geoid, opinion) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 && this.statusText == "OK") {
            document.getElementById(geoid + "-" + opinion).style.borderStyle = "inset";
            document.getElementById(geoid + "-" + (1 - opinion)).style.borderStyle = "outset";
        }
    };
    xmlhttp.open("GET", "vote.php?geoid=" + geoid + "&vote=" + opinion);
    xmlhttp.send();
}
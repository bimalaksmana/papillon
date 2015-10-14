// Setup Map, center = Bandung
var map = L.map('map').setView([-6.9114791,107.6354606], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 18
		}).addTo(map);
// Data seed
	var markers = new Array();
	markers[0] = L.marker([-6.89856, 107.64443]).bindPopup("<h2> Sungai Cidurian</h2> <p> Sungai ini kotor, ditepinya ada pemukiman penduduk</p>");
	markers[1] = L.marker([-6.90172, 107.63499]).bindPopup("<h2> Perempatan Pahlawan </h2> <p> Selalu jadi titik macet di jam brgkt-plg kerja</p>");
	markers[2] = L.marker([-6.922, 107.61327]).bindPopup("<h2> Jalan Asia Afika </h2> <p> Community Asset </p>");
	for (var i=0; i<3; i++){
		map.addLayer(markers[i]);
	}
// Popping Highlight when Hover
	markers[0].on("mouseover", addInfo);
	var popup = L.popup();
	function addInfo(e){
		markers[0].openPopup();
		$('#place-desc').html("<h2> Place: Cibeunying Kidul </h2> <p> Kecamatan Bandung wetan</p>");
		$('#place-objects').html("<h2> Place Objects </h2> <p> Sungai Cidurian</p>");
		$('#place-problems').html("<h2> Place Problems </h2> <p> Banyak penduduk menempati pinggiran sungai, sungai jadi kotor akan sampah rumah tangga</p>");
	}
	markers[1].on("mouseover", addInfo2);
	var popup = L.popup();
	function addInfo2(e){
		markers[1].openPopup();
		$('#place-desc').html("<h2> Place: Cibeunying Kaler </h2> <p> Kecamatan Bandung Kulon</p>");
		$('#place-objects').html("<h2> Place Objects </h2> <p> Perempatan Lalu lintas</p>");
		$('#place-problems').html("<h2> Place Problems </h2> <p> Titik Macet di jam berangkat dan pulang kerja </p>");
	}
	markers[2].on("mouseover", addInfo3);
	var popup = L.popup();
	function addInfo3(e){
		markers[2].openPopup();
		$('#place-desc').html("<h2> Place: Kebon Pisang </h2> <p> Kecamatan Sumur Bandung </p>");
		$('#place-objects').html("<h2> Place Objects </h2> <p> Museum Asia Afrika</p>");
		$('#place-problems').html("<h2> Community Asset </h2> <p> Museum Asia Afrika </p>");
	}
	for (var i=0; i<3; i++){
		markers[i].on("mouseout", revert);
	}
	function revert(e){
		for (var i= 0; i<3; i++){
			markers[i].closePopup();
			$('#place-desc').html("<h2> Place name</h2> <p> Short Description </p>");
			$('#place-objects').html("<h2> Place Objects </h2> <p> Assets, development priority site, undesired use, poor appearance </p>");
			$('#place-problems').html("<h2>Place Problems</h2> <p> Problems, what and why it's happen </p>");
		}
	}
// Adding New Data from User
function onMapClick(e){
	var marker = new L.marker(e.latlng);
	marker.bindPopup("<h2> Add new Objects</h2> <form> Name: <br> <input type='text' id='input-name'/> <br> Description: <br> <textarea id='input-desc' rows='3' cols='30'> </textarea> <br> <button id='save-btn'> Save </button>  </form>")
	map.addLayer(marker);
	markers[marker._leaflet_id] = marker;
	markers[marker._leaflet_id].openPopup();
	$('body').on('click', '#save-btn', function () {
	 markers[marker._leaflet_id].bindPopup("<h2>" + $('#input-name').val() + "</h2> <p>" + $('#input-desc').val() + "</p>");	
	 markers[marker._leaflet_id].openPopup();
	});
	
}
map.on('click', onMapClick);

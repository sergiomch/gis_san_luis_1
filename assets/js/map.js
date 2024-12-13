var map = L.map('map', {
    center: [-76.99825294130808, -12.073553230461266],
    zoom: 15,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-12.084169, -77.010363], [-12.060505, -76.987014]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var colegios_san_luis = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_luis/wms?", {
	   layers: "web_san_luis:colegios_san_luis", //gisweb:centros educativos san luis
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    colegios_san_luis.addTo(map);

var cp_san_luis = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_luis/wms?", {
	   layers: "web_san_luis:cp_san_luis", //gisweb:centro poblados
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    cp_san_luis.addTo(map);

var curvas2m = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_luis/wms?", {
	   layers: "web_san_luis:curvas2m", //gisweb:curvas de nivel 2m
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    curvas2m.addTo(map);

var distrito_san_luis = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_luis/wms?", {
	   layers: "web_san_luis:distrito_san_luis", //gisweb:distrito
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    distrito_san_luis.addTo(map);

var farmacia_san_luis = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_luis/wms?", {
	   layers: "web_san_luis:farmacia_san_luis", //gisweb:farmaciass
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    farmacia_san_luis.addTo(map);

var grifo_san_luis = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_luis/wms?", {
	   layers: "web_san_luis:grifo_san_luis", //gisweb:grifo
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    grifo_san_luis.addTo(map);

var pendientes_san_luis = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_luis/wms?", {
	   layers: "web_san_luis:pendientes_san_luis", //gisweb:pendiente
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    pendientes_san_luis.addTo(map);


var baseMaps = {
    "OSM": basemapOSM
};

var overlayMaps = {
    "pendientes": pendientes_san_luis,
    "colegios": colegios_san_luis,
    "centros poblados": cp_san_luis,
    "curvas de nivel": curvas2m,
    "distrito": distrito_san_luis,
    "farmacia": farmacia_san_luis,
    "frifo": grifo_san_luis
    
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

//escala
L.control.scale({
    imperial: false
  }).addTo(map);
  

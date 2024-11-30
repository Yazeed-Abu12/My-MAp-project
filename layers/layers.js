var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_boundary_polygon_1 = new ol.format.GeoJSON();
var features_boundary_polygon_1 = format_boundary_polygon_1.readFeatures(json_boundary_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_polygon_1.addFeatures(features_boundary_polygon_1);
var lyr_boundary_polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_polygon_1, 
                style: style_boundary_polygon_1,
                popuplayertitle: "boundary_polygon",
                interactive: true,
    title: 'boundary_polygon<br />\
    <img src="styles/legend/boundary_polygon_1_0.png" /> 4283 - 7444<br />\
    <img src="styles/legend/boundary_polygon_1_1.png" /> 7444 - 10469<br />\
    <img src="styles/legend/boundary_polygon_1_2.png" /> 10469 - 12084<br />\
    <img src="styles/legend/boundary_polygon_1_3.png" /> 12084 - 20595<br />\
    <img src="styles/legend/boundary_polygon_1_4.png" /> 20595 - 111867<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_boundary_polygon_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_boundary_polygon_1];
lyr_boundary_polygon_1.set('fieldAliases', {'OSM_ID': 'OSM_ID', 'NAME': 'NAME', 'ADMIN_LVL': 'ADMIN_LVL', 'retired 2007-2008_amount': 'retired 2007-2008_amount', 'retired': 'retired', 'label_dist': 'label_dist', });
lyr_boundary_polygon_1.set('fieldImages', {'OSM_ID': 'TextEdit', 'NAME': 'TextEdit', 'ADMIN_LVL': 'TextEdit', 'retired 2007-2008_amount': 'Range', 'retired': 'Range', 'label_dist': 'TextEdit', });
lyr_boundary_polygon_1.set('fieldLabels', {'OSM_ID': 'hidden field', 'NAME': 'inline label - always visible', 'ADMIN_LVL': 'hidden field', 'retired 2007-2008_amount': 'inline label - visible with data', 'retired': 'inline label - visible with data', 'label_dist': 'hidden field', });
lyr_boundary_polygon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/SceneLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/request",
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) {
  // create graphic
  var createGraphic = function (data) {
    return new Graphic({
      geometry: data,
      symbol: data.symbol,
      attributes: data,
      popupTemplate: data.popupTemplate,
    });
  };

  const json_options = {
    query: {
      f: "json",
    },
    responseType: "json",
  };

  // request line.json
  esriRequest("./line.json", json_options).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  // create geo json layer
  const geojsonLayer = new GeoJSONLayer({
    url: "./extrudepolygon.geojson",
  });

  geojsonLayer.elevationInfo = {
    mode: "relative-to-ground",
    featureExpressionInfo: {
      expression: "$feature.elevation",
    },
    unit: "meters",
  };

  const heightVV = {
    type: "size",
    valueExpression: "$feature.Height",
    valueUnit: "meters",
  };

  // render
  geojsonLayer.renderer = {
    type: "unique-value",
    field: "color",
    uniqueValueInfos: [
      {
        value: "red1",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#FF0000",
              },
            },
          ],
        },
      },
      {
        value: "blue1",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#135EC5",
              },
            },
          ],
        },
      },
      {
        value: "blue2",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#17569F",
              },
            },
          ],
        },
      },
      {
        value: "blue3",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#69AEB2",
              },
            },
          ],
        },
      },
      {
        value: "white1",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#FFFFFF",
              },
            },
          ],
        },
      },
      {
        value: "gray1",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#F9EDF2",
              },
            },
          ],
        },
      },
      {
        value: "gray2",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#B4B4B8",
              },
            },
          ],
        },
      },
      {
        value: "gray3",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#DCD1D6",
              },
            },
          ],
        },
      },
      {
        value: "gray4",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#6D767C",
              },
            },
          ],
        },
      },
      {
        value: "yellow1",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#FFC37C",
              },
            },
          ],
        },
      },
      {
        value: "green1",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#569219",
              },
            },
          ],
        },
      },
      {
        value: "green2",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#68B596",
              },
            },
          ],
        },
      },
      {
        value: "Cửa ra vào",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "gray",
              },
            },
          ],
        },
      },
      {
        value: "Tòa nhà",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "white",
              },
            },
          ],
        },
      },
    ],
    visualVariables: [heightVV],
  };

  // create map
  var map = new Map({
    basemap: "gray-vector",
    ground: "world-elevation",
    layers: [
      geojsonLayer,
      new SceneLayer({
        url: "https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Buildings_Manhattan/SceneServer",
        renderer: {
          type: "simple",
          symbol: {
            type: "mesh-3d",
            symbolLayers: [
              {
                type: "fill",
                material: {
                  color: "white",
                },
                edges: {
                  type: "solid",
                  color: [100, 100, 100, 0.5],
                  size: 0.5,
                },
              },
            ],
          },
        },
      }),
    ],
  });

  // create view
  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [105.81373521782433, 21.026143078858794, 100],
      heading: 0,
      tilt: 30,
    },
  });

  // get longitude, latitude
  view.on("click", function (event) {
    view.hitTest(event).then(function (hitTestResults) {
      if (hitTestResults.results) {
        list_points.push([event.mapPoint.longitude, event.mapPoint.latitude]);
        string_points +=
          "[" +
          event.mapPoint.longitude +
          ", " +
          event.mapPoint.latitude +
          "],";
        copyTextToClipboard(string_points);
      }
    });
  });

  var map;
  var list_points = [];
  var string_points = "";

  view.popup.defaultPopupTemplateEnabled = true;
});

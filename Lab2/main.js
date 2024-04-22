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
  // request json
  esriRequest("./line.json", json_options).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

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

  geojsonLayer.renderer = {
    type: "unique-value",
    field: "Công dụng",
    uniqueValueInfos: [
      {
        value: "Red",
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
        value: "Yellow",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#ffff00",
              },
            },
          ],
        },
      },
      {
        value: "Office",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#1961B4",
              },
            },
          ],
        },
      },
      {
        value: "Retail",
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
        value: "Roof",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#99A7AD",
              },
            },
          ],
        },
      },
      {
        value: "Nền",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#B4C3CD",
              },
            },
          ],
        },
      },
      {
        value: "Tường",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#FFE290",
              },
            },
          ],
        },
      },
      {
        value: "Tường25White",
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
        value: "Tường30White",
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
        value: "Tường27White",
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
        value: "Tường3",
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
        value: "Green",
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
        value: "WhiteGlass",
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
        value: "RoofWhiteGlass",
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
        value: "RoofBlueGlass",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#1961B4",
              },
            },
          ],
        },
      },
      {
        value: "Flat1",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#717B81",
              },
            },
          ],
        },
      },
      {
        value: "Flat2",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#717B81",
              },
            },
          ],
        },
      },
      {
        value: "Maindoor",
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
        value: "Pillar",
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
        value: "RoofPillar",
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
        value: "BoxOnRoof",
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
        value: "HighestRoof",
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
        value: "LeftDoor",
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
        value: "LongWindow",
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
        value: "LongWindow2",
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
        value: "BlueGlass1-6",
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
        value: "YellowGlass1",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#CEB774",
              },
            },
          ],
        },
      },
      {
        value: "YellowGlass2",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#CEB774",
              },
            },
          ],
        },
      },
      {
        value: "YellowGlass3",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#CEB774",
              },
            },
          ],
        },
      },
      {
        value: "YellowGlass4",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              material: {
                color: "#CEB774",
              },
            },
          ],
        },
      },
      {
        value: "Door",
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
    ],
    visualVariables: [heightVV],
  };

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

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [105.81373521782433, 21.026143078858794, 100],
      heading: 0,
      tilt: 30,
    },
  });

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

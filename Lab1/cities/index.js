var city_symbol = {
  type: "picture-marker",
  url: "./symbols/city.png",
  width: "36px",
  height: "36px",
};

var point_template_city = {
  title: "{Name}",
  content: "Thành phố này thuộc <b>{Location}</b>.",
};

var point_template_district = {
  title: "{Name}",
  content: "Thị trấn <b>{Name}<b/>, {Location}</b> .",
};

const city = [
  {
    type: "point",
    longitude: 106.1306634320799,
    latitude: 11.369479277826407,
    Name: "Thành phố Tây Ninh",
    Location: "Tỉnh Tây Ninh, Vietnam",
    symbol: city_symbol,
    popupTemplate: point_template_city,
  },
  {
    type: "point",
    longitude: 106.1730254361892,
    latitude: 11.553648620035895,
    Name: "Tân Châu",
    Location: "Tỉnh Tây Ninh, Vietnam",
    symbol: city_symbol,
    popupTemplate: point_template_district,
  },
  {
    type: "point",
    longitude: 106.02402877501625,
    latitude: 11.312303130911445,
    Name: "Châu Thành",
    Location: "Tỉnh Tây Ninh, Vietnam",
    symbol: city_symbol,
    popupTemplate: point_template_district,
  },
];

export default city;

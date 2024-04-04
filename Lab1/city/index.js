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
]

export default city;
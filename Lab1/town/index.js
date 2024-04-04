var town_symbol = {
    type: "picture-marker",
    url: "./symbols/location.png",
    width: "36px",
    height: "36px",
};

var point_template_town = {
    title: "{Name}",
    content: "Thị xã này thuộc <b>{Location}</b>.",
};

const town = [
    {
        type: "point",
        longitude: 106.3566811158239,
        latitude: 11.028483276330478,
        Name: "Thị xã Trảng Bàng",
        Location: "Tỉnh Tây Ninh, Vietnam",
        symbol: town_symbol,
        popupTemplate: point_template_town,
    },
    {
        type: "point",
        longitude: 106.12982877341081,
        latitude: 11.283086933756913,
        Name: "Thị xã Hòa Thành",
        Location: "Tỉnh Tây Ninh, Vietnam",
        symbol: town_symbol,
        popupTemplate: point_template_town,
    },
]

export default town;
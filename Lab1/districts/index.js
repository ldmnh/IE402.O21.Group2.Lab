import { BenCau } from "./BenCau.js";
import { TrangBang } from "./TrangBang.js";
import { TanBien } from "./TanBien.js";
import { TanChau } from "./TanChau.js";
var point_template_area = {
  title: "{name}",
  content:
    "Diện tích: <b>{area} km<sup>2</sup></b>.<br>" +
    "Dân số: <b>{population} người</b>.",
};

const districts = [
  {
    type: "polygon",
    rings: TrangBang,
    name: "Huyện Trảng Bàng",
    population: 161831,
    area: 340.14,
    symbol: {
      type: "simple-fill",
      color: [150, 75, 0, 0.4],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    },
    popupTemplate: point_template_area,
  },
  {
    type: "polygon",
    rings: BenCau,
    name: "Huyện Bến Cầu",
    population: 69849,
    area: 264,
    symbol: {
      type: "simple-fill",
      color: [248, 152, 128, 0.4],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    },
    popupTemplate: point_template_area,
  },
  {
    type: "polygon",
    rings: TanBien,
    name: "Huyện Tân Biên",
    population: 102.190,
    area: 861,
    symbol: {
      type: "simple-fill",
      color: [248, 152, 128, 0.4],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    },
    popupTemplate: point_template_area,
  },
  {
    type: "polygon",
    rings: TanChau,
    name: "Huyện Tân Châu",
    population: 134.743,
    area: 1.103,
    symbol: {
      type: "simple-fill",
      color: [248, 152, 128, 0.4],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    },
    popupTemplate: point_template_area,
  },
];

export default districts;

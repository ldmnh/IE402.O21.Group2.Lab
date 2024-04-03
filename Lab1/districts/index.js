import { BenCau } from "./BenCau.js";
import { TrangBang } from "./TrangBang.js";
import { ChauThanh } from "./ChauThanh.js";
import { HoaThanh } from "./HoaThanh.js";
import { GoDau } from "./GoDau.js";
import { DuongMinhChau } from "./DuongMinhChau.js";
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
    rings: ChauThanh,
    name: "Huyện  Châu Thành",
    population: 140769,
    area: 580.94,
    symbol: {
      type: "simple-fill",
      color: [66, 135, 245, 0.4],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    },
    popupTemplate: point_template_area,
  },
  {
    type: "polygon",
    rings: HoaThanh,
    name: "Thị xã  Hòa Thành",
    population: 152339,
    area: 82.88,
    symbol: {
      type: "simple-fill",
      color: [32, 247, 100, 0.4],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    },
    popupTemplate: point_template_area,
  },
  {
    type: "polygon",
    rings: GoDau,
    name: "Huyện Gò Dầu",
    population: 158711,
    area: 260,
    symbol: {
      type: "simple-fill",
      color: [32, 247, 50, 0.4],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    },
    popupTemplate: point_template_area,
  },
  {
    type: "polygon",
    rings: DuongMinhChau,
    name: "Huyện Dương Minh Châu",
    population: 123792,
    area: 435.6,
    symbol: {
      type: "simple-fill",
      color: [32, 200, 70, 0.4],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    },
    popupTemplate: point_template_area,
  },
];

export default districts;

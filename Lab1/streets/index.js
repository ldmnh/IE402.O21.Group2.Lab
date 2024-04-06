import QLAH1 from "./QL-AH1.js";
import DT825 from "./DT.825.js";
import TL787 from "./TL787.js";
import QL22B from "./QL22B.js";
import DT821 from "./DT821_DT825_QL22.js";
import DT2 from "./DT.2.js";
import DT792 from "./DT.792.js";

var point_template_line = {
  title: "{Name}",
  content: "Đường <b>{Name} - {Location}</b>.",
};

const streets = [
  {
    type: "polyline",
    paths: QLAH1,
    symbol: {
      type: "simple-line",
      color: [226, 119, 40],
      width: 2,
    },
    Name: "QL-AH1",
    Location: "Tỉnh Tây Ninh",
    popupTemplate: point_template_line,
  },
  {
    type: "polyline",
    paths: DT825,
    symbol: {
      type: "simple-line",
      color: [111, 119, 2],
      width: 2,
    },
    Name: "DT.825",
    Location: "Tỉnh Tây Ninh",
    popupTemplate: point_template_line,
  },
  {
    type: "polyline",
    paths: TL787,
    symbol: {
      type: "simple-line",
      color: [50, 150, 80],
      width: 2,
    },
    Name: "TL 787",
    Location: "Tỉnh Tây Ninh",
    popupTemplate: point_template_line,
  },
  {
    type: "polyline",
    paths: QL22B,
    symbol: {
      type: "simple-line",
      color: [180, 40, 40],
      width: 2,
    },
    Name: "QL 22B",
    Location: "Tỉnh Tây Ninh",
    popupTemplate: point_template_line,
  },
  {
    type: "polyline",
    paths: DT821,
    symbol: {
      type: "simple-line",
      color: [255, 192, 203],
      width: 2,
    },
    Name: "DT821 - DT825 - QL22",
    Location: "Tỉnh Tây Ninh",
    popupTemplate: point_template_line,
  },
  {
    type: "polyline",
    paths: DT2,
    symbol: {
      type: "simple-line",
      color: [55, 2, 200],
      width: 2,
    },
    Name: "DT2",
    Location: "Tỉnh Tây Ninh",
    popupTemplate: point_template_line,
  },
  {
    type: "polyline",
    paths: DT792,
    symbol: {
      type: "simple-line",
      color: [51, 21, 111],
      width: 2,
    },
    Name: "DT792",
    Location: "Tỉnh Tây Ninh",
    popupTemplate: point_template_line,
  },
];

export default streets;

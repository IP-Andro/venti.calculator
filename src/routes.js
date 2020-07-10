import DiseaseList from "./components/disease-list/DiseaseList";
import ControlModes from "./components/control-modes/control-modes";

export const routes = [
  {
    path: "/",
    component: DiseaseList,
  },
  {
    path: "/disease-type",
    component: DiseaseList,
  },
  {
    path: "/control-modes",
    component: ControlModes,
  },
];

export default {
  routes,
};

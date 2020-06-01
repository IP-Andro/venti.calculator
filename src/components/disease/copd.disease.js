const COPDDisease = {
  settings: {
    s1: {
      value: "",
      type: "vt-criteria",
      description: "vt in ml/kg",
    },
    s2: {
      value: "",
      type: "",
      description: "",
    },
  },
  inputParameters: {
    p1: {
      value: "177",
      type: "height",
      description: "height in cm",
    },
    p2: {
      value: "65",
      type: "weight",
      description: "weight text in Kg",
    },
  },
  outputParameters: {
    o1: {
      operation: ["p1", "-", "100"],
      type: "ibw",
      description: "calculation in Kg",
      value: "<Not_Calculated>",
    },
    o2: {
      operation: ["s1", "*", "o1"],
      type: "vt-calculated",
      description: "in ml",
      dependsOn: ["o1"],
      value: "<Not_Calculated>",
    },
  },
};

export { COPDDisease };

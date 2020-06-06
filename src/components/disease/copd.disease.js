const COPDDisease = {
  settings: {
    set1: {
      value: "20",
      type: "vt-criteria",
      description: "vt in ml/kg",
    },
    set2: {
      value: "20",
      type: "",
      description: "",
    },
  },
  inputParameters: {
    ip1: {
      value: "177",
      type: "height",
      description: "height in cm",
    },
    ip2: {
      value: "65",
      type: "weight",
      description: "weight text in Kg",
    },
  },
  outputParameters: {
    op1: {
      operation: ["ip1", "-", "100"],
      type: "ibw",
      description: "calculation in Kg",
      value: "<Not_Calculated>",
    },
    op2: {
      operation: ["set1", "*", "op1"],
      type: "vt-calculated",
      description: "in ml",
      dependsOn: ["op1"],
      value: "<Not_Calculated>",
    },
  },
};

export { COPDDisease };

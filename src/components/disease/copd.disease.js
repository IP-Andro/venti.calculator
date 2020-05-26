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
      value: "",
      type: "height",
      description: "height in cm",
    },
    p2: {
      value: "",
      type: "dummy",
      description: "dummy text in Kg",
    },
  },
  outputParameters: {
    o1: {
      operation: "p1-100",
      type: "ibw",
      description: "caculation in Kg",
    },
    o2: {
      operation: "s1*o1",
      type: "vt-calculated",
      description: "in ml",
      dependsOn: ["o1"],
    },
  },
};

export { COPDDisease };

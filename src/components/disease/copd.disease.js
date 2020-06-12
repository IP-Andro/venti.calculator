const COPDDisease = {
  settings: {
    vt_criteria: {
      value: "6",
      description: "vt in ml/kg",
    },
    lung_complaince: {
      value: "35",
      description: "Lung Compliance Value (ml/ cm H2O)",
    },
    insp_trigger_senstivity: {
      value: "2",
      description: "Inpiration Trigger Sensitivity in LPM/cmH20",
      display: true,
    },
    exp_trigger_senstivity: {
      value: "70",
      description: "Expiration Trigger Sensitivity in % of Peak Flow ",
      display: true,
    },
    high_fio2: {
      value: "1",
      description: "Supplement Oxygen (LPM) ",
      display: true,
    },
  },
  ip: {
    height: {
      value: "177",
      description: "height in cm",
    },
    weight: {
      value: "65",
      description: "weight text in Kg",
    },
  },
  op: {
    ibw: {
      operation: ["ip.height", "-", "100"],
      description: "calculation in Kg",
      value: "<Not_Calculated>",
    },
    vt_calculated: {
      operation: ["settings.vt_criteria", "*", "op.ibw"],
      description: "in ml",
      dependsOn: ["ibw"],
      value: "<Not_Calculated>",
    },
    pressure_support: {
      operation: ["op.vt_calculated", "/", "settings.lung_complaince"],
      description: "Pressure Support (cm H2O)",
      dependsOn: ["op.vt_calculated"],
      value: "<Not_Calculated>",
    },
  },
};

export { COPDDisease };

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
  alarms: {
    low_min_vent: {
      value: "4",
      description: "Low Minute Ventilation Alarm",
    },
    high_respiratory_rate: {
      operation: ["op.bpm", "+", "15"],
      description: "High Respiratory Rate Alarm",
      value: "<Not_Calculated>",
    },
    low_respiratory_rate: {
      operation: ["op.bpm", "-", "6"],
      value: "<Not_Calculated>",
      description: "Low Respiratory Rate Alarm",
    },
    apnea: {
      value: "15",
      description: "Apnea Alarm ",
    },
  },
  ip: {
    height: {
      value: "165",
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
      description: "IBW calculation in Kg",
      dependsOn: true,
      value: "<Not_Calculated>",
    },
    vt_calculated: {
      operation: ["settings.vt_criteria", "*", "op.ibw"],
      description: "Calculated VT in ml",
      dependsOn: true,
      value: "<Not_Calculated>",
    },
    pressure_support: {
      operation: ["op.vt_calculated", "/", "settings.lung_complaince"],
      description: "Pressure Support (cm H2O)",
      dependsOn: true,
      value: "<Not_Calculated>",
    },
    bpm: {
      editingAllowedByUser: true,
      description: "Respiratory Rate(BPM)",
      dependsOn: false,
      value: "16",
    },
    epap: {
      editingAllowedByUser: true,
      description: "EPAP(cm H20)",
      dependsOn: false,
      value: "6",
    },
  },
};

export { COPDDisease };

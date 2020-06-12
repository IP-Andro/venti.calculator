const DiseaseConfig = {
  settings: {
    unique_Setting_type: {
      // default value which will be be used for calculation
      value: "Default value",
      description: "Default Description",
      // display will be set to true boolean only when the settings needs to be diaplayed to UI
      display: false,
    },
  },
  alarms: {
    unique_alarm_type: {
      // default value which will be be used for calculation else set the value to '<Not_Calculated>'
      value: "Default value",
      description: "Default Description",
      // operation is array containing formaula. If there is no operation , than dependsOn property shoudl be set false
      dependsOn: false,
      //operation is array containing formaula.
      operation: ["oper1", "operator", "oper2"],
    },
  },
  ip: {
    unique_input_parameter_type: {
      // default value will be shown to user for the input parameters that will be used for calculation
      value: "Default value",
      description: "Default Description",
    },
  },
  op: {
    unique_output_parameter_type: {
      // default value will be shown to user for the input parameters that will be used for calculation
      //   else set the value to '<Not_Calculated>'
      value: "Default value",
      description: "Default Description",
      // operation is array containing formaula. If there is no operation , than dependsOn property shoudl be set false
      dependsOn: false,
      //operation is array containing formaula.
      operation: ["oper1", "operator", "oper2"],
    },
  },
};

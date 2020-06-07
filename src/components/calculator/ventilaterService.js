const calculateValueFromOperation = (
  outputProp,
  inputParameters,
  outputParameters,
  settings
) => {
  let result = null;
  let oper = outputProp["operation"];
  const operand1 = NumberConvert(
    oper[0],
    inputParameters,
    outputParameters,
    settings
  );
  const operand2 = NumberConvert(
    oper[2],
    inputParameters,
    outputParameters,
    settings
  );

  console.log(
    "operation found - " +
      JSON.stringify(oper) +
      " opr1 " +
      operand1 +
      " opr2 " +
      operand2
  );
  switch (oper[1]) {
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    default:
  }

  return result;
};

const NumberConvert = (para, inputParameters, outputParameters, settings) => {
  let result = null;
  if (!isNaN(para)) {
    result = Number(para);
  } else {
    const variableInfo = para.split(".");
    const category = variableInfo[0];
    const property = variableInfo[1];
    switch (category) {
      case "settings":
        //settings encountered
        if (settings[property]) {
          result = Number(settings[property].value);
        }
        break;
      case "ip":
        //input parameter
        result = Number(inputParameters[property].value);
        break;
      case "op":
        // output parameter
        outputParameters[property].value = calculateValueFromOperation(
          outputParameters[property],
          inputParameters,
          outputParameters,
          settings
        );
        result = outputParameters[property].value;
        break;
      default:
        console.log("unindentified parameter type ");
    }
  }
  return result;
};

export { calculateValueFromOperation };

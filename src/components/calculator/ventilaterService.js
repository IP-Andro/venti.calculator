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
  console.log(
    "operation found - " + JSON.stringify(oper) + " result " + result
  );
  return result;
};

const NumberConvert = (para, inputParameters, outputParameters, settings) => {
  let result = null;
  if (!isNaN(para)) {
    result = Number(para);
  } else {
    if (para.indexOf("ip") === 0) {
      //input parameter
      result = Number(inputParameters[para].value);
    } else if (para.indexOf("op") === 0) {
      // output parameter
      outputParameters[para].value = calculateValueFromOperation(
        outputParameters[para],
        inputParameters,
        outputParameters
      );
      result = outputParameters[para].value;
    } else if (para.indexOf("set") === 0) {
      //settings encountered
      if (settings[para]) {
        result = Number(settings[para].value);
      }
    } else {
      console.log("unindentified parameter type ");
    }
  }
  return result;
};

export { calculateValueFromOperation };

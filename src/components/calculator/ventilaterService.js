const calculateValueFromOperation = (outputProp, inputParameters) => {
  console.log("checkk");
  var out;
  var oper = outputProp["operation"];
oper[0]=NumberConvert(oper[0], inputParameters);
oper[2]=NumberConvert(oper[2], inputParameters);
    switch(oper[1]){
        case "*":out=oper[0]*oper[2];
                break;
        case "/":out=oper[0]/oper[2];
                break;
        case "+":out=oper[0]+oper[2];
                break;
        case "-":out=oper[0]-oper[2];
                break;
    }
let result = out;
return result;
};

export { calculateValueFromOperation };
const NumberConvert=(para, ip)=>
{
    var c=para.charAt(0);
    if(typeof(c)==Number) {
        para=Number(para);
    }
    else {
        para=Number(ip[para]["value"]);
    }
    return para;
}
import { AlsDisease } from "../disease/als.disease";
import { COPDDisease } from "../disease/copd.disease";
const [user, setUser] = useContext(UserContext);
const [diseaseConfig, setDiseaseConfig] = useState(null);
useEffect(() => {
  if (user.diseaseType === APPLICATION_CONTANTS.DISEASE_TYPE.ALS) {
    console.log("Load Disease Config of " + user.diseaseType);

    setDiseaseConfig(AlsDisease);
  } else if (user.diseaseType === APPLICATION_CONTANTS.DISEASE_TYPE.COPD) {
    console.log("Load Disease Config of " + user.diseaseType);
    setDiseaseConfig(COPDDisease);
  }
}, [user.diseaseType, diseaseConfig]);

const handleSubmit = (event) => {
  event.preventDefault();
};
const handleChange = (event) => {
  console.log("someting changed " + event.target.className);
};
var out;
var oper = diseaseConfig.outputParameters["operation"];
oper[0]=NumberConvert(oper[0]);
oper[2]=NumberConvert(oper[2]);
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
NumberConvert(para)
{
    var c=para.charAt(0);
    if(typeof(c)==Number) {
        para=Number(para);
    }
    else {
        para=Number(diseaseConfig.inputParameters[para]["value"]);
    }
    return para;
}

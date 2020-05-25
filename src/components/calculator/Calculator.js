import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

const Calculator = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <p>
        This page directly opens the pre-configured calculator Following are the
        selected details
      </p>
      <ul>
        {user.diseaseType ? <li>{user.diseaseType}</li> : ""}
        {user.controlMode ? <li>{user.controlMode}</li> : ""}
      </ul>
    </div>
  );
};

export default Calculator;

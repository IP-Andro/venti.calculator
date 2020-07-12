import React, { useEffect, useContext } from "react";
import SimpleList from "../reusables/list";
import Button from "@material-ui/core/Button";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { APPLICATION_CONTANTS } from "../../utils/constants";
import "./DiseaseList.css";
export default function DiseaseList() {
  const [user, setUser] = useContext(UserContext);
  const handlDiseaseType = (event) => {
    setUser({
      ...user,
      diseaseType: event.target.value,
    });
  };

  const diseaseList = [
    {
      item: "ALS / MND",
      desc: "Amyotrophic lateral sclerosis / Motor neurone disease",
      val: APPLICATION_CONTANTS.DISEASE_TYPE.ALS,
    },
    {
      item: "COPD",
      desc: "Chronic obstructive pulmonary disease",
      val: APPLICATION_CONTANTS.DISEASE_TYPE.COPD,
    },
    { item: "Others", val: "other" },
  ];
  return (
    <div className="disease-container">
      <h1 className="disease-heading">DISEASE TYPE</h1>
      <SimpleList list={diseaseList} onChangeHandler={handlDiseaseType} />
      <Button className="nav-button" variant="contained" color="secondary">
        <Link className="nav-button-link" to="/control-modes">
          Next
        </Link>
      </Button>
    </div>
  );
}

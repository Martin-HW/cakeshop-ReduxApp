import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { addCake } from "../redux";
import { setCake } from "../redux";
import "./CakeContainer.css";

const CakeContainer = props => {
  return (
    <div>
      <h2>The number of cakes is: {props.numOfCakes} </h2>
      <button onClick={props.buyCake}> Buy A Cake </button>
      <button className="middleButton" onClick={props.setCake}>
        Set back to Zero
      </button>
      <button onClick={props.addCake}> Add A Cake </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    setCake: () => dispatch(setCake()),
    addCake: () => dispatch(addCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

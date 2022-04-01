import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div
			className="container d-flex"
			style={{
				background: "black",
				color: "white",
				justifyContent: "center",
				fontSize: "xx-large",
				fontWeight: "bold",
			}}>
			<i class="fa-regular fa-clock"></i>
			<div className="box">{props.prop1}</div>
			<div className="box">{props.prop2}</div>
			<div className="box">{props.prop3}</div>
			<div className="box">{props.prop4}</div>
			<div className="box">{props.prop5}</div>
			<div className="box">{props.prop6}</div>
		</div>
	);
};

export default Home;

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seconds = 0;

function count() {
	seconds += 1;
	let secondsString = "00000" + seconds;
	let display = secondsString.toString().slice(-6);
	console.log(seconds);

	ReactDOM.render(
		<Home
			prop1={display.charAt(0)}
			prop2={display.charAt(1)}
			prop3={display.charAt(2)}
			prop4={display.charAt(3)}
			prop5={display.charAt(4)}
			prop6={display.charAt(5)}
		/>,
		document.querySelector("#app")
	);
}
setInterval(count, 1000);

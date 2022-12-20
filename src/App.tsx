//import React from "react";
//import { useState } from "react";

import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { Form } from "./components/Form";

export default function App() {
	//const [count, setCount] = useState(0);

	function handleClick() {
		alert("You clicked me");
	}
	return (
		<div className="space-y-4">
			<Header title="page 1" navElements={["Home", "About", "Blog"]} />
			{/* {React.createElement(Header, { title: "page 2" }, null)} */}
			<h1>My Heading</h1>
			<div>
				<p>First Paragraph</p>
				<p>Second Paragraph</p>
			</div>
			<Counter />
			<Form />
			<button onClick={handleClick}></button>
			{/* <button onClick={(event)=> console.log(event)}>Click me</button> */}
		</div>
	);
	// return React.createElement(
	// 	"button",
	// 	{
	// 		className: "text-zinc-500",
	// 	},
	// 	"Click me"
	// );
	// return React.createElement("div", {}, [
	//   React.createElement("h1", {}, "My Heading"),
	//   React.createElement("div", {}, [
	//     React.createElement("p", {}, "First Paragraph"),
	//     React.createElement("p", {}, "Second Paragraph"),
	//   ]),
	// ]);
}

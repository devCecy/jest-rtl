import "./App.css";
import { useState } from "react";

function App() {
	const [btnColor, setBtnColor] = useState("red");
	const newBtnColor = btnColor === "red" ? "blue" : "red";

	// const [isChecked, setIsChecked] = useState(false);
	return (
		<div>
			<button
				// disabled={isChecked}
				style={{ backgroundColor: btnColor }}
				onClick={() => setBtnColor(newBtnColor)}
			>
				Change to {newBtnColor}
			</button>
		</div>
	);
}

export default App;

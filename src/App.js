import "./App.css";
import { useState } from "react";

function App() {
	const [btnColor, setBtnColor] = useState("red");
	const [isChecked, setIsChecked] = useState(false);
	const newBtnColor = btnColor === "red" ? "blue" : "red";

	return (
		<div>
			<button
				disabled={isChecked}
				style={{ backgroundColor: btnColor }}
				onClick={() => setBtnColor(newBtnColor)}
			>
				Change to {newBtnColor}
			</button>
			<input
				type="checkbox"
				id="disabled-button-checkbox"
				onChange={(e) => setIsChecked(e.target.checked)}
			/>
			<label htmlFor="disabled-button-checkbox">Disable button</label>;
		</div>
	);
}

export default App;

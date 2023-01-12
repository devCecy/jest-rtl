import "./App.css";
import { useState } from "react";

/**
 * 카멜케이스의 대문자 앞에 공백을 넣어줍니다.
 * @param {*} colorName
 * @returns
 */
export const replaceCamelWithSpaces = (colorName) => {
	return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
	const [btnColor, setBtnColor] = useState("red");
	const [isChecked, setIsChecked] = useState(false);
	const newBtnColor = btnColor === "red" ? "blue" : "red";

	return (
		<div>
			<button
				disabled={isChecked}
				style={{ backgroundColor: isChecked ? "gray" : btnColor }}
				onClick={() => setBtnColor(newBtnColor)}
			>
				Change to {newBtnColor}
			</button>
			<label htmlFor="disabled-button-checkbox">Disable button</label>;
			<input
				type="checkbox"
				id="disabled-button-checkbox"
				onChange={(e) => setIsChecked(e.target.checked)}
			/>
		</div>
	);
}

export default App;

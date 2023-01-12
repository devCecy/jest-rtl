import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("버튼의 초기 색상이 올바른지 확인하고, 버튼 클릭 시 업데이트합니다", () => {
	render(<App />);
	const colorBtn = screen.getByRole("button", { name: "Change to blue" });

	expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

	// 버튼을 클릭했을 때,
	fireEvent.click(colorBtn);
	expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });
	expect(colorBtn).toHaveTextContent("Change to red");
});

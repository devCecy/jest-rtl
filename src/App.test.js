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

test("체크박스의 초기조건을 테스트합니다.", () => {
	// 체크박스의 초기조건은 활성화 상태이다.
	render(<App />);
	const colorBtn = screen.getByRole("button", { name: "Change to blue" });
	expect(colorBtn).toBeEnabled();

	const checkbox = screen.getByRole("checkbox");
	expect(checkbox).not.toBeChecked();
});

test("체크박스의 상태에따라 버튼의 활성화 여부가 결정됩니다.", () => {
	render(<App />);

	// 체크박스가 체크되면, 버튼은 비활성화된다.
	const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
	const colorBtn = screen.getByRole("button", { name: "Change to blue" });

	fireEvent.click(checkbox);
	expect(colorBtn).toBeDisabled();

	// 체크박스가 언체크되면, 버튼은 활성화된다.
	fireEvent.click(checkbox);
	expect(colorBtn).toBeEnabled();
});

test("버튼 비활성화 시 버튼 색은 gray로 바뀐다.", () => {
	render(<App />);
	const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
	const colorBtn = screen.getByRole("button", { name: "Change to blue" });

	// 버튼이 비활성화되면, 버튼색은 gray로 변한다.
	fireEvent.click(checkbox);
	expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });

	// 버튼이 활성화되면, 버튼색은 red로 변한다.
	fireEvent.click(checkbox);
	expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

	// 버튼을 클릭해서 색을 변경하고, 버튼을 비활성화시키면 버튼이 gray가 된다.
	fireEvent.click(colorBtn);
	fireEvent.click(checkbox);
	expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });

	// 다시 버튼을 활성화시키면, 버튼색은 blue다
	fireEvent.click(checkbox);
	expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });
});

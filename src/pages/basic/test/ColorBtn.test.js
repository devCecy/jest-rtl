import { render, screen, fireEvent } from "@testing-library/react";

import ColorBtn, { replaceCamelWithSpaces } from "../ColorBtn";

test("버튼의 초기 색상이 올바른지 확인하고, 버튼 클릭 시 업데이트합니다", () => {
	render(<ColorBtn />);
	const colorBtn = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});

	expect(colorBtn).toHaveStyle({ backgroundColor: "MediumSeaGreen" });

	// 버튼을 클릭했을 때,
	fireEvent.click(colorBtn);
	expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });
	expect(colorBtn).toHaveTextContent("Change to Medium Sea Green");
});

test("체크박스의 초기조건을 테스트합니다.", () => {
	// 체크박스의 초기조건은 활성화 상태이다.
	render(<ColorBtn />);
	const colorBtn = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});
	expect(colorBtn).toBeEnabled();

	const checkbox = screen.getByRole("checkbox");
	expect(checkbox).not.toBeChecked();
});

test("체크박스의 상태에따라 버튼의 활성화 여부가 결정됩니다.", () => {
	render(<ColorBtn />);

	// 체크박스가 체크되면, 버튼은 비활성화된다.
	const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
	const colorBtn = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});

	fireEvent.click(checkbox);
	expect(colorBtn).toBeDisabled();

	// 체크박스가 언체크되면, 버튼은 활성화된다.
	fireEvent.click(checkbox);
	expect(colorBtn).toBeEnabled();
});

test("버튼 비활성화 시 버튼 색은 gray로 바뀐다.", () => {
	render(<ColorBtn />);
	const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
	const colorBtn = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});

	// 버튼이 비활성화되면, 버튼색은 gray로 변한다.
	fireEvent.click(checkbox);
	expect(colorBtn).toHaveStyle({ backgroundColor: "midiumseagreen" });

	// 버튼이 활성화되면, 버튼색은 midiumseagreen 변한다.
	fireEvent.click(checkbox);
	expect(colorBtn).toHaveStyle({
		backgroundColor: "midiumseagreen",
	});

	// 버튼을 클릭해서 색을 변경하고, 버튼을 비활성화시키면 버튼이 gray가 된다.
	fireEvent.click(colorBtn);
	fireEvent.click(checkbox);
	expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });

	// 다시 버튼을 활성화시키면, 버튼색은 MidnightBlue이다.
	fireEvent.click(checkbox);
	expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("카멜케이스의 대문자 앞에 스페이스가 생성됩니다.", () => {
	test("대문자가 없을 경우", () => {
		expect(replaceCamelWithSpaces("Red")).toBe("Red");
	});

	test("대문자가 하나일 경우", () => {
		expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
	});

	test("대문자가 여러개인 경우", () => {
		expect(replaceCamelWithSpaces("MediumSeaGreen")).toBe("Medium Sea Green");
	});
});

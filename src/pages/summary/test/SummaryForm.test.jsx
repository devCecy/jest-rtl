import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("체크박스 체크여부에 따라 버튼 활성화가 결정됩니다.", async () => {
	const user = userEvent.setup();

	render(<SummaryForm />);
	// 체크박스는 언체크가 디폴트
	const checkbox = screen.getByRole("checkbox", {
		name: /terms and conditions/i,
	});
	const confirmButton = screen.getByRole("button", {
		name: /confirm order/i,
	});

	expect(checkbox).not.toBeChecked();

	// 체크박스 체크하면 버튼 활성화
	await user.click(checkbox);
	expect(confirmButton).toBeEnabled();

	// 체크박스 언체크 하면 버튼 비활성화
	await user.click(checkbox);
	expect(confirmButton).toBeDisabled();
});

test("팝오버 기능이 호버에따라 작동합니다.", async () => {
	const user = userEvent.setup();
	render(<SummaryForm />);

	// 팝오버는 hiddend으로 시작한다.
	const nullPopover = screen.queryByText(
		/No ice cream will actually be delivered/i
	);
	expect(nullPopover).not.toBeInTheDocument();

	// 체크박스 라벨에 마우스오버하면 찹오버가 생긴다.
	const termsAndConditions = screen.getByText(/Terms and Conditions/i);
	await user.hover(termsAndConditions);

	const popover = screen.getByText(/No ice cream will actually be delivered/i);
	expect(popover).toBeInTheDocument();

	// 체크박스 라벨에 마우스오버를 끝내면 팝오버가 사라진다.
	await user.unhover(termsAndConditions);
	expect(popover).not.toBeInTheDocument();
});

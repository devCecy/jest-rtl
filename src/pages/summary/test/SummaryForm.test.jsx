import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("체크박스 체크여부에 따라 버튼 활성화가 결정됩니다.", () => {
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
	fireEvent.click(checkbox);
	expect(confirmButton).toBeEnabled();

	// 체크박스 언체크 하면 버튼 비활성화
	fireEvent.click(checkbox);
	expect(confirmButton).toBeDisabled();
});

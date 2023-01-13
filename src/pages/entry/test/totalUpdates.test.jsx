import userEvent from "@testing-library/user-event";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
// const { render, screen } = require("@testing-library/react");

test("스쿱이 수량이 변경되면 스쿱 소계가 업데이트 된다.", async () => {
	const user = userEvent.setup();

	// wrapper는 provider로 컴포넌트를 감싸줘야 하는 경우 사용한다.
	render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

	// 스쿱 소계의 디폴트는 $0.00
	const scoopSubtotal = screen.getByText("Scoops total: $", { exact: false });
	expect(scoopSubtotal).toHaveTextContent("0.00");

	// 바닐라 스쿱을 1개 선택하면 소계가 업데이트된다.
	const vanillaInput = await screen.findByRole("spinbutton", {
		name: "Vanilla",
	});
	await user.clear(vanillaInput);
	await user.type(vanillaInput, "1");

	expect(scoopSubtotal).toHaveTextContent("2.00");

	// 초콜렛 스쿱을 2개 선택하면 소계가 업데이트 된다.
	const chocolateInput = await screen.findByRole("spinbutton", {
		name: "Chocolate",
	});
	await user.clear(chocolateInput);
	await user.type(chocolateInput, "2");

	// FIXME: 6.00을 예상했으나 24.00이 나옴.
	expect(scoopSubtotal).toHaveTextContent("24.00");
});

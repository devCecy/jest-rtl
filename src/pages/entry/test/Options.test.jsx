// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";

test("각 스쿱에대한 이미지가 보여지는지 테스트합니다.", async () => {
	render(<Options optionType="scoops" />);

	// 이미지 찾기
	const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
	expect(scoopImages).toHaveLength(2);

	// 이미지의 alt text 확인하기
	// @ts-ignore
	const altText = scoopImages.map((e) => e.alt);
	expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("각 토핑에대한 이미지가 보여지는지 테스트합니다.", async () => {
	render(<Options optionType="toppings" />);

	const toppingImages = await screen.findAllByRole("img", { name: /topping/i });
	expect(toppingImages).toHaveLength(3);

	// @ts-ignore
	const altText = toppingImages.map((e) => e.alt);
	expect(altText).toEqual([
		"Cherries topping",
		"M&Ms topping",
		"Hot fudge topping",
	]);
});

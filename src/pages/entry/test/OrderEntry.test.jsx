import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import OrderEntry from "../OrderEntry";

test("토핑과 스쿱 api에러가 발생하면 에러 alert이 발생합니다.", async () => {
	// 핸들러를 리셋해준다.
	server.resetHandlers(
		rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
			res(ctx.status(500))
		),
		rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
			res(ctx.status(500))
		)
	);

	render(<OrderEntry />);

	// alert 2개가 실행되고 있는데 컴퓨터 속도에 따라 alert하나가 먼저 생성되 테스트가 오류가 날 수 있다.
	// 그래서 프로미스가 모두 해결될 때까지 기다려야 하는 경우 waitFor를 사용해서 처리해줄 수 있다.
	await waitFor(async () => {
		// alerts는 catch로 에러가 잡혀야 발생함 -> 비동기식임 -> find~사용!
		const alerts = await screen.findAllByRole("alert");
		expect(alerts).toHaveLength(2);
	});
});

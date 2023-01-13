import { rest } from "msw";

export const handlers = [
	rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
		return res(
			ctx.json([
				{ name: "Chocolate", imagePath: "/images/chocolate.png" },
				{ name: "Vanilla", imagePath: "/images/vanilla.png" },
			])
		);
	}),
	// Match a POST request issued against the same origin
	// as the current application.
	// rest.post('/author/:authorId/:postId', responseResolver),
];

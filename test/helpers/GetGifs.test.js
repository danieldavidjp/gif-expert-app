import { GetGifs } from "../../src/helper/GetGifs";

describe("Test in getGifs()", () => {
	test("Must return a gif array", async () => {
		const gifs = await GetGifs("One Punch");

		// console.log(gifs);

		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});

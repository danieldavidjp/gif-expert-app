import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");
describe("Test on GifGrid", () => {
	const category = "Potter";
	test("should show loading initially", () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);
		expect(screen.getByText("Loading..."));

		expect(screen.getByText(category));
	});

	test("should show images when loaded", () => {
		const gifs = [
			{
				id: 1,
				title: "Potter",
				url: "https://localhost/potter.jpg",
			},
			{
				id: 2,
				title: "Weasly",
				url: "https://localhost/weasly.jpg",
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole("img").length).toBe(2);
	});
});

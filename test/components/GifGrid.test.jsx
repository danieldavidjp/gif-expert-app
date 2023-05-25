import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Test on GifGrid", () => {
	const category = "Potter";
	test("should show loading initially", () => {
		render(<GifGrid category={category} />);
		expect(screen.getByText("Loading..."));

		expect(screen.getByText(category));
	});

	test("should show images when loaded", () => {});
});

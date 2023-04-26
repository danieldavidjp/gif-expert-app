import { render, screen } from "@testing-library/react";
import { GifGridCard } from "../../src/components/GifGridCard";

describe("Tests for GifGridCard component", () => {
	const title = "Harry Potter";
	const url = `https://media.giphy.com/media/mz1kJeDVueKC4/giphy.gif`;

	test("should match the snapshot", () => {
		const { container } = render(<GifGridCard title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test("must show the image with the url and alt indicate", () => {
		render(<GifGridCard title={title} url={url}></GifGridCard>);
		// screen.debug();

		// expect(screen.getByRole('img').src).toBe(url);
		// expect(screen.getByRole('img').alt).toBe(title);
		const { src, alt } = screen.getByRole("img");
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test("must show the title of the component", () => {
		render(<GifGridCard title={title} url={url} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});

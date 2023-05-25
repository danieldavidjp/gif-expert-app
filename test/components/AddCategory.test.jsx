import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Test on <AddCategory>", () => {
	test("should change the value on the text box", () => {
		render(<AddCategory onNewCategory={() => {}} />);

		const input = screen.getByRole("textbox");

		fireEvent.input(input, { target: { value: "Saitama" } });

		expect(input.value).toBe("Saitama");
	});

	test("onNewCategory should have been called", () => {
		const inputValue = "Harry Potter";

		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");

		fireEvent.input(input, { target: { value: inputValue } });

		fireEvent.submit(form);

		expect(input.value).toBe("");

		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test("shouldn't call onNewCategory if input is empty", () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole("form");

		fireEvent.submit(form);

		expect(onNewCategory).not.toHaveBeenCalled();
	});
});

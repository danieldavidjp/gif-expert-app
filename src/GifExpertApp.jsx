import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["Back to The Future"]);

	console.log(categories);
	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return setCategories([newCategory, ...categories.filter((c) => c != newCategory)]);
		setCategories([newCategory, ...categories]);
	};
	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory onNewCategory={(newCategory) => onAddCategory(newCategory)} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};

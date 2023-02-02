export const GetGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=TY8mQlOu8gUJQGfS392WKetEEiHvoZ3M&q=${category}&limit=10`;

	const resp = await fetch(url);
	const { data } = await resp.json();

	return data.map((g) => ({
		id: g.id,
		title: g.title,
		url: g.images.downsized_medium.url,
	}));
};

import React from "react";

export const GifGridCard = ({ title, url }) => {
	return (
		<div className="card">
			<img src={url} alt="" />
			<p>{title}</p>
		</div>
	);
};

import React from "react";
import PropTypes from "prop-types";

export const GifGridCard = ({ title, url }) => {
	return (
		<div className="card">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifGridCard.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

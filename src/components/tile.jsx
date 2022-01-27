import React from "react";
import { Link } from "react-router-dom";

export default function Tile({ item }) {
	return (
		<>
			{Object.values(item).map((value, index) => (
				<p
					key={index + "_"}
					className={index === 0 ? "title-tile" : ""}
				>
					{index === Object.keys(item).indexOf("name") ||
					index === Object.keys(item).indexOf("contact") ? (
						<Link to={"/" + value}>{value}</Link>
					) : (
						value
					)}
				</p>
			))}
			<br />
		</>
	);
}

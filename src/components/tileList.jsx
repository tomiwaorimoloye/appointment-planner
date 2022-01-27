import React from "react";
import Tile from "./tile";

export default function TileList({ list }) {
	return (
		<div className="tile-container">
			{list.map((item, index) => (
				<Tile key={index} item={item} />
			))}
		</div>
	);
}

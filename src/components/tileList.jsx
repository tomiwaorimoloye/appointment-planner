import React from "react";
import Tile from "./tile";

export default function TileList({ list }) {
	return (
		<>
			{list.map((item, index) => (
				<Tile key={index} item={item} />
			))}
		</>
	);
}

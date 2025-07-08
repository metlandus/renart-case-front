import { useState } from "react";
import { Rating } from "@mui/material";

export function ProductCard({ ring }) {
	const [color, setColor] = useState("yellow");

	console.log(ring);
	return (
		<div className="min-w-70 flex flex-col gap-3">
			<img src={ring.images[color]} className="rounded-2xl" />
			<h3 className="font-mont-bold text-[15px]">{ring.name}</h3>
			<p className="font-mont">${Math.ceil(ring.price)}.00 USD</p>
			<div className="flex gap-2">
				<button
					onClick={() => setColor("yellow")}
					className={`bg-Yellowg w-5 h-5 rounded-full cursor-pointer ${
						color === "yellow"
							? "ring-1 ring-gray-500 ring-offset-3"
							: ""
					}`}
				></button>
				<button
					onClick={() => setColor("white")}
					className={`bg-Whiteg w-5 h-5 rounded-full cursor-pointer ${
						color === "white"
							? "ring-1 ring-gray-800 ring-offset-3"
							: ""
					}`}
				></button>
				<button
					onClick={() => setColor("rose")}
					className={`bg-Roseg w-5 h-5 rounded-full cursor-pointer ${
						color === "rose"
							? "ring-1 ring-gray-800 ring-offset-3"
							: ""
					}`}
				></button>
			</div>
			<p className="text-xs first-letter:capitalize">{color} Gold</p>
			<div className="flex items-center gap-2">
				<Rating
					name="read-only"
					precision={0.1}
					value={ring.popularityScore}
					readOnly
				/>
				<p className="text-sm">{ring.popularityScore}/5</p>
			</div>
		</div>
	);
}

import { ProductCard } from "./ProductCard";
import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

async function getProducts() {
	const url = "http://localhost:5000/api/rings";

	try {
		const response = await fetch(url, { method: "GET" });
		if (!response.ok) {
			throw new Error(`Response Status: ${response.status}`);
		}
		const rings = await response.json();
		return rings;
	} catch (error) {
		console.error(error.message);
		return [];
	}
}

export function ProductGrid() {
	const [rings, setRings] = useState([]);
	const scrollRef = useRef(null);

	useEffect(() => {
		async function fetchData() {
			const data = await getProducts();
			setRings(data);
		}
		fetchData();
	}, []);

	return (
		<div className="flex flex-col items-center">
			<h2 className="text-[45px]">Product List</h2>
			<div className="relative w-full">
				<button
					onClick={() =>
						scrollRef.current.scrollBy({
							left: -752,
							behavior: "smooth",
						})
					}
					className="absolute lg:left-20 top-1/2 cursor-pointer hover:bg-gray-200 transition-all duration-200 -translate-y-1/2 z-10 bg-white rounded-full p-2"
				>
					<IoIosArrowBack size={26} />
				</button>
				<div
					ref={scrollRef}
					className="mx-auto container p-12 w-full flex flex-row gap-24 overflow-x-scroll custom-scrollbar"
				>
					{rings.map((ring, index) => (
						<ProductCard key={index} ring={ring} />
					))}
					<button
						onClick={() =>
							scrollRef.current.scrollBy({
								left: 752,
								behavior: "smooth",
							})
						}
						className="absolute right-0 md:right-10 lg:right-20 top-1/2 cursor-pointer hover:bg-gray-200 transition-all duration-200 -translate-y-1/2 z-10 bg-white rounded-full p-2"
					>
						<IoIosArrowForward size={26} />
					</button>
				</div>
			</div>
		</div>
	);
}

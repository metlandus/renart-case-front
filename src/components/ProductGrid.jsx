import { Slider } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

async function getProducts(popularityScore = 0, priceMin = 0, priceMax = 1000) {
	const url = `https://renart-case-backend.onrender.com/api/rings?popularityScore=${popularityScore}&priceMin=${priceMin}&priceMax=${priceMax}`;

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
	const [sliderValue, setSliderValue] = useState(0);
	const [priceRange, setPriceRange] = useState([0, 600]);
	const scrollRef = useRef(null);

	useEffect(() => {
		async function fetchData() {
			const data = await getProducts();
			setRings(data);
		}
		fetchData();
	}, []);

	async function handleSliderChange(event, newValue) {
		setSliderValue(newValue);
		const filteredData = await getProducts(newValue);
		setRings(filteredData);
	}

	async function handlePriceRangeChange(event, newValue) {
		setPriceRange(newValue);
		const filteredData = await getProducts(
			sliderValue,
			newValue[0],
			newValue[1]
		);
		setRings(filteredData);
	}

	return (
		<div className="flex flex-col items-center mt-10">
			<div className="flex flex-col lg:flex-row lg:gap-20">
				<div className="w-64 mb-8">
					<p className="text-sm mb-2">
						Filter by Minimum Popularity Score
					</p>
					<Slider
						value={sliderValue}
						onChange={handleSliderChange}
						aria-label="Popularity Score"
						step={1}
						marks
						min={0}
						max={5}
						valueLabelDisplay="auto"
						sx={{
							color: "#4F7964",
							"& .MuiSlider-thumb": {
								backgroundColor: "#4F7964",
							},
							"& .MuiSlider-track": {
								backgroundColor: "#4F7964",
							},
							"& .MuiSlider-rail": {
								backgroundColor: "#d3d3d3",
							},
							"& .MuiSlider-mark": {
								backgroundColor: "#4F7964",
							},
							"& .MuiSlider-markActive": {
								backgroundColor: "#ffffff",
							},
						}}
					/>
				</div>

				<div className="w-64 mb-8">
					<p className="text-sm mb-2">Price Range</p>
					<Slider
						value={priceRange}
						onChange={handlePriceRangeChange}
						aria-label="Price Range"
						step={50}
						min={0}
						max={600}
						valueLabelDisplay="auto"
						valueLabelFormat={(value) => `$${value}`}
						range="true"
						sx={{
							color: "#4F7964",
							"& .MuiSlider-thumb": {
								backgroundColor: "#4F7964",
							},
							"& .MuiSlider-track": {
								backgroundColor: "#4F7964",
							},
							"& .MuiSlider-rail": {
								backgroundColor: "#d3d3d3",
							},
						}}
					/>
					<div className="flex justify-between text-xs text-gray-500 mt-1">
						<span>${priceRange[0]}</span>
						<span>${priceRange[1]}</span>
					</div>
				</div>
			</div>

			<h2 className="text-[45px]">Product List</h2>
			<div className="relative w-full">
				<button
					onClick={() =>
						scrollRef.current.scrollBy({
							left: -752,
							behavior: "smooth",
						})
					}
					className={`absolute lg:left-20 top-1/2 cursor-pointer hover:bg-gray-200 transition-all duration-200 -translate-y-1/2 z-10 bg-white rounded-full p-2 lg:${
						rings.length < 4 ? "hidden" : "block"
					}`}
				>
					<IoIosArrowBack size={26} />
				</button>

				<div
					ref={scrollRef}
					className="mx-auto container p-12 flex flex-row gap-24 overflow-x-scroll custom-scrollbar"
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
							className={`absolute right-0 md:right-10 lg:right-20 top-1/2 cursor-pointer hover:bg-gray-200 transition-all duration-200 -translate-y-1/2 z-10 bg-white rounded-full p-2 lg:${
								rings.length < 4 ? "hidden" : "block"
							}`}
						>
							<IoIosArrowForward size={26} />
						</button>
					
				</div>
			</div>
		</div>
	);
}

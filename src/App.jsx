import { Header } from "./components/Header";
import {ProductGrid} from "./components/ProductGrid"

function App() {
	return (
		<>
			<div className="bg-emerald-600 flex justify-center py-3">
				<p className="text-white font-semibold text-xs">
					SALE - ALL ITEMS 20% OFF
				</p>
			</div>
			<Header />
			<div className="relative w-full overflow-hidden flex justify-center">
				<img
					src="image.webp"
					className="min-w-[1200px] h-auto object-cover object-center"
				/>
				<div className="absolute top-1/2 left-0 -translate-y-1/2 p-16 flex flex-col lg:flex-row lg:justify-between lg:items-center w-fit lg:w-full">
					<div className="">
						<p className="text-white font-bold text-lg lg:text-4xl">
							Create Your Dream Ring
						</p>
					</div>
					<div className="">
						<p className="bg-white p-2 lg:p-4 text-[#6b7773] text-xs font-semibold cursor-pointer">
							START WITH A SETTING
						</p>
					</div>
				</div>
            </div>
            <ProductGrid/>
		</>
	);
}

export default App;

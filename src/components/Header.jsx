import {
	FiMail,
	FiHeart,
	FiShoppingCart,
	FiUser,
	FiSearch,
} from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";

import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";
import { Drawer } from "@mui/material";

const ringsList = [
	"ENGAGEMENT RINGS",
	"WEDDING RINGS",
	"DIAMONDS",
	"GEMSTONES",
	"JEWELERY",
	"ABOUT US",
];

export function Header() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	// const DrawerList = (
	//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
	//       <List>
	//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
	//           <ListItem key={text} disablePadding>
	//             <ListItemButton>
	//               <ListItemIcon>
	//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
	//               </ListItemIcon>
	//               <ListItemText primary={text} />
	//             </ListItemButton>
	//           </ListItem>
	//         ))}
	//       </List>
	//       <Divider />
	//       <List>
	//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
	//           <ListItem key={text} disablePadding>
	//             <ListItemButton>
	//               <ListItemIcon>
	//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
	//               </ListItemIcon>
	//               <ListItemText primary={text} />
	//             </ListItemButton>
	//           </ListItem>
	//         ))}
	//       </List>
	//     </Box>
	//   );
	return (
		<header>
			<div className="flex justify-between p-5 border-b-2 border-[#e5e7eb] lg:border-none">
				<div className="flex items-center gap-2 text-[#9B9B9B]">
					<div className="flex items-center">
						<button
							className="lg:hidden"
							onClick={toggleDrawer(true)}
						>
							<RxHamburgerMenu className="text-gray-800 size-6" />
						</button>
						<Drawer
							open={open}
							slotProps={{
								paper: {
									className:
										"flex flex-col gap-5 bg-gray-50 p-8 w-80",
								},
							}}
							onClose={toggleDrawer(false)}
						>
							<button onClick={toggleDrawer(false)}>
								<IoCloseOutline size={24} />
							</button>
							{ringsList.map((item, index) => (
								<>
									<a
										key={index}
										href="#"
										className="text-[#2f2f2f] flex justify-between text-xs font-semibold"
									>
										{item}
										<FiPlus
											size={16}
											className="text-[#888888]"
										/>
									</a>
									<div className="border-b-2 border-[#e5e7eb]"></div>
								</>
							))}
						</Drawer>
					</div>
					<FiMail className="size-6 md:size-7" />
					<p className="hidden md:block font-bold text-sm pt-1">
						CONTACT US
					</p>
				</div>
				<a
					href="/"
					className="pl-6 md:pl-0 md:pr-6 lg:pr-0 text-xl md:text-2xl font-bold text-nowrap"
				>
					SHOP NAME
				</a>
				<div className="flex text-[#9B9B9B] md:gap-2 items-center">
					<FiUser className="size-6 md:size-7" />
					<FiSearch className="size-6 md:size-7" />
					<FiHeart className="size-6 md:size-7" />
					<FiShoppingCart className="size-6 md:size-7" />
				</div>
			</div>
			<nav className="hidden lg:block border-y-2 border-[#e5e7eb]">
				<ul className="flex justify-center gap-10 md:gap-20 xl:gap-30 p-1">
					{ringsList.map((item, index) => (
						<li key={index}>
							<a
								href="#"
								className="text-[#2f2f2f] text-xs cursor-pointer font-semibold relative group inline-block pb-1"
							>
								{item}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2f2f2f] transition-all duration-400 ease-out group-hover:w-full"></span>
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

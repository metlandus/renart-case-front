import {
	FiMail,
	FiHeart,
	FiShoppingCart,
	FiUser,
	FiSearch,
} from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
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
			<div className="flex justify-between p-5">
				<div className="flex items-center gap-2 text-[#9B9B9B]">
					<div>
						<button
							className="lg:hidden"
							onClick={toggleDrawer(true)}
						>
							<GiHamburgerMenu />
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
							{ringsList.map((item) => (
								<a
									href="#"
									className="text-[#2f2f2f] cursor-pointer hover:border-b-2 font-semibold"
								>
									{item}
								</a>
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
					className="pl-17 md:pl-2 text-xl md:text-2xl font-bold text-nowrap"
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
			<nav className="border-y-2 border-[#e5e7eb]">
				<ul className="flex justify-center gap-10 md:gap-20 xl:gap-30 p-1">
					{ringsList.map((item) => (
						<li>
							<a
								href="#"
								className="text-[#2f2f2f] text-xs cursor-pointer hover:border-b-2 font-semibold"
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

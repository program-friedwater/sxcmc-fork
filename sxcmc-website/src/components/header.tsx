'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { Menu, X } from 'lucide-react';

const headerContents = [
	{ label: "Home", href: "/" },
	{ label: "Join", href: "/join" },
	{ label: "Map", href: "/map" },
	{ label: "Wiki", href: "/wiki" },
	{ label: "Discord", href: "/discord" }
]

export default function Header() {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };
	const hideNav = () => {
		if (isNavVisible) setIsNavVisible(false);
  };
	
	const pathname = usePathname();

	return (
		<header className="flex fixed z-50 h-[52px] w-full p-2 content-center text-center bg-transparent backdrop-brightness-75 backdrop-blur">
			<div className="block">
				<Link href="/" className="md:ml-6 ml-1 text-white no-underline text-2xl">SxcMC</Link>
			</div>
			<div className={`${isNavVisible || "md:hidden"} block ml-auto p-1 rounded-md border-2 border-white/50`} onClick={toggleNav}>
				{isNavVisible ? <X /> : <Menu />}
			</div>
			<div className={`md:flex ${isNavVisible? "showNavAnimation flex flex-col fixed top-13 left-0 items-start bg-neutral-800":"hidden"} mr-6 w-full justify-end items-center`}>
				{headerContents.map((content, i) => (
					<Link key={i} onClick={hideNav} className={`md:w-auto w-full md:mx-2 mx:0 md:p-0 py-2 pl-8 text-left ${content.href === `/${pathname.split("/")[1]}` ? "text-[var(--accent)]" : "text-white"} ${isNavVisible && "hover:bg-neutral-700 transition-colors"}`} href={content.href}>
						{content.label}
					</Link>
				))}
			</div>
		</header>
	);
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
	const path = usePathname();
	return (
		<nav>
			<ul>
				<li>{path === "/" ? "" : <Link href="/">Home으로</Link>}</li>
			</ul>
		</nav>
	);
}

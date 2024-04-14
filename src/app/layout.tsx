import "../styles/globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
	title: {
		template: "Movies | %s",
		default: "Movies",
	},
	description: "Movies",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>
				{children}
				<Navigation />
			</body>
		</html>
	);
}

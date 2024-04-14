"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface IMovieProps {
	title: string;
	id: number;
	poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
	const router = useRouter();
	const onClick = () => {
		router.push(`/movies/${id}`);
	};
	return (
		<div className={styles.movie}>
			<Image src={poster_path} alt={title} onClick={onClick} />
			<Link href={`/movies/${id}`}>{title}</Link>
		</div>
	);
}

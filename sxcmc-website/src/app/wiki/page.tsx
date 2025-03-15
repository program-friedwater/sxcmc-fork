import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from 'next/link'
import { Clock4 } from 'lucide-react';

export default function Page() {
	const wikiDirectory = path.join(process.cwd(), "wiki");
	const posts = fs.readdirSync(wikiDirectory)
		.filter((filename) => filename.endsWith(".md"))
		.map((filename) => {
			const { data, content } = matter(fs.readFileSync(path.join(wikiDirectory, filename), "utf8"));
			return { filename, date: new Date(data.date || Date.now()), title: data.title, content: content.slice(0, 100) };
		})
		.sort((a, b) => b.date.getTime() - a.date.getTime())
		.map((file) => ({
			filename: file.filename.replace(".md", ""),
			date: file.date.toISOString().split("T")[0],
			title: file.title,
			content: file.content
		}));

	return (
		<div>
			<div className="relative w-full h-[25vh]">
				<img
					src="images/banner.webp"
					alt="Banner"
					className="w-full h-full object-cover"
					decoding="auto"
				/>
				<div className="flex absolute flex-col items-center justify-center text-center inset-0 text-white">
					<h1 className="mb-2 text-4xl font-bold">Wiki</h1>
				</div>
			</div>


			<div className="mx-auto my-10 p-8 md:max-w-[85vw] bg-[var(--card-background)] rounded-lg shadow-lg shadow-black/30">
				<h2 className="my-5 pb-2 text-3xl font-semibold border-[var(--accent)] border-b-2">記事</h2>
				<div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
					{posts.map((content, i) => (
						<Link href={`/wiki/${content.filename}`} key={i}>
							<div className="bg-[var(--item-background)] rounded-lg">
								<div className="p-4">
									<h2 className="mb-2 pl-2 text-xl font-bold border-l-4 border-[var(--accent)]">
										{content.title}
									</h2>
									<p className="text-sm opacity-80 line-clamp-2">
										{content.content}
									</p>
									<div className="flex ml-auto">
										<div className="flex ml-auto scale-90">
											<Clock4 /><p className="ml-1">{content.date}</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
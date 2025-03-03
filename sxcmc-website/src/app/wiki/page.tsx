const posts = [
	{ title: "便利コマンド", href: "commands" },
	{ title: "Job コマンド", href: "job" },
	{ title: "Towny", href: "towny" },
	{ title: "カスタムレシピ", href: "recipe" }
]

export default function Page() {
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
				<p>仮のwikiホームです。</p><br/>
				<ul className="pl-8 list-disc">
				{posts.map((content, i) => (
					<li key={i}>
						<a className="underline" href={`/wiki/${content.href}`}>
							{content.title}
						</a>
					</li>
				))}
				</ul>
			</div>
		</div>
	);
}
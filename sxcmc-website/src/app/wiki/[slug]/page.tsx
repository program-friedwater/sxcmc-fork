import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import { notFound } from "next/navigation";
import { ArrowLeft, Clock4, UserRoundPen } from 'lucide-react';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const filePath = path.join(process.cwd(), "wiki", `${slug}.md`)

  let filedata;
  try {
    filedata = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    return notFound();
  }
  const { data, content } = matter(filedata);

  return (
    <div>
      <div className="relative w-full h-[20vh] bg-[#1d2a48]">
        <div className="flex absolute flex-col items-center justify-center text-center inset-0 text-white">
          <h1 className="mt-6 text-4xl font-bold">{data.title}</h1>
        </div>
      </div>
      <div className="mx-auto my-10 p-8 md:max-w-[85vw] bg-[var(--card-background)] rounded-lg shadow-lg shadow-black/30">
        <div className="flex mb-5">
          <Link className="flex pl-2 pr-3 border-2 border-white/50 rounded-md" href="/wiki"><ArrowLeft />戻る</Link>
          <div className="flex ml-auto opacity-75">
            {data.author && <><UserRoundPen /><p className="ml-1 mr-3">{data.author}</p></>}
            {data.date && <><Clock4 /><p className="ml-1 mr-3">{data.date.toLocaleDateString()}</p></>}
          </div>
        </div>
        <div className="markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
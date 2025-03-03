export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[60vh]">
        <img
          src="images/banner.webp"
          alt="Banner"
          className="w-full h-full object-cover"
          decoding="auto"
        />
        <div className="flex absolute flex-col items-center justify-center text-center inset-0 text-white">
          <h1 className="mb-2 text-4xl font-bold">SxcMC</h1>
          <p>広大な世界で町作りサバイバル</p>
          <a
            className="inline-block mt-5 px-6 py-3 rounded-lg border-3 hover:bg-[#ffffff22] text-xl transition-[background-color]"
            href="join"
          >
            サーバーに参加
          </a>
        </div>
      </div>

      <div className="block mx-auto my-10 p-8 md:max-w-[85vw] bg-[var(--card-background)] rounded-lg shadow-lg shadow-black/30">
        <h2 className="mb-5 pb-2 text-3xl font-semibold border-[var(--accent)] border-b-2">About</h2>
        <p>
          いつもとは異なる地形生成と無限に広がる世界で冒険！<br/>統合版とJava版両方に対応し、誰でも簡単に参加可能です。<br/>経済システムがあり、町や国を作って、取引や競い合いを楽しめます。
        </p>
      </div>
    </div>
  );
}

// font-size: 1.5rem;
// margin-bottom: 1rem;
// border-left: 4px solid var(--accent);
// padding-left: 0.5rem;
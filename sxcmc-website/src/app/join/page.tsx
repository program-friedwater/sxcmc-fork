import ClipboardInput from "@/components/clipboardInput";

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
          <h1 className="mb-2 text-4xl font-bold">参加方法</h1>
        </div>
      </div>

      <div className="mx-auto my-10 p-8 md:max-w-[85vw] bg-[var(--card-background)] rounded-lg shadow-lg shadow-black/30">
        <h2 className="mb-5 pb-2 text-3xl font-semibold border-[var(--accent)] border-b-2">Java版</h2>
        <p>サーバーアドレス</p>
        <ClipboardInput text="mc.sxclij.com" />
        <img className="mt-2 rounded-md" src="images/join/je.webp" alt="true" width={512} height={189} />
        <h2 className="mt-10 mb-5 pb-2 text-3xl font-semibold border-[var(--accent)] border-b-2">統合版 (PC/モバイル)</h2>
        <p>ボタンををクリック</p>
        <a
          className="inline-block m-1 px-2 py-1 rounded-lg border-2 hover:bg-[#ffffff22] transition-[background-color]"
          href="minecraft://?addExternalServer=mc.sxclij.com:19132"
        >
          サーバーを追加
        </a>
        <p>または<br/>サーバーアドレス</p>
        <ClipboardInput text="mc.sxclij.com" />
        <p>ポート (デフォルト)</p>
        <ClipboardInput text="19132" />
        <img className="mt-2 rounded-md" src="images/join/be.webp" alt="true" width={512} height={322} />
        <h2 className="mt-10 mb-5 pb-2 text-3xl font-semibold border-[var(--accent)] border-b-2">統合版 (コンソール)</h2>
        <p>フレンドを追加</p>
        <ClipboardInput text="sxcmc2025" />
        <img className="mt-2 rounded-md" src="images/join/friend.webp" alt="true" width={512} height={460} />
      </div>

      <div className="mx-auto my-10 p-8 md:max-w-[85vw] bg-[var(--card-background)] rounded-lg shadow-lg shadow-black/30">
        <h2 className="mb-5 pb-2 text-3xl font-semibold border-[var(--accent)] border-b-2">おすすめのエディション</h2>
        <p>当サーバーではJava版での参加を推奨しています。<br/>Java版では統合版よりカスタムバイオームをより美しく見ることができたり、コマンド実行時に補完が正確に表示されます。</p>
        <img className="mt-2 rounded-md" src="images/join/edition_comparison.webp" alt="true" width={960} height={580} />
        <img className="mt-2 rounded-md" src="images/join/edition_comparison2.webp" alt="true" width={960} height={580} />
      </div>
    </div>
  );
}
import stylle from "./page.module.css";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="active">Css global</h1>
        <h1 className={stylle.css_module}>Css Module</h1>
        <h1 className="text-3xl bg-slate-500 font-bold p-4">Css tailwindcss</h1>
      </main>
    </div>
  );
}

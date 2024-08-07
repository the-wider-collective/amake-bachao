import Hero from "@/components/common/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-screen">
      <div className="border-2 border-white w-[300px] p-6">
        <Hero />
      </div>
    </main>
  );
}

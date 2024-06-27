import PaintCalculator from "@/components/PaintCalculator";

export default function HomePage() {
  return (
    <main>
      <section className="px-3 py-5 h-[100vh] w-full bg-orange-200">
        <h1>Acrylic Pour Pain Calculator</h1>
        <p>Some words about it</p>
        <PaintCalculator />
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <div className="py-8">
      <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl p-8 mb-8">
        <h2 className="text-4xl font-light mb-4">
          Tu hogar, <span className="font-bold">curado para vos</span>
        </h2>
        <p className="text-stone-600 mb-6">
          Mueblería, textiles y decoración de fabricantes verificados.
        </p>
        <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm">
          🔥 Próximamente: Catálogo completo
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <div className="text-3xl mb-3">🛋️</div>
          <h3 className="font-bold mb-2">Mueblería</h3>
          <p className="text-sm text-stone-600">Sofás, mesas, sillas y más</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <div className="text-3xl mb-3">🧵</div>
          <h3 className="font-bold mb-2">Textiles</h3>
          <p className="text-sm text-stone-600">Sábanas, toallas, almohadones</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <div className="text-3xl mb-3">🛏️</div>
          <h3 className="font-bold mb-2">Colchones</h3>
          <p className="text-sm text-stone-600">Descanso premium garantizado</p>
        </div>
      </div>
    </div>
  );
}

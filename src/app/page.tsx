export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">
          Welkom bij de Hardloop Kennisbank
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Dé plek voor hardlooptrainers om hun kennis te verdiepen en te verbreden.
          Ontdek trainingsleer, energiesystemen, looptechnieken en meer.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-primary">Trainingsleer</h2>
          <p className="text-gray-600">
            Leer de basisprincipes van trainingsleer en hoe je deze kunt toepassen in je trainingen.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-primary">Energiesystemen</h2>
          <p className="text-gray-600">
            Begrijp de verschillende energiesystemen en hoe je deze kunt trainen.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-primary">Looptechniek</h2>
          <p className="text-gray-600">
            Verbeter je looptechniek met praktische tips en oefeningen.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-primary">Training Geven</h2>
          <p className="text-gray-600">
            Leer effectieve trainingsmethoden en hoe je hardlopers kunt motiveren.
          </p>
        </div>
      </section>
    </main>
  )
} 
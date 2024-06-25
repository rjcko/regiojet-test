import { fetchAllPokemon } from "@/lib/fetch-utils";

export default async function Home() {
  // Todo: 1.2 Finish fetchAllPokemon function
  const data = await fetchAllPokemon();

  return (
    <main className="container py-10">
      <h1 className="text-5xl font-bold mb-10">Regiojet - test </h1>
      {/* Todo 2.3: Add style to section */}
      <section>
        {/* Todo 2.1: Map over data.results and pass props inside PokemonCard component */}
        {/* <PokemonCard /> */}
      </section>
    </main>
  );
}

// @ts-nocheck
// Todo 3.2 Remove @ts-nocheck
import { fetchAllPokemon, fetchSinglePokemon } from "@/lib/fetch-utils";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// Todo 3.2 Remove biome-ignore
// biome-ignore lint/suspicious/noEmptyInterface: Ignore error up to step 3
interface PokemonPageProps {
// Todo 3.3 Add page props types
}

/**
 * Related to SSR use
 **/
export async function generateStaticParams() {
  const data = await fetchAllPokemon();

  return data.results.map((item) => ({
    name: item.name,
  }));
}

export default async function PokemonPage({
  params: { name },
}: PokemonPageProps) {
  const data = await fetchSinglePokemon(name);

  if (!data) {
    notFound();
  }

  const { name: pokemonName, order, weight } = data;

  return (
    <main className="container py-20">
      <Link
        href="/"
        className="inline-flex gap-2 items-center mb-10 text-muted-foreground"
      >
        <MoveLeft size={10} />
        <span>Back to previous page</span>
      </Link>
      <ul className="p-2 border rounded-md bg-muted">
        <li>Name: {pokemonName}</li>
        <li>Order: {order}</li>
        <li>Weight: {weight}</li>
      </ul>
    </main>
  );
}

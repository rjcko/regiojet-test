// import type { AllPokemonData, SinglePokemonData } from "./types";

const API_URL = process.env.POKEMON_API_URL ?? "";

export async function fetchAllPokemon() {
  // Todo: 1.1: Finish fetchAllPokemon function
}

// Todo: 3.1: Finish fetchSinglePokemons function
export async function fetchSinglePokemon(name: string) {
  const url = `${API_URL}/${name}`;
}

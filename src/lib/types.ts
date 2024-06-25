export interface PokemonResult {
  name: string;
  url: string;
}

export interface AllPokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

export interface SinglePokemonData {
  name: string;
  order: number;
  weight: number;
}

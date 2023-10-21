export interface PokemonResponse {
  results: Pokemon[];
}

export interface Pokemon {
  // export to use in card components
  name: string;
  url: string;
}

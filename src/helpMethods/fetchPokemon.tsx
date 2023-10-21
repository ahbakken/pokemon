import { PokemonResponse } from "../interfaces/pokemonInterface";

export default function fetchPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
    .then((response) => response.json())
    .then((result: PokemonResponse) => {
      console.log(result);
      return result.results;
    })
    .catch((error) => {
      console.error("Error fetching data", error);
      throw error;
    });
}

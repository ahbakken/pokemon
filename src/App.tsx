import "./index.css";
import { useEffect, useState } from "react";
import { PokemonCard } from "./components/pokemon-cards";
import { Typography } from "@mui/material";
import fetchPokemon from "./helpMethods/fetchPokemon";
import { Pokemon } from "./interfaces/pokemonInterface";

function App() {
  const [pData, setPData] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    fetchPokemon().then((pokemons: Pokemon[]) => {
      setPData(pokemons);
    });
  }, []); //Runs only on the first render

  return (
    <div className="p-top">
      <Typography
        variant="h1"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        POKEMONS
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        A list of pokemon
      </Typography>
      {pData ? <PokemonCard pokemonList={pData} /> : null}
    </div>
  );
}

export default App;

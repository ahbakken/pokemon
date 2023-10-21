import { useState } from "react";
import { Pokemon } from "../interfaces/pokemonInterface";
import {
  CardActionArea,
  Typography,
  CardContent,
  Card,
  Collapse,
} from "@mui/material";

interface Props {
  pokemonList: Pokemon[];
}

export const PokemonCard: React.FC<Props> = ({ pokemonList }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <div className="card-container">
        {pokemonList.map(({ name, url }, index) => (
          <Card
            key={name}
            raised={true}
            sx={{
              margin: 2,
              padding: 0,
              background: "#d1d1d1",
              minWidth: 300,
            }}
          >
            <CardActionArea onClick={() => handleExpandClick(index)}>
              <CardContent>
                <Typography variant="h4">
                  {capitalizeFirstLetter(name)}
                </Typography>
              </CardContent>
              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                <CardContent>
                  {/* change this so the URL is clickable */}
                  <Typography variant="subtitle2">Url: {url}</Typography>
                </CardContent>
              </Collapse>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
};

import React from "react";
import classes from "./Grid.module.css";
import Card from "./Card/Card";
import { useHistory } from "react-router-dom";

function Grid(props: any) {
  const history = useHistory();
  const clickHandler = (id: number) => {
    history.push(`/details/${id}`);
  };

  return (
    <div className={classes.Container}>
      {props.animeData.map((item: any) => {
        return (
          <Card key={item.mal_id} clickHandle={clickHandler} anime={item} />
        );
      })}
    </div>
  );
}

export default Grid;

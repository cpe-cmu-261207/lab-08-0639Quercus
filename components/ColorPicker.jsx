import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";

export default function ColorPicker(props) {
  const color = props.color;

  const { selColor, setSelColor } = useContext(PainterContext);

  const isSelColor = color === selColor;

  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderStyle: "solid",

        borderColor: isSelColor ? "magenta" : "black",
        borderWidth: isSelColor ? "7px" : "2px",
      }}
      onClick={() => {
        setSelColor(color);
      }}
    />
  );
}

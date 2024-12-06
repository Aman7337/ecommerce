import React from "react";
import Slider from "@mui/material/Slider";

function PriceRange() {
  const [range, setRange] = React.useState([100, 1200]);

  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  return (
    <div style={{ width: "14rem", padding: "10px" }}>
      <Slider
        value={range}
        onChange={handleChanges}
        valueLabelDisplay="auto"
        min={100}
        max={1200}
        color="black"
      />
      {range[0]}$ - {range[1]}$
    </div>
  );
}

export default PriceRange;

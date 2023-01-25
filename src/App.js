import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { Card } from "./components/Card";
import { Ball } from "./components/Ball";

const URL =
  "https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults";

const requestOptions = {
  method: "POST",
  body: JSON.stringify({
    CompanyId: "GoldenCasket",
    MaxDrawCountPerProduct: 1,
    OptionalProductFilter: ["Powerball"],
  }),
};

const getLatestResults = async () => {
  const response = await fetch(URL, requestOptions);

  const body = await response.json();

  return body;
};

const LatestResults = (props) => {
  if (props.results.primary.length === 0) {
    return (
      <>
        <Ball type="empty" number="" />
        <Ball type="empty" number="" />
        <Ball type="empty" number="" />
        <Ball type="empty" number="" />
        <Ball type="empty" number="" />
        <Ball type="empty" number="" />
        <Ball type="empty" number="" />
        <Ball type="empty" number="PB" />
      </>
    );
  }

  return (
    <>
      {props.results.primary.map((number) => (
        <Ball key={number} number={number} />
      ))}
      {props.results.power.map((number) => (
        <Ball type="power" key={number} number={number} />
      ))}
    </>
  );
};

function App() {
  const [results, setResults] = useState({ primary: [], power: [] });

  const onClickHandler = async () => {
    const results = await getLatestResults();
    setResults({
      primary: results.DrawResults[0].PrimaryNumbers,
      power: results.DrawResults[0].SecondaryNumbers,
    });
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <div>1</div>
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
          }}
        >
          <LatestResults results={results} />
        </div>
        <div>
          <IconButton
            onClick={onClickHandler}
            aria-label="get data"
            data-testid="fetch-button"
            style={{
              backgroundColor: "#9c27b0",
              color: "white",
              margin: "0 4px",
            }}
          >
            <ElectricBoltIcon sx={{ fontSize: 16 }} />
          </IconButton>

          <IconButton
            onClick={() => setResults({ primary: [], power: [] })}
            aria-label="delete"
            data-testid="delete-button"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              margin: "0 4px",
            }}
          >
            <DeleteIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </div>
      </div>
      <Card primaryNumbers={results.primary} secondaryNumbers={results.power} />
    </div>
  );
}

export default App;

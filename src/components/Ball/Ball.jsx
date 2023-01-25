import * as React from "react";

const styles = {
  base: {
    border: "1px solid #D3D3D3",
    borderRadius: "50%",
    height: "28px",
    width: "28px",
    margin: "0 4px",
    boxShadow: "inset 0 5px 6px -6px #808080",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    backgroundColor: "white",
    color: "black",
  },
  normal: {
    backgroundColor: "#000C66",
    color: "white",
  },
  power: {
    backgroundColor: "gray",
    color: "white",
  },
};

export const Ball = ({ type = "normal", number }) => {
  return (
    <div style={{ ...styles.base, ...styles[type] }}>
      <span style={styles.center}>{number}</span>
    </div>
  );
};

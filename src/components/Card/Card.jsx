import ClearIcon from "@mui/icons-material/Clear";

const styles = {
  card: {
    margin: "16px",
  },

  numbers: {
    display: "flex",
    flexFlow: "row wrap",
  },

  cell: {
    color: "#9c27b0",
    fontWeight: "bold",
    fontSize: "16px",
    backgroundColor: "white",
    textAlign: "center",
    flex: "0 0 10%",
    padding: "12px 0",
    position: "relative",
  },

  divider: {
    color: "white",
    backgroundColor: "gray",
    fontWeight: "bold",
    textAlign: "center",
    padding: "16px 0",
  },

  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: "2",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    backgroundColor: "rgba(156, 39, 176, 0.5)",
    opacity: 0.3
  },
};

export const Card = ({ primaryNumbers = [], secondaryNumbers = [] }) => {
  return (
    <div style={styles.card}>
      <div style={styles.numbers}>
        {Array(35)
          .fill(null)
          .map((_, index) => {
            return index + 1;
          })
          .map((key) => {
            return (
              <div key={key} style={styles.cell}>
                {key}{" "}
                {primaryNumbers.includes(key) && (
                  <div style={styles.overlay}>
                    <span>
                      <ClearIcon sx={{ fontSize: 56 }}/>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div style={styles.divider}>SELECT YOUR POWERBALL</div>
      <div style={styles.numbers}>
        {Array(20)
          .fill(null)
          .map((_, index) => {
            return index + 1;
          })
          .map((key) => {
            return (
              <div key={key} style={styles.cell}>
                {key}{" "}
                {secondaryNumbers.includes(key) && (
                  <div style={styles.overlay}>
                    <span>
                      <ClearIcon sx={{ fontSize: 56 }}/>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

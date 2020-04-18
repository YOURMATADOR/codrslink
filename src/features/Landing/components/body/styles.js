import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  banner: {
    width: "50%",
    height: "auto",
    borderRadius: "5rem",
  },
  landingContainer: {
    display: "flex",
  },
  landingDescription: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
    flex: 1,
  },
  landingDescriptionTitle: {
    color: "white",
  },
  landingDescriptionSubtitle: {
    textAlign: "justify",
    color: "white",
    fontWeight: 200,
    width: "50%",
    opacity: 0.8,
  },
}));

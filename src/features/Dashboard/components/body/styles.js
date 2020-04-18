import { makeStyles } from "@material-ui/core/styles";
import { secondary } from "../../../../utils/colors";

export const useStyles = makeStyles((theme) => ({
  addButton: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    background: secondary,
  },
  noPaymentsLogo: {
    width: "30rem",
    borderRadius: "5rem",
    alignSelf: "center",
    margin: "auto",
  },
  noPaymentsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  listItem: {
    display: "flex",
    color: "white",
  },
}));

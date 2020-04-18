import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../utils/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Rubik",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Rubik",
    textTransform:"capitalize"
  },
  TopBarLink: {
    color: "white",
    textDecoration: "none",
    textUnderlinePosition: "none",
    fontWeight: "bold",
  },
  TopBarLogo: {
    width: "5rem",
    height: "auto",
  },
  AppBar: {
    background: primary,
  },
}));

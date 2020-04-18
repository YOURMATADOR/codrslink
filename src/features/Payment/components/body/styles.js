import { makeStyles } from "@material-ui/core/styles";
import { primary_light } from "../../../../utils/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: primary_light,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    background: primary_light,
    color: "white",
    borderRadius: 5,
  },
  label: {
    color: "white",
  },
}));

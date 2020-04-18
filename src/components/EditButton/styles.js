import { makeStyles } from "@material-ui/core/styles";
import { secondary } from "../../utils/colors";

export const useStyles = makeStyles((theme) => ({
  addButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(15),
  },
}));

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid } from "@mui/material";
import { pink } from "@mui/material/colors";

const CartWidget = () => {
  return (
    <div>
      <Grid
        container
        item
        xs={10}
        direction="row"
        justifyContent="end"
        alignItems="end"
      >
        <span>5</span>
        <ShoppingCartIcon sx={{ color: pink[200] }} fontSize="large" />
      </Grid>
    </div>
  );
};

export default CartWidget;

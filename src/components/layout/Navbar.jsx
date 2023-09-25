import { Button, Grid } from "@mui/material";
import CartWidget from "../common/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <Grid display="flex" justifyContent="left" alignItems="left">
        <img
          src="https://res.cloudinary.com/de6vdxrs6/image/upload/v1695675045/Logo_ez7syb.png"
          width={100}
          alt={"Logo"}
        />
      </Grid>
      <ul>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="outlined" color="secondary">
            Todos los productos
          </Button>
          <Button variant="outlined" color="secondary">
            Perros
          </Button>
          <Button variant="outlined" color="secondary">
            Gatos
          </Button>
          <Button variant="outlined" color="secondary">
            Otros
          </Button>
        </Grid>
      </ul>

      <CartWidget />
    </div>
  );
};

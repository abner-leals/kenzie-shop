import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";

import { CartContext } from "../../providers/cart";
import { Link } from "react-router-dom";
export default function PrimarySearchAppBar() {
  const { cart } = React.useContext(CartContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" noWrap component="div">
              <Link to="/pagina-inicial">KENZIE SHOP</Link>
            </Typography>
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/cart">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
          </Box>
          <Link to="/cart">
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

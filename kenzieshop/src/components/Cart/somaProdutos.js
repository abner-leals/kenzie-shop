import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function BasicCard() {
  const cart = useSelector(({ cart }) => cart);
  return (
    <Card sx={{ minWidth: 275, margin: 2, maxHeight: 190 }}>
      <CardContent>
        <Typography variant="h5" component="h3" sx={{ margin: 1 }}>
          Total
        </Typography>

        <Box
          variant="body2"
          component="div"
          sx={{ display: "flex", justifyContent: "space-between", margin: 2 }}
        >
          <Typography variant="body1" component="div">
            Quantidade de Produtos:
          </Typography>
          <Typography variant="body1" component="div">
            {cart.reduce(
              (previousValue, currentValue) =>
                previousValue + currentValue.quantidade,
              0
            )}
          </Typography>
        </Box>
      </CardContent>
      <Box
        variant="body2"
        component="div"
        sx={{ display: "flex", justifyContent: "space-between", margin: 2 }}
      >
        <Typography variant="h6" component="div">
          Total Geral
        </Typography>
        <Typography variant="h6" component="div">
          R$:
          {cart
            .reduce(
              (previousValue, currentValue) =>
                previousValue + currentValue.quantidade * currentValue.price,
              0
            )
            .toFixed(2)
            .replace(".", ",")}
        </Typography>
      </Box>
    </Card>
  );
}

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import {
  AddCircleOutline,
  AddShoppingCartOutlined,
  DeleteOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";

export const CardP = ({ produto, cart }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 600,
        minWidth: 150,
        justifyContent: "space-between",
        padding: 1,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={produto.img}
        alt={produto.name}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          width: "59%",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
          <Typography component="div" variant="h5">
            {produto.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {produto.category}
          </Typography>
        </CardContent>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          R$: {produto.price.toFixed(2)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 1,
            pb: 1,
            width: "100%",
          }}
        >
          {cart ? (
            <>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Quantidade: 1
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                {produto.quantidade > 1 && (
                  <IconButton aria-label="Diminuir quantidade">
                    <RemoveCircleOutline />
                  </IconButton>
                )}
                <IconButton aria-label="Aumentar quantidade">
                  <AddCircleOutline />
                </IconButton>
                <IconButton aria-label="Remover produto">
                  <DeleteOutline />
                </IconButton>
              </Box>
            </>
          ) : (
            <Button variant="outlined" startIcon={<AddShoppingCartOutlined />}>
              Adicionar ao carrinho
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};

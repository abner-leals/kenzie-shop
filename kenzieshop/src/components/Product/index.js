import * as React from "react";
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
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  aumentarQuantidadeThunk,
  diminuirQuantidadeThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

export const CardP = ({ produto, cart }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={
        cart
          ? {
              display: "flex",
              maxWidth: 600,
              minWidth: 150,
              justifyContent: "space-between",
              padding: 1,
              background: "#f5f5f5",
            }
          : { display: "flex", width: 310, background: "#f5f5f5" }
      }
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={produto.img}
        alt={produto.name}
      />
      <Box
        sx={
          cart
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                width: "59%",
              }
            : { display: "flex", flexDirection: "column" }
        }
      >
        <CardContent
          sx={cart ? { flex: "1 0 auto", width: "100%" } : { flex: "1 0 auto" }}
        >
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
          R$: {produto.price.toFixed(2).replace(".", ",")}
        </Typography>
        <Box
          sx={
            cart
              ? {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pl: 1,
                  pb: 1,
                  width: "100%",
                }
              : { display: "flex", alignItems: "center", pl: 1, pb: 1 }
          }
        >
          {cart ? (
            <>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Quantidade: {produto.quantidade}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                {produto.quantidade > 1 && (
                  <IconButton
                    aria-label="Diminuir quantidade"
                    onClick={() =>
                      dispatch(diminuirQuantidadeThunk(produto.id))
                    }
                  >
                    <RemoveCircleOutline />
                  </IconButton>
                )}
                <IconButton
                  aria-label="Aumentar quantidade"
                  onClick={() => {
                    dispatch(aumentarQuantidadeThunk(produto.id));
                    console.log(produto);
                    console.log(produto.id);
                  }}
                >
                  <AddCircleOutline />
                </IconButton>
                <IconButton
                  aria-label="Remover produto"
                  onClick={() => dispatch(removeFromCartThunk(produto.id))}
                >
                  <DeleteOutline />
                </IconButton>
              </Box>
            </>
          ) : (
            <Button
              variant="outlined"
              startIcon={<AddShoppingCartOutlined />}
              onClick={() =>
                dispatch(addToCartThunk({ ...produto, quantidade: 1 }))
              }
            >
              Adicionar
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};

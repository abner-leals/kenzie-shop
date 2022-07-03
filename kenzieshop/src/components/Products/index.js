import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CardP } from "../Product";

const Products = () => {
  const produtos = useSelector(({ products }) => products);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 1,
        padding: 2,
      }}
    >
      {produtos.map((produto, index) => (
        <CardP produto={produto} key={produto.id} />
      ))}
    </Box>
  );
};
export default Products;

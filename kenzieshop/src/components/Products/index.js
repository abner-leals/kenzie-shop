import { Box } from "@mui/material";
import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import { CardP } from "../Product";

const Products = () => {
  const { catalogue } = useContext(CatalogueContext);
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
      {catalogue.map((produto, index) => (
        <CardP produto={produto} key={produto.id} />
      ))}
    </Box>
  );
};
export default Products;

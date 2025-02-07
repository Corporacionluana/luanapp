import { FcShipped, FcShop, FcLock, FcAssistant } from "react-icons/fc";
import { Container, Box, Typography, Grid2 } from "@mui/material";
import { BannerMain } from "./ui/banner";
import { fetchFilterProductCategorySubCategory } from "./utils/products";
import { SliderProduct } from "./ui/product/slider-product";
import { fetchListProductBrand } from "./utils/brands";

// Components
import { ProductNew } from "./ui/product/new-products";
import { CategorySlider } from "./ui/category/categorySlider";
import { AdsHome } from "./ui/aside/ads-index";

export const metadata = {
  title: "Corporacion Luana",
  description: "Tienda de corporacion luana",
};

export default async function Home() {
  const filterProduct = await fetchFilterProductCategorySubCategory(
    "02",
    "095"
  );
  const filterBrandProduct = await fetchListProductBrand("ugreen");

  return (
    <Container maxWidth="xl">
      <Box>
        <BannerMain />
      </Box>
      {/* Categorias */}
      <CategorySlider />

      {/* Nuevos productos */}
      <ProductNew />
      {/* Imagenes ADS */}
      <AdsHome />
      {/* Laptops */}
      <Box component="section">
        <Box>
          <Box
            sx={{ bgcolor: "#f0f0f0", borderRadius: 6 }}
            className="drop-shadow-lg"
          >
            <Box
              sx={{
                background: "linear-gradient(to right, #5914A3, #A3147F)",
                mb: 2,
                p: 1,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontWeight: "bold", color: "white" }}
              >
                Laptops
              </Typography>
            </Box>
            <SliderProduct products={filterProduct} />
          </Box>
        </Box>
      </Box>
      {/* Productos categorias */}
      <Box component="section" sx={{ marginY: 4 }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Adquiere lo mejor en adaptadores
          </Typography>
          <Box>
            <SliderProduct products={filterBrandProduct} />
          </Box>
        </Box>
      </Box>
      {/* Info */}
      <Box
        component="section"
        sx={{ bgcolor: "#f0f0f0", borderRadius: 6 }}
        className="drop-shadow-lg"
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            Ten la mejor experiencia
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Queremos que tengas el mejor de la experiencias.
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 6, md: 3 }}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <FcShipped className="text-6xl" />
                </Box>
                <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                  Delivery
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <FcLock className="text-6xl" />
                </Box>
                <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                  Compra facil y seguro
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <FcShop className="text-6xl" />
                </Box>
                <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                  Retiro gratis en tienda
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <FcAssistant className="text-6xl" />
                </Box>
                <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                  Contactanos
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
}

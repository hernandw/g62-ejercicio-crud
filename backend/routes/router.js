import express from "express";
import { controllers } from "../controllers/controller.js";
const router = express.Router();

router.get("/", controllers.home);

router.get("/products/limit", controllers.getProductsLimit);

router.post("/product", controllers.create);

router.get("/products", controllers.getProducts);

router.put("/product/:id", controllers.editProduct);

router.delete("/product/:id", controllers.deleteProduct);

router.get("*", controllers.notFound);

export default router;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.routes";
import walletRoutes from "./routes/wallet.routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/wallet", walletRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (error) => {
    console.error("Server failed to start:", error);
    process.exit(1);
});
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("File Name:", path.basename(__filename));
console.log("Full Path:", __filename);
console.log("Location:", __dirname);

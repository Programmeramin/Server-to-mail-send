import express from "express";
import { getAllUser , registerUser} from "../controllers/userController.js";

// init router
const router = express.Router();

// router express
router.get("/user", getAllUser);
router.post("/register", registerUser);

// default export 
export default router;  
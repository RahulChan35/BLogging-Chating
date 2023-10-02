import { Router } from "express";
const router = Router();

import { register, login, logout } from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.get("/logout", logout);

export default router;

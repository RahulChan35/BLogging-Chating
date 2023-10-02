import { Router } from "express";
const router = Router();

import { getCurrentUser, updateUser } from "../controllers/userController.js";

router.route("/current-user").get(getCurrentUser);
router.route("/update-user").patch(updateUser);

export default router;

import { Router } from "express";
import { userSignup } from "../controller/userController.js";

const router = Router();

router.post('/signup', userSignup)

export default router;
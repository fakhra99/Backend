import { Router } from "express";
import { userLogin, userSignup } from "../controller/userController.js";

const router = Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

export default router;
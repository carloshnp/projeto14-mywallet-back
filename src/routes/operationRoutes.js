import { Router } from "express";
import { getOperations, newOperation } from "../controllers/operationController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";

const router = Router();

router.use(authValidation);

router.post("/operation", newOperation);
router.get("/finances", getOperations);

export default router;

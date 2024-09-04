import { Router } from "express";
import { getAllData, addData, getSpecificData } from "../controller/employee.controller.js";


const router = Router()

// router.route("/add").post(addData)
router.route("/all").get(getAllData)
router.route("/").get(getSpecificData)


export default router;
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Employee } from "../model/employee.model.js";


const addData = AsyncHandler(async (req, res) => {
    const { name, age, department, salary, joining_date } = req.body
    if (!name?.trim() || !department.trim()) {

        return res
            .status(401)
            .json({ message: "Fields can't be empty" })
    }

    if (typeof age !== "number" || typeof salary !== "number") {
        return res
            .status(401)
            .json({ message: "Fields can accept Number type only" })
    }

    const emp = await Employee.create(
        {
            name,
            age,
            department,
            salary,
            joining_date
        }
    )

    if (!emp) {
        return res
            .status(501)
            .json({ message: "Something occurred while adding employee" })
    }

    return res
        .status(200)
        .json(new ApiResponse(200, emp, "employee added successfully"))

})

const getAllData = AsyncHandler(async (req, res) => {
    const allEmp = await Employee.find({})
    if (!allEmp) {
        return res
            .status(501)
            .json({ message: "Internal server error, so couldn't get the data" })
    }

    return res
        .status(200)
        .json(new ApiResponse(200, allEmp, "All employee data fetched"))
})

const getSpecificData = AsyncHandler(async (req, res) => {
    const page = Number(req.query.page) - 1 || 0;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";
    let sort = req.query.sort || "joining_date"
    let department = req.query.department || ""

    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort])
    let sortBy = {}
    if (sort[1]) {
        sortBy[sort[0]] = sort[1]
    } else {
        sortBy[sort[0]] = "asc"
    }
    let queryObj = { name: { $regex: search, $options: "i" } }
    if (department) {
        queryObj.department = department
    }

    const specificEmp = await Employee.find(queryObj)
        .sort(sortBy)
        .skip(page * limit)
        .limit(limit)


    if (!specificEmp) {
        return res
            .status(501)
            .json({ message: "Internal server error, so couldn't get the specific data" })
    }

    const totalDocument = await Employee.countDocuments({})
    const getInfo = {
        specificEmp,
        totalDocument
    }

    return res
        .status(200)
        .json(new ApiResponse(200, getInfo, "Specific employee data fetched"))
})


export { addData, getAllData, getSpecificData }
import express from "express"
import cors from "cors"


const app = express()

app.use(express.json())

app.use(express.urlencoded(
    { extended: true }
))

app.use(cors({
    origin: "*",
}))


import employeeRoute from "./route/employee.route.js"


app.use("/api/v1/emp", employeeRoute)


export { app }
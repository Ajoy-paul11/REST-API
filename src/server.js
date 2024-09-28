import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.log("ERROR", error);
            throw error
        })
        app.listen(process.env.PORT || 8001, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }).catch((err) => {
        console.log("MongoDB connection failed: ", err);
    })


app.get("/", (req, res) => {
    res.send(`
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6;">
      <h1 style="color: #333; text-align: center;">Hi! Welcome to the Home Route</h1>
      <h2 style="color: #444; border-bottom: 2px solid #444; padding-bottom: 10px;">End Points</h2>
      <div style="background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 20px;">
        <h3 style="color: #0066cc; margin-bottom: 5px;">Get all Employee Data</h3>
        <h3 style="color: #009900; margin-top: 0;">Add URL : /api/v1/emp/all</h3>
        <h4 style="color: #666; margin-bottom: 5px;">Method: GET</h4>
        <h4 style="color: #666; margin-top: 0;">Fetches all employee data without any filters.</h4>
      </div>
      <div style="background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; padding: 15px;">
        <h3 style="color: #0066cc; margin-bottom: 5px;">Query Employees</h3>
        <h3 style="color: #009900; margin-top: 0;">Add URL : /api/v1/emp/</h3>
        <h4 style="color: #666; margin-bottom: 5px;">Method: GET</h4>
        <h4 style="color: #666; margin-top: 0;">Fetches employees based on various query parameters.</h4>
        <h4 style="color: #333;">Query Parameters:</h4>
        <ul style="list-style-type: none; padding-left: 0;">
          <li style="margin-bottom: 10px;"><strong>page</strong>: Specify the page number for pagination (e.g., page=1).</li>
          <li style="margin-bottom: 10px;"><strong>sort</strong>: Sorts the employees based on a specified field and order (e.g., sort=salary,asc or sort=age).</li>
          <li style="margin-bottom: 10px;"><strong>department</strong>: Filters employees by their department (e.g., department=IT or department=Sales).</li>
          <li style="margin-bottom: 10px;"><strong>search</strong>: Performs a search across employee names (e.g., search=John Doe).</li>
          <li style="font-style: italic; color: #666;">These parameters can be combined to refine the results. (e.g., /api/v1/emp/?page=1&sort=salary,asc&department=IT&search=John)</li>
        </ul>
      </div>
    </div>
        `);
})
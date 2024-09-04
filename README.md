# REST API for Employee Data

This REST API project is designed to serve as a backend service providing employee data. It allows users to fetch employee details, which can be utilized for frontend development and API handling practice. The API supports various query parameters to filter, sort, and paginate the data, making it a versatile tool for developers to test and enhance their API interaction skills.

## Features

- **Fetch All Employees**: Retrieve a list of all employees.
- **Query Employees**: Support for pagination, sorting, and filtering by specific attributes such as department or age.

## Data Model

Each employee object in the dataset includes the following fields:

- **Name**: Full name of the employee.
- **Age**: Age of the employee.
- **Department**: Department in which the employee works.
- **Salary**: Monthly salary of the employee.
- **Joining Date**: Date when the employee joined the company.

## Endpoints

### Get All Employees

---

- **URL**: /api/v1/emp/all
- **Method**: GET
- **Description**: Fetches all employee data without any filters.

### Query Employees

---

- **URL**: /api/v1/emp/
- **Method**: GET
- **Description**: Fetches employees based on various query parameters.
- **Query Parameters**: <br>
  - **page**: Specify the page number for pagination (e.g., page=1).
  - **sort**: Sorts the employees based on a specified field and order (e.g., sort=salary,asc or sort=age).
  - **department**: Filters employees by their department (e.g., department=IT or department=Sales).
  - **search**: Performs a search across employee names (e.g., search=John Doe).
  - These parameters can be combined to refine the results **(e.g., /api/v1/emp/?page=1&sort=salary,asc&department=IT&search=John)**.

## Technologies Used

- **NodeJs**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database used to store employee data.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js installed on your machine. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

## URL

[url] (https://rest-api-cc13.onrender.com)

## Usage

Once the server is running, you can use any HTTP client (like Postman, cURL, or your Browser) to interact with the API and fetch employee data based on your requirements.

## Contact

---

<p align="left"> <a href="https://twitter.com/ajoy_paul11" target="blank"><img src="https://img.shields.io/twitter/follow/ajoy_paul11?logo=twitter&style=for-the-badge" alt="ajoy_paul11" /></a> </p>

<a href="https://linkedin.com/in/ajoypaul" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ajoypaul" height="30" width="40" /></a>

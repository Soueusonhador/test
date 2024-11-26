Problems!

Complete CRUD operation in Student management page. \
<mark>/src/modules/students/students-controller.js</mark>


# Project Changes

## 1. **Installed PostgreSQL Database**
   - Set up PostgreSQL database and created necessary configurations.

## 2. **Configured PostgreSQL Connection**
   - Updated the database connection parameters for local and Docker environments.

## 3. **Created `docker-compose.yml`**
   - Added a Docker Compose configuration to run PostgreSQL containerized.

## 4. **Implemented CRUD Operations**
   - Developed basic Create, Read, Update, Delete (CRUD) operations for interacting with the database.

## 5. **Removed `.svn` Directory**
   - Removed unnecessary `.svn` directory from the project.


# Steps to Run the Application

## 1. **Set Up PostgreSQL Database (Docker)**
   - Ensure Docker is installed and running.
   - Navigate to the project directory where `docker-compose.yml` is located.
   - Run the following command to start the PostgreSQL container:
     ```bash
     docker-compose up -d
     ```
   - This will start the PostgreSQL container in the background and expose it on port `5432`.

## 2. **Configure the Backend**
   - Make sure you have Node.js and npm installed on your machine.
   - Navigate to the backend folder.
   - Install the backend dependencies:
     ```bash
     npm install
     ```
   - Ensure the backend is configured to connect to the PostgreSQL database by checking the `db.js` or relevant connection files for the correct database URL.
   - Run the backend server:
     ```bash
     npm start
     ```
   - The backend should now be running on the specified port (e.g., `localhost:5000`).

## 3. **Set Up Frontend**
   - Ensure you have Node.js and npm installed for the frontend as well.
   - Navigate to the frontend folder.
   - Install the frontend dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```
   - The frontend should now be running on the specified port (e.g., `localhost:3000`).

## 4. **Test the Application**
   - Open a browser and navigate to the frontend URL (`localhost:3000`).
   - Ensure the frontend is correctly interacting with the backend and database.

## 5. **Access PostgreSQL Database (Optional)**
   - If you want to access the PostgreSQL database directly, you can use the `psql` command or a database GUI tool (e.g., pgAdmin).
   - Database connection URL: `postgres://postgres:postgres@localhost:5432/postgres`



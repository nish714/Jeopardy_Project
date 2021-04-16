## Usage
ES Modules in Node
We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

# Env Variables
Create a .env file in the parent folder and add the following


NODE_ENV = development

PORT = 5000

MONGO_URI = your mongodb uri

JWT_SECRET = 'abc123'

# Install Dependencies (frontend & backend)
npm install
cd frontend
npm install
Run
# Run both frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server


# Seed Database
You can use the following commands to seed the database with some sample users as well as destroy all data

# Import data
npm run data:import

# Destroy data
npm run data:destroy

# Sample User Logins

mohit@gmail.com 
password: 123456

manish@gmail.com (Admin)
password: 123456



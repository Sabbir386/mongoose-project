1. **Node.js:**

- Ensure that Node.js is installed on your machine.

2. **Clone the Repository:**

- Clone this repository to your local machine.

3.  **Install Dependencies:**

- npm install

4. **Mongoose and MongoDB:**

   - You need install MongoDB and run on your machine.

5. **TypeScript Compilation:**
   - compile the TypeScript code to JavaScript using the following command:
     tsc

### Create user

method : post

https://mongoose-assignment-project.vercel.app/api/users

{
"userId": 6,
"username": "alice_dsdss",
"password": "asdgdfgf",
"fullName": {
"firstName": "Alffice",
"lastName": "Davis"
},
"age": 69,
"email": "alice.davis@example.com",
"isActive": true,
"hobbies": [
"painting",
"swimming"
],
"address": {
"street": "789 Pine St",
"city": "Largetown",
"country": "USA"
},
"orders": []
}

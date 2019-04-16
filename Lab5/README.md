# Lab 5

> Objective: Teach main features of expressJS and MongooseJS

1. Initialize a nodeJS project directory.
2. Install expressJS module to the nodeJS project.

   `npm install express --save`

3. Serve HTML page via expressJS
4. Create a POST REST route to save a user object in memory array.

   Hint: https://expressjs.com/en/starter/basic-routing.html

   1. User object should contain firstName, secondName and birthday attributes.
   2. Unique id should be generated at the server and should be added into the user object before saving it.
   3. `Date.now()` method returns the milliseconds elapsed since 1970-01-01 00:00:00. Use this value as the ID.
   4. Save birthday as a date not as a String (Use Date() constructor).
   5. use Array.push() method to add items to users array.
   6. In order to accept JSON in request body user the module body parser and add bodyParser.json() method as an express middleware.

5. Add another 3 routes to;
   Hint: https://expressjs.com/en/starter/basic-routing.html 1. Get all users. 2. Get a user by ID (Hint: Use Array.find or Array.findIndex method). 3. Update a user (Hint: Use Array.find or Array.findIndex method). 4. Delete a user by ID (Hint: Use Array.find or Array.findIndex method and Array.splice method).
6. Use MongoDB to save users

   Hint: https://expressjs.com/en/starter/basic-routing.html
   Hint: http://mongoosejs.com/docs/

   1. Install mongoose dependency.

      `npm install --save mongoose.`

   2. Connect to the mongoDB (make sure local mongo instance is up and running).
   3. Create a model for user.
   4. MongoDB has auto generated \_id field use that instead of previously created id.

7. Change all operations (get all, get one, update and delete) to use mongoDB.

   Hint: https://expressjs.com/en/starter/basic-routing.html
   Hint: http://mongoosejs.com/docs/

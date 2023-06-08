// const express = require('express');
// const fs = require('fs');
// const app = express();
// const PORT = 8000;

// app.use(express.json());

// app.post('/users', (req, res) => {
//   const { name, mobile, email, pass } = req.body;
//   const newUser = { name, mobile, email, pass };

//   // Read the existing data from db.json
//   fs.readFile('db.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       let users = JSON.parse(data);

//       // Add the new user to the existing users array
//       users.push(newUser);

//       // Write the updated users array back to db.json
//       fs.writeFile('db.json', JSON.stringify(users), (err) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Internal Server Error');
//         } else {
//           res.status(200).send('User added successfully');
//         }
//       });
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
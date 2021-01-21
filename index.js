const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello world'});
});

app.post('/login', (req, res) => {
  const user = {
    email: 'test@mail.com',
    password: 'P4ssw0rd'
  };

  const {email, password} = req.body;
  if (email === user.email && password === user.password) {
    return res.status(200).json({
      message: 'login success',
      data: {
        ...user,
        token: 'dummy-token'
      }
    });
  }

  return res.status(404).json({
    message: 'login failed, user not found'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

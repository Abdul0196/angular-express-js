const express = require('express')
const jwt = require('jsonwebtoken')
const faker = require('faker')
const app = express()
const port = 3000
const secretKey = 'secretKey'

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// dummy access roles
const dummyUsersWithAccesRoles = [
  {
    id:1,
    username: 'superadmin',
    access: 1
  },
  {
    id:2,
    username: 'justuser',
    access: 0
  }
]
// dummy access roles <end>





// dummy array of objects length more than 500
const DummyArrayForPrivateApi = new Array(501)
for (var i = 0; i < 501; i++) {
  DummyArrayForPrivateApi[i] = {
    username : faker.name.firstName(),
    lastname : faker.name.lastName()
  };
}
// dummy array of objects length more than 500 <end>




// dummy array of objects length more than 500
const DummyArrayForPublicApi = new Array(501)
for (var i = 0; i < 501; i++) {
  DummyArrayForPublicApi[i] = {
    username : faker.name.findName(),
    email : faker.internet.email()
  };
}
// dummy array of objects length more than 500 <end>








// standalone component api without token --- works for component Three
app.get('/expApiOne', (req, res) => {
  res.json({
    text : DummyArrayForPublicApi
  })
})
// standalone component api without token works --- for component Three <end>





// user login --- works for Private Api Need Token
let isAdmin = 0

app.post('/login', (req, res) => {  
  const username = req.body.data.username
  const index = dummyUsersWithAccesRoles.findIndex(object => {
    return object.username == username;
  });
  if(index != -1) {
    isAdmin = dummyUsersWithAccesRoles[index].access
  }

  jwt.sign({username},secretKey,{expiresIn:'600s'},(err,token)=>{
    res.json({
      username: username,
      token: token,
      isAdmin: isAdmin
    })
  })
})
// user login --- works for Private Api Need Token <end>






// Get Private Api data --- works for Private Api Need Token
app.post('/callingPrivateApi', verifyToken, (req, res)=>{
  jwt.verify(req.token, secretKey, (err, userData)=>{
    if(err){
      res.json({
        message: 'Token is invalid.'
      })
    }else{
      res.json({
        message: DummyArrayForPrivateApi,
        userInfo: userData
      })
    }
  })
})
// Get Private Api data --- works for Private Api Need Token <end>






// authentication --- for token verification
function verifyToken(req, res, next){
  const bearerHeader = req.headers['authorization'];
  const username = req.body.userInfo;
  
  if(bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ')
    const token = bearer[1]
    req.token = token
    //req.token = token
    //req.index = index
    next()
  }else{
    res.send({
      token: 'Token is not valid.'
    })
  }
}
// authentication --- for token verification <end>





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
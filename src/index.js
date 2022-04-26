const express = require('express');

const app = express()

app.use(express.json())


const cors = require('cors');

app.use(cors())


const {ragister, login} = require('./controller/user.loginSing.ctrl')

app.post('/login',login)

app.post('/ragister',ragister)


const addPet = require('./controller/addPet.ctrl')

app.use('/addPet',addPet)


const mypet = require('./controller/myPet.ctrl')
app.use('/myPet',mypet)


const shopData = require('./controller/shopData.ctrl')

app.use('/data',shopData)

    
const sort = require('./controller/sortShop.ctrl')
app.use('/sort',sort)



require('dotenv').config()


const connect = require('./configs/db')

const PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});

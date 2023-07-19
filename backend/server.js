import  express from 'express'
import Data from './data/Data.js'
import itemData from './data/itemData.js'
import  dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()


const PORT = process.env.PORT || 8080


const app = express()
app.use(cors())


app.get('/', (req,res) => {
    res.send('API is running...!!')
})

app.get('/drive', (req,res) => {
   res.json(Data)
})

app.get('/s3', (req,res) => {
    res.json(itemData)
 })
 




app.listen(PORT, console.log(`Server is runing in ${process.env.NODE_ENV} on port ${PORT}`))
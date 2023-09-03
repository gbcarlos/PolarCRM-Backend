import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL
const DB_NAME = process.env.DB_NAME

mongoose.connect(MONGO_URL, {
    dbName: DB_NAME
}).then(
    () => {
        console.log('Connected to MongoDB Database!')
    }
).catch((err) => {
        console.log(`Error connecting to Database: ${err}`)
})
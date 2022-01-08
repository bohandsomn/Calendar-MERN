import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import config from './config.js'
import router from './api/router.js'

const { PORT, URL } = config;
 
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))
    } catch (e) {
        console.log(e);
    }
}

start()
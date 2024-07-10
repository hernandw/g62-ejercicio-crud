import express from 'express';
import routes from './routes/router.js'
import cors from 'cors'
import 'dotenv/config'
const app = express();
const PORT = process.env.PORT || 3009;



//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use('/', routes)


app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));
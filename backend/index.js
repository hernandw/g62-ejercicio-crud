import express from 'express';
import routes from './routes/router.js'
import 'dotenv/config'
const app = express();
const PORT = process.env.PORT || 3000;



//Middlewares
app.use(express.json())

//Routes
app.use('/', routes)


app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));
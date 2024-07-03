import express from 'express';
import { models} from '../models/queries.js'
const router = express.Router()

router.get('/', (req, res)=>{
res.send('Hello World desde Router de jS')
})

router.post('/product', async (req, res)=>{
    try {
        const {name,description, price, stock} = req.body
    const response = await models.create(name, description, price, stock)
    res.status(200).send('Product created')
    } catch (error) {
        res.status(500).send(error.message)
    }
})


router.get('/products', async (req, res)=>{
    try {
        const response = await models.getProducts()
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router
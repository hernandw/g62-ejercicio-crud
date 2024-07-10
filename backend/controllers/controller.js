import { models } from "../models/queries.js";

const notFound = (req, res) => {
    
    res.status(404).send("Not found");
}

const home = (req, res) => {
  res.send("Hello World desde controller");
};

const create = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const response = await models.create(name, description, price, stock);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProducts = async (req, res)=>{
    try {
        const response = await models.getProducts()
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const editProduct = async (req, res) => {
  try {
    const {id } = req.params
    const { name, description, price, stock } = req.body;
    const response = await models.editProduct(name, description, price, stock, id);
    res.status(200).send('Product edited');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const response = await models.deleteProduct(id);
      res.status(200).send('Product deleted successfully'); 
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const getProductsLimit = async(req, res) => {
    try {
      const {limits, order_by, page } = req.query
      const response = await models.getProductsLimit({limits, order_by, page})
      res.status(200).send(response)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }


export const controllers = {
  create,
  getProducts,
  notFound,
  home,
  editProduct,
  deleteProduct,
  getProductsLimit
}
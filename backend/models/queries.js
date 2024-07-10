import {pool} from '../config/db.js'
import format from 'pg-format'


const create = async ( name, description, price, stock ) => {
    const query =
      "INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING name";
    const values = [name, description, price, stock];
  
    try {
      const response = await pool.query(query, values);
      
      if (response.rowCount > 0) {
        return response.rows;
      }
    } catch (error) {
      console.log('Error', error.code, 'Error message',error.message);
    }
  };

  const getProducts = async () => {
    const query = "SELECT * FROM products";
    try {
      const response = await pool.query(query);
      if (response.rowCount > 0) {
        return response.rows;
      }
    } catch (error) {
      console.log(error);
    }
  };


  const editProduct = async (name, description, price, stock, id) => {
    try {
      const query = "UPDATE products SET name = $1, description = $2, price = $3, stock = $4 WHERE id = $5 RETURNING *";
      const values = [name, description, price, stock, id];
      const response = await pool.query(query, values);
      if(response.rowCount > 0) {
        return response.rows
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const query = "DELETE FROM products WHERE id = $1";
      const values = [id];
      const response = await pool.query(query, values);
      if(response.rowCount > 0) {
        return response.rows
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsLimit = async ({limits = 10, order_by = 'id_asc', page = 1}) => {
    const [campo, orden] = order_by.split('_');
    const offset = Math.abs((page - 1) * limits)

    const query = format("SELECT * FROM products order by %s %s LIMIT %s OFFSET %s", campo, orden, limits, offset);
    
    try {
      const response = await pool.query(query);
      if (response.rowCount > 0) {
        return response.rows;
      }
    } catch (error) {
      console.log(error);
    }
  };

  


  export const models = {
    create,
    getProducts,
    editProduct,
    deleteProduct,
    getProductsLimit
  }
import {pool} from '../config/db.js'


const create = async ( name, description, price, stock ) => {
    const query =
      "INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *";
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


  export const models = {
    create,
    getProducts
  }
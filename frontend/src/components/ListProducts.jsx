import { useEffect, useState } from "react";

const urlApi = "http://localhost:3000/products";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, [products]);

  const getData = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();

    setProducts(data);
  };

  return <div>
    <h2>Listado de Productos</h2>

    <div className="d-flex gap-3">
    {products && products.length === 0 ? <p>Loading...</p> :
         products.map((item) => (
          <div key={item.id} className="card" style={{ width: "18rem" }}>
            
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
            </div>
            <div>
              <p className="card-text">${item.price}</p>
            </div>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        ))}
    </div>



  </div>;
};

export default ListProducts;

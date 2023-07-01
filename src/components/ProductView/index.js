import "./index.css";

function ProductView({ product }) {
  console.log(product);
  if (product.images.length > 1) {
    return (
      <div className="product-container">
        <div>
          <img
            src={product.images[0]}
            alt="product-img"
            className="first-image"
          />
          <p>{product.description}</p>
          <div className="price">
            <p>$ {product.price}</p>
          </div>
        </div>
        <div>
          <div className="product-info">
            <p className="label">{product.label}</p>
            <h3>{product.name}</h3>
          </div>
          <img
            src={product.images[1]}
            alt="product-img"
            className="second-image"
          />
        </div>
      </div>
    );
  } else if (product.images.length > 0) {
    return (
      <div className="product-container">
        <div>
          <img
            src={product.images[0]}
            alt="product-img"
            className="only-image"
          />
        </div>
        <div className="product-info pi-r">
          <div className="pi-t">
            <p className="label">{product.label}</p>
            <h3>{product.name}</h3>
          </div>
          <p>{product.description}</p>
          <div className="price-r">
            <p>$ {product.price}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>{product.name}</p>;
  }
}

export default ProductView;

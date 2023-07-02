import "./index.css";

function ProductDescription({ product, close }) {
  const calculateImageClass = () => {
    if (product.images.length > 1) {
      return "image-half";
    }
    return "image-complete";
  };

  return (
    <div className="dialog-container slide-in">
      <div className="product-description-container">
        <div className="nav-actions">
          <p onClick={close}>X</p>
        </div>
        <div className="images-container">
          {product.images.map((image) => (
            <img
              src={image}
              alt="product-img"
              className={calculateImageClass()}
            />
          ))}
        </div>
        <div>
          <p>{product.label}</p>
          <h3>{product.name}</h3>
          <p className="description">{product.description}</p>
        </div>
        <div className="price-complete">
          <p>$ {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;

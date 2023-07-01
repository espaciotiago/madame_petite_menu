import "./App.css";
import { useEffect, useState } from "react";
import AppViewModel from "../viewModels/AppViewModel";
import NavCategoryView from "../components/NavCategoryView";
import ProductView from "../components/ProductView";
import logo from "../assets/logo.png";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const categories = AppViewModel.getProducts();
    setCategories(categories);
    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, []);

  function isCategorySelected(category) {
    return category.name === selectedCategory.name;
  }

  return (
    <div>
      <section className="header">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          {categories.map((category) => (
            <NavCategoryView
              key={category.name}
              category={category}
              selected={isCategorySelected(category)}
            />
          ))}
        </nav>
      </section>

      <section className="products">
        {selectedCategory &&
          selectedCategory.products.map((product) => (
            <ProductView key={product.name} product={product} />
          ))}
      </section>
    </div>
  );
}

export default App;
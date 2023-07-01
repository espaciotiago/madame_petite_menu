import data from "../data/data";
import Category from "../models/Category";
import Product from "../models/Product";

class AppViewModel {
  getProducts = () => {
    var categories = data.categories.map((cat) => {
      var products = cat.products.map(
        (prod) =>
          new Product(
            prod.name,
            prod.label,
            prod.description,
            prod.images,
            prod.price
          )
      );
      return new Category(cat.name, products);
    });
    return categories;
  };
}

export default new AppViewModel();

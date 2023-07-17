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
            prod.summary,
            prod.description,
            prod.images,
            prod.price,
            prod.recommended
          )
      );
      return new Category(cat.name, products);
    });
    let cats = [this.getRecommendedCategory()].concat(categories);
    return cats;
  };

  getRecommendedCategory() {
    var products = [];
    const categories = data.categories;
    categories.forEach((cat) => {
      const productsOfCat = cat.products;
      productsOfCat.forEach((prod) => {
        if (prod.recommended) {
          let productToAdd = new Product(
            prod.name,
            prod.label,
            prod.summary,
            prod.description,
            prod.images,
            prod.price,
            prod.recommended
          );
          products.push(productToAdd);
        }
      });
    });
    return new Category("Recomendados", products);
  }
}

export default new AppViewModel();

import "./index.css";

function NavCategoryView({ category, selected }) {
  return (
    <div
      className={
        selected ? "category-container-selected" : "category-container"
      }
    >
      <h4>{category.name}</h4>
    </div>
  );
}

export default NavCategoryView;

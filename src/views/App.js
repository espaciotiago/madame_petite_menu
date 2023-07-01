import AppViewModel from "../viewModels/AppViewModel";

function App() {
  getProducts();

  async function getProducts() {
    const data = await AppViewModel.getProducts();
    console.log(data);
  }

  return (
    <div>
      <img src="" />
    </div>
  );
}

export default App;

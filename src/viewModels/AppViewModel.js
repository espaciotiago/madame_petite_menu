class AppViewModel {
  getProducts = async () => {
    const data = await fetch("https://rickandmortyapi.com/api");
    return data;
  };
}

export default new AppViewModel();

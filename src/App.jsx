import { Navbar } from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import MaterialUi from "./components/pages/materialUI/materialUi";

function App() {
  let bienvenida = "Bienvenidos a Bada Pets, la mejor tienda de mascotas!";

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={bienvenida} />
      <MaterialUi />
    </div>
  );
}

export default App;

import Header from "./components/header";
import Navbar from "./components/navbar";
import SideBar from "./components/sideBar";
import useFetch from "./hooks/useFetch";

function App() {
  const [data, loading] = useFetch();
  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <div className="grid grid-cols-12">
      <SideBar />
      <div className="col-span-10">
        <Navbar />
        <Header data={data} />
      </div>
    </div>
  );
}

export default App;

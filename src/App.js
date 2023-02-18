import { Navigate, Route, Routes } from "react-router";
import Header from "./components/header";
import useFetch from "./hooks/useFetch";
import Dashboard from "./Page/Dashboard";
import Team from "./Page/Team";

function App() {
  const [data, loading] = useFetch();
  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Navigate to={"home"} />} />
          <Route path="home" element={<Header data={data} />} />
          <Route path="contact" element={<Team />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

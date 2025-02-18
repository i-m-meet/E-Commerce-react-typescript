import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
      </div>
    </BrowserRouter>
  );
};

export default App;

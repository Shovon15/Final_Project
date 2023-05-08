import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "@material-tailwind/react";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import router from "./Routes/Routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-700 dark:text-white ">
      <div className="max-w-[1440px] mx-auto ">
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}

export default App;

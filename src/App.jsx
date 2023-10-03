import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import RoutesIndex from './routes/Index'
import Header from "./components/Header"


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header/>
          <RoutesIndex />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
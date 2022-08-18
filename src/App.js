import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom"
import Task from "./Pages/Task"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Task/>} exact/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

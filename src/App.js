import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/hello"  element={<h1>hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route index element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;


import MyNav from "./components/MyNav";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Create from "./components/Create";
import PostDetails from "./components/PostDetails";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
    <div className="container-body">
   <MyNav />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/posts/:postId" element={<PostDetails />}/>
   </Routes>
   <Footer />
   </div>
    </Router>
  
  );
}

export default App;

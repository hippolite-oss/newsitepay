import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header.jsx";
import Background from "./components/background/background.jsx";
import Content1 from "./components/content/content1.jsx";
import Content2 from "./components/content/content2.jsx"; 
import Content3 from "./components/content/content3.jsx";
import Content4 from "./components/content/content4.jsx";
import Content5 from "./components/content/content5.jsx";
import Footer from "./components/footer/footer.jsx";
import Connexion from "./components/connexion/connexion.jsx";
import Inscription from "./components/inscription/inscription.jsx";

const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Background/>
              <Content1/>
              <Content2/> 
              <Content3/>
              <Content4/>
              <Content5/>
              <Footer/>
            </>
          } />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;
// App.js

import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import Home from './components/Page/Home';
import RecipeListingPage from './components/Page/RecipeListingPage';
import LoginPage from './components/Page/LoginPage'
import Header from './components/Parts/Header';
import RecipeDetailsPage from './components/Page/RecipeDetailsPage';





function App() {
  return (
<BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeListingPage />} />
        <Route path="/detailspage/:id" element={<RecipeDetailsPage />} />

        <Route path="/Login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

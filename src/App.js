
import PageLayout from './components/PageLayout';
import Postview from './components/Postview';
import Landing from './components/Landing';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css'
import PostForm from './components/PostForm';

function App() {
  return (
   <>
   
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/page-layout' element={<PageLayout><Postview/></PageLayout>}/>
      <Route path='/post-form' element={<PostForm/>}/>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;

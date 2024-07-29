import './App.css';
import Post from './post';
import Header from "./header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Indexpage from './pages/Indexpage';
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';



function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/register' element={<Registerpage />} />
          <Route path='/create' element={<CreatePost />} />
           <Route path='/post/:id' element={<PostPage />} />
           <Route path='/edit/:id' element={<EditPost/>}/>
        </Route>
      </Routes>
    </UserContextProvider>


  );
}

export default App;

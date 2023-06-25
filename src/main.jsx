import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AddCreator from './pages/add-creator.jsx';
import EditCreator from './pages/edit-creator.jsx';
import ShowCreators from './pages/show-creators.jsx';
import ViewCreator from './pages/view-creator.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<ShowCreators />} />
        <Route path="add" element={<AddCreator />} />
        <Route path="edit" element={<EditCreator />} />
        {/* <Route path="show" element={<ShowCreators />} /> */}
        <Route path="view/:id" element={<ViewCreator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

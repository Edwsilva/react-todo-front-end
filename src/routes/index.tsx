import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Page not found!</h1> } />
          {/* <Navigate to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
};
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { NotFound } from '../../pages/NotFound';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPomodoro />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

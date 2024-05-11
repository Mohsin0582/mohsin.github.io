import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Home from './containers/home/Home.tsx';
import Work from './containers/work/Work.tsx';
import About from './containers/about/About.tsx';
import NotFound from './containers/notFound/NotFound.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

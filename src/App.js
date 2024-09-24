import './App.css';
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, News, FaqPage, PrivacyPage, TermsPage, Blog } from './pages';
import { UserNavbar } from '@/components';
import { Footer } from '@/components';
import NewsArticle from './pages/News/NewsArticle';
import BlogArticle from './pages/Blog/BlogArticle';
import PageNotFound from './pages/PageNotFound';
import  ProjectPage from './pages/ProjectPage';
import  SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <BrowserRouter>
      <UserNavbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsArticle />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="subscription" element={<SubscriptionPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

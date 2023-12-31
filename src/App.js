import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import RegisterPage from "./pages/Category/Authentification/RegisterPage";
import LoginPage from "./pages/Category/Authentification/LoginPage";
import LostPassword from "./pages/Category/Authentification/LostPassword";
import NavBar from "./components/NavBar/NavBar";
import ArtPage from "./pages/Category/ArticleCategory/ArtPage";
import PhotoPage from "./pages/Category/ArticleCategory/PhotoPage";
import ModePage from "./pages/Category/ArticleCategory/ModePage";
import DesignPage from "./pages/Category/ArticleCategory/DesignPage";
import FilmPage from "./pages/Category/ArticleCategory/FilmPage";
import MusiquePage from "./pages/Category/ArticleCategory/MusiquePage";
import About from "./pages/PrivacyPolicy/About";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Conditions from "./pages/PrivacyPolicy/Conditions";
import Contact from "./components/Contact/Contact";
import ScrollToTopButton from "./components/ScrollButton/ScrollToTopButton";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Main from "./components/Main/Main";
import UserProfile from "./components/UserProfile/UserProfile";
import CreatedPost from "./components/UserProfile/CreatedPost";
import Faq from "./pages/Category/FaqFolder/Faq";
import ArticleModel from "./components/ArticlePage/ArticleModel";
import ResetPassword from "./pages/Category/Authentification/ResetPassword";
import AuthLayout from "./pages/Category/Authentification/AuthVerification";

const LinkToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}; // Permet de revenir en haut de la page en cliquant sur un link

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <LinkToTop />
        <AuthLayout />
        <Routes>
          <Route path="/devenir-membre" element={<RegisterPage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/mot-de-passe-oublie" element={<LostPassword />} />
          <Route
            path="/nouveau-mot-de-passe/:token"
            element={<ResetPassword />}
          />
          <Route path="/mon-profil" element={<UserProfile />} />
          <Route path="/ecrire-un-nouvel-article" element={<CreatedPost />} />
          <Route path="/Article/:articleId" element={<ArticleModel />} />
          <Route path="/blog/art" element={<ArtPage />} />
          <Route path="/blog/photo" element={<PhotoPage />} />
          <Route path="/blog/mode" element={<ModePage />} />
          <Route path="/blog/design" element={<DesignPage />} />
          <Route path="/blog/film" element={<FilmPage />} />
          <Route path="/blog/musique" element={<MusiquePage />} />
          <Route path="/" element={<Main />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/politique-de-confidentialité" element={<Privacy />} />
          <Route path="/termes-conditions" element={<Conditions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Router>
    </>
  );
};

export default App;

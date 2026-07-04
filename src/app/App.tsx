import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import CoFundEstateCaseStudy from "./components/CoFundEstateCaseStudy";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutMe />
          </Layout>
        }
      />
      <Route path="/case-studies/cofundestate" element={<CoFundEstateCaseStudy />} />
    </Routes>
  );
}

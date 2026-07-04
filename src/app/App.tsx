import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import CoFundEstateCaseStudy from "./components/CoFundEstateCaseStudy";
import ConnectLocalyCaseStudy from "./components/ConnectLocalyCaseStudy";
import BatchlyCaseStudy from "./components/BatchlyCaseStudy";
import PostPilotCaseStudy from "./components/PostPilotCaseStudy";

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
      <Route path="/case-studies/connectlocaly" element={<ConnectLocalyCaseStudy />} />
      <Route path="/case-studies/batchly" element={<BatchlyCaseStudy />} />
      <Route path="/case-studies/postpilot" element={<PostPilotCaseStudy />} />
    </Routes>
  );
}

import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ConstructionPage from "../components/ContructionPage/ConstructionsPage";
import Header from "../components/Header";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ConstructionPage />
  </Layout>
)

export default IndexPage

import React from "react";
import { GlobalStyle } from "@/styles";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProductDetailPage, ProductListPage } from "@/pages";
import styled from "@emotion/styled";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

const Layout = styled.main`
  width: 600px;
  min-height: 100vh;
  min-height: 100dvh;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default App;

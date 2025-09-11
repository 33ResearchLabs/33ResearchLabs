import React from "react";
import { Toaster } from "@/components/ui/toaster"; // shadcn toaster
import { Toaster as Sonner } from "@/components/ui/sonner"; // Sonner notifications
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout & Components
import Layout from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";

// Pages
import Index from "./pages/Index";
import Ventures from "./pages/Ventures";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import ArticleDetail from "./pages/ArticleDetail";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/Pricing";
import AboutUs from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";

// Legal Pages
import { TermPage } from "./pages/Legal/TermPage";
import { GdprPage } from "./pages/Legal/GdprPage";
import { CookiesPolicy } from "./pages/Legal/CookiesPolicy"; // ✅ Fixed typo

// Company & Culture
import { CompanyCulture } from "./pages/CompanyCulture";

// Admin Layout & Pages
import { AdminLayout } from "./Layout/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { BlogDashboard } from "./pages/Admin/BlogDash";
import { CreateBlogPage } from "./pages/Admin/NewBlog";
import UserQueries from "./pages/Admin/UserQuery";
import { ClientConsultation } from "./pages/Admin/ClientConsultation";
import Login from "./pages/Admin/Login";
import { EditBlogPage } from "./pages/Admin/EditBlogPage";
import AdminProfile from "./pages/Admin/AdminProfile";

// Protected Route
import { ProtectedRoute } from "../Services/ProtectedRoute"; // ✅ Correct path

// Socket.IO
import { io } from "socket.io-client";
import { PrivacyPolicy } from "./pages/Legal/PrivasyPolice";
export const socket = io(import.meta.env.VITE_BACKEND_URL, {
  withCredentials: true,
});

// Query Client
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <GoogleAnalytics />
          <Routes>
            {/* Public Routes with Layout (includes navbar) */}
            <Route
              path="/"
              element={
                <Layout>
                  <Index />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <Services />
                </Layout>
              }
            />

            <Route
              path="/insights"
              element={
                <Layout>
                  <Insights />
                </Layout>
              }
            />
            <Route
              path="/insights/article/:id"
              element={
                <Layout>
                  <ArticleDetail />
                </Layout>
              }
            />
            {/* <Route path="/pricing" element={<Layout><PricingPage /></Layout>} /> */}
            <Route
              path="/about-us"
              element={
                <Layout>
                  <AboutUs />
                </Layout>
              }
            />
            <Route
              path="/team"
              element={
                <Layout>
                  <Team />
                </Layout>
              }
            />
            <Route
              path="/contact-us"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/privacy"
              element={
                <Layout>
                  <PrivacyPolicy />
                </Layout>
              }
            />
            <Route
              path="/terms"
              element={
                <Layout>
                  <TermPage />
                </Layout>
              }
            />
            <Route
              path="/gdpr"
              element={
                <Layout>
                  <GdprPage />
                </Layout>
              }
            />
            <Route
              path="/cookie-policy"
              element={
                <Layout>
                  <CookiesPolicy />
                </Layout>
              }
            />
            <Route
              path="/company-culture"
              element={
                <Layout>
                  <CompanyCulture />
                </Layout>
              }
            />
            {/* <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
            <Route path="/blog/:id" element={<Layout><BlogDetailPage /></Layout>} /> */}

            {/* Login page without layout */}
            <Route path="/login" element={<Login />} />

            {/* Admin Protected Routes without main layout (no navbar) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="blog" element={<BlogDashboard />} />
              <Route path="blog/editblog/:id" element={<EditBlogPage />} />
              <Route path="newblog" element={<CreateBlogPage />} />
              <Route path="user-query" element={<UserQueries />} />
              <Route
                path="client-consultation"
                element={<ClientConsultation />}
              />
              <Route path="profile" element={<AdminProfile />} />
            </Route>

            {/* 404 Page with layout */}
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;

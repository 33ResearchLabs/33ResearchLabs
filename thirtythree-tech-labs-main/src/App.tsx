import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Ventures from "./pages/Ventures";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { TermPage } from "./pages/Legal/TermPage";
import { GdprPage } from "./pages/Legal/GdprPage";
import { CookiesPolicy } from "./pages/Legal/CookiesPolicy";
import PricingPage from "./pages/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import AboutUs from "./pages/AboutPage";
import { PrivacyPolicy } from "./pages/Legal/PrivasyPolice";
import { CompanyCulture } from "./pages/CompanyCulture";
import BlogPage from "./pages/BlogPage";
import { AdminLayout } from "./Layout/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { BlogDashboard } from "./pages/Admin/BlogDash";
import { CreateBlogPage } from "./pages/Admin/NewBlog";
import UserQueries from "./pages/Admin/UserQuery";
import { ClientConsultation } from "./pages/Admin/ClientConsultation";
import Login from "./pages/Admin/Login";
import { io } from "socket.io-client";
import BlogDetailPage from "./pages/BlogDetailPage";
import { EditBlogPage } from "./pages/Admin/EditBlogPage";
import { ProtectedRoute } from "../services/ProtectedRoute"
const queryClient = new QueryClient();
export const socket = io(import.meta.env.VITE_BACKEND_URL, {
  withCredentials: true,
});
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermPage />} />
            <Route path="/gdpr" element={<GdprPage />} />
            <Route path="/cookie-policy" element={<CookiesPolicy />} />
            <Route path="/company-culture" element={<CompanyCulture />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogDetailPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
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
              <Route path="client-consultation" element={<ClientConsultation />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

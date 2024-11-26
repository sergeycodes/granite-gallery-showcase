import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from './components/Navbar';
import Project from './components/Project'; 
import ProjectDetails from './components/ProjectDetails'; // Import the ProjectDetails component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/granite-gallery-showcase"> {/* Set the basename for BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} /> {/* Add the route for project details */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
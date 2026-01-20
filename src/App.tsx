import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// --- Import your Pages ---
import Index from "./pages/Index";
import GoofyPhotos from "./pages/GoofyPhotos";
import BeautifulPhotos from "./pages/BeautifulPhotos";
import BestPhoto from "./pages/BestPhoto";
import UsPhotos from "./pages/UsPhotos";
import Memories from "./pages/Memories";
import Letters from "./pages/Letters";
import Surprise from "./pages/Surprise";
import NotFound from "./pages/NotFound";

// --- Import the Music Component ---
import MusicToggle from "./components/MusicToggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        {/* ADD THIS HERE: The music button lives above all pages */}
        <MusicToggle />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/goofy" element={<GoofyPhotos />} />
            <Route path="/beautiful" element={<BeautifulPhotos />} />
            <Route path="/best" element={<BestPhoto />} />
            <Route path="/us" element={<UsPhotos />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/surprise" element={<Surprise />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
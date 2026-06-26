import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieBanner from "./components/CookieBanner";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BuySell from "./pages/BuySell";
import PortfolioPage from "./pages/PortfolioPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import QuoteLanding from "./pages/QuoteLanding";
import ServiceLandingPage from "./pages/ServiceLandingPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/buy-sell"} component={BuySell} />
      <Route path={"/portfolio"} component={PortfolioPage} />
      <Route path={"/faq"} component={FaqPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/quote"} component={QuoteLanding} />
      <Route path={"/custom-homes"}>{() => <ServiceLandingPage slug="custom-homes" />}</Route>
      <Route path={"/remodeling"}>{() => <ServiceLandingPage slug="remodeling" />}</Route>
      <Route path={"/kitchen-remodeling"}>{() => <ServiceLandingPage slug="kitchen-remodeling" />}</Route>
      <Route path={"/bathroom-remodeling"}>{() => <ServiceLandingPage slug="bathroom-remodeling" />}</Route>
      <Route path={"/home-additions"}>{() => <ServiceLandingPage slug="home-additions" />}</Route>
      <Route path={"/basement-renovations"}>{() => <ServiceLandingPage slug="basement-renovations" />}</Route>
      <Route path={"/real-estate"}>{() => <ServiceLandingPage slug="real-estate" />}</Route>
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/accessibility"} component={Accessibility} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

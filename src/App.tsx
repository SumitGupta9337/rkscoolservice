import { Header } from "./components/Header";
import { Breadcrumb } from "./components/Breadcrumb";
import { Hero } from "./components/Hero";
import { ServiceCategories } from "./components/ServiceCategories";
import { ServiceList } from "./components/ServiceList";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ShopLocation } from "./components/ShopLocation";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb />
      <Hero />
      <ServiceCategories />
      <ServiceList />
      <WhatsAppButton />
      <ShopLocation />
      <Footer />
    </div>
  );
}

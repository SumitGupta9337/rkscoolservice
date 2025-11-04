import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface Service {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string[];
  options: number;
}

const services: Service[] = [
  {
    id: "repair",
    title: "AC Repair - Inspection",
    price: 299,
    image: "https://media.istockphoto.com/id/1437896577/photo/air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg?s=612x612&w=0&k=20&c=Vt5lo-He1rM3_d-G5GHaFVYD0lyMGAtsUccuwNaCe08=",
    description: [
      "Complete AC inspection to identify issues before repair"
    ],
    options: 2
  },
  {
    id: "service",
    title: "Jet Service",
    price: 750,
    image: "https://servicemyhome.in/wp-content/uploads/2024/03/mega-freeze-ac-service-thavalakuppam-pondicherry-refrigerator-repair-and-services-i2hehh6wxf.jpg",
    description: [
      "Filter and coil cleaning to improve air quality, drain cleaning to prevent leaks, anti-rust and performance repairs"
    ],
    options: 3
  },
  {
    id: "gas-refill",
    title: "AC Gas Leak Fix & Refill",
    price: 1400,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/2/487376855/GE/QS/SY/42022748/ac-gas-refilling-services.jpg",
    description: [
      "Detection and repair of refrigerant leaks, sealing pipes, full gas refill for efficiency, and AC system inspection"
    ],
    options: 2
  },
  {
    id: "installation",
    title: "AC Installation",
    price: 1500,
    image: "https://www.onyxaircool.com/wp-content/uploads/2021/03/ac-installation.jpg",
    description: [
      "Professional installation of new AC units with proper mounting and connection"
    ],
    options: 2
  },
  {
    id: "Uninstallation",
    title: "AC Uninstallation",
    price: 500,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/VA/UC/50422214/ac-uninstallation-service-500x500.jpg",
    description: [
      "Professional Uninstallation of AC units with proper mounting and connection"
    ],
    options: 2
  },
  {
    id: "Comprehensive",
    title: "Comprehensive Service",
    price: 3000,
    image: "https://catalystindustry.com/wp-content/uploads/2024/10/AC-Spare-Parts-1000-x-667-2.png",
    description: [
      "Enjoy complete peace of mind! This plan covers all services, gas refills, and parts replacement for a full year — no extra charges for repairs."
    ],
    options: 2
  },
  {
    id: "Non-Comprehensive",
    title: "Non-Comprehensive Service",
    price: 2500,
    image: "https://www.hhaircon.com.au/wp-content/uploads/2022/03/is-yearly-ac-maintenance-worth-it-1280x720.jpg",
    description: [
      "Ideal for basic maintenance. Get regular AC servicing, but gas refilling and parts will be charged separately if needed."
    ],
    options: 2
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="p-4 md:p-6">
      <div className="flex gap-3 md:gap-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 mb-2 text-sm md:text-base">{service.title}</h3>

          <div className="mb-3 md:mb-4">
            <span className="text-gray-700 text-xs md:text-sm">Starts at </span>
            <span className="text-gray-900 text-sm md:text-base font-medium">₹{service.price}</span>
          </div>

          <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
            {service.description.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                <span className="text-red-500 mt-1 flex-shrink-0">*</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="flex flex-col items-end gap-2 md:gap-3 flex-shrink-0">
          <div className="w-20 h-16 md:w-32 md:h-24 rounded-lg overflow-hidden">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ServiceList() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {/* Repair & Service Section */}
          <div>
            <h2 className="text-gray-900 mb-4 md:mb-6 text-lg md:text-2xl">Repair & Service</h2>
            <div className="space-y-3 md:space-y-4">
              <ServiceCard service={services[0]} />
              <ServiceCard service={services[1]} />
            </div>
          </div>

          {/* Gas Refill Section */}
          <div>
            <h2 className="text-gray-900 mb-4 md:mb-6 text-lg md:text-2xl">Gas Refill</h2>
            <div className="space-y-3 md:space-y-4">
              <ServiceCard service={services[2]} />
            </div>
          </div>

          {/* Install & Uninstall Section */}
          <div>
            <h2 className="text-gray-900 mb-4 md:mb-6 text-lg md:text-2xl">Install & Uninstall</h2>
            <div className="space-y-3 md:space-y-4">
              <ServiceCard service={services[3]} />
              <ServiceCard service={services[4]} />
            </div>
          </div>

          <div>
            <h2 className="text-gray-900 mb-4 md:mb-6 text-lg md:text-2xl">Comprehensive & Non-Comprehensive</h2>
            <div className="space-y-3 md:space-y-4">
              <ServiceCard service={services[5]} />
              <ServiceCard service={services[6]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

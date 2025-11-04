export interface Service {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string[];
  options: number;
  category: string;
}

export const services: Service[] = [
  {
    id: "repair",
    title: "AC Repair - Inspection",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1437896577/photo/air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg?s=612x612&w=0&k=20&c=Vt5lo-He1rM3_d-G5GHaFVYD0lyMGAtsUccuwNaCe08=",
    description: ["Complete AC inspection to identify issues before repair"],
    options: 2,
    category: "Repair & Service",
  },
  {
    id: "service",
    title: "Jet Service",
    price: 750,
    image:
      "https://servicemyhome.in/wp-content/uploads/2024/03/mega-freeze-ac-service-thavalakuppam-pondicherry-refrigerator-repair-and-services-i2hehh6wxf.jpg",
    description: [
      "Filter and coil cleaning to improve air quality, drain cleaning to prevent leaks, anti-rust and performance repairs",
    ],
    options: 3,
    category: "Repair & Service",
  },
  {
    id: "gas-refill",
    title: "AC Gas Leak Fix & Refill",
    price: 1400,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/2/487376855/GE/QS/SY/42022748/ac-gas-refilling-services.jpg",
    description: [
      "Detection and repair of refrigerant leaks, sealing pipes, full gas refill for efficiency, and AC system inspection",
    ],
    options: 2,
    category: "Gas Refill",
  },
  {
    id: "installation",
    title: "AC Installation",
    price: 1500,
    image:
      "https://www.onyxaircool.com/wp-content/uploads/2021/03/ac-installation.jpg",
    description: [
      "Professional installation of new AC units with proper mounting and connection",
    ],
    options: 2,
    category: "Install & Uninstall",
  },
  {
    id: "uninstallation",
    title: "AC Uninstallation",
    price: 500,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/VA/UC/50422214/ac-uninstallation-service-500x500.jpg",
    description: [
      "Professional Uninstallation of AC units with proper mounting and connection",
    ],
    options: 2,
    category: "Install & Uninstall",
  },
  {
    id: "comprehensive",
    title: "Comprehensive Service",
    price: 3000,
    image:
      "https://catalystindustry.com/wp-content/uploads/2024/10/AC-Spare-Parts-1000-x-667-2.png",
    description: [
      "Enjoy complete peace of mind! This plan covers all services, gas refills, and parts replacement for a full year — no extra charges for repairs.",
    ],
    options: 2,
    category: "Comprehensive & Non-Comprehensive",
  },
  {
    id: "non-comprehensive",
    title: "Non-Comprehensive Service",
    price: 2500,
    image:
      "https://www.hhaircon.com.au/wp-content/uploads/2022/03/is-yearly-ac-maintenance-worth-it-1280x720.jpg",
    description: [
      "Ideal for basic maintenance. Get regular AC servicing, but gas refilling and parts will be charged separately if needed.",
    ],
    options: 2,
    category: "Comprehensive & Non-Comprehensive",
  },
];

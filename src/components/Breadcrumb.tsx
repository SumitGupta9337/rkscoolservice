import { ChevronRight, MapPin } from "lucide-react";

export function Breadcrumb() {
  return (
  <div className="bg-gray-50 border-b border-gray-200">
    <div className="container mx-auto px-4 py-2 md:py-3">
      <div className="flex items-center justify-between">
        {/* Left Side — Scrolling Text */}
        <div className="flex-1 overflow-hidden">
          <p className="font-semibold text-teal-700 text-sm md:text-base whitespace-nowrap animate-marquee tracking-wide">
           🌟 <span className="text-orange-500 font-bold">Expert AC Services</span> now available across <span className="text-teal-600 font-bold">Mumbai</span>. Contact us at <span className="text-orange-500 font-bold">+91 9833705263 / +91 9820989005 </span> today for reliable repairs and maintenance! 🌟
          </p>
        </div>

        {/* Right Side — Mumbai Button */}
        <button className="hidden md:flex items-center gap-2 text-sm md:text-base font-medium text-gray-800 hover:text-gray-900 flex-shrink-0 ml-4">
          <MapPin className="w-5 h-5 text-orange-500" />
          <span>Mumbai</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

}

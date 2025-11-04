import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center gap-4 h-16 px-4">
          {/* Logo + Search in same flex row */}
          <div className="flex items-center gap-4 flex-1">
            {/* Logo Section */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/assets/RKS.png"
                alt="RKS Logo"
                className="h-10 w-auto"
              />
              <img
                src="/assets/R.K.S Cool (1).png"
                alt="R.K.S Cool Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Search Bar Next to Logo */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search for services..."
                className="pl-10 pr-4 border-gray-300 focus-visible:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-14 gap-2">
            <div className="flex items-center gap-1.5 flex-1">
              <img
                src="/assets/RKS.png"
                alt="RKS Logo"
                className="h-10 w-auto inline-block"
              />
              {/* Compact search next to logo */}
              <div className="ml-2 flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search services..."
                    className="pl-10 pr-4 h-10 text-sm border-gray-300 focus-visible:ring-teal-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

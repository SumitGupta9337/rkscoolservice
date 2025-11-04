import { useState, ChangeEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { services, Service } from "../data/services";

export function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Service[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = services.filter(
      (s) =>
        s.title.toLowerCase().includes(value) ||
        s.description.some((d) => d.toLowerCase().includes(value))
    );

    setResults(filtered);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 h-16 px-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/assets/RKS.png" alt="RKS Logo" className="h-10 w-auto" />
            {/* Hide this second logo on mobile (show from md breakpoint and up) */}
            <img
              src="/assets/R.K.S Cool (1).png"
              alt="R.K.S Cool Logo"
              className="h-10 w-auto hidden md:block"
            />
          </div>

          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search for services..."
              value={query}
              onChange={handleSearch}
              className="pl-10 pr-4 border-gray-300 focus-visible:ring-teal-500"
            />

            {/* Results Dropdown */}
            {results.length > 0 && (
              <div className="absolute bg-white shadow-lg rounded-md border border-gray-200 mt-2 w-full max-h-64 overflow-y-auto z-50">
                {results.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {s.title}
                    </h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

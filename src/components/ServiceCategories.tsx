import { Card } from "./ui/card";

export function ServiceCategories() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-10 md:py-16 mt-8 border border-black">

      <div className="container mx-auto px-4 mt-6 ">
        <Card className="p-6 md:p-10 max-w-5xl mx-auto shadow-lg border-4 border-black rounded-2xl bg-white ">
          <h2 className="text-gray-900 text-xl md:text-2xl font-bold mb-8 text-center ">
            What service do you need?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center">
            
            <button className="flex flex-col items-center justify-center bg-white p-4 md:p-5  shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src="/assets/mechanic.png" alt="Repair & Service" className="w-20 h-20 md:w-12 md:h-12 object-contain" />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-700">Repair & Service</span>
            </button>

            <button className="flex flex-col items-center justify-center bg-white p-4 md:p-5  shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src="/assets/gas-tank.png" alt="Gas Refill" className="w-20 h-20 md:w-12 md:h-12 object-contain" />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-700">Gas Refill</span>
            </button>

            <button className="flex flex-col items-center justify-center bg-white p-4 md:p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src="\assets\repair.png" alt="Install & Uninstall" className="w-25 h-25 md:w-12 md:h-12 object-contain" />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-700">Install & Uninstall</span>
            </button>

            <button className="flex flex-col items-center justify-center bg-white p-4 md:p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src="\assets\purchase.png" alt="Spare Parts" className="w-20 h-20 md:w-12 md:h-12 object-contain" />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-700">Spare Parts</span>
            </button>
            
          </div>
        </Card>
      </div>
    </section>
  );
}

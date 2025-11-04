export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-teal-400 text-lg md:text-xl">R.K.S Cool Services</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              Mumbai's leading platform for device protection and home services
            </p>
          </div>

          <div>
            <h4 className="text-white mb-3 md:mb-4 text-xs md:text-sm">Services</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">AC Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop Location</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Why us ?</a></li>

            </ul>
          </div>


        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
          © 2025 RKSCoolService. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

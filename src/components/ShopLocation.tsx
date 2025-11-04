import { MapPin, Phone, Mail, Clock, User } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function ShopLocation() {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-gray-900 mb-6 md:mb-8 text-center text-xl md:text-3xl">Our Shop Location</h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <Card className="p-4 md:p-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                <div className="flex items-center gap-3 md:gap-4">
                    <img 
                      src="src\assets\owner1.png" 
                      alt="User" 
                      className="w-20 h-20 md:w-14 md:h-14 object-cover rounded-full border border-black-300"
                    />
                  <div>
                    <h3 className="text-gray-900 mb-1 text-sm md:text-base">Ravindra Singh</h3>
                    <p className="text-xs md:text-sm text-gray-600">Owner & Lead Technician</p>
                    <p className="text-xs text-gray-500 mt-1">15+ years of experience</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex gap-2 md:gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-700 text-xs md:text-sm mb-1">Shop Address</p>
                    <p className="text-gray-900 text-sm md:text-base">
                      Shop no. 3, Darga Compound, <br />
                       Near Great Eastern Garden,<br />
                      Mumbai - 400 078, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 md:gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-xs md:text-sm mb-1">Contact Numbers</p>
                    <p className="text-gray-900 text-sm md:text-base">+91 9833705263</p>
                    <p className="text-gray-900 text-sm md:text-base">+91 9820989005</p>
                  </div>
                </div>

                <div className="flex gap-2 md:gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-xs md:text-sm mb-1">Email</p>
                    <p className="text-gray-900 text-sm md:text-base">rkscoolservice73@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-2 md:gap-3">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-xs md:text-sm mb-1">Working Hours</p>
                    <p className="text-gray-900 text-sm md:text-base">Mon - Sat: 10:00 AM - 9:00 PM</p>
                    <p className="text-gray-900 text-sm md:text-base">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                <Button 
                  className="w-full bg-teal-600 hover:bg-teal-700" 
                  size="lg"
                  onClick={() => window.open('https://www.google.com/maps/place/RKS+COOL+SERVICE/@19.1341483,72.9260064,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c75164a03477:0xf313e5408f49ed9!8m2!3d19.1341483!4d72.9285813!16s%2Fg%2F11n5bqgf_d?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D', '_blank')}
                >
                  <img src="src\assets\placeholder.png" alt="Google Maps" className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </div>
            </Card>

            <Card className="p-4 md:p-6">
              <h3 className="text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Why Choose Us?</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-600 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs md:text-sm">15+ years of experience in AC servicing and repairs</p>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-600 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs md:text-sm">Certified technician with expertise in all major AC brands including LG, Samsung, Daikin, Voltas, and more</p>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-600 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs md:text-sm">100% genuine spare parts guarantee</p>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-600 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs md:text-sm">Same-day service available for emergency repairs</p>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-600 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs md:text-sm">Transparent pricing with no hidden charges</p>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-600 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs md:text-sm">30-day service warranty on all repairs</p>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-600 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs md:text-sm">500+ satisfied customers in Mumbai area</p>
                </div>
              </div>

              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                <h4 className="text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Services Offered</h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full text-xs md:text-sm">AC Repair</span>
                  <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full text-xs md:text-sm">Installation</span>
                  <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full text-xs md:text-sm">Gas Refill</span>
                  <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full text-xs md:text-sm">Servicing</span>
                  <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full text-xs md:text-sm">AMC Plans</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

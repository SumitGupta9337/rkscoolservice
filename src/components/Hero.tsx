import { Button } from "./ui/button";



export function Hero() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Increased gap between image and text */}
        <div className="grid lg:grid-cols-2 gap-3 md:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Image Section */}
          <div className="flex justify-center order-2 lg:order-1 pb-8 md:pb-20">
            <img 
              src="src/assets/Ravindra.png"
              alt="AC Service Illustration"
              className="w-[85%] sm:w-[80%] md:w-[90%] lg:w-[100%] max-w-lg md:max-w-xl lg:max-w-2xl"
            />
          </div>
          
          {/* Text Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left px-2 sm:px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              New Air-Condition Sale, Services, Maintenance & Spare Part Dealers.  
            </h1>
            <p className="text-gray-600 mb-6 md:mb-8 text-base sm:text-lg">
              Just sit back, relax and let us take care of your AC servicing & repairs
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 md:px-12 rounded-full w-full sm:w-auto"
            >
              GET STARTED
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

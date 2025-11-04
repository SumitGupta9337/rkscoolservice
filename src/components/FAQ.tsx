import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer AC repair, installation, service & maintenance, gas refilling, uninstallation/installation, and annual maintenance contracts (AMC) for all AC brands."
  },
  {
    question: "How quickly can you service my AC?",
    answer: "We offer same-day service for most areas. Emergency services are available 24/7. You can book a slot as per your convenience through our app or website."
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Yes, all our repair services come with a 30-day service warranty. Annual plan members get extended warranty coverage on parts and labor."
  },
  {
    question: "What brands do you service?",
    answer: "We service all major AC brands including Samsung, LG, Voltas, Daikin, Blue Star, Hitachi, Carrier, and more."
  },
  {
    question: "How much does AC repair cost?",
    answer: "Repair costs start from ₹499 and vary based on the issue and parts required. We provide transparent pricing before starting any work."
  },
  {
    question: "Is the Annual Plan worth it?",
    answer: "Yes! The Annual Plan includes 4 scheduled services, free gas top-up, priority support, and 20% off on spare parts. It's perfect for regular AC users."
  },
  {
    question: "Can I reschedule my appointment?",
    answer: "Yes, you can easily reschedule your appointment through the app or by calling our customer support team."
  },
  {
    question: "Are your technicians certified?",
    answer: "All our technicians are certified, background-verified, and trained on the latest AC technologies and repair methods."
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our services</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Still have questions? <a href="#contact" className="text-blue-600 hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

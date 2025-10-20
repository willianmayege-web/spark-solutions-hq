import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
}

const ServiceFAQ = ({ faqs, title = "Perguntas Frequentes" }: ServiceFAQProps) => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center font-montserrat">
          {title}
        </h2>
        
        <Card className="p-8 bg-card">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default ServiceFAQ;

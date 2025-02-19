import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <div>
<h2  className="text-4xl font-bold text-center py-8">FAQs

</h2>

            <Accordion type="single" collapsible className="w-9/12 mt-4 m-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger className= "faq-title">What services does Yogloans Finance offer?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className= "faq-title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium??</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className= "faq-title">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architect?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

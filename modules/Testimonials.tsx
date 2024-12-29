import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { getAvatar } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import Autoplay from "embla-carousel-autoplay";

type TestimonialsListType = {
  name: string;
  designation: string;
  testimonial: string;
  avatar: string;
}[];

const TestimonialsList: TestimonialsListType = [
  {
    name: "Saipo",
    designation: "CEO, XYZ",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: getAvatar(1),
  },
  {
    name: "Till",
    designation: "CTO, XYZ",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: getAvatar(2),
  },
  {
    name: "Caro",
    designation: "Manager, XYZ",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: getAvatar(3),
  },
  {
    name: "Mark",
    designation: "Manager, XYZ",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: getAvatar(4),
  },
];

function Testimonials() {
  return (
    <div className="w-full flex justify-center">
      <Carousel
        className="w-full max-w-xs"
        // plugins={[
        //   Autoplay({
        //     delay: 3000,
        //   }),
        // ]}
      >
        <CarouselContent>
          {TestimonialsList.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                    <header className="w-full flex items-center">
                      <Avatar>
                        <AvatarImage src={_.avatar} />
                        <AvatarFallback>#</AvatarFallback>
                      </Avatar>
                      <section className="pl-4">
                        <div>{_.name}</div>
                        <div>{_.designation}</div>
                      </section>
                    </header>
                    <div className="max-w-xs pt-6">{_.testimonial}</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Testimonials;

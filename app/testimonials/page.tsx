import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

const reviews = [
  {
    name: "Farid Isgandarli",
    body: "Möhtəşəm!! 🔥🤯",
    img: "/testimonials/farid.png",
    link: "https://linkedin.com/in/farid-isgandarli"
  },
  {
    name: "Murad Heydarov",
    body: "Bunu çox sevdim! 🤯",
    img: "/testimonials/murad.jpg",
    link: "https://linkedin.com/in/muradheydarov"
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
  link,
}: {
  img: string;
  name: string;
  body: string;
  link: string;
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-6",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full"
              width="32"
              height="32"
              alt=""
              src={img}
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {name}
              </figcaption>
            </div>
          </div>
          <LinkedInLogoIcon className="w-5 h-5 text-[#0077B5]" />
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    </a>
  );
};

const ReviewsSection = () => {
  return (
    <div className="relative mt-10 lg:mt-0 flex size-full flex-col items-center justify-center overflow-hidden rounded-lg  pb-5  mb-1x0">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 pt-0 text-center">
      <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-3xl ">
          Müştərilərimiz
        </h2>
        <p className="mb-18 px-10 text-center text-lg font-medium tracking-tight text-foreground/80 mx-auto">
          İnsanların <span className="font-bold">bizim haqqımızda</span> nə dediyini eşidin.
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s] mt-10">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-[1.2%] bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-[1.2%] bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default ReviewsSection;
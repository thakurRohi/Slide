// import { footerGroups, socialIcons } from "@/components/home/data/footerGroups";
// import FooterLinkGroup from "@/components/home/FooterLinkGroup";
import ImageCard from "@/components/home/ImageCard";
// import NewsletterForm from "@/components/home/NewsletterForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const imageData = [
  {
    src: "https://marketplace.canva.com/EAFkR3HM3rE/1/0/1600w/canva-black-and-beige-photo-new-post-instagram-post-NU-nLixJ0nM.jpg",
    aspectRatio: "0.94",
  },
  {
    src: "https://marketplace.canva.com/EAE2pXyqyx0/1/0/1600w/canva-simple-instagram-frame-template-instagram-post-ObQSn5BL2ZQ.jpg",
    aspectRatio: "0.94",
    marginTop: "mt-4",
  },
  /*   {
    src: "https://marketplace.canva.com/EAE2pXyqyx0/1/0/1600w/canva-simple-instagram-frame-template-instagram-post-ObQSn5BL2ZQ.jpg",
    aspectRatio: "1.7",
    marginTop: "mt-4",
  }, */
];

const imageData2 = [
  {
    src: "https://marketplace.canva.com/EAF-43gIi8Q/1/0/1600w/canva-brown-photo-collage-instagram-post-IYa0cBCMyH8.jpg",
    aspectRatio: "1.7",
  },
  {
    src: "https://www.tribegroup.co/hs-fs/hubfs/Blog%20Assets/00%20-%202021/0321%20-%20How%20to%20Promote%20on%20Instagram%20Costs,%20Tips%20and%20Tricks/insta-promote.png?width=550&name=insta-promote.png",
    aspectRatio: "0.94",
    marginTop: "mt-4",
  },
  {
    src: "https://marketplace.canva.com/EAFNZ0mRedU/1/0/1600w/canva-lSVdGGDAJIA.jpg",
    aspectRatio: "0.94",
    marginTop: "mt-4",
  },
];

const plans = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Upgrade Now",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-8 w-8 rounded-lg bg-white text-black flex items-center justify-center font-bold">
                      li
                    </div>
                    <span className="text-xl font-semibold text-blue-200">
                      Slide
                    </span>
                  </div>
                  <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                    <Link href="#features">Features</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="#about">About</Link>
                  </nav>

                  <Link href="/dashboard">
                    <Button className="bg-white text-black px-7 font-semibold">
                      Login
                    </Button>
                  </Link>
                </div>
                {/* Rest of the component implementation follows with the extracted components */}
                {/* Features section */}

                <div className="flex overflow-hidden flex-col px-16 mt-28 w-full min-h-[900px] max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-wrap flex-1 size-full max-md:max-w-full">
                    <div className="flex flex-col flex-1 shrink justify-center pr-20 basis-0 min-w-[240px] max-md:max-w-full">
                      <div className="flex flex-col w-full text-white max-md:max-w-full">
                        <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                          Transform Your Instagram Engagement with Automation
                        </h1>
                        <p className="mt-6 text-lg text-blue-200">
                          Streamline your communication and connect with your
                          audience effortlessly. Our DM automation tool saves
                          you time while enhancing your engagement.
                        </p>
                      </div>
                      <div className="flex gap-4 items-start self-start mt-8 text-base">
                        <Link href="/dashboard">
                          <Button
                            size="lg"
                            className="bg-blue-600 text-white hover:bg-blue-700"
                          >
                            Get Started
                          </Button>
                        </Link>
                        <Link href="/dashboard">
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-blue-400  hover:bg-blue-900/50"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex relative flex-1 shrink gap-4 items-start my-auto basis-20 min-h-[900px] min-w-[240px] max-md:max-w-full">
                      <div className="flex absolute right-0 bottom-0 z-0 flex-col h-[800px] left-[550px] min-w-[240px] w-[360px]">
                        {imageData.map((image, index) => (
                          <ImageCard
                            key={`right-${index}`}
                            src={image.src}
                            aspectRatio={image.aspectRatio}
                            marginTop={image.marginTop}
                          />
                        ))}
                      </div>
                      <div className="flex absolute bottom-0 left-[100px] z-0 flex-col h-[1000px] right-[337px] w-[370px]">
                        {imageData2.map((image, index) => (
                          <ImageCard
                            key={`left-${index}`}
                            src={image.src}
                            aspectRatio={image.aspectRatio}
                            marginTop={image.marginTop}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      

      {/* Footer section */}
      {/* <footer className="flex overflow-hidden flex-col px-16 py-20 w-full max-md:px-5 max-md:max-w-full"> */}
        {/* <div className="flex flex-wrap gap-10 items-start w-full min-h-[248px] max-md:max-w-full">
          {footerGroups.map((group, index) => (
            <FooterLinkGroup key={index} {...group} />
          ))}
          <div className="flex flex-col min-w-[240px] w-[400px]">
            <div className="flex flex-col w-full text-base text-white">
              <div className="font-semibold">Join</div>
              <div className="mt-4 leading-6">
                Subscribe to our newsletter for the latest updates and insights.
              </div>
            </div>
            <NewsletterForm />
          </div>
        </div> */}

        {/* Social Icons */}
        {/* <div className="flex gap-3 items-start mt-8">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              className="object-contain shrink-0 w-6 aspect-square"
            />
          ))}
        </div> */}
      {/* </footer> */}
    </main>
  );
}
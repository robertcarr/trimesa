import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid pt-8 ">
      <div className="flex justify-center">
            <img width="25%" src="/noBgColor.png"/>
            </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

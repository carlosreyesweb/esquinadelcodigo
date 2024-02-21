import { SocialLinks } from "./social-links";
import { Typography } from "./ui/typography";

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container text-center grid justify-items-center gap-y-2">
        <Typography variant="p">
          Hecho con <span className="animate-pulse">💓</span> por{" "}
          <a
            href="https://www.carlosreyesweb.com"
            target="_blank"
            className="text-[#33DFBD] underline-offset-4 hover:underline"
          >
            Carlos Reyes Web
          </a>
        </Typography>
        <SocialLinks />
      </div>
    </footer>
  );
}

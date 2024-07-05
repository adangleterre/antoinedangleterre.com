import BrandLogo from "@/components/BrandLogo";
import Icons from "@/components/Icons";

function Footer() {
  return (
    <footer className="pb-12">
      <hr className="h-px border-t-0 bg-lightPrimary-900 opacity-30 dark:bg-darkPrimary-900" />
      <div className="flex flex-col py-14 sm:flex-row">
        <div className="flex flex-col gap-7 sm:w-9/12">
          <BrandLogo />
          <p className="text-sm text-[#1E2F40]">
            Ce portfolio est toujours en cours d’évolution. Développé avec
            Next.JS, React.JS, Tailwind CSS, Framer motion pour les animations.
            Design fait avec Figma. Le versionning est géré par GitHub et
            l’hébergement du site par Vercel. La police pour les titres est
            Gilroy, celle pour les corps de texte est Open Sans. Les icones
            utilisés sont celles de la collection Material Rounded provenant du
            site Icons8.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-10 sm:m-0 sm:w-3/12 sm:flex-col sm:items-end sm:gap-5">
          <a href="https://github.com/adangleterre" target="_blank">
            <Icons name={"github"} size={30} />
          </a>
          <a
            href="http://fr.linkedin.com/in/antoine-dangleterre"
            target="_blank"
          >
            <Icons name={"linkedin"} size={30} />
          </a>
          <a href="mailto:bonjour@antoinedangleterre.com" target="_blank">
            <Icons name={"mail"} size={25} />
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center gap-4 text-center text-sm opacity-85 sm:flex-row sm:gap-12">
        <a className="hidden" href="http://">
          Accessibilité : partiellement conforme
        </a>
        <a href="mailto:bonjour@antoinedangleterre.com">
          bonjour@antoinedangleterre.fr
        </a>
        <a href="https://drive.google.com/file/d/1DHed1MAnsKXpxmkZZioPBw4UsUOnVXZs/view?usp=sharing">
          Consultez mon cv
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import BrandLogo from "@/components/BrandLogo"
import Icons from "@/components/Icons"

function Footer() {
    return (
        <footer className="pb-12">
            <hr className="h-px border-t-0 bg-lightPrimary-900 dark:bg-darkPrimary-900 opacity-30"/>
            <div className="flex flex-col sm:flex-row py-14">
                <div className="flex flex-col gap-7 sm:w-9/12">
                    <BrandLogo />
                    <p className="text-sm text-[#1E2F40]">Ce portfolio est toujours en cours d’évolution. Développé avec React, Vite et TailwindCss. Design fait avec Figma. Le versionning est géré par GitHub et l’hébergement du site par o2switch. La police pour les titres est Gilroy, celle pour les corps de texte est Open Sans. Les icones utilisés sont celles de la collection Material Rounded provenant du site Icons8.</p>
                </div>
                <div className="flex sm:flex-col gap-10 sm:gap-5 sm:w-3/12 items-center justify-center sm:items-end mt-10 sm:m-0">
                    <a href="https://github.com/adangleterre" target="_blank">
                        <Icons name={"github"} />
                    </a>
                    <a href="http://fr.linkedin.com/in/antoine-dangleterre" target="_blank">
                        <Icons name={"linkedin"} />
                    </a>
                    <a href="mailto:bonjour@antoinedangleterre.com" target="_blank">
                        <Icons name={"mail"} />
                    </a>
                </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row text-center justify-center gap-4 sm:gap-12 text-sm opacity-85">
                <a href="http://">Accessibilité : partiellement conforme</a>
                <a href="http://">hello@antoinedangleterre.fr</a>
                <a href="http://">Consultez mon cv</a>
            </div>
        </footer>
    )
}

export default Footer
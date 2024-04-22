import Badge from "@/components/Badge"
import Icons from "@/components/Icons"

function Contact() {
    return (
        <div className="flex flex-col items-center">
            <Badge sectionName="Mes contacts" />
            <p className="text-2xl text-center md:text-3xl font-extrabold font-gilroy">Envie d'échanger avec moi ?</p>
            <a href="mailto:bonjour@antoinedangleterre.com" target="_blank">
                <div className="mb-6 mt-10 font-bold text-lg sm:text-xl flex gap-4 items-center"><Icons name="mail" size={20} /> bonjour@antoinedangleterre.fr</div>
            </a>
            <div className="flex gap-7">
                <a href="https://github.com/adangleterre" target="_blank">
                    <Icons name={"github"} size={30} />
                </a>
                <a href="http://fr.linkedin.com/in/antoine-dangleterre" target="_blank">
                    <Icons name={"linkedin"} size={30} />
                </a>
            </div>
        </div>
    )
}

export default Contact
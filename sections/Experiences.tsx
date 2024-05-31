import SectionBadge from "@/components/SectionBadge"
import Experience from "@/components/Experience"
import RevealContent from "@/components/ReavealContent"

function Experiences() {
    return (
        <>
            <RevealContent>
                <>
                    <SectionBadge sectionName={"Mon parcours"} />
                    <h2 className="text-3xl font-extrabold text-center mb-6 md:mb-10">Mon parcours professionnel en résumé</h2>
                </>
            </RevealContent>
            <div className="flex flex-col gap-12">
                <Experience post={"Auto-Entreprenariat"} dateStart={2021} company={"Kodiz"}>
                    <p>Création d’une agence web indépendante en auto-entreprise.</p>
                    <p>Services B2B de création de sites web vitrine, e-commerce, promotionnel, marketing. Maquettage sur-mesure, maintenance quotidienne, optimisation SEO, gestion d’hébergement. Accompagnement et formation des clients après livraison du site, publication d’articles de blog.</p>
                    <p>Formation à destination d’étudiants en bac+2 et bac+3 (Intégration Web, Framework CSS, Accessibilité Numérique)</p>
                </Experience>
                <Experience post={"Développeur Frontend"} dateStart={2020} dateEnd={2021} company={"Lyreco Group"} >
                    <p>Développeur en alternance sur un projet Design Autority.</p>
                    <p>Création d’une librairie de composants réutilisables pour tous les projets de l’entreprise. En parallèle, développement de fonctionnalités et résolutions de bugs sur le webshop de Lyreco.</p>
                    <p>Tests JS avec Jasmine, tests visuels avec BackstopJS. Intégration et accompagnement des collaborateurs sur les projets de l’entreprise. Rédaction de documentation et création de tutoriels. Participation à la création du design system avec le webdesigner.</p>
                    <p>Projet en méthodes agiles, pipelines d’intégration continue avec Jenkins, outils collaboratifs Jira, Bitbucket, Confluence.</p>
                </Experience>
                <Experience post={"Développeur Backend"} dateStart={2019} dateEnd={2020} company={"Lyreco Group"} >
                    <p>Développeur en alternance sur un projet Golden Copie.</p>
                    <p>Projet en Java Spring, base MongoDB, sauvegarde des données via une BDD Oracle. Gestion de l’API Rest avec Swagger, routing avec Apache Camel, tests unitaires avec Junit.</p>
                    <p>Travail en TDD, Peer Programing , clean code. Projet dirigé en méthodes agiles avec présence de développeurs Indiens en offshore dans l’équipe. Intégration continue
 avec Jenkins, outils collaboratifs Jira, Bitbucket, Confluence.</p>
                </Experience>
            </div>
        </>
    )
}

export default Experiences
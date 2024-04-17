import Button from "../components/Button"

function Hero() {
    return (
        <>
            <div>
                <p className="text-xl font-bold">Bonjour ! Je suis</p>
                <h1>Antoine Dangleterre</h1>
                <p className="text-xl font-bold">Développeur front-end situé dans le nord (Valenciennes, Cambrai, Lille)</p>
            </div>
            <div className="flex flex-col mt-12 sm:flex-row gap-9">
                <a href="mailto:bonjour@antoinedangleterre.com">
                    <Button
                        color={"primary"}
                        text={"Prenez contact avec moi"}
                    />
                </a>
                <a href="https://drive.google.com/file/d/1DHed1MAnsKXpxmkZZioPBw4UsUOnVXZs/view?usp=sharing" target="_blank">
                    <Button
                        color={"secondary"}
                        text={"Téléchargez mon CV"}
                        className={'grow'}
                    />
                </a>
            </div>
        </>
    )
}

export default Hero
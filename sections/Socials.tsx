import Icons from "../components/Icons"

function Socials() {
  return (
    <div className="flex gap-12 mb-[50px] items-center">
      <a href="https://github.com/adangleterre" target="_blank">
        <Icons name={"github"} size={30}/>
      </a>
      <a href="http://fr.linkedin.com/in/antoine-dangleterre" target="_blank">
        <Icons name={"linkedin"} size={30}/>
      </a>
      <a href="mailto:bonjour@antoinedangleterre.com" target="_blank">
        <Icons name={"mail"} size={25}/>
      </a>
    </div>
  )
}

export default Socials
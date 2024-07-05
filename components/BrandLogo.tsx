import Image from "next/image";
import lightLogo from "/public/images/logo-clear-theme.svg";
import darkLogo from "/public/images/logo-dark-theme.svg";

function BrandLogo() {
  return (
    <>
      <Image
        src={lightLogo}
        alt="logo Antoine Dangleterre"
        className="max-h-12 w-fit dark:hidden"
      />
      <Image
        src={darkLogo}
        alt="logo Antoine Dangleterre"
        className="hidden max-h-12 w-fit dark:block"
      />
    </>
  );
}

export default BrandLogo;

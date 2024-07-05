import sunIcon from "/public/sun.svg";
import moonIcon from "/public/moon.svg";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";

function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer transition duration-300 hover:rotate-45 hover:scale-110"
    >
      <Image src={theme === "light" ? sunIcon : moonIcon} alt="Theme toggle" />
    </div>
  );
}

export default ThemeToggle;

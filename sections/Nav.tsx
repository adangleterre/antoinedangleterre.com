import ThemeToggle from '../components/ThemeToggle';
import AlertDot from '../components/AlertDot';
import BrandLogo from '@/components/BrandLogo';

function Header() {
  return (
    <header className='flex items-center mt-[50px]'>
      <div className='items-center hidden gap-4 md:flex md:w-3/12'><AlertDot />Disponible</div>
      <div className='flex w-9/12 md:w-8/12 md:justify-center '>
        <BrandLogo />
      </div>
      <div className='flex justify-end w-3/12'>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
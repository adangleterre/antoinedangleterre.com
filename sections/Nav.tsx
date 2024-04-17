import Image from 'next/image'
import ThemeToggle from '../components/ThemeToggle';
import lightLogo from '../public/images/logo-clear-theme.svg';
import darkLogo from '../public/images/logo-dark-theme.svg';
import AlertDot from '../components/AlertDot';

function Nav() {
  return (
    <header className='flex items-center mt-[50px]'>
      <div className='items-center hidden gap-4 md:flex md:w-3/12'><AlertDot />Disponible</div>
      <div className='flex w-9/12 md:w-8/12 md:justify-center '>
        <Image src={lightLogo} alt="logo Antoine Dangleterre" className='max-h-12 dark:hidden w-fit' />
        <Image src={darkLogo} alt="logo Antoine Dangleterre" className='hidden dark:block max-h-12 w-fit' />
      </div>
      <div className='flex justify-end w-3/12'>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Nav;
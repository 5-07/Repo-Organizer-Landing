import logoImage from '@/assets/images/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/icons/menu.svg';

export const Navbar = () => {
  return (
    <div className="bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between">
      <Image src={logoImage} alt="logo" className="h-12 w-12" />
      <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
      <MenuIcon className="text-white"/> 
      </div>
      <nav className="gap-6 items-center hidden sm:flex">
        <a href="#" className='text-white text-opacity-60 hover:text-opacity-100 transition'>Developers</a>
        <a href="#" className='text-white text-opacity-60 hover:text-opacity-100 transition'>Main</a>
        <button className="bg-white my-2 px-4 py-2 rounded-lg">Get Started</button>
      </nav>
      </div>
    </div>
    </div>
  );
};

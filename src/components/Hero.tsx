import BallImage from '@/assets/images/cursor.png';
import OtherImage from '@/assets/images/message.png';
import Image from 'next/image';
import Link from 'next/link'; 

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
        <a href="#" className="border py-1 px-2 rounded-lg border-white/30">
          <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F082,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Under Dev</span>

        </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className='inline-flex relative'>
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex">One Task <br /> at a Time</h1>
            <Image src={BallImage} height="200" width="200" alt="ball" className="absolute right-[476px] top-[108px] hidden sm:inline"/>
            <Image src={OtherImage} height="200" width="200" alt="other" className="absolute top-[56px] left-[498px] hidden sm:inline" />
          </div>
        </div>
        <div className="flex justify-center">
        <p className="text-center text-xl mt-8 max-w-md">
        Take control of your GitHub chaos! Effortlessly organize, search, and manage your repositories with our intuitive tools – everything you need, right at your fingertips.
        </p>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/sign-in">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get Started</button>
          </Link>
        </div>
      </div>
    
    </div>
  );
};


import { AiFillBuild } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="bg-gray-900 fixed bottom-0 w-full py-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className='text-2xl'><AiFillBuild /></span>
          <span className="font-semibold text-xl tracking-tight ml-2">
            studysquad
          </span>
        </div>
        <div>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Online Course. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

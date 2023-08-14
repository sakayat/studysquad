const Footer = () => {
  return (
    <footer className="bg-gray-900 py-3 fixed bottom-0 w-full z-[5]">
      <div className="container mx-auto flex justify-center border py-3 rounded-md">
        <p>
          &copy; {new Date().getFullYear()} Online Course. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

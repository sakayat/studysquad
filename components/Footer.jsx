const Footer = () => {
  return (
    <footer className="bg-gray-900 fixed bottom-0 w-full py-6">
      <div className="container mx-auto flex justify-center border py-5 rounded-md">
        <p>
          &copy; {new Date().getFullYear()} Online Course. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

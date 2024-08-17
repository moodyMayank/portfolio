import MaxWidthWrapper from "../MaxWidthWrapper";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <nav className="flex items-center justify-between py-8 backdrop-blur-lg">
        <div className="bg-orange-400"></div>
        <div className="flex items-center justify-center gap-x-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;

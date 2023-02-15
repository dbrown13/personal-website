import { FaLinkedinIn, FaGithub, FaMedium, FaInstagram } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"

function NavBar( {windowWidth} ) {
    const Mailto = ({ email, subject = "", body = "", children }) => {
        let params = subject || body ? "?" : "";
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
    
        return (
          <a href={`mailto:${email}${params}`}>
            <button>{children}</button>
          </a>
        );
      };

return (
    <div className="bg-gray-700 text-white p-3 sm:p-6 flex flex-row items-baseline justify-between">
        <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl m-1">
            Deryn Brown
        </h1>
        <div className="space-x-2 flex items-center md:space-x-4">
            <a href="https://www.linkedin.com/in/deryn-brown/">
                <button className="text-2xl md:text-3xl hover:scale-110 transition ease-in-out items-center focus:text-gray-500">
                    <FaLinkedinIn />
                </button>
            </a>
            <a href="https://github.com/dbrown13">
                <button className="text-2xl md:text-3xl hover:scale-110 transition ease-in-out items-center focus:text-gray-500">
                    <FaGithub />
                </button>
            </a>
            <a href="https://medium.com/@deryn.2017">
                <button className="text-2xl md:text-3xl hover:scale-110 transition ease-in-out items-center focus:text-gray-500">
                    <FaMedium />
                </button>
            </a>
            <a href="https://www.instagram.com/derynemily_/">
                <button className="text-2xl md:text-3xl hover:scale-110 transition ease-in-out items-center focus:text-gray-500">
                    <FaInstagram />
                </button>
            </a>
            {windowWidth < 640 ? (
          <Mailto
            email="deryn.2017@gmail.com"
            subject="Write your subject here..."
            body=""
          >
            <TfiEmail className="text-2xl hover:scale-110 transition ease-in-out focus:text-gray-500" />
          </Mailto>
        ) : (
          <button className="font-light text-md bg-gray-500 text-white p-2 rounded-md border-2 border-white hover:text-stone-900 hover:bg-white focus:text-gray-500">
            <Mailto
              email="deryn.2017@gmail.com"
              subject="Write your subject here..."
              body=""
            >
              Contact Me!
            </Mailto>
          </button>
        )}
        </div>
    </div>
    )
}
export default NavBar;
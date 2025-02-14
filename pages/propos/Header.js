import Image from "next/image";
import bg from "../../public/IZT.png";
import SideBar from "../Components/SideBar";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <div className="header-nav position-relative py-5">
      <SideBar></SideBar>
      <div className="overlay">
        <div className="nav-cover-service"></div>
      </div>
      <div className="nav-logo text-center">
        <Image
          src={bg}
          className="mr-3 h-6 sm:h-9"
          width={100}
          height={100}
          alt="img"
        />
      </div>
      <nav className="navbar navbar-expand-lg bg-light rounded mx-auto">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className="nav-link text-uppercase "
                    aria-current="page"
                    href="#"
                  >
                    {" "}
                    <span className="d-none">&gt;</span>Acceuil
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services/services">
                  <a className="nav-link text-uppercase " href="services.jsx">
                    {" "}
                    <span className="d-none">&gt;</span> Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/propos/apropos">
                  <a className="nav-link text-uppercase active" href="#">
                    {" "}
                    <span className="d-none">&gt;</span>A propos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/contact/contact">

                <a className="nav-link text-uppercase " href="#">
                  {" "}
                  <span className="d-none">&gt;</span>Contact
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center p-10 slogan">
        <h1 className="position-relative text-lg font-normal lowercase">
          <span className="text-yellow-300 uppercase">Interville ZEROUAL</span>{" "}
          <span className="uppercase"> S</span>ervice de transport
        </h1>
        <p className="position-relative text-white text-3xl font-normal lowercase p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur voluptatum quam obcaecati quae qui dolor debitis aliquid unde accusantium eveniet, architecto minima labore aut, quis similique ea praesentium maxime?
        </p>
      </div>
    </div>
  );
}

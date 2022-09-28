import { Container } from "./Container";
import logo from "../assets/imgs/logo/logo1.svg";
import { NavLink } from "./NavLink";
import contentData from "../data/content";


export function Header(props) {
    const countryId = props.country.countryId;
    const content = contentData[`${countryId}`];

    return (
            <Container>
                <nav className="relative z-50 flex justify-between py-10">
                    <div className="flex items-center md:gap-x-12">
                        <a href="/" aria-label="Home">
                            <img
                                src={logo}
                                className="h-14 w-auto sm:w-3/4"
                                alt="2YourCredit.com"
                            />
                        </a>
                        <div className="hidden md:flex md:gap-x-6">
                            <span className="border-2 shadow-inner bg-sky-100 rounded-lg text-blue-100">
                                <NavLink href="#selection">
                                    {content.buttons.selection}
                                </NavLink>
                            </span>
                            <span className="border-2 shadow-inner bg-sky-100 rounded-lg text-blue-100">
                                <NavLink href={content.buttons.laws_link}>
                                    {content.buttons.laws_text}
                                </NavLink>
                            </span>
                            {countryId === "NO" && (
                                <span className="border-2 shadow-inner bg-sky-100 rounded-lg text-blue-100">
                                    <NavLink href="/ordliste">
                                        {content.buttons.wordlist}
                                    </NavLink>
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                    </div>
                </nav>
            </Container>
    );
}

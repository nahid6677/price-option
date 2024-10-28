import { useState } from "react";
import Link from "../../link/Link";
import { IoMenu,IoClose } from "react-icons/io5";


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 1, path: '/about', name: 'About' },
        { id: 1, path: '/services', name: 'Services' },
        { id: 1, path: '/contact', name: 'Contact' },
        { id: 1, path: '*', name: 'NotFound' },

    ]


    return (
        <nav>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open) }>
                {
                    open === true ? <IoClose /> : <IoMenu ></IoMenu>
                }
                {/* <IoMenu ></IoMenu> */}
                {/* <IoClose /> */}
            </div>
            <ul className="md:flex gap-3">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
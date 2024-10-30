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
        <nav className="text-black bg-yellow-100 p-5">
            <div className="text-3xl md:hidden  bg-yellow-100" onClick={() => setOpen(!open) }>
                {
                    open === true ? <IoClose /> : <IoMenu ></IoMenu>
                }

            </div>
            <ul className={`md:flex gap-3 absolute md:static duration-1000 mt-5 ${open? 'top-16' : '-top-60'} text-red-500 `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
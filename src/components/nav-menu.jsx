import { NavLink } from "./nav-link.jsx";
import links from "../data/nav-links.json";




export function NavMenu() {
    return (
        <>
        <div className="backdrop-style">
            {/*Backdrop*/ }
        </div>
        <nav className="nav-menu-hamburguesa-style">
        <ul className="post-menu"
        >
        {links.map((link) =>{                       //mapear para criar uma nova array com os objectos declarados anteriormente
            return (<NavLink key={link.url + link.name} 
            url={link.url} 
            name={link.name} 
            // ou então c/ spread operator {...link}
            />
            );
        })}
        </ul>
        </nav>
        </>
    )
}
  



import { NavLink } from "./nav-link.jsx";
import links from "../data/nav-links.json";




export function NavMenu() {
    return (
        <>
        <div 
        style= {{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            bottom: "0",
            top: "66px"
            
        }}>
            {/*Backdrop*/ }
        </div>
        <nav 
        style= {{
            position: "absolute",
            top: "67px",
            backgroundColor: "white",
            borderBottomRightRadius: "16px",
            border: "1px solid black",
            padding: "16px",
        }}>
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
  


// export function LinkMenu() {
//     return (
//         <nav className="post-menu">
//             <ul 
//             <li><a href="/">Home</a></li>
//             <li><a href="/posts">Todos os Posts</a></li>
//             <li><a href="/posts/trending">Trending</a></li>
//             <li><a href="/posts/by-country">Por País</a></li>
//             <li><a href="/profile">O meu Perfil</a></li>
//             <li><a href="/about us">Sobre nós</a></li>
//             <li><a href="/logout">LogOut</a></li>
//             </ul>
//         </nav>
//     )
// }
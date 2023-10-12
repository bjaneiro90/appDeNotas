export function NavLink({url, name}) {
    return ( 
        <li>
             <a href={url}>{name}</a>
        </li>
    )
}
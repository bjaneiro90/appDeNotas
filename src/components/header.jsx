import { Link } from "react-router-dom"
import { Auth } from "./auth"
import { HamburguerButton } from "./hamburguer-button"
import { ProfileButton } from "./profile-button"
import { useState } from "react"
import { LinkMenu } from "./link-menu"
import { ProfileMenu } from "./profile-menu"

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)


    function onMenuToggle() {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen)
        setIsProfileOpen(false)
    } 

    function onProfileMenuToggle() {
        setIsProfileOpen((isMenuOpen) => !isMenuOpen)
        setIsMenuOpen(false)
    }

    return (
        <>
            <header className ="main-header">
                <HamburguerButton onClick={onMenuToggle} IsMenuOpen={isMenuOpen}/>
                <h1><Link to="/">Noted</Link></h1>
                <ProfileButton onClick={onProfileMenuToggle}/>
            </header>
            {isMenuOpen && <LinkMenu/> }
            {isProfileOpen && <ProfileMenu/>}
        </>
    )
}
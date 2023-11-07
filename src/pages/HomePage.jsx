import { useContext } from "react";
import { ErrorMessage } from "../components/errorMessage"
import useNotes from "../hooks/useNotes"
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NoteList";
import { useNavigate } from "react-router-dom";


export const HomePage = () => {


    


    return (
    <main   style={{
            textAlign: "center",
            marginTop: "5.5rem"
    }}>
         <h2    style={{
                textAlign: "center",
                marginTop: "0.3rem"
    }}>What is Noted?</h2>
            <p className="homepage-p">Is an online notepad app that lets you write new notes, edit them whenever you want, and delete them when you do not need them anymore</p>
        
         <h2>How it works?</h2>
            <p>First, start by registering on our <a href="/users">registration</a> page and then start taking notes - It is that simple! -</p>
         <h2>Where can I edit my notes?</h2>   
            <p>The notes page gives you access to all your notes, where you will only have access to the title of each of your notes. If you want to edit them, click on the title which will give you access to the specific content of each one.</p>
         <h2>Can I access my notes on any device?</h2>
            <p>Absolutely. Your notes are recorded in our database, which gives you access from any device anywhere in the world.</p>
        <h3 style={{
            marginTop: "1.5rem",
            fontSize: "3rem",
            color: "purple",
            fontStyle: "italic"
        }}>Let's note it!</h3>
    </main>
    )
}
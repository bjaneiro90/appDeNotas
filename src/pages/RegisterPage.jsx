import { useState } from "react"
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [error, setError] = useState('')

    const handleForm = async (e) => {
        e.preventDefault();
        setError("")

        if (password !== pass2) {
            const msg = ("Passwords do not match")
            return (
                setError(<p style={{color: "red",
                fontSize: "22px",
                fontStyle: "italic"                            
}}>{msg}</p>)
        )}

        try {
            await registerUserService({name, surname,email, password})

            navigate("login")
        } catch (error) {
            const msg = (error.message)
            setError(<p style={{color: "red",
                                        fontSize: "22px",
                                        fontStyle: "italic"                            
                    }}>{msg}</p>)
        }
    }
 
    return (
        <div className="box">
        <section className="registration-section">
            <header className="header-box-style">
            <h2 className="header-box-h2-style">Registration</h2>
        </header>
            <form onSubmit={handleForm}>
            <fieldset>
                    <label className="label" htmlFor="name">Name</label><br/>
                    <input className="input-registo" type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="surname">Surname</label><br/>
                    <input type="text" id="surname" name="surname" required onChange={(e) => setSurname(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="email">Email</label><br/>
                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="pass1">Password</label><br/>
                    <input type="password" id="password" name="password" required onChange={(e) => setPass1(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="pass2">Repeat Password</label><br/>
                    <input type="password" id="pass2" name="pass2" required onChange={(e) => setPass2(e.target.value)}/>
                </fieldset>

                <button className="style-button">Register</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
</div>
    )
} 
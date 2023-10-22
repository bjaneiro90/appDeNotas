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
        <section style={{
            width: "100%",
            backgroundColor: "rgba(194, 159, 182, 0.12)",
            margin: "0",
            padding: "1rem",
            borderRadius: "5%",
            marginTop: "0.2rem",
            boxShadow: "0px 0px 2px 0.2px"
        }}>
            <header style={{
                    margin: "0",
                    borderBottom: "0.5px solid grey",
                    paddingBottom: "0.5rem"
            }}>
            <h2 style={{
                fontSize: "2rem",
                marginTop: "0",
        }}>Registration</h2>
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

                <button style={{
                    marginTop: "1rem",
                    paddingLeft: "5px",
                    paddingRight: "5px"
                }}>Register</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
</div>
    )
} 
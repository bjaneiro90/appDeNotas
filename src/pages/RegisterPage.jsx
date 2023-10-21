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
            setError("Passwords do not match")
        }

        try {
            await registerUserService({name, surname,email, password})

            navigate("login")
        } catch (error) {
            setError(error.message)
        }
    }
 
    return (
        <section>
            <h1>Registro</h1>
            <form onSubmit={handleForm}>
            <fieldset>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" name="surname" required onChange={(e) => setSurname(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="pass1">Password</label>
                    <input type="password" id="password" name="password" required onChange={(e) => setPass1(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="pass2">Repeat Password</label>
                    <input type="password" id="pass2" name="pass2" required onChange={(e) => setPass2(e.target.value)}/>
                </fieldset>

                <button>Register</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
    )
} 
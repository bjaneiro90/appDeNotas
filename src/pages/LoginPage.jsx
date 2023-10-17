import { useContext, useState } from "react";
import { loginUserService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleForm = async (e) => {
        e.preventDefault();
        setError("")

        try {
            const data = await loginUserService({email, password})

        login(data.token)

            navigate("/notes")
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="pass1">Password</label>
                    <input type="password" id="pass1" name="pass1" required onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
            

                <button>Log in</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
    )
} 
import { useContext, useState } from "react";
import { loginUserService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
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
            setError(<p className="error-message-style">Email or Password not correct. Please try again</p>)
        }
    }

    return (
        <div className="box">
        <section className="login-section">
            <header className="header-box-style">
                <h2 className="header-box-h2-style">Login</h2>
            </header>
            <form onSubmit={handleForm}>
                <fieldset>
                    <label className="label" htmlFor="email">Email</label><br/>
                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label className="label" htmlFor="pass1">Password</label><br/>
                    <input type="password" id="pass1" name="pass1" required onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
            

                <button className="style-button"
                >Log in</button>
                {error ? <p>{error}</p> : null}
            </form>
            <p  style={{
                    marginTop: "1rem"
                }}> Create a new account? Go to <a href="/users">Register</a></p>
        </section>
        </div>
    )
} 
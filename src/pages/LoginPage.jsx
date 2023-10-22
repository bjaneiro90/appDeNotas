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
            setError(error.message)
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
            marginTop: "5.5rem",
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
        }}>Login</h2>
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
            

                <button style={{
                    marginTop: "1rem",
                    paddingLeft: "5px",
                    paddingRight: "5px"
                }}
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
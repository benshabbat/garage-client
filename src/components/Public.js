import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>Welcome to Garage!</h1>
            </header>
            <main>
                <address>
                Garage 770<br />
                    Foo City Jerusalem and Lod, Israel<br />
                    <a href="tel:+972 770-7707707">(770) 7707707</a>
                </address>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
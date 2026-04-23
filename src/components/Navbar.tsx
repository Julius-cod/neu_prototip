import  Button  from "./Button"
import Container from "./Container"

export default function Navbar() {
    return (
        <header className="py-6">
            <Container>
                <div className="flex items-center justify-between">
                    <nav className="flex gap-6 text-sm text-gray-700">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </nav>
                    <h1 className="text-xl font-semibold tracking-wide">Neu Spa</h1>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-sm">Login</a>
                        <Button variant="ghost">Sign Up</Button>
                    </div>
                </div>
            </Container>
        </header>
    )

}
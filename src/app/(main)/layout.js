
import Header from "./component/Header";
import NavBar from "./component/NavBar";


export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main className='mx-2 p-2  '>
                {children}
            </main>
            <NavBar />
        </>
    );
}

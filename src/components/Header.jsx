import react from "react";
import {Link} from 'react-router-dom';
import Logo from '../logo.svg'

const Header = () => {
    return(
        <div>
            <nav className="py-4 bg-mat-light mb-5">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                        
                        <Link to='/' className="text-mat-light-t float-l flex mr-20">
                            <img src={Logo} alt="Temp Logo" className="w-16 h-16"/>
                            <span className="self-center">Budgeting App</span>
                        </Link>
                        <Link to='/' className="text-mat-light-t m-2 hover:text-white">Home</Link>
                        <Link to='/Budget' className="text-mat-light-t m-2 hover:text-white">Budget</Link>
                        <Link to='/About' className="text-mat-light-t m-2 hover:text-white">About</Link>
                        <Link to='/Login' className="text-mat-light-t m-2 hover:text-white">Login</Link>
                </div>
            </nav>
        </div>
    );
}



export default Header;
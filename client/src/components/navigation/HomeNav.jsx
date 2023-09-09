import React from 'react';
import { Link } from 'react-router-dom';

function HomeNav (){
    return (
        <div className="text-sm  border-b-2">
            <nav className="p-40 pb-3 pt-3 flex flex-row items-center justify-between font-custom-normal">
                <div className="flex flex-row justify-around space-x-20">
                    <h1 className=""><Link to={"/"}>Logo Here</Link></h1>
                    <ul className="flex flex-row space-x-12">
                        <li><Link to={"/About"}>About</Link></li>
                        <li><Link to={"/FAQ"}>FAQ</Link></li>
                        <li><Link to={"/Contribution"}>Contribution</Link></li>
                        <li><Link to={"/Contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="">
                    <ul className="flex space-x-4 items-center">
                        <Link className='login-link' to={"/login"}>Login</Link>
                        <Link className="flex p-2 border border-slate-500 hover:bg-slate-300 rounded-lg w-20 justify-center" to={"/signup"}>Sign Up</Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default HomeNav;
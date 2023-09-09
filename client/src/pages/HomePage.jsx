import React from 'react';
import { Link } from 'react-router-dom';
import HomeNav from '../components/navigation/HomeNav';
import Login from './Login';
import Signup from './Signup';
import image from '../resources/img/landing_img.png';
import { buttonVariants } from '../components/ui/button';

function HomePage() {

    const buttonSubmit = () => {

    }

    return (
        <div>
            <HomeNav />
            <div className="flex flex-row">
                <div className="flex flex-col gap-10 w-1/2 h-screen p-40 pt-40 pr-20">
                    <h1 className="text-7xl font-extrabold">Accelerate<br />Your Project</h1>
                    <p className="text-lg">Streamline your web development process by using this homepage boilerplate with user authentication.</p>
                    <Link to={"https://github.com/bvchnguyen/passportAuth-boilerplate"} className={buttonVariants({ variant: "action" })}>Get Started</Link>
                </div>
                <div className="flex flex-col w-1/2 h-screen">
                    <img className="object-cover h-screen w-full pb-20" src={image}></img>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
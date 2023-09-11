import * as React from "react";
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";

import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"

import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import HomeNav from "../components/navigation/HomeNav"

function Signup() {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);

    async function handleSignUpSubmit(e){
        e.preventDefault();
        try{
            const response = await axios.post('/signup', {
                firstName,
                lastName,
                email,
                password
            });
            alert('User Registered.');
            setRedirect(true);
        } catch (error){ 
            alert('Registration Failed!');
            console.log(error);
        }
    }

    if (redirect) {
        return <Navigate to="/" />
    }
    return (
        <>
        <HomeNav />
        <div className="flex flex-col pt-14 justify-center items-center overflow-y-scroll no-scrollbar">
        {/* <h1 className="text-5xl font-bold pb-10">Welcome!</h1> */}
        <Card className="w-[400px]">
            <CardHeader className="space-y-2">
                <CardTitle className="flex justify-center font-bold">Create Your Account</CardTitle>
                <CardDescription className="flex justify-center">Please enter your details to login</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSignUpSubmit}>
                <div className="flex flex-row items-center space-x-3 pb-4">
                    <div className="flex flex-col space-y-3 w-1/2">
                        <Label htmlFor="name">First Name</Label>
                        <Input 
                            id="firstName" 
                            placeholder="First Name" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                    </div>
                    <div className="flex flex-col space-y-3 w-1/2">
                        <Label htmlFor="name">Last Name</Label>
                        <Input 
                            id="lastName" 
                            placeholder="Last Name" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                    </div>
                </div>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-3">
                        <Label htmlFor="name">Email</Label>
                        <Input 
                            type="email"
                            id="email" 
                            placeholder="email@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <Label htmlFor="name">Password</Label>
                        <Input 
                            type="password" 
                            id="password" 
                            placeholder="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <p className="text-xs flex justify-center">By signing up, you agree to our Terms & Condition.</p>
                    <Button variant="submit" size="full">Sign Up</Button>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col justify-between space-y-3">
                <p className="text-sm">Already A Member? <Link>Login here!</Link></p>
            </CardFooter>
            <div class="flex items-center pl-6 pr-6 pb-1">
                <hr className="flex-grow" />
                <span className="px-3 text-xs text-gray-500">or</span>
                <hr className="flex-grow" />
            </div>
            <div className="flex flex-col w-full space-y-5 p-6">
                    <Button variant="outline">Sign up with Google</Button>
                    <Button variant="outline">Sign up with Apple</Button>
            </div>
        </Card>
        </div>
        </>
  )
}
export default Signup;
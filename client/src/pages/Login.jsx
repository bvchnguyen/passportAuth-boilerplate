import * as React from "react";
import { Link } from "react-router-dom";

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

function Login() {
    return (
        <>
        <HomeNav />
        <div className="flex flex-col pt-14 justify-center items-center">
        <h1 className="text-5xl font-bold pb-10">Welcome Back!</h1>
        <Card className="w-[400px]">
            <CardHeader className="space-y-4">
                <CardTitle className="flex justify-center">Login</CardTitle>
                <CardDescription className="flex justify-center">Please enter your details to login</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-3">
                        <Label htmlFor="name">Email</Label>
                        <Input id="email" placeholder="email@example.com" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <Label htmlFor="name">Password</Label>
                        <Input type="password" id="password" placeholder="password" />
                    </div>
                    <p className="text-xs"><Link>Forgot Password?</Link></p>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col justify-between space-y-3">
                <Button variant="submit" size="full">Login</Button>
                <p className="text-sm">Don't have an account? <Link>Register here!</Link></p>
            </CardFooter>
            <div class="flex items-center pl-6 pr-6 pb-1">
                <hr className="flex-grow" />
                <span className="px-3 text-xs text-gray-500">or</span>
                <hr className="flex-grow" />
            </div>
            <div className="flex flex-col w-full space-y-5 p-6">
                    <Button variant="outline">Sign in with Google</Button>
                    <Button variant="outline">Sign in with Apple</Button>
            </div>
        </Card>
        </div>
        </>
  )
}
export default Login;
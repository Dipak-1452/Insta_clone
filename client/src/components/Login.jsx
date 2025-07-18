import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom"
import { Loader2 } from "lucide-react"

const Login=()=>{
    const [input,setInput]=useState({
        email:'',
        password:''
    });
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const changeEventHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const signupHandler=async (e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            const res=await axios.post('http://localhost:5000/api/v1/user/login',input,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res.data.success){
                navigate("/");
                toast.success(res.data.message);
                setInput({
                    email:'',
                    password:''
                })
            }
        }catch(error){
            console.log(error)
            toast.error(error.response.data.message)
        }finally{
            setLoading(false);
        }
    }
    return(
        <div className="flex items-center justify-center w-screen h-screen">
            <form onSubmit={signupHandler} className="shadow-lg flex flex-col gap-5 p-8">
                <div className="my-4">
                    <h1 className="text-center font-bold text-xl">LOGO</h1>
                    <p className="text-sm text-center">Signup to see photos & videos form your friends</p>
                </div>
                <div>
                    <Label className="py-2 font-medium">Email</Label>
                    <Input type="email" name="email" value={input.email} onChange={changeEventHandler} className="focus-visible:ring-transparent"/>
                </div>
                <div>
                    <Label className="py-2 font-medium">Password</Label>
                    <Input type="password" name="password" value={input.password} onChange={changeEventHandler} className="focus-visible:ring-transparent"/>
                </div>
                {
                loading ? (
                    <Button>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                    </Button>
                ): 
                (
                    <Button type="submit">Login</Button>
                )
                }
                
                <span className="text-center">Doesn't have an account? <Link to="/signup" className="text-blue-600">Signup</Link></span>
            </form>
        </div>
    )
}

export default Login

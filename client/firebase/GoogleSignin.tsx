
import { GoogleAuthProvider,signInWithPopup,getAuth } from 'firebase/auth'
import {app} from './firebase'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { Loader } from 'lucide-react'
import { useAuthStore } from '../store/authStore'



const GoogleSignin = () => {
    const auth = getAuth(app);
    const router = useRouter();
    const {isLoading,error,googleSignin} = useAuthStore();

    type UserInfo = {
        email: string;
    };

    const handleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'});

        try {
            
            const result = await signInWithPopup(auth,provider);
            const userInfo: UserInfo = {
                email: result.user.email!
            };
            
            await googleSignin(userInfo);
            toast.success("Signin successful"); 
            router.push('/');

        } catch (error:any) {
            
            console.log(error)
            toast.error(error.message);
        }
    }

  return (
    <div className="">
    <button onClick={handleClick} className='mt-5 w-full py-[.7vh] px-2 md:px-2 text-white font-bold rounded-lg text-lg md:text-xl focus:outline-none focus:bg-gradient-to-r  from-fourth to-third focus:text-white transition duration-200 hover:cursor-pointer border-2 border-green-300 flex items-center gap-1 justify-center'> <img className='w-[3vh] h-[3vh] md:w-[2vw] md:h-[2vw]' src="/google.svg" alt="Sign Up with Google" />{isLoading ? <Loader className='animate-spin w-6 h-6 mx-auto' /> : "Sign In with Google"}</button>
    </div>
  )
}

export default GoogleSignin
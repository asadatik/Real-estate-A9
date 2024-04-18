import { useContext, useEffect, useState } from 'react';



import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';
                
const Updated = () => {           
    const { user, updatedUserProfile} = useContext(AuthContext); 
    console.log(user) 
    const [Name, setName] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect (() => {
          setName (user.displayName|| '');
           setPhoto(user.photoURL|| '');
          }, [user]);
 const ChanceProfile = () => {
        updatedUserProfile(Name, photo)   
                   .then((  ) => {
                         
                         
                  })
                  .catch((error) => {
                  
                    console.error(error.message)
                  });
              };    


     

    return (
        <div className='flex flex-col justify-center items-center md:h-[75vh]'>
           <Helmet>   <title> Update Profile  </title>   </Helmet>
      <div className='md:flex w-full  justify-center gap-5 mt-2 md:gap-10'>
                <div className='space-y-3 flex flex-col items-center border-2 border-lime-950 p-2 md:p-10'>
                 <h2 className='text-3xl font-extrabold border-b-4 tracking-[.25em] uppercase'>Profile</h2>
              <img  className='rounded-full w-48 md:w-52' src={user?.photoURL} alt="" />
             <h4   className="text-xl md:text-2xl font-bold">Name : {user?.displayName}</h4>
                  <p   className='text-sm md:text-xl font-semibold'>Email : {user?.email || "Email is not found"}</p>
                  
                 </div>
                 <div className='border-2 border-amber-300 p-2 md:p-5 text-center w-full md:w-[40%] md:space-y-5 animate__animated animate__pulse'>
                   <h2 className="text-3xl font-bold mb-10 border-b-4 border-y-cyan-500 animate__animated animate__backInDown">
                     <span className='bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient uppercase'>
                       User Profile Update
                     </span>
                   </h2>
                   <div className='w-full mx-auto space-y-5'>
                     <input className="input input-bordered input-error w-full max-w-xs " type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                     <input className="input input-bordered input-error w-full max-w-xs " type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                   </div>
                   <button className='btn w-fit mx-auto btn-secondary' onClick={ChanceProfile}>Update Profile</button>     
                 
                 </div>
               </div>
             
             </div>
        )}
    export default Updated;
 





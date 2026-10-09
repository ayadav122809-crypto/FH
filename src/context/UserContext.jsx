import { createContext, useEffect, useState } from "react";

export const userContext = createContext();


export default function UserContextProvider({children}){

    const [user,setUser]=useState({});

    const [projectdata, setProjectdata] = useState([]);

    
    async function projects(){
        await fetch('http://localhost:4000/project/cards')
            .then(res=> res.json())
            .then(data=>{
                setProjectdata(data);
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
         let userid = localStorage.getItem("userid");
    
         fetch(`http://localhost:4000/user/auth`,{
            headers:{Authorization:`Bearer ${userid}`}
        })
        .then(res => res.json())
        .then(data => {setUser(data.decode.u);
             console.log(data.decode.u);
        })
        .catch(err => console.log(err)
        )
            // fetch(`http://localhost:4000/users/${userid}`)
            // .then(res => res.json())
            // .then(data => {setUser(data[0]); console.log(data);
            // })
            // .catch(err => console.log(err))
    
            projects();
           
    
        }, [])

    return(
        <userContext.Provider value={{user,projectdata}}>
            {children}
        </userContext.Provider>
    )
}
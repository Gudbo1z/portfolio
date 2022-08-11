import { useEffect, useState } from 'react';
import './navbar.css'

export default function Navbar() {
    const [name, setName] = useState('Hoang Anh')
    let newName = ['Hoang Anh', 'Fuego', 'Gudbo1z']
    function handleName(index){
        if(!newName[index]) {
        handleName(0);
        }
        else{
        setName(newName[index])
        setTimeout(()=>{
            handleName(index+1)
        }, 1000)
        }
    }
    useEffect(()=>{
        handleName(0)
    }, [])
    return (
        <div className='navbar'>
            <div className='navbar-name'>
                <p>hi, i'm </p>
                <p> {name}</p>
            </div>
            <div className='navbar-about-me'>
                <p>here is more about <span>ME...</span></p>
                <div className='navbar-more-about-me'>
                    <p>i'm still trying things to define who i am. But still,</p>
                    <p>the answer has not shown yet. So i hope you can define me</p>
                    <p>by what i do</p>
                </div>
            </div>
        </div>
    )
}
  
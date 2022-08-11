import { useEffect, useState } from "react"
import './main.css'

export default function Main(){
    const [hobby, setHobby] = useState(0)
    const [slice, setSlice] = useState(false)
    function handleSlice(index){
        if(index>2){
            setHobby(-3300)
            handleSlice(0)
        }
        else{
            setHobby(index*1100)
            setTimeout(()=>{
                handleSlice(index+1)
            }, 3000)
        }
    }
    useEffect(()=>{
        handleSlice(0)
    },[])
    console.log(hobby)
    return (
        <div className="hobbies">
            <h1>HOBBIES</h1>
            <div className="main">
                <div className="main-img-cover">
                    <div className="main-img" style={{transform: `translate(${-hobby}px)`}}>
                        <div className="imgs">
                            <img src={require('../img/csgo.png')} className='img' />
                            <p>csgo</p>
                        </div>
                        <div className="imgs">
                            <img src={require('../img/kebs.png')} className='img' />
                            <p>keebs</p>
                        </div>
                        <div className="imgs">
                            <img src={require('../img/water_melon.jpg')} className='img' />
                            <p>water melon</p>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <p>in love with</p>
                </div>
            </div>
        </div>
    )
}
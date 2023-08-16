import React , {useEffect, useState} from 'react'
import axios from 'axios'
import LandingPageNav from "../LandingPageNav";





const EntranceTest = () => {
    useEffect(()=>{
        show();
    }, [])

    const show =()=> {
        // const test = [{"id":1,"content":"What is the capital of France?","options":["A) Madrid","B) Paris","C) Rome","D) London","E) Berlin"],"correctOption":"B"},{"id":2,"content":"Who wrote 'Romeo and Juliet'?","options":["A) Charles Dickens","B) Mark Twain","C) William Shakespeare","D) Jane Austen","E) George Orwell"],"correctOption":"C"},{"id":3,"content":"What is the formula for the area of a rectangle?","options":["A) Length x Width","B) Base x Height","C) 2 x (Length + Width)","D) πr^2","E) None of the above"],"correctOption":"A"},{"id":4,"co­ntent":"What is the process of photosynthesis?","options":["A) The process by which animals convert food into energy","B) The process of converting light energy into chemical energy in plants","C) The process of breaking down glucose into carbon dioxide and water","D) The process of cellular respiration","E) The process of forming DNA from RNA"],"correctOption­":"B"},{"id":5,"cont­ent":"Which planet is known as the 'Red Planet'?","options":["A) Venus","B) Mars","C) Jupiter","D) Saturn","E) Neptune"],"correctOp­tion":"B"},{"id":6,"­content":"What is the largest mammal on Earth?","options":["A) African Elephant","B) Blue Whale","C) Giraffe","D) Polar Bear","E) Rhinoceros"],"correc­tOption":"B"},{"id":­7,"content":"Who painted the 'Mona Lisa'?","options":["A) Vincent van Gogh","B) Pablo Picasso","C) Leonardo da Vinci","D) Salvador Dalí","E) Michelangelo"],"corr­ectOption":"C"},{"id­":8,"content":"What is the formula for calculating speed?","options":["A) Speed = Distance / Time","B) Speed = Time /­ Distance","C) Speed = Force x Mass","D) Speed = Acceleration x Time","E) Speed = Mass x Volume"],"correctOptio­n":"A"},{"id":9,"con­tent":"What is the longest river in the world?","options":["A) Amazon River","B) Nile River","C) Yangtze River","D) Mississippi River","E) Congo River"],"correctOpti­on":"B"},{"id":10,"c­ontent":"What is the process of changing a liquid into a gas called?","options":["A) Melting","B) Freezing","C) Condensation","D) Sublimation","E) Evaporation"],"corre­ctOption":"E"}]
        axios.get('http://localhost:7777/student/entrance_test')
        .then((res)=>{
            console.log(res.data)
            // console.log/(test)
            
        })
        .catch((error)=>{
            console.log(error)
        })
        // const converted =fetch.json();
        // console.log(fetch)
    }
  return (
    <>
        <LandingPageNav/>
    </>
  )
}

export default EntranceTest
import React , {useEffect} from 'react'
import ButtonComp from '../ButtonComp';



const UploadedFile = () => {
    const  openFileView =()=>{
        document.getElementById("popup").classList.add("open-popup")
        console.log(document.getElementById("popup"));
    }
    const  closeFileView =()=>{
        document.getElementById("popup").classList.remove("open-popup")
    }
    useEffect(() => {
    //   document.getElementByI d('uploadedfile').pause = true
    }, [])
    
  return (
    <>
        <div className="UploadedFile my-2" >
            <h4 onClick={openFileView} className=' my-1'>Name: Lesson Note - Plant Cells</h4>
            {/* <object id='uploadedfile' data="vid.mp4" controls type="video/webm" pause='true' width="100%" height="100%">
                <p>Alternative text - include a link <a href="port.pdf">to the PDF!</a></p>
            </object> */}
            <video src="vid.mp4"  width="100%" className=' aspect-video' controls pause='true'></video>
        </div>
        
        <div className="containerp">
        <div className="popup" id="popup">
            <button type="button" className=" ms-auto block my-2" onClick={closeFileView} aria-label="Close">X</button>
            {/* <object data="vid.mp4" controls type="video/webm" width="100%" height="100%">
                <p>Alternative text - include a link <a href="port.pdf">to the PDF!</a></p>
            </object> */}
            <video src="vid.mp4"  width="100%" className=' aspect-video' controls pause='true'></video>
            <input type="text" defaultValue='Name: Lesson Note - Plant Cells' placeholder='File Title' />
            <input type='text' defaultValue='Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum in aliquid delectus error saepe.' placeholder='Fie Description' />
            <p className=' text-right'><small>10:20PM</small></p>
            <ButtonComp name='Update FIle Info'/>
        </div>
    </div>
    </>
  )
}

export default UploadedFile
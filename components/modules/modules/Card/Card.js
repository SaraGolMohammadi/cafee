import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export default function Card() {
  return (
    <div className='Card-div'>
        <div className='Card-img'>
            <img src="../img/photo21740494741-removebg-preview.png" alt="" />
        </div>

        <div className='Card-text'>

            <p>Enjoy a new blend of coffee beans</p>
            <h6>Brew or order a Perfect Coffee based on your mood Anywhere Anytime</h6>


          <div className='Card-button'>
            <button>SHOP NOW <ArrowOutwardIcon style={{width:'18px',background:'#f74b08',borderRadius:'70%', padding:'5px'}}/></button>
           <div className='Card-button-img'>
             <img src="https://img.icons8.com/?size=100&id=VG5nBv4w0YiN&format=png&color=000000" alt="" />
             <span>How it works</span>
          </div>
          
        </div>

       
        </div>
    </div>
  )
}

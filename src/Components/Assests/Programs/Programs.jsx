import React from 'react'
import "./Programs.css"
import program_1 from '../../Pictures/Program1.jpg'
import program_2 from '../../Pictures/Program2.jpeg'
import program_3 from '../../Pictures/Program3.jpeg'
import pdf_icon from '../../Pictures/pdf_icon.png'
import book_icon from '../../Pictures/book_icon.png'

const Programs = () => {
  return (
    <div className='background2'> 
      <div className='programs'>
        <div className="program">
            <img src={program_1} alt=""/>
            <div className="caption">
              <img src={book_icon} alt=""/>
              <p>OLD BOOKS</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt=""/>
            <div className="caption">
              <img src={book_icon} alt=""/>
              <p>NEW BOOKS</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt=""/>
            <div className="caption">
              <img src={pdf_icon} alt=""/>
              <p>PDF</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Programs
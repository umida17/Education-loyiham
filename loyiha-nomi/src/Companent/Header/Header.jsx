import React from 'react'
import educarion from '../../assets/Edu.png'



const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header-container">
            <img src={educarion} alt="" />
            <div className="HOME">
                <select>
                    <option value="Home">Home</option>
                    <option value="Home">Courses</option>
                    <option value="Home">Page</option>
                 </select>

                 <select>
                    <option value="Home">Courses</option>
                    <option value="Home">Abaut</option>
                    <option value="Home">Page</option>
                 </select>

                 <select>
                    <option value="Home">Page</option>
                    <option value="Home">Courses</option>
                    <option value="Home">Home</option>
                 </select>

                 <select>
                    <option value="Home">Blog</option>
                    <option value="Home">Courses</option>
                    <option value="Home">Page</option>
                 </select>

                 <a href="#">Contact</a>
                 <a href="#">Singin</a>
                 <button><a href="#">Sing Up</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header

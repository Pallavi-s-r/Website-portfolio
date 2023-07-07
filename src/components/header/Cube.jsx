import React from 'react'
// import './cube.css'
import { FaHtml5, FaCss3, FaReact, FaGit,FaNodeJs ,FaJs} from 'react-icons/fa'
const Cube = () => {
  return (
    <div class="cube-container">
    <div id="cube">
      <div class="face">{FaHtml5}</div>
      <div class="face">{FaCss3}</div>
      <div class="face ">{FaReact}</div>
      <div class="face ">{FaGit}</div>
      <div class="face">{FaNodeJs}</div>
      <div class="face ">{FaJs}</div>
    </div>
    </div>
  )
}

export default Cube


import React from 'react'
import './agdash.css'
import { MdHome } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { VscBell } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import Img from './download.jpg';
function Agdash() {
  return (
  
    <> 
    <div className='row'>
        <div className='col-2'>
        <div className='fun1'>
    <ul>
      <li className='text-primary'><img src={Img} alt='hii'></img><b>MiloLive</b>
        <ul>
        <li><MdHome size={25}/><Link to='/agency'>DashBoard</Link></li>
          <li> <HiUsers size={25}/><Link to='/host'>Host User</Link></li>
          <li><CgProfile size={25}/><Link to='/profile'>My Profile</Link></li>
        </ul>
      </li>
    </ul>
    </div>
        </div>
        <div className='col-lg-10'>
        <div className='cont1'>
    <div className='navbar mt-2'>
        <div className='bell mb-2'>
        <VscBell size={30}/>
        </div>
        <div className='hii'>
          <div className='prof'>
        <CgProfile size={30}/>
        </div>
        <p className='p-2 text-muted'>Hello,<b>Admin</b></p>
        </div>
    </div>
    <h1 className='mt-3 px-3'><b>Welcome Admin</b></h1>
    <p className='px-3 font-strong text-muted'>Dashboard</p>
    <div className='cd mt-5'>
      <div className='box-1 m-2'>
        <div>
      <p className='pt-3 mx-3'>0</p>
      <p className='text-muted'><b>Total Host Count</b></p>
      </div>
      <div className='icon'>
      <FiUsers/>
      </div>
      </div>
      <div className='box-1 m-2'>
        <div>
      <p className='pt-3 mx-3'>0</p>
      <p className='text-muted'><b>Monthly earning count</b></p>
      </div>
      <div className='icon'>
      <FiUsers/>
      </div>
      </div>
      <div className='box-1 m-2'>
        <div>
      <p className='pt-3 mx-3'>0</p>
      <p className='text-muted'><b>Overall earning count</b></p>
      </div>
      <div className='icon'>
      <FiUsers/>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Agdash

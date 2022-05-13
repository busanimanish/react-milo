import React from 'react';
import './host.css';
import Img from './download.jpg';
import { MdHome } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { Link } from 'react-router-dom'
import { VscBell } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
function Host() {
    return (
       <>
    <div className='row'>
        <div className='col-2'>
        <div className='fun'>
    <ul>
      <li className='text-primary'><img src={Img} alt='mil'></img><b>MiloLive</b>
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
    <div className='cont'>
    <div className='navbar mt-2'>
        <div className='bell mb-2'>
        <VscBell size={30}/>
        </div>
        <div className='hello'>
        <div className='profile'>
        <CgProfile size={30}/>
        </div>
        <p className='p-2 text-muted'>Hello,<b>Admin</b></p>
        </div>
    </div>
        <p className='text-muted mt-4 px-4'>Users</p>
        <select>
            <option value='Host type'>Host Type</option>
            <option value='Host type1'>Host Type1</option>
            <option value='Host type2'>Host Type2</option>
            <option value='Host type3'>Host Type3</option>
        </select>
        <table className='tab'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Bio</th>
                    <th>Coin</th>
                    <th>Country</th>
                    <th>Redeem Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>100</td>
                    <td>USA</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>100</td>
                    <td>USA</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>100</td>
                    <td>USA</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>100</td>
                    <td>USA</td>
                    <td>1000</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>
    
    </>
   
    );
}

export default Host


import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './index.css'
import { IoMenu } from 'react-icons/io5'
import Cookies from 'js-cookie'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Header = () => {

   
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate=useNavigate();

    const onClickLogout=()=>{
        
        Cookies.remove('jwt_token')
        navigate('/login')
    }

    
    const renderMobileViewNavbar = () => {
        return (
            <div className='mobile-view-navbar'>
                <h1 className='website-name'>Crypto</h1>
                <div>
                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <IoMenu size={30} className='menu-item' />
                    </Button>
                    <Menu

                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        className='menu-container'

                    >
                        <Link to='/' className='link'>
                            <MenuItem onClick={handleClose}>Home</MenuItem>
                        </Link>
                        <Link to='/about' className='link'>
                            <MenuItem onClick={handleClose}>About</MenuItem>
                        </Link>
                        <Link to='/academy' className='link'>
                            <MenuItem onClick={handleClose}>Academy</MenuItem>
                        </Link>
                        <Link to='/demo-trading' className='link'>
                            <MenuItem onClick={handleClose}>Demo Trading</MenuItem>
                        </Link>
                        <Link to='/community-page' className='link'>
                            <MenuItem onClick={handleClose}>Community</MenuItem>
                        </Link>
                        <MenuItem onClick={handleClose}>Learn</MenuItem>
                        <MenuItem onClick={handleClose}>Swap</MenuItem>
                        <Link to='/login' className='link'>
                            <MenuItem  onClick={handleClose && onClickLogout} >Logout</MenuItem>
                        </Link>
                    </Menu>
                </div>
            </div>
        )
    }

    const renderNavBar = () => {
        return (
            <div className='header-component'>
                <Link className='link' to='/'>
                <h1 className='website-name'>Crypto</h1>
                </Link>

                <div className='nav-items-buttons'>
                    <ul className='header-list' type='none'>
                        <Link to='/' className='link'>
                            <li className='header-item'>Home</li>
                        </Link>
                        <Link to='/about' className='link'>
                            <li className='header-item'>About</li>
                        </Link>
                        <Link to='/academy' className='link'>
                            <li className='header-item'>Academy</li>
                        </Link>
                        <Link to='/demo-trading' className='link'>
                            <li className='header-item'>Demo Trading</li>
                        </Link>
                        <Link to='/community-page' className='link'>
                            <li className='header-item'>Community</li>
                        </Link>
                        <li className='header-item'>Learn</li>
                        <li className='header-item'>Swap</li>
                        <Link to='/login' className='link'>
                            <MenuItem onClick={onClickLogout}  >
                            <button className='logout-button'>Logout</button>
                            </MenuItem>
                        </Link>
                    </ul>

                </div>
            </div>
        )
    }

    return (
        <div>
            {renderNavBar()}
            {renderMobileViewNavbar()}
        </div>
    )
}

export default Header

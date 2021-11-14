import { useState } from 'react'

import Link from 'next/link'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Tooltip from '@mui/material/Tooltip'

import Notification from './notification'
import More from './more'

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [moreOpen,setMoreOpen] = useState(null)
  const open = Boolean(anchorEl)
  const moreOpenBoolean = Boolean(moreOpen)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMoreClick = (event) => {
    setMoreOpen(event.currentTarget)
    
  }
  const handleMoreClose = () => {
    setMoreOpen(null)

  }

  return (
    <header className='flex justify-between items-center p-2 bg-gray-200'>
      <Link href='/'>
        <p className='relative text-2xl text-black'>
          <span className='title'></span>ravel
        </p>
      </Link>
      <div className=''>
        <Tooltip title='Notifications'>
          <IconButton onClick={handleClick}>
            <NotificationsIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='More'>
          <IconButton onClick={handleMoreClick}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Notification
        handleClose={handleClose}
        handleClick={handleClick}
        anchorEl={anchorEl}
        open={open}
      />
      <More
        handleClose={handleMoreClose}
        handleClick={handleMoreClick}
        anchorEl={moreOpen}
        open={moreOpenBoolean}
      />
    </header>
  )
}

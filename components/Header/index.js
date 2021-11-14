import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

export default function Header() {
  return (
    <header className='flex justify-between items-center p-2 bg-white'>
      <p className='relative text-2xl text-black'>
        <span className='title'></span>ravel
      </p>
      <div className=''>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </header>
  )
}

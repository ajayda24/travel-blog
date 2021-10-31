import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

export default function Header() {
  return (
    <header className='flex justify-between items-center py-2 bg-red-400'>
      <p className='relative text-2xl'>
        <span className='title'></span>ravel
      </p>
      <div className=''>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
    </header>
  )
}

import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

export default function Footer() {
  return (
    <footer className='flex w-[100vw] justify-between items-center py-2 bg-red-400 fixed bottom-0'>
      <p className='relative text-2xl'>
        <span className='title'></span>ravel
      </p>
      <div className=''>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
    </footer>
  )
}

import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import AddBoxIcon from '@mui/icons-material/AddBox'
import PersonIcon from '@mui/icons-material/Person'

export default function Footer() {
  return (
    <footer
      className='flex w-[100vw] justify-around items-center py-2 bg-gray-200  fixed bottom-0 '
    >
      <IconButton>
        <HomeIcon />
      </IconButton>
      <IconButton>
        <WhatshotIcon />
      </IconButton>
      <IconButton>
        <AddBoxIcon />
      </IconButton>
      <IconButton>
        <PersonIcon />
      </IconButton>
    </footer>
  )
}

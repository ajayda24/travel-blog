import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {
  return (
    <header className='flex justify-between py-3 bg-red-400'>
      <p className='relative text-2xl'><span className='title'></span>ravel</p>
      <div className='p-3'>

      <MenuIcon />
      </div>
    </header>
  )
}

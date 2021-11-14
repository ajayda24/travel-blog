import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { useState } from 'react'

export default function More(props) {
  const [theme, setTheme] = useState('bg-[#022730]')
  const allThemes = ['bg-[#022730]', 'bg-[#300219]', 'bg-[#05132b]']
  const changeThemeHandler = (color) => {
    console.log(document.body.style.backgroundColor)
    // const colorCode = color.substr(4, 6).toString().trim()
    const colorCode = color.replace('bg-[','').replace(']','')
    document.body.style.backgroundColor = colorCode 
    setTheme(color)
    props.handleClose()
  }
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      {/* <DialogTitle>Change Theme</DialogTitle> */}
      <div className='flex justify-center items-center gap-4 p-8'>
        <p className='text-lg'>Change Theme - </p>
        <div className='flex gap-2'>
          {allThemes.map((color) => (
            <div
              key={color}
              className={`w-10 h-7 ${color} ${
                theme == color ? 'ring ring-gray-600 ring-offset-2' : ''
              } `}
              onClick={() => changeThemeHandler(color)}
            ></div>
          ))}
        </div>
      </div>
    </Dialog>
  )
}

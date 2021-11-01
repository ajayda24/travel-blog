import styled from 'styled-components'

export default function Category(props){
  return (
    <Div
      className='rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white backdrop-blur-md w-24 h-24 sm:w-48 sm:h-32 flex justify-center items-center'
      imgUrl={props.image}
    >
      {props.name}
    </Div>
  )
}

const Div = styled.div`
  &::after {
    content: '';
    background: url(${props => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`
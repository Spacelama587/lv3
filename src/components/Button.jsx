import styled from 'styled-components'
import '../App.css'
const StButton = styled.button`
font-family: var(--font-primary);
font-weight: 500;
border: none;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items:center;
justify-content: center;
border-radius: 10px;

${props => props.size ==='large' && `
    font-size: 20px;
    padding: 12px 24px;
    `}

     ${props => props.size === 'medium' && `
    font-size: 16px;
    padding: 10px 20px;
  `}

  
  ${props => props.size === 'small' && `
    font-size: 14px;
    padding: 8px 16px;
  `}

  ${props => props.bgcolor === 'white' && `
        background-color:white;
    `}
  ${props => props.borderColor === 'cyan' && `
        border:2px solid #1AFFD5;
    `}
  ${props => props.borderColor === 'red' && `
        border:2px solid #F25757;
    `}
  ${props => props.backgroundColor === 'cyan' && `
       background-color: #1AFFD5;
    `}
  ${props => props.backgroundColor === 'red' && `
       background-color: #F25757;
    `}
  ${props => props.text === 'white' && `
       color: #fff;
    `}

`

function Button({children,size, bgcolor,borderColor,text, ...props}) {
   
  return (
    <div><StButton size={size} bgcolor={bgcolor}  borderColor = {borderColor} text={text} {...props}>{children}</StButton></div>
  )
}

export default Button
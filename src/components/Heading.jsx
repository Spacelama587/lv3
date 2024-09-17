
import '../App.css'
import styled from 'styled-components'
function Heading({children}) {
    const StHeading = styled.h1`
        font-family: var(--font-primary);
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: var(--color-text);
        margin-left: 5px;
    `
  return (
    <div>
        <StHeading>{children}</StHeading>
    </div>
  )
}

export default Heading
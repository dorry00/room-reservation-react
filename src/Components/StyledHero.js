import styled from 'styled-components'

const StyledHero = styled.header`
min-height: calc(60vh);
display: flex;
align-items: center;
background: url(${props => props.img}) center/cover no-repeat;
justify-content: center;;
`;

export default StyledHero
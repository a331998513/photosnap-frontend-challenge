import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom'

export const MainContainer = styled.section`
    display:flex;
    flex-direction:${(props => props["data-reversed"]? `row-reverse`: `none`)};
    width:100%;
    justify-content:center;
    @media screen and (max-width:767px){
        flex-direction:column-reverse;
    }
`
export const MainDescWrapper = styled.div`
    flex: 1 1 61rem;
    width:100%;
    min-width:49.5rem;
    max-height:60rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background:${({bgWhite})=> bgWhite ? `#fff`: `#000`};
    @media screen and (max-width:767px){
        max-height:42rem;
        min-width:100%;
        max-width:37.5rem;
        padding:0 3.5rem;
    }
`
export const MainDescription = styled.div`
    color:#000;
    display:flex;
    flex-direction:column;
    max-width:38.7rem;
    @media screen and (max-width:767px){
        max-width:31.8rem;
    }
`
export const MainH2 = styled.h2`
    font-size:4rem;
    text-transform:uppercase;
    letter-spacing:.42rem;
    line-height:4.8rem;
    white-space:pre-wrap;
    @media screen and (max-width:767px){
        font-size:3.2rem;
        line-height:4rem;
        letter-spacing:.33rem;
    }
`
export const MainP = styled.p`
    margin-top:2.1rem;
    opacity:.6;
    font-size:1.5rem;
    line-height:2.5rem;
`
export const MainBtn = styled(LinkR)`
    cursor:pointer;
    display:flex;
    position:relative;
    max-width:22rem;
    margin-top:4.8rem;
    letter-spacing:.2rem;
    line-height:1.5rem;
    justify-content:flex-start;
    align-items:center;
    font-size:1.2rem;
    font-weight:700;
    color:#000;
    transition:all .3s ease;
    text-transform:uppercase;
    & > svg {
        margin-left:1.8rem;
        transition:transform .3s ease-in;
        transition-delay:220ms;
        & g{
            stroke:#000;
        }
    }
    &::after{
        content:'';
        position:absolute;
        display:block;
        width:0;
        height:1px;
        bottom:-.1rem;
        background:#000;
        transition: width .3s ease;
    }
    &:hover:after{
        width:14.4rem;
    }
    &:hover > svg{
        transform:translateX(2rem);
    }
`
export const MainImgWrapper = styled.div`
    flex: 1 1 83rem;
    height:60rem;
    @media screen and (max-width:767px){
        max-height:27.1rem;
    }
`
export const MainImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    
`
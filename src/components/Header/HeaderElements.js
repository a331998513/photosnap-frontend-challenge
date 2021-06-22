import styled, { keyframes } from 'styled-components'
import { Link as LinkR, NavLink } from 'react-router-dom'

const animation = {
    flash: keyframes`
        100%{
            mask-position:-150%;
            mask-size:195px;
        }
    `
}

export const NavContainer = styled.header`
    background:#fff;
    position:sticky;
    display:flex;
    justify-content:center;
    align-items:center;
    height:7.2rem;
    top:0;
    z-index:99;
`
export const Nav = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 3.5rem;
    width:100%;
    max-width:1100px;
    font-size:1.2rem;
    font-weight:700;
`
export const NavLogoLink = styled(LinkR)`
    display:flex;
    cursor:pointer;
`
export const NavLogo = styled.img`
    pointer-events:none;
    max-width:16.9rem;
    max-height:1.6rem;
`
export const NavMenu = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    @media screen and (max-width:767px){
        display:none;
    }
`
export const NavItem = styled(NavLink)`
    z-index:2;
    color:#000;
    margin:0 1.5rem;
    text-transform:uppercase;
    letter-spacing:.2rem;
    cursor:pointer;
    transition:all .8s ease-in-out;
    mask-position:0;
    mask-size:400px;
    mask-image: linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2));
    padding-left:1rem;
    position:relative;
    &::before{
        content:'';
        position:absolute;
        display:flex;
        width:3px;
        height:0;
        align-items:center;
        top:0;bottom:0;
        margin:auto 0;
        background:rgba(90, 119, 255, 1);
        transform:translateX(-7px);
        transition:height .3s linear;
    }
    &:hover{
        animation: ${animation.flash} .8s ease-in 1;
    }
    &:hover:before{
        height:80%;
    }
    &.${props => props.activeClassName}{
        &::before{
            height:80%;
        }
    }
    &:focus-visible:before{
        height:80%;
    }
`
export const NavBtnWrapper = styled.div`
    display:block;
    @media screen and (max-width:768px){
        display:none;
    }
`

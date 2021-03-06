import styled from 'styled-components';


export const HeroContainer = styled.section`
    display:flex;
    width:100%;
    justify-content:center;
    height:65.4rem;
    margin-top:7.2rem;
    @media screen and (max-width:767px){
        flex-direction:column-reverse;
    }
`
export const HeroDescWrapper = styled.div`
    flex: 1 1 61rem;
    width:100%;
    min-width:49.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#000;
    position:relative;
    @media screen and (max-width:767px){
        flex:0;
        min-width:100%;
        max-width:37.5rem;
        padding:7.2rem 3.5rem;
    }
`
export const HeroDescription = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    max-width:40rem;
    width:100%;
    &::before{
        position:absolute;
        content:'';
        display:flex;
        align-items:center;
        margin:auto 0;
        width:6px;
        top:0;bottom:0;left:0;
        height:45%;
        background:linear-gradient(to bottom, rgba(90, 119, 255, 1),rgba(188, 113, 152, 1),rgba(255, 197, 147, 1));
    }
    @media screen and (max-width:375px){
        &::before{
        width:12.8rem;
        top:5px;bottom:100%;left:3.5rem;
        height:6px;
        background:linear-gradient(to bottom, rgba(90, 119, 255, 1),rgba(188, 113, 152, 1),rgba(255, 197, 147, 1));
    }
    }
`
export const HeroH1 = styled.h1`
    font-size:4rem;
    text-transform:uppercase;
    letter-spacing:.4rem;
    line-height:4.8rem;
    @media screen and (max-width:767px){
        font-size:3rem;
        line-height:4rem;
        letter-spacing:.33rem;
    }
`
export const HeroP = styled.p`
    margin-top:2.1rem;
    margin-bottom:4.8rem;
    opacity:.6;
    font-size:1.5rem;
    line-height:2.5rem;
`

export const HeroImgWrapper = styled.div`
    flex: 1 1 83rem;
    height:65.4rem;
    @media screen and (max-width:767px){
        max-height:29.4rem;
        height:auto;
    }
`
export const HeroImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`
import React,{useState} from 'react'
import styled from 'styled-components'
import {RxCross2 } from "react-icons/rx"
import {Drawer} from "antd";
const Navbar = () => {
  const[navbar, setNavbar]=useState(false);
  const[visiblee,setVisiblee] =useState(false);
  const changenav=()=>{
   if(window.scrollY >= 1){
      setNavbar(true);
   }
   else{
    setNavbar(false);
   }
   

  };

  window.addEventListener('scroll', changenav);

 
  

  return (
    
    <Nav>
      {navbar ? 
      <Anav>
        <Logo src="	https://superprops-gatsby.vercel.app/static/logo-d16e5ac9ba435dc0e1ebd6a15356e1b6.png" alt="">
       
       </Logo>
       <Menu>
         <MenuLink href='' >Home </MenuLink>
         <MenuLink href=''>Service </MenuLink>
         <MenuLink href=''>Feature </MenuLink>
         <MenuLink href=''>Pricing </MenuLink>
         <MenuLink href=''>Testimonial </MenuLink>
         <MenuLink href=''>FAQ </MenuLink>
       </Menu>
 
       <Hambutton onClick={()=>{setVisiblee(true);}}>
       <Hamspan></Hamspan>
       <Hamspan></Hamspan>
       <Hamspanlast></Hamspanlast>
       </Hambutton>
      </Anav>
      :
      <Bnav>
        <Logo src="	https://superprops-gatsby.vercel.app/static/logo-d16e5ac9ba435dc0e1ebd6a15356e1b6.png" alt="">
       
       </Logo>
       <Menu>
         <MenuLink href='' >Home </MenuLink>
         <MenuLink href=''>Service </MenuLink>
         <MenuLink href=''>Feature </MenuLink>
         <MenuLink href=''>Pricing </MenuLink>
         <MenuLink href=''>Testimonial </MenuLink>
         <MenuLink href=''>FAQ </MenuLink>
       </Menu>
 
       <Hambutton onClick={()=>{setVisiblee(true);}} >
       <Hamspan></Hamspan>
       <Hamspan></Hamspan>
       <Hamspanlast></Hamspanlast>
       </Hambutton>
      </Bnav>
      }
      <Drawer 

      zIndex={10000}
      visible={visiblee}
      closable={false}
      
      >
        <Icon>< RxCross2 onClick={()=>{setVisiblee(false);}} size={25}/></Icon>
        <Sidemenu>
          <Sidemenulink href=''>Home</Sidemenulink>
          <Sidemenulink href=''>Service </Sidemenulink>
          <Sidemenulink href=''>Feature </Sidemenulink>
          <Sidemenulink href=''>Pricing </Sidemenulink>
          <Sidemenulink href=''>Testimonial </Sidemenulink>
          <Sidemenulink href=''>FAQ </Sidemenulink>
        </Sidemenu>
      </Drawer>
     
      
     
    </Nav>

  )
}

const Nav= styled.div ` 


`;

const Bnav=styled.div`
padding: 20px 130px;
position: fixed;
  
    top: 0px;
    left: 0px;
    width:100%;
    transition:all 0.35s ease-in-out 0s ;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    
    text-shadow: rgba(0, 0, 0, 0.004) 1px 1px 1px;
    z-index:9999;
     min-height: 56px;
     background: transparent;
     @media only screen and (max-width: 992px) {
    
    width:100%;
    padding:20px 30px;
    
    //justify-content: space-between;
}  
@media only screen and (max-width: 768px) {
    display:flex;
    width:100%;
    padding:20px 30px;
    
    justify-content: space-between;
}  
`;

const Anav=styled.div`
padding: 5px 130px;
position: fixed;
  
    top: 0px;
    left: 0px;
    width:100%;
    transition: all 0.35s ease-in-out 0s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    text-shadow: rgba(0, 0, 0, 0.004) 1px 1px 1px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
    z-index:9999;
     min-height: 56px;

     @media only screen and (max-width: 992px) {
    
    width:100%;
    padding:5px 30px;
    
    //justify-content: space-between;
}  
@media only screen and (max-width: 768px) {
    display:flex;
    width:100%;
    padding:5px 30px;
    
    justify-content: space-between;
}  
`;


const Logo=styled.img`

width:130px;
height:34px;
`;
const Menu=styled.div`

display:flex;
justify-content: space-between;
align-items: center;
position: relative;
padding-inline-start:160px;
@media only screen and (max-width: 768px) {
    display: none;
}
`;
const MenuLink=styled.a`
    
    padding-right: 35px;
    
    &:hover{color: rgb(235, 77, 75);}
    font-size: 16px;
    font-weight: 400;
    color: rgb(52, 61, 72);
    transition: all 0.15s ease-in-out 0s;
    text-decoration: none;
    display: inline-block;
    font-family: Roboto, sans-serif;
`;
const Hamspan=styled.span`

    display: block;
    width: 100%;
    height: 2px;
    margin: 4px 0px;
    float: right;
    background-color: rgb(235, 77, 75);
    transition: all 0.3s ease 0s;


`;

const Hamspanlast=styled.span`
     display: block;
    width: 70%;
    height: 2px;
    margin: 4px 0px;
    float: right;
    background-color: rgb(235, 77, 75);
    transition: all 0.3s ease 0s;
    
   

`;
 
const Hambutton = styled.button`
margin-right:60px;
border: 0px;
background: transparent;
width: 44px;
height: 30px;
cursor: pointer;
&:hover span{
    width:100%;
}

@media only screen and (min-width: 769px) {
    display: none;
}


`;

const Sidebardiv= styled.div`
width:200px;
height: screen;
position: absolute;
 
 height: 100vh;
 //z-index: 50;
 padding: 20px;
 
 //transform: translateX(100%), translateY(0%) ;
 transition: all 3s ease-in-out 0s;
 z-index:100;
 background-color: white;
`;

const Icon= styled.div`
color: rgb(235, 77, 75);
display: flex;
justify-content: flex-end;

`;


const Sidemenu= styled.div`
padding-top:60px;
padding-left:100px;
display: flex;
  flex-direction:column;
  align-items: self-start;
  justify-content:center;
  position: relative;
`;

const Sidemenulink = styled.a`
      padding-bottom: 35px;
    
    &:hover{color: rgb(235, 77, 75);}
    font-size: 16px;
    font-weight: 400;
    color: rgb(52, 61, 72);
    transition: all 0.15s ease-in-out 0s;
    text-decoration: none;
    display: block;
    font-family: Roboto, sans-serif;

`;



export default Navbar

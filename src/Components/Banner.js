import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Bcontainer>
      <Blcontainer>
       <Bscontainer>
         <Bspan1>25% Discount</Bspan1>
         <Bspan2>on every first project </Bspan2>
       </Bscontainer>
       <Blchpb>
         <Bheader>Ultimate Platform to monitor your best workflow.</Bheader>
         <Bparagraph>We help to create SaaS product that are innovative, differentiated with a superb User Experience, fully accessible through mobile devices. SaaS products are changing the world .</Bparagraph>
         <BButtons>
            <BButton1>FREE TRAIL</BButton1>
            <BButton2>EXPLORE MORE</BButton2>
         </BButtons>
       </Blchpb>

      </Blcontainer>
      <Brcontainer>
      <Bimg1 src="data:image/svg+xml;charset=utf-8,%3Csvg height='886' width='902' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"></Bimg1>
         <Bimg2 src="https://superprops-gatsby.vercel.app/static/7b4f73bff849e81f64abc3ef3ece17b7/40de8/bannerObject1.avif"></Bimg2>
         <Bimg1 src="data:image/svg+xml;charset=utf-8,%3Csvg height='886' width='902' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"></Bimg1>
         <Bimg2 src="https://superprops-gatsby.vercel.app/static/e1cd33de4f0d1f2a364cca4bf87b2422/cb5a2/bannerObject2.avif"></Bimg2>
      </Brcontainer>
    </Bcontainer>
  )
}

const Bcontainer=styled.div`
margin-top:110px;
width:100%;
display: flex;
justify-content: flex-start;
font-family: Roboto, sans-serif;

`;

const Blcontainer= styled.div`
@media only screen and (max-width: 992px) {
  width:50%;
  
 
}
@media only screen and (max-width: 767px) {
  width:100%;
  
 
}

width:50%;

padding-top:85px;
left:0px;

`;
const Bscontainer= styled.div`
@media only screen and (max-width: 992px) {
  margin-left:30px;
  width:65%
}
@media only screen and (max-width: 767px) {
  margin-left:30px;
  width:70%;
  
  
 
}

margin-left:130px;
    width:42%;
    align-self: start;
    
    border-radius: 4em;
    border: 1px solid rgb(241, 244, 246);
    padding: 7px 25px;
    box-shadow: rgba(22, 53, 76, 0.05) 0px 7px 25px 0px;
    margin-bottom: 30px;
    background-color: rgb(255, 255, 255);
`;
const Bspan1=styled.span`
align-self: start;
font-size: 14px;
@media only screen and (max-width: 767px) {
  font-size: 13px;
  
 
}
    color: rgb(235, 77, 75);
    margin-bottom: 0px;
    margin-right: 0.4em;
    margin-top: 0px;
    font-weight: 700;
`;
const Bspan2=styled.span`
align-self: flex-start;
color: rgb(15, 33, 55);
    margin-bottom: 0px;
    margin-top: 0px;
    font-weight: 500;
    font-size: 13px;
  
    @media only screen and (max-width: 767px) {
  font-size: 12px;
  
 
}
`;

const Blchpb= styled.div`
text-shadow: rgba(0, 0, 0, 0.004) 1px 1px 1px;
display: block;
margin-block-end: 0.83em;
`;

const Bheader=styled.h2`
@media only screen and (max-width: 992px) {
  margin-left:30px;
  font-size: 25px;
  margin-bottom: 25px;
 
}
margin-left:130px;
font-size: 55px;
margin-bottom: 30px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.025em;
    text-align: left;
`;
const Bparagraph= styled.p`
@media only screen and (max-width: 992px) {
  margin-left:30px;
  font-size: 13px;
  
  
 
}
margin-left:130px;
    font-size: 16px;
    color: rgba(52, 61, 72, 0.8);
    margin-bottom: 0px;
    margin-top: 0px;
    line-height: 1.75;
    text-align: left;
    margin-block-end: 1em;
`;

const BButtons= styled.div`
@media only screen and (max-width: 992px) {
  margin-left:30px;
  
  
 
}
margin-left:130px;
margin-top: 40px;
display: flex;
justify-content:flex-start;


`;
const BButton1= styled.button`
cursor: pointer;
align-items: center;
min-height: 46px;
border-radius: 3px;
font-size: 14px;
font-weight: 500;
min-width: 156px;
text-decoration: none;
    text-transform: capitalize;
    padding: 8px 20px;
    border: 0px rgb(82, 104, 219);
    transition: all 0.3s ease 0s;
    color: rgb(255, 255, 255);
    background-color: rgb(82, 104, 219);
    background-image: linear-gradient(31deg, rgba(215, 178, 233, 0.4) 0%, rgba(83, 105, 220, 0.4) 100%);
    @media only screen and (max-width: 767px) {
 
    min-width:120px;
  
 
}
`;

const BButton2= styled.button`
cursor: pointer;
align-items: center;
min-height: 46px;
border-radius: 3px;
font-size: 14px;
font-weight: 500;
min-width: 156px;
text-decoration: none;
    text-transform: capitalize;
    padding: 8px 15px;
    border: 1px solid;
    transition: all 0.3s ease 0s;
    background-color: transparent;
    min-width: 156px;
    font-size: 14px;
    color: rgb(81, 103, 219);
    margin-left: 18px;
    @media only screen and (max-width: 767px) {
 
 min-width:120px;


}
`;

const Brcontainer=styled.div`
@media only screen and (max-width: 768px) {
  width:50%;
  
 
}
@media only screen and (max-width: 767px) {
  
  width:0%
  
 
}
width:50%;
position: absolute;
height:100%;
right: 0px;
align-items: center;
@media (max-width: 767px) {
 
    display: none;
  }

`;

const Bimg1=styled.img`
    max-width: 100%;
    display: block;
    position: static;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Bimg2=styled.img`

   bottom: 0;
    //height: 100%;
    left: 0;
    margin: 0;
    max-width: none;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
`;

export default Banner


import styled from "styled-components"

export const PageHero = styled.section`



width:100%;
height:100vh;
overflow:hidden;

position:relative;

/* background-image: linear-gradient(90.77deg, #274445 -1.25%, #318375 99.5%); */
background:url('/images/bac.png');
background-repeat:no-repeat;
background-size:cover;
background-position:bottom;

.wrap{
    position:relative;
    width:90%;
    height:100%;
    margin:auto;

    display:grid;

   
}

@media only screen and (min-width: 600px) { 

    background:url('/images/big-bg.jpg');
    background-size:cover;
       

       .wrap{
            grid-template-columns:repeat(2,1fr);

            h1{
                font-size: 3rem;
            }
       }
       
       
    }


    @media only screen and (min-width: 1020px) { 


   

   .wrap{
     

        h1{
            font-size: 4rem;
        }
   }
   
   
}



`




export const HeroTitle = styled.div`
    /* width:80%; */
    text-align:center;
    color:#fefefe;
    
  
   


    h1{
        font-size:3rem;
        font-weight:500;
        
        margin-bottom:5rem;
    }

    button{
        /* background: #FFA000; */
        
        border:none;
        outline:none;
       
        line-height:2rem;
        padding:1rem 2rem;
        border-radius: .5rem;
        text-transform:capitalize;

        margin: 3em 0 2rem 0;

        cursor: pointer;
        
    }


    @media only screen and (min-width: 600px) { 
       text-align:left;
       
       
    }
`


export const HeroHead = styled.div`

/* position:absolute; */
/* top:40%;
left:50%;
transform:translate(-50%,-50%); */

width:80% !important;
margin:auto;
z-index:1;
/* display:grid; */
/* grid-template-columns:repeat(2,1fr); */

/* background:red; */
/* position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%); */

`

export const HeroImg = styled.div`


    @media only screen and (min-width: 600px) { 
        display:grid;
        align-items: center;
        justify-items: center;
        
        
    }




/* position:absolute;
bottom:0%;
right:0%;
transform:translate(20%,0%); */

/* z-index:-1; */

    /* .banner{
        position:relative;
        background:#fff;
        padding: 4rem;
        width:100%;

        border-radius:1rem;
        text-align:center;
        margin-top:4rem;
        margin-bottom:3.5rem;
        color:#333;

        &>h1{
            margin-top:1rem;
            span{
                color:#FFA000;
            }
        }
    }

    button{
        padding: 2rem;
        border:none;
        outline:none;

        width:100%;
        text-transform:capitalize;
        border-radius: 1rem;
        background:linear-gradient(90deg, #FFB300 1.91%, #FFA000 100%);
    } */

`
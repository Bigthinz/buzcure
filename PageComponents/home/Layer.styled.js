import styled from "styled-components";


export const Service = styled.div`  
    width:80%;
    text-align:center;
    /* padding:5rem; */
    margin:7rem auto;
    /* min-height:30rem; */

    h2{
        margin-bottom:5rem;
    }

    h3{
        margin-top:2rem;
        margin-bottom:2rem;
        color:#54BB6A;
        text-transform:uppercase;
    }

     @media only screen and (max-width: 600px) {


     }
     @media only screen and (max-width: 900px) {}
     @media only screen and (max-width: 1024px) {}

`

export const Grid = styled.div`

    display:grid;
    grid-template-columns:repeat(2,1fr);
    /* grid-template-rows:repeat(2,1fr); */
    grid-gap:2rem;

    margin:auto;
    margin-bottom:5rem;
    

    .active{
        background: #274445;
        color:#fff;
        box-shadow: 5px 5px 5px  rgba(39, 68, 69, 0.05);
        font-size: 2rem;
        
        span{
            font-weight:500;
        }
        
    }

    


    .grid-item{
        padding:2rem 2rem;
        border-radius:.7rem;
        border: 1px solid #f1f1f1;
        height:15rem;
        /* background:#f8f8f8; */
        /* box-shadow: 5px 15px 25px 10px rgba(39, 68, 69, 0.1); */
        transition: .1s ease-in-out;

        &:hover{
        transition: .3s transform ease-in-out;
        background: #2E7168;
        transform: scale(1.05);
        color:#fefefe;
        box-shadow:  0 20px 25px -5px rgba(0,0,0,.05), 0 10px 10px -5px rgba(0,0,0,.01);

    }

        p{
            margin-top:1rem;
        }
    }

    @media only screen and (min-width: 600px) {
        grid-template-columns:repeat(4,1fr);
        /* width:70%; */
        
     }

     @media only screen and (min-width: 900px) {
        /* grid-template-columns:repeat(4,15rem); */
        /* width:60%; */

        
        
     }

     @media only screen and (min-width: 1024px) {
        /* grid-template-columns:repeat(4,15rem); */
        width:85%;
        grid-gap:2.5rem;
        
     }


`




export const Grid2 = styled.div`

    display:grid;
    /* grid-template-columns:repeat(2,1fr); */
    /* grid-template-rows:repeat(2,1fr); */
    grid-gap:2rem;

    margin:auto;
    margin-bottom:5rem;
    margin-top:5rem;
    
  
    .active{
        background: #f6f6f6;
        color:#fff;
        box-shadow: 5px 5px 5px  rgba(39, 68, 69, 0.05);
        font-size: 2rem;
        
        span{
            font-weight:500;
        }
        
    }

    


    .grid-item{
        padding:2rem 2rem;
        border-radius:.7rem;
        /* border: 1px solid #f1f1f1; */
        display:flex;
        /* height:15rem; */
        /* background:#f8f8f8; */
        /* box-shadow: 5px 15px 25px 10px rgba(39, 68, 69, 0.1); */
        transition: .1s ease-in-out;

        align-items:center;

        .grid-img{
            margin-right:1rem;
            box-shadow:  0 20px 25px -5px rgba(0,0,0,.05), 0 10px 10px -5px rgba(0,0,0,.01);
            padding:1rem 2rem;
            border-radius:.5rem;
            background:#FFB8B8;

            
        }

        &:hover{
        transition: .3s transform ease-in-out;
        /* background: #2E7168; */
        transform: scale(1.05);
        /* color:#fefefe; */
        box-shadow:  0 20px 25px -5px rgba(0,0,0,.05), 0 10px 10px -5px rgba(0,0,0,.01);

            
        
    }

        p{
            margin-top:1rem;
        }
    }

    @media only screen and (min-width: 600px) {
        justify-content:space-between;
        grid-template-columns:repeat(3,1fr);
        /* width:70%; */
        
     }

     @media only screen and (min-width: 900px) {
        /* grid-template-columns:repeat(4,15rem); */
        /* width:60%; */

        
        
     }

     @media only screen and (min-width: 1024px) {
        /* grid-template-columns:repeat(4,15rem); */
        width:85%;
        grid-gap:2.5rem;
        
     }


`

export const ServiceOption = styled.section`
     width:85%;
    /* text-align:center; */
    margin:10rem auto;
   


    .wrap{
        display:grid;
        grid-template-columns:1fr;
        grid-auto-flow: column dense;
      
       
        
        /* width:70%; */
        
    }

   

    .btn{
        margin-top:4rem;
    }


    @media only screen and (min-width: 600px) {
       
        .wrap{
            grid-template-columns:repeat(2,1fr);
            align-items: center;
            justify-items: center;
        }

        

     }
    
`

export const List = styled.div`

text-align:center;

    ul{
        text-decoration:none;
        margin:0;
        margin-top:4rem;
         

        

        li{
            display:flex;
            list-style:none;
            margin: 2rem 0;

            p{
                margin-left:1.5rem;
                display:block;
            }
        }
    }


    @media only screen and (min-width: 600px) {
        text-align:left;
        padding-left:6rem;

        p{
            width:90%;
        }

    }

    @media only screen and (min-width: 900px) {
        text-align:left;

        p{
            width:70%;
        }

    }

`


export const Masonry = styled.div`
    grid-template-columns:1fr;
    display:none;


    
    @media only screen and (min-width: 600px) {
        display:block;

    }


`

export const Mission = styled.section`
 
  padding:5rem 0 0 0;
  background:#F3F8FE;


  .wrap{
      width:90%;
      margin: 7rem auto;
      display:grid;

     
  }

  .modal-wrap{
    cursor:none;
  }

  .title{
    text-align:center;
    margin-bottom:3rem;
    

    .big-num{
        display:none;
        
    }
  }

  .img-container{
      margin: 6rem 0;
      display:none;
  }


  @media only screen and (min-width: 600px) {
    .wrap{
        grid-template-columns:repeat(2,1fr);
        grid-column-gap:12rem;
    
        /* grid-template-rows:1fr; */

        .title{
            grid-column:2 / 3;
            grid-row:1/2;
            /* width:0%; */
            padding: 0 4rem;
            text-align:left;

            .big-num{
            display:block;
            font-size:27rem;
            font-weight:700;
            color:#01C2A9;
            margin:0;
            padding:0;
    }
        }
    }
  }

  @media only screen and (min-width: 1024px) {
    .wrap{
        width:80%;

    }
     }
`

export const Modal = styled.div`
 display:flex;
 flex-direction:column;


 padding: 2rem 2rem ;


 /* border-radius:.7rem; */
 box-shadow:  0 20px 25px -5px rgba(0,0,0,.05), 0 10px 10px -5px rgba(0,0,0,.01);

 border-radius:10px;
 display:grid;
grid-template-columns: 6rem 1fr;
grid-column-gap:1rem;
align-content:center;
margin-bottom:2rem;
transition: all .2s ease-in-out;



&.active{
    background:#01C2A9;
    transform:translateY(-5px);
}

&:hover{
    box-shadow:0px 6px 10px rgba(201, 230, 179);
    background:rgba(201, 230, 179,.6);
    transform:translateY(-5px);
   
}



.modal-img{
    align-self:center;
    background:#fefefe;
    border-radius:50px;
    /* line-height:4rem; */
    padding:.4rem !important;
    /* margin-bottom:2rem; */
    box-shadow:0px 9px 17px 0px rgba(21, 34, 58, .13) ;

}

 .modal-text{
     margin-left:1.5rem;
   
     
     h4{
         margin-bottom:1rem;
        
     }

     
 }

 @media only screen and (min-width: 600px) {
    .modal-wrap{
        grid-column:1/2;
        grid-row:1/2;
    }
 }

`


export const Banner = styled.section`
 width:100%;
 height:60vh;
 background:url('/images/banner.jpg');
 background-size:cover;
 text-align:center;

 position:relative;

 .wrap{
    width:80%;
    margin:auto;
    color:#fefefe;

    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    p{
        margin:4rem 0;
    }

 }

`

export const Header = styled.div`
text-align:center;
`

export const Product = styled.div`
    margin:7rem auto;
    background:#F8F8F7;

    .wrap{
        width:90%;
        margin:auto;
        padding:4rem 0;

        .item{
            margin-bottom:2rem;
            padding:2rem 2rem;
            background:#fefefe;
            box-shadow: 3.50746px 3.50746px 3.50746px rgba(0, 0, 0, 0.1);

            h3{
                margin-bottom:2rem;
                font-weight:bold;

                &::after{
                    content:'';
                    width:25px;
                    height:1px;
                    background:#C4C4C4;
                    display:block;
                    margin-top:1rem;

                }
            }

            p{
                width: 80%;
                line-height: 1.9;
            }
        }
    }

    
`


export const GridBand = styled.section`


    .wrap{
        width:90%;
        margin:auto;


        .grid-item{
            height:40rem;
            margin-bottom:2.5rem;
            

            h3{
                padding:2rem;
                font-weight:bold;
                font-size:2.3rem;
                color:#fefefe;
            }
            
        }

        .item-1{
            background:url('/images/banner.jpg');
        }

        .item-2{
            background-image: url('/images/lady-in-shop.jpg');
            background-size:cover;
            background-position:center;
        }

        .item-3{
            background:url('/images/meeting.jpg');
            background-size:cover;
        }


    }

`


export const Program = styled.section`
    padding:4rem 0;

    .title{
 
           text-align:center;
           margin-bottom:6rem;
          
        }

    .program-wrap{
        width:80%;
        margin:auto;
        
        
        
        .program-item{

            margin: 4rem 0;
            h2{
                font-size:1.5rem;
                text-transform:uppercase;
                margin-bottom:2rem;

                &::after{
                    content:'';
                    width:100%;
                    height:1px;
                    background:#333;
                    display:block;
                    margin-top:1rem;
                }
            }

            .icon{
                text-align:center;
                margin:1rem 0;
            }
            
            p{
                width: 80%;
                margin:1rem 0;
            }

            a{
                font-weight:bold;
            }
        }
    }
`


export const Checkout = styled.div`
    background:#F8F8F7;
    margin-bottom:5rem;

    .wrap{
        width:80%;
        margin:auto;
        padding:4rem 0;
        
        text-align:center !important;

       

    }

`

export const Dropbox = styled.div`

    .wrap{
        width:80%;
        margin:auto;
        background:#54BB6A;
        color:#fefefe;
        padding:2rem;

        p{
            line-height:1.5;
            margin: 3rem 0;
            width: 80%;
        }

        .btn{
            display:block;
            width:20%;
        }
    }
`
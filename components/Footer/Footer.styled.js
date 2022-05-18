import styled from "styled-components";


export const FooterStyled = styled.footer`
    background:#FAFAFA;
    padding: .5rem 0;

`

export const Wrap = styled.div`
    width:80%;
    margin:7rem auto;

    h2{
        margin:2rem 0;
        font-weight:bold;
    }

    p{
        margin: 2rem 0;
    }
`

export const Links = styled.div`
     display:grid;
     grid-template-columns:repeat(2,1fr);
     grid-gap:20px;

    

     .quick-links,
     .about{
            h3{
                margin-bottom:2rem;
            }

            ul{
                list-decoration:none;

                li{
                    list-style:none;
                    margin-bottom:1rem;
                }
            }


     }
    

    
`

export const Subscribe = styled.div`
    margin-top:2rem;

    .wrap{
        
        .input-wrap{
            display:flex;
            height:6rem;
            border: 1px solid #ccc;
            padding: .5rem;
            border-radius:.7rem;

            input{
                height:100%;
                padding:1rem;
                border:none;
                outline:none;
                flex:2;
            }

            button{
                /* padding:0 3rem; */
                border:none;
                outline:none;
                /* width: 100%; */
                flex:1;
                border-radius:.7rem;
                background:#54BB6A;
                color:#fefefe;
               
            }
        }
    }
`
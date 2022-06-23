import styled from "styled-components";

export const Nav = styled.div`
    width:100%;
    line-height:8rem;

    position:fixed;
    top:0;
    left:0;

    /* background: rgba(254, 254, 254, 0.01); */
    background:#fefefe;
    backdrop-filter: blur(5px);

    border-bottom: 1px solid rgba(255,255,255,.2);
    /* box-shadow:  0 20px 25px -5px rgba(0,0,0,.05), 0 10px 10px -5px rgba(0,0,0,.01); */


    z-index:999;


` 

export const Wrap = styled.div`
    

    width:80%;
    margin: auto;

    display:flex;
    justify-content: space-between;
    align-items:center;

   

    .navlink{
        /* background:red; */
        /* width: 50%; */
        ul{
            list-style:none;
            display:flex;
            justify-content:flex-end;

            a{
                /* font-weight:500; */
                text-decoration:none;
                color:#fff;
                text-shadow:1px 1px  rgba(0,0,0,.5);
                
                &:active{
                    color:#54BB6A;
                }

                &:focus{
                    color:#54BB6A;
                }

                li{
                    margin-right:2rem;
                }
            }
        }
    }


` 
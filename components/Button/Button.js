import styled from 'styled-components'


const Button = ({bg,color,text, border, width}) => {
  return(
      <>
        <ButtonStyle bg={bg} color={color} width={width} border={border} >{text}</ButtonStyle>
      </>
  )
};

export default Button;




const ButtonStyle = styled.button`
        border: ${({border})=> border || 'none'};
        text-align: center;
        color: ${({color})=> color ||`#474645`};
        text-decoration: none;
        background:${({bg})=> bg || `linear-gradient(90deg, #54BB6A 1.91%, #54BB6A 100%);`};
        box-shadow: 0px 4px 140px 10px ${({box})=> box || `rgba(255, 179, 0, 0.1)`};
     
        border-radius: .3rem;


        /* added padding and height */
        padding:1rem 2rem;
        height:4.8rem;
       
        /* border: 1px solid ${({border})=> border || '#1DAF92'}; */
        transition: .1s all ease-in-out;
        outline:none !important;
        margin-right:1rem;
        display:block;
        min-width:17rem;
        

       


        &:hover {
            transition: .1s all ease-in-out;
            background: ${({bg})=> bg || `rgba(255,160,0, 0.9)`};
        }
        &:active {
            transform: translateY(0.05rem);
            background: ${({bg})=> bg || `rgba(255,179,0, 0.85)`};

        }

        @media only screen and (max-width: 600px) {
            display:block;
            width:${({width})=> width || '100%' };
            margin-bottom:1rem;
        }

`
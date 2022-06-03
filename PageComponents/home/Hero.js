import { PageHero } from "./Hero.styled"
import Image from 'next/image'
// import Navbar from "../../Components/Button/Nabar/Navbar"
import Link from "next/link"
import { HeroImg,HeroHead, HeroTitle,Curve } from "./Hero.styled"
import Button from "./../../components/Button/Button";

const Hero = () => {
  return (
    <PageHero>
        <div className="wrap">
            <HeroHead>
                <HeroTitle>
                    <h1><span>Buzcure </span>Helping your business thrive in the digital economy</h1>
                    <p>We create digital experiences that help your organization work smarter, faster, and better. We provide solutions to complex business challenges using a systematic approach to problem solving and state of the art technologies.</p>
                    <Button text='Sign up now' bg='#54BB6A' color='#fefefe' />
                </HeroTitle>
            </HeroHead>
           
        </div>
       

    </PageHero>
  )
}

export default Hero


import { PageHero } from "./Hero.styled"
import Image from 'next/image'
import Link from "next/link"
import { HeroImg,HeroHead, HeroTitle,Curve } from "./Hero.styled"
import Button from "./../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";

const Hero = () => {
  return (
    <PageHero>
      <Navbar/>
        <div className="wrap">
            <HeroHead>
                <HeroTitle>
                    <h1><span>Buzcure </span>Helping your business thrive in the digital economy</h1>
                    <p>We create digital experiences that help your organization work smarter, faster, and better. We provide solutions to complex business challenges using a syst.</p>
                    <Button text='Sign up now' bg='#54BB6A' color='#fefefe' />
                </HeroTitle>
            </HeroHead>      
        </div>
    </PageHero>
  )
}

export default Hero


import { PageHero } from "./Hero.styled"
import Image from 'next/image'
// import Navbar from "../../Components/Button/Nabar/Navbar"
import Link from "next/link"
import { HeroImg,HeroHead, HeroTitle,Curve } from "./Hero.styled"
import Button from "../../Components/Button/Button";

const Hero = () => {
  return (
    <PageHero>
        <div className="wrap">
            <HeroHead>
                <HeroTitle>
                    <h1>Helping your business thrive in the digital economy</h1>
                    <p>We create digital experiences that help your organization work smarter, faster, and better.</p>
                    <Button text='Sign up now' bg='#54BB6A' color='#fefefe' />
                </HeroTitle>
            </HeroHead>
            <HeroImg>
              
                <Image src="/images/hero-img-bg.png" alt='hero img' width={700} height='700' layout='intrinsic' objectFit="contain" />
            </HeroImg>
        </div>
       

    </PageHero>
  )
}

export default Hero


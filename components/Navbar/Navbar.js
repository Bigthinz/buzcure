// import {Wrap} from "./Navbar.styled"
import Image from 'next/image'
import Link from "next/link"
import { Nav, Wrap } from './Navbar.styled'

const Navbar = () => {
  return (
    <Nav>
        <Wrap>
            <div>
               <Image src='/images/logo.png' alt='' width='50' height='50' layout='intrinsic' objectFit="cover" />
            </div>
            <div className='navlink'>
              <ul>
                <Link href='#'>
                  <a className='active'><li>Home</li></a>
                </Link>
                <Link href='#'>
                  <a><li>service</li></a>
                </Link>
                <Link href='#'>
                  <a><li>solution</li></a>
                </Link>
                <Link href='#'>
                  <a><li>platform</li></a>
                </Link>
                <Link href='#'>
                  <a><li>contact</li></a>
                </Link>
              </ul>
            </div>
          
        </Wrap>
        
    </Nav>
    
  )
}

export default Navbar
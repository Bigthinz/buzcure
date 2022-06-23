import React from 'react'
import Image from 'next/image'

import { FaBeer } from 'react-icons/fa';

import { Service,Grid,ServiceOption, List, Masonry, Mission, Modal, Banner, Product, Header, GridBand, Program, Checkout, Dropbox, Grid2 } from './Layer.styled'
import Title from './../../components/Title/Title';
import Button from './../../components/Button/Button';
import Link from 'next/link';

const Layer = () => {

  const grid = [
    {
      title:'Paid Search',
      image:'/icons/warehouse.ico'
    },
    {
      title:'Shopping & Feed Management',
      image:'/icons/warehouse.ico'
    },
    {
      title:'Paid Social',
      image:'/icons/warehouse.ico'
    },
    {
      title:'Performance Display',
      image:'/icons/warehouse.ico'
    },
    {
      title:'Amazon Advertising',
      image:'/icons/warehouse.ico'
    },
    {
      title:'Remarketing',
      image:'/icons/warehouse.ico'
    },
  ]

  return (
    <>
        <div>
            <Service >
                <h3>Service</h3>
                <Title text='Save Time Managing your business with our service'/>

                <Grid>
                    <div className='grid-item'>
                      <Image src='/icons/laptop_metrics.ico' alt='point of sales' width={40} height={40} />
                      
                      <p>Content<br/>Creation</p>
                    </div>
                    <div className='grid-item'>
                    <Image src='/icons/warehouse.ico' alt='point of sales' width={40} height={40} />
                      <p>Web & Mobile <br/>Development</p>
                    </div>
                    <div className='grid-item ' >
                    <Image src='/icons/department.ico' alt='point of sales' width={40} height={40} />
                      <p>Customer <br/>Support</p>
                    </div>
                    <div className='grid-item'>
                    <Image src='/icons/container_truck.ico' alt='point of sales' width={40} height={40} />
                      <p>Human <br/>Resources</p>
                    </div>

                </Grid>
                <Grid>
                    <div className='grid-item'>
                      <Image src='/icons/laptop_metrics.ico' alt='point of sales' width={40} height={40} />
                      
                      <p>Marketing & <br/>Communication</p>
                    </div>
                    <div className='grid-item'>
                    <Image src='/icons/warehouse.ico' alt='point of sales' width={40} height={40} />
                      <p>Business <br/>Development</p>
                    </div>
                    <div className='grid-item' >
                    <Image src='/icons/department.ico' alt='point of sales' width={40} height={40} />
                      <p>Accounting & <br/>Finance</p>
                    </div>
                    <div className='grid-item active'>
                    {/* <Image src='/icons/container_truck.ico' alt='point of sales' width={40} height={40} /> */}
                      <p>+4 <br/><span>More</span></p>
                    </div>

                </Grid>
            </Service>

            <ServiceOption>
            <div className='wrap'>
              
              <List>
              <Title className='title' text='New to business? No problem'/>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              
                <ul>
                  <li>
                    <Image src='/icons/mark.svg' alt='mark' width={20} height={20} />
                    <p>Ecommerce</p>
                  </li>
                  <li>
                    <Image src='/icons/mark.svg' alt='mark' width={20} height={20} />
                    <p>Point of sale</p>
                  </li>
                  <li>
                    <Image src='/icons/mark.svg' alt='mark' width={20} height={20} />
                    <p>Fintech</p>
                  </li>
                  <li>
                    <Image src='/icons/mark.svg' alt='mark' width={20} height={20} />
                    <p>Distribution and logistics</p>
                  </li>
                </ul>
                <div className='btn'><Button  text='Get Started' bg='#54BB6A' color='#fefefe' /></div>
              </List>
             

              <Masonry>
                <div>
                  <Image src='/images/lady-sitting.jpg' alt='image' width={500} height={500} layout='intrinsic' objectFit="contain" />
                </div>            
            </Masonry>
            </div>
            </ServiceOption>

            <Mission>
              <div className='wrap'>

             <div className='title'>
              <Title  text='Our mission is to change your company'/>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <p className='big-num'>01</p>
              </div>

             <div className='modal-wrap'>
             <Modal className=' active'>
                <div className='modal-img'>
                  <Image src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>
             <Modal>
                <div className='modal-img' >
                  <Image  src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>
             <Modal>
                <div className='modal-img'>
                  <Image src='/icons/mark.svg' alt='alt' width={50} height={50}/> 
                </div>  
                <div className='modal-text'>
                  <h4>Distracted by the readable </h4>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
             </Modal>
             </div>

            <div className='img-container'>
              <Image src='/images/cate.png' alt='board photo' width={300} height={300} layout='intrinsic' objectFit="cover" />
            </div>
              </div>
            </Mission>


            <ServiceOption>
              {/* <Title className='title' text='We take the work off your hands.'/> */}
              <Title className='title' text='              You run your business, we help you find customers.'/>
              
              <p>We drive a ton of conversions through these paid media program components.</p>
              
              <Grid2>
                {
                grid.map((item) => {
                    return (
                      <div className='grid-item' key={item.title}>
                        <div className='grid-img'>
                        <Image src={item.image} alt='point of sales' width={40} height={40} />
                        </div>
                        <p>{item.title}</p>
                      </div>
                    )
                })
                }

                </Grid2>
                
              <Masonry>
                <div></div>            
            </Masonry>

            </ServiceOption>

            <Banner>
              <div className='wrap'>
                <Title className='title' text='The platform of platforms'/>
                <p>Behind every great experience is a great workflow. As the foundation for all digital workflows, the Now Platform® connects people, functions, and systems across your organization.</p>
                <div className='btn'><Button  text='Explore Platform' bg='#54BB6A' color='#fefefe' /></div>
              </div>
            </Banner>


            <Product>
              <div className='wrap'>
                <div className='item'>
                  <h3>Learn from Us</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
                <div className='item'>
                  <h3>Find a Partner</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
                <div className='item'>
                  <h3>Become a Partner</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable </p>
                </div>
              </div>
            </Product>

            <GridBand>
              <div className='wrap'>
                 <div className='grid-item item-1'>
                    <h3>New to business? No problem</h3>
                 </div>
                 <div className='grid-item item-2'>
                    <h3>New to business? No problem</h3>
                 </div>
                 <div className='grid-item item-3'>
                    <h3>New to business? No problem</h3>
                 </div>
              </div>
            </GridBand>

            <Program>
              <div className='wrap'>
                <div className='title'>
                  <Title  text='Buzcure programs'/>
                </div>
                <div className='program-wrap'>

                  <div className='program-item'>
                    <h2>fintech program</h2>
                    <div className='icon'>
                      <Image src='/icons/chart.ico' alt='fintech icon' width={50} height={50}  />
                    </div>
                    <h3>Finance</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link href='#' className='learn-more'>
                        <a>Learn more</a>
                    </Link>
                  </div>

                  <div className='program-item'>
                    <h2>reseller program</h2>
                    <div className='icon'>
                      <Image src='/icons/trolley.ico' alt='fintech icon' width={50} height={50}  />
                    </div>
                    <h3>Ecommerce</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link href='#' className='learn-more'>
                        <a>Learn more</a>
                    </Link>
                  </div>

                  <div className='program-item'>
                    <h2>digital marketing program</h2>
                    <div className='icon'>
                      <Image src='/icons/sale.ico' alt='fintech icon' width={50} height={50}  />
                    </div>
                    <h3>Marketing</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link href='#' className='learn-more'>
                        <a>Learn more</a>
                    </Link>
                  </div>

                  <div className='program-item'>
                    <h2>in-house program</h2>
                    <div className='icon'>
                      <Image src='/icons/product.ico' alt='fintech icon' width={50} height={50}  />
                    </div>
                    <h3>Point of Sales</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link href='#' className='learn-more'>
                        <a>Learn more</a>
                    </Link>
                  </div>

                </div>
              </div>
            </Program>

            <Checkout>
              <div className='wrap'>
                <Title text='Not so sure yet what the advantages of Buzcure are?'/>
                <div className='centered'>
                  <Button text='Checkout it out' width='100%' bg='#54BB6A' color='#fefefe' />
                </div>
              </div>
            </Checkout>

            <Dropbox>
              <div className='wrap'>
                  <h3>Let&apos;s do it</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                  <div className='btn'><Button  text='Get started' border='1px solid #fefefe'  bg='#54BB6A' color='#fefefe' /></div>
              </div>
            </Dropbox>



            
        </div>
    </>
  )
}

export default Layer
import React from 'react';
import Title from '../components/Title';
import abt from '../assets/aboutimg.avif';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8  border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={abt} alt='' className='w-full md:max-w-[350px]'/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fugit enim inventore, ullam eum nesciunt, esse temporibus unde illum recusandae animi quod? Illo ratione reprehenderit, aut necessitatibus accusantium reiciendis incidunt eos iure corporis facere eveniet cumque perspiciatis recusandae praesentium deserunt amet quod voluptates facilis non aperiam odit obcaecati vel doloremque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus debitis error sint eveniet, magnam expedita officia quod necessitatibus ipsa voluptatibus dolore eum beatae culpa? Fuga adipisci quaerat nihil enim dolorem illum, sit voluptas, accusantium facere ea sint sunt quae.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non optio voluptates aliquid dolorem eos minima, quisquam rem repellendus placeat pariatur cupiditate modi doloribus facilis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, delectus!</p>
          </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam suscipit porro harum voluptas perspiciatis, aliquam architecto animi hic itaque quaerat deleniti reiciendis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque, cum non eaque error eius, esse reiciendis quisquam odit impedit ex similique perspiciatis libero veritatis nostrum molestias iusto pariatur qui quidem amet.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque, cum non eaque error eius, esse reiciendilorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, libero. to pariatur qui quidem amet.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About;
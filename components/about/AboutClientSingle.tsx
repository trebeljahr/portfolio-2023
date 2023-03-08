import Image from 'next/image'

function AboutClientSingle({ title, image }) {
  return (
    <div className='px-10 py-5 mb-5 border rounded-lg cursor-pointer bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm'>
      <Image
        src={image}
        alt={title}
        width='0'
        height='0'
        sizes='(max-width: 768px) 90vw, 50vw'
        className='w-full h-auto'
      />
    </div>
  )
}

export default AboutClientSingle

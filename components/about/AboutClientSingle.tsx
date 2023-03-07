import Image from 'next/image'

function AboutClientSingle({ title, image }) {
  return (
    <div className='px-10 py-5 mb-5 border rounded-lg cursor-pointer bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm'>
      <Image src={image} alt={title} width={100} height={50} />
    </div>
  )
}

export default AboutClientSingle

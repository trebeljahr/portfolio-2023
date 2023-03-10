import { SVGProps } from 'react'

export const Logo = ({ dark = false, ...props }: SVGProps<SVGSVGElement> & { dark?: boolean }) => {
  return (
    <div className='flex items-center justify-center space-x-1'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        className='icon-icon-0'
        width={40}
        height={40}
        data-fill-palette-color='accent'
        viewBox='0 2.289 100 95.423'
        {...props}>
        <g fill={'rgb(99, 102, 241)'} data-fill-palette-color='accent'>
          <path
            d='M99.279 18.508 83.756 2.982c-.923-.924-2.558-.924-3.48 0l-9.656 9.659c-.756-2.6-3.13-4.516-5.968-4.516H6.243A6.252 6.252 0 0 0 0 14.37v46.522a6.25 6.25 0 0 0 6.243 6.243h10.016l-3.005 3.006c-.01.009-.019.021-.029.029l-.055.055c-.078.077-.138.164-.202.248a2.409 2.409 0 0 0-.209.32 2.42 2.42 0 0 0-.146.304c-.012.031-.033.058-.043.09L4.807 94.471a2.464 2.464 0 0 0 3.113 3.115l23.287-7.762c.021-.007.039-.021.061-.029.167-.061.329-.137.48-.232.01-.006.02-.009.029-.015.142-.093.274-.198.395-.318L54.26 67.136h10.392c3.442 0 6.241-2.8 6.241-6.243V50.498l15.009-15.011c.147-.148.267-.317.37-.494L99.28 21.987a2.46 2.46 0 0 0-.001-3.479zM65.971 60.893c0 .729-.592 1.321-1.319 1.321h-5.47l6.789-6.792v5.471zm2.523-39.045 4.443 4.442-50.104 50.118-4.442-4.441 50.103-50.119zM4.921 60.893V14.37c0-.729.592-1.321 1.321-1.321h58.409a1.32 1.32 0 0 1 1.319 1.321v2.948L21.174 62.214H6.243a1.323 1.323 0 0 1-1.322-1.321zm6.112 30.466 4.946-14.839 9.893 9.893-14.839 4.946zm55.66-43.621s-.002 0-.002.002l-2.67 2.671-33.59 33.597-4.119-4.12L76.418 29.77l4.121 4.12-13.846 13.848zM84.1 30.205 72.055 18.166l9.961-9.962 12.043 12.043-9.959 9.958z'
            data-fill-palette-color='accent'
          />
          <path
            d='M22.885 27.229c0-.652-.259-1.277-.721-1.74l-5.917-5.916a2.462 2.462 0 0 0-3.48 3.482l4.176 4.174-4.176 4.176a2.459 2.459 0 0 0 0 3.48 2.455 2.455 0 0 0 3.48.001l5.917-5.916a2.464 2.464 0 0 0 .721-1.741zm3.597 8.377h7.048a2.461 2.461 0 0 0 0-4.923h-7.048a2.462 2.462 0 0 0 0 4.923z'
            data-fill-palette-color='accent'
          />
        </g>
      </svg>
      <p className='font-bold text-ternary-dark dark:text-primary-light'>Rico Trebeljahr</p>
    </div>
  )
}

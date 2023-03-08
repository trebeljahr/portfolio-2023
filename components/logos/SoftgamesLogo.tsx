import { SVGProps } from 'react'

export const SoftgamesLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' className='logo-img' viewBox='0 -100 230 200' {...props}>
    <path fill='#F5842D' d='M231 0H0v42h231V0Z' className='logo-bg' />
    <path
      fill='#fff'
      d='M10.364 9.096c1.86-1.583 4.432-1.865 6.774-1.89 2.114.051 4.431.383 5.985 1.993 1.528 1.61 1.757 3.96 1.63 6.08h-5.4c-.076-1.252-.076-2.785-1.196-3.602-1.324-.869-3.54-.435-4.125 1.15-.586 1.379 0 2.988 1.12 3.883 2.368 1.967 5.5 2.81 7.665 5.058 1.477 1.405 2.241 3.474 2.165 5.493 0 2.171-.662 4.547-2.47 5.876-2.114 1.558-4.89 1.66-7.41 1.61-2.165-.026-4.534-.665-5.909-2.479-1.299-1.763-1.4-4.088-1.299-6.208h5.526c.077 1.099.026 2.274.459 3.296.713 1.481 2.75 1.737 4.125 1.073 1.732-1.022 1.732-3.73.255-5.008-2.47-2.325-5.96-3.27-8.226-5.85-1.196-1.303-1.884-3.066-1.859-4.829 0-2.043.56-4.266 2.19-5.646Zm91.499 1.149c1.375-1.942 3.769-2.836 6.086-2.964 2.751-.255 5.883.204 7.869 2.325 1.605 1.635 2.038 4.036 1.961 6.233-1.833.026-3.692 0-5.551 0-.077-1.2-.026-2.503-.764-3.525-.739-1.022-2.139-1.277-3.285-1.022-1.095.255-1.783 1.277-2.089 2.3-.611 2.069-.534 4.24-.585 6.36.025 2.58-.077 5.212.407 7.741.204 1.15.662 2.479 1.859 2.913 1.452.485 3.005.179 4.431-.256v-5.927h-3.03v-4.087h8.607v13.54c-3.692.639-7.461 1.2-11.179.588-1.783-.281-3.591-.997-4.711-2.453-.994-1.277-1.401-2.861-1.656-4.445-.458-3.091-.356-6.208-.33-9.3.05-2.733.33-5.697 1.96-8.021Zm106.523-1.073c1.834-1.61 4.38-1.89 6.723-1.942 2.165.051 4.584.358 6.138 2.044 1.528 1.584 1.706 3.934 1.629 6.029h-5.398c-.102-1.15-.102-2.478-.917-3.372-.84-.843-2.241-.818-3.26-.358-1.044.46-1.451 1.712-1.349 2.785.025 1.098.789 2.018 1.629 2.657 1.579 1.2 3.438 1.967 5.119 3.04 1.502.945 2.929 2.146 3.693 3.78.891 1.866.84 4.037.356 5.979-.433 1.737-1.63 3.27-3.234 4.01-2.165.997-4.609.997-6.952.92-1.961-.102-4.024-.791-5.246-2.426-1.35-1.763-1.452-4.114-1.375-6.234h5.577c.076 1.405-.077 3.091 1.069 4.139 1.172.817 2.98.843 4.049-.18.943-1.072 1.019-2.835.153-4.01-.738-1.022-1.833-1.686-2.903-2.35-1.834-1.099-3.769-2.095-5.322-3.577-1.401-1.329-2.318-3.168-2.318-5.11-.051-2.12.51-4.394 2.139-5.824ZM57.45 7.741h13.803v4.113c-2.776.026-5.526 0-8.276.026v6.667c2.623.026 5.246 0 7.894 0v4.063h-7.894v11.65h-5.5c-.026-8.815 0-17.654-.026-26.519Zm18.438 0c5.984-.026 11.943 0 17.928 0v4.42h-6.188v22.124h-5.5V12.16h-6.24V7.74Zm74.793 0h8.938c1.401 6.004 2.751 12.007 4.177 18.01 1.553-5.977 2.954-12.006 4.431-18.01h8.658v26.544h-5.373c0-3.015-.127-6.03 0-9.044.076-2.274-.076-4.573-.026-6.847.102-1.507 0-3.014-.101-4.522-1.63 6.822-3.387 13.617-5.094 20.413h-5.322c-1.604-6.77-3.234-13.54-4.813-20.31-.255 2.452-.076 4.93-.127 7.383v12.927h-5.374c.026-8.84.026-17.705.026-26.544Zm33.946 0h14.464v4.113h-8.913v6.438h8.226v4.062h-8.226v7.767h9.193v4.138h-14.77c0-8.814 0-17.679.026-26.518ZM50.244 19.288c-.026-2.657-.077-5.416-1.172-7.894-.713-1.66-2.164-2.989-3.87-3.576-2.114-.716-4.406-.741-6.596-.41-1.452.256-2.903.793-3.973 1.84-1.35 1.252-1.96 3.04-2.292 4.803-.534 3.015-.33 6.055-.356 9.095.05 2.81.153 5.825 1.63 8.303 1.248 2.07 3.667 3.091 6.01 3.219 2.444.153 5.093.077 7.181-1.354 1.604-1.073 2.496-2.887 2.903-4.726.688-3.015.484-6.183.535-9.3Zm-5.78 6.413c-.154 1.354-.23 2.835-1.045 4.01-.79 1.15-2.42 1.355-3.616.818-.917-.434-1.426-1.43-1.655-2.401-.535-2.3-.433-4.675-.484-7 .05-2.376-.051-4.752.458-7.077.23-1.073.764-2.197 1.834-2.631 1.146-.409 2.597-.256 3.387.766.865 1.099.967 2.58 1.146 3.909.152 3.193.127 6.412-.026 9.606Zm93.662-17.934c-2.444-.026-4.915 0-7.359-.026l-7.334 26.518c1.833.026 3.667 0 5.5 0 .484-1.967 1.019-3.934 1.503-5.901h7.537l1.452 5.901h5.883c-2.394-8.814-4.813-17.653-7.182-26.492Zm-6.57 16.503c.79-3.806 1.681-7.613 2.521-11.394.968 3.781 1.808 7.588 2.7 11.394h-5.221Z'
      className='logo-letter'
    />
  </svg>
)
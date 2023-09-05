import PagesMetaHead from 'components/PagesMetaHead'
import Image from 'next/image'
import profile from '../public/images/profile.jpg'
import styles from '../styles/cv.module.css'

export default function CVPage() {
  return (
    <>
      <PagesMetaHead title='Resume | Rico Trebeljahr' />
      <div id='cv' className={styles['cv-container']}>
        <div className={styles['cv-header']}>
          <Image
            className={`${styles['cv-circular']} ${styles['cv-image']}`}
            src={profile}
            alt='profile picture of Rico Trebeljahr'
          />
          <div>
            <div className={styles['cv-name-heading']}>
              <h1 className={`${styles['cv-job-title']}`}>Fullstack Software Engineer</h1>
              <h2 className={styles['cv-black-heading']}>Rico Trebeljahr</h2>
            </div>
            <div className={styles['cv-contact-info']}>
              <a href='mailto:ricotrebeljahr@gmail.com' className='w-fit hover-underline-animation'>
                ricotrebeljahr@gmail.com
              </a>
              <a href='https://github.com/trebeljahr' className='w-fit hover-underline-animation'>
                github.com/trebeljahr
              </a>
              <a href='https://www.linkedin.com/in/trebeljahr/' className='w-fit hover-underline-animation'>
                linkedin.com/in/trebeljahr/
              </a>
            </div>
          </div>
        </div>
        <div className={styles['cv-section']}>
          <h3>About Me</h3>
          <p>
            I am a self-taught fullstack software engineer and excellent problem solver, who loves to learn new things.
            My core strength is in the Typescript/Javascript ecosystem, but I am quite flexible with tech, having worked
            in Python and Golang environments as well.
          </p>
        </div>
        <div className={`${styles['cv-section']} ${styles['cv-main-section']}`}>
          <h2 className={styles['cv-black-heading']}>Work</h2>
          <div className={styles['cv-divider']} />
        </div>
        <div className={styles['cv-section']}>
          <div>
            <h3>Ironhack</h3>
            <p className={styles['cv-date']}>Jan. 2022 - now</p>
          </div>
          <p>
            Lead the teaching efforts of 3 cohorts at Ironhack, teaching 60+ people how to become Fullstack Web
            Developers. Sharing my knowledge and expertise, and conducting both full-time and part time classes.
          </p>
        </div>
        <div className={styles['cv-section']}>
          <div>
            <h3>ESA</h3>
            <p className={styles['cv-date']}>Oct. 2021 - Dez. 2021</p>
          </div>
          <p>
            Worked on a project at the European Space Agency to build tools for avoiding collisions of satellites with
            space debris. Lead the efforts to automate deployments with Ansible.
          </p>
        </div>
        <div className={styles['cv-section']}>
          <div>
            <h3>Klarna</h3>
            <p className={styles['cv-date']}>Jan. 2021 - Jul. 2021</p>
          </div>
          <p>
            Worked at Klarna for 6 months as a Software Engineer, as part of their core browser extension team. There I
            built an automated browser extension testing setup with cypress and wrote the extension&apos;s notifications
            feature.
          </p>
        </div>
        <div className={styles['cv-section']}>
          <div>
            <h3>Softgames</h3>
            <p className={styles['cv-date']}>Jun. 2019 - Apr. 2020</p>
          </div>
          <p>
            Worked at Softgames as a Junior Full Stack Developer. There I built an ultra flexible and scalable
            multiplayer server using Golang and a Typescript/RxJS client library to easily adapt to the frontend teams
            data requirements.
          </p>
        </div>

        <div className={`${styles['cv-section']} ${styles['cv-main-section']}`}>
          <h2 className={styles['cv-black-heading']}>Projects</h2>
          <div className={styles['cv-divider']} />
        </div>

        <div className={styles['cv-section']}>
          <div>
            <h3>Quaternius 3D models</h3>
            <p className={styles['cv-date']}>2023</p>
          </div>
          <p>
            Building a 3D viewer for 3D models provided by the talented artist Quaternius for free:{' '}
            <a href='https://quaternius.trebeljahr.com' className='hover-underline-animation'>
              quaternius.trebeljahr.com
            </a>
          </p>
        </div>

        <div className={styles['cv-section']}>
          <div>
            <h3>Fractal Garden</h3>
            <p className={styles['cv-date']}>2022</p>
          </div>
          <p>
            Building an open-source mathematical exhibition, filled with beautiful fractals. Making it to the hackernews
            frontpage:{' '}
            <a href='https://fractal.garden' className='hover-underline-animation'>
              fractal.garden
            </a>
          </p>
        </div>

        <div className={styles['cv-section']}>
          <div>
            <h3>Minecraft Clone</h3>
            <p className={styles['cv-date']}>2021</p>
          </div>
          <p>
            During this project I used ThreeJS to create a small demo clone of the popular game Minecraft. The twist is
            – this one runs as a webpage and in the browser:
            <a href='https://mc.trebeljahr.com' className='hover-underline-animation'>
              mc.trebeljahr.com
            </a>
          </p>
        </div>

        <div className={`${styles['cv-section']} ${styles['cv-main-section']}`}>
          <h2 className={styles['cv-black-heading']}>Skills</h2>
          <div className={styles['cv-divider']} />
        </div>
        <div className={styles['cv-section']}>
          <h3>Overview</h3>
          <ul>
            <li>Full Stack Development</li>
            <li>JAM/MERN Stack</li>
            <li>Server Side Rendered Apps</li>
            <li>Progressive Web Apps</li>
            <li>Multiplayer Game Servers</li>
          </ul>
        </div>
        <div className={styles['cv-section']}>
          <h3>Tech</h3>
          <ul>
            <li>JavaScript, HTML, CSS</li>
            <li>Golang, Python, TypeScript</li>
            <li>React.js, Next.js, Gatsby, Three.js, Pixi.js, p5.js</li>
            <li>Node.js, Express.js, Meteor.js</li>
            <li>DB/Query-Languages: MongoDB, GraphQl, SQL</li>
          </ul>
        </div>
      </div>
    </>
  )
}

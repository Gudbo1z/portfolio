import './project.css'

export default function Projects(){

    return (
        <div className='projects'>
            <h1>PROJECTS</h1>
            <div className='projects-main'>
                <div>
                    <h2 data-aos='fade-right' data-aos-once="true" data-aos-duration="2000">e-commerce shop</h2>
                    <div className='project'>
                        <a href='https://emas-e-commerce.herokuapp.com/'>
                            <img src={require('../img/shop.png')} data-aos='fade-right' data-aos-once="true" data-aos-duration="2000"/>
                        </a>
                        <div className='project-decription' data-aos='fade-left' data-aos-once="true" data-aos-duration="2000">
                            <h2>techs: html, css, reacjs</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 data-aos='fade-right' data-aos-once="true" data-aos-duration="2000">typing speed test</h2>
                    <div className='project'>
                        <a href='https://fuego-typing-test.s3.ap-southeast-1.amazonaws.com/index.html'>
                            <img src={require('../img/typing.png')} data-aos='fade-right' data-aos-once="true" data-aos-duration="2000"/>
                        </a>
                        <div className='project-decription' data-aos='fade-left' data-aos-once="true" data-aos-duration="2000">
                            <h2>techs: html, css, reacjs</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
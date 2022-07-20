import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Image from 'next/image'
import profilePic from '../img/IMG_4104.JPG'
import styleAbout from '../styles/about.module.css'
import C from '../img/programming/c.png'
import Cpp from '../img/programming/cplusplus.png'
import Java from '../img/programming/java.png'
import Html from '../img/programming/html.png'
import JS from '../img/programming/js.png'
import Python from '../img/programming/python.jpeg'

export default function About() {
    return (
        <div className={styleAbout.container}>
            <header>
                <h1 className={styleAbout.title_name}>About Me</h1>
            </header>
            <main>
                <Image src={profilePic} className={styleAbout.img} height={300} width={300} />
                <div className={styleAbout.description}>
                    <h3>JeongHyun Heo</h3>
                    <p>A student, a writer, a musician</p>
                </div>
                <h3>PERSONAL INFORMATION</h3>
                <div className={styleAbout.personal_info}>
                    <h5>DOB: 1997.06.19</h5>
                    <h5>Majoring in:  Computer Science</h5>
                    <div className={styleAbout.skills}>
                        <h4>Skills</h4>
                        <Image src={C} className={styleAbout.img} height={150} width={150}/>&nbsp;&nbsp;&nbsp;
                        <Image src={Cpp} height={150} width={150}/>&nbsp;&nbsp;&nbsp;
                        <Image src={Java} className={styleAbout.img} height={150} width={150}/>&nbsp;&nbsp;&nbsp;
                        <Image src={Html} className={styleAbout.img} height={150} width={150}/>&nbsp;&nbsp;&nbsp;
                        <Image src={JS} className={styleAbout.img} height={150} width={150}/>&nbsp;&nbsp;&nbsp;
                        <Image src={Python} className={styleAbout.img} height={150} width={150}/>
                    </div>
                    <div>
                        <h4>Languages</h4>
                        <h5>Fluent With: English, Korean</h5>
                        <h5>Familiar With: Spanish, Japanese</h5>
                    </div>
                </div>

            </main>
            <footer>
                
            </footer>
        </div>
    );
}

// About.getLayout = function getLayout(page) {
//     return (
//         <Layout>
//             <Sidebar />
//             {page}
//         </Layout>
//     )
// }
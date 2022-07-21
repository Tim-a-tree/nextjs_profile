import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import styleAbout from '../styles/about.module.css'
import Image from 'next/image'
import Archery from '../img/interests/hobby/archery.jpeg'
import Composing from '../img/interests/hobby/Composing.jpeg'
import IceSkating from '../img/interests/hobby/iceskating.jpeg'
import Piano from '../img/interests/hobby/piano.jpeg'
import Swimming from '../img/interests/hobby/swimming.jpeg'
import Violin from '../img/interests/hobby/violin.jpeg'
import Volleyball from '../img/interests/hobby/volleyball.jpeg'
import Writing from '../img/interests/hobby/writing.jpeg'

export default function Interests() {
    return (
        <div className={styleAbout.container}>
            <header>
                <h1 className={styleAbout.title_name}>Interests</h1>
            </header>
            <main>
                <div className={styleAbout.skills}>
                    <h4>Sports</h4>
                    <Image src={Archery} className={styleAbout.img} height={150} width={150} alt="archery" />&nbsp;&nbsp;&nbsp;
                    <Image src={IceSkating} className={styleAbout.img} height={150} width={150} alt="iceskating" />&nbsp;&nbsp;&nbsp;
                    <Image src={Swimming} className={styleAbout.img} height={150} width={150} alt="swimming" />&nbsp;&nbsp;&nbsp;
                    <Image src={Volleyball} className={styleAbout.img} height={150} width={150} alt="volleyball" />&nbsp;&nbsp;&nbsp;
                </div>
                <div className={styleAbout.skills}>
                    <h4>Literature & Music</h4>
                    <Image src={Composing} className={styleAbout.img} height={150} width={150} alt="composing" />&nbsp;&nbsp;&nbsp;
                    <Image src={Piano} className={styleAbout.img} height={150} width={150} alt="piano" />&nbsp;&nbsp;&nbsp;
                    <Image src={Violin} className={styleAbout.img} height={150} width={150} alt="violin"/>&nbsp;&nbsp;&nbsp;
                    <Image src={Writing} className={styleAbout.img} height={150} width={150} alt="writing"/>&nbsp;&nbsp;&nbsp;
                </div>
                <div className={styleAbout.skills}>
                    <h4>I feel most comfortable when......</h4>

                </div>


            </main>
            <footer>

            </footer>
        </div>
    );
}

// Contact.getLayout = function getLayout(page) {
//     return (
//         <Layout>
//             <Sidebar />
//             {page}
//         </Layout>
//     )
// }
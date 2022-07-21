
import Image from 'next/image'
import Archery from '../img/interests/hobby/archery.jpeg'
import Composing from '../img/interests/hobby/composing.jpeg'
import IceSkating from '../img/interests/hobby/iceskating.jpeg'
import Piano from '../img/interests/hobby/piano.jpeg'
import Swimming from '../img/interests/hobby/swimming.jpeg'
import Violin from '../img/interests/hobby/violin.jpeg'
import Volleyball from '../img/interests/hobby/volleyball.jpeg'
import Writing from '../img/interests/hobby/writing.jpeg'

export default function Interests() {
    return (
        <div className="text-center p-16">
            <header>
                <h1 className="text-[48px]">Interests</h1>
            </header>
            <main>
                <div className="p-[50px]">
                    <h4>Sports</h4>
                    <Image src={Archery} className="rounded-[40%]" height={150} width={150} alt="Archery" />&nbsp;&nbsp;&nbsp;
                    <Image src={IceSkating} className="rounded-[40%]" height={150} width={150} alt="Iceskating" />&nbsp;&nbsp;&nbsp;
                    <Image src={Swimming} className="rounded-[40%]" height={150} width={150} alt="Swimming" />&nbsp;&nbsp;&nbsp;
                    <Image src={Volleyball} className="rounded-[40%]" height={150} width={150} alt="Volleyball" />&nbsp;&nbsp;&nbsp;
                </div>
                <div className="p-[50px]">
                    <h4>Literature & Music</h4>
                    <Image src={Composing} className="rounded-[40%]" height={150} width={150} alt="Composing" />&nbsp;&nbsp;&nbsp;
                    <Image src={Piano} className="rounded-[40%]" height={150} width={150} alt="Piano" />&nbsp;&nbsp;&nbsp;
                    <Image src={Violin} className="rounded-[40%]" height={150} width={150} alt="Violin"/>&nbsp;&nbsp;&nbsp;
                    <Image src={Writing} className="rounded-[40%]" height={150} width={150} alt="Writing"/>&nbsp;&nbsp;&nbsp;
                </div>
                <div className="p-[50px]">
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
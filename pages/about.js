import Image from 'next/image'
import profilePic from '../img/IMG_4104.JPG'
import C from '../img/programming/c.png'
import Cpp from '../img/programming/cplusplus.png'
import Java from '../img/programming/java.png'
import Html from '../img/programming/html.png'
import JS from '../img/programming/js.png'
import Python from '../img/programming/python.jpeg'

export default function About() {
    return (
        <div className="text-center p-16">
            <header>
                <h1 className="text-[48px]">About Me</h1>
            </header>
            <main>
                <Image src={profilePic} className="rounded-[40%]" height={300} width={300} alt="profile"/>
                <div className="text-[25px] p-8">
                    <h3>JeongHyun Heo</h3>
                    <p>A student, a writer, a musician</p>
                </div>
                <h3>PERSONAL INFORMATION</h3>
                <div className="p-20 border-dashed border-green-200 divide-dashed">
                    <h5>DOB: 1997.06.19</h5>
                    <h5>Majoring in:  Computer Science</h5>
                    <div className="p-[40px]">
                        <h4>Skills</h4>
                        {/* {[
                            [C],
                            [Cpp],
                            [Java],
                            [Html],
                            [JS],
                            [Python],
                        ].map(([program_lang]) =>(
                            <Image src={program_lang} className="rounded-[40%] spacing-11" height={150} width={150} alt={program_lang}/>
                        ))} */}
                        <Image src={C} className="rounded-[40%]" height={150} width={150} alt="C"/>&nbsp;&nbsp;&nbsp;
                        <Image src={Cpp} className="rounded-[40%]"height={150} width={150} alt="Cpp"/>&nbsp;&nbsp;&nbsp;
                        <Image src={Java} className="rounded-[40%]" height={150} width={150} alt="Java"/>&nbsp;&nbsp;&nbsp;
                        <Image src={Html} className="rounded-[40%]" height={150} width={150} alt="Html"/>&nbsp;&nbsp;&nbsp;
                        <Image src={JS} className="rounded-[40%]" height={150} width={150} alt="JS"/>&nbsp;&nbsp;&nbsp;
                        <Image src={Python} className="rounded-[40%]" height={150} width={150} alt="Python"/>
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
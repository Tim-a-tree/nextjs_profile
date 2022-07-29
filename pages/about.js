import Image from 'next/image'
import Programming from '../components/about-comp'
import Navbar from '../components/navbar'

export default function About() {
    return (
        <div className="md:container md:mx-auto">
            <div className="text-center p-16">
                <header>
                    <h1 className="text-[48px] pb-16">About Me</h1>
                </header>
                <main>
                    <div className='grid grid-cols-2'>
                        <div>
                            <Image src='/IMG_4104.JPG' className="rounded-[40%]" height={500} width={500} alt="profile" />
                            <div className="text-[25px] p-8">
                                <h3>JeongHyun Heo</h3>
                                <p>A student, a writer, a musician</p>
                            </div>
                        </div>
                        <div className='p-5 border-4 ring-1 border-green-200 rounded-[20%]'>
                            <h3>PERSONAL INFORMATION</h3>
                            <div className="p-20">
                                <h5>DOB: 1997.06.19</h5>
                                <h5>Majoring in:  Computer Science</h5>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 border-dashed border-green-200">        
                        <Programming/>
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
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { render } from 'react-dom'

export default function Home({page}) {
        const images = [
                "img/aboutem.png",
                "img/git.png",
                "img/samoyed.jpeg"
        ]

        return (
                <div>
                        <Navbar/>
                        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand" href="">
                                        Navbar
                                </a>
                        </nav> */}
                        {/* <section>
                                <header id="head">
                                        <h1> Welcome to my page!!!!</h1>
                                </header>
                                <p>this is the testing</p>
                                <div class="card">
                                        <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                        </section> */}
                </div>
        );
}

// Home.getLayout = function getLayout(page) {
//         render()
//         return (
//                 <Layout>
//                         <Sidebar />
//                         {page}
//                 </Layout>
//         )
// }
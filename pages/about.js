import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Image from 'next/image'

export default function About() {
    return (
        <section>
            <header>
                <h1>About Me</h1>
            </header>
        </section>
    );
}

About.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            {page}
        </Layout>
    )
}
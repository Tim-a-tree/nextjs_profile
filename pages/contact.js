
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Contact() {
    return (
        <section>
            <header id="head">
                <h1>How to Contact Me</h1>
            </header>
        </section>
    );
}

Contact.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            {page}
        </Layout>
    )
}

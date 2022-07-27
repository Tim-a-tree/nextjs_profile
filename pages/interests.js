
import Image from 'next/image'

export default function Interests() {
    return (
        <div className="text-center p-16">
            <header>
                <h1 className="text-[48px]">Interests</h1>
            </header>
            <main>
                <div className="p-[50px]">
                    <h4>Sports</h4>
                    <Image src='/interests/hobby/archery.jpeg' className="rounded-[40%]" height={150} width={150} alt="Archery" />&nbsp;&nbsp;&nbsp;
                    <Image src='/interests/hobby/iceskating.jpeg' className="rounded-[40%]" height={150} width={150} alt="Iceskating" />&nbsp;&nbsp;&nbsp;
                    <Image src='/interests/hobby/swimming.jpeg' className="rounded-[40%]" height={150} width={150} alt="Swimming" />&nbsp;&nbsp;&nbsp;
                    <Image src='/interests/hobby/volleyball.jpeg' className="rounded-[40%]" height={150} width={150} alt="Volleyball" />&nbsp;&nbsp;&nbsp;
                </div>
                <div className="p-[50px]">
                    <h4>Literature & Music</h4>
                    <Image src='/interests/hobby/composing.jpeg' className="rounded-[40%]" height={150} width={150} alt="Composing" />&nbsp;&nbsp;&nbsp;
                    <Image src='/interests/hobby/piano.jpeg' className="rounded-[40%]" height={150} width={150} alt="Piano" />&nbsp;&nbsp;&nbsp;
                    <Image src='/interests/hobby/violin.jpeg' className="rounded-[40%]" height={150} width={150} alt="Violin"/>&nbsp;&nbsp;&nbsp;
                    <Image src='/interests/hobby/writing.jpeg' className="rounded-[40%]" height={150} width={150} alt="Writing"/>&nbsp;&nbsp;&nbsp;
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
import React, { FC, ReactElement, useEffect, useState } from "react";
import Image from 'next/image'

// function importAll() {
//         let images = {};
//         Folder.keys().map((item, index) => { images[item.replace('../imgs/programming', '')] = r(item); });
//         return images;
// }

// const images = importAll(require.context('../imgs/programming', false, /\.(png|jpe?g|svg)$/));

const Programming_Skills = () => {

        // return (
        //         <Image src={images.map(_ => {
        //                 for (let i = 0; i < images.length; i++)
        //                 {
        //                         "/{image{i}}"
        //                 }
        //         })} height={150} width={150} alt="pics"/>
        // )

        return (
                <div className="p-[40px]" >
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
                        <Image src='/programming/c.png' className="rounded-[40%]" height={150} width={150} alt="C" /> &nbsp;&nbsp;&nbsp;
                        <Image src='/programming/cplusplus.png' className="rounded-[40%]" height={150} width={150} alt="Cpp" /> &nbsp;&nbsp;&nbsp;
                        <Image src='/programming/java.png' className="rounded-[40%]" height={150} width={150} alt="Java" /> &nbsp;&nbsp;&nbsp;
                        <Image src='/programming/html.png' className="rounded-[40%]" height={150} width={150} alt="Html" /> &nbsp;&nbsp;&nbsp;
                        <Image src='/programming/js.png' className="rounded-[40%]" height={150} width={150} alt="JS" /> &nbsp;&nbsp;&nbsp;
                        <Image src='/programming/python.jpeg' className="rounded-[40%]" height={150} width={150} alt="Python" />
                </div >
        )
}

export default Programming_Skills;
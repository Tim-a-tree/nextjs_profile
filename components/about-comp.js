import React, { FC, ReactElement, useEffect, useState } from "react";
import Image from 'next/image'
import Folder from '../img/programming';

function importAll() {
        let images = {};
        Folder.keys().map((item, index) => { images[item.replace('../imgs/programming', '')] = r(item); });
        return images;
}

const images = importAll(require.context('../imgs/programming', false, /\.(png|jpe?g|svg)$/));

const Programming_Skills = () => {

        return (
                <Image src={images.map(_ => {
                        for (let i = 0; i < images.length; i++)
                        {
                                "/{image{i}}"
                        }
                })} height={150} width={150}/>
        )
}

export default Programming_Skills;
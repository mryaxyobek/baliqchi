import React, { useEffect } from 'react';
// images
import hujjat from '../assets/images/other/hujjat.png';
const HuquqiyHujjatlar = () => {
    const siteLink = window.location.origin;

    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi | Huquqiy hujjatlar';
    });
    return (
        <div className='py-12 max-800:py-10 max-550:pt-6'>
            <div className='container'>
                <h1 className="mb-8">Normativ huquqiy hujjatlar</h1>
                <img width={900} height={487} src={hujjat} alt="hujjat" className='mb-6 w-[900px] h-auto max-950:w-full' />
                <a href={`${siteLink}/src//assets/images/other/hujjat.png`} download className="rounded-full border border-gray-400 py-3 px-6">Rasmni yuklab olish</a>
            </div>
        </div>
    )
}

export default HuquqiyHujjatlar
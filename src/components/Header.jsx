import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Space } from 'antd';

// images
import flag from '../assets/images/other/uzbekistan-flag.png';
import coatOfArms from '../assets/images/other/coat-of-arms-of-uzbekistan.png';
import down from '../assets/images/svg/down.svg';
import hamburger from '../assets/images/svg/hamburger-menu.svg';
import cross from '../assets/images/svg/cross.svg';
const Header = () => {

    const [openNavbarMenu, setOpenNavbarMenu] = useState(false);

    const items = [
        {
            key: 0,
            label: (
                <Link to='/news' className="text-base font-medium">Yangiliklar</Link>
            ),
        },
        {
            key: 1,
            label: (
                <Link to='/events' className="text-base font-medium">Tadbirlar</Link>
            ),
        }
    ];

    return (
        <div>

            <header className='py-5 mb-12 max-950:mb-10 max-550:mb-8 max-550:py-4'>
                <div className="max-w-[1280px] w-full px-5 mx-auto flex items-center justify-between max-dm:mb-5">

                    {/* Logo */}
                    <Link to='/' className='flex gap-2 items-center'>
                        <img src={coatOfArms} alt="flag" className="w-16 h-16 max-550:w-12 max-550:h-12 max-[350px]:hidden" />
                        <img src={flag} alt="flag" className="w-[3px] h-14 rounded-[1px] max-550:h-8 max-[350px]:hidden" />
                        <div>
                            <h1 className="font-bold text-xl max-550:text-lg">Baliqchi hokimiyati</h1>
                            <p className="text-base font-normal">Rasmiy web sayti</p>
                        </div>
                    </Link>
                    {/* overlay */}
                    <div onClick={() => setOpenNavbarMenu(false)} className={`${openNavbarMenu ? 'block' : 'hidden'} fixed z-10 min-w-full h-screen bg-black bg-opacity-75 top-0 right-0`}></div>

                    {/* Nav */}
                    <div className={`${openNavbarMenu ? 'translate-x-0' : 'max-950:translate-x-full'} flex flex-col z-20 max-950:fixed max-950:top-0 max-950:right-0 max-950:bg-white max-950:pl-20 max-950:pr-10 max-950:py-6 max-950:h-screen gap-5 transition-all duration-300`}>
                        <button onClick={() => setOpenNavbarMenu(false)} className="hidden max-950:block ml-auto">
                            <img src={cross} alt="cross" className="w-8 h-8" />
                        </button>
                        <nav>
                            <ul className="flex items-center gap-4 max-950:flex-col max-950:items-end">
                                <li>
                                    <Link to='/' className="underline-offset-2">Bosh sahifa</Link>
                                </li>
                                <li>
                                    <Link to='/about' className="underline-offset-2">Haqida</Link>
                                </li>
                                <li>
                                    <Link to='/managers' className="underline-offset-2">Rahbariyat</Link>
                                </li>
                                <li>
                                    <Link to='/news' className="underline-offset-2">Yangiliklar</Link>
                                </li>
                                <li>
                                    <Link to='/contact' className="underline-offset-2">Bog'lanish</Link>
                                </li>
                                <li>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                    >
                                        <Space className='cursor-pointer'>
                                            <span className='font-medium !font-[montserrat] text-base'>Matbuot</span>
                                            <img width={24} height={24} src={down} alt="down outline icon" className="" />
                                        </Space>
                                    </Dropdown>
                                </li>
                            </ul>
                        </nav>
                        <a href="tel:+9987776655" className="hidden w-full py-3 px-6 text-white rounded-full bg-[#2E4374] text-sm max-950:block">Qo'ng'iroq qilish</a>
                    </div>

                    <a href="tel:+9987776655" className="py-3 inline-block px-6 text-white rounded-full bg-[#2E4374] text-sm max-1130:hidden">Qo'ng'iroq qilish</a>


                    <button onClick={() => setOpenNavbarMenu(!openNavbarMenu)} className="hidden max-950:block">
                        <img src={hamburger} alt="hamburger" className="w-10 h-10" />
                    </button>

                </div>
            </header>
        </div>
    )
};

export default Header;
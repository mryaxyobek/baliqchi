import React, { useEffect } from 'react';

// images
import coatOfArms from '../assets/images/other/coat-of-arms-of-uzbekistan.png';
import map from '../assets/images/other/baliqchi-map.png';
import peoples from '../assets/images/other/peoples.jpg';
import nature from '../assets/images/other/baliqchi-nature.jpg';
const About = () => {
    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi | Haqida';
    });
    return (
        <section className='py-14'>
            <div className='flex flex-col w-full max-w-[1280px] mx-auto px-5'>
                {/* hero */}
                <div className="flex items-center gap-4 justify-center flex-col mx-auto text-center mb-10">
                    <img src={coatOfArms} alt="" className="w-20 h-20" />
                    <h1>Baliqchi tumani</h1>
                    <p className="italic max-w-xl">Baliqchi tumani to‘g‘risida umumiy barcha ma’lumotlar</p>
                </div>


                {/* contents */}
                <div className="space-y-5 mb-10 max-450:mb-8">
                    <h2>Haqida</h2>
                    <p>Baliqchi tumani 1962- yil 24- dekabrda tashkil topgan bo‘lib, Andijon viloyatining ma’muriy-hududiy birligi hisoblanadi. <br /> Baliqchi tumani hududiy yer maydoni 0,34 ming kv km. Baliqchi tumani ma’muriy hududiy tarkibi bo‘yicha 44 ta qishloq aholi punkti, 66 ta mahalla fuqarolar yig‘inidan iborat. Baliqchi tumani Namangan viloyati (79 km), Ulug‘nor tumani (20 km), Bo‘ston tumani (1,8 km), Oltinko‘l tumani (36,2 km) Izboskan tumani (18,5 km) va Shahrixon tumanlari bilan (20 km) chegaradosh.</p>
                </div>

                <div className="space-y-5 mb-10 max-450:mb-8">
                    <h2>Aholisi</h2>
                    <p>Baliqchi tumanida 53,4 mingta oilalar mavjud. 2023- yilning 1- yanvar holatiga Baliqchi tuman aholisi soni viloyat doimiy aholisining (3 322,7 ming kishi) 6,4 foizini yoki 211,3 ming kishini tashkil etadi. Shundan, 70,7 ming kishi shahar joylarida va 140,6 ming kishi qishloq joylarida istiqomat qiladi. Aholi zichligi 1 kv km uchun 621 kishiga to‘g‘ri keladi.</p>
                    <p>Aholisi, asosan o'zbeklar; ruslar, tatarlar, tojiklar, uyg'urlar va b. ham yashaydi. 1 km2 ga 416 kishi to'g'ri keladi.</p>
                    <img src={peoples} alt="" className="w-96 h-56 object-cover rounded-md max-450:w-full" />
                </div>



                <div className="space-y-5 mb-10 max-450:mb-8">
                    <h2>Tabiati</h2>
                    <p>Tuman hududi tekisliklardan iborat. Yanv.ning o'rtacha temperaturasi —4°, iyulniki 26°. Yiliga o'rtacha 195 — 210 mm yog'in tushadi. Vegetatsiya davri 235 kun. Tuman hududidan Qoradaryo, Mazgilsoy, Chinobodsoy va Katta Andijon kanali oqib o'tadi. Tuprog'i o'tloqi bo'z, kuchsiz sho'rlangan tuproq. <br /><br /> O'simliklardan sho'ra, shuvoq, momaqaymoq, qamish, mingdevona, yantoq, ajriq, yulg'un, oqbosh, otquloq, qirq-bo'g'in, g'umay, qo'ypechak, yalpiz o'sadi. Echkemar, toshbaqa, tulki, quyon, ilon, kaltakesak, qushlardan laylak, o'rdak, chumchuq, so'fito'rg'ay, qarg'a, musicha yashaydi.</p>
                    <img src={nature} alt="nature" className="w-96 h-56 object-cover rounded-md max-450:w-full" />
                </div>


                <div className="space-y-5 mb-10 max-450:mb-8">
                    <h2>Xo'jaligi</h2>
                    <p>Tuman, asosan, paxtachilik va g'allachilikka ixtisoslashgan. Tumanda 6 sanoat korxonasi bor: Baliqchi noto'qima matolar i.ch. aksiyadorlik jamiyati, Alisher Navoiy nomidagi Interneyshnl O'zbek-Amerika qo'shma korxonasi, Chinobod paxta tozalash aksiyadorlik jamiyati, Baliqchi noto'qima matolar ishlab chiqarish aksiyadorlik jamiyati korxonasining ip o'rash sexidasport buyumlari i.ch. aksiyadorlik jamiyati, Baliqchi non i.ch. aksiyadorlik jamiyati, „Baliqchi tongi“ aksiyadorlik jamiyati. <br /> 2 mexanizatsiyalashgan Ko'chma aksiyadorlik jamiyati bo'lib, biri suv inshootlari qurish va yangi yerlarni o'zlashtirish bilan shug'ullanadi, ikkinchisi xo'jaliklararo qurilish boshqarmasi. Bo'rdoqchilik bazasi, Baliqchi va Chinobod mashina traktor parklari mavjud. <br /> Tumanda Baliqchi matlubot aksiyadorlik jamiyati, Chinobod matlubot aksiyadorlik jamiyati faoliyat ko'rsatadi. Tumanda 1 ta qo'shma korxona, mingdan ortiq kichik va xususiy korxona mavjud. Bulardan eng mashhurlari: „Muhammad“ savdo va i.ch. firmasi, „Nargiz“ firmasi, „Navro'z — 9“ savdo i.ch. firmasi, Chinobod fermer xo'jaligi. Xo'jaliklar chorvachilik, bog'dorchilik, pillachilik, polizchilik, sabzavotchilik va sholikorlik bilan shug'ullanadi. <br /> Q. x.da sug'oriladigan yerlar 23,0 ming ga, ekinzorlar 19,0 ming ga, shu jumladan 11,3 ming ga yerga paxta, 6,0 ming ga yerga bug'doy, 0,3 ming ga yerga sabzavot, 0.05 ming ga yerga kartoshka, 1,3 ming ga yerga yem-xashak ekinlari ekiladi. <br /> B. t.da 19 jamoa va shirkat xo'jaligi, 525 fermer xo'jaligi bor. Xayrixon Ergasheva nomidagi, „Chinobod“, „Paxtakor“, „O'zbekiston“. <br /> A. Mo'minov nomidagi. „Bo'ston“, Ulug'bek nomidagi shirkat xo'jaliklari tumandagi yirik va mashhur xo'jaliklardir. Baliqchi tumani 2000-2019-yillarda davlatga qariyb 1.2 million tonna paxta, 1.5 million tonnadan ortoq bug'doy topshirib, shartnoma rejasini ortig'i bilan bajardi. Tuman jamoa va shaxsiy xo'jaliklarida 37,9 ming qoramol, 26,7 ming quy va echki, 70,1 ming parranda boqiladi. Yaqin temir yo'l stansiyasi — Haqqulobod (tuman markazidan 29 km). <br /> 1999/2000 o'quvHayrixon Ergasheva nomidagi shirkat xo'jaligining paxta dalalarida yilida 52 umumiy ta'lim maktabi bo'lib, 32,7 ming o'quvchi, 1 gimnaziyada 252 o'quvchi, 1 akademik litseyda 207 o'quvchi, 1 maxsus maktab-internatda 250 o'quvchi, 2 kollejda 1200 o'quvchi, 1 iqtisodiyot litseyida 251 o'quvchi ta'lim oldi. Madaniyat saroyi, markaziy kutubxona, musiqa maktabi, 50 ommaviy kutubxona, 13 madaniyat uyi, ijodkorlar uyi, 2 ko'chma klub, 740 o'rinli 4 kasalxona va dispanser, 10 qishloq ambulatoriyasi, 350 o'rinli bolalar va o'smirlar sport maktabi, 200 o'rinli bolalar musiqa va san'at maktabi, 42 tibbiyot punkti bo'lib, ularda 250 vrach, 1996 nafar o'rta ma'lumotli tibbiy xodim ishladi (2000). 1932-yildan „G'alaba“ tuman gazetasi chiqadi (adadi 3000).</p>
                </div>


                <div className="space-y-5 mb-10 max-450:mb-8">
                    <h2>Geografiyasi</h2>
                    <p>Baliqchi tumani hududi tekisliklardan iborat. Yanvarning o'rtacha harorati — minus 4 daraja, iyulniki — 26 daraja. Yiliga o'rtacha — 195-210 mm yog'in tushadi. Vegetatsiya davri — 235 kun. <br /> Tuman hududidan Qoradaryo, Mazg'ilsoy, Chinobodsoy va Katta Andijon kanali oqib o'tadi. Tuprog'i o'tloqi bo'z, kuchsiz sho'rlangan tuproq, o'simliklardan sho'ra, shuvoq, momaqaymoq, qamish, mingdevona, yantoq, yulg'un, oqbosh, otquloq, qirqbo'g'in, g'umay, qo'ypechak, yalpiz o'sadi. Echkiemar, toshbaqa, tulki, quyon, ilon, kaltakesak, qushlardan laylak, o'rdak, chumchuq, so'fito'rg'ay, qarg'a, musicha uchraydi.</p>
                    <img src={map} alt="map" className="w-96 h-56 object-cover rounded-md max-450:w-full" />
                </div>
            </div>
        </section>
    )
};

export default About;
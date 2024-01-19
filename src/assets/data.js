import { v4 as randomId } from "uuid";
import {
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
    new8,
    new9,
} from "../assets/images";

export const news = [
    {
        id: randomId(),
        title:
            "Andijon viloyati hokimi suvchilarga 64 mln so‘m tarqatdi, bu homiylik mablag‘lari ekani aytilmoqda ",
        subTitle:
            "Shuhrat Abdurahmonov ko‘chada ishlayotgan suvchilarni ko‘rgach, 64 million so‘m naqd pulni olib, 16 nafar suvchiga 4 million so‘mdan tarqatgan. ",
        image: new1,
        description: [
            "Andijon viloyati hokimi Shuhratbek Abdurahmonov suvchilarga 4 million so‘mdan mukofot puli berdi. Bu haqdagi video hokimning Telegram-kanalida e’lon qilindi. ",
            "«Shuhratbek Abdurahmonov ichimlik suvi ta’minotidagi nosozliklarni bartaraf etayotgan ishchi xodimlarga 4 million so‘mdan mukofot pullarini topshirdi», deyiladi xabarda. ",
            "Qayd qilinishicha, Shuhrat Abdurahmonov ko‘chada ishlayotgan suvchilarni ko‘rgach, 64 million so‘m naqd pulni olib, 16 nafar suvchiga 4 million so‘mdan tarqatgan. ",
        ],
        date: new Date(2023, 11, 25),
    },
    {
        id: randomId(),
        title: "BAA Andijonda arab tajribasi asosida bog‘ yaratmoqda",
        subTitle:
            "Qishloq xo‘jaligi vazirligi huzuridagi Qishloq xo‘jaligida xizmatlar ko‘rsatish agentligi va Birlashgan Arab Amirliklari hamkorligida Andijon viloyati Paxtaobod tumani hududida 470 gektar yer maydonida bog‘ yaratilmoqda.",
        image: new2,
        description: [
            "Loyihaning birinchi bosqichida maydonning 20 gektar qismiga golubika rezavori sinov tariqasida tuvaklarda yetishtirilmoqda. Maydon hududi to‘liq tomchilatib sug‘orish tizimi bilan ta’minlangan.",
            "Loyiha to‘liq ishga tushgach 2000 ta yangi ish o‘rni yaratiladi. Ushbu rezavor issiqlikka chidamsiz bo‘lgani bois kelgusida maxsus to‘rlar bilan himoyalanadi. Bir gektar maydonga 4000 tup ekilishi natijasida o‘rtacha 400-500 tonna hosil olinishi kutilmoqda.",
            "Qiymati 30 mln AQSh dollariga teng mazkur loyiha doirasida golubika bilan birga, malina va sabzavot mahsulotlarini ham yetishtirish rejalashtirilgan.",
        ],
        date: new Date(2024, 0, 12),
    },
    {
        id: randomId(),
        title: "Andijon va Farg‘onada elektrobus ishlab chiqarish boshlanadi",
        subTitle:
            "Farg‘onada DongFeng Special Car kompaniyasi bilan hamkorlikda yiliga 1000 ta, Andijonda Lanzhou Guangtong New Energy Automobile kompaniyalari bilan hamkorlikda 2000 ta elektrobuslar ishlab chiqarish yo‘lga qo‘yiladi.",
        image: new3,
        description: [
            "Transport vazirining birinchi o‘rinbosari Mamanbiy Omarov Xitoyning DongFeng bosh direktori Van Pen bilan uchrashuv o‘tkazdi. Bu haqda “Dunyo” AA xabar berdi.",
            "Qayd etilishicha, uchrashuvda jamoat transporti tizimini rivojlantirish bo‘yicha amalga oshirilayotgan loyihalar, mavjud ehtiyojlar va harakat tarkibini zamonaviy avtobus va mikroavtobuslar bilan yangilash zarurati yuzasidan fikr almashilgan.",
            "DongFeng Special Car kompaniyasi bilan hamkorlikda Farg‘ona viloyati Furqat tumanida 2 bosqichda, umumiy qiymati 100 mln dollarga teng bo‘lgan, yiliga 1000 dona elektrobuslar ishlab chiqarish loyihasini amalga oshirish rejalashtirilgan.",
            "Bundan tashqari, Andijon viloyati hokimi Shuhrat Abdurahmonov boshchiligidagi delegatsiya  O‘zbekistonning Xitoydagi elchixonasida Lanzhou Guangtong New Energy Automobile rahbariyati bilan uchrashuv o‘tkazib, qiymati 100 mln dollarlik ikki tomonlama memorandum imzoladi.",
        ],
        date: new Date(2024, 0, 9),
    },
    {
        id: randomId(),
        title:
            "Xalq dеputatlari Andijon viloyati Kеngashining navbatdagi 58-sеssiyasi bo'lib o'tdi.",
        subTitle:
            "Xalq dеputatlari Andijon viloyati Kеngashining navbatdagi 58-sеssiyasi bo'lib o'tdi.",
        image: new4,
        description: [
            "Sеssiya kun tartibiga kiritilgan masalalar yuzasidan tеgishli boshqarmalar mas'ullarining hisobotlari tinglanib, qaror loyihalari tasdiqlandi.",
        ],
        date: new Date(2024, 0, 18),
    },
    {
        id: randomId(),
        title: "Andijonda yangi GESlar quriladi",
        subTitle:
            "Viloyatimiz rahbari Xitoyning «Hydropower Renewable Energy» kompaniyasi vakillari bilan uchrashuv o'tkazdi.",
        image: new5,
        description: [
            "Unda Andijondagi bir nеchta hududlarda gidroelеktrostansiyalar qurish bo'yicha rеjalar muhokama etildi va amaliy ishlar boshlanish arafasida.",
        ],
        date: new Date(2024, 0, 17),
    },
    {
        id: randomId(),
        title: "Farm loyihalari taqdimoti bo'lib o'tdi",
        subTitle:
            "Andijon viloyatida Xitoy hamkorligida amalga oshirilayotgan farmasеvtika loyihalari bo'yicha taqdimot bo'lib o'tdi.",
        image: new6,
        description: [
            "Ushbu loyihalar import o'rini bosuvchi dori-darmonlarni ishlab chiqarishga mo'ljallangan bo'lib, umumiy qiymati 40 million dollarni tashkil etadi.",
            "Xususan, ushbu loyihalarni amalga oshirish orqali import qilinayotgan 2 milliard dollar qiymatdagi dori-darmon vositalarini viloyatimizning o'zida ishlab chiqarish imkoniyati paydo bo'ladi.",
        ],
        date: new Date(2024, 0, 16),
    },
    {
        id: randomId(),
        title: "Yoshlar qo'llab-quvvatlanmoqda",
        subTitle: "Yoshlar qo'llab-quvvatlanmoqda",
        image: new7,
        description: [
            "Viloyatimiz hokimi Andijondagi oliy ta'lim muassasalarida tahsil olayotgan Qoraqalpog'iston yoshlari bilan muloqot o'tkazdi.",
        ],
        date: new Date(2024, 0, 14),
    },
    {
        id: randomId(),
        title: "ugun Andijonda “Hokimlik soati” yig'ilishi bo'lib o'tdi.",
        subTitle:
            "Mazkur yig'ilish 2024 yilda bеlgilab olingan vazifalar hamda hafta davomida oldimizda turgan dolzarb masalalarga qaratildi.",
        image: new8,
        description: [
            "Mazkur yig'ilish 2024 yilda bеlgilab olingan vazifalar hamda hafta davomida oldimizda turgan dolzarb masalalarga qaratildi.",
        ],
        date: new Date(2024, 0, 17),
    },
    {
        id: randomId(),
        title: "Xonobodda 6 gеktarlik quyosh panеli stansiyasi quriladi",
        subTitle: `Xitoylik invеstorlar Xonobod shahrida joylashgan "Kampirrovot" suv inshootida bo'ldilar. Ushbu inshootda ombordagi suvlar 24 soat davomida filtrlanib, ko'plab hududlarga toza ichimlik suvi sifatida еtkazib bеriladi.`,
        image: new9,
        description: [
            "Endi ombor yaqinidagi 6 gеktar yеr maydonida quyosh panеli stansiyasi barpo etilib, suv inshootining elеktr sarfi to'laqonli shaklda yashil enеrgiyaga o'tkaziladi.",
            "Invеstorlar bu hududdagi shart-sharoitlarni yaqindan o'rgandilar va yuqoridagi rеja asosida dastlabki ishlar boshlandi.",
        ],
        date: new Date(2024, 0, 13),
    },
];


import kambagallik from './links-img/kambagallik.png'
import qurilish from './links-img/qurilish.jpg'
import investitsiya from './links-img/investitsiya.png'
import suv from './links-img/suv.jpg'
import yoshlar from './links-img/yoshlar.png'
import xotin from './links-img/xotin.png'
import lex from './links-img/lex.png';
import adliya from './links-img/adliya.svg';
import mygov from './links-img/mygov.png';
import gerb from './links-img/gerb.png'
import hokim from './links-img/hokim.png'

// boribosarlar
export const orinbosarlar = [
    {
        id: 0,
        qabulKuni: 'Shanba',
        boshlashVaqti: '9:00',
        tugatishVaqti: '11:00',
        telephone: '+998998887766',
        img: hokim,
        ismi: "Jasur Abduraimov",
        lavozim: 'Hokim',
        yili: 1972,
        malumoti: 'oliy',
        universitet: "Andijon muhandislik iqtisodiyot instituti"
    },
    {
        id: 1,
        qabulKuni: 'Dushanba',
        boshlashVaqti: '8:00',
        tugatishVaqti: '18:00',
        telephone: '+9989999002817',
        img: kambagallik,
        ismi: "Yulchiyev Boburmirzo Umarovich",
        lavozim: `O'rinbosar`,
        yili: 1972,
        malumoti: 'oliy',
        universitet: "Andijon muhandislik iqtisodiyot instituti"
    },
    {
        id: 2,
        qabulKuni: 'Seshanba',
        boshlashVaqti: '8:00',
        telephone: '+9989941144942',
        tugatishVaqti: '18:00',
        img: qurilish,
        yili: 1973,
        ismi: "Mamatov Muzaffar Nabievich",
        lavozim: `O'rinbosar`,
        malumoti: 'oliy',
        universitet: "Farg'ona politexnika instituti"
    },
    {
        id: 3,
        qabulKuni: 'Chorshanba',
        boshlashVaqti: '8:00',
        telephone: '+9989990173399',
        tugatishVaqti: '18:00',
        img: investitsiya,
        lavozim: `O'rinbosar`,
        yili: 1991,
        ismi: "Abdulxomidov Saydullo Abdillojon o'gli",
        malumoti: 'oliy',
        universitet: "Andijon qishloq xo'jaligi instuti"
    },
    {
        id: 4,
        qabulKuni: 'Payshanba',
        boshlashVaqti: '8:00',
        telephone: '+9989932588570',
        tugatishVaqti: '18:00',
        img: suv,
        lavozim: `Baliqchi tuman hokimining o'rinbosari - tuman investitsiyalar va tashqi savdo bo'limi boshlig'i`,
        yili: 1969,
        ismi: "Jo'rayev Latifjon Muhammadjonovich",
        malumoti: 'oliy',
        universitet: "Volgograd qishloq xo'jaligi instuti"
    },
    {
        id: 5,
        qabulKuni: 'Juma',
        boshlashVaqti: '8:00',
        telephone: '+9989993081308',
        tugatishVaqti: '18:00',
        img: yoshlar,
        yili: 1988,
        lavozim: `Baliqchi tuman hokimining qishloq va suv xo'jaligi masalalari bo'yicha o'rinbosari`,
        ismi: "Rahmonov Ahrorbek Rahmatillayevich",
        malumoti: 'oliy',
        universitet: "Andijon davlat universiteti"
    },
    {
        id: 6,
        qabulKuni: 'Shanba',
        boshlashVaqti: '8:00',
        telephone: '+9989996503060',
        tugatishVaqti: '18:00',
        img: xotin,
        yili: 1976,
        lavozim: `Baliqchi tuman hokimining yoshlar siyosati, ijtimoiy rivojlantirish va manaviy-marifiy ishlar bo'yicha o'rinbosari`,
        ismi: "Hojimatova Mohichexra Abdullaevna",
        malumoti: 'oliy',
        universitet: "Andijon qishloq xo'jaligi instituti"
    },
];


export const links = [
    {
        id: 1,
        qabulKuni: '',
        boshlashVaqti: '8:00',
        telephone: '+9989',
        tugatishVaqti: '18:00',
        img: gerb,
        title: 'gov.uz',
        description: 'Oʻzbekiston Respublikasi Hukumat Portali',
        url: 'https://gov.uz/uz/'
    },
    {
        id: 2,
        qabulKuni: '',
        boshlashVaqti: '8:00',
        telephone: '+9989',
        tugatishVaqti: '18:00',
        img: lex,
        title: 'Lex.uz',
        description: 'Oʻzbekiston Respublikasi Qonun hujjatlari maʼlumotlari milliy bazasi',
        url: 'https://lex.uz/uz/'
    },
    {
        id: 3,
        qabulKuni: '',
        boshlashVaqti: '8:00',
        telephone: '+9989',
        tugatishVaqti: '18:00',
        img: adliya,
        title: 'minjust.uz',
        description: 'O‘zbekiston Respublikasi Adliya Vazirligi',
        url: 'https://adliya.uz/'
    },
    {
        id: 4,
        qabulKuni: '',
        boshlashVaqti: '8:00',
        telephone: '+9989',
        tugatishVaqti: '18:00',
        img: mygov,
        title: 'my.gov.uz',
        description: 'Yagona interaktiv davlat xizmatlari portali',
        url: 'https://my.gov.uz/oz'
    },
    {
        id: 5,
        qabulKuni: '',
        boshlashVaqti: '8:00',
        telephone: '+9989',
        tugatishVaqti: '18:00',
        img: gerb,
        title: 'https://senat.uz/ru',
        description: "O'zbekiston Respublikasi Oliy Majlisi Senati",
        url: 'https://senat.uz/ru'
    }
];
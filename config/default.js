import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "CFP DON BOSCO"
export const siteTitle = "CFP DON BOSCO - San Donà di Piave"
export const siteDescription = "Sito ufficiale del Centro di Formazione Professionale don Bosco di San Donà di Piave"

export const menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
    { title: 'Trasparenza', url: '/trasparenza' },
]


const menuFooter = [
    { title: 'I nostri vinili', url: '/vinile' },
    { title: 'Chi siamo', url: '/siamo' },
    { title: 'Home', url: '/' },
]

const socials = [
    { title: 'Facebook', imageUrl: 'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { title: '', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hs2ntr2bxMWrznDXFabAGKzNuEqH4zJNRayiPjtPvaSiw5zvnY8SiMbJ4-t8sQY9To4&usqp=CAU', },
    { title: '', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCzzjO4DzO74reWiiVtecwxet4UPQfY2NdQ&usqp=CAU', },
    { title: '', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqCODAV09dgZyKpF1J20bsHAdnC05z-A-6w&usqp=CAU', },
    { title: '', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4nszWjW0WfKyVfBLh8eu1o3SbCJ6Le84UeZ01s_PCt1daYsgWcFr2HW3iEoKVOb8-IA&usqp=CAU', },
    { title: '', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPgeraPP6NsqWykuyaTUhgY-702lUZxaDzg&usqp=CAU', },
    { title: '', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN5DCnVZXUBSGztIzJj3A2zt_k5CgYii9bg&usqp=CAU', },
]

export const footer = <Footer
    imageUrl="https://source.unsplash.com/random"
    color="#272727"
    opacitycolor="1"
    opacity={1}
    title1="About Us"
    description1="Quanto costa una scuola di musica? 
    Ogni scuola di musica applica dei prezzi che possono variare in base alla tipologia di servizi, ma in generale le scuole di musica applicano una tariffa per i corsi che va dai 20 ai 30 euro all'ora. 
"
    title2="Social Feed"
    socials={socials}
    title3="I Settori"
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>
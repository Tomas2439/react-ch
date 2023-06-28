const productos = [
    {
        id:'1',
        name: 'Figura Zoro Wano - One Piece',
        price: 15000,
        category: 'Figuras',
        img: 'https://http2.mlstatic.com/D_NQ_NP_735628-MLA47692664795_092021-O.webp',
        stock: 16,
        description:' Figura del personaje Zoro del anime One Piece. Tamaño 15cm. Bandai.'
    },
    {
        id:'2',
        name: 'Figura Gojo Satoru - Jujutsu Kaisen',
        price: 17000,
        category: 'Figuras',
        img: 'https://http2.mlstatic.com/D_NQ_NP_903313-MLA50547529731_072022-O.webp',
        stock: 10,
        description:' Figura de Gojo Satoru del anime Jujutsu Kaisen. Tamaño 19cm. PopUP.'
    },
    {
        id:'3',
        name: 'Manga Tokyo Revengers Vol. 14',
        price: 2000,
        category: 'Mangas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_882854-MLA54072465450_022023-O.webp',
        stock: 10,
        description:' Manga de Tokyo Revengers. Volumen 14. Editorial Ivrea.'
    },
    {
        id:'4',
        name: 'Figura Shigaraki Tomura - BNHA',
        price: 12000,
        category: 'Figuras',
        img: 'https://http2.mlstatic.com/D_NQ_NP_725184-MLA48975670293_012022-O.webp',
        stock: 10,
        description:' Figura de Shigaraki Tomura del anime Boku No Hero Academia. Tamaño 20cm. Bandai.'
    },
    {
        id:'5',
        name: 'Manga Blue Lock Volumen 1',
        price: 2900,
        category: 'Mangas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_779509-MLA49707437522_042022-O.webp',
        stock: 10,
        description:' Manga de Blue Lock. Volumen 1. Editorial Ivrea.'
    },
    {
        id:'6',
        name: 'Colección Demon Slayer + Caja Nezuko',
        price: 30000,
        category: 'Coleccion',
        img: 'https://http2.mlstatic.com/D_NQ_NP_622965-MLA53930568412_022023-O.webp',
        stock: 5,
        description:' Colección completa de Demon Slayer. 23 Tomos manga. Caja para guardar los tomos. 32 stickers. 16 posters. 8 pines. Editorial Ivrea.'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(productos)
        },500)
    })
}

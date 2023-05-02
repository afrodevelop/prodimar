import {SVGDelivery, SVGDiscount, SVGEmptyCart, SVGEnviroment} from "~/svgs";

export const NavigationData = {
  categories: [
    {
      id: 'category1',
      name: 'Papeleria',
      featured: [
        {
          name: 'Mercancia nueva',
          href: '/category',
          imageSrc: 'https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1424&q=80',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Básicos de Prodimar',
          href: '/category',
          imageSrc: 'https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accesorios',
          href: '/category',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
          imageSrc: 'https://images.unsplash.com/photo-1501889967782-18b135710152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
        },
      ],
      sections: [
        [
          {
            id: 'office',
            name: 'Productos',
            items: [
              { name: 'Cuadernos', href: '/category' },
              { name: 'Colores', href: '/category' },
              { name: 'Libretas', href: '/category' },
              { name: 'Foamis', href: '/category' },
              { name: 'Lapices', href: '/category' },
              { name: 'Marcadores', href: '/category' },
            ],
          },
          {
            id: 'Descuento',
            name: 'Descuento',
            items: [
              { name: 'Compaces', href: '/category' },
              { name: 'Creyones de madera', href: '/category' },
              { name: 'Carteleras', href: '/category' },
              { name: 'Pizarras de melanina', href: '/category' },
              { name: 'Rotafolios', href: '/category' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'Lo mas vendido',
            items: [
              { name: 'Paletas', href: '/category' },
              { name: 'Papel Crepe', href: '/category' },
              { name: 'Foami escarchado', href: '/category' },
              { name: 'Foami', href: '/category' },
              { name: 'Silicona en Barra', href: '/category' },
              { name: 'Colores', href: '/category' },
            ],
          },
          {
            id: 'accessories',
            name: 'Manualidades',
            items: [
              { name: 'Silicona', href: '/category' },
              { name: 'Cintas', href: '/category' },
              { name: 'Tijeras', href: '/category' },
              { name: 'Pinturas', href: '/category' },
              { name: 'Anime', href: '/category' },
              { name: 'Pinceles', href: '/category' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Marcas',
            items: [
              { name: 'O.K.', href: '#' },
              { name: 'Colorisima', href: '#' },
              { name: 'Atton', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'category2',
      name: 'Escolar',
      featured: [
        {
          name: 'Accesorios',
          href: '/category',
          imageSrc: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'Mercancia nueva',
          href: '/category',
          imageSrc: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Básicos de prodimar',
          href: '/category',
          imageSrc: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Productos',
            items: [
              { name: 'Bases de trabajo', href: '/category' },
              { name: 'Caballetes', href: '/category' },
              { name: 'Archivadores', href: '/category' },
              { name: 'Cartografía', href: '/category' },
            ],
          },
          {
            id: 'collection',
            name: 'Lo mas vendido',
            items: [
              { name: 'Lupas', href: '/category' },
              { name: 'Mobiliario', href: '/category' },
              { name: 'Carteleras', href: '/category' },
              { name: 'Porta planos', href: '/category' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'Para el escritorio',
            items: [
              { name: 'Porta Lapices', href: '/category' },
              { name: 'Perforadoras', href: '/category' },
              { name: 'Engrapadoras', href: '/category' },
              { name: 'Boligrafos', href: '/category' },
              { name: 'Notas adhesivas', href: '/category' },
            ],
          },
          {
            id: 'accessories',
            name: 'Todos los accesorios',
            items: [
              { name: 'Reglas', href: '/category' },
              { name: 'Clips', href: '/category' },
              { name: 'Sacapuntas', href: '/category' },
              { name: 'Perforadoras', href: '/category' },
              { name: 'Tijeras', href: '/category' },
              { name: 'Chinches', href: '/category' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Marcas',
            items: [
              { name: 'O.K.', href: '#' },
              { name: 'Colorisima', href: '#' },
              { name: 'Atton', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Artes', href: '#' },
    { name: 'Oficina', href: '#' },
    { name: 'Quienes somos', href: '/about' },
  ],
}


export const CollectionsData = [
  {
    name: "Papelería",
    href: '/category',
    imageSrc: 'https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1424&q=80',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  {
    name: "Oficina",
    href: '/category',
    imageSrc: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Básicos de Prodimar',
    href: '/category',
    imageSrc: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
]

export const TrendingProducts = [
  {
    id: 1,
    name: 'Marcadores',
    color: 'Papelería',
    price: '$5',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1517237447788-d6612ad7d561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 2,
    name: 'Pinceles',
    color: 'Manualidades',
    price: '$2',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1588014327969-38ff21885b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },  {
    id: 3,
    name: 'Colores',
    color: 'Papelería',
    price: '$3',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1522111608460-19e7331e00fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },  {
    id: 4,
    name: 'Notas adhesivas',
    color: 'Oficina',
    price: '$1',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1544830281-1d5169d6b2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  // More products...
]

export const PerksData = [
  {
    name: 'Sin límite de compra mínima',
    svg: SVGEmptyCart ,
    description: 'No manejamos límite de compra minima en tienda, solicita el producto deseado y retiralo en nuestra tienda física.',
  },
  {
    name: 'Envíos la misma semana',
    svg: SVGDelivery ,
    description:
      'Nosotros ofrecemos servicios de delivery. Verifica el pago con nosotros y te haremos el envío en menos de 5 días hábiles.',
  },
  {
    name: 'Descuentos al por mayor',
    svg: SVGDiscount,
    description: 'Eres cliente nuestro, por una compra mínima de 200$ recibe grandes descuentos al por mayor.',
  },
  {
    name: 'Por el planeta',
    svg: SVGEnviroment,
    description: 'Nosotros donamos el 1% de nuestras ventas para la preservación y restauración del medio ambiente.',
  },
]
export const FooterNavigation = {
  shop: [
    { name: 'Papelería', href: '/category' },
    { name: 'Oficina', href: '/category' },
    { name: 'Accesorios', href: '/category' },
    { name: 'Básicos de Prodimar', href: '/category' },
    { name: 'Liquidación', href: '/category' },
  ],
  company: [
    { name: '¿Quiénes somos?', href: '#' },
    { name: 'Sustentabilidad', href: '#' },
    { name: 'Prensa', href: '#' },
    { name: 'Trabaja con nosotros', href: '#' },
    { name: 'Terminos y Condiciones', href: '#' },
    { name: 'Privacidad', href: '#' },
  ],
  account: [
    { name: 'Administrar cuenta', href: '#' },
    { name: 'Devolución & Cambios', href: '#' },
    { name: 'Lista de deseos', href: '#' },
  ],
  connect: [
    { name: 'Contactanos', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
}

export const sortOptions = [
  { name: 'Mas popular', href: '#', current: true },
  // { name: 'Best Rating', href: '#', current: false },
  { name: 'La mas nuevo', href: '#', current: false },
  { name: 'Precio: Bajo a Alto', href: '#', current: false },
  { name: 'Precio: Alto a Bajo', href: '#', current: false },
]
export const subCategories = [
  { name: 'Papeleria', href: '#' },
  { name: 'Oficina', href: '#' },
  // { name: 'Travel Bags', href: '#' },
  // { name: 'Hip Bags', href: '#' },
  // { name: 'Laptop Sleeves', href: '#' },
]
export const filters = [
  {
    id: 'Catalogo',
    name: 'Catalogo',
    options: [
      { value: 'Bases de trabajo', label: 'Bases de trabajo', checked: false },
      { value: 'Estambres', label: 'Estambres', checked: false },
      { value: 'Fieltros', label: 'Fieltros', checked: true },
      { value: 'Libros', label: 'Libros', checked: false },
      { value: 'Pegas - Colas', label: 'Pegas - Colas', checked: false },
      { value: 'Tabla de chequeo', label: 'Tabla de chequeo', checked: false },
    ],
  },
  {
    id: 'Categoria',
    name: 'Categoria',
    options: [
      { value: 'Lo mas vendido', label: 'Lo mas vendido', checked: false },
      { value: 'Descuento', label: 'Descuento', checked: false },
      { value: 'Liquidacion', label: 'Liquidacion', checked: false },
      { value: 'Manualidades', label: 'Manualidades', checked: true },
      { value: 'Para el escritorio', label: 'Para el escritorio', checked: false },
      { value: 'Accesorios', label: 'Accesorios', checked: false },
    ],
  },
  {
    id: 'brands',
    name: 'Marcas',
    options: [
      { value: 'O.K.', label: 'O.K.', checked: false },
      { value: 'Colorisima', label: 'Colorisima', checked: false },
      { value: 'Atton', label: 'Atton', checked: false },
    ],
  },
]

export const Products = [
  {
    id: 1,
    name: 'Cuaderno de una línea',
    inWhishList: false,
    href: '#',
    price: '$50',
    availability: true,
    imageSrc: 'https://images.unsplash.com/photo-1568639152391-61b4303bead7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    inCart: true
  },
  {
    id: 2,
    name: 'Colores',
    inWhishList: false,
    href: '#',
    price: '$140',
    availability: true,
    imageSrc: 'https://images.unsplash.com/photo-1568149537277-4daf47b8a6dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1146&q=80',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    inCart: false
  },
  {
    id: 3,
    name: 'Escarcha tarro',
    inWhishList: true,
    href: '#',
    price: '$220',
    availability: false,
    imageSrc: 'https://www.suescun.com.co/producto/escarcha-tarro-x12-tornasol/11998.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    inCart: false
  },

  {
    id: 4,
    name: 'Papel crepe',
    inWhishList: false,
    href: '#',
    price: '$50',
    availability: true,
    imageSrc: 'https://images.unsplash.com/photo-1524841641477-62d86f1392b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    inCart: false
  },
  {
    id: 5,
    name: 'Pizarra acrílica',
    inWhishList: false,
    href: '#',
    price: '$140',
    availability: true,
    imageSrc: 'https://tecnocam.cl/wp-content/uploads/2020/04/7777.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    inCart: true
  },
  {
    id: 6,
    name: 'Marcador punta fina',
    inWhishList: true,
    href: '#',
    price: '$220',
    availability: false,
    imageSrc: 'https://images.unsplash.com/photo-1587117266285-367b6225e898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    inCart: false
  },
  {
    id: 7,
    name: 'Pincel Angular',
    inWhishList: false,
    href: '#',
    price: '$50',
    availability: true,
    imageSrc: 'https://images.unsplash.com/photo-1616140588045-d1fe5b9a9665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    inCart: false
  },
  {
    id: 8,
    name: 'Cintas',
    inWhishList: false,
    href: '#',
    price: '$140',
    availability: true,
    imageSrc: 'https://images.unsplash.com/photo-1606695793797-2b2bd6a1a018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    inCart: true
  },
  {
    id: 9,
    name: 'Cartón',
    inWhishList: true,
    href: '#',
    price: '$220',
    availability: false,
    imageSrc: 'https://images.unsplash.com/photo-1628495359998-48e663a82b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    inCart: false
  },
]
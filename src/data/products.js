// Este archivo contiene los datos de los productos de la tienda.
// Más adelante, esto podría ser reemplazado por una llamada a una API o una base de datos.

export const products = [
  {
    id: 1,
    name: 'Perfil aluminio 40x40 V-Slot',
    description: 'Perfil de aluminio estructural tipo V-Slot, ideal para impresoras 3D, CNC y proyectos de automatización. Este es un material de alta calidad, perfecto para construcciones robustas y precisas.',
    shortDescription: 'Perfil de aluminio estructural tipo V-Slot, 40x40mm.', // Nueva descripción corta para la tarjeta
    price: '12€',
    imageUrl: 'https://www.construlife.com/wp-content/uploads/2021/07/perfil-de-aluminio-para-construccion.jpg', // Reemplazar si tienes una imagen específica
    dimensions: {
      width: '4 cm',
      height: '4 cm',
      depth: '100 cm',
    },
    wallapopUrl: 'https://wallapop.com/item/perfil-aluminio-40x40v-nuevo-1137646335?utm_medium=AppShare&utm_source=ShareItem',
    specifications: [
      "Material: Aleación de Aluminio 6063-T5",
      "Tipo de Slot: V-Slot (compatible con ruedas V-Wheel)",
      "Acabado: Anodizado natural",
      "Peso: Aproximadamente 0.85 kg/m"
    ],
    category: "Perfiles de Aluminio", // Ejemplo de categoría
    stock: 50 // Ejemplo de cantidad en stock
  },
  {
    id: 2,
    name: 'Tornillos M5x10mm (Paquete de 50)',
    description: 'Paquete de 50 tornillos de cabeza Allen M5x10mm, fabricados en acero inoxidable A2. Perfectos para ensamblajes de perfiles V-Slot y otros proyectos de mecánica.',
    shortDescription: 'Paquete de 50 tornillos M5x10mm, acero inoxidable.',
    price: '5.50€',
    imageUrl: 'https://www.ferrosplanes.com/wp-content/uploads/2018/01/DIN-912-8-8-min.jpg', // Imagen de ejemplo
    dimensions: { // Dimensiones del paquete o del tornillo principal
      width: 'N/A',
      height: 'N/A',
      depth: '10mm (longitud tornillo)',
    },
    wallapopUrl: 'ENLACE_WALLAPOP_TORNILLOS', // Reemplazar con el enlace real cuando lo tengas
    specifications: [
      "Material: Acero Inoxidable A2 (AISI 304)",
      "Tipo de cabeza: Allen (Hexagonal interior)",
      "Rosca: M5",
      "Longitud: 10mm"
    ],
    category: "Fijaciones",
    stock: 200
  },
  // Puedes añadir más productos aquí siguiendo la misma estructura
  // {
  //   id: 3,
  //   name: 'Otro Producto',
  //   description: 'Descripción detallada del otro producto.',
  //   shortDescription: 'Descripción corta del otro producto.',
  //   price: '15€',
  //   imageUrl: 'enlace_a_la_imagen_del_otro_producto.jpg',
  //   dimensions: {
  //     width: 'X cm',
  //     height: 'Y cm',
  //     depth: 'Z cm',
  //   },
  //   wallapopUrl: 'ENLACE_WALLAPOP_OTRO_PRODUCTO',
  //   specifications: ["Especificación A", "Especificación B"],
  //   category: "Categoría Ejemplo",
  //   stock: 10
  // },
];

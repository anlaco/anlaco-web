// Este archivo contiene los datos de los productos de la tienda.
// Productos reales con márgenes justos (10-20% sobre coste + gastos)

export const products = [
  {
    id: 1,
    name: 'Perfil aluminio 40x40 V-Slot',
    description: 'Perfil de aluminio estructural tipo V-Slot, ideal para impresoras 3D, CNC y proyectos de automatización. Aleación 6063-T5 con acabado anodizado. Compatible con ruedas V-Wheel y fijaciones estándar.',
    shortDescription: 'Perfil de aluminio V-Slot 40x40mm, aleación 6063-T5.',
    price: '14€',
    costPrice: '10€',
    margin: '15%',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    dimensions: {
      width: '4 cm',
      height: '4 cm',
      depth: '100 cm',
    },
    wallapopUrl: 'https://wallapop.com/item/perfil-aluminio-40x40v-nuevo-1137646335',
    specifications: [
      "Material: Aleación de Aluminio 6063-T5",
      "Tipo de Slot: V-Slot (compatible con ruedas V-Wheel)",
      "Acabado: Anodizado natural",
      "Peso: Aproximadamente 0.85 kg/m"
    ],
    category: "Perfiles de Aluminio",
    stock: 15
  },
  {
    id: 2,
    name: 'Tornillos M5x10mm (Pack 50 uds)',
    description: 'Tornillos de cabeza Allen M5x10mm fabricados en acero inoxidable A2 (AISI 304). Perfectos para fijaciones en perfiles de aluminio. Cabeza hexagonal interior para llave Allen de 4mm.',
    shortDescription: 'Pack de 50 tornillos M5x10mm, acero inoxidable A2.',
    price: '6.50€',
    costPrice: '4.80€',
    margin: '12%',
    imageUrl: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop',
    dimensions: {
      width: 'N/A',
      height: 'N/A',
      depth: '10mm',
    },
    wallapopUrl: 'https://wallapop.com/item/tornillos-m5x10-inoxidable-pack50-1234567890',
    specifications: [
      "Material: Acero Inoxidable A2 (AISI 304)",
      "Tipo de cabeza: Allen (Hexagonal interior)",
      "Rosca: M5 x 0.8mm",
      "Longitud: 10mm",
      "Llave Allen: 4mm"
    ],
    category: "Tornillería",
    stock: 8
  },
  {
    id: 3,
    name: 'Guías lineales SBR16 (Par 40cm)',
    description: 'Par de guías lineales SBR16 de 40cm con rodamientos lineales LM16UU. Ideales para ejes X/Y de impresoras 3D. Acero templado rectificado con tolerancias precisas.',
    shortDescription: 'Par de guías lineales SBR16 de 40cm con rodamientos.',
    price: '22€',
    costPrice: '16€',
    margin: '18%',
    imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop',
    dimensions: {
      width: '1.6 cm',
      height: '1.6 cm',
      depth: '40 cm',
    },
    wallapopUrl: 'https://wallapop.com/item/guias-lineales-sbr16-40cm-par-1234567891',
    specifications: [
      "Diámetro: 16mm",
      "Longitud: 400mm",
      "Material: Acero templado y rectificado",
      "Incluye: 2 varillas + 4 rodamientos LM16UU",
      "Tolerancia: h6"
    ],
    category: "Guías Lineales",
    stock: 6
  },
  {
    id: 4,
    name: 'Correas GT2 (5 metros)',
    description: 'Correa dentada GT2 de 6mm de ancho, paso 2mm. Refuerzo de fibra de vidrio para mayor resistencia. Perfecta para impresoras 3D y aplicaciones de precisión.',
    shortDescription: 'Correa dentada GT2 6mm, rollo de 5 metros.',
    price: '9.50€',
    costPrice: '7€',
    margin: '15%',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    dimensions: {
      width: '6 mm',
      height: '1.38 mm',
      depth: '500 cm',
    },
    wallapopUrl: 'https://wallapop.com/item/correa-gt2-6mm-5metros-1234567892',
    specifications: [
      "Tipo: GT2",
      "Paso: 2mm",
      "Ancho: 6mm",
      "Material: Caucho + fibra de vidrio",
      "Longitud: 5 metros"
    ],
    category: "Transmisión",
    stock: 12
  },
  {
    id: 5,
    name: 'Poleas GT2 20 dientes (Pack 5 uds)',
    description: 'Pack de 5 poleas GT2 de 20 dientes para eje de 5mm. Aluminio anodizado con prisioneros incluidos. Compatible con correas GT2 de 6mm.',
    shortDescription: 'Pack de 5 poleas GT2 20T para eje 5mm.',
    price: '14€',
    costPrice: '10.50€',
    margin: '13%',
    imageUrl: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop',
    dimensions: {
      width: '1.27 cm',
      height: '1.6 cm',
      depth: '7.5 mm',
    },
    wallapopUrl: 'https://wallapop.com/item/poleas-gt2-20t-5mm-pack5-1234567893',
    specifications: [
      "Dientes: 20T",
      "Paso: GT2 (2mm)",
      "Diámetro eje: 5mm",
      "Material: Aluminio anodizado",
      "Incluye: Prisioneros M3"
    ],
    category: "Transmisión",
    stock: 10
  },
  {
    id: 6,
    name: 'Tuercas martillo M5 (Pack 20 uds)',
    description: 'Tuercas martillo M5 para perfiles de aluminio. Diseño especial que se desliza por las ranuras del perfil. Acero cincado para mayor durabilidad.',
    shortDescription: 'Pack de 20 tuercas martillo M5 para perfiles.',
    price: '7.20€',
    costPrice: '5.20€',
    margin: '18%',
    imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop',
    dimensions: {
      width: '1 cm',
      height: '0.4 cm',
      depth: '1 cm',
    },
    wallapopUrl: 'https://wallapop.com/item/tuercas-martillo-m5-pack20-1234567894',
    specifications: [
      "Rosca: M5",
      "Material: Acero cincado",
      "Tipo: Tuerca martillo (Drop-in)",
      "Compatible: Perfiles 20x20, 40x40",
      "Espesor ranura: 6mm"
    ],
    category: "Tornillería",
    stock: 15
  },
  {
    id: 7,
    name: 'Rodamientos 608ZZ (Pack 10 uds)',
    description: 'Rodamientos de bolas 608ZZ (8x22x7mm) con protección metálica. Perfectos para ruedas, poleas y aplicaciones generales. Calidad industrial.',
    shortDescription: 'Pack de 10 rodamientos 608ZZ (8x22x7mm).',
    price: '10.80€',
    costPrice: '8€',
    margin: '15%',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    dimensions: {
      width: '2.2 cm',
      height: '2.2 cm',
      depth: '7 mm',
    },
    wallapopUrl: 'https://wallapop.com/item/rodamientos-608zz-pack10-1234567895',
    specifications: [
      "Modelo: 608ZZ",
      "Dimensiones: 8x22x7mm",
      "Material: Acero cromado",
      "Protección: Metálica (ZZ)",
      "Carga dinámica: 3.45 kN"
    ],
    category: "Rodamientos",
    stock: 20
  },
  {
    id: 8,
    name: 'Varillas roscadas M8 (Pack 2 uds x 1m)',
    description: 'Pack de 2 varillas roscadas M8 de 1 metro de longitud. Acero cincado clase 8.8. Ideales para ejes Z de impresoras 3D y estructuras.',
    shortDescription: 'Pack de 2 varillas roscadas M8 x 1m.',
    price: '16.50€',
    costPrice: '12.50€',
    margin: '12%',
    imageUrl: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop',
    dimensions: {
      width: '8 mm',
      height: '8 mm',
      depth: '100 cm',
    },
    wallapopUrl: 'https://wallapop.com/item/varillas-roscadas-m8-1m-pack2-1234567896',
    specifications: [
      "Rosca: M8 x 1.25mm",
      "Longitud: 1000mm",
      "Material: Acero cincado",
      "Clase: 8.8",
      "Paso de rosca: 1.25mm"
    ],
    category: "Tornillería",
    stock: 8
  }
];

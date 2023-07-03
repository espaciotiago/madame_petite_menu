const data = {
  categories: [
    {
      name: "Recomendados",
      products: [],
    },
    {
      name: "Tapas",
      products: [
        {
          name: "Los tres mosqueteros",
          label: "Spécialités de la maison",
          summary:
            "Montaditos de salmón marinado, jamón serrano y pollo encostrado.",
          description: `¡Todos para uno y uno para todos!
          Salmón marinado, jamón serrano y pollo encostrado en ajonjolí
          montaditos sobre pan baguette y una cama de queso filadelfia.`,
          images: [
            "../assets/Comida/Los tres mosqueteros 1.jpg",
            "../assets/Comida/Los tres mosqueteros.jpg",
          ],
          price: 22500,
        },
        {
          name: "Burrata",
          label: "Spécialités de la maison",
          summary:
            "Burrata sobre una cama de tomates cherries, uchuvas y pesto de albahaca al horno.",
          description: `Burrata sobre una cama de tomates cherries, uchuvas y pesto
          de albahaca al horno.`,
          images: [
            "../assets/Comida/Burrata 1.jpg",
            "../assets/Comida/Burrata.jpg",
          ],
          price: 35000,
        },
        {
          name: "La caballería",
          label: "Le Chevalerie",
          summary:
            "Involtinis de lomo de res rellenos de queso, rugula y pesto.",
          description: `Involtinis de lomo de res rellenos de queso sobre una cama de
          rúcula, marinados con pesto y reducción de vinagre balsámico.`,
          images: [
            "../assets/Comida/La caballeria 1.jpg",
            "../assets/Comida/La caballeria.jpg",
          ],
          price: 25000,
        },
        {
          name: "Carpaccio Napoleón",
          label: "Salmón",
          summary: "Láminas de salmón marinadas con sal rosada del himalaya.",
          description: `Láminas de salmón marinadas con sal rosada del himalaya,
          rúcula, pesto, aceitunas, pimienta, limón y aceite de oliva.`,
          images: [
            "../assets/Comida/Carpaccio salmon 1.jpg",
            "../assets/Comida/Carpaccio salmon.jpg",
          ],
          price: 27000,
        },
        {
          name: "Carpaccio Bonaparte",
          label: "Lomo de res",
          summary:
            "Láminas de carne de res marinadas con sal rosada del himalaya.",
          description: `Láminas de carne de res marinadas con sal rosada del himalaya,
          rúcula, pesto, aceitunas, pimienta, limón y aceite de oliva.`,
          images: [
            "../assets/Comida/Carpaccio lomo 1.jpg",
            "../assets/Comida/Carpaccio lomo.jpg",
          ],
          price: 23900,
        },
        {
          name: "Tabla serrana",
          label: "La Marseillaise",
          summary:
            "Tabla serrana con salami, chorizo español, jamón serrano, mix de quesos y frutas.",
          description: `“Allons enfants de la Patrie, le jour de gloire est arrivé!”
          Tabla serrana con salami, chorizo español, jamón serrano,
          garnish de frutas, mix de quesos y pan tostado.`,
          images: [
            "../assets/Comida/Tabla serrana 1.jpg",
            "../assets/Comida/Tabla serrana.jpg",
          ],
          price: 49900,
        },
        {
          name: "Tabla de quesos",
          label: "La Marseillaise",
          summary: "Variedad de quesos, garnish de frutas y pan tostado.",
          description: `“Allons enfants de la Patrie, le jour de gloire est arrivé!”
          Tabla de quesos compuesta por una variedad de quesos, garnish
          de frutas y pan tostado.`,
          images: [
            "../assets/Comida/Tabla serrana 1.jpg",
            "../assets/Comida/Tabla serrana.jpg",
          ],
          price: 49900,
        },
        {
          name: "Ensalada Madame",
          label: "Ensalada",
          summary:
            "Mix de lechugas, rúgula, champiñones, queso parmesano, manzanas verdes y jamón serrano.",
          description: `Mix de lechugas, rúgula, champiñones, queso parmesano,
          manzanas verdes y jamón serrano.`,
          images: [
            "../assets/Comida/Ensalada 1.jpg",
            "../assets/Comida/Ensalada.jpg",
          ],
          price: 42500,
        },
      ],
    },
    {
      name: "Repostería",
      products: [],
    },
    {
      name: "Café",
      products: [],
    },
    {
      name: "Cócteles",
      products: [
        {
          name: "Madame Petite",
          label: "De la casa",
          summary:
            "Ginebra, curazao azul, martini blanco, shrub de maracuyá y zumo de limón.",
          description: `Ginebra, curazao azul, martini blanco, shrub de maracuyá y zumo de limón.`,
          images: [
            "../assets/Cocteles/Madame petite 1.jpg",
            "../assets/Cocteles/Madame petite.jpg",
          ],
          price: 31000,
        },
        {
          name: "Je ne t'aime plus",
          label: "Ya no te amo",
          summary:
            "Para los corazones rotos. Ese desamor se pasa con un buen trago dulce de cointreau, ron, coco y zumo de limón.",
          description: `Para los corazones rotos. Ese desamor se pasa con un buen trago dulce de cointreau, ron,
          coco y zumo de limón.`,
          images: ["../assets/Cocteles/Je ne taime plus.jpg"],
          price: 25500,
        },
        {
          name: "Moulin Rouge",
          label: "Molino rojo",
          summary: "Ginebra, frutos rojos, triple sec y zumo de limón.",
          description: `Ginebra, frutos rojos, triple sec y zumo de limón.`,
          images: ["../assets/Cocteles/Moulin rouge.jpg"],
          price: 33000,
        },
        {
          name: "Gran Madame",
          label: "De la casa",
          summary: "Lulo, martini blanco, ginebra y agua tónica.",
          description: `Lulo, martini blanco, ginebra y agua tónica.`,
          images: ["../assets/Cocteles/Gran Madame.jpg"],
          price: 40000,
        },
        {
          name: "La revolución",
          label: "Refrescante",
          summary:
            "Zumo de piña, licor 43, aperol, agua tónica (ginger beer), zumo de limón.",
          description: `Zumo de piña, licor 43, aperol, agua tónica (ginger beer), zumo
          de limón`,
          images: ["../assets/Cocteles/La revolucion.jpg"],
          price: 30000,
        },
        {
          name: "C'est la vie",
          label: "Asi es la vida",
          summary: "Lulo, martini blanco, ginebra y agua tónica.",
          description: `Lulo, martini blanco, ginebra y agua tónica.`,
          images: [
            "../assets/Cocteles/Cest la vie 1.jpg",
            "../assets/Cocteles/Cest la vie.jpg",
          ],
          price: 32000,
        },
        {
          name: "Julio Verne",
          label: "Refrescante",
          summary:
            "Martini rosso, zumo de limón, zumo de naranja, flor de jamaica, agua tónica.",
          description: `Martini rosso, zumo de limón, zumo de naranja, flor de jamaica,
          agua tónica.`,
          images: ["../assets/Cocteles/Julio Verne.jpg"],
          price: 25000,
        },
        {
          name: "Kir Royal",
          label: "Refrescante",
          summary: "Licor de casis y champán.",
          description: `Licor de casis y champán.`,
          images: ["../assets/Cocteles/Kir royale.jpg"],
          price: 25000,
        },
        {
          name: "Mimosa de maracuyá",
          label: "Refrescante",
          summary: "",
          description: ``,
          images: ["../assets/Cocteles/Mimosa de maracuya.jpg"],
          price: 16500,
        },
        {
          name: "Margarita",
          label: "Clásico",
          summary: "",
          description: ``,
          images: [
            "../assets/Cocteles/Margarita 1.jpg",
            "../assets/Cocteles/Margarita.jpg",
          ],
          price: 29700,
        },
        {
          name: "Gin & Tonic",
          label: "Clásico",
          summary: "",
          description: ``,
          images: ["../assets/Cocteles/Gin tonic.jpg"],
          price: 25000,
        },
        {
          name: "Le rouge",
          label: "Sangría",
          summary:
            "Con vino tinto, licor 43, ron, flor de jamaica, naranja, fresas, manzanas, uvas y agua tónica.",
          description: `Con vino tinto, licor 43, ron, flor de jamaica, naranja, fresas, manzanas, uvas y agua tónica.`,
          images: ["../assets/Cocteles/Sangria roja.jpg"],
          price: 35000,
        },
        {
          name: "Le blanc",
          label: "Sangría",
          summary:
            "Con vino blanco, triple sec, ron, shrub de maracuya, limon, manzana y agua tónica.",
          description: `Con vino blanco, triple sec, ron, shrub de maracuya, limon,
          manzana y agua tónica.`,
          images: [
            "../assets/Cocteles/Sangria blanca 1.jpg",
            "../assets/Cocteles/Sangria blanca.jpg",
          ],
          price: 35000,
        },
      ],
    },
    {
      name: "Refrescantes",
      products: [],
    },
    {
      name: "Vinos y tragos",
      products: [],
    },
  ],
};

export default data;

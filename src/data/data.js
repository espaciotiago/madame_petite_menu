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
      name: "Reposteria",
      products: [
        {
          name: "Macaron",
          label: "Dulce",
          summary:
            "Una delicada gema culinaria que fusiona texturas suaves y sabores exquisitos.",
          description: `Una delicada gema culinaria que fusiona texturas suaves y sabores exquisitos. Estas joyas de la repostería, con sus colores vibrantes y presentación elegante, te transportarán a un mundo de placer y sofisticación. Sumérgete en la armonía de sus capas crujientes y su relleno irresistible, y déjate seducir por la dulce magia de cada bocado. Descubre la excelencia de la repostería francesa en cada Macaron. Una experiencia única que cautivará tus sentidos y te dejará con ganas de más.`,
          images: [
            "../assets/Reposteria/macaron.png",
            "../assets/Reposteria/macaron 1.png",
          ],
          price: 6600,
        },
        {
          name: "Bun de avellana",
          label: "Dulce",
          summary:
            "Cada mordisco es un deleite irresistible, donde la esponjosidad se funde con el toque crujiente de las avellanas tostadas.",
          description: `Embárcate en un viaje de sabor celestial con nuestro bun de avellana. Cada mordisco es un deleite irresistible, donde la esponjosidad se funde con el toque crujiente de las avellanas tostadas. El aroma cautivador envuelve tus sentidos mientras te adentras en un mundo de sabores exquisitos y sofisticados. Sumérgete en la dulzura indulgente de este bun, donde la avellana se convierte en la estrella principal. Prepárate para una experiencia gustativa inolvidable que te transportará a una dimensión de placer y satisfacción absoluta. ¡Déjate seducir por la magia de nuestro bun de avellana y descubre el verdadero gusto de la perfección!`,
          images: [
            "../assets/Reposteria/bun.png",
            "../assets/Reposteria/bun 1.png",
          ],
          price: 4200,
        },
        {
          name: "Bun de manjar blanco",
          label: "Dulce",
          summary:
            "Sumérgete en el deleite más exquisito con nuestro irresistible bun de manjar blanco caleño.",
          description: `Embárcate en un viaje de sabor celestial con nuestro bun de manjar blanco. Cada mordisco es un deleite irresistible, donde la esponjosidad se funde con el toque crujiente de las avellanas tostadas. El aroma cautivador envuelve tus sentidos mientras te adentras en un mundo de sabores exquisitos y sofisticados. Sumérgete en la dulzura indulgente de este bun, donde la avellana se convierte en la estrella principal. Prepárate para una experiencia gustativa inolvidable que te transportará a una dimensión de placer y satisfacción absoluta. ¡Déjate seducir por la magia de nuestro bun y descubre el verdadero gusto de la perfección!`,
          images: [
            "../assets/Reposteria/bun.png",
            "../assets/Reposteria/bun 1.png",
          ],
          price: 4200,
        },
        {
          name: "Rollo de canela",
          label: "Dulce",
          summary:
            "Masa recién horneada se combina con el aroma embriagador de la canela, creando una explosión de sabor en tu paladar.",
          description: `Descubre el placer supremo en cada bocado con nuestro irresistible rollo de canela. La frescura de la masa recién horneada se combina con el aroma embriagador de la canela, creando una explosión de sabor en tu paladar. Cada capa suave y esponjosa se deshace en tu boca, liberando la dulzura tentadora de la canela y el azúcar caramelizado. Déjate seducir por la textura delicada y la perfecta combinación de sabores, mientras te envuelves en una experiencia de puro deleite. Este rollo de canela es el capricho que no podrás resistir, una obra maestra culinaria que te transportará al paraíso de los sabores. ¡Permite que este dulce placer conquiste tus sentidos y te brinde un momento de absoluta felicidad!`,
          images: [
            "../assets/Reposteria/rollo canela.png",
            "../assets/Reposteria/rollo canela 1.png",
          ],
          price: 8000,
        },
        {
          name: "Croissant de mantequilla",
          label: "De la casa",
          summary:
            "Desde el primer bocado, sentirás cómo se deshace en tu boca, revelando su interior suave y mantecoso.",
          description: `Embárcate en un viaje a la auténtica pastelería francesa con nuestro croissant artesanal. Con su textura delicada y hojaldrada, cada mordisco es una experiencia que te transportará a las calles de París. Su aroma seductor te envolverá mientras descubres la perfección dorada y crujiente en cada capa. Desde el primer bocado, sentirás cómo se deshace en tu boca, revelando su interior suave y mantecoso. Deleita tus sentidos con este clásico irresistible, acompañado de un café recién hecho. Nuestro croissant es la verdadera esencia del sabor francés, un símbolo de exquisitez que te cautivará desde el primer momento. ¡Permítete disfrutar de este tesoro culinario y descubre la magia de un auténtico croissant!`,
          images: [
            "../assets/Reposteria/croissant.png",
            "../assets/Reposteria/croissant 1.png",
          ],
          price: 6000,
        },
        {
          name: "Tartaleta de chocolate",
          label: "De la casa",
          summary:
            "El chocolate oscuro y seductor se derrite en tu boca, liberando su sabor profundo y sofisticado. Nuestro relleno de chocolate es una sinfonía de sabores intensos y suavidad irresistible.",
          description: `Prepárate para sumergirte en una experiencia de chocolate divina con nuestra tartaleta artesanal de chocolate. Cada bocado es un encuentro con la perfección, donde el cacao de alta calidad se combina con una masa crujiente y delicada. Utilizamos los ingredientes más selectos para crear una experiencia indulgente y única. El chocolate oscuro y seductor se derrite en tu boca, liberando su sabor profundo y sofisticado. Nuestro relleno de chocolate es una sinfonía de sabores intensos y suavidad irresistible. Cada tartaleta es cuidadosamente preparada por nuestros expertos pasteleros, quienes emplean su habilidad y pasión para garantizar un resultado sublime. Desde la selección de los mejores granos de cacao hasta la meticulosa elaboración, cada paso se realiza con amor y dedicación para ofrecerte una tartaleta que te hará sucumbir al placer del chocolate. Sumérgete en esta delicia tentadora y descubre la magia de la tartaleta de chocolate que despierta todos tus sentidos.`,
          images: [
            "../assets/Reposteria/tartaleta chocolate.png",
            "../assets/Reposteria/tartaleta chocolate 1.png",
          ],
          price: 20000,
        },
        {
          name: "Mini tartaleta de chocolate",
          label: "De la casa",
          summary:
            "El chocolate oscuro y seductor se derrite en tu boca, liberando su sabor profundo y sofisticado. Nuestro relleno de chocolate es una sinfonía de sabores intensos y suavidad irresistible.",
          description: `Prepárate para sumergirte en una experiencia de chocolate divina con nuestra tartaleta artesanal de chocolate. Cada bocado es un encuentro con la perfección, donde el cacao de alta calidad se combina con una masa crujiente y delicada. Utilizamos los ingredientes más selectos para crear una experiencia indulgente y única. El chocolate oscuro y seductor se derrite en tu boca, liberando su sabor profundo y sofisticado. Nuestro relleno de chocolate es una sinfonía de sabores intensos y suavidad irresistible. Cada tartaleta es cuidadosamente preparada por nuestros expertos pasteleros, quienes emplean su habilidad y pasión para garantizar un resultado sublime. Desde la selección de los mejores granos de cacao hasta la meticulosa elaboración, cada paso se realiza con amor y dedicación para ofrecerte una tartaleta que te hará sucumbir al placer del chocolate. Sumérgete en esta delicia tentadora y descubre la magia de la tartaleta de chocolate que despierta todos tus sentidos.`,
          images: [
            "../assets/Reposteria/tartaleta chocolate.png",
            "../assets/Reposteria/tartaleta chocolate 1.png",
          ],
          price: 5000,
        },
        {
          name: "Tartaleta de limón",
          label: "De la casa",
          summary:
            "Nuestra masa crujiente se fusiona perfectamente con el relleno de limón, una combinación equilibrada entre lo dulce y lo ácido.",
          description: `Cada bocado es una explosión de sabor cítrico y refrescante que te transportará a un jardín de limoneros en plena floración. Utilizamos los limones más jugosos y suculentos para garantizar un sabor auténtico y vibrante en cada tartaleta. Nuestra masa crujiente se fusiona perfectamente con el relleno de limón, una combinación equilibrada entre lo dulce y lo ácido. Cada tartaleta es preparada con dedicación y cuidado, utilizando técnicas artesanales que resaltan la frescura y la intensidad del limón. Disfruta de la experiencia de saborear esta delicia ligera y refrescante, perfecta para los amantes de los sabores cítricos. Deleita tus sentidos con una tartaleta de limón que despierta el paladar y te transporta a un mundo lleno de frescura y alegría. ¡Permítete disfrutar de esta maravillosa combinación de sabores en cada bocado de nuestra tartaleta de limón!`,
          images: [
            "../assets/Reposteria/tartaleta limon.png",
            "../assets/Reposteria/tartaleta limon 1.png",
          ],
          price: 20000,
        },
        {
          name: "Mini tartaleta de limón",
          label: "De la casa",
          summary:
            "Nuestra masa crujiente se fusiona perfectamente con el relleno de limón, una combinación equilibrada entre lo dulce y lo ácido. ",
          description: `Cada bocado es una explosión de sabor cítrico y refrescante que te transportará a un jardín de limoneros en plena floración. Utilizamos los limones más jugosos y suculentos para garantizar un sabor auténtico y vibrante en cada tartaleta. Nuestra masa crujiente se fusiona perfectamente con el relleno de limón, una combinación equilibrada entre lo dulce y lo ácido. Cada tartaleta es preparada con dedicación y cuidado, utilizando técnicas artesanales que resaltan la frescura y la intensidad del limón. Disfruta de la experiencia de saborear esta delicia ligera y refrescante, perfecta para los amantes de los sabores cítricos. Deleita tus sentidos con una tartaleta de limón que despierta el paladar y te transporta a un mundo lleno de frescura y alegría. ¡Permítete disfrutar de esta maravillosa combinación de sabores en cada bocado de nuestra tartaleta de limón!`,
          images: [
            "../assets/Reposteria/tartaleta limon.png",
            "../assets/Reposteria/tartaleta limon 1.png",
          ],
          price: 5000,
        },
      ],
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
      products: [
        {
          name: "Soda de mango",
          label: "Refrescante",
          summary:
            "Bebida refrescante a base de shrub de mango, zumo de limón y soda.",
          description: `Bebida refrescante a base de shrub de mango, zumo de limón y soda.`,
          images: ["../assets/Refrescantes/Soda mango.png"],
          price: 13000,
        },
        {
          name: "Soda de maracuyá",
          label: "Refrescante",
          summary:
            "Bebida refrescante a base de shrub de maracuyá, zumo de limón y soda.",
          description: `Bebida refrescante a base de shrub de maracuyá, zumo de limón y soda.`,
          images: ["../assets/Refrescantes/Soda maracuya.png"],
          price: 13000,
        },
        {
          name: "Soda naranja y frutos rojos",
          label: "Refrescante",
          summary: "Bebida refrescante a base de naranja, frutos rojos y soda.",
          description: `Bebida refrescante a base de frutos rojos, zumo de limón y soda.`,
          images: [],
          price: 13000,
        },
        {
          name: "Cerveza Corona",
          label: "Refrescante",
          summary: "",
          description: ``,
          images: ["../assets/Refrescantes/Corona.png"],
          price: 10000,
        },
        {
          name: "Cerveza Stella Artois",
          label: "Refrescante",
          summary: "",
          description: ``,
          images: ["../assets/Refrescantes/Stella.png"],
          price: 10000,
        },
        {
          name: "Smirnoff",
          label: "Refrescante",
          summary: "",
          description: ``,
          images: [
            "../assets/Refrescantes/Smirnoff 1.png",
            "../assets/Refrescantes/Smirnoff.png",
          ],
          price: 12000,
        },
        {
          name: "Soda Bretaña",
          label: "Refrescante",
          summary: "",
          description: ``,
          images: ["../assets/Refrescantes/Bretaña.png"],
          price: 6000,
        },
        {
          name: "Agua 500ml",
          label: "Refrescante",
          summary: "",
          description: ``,
          images: ["../assets/Refrescantes/Agua.png"],
          price: 6000,
        },
        {
          name: "Agua con gas 300ml",
          label: "Refrescante",
          summary: "",
          description: ``,
          images: ["../assets/Refrescantes/Agua.png"],
          price: 6000,
        },
      ],
    },
    {
      name: "Vinos y tragos",
      products: [],
    },
  ],
};

export default data;

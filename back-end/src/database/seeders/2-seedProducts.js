'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('products', [{
      name: 'Skol Lata 250ml',
      price: '2.20',
      url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
    }, {
      name: 'Heineken 600ml',
      price: '7.50',
      url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
    }, {
      name: 'Antarctica Pilsen 300ml',
    price:2.49,
      url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'
    }, {
      name: 'Brahma 600ml',
      price:7.50,
      url_image: 'http://localhost:3001/images/brahma_600ml.jpg'
    }, {
      name: 'Skol 269ml',
      price:2.19,
      url_image: 'http://localhost:3001/images/skol_269ml.jpg'
    }, {
      name: 'Skol Beats Senses 313ml',
      price:4.49,
      url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg'
    }, {
      name: 'Becks 330ml',
      price:4.99,
      url_image: 'http://localhost:3001/images/becks_330ml.jpg'
    }, {
      name: 'Brahma Duplo Malte 350ml',
      price:2.79,
      url_image: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'
    }, {
      name: 'Becks 600ml',
      price:8.89,
      url_image: 'http://localhost:3001/images/becks_600ml.jpg'
    }, {
      name: 'Skol Beats Senses 269ml',
      price:3.57,
      url_image: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg'
    }, {
      name: 'Stella Artois 275ml',
      price:3.49,
      url_image: 'http://localhost:3001/images/stella_artois_275ml.jpg'
    }
      
  ], { timestamps: false });
},
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};

// INSERT INTO products (id, name, price, url_image) VALUES
// 	{'Skol Lata 250ml',2.20, 'http://localhost:3001/images/skol_lata_350ml.jpg'},
// 	{'Heineken 600ml',7.50, 'http://localhost:3001/images/heineken_600ml.jpg'},
// 	{'Antarctica Pilsen 300ml',2.49, 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'},
// 	{'Brahma 600ml',7.50, 'http://localhost:3001/images/brahma_600ml.jpg'},
// 	{'Skol 269ml',2.19, 'http://localhost:3001/images/skol_269ml.jpg'},
// 	{'Skol Beats Senses 313ml',4.49, 'http://localhost:3001/images/skol_beats_senses_313ml.jpg'},
// 	{'Becks 330ml',4.99, 'http://localhost:3001/images/becks_330ml.jpg'},
// 	{'Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'},
// 	{'Becks 600ml',8.89, 'http://localhost:3001/images/becks_600ml.jpg'},
// 	{'Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/skol_beats_senses_269ml.jpg'},
// 	{'Stella Artois 275ml',3.49, 'http://localhost:3001/images/stella_artois_275ml.jpg'};

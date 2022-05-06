const Sinon = require('sinon');
const { expect } = require('chai');
const productService = require('../../services/productService');
const { Product } = require('../../database/models');

const productMock = [{
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
];

describe('ProductService', () => {
  describe('Get all products', () => {
    before(() => {
      Sinon.stub(Product, 'findAll').resolves(productMock);
    });
    after(() => {
      Product.findAll.restore();
    });
    it('should return all products', async () => {
      const products = await productService.read();
      expect(products).to.be.an('array');
      expect(products).to.have.lengthOf(productMock.length);
      productMock.forEach((product, index) => {
        expect(products[index]).to.have.property('name', product.name);
        expect(products[index]).to.have.property('price', product.price);
        expect(products[index]).to.have.property('url_image', product.url_image);
      });
    });
  });
});

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING(200),
  },
  { 
    tableName: 'products',
    timestamps: false,
  });

  Product.associate = (models) => {
    Product.hasMany(models.Sales_Products,
      { foreignKey: 'product_id', as: 'sale_products' });
  };

  return Product;
}
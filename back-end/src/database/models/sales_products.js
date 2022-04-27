const Sale = (sequelize, DataTypes) => {
  const saleProducts = sequelize.define('Sales_Products', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
  { 
    timestamps: false,
    tableName: 'sales_products',
  });
  
  saleProducts.associate = (models) => {
    saleProducts.belongsTo(models.Sale,
      { foreignKey: 'sale_id', as: 'sale' });
    saleProducts.belongsTo(models.Product,
      { foreignKey: 'product_id', as: 'product' });
    }

  return saleProducts;
};
module.exports = Sale;
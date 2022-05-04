const Sale = (sequelize, DataTypes) => {
  const saleProducts = sequelize.define('SalesProducts', {
    sale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      as: 'saleId',
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      as: 'productId',
    },
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
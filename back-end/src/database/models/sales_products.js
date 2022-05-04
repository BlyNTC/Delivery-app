const Sale = (sequelize, DataTypes) => {
  const saleProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      field: 'product_id',
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
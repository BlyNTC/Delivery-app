const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: { type: DataTypes.INTEGER, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
    totalPrice: { type: DataTypes.DECIMAL(9, 2), field: 'total_price' },
    deliveryAddress: { type: DataTypes.STRING(100), field: 'delivery_address' },
    deliveryNumber: { type: DataTypes.STRING(50), field: 'delivery_number' },
    dateSale: { type: DataTypes.DATE, field: 'date_sale' },
    status: { type: DataTypes.STRING(50) },
  },
  { 
    timestamps: false,
    tableName: 'sales',
  });

  sale.associate = (models) => {
    sale.belongsTo(models.User, 
      { foreignKey: 'user_id', as: 'user' });
    sale.belongsTo(models.User, 
      { foreignKey: 'seller_id', as: 'seller' });
    sale.hasMany(models.SalesProducts,
      { foreignKey: 'sale_id', as: 'SalesProducts' });
  }

  return sale;
};

module.exports = Sale;
const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    date_sale: DataTypes.DATE,
    status: DataTypes.STRING(50),
  },
  { 
    timestamps: false,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.User, 
      { foreignKey: 'user_id', as: 'user' });
    sale.belongsTo(models.User, 
      { foreignKey: 'seller_id', as: 'seller' });
  }

  return sale;
};

module.exports = Sale;
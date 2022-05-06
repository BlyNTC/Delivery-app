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
    tableName: 'salesProducts',
  });
  
  saleProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale,
      { 
      foreignKey: 'product_id',
      otherKey: 'sale_id',
      as: 'sales',
      through: models.SalesProducts,
    });
    models.Sale.belongsToMany(models.Product,
      {
        foreignKey: 'sale_id',
        otherKey: 'product_id',
        as: 'products',
        through: models.SalesProducts,
      });
    }
  return saleProducts;
};
module.exports = Sale;

/* 
{
    Product.belongsToMany(Sale,
      { 
        foreignKey: 'product_id',
        otherKey: 'sale_id',
        as: 'sales',
        through: models.SalesProducts,
      });
      Sale.belongsToMany(Product,
      { 
        foreignKey: 'sale_id',
        otherKey: 'product_id',
        as: 'products',
        through: models.SalesProducts,
      });
    }
*/
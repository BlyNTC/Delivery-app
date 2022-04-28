const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  { 
    timestamps: false,
    tableName: 'users',
  });

  user.associate = (models) => {
    user.hasMany(models.Sale, 
      { foreignKey: 'user_id', as: 'customer' });
    user.hasMany(models.Sale,
      { foreignKey: 'seller_id', as: 'seller' });
  };
  return user;
};

module.exports = User;

/* 
TypeError: Cannot read properties of undefined (reading 'includes')
    at errorHandler (/home/isaac/Documents/Projetos/delivery/sd-014-a-project-delivery-app/back-end/src/handlers/errorHandler.js:3:54)
    at Layer.handle_error (/home/isaac/Documents/Projetos/delivery/sd-014-a-project-delivery-app/back-end/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/home/isaac/Documents/Projetos/delivery/sd-014-a-project-delivery-app/back-end/node_modules/express/lib/router/index.js:321:13)
    at /home/isaac/Documents/Projetos/delivery/sd-014-a-project-delivery-app/back-end/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/isaac/Documents/Projetos/delivery/sd-014-a-project-delivery-app/back-end/node_modules/express/lib/router/index.js:341:12)
    at Immediate.next (/home/isaac/Documents/Projetos/delivery/sd-014-a-project-delivery-app/back-end/node_modules/express/lib/router/index.js:275:10)
    at Immediate._onImmediate (/home/isaac/Documents/Projetos/delivery/sd-014-a-project-delivery-app/back-end/node_modules/express/lib/router/index.js:641:15)
    at processImmediate (node:internal/timers:466:21)
 */
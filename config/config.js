module.exports = {
  PORT: process.env.PORT || 3000,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
  PG_SSL: process.env.PG_SSL,
  PG_DIALECT: process.env.PG_DIALECT,
};

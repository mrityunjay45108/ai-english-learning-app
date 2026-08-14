export const config = {
  app: { port: parseInt(process.env.PORT || '3016') },
  jwt: {
    secret: process.env.JWT_SECRET || process.env.SECRET || 'default-secret',
  },
  get(key: string): string | undefined {
    return process.env[key];
  },
};

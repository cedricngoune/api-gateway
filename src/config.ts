import dotenv from 'dotenv';

dotenv.config({});

export const config = {
  JWT_TOKEN: process.env.JWT_TOKEN || '1234',
  GATEWAY_JWT_TOKEN: process.env.GATEWAY_JWT_TOKEN || '1234',
  NODE_ENV: process.env.NODE_ENV || '',
  SECRET_KEY_ONE: process.env.SECRET_KEY_ONE || '',
  SECRET_KEY_TWO: process.env.SECRET_KEY_TWO || '',
  CLIENT_URL: process.env.CLIENT_URL || '',
  AUTH_BASE_URL: process.env.AUTH_BASE_URL || '',
  USERS_BASE_URL: process.env.USERS_BASE_URL || '',
  GIGS_BASE_URL: process.env.GIGS_BASE_URL || '',
  MESSAGE_BASE_URL: process.env.MESSAGE_BASE_URL || '',
  ORDER_BASE_URL: process.env.ORDER_BASE_URL || '',
  REVIEW_BASE_URL: process.env.REVIEW_BASE_URL || '',
  REDIS_HOST: process.env.REDIS_HOST || '',
  ELASTIC_SEARCH_URL: process.env.ELASTIC_SEARCH_URL || ''
};

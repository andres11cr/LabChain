import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

// Validar existencia de variables críticas
if (!process.env.ACCOUNT_ADDRESS || !process.env.PRIVATE_KEY || !process.env.CONTRACT_ADDRESS) {
  throw new Error('❌ Faltan variables requeridas en .env');
}

export const STARKNET_NODE_URL = process.env.STARKNET_NODE_URL || 'https://starknet-testnet.public.blastapi.io';
export const ACCOUNT_ADDRESS = process.env.ACCOUNT_ADDRESS;
export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
export const PORT = process.env.PORT || 3000;

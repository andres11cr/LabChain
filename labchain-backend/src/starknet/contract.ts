import { RpcProvider, Account, Contract, json } from 'starknet';
import fs from 'fs';
import path from 'path';
import { CONTRACT_ADDRESS, ACCOUNT_ADDRESS, PRIVATE_KEY, STARKNET_NODE_URL } from '../config.js';

const provider = new RpcProvider({ nodeUrl: STARKNET_NODE_URL });
const account = new Account(provider, ACCOUNT_ADDRESS, PRIVATE_KEY);
const abi = json.parse(fs.readFileSync(path.resolve('abi/contract_abi.json'), 'utf8'));

export const contract = new Contract(abi, CONTRACT_ADDRESS, account);

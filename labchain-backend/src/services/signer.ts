import { sha3_256 } from 'js-sha3';
import { CertificateData } from '../types/Certificate.js';
import { toHexPrefixed } from '../utils/hex.js';

/** Returns the SHA3-256 hash of the serialized certificate JSON */
export function hashCertificate(data: CertificateData): string {
  const sorted = JSON.stringify(data);
  return toHexPrefixed(sha3_256(sorted));
}

/**
 * Simulates a ZK proof hash based on key fields of the certificate.
 * In a real case, this would be replaced with the actual ZK proof output.
 */
export function simulateZkProofHash(data: CertificateData): string {
  const inputString = `${data.patient_hash}|${data.test_type}|${data.result}|${data.sample_date}`;
  const hash = sha3_256(inputString);
  return toHexPrefixed(hash);
}

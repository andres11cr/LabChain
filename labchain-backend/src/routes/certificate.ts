import express from 'express';
import { hashCertificate, simulateZkProofHash } from '../services/signer.js';
import { contract } from '../starknet/contract.js';
import { CertificateData } from '../types/Certificate.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const data = req.body as CertificateData;

    // Generate hash from certificate data
    const certHash = hashCertificate(data);

    // Simulate a Zero-Knowledge proof hash using selected certificate fields
    const zkProofHash = simulateZkProofHash(data);

    // Get current Unix timestamp
    const timestamp = Math.floor(Date.now() / 1000);

    // Parse lab ID from string to number
    const labId = parseInt(data.lab_id);

    // Invoke the smart contract to store the certificate data
    const tx = await contract.invoke('store_certificate', [
      certHash,
      labId,
      timestamp,
      zkProofHash,
    ]);

    // Respond with transaction details
    res.json({
      status: 'submitted',
      tx_hash: tx.transaction_hash,
      cert_hash: certHash,
      timestamp,
    });
  } catch (err) {
    console.error('❌ Error while submitting certificate:', err);
    res.status(500).json({ error: 'Failed to process the certificate' });
  }
});

export default router;

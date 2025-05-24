export interface CertificateData {
  certificate_id: string;
  patient_hash: string;
  test_type: string;
  result: string;
  sample_date: string;   // ISO string
  issue_date: string;    // ISO string
  lab_id: string;
  lab_name: string;
  doctor_signature: string;
  version: string;
}
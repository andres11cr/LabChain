/** Ensures a hex string is prefixed with '0x' */
export function toHexPrefixed(hex: string): string {
  return hex.startsWith('0x') ? hex : '0x' + hex;
}

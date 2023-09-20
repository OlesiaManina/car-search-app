export function parseAddress (address) {
    const parts = address.split(', ');
    if (parts.length >= 3) {
      const city = parts[parts.length - 2];
      const country = parts[parts.length - 1];
      return { city, country };
    }
    return { city: '', country: '' };
  }
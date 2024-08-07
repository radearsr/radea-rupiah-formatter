/**
 * Format a number into Indonesian Rupiah currency format.
 *
 * @param {number} amount - The amount of money to be formatted.
 * @param {string} [prefix='Rp'] - The currency prefix.
 * @returns {string} The formatted currency string.
 */
function formatRupiah(amount, prefix = "Rp") {
  if (isNaN(amount)) {
    throw new TypeError("The amount must be a number.");
  }

  const formattedAmount = amount
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return `${prefix} ${formattedAmount}`;
}

module.exports = formatRupiah;

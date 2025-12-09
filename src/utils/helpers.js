export const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN");
};

export const formatCurrency = (amount) => {
  return `₹${amount}`;
};

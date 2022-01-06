export const returnArray = value => {
  if (!value) return [];

  return Array.isArray(value) ? value : [value];
};

export const setFormikValuesToEmpty = <T>(values: T) =>
  Object.entries(values)
    .map(([key]) => [key, ""])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

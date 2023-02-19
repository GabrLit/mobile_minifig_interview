export const getNumberOfRandomElements = <T>(
  data: Array<T>,
  howMany: number
) => {
  const copy = [...data];
  const shuffled = copy.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, howMany);
};

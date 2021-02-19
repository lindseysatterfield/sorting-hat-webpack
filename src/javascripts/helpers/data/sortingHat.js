const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortingHatRandom = houses[Math.floor(Math.random() * houses.length)];
  return sortingHatRandom;
};

export default sortingHat;

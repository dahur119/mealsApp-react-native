import { mocks } from "./mock";
import { mockImages } from "./mock";
import cameLize from "camelize";

export const RestaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject("no location found");
    }
    resolve(mock);
  });
};

export const RestaurantTransForm = ({ results = [] }) => {
  const mapResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return cameLize(mapResult);
};

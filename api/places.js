import axios from "axios";

export const getPlaces = async () => {
  const response = await axios.get(
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
    {
      params: {
        bl_latitude: "11.847676",
        tr_latitude: "12.838442",
        bl_longitude: "109.095887",
        tr_longitude: "109.149359",
        restaurant_tagcategory_standalone: "10591",
        restaurant_tagcategory: "10591",
        limit: "30",
        currency: "USD",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "b2554c3508mshd47c9786e6d854bp13f16djsn3ce3b36f4c6b",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    }
  );
  const { data: places } = response.data;
  return places;
};

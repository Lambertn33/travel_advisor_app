import axios from "axios";

export const getPlaces = async (menu, northeast, southwest) => {
  const response = await axios.get(
    `https://travel-advisor.p.rapidapi.com/${menu}/list-in-boundary`,
    {
      params: {
        bl_latitude: southwest?.lat ? southwest?.lat : "11.847676",
        tr_latitude: northeast?.lat ? northeast?.lat : "12.838442",
        bl_longitude: southwest?.lng ? southwest?.lng : "109.095887",
        tr_longitude: northeast?.lng ? northeast?.lng : "109.149359",
        restaurant_tagcategory_standalone: "10591",
        restaurant_tagcategory: "10591",
        limit: "30",
        currency: "USD",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": process.env.EXPO_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    }
  );
  const { data: places } = response.data;
  return places;
};

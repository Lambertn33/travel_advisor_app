import { ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const PlacesSearch = ({ onChangePlace }) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <GooglePlacesAutocomplete
        GooglePlacesSearchQuery={{ fields: "geometry" }}
        disableScroll={true}
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          onChangePlace(details?.geometry?.viewport);
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
      />
    </ScrollView>
  );
};

export default PlacesSearch;

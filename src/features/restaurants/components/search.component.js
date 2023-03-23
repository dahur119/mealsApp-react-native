import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

import styled from "styled-components";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        placeholder="search your location"
        value={searchKeyWord}
        onSubmitEditing={() => {
          search(searchKeyWord);
        }}
        onChangeText={(text) => {
          if (!text.length) {
            return;
          }
          setSearchKeyWord(text);
        }}
      />
    </SearchContainer>
  );
};

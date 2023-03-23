import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

import styled from "styled-components";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keyword);

  useEffect(() => {
    setSearchKeyWord(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
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

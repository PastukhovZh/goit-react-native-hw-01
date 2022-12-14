import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import useRoute from "../route";

// import "../firebase";

import { authStateChangeUser } from "../../src/redux/auth/authOperations";

export default function Main({ onLayout }) {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = useRoute(stateChange);

  return (
    <NavigationContainer onLayout={onLayout}>{routing}</NavigationContainer>
  );
}

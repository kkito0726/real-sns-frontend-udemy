import { Children, createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
// 最初のユーザー状態を定義する
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: {
  //   _id: "63ccee17d01482a298ba9ce7",
  //   username: "shincode",
  //   email: "shincode@gmail.com",
  //   password: "aaaaaa",
  //   profilePicture: "/person/1.jpeg",
  //   coverPicture: "",
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  // },
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

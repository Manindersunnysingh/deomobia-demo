import { auth, db } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer } from "react";
import {
  SET_LOGGED_USER,
  SET_NO_LOGGED_USER,
  LOGOUT_USER,
} from "./actions/action";
import authReducer from "./reducers/authReducer";

const AuthContext = createContext();

const initialState = {
  user: null,
  userLoading: true,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const getUser = async (currentUser) => {
    if (currentUser) {
      const docRef = collection(db, "user");
      const q = query(docRef, where("uid", "==", currentUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        const userDetails = { ...currentUser, role: docData?.role };
        console.log(userDetails);
        dispatch({
          type: SET_LOGGED_USER,
          payload: userDetails,
        });
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser(user);
      }
      dispatch({
        type: SET_NO_LOGGED_USER,
      });
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const logOut = () => {
    try {
      signOut(auth);
      dispatch({
        type: LOGOUT_USER,
      });
      toast.success("Logout successful");
    } catch (error) {
      toast.error(`${error}`);
      return error;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

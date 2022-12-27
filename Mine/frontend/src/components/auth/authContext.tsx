import React from "react";

interface AuthContextInterface {
  authentication: boolean;
  setAuthentication: (isAuthed: boolean) => void;
}

const AuthContext = React.createContext<AuthContextInterface | null>({
  authentication: false,
  setAuthentication: (isAuthed: boolean) => {},
});

export default AuthContext;

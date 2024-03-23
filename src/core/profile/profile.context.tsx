import React from "react";

interface Context {
  userName: string ;
  setUserName : (userName : string) => void;
}

const noUserLogin = 'no user Login'

const ProfileContext = React.createContext<Context>({
  userName: noUserLogin,
  setUserName: () => {}
})

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider : React.FC<Props> = (props) => {
  const {children} = props;

  const [userProfile, setUserProfile] = React.useState<string>('')

  return (
    <ProfileContext.Provider
      value={{userName: userProfile, setUserName: setUserProfile}}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => React.useContext(ProfileContext);
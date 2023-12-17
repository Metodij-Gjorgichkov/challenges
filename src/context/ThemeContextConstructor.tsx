import React, { useEffect } from "react";
import { createContext, useState } from "react";

export interface Users {
  id: number;
  title: string;
  description: string;
  user: string;
  imageUrl: string;
  time: Date;
}

interface PostName {
  name: string;
}

type ThemeContextType = {
  theme: "dark" | "light";
  handleThemeChange: (newTheme: ThemeContextType["theme"]) => void;
  names: PostName[];
  users: Users[];
  handleAddUser: (newUser: Users) => void;
};

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  handleThemeChange: (newTheme: ThemeContextType["theme"]) => {},
  names: [],
  users: [],
  handleAddUser: (newUser: Users) => {},
});

const ThemeContextConstructor = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");
  const [names, setNames] = useState<PostName[]>([]);
  const [users, setUsers] = useState<Users[]>(() => {
    if (localStorage.getItem("posts")) {
      return JSON.parse(localStorage.getItem("posts")!);
    }
    return [];
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setNames(data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const handleThemeChange = (newTheme: ThemeContextType["theme"]) => {
    setTheme(newTheme);
  };

  const handleAddUser = (newUser: Users) => {
    setUsers([...users, newUser]);
  };

  console.log(users);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleThemeChange,
        names,
        users,
        handleAddUser,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextConstructor;

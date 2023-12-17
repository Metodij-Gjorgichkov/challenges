import React, { useContext, useState } from "react";
import { ThemeContext, Users } from "../../context/ThemeContextConstructor";

const Create = () => {
  const { theme, names, handleAddUser } = useContext(ThemeContext);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleOnFormSubmit = () => {
    if (title && description && user && imageUrl) {
      const newUser: Users = {
        id: new Date().valueOf(),
        title,
        description,
        user,
        imageUrl,
        time: new Date(),
      };

      handleAddUser(newUser);

      const postsFromLocalStorage = JSON.parse(
        localStorage.getItem("posts") || "[]"
      );
      postsFromLocalStorage.push(newUser);
      localStorage.setItem("posts", JSON.stringify(postsFromLocalStorage));
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setUser("");
    setImageUrl("");
  };
  const isFormValid =
    title !== "" && description !== "" && user !== "" && imageUrl !== "";

  return (
    <div className="row text-center mt-5">
      <div className="col-6 offset-3">
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleOnFormSubmit();
          }}
          className="center-form"
          style={{
            border: theme === "dark" ? "2px solid white" : "2px solid black",
          }}
        >
          <h1>Enter a new post</h1>
          <label htmlFor="title">Post Title:</label>
          <input
            type="text"
            id="title"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
            value={title}
          />

          <label htmlFor="description">Post Description:</label>
          <input
            type="text"
            id="description"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }}
            value={description}
          />

          <label htmlFor="user">User:</label>
          <select
            id="user"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setUser(event.target.value);
            }}
            value={user}
          >
            {names.map((name, index) => {
              return (
                <option key={index} value={name.name}>
                  {name.name}
                </option>
              );
            })}
          </select>

          <label htmlFor="imageUrl">Image URL:</label>
          <input
            value={imageUrl}
            type="text"
            id="imageUrl"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setImageUrl(event.target.value);
            }}
          />

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

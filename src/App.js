import React from "react";
import CategoriesMenu from "./components/categories-menu/categories-menu.component";

const App = () => {
  let categories = [
    {
      id: 1,
      title: "Dogs",
      imageUrl:
        "https://images.unsplash.com/photo-1569285105724-89e18c990b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Cats",
      imageUrl:
        "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
    },
    {
      id: 3,
      title: "Fish",
      imageUrl:
        "https://images.unsplash.com/photo-1520989244660-118e51ae94bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "Birds",
      imageUrl:
        "https://images.unsplash.com/photo-1549608276-5786777e6587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBhcnJvdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 5,
      title: "Exotics",
      imageUrl:
        "https://images.unsplash.com/photo-1631693713833-16cbf827c42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    },
  ];
  return <CategoriesMenu categories={categories} />;
};

export default App;

import selling from "../../assets/sellingbook.png";
import movie from "../../assets/movie.jpg";
import PetStore from "../../assets/Pet_Store.jpg";
export const projectData = [
  {
    id: 1,
    image: selling,
    title: "FE selling book",
    description:
      "Use html css, tailwind css, redux,material UI to build FE, nodejs, mongoDb,express to build BE",
    source: "https://github.com/dangcongtuyen55/FE.git",
    link: "https://drive.google.com/drive/folders/1R8Xt5CHl0osy043XbRUUqwhCTqnvkJGg?usp=sharing",
    catagory: "web",
    status: "done",
  },
  {
    id: 2,
    image: selling,
    title: "BE selling book",
    description:
      "Use html css, tailwind css, redux,material UI to build FE, nodejs, mongoDb,express to build BE",
    catagory: "web",
    source: "https://github.com/dangcongtuyen55/BE.git",
    link: "https://drive.google.com/drive/folders/1R8Xt5CHl0osy043XbRUUqwhCTqnvkJGg?usp=sharing",
    status: "done",
  },
  {
    id: 3,
    image: selling,
    title: "Admin selling book",
    description:
      "Use html css, tailwind css, redux,material UI to build FE, nodejs, mongoDb,express to build BE",
    catagory: "web",
    link: "https://drive.google.com/drive/folders/1R8Xt5CHl0osy043XbRUUqwhCTqnvkJGg?usp=sharing",
    source: "https://github.com/caolonglanh/admin_ecommerce.git",
    status: "done",
  },
  {
    id: 4,
    image: movie,
    title: "Movie",
    description:
      "Use html css, tailwind css, to build FE, use API from the movie database api",
    catagory: "web",
    link: "https://luminous-shortbread-bf4d8a.netlify.app/",
    source: "https://github.com/dangcongtuyen55/Movie-app.git",
    status: "done",
  },
  {
    id: 5,
    image: PetStore,
    title: "Landing page Pet Store",
    description: "Use html scss to build FE ",
    catagory: "landing page",
    link: "https://dazzling-cendol-51c5b1.netlify.app/",
    source: "https://github.com/dangcongtuyen55/Pet-Store.git",
    status: "updating",
  },
];

export const catagoryProject = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "landing page",
  },
];

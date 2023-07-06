import profileImgFrank from "../assets/profile-img-frank.jpg";
import profileImgPeter from "../assets/profile-img-peter.jpg";
import profileImgBrian from "../assets/profile-img-brian.jpg";
import searchImg from "../assets/Search-feature.png";
import sortImg from "../assets/Sort-feature.png";
import cartImg from "../assets/cart-feature.png";

export const profileData = [
  {
    id: 1,
    name: "Francis Mwangi",
    profile_img: profileImgFrank,
    //info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quamexcepturi numquam error amet cum veritatis, necessitatibus quia consequatur possimus, ratione totam labore minima praesentium velit ab porro voluptatibus. Aperiam, maxime molestiae reprehenderit quo minus",
    git_profile: "https://github.com/frank-Mwangi",
    ln_profile: "https://www.linkedin.com/in/francis-mwangi-053745220/",
    twitter: "https://twitter.com/F_notFitzgerald",
  },
  {
    id: 2,
    name: "Peter Muchiri",
    profile_img: profileImgPeter,
    //info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quamexcepturi numquam error amet cum veritatis, necessitatibus quia consequatur possimus, ratione totam labore minima praesentium velit ab porro voluptatibus. Aperiam, maxime molestiae reprehenderit quo minus",
    git_profile: "https://github.com/Yutman",
    ln_profile: "https://www.linkedin.com/in/peter-kuria-021226217/",
    twitter: "https://twitter.com/_shiri___",
  },
  {
    id: 3,
    name: "Brian Gakure",
    profile_img: profileImgBrian,
    //info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quamexcepturi numquam error amet cum veritatis, necessitatibus quia consequatur possimus, ratione totam labore minima praesentium velit ab porro voluptatibus. Aperiam, maxime molestiae reprehenderit quo minus",
    git_profile: "https://github.com/Njaaga-Gakure",
    ln_profile: "https://www.linkedin.com/in/brian-gakure-0a2320188/",
    twitter: "https://twitter.com/njaagagakure",
  },
];
export const featureList = [
  {
    id: 1,
    img: searchImg,
    name: "Search Feature",
    description:
      "Looking for a specific computer? Use this feature to search by name.",
  },
  {
    id: 2,
    img: sortImg,
    name: "Sort Feature",
    description:
      "Browsing for a computer within your budget? Use this feature to sort by price, or name.",
  },
  {
    id: 3,
    img: cartImg,
    name: "Cart Feature",
    description:
      "Looking to track your spending? Use this feature to calculate the total cost of your order.",
  },
];

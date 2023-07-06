import profileImgFrank from "../assets/profile-img-frank.jpg";
import profileImgPeter from "../assets/profile-img-peter.jpg";
import profileImgBrian from "../assets/profile-img-brian.jpg";
import { BsSearch, BsSortNumericDown } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

export const profileData = [
  {
    id: 1,
    name: "Francis Mwangi",
    profile_img: profileImgFrank,
    git_profile: "https://github.com/frank-Mwangi",
    ln_profile: "https://www.linkedin.com/in/francis-mwangi-053745220/",
    twitter: "https://twitter.com/F_notFitzgerald",
  },
  {
    id: 2,
    name: "Peter Muchiri",
    profile_img: profileImgPeter,
    git_profile: "https://github.com/Yutman",
    ln_profile: "https://www.linkedin.com/in/peter-kuria-021226217/",
    twitter: "https://twitter.com/_shiri___",
  },
  {
    id: 3,
    name: "Brian Gakure",
    profile_img: profileImgBrian,
    git_profile: "https://github.com/Njaaga-Gakure",
    ln_profile: "https://www.linkedin.com/in/brian-gakure-0a2320188/",
    twitter: "https://twitter.com/njaagagakure",
  },
];
export const featureList = [
  {
    id: 1,
    icon: <BsSearch />,
    name: "Search Feature",
    description:
      "Looking for a specific computer? Use this feature to search by name.",
  },
  {
    id: 2,
    icon: <BsSortNumericDown />,
    name: "Sort Feature",
    description:
      "Browsing for a computer within your budget? Use this feature to sort by price, or name.",
  },
  {
    id: 3,
    icon: <FiShoppingCart />,
    name: "Cart Feature",
    description:
      "Looking to track your spending? Use this feature to calculate the total cost of your order.",
  },
];

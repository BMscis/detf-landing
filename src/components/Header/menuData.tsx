import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    submenu: [
      {
        id: 3,
        title: "MultiChain",
        path: "#Feature0",
        newTab: false,
      },
      {
        id: 4,
        title: "Trading",
        path: "#Feature1",
        newTab: false,
      },
      {
        id: 5,
        title: "Management",
        path: "#Feature2",
        newTab: false,
      },
      {
        id: 6,
        title: "Reserves",
        path: "#Feature3",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Reach Out",
    path: "#Contact",
    newTab: false,
  },
  {
    id: 8,
    title: "Sponsors",
    path: "#Footer",
    newTab: false,
  },
];
export default menuData;

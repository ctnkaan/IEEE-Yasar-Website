import git from "../resources/eventImages/eventcs.jpg";

export default function getEventDatas() {
  //2d array with at most 4 jsons in each array
  return [
    //first row
    [
      {
        title: "Git ve Github 101",
        description: `Çetin Kaan Taşkıngenç tarafından verilen eğitici ve bir
         o kadar önemli olan bu etkinliğimizde geforce now türkiyeye geldi kekw`,
        image: git, //must be imported at top
        date: "07/03/2021",
      },
      {
        title: "title2",
        description: "",
        image: "",
        date: "",
      },
      {
        title: "title3",
        description: "",
        image: "",
        date: "",
      },
      {
        title: "title4",
        description: "",
        image: "",
        date: "",
      },
    ],

    //second row
    [
      {
        title: "title",
        description: "",
        image: "",
        date: "",
      },
      {
        title: "title2",
        description: "",
        image: "",
        date: "",
      },
      {
        title: "title2",
        description: "",
        image: "",
        date: "",
      },
      {
        title: "title2",
        description: "",
        image: "",
        date: "",
      },
    ],

    //add new rows correspondingly...
  ];
}

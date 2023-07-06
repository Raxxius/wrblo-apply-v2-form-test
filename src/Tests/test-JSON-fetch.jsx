const TEST_JSON = {
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  numberOfPages: 1,
  formList: [
    [
      {
        id: "0",
        listType: "text",
        formlegend: "name",
        formtext: "Keith",
        maxCharacter: 50,
      },
      {
        id: "1",
        listType: "email",
        formlegend: "email address",
        formtext: "Raxxman@gmail.com",
        maxCharacter: 50,
      },
      {
        id: "2",
        listType: "fieldset",
        legend: "legend",
        list: [
          {
            id: "3",
            listType: "text",
            formlegend: "secondary list",
            formtext: "secondary list",
            maxCharacter: 50,
          },
          {
            id: "4",
            listType: "text",
            formlegend: "secondary list 2",
            formtext: "secondary list 2",
            maxCharacter: 50,
          },
        ],
      },
    ],
  ],
};

export default TEST_JSON;

const WRBLO_PRELIMINARY = {
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  numberOfPages: 3,
  formList: [
    [
      {
        id: "0",
        listType: "fieldset",
        legend: "Your Organisation",
        list: [
          {
            id: "1A",
            listType: "text",
            formTitle: "Organisation Name",
            formText: "",
            maxCharacter: 150,
            helpButton: `The first and usually the easiest part of the application asks for the applicant group's name, address, and telephone/fax numbers. However, WRBLO will expect the most senior person or chairperson to be the designated contact for signing contracts etc if you are successful be sure to have someone who can sign the application on the organisation’s behalf listed as the key contact.`,
          },
          {
            id: "1B",
            listType: "text",
            formTitle: "Organisation Legal status",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "1C",
            listType: "text",
            formTitle: "Organisation Registration details",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "1D",
            listType: "text",
            formTitle: "Lead Contact",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "1E",
            listType: "email",
            formTitle: "Email Address",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "1F",
            listType: "text",
            formTitle: "How did you hear about WRBLO?",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "1G",
            listType: "textarea",
            formTitle: "Address",
            formText: "",
            maxCharacter: 250,
          },
        ],
      },
      {
        id: "4",
        listType: "fieldset",
        legend: "",
        list: [
          {
            id: "5",
            listType: "text",
            formTitle: "Amount of funding requested, including currency",
            formText: "",
            maxCharacter: 150,
            helpButton:
              "WRBLO will require a realistic and well-costed budget to be submitted with the application. Regardless of what you ask us for - you will need to fully cost the project and include every possible expense. WRBLO will not generally pay for items retrospectively, i.e. they will not backdate a grant for items purchased or salaries already paid. You need to wait to hear if you have been successful before any expenditure for the items requested can be made. When applying for funding to cover capital build and equipment, you will need realistic estimates and quotes. For salaries, you are recommended to choose a salary level from a recognized scale. For overheads, it is necessary to detail how you have calculated the costs, for example from previous bills or costs in similar projects. If you are budgeting for a project, which lasts for more than a year, you will have to take inflation and general cost of living increases into account. Staff salary increases, potential increases in electricity, telephone charges and even stationery all have to be budgeted for. Also, if you are applying for a project that is due to start several months away, will the price have increased during those ten months? Consider that WRBLO may accept volunteer hours as a community contribution known as a contribution in-kind as match funding. Match funding is where WRBLO agrees to fund only a percentage of costs and expects funding to be ‘matched' from other sources.",
          },
          {
            id: "6",
            listType: "text",
            formTitle: "Duration",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "7",
            listType: "text",
            formTitle: "Project location",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "8",
            listType: "text",
            formTitle: "Livelihood opportunity",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "9",
            listType: "text",
            formTitle: "Funding Status",
            formText: "",
            maxCharacter: 150,
          },
        ],
      },
    ],
    [
      {
        id: "10",
        listType: "fieldset",
        legend: "Purpose and aims",
        list: [
          {
            id: "11",
            listType: "textarea",
            formTitle: "Who are the Beneficiaries?",
            formText: "",
            maxCharacter: 1000,
            helpButton:
              "Also referred to as your vision and mission, it is useful to have a standard set of aims and objectives that your organisation has agreed to that you can copy and paste into every grant application. Top Tip: Start a document full of the things that you add to grant applications regularly. This will save you time in the future by having a single document will all these pieces of the application to hand.",
          },
          {
            id: "12",
            listType: "textarea",
            formTitle: "Measureable impact",
            formText: "",
            maxCharacter: 1000,
          },
        ],
      },
      {
        id: "13a",
        listType: "fieldset",
        legend: "",
        list: [
          {
            id: "13",
            listType: "textarea",
            formTitle: "What is driving your Philanthropic call?",
            formText: "",
            maxCharacter: 1000,
            helpButton:
              "Increasingly WRBLO will want to see that there is evidence to prove that what you are applying for is needed in the community or location where you are applying. How can you prove it? Have you looked at national statistics and seen if your area performs above or below the national average? Have you conducted quantitative or qualitative surveys or other forms of feedback in your community to see what the residents say? To demonstrate the extent of the ‘need', it is often useful to cite statistics from a recognised source. So do some homework. Ask around. Find out what are the needs in your community and what is the evidence for it.",
          },
          {
            id: "14",
            listType: "textarea",
            formTitle: "Track record",
            formText: "",
            maxCharacter: 1000,
            helpButton:
              "WRBLO will want to know a little bit about your history. We will want to determine if you have done similar work to that for which you are applying. What size/scale has your organisation been working to in the past? If WRBLO gave you this money, would you have the capacity and previous experience to implement the project as you propose? Giving a good background of your organisation relevant to the grant that you are applying for is what is required here.",
          },
          {
            id: "15",
            listType: "textarea",
            formTitle: "Best evidence",
            formText: "",
            maxCharacter: 1000,
          },
          {
            id: "16",
            listType: "textarea",
            formTitle: "M&E",
            formText: "",
            maxCharacter: 1000,
            helpButton:
              "WRBLO will want to know how successful (or not) investment in your project has been. At a minimum, we will ask for projects to be self-assessed. That is, we ask the applicant to state upfront how it plans to assess the project, collect the monitoring information and conduct the evaluation of the project. If the monitoring and evaluation processes are included at the project planning stage, this becomes much easier to answer. In addition to your internal monitoring and evaluation processes, WRBLO will act as an external evaluator to provide an independent eye.",
          },
          {
            id: "17",
            listType: "textarea",
            formTitle: "Exit",
            formText: "",
            maxCharacter: 1000,
          },
          {
            id: "18",
            listType: "textarea",
            formTitle: "Collaboration",
            formText: "",
            maxCharacter: 1000,
          },
          {
            id: "19",
            listType: "textarea",
            formTitle: "Organisation development and ambation",
            formText: "",
            maxCharacter: 1000,
            helpButton:
              "When WRBLO asks if the project is sustainable we want to know how you will fund the project beyond the amount of money we agree to provide. You have 3 options: 1. that the project will finish at the end of the grant period 2. that the project will secure funding from other sources 3. that the project will generate its revenue through services/contract delivery etc.Don’t rely on other organisations to sustain your project for you. It would be unrealistic to state that you expect a statutory body to take on the funding of your project unless you have very strong evidence and commitments to that effect. You are best advised to demonstrate what you can realistically do within your resources to secure ongoing funding for the project and/or show how you can wind down the project in an orderly manner.",
          },
        ],
      },
    ],
    [
      {
        id: "20",
        listType: "fieldset",
        legend: "Financials",
        list: [
          {
            id: "21",
            listType: "text",
            formTitle: "Income",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "22",
            listType: "text",
            formTitle: "Funds/reserves/savings",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "23",
            listType: "text",
            formTitle: "Expenditure",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "24",
            listType: "text",
            formTitle: "Reserves policy",
            formText: "",
            maxCharacter: 150,
          },
          {
            id: "25",
            listType: "text",
            formTitle: "Currency",
            formText: "",
            maxCharacter: 150,
          },
        ],
      },
    ],
  ],
};

export default WRBLO_PRELIMINARY;

export const repoAPI = new Promise(function (resolve) {
  setTimeout(() => {
    resolve([
      {
        projectName: "NDP_Employee Database",
        projectLink: "https://github.com/NPitroff/NDP_EmployeeDatabase",
        deployedLink: "https://ndpendent-employee-database.herokuapp.com/",
        projectDescription:
          "A Employee Database filter that sorts based on Names",
      },
      {
        projectName: "Testing object 2",
        projectLink: "https://github.com/NPitroff/NDP_EmployeeDatabase",
        deployedLink: "https://ndpendent-employee-database.herokuapp.com/",
        projectDescription:
          "A Employee Database filter that sorts based on Names",
      },
    ]);
  });
});

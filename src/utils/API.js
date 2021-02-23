export const repoAPI = new Promise(function (resolve) {
  setTimeout(() => {
    resolve([
      {
        projectName: "NDP_Employee Database",
        projectLink: "https://github.com/NPitroff/NDP_EmployeeDatabase",
        deployedLink: "https://ndpendent-employee-database.herokuapp.com/",
        projectDescription:
          "A Employee Database filter that sorts based on Names pulled from an API that randomly generates contact information",
      },
      {
        projectName: "Employee-Template-Generator",
        projectLink: "https://github.com/NPitroff/Employee-Template-Generator",
        deployedLink: "https://drive.google.com/file/d/10JsoKQgLDVXhFSD7boNyP5GkBH4Waev1/view",
        projectDescription:
          "A Node App that allows a user to generate employee classes, names, and managers",
      },
      {
        projectName: "GoHome_project_2",
        projectLink: "https://github.com/NPitroff/GoHome_project_2",
        deployedLink: "https://gohomeboyz.herokuapp.com/",
        projectDescription:
          "An App that looks at rental properties given an address, and compares other rentals nearby", 
      },
      {
        projectName: "NDP_budgetTracker",
        projectLink: "https://github.com/NPitroff/NDP_budgetTracker",
        deployedLink: "https://ndp-budget-tracker.herokuapp.com/",
        projectDescription:
          "A Budget Tracker that utilizes PWA's to save user input with no connection",
      },
      {
        projectName: "NDP_fitness_tracker",
        projectLink: "https://github.com/NPitroff/NDP_fitness_tracker",
        deployedLink: "https://ndpexercise-tracker-01.herokuapp.com/",
        projectDescription:
          "A Fitness tracker that allocates a user's workouts and compiles it into a graph",
      },
      {
        projectName: "Nicolai-Weather-Map",
        projectLink: "https://github.com/NPitroff/Nicolai-Weather-Map",
        deployedLink: "https://npitroff.github.io/Nicolai-Weather-Map/",
        projectDescription:
          "A simple weather app that pulls up a local cities weather and displays a weekly forecast",
      }
    ]);
  });
});

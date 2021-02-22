export const repoAPI = new Promise(function(resolve){
    setTimeout(() =>{
        resolve([{
            projectName:"",
            projectLink:"",
            deployedLink:"",
            projectDescription:""
        }]);
    })
});
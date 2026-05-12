export function saveProjectsOnLocalStorage(projects){
    localStorage.setItem("projects", JSON.stringify(projects))
}

export function loadProjectsFromLocalStorage(){

    const data = localStorage.getItem("projects");

    if(data && data.length > 0){
        return JSON.parse(data)
    }
    else return []
}

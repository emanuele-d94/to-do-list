import {Project} from "../models/Project";
import {renderSidebar} from "./renderSidebar";

export function addProject(){

    const p = new Project(5,"Project 5",[])
    p.selected = true;

    return p;
}
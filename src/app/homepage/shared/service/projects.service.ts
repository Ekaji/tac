import { IProject } from '../model/project.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    project: IProject[] = [{
        "id": 1,
        "title": "Drone Education",
        "image": "https://res.cloudinary.com/silva/image/upload/v1593739617/drone-education-1.jpg",
        "description": "– Creation of a database of all institutions providing drone educationin Africa; or prospective drone education institutions to collaborateand recommend.– Listing down the regulations till date– Using Virtual Lab to call for institutions to register andcontribute to drone regulation.– Creating a database for all regulation and regulating authorities– Open question related to challenges on data regulation and usingvirtual lab for the purpose.",
        "project_type": "drone"
    },
    {
        "id": 2,
        "title": "Counter Drone",
        "image": "https://res.cloudinary.com/silva/image/upload/v1593739522/counter-drone.jpg",
        "description": "– Collaborate with RAND corporation and INSS, Israel– Open question: What are the concerns posed for both civilian andmilitary entities– Listing down 235 counter drone products that are on the market oractively developing ( dronecenter.bard.edu)– Listing down the manufacturer of counter drone products– Dividing the system into three: detection only, interdiction only, bothUse the Virtual Lab to develop hypothetical scenario on drone usage,I.e. airspace at airport, sports, games, VIP protection, smugglingoperations at prison, maritime security, private property– Development of counter measures for protection– Using use cases relation to Africa only– Virtual Lab will use to analyse and award best research on:Detection effectiveness, false negatives and false positives ondrones, level of performance, detection of interdiction hazardsthrough competitions, interdiction effectiveness",
        "project_type": "drone"
    },
    {
        "id": 3,
        "title": "Drone Dual Use",
        "image": "https://res.cloudinary.com/silva/image/upload/v1593739522/drone-dual-use.jpg",
        "description": "– Open question using virtual lab: distinguish legitimate andillegitimate drone usage– Start and alliance namely “ Technology Against Crime Alliance” or “Drone for Safety Alliance” to regulate and promote legitimate droneusage. This has to start with Africa.",
        "project_type": "drone"
    },
    {
        "id": 4,
        "title": "Drone Legals",
        "image": "https://res.cloudinary.com/silva/image/upload/v1593739522/drone-legal.jpg",
        "description": "– open call for recommendation using virtual lab– creation of a library",
        "project_type": "drone"
    },
    {
        "id": 5,
        "title": "Drone Hackathon",
        "image": "https://res.cloudinary.com/silva/image/upload/v1593739522/drone-hackathon.jpg",
        "description": "– The submission can be a github open source open innovation solution",
        "project_type": "drone"
    },
    {
        "id": 6,
        "title": "Drone Incubation",
        "image": "https://res.cloudinary.com/silva/image/upload/v1593739522/drone-incubation.jpg",
        "description": "For promotion of Drone Business an incubation platform can be started using the virtual platform.",
        "project_type": "drone"
    },
    {
        "id": 7,
        "title": "Drone UTM",
        "image": "https://res.cloudinary.com/silva/image/upload/v1593739523/drone-utm.jpg",
        "description": "– The main of the challenge will be to promote public confidence inadvance air mobility systems and help organise the domain– The other goals can be: to accelerate technology certifications andapprovals, develop flight procedure guidelines, Evaluatecommunication, navigation and surveillance optionsDemonstrate an airspace system architecture construct in Virtual LabWebsite schema for drone and counter drone platform.",
        "project_type": "drone"
    },
    ]

    constructor(private http: HttpClient) { }

    getProject(): Observable<IProject[]> {
        return of<IProject[]>(this.project)
    }

}

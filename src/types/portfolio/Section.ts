
export interface Section<T> {
    title : string ,
    data : T 
}

export interface Introduce {
    profile : string ,
    name : string ,
    title : string ,
    content : string ,
    email : string ,
    school : string ,
    phone : string ,
    github? : string ,
    site? : string ,
}

export interface Skills {
    icon? : string ,
    title? : string ,
    skill : string[],
    color? : string
}

export interface Project {
    photo? : string ,
    name : string ,
    company : string ,
    content : string ,
    skills? : Skills[]
}

export interface Career {
    icon? : string ,
    company : string ,
    startDate : string ,
    endDate : string ,
    position : string ,
    team : string ,
    what : string[]
}

export type IntroduceData = Introduce
export type SkillsData = Skills[]
export type ProjectData = Project[]
export type CareerData = Career[]

export type IntroduceSection = Section<IntroduceData>
export type SkillsSection = Section<SkillsData>
export type ProjectsSection = Section<ProjectData>
export type CareersSection = Section<CareerData>

export type PortfolioSection = IntroduceSection | SkillsSection | ProjectsSection | CareersSection
























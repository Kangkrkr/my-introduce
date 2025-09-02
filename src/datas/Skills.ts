import type { SkillsSection } from "@/types/portfolio/Section";

export const skills: SkillsSection = {
    title: "Skills",
    data: [
        {
            title: 'Languages',
            icon: 'mdi-code-braces',
            color: 'primary',
            skills: ['JAVA', 'JavaScript']
        },
        {
            title: 'Backend',
            icon: 'mdi-server-network',
            color: 'teal-darken-1',
            skills: ['Spring', 'SpringBoot', 'Spring Batch', 'JPA', 'MyBatis']
        },
        {
            title: 'Frontend',
            icon: 'mdi-vuejs',
            color: 'green-darken-1',
            skills: ['Vue', 'Tiles']
        },
        {
            title: 'Database',
            icon: 'mdi-database',
            color: 'orange-darken-1',
            skills: ['Oracle', 'MS SQL', 'MySQL']
        },
        {
            title: 'DevOps & Infra',
            icon: 'mdi-docker',
            color: 'blue-grey-darken-1',
            skills: ['Docker', 'Linux', 'NCP', 'Jenkins', 'Nginx', 'WebToB', 'Jeus', 'GitLab']
        },
        {
            title: 'Etc.',
            icon: 'mdi-dots-horizontal-circle-outline',
            color: 'purple-darken-1',
            skills: ['Git', 'DDD', 'TDD', 'AOP', 'Jennifer APM', 'Konan Search', 'Ethereum']
        }
    ]
};
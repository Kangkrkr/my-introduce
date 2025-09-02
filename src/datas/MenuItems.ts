import type { MenuItem } from "@/types/portfolio/MenuItem";

export const titleMenu : MenuItem = {
  title: 'KANGKRKR',
  class: 'font-weight-bold'
}

export const mainMenus : MenuItem[] = [
    {
      title: 'Introduce',
      link: '#introduce',
      children: [
        {
          title: 'Who am I?',
          link: '#introduce'
        },
        {
          title: 'Contact',
          link: '#introduce'
        },
      ]
    },
    {
      title: 'Skills',
      link: '#skills'
    },
    {
      title: 'Projects',
      link: '#projects'
    },
    {
      title: 'Career',
      link: '#career'
    }
]
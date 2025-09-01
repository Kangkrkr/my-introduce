import type { TitleMenu } from "@/types/portfolio/Header";
import type { MainMenu } from "@/types/portfolio/Header";

export const titleMenu : TitleMenu = {
  title: 'KANGKRKR',
  class: 'font-weight-bold'
}

export const mainMenus : MainMenu[] = [
    {
      title: 'Introduce',
      link: '#introduce',
      subMenus: [
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
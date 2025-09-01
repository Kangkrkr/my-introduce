export interface Menu {
    title : string,
    link? : string,
    class? : string,
    style? : string,
}

export interface TitleMenu extends Menu {

}

export interface MainMenu extends Menu {
    subMenus? : SubMenu[]
}

export interface SubMenu extends Menu {
    
}
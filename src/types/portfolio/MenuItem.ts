export interface MenuItem {
    title: string;
    link?: string;
    class?: string;
    style?: string;
    children?: MenuItem[];
}
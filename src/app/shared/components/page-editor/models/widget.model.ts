export class Widget {

    id: string;
    idComponentPreDefinido: string;
    name: string;
    type: WidgetType;
    value: string;
    class: string[];
    styles: string[];
    canHasChildren: boolean;
    children: Widget[];

    constructor(name: string, type: WidgetType, value: string, canHasChildren: boolean) {
        this.id = (Math.floor(Math.random() * (999999 - 100000)) + 100000).toString();
        this.name = name;
        this.type = type;
        this.value = value;
        this.canHasChildren = canHasChildren;
        this.children = [];
    }

}

export enum WidgetType {
    img = 'img',
    p = 'p',
    a = 'a',
    br = 'br',
    button = 'button',
    div = 'div',
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    //textarea = 'textarea',
    //input = 'input',
    //label = 'label',
    ol = 'ol',
    ul = 'ul',
    li = 'li',
    table = 'table',
    thead = 'thead',
    tbody = 'tbody',
    td = 'td',
    th = 'th',
    tr = 'tr',
    // Componentes Predefinidos
    component1 = 'component1',

    //Bootstrap
    row = 'row',
    col = 'col',
}
export class ConfigComponent {
    title: string;
    description: string;
    icon: string;
    filterColumns: string[];

    constructor(options?: {
        title?: string,
        description?: string,
        icon?: string,
        filterColumns?: string[],
    }) {
        this.title = options?.title || 'Titulo';
        this.description = options?.description || 'Descripción';
        this.icon = options?.icon || 'check';
        this.filterColumns = options?.filterColumns || [];
    }
}
export function DefaultPropertiesComponent(options?: {
    title?: string,
    description?: string,
    icon?: string
}) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            title = options?.title || 'Titulo';
            description = options?.description || 'Descripción';
            icon = options?.icon || 'check';
        }
    }
}
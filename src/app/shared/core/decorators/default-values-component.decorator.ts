import { ConfigComponent } from '../../models/components/config-table-modal.model';
export function ConfigPropertiesComponent(options?: {
    title?: string,
    description?: string,
    icon?: string,
    filterColumns?: string[]
}) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        let config = new ConfigComponent(options);
        return class extends constructor {
            configComponent = config;
        }
    }
}
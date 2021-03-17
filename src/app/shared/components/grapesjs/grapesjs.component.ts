import { Component, Input, OnInit } from '@angular/core';

import * as grapesjs from 'grapesjs';
import * as grapesjsweb from 'grapesjs-preset-webpage';

import { GrapesJSModel } from './models/grapesjs.model';

@Component({
    selector: 'grapesjs',
    templateUrl: 'grapesjs.component.html'
})

export class GrapesJSComponent implements OnInit {
    editor: any = null;

    //@Input() container: string;
    //@Output() itemDrop: EventEmitter<CdkDragDrop<Widget>>;


    constructor() {
        //this.itemDrop = new EventEmitter();
    }

    ngOnInit() {
        this.editor = grapesjs.init({
            plugins: [grapesjsweb.default, this.myNewComponentTypes],
            ...this.getDefaultConfig(),
            ...this.getAssetsConfig()
        });

        this.initListenersAssets();
    }

    getDefaultConfig() {
        return {
            container: '#gjs',
            // fromElement: false,
            // components: '',
            // style: null,
            storageManager: {
                autoload: false,
            },
        };
    }

    getAssetsConfig() {
        return {
            assetManager: {
                assets: [],
                noAssets: 'No hay imágenes',
                uploadText: 'Arrastra archivos aquí o haz click para seleccionar',
                addBtnText: 'Agregar imágen',
                uploadFile: async (e) => {
                    let files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
                    //console.log(e);
                    console.log(files);
                    //await new Promise(resolve => setTimeout(resolve, 4000));
                    //this.editor.AssetManager.add('http://placehold.it/350x250/78c5d6/fff/image1.jpg');
                    this.editor.AssetManager.add({
                        idFile: '0001',
                        src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
                        height: 350,
                        width: 250
                    });
                },
                modalTitle: 'Imagenes',
                showUrlInput: false
            }
        }
    }

    myNewComponentTypes = editor => {
        //editor.DomComponents.addType(/* API for component type definition */);
        let blockManager = editor.BlockManager;
        let blockLink = blockManager.get('link');
        blockLink.set({
            label: `<div>Link</div>`,
            attributes: {
                class: '',
            },
            render: ({ model, className }) => `
                <i class="fa fa-trash-alt fa-2x"></i>
                <div class="gjs-block-label">
                    ${model.get('label')}
                </div>`,
        });
    };

    initListenersAssets() {
        this.editor.on('asset:remove', (data) => {
            console.log("remove", data);
        });
    }

    openAssetManager() {
        this.editor.runCommand('open-assets');
    }
}
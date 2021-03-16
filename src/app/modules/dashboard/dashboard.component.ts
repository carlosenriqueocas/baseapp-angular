import { Component, OnInit } from '@angular/core';

// @ts-ignore
import * as grapesjs from 'grapesjs';
import * as grapesjsweb from 'grapesjs-preset-webpage';

//grapesjs.plugins.add('gjs-preset-webpage', grapesjsweb.default);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const editor = grapesjs.init({
    //   container: '#gjs',
    //   fromElement: true,
    //   // Size of the editor
    //   height: '300px',
    //   width: 'auto',
    //   // Disable the storage manager for the moment
    //   storageManager: false,
    //   // Avoid any default panel
    //   panels: { defaults: [], },
    //   // Blocks
    //   blockManager: {
    //     appendTo: '#blocks',
    //     blocks: [
    //       {
    //         id: 'section', // id is mandatory
    //         label: '<b>Section</b>', // You can use HTML/SVG inside labels
    //         attributes: { class: 'gjs-block-section' },
    //         content: `<section>
    //           <h1>This is a simple title</h1>
    //           <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
    //         </section>`,
    //       }, {
    //         id: 'text',
    //         label: 'Text',
    //         content: '<div data-gjs-type="text">Insert your text here</div>',
    //       }, {
    //         id: 'image',
    //         label: 'Image',
    //         // Select the component once it's dropped
    //         select: true,
    //         // You can pass components as a JSON instead of a simple HTML string,
    //         // in this case we also use a defined component type `image`
    //         content: { type: 'image' },
    //         // This triggers `active` event on dropped components and the `image`
    //         // reacts by opening the AssetManager
    //         activate: true,
    //       }
    //     ]
    //   },
    // });

    const editor = grapesjs.init({
      container: '#gjs',
      plugins: [grapesjsweb.default]
    });

    let html = editor.getHtml();
    let css = editor.getCss();

    const blockManager = editor.BlockManager;
    const blocks = blockManager.getAll();
    const categories = blockManager.getCategories();
    const link = blockManager.get('link');


    const panelManager = editor.Panels;
    let panels = panelManager.getPanels();


  }

}

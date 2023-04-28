# artemis-file-explorer-component
Fork from ngx-explorer. I have created this fork to extend the properties of the file manager and adapt it to the project that I am developing in Supabase.

Lightweight and easy-to-use Angular File Explorer module.
This is a front-end implementation only. There are no services at this point.

[DEMO](https://artemnih.github.io/ngx-explorer/)

## How to use
- Install package 
npm i ngx-explorer

- Implement IDataService provider interface
import { IDataService } from 'ngx-explorer';

export class MyDataService implements IDataService<MyNodeType> {
    ... 
}

- Add NgxExplorerModule and data provider to NgModule
import { NgxExplorerModule, DataService } from 'ngx-explorer';

@NgModule({
    imports: [
        ...
        NgxExplorerModule
    ],
    providers: [
        { provide: DataService, useClass: MyDataService }
    ]
})
export class AppModule { }

- Add <nxe-explorer></nxe-explorer> to the template
- Add css import @import '~ngx-explorer/src/assets/icons/css/nxe.css'

![explorer](docs/ss.png)
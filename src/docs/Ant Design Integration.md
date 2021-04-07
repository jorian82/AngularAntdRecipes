# Antd Design Integration

After creating the app, navigate to the app folder and add the components using the
```
ng add ng-zorro-antd
```
Follow the instructions on-screen to complete the install and then you can start the app by using:
```
ng serve
```
Start using the components is a little bit cumbersome, before start doing changes to the app and use the components it is mandatory to create and include a new module *app-antd*, as of now, it is located in the app folder, it contains the imports for all the ant design components.
```
app-antd.module.ts
```
Once the development is completed the module list must be trimmed in order to only leave the components we are actually using in the app.

Make sure to import the module in your imports array in the app.module.ts file along with the icons and localization data.
```
import { AntdDecoratorsModule } from './app-antd.module';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
```
Make sure to add the following icon settings in your providers configuration
```
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],
```

After adding a new module, adding components will require an extra step to generate components and automatically include them in the imports array.

To know more about how to create components using scaffolding visit the [ng-antd documentation](https://ng.ant.design/docs/introduce/en)


# Adding components to their appropriate module
To add new components to our applications it is now mandatory to specify to which module the new component will be added to
```
ng g c <name> --module <module-name>
```
The main module or default module will be app.

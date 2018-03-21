import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { CustomerJourneyServiceAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(CustomerJourneyServiceAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));

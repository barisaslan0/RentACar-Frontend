import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";

import { BrandComponent } from "app/components/brand/brand.component";
import { ColorComponent } from "app/components/color/color.component";
import { CarComponent } from "app/components/car/car.component";
import { RentalComponent } from "app/components/rental/rental.component";
import { CustomerComponent } from "app/components/customer/customer.component";
import { CarDetailComponent } from "app/components/car-detail/car-detail.component";

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: "",
  //   children: [
  //     {
  //       path: "dashboard",
  //       component: DashboardComponent,
  //     },
  //   ],
  // },
  //{
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: "dashboard", component: DashboardComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/cardetails/:carId", component: CarDetailComponent },
  { path: "brands", component: BrandComponent },
  { path: "colors", component: ColorComponent },
  { path: "rentals", component: RentalComponent },
  { path: "customers", component: CustomerComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "table-list", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
];

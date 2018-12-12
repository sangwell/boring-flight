import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
    selector: 'page-main-stage',
    templateUrl: 'main-stage.html'
})
export class MainStage {

    constructor(public navCtrl: NavController,
                private geolocation: Geolocation) {
        this.getLocation();

    }

    getLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log('location=========');
            console.log(resp);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

}

import { Injectable } from '@angular/core';

@Injectable()

export class AppService {
    formatter(time) {
        const min: any =  time / 60;
        const seconds: any = time % 60;
        time = min + ':' + seconds;
        return time;
    }
}


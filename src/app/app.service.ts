import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    // formatter(duration) {
    //     const min: any =  Math.round(duration / 60).toFixed(0);
    //     const seconds: any = (duration % 60).toFixed(0);
    //     duration = min + ':' + seconds;
    //     return duration;
    // }
    timer(minutesDuration, status) {
        if (status === 1) {
            let count = minutesDuration * 60;
            const start = new Date().getTime();
            const interval = setInterval(function() {
                const end = new Date().getTime();
                const elapsed = end - start;
                let seconds = Math.round((elapsed / 1000) % 60).toString();
                let minutes = Math.round((elapsed / (1000 * 60)) % 60).toString();
                if (seconds.length < 2) {
                seconds = '0' + seconds.toString();
                }
                if (minutes.length < 2) {
                minutes = '0' + minutes;
                }
                const time: string = minutes + ':' + seconds;
                count--;
                console.log(time)
                if (count === 0 || status === 0) {

                    clearInterval(interval);
                    console.log('Times up');
                    return time;
                }
            }, 1000);
        }
    }
}


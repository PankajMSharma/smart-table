import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keys'
})
export class KeysPipe implements PipeTransform {
    transform(dataSets: any, filterPhone: boolean): Array<Object> {
        const keys = [];

        this.objectToArray(dataSets, keys, filterPhone);
        return keys;
    }

    private objectToArray(dataSets: any, keys: Array<Object>, filterPhone: boolean) {
        for (const key in dataSets) {
            if (key !== null) {
                if (dataSets[key] instanceof Object) {
                    keys.push({key: key, value: this.objectToArray(dataSets[key], keys, filterPhone)});
                } else {
                    keys.push({key: key, value: (filterPhone && key === 'phone' && this.illegalPhoneValue(dataSets[key]) ?
                    'NA' : dataSets[key])});
                }
            }
        }
    }

    public illegalPhoneValue(phoneNo: string): boolean {
        if (phoneNo.match(/^[0-9]*$/gm)) {
            return false;
        } else {
            return true;
        }
    }
}


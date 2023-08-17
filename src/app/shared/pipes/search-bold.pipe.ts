import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchBold'
})
export class SearchBoldPipe implements PipeTransform {
    transform(value: string | undefined, search: string | null | undefined) {
        if (value && search) {
            const i = value?.toLowerCase()?.indexOf(search.toLowerCase());
            if (i > -1) {
                return [value?.slice(0, i), '<b>', value?.slice(i, i + search.length), '</b>', value?.slice(i + search.length)].join('');
            }
        }
        return value;
    }
}
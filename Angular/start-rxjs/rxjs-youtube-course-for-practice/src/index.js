import {EMPTY, fromEvent} from 'rxjs'
import {catchError, debounceTime, distinctUntilChanged, filter, from, map, switchMap, tap} from 'rxjs/operators'
import {ajax} from "rxjs/ajax";

const url = 'https://api.github.com/search/users?q=';

const search = document.getElementById('search');
const result = document.getElementById('result');

const stream$ = fromEvent(search, 'input')
    .pipe(
        map(e => e.target.value),
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => result.innerHTML = ''),
        filter(v => v.trim()),
        switchMap(v => ajax.getJSON(url + v).pipe(
            catchError(_ => EMPTY)
        )),
        map(response => response.items)
    )

stream$.subscribe(user => {
    const html = `<div class=``>${user.login}</div>`;

    result.insertAdjacentHTML('beforeend', html);
})
'use strict';

export class Repo {
    id = null;
    name = '';
    homepage = '';
    html_url = '';
    fork = false;
    created_at = '';

    constructor(repoData) {
        Object.assign(this, repoData);
    }

    render() {
        const repo = document.createElement('div');
        repo.setAttribute('class', 'repo');

        const h3 = document.createElement('h3');
        h3.innerHTML = this.name;

       
        const h4 = document.createElement('h4');
       // h4.innerHTML = ` live demo: ${livedemo}`;

        const p_www = document.createElement('p');
        p_www.innerHTML = 'homepage: ';
        const anchor_www = document.createElement('a');
        anchor_www.innerHTML = this.homepage;
        anchor_www.href = this.homepage;
        p_www.appendChild(anchor_www);

        const p_github = document.createElement('p');
        p_github.innerHTML = 'github url(codes): ';

        const anchor_github = document.createElement('a');
        anchor_github.innerHTML = this.html_url;
        anchor_github.href = this.html_url;
        p_github.appendChild(anchor_github);

        repo.appendChild(h3);
       // repo.appendChild(h4);

        repo.appendChild(p_www);
        repo.appendChild(p_github);

        return repo;

    }

}
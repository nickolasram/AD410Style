const pages = ['home', 'create', 'continue-create', 'login', 'login-error', 'enroll', 'course-enrollments', 
'confirmation', 'metrics', 'about', 'recommendations' /*'A000-A000-1A14-0'*/];
const folders = ['formatted', 'revised']
const $ = x => {
    return document.getElementById(x);
}
const populate =()=> {
    for (const folder in folders) {
        let fname = folders[folder];
        let list = $(fname);
        for (const page in pages) {
            let pname = pages[page];
            let li = document.createElement('li')
            let link = document.createElement('a');
            link.textContent = pname;
            link.href = `./${fname}/${pname}.html`;
            li.appendChild(link);
            list.appendChild(li);
        }
    }
};

populate();

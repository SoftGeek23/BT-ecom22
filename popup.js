document.addEventListener('DOMContentLoaded', function () {
    const exit = document.querySelector('#close');
    exit.addEventListener('click', (e) => {
        window.close();
    });
    const settings = document.querySelector('#settings');
    settings.addEventListener('click', (e) => {
    })
    const companies = document.querySelectorAll('.company');
    companies.forEach(company => {
        company.addEventListener('click', function toggleHighlight(event) {
            console.log('company clicked', event);
            companies.forEach(company => {
                if (company.id == 'on')
                    company.removeAttribute('id' , 'on');
            })
            company.setAttribute('id', 'on');
        })
    })
})




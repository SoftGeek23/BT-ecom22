document.addEventListener('DOMContentLoaded', function () {
    const exit = document.querySelector('#close');
    exit.addEventListener('click', (e) => {
        window.close();
    });
    const settings = document.querySelector('#settings');
    settings.addEventListener('click', (e) => {
    })

    var link = "https://www.amazon.com/Apple-AirPods-3rd-Generation-Renewed/dp/B09M94KXPN/ref=sr_1_4?crid=3R6FEV5ND7N6&keywords=apple+airpods+3rd+generation&qid=1670192526&sprefix=apple+airpods+%2Caps%2C102&sr=8-4";
    const image = document.querySelector('#product_image');
    image.addEventListener('click', (e) => {
        window.open(link);
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




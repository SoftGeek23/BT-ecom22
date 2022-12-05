document.addEventListener('DOMContentLoaded', function () {
    const exit = document.querySelector('#close');
    exit.addEventListener('click', (e) => {
        window.close();
    });
    const settings = document.querySelector('#settings');
    settings.addEventListener('click', (e) => {
    })
    const search = document.querySelector('#search');
    search.addEventListener('click', (e) => {
        hider = document.querySelector('#hide');
        hider.removeAttribute('id' ,'hide');
    })
    var link = "https://www.amazon.com/Apple-AirPods-Charging-Latest-Model/dp/B07PXGQC1Q/ref=sr_1_4?keywords=airpods&qid=1670214027&sr=8-4";
    const image = document.querySelector('#product_image');
    image.addEventListener('click', (e) => {
        window.open(link);
    })
    const companyModifiers = [16,3,7,7];
    const companyPrices = [119.0,119.98,119.99,65.99];
    const reviewNums = [548773,10031,11912,568]
    const reviewStars = [5,4,5,3];
    const companies = document.querySelectorAll('.company');
    companies.forEach(company => {
        company.addEventListener('click', function toggleHighlight(event) {
            console.log('company clicked', event);
            companies.forEach(company => {
                if (company.id == 'on')
                    company.removeAttribute('id' , 'on');
            })
            company.setAttribute('id', 'on');
            // Grabs company ID to change values for each tab
            const companyId = company.getElementsByTagName('img')[0];
            var index = 0;
            const cheapest = document.querySelector('#cheapest');
            cheapest.style.color = '#FFFFFF';
            if (companyId.id == 'amazon') 
                index = 0;
            else if (companyId.id == 'target') 
                index = 1;
            else if (companyId.id == 'walmart')
                index = 2;
            else {
                index = 3;
                cheapest.style.color = '#005A8C';
            }
            var  dateModifier = companyModifiers[index];
            // Handles date changing
            const date = new Date();
            const daysOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            date.setDate(date.getDate() + dateModifier);
            const day = document.querySelector('#day');
            day.textContent = daysOfTheWeek[date.getDay()];
            const dayOfTheMonth = document.querySelector('#dayOfTheMonth');
            dayOfTheMonth.textContent = date.getDate();

            // Handles price changing
            var price = companyPrices[index];
            const priceText = document.querySelector('#price');
            priceText.textContent = '$' + price.toFixed(2);

            // Handles review changing
            var reviewNum = reviewNums[index];
            const reviewText = document.querySelector('#reviews');
            reviewText.textContent = reviewNum + " Reviews";

            // Handles review stars
            const reviewImages = document.querySelector('#reviewImages');
            const arrayReviewImages = reviewImages.getElementsByTagName('img');
            for (let i = 0; i < arrayReviewImages.length; i++) {
                arrayReviewImages[i].src = "images/icons/emptystar.png";
            }
            for (let i = 0; i < reviewStars[index]; i++) {
                arrayReviewImages[i].src = "images/icons/fullstar.png";
            }
        })
    })
})




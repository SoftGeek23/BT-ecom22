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

    const companyModifiers = [2,3,7,7];
    const companyPrices = [100.80,119.98,119.99,65.99];
    const reviewNums = [0,10031,11912,568]
    const reviewStars = [0,4,5,3];
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
            if (companyId.id == 'amazon') 
                index = 0;
            else if (companyId.id == 'target') 
                index = 1;
            else if (companyId.id == 'walmart')
                index = 2;
            else
                index = 3;
            var  dateModifier = companyModifiers[index];
            // Handles date changing
            const date = new Date();
            const daysOfTheWeek = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
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




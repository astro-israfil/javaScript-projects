const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];
  

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const surpriseBtn = document.querySelector('.surprise-btn');
const profileImg = document.getElementById('profile-img');
const authorName = document.querySelector('.author');
const authorJobTitle = document.querySelector('.job-title');
const comment = document.querySelector('.comment');
let reviewIndex = 0;
renderReview(reviews[reviewIndex]);


function reviewIndexSelector(btn) {
    if (btn === prevBtn && reviewIndex > 0) {
        reviewIndex--;
    } else if (btn === prevBtn && reviewIndex === 0) {
        reviewIndex = reviews.length - 1;
    } else if (btn === nextBtn && reviewIndex === reviews.length -1) {
        reviewIndex = 0;
    } else if (btn === nextBtn && reviewIndex < reviews.length - 1) {
        reviewIndex++;
    }
}

function randomIndexSelector() {
    reviewIndex = Math.floor(Math.random() * reviews.length);
}

function renderReview({ name, job, img, text }) {
    profileImg.src = img;
    authorName.innerText = name;
    authorJobTitle.innerText = job;
    comment.innerText = text;
}


function changeReview (e) {
    const btn = e.target;
    reviewIndexSelector(btn);
    const review = reviews[reviewIndex];
    renderReview(review);
}

prevBtn.addEventListener("click", changeReview);
nextBtn.addEventListener("click", changeReview);

surpriseBtn.addEventListener("click", function() {
    randomIndexSelector()
    const review = reviews[reviewIndex];
    renderReview(review);
})
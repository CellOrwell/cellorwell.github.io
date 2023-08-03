const twitterTrigger = document.getElementById("handle-box_twitter--link");
const linkedinTrigger = document.getElementById("handle-box_linkedin--link");
const githubTrigger = document.getElementById("handle-box_github--link");

const twitterTarget = document.getElementById("handle-box_twitter");
const linkedinTarget = document.getElementById("handle-box_linkedin");
const githubTarget = document.getElementById("handle-box_github");

twitterTrigger.addEventListener('mouseover', () => {
    twitterTarget.classList.add('enlargeLogo');
});

twitterTrigger.addEventListener('mouseout', () => {
    twitterTarget.classList.remove('enlargeLogo');
})

linkedinTrigger.addEventListener('mouseover', () => {
    linkedinTarget.classList.add('enlargeLogo');
});

linkedinTrigger.addEventListener('mouseout', () => {
    linkedinTarget.classList.remove('enlargeLogo');
})

githubTrigger.addEventListener('mouseover', () => {
    githubTarget.classList.add('enlargeLogo');
});

githubTrigger.addEventListener('mouseout', () => {
    githubTarget.classList.remove('enlargeLogo');
})
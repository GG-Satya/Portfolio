// ================== Typing Animation ==================
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Backend Developer","Consistent Learner","Coding Enthusiast"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


// =====================Get dynamic Experince in Years and Months==================
function calculateExperience(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months };
}

const experience = calculateExperience('2022-10-01');
const experienceText = `${experience.years} Years and ${experience.months} Months.`;

document.getElementById('experience-year').textContent = experienceText;
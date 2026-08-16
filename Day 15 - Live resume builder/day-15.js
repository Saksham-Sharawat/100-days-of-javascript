// Live resume builder

// element selector

const name =  document.querySelector(".name");
const profession = document.querySelector(".profession");
const college = document.querySelector(".college");
const skills = document.querySelector(".skills");
const careerGoal = document.querySelector(".career-goal");
const button = document.querySelector("button");
const resume = document.querySelector(".resume-body");

button.addEventListener("click", function () {
    
    let nameValue = name.value;
    let professionValue = profession.value;
    let collegeValue = college.value;
    let skillsValue = skills.value;
    let careerGoalValue = careerGoal.value;
    
    if (
        nameValue === "" ||
        professionValue === "" ||
        collegeValue === "" ||
        skillsValue === "" ||
        careerGoalValue === ""
    ) {
        resume.innerHTML = "<div class = 'error-container'>" + "<div class = 'error-msg' >" + "<p>" + "Please enter all valid information in all fields" + "</p>" + "</div>" + "</div>";

        return;
    }

    resume.innerHTML = "<p>" + "Name: " + nameValue + "</p>" + "<p>" + "Profession: " + professionValue + "</p>" + "<p>" + "College: " + collegeValue + "</p>" + "<p>" + "Skills: " + skillsValue + "</p>" + "<p>" + "Career goal: " + careerGoalValue + "</p>";
    
    let info = resume.querySelectorAll("p");

    for (let i=0; i<info.length; i++) {
        info[i].style.marginBottom = "0.5em"
    }


});
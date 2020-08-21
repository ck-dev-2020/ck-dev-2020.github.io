function checkImageLoad() {
  if (document.getElementById("sec_1_r_b_img").complete == true) {
    document.getElementById("splashscreen").style.display = 'none';
  }
}

function scrollToHome() {
  document.getElementById("section_home").scrollIntoView({behavior: "smooth"});
}

function scrollToProjects() {
  document.getElementById("section_projects").scrollIntoView({behavior: "smooth"});
}

function scrollToSkills() {
  document.getElementById("section_skills").scrollIntoView({behavior: "smooth"});
}

function scrollToAboutUs() {
  document.getElementById("section_about_us").scrollIntoView({behavior: "smooth"});
}

function scrollToContactUs() {
  document.getElementById("section_contact_us").scrollIntoView({behavior: "smooth"});
}

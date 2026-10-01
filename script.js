/* ========================================
   EDIT YOUR PORTFOLIO DATA HERE
   ======================================== */

const portfolioData = {
  name: "Loga Prabakar V S",
  title: "Cybersecurity Enthusiast | Developer",
  profileImage: "/profile.jpg", // replace this image file with your own photo
  introduction:
    "I am passionate about Cybersecurity,Networking,Development,Technology and Building practical technology solutions",
  about:
    "Secure Developer | Aspiring Cybersecurity Professional | Memeber of WiCys Student Chapter | Networking Enthusiast | MERN Stack Developer | Creative Thinker | Strong Team Planner & Builder.",
  skills: ["Cybersecurity", "Networking", "Linux","Git","MERN Stack", "C","Python"],
  education: {
    degree: "B.E. Electronics and Communication Engineering",
    institution: "Sri Eshwar College of Engineering",
    year: "2023–2027",
  },
  interests: ["Cybersecurity", "Networking", "Web Development", "Software Development"],
  linkedin: "https://www.linkedin.com/in/loga-prabakar-vs-498371290",
//  scholar: "YOUR_GOOGLE_SCHOLAR_PROFILE_LINK",
  email: "logaprabakar.vs2023ece@sece.ac.in",
  phone: "9698834366", // leave "" to hide the phone row
};

const internships = [
  {
    company: "Ethical EduFabrica Pvt.Ltd.",
    role: "Ethical Hacking",
    duration: "December 2024 - January 2025",
    description: "Learned about Firewall Concepts & Ethical Hacking.",
    skills: ["Firewall Concepts", "Ethical Hacking"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHC_K2Vc12WxpzHummffxlqc6ReIYYvmxPJ6oDFU5ng&s=10", // optional image path or URL
  },
  {
    company: "Better Tomorrow",
    role: "MERN Stack Intern",
    duration: "January 2025 - February 2025",
    description: "Worked on MERN Stack projects.",
    skills: ["Front-End Web Development","Back-End Web Development"],
    logo: "https://www.thebettertomorrow.in/static/media/Logo.965de5df1b741c022786.jpg", // optional image path or URL
  },
  {
    company: "Cisco AICTE Virtual Internship",
    role: "Cybersecurity Intern",
    duration: "June 2025 - August 2025",
    description: "Worked on Cybersecurity & Networking projects.",
    skills: ["CISCO Packet Tracer"],
    logo: "https://img.logo.dev/cisco.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=512&retina=true&format=png", // optional image path or URL
    },
  {
    company: "Prompt InfoTech",
    role: "Cybersecurity & Bug Bounty Intern",
    duration: "June 2025",
    description: "Worked on Cybersecurity & Bug Bounty practices.",
    skills: ["CyberSecurity Tools","Bug Bounty Practices"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MwxF3LXUlyt_-l6YlBWyygc3z_A6uyEsUZ1U1I0u3A&s=10", // optional image path or URL
  },
];

const certificates = [
  {
    name: "Honours Diploma in Computer Application",
    organization: "Computer Software College",
    date: "2023",
    description: "MS-Word,MS-Excel,MS-PowerPint,MS-Windows,Python,C",
    link: "https://drive.google.com/file/d/1M1mBSW3fFc2uo3ZNjeRMgLFfjEgZza_8/view?usp=sharing",
  },
  {
    name: "Introduction to Cybersecurity",
    organization: "Cisco",
    date: "2024",
    description: "Basic Cybersecurity Concepts",
    link: "https://drive.google.com/file/d/15Z1Src-msprXgZtdPWS5Ng2r0CjyY4Fz/view?usp=sharing",
  },
   {
    name: "Red Hat System Administration I (RH124)",
    organization: "Red Hat",
    date: "2024",
    description: "Linux System Administration",
    link: "https://drive.google.com/file/d/1WodXMJx0QGO_ciQYEyksZWrVCe94tRso/view?usp=sharing",
  },
  {
    name: "Cybersecurity Analyst (C3SA)",
    organization: "CyberWarfare Labs",
    date: "2025",
    description: "Cybersecurity Analyzing and Threat Detection",
    link: "https://drive.google.com/file/d/1Ca4ziMRK7vJ2ekX2DbYcIGBmyViRNiQ8/view?usp=sharing",
  },
  {
    name: "CCNA: Introductions to Networks",
    organization: "Cisco",
    date: "2025",
    description: "Networking Concpets",
    link: "https://drive.google.com/file/d/1xXG6epTpgo6fkPGzUkbcnPwpRLa_EHCs/view?usp=sharing",
  },
  {
    name: "Cybersecurity Essentials",
    organization: "Cisco",
    date: "2025",
    description: "Core Concepts of Cybersecurity",
    link: "https://drive.google.com/file/d/1BEuhzdEzFJVFjqGzIUI9yWICqW7otZ5T/view?usp=sharing",
  },
   {
    name: "Networking Essentials",
    organization: "Cisco",
    date: "2025",
    description: "Networking Essentials Concepts",
    link: "https://drive.google.com/file/d/1Ze_t81pLjWHgpjbNUzX_e4LBGtfjLAoM/view?usp=sharing",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    organization: "Cisco",
    date: "2026",
    description: "Enterprise Networking, Security, and Automation Concepts",
    link: "https://drive.google.com/file/d/1u9fv5m1O0YV7O9rJX6yYG1Jg-4KNTjJ_/view?usp=sharing",
  },
  {
    name: "Python Essentials",
    organization: "Cisco",
    date: "2026",
    description: "Python Concepts",
    link: "https://drive.google.com/file/d/1qNgTM8tA8v9bGwHoAWKSGqgz096UOWpZ/view?usp=sharing",
  },
 {
    name: "Oracle Cloud Infrastructure Foundations I – English",
    organization: "Oracle Academy",
    date: "2026",
    description: "Oracle Cloud Infrastructure Foundations Concepts",
    link: "https://drive.google.com/file/d/1aBu6KqjxpKCkC_lSrVEe9SGUls2LuzWo/view?usp=sharing",
  },
   {
    name: "Introduction to Linux (LFS101)",
    organization: "Linux Foundation",
    date: "2026",
    description: "Linux architecture, Foundational system administration",
    link: "https://drive.google.com/file/d/1HjuJu4K9egof6puAdrSBZUqsiSXIUztV/view?usp=sharing",
  },
 {
    name: "Industrial Cybersecurity Essential",
    organization: "Cisco",
    date: "2026",
    description: "Certificate description",
    link: "https://drive.google.com/file/d/1S-bwYncoddyvYnDl6QKwqB6SzRtIeqUD/view?usp=sharing",
  },
   /* {
    name: "Cybersecurity Fundamentals",
    organization: "Organization Name",
    date: "2026",
    description: "Certificate description",
    link: "GOOGLE_DRIVE_LINK",
  },
*/
   /* {
    name: "Cybersecurity Fundamentals",
    organization: "Organization Name",
    date: "2026",
    description: "Certificate description",
    link: "GOOGLE_DRIVE_LINK",
  },
*/

];

const projects = [
  {
    name: "CTF Platform",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fsZne3wI1YMeXg1OoFfdJ3CfzQGSz_F8e7VwCGxtQy3CyhhyZH3oMwVl&s=10", // e.g. "/project-image.jpg" — leave "" to hide the image
    description: "Capture The Flag platform for cybersecurity competitions.",
    technologies: ["MERN Stack"],
   // github: "GITHUB_LINK",
   // live: "", // leave "" to hide the Live Demo button
  },
  {
    name: "SilentN0te",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAnwJQVBAygrrGANBhNEX5qye1kU1dumoVb1nSsaXj9UE3IAPRwcGeDfvW&s=10", // e.g. "/project-image.jpg" — leave "" to hide the image
    description: "Audio Steganography Tool.",
    technologies: ["Python", "Linux"],
   // github: "GITHUB_LINK",
   // live: "", // leave "" to hide the Live Demo button
  },
  {
    name: "DIRB, DIRSEARCH & UNISCAN – DIRECTORY BRUTE-FORCING",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgz3u-lYeyBaPXDWYduI1DvkVdNY-RmCqfG4nAyt5oIQCRyvai6LI9v2R2&s=10", // e.g. "/project-image.jpg" — leave "" to hide the image
    description: "A Cybersecurity tool for Directory Bruteforce.",
    technologies: ["MERN Stack"],
   // github: "GITHUB_LINK",
    live: "", // leave "" to hide the Live Demo button
  },
  {
    name: "Evil-Twin Wi-fi Detector",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMfkl60krwOcLGrWzTX6DlTfFIxgYrQ9GahzdZtLpOejlv6E9-ob5zS4&s=10", // e.g. "/project-image.jpg" — leave "" to hide the image
    description: "A IoT based device for detecting Evil-Twin Wi-fi attacks.",
    technologies: ["ESP 32", "Arduino Framework", "Arduino code"],
   // github: "GITHUB_LINK",
    live: "", // leave "" to hide the Live Demo button
  },
  {
    name: "Threat Detection in Cybersecurity Using AI",
    image: "https://www.onec1.com/hs-fs/hubfs/website-images/C1_Highlight_AI-Driven_Threat_Detection.jpg?width=1201&height=828&name=C1_Highlight_AI-Driven_Threat_Detection.jpg", // e.g. "/project-image.jpg" — leave "" to hide the image
    description: "AI-powered system for detecting cyber attacks in local networks.",
    technologies: ["Python", "Machine Learning", "NumPy", "Pandas"],
   // github: "GITHUB_LINK",
    live: "", // leave "" to hide the Live Demo button
  },
  {
    name: "Grivance App",
    image: "https://cdn.prod.website-files.com/63135f0b6c1bca50e76ef01d/67ade5d9410a56c15c5b724d_Frame%201321.png", // e.g. "/project-image.jpg" — leave "" to hide the image
    description: "Hostel grievance management Web Application.",
    technologies: ["MERN Stack"],
   // github: "GITHUB_LINK",
   // live: "", // leave "" to hide the Live Demo button
  },
  {
    name: "RetailEdge",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6_25pqJP-hy7phGu6TwwY1Rg0exKStMkGEaut5_uaQ&s=10", // e.g. "/project-image.jpg" — leave "" to hide the image
    description: "Retail management Web Application for Shop Owners.",
    technologies: ["MERN Stack"],
   // github: "GITHUB_LINK",
   // live: "", // leave "" to hide the Live Demo button
  },
  /* {
    name: "Project Name",
    image: "", // e.g. "/project-image.jpg" — leave "" to hide the image
    description: "Short project description.",
    technologies: ["Python", "Machine Learning", "NumPy", "Pandas"],
   // github: "GITHUB_LINK",
    live: "", // leave "" to hide the Live Demo button
  },
*/

];

const achievements = [
  {
    title: "Capture The Flag (CTF) Hackathon",
    organization: "Sri Eshwar College of Engineering",
    date: "2024",
    description: "1st Place in CTF Hackathon with cash prize of Rs 1500.",
  },
   {
    title: "MatrixzCTF Hackathon",
    organization: "SRM Valliammai Engineering College",
    date: "2024",
    description: "Secured 4th place in State Level MatrixzCTF Hackathon.",
  },
   {
    title: "SIH 2025 Hackathon",
    organization: "Gov of India",
    date: "2024",
    description: "Shorlisted for final round intercollege competition & review.",
  },
   {
    title: "CyberStormCTF Hackathon",
    organization: "Redfox Cybersecurity ",
    date: "2025",
    description: "Secured 22nd Place in National Level CyberStormCTF.",
  },
   {
    title: "Capture the Flag Hackathon",
    organization: "KPMG",
    date: "2025",
    description: "Participated in the Capture the Flag Hackathon.",
  },
 /*  {
    title: "Achievement Name",
    organization: "Organization Name",
    date: "2026",
    description: "Achievement description.",
  },
  */
];

/* ========================================
   RENDERING & NAVIGATION (no need to edit)
   ======================================== */

/* --- tiny helpers --- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tags = (list = []) => `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
const empty = (msg) => `<p class="empty">${esc(msg)}</p>`;

/* --- HOME + shared profile info --- */
function renderProfile() {
  $("#hero-photo").src = portfolioData.profileImage || "/profile.jpg";
  $("#hero-name").textContent = portfolioData.name;
  $("#hero-title").textContent = portfolioData.title;
  $("#hero-intro").textContent = portfolioData.introduction;
  $("#footer-name").textContent = portfolioData.name;
  $("#year").textContent = new Date().getFullYear();
  $("#linkedin-btn").href = portfolioData.linkedin;
}

/* --- ABOUT --- */
function renderAbout() {
  $("#about-bio").textContent = portfolioData.about;
  $("#about-skills").innerHTML = portfolioData.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("");
  $("#about-interests").innerHTML = portfolioData.interests.map((i) => `<span class="tag">${esc(i)}</span>`).join("");

  const e = portfolioData.education || {};
  $("#about-education").innerHTML = `
    <h3>${esc(e.degree)}</h3>
    <p class="role">${esc(e.institution)}</p>
    <p class="meta">${esc(e.year)}</p>`;
}

/* --- INTERNSHIPS --- */
function renderInternships() {
  if (!internships.length) return void ($("#internships-list").innerHTML = empty("No internships added yet."));
  $("#internships-list").innerHTML = internships
    .map(
      (i) => `
      <article class="card">
        <div class="card-head">
          ${i.logo ? `<img class="logo" src="${esc(i.logo)}" alt="${esc(i.company)} logo">` : ""}
          <div>
            <h3>${esc(i.company)}</h3>
            <p class="role">${esc(i.role)}</p>
          </div>
        </div>
        <p class="meta">${esc(i.duration)}</p>
        <p class="desc">${esc(i.description)}</p>
        ${i.skills?.length ? tags(i.skills) : ""}
      </article>`
    )
    .join("");
}

/* --- CERTIFICATES --- */
function renderCertificates() {
  if (!certificates.length) return void ($("#certificates-list").innerHTML = empty("No certificates added yet."));
  $("#certificates-list").innerHTML = certificates
    .map(
      (c) => `
      <article class="card">
        <span class="kicker">Certificate</span>
        <h3>${esc(c.name)}</h3>
        <p class="role">${esc(c.organization)}</p>
        <p class="meta">${esc(c.date)}</p>
        <p class="desc">${esc(c.description)}</p>
        ${
          c.link
            ? `<button class="btn btn-primary btn-block" type="button" data-open="${esc(c.link)}">View Certificate</button>`
            : ""
        }
      </article>`
    )
    .join("");
}

/* --- PROJECTS --- */
function renderProjects() {
  if (!projects.length) return void ($("#projects-list").innerHTML = empty("No projects added yet."));
  $("#projects-list").innerHTML = projects
    .map(
      (p) => `
      <article class="card">
        ${p.image ? `<img class="project-img" src="${esc(p.image)}" alt="${esc(p.name)} screenshot" loading="lazy">` : ""}
        <h3>${esc(p.name)}</h3>
        <p class="desc">${esc(p.description)}</p>
        ${p.technologies?.length ? tags(p.technologies) : ""}
        <div class="btn-row">
          ${p.github ? `<a class="btn btn-ghost" href="${esc(p.github)}" target="_blank" rel="noopener">View on GitHub</a>` : ""}
          ${p.live ? `<a class="btn btn-primary" href="${esc(p.live)}" target="_blank" rel="noopener">Live Demo</a>` : ""}
        </div>
      </article>`
    )
    .join("");
}

/* --- ACHIEVEMENTS --- */
function renderAchievements() {
  if (!achievements.length) return void ($("#achievements-list").innerHTML = empty("No achievements added yet."));
  $("#achievements-list").innerHTML = achievements
    .map(
      (a) => `
      <article class="card">
        <h3>${esc(a.title)}</h3>
        <p class="role">${esc(a.organization)}</p>
        <p class="meta">${esc(a.date)}</p>
        <p class="desc">${esc(a.description)}</p>
      </article>`
    )
    .join("");
}

/* --- CONTACT --- */
function renderContact() {
  const mail = `mailto:${portfolioData.email}`;
  const emailLink = $("#contact-email");
  emailLink.textContent = portfolioData.email;
  emailLink.href = mail;
  $("#connect-btn").href = mail;

  const li = $("#contact-linkedin");
  li.textContent = "Loga Prabakar VS";
  li.href = portfolioData.linkedin;

  if (portfolioData.phone) {
    $("#phone-row").hidden = false;
    const p = $("#contact-phone");
    p.textContent = portfolioData.phone;
    p.href = `tel:${portfolioData.phone.replace(/\s+/g, "")}`;
  }
}

/* ---------- View switching ---------- */
const VIEWS = ["home", "about", "internships", "certificates", "projects", "achievements", "connect", "contact"];
let currentView = "home";

function navigateTo(name, push = true) {
  if (!VIEWS.includes(name)) name = "home";
  currentView = name;

  $$(".view").forEach((v) => {
    const active = v.dataset.view === name;
    v.hidden = !active;
    v.classList.toggle("is-active", active);
  });

  // restart the enter animation
  const view = $(`#view-${name}`);
  view.classList.remove("enter");
  void view.offsetWidth;
  view.classList.add("enter");

  // reveal cards one by one
  revealCards(view);

  // bottom nav highlight
  $$(".bottom-nav button").forEach((b) => b.classList.toggle("active", b.dataset.go === name));

  window.scrollTo({ top: 0, behavior: "auto" });

  if (push) history.pushState({ view: name }, "", `#${name}`);
}

function revealCards(view) {
  const cards = [...view.querySelectorAll(".card, .menu-card")];
  cards.forEach((c, idx) => {
    c.classList.remove("reveal-in");
    c.style.animationDelay = `${Math.min(idx, 8) * 55}ms`;
    void c.offsetWidth;
    c.classList.add("reveal-in");
  });
}

/* ---------- Events ---------- */
function initNav() {
  // any element with data-go navigates
  document.addEventListener("click", (e) => {
    const go = e.target.closest("[data-go]");
    if (go) return navigateTo(go.dataset.go);

    const back = e.target.closest("[data-back]");
    if (back) return history.length > 1 ? history.back() : navigateTo("home");

    const open = e.target.closest("[data-open]");
    if (open) window.open(open.dataset.open, "_blank");
  });

  // "View My Work" scrolls smoothly to the portfolio menu
  $("#view-work-btn").addEventListener("click", () => {
    $("#portfolio-menu").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Android / browser back button
  window.addEventListener("popstate", (e) => {
    navigateTo(e.state?.view || location.hash.replace("#", "") || "home", false);
  });
}

/* ---------- Boot ---------- */
renderProfile();
renderAbout();
renderInternships();
renderCertificates();
renderProjects();
renderAchievements();
renderContact();
initNav();

const startView = location.hash.replace("#", "") || "home";
history.replaceState({ view: VIEWS.includes(startView) ? startView : "home" }, "", `#${startView}`);
navigateTo(startView, false);

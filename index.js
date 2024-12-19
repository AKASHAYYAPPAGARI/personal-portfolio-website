let h2button = document.getElementById("homeintro");
let h1button = document.getElementById("myname");
let img = document.getElementById("secimg");
let div1 = document.getElementById("div1");
let acimg = document.getElementById("acimg");

function home() {
  h1button.innerHTML = "<b>Hi I am Akash</b>";
  h2button.innerHTML = `
    I hold a Bachelor of Commerce degree with a specialization in Computer Applications, 
    which has provided me with a unique blend of business knowledge and technical expertise. 
    This degree has equipped me with a strong foundation in business principles, including accounting, 
    finance, marketing, and management. Simultaneously, it has allowed me to gain a comprehensive understanding 
    of information technology, focusing on areas such as data management, system analysis, and application development.
  `;
  img.src = "akash.png.png";
  img.style.height = "fit-content";
  acimg.src = "About-me-text.png";
  acimg.alt = "About Me section heading";
}

function btn1() {
  h1button.innerHTML = "EDUCATION ";
  h2button.innerHTML =
    "Bachelor of Commerce (B. Com) in Computer Applications <br> St Marys centenary degree college Secunderabad <br> GPA 6.53<br><br>Board of Intermediate<br>Sri Chaitanya Jr.Kalasala<br>CGPA 6.5<br><br> Board of Secondary Education<br>Kendriya Vidyalaya <br>new bowenpally <br><br><br><br><h1>SKILLS</h1><br><br><h3>PYTHON<br>HTML<br>CSS<br>JAVASCRIPT<br>MS WORD<br>REACTJS<br><br><br></h3>";
  img.src = "education-png-2.png";
  acimg.src = "Books-PNG-Clipart.png";
}

function btn2() {
  h1button.innerHTML = "PROJECTS";
  h2button.innerHTML =
    "QR GENERATOR<br><h4>The QR Code Generator is a web-based application that allows users to generate QR codes dynamically using a text or URL input. It employs the GoQR API for generating QR codes and utilizes HTML for structure, CSS for styling, and JavaScript for functionality. The application features a user-friendly interface where users can input data, generate a QR code, and view it instantly. It provides a simple yet efficient way to create QR codes for various use cases, such as sharing links or encoding text.</h4><br><h4> STUDY ON CONSUMERS ATITUDE TOWARDS VIRAL MARKETING</h4><h4>The study examines consumer attitudes toward viral marketing, focusing on factors like trust, brand familiarity, and emotional appeal. It explores how viral content influences consumer behavior, including brand awareness and purchase intentions, highlighting the importance of authentic and engaging content for effective marketing.</h4><br>";
  img.src = "3d-web-developer-working-on-project-illustration-png.webp";
  img.style.height = "fit-content";
  acimg.src = "Programming-amico-1280x1280.png";
}

function btn3() {
  h1button.innerHTML = "Contact Details";
  h2button.innerHTML = `
    <p>Email: akashgoud250903@gmail.com</p>
    <p>Phone: 9441996308</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/akash-goud-947457323" target="_blank">LinkedIn Profile URL</a></p>
    <p>GitHub: <a href="https://github.com/AKASHAYYAPPAGARI" target="_blank">GitHub Profile URL</a></p>
    <p>Website/Portfolio: <a href="https://yourportfolio.com" target="_blank">Your Portfolio URL</a></p>
    <p>Address: NEW BOWENPALLY,SECUNDERBAD 500011,HYDERBAD,TELENGANA</p>`;
  img.src = "1200px-Google_Contacts_icon.svg-768x768.png";
  img.style.height = "fit-content";
  acimg.src = "";
}

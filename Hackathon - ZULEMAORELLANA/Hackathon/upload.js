// upload.js

// func. uploadfiles
function uploadFiles(files) {
  let formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append('file', file);
  }

  fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      alert(`Se han subido los siguientes archivos: \n${data.join('\n')}`);

      var element_ul = document.querySelector("#output_uploads");
      var textInner = "";

      data.forEach(element => {
        console.log(element);
        textInner += "<li>" + element + "</li>";
      });
      element_ul.innerHTML = textInner;


    })
    .catch(error => console.error(error));
}

//evento drop
document.getElementById('drop_zone').addEventListener('drop', function (e) {
  e.preventDefault();
  e.stopPropagation();

  uploadFiles(e.dataTransfer.files);
});

//evento dragover
document.getElementById('drop_zone').addEventListener('dragover', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = 'copy';
});

//evento change
document.getElementById('file_input').addEventListener('change', function (e) {
  uploadFiles(e.target.files);
});




const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Detectar la hora actual
const hour = new Date().getHours()

// Cambiar al tema oscuro si es de noche
if (hour >= 20 || hour < 6) {
    document.body.classList.add(darkTheme)
    themeButton.classList.add(iconTheme)
}

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains('fa-moon') ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    // themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}
if (selectedIcon) {
    // If the validation is fulfilled, we know what icon the user selected
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove']('fa-moon')
    themeButton.classList[selectedIcon === 'fa-sun' ? 'add' : 'remove']('fa-sun')
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle('fa-moon')
    themeButton.classList.toggle('fa-sun')
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
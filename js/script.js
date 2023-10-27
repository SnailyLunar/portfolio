/******************************
        About Tab
******************************/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
        for(tablink of tablinks){
                tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
}

/******************************
        Small Screen Nav Tab
******************************/

   var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
                sidemenu.style.right = "0";
        }
        function closemenu(){
                sidemenu.style.right = "-200px";
        }      
   
        /******************************
        Contact Form
******************************/
  const scriptURL = '<s://script.google.com/macros/s/AKfASFuidsyg_fs346w364kgfdfgmq-sdgbtfWD66776/ever>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {console.log("success!', response))
      .catch(error => console.error('Error!', error.message))
  })

 21:34


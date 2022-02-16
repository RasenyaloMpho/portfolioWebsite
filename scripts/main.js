(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_I0QBjPhjNS2j8cwyb0R9t');
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                document.getElementById("messageSent").style.display="block";
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });

        });
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-li')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

const sections = document.querySelectorAll('.contentfit')
sections.forEach((item) => {
    if (screen.width<=700){
        item.style.height="fit-content";
    }
    else{
        item.style.height="100vh";
    }
    
})


const header = document.getElementById('navi');

window.onscroll = function() {
    const top = window.scrollY;
    if(top >=110) {
        header.style.backgroundColor="#aaa";        
        header.style.zIndex="1";

    }
    else {
        header.style.backgroundColor="grey";
    }
}
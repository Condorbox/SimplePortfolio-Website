const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    sectBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.active-btn').classList.remove('active-btn'); //Remove active class to old active-btn
            e.target.classList.add('active-btn');   //add class to new active-btn                      
        });
    });

    //Sections Active 
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active'); //remove selected form the btn
            });

            e.target.classList.add('active');

            //Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

function ChangeTheme() {
    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

PageTransitions();
ChangeTheme();
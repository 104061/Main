document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#contents button');
    let path = window.location.pathname;
    if (!path || path === '/') {
        path = '/Volumes/103837/School/Quizie/index.html';
    }
    const pageMap = {
        'index/index.html': 'Home',
        '/index/pages/Quizen.html': 'Quizzen',
        '/index/pages/AboutUs.html': 'About Us',
        '/index/pages/Contact.html': 'Contact'
    };
    const currentPage = pageMap[path] || 'Home';

    buttons.forEach(button => {
        if (button.textContent.trim() === currentPage) {
            button.classList.add('active');
        }
    });
});

const quizpagina = [
    [ "index/pages/quiz1.html"],
    [ "index/pages/quiz2.html"],
    [ "index/pages/quiz3.html"]
]

function RandomQuiz() {
  randomnum = Math.floor(Math.random() * 3);
  window.location =  quizpagina[randomnum];
}
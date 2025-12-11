
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Fonction d'écriture lettre par lettre
function typeWriter(element, text, speed = 100, callback) {
    let i = 0;
    element.textContent = ''; // Vide le contenu
    element.style.borderRight = '3px solid #050701ff'; // Curseur
    element.style.display = 'inline-block';
    element.style.paddingRight = '5px';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.style.borderRight = 'none'; // Enlève le curseur
            if (callback) callback();
        }
    }
    
    type();
}

// Lance au chargement de la page
window.addEventListener('load', function() {
    // Récupère les éléments
    const title = document.querySelector('.hero h1 .highlight');
    const heroH1 = document.querySelector('.hero h1');
    const description = document.querySelector('.hero-description');
    
    // Sauvegarde les textes originaux
    const titleText = title.textContent;
    const descText = description.textContent;
    
    // Efface les textes
    title.textContent = '';
    description.textContent = '';
    
    // Animation en cascade
    setTimeout(() => {
        // 1. Écrit le titre principal
        typeWriter(title, titleText, 80, () => {
            // 2. Après le titre, ajoute "et Développeur Web front-end"
            setTimeout(() => {
                const br = document.createElement('br');
                heroH1.appendChild(br);
                
                const subtitle = document.createElement('span');
                subtitle.style.borderRight = '3px solid white';
                subtitle.style.display = 'inline-block';
                subtitle.style.paddingRight = '5px';
                heroH1.appendChild(subtitle);
                
                typeWriter(subtitle, 'et Développeur Web front-end', 80, () => {
                    subtitle.style.borderRight = 'none';
                    // 3. Ensuite écrit la description
                    setTimeout(() => {
                        typeWriter(description, descText, 30);
                    }, 500);
                });
            }, 500);
        });
    }, 1000);
});

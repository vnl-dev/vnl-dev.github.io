const languages = {
    "JavaScript": {
        description: "Popular programming language for web development",
        features: ["Web Development", "Node.js", "Front-end", "Back-end"]
    },
    "Python": {
        description: "Versatile language known for simplicity and readability",
        features: ["Data Science", "AI/ML", "Web Development", "Automation"]
    },
    "TypeScript": {
        description: "Typed superset of JavaScript",
        features: ["Static Typing", "OOP", "Enterprise Development"]
    },
    "HTML": {
        description: "Standard markup language for web pages",
        features: ["Web Structure", "Semantic Elements", "Forms"]
    },
    "CSS": {
        description: "Style sheet language for web design",
        features: ["Styling", "Animations", "Layouts"]
    },
    "PHP": {
        description: "Server-side scripting language",
        features: ["Web Development", "Server-side", "CMS Development"]
    },
    "Ruby": {
        description: "Dynamic, object-oriented programming language",
        features: ["Web Development", "Scripting", "Rails Framework"]
    },
    "Go": {
        description: "Efficient and fast programming language by Google",
        features: ["Systems Programming", "Cloud Services", "Concurrent Programming"]
    },
    "Swift": {
        description: "Modern programming language by Apple",
        features: ["iOS Development", "macOS Development", "Server-side Swift"]
    },
    "Rust": {
        description: "Systems programming language focusing on safety",
        features: ["Systems Programming", "Memory Safety", "Concurrent Programming"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const modal = document.getElementById('languageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const closeModal = document.querySelector('.close-modal');

    function displayResults(query) {
        searchResults.innerHTML = '';
        const filtered = Object.keys(languages).filter(lang => 
            lang.toLowerCase().includes(query.toLowerCase())
        );

        filtered.forEach(lang => {
            const card = document.createElement('div');
            card.className = 'language-card';
            card.innerHTML = `<h3>${lang}</h3>`;
            card.onclick = () => showLanguageDetails(lang);
            searchResults.appendChild(card);
        });
    }

    function showLanguageDetails(language) {
        const lang = languages[language];
        modalTitle.textContent = language;
        modalDescription.textContent = lang.description;
        modalFeatures.innerHTML = `
            <h4>Features:</h4>
            <ul>
                ${lang.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        `;
        modal.style.display = 'block';
    }

    searchInput.addEventListener('input', (e) => {
        displayResults(e.target.value);
    });

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };

    displayResults('');
});
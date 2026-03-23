const   projects = [
    {
        name: "Smart Cane",
        descript: "Smart Cane is a project that aims to assist visually impaired individuals in navigating their surroundings safely. The cane is equipped with sensors that detect obstacles and provide feedback to the user through vibrations or audio cues. It also has GPS functionality to help users find their way and can connect to a smartphone app for additional features such as route planning and emergency assistance.",
        stack : ["Arduino"]
    },
    {
        name: "Ordering System",
        descript: "The Ordering System is a software application designed to streamline the process of placing and managing orders for businesses. It allows customers to browse products, add items to their cart, and complete the checkout process online. The system also provides features for inventory management, order tracking, and customer communication. It can be integrated with various payment gateways and can be customized to fit the specific needs of different types of businesses.",
        stack : ["Php", "Html","Css", "MySQL"]
    }
];

// Render projects dynamically
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'card project-card';

        const stackBadges = project.stack.map(tech => `<span class="badge">${tech}</span>`).join('');

        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.descript}</p>
            <div class="stack">
                ${stackBadges}
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);
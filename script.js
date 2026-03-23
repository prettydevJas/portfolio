const projects = [
    {
        name: "Smart Cane",
        descript: "Smart Cane is a project that aims to assist visually impaired individuals in navigating their surroundings safely. The cane is equipped with sensors that detect obstacles and provide feedback to the user through vibrations or audio cues. It also has GPS functionality to help users find their way and can connect to a smartphone app for additional features such as route planning and emergency assistance.",
        stack: ["Arduino"]
    },
    {
        name: "Vape Detector",
        descript: "The Vape Detector is a device designed to identify and alert users to the presence of vape smoke in their environment. It uses advanced sensors to detect vapor particles and can be integrated with smart home systems for automated responses.",
        stack: ["Arduino", "ESP32"]
    },

    {
        name: "Lora Monitoring System",
        descript: "The Lora Monitoring System is a project that utilizes LoRa technology to monitor and transmit data from remote locations. It is designed for applications such as environmental monitoring, industrial automation, and smart city initiatives.",
        stack: ["Arduino", "Ebyte Lora"]
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
(function () {
	"use strict"; // Logo configuration - essential logos used in the portfolio
	const logoConfig = {
		react: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			alt: "React",
			color: "#61DAFB",
			background: "rgba(0, 20, 30, 0.9)",
		},
		typescript: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			alt: "TypeScript",
			color: "#3178C6",
			background: "rgba(255, 255, 255, 0.95)",
		},
		linkedin: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
			alt: "LinkedIn",
			color: "#0A66C2",
			background: "rgba(255, 255, 255, 0.95)",
		},
		github: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
			alt: "GitHub",
			color: "#6b7280",
			background: "rgba(255, 255, 255, 0.95)",
		},
		python: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			alt: "Python",
			color: "#3776AB",
			background: "rgba(255, 255, 255, 0.95)",
		},
		javascript: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			alt: "JavaScript",
			color: "#F7DF1E",
			background: "rgba(0, 0, 0, 0.9)",
		},
		nextjs: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
			alt: "Next.js",
			color: "#000000",
			background: "rgba(255, 255, 255, 0.95)",
		},
		postgresql: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
			alt: "PostgreSQL",
			color: "#336791",
			background: "rgba(255, 255, 255, 0.95)",
		},
		mongodb: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			alt: "MongoDB",
			color: "#47A248",
			background: "rgba(255, 255, 255, 0.95)",
		},
		prisma: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
			alt: "Prisma",
			color: "#2D3748",
			background: "rgba(255, 255, 255, 0.95)",
		},
		aws: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
			alt: "AWS",
			color: "#FF9900",
			background: "rgba(0, 20, 35, 0.9)",
		},
		activedirectory: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
			alt: "Active Directory",
			color: "#0078D4",
			background: "rgba(255, 255, 255, 0.95)",
		},
		vpn: {
			url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%236b7280'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'/%3E%3C/svg%3E",
			alt: "VPN",
			color: "#6b7280",
			background: "rgba(255, 255, 255, 0.95)",
		},
		mfa: {
			url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%236b7280'%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z'/%3E%3C/svg%3E",
			alt: "MFA",
			color: "#6b7280",
			background: "rgba(255, 255, 255, 0.95)",
		},
		jira: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
			alt: "Jira",
			color: "#0052CC",
			background: "rgba(255, 255, 255, 0.95)",
		},
		servicenow: {
			url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%2362D84E'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
			alt: "ServiceNow",
			color: "#62D84E",
			background: "rgba(0, 20, 30, 0.9)",
		},
		git: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			alt: "Git",
			color: "#F05032",
			background: "rgba(255, 255, 255, 0.95)",
		},
		splunk: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg",
			alt: "Splunk",
			color: "#FF6600",
			background: "rgba(255, 255, 255, 0.95)",
		},
		figma: {
			url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
			alt: "Figma",
			color: "#F24E1E",
			background: "rgba(255, 255, 255, 0.95)",
		},
		portland: {
			url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Portland_Oregon_-_White_Stag_sign_at_dusk.jpg",
			alt: "Portland, Oregon - White Stag Sign",
			color: "#8B7355", // Warm brownish color representative of Portland's sunset/dusk tones
		},
	};

	let stylesInjected = false;
	// Helper function to determine if a color is light or dark
	function isLightColor(hexColor) {
		// Remove # if present
		const hex = hexColor.replace("#", "");

		// Convert to RGB
		const r = parseInt(hex.substr(0, 2), 16);
		const g = parseInt(hex.substr(2, 2), 16);
		const b = parseInt(hex.substr(4, 2), 16);

		// Calculate relative luminance using standard formula
		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

		return luminance > 0.5;
	}

	// Generate contrasting background color
	function getContrastingBackground(logoColor) {
		if (isLightColor(logoColor)) {
			// For light logos, use dark background
			return "rgba(0, 0, 0, 0.9)";
		} else {
			// For dark logos, use light background
			return "rgba(255, 255, 255, 0.95)";
		}
	}

	// Generate contrasting border color
	function getContrastingBorder(logoColor) {
		if (isLightColor(logoColor)) {
			// For light logos with dark background, use subtle light border
			return "rgba(255, 255, 255, 0.1)";
		} else {
			// For dark logos with light background, use subtle dark border
			return "rgba(0, 0, 0, 0.1)";
		}
	}

	function injectStyles() {
		if (stylesInjected || document.getElementById("simple-logo-hover-styles"))
			return;

		const style = document.createElement("style");
		style.id = "simple-logo-hover-styles";
		style.textContent = `
			.simple-logo-hover {
				position: relative;
				display: inline-block;
				cursor: pointer;
			}			.simple-logo-preview {
				position: absolute;
				width: 32px;
				height: 32px;
				border-radius: 8px;
				padding: 6px;
				opacity: 0;
				transform: translateX(-50%) scale(0.8) translateY(8px);
				transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
				pointer-events: none;
				z-index: 1000;
				backdrop-filter: blur(8px);
				box-shadow: 
					0 4px 20px rgba(0, 0, 0, 0.15),
					0 1px 3px rgba(0, 0, 0, 0.1);
				bottom: calc(100% + 8px);
				left: 50%;
			}			.simple-logo-preview.image-preview {
				width: 240px;
				height: 160px;
				padding: 2px;
			}

			.simple-logo-hover:hover .simple-logo-preview {
				opacity: 1;
				transform: translateX(-50%) scale(1) translateY(0);
			}

			.simple-logo-preview img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				border-radius: 2px;
			}

			.simple-logo-preview.image-preview img {
				object-fit: cover;
				border-radius: 6px;
			}

			@media (max-width: 768px) {
				.simple-logo-preview {
					display: none;
				}
			}
		`;
		document.head.appendChild(style);
		stylesInjected = true;
	}
	function createLogoPreview(logoData) {
		const preview = document.createElement("div");
		preview.className = "simple-logo-preview";

		// Check if this is an image (not an icon) by looking for image file extensions
		const isImage =
			logoData.url.match(/\.(jpg|jpeg|png|gif|webp)/i) ||
			logoData.url.includes("upload.wikimedia.org");

		if (isImage) {
			preview.classList.add("image-preview");
			// For images, use a darker background that works with photos
			preview.style.background = "rgba(0, 0, 0, 0.85)";
			preview.style.border = "1px solid rgba(255, 255, 255, 0.2)";
		} else {
			// Use manual background color if provided, otherwise fall back to automatic
			const backgroundColor =
				logoData.background || getContrastingBackground(logoData.color);
			const borderColor = getContrastingBorder(logoData.color);

			preview.style.background = backgroundColor;
			preview.style.border = `1px solid ${borderColor}`;
		}

		const img = document.createElement("img");
		img.src = logoData.url;
		img.alt = logoData.alt;
		img.loading = "lazy";

		preview.appendChild(img);
		return preview;
	}

	function processLogoElements() {
		// Process elements with data-logo-hover attribute
		const elements = document.querySelectorAll(
			"[data-logo-hover]:not(.simple-logo-processed)"
		);

		elements.forEach((element) => {
			const logoKey = element.dataset.logoHover;
			const logoData = logoConfig[logoKey];

			if (logoData) {
				element.classList.add("simple-logo-hover", "simple-logo-processed");
				const preview = createLogoPreview(logoData);
				element.appendChild(preview);
			}
		});
	}

	function init() {
		injectStyles();
		processLogoElements();

		// Set up mutation observer for dynamically added elements
		const observer = new MutationObserver((mutations) => {
			let shouldProcess = false;
			mutations.forEach((mutation) => {
				mutation.addedNodes.forEach((node) => {
					if (node.nodeType === Node.ELEMENT_NODE) {
						const element = node;
						if (
							element.matches &&
							(element.matches("[data-logo-hover]") ||
								element.querySelector("[data-logo-hover]"))
						) {
							shouldProcess = true;
						}
					}
				});
			});
			if (shouldProcess) {
				processLogoElements();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}

	// Initialize when DOM is ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	// Export for potential manual use
	window.SimpleLogoHover = {
		init: init,
		addLogo: function (key, config) {
			logoConfig[key] = config;
		},
		process: processLogoElements,
	};
})();

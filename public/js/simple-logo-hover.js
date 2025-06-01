(function () {
	"use strict";

	// Logo configuration - essential logos used in the portfolio
	const logoConfig = {
		react: {
			url: "/hover/react-svgrepo-com.svg",
			alt: "React",
			color: "#61DAFB",
			background: "rgba(0, 20, 30, 0.9)",
		},
		typescript: {
			url: "/hover/typescript-icon-svgrepo-com.svg",
			alt: "TypeScript",
			color: "#3178C6",
			background: "rgba(255, 255, 255, 0.95)",
		},
		linkedin: {
			url: "/hover/linkedin-icon-svgrepo-com.svg",
			alt: "LinkedIn",
			color: "#0A66C2",
			background: "rgba(255, 255, 255, 0.95)",
		},
		github: {
			url: "/hover/github-icon-svgrepo-com.svg",
			alt: "GitHub",
			color: "#161614",
			background: "rgba(255, 255, 255, 0.95)",
		},
		python: {
			url: "/hover/python-svgrepo-com.svg",
			alt: "Python",
			color: "#3776AB",
			background: "rgba(255, 255, 255, 0.95)",
		},
		javascript: {
			url: "/hover/javascript-svgrepo-com.svg",
			alt: "JavaScript",
			color: "#F7DF1E",
			background: "rgba(0, 0, 0, 0.9)",
		},
		nextjs: {
			url: "/hover/nextjs-svgrepo-com.svg",
			alt: "Next.js",
			color: "#000000",
			background: "rgba(255, 255, 255, 0.95)",
		},
		tailwindcss: {
			url: "/hover/tailwindcss-svgrepo-com.svg",
			alt: "Tailwind CSS",
			color: "#06B6D4",
			background: "rgba(255, 255, 255, 0.95)",
		},
		portland: {
			url: "/hover/Portland_Oregon_-_White_Stag_sign_at_dusk.jpg",
			alt: "Portland, Oregon - White Stag Sign",
			color: "#8B7355", // Warm brownish color representative of Portland's sunset/dusk tones
		},
		hci: {
			type: "text",
			alt: "Human-Computer Interaction",
			text: "Human–computer interaction (HCI) is the study of how people interact with computers and design of computer interfaces. It focuses on making digital interactions more intuitive, accessible, and user-friendly through research in usability, interface design, and user experience.",
			color: "#a8216b",
			background: "rgba(255, 255, 255, 0.95)",
		},
		jargon: {
			type: "text",
			alt: "Turns Jargon Into Plain Language",
			text: "I turn dense tech jargon into everyday language, so designers, execs, and clients immediately understand what’s at stake. Clear explanations cut miscommunication and keep projects moving.",
			color: "#ec1b4b",
			background: "rgba(255, 255, 255, 0.95)",
		},
		problem: {
			type: "text",
			alt: " Problem Solving ",
			text: "I break complex problems into bite-sized pieces, test quick hypotheses, and iterate until the simplest workable solution emerges—keeping projects on schedule and free of over-engineering.",
			color: "#f26a44",
			background: "rgba(255, 255, 255, 0.95)",
		},
		leadership: {
			type: "text",
			alt: " Team Leadership",
			text: "I keep the team on the same page, make space for ideas, and help folks help each other—so the project moves forward without the drama.",
			color: "#084db9",
			background: "rgba(255, 255, 255, 0.95)",
		},
		agile: {
			type: "text",
			alt: "Agile",
			text: "Comfortable working in Agile sprints—pitching in on stand-ups, refining tickets, and shipping small chunks each cycle.",
			color: "#2e9598",
			background: "rgba(255, 255, 255, 0.95)",
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

			.simple-logo-preview.text-preview {
				width: 320px;
				height: auto;
				max-height: 200px;
				padding: 16px;
				overflow-y: auto;
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
			}			.simple-logo-preview.image-preview img {
				object-fit: cover;
				border-radius: 6px;
			}			.simple-logo-preview.text-preview .preview-text {
				font-size: 0.8rem;
				line-height: 1.6;
				color: inherit;
				margin: 0;
				font-weight: 400;
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

		// Handle text-based previews
		if (logoData.type === "text") {
			preview.classList.add("text-preview");

			// Use provided background and set text color
			const backgroundColor =
				logoData.background || "rgba(255, 255, 255, 0.95)";
			const borderColor = getContrastingBorder(logoData.color);

			preview.style.background = backgroundColor;
			preview.style.border = `1px solid ${borderColor}`;
			preview.style.color = logoData.color;

			const textContent = document.createElement("p");
			textContent.className = "preview-text";
			textContent.textContent = logoData.text;

			preview.appendChild(textContent);
			return preview;
		}

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
		img.alt = logoData.alt ?? "Logo";
		img.loading = "lazy";
		img.decoding = "async";

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

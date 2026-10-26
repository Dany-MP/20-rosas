/* =========================================
   INFORMACIÓN DE LAS 20 ROSAS
========================================= */

const whiteRoses = [
    {
        number: 1,
        name: "Sinceridad",
        icon: "🤍",
        short: "Lo que siento no necesita fingirse.",
        description:
            "Esta rosa representa la sinceridad de mis sentimientos. " +
            "Lo que siento por ti nunca ha necesitado fingirse, porque " +
            "hay cosas que nacen del corazón y que simplemente son verdad."
    },
    {
        number: 2,
        name: "Respeto",
        icon: "🕊️",
        short: "Valorar tu corazón y tus decisiones.",
        description:
            "Te regalo esta rosa porque quiero respetar tu corazón, " +
            "tus decisiones, tus tiempos y tus sentimientos. " +
            "Para mí, quererte también significa respetar la persona que eres " +
            "y el camino que decidas seguir."
    },
    {
        number: 3,
        name: "Paz",
        icon: "☁️",
        short: "Desearte tranquilidad y bienestar.",
        description:
            "Representa el deseo de que encuentres tranquilidad, felicidad " +
            "y paz en tu vida. Quiero que, cuando pienses en mí, puedas " +
            "recordar también los momentos bonitos y la calma que mereces."
    },
    {
        number: 4,
        name: "Confianza",
        icon: "🤝",
        short: "Poder compartir lo que llevamos dentro.",
        description:
            "Esta rosa representa esa confianza que permite hablar con " +
            "el corazón, compartir pensamientos y expresar sentimientos " +
            "sin miedo. Es el deseo de que podamos conocernos nuevamente " +
            "con honestidad y comprensión."
    },
    {
        number: 5,
        name: "Admiración",
        icon: "✨",
        short: "Las cosas bonitas que sigo viendo en ti.",
        description:
            "Hay muchas cosas de ti que sigo admirando: tu forma de ser, " +
            "tus cualidades y esa manera especial en la que puedes dejar " +
            "una huella en las personas. El tiempo no ha borrado lo valiosa " +
            "que eres ante mis ojos."
    },
    {
        number: 6,
        name: "Perdón",
        icon: "🕊️",
        short: "Reconocer los errores y aprender de ellos.",
        description:
            "Esta rosa representa la importancia de reconocer los errores, " +
            "aprender de ellos y crecer como persona. No podemos cambiar " +
            "lo que pasó, pero sí podemos aprender de nuestra historia " +
            "y afrontar el presente con un corazón más consciente."
    },
    {
        number: 7,
        name: "Recuerdos",
        icon: "🌷",
        short: "Momentos que siguen teniendo un lugar especial.",
        description:
            "Representa todos esos momentos que compartimos y que forman " +
            "parte de nuestra historia. Aunque el tiempo avance y las cosas " +
            "cambien, hay recuerdos que siguen teniendo un lugar especial " +
            "en el corazón."
    },
    {
        number: 8,
        name: "Gratitud",
        icon: "💛",
        short: "Agradecer lo que significaste en mi vida.",
        description:
            "Te agradezco por haber formado parte de mi vida, por los " +
            "momentos compartidos y por todo lo que aprendí a tu lado. " +
            "Conocerte dejó algo bonito en mí, y por eso siempre habrá " +
            "un motivo para recordar esta historia con gratitud."
    },
    {
        number: 9,
        name: "Esperanza",
        icon: "🌟",
        short: "La luz que aparece cuando más importa.",
        description:
            "Esta rosa representa la esperanza que puede surgir incluso " +
            "después de los momentos difíciles. Es esa pequeña luz que nos " +
            "recuerda que todavía podemos aprender, crecer y descubrir " +
            "cosas bonitas en el camino."
    },
    {
        number: 10,
        name: "Pureza",
        icon: "🤍",
        short: "Conservar lo bonito de nuestra historia.",
        description:
            "Representa mi deseo de conservar lo bonito de lo que vivimos, " +
            "sin negar los errores ni olvidar las lecciones. Es valorar " +
            "aquello que fue sincero y guardar con cariño lo que nuestra " +
            "historia significó."
    }
];


const redRoses = [
    {
        number: 11,
        name: "Amor",
        icon: "❤️",
        short: "Sentimientos que no desaparecen fácilmente.",
        description:
            "Esta rosa representa el amor y los sentimientos que, a pesar " +
            "del tiempo y de los cambios, no siempre desaparecen. Hay personas " +
            "que dejan una huella tan profunda que siguen ocupando un lugar " +
            "especial en el corazón."
    },
    {
        number: 12,
        name: "Pasión",
        icon: "🔥",
        short: "Eso que hace latir el corazón con intensidad.",
        description:
            "Representa esa intensidad que puede despertar una persona " +
            "especial: la emoción de verla, la alegría de compartir tiempo " +
            "juntos y esa sensación que nos recuerda que todavía podemos " +
            "sentir algo profundamente."
    },
    {
        number: 13,
        name: "Valentía",
        icon: "🛡️",
        short: "Atreverse a expresar lo que uno siente.",
        description:
            "Se necesita valentía para reconocer los propios sentimientos, " +
            "aceptar los errores y atreverse a dar un nuevo paso, incluso " +
            "cuando existe el temor de salir lastimado. Esta rosa representa " +
            "el valor de hablar desde el corazón."
    },
    {
        number: 14,
        name: "Nostalgia",
        icon: "🌹",
        short: "Recordar con cariño lo que alguna vez vivimos.",
        description:
            "Hay momentos que uno quisiera volver a visitar, aunque sea " +
            "por un instante. Esta rosa representa la nostalgia de recordar " +
            "lo que compartimos, las sonrisas, las conversaciones y esos " +
            "pequeños detalles que hicieron especial nuestra historia."
    },
    {
        number: 15,
        name: "Ilusión",
        icon: "✨",
        short: "La emoción de imaginar lo que podríamos vivir.",
        description:
            "Esta rosa representa la ilusión de seguir descubriendo quiénes " +
            "somos hoy, de compartir nuevas conversaciones y de conocer " +
            "las experiencias que todavía nos quedan por vivir. No se trata " +
            "de exigir un futuro, sino de valorar la oportunidad del presente."
    },
    {
        number: 16,
        name: "Cariño",
        icon: "🩷",
        short: "Un sentimiento bonito que permanece.",
        description:
            "A pesar de lo que haya sucedido, no guardo malos sentimientos " +
            "hacia ti. Esta rosa representa el cariño que permanece, el deseo " +
            "de verte bien y la alegría de saber que todavía podemos " +
            "compartir momentos y conocernos de nuevo."
    },
    {
        number: 17,
        name: "Deseo",
        icon: "💫",
        short: "Volver a coincidir, sonreír y abrazarnos.",
        description:
            "Representa las ganas de volver a coincidir contigo, conversar, " +
            "reír juntos y compartir momentos que nazcan de manera natural. " +
            "Es el deseo de seguir conociéndote y disfrutar de esos pequeños " +
            "instantes que pueden significar tanto."
    },
    {
        number: 18,
        name: "Lealtad",
        icon: "❤️‍🔥",
        short: "Ser fiel a lo que guardo en mi corazón.",
        description:
            "Esta rosa representa la lealtad a los sentimientos que he " +
            "reconocido dentro de mí y al valor que le doy a nuestra historia. " +
            "Significa actuar con honestidad, respetar tus decisiones y " +
            "demostrar con hechos que mis intenciones son sinceras."
    },
    {
        number: 19,
        name: "Eternidad",
        icon: "♾️",
        short: "Hay huellas que el tiempo no consigue borrar.",
        description:
            "No significa que podamos saber qué sucederá mañana, sino " +
            "que algunas personas dejan una huella que permanece con los años. " +
            "Esta rosa representa ese lugar especial que alguien puede " +
            "conservar en nuestra historia, incluso cuando la vida cambia."
    },
    {
        number: 20,
        name: "Tú",
        icon: "🌹",
        short: "Karen Sofía Poot Flores: la rosa más especial.",
        description:
            "Esta última rosa no representa solamente un sentimiento. " +
            "Te representa a ti, Karen Sofía Poot Flores. Porque, entre " +
            "tantas palabras y significados, quería que el detalle terminara " +
            "hablando de la persona que lo inspiró. Gracias por formar parte " +
            "de mi historia y por darme la oportunidad de volver a conocerte."
    }
];


/* =========================================
   CREAR LAS TARJETAS
========================================= */

function createRoseCard(rose, color) {
    const card = document.createElement("article");

    card.className = "rose-card";

    card.innerHTML = `
        <span class="rose-number">
            ROSA ${String(rose.number).padStart(2, "0")}
        </span>

        <div class="rose-icon" aria-hidden="true">
            ${rose.icon}
        </div>

        <h3>${rose.name}</h3>

        <p class="rose-short">
            ${rose.short}
        </p>

        <div class="rose-description" id="rose-description-${rose.number}">
            ${rose.description}
        </div>

        <span class="rose-toggle">
            Descubrir significado +
        </span>
    `;

    const toggle = card.querySelector(".rose-toggle");

    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-expanded", "false");
    card.setAttribute(
        "aria-controls",
        `rose-description-${rose.number}`
    );

    function toggleCard() {
        const isOpen = card.classList.toggle("is-open");

        card.setAttribute("aria-expanded", String(isOpen));

        toggle.textContent = isOpen
            ? "Cerrar significado −"
            : "Descubrir significado +";
    }

    card.addEventListener("click", toggleCard);

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleCard();
        }
    });

    return card;
}


/* =========================================
   MOSTRAR LAS 20 ROSAS
========================================= */

function renderRoses() {
    const whiteGrid = document.getElementById("white-roses-grid");
    const redGrid = document.getElementById("red-roses-grid");

    if (!whiteGrid || !redGrid) {
        console.error("No se encontraron los contenedores de las rosas.");
        return;
    }

    whiteRoses.forEach((rose) => {
        whiteGrid.appendChild(createRoseCard(rose, "white"));
    });

    redRoses.forEach((rose) => {
        redGrid.appendChild(createRoseCard(rose, "red"));
    });
}


/* =========================================
   ANIMACIÓN DE PÉTALOS
========================================= */

function createPetal() {
    const container = document.getElementById("floating-petals");

    if (!container) return;

    // Evita crear demasiados pétalos al mismo tiempo.
    if (container.childElementCount > 15) return;

    const petal = document.createElement("span");

    const petalTypes = [
        "",
        "petal-light",
        "petal-gold"
    ];

    const randomType =
        petalTypes[Math.floor(Math.random() * petalTypes.length)];

    petal.className = `petal ${randomType}`;

    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${7 + Math.random() * 7}s`;
    petal.style.animationDelay = `${Math.random() * 2}s`;
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;

    const size = 8 + Math.random() * 9;

    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.35}px`;

    container.appendChild(petal);

    const duration = parseFloat(petal.style.animationDuration);

    setTimeout(() => {
        petal.remove();
    }, (duration + 3) * 1000);
}


/* =========================================
   INICIALIZAR LA PÁGINA
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    renderRoses();

    // Pétalos discretos para decorar la página.
    createPetal();

    setInterval(() => {
        createPetal();
    }, 1800);
});
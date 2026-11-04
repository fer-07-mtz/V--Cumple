
const tallo = '<path d="M30 52 C27 80 33 100 30 120" stroke="#3a8a3a" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
const hojas = '<path d="M30 98 C17 94 11 84 14 77 C24 79 30 87 30 98Z" fill="#4caf50"/>' +
              '<path d="M30 84 C43 80 49 70 46 63 C36 65 30 73 30 84Z" fill="#43a047"/>';


const FLORES = {

  /* ---------------------- ROSA ---------------------- */
  rosa: {
    nombre: "Rosas",
    colores: [["#b3162b","#e8475a","#d12a40"], ["#c2255c","#f783ac","#e64980"], ["#d9480f","#ffa94d","#f76707"], ["#c9a0b0","#fff0f5","#f8d7e3"]],
    
dibujar(c) {
  return `<svg viewBox="0 0 60 120">${tallo}${hojas}
    <path d="M30 58 C22 58 16 54 13 49 C19 52 25 52 30 52Z" fill="#3f8f3f"/>
    <path d="M30 58 C38 58 44 54 47 49 C41 52 35 52 30 52Z" fill="#3f8f3f"/>
    <path d="M11 34 C9 50 19 60 30 60 C41 60 51 50 49 34 C43 40 17 40 11 34Z" fill="${c[0]}"/>
    <path d="M13 28 C6 40 12 55 28 57 C20 48 19 36 24 26Z" fill="${c[2]}"/>
    <path d="M47 28 C54 40 48 55 32 57 C40 48 41 36 36 26Z" fill="${c[2]}"/>
    <path d="M17 27 C13 16 21 9 29 11 C23 15 21 21 22 29Z" fill="${c[2]}"/>
    <path d="M43 27 C47 16 39 9 31 11 C37 15 39 21 38 29Z" fill="${c[2]}"/>
    <path d="M22 30 C20 14 40 14 38 30 C37 44 23 44 22 30Z" fill="${c[1]}"/>
    <path d="M30 17 C23 22 24 33 31 38" stroke="${c[0]}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M30 17 C38 22 36 31 32 35" stroke="${c[0]}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M15 36 C17 54 43 54 45 36 C39 46 21 46 15 36Z" fill="${c[2]}" stroke="${c[0]}" stroke-width=".8"/>
  </svg>`;
}
  },

  /* ---------------------- LAVANDA ---------------------- */
  lavanda: {
    nombre: "Lavandas",
    colores: [["#8e6bd1", "#b79df0"], ["#7a5bc0", "#a78bfa"], ["#9b7ede", "#c9b6ff"]],

    dibujar(c) {
      let botones = "";
      for (let i = 0; i < 9; i++) { 
        const y = 12 + i * 6;
        const w = 5.5 - i * 0.12;
        botones += `<ellipse cx="${30 - 5}" cy="${y}" rx="${w}" ry="3.4" transform="rotate(-35 ${25} ${y})" fill="${c[i % 2]}"/>`;
        botones += `<ellipse cx="${30 + 5}" cy="${y + 3}" rx="${w}" ry="3.4" transform="rotate(35 ${35} ${y + 3})" fill="${c[(i + 1) % 2]}"/>`;
      }
      return `<svg viewBox="0 0 60 120">
        <!-- Tallo largo (la lavanda lo tiene más delgado y derechito) -->
        <path d="M30 10 C29 50 31 90 30 120" stroke="#5a9a4a" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Hojas largas y delgadas -->
        <path d="M30 105 C20 98 14 88 16 80 C24 84 30 94 30 105Z" fill="#6aa84f"/>
        <path d="M30 100 C40 94 46 84 44 76 C36 80 30 90 30 100Z" fill="#5f9c47"/>
        ${botones}
        <!-- El botoncito de la punta -->
        <ellipse cx="30" cy="7" rx="3" ry="5" fill="${c[1]}"/>
      </svg>`;
    }
  },

  /* ---------------------- LIRIO ---------------------- */
  lirio: {
    nombre: "Lirios",
    colores: [["#ffffff", "#ffd6e7"], ["#fff4e0", "#ffb36b"], ["#ffe3ee", "#ff8fb8"], ["#ffffff", "#ffe08a"]],

    dibujar(c) {
      let petalos = "";
      for (let i = 0; i < 6; i++) {
        const ang = i * 60;
        petalos += `<g transform="rotate(${ang} 30 36)">
          <ellipse cx="30" cy="20" rx="7.5" ry="17" fill="${c[0]}" stroke="${c[1]}" stroke-width="1.2"/>
          <path d="M30 12 L30 34" stroke="${c[1]}" stroke-width="1.6" stroke-linecap="round"/>
        </g>`;
      }
      let estambres = "";
      for (let i = 0; i < 5; i++) {
        const ang = -50 + i * 25;
        estambres += `<g transform="rotate(${ang} 30 36)">
          <line x1="30" y1="36" x2="30" y2="22" stroke="#e8c15a" stroke-width="1.2"/>
          <ellipse cx="30" cy="21" rx="1.6" ry="3" fill="#e07a1f"/>
        </g>`;
      }
      return `<svg viewBox="0 0 60 120">${tallo}${hojas}${petalos}${estambres}
        <!-- Botoncito verde del centro -->
        <circle cx="30" cy="36" r="3" fill="#9acd5a"/>
      </svg>`;
    }
  },

  /* ---------------------- GIRASOL ---------------------- */
  girasol: {
    nombre: "Girasoles",

    colores: [["#ffc800", "#6b3e1b", "#4a2a10"], ["#ffb300", "#5a3416", "#3d230d"], ["#ffd633", "#7a4a22", "#52301a"]],

    dibujar(c) {
      let petalos = "";
      const n = 14;
      for (let i = 0; i < n; i++) {
        const ang = i * (360 / n);
        petalos += `<ellipse cx="30" cy="16" rx="4.2" ry="10" transform="rotate(${ang} 30 36)" fill="${c[0]}" opacity=".85"/>`;
      }
      for (let i = 0; i < n; i++) {
        const ang = i * (360 / n) + 360 / n / 2;
        petalos += `<ellipse cx="30" cy="18" rx="4" ry="9" transform="rotate(${ang} 30 36)" fill="${c[0]}"/>`;
      }
      let semillas = "";
      for (let i = 0; i < 18; i++) {
        const ang = i * 137.5 * Math.PI / 180;
        const r = 1.2 + Math.sqrt(i) * 1.8;
        semillas += `<circle cx="${(30 + Math.cos(ang) * r).toFixed(1)}" cy="${(36 + Math.sin(ang) * r).toFixed(1)}" r="0.9" fill="#c98b4a"/>`;
      }
      return `<svg viewBox="0 0 60 120">
        <!-- Tallo más gordito y hojas más grandes que las otras flores -->
        <path d="M30 56 C27 82 33 102 30 120" stroke="#3a8a3a" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M30 100 C14 96 7 84 11 75 C23 77 30 88 30 100Z" fill="#4caf50"/>
        <path d="M30 86 C46 82 53 70 49 62 C37 64 30 74 30 86Z" fill="#43a047"/>
        ${petalos}
        <!-- El centro café del girasol (uno grande y otro más oscuro encima) -->
        <circle cx="30" cy="36" r="10" fill="${c[1]}"/>
        <circle cx="30" cy="36" r="6.5" fill="${c[2]}"/>
        ${semillas}
      </svg>`;
    }
  },

  /* ---------------------- PEONÍA ---------------------- */
  peonia: {
    nombre: "Peonías",
    colores: [["#f8b4cf", "#f48fb1", "#ec6a9a"], ["#ffd6e0", "#ffb3c6", "#ff8fab"], ["#e8a0d0", "#d77ab8", "#c25aa0"], ["#fff0f3", "#ffccd5", "#ffa6b8"]],

    dibujar(c) {
      const anillo = (cant, radio, tam, color, giro) => {
        let s = "";
        for (let i = 0; i < cant; i++) {
          const ang = (i * 360 / cant + giro) * Math.PI / 180;
          const x = (30 + Math.cos(ang) * radio).toFixed(1);
          const y = (38 + Math.sin(ang) * radio).toFixed(1);
          s += `<circle cx="${x}" cy="${y}" r="${tam}" fill="${color}" stroke="${c[2]}" stroke-width=".8" stroke-opacity=".5"/>`;
        }
        return s;
      };
      return `<svg viewBox="0 0 60 120">${tallo}${hojas}
        ${anillo(8, 15, 10, c[0], 0)}
        ${anillo(7, 10, 9, c[1], 20)}
        ${anillo(5, 5.5, 7.5, c[2], 40)}
        <circle cx="30" cy="38" r="4.5" fill="${c[1]}"/>
        <!-- Rayitas del centro que le dan el look de pétalos arrugaditos -->
        <path d="M26 36 Q30 32 34 36 M27 41 Q30 44 33 41" stroke="${c[2]}" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      </svg>`;
    }
  }
};



const campo = document.getElementById("campo");
const selector = document.getElementById("selector");

let tipoActual = "rosa";



Object.entries(FLORES).forEach(([clave, flor]) => {
  const b = document.createElement("button");
  b.dataset.tipo = clave;
  b.innerHTML = flor.dibujar(flor.colores[0]) + `<span>${flor.nombre}</span>`;
  b.addEventListener("click", () => elegir(clave));
  selector.appendChild(b);
});

const reiniciar = document.createElement("button");
reiniciar.className = "accion";
reiniciar.textContent = "🔄 Replantar";
reiniciar.addEventListener("click", () => sembrar(tipoActual));
selector.appendChild(reiniciar);

function marcarActivo() {
  selector.querySelectorAll("button[data-tipo]").forEach(b =>
    b.classList.toggle("activo", b.dataset.tipo === tipoActual));
}



function azar(min, max) { return Math.random() * (max - min) + min; }

function plantar(tipo, x, y, retraso = 0) {
  const flor = FLORES[tipo];

  const color = flor.colores[Math.floor(Math.random() * flor.colores.length)];

  const escala = 0.45 + (y / 100) * 0.95;

  const ancho = 58 * escala;

  const div = document.createElement("div");
  div.className = "flor";
  div.style.left = `calc(${x}% - ${ancho / 2}px)`;
  div.style.bottom = `${100 - y - 4}%`;
  div.style.width = `${ancho}px`;
  div.style.height = `${ancho * 2}px`;
  div.style.zIndex = Math.round(y);

  div.style.animationDelay = `${retraso}s, ${azar(0, 3)}s`;
  div.style.animationDuration = `.6s, ${azar(3, 5)}s`;

  div.innerHTML = flor.dibujar(color);
  campo.appendChild(div);
}

function sembrar(tipo) {
  campo.innerHTML = "";

  const cantidad = window.innerWidth < 600 ? 45 : 90;

  for (let i = 0; i < cantidad; i++) {
    plantar(tipo, azar(2, 98), azar(8, 96), i * 0.012);
  }
}

function elegir(tipo) {
  tipoActual = tipo;
  marcarActivo();
  sembrar(tipo);
}



campo.addEventListener("click", (e) => {
  const r = campo.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width) * 100;
  const y = ((e.clientY - r.top) / r.height) * 100;
  plantar(tipoActual, x, y);
});



elegir("rosa");
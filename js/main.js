// Fonctions communes à toutes les pages.
const today = new Date().toISOString().slice(0, 10);

const isUpcoming = (e) => e.date >= today;
const typeLabel = { defile: "Défilé", animation: "Animation" };

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric"
  });
}

function creatorName(id) {
  const c = window.CREATORS.find((c) => c.id === id);
  return c ? c.nom : id;
}

function eventCard(e) {
  const names = e.createurs.map(creatorName).join(", ");
  return `
    <article class="card">
      <img src="${e.image}" alt="" loading="lazy">
      <div class="card-body">
        <span class="tag">${typeLabel[e.type] || e.type}</span>
        <h3>${e.titre}</h3>
        <p class="meta">${formatDate(e.date)} · ${e.lieu}</p>
        <p>${e.description}</p>
        <p class="meta">${names}</p>
      </div>
    </article>`;
}

function creatorCard(c) {
  return `
    <article class="card">
      <img src="${c.image}" alt="" loading="lazy">
      <div class="card-body">
        <span class="tag">${c.specialite}</span>
        <h3>${c.nom}</h3>
        <p>${c.bio}</p>
      </div>
    </article>`;
}

function render(selector, items, card, emptyMsg) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = items.length ? items.map(card).join("") : `<p class="empty">${emptyMsg}</p>`;
}

const byDateAsc = (a, b) => a.date.localeCompare(b.date);
const byDateDesc = (a, b) => b.date.localeCompare(a.date);

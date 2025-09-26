/* UneInventée - site d'actualités fictives
   Contenu : série d'articles pré-rédigés (satire / absurde).
   Fonctionnalités :
   - affichage grille
   - filtres catégories
   - recherche
   - ouverture d'un article en modal + partage/impression
*/

const articles = [
  {
    id: "a1",
    title: "Napoléon ouvre une chaîne de boulangeries lunaires",
    date: "21 avril 1803 (édition réimaginée)",
    category: "Histoire remix",
    era: "XIXe réinventé",
    excerpt: "La franchise 'Croissant Impérial' annonce l'ouverture prochaine d'un premier point de vente dans la mer de la Tranquillité.",
    imageLabel: "Boulangerie lunaire",
    content: `<p>Dans une annonce surprise, Napoléon Bonaparte dévoile son plan pour 'soulager la faim impériale jusqu'à la Lune'. Les croissants seraient livrés sans gravité, et la formule secrète inclurait un soupçon de poudre d'étoile.</p>
              <p>Les critiques culinaires se demandent si la pâte tiendra le voyage, tandis que les financiers calculent déjà la TVA interplanétaire.</p>`
  },
  {
    id: "a2",
    title: "Cléopâtre lance 'PharaonMatch', l'app de rencontres dynastiques",
    date: "3 juin - époque fantaisie",
    category: "Technologie anachronique",
    era: "Égypte antique (remix)",
    excerpt: "Une nouvelle application propose de lier d'anciennes maisons royales via un swipe hautement diplomatique.",
    imageLabel: "Application papyrus",
    content: `<p>Cléopâtre, toujours à la pointe du réseautage, présente PharaonMatch : 'Trouvez votre alliance en 3 hiéroglyphes'. Les filtres incluent 'barque disponible' et 'aspic-friendly'.</p>
              <p>Les historiens s'amusent tandis que les scribes téléchargent déjà les meilleurs profils.</p>`
  },
  {
    id: "a3",
    title: "La Tour Eiffel transformée en toboggan géant chaque dimanche",
    date: "Dimanche prochain (édition spéciale)",
    category: "Urbanisme fantaisiste",
    era: "XXIe remix",
    excerpt: "Les Parisiens se pressent pour descendre la Dame de fer sur des bouées festives — réservation fortement conseillée.",
    imageLabel: "Toboggan Eiffel",
    content: `<p>La mairie annonce la transformation temporaire de la Tour Eiffel en toboggan familial. Un plan de sécurité inclut des limitations de style et l'interdiction des costumes à épines.</p>
              <p>Le projet, surnommé 'Slid'Eiffel', devrait durer un week-end par mois et générer un nouveau parfum : 'Métal & Tournesol'.</p>`
  },
  {
    id: "a4",
    title: "Léonard de Vinci vend son grille-pain à avance automatique",
    date: "15 septembre (Renaissance rééditée)",
    category: "Inventions farfelues",
    era: "Renaissance Inventive",
    excerpt: "Le Codex des Appétits présente un mécanisme qui toaste, peint et (parfois) fait des esquisses sur les tartines.",
    imageLabel: "Grille-pain à hélice",
    content: `<p>Un nouveau brevet signé 'LdV' promet de révolutionner le petit-déjeuner. Le prototype est équipé d'hélices, d'un bras robotique et d'un module d'aéropaint pour décorer vos tranches.</p>
              <p>Des dégustateurs historiques affirment que l'expérience est 'divinement croustillante'.</p>`
  },
  {
    id: "a5",
    title: "Un pigeon reçoit le prix Nobel de la Paix (catégorie messagerie)",
    date: "1er avril (édition hors-série)",
    category: "Humour urbain",
    era: "Ère urbaine",
    excerpt: "Pour services rendus en livraison de lettres entre balcons, sans perdre une seule missive malgré les tempêtes.",
    imageLabel: "Pigeon Nobel",
    content: `<p>Le comité Nobel a décidé de récompenser un pigeon de ville pour sa constance. Le lauréat, connu sous le nom de 'Plume', aurait acheminé plus de 1 234 lettres d'amour sans échec.</p>
              <p>La remise du prix s'est faite sans discours, mais avec beaucoup de miettes.</p>`
  },
  {
    id: "a6",
    title: "Les dinosaures reviennent pour le week-end : guide pratique",
    date: "Prochain week-end (événement spécial)",
    category: "Spectacles improbables",
    era: "Préhistoire reprogrammée",
    excerpt: "Organisateurs recommandent baskets robustes et crème solaire à large spectre — parking dinosaures prévu.",
    imageLabel: "Dinos au parc",
    content: `<p>Pour célébrer l'histoire naturelle, les dinosaures font un come-back pour un festival familial. Stand 'Selfies avec T-Rex' ouvert de 10h à 18h.</p>
              <p>La billetterie conseille aux visiteurs d'éviter les sandwichs croustillants près des herbivores curieux.</p>`
  },
  {
    id: "a7",
    title: "Chants médiévaux remixés en tube pop par un ménestrel anonyme",
    date: "Édition musicale (aujourd'hui)",
    category: "Culture remix",
    era: "Moyen Âge moderne",
    excerpt: "Un remix transforme les carols en hits de danse ; les tavernes se mettent à streamer en direct.",
    imageLabel: "Ménestrel DJ",
    content: `<p>Un ménestrel inconnu a publié un EP 'Cantigas & BPM' qui mélange luth et synthé. Les jeunes de la contrée dansent déjà en cercle numérique.</p>
              <p>Critiques : 'La chorale est plus entraînante qu'un banquet royal'.</p>`
  },
  {
    id: "a8",
    title: "Atlas confond son service avec une start-up de livraison",
    date: "19 mars (édition startup)",
    category: "Business absurde",
    era: "Mythologie corporate",
    excerpt: "Slogan : 'On porte le monde pour vous (livraison estimée : 30 ans)'.",
    imageLabel: "Atlas start-up",
    content: `<p>Atlas lance 'Worldly', une app qui promet de porter le monde à domicile. Abonnements disponibles : Solo, Duo et Édition Titan.</p>
              <p>Note légale : le service n'inclut pas le démontage de continents ni le repositionnement des océans.</p>`
  },
  {
  id: "a9",
  title: "Albert Einstein ouvre une pizzeria quantique",
  date: "14 mars (anniversaire relatif)",
  category: "Science absurde",
  era: "XXe siècle alternatif",
  excerpt: "Les parts de pizza sont servies à la fois chaudes et froides, selon l'observateur.",
  imageLabel: "Pizza relativiste",
  content: `<p>La première pizzeria quantique au monde ouvre ses portes à Zurich. Sur le menu : Margherita superposée, Pepperoni en intrication, et Calzone probabiliste.</p>
            <p>Einstein aurait déclaré : 'Dieu ne joue pas aux dés, mais il mange bien'.</p>`
},
{
  id: "a10",
  title: "La Joconde obtient un compte OnlySmiles",
  date: "Aujourd'hui (édition muséale)",
  category: "Culture remix",
  era: "Renaissance moderne",
  excerpt: "Léonard de Vinci applaudit la modernisation : 'Enfin, elle peut sourire sans cadre !'",
  imageLabel: "Joconde 2.0",
  content: `<p>Le Louvre annonce que Mona Lisa aura désormais son propre réseau social pour partager des sourires. L’abonnement premium débloque des clins d’œil inédits et des selfies baroques.</p>
            <p>Critiques : 'Le mystère reste intact, mais avec des filtres Sepia'.</p>`
},
{
  id: "a11",
  title: "Zeus lance sa chaîne météo : 'Orages garantis ou remboursés'",
  date: "Météo divine (ce soir)",
  category: "Mythologie moderne",
  era: "Grèce Antique 2.0",
  excerpt: "Des prévisions très électrisantes — avec une rubrique 'Foudre & Lifestyle'.",
  imageLabel: "Zeus météo",
  content: `<p>La nouvelle application 'MétéoDivine' permet de consulter les orages personnalisés par quartier. Les bulletins sont chantés par les Muses tous les matins.</p>
            <p>Zeus déclare : 'Le tonnerre, c’est mon business. Et les averses sont stylées'.</p>`
}
];

// --- DOM refs
const grid = document.getElementById('grid');
const categoriesEl = document.getElementById('categories');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('search');
const btnNew = document.getElementById('btn-new');

// Modal
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalImage = document.getElementById('modal-image');
const modalBody = document.getElementById('modal-body');
const modalTags = document.getElementById('modal-tags');
const modalClose = document.getElementById('modal-close');
const shareBtn = document.getElementById('share-btn');
const printBtn = document.getElementById('print-btn');

let currentCategory = 'all';

// Utility
function uniqueCategories(list){
  const set = new Set(list.map(a=>a.category));
  return Array.from(set);
}

function createCard(article){
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="thumb">${escapeHtml(article.imageLabel)}</div>
    <h3>${escapeHtml(article.title)}</h3>
    <p class="excerpt">${escapeHtml(article.excerpt)}</p>
    <div class="meta">
      <span>${escapeHtml(article.category)}</span>
      <div>
        <small style="color:#9b897f">${escapeHtml(article.date)}</small>
        <button class="open" data-id="${article.id}">Voir</button>
      </div>
    </div>
  `;
  return card;
}

function renderGrid(list){
  grid.innerHTML = '';
  if(list.length === 0){
    grid.innerHTML = `<div style="padding:30px;background:#fff;border-radius:10px;border:1px dashed #eee;color:#7b6b5f">Aucun article trouvé.</div>`;
    return;
  }
  list.forEach(a=>{
    grid.appendChild(createCard(a));
  });
  // Attach open listeners
  grid.querySelectorAll('button.open').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      openArticle(id);
    });
  });
}

function renderCategories(){
  const cats = uniqueCategories(articles);
  categoriesEl.innerHTML = '';
  categoryFilter.innerHTML = `<option value="all">Toutes catégories</option>`;
  cats.forEach(c=>{
    // chips
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = c;
    chip.addEventListener('click', ()=>{
      // toggle active
      document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = c;
      categoryFilter.value = c;
      applyFilters();
    });
    categoriesEl.appendChild(chip);
    // select
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    categoryFilter.appendChild(opt);
  });
}

// Filters & search
function applyFilters(){
  const q = (searchInput.value || '').trim().toLowerCase();
  const cat = (categoryFilter.value === 'all') ? 'all' : categoryFilter.value;
  const filtered = articles.filter(a=>{
    const inCat = (cat === 'all') ? true : (a.category === cat);
    const inQ = q === '' ? true :
      (a.title.toLowerCase().includes(q) ||
       a.excerpt.toLowerCase().includes(q) ||
       a.content.toLowerCase().includes(q) ||
       a.category.toLowerCase().includes(q));
    return inCat && inQ;
  });
  renderGrid(filtered);
}

// Modal actions
function openArticle(id){
  const a = articles.find(x=>x.id === id);
  if(!a) return;
  modalTitle.textContent = a.title;
  modalMeta.textContent = `${a.date} • ${a.era} • ${a.category}`;
  modalImage.innerHTML = `<div style="font-weight:700;color:#8b6f63">${escapeHtml(a.imageLabel)}</div>`;
  modalBody.innerHTML = a.content;
  modalTags.innerHTML = '';
  // tags simulated from title words
  const tags = a.title.split(' ').slice(0,4).map(t=>t.replace(/[^\wàâéèêçùîôü-]/gi,''));
  tags.forEach(t=>{
    const el = document.createElement('span');
    el.className = 'tag';
    el.textContent = t;
    modalTags.appendChild(el);
  });
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

// Share (navigator.share if available)
async function shareCurrentArticle(){
  const title = modalTitle.textContent;
  const text = modalMeta.textContent;
  try{
    if(navigator.share){
      await navigator.share({title, text, url: window.location.href});
    } else {
      // fallback: copy link
      await navigator.clipboard.writeText(`${title} — ${window.location.href}`);
      alert('Lien copié dans le presse-papiers.');
    }
  }catch(err){
    alert('Partage indisponible.');
  }
}

// Small helper to escape text nodes
function escapeHtml(s){
  if(!s) return '';
  return s.replace(/[&<>"']/g, function(m){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
  });
}

// --- Init
renderCategories();
renderGrid(articles);

// Events
categoryFilter.addEventListener('change', (e)=>{
  const v = e.target.value;
  currentCategory = v;
  // toggle chip active
  document.querySelectorAll('.chip').forEach(ch=>{
    if(ch.textContent === v) ch.classList.add('active');
    else ch.classList.remove('active');
  });
  applyFilters();
});

searchInput.addEventListener('input', ()=>{
  applyFilters();
});

btnNew.addEventListener('click', ()=>{
  // simple refresh: reset search and show all
  searchInput.value = '';
  categoryFilter.value = 'all';
  document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
  applyFilters();
});

// Modal handlers
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{
  if(e.target === modal) closeModal();
});

shareBtn.addEventListener('click', shareCurrentArticle);
printBtn.addEventListener('click', ()=>{
  // print only the modal content
  const printWindow = window.open('', '_blank', 'width=900,height=700');
  const html = `
    <html><head><title>${modalTitle.textContent}</title>
    <style>body{font-family:Georgia, serif;padding:20px;color:#222} h1{color:${'#b41e3a'}}</style>
    </head><body>${document.querySelector('.modal-card').innerHTML}</body></html>`;
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>{ printWindow.print(); }, 500);
});

// Accessibility: close modal with Esc
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeModal();
});

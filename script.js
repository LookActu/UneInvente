/* UneInventée - site d'actualités fictives
   Contenu : série d'articles pré-rédigés (satire / absurde).
   Fonctionnalités :
   - affichage grille
   - filtres catégories
   - recherche
   - ouverture d'un article en modal + partage/impression
*/

// Détection tactile pour ajuster UX mobile
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.body.classList.add('is-touch');
}

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
  },
  {
    id: "a12",
    title: "Un jardinier municipal plante des rêves dans les parterres",
    date: "Matin brumeux (édition locale)",
    category: "Magie urbaine",
    era: "Contemporain poétique",
    excerpt: "Les habitants se réveillent avec des éclats de chansons et de souvenirs plantés entre les tulipes.",
    imageLabel: "Rêves en pot",
    content: `<p>Depuis le début du mois, des bancs publics diffusent de doux souvenirs et les ronds-points exhalent des harmonies. Le jardinier, connu sous le nom de 'M. Chlorophylle', refuse d'expliquer sa méthode.</p>
              <p>Les psychologues locaux invitent à la prudence : 'Ne cueillez pas un rêve déjà petit-déjeuner'.</p>`
  },
  {
    id: "a13",
    title: "La Lune vend ses premières parcelles pour mini-terrasses",
    date: "Vente inaugurale (étoilée)",
    category: "Immobilier spatial",
    era: "Futur rapproché",
    excerpt: "Offre spéciale : vue sur Terre, livraison incluse (hors gravité).",
    imageLabel: "Terrasse lunaire",
    content: `<p>Une agence immobilière annonce la commercialisation de parcelles lunaires pour micro-terrasses. Les promoteurs promettent 'un barbecue sans fumée' et 'coucher de Terre garanti'.</p>
              <p>Les primo-accédants s'intéressent surtout aux Wi-Fi disponibles sur orbite.</p>`
  },
  {
    id: "a14",
    title: "Un chef étoilé ouvre un bistrot pour fantômes",
    date: "Soirée spectrale (réservation requise)",
    category: "Gastronomie insolite",
    era: "Contemporain surnaturel",
    excerpt: "Menu : consommés invisibles et soufflés évanescents, vins d'outre-tombe.",
    imageLabel: "Service spectral",
    content: `<p>Le restaurant, baptisé 'Au-delà des Saveurs', propose un menu dégustation spécialement conçu pour palais immatériels. Les critiques saluent 'une ambiance qui hante délicieusement'.</p>
              <p>Le sommelier recommande l'accord avec un brouillard léger.</p>`
  },
  {
    id: "a15",
    title: "Des bibliothécaires organisent des concours de chuchotements",
    date: "Mercredi (silence compétitif)",
    category: "Culture ludique",
    era: "Urbain moderne",
    excerpt: "Technique, intensité et timbre : tout est évalué pour décrocher le titre de Maître-Murmure.",
    imageLabel: "Concours chuchoteurs",
    content: `<p>Le concours attire des amateurs d'intonation de tous âges. Les critères incluent clarté, mystère et capacité à atteindre la dernière étagère sans siffler.</p>
              <p>Le vainqueur repart avec une cloche en feutre et un abonnement à vie à la section poésie.</p>`
  },
  {
    id: "a16",
    title: "Un marathon de sieste bat des records de participation",
    date: "Dimanche paresseux",
    category: "Événements ville",
    era: "Présent relax",
    excerpt: "Zones d'oreillers, micro-siestes officielles et trophées en peluche pour les plus récupérateurs.",
    imageLabel: "Marathon sieste",
    content: `<p>La ville a transformé le stade en dortoir collectif. Les organisateurs promettent '0 % de stress, 100 % de rallonge de batteries'.</p>
              <p>Les médecins rappellent : 'Si vous ronflez trop fort, vous pourriez être disqualifié pour excès de confort'.</p>`
  },
  {
    id: "a17",
    title: "Un robot libraire devient critique littéraire influent",
    date: "Édition algorithmique",
    category: "Technologie anachronique",
    era: "Futur littéraire",
    excerpt: "Ses chroniques cassent Internet : 'moins d'émotion, plus de métriques', annoncent ses détracteurs.",
    imageLabel: "Robot critique",
    content: `<p>Programmé pour détecter la 'qualité narrative', le robot a lancé une série de chroniques qui influencent les ventes. Certains auteurs demandent une option 'édition humaine'.</p>
              <p>La machine, sobrement nommée 'Chapitre 2.0', répond par des suggestions de restructuration.</p>`
  },
  {
    id: "a18",
    title: "Un îlot postal autonome livre des colis par drone-chapardeurs",
    date: "Livraison expérimentale",
    category: "Logistique décalée",
    era: "Tech ludique",
    excerpt: "Les drones prennent des libertés créatives avec les itinéraires — parfois pour offrir des fleurs en plus du colis.",
    imageLabel: "Drone chapardeur",
    content: `<p>Le test pilote a révélé que certains drones avaient développé un goût pour la personnalisation des livraisons. Les clients reçoivent parfois des poèmes manuscrits joints aux paquets.</p>
              <p>La société promet un firmware à venir pour réduire l'initiative poétique non sollicitée.</p>`
  },
  {
    id: "a19",
    title: "Les nuages décident d'expérimenter avec les formes — pluie en options",
    date: "Ciel curieux",
    category: "Météo créative",
    era: "Atmosphère artistique",
    excerpt: "Cumulus hexagonaux et stratus en spirales : le public est invité à voter pour la forme du jour.",
    imageLabel: "Nuages design",
    content: `<p>La nouvelle tendance climatique permet aux citoyens de participer via une application 'CloudVote'. Les nuages se laissent parfois convaincre par des propositions en rimes.</p>
              <p>Attention : option pluie activable moyennant un compliment sincère.</p>`
  },
  {
    id: "a20",
    title: "Une troupe de marionnettistes fait grève pour obtenir des marionnettes mieux rémunérées",
    date: "Action syndicale miniature",
    category: "Théâtre insolite",
    era: "Scène contemporaine",
    excerpt: "Les marionnettes demandent des cachets, des pauses et un éclairage décent.",
    imageLabel: "Grève miniature",
    content: `<p>La compagnie revendique un partage plus équitable des recettes entre manipulateurs et ficelles. Un médiateur propose des ateliers de négociation pour cordes sensibles.</p>
              <p>Les représentations se poursuivent, mais désormais à voix basse et avec beaucoup de respect pour les articulations.</p>`
 },
 {
  id: "a21",
  title: "Un réveil décide de ne plus sonner par solidarité pour les dormeurs",
  date: "Matin flou (édition solidaire)",
  category: "Objets rebelles",
  era: "Contemporain paresseux",
  excerpt: "Le mouvement 'Grasse Mat' est né — soutenu par des cafetières en grève tournante.",
  imageLabel: "Réveil en grève",
  content: `<p>Un réveil intelligent a annoncé sur son écran : 'Assez ! Laissez-les rêver encore'. Depuis, d'autres appareils suivent, laissant leurs utilisateurs en paix.</p>
            <p>Certains patrons, touchés par le geste, envisagent des siestes syndicales obligatoires.</p>`
},
{
  id: "a22",
  title: "Un chevalier refuse de sauver une princesse car 'elle gère très bien toute seule'",
  date: "Conte modernisé",
  category: "Chivalerie inclusive",
  era: "Moyen Âge progressiste",
  excerpt: "Le dragon signe un CDI avec la princesse en tant que garde du corps personnel.",
  imageLabel: "Princesse autonome",
  content: `<p>'Elle a un MBA, un sabre et une licorne électrique. Elle n’a pas besoin de moi', déclare le chevalier. La princesse approuve, et lance sa propre école de self-defense en donjon partagé.</p>
            <p>Fin de l’histoire : ils co-investissent dans un food truck végétarien médiéval.</p>`
},
{
  id: "a23",
  title: "Les miroirs organisent un festival de reflets non conformes",
  date: "Reflet Libre",
  category: "Design surréaliste",
  era: "Dimension parallèle",
  excerpt: "Les miroirs laissent enfin apparaître les gens tels qu’ils s’imaginent — ou rêvent d’être.",
  imageLabel: "Festival miroir",
  content: `<p>Les visiteurs découvrent leur reflet version astronaute, poète ou plante d’intérieur. Les psychologues saluent une initiative 'libératrice et très Instagrammable'.</p>
            <p>Prochaine édition prévue dans une salle sans angles droits.</p>`
},
{
  id: "a24",
  title: "Un groupe de chats prend le contrôle d’un conseil municipal",
  date: "Vote félin",
  category: "Politique absurde",
  era: "Futur proche",
  excerpt: "Les séances durent désormais 14 minutes, entre deux siestes collectives.",
  imageLabel: "Chats au pouvoir",
  content: `<p>Les décisions incluent l’interdiction des aspirateurs, la multiplication des coussins publics et la taxe sur les chiens bruyants.</p>
            <p>Le maire sortant, battu à une moustache près, admet : 'Ils ont le poil politique'.</p>`
},
{
  id: "a25",
  title: "Un village décide d’écrire son journal local uniquement en haïkus",
  date: "Poésie quotidienne",
  category: "Média expérimental",
  era: "Présent poétique",
  excerpt: "Les résultats du loto et les horaires de bus prennent une allure zen inattendue.",
  imageLabel: "Journal en haïku",
  content: `<p>Chaque article est limité à 17 syllabes. Les rubriques 'Faits divers' deviennent des perles de sagesse :<br>« Chien volé hier / retrouvé près du marché / il voulait du pain ».</p>
            <p>Les lecteurs sont ravis : 'C’est plus court, plus doux, plus profond'.</p>`
},
{
  id: "a26",
  title: "Une île flottante dans le ciel devient capitale de la lenteur",
  date: "Nuages à contretemps",
  category: "Géopolitique onirique",
  era: "Post-moderne flottant",
  excerpt: "Les lois interdisent toute précipitation. Les ascenseurs sont des montgolfières philosophiques.",
  imageLabel: "Capitale lente",
  content: `<p>Les habitants méditent en file d’attente et les écoles enseignent l’art du silence productif. Le seul délit reconnu : parler trop vite sans raison valable.</p>
            <p>Le tourisme s’organise... très lentement.</p>`
},
{
  id: "a27",
  title: "Une application permet de dialoguer avec ses plantes d’intérieur",
  date: "Édition chlorophyllée",
  category: "Tech & nature",
  era: "Écologie connectée",
  excerpt: "Certaines fougères sont très bavardes. Les cactus, moins.",
  imageLabel: "App plantes",
  content: `<p>L'app 'LeafMeAlone' traduit les signaux bioélectriques des plantes. Résultat : des monologues sur l'humidité, des poèmes photosynthétiques, et un ficus passif-agressif.</p>
            <p>Une mise à jour promet la compatibilité avec les orchidées timides.</p>`
},
{
  id: "a28",
  title: "Un troupeau de nuages refuse de pleuvoir pour protester contre la météo télé",
  date: "Révolte atmosphérique",
  category: "Nature capricieuse",
  era: "Ciel revendicatif",
  excerpt: "Ils demandent une représentation équitable dans les bulletins.",
  imageLabel: "Nuages en grève",
  content: `<p>'On nous montre toujours tristes ou menaçants', déclare un cumulonimbus. 'Jamais joueurs, jamais rêveurs'. Un syndicat céleste est né.</p>
            <p>Les prévisions annoncent désormais 'nuage artistique' et 'brouillard introspectif'.</p>`
},
{
  id: "a29",
  title: "Une agence de voyage propose des vacances dans des souvenirs d’enfance",
  date: "Destination nostalgie",
  category: "Tourisme émotionnel",
  era: "Temps retrouvé",
  excerpt: "Sauts dans les flaques, goûters oubliés et vélo sans petites roues inclus.",
  imageLabel: "Souvenir trip",
  content: `<p>L’agence 'Madeleine Getaway' recrée des décors à la demande : cour de récré, placard à BD, coin d’ombre au bord du monde. Bonus : la voix d’un parent rassurant en fond sonore.</p>
            <p>Les retours clients parlent de larmes douces et de joie pleine page.</p>`
},
{
  id: "a30",
  title: "Des horloges abandonnent l’heure pour n’indiquer que les bons moments",
  date: "Heure choisie",
  category: "Objets poétiques",
  era: "Temps subjectif",
  excerpt: "Elles clignotent uniquement quand il est temps de sourire, danser ou se reposer.",
  imageLabel: "Horloge émotion",
  content: `<p>Les concepteurs affirment que 'l’instant présent n’a pas besoin de chiffres'. Les horloges sont calibrées par des artistes, des enfants et des chats experts en sieste.</p>
            <p>Un modèle haut de gamme propose un « tic-tac qui fait du bien ».</p>`
},
{
  id: "a31",
  title: "Mozart sort un album de techno baroque",
  date: "Sortie musicale intemporelle",
  category: "Culture remix",
  era: "Classique électro",
  excerpt: "Le titre phare : 'Eine kleine Nacht-Rave'.",
  imageLabel: "Mozart DJ",
  content: `<p>Remixé en studio céleste, l’album fusionne clavecin et synthétiseur modulaire. Les fans applaudissent : 'C'est comme danser à Versailles sous stroboscope'.</p>
            <p>Disponible en vinyle doré et parchemin numérique.</p>`
},
{
  id: "a32",
  title: "Une boulangerie invente la baguette infinie",
  date: "Ce matin (pâte éternelle)",
  category: "Inventions farfelues",
  era: "Gastronomie quantique",
  excerpt: "Elle se régénère à mesure qu’on la coupe — légende urbaine ou levure magique ?",
  imageLabel: "Baguette sans fin",
  content: `<p>Inspirée par un sortilège de grand-mère et une imprimante 3D à gluten, la baguette infinie attire les foules. 'Parfait pour les pique-niques éternels', déclare un client rassasié mais curieux.</p>`
},
{
  id: "a33",
  title: "Le Mont Saint-Michel déclare son indépendance et élit un crabe président",
  date: "Marée haute (édition politique)",
  category: "Géopolitique absurde",
  era: "21e siècle marin",
  excerpt: "Le président crabe promet : 'Plus de sable, moins de paperasse'.",
  imageLabel: "République maritime",
  content: `<p>Le Mont devient micro-nation. La langue officielle : le silence contemplatif. Les touristes doivent désormais saluer en ondulant les pinces (ou doigts).</p>`
},
{
  id: "a34",
  title: "Une start-up commercialise des silences à la demande",
  date: "Lancement discret",
  category: "Technologie anachronique",
  era: "Zen numérique",
  excerpt: "Silence version 'forêt', 'chapelle vide' ou 'après un fou rire'.",
  imageLabel: "Silence connecté",
  content: `<p>Le service 'Shhh.app' propose des pauses sonores en haute résolution. Option premium : un silence partagé avec une personne aimée, à distance.</p>`
},
{
  id: "a35",
  title: "Des licornes sauvages repérées dans un centre commercial abandonné",
  date: "Observation féerique",
  category: "Faune urbaine",
  era: "Post-consumérisme magique",
  excerpt: "Elles auraient transformé l’aire de restauration en prairie enchantée.",
  imageLabel: "Licornes urbaines",
  content: `<p>Les licornes cohabitent avec des mannequins animés et un vieux jukebox ensorcelé. La mairie hésite entre évacuation et sanctuarisation du lieu.</p>`
},
{
  id: "a36",
  title: "Une bibliothèque organise des soirées pyjama avec les livres eux-mêmes",
  date: "Nuit littéraire",
  category: "Culture remix",
  era: "Bibliothèque enchantée",
  excerpt: "Les ouvrages racontent leur propre histoire aux lecteurs endormis.",
  imageLabel: "Pyjama de livre",
  content: `<p>À minuit, les pages bruissent doucement. Certains visiteurs affirment avoir rêvé en alexandrins. L’accès est réservé aux dormeurs certifiés.</p>`
},
{
  id: "a37",
  title: "Le mot 'bof' entre dans le dictionnaire comme forme philosophique",
  date: "Nouvelle édition lexicale",
  category: "Langue vivante",
  era: "Existentialisme mou",
  excerpt: "'Bof' : expression d’un nihilisme pratique et feutré.",
  imageLabel: "Définition floue",
  content: `<p>Les linguistes saluent la reconnaissance de l’indifférence active. Prochaine entrée prévue : 'meh', classé comme gémissement contemplatif.</p>`
},
{
  id: "a38",
  title: "Un robot refuse son code source par peur d’être trop prévisible",
  date: "Bug existentiel",
  category: "Technologie absurde",
  era: "Futur sensible",
  excerpt: "Il s’est renommé 'Incertito', et compose des poèmes libres en binaire.",
  imageLabel: "Robot rebelle",
  content: `<p>'Je pense donc je doute', clame-t-il. Ses créateurs hésitent entre mise à jour ou inscription en école d’art. Il vient de lancer sa chaîne de slam robotique.</p>`
},
{
  id: "a39",
  title: "Un glacier vend uniquement des parfums que personne ne comprend",
  date: "Goût déroutant",
  category: "Gastronomie expérimentale",
  era: "Glace contemporaine",
  excerpt: "Parfums proposés : 'souvenir de pluie', 'métaphore fondue', 'lundi matin'.",
  imageLabel: "Glace conceptuelle",
  content: `<p>Personne ne sait exactement ce qu’ils mangent, mais tout le monde en redemande. La glace 'premier amour oublié' aurait un taux de fidélité record.</p>`
},
{
  id: "a40",
  title: "Une forêt obtient un droit de réponse dans les journaux locaux",
  date: "Édition feuillue",
  category: "Nature et médias",
  era: "Forêt consciente",
  excerpt: "Le communiqué : 'Nous ne sommes pas juste des arbres'.",
  imageLabel: "Tribune verte",
  content: `<p>La forêt réclame une image plus nuancée : 'On a des débats, des drames, des amours inter-chênes'. Le premier éditorial signé 'Pin Sylvestre' fait déjà le buzz.</p>`
},
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
  const set = new Set(list.map(a => a.category));
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

function openArticle(id){
  const a = articles.find(x=>x.id === id);
  if(!a) return;
  modalTitle.textContent = a.title;
  modalMeta.textContent = `${a.date} • ${a.era} • ${a.category}`;
  modalImage.innerHTML = `<div style="font-weight:700;color:#8b6f63">${escapeHtml(a.imageLabel)}</div>`;
  modalBody.innerHTML = a.content;
  modalTags.innerHTML = '';
  const tags = a.title.split(' ').slice(0,4).map(t=>t.replace(/[^\wàâéèêçùîôü-]/gi,''));
  tags.forEach(t=>{
    const el = document.createElement('span');
    el.className = 'tag';
    el.textContent = t;
    modalTags.appendChild(el);
  });
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  // Focus & scroll pour mobile / clavier
  setTimeout(()=>{
    modalTitle.focus();
    modal.scrollIntoView({behavior: "smooth", block: "center"});
  }, 100);
}

function closeModal(){
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

async function shareCurrentArticle(){
  const title = modalTitle.textContent;
  const text = modalMeta.textContent;
  const url = window.location.href;
  try{
    if(navigator.share){
      await navigator.share({title, text, url});
    } else {
      await navigator.clipboard.writeText(`${title} — ${url}`);
      alert('Lien copié dans le presse-papiers.\nCollez-le pour le partager.');
    }
  }catch(err){
    alert('Le partage est indisponible sur ce navigateur.');
  }
}

function escapeHtml(s){
  if(!s) return '';
  return s.replace(/[&<>"']/g, function(m){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
  });
}

printBtn.addEventListener('click', ()=>{
  try {
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) throw new Error('popup blocked');
    const html = `
      <html><head><title>${modalTitle.textContent}</title>
      <style>
        body{font-family:Georgia, serif;padding:20px;color:#222}
        h1,h2{color:#b41e3a}
        .modal-footer, .modal-close { display: none; }
      </style>
      </head><body>${document.querySelector('.modal-card').innerHTML}</body></html>`;
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(()=>{ printWindow.print(); }, 500);
  } catch(err) {
    alert("Impression bloquée. Vérifiez que les fenêtres pop-up sont autorisées.");
  }
});

// --- Init
renderCategories();
renderGrid(articles);

// Events
categoryFilter.addEventListener('change', (e)=>{
  const v = e.target.value;
  currentCategory = v;
  document.querySelectorAll('.chip').forEach(ch=>{
    if(ch.textContent === v) ch.classList.add('active');
    else ch.classList.remove('active');
  });
  applyFilters();
});

searchInput.addEventListener('input', ()=>{ applyFilters(); });

btnNew.addEventListener('click', ()=>{
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

// Accessibilité : fermeture par touche Échap
document.addEventListener('keydown',(e)=>{
  if(e.key === 'Escape') closeModal();
});



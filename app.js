const subjects=[
["Digital Skills","Compétences numériques et outils digitaux","✦"],
["Fundamental IT","Bases de l'informatique et architecture","▣"],
["Système électrique","Électricité, circuits et mesures","ϟ"],
["Algorithmique & C","Algorithmes, logique et programmation C","</>"],
["Système d'exploitation","Windows, Linux, fichiers et commandes","⌘"],
["HTML / CSS","Création de pages web","◇"],
["TP ISET Nabeul","Travaux pratiques et exercices","⚒"]
];
const classes=[
"ODkyMTAxMDQyNTk1","ODg4NDM0NzEwOTgw","ODg2NzYwNzAyNDE0","ODg1MzU5NzEyMDE4","ODg1MTk1NjU3NTgw",
"ODc4NTc1NTk0NjIx","ODg0Nzg4NTMxMjU0","ODg0OTE0NjMzMzYy","NzEzMjQ2OTQyNzkx","ODg3MDE4MDMzNDcx"
];
const summaries=[
["Digital Skills","Les compétences numériques regroupent la recherche d'information, la communication en ligne, la création de contenus et la sécurité numérique. Il faut vérifier la fiabilité des sources, protéger ses données personnelles et utiliser les outils numériques de manière responsable."],
["Fundamental IT","Un ordinateur traite des données grâce à plusieurs composants. Le processeur exécute les instructions, la mémoire RAM conserve temporairement les données utilisées, le stockage garde les fichiers et la carte mère relie les composants. Le système d'exploitation gère le matériel et les applications."],
["Système électrique","Un circuit électrique simple contient généralement un générateur, des conducteurs et un récepteur. La tension se mesure en volts avec un voltmètre branché en parallèle. L'intensité se mesure en ampères avec un ampèremètre branché en série. La loi d'Ohm s'écrit U = R × I."],
["Algorithmique & C","Un algorithme décrit les étapes nécessaires pour résoudre un problème. En langage C, on utilise des variables, des conditions (if/else), des boucles (for, while) et des fonctions. Un programme commence généralement par main et utilise printf pour afficher et scanf pour lire une valeur."],
["Système d'exploitation","Un système d'exploitation est le logiciel de base qui gère les ressources de l'ordinateur. Il organise les fichiers, la mémoire, les processus et les périphériques. Windows et Linux sont des exemples de systèmes d'exploitation."],
["HTML / CSS","HTML structure le contenu d'une page web avec des balises comme h1, p, img et a. CSS définit la présentation : couleurs, tailles, marges et disposition. Le fichier HTML contient la structure et la feuille CSS améliore le design."],
["TP ISET Nabeul","Les travaux pratiques permettent d'appliquer les notions étudiées en cours. Il faut lire l'énoncé, identifier les données, réaliser les étapes demandées, tester le résultat et rédiger une courte conclusion."]
];
let activeSummary="";
let uploaded=[];
const $=s=>document.querySelector(s);
function go(page){document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===page));document.querySelectorAll(".nav").forEach(n=>n.classList.toggle("active",n.dataset.page===page));$("#pageTitle").textContent=({home:"Accueil",courses:"Cours & résumés",podcasts:"Podcasts",videos:"Vidéos",tps:"TP & exercices",classroom:"Google Classroom",admin:"Importer un cours"})[page];if(innerWidth<650)$("#sidebar")?.classList.remove("open");window.scrollTo(0,0)}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
function subjectOptions(){let opts=subjects.map(s=>`<option>${s[0]}</option>`).join("");$("#subjectFilter").innerHTML='<option value="">Toutes les matières</option>'+opts;$("#courseSubject").innerHTML=opts}
function card(s){return `<article class="course-card"><div class="subject-icon">${s[2]}</div><h3>${s[0]}</h3><p>${s[1]}</p><div class="card-foot"><span>Cours · Résumé</span><button data-sub="${s[0]}">Ouvrir →</button></div></article>`}
function renderCards(){let html=subjects.map(card).join("");$("#homeGrid").innerHTML=html;$("#allCourses").innerHTML=html;document.querySelectorAll("[data-sub]").forEach(b=>b.onclick=()=>{let i=subjects.findIndex(s=>s[0]===b.dataset.sub);$("#search").value=b.dataset.sub;renderCourseResources(b.dataset.sub);});}
function renderCourseResources(filter=""){let list=subjects.filter(s=>!filter||s[0]===filter);$("#allCourses").innerHTML=list.map((s)=>`<article class="course-card"><div class="subject-icon">${s[2]}</div><h3>${s[0]}</h3><p>${s[1]}</p><div class="card-foot"><span>Résumé disponible</span><button data-read="${s[0]}">Lire le résumé →</button></div></article>`).join("");document.querySelectorAll("[data-read]").forEach(b=>b.onclick=()=>showSummary(b.dataset.read));}
function showSummary(name){let idx=subjects.findIndex(s=>s[0]===name);let content=summaries[idx]?.[1]||"Ajoute un support PDF pour préparer le résumé de ce chapitre.";let w=window.open("","_blank");if(w){w.document.write(`<title>${name} — Résumé</title><body style="font:17px Arial;max-width:760px;margin:60px auto;line-height:1.8;color:#18213c"><h1>${name}</h1><h2>Résumé de révision</h2><p>${content}</p><p><small>StudyHub ISET Nabeul — résumé introductif à vérifier avec le cours officiel.</small></p></body>`);w.document.close();}}
function renderResources(){let p=summaries.map(s=>`<div class="resource"><div class="resource-icon">♫</div><div><b>${s[0]} — résumé audio</b><small>Lecture vocale · Français</small></div><button data-listen="${s[0]}">Écouter</button></div>`).join("");$("#podcastList").innerHTML=p;document.querySelectorAll("[data-listen]").forEach(b=>b.onclick=()=>{let s=summaries.find(x=>x[0]===b.dataset.listen);activeSummary=s[1];$("#audioTitle").textContent=s[0];speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(activeSummary));});}
function renderVideos(){let vids=[["Digital Skills","Rechercher et vérifier une information"],["Fundamental IT","Comprendre les composants d'un ordinateur"],["Système électrique","Les bases d'un circuit électrique"],["Algorithmique & C","Variables, conditions et boucles"],["Système d'exploitation","Fichiers et commandes essentielles"],["HTML / CSS","Créer sa première page web"]];$("#videoGrid").innerHTML=vids.map(v=>`<article class="video-card"><div class="video-thumb">▷</div><h3>${v[0]}</h3><p>${v[1]} · Vidéo à ajouter</p></article>`).join("");}
function renderTP(){let s=subjects.filter(x=>x[0].includes("TP")||x[0].includes("C")||x[0].includes("électrique"));$("#tpGrid").innerHTML=s.map(card).join("")+`<article class="course-card"><div class="subject-icon">＋</div><h3>Importer un TP</h3><p>Ajoute un énoncé PDF depuis l'espace administrateur.</p><div class="card-foot"><span>PDF</span><button data-go="admin">Importer →</button></div></article>`;document.querySelectorAll("#tpGrid [data-go]").forEach(b=>b.onclick=()=>go("admin"));}
function renderClasses(){$("#classGrid").innerHTML=classes.map((id,i)=>`<a class="class-link" href="https://classroom.google.com/c/${id}" target="_blank" rel="noopener"><div><small style="display:block;color:#929bad;font-size:9px;margin-bottom:5px">CLASSE GOOGLE CLASSROOM ${String(i+1).padStart(2,"0")}</small>Ouvrir la classe ${i+1}</div><span>↗</span></a>`).join("")}
function renderUploads(){$("#uploadedList").innerHTML=uploaded.length?uploaded.map((f,i)=>`<div class="resource"><div class="resource-icon">PDF</div><div><b>${f.name}</b><small>${f.subject} · ${f.type} · ${f.file.name}</small></div><button data-open="${i}">Ouvrir</button></div>`).join(""):'<div class="empty">Aucun document importé pour le moment.</div>';document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>window.open(URL.createObjectURL(uploaded[+b.dataset.open].file),"_blank"))}
$("#uploadForm").addEventListener("submit",e=>{e.preventDefault();let file=$("#pdfFile").files[0];if(!file)return;uploaded.push({name:$("#courseName").value,subject:$("#courseSubject").value,type:$("#courseType").value,file});$("#uploadStatus").textContent="Document ajouté à cette session du navigateur. Pense à sauvegarder le PDF dans ton dépôt GitHub pour le rendre accessible à tous.";renderUploads();e.target.reset();});
$("#search").addEventListener("input",e=>renderCourseResources(e.target.value.toLowerCase()));
$("#subjectFilter").addEventListener("change",e=>renderCourseResources(e.target.value));
$("#speakBtn").onclick=()=>{if(!activeSummary){activeSummary=summaries[0][1];$("#audioTitle").textContent=summaries[0][0]}speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(activeSummary);u.lang="fr-FR";speechSynthesis.speak(u)};
$("#stopBtn").onclick=()=>speechSynthesis.cancel();
$("#menuBtn").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");
subjectOptions();renderCards();renderResources();renderVideos();renderTP();renderClasses();renderUploads();

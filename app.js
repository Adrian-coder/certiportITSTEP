
const MODULES = [
  { id: "design", title: "1. Database Design" },
  { id: "ddl", title: "2. Database Object Management (DDL)" },
  { id: "retrieval", title: "3. Data Retrieval" },
  { id: "dml", title: "4. Data Manipulation (DML)" },
  { id: "trouble", title: "5. Troubleshooting" },
];



const BANK = {
  
  design: [
    { q: "Datele într-o bază de date relațională sunt stocate în:", options: ["Tabele","Interogări","Tipuri de date","Proceduri stocate"], a: 0 },
    { q: "Ce reprezintă un tabel într-o bază de date relațională?", options: ["Un set de rânduri și coloane care stochează date","O diagramă a relațiilor dintre baze de date","Un limbaj de programare","O instrucțiune SQL"], a: 0 },
    { q: "Cum se numește elementul care conține informațiile despre o singură înregistrare?", options: ["Coloană","Rând","Câmp","Tip de date"], a: 1 },
    { q: "Un rând dintr-un tabel reprezintă:", options: ["O coloană","Un atribut","O înregistrare unică","Un index"], a: 2 },
    { q: "Într-un tabel, o coloană reprezintă:", options: ["O înregistrare completă","O colecție verticală de valori","O relație între tabele","O cheie primară"], a: 1 },
    { q: "Pentru a salva informațiile fiecărui elev, datele se vor stoca într-un:", options: ["Rând","Index","Trigger","View"], a: 0 },
    { q: "Care afirmație este adevărată despre coloane?", options: ["Fiecare coloană are un nume unic","Coloanele pot avea același nume","Coloanele reprezintă relații","Coloanele sunt opționale"], a: 0 },
    { q: "Selectează afirmațiile corecte despre structura unui tabel:", options: ["Fiecare rând trebuie să fie unic","Fiecare coloană trebuie să aibă un nume diferit","Valorile dintr-o coloană trebuie să fie unice","Un tabel poate să nu aibă coloane"], a: 1 },
    { q: "200 de studenți cu nume, prenume și ID vor fi salvați ca:", options: ["3 rânduri și 100 coloane","200 rânduri și 3 coloane","300 de celule și 1 coloană","100 de tabele"], a: 1 },
    { q: "Care două elemente sunt necesare pentru definirea unei coloane?", options: ["Nume","Index","Tip de date","Cheie străină"], a: [0,2] },

    { q: "Ce determină spațiul de stocare al unei valori dintr-o coloană?", options: ["Cheia","Tipul de date","Indexul","Formatul"], a: 1 },
    { q: "Ce tip de date este potrivit pentru stocarea cantităților întregi?", options: ["FLOAT","DECIMAL","INT","VARCHAR"], a: 2 },
    { q: "Pentru valori întregi între 1 și 100, cel mai eficient tip de date este:", options: ["INT","SMALLINT","TINYINT","BIT"], a: 2 },
    { q: "Ce tip de date folosești pentru valori între 0 și 1024?", options: ["INT","SMALLINT","TINYINT","FLOAT"], a: 1 },
    { q: "Pentru prețuri și valori financiare se recomandă:", options: ["INT","VARCHAR","DECIMAL","BIT"], a: 2 },
    { q: "Ce tip de date stochează valori Adevărat/Fals?", options: ["CHAR","BIT","FLOAT","INT"], a: 1 },
    { q: "Pentru texte cu lungime exacta de 50 de caractere:", options: ["CHAR(50)","VARCHAR(30)","TEXT","NCHAR"], a: 0 },
    { q: "Pentru stocarea textelor în mai multe limbi se folosește:", options: ["CHAR","VARCHAR","NCHAR","BIT"], a: 2 },
    { q: "Un cod format dintr-o literă și patru cifre trebuie stocat ca:", options: ["INT","CHAR","SMALLINT","FLOAT"], a: 1 },
    { q: "Ce afirmație este corectă?", options: ["CHAR este lungime fixă","TEXT este lungime fixă","VARCHAR are lungime fixă","INT stochează texte"], a: 0 },

    { q: "Care afirmație este adevărată?", options: ["VARCHAR stochează doar numere","INT stochează doar numere întregi","DECIMAL nu acceptă zecimale","BIT stochează text"], a: 1 },
    { q: "Asociază tipurile de date: • Nume elev → ____ • Clasă → ____ • Media → ____", options: ["VARCHAR, INT, DECIMAL", "TEXT, DECIMAL, INT"], a: 0 },
    { q: "Pentru operații financiare într-o aplicație se recomandă:", options: ["MONEY sau DECIMAL","VARCHAR","BIT","BINARY"], a: 0 },
    { q: "Care valoare poate fi stocată în DECIMAL(3,1)?", options: ["16.2","116.2","16.21","1116.2"], a: 0 },
    { q: "Diferența principală dintre DATETIME și DATETIME2 este:", options: ["Precizia mai mare și interval mai larg","DATETIME2 nu stochează timp","DATETIME este mai precis","Sunt identice"], a: 0 },
    { q: "Ce tip de date suportă intervalul 0001–9999?", options: ["DATETIME","DATETIME2","SMALLDATETIME","DATE"], a: 1 },
    { q: "Care valoare este validă pentru DATETIME2(3)?", options: ["2025-01-04 12:30:45.123","2025-01-04 24:30:00","1752-01-01","99999-12-31"], a: 0 },
    { q: "Care valoare este acceptată de SMALLDATETIME?", options: ["2025-01-04 12:30","1753-01-01","1800-01-01","2100-01-01"], a: 0 },
    { q: "Ce constrângere asigură unicitatea fiecărui rând?", options: ["FOREIGN KEY","PRIMARY KEY","INDEX","CHECK"], a: 1 },

    { q: "Ce cheie identifică unic un rând într-un tabel?", options: ["Foreign","Primary","Secondary","Candidate"], a: 1 },
    { q: "Ce constrângere asigură existența unei relații valide între tabele?", options: ["Unique","Foreign Key","Index","Default"], a: 1 },
    { q: "Ce două coloane formează o cheie primară compusă într-un tabel de legătură?", options: ["ID-ul din primul tabel","ID-ul din al doilea tabel","Numele","Data"], a: [0,1] },
    { q: "Care afirmație despre Foreign Key este adevărată?", options: ["Poate fi NULL","Creează automat index","Este unică","Nu face legături"], a: 0 },
    { q: "Pentru a asigura că un angajat aparține unui departament existent, aplici:", options: ["Primary key","Index","Foreign key","Check"], a: 2 },
    { q: "Ce element stabilește regulile de validare ale datelor?", options: ["Index","Constraint","View","Trigger"], a: 1 },
    { q: "Ce tip de relație există între profesor și clase (un profesor → mai multe clase)?", options: ["One-to-One","One-to-Many","Many-to-Many","Circular"], a: 1 },
    { q: "Student ↔ Curs (mai mulți studenți, mai multe cursuri):", options: ["One-to-One","One-to-Many","Many-to-Many","Self"], a: 2 },
    { q: "SQL este:", options: ["Structured Query Language","Simple Query Language","Standard Query Logic","Structured Data Language"], a: 0 },
    { q: "Ce obiect permite impunerea integrității referențiale?", options: ["Index","Trigger","Foreign Key","View"], a: 2 },

    { q: "Ce element nu definește o coloană?", options: ["Nume","Tip de date","Lungime","Index"], a: 3 },
    { q: "Ce tip de date este potrivit pentru stocarea numărului de produse într-un stoc?", options: ["VARCHAR","FLOAT","INT","TEXT"], a: 2 },
    { q: "Pentru valori între 0 și 255, ce tip de date este recomandat?", options: ["BIT","TINYINT","SMALLINT","DECIMAL"], a: 1 },
    { q: "Ce tip de date ar fi cel mai eficient pentru stocarea unui scor între 0 și 32.000?", options: ["FLOAT","SMALLINT","VARCHAR","INT"], a: 1 },
    { q: "Pentru stocarea unei sume de bani cu două zecimale se folosește:", options: ["INT","DECIMAL","BIT","CHAR"], a: 1 },
    { q: "Ce tip de date se folosește pentru câmpurile de tip „Da/Nu”?", options: ["BIT","TEXT","VARCHAR","DECIMAL"], a: 0 },
    { q: "Dacă un câmp trebuie să aibă exact 10 caractere, alegi:", options: ["VARCHAR(10)","CHAR(10)","TEXT","NCHAR(50)"], a: 1 },
    { q: "Pentru texte Unicode (mai multe limbi) se recomandă:", options: ["VARCHAR","NCHAR","CHAR","INT"], a: 1 },
    { q: "Un cod fix, format din 6 caractere, se stochează cel mai bine ca:", options: ["TEXT","CHAR(6)","VARCHAR(6)","BIT"], a: 1 },
    { q: "Ce afirmație este corectă despre VARCHAR?", options: ["Are lungime fixă","Este pentru valori numerice","Are lungime variabilă","Acceptă doar litere mari"], a: 2 },
  ],

 
  ddl: [
    { q: "Ce comandă creează un tabel nou?", options: ["INSERT", "CREATE TABLE", "UPDATE", "SELECT"], a: 1 },
    { q: "Ce comandă modifică structura unui tabel existent?", options: ["ALTER TABLE", "DROP VIEW", "TRUNCATE", "GRANT"], a: 0 },
    { q: "Ce face DROP TABLE?", options: ["Șterge rândurile, păstrează structura","Șterge structura tabelului (și datele)","Șterge doar o coloană","Redenumește tabelul"], a: 1 },
    { q: "Cum specifici că o coloană nu acceptă valori lipsă?", options: ["NULL", "NOT NULL", "DEFAULT NULL", "UNIQUE"], a: 1 },
    { q: "Ce este o VIEW?", options: ["Un tabel fizic care stochează date","O interogare salvată (virtuală)","Un tip de index","O procedură obligatorie"], a: 1 },
    { q: "Care comandă creează o VIEW?", options: ["CREATE VIEW", "ALTER INDEX", "CREATE PROCEDURE", "INSERT VIEW"], a: 0 },
    { q: "De ce folosim VIEW-uri?", options: ["Pentru a dubla datele","Pentru a ascunde/filtra coloane","Pentru a evita cheile primare","Pentru a înlocui tranzacțiile"], a: 1 },
    { q: "Ce este un index?", options: ["O regulă de validare a parolei","O structură care ajută la căutare/sortare","Un tip de JOIN","Un backup automat"], a: 1 },
    { q: "Clustered vs non-clustered (general):", options: ["Clustered schimbă ordinea fizică; non-clustered e separat","Non-clustered schimbă ordinea fizică; clustered nu","Sunt identice","Clustered există doar pe VIEW-uri"], a: 0 },
    { q: "Ce comandă șterge o VIEW?", options: ["DROP VIEW", "DELETE VIEW", "REMOVE VIEW", "TRUNCATE VIEW"], a: 0 },
  ],

  retrieval: [
    { q: "Ce JOIN returnează doar rândurile care au potrivire în ambele tabele?", options: ["LEFT JOIN","RIGHT JOIN","INNER JOIN","CROSS JOIN"], a: 2 },
    { q: "Ce JOIN păstrează toate rândurile din stânga și potrivirile din dreapta?", options: ["LEFT JOIN","INNER JOIN","FULL JOIN","CROSS JOIN"], a: 0 },
    { q: "Ce este CROSS JOIN?", options: ["Join pe cheie primară","Produs cartezian (toate combinațiile)","Join doar pentru NULL","Join cu WHERE obligatoriu"], a: 1 },
    { q: "La ce folosește DISTINCT?", options: ["Șterge duplicate din tabel","Afișează valori unice în rezultat","Creează index","Actualizează rânduri"], a: 1 },
    { q: "Ce clauză filtrează rândurile?", options: ["GROUP BY","WHERE","ORDER BY","AS"], a: 1 },
    { q: "Ce face ORDER BY?", options: ["Filtrează rânduri","Sortează rezultatele","Grupează","Șterge rânduri"], a: 1 },
    { q: "LIKE este folosit pentru:", options: ["Comparare numerică","Căutare după tipar în text","Agregare","Creare tabel"], a: 1 },
    { q: "Ce face UNION (în general)?", options: ["Combină și păstrează duplicate","Combină și elimină duplicate","Șterge date","Creează view"], a: 1 },
    { q: "Coloană calculată într-un SELECT:", options: ["Coloană din alt tabel","Rezultă dintr-o expresie (ex: price*qty)","Acceptă doar NULL","E ascunsă permanent"], a: 1 },
    { q: "GROUP BY:", options: ["Sortează rândurile","Grupează pentru agregări (SUM/COUNT/AVG)","Șterge duplicatele","Actualizează mai multe tabele"], a: 1 },
  ],

  dml: [
    { q: "Ce comandă adaugă rânduri noi într-un tabel?", options: ["INSERT","ALTER","DROP","CREATE"], a: 0 },
    { q: "Ce comandă modifică rânduri existente?", options: ["UPDATE","SELECT","CREATE","GRANT"], a: 0 },
    { q: "Ce comandă șterge rânduri dintr-un tabel?", options: ["DELETE","DROP","TRUNCATE VIEW","ALTER"], a: 0 },
    { q: "Pericol la UPDATE fără WHERE:", options: ["Nu se execută","Actualizează toate rândurile","Șterge tabela","Creează duplicate"], a: 1 },
    { q: "INSERT INTO ... SELECT ... :", options: ["Copiază rânduri din SELECT în alt tabel","Șterge rânduri pe baza SELECT","Creează index","Blochează tabela"], a: 0 },
    { q: "DELETE vs TRUNCATE (general):", options: ["DELETE pe condiție; TRUNCATE golește tabela rapid","TRUNCATE permite WHERE, DELETE nu","DELETE șterge structura","Nu există diferențe"], a: 0 },
    { q: "HAVING:", options: ["Filtrează rânduri înainte de GROUP BY","Filtrează grupurile după agregare","Sortează","Creează view"], a: 1 },
    { q: "Funcție pentru numărul de rânduri:", options: ["SUM()","COUNT()","MAX()","AVG()"], a: 1 },
    { q: "NULLIF(x,y):", options: ["Întoarce NULL dacă x=y, altfel x","Întoarce y dacă x e NULL","Înlocuiește NULL cu 0","Șterge NULL-urile"], a: 0 },
    { q: "Verificare corectă pentru valori lipsă:", options: ["= NULL","!= NULL","IS NULL / IS NOT NULL","LIKE NULL"], a: 2 },
  ],

  trouble: [
    { q: "Eroare de sintaxă apare cel mai des din:", options: ["Index prea mare","Paranteze/virgule lipsă, cuvinte cheie greșite","Date prea multe","Backup lipsă"], a: 1 },
    { q: "De ce nu merge un JOIN?", options: ["Nu există niciodată chei străine","Condiția de JOIN e greșită sau tipurile nu se potrivesc","JOIN nu se folosește","ORDER BY strică JOIN"], a: 1 },
    { q: "Violation of PRIMARY KEY constraint:", options: ["NULL în NOT NULL","Duplicat pe cheia primară","Ai șters tabelul","Ai folosit DISTINCT"], a: 1 },
    { q: "Cannot insert NULL:", options: ["Coloana permite NULL","Coloana e NOT NULL și nu ai dat valoare","Ai folosit WHERE","Ai folosit GROUP BY"], a: 1 },
    { q: "Least privilege:", options: ["Drepturi maxime","Doar drepturile strict necesare","Parole în clar","Fără backup"], a: 1 },
    { q: "Retragere drepturi:", options: ["REVOKE","GRANT","DENY ALL","DROP GRANT"], a: 0 },
    { q: "Backup + restore:", options: ["Pentru indecși","Recuperare date după pierdere/erori","Accelerare JOIN","Eliminare normalizare"], a: 1 },
    { q: "Encryption (criptare):", options: ["Protejează date sensibile","Sortează mai rapid","Elimină NULL","Creează view"], a: 0 },
    { q: "Auditing:", options: ["Ștergere automată date vechi","Înregistrează acțiuni (cine/ce/când)","Un tip de JOIN","Un tip de cheie"], a: 1 },
    
  ]
};


const $ = (sel) => document.querySelector(sel);

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function letters(i){ return String.fromCharCode(65+i); }

function isMultiAnswer(q){
  return Array.isArray(q.a);
}


function sameSet(a, b){
  if(!Array.isArray(a) || !Array.isArray(b)) return false;
  if(a.length !== b.length) return false;
  const sa = [...a].sort((x,y)=>x-y);
  const sb = [...b].sort((x,y)=>x-y);
  for(let i=0;i<sa.length;i++){
    if(sa[i] !== sb[i]) return false;
  }
  return true;
}


const state = {
  mode: "module",
  moduleId: null,
  title: "",
  questions: [],
  idx: 0,
  answers: [],            
};


const screenMenu   = $("#screenMenu");
const screenQuiz   = $("#screenQuiz");
const screenResult = $("#screenResult");

const moduleGrid   = $("#moduleGrid");

const quizTitle = $("#quizTitle");
const quizMeta  = $("#quizMeta");
const progressPill = $("#progressPill");
const qIndex    = $("#qIndex");
const qText     = $("#qText");
const optionsEl = $("#options");

const btnPrev   = $("#btnPrev");
const btnNext   = $("#btnNext");

const btnReset  = $("#btnReset");
const btnStartExam = $("#btnStartExam");
const examCountEl = $("#examCount");
const shuffleOptionsEl = $("#shuffleOptions");

const resultTitle = $("#resultTitle");
const resultSubtitle = $("#resultSubtitle");
const scoreBig = $("#scoreBig");
const scoreSmall = $("#scoreSmall");
const btnBackMenu = $("#btnBackMenu");
const btnReview = $("#btnReview");
const reviewEl = $("#review");


function buildMenu(){
  moduleGrid.innerHTML = "";
  MODULES.forEach(m=>{
    const count = BANK[m.id].length;
    const btn = document.createElement("button");
    btn.className = "btn ghost moduleBtn";
    btn.type = "button";
    btn.innerHTML = `<span>${m.title}</span><span class="tag">${count} întrebări</span>`;
    btn.addEventListener("click", ()=>startModule(m.id));
    moduleGrid.appendChild(btn);
  });
}
buildMenu();


function showScreen(which){
  screenMenu.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenResult.classList.add("hidden");

  if(which === "menu") screenMenu.classList.remove("hidden");
  if(which === "quiz") screenQuiz.classList.remove("hidden");
  if(which === "result") screenResult.classList.remove("hidden");
}


function startModule(moduleId){
  state.mode = "module";
  state.moduleId = moduleId;
  state.title = MODULES.find(x=>x.id===moduleId).title;

  state.questions = BANK[moduleId].map((qObj, index)=>({
    ...qObj,
    meta: { moduleId, moduleTitle: state.title, originalIndex: index }
  }));

  state.idx = 0;
  state.answers = Array(state.questions.length).fill(null);

  showScreen("quiz");
  renderQuestion();
}

function startExam(){
  state.mode = "exam";
  state.moduleId = null;
  state.title = "Examen (random)";

  const all = MODULES.flatMap(m =>
    BANK[m.id].map((qObj, index)=>({
      ...qObj,
      meta: { moduleId: m.id, moduleTitle: m.title, originalIndex: index }
    }))
  );

  const total = all.length;
  let n = parseInt(examCountEl.value, 10);
  if(Number.isNaN(n)) n = 25;
  n = Math.max(5, Math.min(n, total));

  const picked = shuffle(all).slice(0, n);
  const doShuffleOptions = (shuffleOptionsEl.value === "yes");

  state.questions = picked.map(q=>{
    if(!doShuffleOptions) return q;

   
    const indexed = q.options.map((txt, i)=>({ txt, i }));
    const mixed = shuffle(indexed);
    const newOptions = mixed.map(x=>x.txt);

    if(Array.isArray(q.a)){
      const newA = q.a.map(oldIndex => mixed.findIndex(x=>x.i === oldIndex));
      return { ...q, options: newOptions, a: newA };
    } else {
      const newA = mixed.findIndex(x=>x.i === q.a);
      return { ...q, options: newOptions, a: newA };
    }
  });

  state.idx = 0;
  state.answers = Array(state.questions.length).fill(null);

  showScreen("quiz");
  renderQuestion();
}


function renderQuestion(){
  const q = state.questions[state.idx];
  const total = state.questions.length;

  quizTitle.textContent = state.title;
  quizMeta.textContent = `Întrebarea ${state.idx+1} / ${total}`;
  progressPill.textContent = `${Math.round(((state.idx+1)/total)*100)}%`;

  qIndex.textContent = String(state.idx+1);


  const multiHint = isMultiAnswer(q) ? " (selectează toate răspunsurile corecte)" : "";
  qText.textContent = q.q + multiHint;

  optionsEl.innerHTML = "";
  q.options.forEach((opt, i)=>{
    const div = document.createElement("div");
    div.className = "opt";
    div.setAttribute("role", "button");
    div.tabIndex = 0;

    const cur = state.answers[state.idx];

    const selected = Array.isArray(cur) ? cur.includes(i) : (cur === i);
    if(selected) div.classList.add("selected");

    div.innerHTML = `
      <div class="letter">${letters(i)}</div>
      <div class="otxt">${opt}</div>
    `;

    const pick = ()=>{
      const qq = state.questions[state.idx];

      if(isMultiAnswer(qq)){
        
        let arr = Array.isArray(state.answers[state.idx]) ? [...state.answers[state.idx]] : [];
        if(arr.includes(i)) arr = arr.filter(x=>x!==i);
        else arr.push(i);
        state.answers[state.idx] = arr;
      } else {
        state.answers[state.idx] = i;
      }
      renderQuestion();
    };

    div.addEventListener("click", pick);
    div.addEventListener("keydown", (e)=>{
      if(e.key === "Enter" || e.key === " ") pick();
    });

    optionsEl.appendChild(div);
  });

  btnPrev.disabled = (state.idx === 0);
  btnNext.textContent = (state.idx === total-1) ? "Finalizează" : "Următor";
}


btnPrev.addEventListener("click", ()=>{
  if(state.idx > 0){
    state.idx--;
    renderQuestion();
  }
});

btnNext.addEventListener("click", ()=>{
  const total = state.questions.length;
  if(state.idx < total-1){
    state.idx++;
    renderQuestion();
  } else {
    showResult();
  }
});


function isCorrect(user, correct){
  if(Array.isArray(correct)){
    if(!Array.isArray(user)) return false;
    return sameSet(user, correct);
  } else {
    return user === correct;
  }
}

function calcScore(){
  let correct = 0;
  for(let i=0;i<state.questions.length;i++){
    if(isCorrect(state.answers[i], state.questions[i].a)) correct++;
  }
  const total = state.questions.length;
  const percent = Math.round((correct/total)*100);
  return { correct, total, percent };
}


function showResult(){
  const s = calcScore();

  resultTitle.textContent = (state.mode === "exam") ? "Rezultat examen" : "Rezultat modul";
  resultSubtitle.textContent = (state.mode === "exam")
    ? `Random din toate modulele • ${s.total} întrebări`
    : `${state.title} • ${s.total} întrebări`;

  scoreBig.textContent = `${s.percent}%`;
  scoreSmall.textContent = `${s.correct} / ${s.total} corecte`;

  reviewEl.classList.add("hidden");
  reviewEl.innerHTML = "";
  btnReview.textContent = "Arată greșelile";

  showScreen("result");
}

function ansToText(q, a){
  if(a === null || a === undefined) return "— (fără răspuns)";
  if(Array.isArray(a)){
    return a
      .slice()
      .sort((x,y)=>x-y)
      .map(i => `${letters(i)}. ${q.options[i]}`)
      .join(" | ");
  }
  return `${letters(a)}. ${q.options[a]}`;
}

function buildReview(){
  reviewEl.innerHTML = "";
  const wrong = [];

  for(let i=0;i<state.questions.length;i++){
    const q = state.questions[i];
    const userA = state.answers[i];
    if(!isCorrect(userA, q.a)){
      wrong.push({ i, q, userA });
    }
  }

  if(wrong.length === 0){
    reviewEl.innerHTML = `<div class="rItem"><span class="bad">Perfect</span> Ai răspuns corect la toate întrebările.</div>`;
    return;
  }

  wrong.forEach(item=>{
    const { i, q, userA } = item;
    const userTxt = ansToText(q, userA);
    const correctTxt = ansToText(q, q.a);

    const div = document.createElement("div");
    div.className = "rItem";
    div.innerHTML = `
      <h3><span class="bad">Greșit</span> #${i+1} • <span class="tag">${q.meta.moduleTitle}</span></h3>
      <div><b>Întrebare:</b> ${q.q}</div>
      <p><b>Răspunsul tău:</b> ${userTxt}</p>
      <p><b>Corect:</b> ${correctTxt}</p>
    `;
    reviewEl.appendChild(div);
  });
}


btnReset.addEventListener("click", ()=>showScreen("menu"));
btnBackMenu.addEventListener("click", ()=>showScreen("menu"));

btnReview.addEventListener("click", ()=>{
  if(reviewEl.classList.contains("hidden")){
    buildReview();
    reviewEl.classList.remove("hidden");
    btnReview.textContent = "Ascunde greșelile";
  } else {
    reviewEl.classList.add("hidden");
    btnReview.textContent = "Arată greșelile";
  }
});

btnStartExam.addEventListener("click", startExam);


showScreen("menu");


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
    { q: "Scrieți instrucțiunea SQL corectă pentru a crea o bază de date nouă numită testDB.", options: ["CREATE DATABASE testdb;", "CREATE testDB DATABASE;", "CREATE DATABASE 'testDB';", "CREATE DATABASE testDB;"], a: 3 }, // 96
    { q: "Ce comandă SQL este utilizată pentru a schimba contextul bazei de date?", options: ["SELECT", "ALTER", "USE", "UPDATE"], a: 2 }, // 97
    { q: "Scrieți instrucțiunea SQL corectă pentru a șterge o bază de date numită testDB.", options: ["DELETE DATABASE testDB", "DROP DATABASE testDB", "REMOVE DATABASE testDB", "CLEAR DATABASE testDB"], a: 1 }, // 98
    { q: "Evaluați textul: 'Utilizați instrucțiunea ALTER pentru a adăuga un tabel nou într-o bază de date'.", options: ["No change is needed", "UPDATE", "INSERT", "CREATE"], a: 3 }, // 99
    { q: "Creați un tabel Student (ID, Name, Age). Care este sintaxa corectă?", options: ["CREATE TABLE Student (ID INT, Name VARCHAR(100), Age INT)", "CREATE (TABLE Student ID INT...)", "CREATE Student (ID INT, Name...)", "CREATE TABLE ID INT, Name..."], a: 0 }, // 100
    { q: "Care dintre următoarele instrucțiuni SQL creează o cheie compusă (composite key)?", options: ["PRIMARY KEY (Col1) PRIMARY KEY (Col2)", "PRIMARY KEY (Col1, Col2) la finalul definiției", "O coloană numită COMPOSITE KEY", "UNIQUE (Col1, Col2)"], a: 1 }, // 102
    { q: "Care două cuvinte cheie sunt valide pentru a fi utilizate într-o instrucțiune CREATE TABLE? (Alegeți două)", options: ["Order By", "Primary Key", "Insert Into", "Constraint"], a: [1, 3] }, // 103
    { q: "Poate o coloană definită ca PRIMARY KEY să conțină valori NULL?", options: ["Da", "Nu", "Doar una", "Depinde de DBMS"], a: 1 }, // 104
    { q: "Poate o coloană cu o constrângere de tip UNIQUE să conțină valori NULL?", options: ["Da, una singură", "Da, oricâte", "Nu", "Doar dacă e cheie primară"], a: 0 }, // 105
    { q: "Ce cuvânt cheie poate fi utilizat într-o instrucțiune CREATE TABLE pentru unicitate?", options: ["ORDER BY", "DISTINCT", "GROUP BY", "UNIQUE"], a: 3 }, // 106
    { q: "De ce ați folosi funcția AUTO INCREMENT (IDENTITY) într-un tabel?", options: ["Setare manuală PK", "Creare automată valoare unică pentru PK", "Permite duplicate", "Limitare înregistrări"], a: 1 }, // 107
    { q: "Care câmp utilizează de obicei funcția AUTO INCREMENT?", options: ["Address", "City", "Primary Key", "Foreign Key"], a: 2 }, // 108
    { q: "Care este scopul unei chei externe (FOREIGN KEY)?", options: ["Identifică unic rândul", "Indică către o cheie primară din alt tabel", "Permite duplicate", "Stochează NULL"], a: 1 }, // 110
    { q: "Ce comandă ar trebui să utilizați pentru a adăuga o coloană într-un tabel existent?", options: ["MODIFY", "ALTER", "UPDATE", "INSERT"], a: 1 }, // 111
    { q: "Pentru ce este utilizată instrucțiunea ALTER TABLE?", options: ["Adăugare/ștergere constrângeri", "Modificare coloane", "Extragere date", "Atât A cât și B"], a: 3 }, // 112
    { q: "Trebuie să redenumiți o coloană (DDL). Ce instrucțiune folosiți?", options: ["ALTER", "INSERT", "CREATE", "UPDATE"], a: 0 }, // 113
    { q: "Ce instrucțiune ar trebui să utilizați pentru a elimina o cheie externă?", options: ["ALTER TABLE", "DELETE TABLE", "DELETE FOREIGN KEY", "ALTER FOREIGN KEY"], a: 0 }, // 114
    { q: "Adăugați BirthDate NOT NULL pe un tabel cu date și dă eroare. Remediere:", options: ["Folosiți VARCHAR", "Adăugați DEFAULT '1900-01-01'", "Folosiți INT", "Puneți NULL în loc de NOT NULL"], a: 1 }, // 115
    { q: "Adăugați Prefix NOT NULL pe un tabel populat și dă eroare. Cauza?", options: ["Tabelul e gol", "Lipsă DROP CONSTRAINT", "Tip invalid", "Trebuie specificat DEFAULT"], a: 3 }, // 116
    { q: "Adăugați coloana District în tabelul Customer. Comanda corectă:", options: ["MODIFY TABLE Customer ADD District", "ALTER TABLE Customer MODIFY District", "MODIFY Customer District", "ALTER TABLE Customer ADD District INTEGER"], a: 3 }, // 117
    { q: "Cum eliminați o coloană dintr-un tabel?", options: ["REMOVE COLUMN", "DROP column_name", "DROP COLUMN nume_coloana", "DELETE column_name"], a: 2 }, // 118
    { q: "Eliminați coloana SSN din Customers (DDL):", options: ["ALTER TABLE Customers DELETE SSN", "DELETE COLUMN SSN", "ALTER TABLE Customers DROP SSN", "ALTER TABLE Customers DROP COLUMN SSN"], a: 3 }, // 119
    { q: "Evaluați: 'CREATE TABLE elimină definiția tabelului și toate datele'.", options: ["No change is needed", "DROP TABLE", "TRUNCATE TABLE", "ALTER TABLE"], a: 1 }, // 120
    { q: "Ștergeți complet tabelul Equipment:", options: ["DELETE TABLE", "DROP TABLE Equipment", "REMOVE TABLE", "TRUNCATE TABLE"], a: 1 }, // 121
    { q: "Evaluați: 'DELETE TABLE elimină toate rândurile fără jurnalizare individuală'.", options: ["No change is needed", "DROP TABLE", "TRUNCATE TABLE", "ALTER TABLE"], a: 2 }, // 122
    { q: "Ce face căutarea după ID mai eficientă într-un tabel de un milion de rânduri?", options: ["Cursor", "Subquery", "Trigger", "Index"], a: 3 }, // 155
    { q: "Ce adăugați coloanei Salary pentru a îmbunătăți performanța interogării?", options: ["Non-null constraint", "Default constraint", "Index", "Foreign key"], a: 2 }, // 156
    { q: "Un motiv pentru a adăuga un index este:", options: ["Scade spațiul", "Crește securitatea", "Îmbunătățește SELECT", "Îmbunătățește INSERT"], a: 2 }, // 157
    { q: "Creați un index pe un tabel. Rezultatul?", options: ["Mai multe rânduri", "Mai multe coloane", "Structură separată cu date", "Structură fără date"], a: 2 }, // 158
    { q: "Bitmap, B-tree și Hash sunt tipuri de:", options: ["View", "Function", "Index", "Stored procedure"], a: 2 }, // 159
    { q: "Acest tip de index sortează datele fizic pe coloana din tabel:", options: ["Clustered", "Non-clustered", "Bitmap", "Spatial"], a: 0 }, // 160.1
    { q: "Index care stochează datele într-o structură separată față de tabel:", options: ["Clustered", "Non-clustered", "Sequential", "Primary"], a: 1 }, // 160.2
    { q: "Ce tip de index modifică ordinea în care datele sunt stocate fizic?", options: ["Non-sequential", "Sequential", "Non-clustered", "Clustered"], a: 3 }, // 161
    { q: "Căutați ProductName unde Category = 'Science Books'. Cel mai eficient?", options: ["Index clustered pe ProductName", "Index clustered pe Price", "Index non-clustered pe Category", "Index non-clustered pe Price"], a: 2 }, // 162
    { q: "Adăugarea unui index ______ sortează fizic rândurile.", options: ["Clustered", "Non-clustered", "Unique", "Filtered"], a: 0 }, // 163.1
    { q: "Indexul ______ recuperează datele rapid fără sortare fizică.", options: ["Non-clustered", "Clustered", "Spatial", "XML"], a: 0 }, // 163.2
    { q: "Care instrucțiune creează un index direct odată cu tabelul?", options: ["PRIMARY KEY", "DISTINCT", "NULL", "INDEX"], a: 0 }, // 165
    { q: "Ce este o vizualizare (view)?", options: ["Tabel virtual creat de o interogare", "Comandă recuperare", "Copie fizică", "Rezultat execuție"], a: 0 }, // 166
    { q: "O vizualizare poate fi utilizată pentru a:", options: ["No change needed", "Salva copie suplimentară", "Limita accesul la rânduri/coloane", "Salva date istorice"], a: 2 }, // 167
    { q: "Ce se întâmplă când interogați o vizualizare?", options: ["Recuperează date statice", "Motorul reîmprospătează datele din tabelele de bază", "Devine tabel real", "Eroare dacă nu e indexată"], a: 1 }, // 168
    { q: "Ștergeți datele din tabelul Product. Setul de rezultate al vizualizării devine:", options: ["Gol (Empty)", "Șters", "Neschimbat", "Arhivat"], a: 0 }, // 169
    { q: "Sintaxa pentru crearea vizualizărilor:", options: ["CREATE VIEW AS SELECT", "CREATE VIEW AS UPDATE", "DROP VIEW AS SELECT", "ALTER VIEW"], a: 0 }, // 170
    { q: "Ce cuvânt cheie e obligatoriu în CREATE VIEW?", options: ["WHERE", "ORDER BY", "UPDATE", "SELECT"], a: 3 }, // 171
    { q: "O vizualizare (view) are următoarea proprietate:", options: ["Insera date în tabele", "Simplifică lucrul cu datele", "Nu este reutilizabilă", "Îmbină tabele statice"], a: 1 }, // 174
    { q: "Sintaxa corectă pentru ștergerea unei vizualizări:", options: ["DELETE VIEW", "REMOVE VIEW", "DROP VIEW", "ALTER VIEW"], a: 2 }, // 175
    { q: "Creați vw_Mygames (Name din Games) cu sortare. Corect:", options: ["CREATE VIEW... ORDER BY Name", "CREATE VIEW... SELECT *", "CREATE VIEW... SELECT TOP 100 PERCENT... ORDER BY Name", "CREATE VIEW... Name BETWEEN"], a: 2 }, // 176 (Nota: In SQL Server ORDER BY cere TOP)
    { q: "Eliminați vizualizarea EmployeeView:", options: ["DELETE VIEW", "DELETE EmployeeView", "DROP EmployeeView", "DROP VIEW EmployeeView"], a: 3 }, // 177
    { q: "Grup de instrucțiuni SQL cu nume, executabil în DB:", options: ["Subrutină", "Formulă", "Procedură stocată", "Metodă"], a: 2 }, // 178
    { q: "Un motiv pentru a crea o procedură stocată:", options: ["Îmbunătățește performanța", "Minimizează spațiul", "Ocolește case sensitivity", "Control utilizator"], a: 0 }, // 179
    { q: "Obiect pentru stocarea datelor manualelor pentru procesare ulterioară:", options: ["View", "Table", "Function", "Stored procedure"], a: 1 }, // 180
    { q: "Stocați codul unei interogări lungi și complexe pentru apelare manuală:", options: ["Procedură stocată", "Funcție", "Trigger", "Vizualizare"], a: 0 }, // 181
    { q: "Permisiune necesară pentru a rula o procedură:", options: ["EXECUTE", "ALLOW", "CALL", "RUN"], a: 0 }, // 182
    { q: "Grup de comenzi care returnează o valoare:", options: ["Procedură", "Funcție", "Declanșator", "Vizualizare"], a: 1 }, // 183
    { q: "Diferența între funcție și procedură: funcția...", options: ["Apelată de trigger", "Trebuie să returneze o valoare", "Nu are tranzacție", "Fără parametri"], a: 1 }, // 184
    { q: "Puteți șterge date folosind o procedură stocată?", options: ["DA", "NU"], a: 0 }, // 185.A
    { q: "O funcție trebuie să aibă o valoare returnată?", options: ["DA", "NU"], a: 0 }, // 185.B
    { q: "O procedură stocată trebuie să aibă o valoare returnată?", options: ["DA", "NU"], a: 1 }, // 185.C
    { q: "Apelați funcția scalară CalculateAge:", options: ["SELECT dbo.CalculateAge(BirthDate)", "EXEC CalculateAge", "SELECT * FROM CalculateAge", "CALL CalculateAge"], a: 0 }, // 186
    { q: "Apelați funcția table-valued GetEmployeesByDepartment(3):", options: ["SELECT * FROM dbo.GetEmployeesByDepartment(3)", "SELECT * FROM Employees WHERE ID = dbo...", "EXEC Get...", "SELECT dbo..."], a: 0 }, // 187
    { q: "Rol cu acces complet asupra unei baze individuale:", options: ["db_owner", "db_accessadmin", "db_securityadmin", "db_ddladmin"], a: 0 }, // 191
    { q: "Rol cu acces 'doar citire' (read-only):", options: ["db_datawriter", "db_owner", "db_securityadmin", "db_datareader"], a: 3 }, // 192
    { q: "Comandă pentru cont nou de autentificare (login):", options: ["CREATE LOGIN", "CREATE ROLE", "CREATE USER", "ADD USER"], a: 0 }, // 193
    { q: "Permiteți unui nou angajat să se autentifice:", options: ["ALLOW USER", "CREATE USER", "ADD USER", "INSERT USER"], a: 1 }, // 194
    { q: "Comanda ______ permite accesul la obiecte:", options: ["GRANT", "DENY", "PERMIT", "ALTER"], a: 0 }, // 195
    { q: "Evaluați: 'ALLOW SELECT' pentru a oferi permisiune de citire.", options: ["No change needed", "GRANT SELECT", "LET HEAD", "PERMIT READ"], a: 1 }, // 196
    { q: "WITH GRANT OPTION îi permite utilizatorului să:", options: ["Solicite jurnal", "Delege permisiuni altora", "Creeze noi utilizatori", "Vadă permisiuni"], a: 1 }, // 198
    { q: "Scopul permisiunii DENY:", options: ["Șterge utilizator", "Dezactivează temporar", "Blocarea explicită a unei permisiuni", "Permite doar SELECT"], a: 2 }, // 199
    { q: "Dezactivați accesul User1 de a vedea tabelul Customer:", options: ["REMOVE User1", "REMOVE SELECT", "REVOKE SELECT ON Customer FROM User1", "REVOKE User1"], a: 2 }, // 200
    { q: "Scopul principal al backup-urilor regulate:", options: ["Performanță", "Prevenire pierdere informații", "Editare rapidă", "Resetare permisiuni"], a: 1 }, // 201
    { q: "Restaurare (restore) se face când:", options: ["Date corupte", "Roll back tranzacție", "Eroare aplicație", "Ștergere date"], a: 0 }, // 202
    { q: "Backup la 2 ore pentru 10 TB date. Ce tip folosiți?", options: ["Archive", "Incremental/Differential", "Partial", "Full"], a: 1 }, // 203
    { q: "Backup la 15:00, Tabel creat la 16:00, Crash la 17:00. Aplicați backup-ul de la 15:00. Rezultat:", options: ["Tabelul nu există", "Tabelul neafectat", "Tabel fără date", "Eroare"], a: 0 }, // 204
    { q: "Descriere Backup Complet (Full Backup):", options: ["Doar schimbări", "Copie completă DB", "Doar log", "Schimbări recente"], a: 1 }, // 205
    { q: "Descriere Backup Diferențial:", options: ["Copie completă", "Doar schimbări de la ultimul incremental", "Doar schimbări de la ultimul Full", "Doar log"], a: 2 }, // 206
    { q: "Descriere Backup Incremental:", options: ["Schimbări de la ultimul backup (complet sau incremental)", "Schimbări de la Full", "Doar log", "Copie completă"], a: 0 }, // 207
    { q: "Scop backup jurnal tranzacții (transaction log):", options: ["Resetare DB", "Backup tabele sistem", "Captură tranzacții de la ultimul backup log", "Comprimare Full"], a: 2 }, // 208
    { q: "Evaluați: 'Truncate este procesul de aplicare a unui backup'.", options: ["Change needed", "Commit", "Attach", "Restore"], a: 3 }, // 211
    { q: "Extensia fișierelor principale de date SQL Server:", options: [".ldf", ".ndf", ".mdf", ".bak"], a: 2 }, // 213
    { q: "Extensia fișierului pentru jurnalul de tranzacții:", options: [".mdf", ".ldf", ".ndf", ".log"], a: 1 }, // 214
    { q: "Ștergeți din Order și rândurile din OrderItem dispar automat. Exemplu de:", options: ["Moștenire", "Ștergere în cascadă (Cascade)", "Funcțională", "Waterfall"], a: 1 }, // 216
    { q: "Ștergere în cascadă dezactivată. Din ce tabel începeți ștergerea mașinii?", options: ["Make", "Model", "Engine", "ModelEngine (Copil/Junction)"], a: 3 }, // 217
    { q: "Măsură protecție date pacienți at rest și in transit:", options: ["Auditare", "Criptare puternică", "Roluri", "Anonimizare"], a: 1 }, // 218
    { q: "Metodă criptare date at rest (fișiere și backup):", options: ["TDE", "Criptare coloană", "TPM", "Aplicație"], a: 0 }, // 219
    { q: "Always Encrypted pe coloana IDNP. Efect pe server:", options: ["Sortare în clar", "Serverul nu vede datele în clar", "Read-only", "Fără chei"], a: 1 }, // 222
    { q: "Tehnică potrivită pentru stocarea parolelor:", options: ["TDE", "Hashing cu salt", "Masking", "Criptare backup"], a: 1 }, // 224
    { q: "Atacator cu set pre-calculat de hash-uri. Tip atac:", options: ["Brute force", "Dictionary", "Password spraying", "Rainbow table"], a: 3 }, // 225
    { q: "Dynamic Data Masking face:", options: ["Criptează disc", "Ascunde valorile la afișare pentru unii", "HMAC", "Restaurează"], a: 1 }, // 226
    { q: "Scopul auditării bazei de date:", options: ["Criptare", "Monitorizare activități pentru securitate/conformitate", "Experiență utilizator", "Optimizare"], a: 1 } // 228
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
    { q: "Ce instrucțiune SQL este folosită pentru a afișa date dintr-un tabel?", options: ["SHOW", "DISPLAY", "SELECT", "READ"], a: 2 },
    { q: "Ce clauză este utilizată pentru a filtra rândurile returnate de SELECT?", options: ["ORDER BY", "WHERE", "GROUP", "HAVING"], a: 1 },
    { q: "Care operator este folosit pentru a selecta valori dintr-o listă?", options: ["BETWEEN", "LIKE", "IN", "EXISTS"], a: 2 },
    { q: "Ce face operatorul NOT IN?", options: ["Selectează valori dintr-un interval", "Exclude valorile specificate din rezultat", "Selectează valori NULL", "Sortează datele"], a: 1 },
    { q: "Care instrucțiune returnează elevii din clasele 7, 8 și 9?", options: ["WHERE clasa = 7 OR 8 OR 9", "WHERE clasa BETWEEN 7 AND 9", "WHERE clasa IN (7,8,9)", "WHERE clasa LIKE 7%"], a: 2 },
    { q: "Ce operator verifică dacă o valoare este într-un interval?", options: ["RANGE", "BETWEEN", "LIMIT", "ANY"], a: 1 },
    { q: "SELECT * FROM Products WHERE Price BETWEEN 100 AND 200; returnează:", options: ["Produse sub 100", "Produse între 100 și 200 inclusiv", "Produse peste 200", "Doar produsul cu preț 100"], a: 1 },
    { q: "Ce operator este folosit pentru căutări în șiruri de caractere (pattern matching)?", options: ["MATCH", "FIND", "LIKE", "SEARCH"], a: 2 },
    { q: "Ce simbol în LIKE reprezintă zero sau mai multe caractere?", options: ["_", "%", "*", "#"], a: 1 },
    { q: "SELECT * FROM Users WHERE Username LIKE 'A%'; returnează:", options: ["Nume care conțin A", "Nume care se termină cu A", "Nume care încep cu A", "Doar numele 'A'"], a: 2 },
    { q: "Ce simbol reprezintă exact un singur caracter în operatorul LIKE?", options: ["%", "*", "_", "?"], a: 2 },
    { q: "Cum verifici corect prezența valorilor NULL?", options: ["= NULL", "<> NULL", "IS NULL", "NULL()"], a: 2 },
    { q: "Ce este adevărat despre NULL?", options: ["NULL = 0", "NULL = ''", "NULL reprezintă lipsa unei valori (unknown)", "NULL este echivalent cu false"], a: 2 },
    { q: "Care clauză sortează rezultatele unei interogări?", options: ["SORT", "GROUP", "ORDER BY", "FILTER"], a: 2 },
    { q: "Cum sortezi elevii după notă în ordine descrescătoare?", options: ["ORDER BY nota", "ORDER BY nota DESC", "SORT nota DESC", "GROUP BY nota"], a: 1 },
    { q: "Ce tip de JOIN returnează doar rândurile care au potrivire în ambele tabele?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], a: 2 },
    { q: "Ce JOIN afișează toate rândurile din tabelul din stânga, chiar și cele fără potrivire?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"], a: 1 },
    { q: "Ce reprezintă produsul cartezian în baze de date?", options: ["JOIN pe chei", "UNION între tabele", "Combinarea fiecărui rând dintr-un tabel cu fiecare rând din altul", "O grupare complexă"], a: 2 },
    { q: "Două tabele au câte 4 rânduri. Câte rânduri va avea produsul cartezian?", options: ["4", "8", "12", "16"], a: 3 },
    { q: "Ce clauză combină rezultatele a două interogări eliminând duplicatele?", options: ["JOIN", "UNION", "INTERSECT", "EXCEPT"], a: 1 },
    { q: "Ce operator returnează doar rândurile comune (care apar în ambele interogări)?", options: ["UNION", "JOIN", "INTERSECT", "EXCEPT"], a: 2 },
    { q: "Ce operator elimină din prima interogare rândurile care apar în a doua?", options: ["UNION", "INTERSECT", "EXCEPT", "JOIN"], a: 2 },
    { q: "Care funcție de agregare returnează numărul total de rânduri?", options: ["SUM()", "AVG()", "COUNT()", "TOTAL()"], a: 2 },
    { q: "Ce funcție calculează media aritmetică a valorilor?", options: ["MEAN()", "AVG()", "MID()", "COUNT()"], a: 1 },
    { q: "Ce funcție returnează cea mai mare valoare dintr-o coloană?", options: ["TOP()", "MAX()", "HIGH()", "BIG()"], a: 1 },
    { q: "Care clauză este folosită pentru a grupa datele pe baza uneia sau mai multor coloane?", options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"], a: 2 },
    { q: "Ce este obligatoriu să apară în SELECT când folosim clauza GROUP BY?", options: ["Doar funcții", "Coloanele după care se face gruparea", "Clauza WHERE", "Clauza ORDER BY"], a: 1 },
    { q: "Ce diferențiază clauza HAVING de clauza WHERE?", options: ["WHERE filtrează după agregare", "HAVING filtrează înainte de agregare", "HAVING filtrează după ce agregarea a fost procesată", "Sunt perfect identice"], a: 2 },
    { q: "SELECT Dept, COUNT(*) FROM Emp GROUP BY Dept HAVING COUNT(*) > 5; face:", options: ["Afișează toți angajații", "Afișează departamentele cu peste 5 angajați", "Afișează primii 5 angajați", "Eroare de sintaxă"], a: 1 },
    { q: "Ce face operatorul ANY?", options: ["Compară cu toate valorile", "Compară cu cel puțin o valoare din subinterogare", "Compară doar cu prima valoare", "Este identic cu operatorul IN"], a: 1 },
    { q: "Ce face operatorul ALL?", options: ["Compară cu orice valoare", "Compară cu TOATE valorile returnate de subinterogare", "Este sinonim cu ANY", "Elimină duplicatele"], a: 1 },
    { q: "Salary > ALL (SELECT Salary FROM Emps WHERE DeptID = 3) returnează:", options: ["Angajații din dept 3", "Angajații cu salariul mai mare decât cel mai mare salariu din dept 3", "Angajații cu salariul minim", "Toți angajații"], a: 1 },
    { q: "Price > ANY (SELECT Price FROM Products WHERE Category = 'Food') returnează:", options: ["Produse mai ieftine", "Produse mai scumpe decât toate alimentele", "Produse mai scumpe decât cel mai ieftin aliment", "Doar produsele Food"], a: 2 },
    { q: "Ce operator logic este folosit pentru a combina mai multe condiții care trebuie îndeplinite simultan?", options: ["JOIN", "AND", "BETWEEN", "IN"], a: 1 },
    { q: "Care operator returnează TRUE dacă cel puțin una dintre condiții este adevărată?", options: ["AND", "NOT", "OR", "ALL"], a: 2 },
    { q: "WHERE State NOT IN ('CA','TX') returnează:", options: ["Doar CA și TX", "Toate statele, exceptând CA și TX", "Doar statul TX", "Niciun rând"], a: 1 },
    { q: "Ce face cuvântul cheie DISTINCT?", options: ["Sortează datele", "Elimină valorile duplicate din rezultat", "Limitează numărul de rânduri", "Grupează datele"], a: 1 },
    { q: "Ce va returna o interogare SELECT fără clauza ORDER BY?", options: ["Ordine alfabetică", "Ordine de inserare", "Ordine predictibilă", "Datele într-o ordine imprevizibilă"], a: 3 },
    { q: "Ce coloane sunt returnate de instrucțiunea SELECT *?", options: ["Prima coloană", "Ultima coloană", "Doar cheile primare", "Toate coloanele tabelului"], a: 3 },
    { q: "Cum returnezi doar numele unice ale florilor?", options: ["SELECT UNIQUE name", "SELECT name DISTINCT", "SELECT DISTINCT name FROM flowers", "SELECT TOP 1 name"], a: 2 },
    { q: "Ce operator este folosit pentru concatenarea textului în SQL Server?", options: ["&", "||", "+", "CONCATENATE"], a: 2 },
    { q: "Ce se întâmplă dacă concatenezi un șir de caractere cu o valoare NULL?", options: ["Se ignoră NULL", "Apare o eroare de execuție", "Întreg rezultatul devine NULL", "NULL este convertit în șir gol"], a: 2 },
    { q: "În ordinea logică a execuției, ce clauză trebuie să apară înaintea lui ORDER BY?", options: ["HAVING", "WHERE", "FROM", "Toate celelalte (ORDER BY este ultima)"], a: 3 },
    { q: "Care este sintaxa corectă pentru sortare după clasa (asc) și apoi după nume (asc)?", options: ["ORDER clasa, nume", "ORDER BY clasa, nume", "SORT BY clasa AND nume", "GROUP clasa, nume"], a: 1 },
    { q: "SELECT COUNT(*) FROM Orders; returnează:", options: ["Suma prețurilor", "Numărul total de rânduri/comenzi", "Cea mai mare comandă", "Media valorii"], a: 1 },
    { q: "Ce funcție returnează suma totală a unei coloane numerice?", options: ["ADD()", "SUM()", "TOTAL()", "COUNT()"], a: 1 },
    { q: "Ce clauză este obligatorie atunci când folosim HAVING?", options: ["WHERE", "GROUP BY", "ORDER BY", "DISTINCT"], a: 1 },
    { q: "SELECT City, COUNT(*) FROM Customers GROUP BY City; face:", options: ["Listează clienții", "Numără clienții din fiecare oraș", "Sortează orașele", "Șterge duplicatele"], a: 1 },
    { q: "Ce operator este folosit pentru a exclude un interval (ex: între 10 și 20)?", options: ["NOT BETWEEN", "BETWEEN", "EXCEPT", "NOT IN"], a: 0 },
    { q: "Produse ordonate descrescător după preț:", options: ["ORDER Price DESC", "SORT BY Price DESC", "ORDER BY Price DESC", "GROUP BY Price DESC"], a: 2 },
    { q: "Ce tip de JOIN afișează doar rândurile cu potrivire în ambele părți?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], a: 2 },
    { q: "Ce JOIN afișează tot din stânga, chiar dacă nu are corespondent în dreapta?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"], a: 1 },
    { q: "Ce tip de JOIN va afișa toate rândurile din tabelul din dreapta?", options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"], a: 2 },
    { q: "Ce JOIN afișează toate rândurile din ambele tabele (uniune completă)?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], a: 3 },
    { q: "SELECT * FROM Elevi INNER JOIN Clase ON Elevi.ClasaID = Clase.ID; afișează:", options: ["Toți elevii", "Toate clasele", "Doar elevii care aparțin unei clase", "Elevii orfani de clasă"], a: 2 },
    { q: "Ce apare în dreptul coloanelor din dreapta la un LEFT JOIN fără potrivire?", options: ["Eroare", "Spațiu gol", "Valoarea NULL", "0"], a: 2 },
    { q: "Ce tip de JOIN combină fiecare rând din A cu fiecare rând din B?", options: ["INNER JOIN", "FULL JOIN", "SELF JOIN", "CROSS JOIN"], a: 3 },
    { q: "Tabele de 3 și 4 rânduri. Câte rânduri returnează un CROSS JOIN?", options: ["7", "12", "4", "3"], a: 1 },
    { q: "Ce este un SELF JOIN?", options: ["JOIN fără condiție", "JOIN între tabele diferite", "Un tabel unit cu el însuși", "JOIN între servere"], a: 2 },
    { q: "SELECT A.Nume, B.Nume FROM Angajati A JOIN Angajati B ON A.MgrID = B.ID;", options: ["Toți angajații", "Cei fără manager", "Angajatul lângă managerul său", "Eroare"], a: 2 },
    { q: "Ce este obligatoriu într-o instrucțiune JOIN modernă (ANSI)?", options: ["ORDER BY", "GROUP BY", "Condiția ON", "HAVING"], a: 2 },
    { q: "Dacă lipsește condiția ON (sau WHERE în stil vechi) într-un JOIN:", options: ["Face INNER JOIN", "Eroare de sintaxă", "Rezultă un produs cartezian", "Ignoră a doua tabelă"], a: 2 },
    { q: "Ce tip de JOIN este implicit dacă scriem doar JOIN?", options: ["LEFT", "RIGHT", "INNER", "FULL"], a: 2 },
    { q: "SELECT * FROM Comenzi LEFT JOIN Clienti ON Comenzi.CID = Clienti.ID; afișează:", options: ["Doar clienții", "Doar comenzile cu client", "Toate comenzile, inclusiv cele fără client", "Eroare"], a: 2 },
    { q: "Care JOIN este rar folosit din cauza exploziei volumului de date (performanță slabă)?", options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"], a: 2 },
    { q: "Care afirmație este adevărată despre JOIN-uri?", options: ["FULL JOIN e cel mai rapid", "LEFT JOIN poate returna NULL în coloanele din dreapta", "SELF JOIN necesită două fișiere fizice", "CROSS JOIN are condiție ON obligatorie"], a: 1 }
  ],

dml: [

    { q: "Care dintre următoarele este elementul de limbaj care vă permite să utilizați instrucțiuni precum INSERT, UPDATE și DELETE pentru a manipula datele?", options: ["DML", "DDE", "DDL", "DAT"], a: 0 }, // 123
    { q: "Care sunt trei comenzi valide ale limbajului de manipulare a datelor (DML)? (Alegeți trei)", options: ["INSERT", "COMMIT", "DELETE", "OUTPUT", "UPDATE"], a: [0, 2, 4] }, // 124
    { q: "În SQL, o instrucțiune INSERT este utilizată pentru a adăuga un:", options: ["Utilizator la o bază de date", "Rând de date într-un tabel", "Tabel la o bază de date", "Coloană la definiția unui tabel"], a: 1 }, // 125
    { q: "Pe ce structură a bazei de date operează o instrucțiune INSERT?", options: ["Rol (Role)", "Trigger", "Utilizator (User)", "Tabel (Table)"], a: 3 }, // 126
    { q: "Trebuie să adăugați rânduri într-un tabel. Ce cuvânt cheie SQL ar trebui să folosiți?", options: ["JOIN", "INSERT", "CREATE", "UPDATE"], a: 1 }, // 127
    { q: "Ce instrucțiune ați folosi pentru a adăuga date într-un tabel?", options: ["ADD", "INSERT", "JOIN", "PRESENT"], a: 1 }, // 128
    { q: "Care instrucțiune SQL este o instrucțiune pură de tip DML?", options: ["ALTER TABLE Employee ADD Name Varchar", "SELECT Name FROM Employee", "SELECT * INTO Employee FROM NewHires", "INSERT INTO Employee VALUES ('Jack Smith')"], a: 3 }, // 129
    { q: "CREATE TABLE Road (ID INT NOT NULL, Dist INT NOT NULL). Executați: INSERT INTO Road VALUES (1234, 36). Rezultatul este:", options: ["Eroare: NULL nu este permis", "Un rând nou în tabel", "Eroare: ID duplicat", "Eroare de sintaxă"], a: 1 }, // 130
    { q: "Tabel Product(ProductID, Name). Inserați ID 12345 și numele 'Plate'. Comanda corectă:", options: ["INSERT INTO Product VALUES (ProductID=12345, Name='Plate')", "INSERT NEW 12345, 'Plate' INTO Product", "INSERT 12345, 'Plate' INTO Product", "INSERT INTO Product (ProductID, Name) VALUES (12345, 'Plate')"], a: 3 }, // 131
    { q: "Inserați două produse: (125, 'Book') și (126, 'Movie'). Comanda corectă:", options: ["INSERT INTO Product VALUES (ID=125, 126) (Name='Book', 'Movie')", "INSERT INTO Product (ID, Name) VALUES (125, 'Book'), (126, 'Movie')", "INSERT 125, 126, 'Book', 'Movie' INTO Product", "INSERT NEW ID=125, Name='Book'"], a: 1 }, // 132
    { q: "Aveți coloanele StreetAddress, City, State, PostalCode. Care două variante sunt valide? (Alegeți două)", options: ["INSERT INTO AddressInfo ('123', 'City', 'TX', '00') VALUES (...)", "INSERT INTO AddressInfo (StreetAddress, City, State, PostalCode) VALUES ('123 Main St', 'Dallas', 'TX', '75201')", "INSERT INTO AddressInfo VALUES ('123 Main St', 'Dallas', 'TX', '75201')", "UPDATE AddressInfo SET StreetAddress='123'"], a: [1, 2] }, // 133
    { q: "Product are PK ProductID(3296). Executați: INSERT INTO Product VALUES (3296, 'Table', 4444). Rezultatul?", options: ["Foreign key violation", "Syntax error", "Row added", "Primary key constraint violation"], a: 3 }, // 134
    { q: "Populați EmployeeCopy cu date din Employee. Ce folosiți?", options: ["SELECT * INTO EmployeeCopy SELECT * FROM Employee", "INSERT * FROM Employee INTO EmployeeCopy", "COPY INTO Employee", "INSERT INTO EmployeeCopy SELECT * FROM Employee"], a: 3 }, // 135
    { q: "Pe ce structură de bază de date operează o instrucțiune UPDATE?", options: ["Tabel (Table)", "Utilizator (User)", "Trigger", "Rol (Role)"], a: 0 }, // 136
    { q: "Ce cuvânt cheie SQL folosiți pentru a schimba prenumele unui student existent?", options: ["UPDATE", "CHANGE", "SELECT", "INSERT"], a: 0 }, // 137
    { q: "Ce instrucțiune ați folosi pentru a modifica datele existente dintr-un tabel?", options: ["CHANGE", "MODIFY", "INSERT", "UPDATE"], a: 3 }, // 138
    { q: "UPDATE: Schimbați numele produsului în 'glass'. Ce includeți?", options: ["SET ProductName = 'glass'", "LET ProductName = 'glass'", "EXEC ProductName = 'glass'", "ASSIGN ProductName = 'glass'"], a: 0 }, // 139
    { q: "UPDATE: Setați InStock la 'Yes' pentru un anumit ProductID. Ce clauză folosiți?", options: ["THAT", "WHERE", "GROUP BY", "HAVING"], a: 1 }, // 140
    { q: "Ce se întâmplă dacă omiteți clauza WHERE într-o instrucțiune UPDATE?", options: ["Nicio înregistrare nu se schimbă", "Doar prima se schimbă", "Toate înregistrările vor fi actualizate", "Eroare de sintaxă"], a: 2 }, // 141
    { q: "Înlocuiți Benjamin cu Kayden în coloana FirstName:", options: ["UPDATE STUDENTS SET FIRSTNAME='Kayden' WHERE FIRSTNAME='Benjamin'", "UPDATE STUDENTS SET FIRSTNAME='Benjamin' WHERE FIRSTNAME='Kayden'", "CHANGE STUDENTS SET FIRSTNAME='Kayden'", "REPLACE FIRSTNAME='Benjamin' WITH 'Kayden'"], a: 0 }, // 142
    { q: "Harry din San Francisco returnează cărțile (Books=0). Update corect:", options: ["UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' AND City='San Francisco'", "UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' OR City='San Francisco'", "UPDATE LoanedBooks SET Books=0 WHERE Name IN ('Harry', 'San Francisco')", "INSERT INTO LoanedBooks SET Books=0 WHERE ID=4"], a: 0 }, // 143
    { q: "Schimbați ProductCategory în 43 pentru toate 'spoons' (ProductDescription):", options: ["UPDATE Product SET ProductCategory=43 WHERE ProductDescription='spoons'", "SET Product WHERE ProductCategory=43", "UPDATE Product WHERE ProductDescription='spoons'", "CHANGE Product SET 43"], a: 0 }, // 144
    { q: "Care este o diferență între UPDATE și DELETE?", options: ["UPDATE modifică doar un rând", "DELETE nu poate folosi WHERE", "UPDATE nu elimină rânduri din tabel", "DELETE funcționează doar în proceduri"], a: 2 }, // 148
    { q: "Ștergeți toate înregistrările cu GivenName 'Tia':", options: ["DELETE FROM Volunteer WHERE GivenName == 'Tia'", "DELETE FROM Volunteer WHERE GivenName = 'Tia'", "DELETE FROM Volunteer WHERE GivenName EQUALS 'Tia'", "DELETE FROM Volunteer WHERE GivenName IS 'Tia'"], a: 1 }, // 149
    { q: "Ștergeți clientul cu CustomerID = 12345:", options: ["UPDATE Customer DELETE *", "DELETE CustomerID FROM Customer", "DELETE FROM Customer WHERE CustomerID = 12345", "DROP Customer WHERE ID=12345"], a: 2 }, // 150
    { q: "Ștergeți rândurile unde Phone nu este introdus (este gol/lipsă):", options: ["DELETE FROM Employee WHERE Phone IS NULL", "DELETE FROM Employee WHERE Phone IS NOT NULL", "DELETE FROM Employee WHERE Phone = '%'", "DELETE FROM Employee WHERE Phone = NULLABLE"], a: 0 }, // 151
    { q: "Selectați afirmația ADEVĂRATĂ despre TRUNCATE:", options: ["Elimină structura tabelului", "Elimină toate datele fără a jurnaliza fiecare rând (fast delete)", "Permite clauza WHERE", "Este o comandă DML care folosește declanșatori (triggers)"], a: 1 }, // 152a
    { q: "Ce face comanda DROP?", options: ["Șterge rândurile, dar păstrează tabelul", "Șterge și datele și structura tabelului definitiv", "Redenumește tabelul", "Golește memoria cache"], a: 1 }, // 152b
    { q: "DELETE FROM Order WHERE CustomerID = 209. Rezultatul?", options: ["Prima comandă este ștearsă", "Toate comenzile clientului 209 sunt șterse din tabelul Order", "Clientul este șters și din tabelul Customer", "Eroare de integritate"], a: 1 }, // 153
    { q: "Executați DELETE FROM Student; (fără WHERE). Rezultatul?", options: ["Toate rândurile din tabel vor fi șterse", "Doar rândurile cu NULL vor fi șterse", "Eroare: clauza WHERE e obligatorie", "Se șterge și definiția tabelului"], a: 0 }, // 154

    { q: "Care este clauza corectă pentru a filtra grupurile rezultate după o funcție de agregare (ex: SUM)?", options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"], a: 2 },
    { q: "Ce instrucțiune SQL permite efectuarea de operații INSERT, UPDATE sau DELETE într-o singură comandă, în funcție de o condiție?", options: ["JOIN", "MERGE", "UNION", "COMBINE"], a: 1 },
    { q: "Pentru a șterge toate datele dintr-un tabel extrem de rapid și a reseta identitatea (ID), folosim:", options: ["DELETE", "DROP", "TRUNCATE TABLE", "REMOVE"], a: 2 },
    { q: "Ce clauză DML poate fi folosită pentru a vedea rândurile care au fost tocmai inserate sau șterse?", options: ["OUTPUT", "INTO", "FROM", "VALUES"], a: 0 },
    { q: "Puteți folosi o subinterogare (subquery) în interiorul unei instrucțiuni UPDATE?", options: ["Da, pentru a obține valori din alte tabele", "Nu, UPDATE funcționează doar cu valori fixe", "Da, dar numai dacă tabelul este gol", "Doar în clauza ORDER BY"], a: 0 },
    { q: "Ce face clauza VALUES într-o instrucțiune INSERT?", options: ["Definește coloanele", "Specifică datele care vor fi introduse în rândurile noi", "Filtrează datele", "Sortează datele"], a: 1 },
    { q: "Dacă un tabel are o coloană de tip IDENTITY, ce se întâmplă de regulă la un INSERT simplu?", options: ["Trebuie să introducem noi valoarea manual", "SQL Server generează automat valoarea", "Valoarea va fi mereu NULL", "Eroare: coloana lipsește din instrucțiune"], a: 1 },
    { q: "Care este operatorul folosit în WHERE pentru a verifica dacă o valoare se află într-o listă (ex: 10, 20, 30)?", options: ["BETWEEN", "LIKE", "IN", "EXISTS"], a: 2 },
    { q: "Ce clauză este obligatorie într-o instrucțiune UPDATE pentru a nu modifica accidental toată baza de date?", options: ["SET", "WHERE", "VALUES", "FROM"], a: 1 },
    { q: "Puteți șterge date dintr-un tabel folosind un JOIN în instrucțiunea DELETE?", options: ["Nu, DELETE acceptă doar un tabel", "Da, folosind sintaxa DELETE FROM ... FROM ... JOIN", "Doar dacă tabelul are cheie primară", "Doar în viziuni (Views)"], a: 1 }
  
   
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

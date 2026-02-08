
const RO_DATA = {
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
    { q: "Ce afirmație este corectă despre VARCHAR?", options: ["Are lungime fixă","Este pentru valori numerice","Are lungime variabilă","Acceptă doar litere mari"], a: 2 }
  ],

  ddl: [
    { q: "Scrieți instrucțiunea SQL corectă pentru a crea o bază de date nouă numită testDB.", options: ["CREATE DATABASE testdb;", "CREATE testDB DATABASE;", "CREATE DATABASE 'testDB';", "CREATE DATABASE testDB;"], a: 3 },
    { q: "Ce comandă SQL este utilizată pentru a schimba contextul bazei de date?", options: ["SELECT", "ALTER", "USE", "UPDATE"], a: 2 },
    { q: "Scrieți instrucțiunea SQL corectă pentru a șterge o bază de date numită testDB.", options: ["DELETE DATABASE testDB", "DROP DATABASE testDB", "REMOVE DATABASE testDB", "CLEAR DATABASE testDB"], a: 1 },
    { q: "Evaluați textul: 'Utilizați instrucțiunea ALTER pentru a adăuga un tabel nou într-o bază de date'.", options: ["No change is needed", "UPDATE", "INSERT", "CREATE"], a: 3 },
    { q: "Creați un tabel Student (ID, Name, Age). Care este sintaxa corectă?", options: ["CREATE TABLE Student (ID INT, Name VARCHAR(100), Age INT)", "CREATE (TABLE Student ID INT...)", "CREATE Student (ID INT, Name...)", "CREATE TABLE ID INT, Name..."], a: 0 },
    { q: "Care dintre următoarele instrucțiuni SQL creează o cheie compusă (composite key)?", options: ["PRIMARY KEY (Col1) PRIMARY KEY (Col2)", "PRIMARY KEY (Col1, Col2) la finalul definiției", "O coloană numită COMPOSITE KEY", "UNIQUE (Col1, Col2)"], a: 1 },
    { q: "Care două cuvinte cheie sunt valide pentru a fi utilizate într-o instrucțiune CREATE TABLE? (Alegeți două)", options: ["Order By", "Primary Key", "Insert Into", "Constraint"], a: [1, 3] },
    { q: "Poate o coloană definită ca PRIMARY KEY să conțină valori NULL?", options: ["Da", "Nu", "Doar una", "Depinde de DBMS"], a: 1 },
    { q: "Poate o coloană cu o constrângere de tip UNIQUE să conțină valori NULL?", options: ["Da, una singură", "Da, oricâte", "Nu", "Doar dacă e cheie primară"], a: 0 },
    { q: "Ce cuvânt cheie poate fi utilizat într-o instrucțiune CREATE TABLE pentru unicitate?", options: ["ORDER BY", "DISTINCT", "GROUP BY", "UNIQUE"], a: 3 },
    { q: "De ce ați folosi funcția AUTO INCREMENT (IDENTITY) într-un tabel?", options: ["Setare manuală PK", "Creare automată valoare unică pentru PK", "Permite duplicate", "Limitare înregistrări"], a: 1 },
    { q: "Care câmp utilizează de obicei funcția AUTO INCREMENT?", options: ["Address", "City", "Primary Key", "Foreign Key"], a: 2 },
    { q: "Care este scopul unei chei externe (FOREIGN KEY)?", options: ["Identifică unic rândul", "Indică către o cheie primară din alt tabel", "Permite duplicate", "Stochează NULL"], a: 1 },
    { q: "Ce comandă ar trebui să utilizați pentru a adăuga o coloană într-un tabel existent?", options: ["MODIFY", "ALTER", "UPDATE", "INSERT"], a: 1 },
    { q: "Pentru ce este utilizată instrucțiunea ALTER TABLE?", options: ["Adăugare/ștergere constrângeri", "Modificare coloane", "Extragere date", "Atât A cât și B"], a: 3 },
    { q: "Trebuie să redenumiți o coloană (DDL). Ce instrucțiune folosiți?", options: ["ALTER", "INSERT", "CREATE", "UPDATE"], a: 0 },
    { q: "Ce instrucțiune ar trebui să utilizați pentru a elimina o cheie externă?", options: ["ALTER TABLE", "DELETE TABLE", "DELETE FOREIGN KEY", "ALTER FOREIGN KEY"], a: 0 },
    { q: "Adăugați BirthDate NOT NULL pe un tabel cu date și dă eroare. Remediere:", options: ["Folosiți VARCHAR", "Adăugați DEFAULT '1900-01-01'", "Folosiți INT", "Puneți NULL în loc de NOT NULL"], a: 1 },
    { q: "Adăugați Prefix NOT NULL pe un tabel populat și dă eroare. Cauza?", options: ["Tabelul e gol", "Lipsă DROP CONSTRAINT", "Tip invalid", "Trebuie specificat DEFAULT"], a: 3 },
    { q: "Adăugați coloana District în tabelul Customer. Comanda corectă:", options: ["MODIFY TABLE Customer ADD District", "ALTER TABLE Customer MODIFY District", "MODIFY Customer District", "ALTER TABLE Customer ADD District INTEGER"], a: 3 },
    { q: "Cum eliminați o coloană dintr-un tabel?", options: ["REMOVE COLUMN", "DROP column_name", "DROP COLUMN nume_coloana", "DELETE column_name"], a: 2 },
    { q: "Eliminați coloana SSN din Customers (DDL):", options: ["ALTER TABLE Customers DELETE SSN", "DELETE COLUMN SSN", "ALTER TABLE Customers DROP SSN", "ALTER TABLE Customers DROP COLUMN SSN"], a: 3 },
    { q: "Evaluați: 'CREATE TABLE elimină definiția tabelului și toate datele'.", options: ["No change is needed", "DROP TABLE", "TRUNCATE TABLE", "ALTER TABLE"], a: 1 },
    { q: "Ștergeți complet tabelul Equipment:", options: ["DELETE TABLE", "DROP TABLE Equipment", "REMOVE TABLE", "TRUNCATE TABLE"], a: 1 },
    { q: "Evaluați: 'DELETE TABLE elimină toate rândurile fără jurnalizare individuală'.", options: ["No change is needed", "DROP TABLE", "TRUNCATE TABLE", "ALTER TABLE"], a: 2 },
    { q: "Ce face căutarea după ID mai eficientă într-un tabel de un milion de rânduri?", options: ["Cursor", "Subquery", "Trigger", "Index"], a: 3 },
    { q: "Ce adăugați coloanei Salary pentru a îmbunătăți performanța interogării?", options: ["Non-null constraint", "Default constraint", "Index", "Foreign key"], a: 2 },
    { q: "Un motiv pentru a adăuga un index este:", options: ["Scade spațiul", "Crește securitatea", "Îmbunătățește SELECT", "Îmbunătățește INSERT"], a: 2 },
    { q: "Creați un index pe un tabel. Rezultatul?", options: ["Mai multe rânduri", "Mai multe coloane", "Structură separată cu date", "Structură fără date"], a: 2 },
    { q: "Bitmap, B-tree și Hash sunt tipuri de:", options: ["View", "Function", "Index", "Stored procedure"], a: 2 },
    { q: "Acest tip de index sortează datele fizic pe coloana din tabel:", options: ["Clustered", "Non-clustered", "Bitmap", "Spatial"], a: 0 },
    { q: "Index care stochează datele într-o structură separată față de tabel:", options: ["Clustered", "Non-clustered", "Sequential", "Primary"], a: 1 },
    { q: "Ce tip de index modifică ordinea în care datele sunt stocate fizic?", options: ["Non-sequential", "Sequential", "Non-clustered", "Clustered"], a: 3 },
    { q: "Căutați ProductName unde Category = 'Science Books'. Cel mai eficient?", options: ["Index clustered pe ProductName", "Index clustered pe Price", "Index non-clustered pe Category", "Index non-clustered pe Price"], a: 2 },
    { q: "Adăugarea unui index ______ sortează fizic rândurile.", options: ["Clustered", "Non-clustered", "Unique", "Filtered"], a: 0 },
    { q: "Indexul ______ recuperează datele rapid fără sortare fizică.", options: ["Non-clustered", "Clustered", "Spatial", "XML"], a: 0 },
    { q: "Care instrucțiune creează un index direct odată cu tabelul?", options: ["PRIMARY KEY", "DISTINCT", "NULL", "INDEX"], a: 0 },
    { q: "Ce este o vizualizare (view)?", options: ["Tabel virtual creat de o interogare", "Comandă recuperare", "Copie fizică", "Rezultat execuție"], a: 0 },
    { q: "O vizualizare poate fi utilizată pentru a:", options: ["No change needed", "Salva copie suplimentară", "Limita accesul la rânduri/coloane", "Salva date istorice"], a: 2 },
    { q: "Ce se întâmplă când interogați o vizualizare?", options: ["Recuperează date statice", "Motorul reîmprospătează datele din tabelele de bază", "Devine tabel real", "Eroare dacă nu e indexată"], a: 1 },
    { q: "Ștergeți datele din tabelul Product. Setul de rezultate al vizualizării devine:", options: ["Gol (Empty)", "Șters", "Neschimbat", "Arhivat"], a: 0 },
    { q: "Sintaxa pentru crearea vizualizărilor:", options: ["CREATE VIEW AS SELECT", "CREATE VIEW AS UPDATE", "DROP VIEW AS SELECT", "ALTER VIEW"], a: 0 },
    { q: "Ce cuvânt cheie e obligatoriu în CREATE VIEW?", options: ["WHERE", "ORDER BY", "UPDATE", "SELECT"], a: 3 },
    { q: "O vizualizare (view) are următoarea proprietate:", options: ["Insera date în tabele", "Simplifică lucrul cu datele", "Nu este reutilizabilă", "Îmbină tabele statice"], a: 1 },
    { q: "Sintaxa corectă pentru ștergerea unei vizualizări:", options: ["DELETE VIEW", "REMOVE VIEW", "DROP VIEW", "ALTER VIEW"], a: 2 },
    { q: "Creați vw_Mygames (Name din Games) cu sortare. Corect:", options: ["CREATE VIEW... ORDER BY Name", "CREATE VIEW... SELECT *", "CREATE VIEW... SELECT TOP 100 PERCENT... ORDER BY Name", "CREATE VIEW... Name BETWEEN"], a: 2 },
    { q: "Eliminați vizualizarea EmployeeView:", options: ["DELETE VIEW", "DELETE EmployeeView", "DROP EmployeeView", "DROP VIEW EmployeeView"], a: 3 },
    { q: "Grup de instrucțiuni SQL cu nume, executabil în DB:", options: ["Subrutină", "Formulă", "Procedură stocată", "Metodă"], a: 2 },
    { q: "Un motiv pentru a crea o procedură stocată:", options: ["Îmbunătățește performanța", "Minimizează spațiul", "Ocolește case sensitivity", "Control utilizator"], a: 0 },
    { q: "Obiect pentru stocarea datelor manualelor pentru procesare ulterioară:", options: ["View", "Table", "Function", "Stored procedure"], a: 1 },
    { q: "Stocați codul unei interogări lungi și complexe pentru apelare manuală:", options: ["Procedură stocată", "Funcție", "Trigger", "Vizualizare"], a: 0 },
    { q: "Permisiune necesară pentru a rula o procedură:", options: ["EXECUTE", "ALLOW", "CALL", "RUN"], a: 0 },
    { q: "Grup de comenzi care returnează o valoare:", options: ["Procedură", "Funcție", "Declanșator", "Vizualizare"], a: 1 },
    { q: "Diferența între funcție și procedură: funcția...", options: ["Apelată de trigger", "Trebuie să returneze o valoare", "Nu are tranzacție", "Fără parametri"], a: 1 },
    { q: "Puteți șterge date folosind o procedură stocată?", options: ["DA", "NU"], a: 0 },
    { q: "O funcție trebuie să aibă o valoare returnată?", options: ["DA", "NU"], a: 0 },
    { q: "O procedură stocată trebuie să aibă o valoare returnată?", options: ["DA", "NU"], a: 1 },
    { q: "Apelați funcția scalară CalculateAge:", options: ["SELECT dbo.CalculateAge(BirthDate)", "EXEC CalculateAge", "SELECT * FROM CalculateAge", "CALL CalculateAge"], a: 0 },
    { q: "Apelați funcția table-valued GetEmployeesByDepartment(3):", options: ["SELECT * FROM dbo.GetEmployeesByDepartment(3)", "SELECT * FROM Employees WHERE ID = dbo...", "EXEC Get...", "SELECT dbo..."], a: 0 },
    { q: "Rol cu acces complet asupra unei baze individuale:", options: ["db_owner", "db_accessadmin", "db_securityadmin", "db_ddladmin"], a: 0 },
    { q: "Rol cu acces 'doar citire' (read-only):", options: ["db_datawriter", "db_owner", "db_securityadmin", "db_datareader"], a: 3 },
    { q: "Comandă pentru cont nou de autentificare (login):", options: ["CREATE LOGIN", "CREATE ROLE", "CREATE USER", "ADD USER"], a: 0 },
    { q: "Permiteți unui nou angajat să se autentifice:", options: ["ALLOW USER", "CREATE USER", "ADD USER", "INSERT USER"], a: 1 },
    { q: "Comanda ______ permite accesul la obiecte:", options: ["GRANT", "DENY", "PERMIT", "ALTER"], a: 0 },
    { q: "Evaluați: 'ALLOW SELECT' pentru a oferi permisiune de citire.", options: ["No change needed", "GRANT SELECT", "LET HEAD", "PERMIT READ"], a: 1 },
    { q: "WITH GRANT OPTION îi permite utilizatorului să:", options: ["Solicite jurnal", "Delege permisiuni altora", "Creeze noi utilizatori", "Vadă permisiuni"], a: 1 },
    { q: "Scopul permisiunii DENY:", options: ["Șterge utilizator", "Dezactivează temporar", "Blocarea explicită a unei permisiuni", "Permite doar SELECT"], a: 2 },
    { q: "Dezactivați accesul User1 de a vedea tabelul Customer:", options: ["REMOVE User1", "REMOVE SELECT", "REVOKE SELECT ON Customer FROM User1", "REVOKE User1"], a: 2 },
    { q: "Scopul principal al backup-urilor regulate:", options: ["Performanță", "Prevenire pierdere informații", "Editare rapidă", "Resetare permisiuni"], a: 1 },
    { q: "Restaurare (restore) se face când:", options: ["Date corupte", "Roll back tranzacție", "Eroare aplicație", "Ștergere date"], a: 0 },
    { q: "Backup la 2 ore pentru 10 TB date. Ce tip folosiți?", options: ["Archive", "Incremental/Differential", "Partial", "Full"], a: 1 },
    { q: "Backup la 15:00, Tabel creat la 16:00, Crash la 17:00. Aplicați backup-ul de la 15:00. Rezultat:", options: ["Tabelul nu există", "Tabelul neafectat", "Tabel fără date", "Eroare"], a: 0 },
    { q: "Descriere Backup Complet (Full Backup):", options: ["Doar schimbări", "Copie completă DB", "Doar log", "Schimbări recente"], a: 1 },
    { q: "Descriere Backup Diferențial:", options: ["Copie completă", "Doar schimbări de la ultimul incremental", "Doar schimbări de la ultimul Full", "Doar log"], a: 2 },
    { q: "Descriere Backup Incremental:", options: ["Schimbări de la ultimul backup (complet sau incremental)", "Schimbări de la Full", "Doar log", "Copie completă"], a: 0 },
    { q: "Scop backup jurnal tranzacții (transaction log):", options: ["Resetare DB", "Backup tabele sistem", "Captură tranzacții de la ultimul backup log", "Comprimare Full"], a: 2 },
    { q: "Evaluați: 'Truncate este procesul de aplicare a unui backup'.", options: ["Change needed", "Commit", "Attach", "Restore"], a: 3 },
    { q: "Extensia fișierelor principale de date SQL Server:", options: [".ldf", ".ndf", ".mdf", ".bak"], a: 2 },
    { q: "Extensia fișierului pentru jurnalul de tranzacții:", options: [".mdf", ".ldf", ".ndf", ".log"], a: 1 },
    { q: "Ștergeți din Order și rândurile din OrderItem dispar automat. Exemplu de:", options: ["Moștenire", "Ștergere în cascadă (Cascade)", "Funcțională", "Waterfall"], a: 1 },
    { q: "Ștergere în cascadă dezactivată. Din ce tabel începeți ștergerea mașinii?", options: ["Make", "Model", "Engine", "ModelEngine (Copil/Junction)"], a: 3 },
    { q: "Măsură protecție date pacienți at rest și in transit:", options: ["Auditare", "Criptare puternică", "Roluri", "Anonimizare"], a: 1 },
    { q: "Metodă criptare date at rest (fișiere și backup):", options: ["TDE", "Criptare coloană", "TPM", "Aplicație"], a: 0 },
    { q: "Always Encrypted pe coloana IDNP. Efect pe server:", options: ["Sortare în clar", "Serverul nu vede datele în clar", "Read-only", "Fără chei"], a: 1 },
    { q: "Tehnică potrivită pentru stocarea parolelor:", options: ["TDE", "Hashing cu salt", "Masking", "Criptare backup"], a: 1 },
    { q: "Atacator cu set pre-calculat de hash-uri. Tip atac:", options: ["Brute force", "Dictionary", "Password spraying", "Rainbow table"], a: 3 },
    { q: "Dynamic Data Masking face:", options: ["Criptează disc", "Ascunde valorile la afișare pentru unii", "HMAC", "Restaurează"], a: 1 },
    { q: "Scopul auditării bazei de date:", options: ["Criptare", "Monitorizare activități pentru securitate/conformitate", "Experiență utilizator", "Optimizare"], a: 1 }
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
    { q: "Care dintre următoarele este elementul de limbaj care vă permite să utilizați instrucțiuni precum INSERT, UPDATE și DELETE pentru a manipula datele?", options: ["DML", "DDE", "DDL", "DAT"], a: 0 },
    { q: "Care sunt trei comenzi valide ale limbajului de manipulare a datelor (DML)? (Alegeți trei)", options: ["INSERT", "COMMIT", "DELETE", "OUTPUT", "UPDATE"], a: [0, 2, 4] },
    { q: "În SQL, o instrucțiune INSERT este utilizată pentru a adăuga un:", options: ["Utilizator la o bază de date", "Rând de date într-un tabel", "Tabel la o bază de date", "Coloană la definiția unui tabel"], a: 1 },
    { q: "Pe ce structură a bazei de date operează o instrucțiune INSERT?", options: ["Rol (Role)", "Trigger", "Utilizator (User)", "Tabel (Table)"], a: 3 },
    { q: "Trebuie să adăugați rânduri într-un tabel. Ce cuvânt cheie SQL ar trebui să folosiți?", options: ["JOIN", "INSERT", "CREATE", "UPDATE"], a: 1 },
    { q: "Ce instrucțiune ați folosi pentru a adăuga date într-un tabel?", options: ["ADD", "INSERT", "JOIN", "PRESENT"], a: 1 },
    { q: "Care instrucțiune SQL este o instrucțiune pură de tip DML?", options: ["ALTER TABLE Employee ADD Name Varchar", "SELECT Name FROM Employee", "SELECT * INTO Employee FROM NewHires", "INSERT INTO Employee VALUES ('Jack Smith')"], a: 3 },
    { q: "CREATE TABLE Road (ID INT NOT NULL, Dist INT NOT NULL). Executați: INSERT INTO Road VALUES (1234, 36). Rezultatul este:", options: ["Eroare: NULL nu este permis", "Un rând nou în tabel", "Eroare: ID duplicat", "Eroare de sintaxă"], a: 1 },
    { q: "Tabel Product(ProductID, Name). Inserați ID 12345 și numele 'Plate'. Comanda corectă:", options: ["INSERT INTO Product VALUES (ProductID=12345, Name='Plate')", "INSERT NEW 12345, 'Plate' INTO Product", "INSERT 12345, 'Plate' INTO Product", "INSERT INTO Product (ProductID, Name) VALUES (12345, 'Plate')"], a: 3 },
    { q: "Inserați două produse: (125, 'Book') și (126, 'Movie'). Comanda corectă:", options: ["INSERT INTO Product VALUES (ID=125, 126) (Name='Book', 'Movie')", "INSERT INTO Product (ID, Name) VALUES (125, 'Book'), (126, 'Movie')", "INSERT 125, 126, 'Book', 'Movie' INTO Product", "INSERT NEW ID=125, Name='Book'"], a: 1 },
    { q: "Aveți coloanele StreetAddress, City, State, PostalCode. Care două variante sunt valide? (Alegeți două)", options: ["INSERT INTO AddressInfo ('123', 'City', 'TX', '00') VALUES (...)", "INSERT INTO AddressInfo (StreetAddress, City, State, PostalCode) VALUES ('123 Main St', 'Dallas', 'TX', '75201')", "INSERT INTO AddressInfo VALUES ('123 Main St', 'Dallas', 'TX', '75201')", "UPDATE AddressInfo SET StreetAddress='123'"], a: [1, 2] },
    { q: "Product are PK ProductID(3296). Executați: INSERT INTO Product VALUES (3296, 'Table', 4444). Rezultatul?", options: ["Foreign key violation", "Syntax error", "Row added", "Primary key constraint violation"], a: 3 },
    { q: "Populați EmployeeCopy cu date din Employee. Ce folosiți?", options: ["SELECT * INTO EmployeeCopy SELECT * FROM Employee", "INSERT * FROM Employee INTO EmployeeCopy", "COPY INTO Employee", "INSERT INTO EmployeeCopy SELECT * FROM Employee"], a: 3 },
    { q: "Pe ce structură de bază de date operează o instrucțiune UPDATE?", options: ["Tabel (Table)", "Utilizator (User)", "Trigger", "Rol (Role)"], a: 0 },
    { q: "Ce cuvânt cheie SQL folosiți pentru a schimba prenumele unui student existent?", options: ["UPDATE", "CHANGE", "SELECT", "INSERT"], a: 0 },
    { q: "Ce instrucțiune ați folosi pentru a modifica datele existente dintr-un tabel?", options: ["CHANGE", "MODIFY", "INSERT", "UPDATE"], a: 3 },
    { q: "UPDATE: Schimbați numele produsului în 'glass'. Ce includeți?", options: ["SET ProductName = 'glass'", "LET ProductName = 'glass'", "EXEC ProductName = 'glass'", "ASSIGN ProductName = 'glass'"], a: 0 },
    { q: "UPDATE: Setați InStock la 'Yes' pentru un anumit ProductID. Ce clauză folosiți?", options: ["THAT", "WHERE", "GROUP BY", "HAVING"], a: 1 },
    { q: "Ce se întâmplă dacă omiteți clauza WHERE într-o instrucțiune UPDATE?", options: ["Nicio înregistrare nu se schimbă", "Doar prima se schimbă", "Toate înregistrările vor fi actualizate", "Eroare de sintaxă"], a: 2 },
    { q: "Înlocuiți Benjamin cu Kayden în coloana FirstName:", options: ["UPDATE STUDENTS SET FIRSTNAME='Kayden' WHERE FIRSTNAME='Benjamin'", "UPDATE STUDENTS SET FIRSTNAME='Benjamin' WHERE FIRSTNAME='Kayden'", "CHANGE STUDENTS SET FIRSTNAME='Kayden'", "REPLACE FIRSTNAME='Benjamin' WITH 'Kayden'"], a: 0 },
    { q: "Harry din San Francisco returnează cărțile (Books=0). Update corect:", options: ["UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' AND City='San Francisco'", "UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' OR City='San Francisco'", "UPDATE LoanedBooks SET Books=0 WHERE Name IN ('Harry', 'San Francisco')", "INSERT INTO LoanedBooks SET Books=0 WHERE ID=4"], a: 0 },
    { q: "Schimbați ProductCategory în 43 pentru toate 'spoons' (ProductDescription):", options: ["UPDATE Product SET ProductCategory=43 WHERE ProductDescription='spoons'", "SET Product WHERE ProductCategory=43", "UPDATE Product WHERE ProductDescription='spoons'", "CHANGE Product SET 43"], a: 0 },
    { q: "Care este o diferență între UPDATE și DELETE?", options: ["UPDATE modifică doar un rând", "DELETE nu poate folosi WHERE", "UPDATE nu elimină rânduri din tabel", "DELETE funcționează doar în proceduri"], a: 2 },
    { q: "Ștergeți toate înregistrările cu GivenName 'Tia':", options: ["DELETE FROM Volunteer WHERE GivenName == 'Tia'", "DELETE FROM Volunteer WHERE GivenName = 'Tia'", "DELETE FROM Volunteer WHERE GivenName EQUALS 'Tia'", "DELETE FROM Volunteer WHERE GivenName IS 'Tia'"], a: 1 },
    { q: "Ștergeți clientul cu CustomerID = 12345:", options: ["UPDATE Customer DELETE *", "DELETE CustomerID FROM Customer", "DELETE FROM Customer WHERE CustomerID = 12345", "DROP Customer WHERE ID=12345"], a: 2 },
    { q: "Ștergeți rândurile unde Phone nu este introdus (este gol/lipsă):", options: ["DELETE FROM Employee WHERE Phone IS NULL", "DELETE FROM Employee WHERE Phone IS NOT NULL", "DELETE FROM Employee WHERE Phone = '%'", "DELETE FROM Employee WHERE Phone = NULLABLE"], a: 0 },
    { q: "Selectați afirmația ADEVĂRATĂ despre TRUNCATE:", options: ["Elimină structura tabelului", "Elimină toate datele fără a jurnaliza fiecare rând (fast delete)", "Permite clauza WHERE", "Este o comandă DML care folosește declanșatori (triggers)"], a: 1 },
    { q: "Ce face comanda DROP?", options: ["Șterge rândurile, dar păstrează tabelul", "Șterge și datele și structura tabelului definitiv", "Redenumește tabelul", "Golește memoria cache"], a: 1 },
    { q: "DELETE FROM Order WHERE CustomerID = 209. Rezultatul?", options: ["Prima comandă este ștearsă", "Toate comenzile clientului 209 sunt șterse din tabelul Order", "Clientul este șters și din tabelul Customer", "Eroare de integritate"], a: 1 },
    { q: "Executați DELETE FROM Student; (fără WHERE). Rezultatul?", options: ["Toate rândurile din tabel vor fi șterse", "Doar rândurile cu NULL vor fi șterse", "Eroare: clauza WHERE e obligatorie", "Se șterge și definiția tabelului"], a: 0 },
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
    { q: "De ce nu merge un JOIN?", options: ["Nu există chei străine","Condiția de JOIN e greșită sau tipurile nu se potrivesc","JOIN nu se folosește","ORDER BY strică JOIN"], a: 1 },
    { q: "Violation of PRIMARY KEY constraint:", options: ["NULL în NOT NULL","Duplicat pe cheia primară","Ai șters tabelul","Ai folosit DISTINCT"], a: 1 },
    { q: "Cannot insert NULL:", options: ["Coloana permite NULL","Coloana e NOT NULL și nu ai dat valoare","Ai folosit WHERE","Ai folosit GROUP BY"], a: 1 },
    { q: "Least privilege:", options: ["Drepturi maxime","Doar drepturile strict necesare","Parole în clar","Fără backup"], a: 1 },
    { q: "Retragere drepturi:", options: ["REVOKE","GRANT","DENY ALL","DROP GRANT"], a: 0 },
    { q: "Backup + restore:", options: ["Pentru indecși","Recuperare date după pierdere/erori","Accelerare JOIN","Eliminare normalizare"], a: 1 },
    { q: "Encryption (criptare):", options: ["Protejează date sensibile","Sortează mai rapid","Elimină NULL","Creează view"], a: 0 },
    { q: "Auditing:", options: ["Ștergere automată date vechi","Înregistrează acțiuni (cine/ce/când)","Un tip de JOIN","Un tip de cheie"], a: 1 },
    // --- 30 Întrebări NOI din Teoria 5.1, 5.2, 5.3 ---
    { q: "Ce se întâmplă dacă executați: CREATE TABLE Elevi (Nume); ?", options: ["Creează tabelul cu succes", "Eroare: lipsește tipul de date pentru coloană", "Creează coloana ca text implicit", "Așteaptă introducerea datelor"], a: 1 },
    { q: "De ce eșuează instrucțiunea: CREATE TABLE Table (ID INT); ?", options: ["Lipsește cheia primară", "Nu are paranteze corecte", "'Table' este un cuvânt rezervat în SQL", "ID trebuie să fie VARCHAR"], a: 2 },
    { q: "Ce eroare provoacă omiterea punctului și virgulă (;) între mai multe comenzi CREATE/ALTER consecutive?", options: ["Niciuna, SQL le separă automat", "Motorul SQL citește totul ca o singură instrucțiune invalidă", "Se execută doar prima comandă", "Se șterge baza de date"], a: 1 },
    { q: "Care este eroarea de sintaxă în: CREATE TABLE Test (ID INT, Nume TEXT, ); ?", options: ["Virgula în plus după ultima coloană", "Lipsa cheii primare", "Tipul TEXT nu există", "Numele tabelului e prea scurt"], a: 0 },
    { q: "Ce tip de eroare apare la omiterea parantezei de închidere ')' la finalul unui CREATE TABLE?", options: ["Eroare de logică", "Eroare de sintaxă (Syntax Error)", "Eroare de permisiune", "Eroare de rețea"], a: 1 },
    { q: "Primiți eroarea 'Object already exists'. Care este cauza probabilă?", options: ["Sintaxa este greșită", "Încercați să creați un tabel care există deja", "Nu aveți drepturi de administrator", "Serverul este oprit"], a: 1 },
    { q: "De ce ar eșua ștergerea unui tabel (DROP TABLE) care este corect scrisă sintactic?", options: ["Tabelul este gol", "Există constrângeri de dependență (Foreign Keys) active", "Numele tabelului începe cu literă mare", "Tabelul are prea multe coloane"], a: 1 },
    { q: "Ce se întâmplă dacă încercați să modificați (ALTER) o coloană care a fost ștearsă anterior?", options: ["SQL recreează coloana", "Eroare: coloană inexistentă", "Modifică o altă coloană la întâmplare", "Afișează un avertisment, dar continuă"], a: 1 },
    { q: "Codul este perfect, dar primiți o eroare de acces/permisiune. Ce lipsește?", options: ["Spațiu pe disc", "Conexiunea la internet", "Drepturile de administrator (DBA sau Schema Owner)", "Tasta Caps Lock activată"], a: 2 },
    { q: "Care este ordinea corectă a clauzelor într-o interogare SELECT?", options: ["SELECT, WHERE, FROM", "FROM, SELECT, WHERE", "SELECT, FROM, WHERE", "WHERE, SELECT, FROM"], a: 2 },
    { q: "În interogarea SELECT * FROM Elevi WHERE Nume = Marius, care este eroarea?", options: ["Lipsește FROM", "Valoarea text 'Marius' nu este între apostrofuri", "Nu poți folosi semnul egal", "Numele tabelului e greșit"], a: 1 },
    { q: "De ce este greșită sintaxa: WHERE clasa = 7 OR 8 OR 9 ?", options: ["Trebuie folosit AND", "Nu poți folosi numere", "SQL necesită repetarea numelui coloanei sau IN (7,8,9)", "Este corectă, nu e greșită"], a: 2 },
    { q: "Ce lipsește în interogarea: SELECT Nume Prenume FROM Elevi; ?", options: ["Virgula între coloanele Nume și Prenume", "Cuvântul cheie AS", "Ghilimelele", "Nimic, e corect"], a: 0 },
    { q: "Interogarea WHERE Nume = 'A%' nu returnează nimic, deși există nume cu A. De ce?", options: ["Trebuie folosit operatorul LIKE pentru metacaractere (%)", "Trebuie folosit ==", "Trebuie litere mici", "Trebuie LIKE fără apostrofuri"], a: 0 },
    { q: "Ce înseamnă eroarea 'Ambiguous column name' într-un JOIN?", options: ["Coloana nu există", "Ambele tabele au o coloană cu același nume și nu s-a specificat sursa", "Coloana are date NULL", "Tabelul este gol"], a: 1 },
    { q: "Ce eroare apare dacă scrieți WHERE Nota = 'zece' (pe o coloană numerică)?", options: ["Eroare de sintaxă", "Incompatibilitate tipuri de date (Conversion failed)", "Coloană ambiguă", "Eroare de rețea"], a: 1 },
    { q: "De ce eșuează interogarea: SELECT Dept, SUM(Salariu) ... WHERE SUM(Salariu) > 1000 ?", options: ["Suma e prea mare", "Nu poți folosi funcții de agregare în WHERE (trebuie HAVING)", "Lipsește GROUP BY", "Nu poți face sume pe bani"], a: 1 },
    { q: "Ce se întâmplă dacă folosiți '=' cu o subinterogare care returnează mai multe valori?", options: ["Returnează prima valoare", "Funcționează normal", "Eroare la execuție (subquery returned more than 1 value)", "Șterge datele"], a: 2 },
    { q: "Dacă o subinterogare returnează o listă de valori, ce operator trebuie folosit în loc de '=' ?", options: ["LIKE", "IN sau ANY", "BETWEEN", "IS NULL"], a: 1 },
    { q: "Ce cuvânt cheie este OBLIGATORIU într-o instrucțiune UPDATE?", options: ["VALUES", "INTO", "SET", "GROUP BY"], a: 2 },
    { q: "Care este eroarea în: UPDATE Bilete WHERE ID=5 SET Clasa='B' ?", options: ["ID-ul nu există", "Ordinea greșită: SET trebuie să fie înaintea lui WHERE", "Nu poți modifica clasa", "Lipsește DELETE"], a: 1 },
    { q: "Pentru a modifica date, ce comandă este greșită (nu există în standardul SQL pentru rânduri)?", options: ["UPDATE", "CHANGE sau MODIFY", "INSERT", "DELETE"], a: 1 },
    { q: "La INSERT, dacă enumerați 3 coloane dar oferiți doar 2 valori, ce se întâmplă?", options: ["Se inserează NULL automat", "Eroare de sintaxă (nepotrivire număr coloane)", "Se inserează 0", "Se ignoră ultima coloană"], a: 1 },
    { q: "Dacă scrieți SET Nume = Andrei (fără ghilimele) într-un UPDATE, cum interpretează SQL 'Andrei'?", options: ["Ca un text", "Ca numele unei alte coloane", "Ca o variabilă", "Ca o eroare de rețea"], a: 1 },
    { q: "Care este cea mai periculoasă greșeală într-un DELETE sau UPDATE?", options: ["Scrierea cu litere mici", "Omiterea clauzei WHERE (afectează toate rândurile)", "Folosirea alias-urilor", "Omiterea punctului și virgulă"], a: 1 },
    { q: "Ce eroare apare dacă încercați să inserați un ID care există deja (Primary Key)?", options: ["Foreign Key Violation", "Primary Key Violation (Duplicate Key)", "Syntax Error", "Data Truncation"], a: 1 },
    { q: "Ce eroare apare dacă încercați să ștergeți un 'părinte' care are 'copii' legați prin Foreign Key?", options: ["Constraint Violation (Foreign Key)", "Syntax Error", "Duplicate Key", "Table not found"], a: 0 },
    { q: "Ce eroare primiți dacă încercați să inserați NULL într-o coloană definită NOT NULL?", options: ["Warning", "Constrângere NOT NULL încălcată", "Nimic, inserează 0", "Syntax Error"], a: 1 },
    { q: "Încercarea de a salva un text de 100 caractere într-un VARCHAR(20) duce la:", options: ["Mărirea automată a coloanei", "Eroare: String or binary data would be truncated", "Salvarea primelor 20 de caractere fără eroare", "Ștergerea tabelului"], a: 1 },
    { q: "Cum este recomandat să testați condiția unui UPDATE/DELETE înainte de execuție?", options: ["Rulând direct comanda", "Folosind un SELECT cu aceeași clauză WHERE", "Ghicind ID-urile", "Nu este nevoie de testare"], a: 1 }
  ]
};


const EN_DATA = {
  design: [
    { q: "Data in a relational database is stored in:", options: ["Tables","Queries","Data types","Stored procedures"], a: 0 },
    { q: "What does a table represent in a relational database?", options: ["A set of rows and columns that store data","A diagram of database relationships","A programming language","An SQL statement"], a: 0 },
    { q: "What is the name of the element that contains information about a single record?", options: ["Column","Row","Field","Data type"], a: 1 },
    { q: "A row in a table represents:", options: ["A column","An attribute","A unique record","An index"], a: 2 },
    { q: "In a table, a column represents:", options: ["A complete record","A vertical collection of values","A relationship between tables","A primary key"], a: 1 },
    { q: "To save each student's information, data will be stored in a:", options: ["Row","Index","Trigger","View"], a: 0 },
    { q: "Which statement is true about columns?", options: ["Each column has a unique name","Columns can have the same name","Columns represent relationships","Columns are optional"], a: 0 },
    { q: "Select the correct statements about table structure:", options: ["Each row must be unique","Each column must have a different name","Values in a column must be unique","A table can have no columns"], a: 1 },
    { q: "200 students with First Name, Last Name, and ID will be saved as:", options: ["3 rows and 100 columns","200 rows and 3 columns","300 cells and 1 column","100 tables"], a: 1 },
    { q: "Which two elements are required to define a column?", options: ["Name","Index","Data type","Foreign Key"], a: [0,2] },
    { q: "What determines the storage space of a value in a column?", options: ["Key","Data type","Index","Format"], a: 1 },
    { q: "Which data type is suitable for storing integer quantities?", options: ["FLOAT","DECIMAL","INT","VARCHAR"], a: 2 },
    { q: "For integer values between 1 and 100, the most efficient data type is:", options: ["INT","SMALLINT","TINYINT","BIT"], a: 2 },
    { q: "Which data type do you use for values between 0 and 1024?", options: ["INT","SMALLINT","TINYINT","FLOAT"], a: 1 },
    { q: "For prices and financial values, it is recommended to use:", options: ["INT","VARCHAR","DECIMAL","BIT"], a: 2 },
    { q: "Which data type stores True/False values?", options: ["CHAR","BIT","FLOAT","INT"], a: 1 },
    { q: "For text with an exact length of 50 characters:", options: ["CHAR(50)","VARCHAR(30)","TEXT","NCHAR"], a: 0 },
    { q: "For storing text in multiple languages (Unicode), use:", options: ["CHAR","VARCHAR","NCHAR","BIT"], a: 2 },
    { q: "A fixed code consisting of one letter and four digits should be stored as:", options: ["INT","CHAR","SMALLINT","FLOAT"], a: 1 },
    { q: "Which statement is correct?", options: ["CHAR is fixed length","TEXT is fixed length","VARCHAR is fixed length","INT stores text"], a: 0 },
    { q: "Which statement is true?", options: ["VARCHAR stores only numbers","INT stores only integers","DECIMAL does not accept decimals","BIT stores text"], a: 1 },
    { q: "Match data types: • Student Name → ____ • Grade → ____ • Average → ____", options: ["VARCHAR, INT, DECIMAL", "TEXT, DECIMAL, INT"], a: 0 },
    { q: "For financial operations in an application, it is recommended to use:", options: ["MONEY or DECIMAL","VARCHAR","BIT","BINARY"], a: 0 },
    { q: "Which value can be stored in DECIMAL(3,1)?", options: ["16.2","116.2","16.21","1116.2"], a: 0 },
    { q: "The main difference between DATETIME and DATETIME2 is:", options: ["Higher precision and wider range","DATETIME2 does not store time","DATETIME is more precise","They are identical"], a: 0 },
    { q: "Which data type supports the range 0001–9999?", options: ["DATETIME","DATETIME2","SMALLDATETIME","DATE"], a: 1 },
    { q: "Which value is valid for DATETIME2(3)?", options: ["2025-01-04 12:30:45.123","2025-01-04 24:30:00","1752-01-01","99999-12-31"], a: 0 },
    { q: "Which value is accepted by SMALLDATETIME?", options: ["2025-01-04 12:30","1753-01-01","1800-01-01","2100-01-01"], a: 0 },
    { q: "Which constraint ensures the uniqueness of each row?", options: ["FOREIGN KEY","PRIMARY KEY","INDEX","CHECK"], a: 1 },
    { q: "Which key uniquely identifies a row in a table?", options: ["Foreign","Primary","Secondary","Candidate"], a: 1 },
    { q: "Which constraint ensures the existence of a valid relationship between tables?", options: ["Unique","Foreign Key","Index","Default"], a: 1 },
    { q: "Which two columns form a composite primary key in a linking table?", options: ["ID from first table","ID from second table","Name","Date"], a: [0,1] },
    { q: "Which statement about Foreign Key is true?", options: ["Can be NULL","Automatically creates an index","Is unique","Does not link tables"], a: 0 },
    { q: "To ensure an employee belongs to an existing department, you apply:", options: ["Primary key","Index","Foreign key","Check"], a: 2 },
    { q: "Which element establishes data validation rules?", options: ["Index","Constraint","View","Trigger"], a: 1 },
    { q: "What type of relationship exists between a teacher and classes (one teacher → multiple classes)?", options: ["One-to-One","One-to-Many","Many-to-Many","Circular"], a: 1 },
    { q: "Student ↔ Course (many students, many courses):", options: ["One-to-One","One-to-Many","Many-to-Many","Self"], a: 2 },
    { q: "SQL stands for:", options: ["Structured Query Language","Simple Query Language","Standard Query Logic","Structured Data Language"], a: 0 },
    { q: "Which object allows enforcing referential integrity?", options: ["Index","Trigger","Foreign Key","View"], a: 2 },
    { q: "Which element does NOT define a column?", options: ["Name","Data type","Length","Index"], a: 3 },
    { q: "Which data type is suitable for storing the number of products in stock?", options: ["VARCHAR","FLOAT","INT","TEXT"], a: 2 },
    { q: "For values between 0 and 255, which data type is recommended?", options: ["BIT","TINYINT","SMALLINT","DECIMAL"], a: 1 },
    { q: "Which data type would be most efficient for storing a score between 0 and 32,000?", options: ["FLOAT","SMALLINT","VARCHAR","INT"], a: 1 },
    { q: "For storing a sum of money with two decimal places, use:", options: ["INT","DECIMAL","BIT","CHAR"], a: 1 },
    { q: "Which data type is used for 'Yes/No' fields?", options: ["BIT","TEXT","VARCHAR","DECIMAL"], a: 0 },
    { q: "If a field must have exactly 10 characters, choose:", options: ["VARCHAR(10)","CHAR(10)","TEXT","NCHAR(50)"], a: 1 },
    { q: "For Unicode text (multiple languages), it is recommended to use:", options: ["VARCHAR","NCHAR","CHAR","INT"], a: 1 },
    { q: "A fixed code formed of 6 characters is best stored as:", options: ["TEXT","CHAR(6)","VARCHAR(6)","BIT"], a: 1 },
    { q: "Which statement is correct about VARCHAR?", options: ["Has fixed length","Is for numeric values","Has variable length","Accepts only uppercase letters"], a: 2 }
  ],

  ddl: [
    { q: "Write the correct SQL statement to create a new database called testDB.", options: ["CREATE DATABASE testdb;", "CREATE testDB DATABASE;", "CREATE DATABASE 'testDB';", "CREATE DATABASE testDB;"], a: 3 },
    { q: "What SQL command is used to change the context of the database?", options: ["SELECT", "ALTER", "USE", "UPDATE"], a: 2 },
    { q: "Write the correct SQL statement to delete a database named testDB.", options: ["DELETE DATABASE testDB", "DROP DATABASE testDB", "REMOVE DATABASE testDB", "CLEAR DATABASE testDB"], a: 1 },
    { q: "This question requires that you evaluate the underlined text to determine if it is correct. 'Use the ALTER statement to add a new table to a database'.", options: ["No change is needed", "UPDATE", "INSERT", "CREATE"], a: 3 },
    { q: "You need to create a table named Student with columns ID (integer), Name (variable length string, max 100), and Age (integer). Which statement is correct?", options: ["CREATE TABLE Student (ID INT, Name VARCHAR(100), Age INT)", "CREATE (TABLE Student ID INT...)", "CREATE Student (ID INT, Name...)", "CREATE TABLE ID INT, Name..."], a: 0 },
    { q: "Which of the following SQL statements creates a composite key?", options: ["PRIMARY KEY (Col1) PRIMARY KEY (Col2)", "PRIMARY KEY (Col1, Col2) at the end of definition", "A column named COMPOSITE KEY", "UNIQUE (Col1, Col2)"], a: 1 },
    { q: "Which two keywords are valid to be used in a CREATE TABLE statement? (Choose two)", options: ["Order By", "Primary Key", "Insert Into", "Constraint"], a: [1, 3] },
    { q: "Can a column defined as PRIMARY KEY contain NULL values?", options: ["Yes", "No", "Only one", "Depends on DBMS"], a: 1 },
    { q: "Can a column with a UNIQUE constraint contain NULL values?", options: ["Yes, only one", "Yes, any number", "No", "Only if it is a primary key"], a: 0 },
    { q: "Which keyword can be used in a CREATE TABLE statement for uniqueness?", options: ["ORDER BY", "DISTINCT", "GROUP BY", "UNIQUE"], a: 3 },
    { q: "Why would you use the AUTO INCREMENT (IDENTITY) function in a table?", options: ["Manual PK setting", "Automatically create unique value for PK", "Allows duplicates", "Limit records"], a: 1 },
    { q: "Which field usually uses the AUTO INCREMENT function?", options: ["Address", "City", "Primary Key", "Foreign Key"], a: 2 },
    { q: "What is the purpose of a FOREIGN KEY?", options: ["Uniquely identifies the row", "Points to a primary key in another table", "Allows duplicates", "Stores NULL"], a: 1 },
    { q: "Which command should you use to add a column to an existing table?", options: ["MODIFY", "ALTER", "UPDATE", "INSERT"], a: 1 },
    { q: "What is the ALTER TABLE statement used for?", options: ["Add/drop constraints", "Modify columns", "Extract data", "Both A and B"], a: 3 },
    { q: "You need to rename a column (DDL). Which statement do you use?", options: ["ALTER", "INSERT", "CREATE", "UPDATE"], a: 0 },
    { q: "Which statement should you use to remove a foreign key?", options: ["ALTER TABLE", "DELETE TABLE", "DELETE FOREIGN KEY", "ALTER FOREIGN KEY"], a: 0 },
    { q: "You add BirthDate NOT NULL to a table with data and it fails. Fix:", options: ["Use VARCHAR", "Add DEFAULT '1900-01-01'", "Use INT", "Put NULL instead of NOT NULL"], a: 1 },
    { q: "You add Prefix NOT NULL to a populated table and it fails. Cause?", options: ["Table is empty", "Missing DROP CONSTRAINT", "Invalid type", "Must specify DEFAULT"], a: 3 },
    { q: "Add column District to table Customer. Correct command:", options: ["MODIFY TABLE Customer ADD District", "ALTER TABLE Customer MODIFY District", "MODIFY Customer District", "ALTER TABLE Customer ADD District INTEGER"], a: 3 },
    { q: "How do you remove a column from a table?", options: ["REMOVE COLUMN", "DROP column_name", "DROP COLUMN column_name", "DELETE column_name"], a: 2 },
    { q: "Remove SSN column from Customers (DDL):", options: ["ALTER TABLE Customers DELETE SSN", "DELETE COLUMN SSN", "ALTER TABLE Customers DROP SSN", "ALTER TABLE Customers DROP COLUMN SSN"], a: 3 },
    { q: "Evaluate: 'CREATE TABLE removes the table definition and all data'.", options: ["No change is needed", "DROP TABLE", "TRUNCATE TABLE", "ALTER TABLE"], a: 1 },
    { q: "Completely delete the Equipment table:", options: ["DELETE TABLE", "DROP TABLE Equipment", "REMOVE TABLE", "TRUNCATE TABLE"], a: 1 },
    { q: "Evaluate: 'DELETE TABLE removes all rows without individual logging'.", options: ["No change is needed", "DROP TABLE", "TRUNCATE TABLE", "ALTER TABLE"], a: 2 },
    { q: "What makes searching by ID more efficient in a table of one million rows?", options: ["Cursor", "Subquery", "Trigger", "Index"], a: 3 },
    { q: "What do you add to the Salary column to improve query performance?", options: ["Non-null constraint", "Default constraint", "Index", "Foreign key"], a: 2 },
    { q: "A reason to add an index is:", options: ["Decrease space", "Increase security", "Improve SELECT", "Improve INSERT"], a: 2 },
    { q: "Create an index on a table. The result?", options: ["More rows", "More columns", "Separate structure with data", "Structure without data"], a: 2 },
    { q: "Bitmap, B-tree, and Hash are types of:", options: ["View", "Function", "Index", "Stored procedure"], a: 2 },
    { q: "This type of index physically sorts data on the table column:", options: ["Clustered", "Non-clustered", "Bitmap", "Spatial"], a: 0 },
    { q: "Index that stores data in a separate structure from the table:", options: ["Clustered", "Non-clustered", "Sequential", "Primary"], a: 1 },
    { q: "Which type of index changes the order in which data is physically stored?", options: ["Non-sequential", "Sequential", "Non-clustered", "Clustered"], a: 3 },
    { q: "Searching for ProductName where Category = 'Science Books'. Most efficient?", options: ["Clustered index on ProductName", "Clustered index on Price", "Non-clustered index on Category", "Non-clustered index on Price"], a: 2 },
    { q: "Adding a ______ index physically sorts the rows.", options: ["Clustered", "Non-clustered", "Unique", "Filtered"], a: 0 },
    { q: "The ______ index retrieves data quickly without physical sorting.", options: ["Non-clustered", "Clustered", "Spatial", "XML"], a: 0 },
    { q: "Which statement creates an index directly along with the table?", options: ["PRIMARY KEY", "DISTINCT", "NULL", "INDEX"], a: 0 },
    { q: "What is a view?", options: ["Virtual table created by a query", "Recovery command", "Physical copy", "Execution result"], a: 0 },
    { q: "A view can be used to:", options: ["No change needed", "Save extra copy", "Limit access to rows/columns", "Save historical data"], a: 2 },
    { q: "What happens when you query a view?", options: ["Retrieves static data", "Engine refreshes data from base tables", "Becomes real table", "Error if not indexed"], a: 1 },
    { q: "Delete data from Product table. The result set of the view becomes:", options: ["Empty", "Deleted", "Unchanged", "Archived"], a: 0 },
    { q: "Syntax for creating views:", options: ["CREATE VIEW AS SELECT", "CREATE VIEW AS UPDATE", "DROP VIEW AS SELECT", "ALTER VIEW"], a: 0 },
    { q: "Which keyword is mandatory in CREATE VIEW?", options: ["WHERE", "ORDER BY", "UPDATE", "SELECT"], a: 3 },
    { q: "A view has the following property:", options: ["Insert data into tables", "Simplifies work with data", "Is not reusable", "Merges static tables"], a: 1 },
    { q: "Correct syntax for deleting a view:", options: ["DELETE VIEW", "REMOVE VIEW", "DROP VIEW", "ALTER VIEW"], a: 2 },
    { q: "Create vw_Mygames (Name from Games) with sorting. Correct:", options: ["CREATE VIEW... ORDER BY Name", "CREATE VIEW... SELECT *", "CREATE VIEW... SELECT TOP 100 PERCENT... ORDER BY Name", "CREATE VIEW... Name BETWEEN"], a: 2 },
    { q: "Remove the EmployeeView view:", options: ["DELETE VIEW", "DELETE EmployeeView", "DROP EmployeeView", "DROP VIEW EmployeeView"], a: 3 },
    { q: "Group of SQL statements with a name, executable in DB:", options: ["Subroutine", "Formula", "Stored procedure", "Method"], a: 2 },
    { q: "A reason to create a stored procedure:", options: ["Improve performance", "Minimize space", "Bypass case sensitivity", "User control"], a: 0 },
    { q: "Object for storing textbook data for later processing:", options: ["View", "Table", "Function", "Stored procedure"], a: 1 },
    { q: "Store the code of a long and complex query for manual calling:", options: ["Stored procedure", "Function", "Trigger", "View"], a: 0 },
    { q: "Permission required to run a procedure:", options: ["EXECUTE", "ALLOW", "CALL", "RUN"], a: 0 },
    { q: "Group of commands that returns a value:", options: ["Procedure", "Function", "Trigger", "View"], a: 1 },
    { q: "Difference between function and procedure: function...", options: ["Called by trigger", "Must return a value", "Has no transaction", "No parameters"], a: 1 },
    { q: "Can you delete data using a stored procedure?", options: ["YES", "NO"], a: 0 },
    { q: "Must a function have a return value?", options: ["YES", "NO"], a: 0 },
    { q: "Must a stored procedure have a return value?", options: ["YES", "NO"], a: 1 },
    { q: "Call the scalar function CalculateAge:", options: ["SELECT dbo.CalculateAge(BirthDate)", "EXEC CalculateAge", "SELECT * FROM CalculateAge", "CALL CalculateAge"], a: 0 },
    { q: "Call table-valued function GetEmployeesByDepartment(3):", options: ["SELECT * FROM dbo.GetEmployeesByDepartment(3)", "SELECT * FROM Employees WHERE ID = dbo...", "EXEC Get...", "SELECT dbo..."], a: 0 },
    { q: "Role with full access over an individual database:", options: ["db_owner", "db_accessadmin", "db_securityadmin", "db_ddladmin"], a: 0 },
    { q: "Role with 'read-only' access:", options: ["db_datawriter", "db_owner", "db_securityadmin", "db_datareader"], a: 3 },
    { q: "Command for new authentication account (login):", options: ["CREATE LOGIN", "CREATE ROLE", "CREATE USER", "ADD USER"], a: 0 },
    { q: "Allow a new employee to authenticate:", options: ["ALLOW USER", "CREATE USER", "ADD USER", "INSERT USER"], a: 1 },
    { q: "The ______ command allows access to objects:", options: ["GRANT", "DENY", "PERMIT", "ALTER"], a: 0 },
    { q: "Evaluate: 'ALLOW SELECT' to provide read permission.", options: ["No change needed", "GRANT SELECT", "LET HEAD", "PERMIT READ"], a: 1 },
    { q: "WITH GRANT OPTION allows user to:", options: ["Request log", "Delegate permissions to others", "Create new users", "View permissions"], a: 1 },
    { q: "Purpose of DENY permission:", options: ["Delete user", "Disable temporarily", "Explicitly block a permission", "Allow only SELECT"], a: 2 },
    { q: "Disable User1 access to see Customer table:", options: ["REMOVE User1", "REMOVE SELECT", "REVOKE SELECT ON Customer FROM User1", "REVOKE User1"], a: 2 },
    { q: "Main purpose of regular backups:", options: ["Performance", "Prevent data loss", "Fast editing", "Reset permissions"], a: 1 },
    { q: "Restore is done when:", options: ["Corrupted data", "Roll back transaction", "App error", "Delete data"], a: 0 },
    { q: "Backup every 2 hours for 10 TB data. Which type do you use?", options: ["Archive", "Incremental/Differential", "Partial", "Full"], a: 1 },
    { q: "Backup at 15:00, Table created at 16:00, Crash at 17:00. Apply backup from 15:00. Result:", options: ["Table does not exist", "Table unaffected", "Table without data", "Error"], a: 0 },
    { q: "Description of Full Backup:", options: ["Only changes", "Complete DB copy", "Only log", "Recent changes"], a: 1 },
    { q: "Description of Differential Backup:", options: ["Complete copy", "Only changes since last incremental", "Only changes since last Full", "Only log"], a: 2 },
    { q: "Description of Incremental Backup:", options: ["Changes since last backup (full or incremental)", "Changes since Full", "Only log", "Complete copy"], a: 0 },
    { q: "Purpose of transaction log backup:", options: ["Reset DB", "Backup system tables", "Capture transactions since last log backup", "Compress Full"], a: 2 },
    { q: "Evaluate: 'Truncate is the process of applying a backup'.", options: ["Change needed", "Commit", "Attach", "Restore"], a: 3 },
    { q: "Extension of main SQL Server data files:", options: [".ldf", ".ndf", ".mdf", ".bak"], a: 2 },
    { q: "Extension of transaction log file:", options: [".mdf", ".ldf", ".ndf", ".log"], a: 1 },
    { q: "Delete from Order and rows in OrderItem disappear automatically. Example of:", options: ["Inheritance", "Cascade Delete", "Functional", "Waterfall"], a: 1 },
    { q: "Cascade delete disabled. Which table do you start deleting the car from?", options: ["Make", "Model", "Engine", "ModelEngine (Child/Junction)"], a: 3 },
    { q: "Measure to protect patient data at rest and in transit:", options: ["Auditing", "Strong encryption", "Roles", "Anonymization"], a: 1 },
    { q: "Method to encrypt data at rest (files and backup):", options: ["TDE", "Column encryption", "TPM", "App"], a: 0 },
    { q: "Always Encrypted on IDNP column. Effect on server:", options: ["Plaintext sorting", "Server does not see plaintext data", "Read-only", "No keys"], a: 1 },
    { q: "Technique suitable for storing passwords:", options: ["TDE", "Hashing with salt", "Masking", "Backup encryption"], a: 1 },
    { q: "Attacker with pre-computed set of hashes. Attack type:", options: ["Brute force", "Dictionary", "Password spraying", "Rainbow table"], a: 3 },
    { q: "Dynamic Data Masking does:", options: ["Encrypts disk", "Hides values at display for some", "HMAC", "Restores"], a: 1 },
    { q: "Purpose of database auditing:", options: ["Encryption", "Monitor activities for security/compliance", "User experience", "Optimization"], a: 1 }
  ],

  retrieval: [
    { q: "Which JOIN returns only rows that have a match in both tables?", options: ["LEFT JOIN","RIGHT JOIN","INNER JOIN","CROSS JOIN"], a: 2 },
    { q: "Which JOIN keeps all rows from left and matches from right?", options: ["LEFT JOIN","INNER JOIN","FULL JOIN","CROSS JOIN"], a: 0 },
    { q: "What is CROSS JOIN?", options: ["Join on primary key","Cartesian product (all combinations)","Join only for NULL","Join with mandatory WHERE"], a: 1 },
    { q: "What is DISTINCT used for?", options: ["Deletes duplicates from table","Displays unique values in result","Creates index","Updates rows"], a: 1 },
    { q: "Which clause filters rows?", options: ["GROUP BY","WHERE","ORDER BY","AS"], a: 1 },
    { q: "What does ORDER BY do?", options: ["Filters rows","Sorts results","Groups","Deletes rows"], a: 1 },
    { q: "LIKE is used for:", options: ["Numeric comparison","Pattern searching in text","Aggregation","Create table"], a: 1 },
    { q: "What does UNION do (generally)?", options: ["Combines and keeps duplicates","Combines and removes duplicates","Deletes data","Creates view"], a: 1 },
    { q: "Calculated column in a SELECT:", options: ["Column from another table","Results from an expression (e.g. price*qty)","Accepts only NULL","Is permanently hidden"], a: 1 },
    { q: "GROUP BY:", options: ["Sorts rows","Groups for aggregations (SUM/COUNT/AVG)","Deletes duplicates","Updates multiple tables"], a: 1 },
    { q: "Which SQL statement is used to display data from a table?", options: ["SHOW", "DISPLAY", "SELECT", "READ"], a: 2 },
    { q: "Which clause is used to filter rows returned by SELECT?", options: ["ORDER BY", "WHERE", "GROUP", "HAVING"], a: 1 },
    { q: "Which operator is used to select values from a list?", options: ["BETWEEN", "LIKE", "IN", "EXISTS"], a: 2 },
    { q: "What does the NOT IN operator do?", options: ["Selects values in a range", "Excludes specified values from result", "Selects NULL values", "Sorts data"], a: 1 },
    { q: "Which statement returns students from grades 7, 8, and 9?", options: ["WHERE class = 7 OR 8 OR 9", "WHERE class BETWEEN 7 AND 9", "WHERE class IN (7,8,9)", "WHERE class LIKE 7%"], a: 2 },
    { q: "Which operator checks if a value is within a range?", options: ["RANGE", "BETWEEN", "LIMIT", "ANY"], a: 1 },
    { q: "SELECT * FROM Products WHERE Price BETWEEN 100 AND 200; returns:", options: ["Products under 100", "Products between 100 and 200 inclusive", "Products over 200", "Only product with price 100"], a: 1 },
    { q: "Which operator is used for pattern matching?", options: ["MATCH", "FIND", "LIKE", "SEARCH"], a: 2 },
    { q: "Which symbol in LIKE represents zero or more characters?", options: ["_", "%", "*", "#"], a: 1 },
    { q: "SELECT * FROM Users WHERE Username LIKE 'A%'; returns:", options: ["Names containing A", "Names ending with A", "Names starting with A", "Only name 'A'"], a: 2 },
    { q: "Which symbol represents exactly one character in LIKE operator?", options: ["%", "*", "_", "?"], a: 2 },
    { q: "How do you correctly check for NULL values?", options: ["= NULL", "<> NULL", "IS NULL", "NULL()"], a: 2 },
    { q: "What is true about NULL?", options: ["NULL = 0", "NULL = ''", "NULL represents missing value (unknown)", "NULL is equivalent to false"], a: 2 },
    { q: "Which clause sorts the results of a query?", options: ["SORT", "GROUP", "ORDER BY", "FILTER"], a: 2 },
    { q: "How do you sort students by grade in descending order?", options: ["ORDER BY grade", "ORDER BY grade DESC", "SORT grade DESC", "GROUP BY grade"], a: 1 },
    { q: "Which type of JOIN returns only rows with match in both tables?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], a: 2 },
    { q: "Which JOIN displays all rows from left table, even those without match?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"], a: 1 },
    { q: "What represents the Cartesian product in databases?", options: ["JOIN on keys", "UNION between tables", "Combining every row from one table with every row from another", "A complex grouping"], a: 2 },
    { q: "Two tables have 4 rows each. How many rows will the Cartesian product have?", options: ["4", "8", "12", "16"], a: 3 },
    { q: "Which clause combines results of two queries removing duplicates?", options: ["JOIN", "UNION", "INTERSECT", "EXCEPT"], a: 1 },
    { q: "Which operator returns only common rows (appearing in both queries)?", options: ["UNION", "JOIN", "INTERSECT", "EXCEPT"], a: 2 },
    { q: "Which operator removes from the first query rows appearing in the second?", options: ["UNION", "INTERSECT", "EXCEPT", "JOIN"], a: 2 },
    { q: "Which aggregate function returns total number of rows?", options: ["SUM()", "AVG()", "COUNT()", "TOTAL()"], a: 2 },
    { q: "Which function calculates arithmetic mean of values?", options: ["MEAN()", "AVG()", "MID()", "COUNT()"], a: 1 },
    { q: "Which function returns the highest value in a column?", options: ["TOP()", "MAX()", "HIGH()", "BIG()"], a: 1 },
    { q: "Which clause is used to group data based on one or more columns?", options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"], a: 2 },
    { q: "What is mandatory in SELECT when using GROUP BY clause?", options: ["Only functions", "Columns used for grouping", "WHERE clause", "ORDER BY clause"], a: 1 },
    { q: "What differentiates HAVING clause from WHERE clause?", options: ["WHERE filters after aggregation", "HAVING filters before aggregation", "HAVING filters after aggregation is processed", "They are identical"], a: 2 },
    { q: "SELECT Dept, COUNT(*) FROM Emp GROUP BY Dept HAVING COUNT(*) > 5; does:", options: ["Lists all employees", "Lists departments with over 5 employees", "Lists first 5 employees", "Syntax error"], a: 1 },
    { q: "What does the ANY operator do?", options: ["Compares with all values", "Compares with at least one value from subquery", "Compares only with first value", "Identical to IN operator"], a: 1 },
    { q: "What does the ALL operator do?", options: ["Compares with any value", "Compares with ALL values returned by subquery", "Synonym for ANY", "Removes duplicates"], a: 1 },
    { q: "Salary > ALL (SELECT Salary FROM Emps WHERE DeptID = 3) returns:", options: ["Employees in dept 3", "Employees with salary higher than the highest salary in dept 3", "Employees with min salary", "All employees"], a: 1 },
    { q: "Price > ANY (SELECT Price FROM Products WHERE Category = 'Food') returns:", options: ["Cheaper products", "Products more expensive than all foods", "Products more expensive than the cheapest food", "Only Food products"], a: 2 },
    { q: "Which logical operator is used to combine multiple conditions that must be met simultaneously?", options: ["JOIN", "AND", "BETWEEN", "IN"], a: 1 },
    { q: "Which operator returns TRUE if at least one condition is true?", options: ["AND", "NOT", "OR", "ALL"], a: 2 },
    { q: "WHERE State NOT IN ('CA','TX') returns:", options: ["Only CA and TX", "All states except CA and TX", "Only state TX", "No rows"], a: 1 },
    { q: "What does DISTINCT keyword do?", options: ["Sorts data", "Removes duplicate values from result", "Limits number of rows", "Groups data"], a: 1 },
    { q: "What will a SELECT query return without ORDER BY clause?", options: ["Alphabetical order", "Insertion order", "Predictable order", "Data in an unpredictable order"], a: 3 },
    { q: "Which columns are returned by SELECT *?", options: ["First column", "Last column", "Only primary keys", "All table columns"], a: 3 },
    { q: "How do you return only unique flower names?", options: ["SELECT UNIQUE name", "SELECT name DISTINCT", "SELECT DISTINCT name FROM flowers", "SELECT TOP 1 name"], a: 2 },
    { q: "Which operator is used for text concatenation in SQL Server?", options: ["&", "||", "+", "CONCATENATE"], a: 2 },
    { q: "What happens if you concatenate a string with a NULL value?", options: ["NULL is ignored", "Execution error", "Entire result becomes NULL", "NULL converted to empty string"], a: 2 },
    { q: "In logical execution order, which clause comes before ORDER BY?", options: ["HAVING", "WHERE", "FROM", "All others (ORDER BY is last)"], a: 3 },
    { q: "What is correct syntax for sorting by class (asc) then name (asc)?", options: ["ORDER class, name", "ORDER BY class, name", "SORT BY class AND name", "GROUP class, name"], a: 1 },
    { q: "SELECT COUNT(*) FROM Orders; returns:", options: ["Sum of prices", "Total number of rows/orders", "Largest order", "Average value"], a: 1 },
    { q: "Which function returns total sum of a numeric column?", options: ["ADD()", "SUM()", "TOTAL()", "COUNT()"], a: 1 },
    { q: "Which clause is mandatory when using HAVING?", options: ["WHERE", "GROUP BY", "ORDER BY", "DISTINCT"], a: 1 },
    { q: "SELECT City, COUNT(*) FROM Customers GROUP BY City; does:", options: ["Lists clients", "Counts clients in each city", "Sorts cities", "Deletes duplicates"], a: 1 },
    { q: "Which operator is used to exclude a range (e.g. between 10 and 20)?", options: ["NOT BETWEEN", "BETWEEN", "EXCEPT", "NOT IN"], a: 0 },
    { q: "Products ordered descending by price:", options: ["ORDER Price DESC", "SORT BY Price DESC", "ORDER BY Price DESC", "GROUP BY Price DESC"], a: 2 },
    { q: "Which JOIN type displays only rows with match in both parts?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], a: 2 },
    { q: "Which JOIN displays everything from left, even if no correspondent in right?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"], a: 1 },
    { q: "Which JOIN type displays all rows from right table?", options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"], a: 2 },
    { q: "Which JOIN displays all rows from both tables (full union)?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], a: 3 },
    { q: "SELECT * FROM Students INNER JOIN Classes ON Students.ClassID = Classes.ID; displays:", options: ["All students", "All classes", "Only students belonging to a class", "Orphan students"], a: 2 },
    { q: "What appears in right columns for a LEFT JOIN without match?", options: ["Error", "Empty space", "NULL value", "0"], a: 2 },
    { q: "Which JOIN combines every row from A with every row from B?", options: ["INNER JOIN", "FULL JOIN", "SELF JOIN", "CROSS JOIN"], a: 3 },
    { q: "Tables with 3 and 4 rows. How many rows does CROSS JOIN return?", options: ["7", "12", "4", "3"], a: 1 },
    { q: "What is a SELF JOIN?", options: ["JOIN without condition", "JOIN between different tables", "A table joined with itself", "JOIN between servers"], a: 2 },
    { q: "SELECT A.Name, B.Name FROM Employees A JOIN Employees B ON A.MgrID = B.ID;", options: ["All employees", "Those without manager", "Employee next to their manager", "Error"], a: 2 },
    { q: "What is mandatory in a modern JOIN (ANSI) statement?", options: ["ORDER BY", "GROUP BY", "ON condition", "HAVING"], a: 2 },
    { q: "If ON condition (or WHERE in old style) is missing in a JOIN:", options: ["Does INNER JOIN", "Syntax error", "Results in Cartesian product", "Ignores second table"], a: 2 },
    { q: "Which JOIN type is default if we just write JOIN?", options: ["LEFT", "RIGHT", "INNER", "FULL"], a: 2 },
    { q: "SELECT * FROM Orders LEFT JOIN Customers ON Orders.CID = Customers.ID; displays:", options: ["Only customers", "Only orders with customer", "All orders, including those without customer", "Error"], a: 2 },
    { q: "Which JOIN is rarely used due to data volume explosion (poor performance)?", options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"], a: 2 },
    { q: "Which statement is true about JOINs?", options: ["FULL JOIN is fastest", "LEFT JOIN can return NULL in right columns", "SELF JOIN requires two physical files", "CROSS JOIN has mandatory ON condition"], a: 1 }
  ],

  dml: [
    { q: "Which of the following is the language element allowing you to use statements, such as INSERT, UPDATE and DELETE to manipulate the data in any SQL Server table?", options: ["DML", "DDE", "DDL", "DAT"], a: 0 },
    { q: "Which three are valid Data Manipulation Language (DML) commands? (Choose three)", options: ["INSERT", "COMMIT", "DELETE", "OUTPUT", "UPDATE"], a: [0, 2, 4] },
    { q: "In SQL, an INSERT statement is used to add a:", options: ["User to a database", "Row of data to a table", "Table to a database", "Column to a table definition"], a: 1 },
    { q: "On which database structure does an INSERT statement operate?", options: ["Role", "Trigger", "User", "Table"], a: 3 },
    { q: "You need to add rows to a table. Which SQL keyword should you use?", options: ["JOIN", "INSERT", "CREATE", "UPDATE"], a: 1 },
    { q: "Which statement would you use to add data to a table?", options: ["ADD", "INSERT", "JOIN", "PRESENT"], a: 1 },
    { q: "Which SQL statement is a pure DML statement?", options: ["ALTER TABLE Employee ADD Name Varchar", "SELECT Name FROM Employee", "SELECT * INTO Employee FROM NewHires", "INSERT INTO Employee VALUES ('Jack Smith')"], a: 3 },
    { q: "CREATE TABLE Road (ID INT NOT NULL, Dist INT NOT NULL). You execute: INSERT INTO Road VALUES (1234, 36). Result:", options: ["Error: NULL not allowed", "A new row in table", "Error: Duplicate ID", "Syntax error"], a: 1 },
    { q: "Table Product(ProductID, Name). Insert ID 12345 and name 'Plate'. Correct command:", options: ["INSERT INTO Product VALUES (ProductID=12345, Name='Plate')", "INSERT NEW 12345, 'Plate' INTO Product", "INSERT 12345, 'Plate' INTO Product", "INSERT INTO Product (ProductID, Name) VALUES (12345, 'Plate')"], a: 3 },
    { q: "Insert two products: (125, 'Book') and (126, 'Movie'). Correct command:", options: ["INSERT INTO Product VALUES (ID=125, 126) (Name='Book', 'Movie')", "INSERT INTO Product (ID, Name) VALUES (125, 'Book'), (126, 'Movie')", "INSERT 125, 126, 'Book', 'Movie' INTO Product", "INSERT NEW ID=125, Name='Book'"], a: 1 },
    { q: "You have columns StreetAddress, City, State, PostalCode. Which two variants are valid? (Choose two)", options: ["INSERT INTO AddressInfo ('123', 'City', 'TX', '00') VALUES (...)", "INSERT INTO AddressInfo (StreetAddress, City, State, PostalCode) VALUES ('123 Main St', 'Dallas', 'TX', '75201')", "INSERT INTO AddressInfo VALUES ('123 Main St', 'Dallas', 'TX', '75201')", "UPDATE AddressInfo SET StreetAddress='123'"], a: [1, 2] },
    { q: "Product has PK ProductID(3296). Execute: INSERT INTO Product VALUES (3296, 'Table', 4444). Result?", options: ["Foreign key violation", "Syntax error", "Row added", "Primary key constraint violation"], a: 3 },
    { q: "Populate EmployeeCopy with data from Employee. What do you use?", options: ["SELECT * INTO EmployeeCopy SELECT * FROM Employee", "INSERT * FROM Employee INTO EmployeeCopy", "COPY INTO Employee", "INSERT INTO EmployeeCopy SELECT * FROM Employee"], a: 3 },
    { q: "On which database structure does an UPDATE statement operate?", options: ["Table", "User", "Trigger", "Role"], a: 0 },
    { q: "Which SQL keyword do you use to change a student's first name?", options: ["UPDATE", "CHANGE", "SELECT", "INSERT"], a: 0 },
    { q: "Which statement would you use to modify existing data in a table?", options: ["CHANGE", "MODIFY", "INSERT", "UPDATE"], a: 3 },
    { q: "UPDATE: Change product name to 'glass'. What do you include?", options: ["SET ProductName = 'glass'", "LET ProductName = 'glass'", "EXEC ProductName = 'glass'", "ASSIGN ProductName = 'glass'"], a: 0 },
    { q: "UPDATE: Set InStock to 'Yes' for a specific ProductID. Which clause do you use?", options: ["THAT", "WHERE", "GROUP BY", "HAVING"], a: 1 },
    { q: "What happens if you omit the WHERE clause in an UPDATE statement?", options: ["No record changes", "Only first changes", "All records will be updated", "Syntax error"], a: 2 },
    { q: "Replace Benjamin with Kayden in FirstName column:", options: ["UPDATE STUDENTS SET FIRSTNAME='Kayden' WHERE FIRSTNAME='Benjamin'", "UPDATE STUDENTS SET FIRSTNAME='Benjamin' WHERE FIRSTNAME='Kayden'", "CHANGE STUDENTS SET FIRSTNAME='Kayden'", "REPLACE FIRSTNAME='Benjamin' WITH 'Kayden'"], a: 0 },
    { q: "Harry from San Francisco returns books (Books=0). Correct Update:", options: ["UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' AND City='San Francisco'", "UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' OR City='San Francisco'", "UPDATE LoanedBooks SET Books=0 WHERE Name IN ('Harry', 'San Francisco')", "INSERT INTO LoanedBooks SET Books=0 WHERE ID=4"], a: 0 },
    { q: "Change ProductCategory to 43 for all 'spoons' (ProductDescription):", options: ["UPDATE Product SET ProductCategory=43 WHERE ProductDescription='spoons'", "SET Product WHERE ProductCategory=43", "UPDATE Product WHERE ProductDescription='spoons'", "CHANGE Product SET 43"], a: 0 },
    { q: "What is a difference between UPDATE and DELETE?", options: ["UPDATE modifies only one row", "DELETE cannot use WHERE", "UPDATE does not remove rows from table", "DELETE works only in procedures"], a: 2 },
    { q: "Delete all records with GivenName 'Tia':", options: ["DELETE FROM Volunteer WHERE GivenName == 'Tia'", "DELETE FROM Volunteer WHERE GivenName = 'Tia'", "DELETE FROM Volunteer WHERE GivenName EQUALS 'Tia'", "DELETE FROM Volunteer WHERE GivenName IS 'Tia'"], a: 1 },
    { q: "Delete customer with CustomerID = 12345:", options: ["UPDATE Customer DELETE *", "DELETE CustomerID FROM Customer", "DELETE FROM Customer WHERE CustomerID = 12345", "DROP Customer WHERE ID=12345"], a: 2 },
    { q: "Delete rows where Phone is not entered (is empty/missing):", options: ["DELETE FROM Employee WHERE Phone IS NULL", "DELETE FROM Employee WHERE Phone IS NOT NULL", "DELETE FROM Employee WHERE Phone = '%'", "DELETE FROM Employee WHERE Phone = NULLABLE"], a: 0 },
    { q: "Select TRUE statement about TRUNCATE:", options: ["Removes table structure", "Removes all data without logging each row (fast delete)", "Allows WHERE clause", "Is a DML command using triggers"], a: 1 },
    { q: "What does DROP command do?", options: ["Deletes rows but keeps table", "Deletes both data and table structure permanently", "Renames table", "Clears cache"], a: 1 },
    { q: "DELETE FROM Order WHERE CustomerID = 209. Result?", options: ["First order is deleted", "All orders of customer 209 are deleted from Order table", "Customer is deleted from Customer table too", "Integrity error"], a: 1 },
    { q: "Execute DELETE FROM Student; (without WHERE). Result?", options: ["All rows in table will be deleted", "Only rows with NULL will be deleted", "Error: WHERE clause mandatory", "Table definition is also deleted"], a: 0 },
    { q: "Which clause is correct to filter groups resulting from an aggregate function (e.g. SUM)?", options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"], a: 2 },
    { q: "Which SQL statement allows INSERT, UPDATE or DELETE in a single command based on a condition?", options: ["JOIN", "MERGE", "UNION", "COMBINE"], a: 1 },
    { q: "To delete all data from a table extremely fast and reset identity (ID), we use:", options: ["DELETE", "DROP", "TRUNCATE TABLE", "REMOVE"], a: 2 },
    { q: "Which DML clause can be used to view rows just inserted or deleted?", options: ["OUTPUT", "INTO", "FROM", "VALUES"], a: 0 },
    { q: "Can you use a subquery inside an UPDATE statement?", options: ["Yes, to get values from other tables", "No, UPDATE works only with fixed values", "Yes, but only if table is empty", "Only in ORDER BY clause"], a: 0 },
    { q: "What does VALUES clause do in an INSERT statement?", options: ["Defines columns", "Specifies data to be inserted into new rows", "Filters data", "Sorts data"], a: 1 },
    { q: "If a table has an IDENTITY column, what usually happens on simple INSERT?", options: ["We must insert value manually", "SQL Server automatically generates value", "Value will always be NULL", "Error: column missing from statement"], a: 1 },
    { q: "Which operator is used in WHERE to check if a value is in a list (e.g. 10, 20, 30)?", options: ["BETWEEN", "LIKE", "IN", "EXISTS"], a: 2 },
    { q: "Which clause is mandatory in an UPDATE statement to avoid accidentally modifying entire database?", options: ["SET", "WHERE", "VALUES", "FROM"], a: 1 },
    { q: "Can you delete data from a table using a JOIN in DELETE statement?", options: ["No, DELETE accepts only one table", "Yes, using syntax DELETE FROM ... FROM ... JOIN", "Only if table has primary key", "Only in Views"], a: 1 }
  ],

  trouble: [
    { q: "Syntax error occurs most often from:", options: ["Index too large","Missing parentheses/commas, wrong keywords","Too much data","Missing backup"], a: 1 },
    { q: "Why does a JOIN not work?", options: ["No foreign keys exist","JOIN condition is wrong or types do not match","JOIN is not used","ORDER BY breaks JOIN"], a: 1 },
    { q: "Violation of PRIMARY KEY constraint:", options: ["NULL in NOT NULL","Duplicate on primary key","You deleted table","You used DISTINCT"], a: 1 },
    { q: "Cannot insert NULL:", options: ["Column allows NULL","Column is NOT NULL and you provided no value","You used WHERE","You used GROUP BY"], a: 1 },
    { q: "Least privilege:", options: ["Max rights","Only strictly necessary rights","Plaintext passwords","No backup"], a: 1 },
    { q: "Revoking rights:", options: ["REVOKE","GRANT","DENY ALL","DROP GRANT"], a: 0 },
    { q: "Backup + restore:", options: ["For indexes","Data recovery after loss/errors","Accelerate JOIN","Remove normalization"], a: 1 },
    { q: "Encryption:", options: ["Protects sensitive data","Sorts faster","Removes NULL","Creates view"], a: 0 },
    { q: "Auditing:", options: ["Auto delete old data","Records actions (who/what/when)","A type of JOIN","A type of key"], a: 1 },
    { q: "What happens if you execute: CREATE TABLE Students (Name); ?", options: ["Creates table successfully", "Error: missing data type for column", "Creates column as default text", "Waits for data input"], a: 1 },
    { q: "Why does statement fail: CREATE TABLE Table (ID INT); ?", options: ["Missing primary key", "Incorrect parentheses", "'Table' is a reserved word in SQL", "ID must be VARCHAR"], a: 2 },
    { q: "What error does omitting semicolon (;) between consecutive CREATE/ALTER commands cause?", options: ["None, SQL separates automatically", "SQL engine reads everything as one invalid statement", "Only first command executes", "Database is deleted"], a: 1 },
    { q: "What is syntax error in: CREATE TABLE Test (ID INT, Name TEXT, ); ?", options: ["Extra comma after last column", "Missing primary key", "TEXT type does not exist", "Table name too short"], a: 0 },
    { q: "What type of error is omitting closing parenthesis ')' at end of CREATE TABLE?", options: ["Logic Error", "Syntax Error", "Permission Error", "Network Error"], a: 1 },
    { q: "You get 'Object already exists' error. Probable cause?", options: ["Syntax is wrong", "Trying to create a table that already exists", "No admin rights", "Server is down"], a: 1 },
    { q: "Why would dropping a table (DROP TABLE) fail if syntactically correct?", options: ["Table is empty", "Active Foreign Key dependencies exist", "Table name starts with capital", "Table has too many columns"], a: 1 },
    { q: "What happens if you try to modify (ALTER) a column deleted previously?", options: ["SQL recreates column", "Error: column non-existent", "Modifies random column", "Shows warning but continues"], a: 1 },
    { q: "Code is perfect, but you get access/permission error. What is missing?", options: ["Disk space", "Internet connection", "Admin rights (DBA or Schema Owner)", "Caps Lock on"], a: 2 },
    { q: "What is correct order of clauses in SELECT query?", options: ["SELECT, WHERE, FROM", "FROM, SELECT, WHERE", "SELECT, FROM, WHERE", "WHERE, SELECT, FROM"], a: 2 },
    { q: "In query SELECT * FROM Students WHERE Name = Marius, what is the error?", options: ["Missing FROM", "Text value 'Marius' not in quotes", "Cannot use equals sign", "Table name wrong"], a: 1 },
    { q: "Why is syntax wrong: WHERE class = 7 OR 8 OR 9 ?", options: ["Must use AND", "Cannot use numbers", "SQL requires repeating column name or IN (7,8,9)", "It is correct"], a: 2 },
    { q: "What is missing in query: SELECT Name Surname FROM Students; ?", options: ["Comma between columns Name and Surname", "Keyword AS", "Quotes", "Nothing, correct"], a: 0 },
    { q: "Query WHERE Name = 'A%' returns nothing, though names starting with A exist. Why?", options: ["Must use LIKE operator for wildcards (%)", "Must use ==", "Must use lowercase", "Must use LIKE without quotes"], a: 0 },
    { q: "What does 'Ambiguous column name' error mean in a JOIN?", options: ["Column does not exist", "Both tables have column with same name and source not specified", "Column has NULL data", "Table is empty"], a: 1 },
    { q: "What error appears if you write WHERE Grade = 'ten' (on numeric column)?", options: ["Syntax Error", "Data type incompatibility (Conversion failed)", "Ambiguous column", "Network Error"], a: 1 },
    { q: "Why does query fail: SELECT Dept, SUM(Salary) ... WHERE SUM(Salary) > 1000 ?", options: ["Sum too large", "Cannot use aggregate functions in WHERE (must use HAVING)", "Missing GROUP BY", "Cannot sum money"], a: 1 },
    { q: "What happens if you use '=' with subquery returning multiple values?", options: ["Returns first value", "Works normally", "Runtime error (subquery returned more than 1 value)", "Deletes data"], a: 2 },
    { q: "If subquery returns list of values, which operator to use instead of '=' ?", options: ["LIKE", "IN or ANY", "BETWEEN", "IS NULL"], a: 1 },
    { q: "Which keyword is MANDATORY in an UPDATE statement?", options: ["VALUES", "INTO", "SET", "GROUP BY"], a: 2 },
    { q: "What is error in: UPDATE Tickets WHERE ID=5 SET Class='B' ?", options: ["ID does not exist", "Wrong order: SET must be before WHERE", "Cannot modify class", "Missing DELETE"], a: 1 },
    { q: "To modify data, which command is wrong (does not exist in SQL standard for rows)?", options: ["UPDATE", "CHANGE or MODIFY", "INSERT", "DELETE"], a: 1 },
    { q: "In INSERT, if you list 3 columns but provide only 2 values, what happens?", options: ["Inserts NULL automatically", "Syntax error (column count mismatch)", "Inserts 0", "Ignores last column"], a: 1 },
    { q: "If you write SET Name = Andrei (no quotes) in UPDATE, how does SQL interpret 'Andrei'?", options: ["As text", "As another column name", "As variable", "As network error"], a: 1 },
    { q: "What is most dangerous mistake in DELETE or UPDATE?", options: ["Writing in lowercase", "Omitting WHERE clause (affects all rows)", "Using aliases", "Omitting semicolon"], a: 1 },
    { q: "What error appears if trying to insert ID that already exists (Primary Key)?", options: ["Foreign Key Violation", "Primary Key Violation (Duplicate Key)", "Syntax Error", "Data Truncation"], a: 1 },
    { q: "What error appears if trying to delete 'parent' having 'children' linked via Foreign Key?", options: ["Constraint Violation (Foreign Key)", "Syntax Error", "Duplicate Key", "Table not found"], a: 0 },
    { q: "What error do you get if inserting NULL into NOT NULL column?", options: ["Warning", "NOT NULL constraint violation", "Nothing, inserts 0", "Syntax Error"], a: 1 },
    { q: "Attempting to save 100 char text into VARCHAR(20) leads to:", options: ["Auto resize column", "Error: String or binary data would be truncated", "Saving first 20 chars without error", "Table deletion"], a: 1 },
    { q: "How is it recommended to test UPDATE/DELETE condition before execution?", options: ["Running command directly", "Using a SELECT with same WHERE clause", "Guessing IDs", "No testing needed"], a: 1 }
  ]
};

const MODULE_TITLES = {
  ro: {
    design: "1. Proiectarea Bazei de Date",
    ddl: "2. Gestionarea Obiectelor (DDL)",
    retrieval: "3. Regăsirea Datelor (SELECT)",
    dml: "4. Manipularea Datelor (DML)",
    trouble: "5. Depanare (Troubleshooting)"
  },
  en: {
    design: "1. Database Design",
    ddl: "2. Database Object Management (DDL)",
    retrieval: "3. Data Retrieval",
    dml: "4. Data Manipulation (DML)",
    trouble: "5. Troubleshooting"
  }
};



const $ = (sel) => document.querySelector(sel);

// Starea globală
const state = {
  lang: "ro", // "ro" sau "en"
  mode: "module",
  moduleId: null,
  title: "",
  questions: [], // Lista curentă de întrebări
  idx: 0,
  answers: [],            
};

// Elemente UI
const ui = {
  menu: $("#screenMenu"),
  quiz: $("#screenQuiz"),
  result: $("#screenResult"),
  moduleGrid: $("#moduleGrid"),
  
  quizTitle: $("#quizTitle"),
  quizMeta: $("#quizMeta"),
  progressPill: $("#progressPill"),
  qIndex: $("#qIndex"),
  qText: $("#qText"),
  options: $("#options"),
  
  btnPrev: $("#btnPrev"),
  btnNext: $("#btnNext"),
  btnReset: $("#btnReset"),
  btnBackMenu: $("#btnBackMenu"),
  btnReview: $("#btnReview"),
  btnStartExam: $("#btnStartExam"),
  
  examCount: $("#examCount"),
  shuffleOptions: $("#shuffleOptions"),
  
  resultTitle: $("#resultTitle"),
  resultSubtitle: $("#resultSubtitle"),
  scoreBig: $("#scoreBig"),
  scoreSmall: $("#scoreSmall"),
  reviewArea: $("#review"),
  
  btnLangRo: $("#btnLangRo"),
  btnLangEn: $("#btnLangEn")
};


/* --- Funcții Utilitare --- */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function letters(i){ return String.fromCharCode(65+i); }
function isMultiAnswer(q){ return Array.isArray(q.a); }

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

/* --- Gestionare Limbă --- */
function setLanguage(lang) {
  state.lang = lang;
  
  if(lang === "ro") {
    ui.btnLangRo.classList.add("selected-lang");
    ui.btnLangRo.classList.remove("ghost");
    ui.btnLangEn.classList.add("ghost");
    ui.btnLangEn.classList.remove("selected-lang");
  } else {
    ui.btnLangEn.classList.add("selected-lang");
    ui.btnLangEn.classList.remove("ghost");
    ui.btnLangRo.classList.add("ghost");
    ui.btnLangRo.classList.remove("selected-lang");
  }

 
  if(!ui.menu.classList.contains("hidden")) {
    buildMenu();
  } else {

    alert(lang === "ro" ? "Limba se va schimba la următorul test." : "Language will change on the next test.");
  }
}

ui.btnLangRo.addEventListener("click", () => setLanguage("ro"));
ui.btnLangEn.addEventListener("click", () => setLanguage("en"));


function buildMenu(){
  ui.moduleGrid.innerHTML = "";
  const titles = MODULE_TITLES[state.lang];
  const keys = Object.keys(titles);

  keys.forEach(key => {
    // Luăm numărul de întrebări din setul RO (sursa de adevăr)
    const count = RO_DATA[key].length;
    
    const btn = document.createElement("button");
    btn.className = "btn ghost moduleBtn";
    btn.type = "button";
    btn.innerHTML = `<span>${titles[key]}</span><span class="tag">${count}</span>`;
    btn.addEventListener("click", ()=>startModule(key));
    ui.moduleGrid.appendChild(btn);
  });
}

function showScreen(name){
  ui.menu.classList.add("hidden");
  ui.quiz.classList.add("hidden");
  ui.result.classList.add("hidden");

  if(name === "menu") ui.menu.classList.remove("hidden");
  if(name === "quiz") ui.quiz.classList.remove("hidden");
  if(name === "result") ui.result.classList.remove("hidden");
}


/* --- Start Modul --- */
function startModule(moduleId){
  state.mode = "module";
  state.moduleId = moduleId;
  state.title = MODULE_TITLES[state.lang][moduleId];

  // Logică de fallback: Dacă suntem pe EN dar nu avem întrebarea tradusă, luăm RO
  const sourceRO = RO_DATA[moduleId];
  const sourceEN = EN_DATA[moduleId] || [];

  state.questions = sourceRO.map((qRO, idx) => {
    let finalQ = qRO; // Implicit RO
    
    if (state.lang === 'en') {
      // Încercăm să găsim echivalentul EN la același index
      if (sourceEN[idx]) {
        finalQ = sourceEN[idx];
      }
    }
    
    return {
      ...finalQ,
      meta: { moduleId, originalIndex: idx } // Păstrăm referința
    };
  });

  state.idx = 0;
  state.answers = Array(state.questions.length).fill(null);

  showScreen("quiz");
  renderQuestion();
}


/* --- Start Examen --- */
function startExam(){
  state.mode = "exam";
  state.moduleId = null;
  state.title = (state.lang === "ro") ? "Examen (random)" : "Exam (random)";

  // Colectăm TOATE întrebările disponibile
  let allQs = [];
  const keys = Object.keys(RO_DATA);
  
  keys.forEach(key => {
    const sourceRO = RO_DATA[key];
    const sourceEN = EN_DATA[key] || [];
    
    const mapped = sourceRO.map((qRO, idx) => {
      let finalQ = qRO;
      if (state.lang === 'en' && sourceEN[idx]) {
        finalQ = sourceEN[idx];
      }
      return {
        ...finalQ,
        meta: { moduleId: key, moduleTitle: MODULE_TITLES[state.lang][key] }
      };
    });
    
    allQs = allQs.concat(mapped);
  });

  // Selectăm N întrebări random
  const totalAvailable = allQs.length;
  let n = parseInt(ui.examCount.value, 10);
  if(Number.isNaN(n)) n = 25;
  n = Math.max(5, Math.min(n, totalAvailable));

  const picked = shuffle(allQs).slice(0, n);
  const doShuffle = (ui.shuffleOptions.value === "yes");

  // Amestecăm opțiunile dacă e selectat
  state.questions = picked.map(q => {
    if(!doShuffle) return q;

    // Amestecare opțiuni
    const indexed = q.options.map((txt, i) => ({ txt, i }));
    const mixed = shuffle(indexed);
    const newOptions = mixed.map(x => x.txt);

    // Recalculare răspuns corect (index)
    let newA;
    if(Array.isArray(q.a)){
      newA = q.a.map(oldIdx => mixed.findIndex(x => x.i === oldIdx));
    } else {
      newA = mixed.findIndex(x => x.i === q.a);
    }
    
    return { ...q, options: newOptions, a: newA };
  });

  state.idx = 0;
  state.answers = Array(state.questions.length).fill(null);

  showScreen("quiz");
  renderQuestion();
}


/* --- Afișare Întrebare --- */
function renderQuestion(){
  const q = state.questions[state.idx];
  const total = state.questions.length;
  const lang = state.lang;

  ui.quizTitle.textContent = state.title;
  ui.quizMeta.textContent = (lang === "ro") 
    ? `Întrebarea ${state.idx+1} / ${total}` 
    : `Question ${state.idx+1} / ${total}`;
    
  ui.progressPill.textContent = `${Math.round(((state.idx+1)/total)*100)}%`;
  ui.qIndex.textContent = String(state.idx+1);

  const multiHint = isMultiAnswer(q) 
    ? (lang === "ro" ? " (selectează multiple)" : " (select all that apply)") 
    : "";
  ui.qText.textContent = q.q + multiHint;

  ui.options.innerHTML = "";
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
      renderQuestion(); // Re-render pt update vizual
    };

    div.addEventListener("click", pick);
    div.addEventListener("keydown", (e)=>{
      if(e.key === "Enter" || e.key === " ") pick();
    });

    ui.options.appendChild(div);
  });

  // Butoane navigare
  ui.btnPrev.disabled = (state.idx === 0);
  ui.btnNext.textContent = (state.idx === total-1) 
    ? (lang === "ro" ? "Finalizează" : "Finish") 
    : (lang === "ro" ? "Următor" : "Next");
}

/* --- Navigare --- */
ui.btnPrev.addEventListener("click", ()=>{
  if(state.idx > 0){
    state.idx--;
    renderQuestion();
  }
});

ui.btnNext.addEventListener("click", ()=>{
  const total = state.questions.length;
  if(state.idx < total-1){
    state.idx++;
    renderQuestion();
  } else {
    showResult();
  }
});


/* --- Rezultate --- */
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
  const percent = total === 0 ? 0 : Math.round((correct/total)*100);
  return { correct, total, percent };
}

function showResult(){
  const s = calcScore();
  const lang = state.lang;

  ui.resultTitle.textContent = (state.mode === "exam") 
    ? (lang === "ro" ? "Rezultat Examen" : "Exam Result")
    : (lang === "ro" ? "Rezultat Modul" : "Module Result");
    
  ui.resultSubtitle.textContent = (state.mode === "exam")
    ? (lang === "ro" ? `Random • ${s.total} întrebări` : `Random • ${s.total} questions`)
    : `${state.title}`;

  ui.scoreBig.textContent = `${s.percent}%`;
  ui.scoreSmall.textContent = `${s.correct} / ${s.total}`;

  ui.reviewArea.classList.add("hidden");
  ui.reviewArea.innerHTML = "";
  ui.btnReview.textContent = (lang === "ro" ? "Vezi Greșelile" : "Review Mistakes");

  showScreen("result");
}

function ansToText(q, a){
  if(a === null || a === undefined) return "—";
  if(Array.isArray(a)){
    return a.sort((x,y)=>x-y).map(i => `${letters(i)}. ${q.options[i]}`).join(" | ");
  }
  return `${letters(a)}. ${q.options[a]}`;
}

function buildReview(){
  ui.reviewArea.innerHTML = "";
  const wrong = [];

  for(let i=0;i<state.questions.length;i++){
    const q = state.questions[i];
    const userA = state.answers[i];
    if(!isCorrect(userA, q.a)){
      wrong.push({ i, q, userA });
    }
  }

  const lang = state.lang;
  if(wrong.length === 0){
    ui.reviewArea.innerHTML = `<div class="rItem" style="text-align:center; color:#27ae60;">
      ${lang === "ro" ? "Felicitări! Totul corect." : "Great job! All correct."}
    </div>`;
    return;
  }

  wrong.forEach(item=>{
    const { i, q, userA } = item;
    const userTxt = ansToText(q, userA);
    const correctTxt = ansToText(q, q.a);
    const modTitle = q.meta && q.meta.moduleTitle ? q.meta.moduleTitle : "";

    const div = document.createElement("div");
    div.className = "rItem";
    div.innerHTML = `
      <h3><span class="bad">#${i+1}</span> <span class="tag">${modTitle}</span></h3>
      <div style="margin-bottom:8px; font-weight:600;">${q.q}</div>
      <p><b>${lang === "ro" ? "Răspunsul tău" : "Your Answer"}:</b> <span class="bad">${userTxt}</span></p>
      <p><b>${lang === "ro" ? "Corect" : "Correct"}:</b> <span style="color:#27ae60;">${correctTxt}</span></p>
    `;
    ui.reviewArea.appendChild(div);
  });
}

ui.btnReview.addEventListener("click", ()=>{
  if(ui.reviewArea.classList.contains("hidden")){
    buildReview();
    ui.reviewArea.classList.remove("hidden");
    ui.btnReview.textContent = (state.lang === "ro" ? "Ascunde" : "Hide");
  } else {
    ui.reviewArea.classList.add("hidden");
    ui.btnReview.textContent = (state.lang === "ro" ? "Vezi Greșelile" : "Review Mistakes");
  }
});

ui.btnReset.addEventListener("click", ()=>showScreen("menu"));
ui.btnBackMenu.addEventListener("click", ()=>showScreen("menu"));
ui.btnStartExam.addEventListener("click", startExam);

// Inițializare
showScreen("menu");
buildMenu();
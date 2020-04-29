/* GALLOWS THE GAME
This game was created in 2020. I wanted to practice some functions and other JS features there. */

// NEW GAME BUTTON
document.querySelector('#newgameButton').addEventListener('click', newGame);

// MAIN
function newGame() {

    // NUMBER OF ATTEMPTS
    let howManyAttempts = parseInt(prompt("Podaj, ile chcesz mieć strzałów (wybierz liczbę od 15 do 30):"));
    while (isNaN(howManyAttempts) || howManyAttempts > 30 || howManyAttempts < 15) {
        alert('Naciśnij przycisk "Nowa gra" i wybierz liczbę od 15 do 30.');
        return false;
    }

    // AUDIO
    let soundEffect = function (path) {
        let audioPlayer = new Audio(path);
        audioPlayer.play();
    }

    // PLAYER 
    let name = prompt('Witaj graczu! Jak masz na imię?');
    soundEffect('audio/baDumTss.mp3');
    if (name == 'MADRA' || name == 'Madra' || name == 'madra') {
        alert('NIE UŻYWAJ NAZWISKA NAUCZYCIELA TWEGO NADAREMNO!!! :>');
    } else if (name === null || name === '') {
        alert('Cześć Nieznajomy!');
        name = 'Nieznajomy';
    } else {
        alert('Cześć ' + name + '!');
    };

    // SHOW HTML PLAYER STATUS
    let renderPlayer = function () {
        document.querySelector('#player').innerHTML = 'Gracz: ' + name;
    };
    renderPlayer();

    alert('Wylosuj jedno ze słów! Pamiętaj, masz tylko ' + howManyAttempts + ' prób!');
    soundEffect('audio/baDumTss.mp3');
    document.querySelector('#newgameButton').classList.toggle('unvisible');
    alert('Słowo zostało wylosowane! Używaj wyłącznie małych liter.');

    // RANDOM WORD
    let chooseWord = function () {
        let words = ['abecadło', 'administracja', 'agroturystyka', 'aksjomat', 'antidotum', 'antybiotyk', 'antycypacja', 'arachnofobia', 'beatyfikacja', 'bibliografia', 'biodegradacja', 'biznesmen', 'błyskawica', 'cementownia', 'centymetr', 'chrząszcz', 'czarnoksiężnik', 'dalmatyńczyk', 'decymetr', 'demoralizacja', 'dermatolog', 'dywidenda', 'dyferencjał', 'dżdżownica', 'egzorcysta', 'ekstrawertyk', 'elektronika', 'elementarz', 'emancypacja', 'endokrynolog', 'erytrocyt', 'ewenement', 'felieton', 'filatelistyka', 'filharmonia', 'fotografia', 'galwanizacja', 'gazociąg', 'geografia', 'gramatyka', 'gubernator', 'halabarda', 'hematokryt', 'hemoglobina', 'hospitacja', 'iluminacja', 'impresjonizm', 'informatyka', 'inteligencja', 'interlokutor', 'introwertyk', 'jajecznica', 'jaszczurka', 'jubileusz', 'kaligrafia', 'kalkulator', 'kamizelka', 'kancelaria', 'kapitalizm', 'kardiolog', 'kasztanowiec', 'kolonizacja', 'kombinatoryka', 'komendant', 'komentator', 'komplement', 'kompozytor', 'komunikacja', 'kondominium', 'konfederacja', 'konkurencja', 'konsekwencja', 'konstytucja', 'konwersatorium', 'korespondencja', 'koszykówka', 'krzyżówka', 'kręgosłup', 'kukurydza', 'kuratorium', 'kuropatwa', 'kwiatostan', 'laboratorium', 'lemoniada', 'liberalizm', 'lingwistyka', 'listonosz', 'literatura', 'lokomotywa', 'łazienka', 'magnetofon', 'magnetyzm', 'mandarynka', 'manifestacja', 'margaryna', 'marionetka', 'marmolada', 'matematyka', 'małżeństwo', 'melancholia', 'meteorologia', 'mieszanina', 'mikroskop', 'ministerstwo', 'mistrzostwo', 'modyfikacja', 'motywacja', 'moździerz', 'myśliwiec', 'męczennik', 'mężczyzna', 'nabożeństwo', 'nacjonalizm', 'nadgarstek', 'narzeczeństwo', 'nauczyciel', 'nawierzchnia', 'niepodległość', 'nieskończoność', 'notariusz', 'nowicjusz', 'obcokrajowiec', 'obowiązek', 'obserwatorium', 'obywatelstwo', 'odszkodowanie', 'opakowanie', 'oprogramowanie', 'oświadczenie', 'panorama', 'paradoks', 'paradygmat', 'parlament', 'październik', 'piosenkarz', 'poczekalnia', 'podniebienie', 'podobieństwo', 'podwieczorek', 'pomieszczenie', 'poniedziałek', 'porozumienie', 'programowanie', 'promieniowanie', 'propaganda', 'prywatyzacja', 'przedsiębiorstwo', 'przepowiednia', 'przeznaczenie', 'psychiatria', 'psychologia', 'referendum', 'rehabilitacja', 'reinkarnacja', 'rejestracja', 'restauracja', 'rozporządzenie', 'rzemieślnik', 'rękawiczka', 'samogłoska', 'samoobrona', 'sanktuarium', 'seminarium', 'skrzyżowanie', 'społeczeństwo', 'starożytność', 'statystyka', 'stowarzyszenie', 'streszczenie', 'stypendium', 'supermarket', 'szachownica', 'technologia', 'temperatura', 'teraźniejszość', 'terytorium', 'transformator', 'tranzystor', 'twierdzenie', 'ubezpieczenie', 'uniwersytet', 'urządzenie', 'uzasadnienie', 'uzupełnienie', 'użytkownik', 'weterynarz', 'wielokrotność', 'wierzchołek', 'wiolonczela', 'województwo', 'wskazówka', 'współczesność', 'wszechświat', 'wydawnictwo', 'zapalniczka', 'zaproszenie', 'zgromadzenie', 'zwierciadło', 'żeglarstwo', 'życzliwość'];
        return words[Math.floor(Math.random() * words.length)];
    };

    let word = chooseWord();
    let otherLetters = word.length;

    // ARRAY 
    let buildArrayWithAnswers = function (word) {
        let answer = [];
        for (i = 0; i < word.length; i++) {
            answer[i] = "_"
        };
        return answer;
    };

    let answer = buildArrayWithAnswers(word);

    // CURRENT SCORE STATUS
    let showCurrentScore = function (answer) {
        document.querySelector('#word').innerHTML = 'Hasło: ' + answer.join(" ");
    };

    // PLAYER SHOOT
    let readShoot = function () {
        return prompt('Podaj literę albo wybierz Anuluj, aby zakończyć grę.');
    };

    // AFTER THE SHOOT
    let gameStatus = function (shoot, word, answer) {
        let goodShoots = 0;
        for (let k = 0; k < word.length; k++) {
            if (word[k] === shoot) {
                if (answer[k] == "_") {
                    answer[k] = shoot.toUpperCase();
                    goodShoots++;
                }
                else {
                    alert('Ta litera została już podana. Wybierz inną literę.');
                    break;
                }
            }
        }
        return goodShoots;
    };

    // CLEAR HTML AND SHOW ANSWER
    let showAnswer = function () {
        document.querySelector('#shootCounter').innerHTML = '';
        document.querySelector('#player').innerHTML = '';
        alert('Szukane słowo to ' + word.toUpperCase() + '.');
        document.querySelector('#newgameButton').classList.toggle('unvisible');
        alert('Naciśnij przycisk "Nowa gra" aby zagrać jeszcze raz.');
    };

    // HTML SHOOT STATUS
    let shootNumber = 0;
    let renderShoots = function () {
        document.querySelector('#shootCounter').innerHTML = 'Wykorzystano ' + shootNumber + ' z ' + howManyAttempts + ' strzałów.';
    };

    // GAME OPPORTUNITIES
    while (otherLetters > 0) {
        showCurrentScore(answer);
        renderShoots();
        let shoot = readShoot();
        if (shoot === null) {
            soundEffect('audio/aww.mp3');
            alert('Zrezygnowałeś/aś z dalszej gry.');
            break;
        } else if (shoot.length !== 1) {
            alert('Podaj proszę tylko jedną literę.');
        } else if (shootNumber >= howManyAttempts) {
            soundEffect('audio/sadTrombone.mp3');
            alert('Zbyt wiele prób. Koniec gry.');
            break;
        } else {
            let correctAnswers = gameStatus(shoot, word, answer);
            otherLetters -= correctAnswers;
            shootNumber++;
        }
    };

    // IF PLAYER WINS
    let victory = function () {
        document.querySelector('#word').innerHTML = '';
        if (otherLetters < 1) {
            soundEffect('audio/applause.mp3');
            alert('Wygrałeś! Dobra robota ' + name + '!');
        }
    };

    victory();
    showAnswer(answer);
};
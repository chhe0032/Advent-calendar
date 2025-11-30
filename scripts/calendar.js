
var myCal = document.getElementById("adventCal");
var currentDate = new Date();

var messages = [
    ["Wir üben heute Deutsch:","Welches Wort ist hier Gesucht? Streiche vier falsche Buchstaben um zur Lösung zu kommen: S E I A F E G N B K L A M S E N", "Schwierigkeit: *"],
    ["Vorm Hotel in die Pleite", "Ein Mann steht vor einem Hotel. Er weiß: Noch zwei Schritte weiter, und er würde all sein Geld verlieren. Würde er es schaffen, an dem Hotel vorbeizugehen, ohne stehen zu bleiben würde er dagegen Geld verdienen.", "Schwierigkeit: ***"],
    ["Gutschein: Ich helfe dir im Haushault - Ich könnte beispielsweise die Dusche schrubben."],
    ["Die verschwundene Hose", "Zwei Väter und zwei Söhne gingen zusammenn einkaufen. Jeder kaufte eine Hose für 10 Euro. Am Ende hatten sie 30 Euro für 3 Hosen bezahlt, obwohl keine abhandengekommen ist. Wie ist das möglich?", "Schwierigkeit: **"],
    ["Mit anderen Worten", "Welche zwei Formulierungen haben eine ähnliche Bedeutung? a) das Fell jucken b) aus der Haut fahren c) auf der faulen Haut liegen d) ein dickes Fell haben e) Die Hände in den Schoß legen", "Schwierigkeit: ***"],
    ["Drei Wörter haben etwas gemeinsam. Welches passt nicht dazu?", "a) erstaunt b) faul c) begabt d) gesellig", "Schwierigkeit: **"],
    ["Gutschein: Heute für den 2. Advent spielen wir ein von dir gewünschtes Gesellschaftsspiel."],
    ["Sprichwörtlich:", "Vervollständige diese Redensart. Es fällt mir wie ____ von den Augen.", "Schwierigkeit: *"],
    ["Sandwich", "Finde das Wort mit dem das oberste Wort enden könnte und das Gleichzeitig als Anfang des unteren Wortes dienen könnte. Dabei entsteht ein zusammengesetztes Wort. Oberstes Wort: See Unterstes Wort: Stein ", "Schwierigkeit: ***"],
    ["Die Oase:", "Ein Fremder schleppt sich - schon halb verdurstet - durch die Wüste. Seiner Karte nach ist er nicht mehr weit von einer Oase entfernt, doch er kann keine finden. Schon fast im Wahn sieht er plötzlich hinter einer Düne zwei Gestalten sitzen, bedeckt mit Tüchern und schweigend. Vor ihnen lieht eine Tafel: (Wanderer, der du das Wasser suchst: Wir sind zwei alte Brüder, und die Gegend ist uns wohlbekannt. Zwei Wege führen von hier weg, doch nur einer davon zur Oase. Frage uns, und wir weisen dir den Weg! Aber sei gewarnt: Einer von uns beiden lügt immer, der andere sagt stets die Wahrheit. Wähle deine frage mit Bedacht, denn du hast nur eine einzige und darfst sie nur an einen von uns beiden richten!) Der Wanderer stellt eine Frage und erreicht kurze Zeit später die Oase.", "Welche Frage hat der Wanderer gestellt?", "Schwierigkeit: ****"],
    ["Ähnlichkeit:", "Welcher Begriff ähnelt dem vorgegebenen (Leistung) am meisten?","a) Anstengung b) Auszeichnung c) Ergebnis d) Tätigkeit","Schwierigkeit: ***"],
    ["Gutschein: Brauchst du Hilfe - Frag mich einfach und ich nehme mir die Zeit!"],
    ["Wortchaos:", "Baue aus den Buchstabengruppen sinnvolle Wörter und vervollständige den Satz. Das sollte in einem Auto auf keinen Fall fehlen.", "a) CKNEHU b) RESBM c) LBGEA d) PTHICPE", "Schwierigkeit: ***"],
    ["Gutschein: Heute für den 3. Advent spielen wir ein von dir gewünschtes Gesellschaftsspiel."],
    ["Wechseln oder standhaft bleiben?:", "In einer Gameshow im Fernsehen bekommt ein Kandidat drei Holzkisten zur Auswahl. In zwei von ihnen befindet sich nichts, und in einer der Gewinn. Der Kandidat darf sich eine Kiste aussuchen, die er an sich nehmen, aber noch nicht öffnen darf. Anschließend öffnet der Moderator eine der verbleibenden Kisten. Sie ist leer. Daraufhin bietet der Moderator dem Kandidaten an, seine Wahl noch einmal zu ändern und die andere der beiden verbliebenen verschlossenen Kisten zu wählen. Sollte der Kandidat auf das Angebot eingehen und die andere Holzkiste wählen oder bei seiner ursprünglichen Wahl bleiben?", "Schwierigkeit: ****"],
    ["Mit anderen Worten:", "Welche zwei Formulierungen haben eine ähnliche Bedeutung?", "a) die Engel singen hören b) das Gras wachsen hören c) etwas zu hören bekommen d) die Flöhe husten hören e) etwas läuten hören", "Schwierigkeit: **"],
    ["Fleißige Bienchen", "Wenn zwei Bienen in zwei Stunden 20 Blüten bestäuben, wie viele Bienen bestäuben dann 60 Blüten in vier Stunden?", "Schwierigkeit: **"],
    ["Mit welcher Zahl geht diese Reihe weiter?","2 4 10 28 __", "Schwierigkeit: **"],
    ["Päärchen gesucht:", "Unter den fünf Begriffen befinden sich zwei, die eine besondere Gemeinsamkeit haben.", "a) Anschreiben b) Besuch c) Existenz d) Gebet e) Stille", "Schwierigkeit: ****"],
    ["Ersatzwort:", "Finde ein Wort, das die gleiche Bedeutung haben kann wie Teppich & Zahnersatz", "Schwierigkeit: ****"],
    ["Heute zum 4. Advent kannst du dich auf einen Anruf freuen aus Heiligenblut so gegen 18 Uhr."],
    ["Tarnungen:","Welche Buchstaben stehen hinter den Symbolen 1,2,3,4? 14N4342 TRA1342IN 43TI1A2 K4132I1ENT 1ETR4342E 3R41I22E K4NTR4222A13E", "Schwierigkeit: **"],
    ["Analogien:", "Die beiden Begriffspaare sollen die gleiche Beziehung zueinander aufweisen; sie sollen also eine Analogie bilden. Welches der zur Auswahl stehenden Wörter kann dafür die treffenden Ergänzung sein?", "Blei - Gewicht & Sand - ____ a) Strand b) Zeit c) Quarz d) Wasser","Schwierigkeit: ****"],
    ["Frohe Weihnachten! Ich freue mich heute Abend euch zu sehen und über meine bisherigen Erfahrungen in Heiligenblut zu berichten mit Bildern. Also freut euch auf einen schönen Einblick in meine neue Zwischenheimat", "Hier noch ein schönes Musikstück:"]
];

function Door(calendar, day) {
    this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.55;
    this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.75;
    this.x = (0.04 * calendar.width + ((day - 1) % 4) * (1.1 * this.width));
    this.y = -(0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height));

    this.content = function() { 
        var node = document.createElement("li");
        document.getElementById("adventDoors").appendChild(node);
        node.id = "door" + day;
        node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";

        var innerNode = document.createElement("a");
        document.getElementById("door" + day).appendChild(innerNode);
        innerNode.innerHTML = day;
        innerNode.href = "#";

        if( ( currentDate.getMonth() + 1 ) < 12 || currentDate.getDate() < day ) {
			innerNode.className = "disabled";
			innerNode.onclick = function() {
				return false;
			}
        } else {
            innerNode.onclick = () => showMessage(day);
        }   
    };
}

(function() {
    var doors = [];

    for(var i = 0; i < 24; i++) {
        doors[i] = new Door(myCal, i + 1);
        doors[i].content();
    }

    return doors;
})();

function showMessage(day) {
    const msg = messages[day - 1];
    
    // Find title (first element that doesn't contain "Schwierigkeit")
    let title = "";
    let textParts = [];
    let difficulty = "";
    
    for (let i = 0; i < msg.length; i++) {
        if (msg[i].includes("Schwierigkeit:")) {
            difficulty = msg[i];
        } else if (title === "") {
            title = msg[i];
        } else {
            textParts.push(msg[i]);
        }
    }
    
    const text = textParts.join("\n\n");

    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-text").textContent = text;

    // Difficulty parsing
    if (difficulty) {
        let stars = difficulty.split(":")[1].trim();
        document.getElementById("modal-difficulty").innerHTML =
            "<span>Schwierigkeit:</span> " +
            "<span class='stars'>" + stars + "</span>";
    } else {
        document.getElementById("modal-difficulty").innerHTML = "";
    }

    document.getElementById("modal").classList.add("open");
}

document.getElementById("modal-close").onclick = () => {
    document.getElementById("modal").classList.remove("open");
};

// Close modal when clicking outside content
document.getElementById("modal").onclick = (e) => {
    if (e.target.id === "modal") {
        document.getElementById("modal").classList.remove("open");
    }
};
document.getElementById('button').addEventListener('click', LaddaKurser);
document.getElementById('button2').addEventListener('click', LaddaErfarenheter);
document.getElementById('button3').addEventListener('click', LaddaPraktik);

function LaddaKurser() {
    const xml = new XMLHttpRequest();
    xml.open('GET', 'kurser.json', true)

    xml.onload = function(){
        if(this.status===200){
            const kurser =JSON.parse(this.responseText);
            let output = '';
            kurser.forEach(function(kurs){
                output+=`
                <br>
                <ul>
                    <li>Kurs: ${kurs.kurs}</li>
                </ul>
                `;
            });

            document.getElementById("kurser").innerHTML = output;
        }
    }
    xml.send();
}


function LaddaErfarenheter() {
    const xml = new XMLHttpRequest();
    xml.open('GET', 'arbetslivserfarenhet.json', true)

    xml.onload = function(){
        if(this.status===200){
            const erfarenheter =JSON.parse(this.responseText);
            let output = '';
            erfarenheter.forEach(function(erfarenhet){
                output+=`
                <br>
                <ul>
                    <li>Arbetsplats: ${erfarenhet.Arbetsplats}</li>
                    <li>Beskrivning: ${erfarenhet.Beskrivning}</li>
                    <li>Period: ${erfarenhet.Period}</li>
                </ul>
                `;
            });

            document.getElementById("arbetslivserfarenhet").innerHTML = output;
        }
    }
    xml.send();
}


function LaddaPraktik() {
    const xml = new XMLHttpRequest();
    xml.open('GET', 'praktik.json', true)

    xml.onload = function(){
        if(this.status===200){
            const Praktik =JSON.parse(this.responseText);
            let output = '';
            Praktik.forEach(function(praktik){
                output+=`
                <br>
                <ul>
                    <li>Praktikplats: ${praktik.Praktikplats}</li>
                </ul>
                `;
            });

            document.getElementById("praktik").innerHTML = output;
        }
    }
    xml.send();
}
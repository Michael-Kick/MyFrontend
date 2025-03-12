import React from 'react';

interface IBlogContent {
    blogTitle?:string;
    paragraphs?:string[];
}


const BlogContent = (props:IBlogContent) => (
    <div>
        <h1 className="text-4xl font-bold">Einrichtung eines PiVPN (WireGuard) auf dem Raspberry Pi</h1>
          <p className="text-gray-500 mt-2">Veröffentlicht am 10. März 2025</p>
          <div className="mt-4 text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold">📌 1. Statische IP-Adresse für den Raspberry Pi setzen</h2>
            <h3 className="text-xl font-medium">Warum?</h3>
            <p>Damit der Raspberry Pi immer unter derselben IP-Adresse erreichbar ist, was besonders nützlich für <strong>SSH-Zugriffe</strong> und <strong>Port-Forwarding</strong> ist.</p>
            
            <h3 className="text-xl font-medium">Statische IP-Adresse konfigurieren</h3>
            <ol className="list-decimal pl-6">
              <li>Öffne die Konfigurationsdatei:
                <pre className="bg-gray-100 p-2 rounded">sudo nano /etc/dhcpcd.conf</pre>
              </li>
              <li>Füge folgende Zeilen am Ende hinzu:
                <pre className="bg-gray-100 p-2 rounded">interface eth0
static ip_address=&lt;yourIP&gt;/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1</pre>
              </li>
              <li>Speichern und Raspberry Pi neu starten:
                <pre className="bg-gray-100 p-2 rounded">sudo reboot</pre>
              </li>
            </ol>
            
            <h2 className="text-2xl font-semibold">🛠️ 2. Installation von PiVPN (WireGuard)</h2>
            <p>Führe den folgenden Installationsbefehl aus:</p>
            <pre className="bg-gray-100 p-2 rounded">curl -L https://install.pivpn.io | bash</pre>
            
            <h2 className="text-2xl font-semibold">🌍 3. Dynamische DNS (DDNS) mit `ddclient` einrichten</h2>
            <p>Falls dein Internetanbieter keine statische IP vergibt, hilft DDNS, die öffentliche IP-Adresse zu aktualisieren.</p>
            <pre className="bg-gray-100 p-2 rounded">sudo apt install ddclient</pre>
            
            <h2 className="text-2xl font-semibold">🔄 4. Port-Forwarding im Router einrichten</h2>
            <p>Damit dein VPN erreichbar ist, muss eine Portweiterleitung auf deinem Router konfiguriert werden.</p>
            
            <h2 className="text-2xl font-semibold">📱 5. VPN-Nutzer erstellen & Verbindung testen</h2>
            <p>Erstelle einen neuen VPN-Benutzer mit:</p>
            <pre className="bg-gray-100 p-2 rounded">pivpn add</pre>
            <p>Dann kannst du die Verbindung in der WireGuard-App per QR-Code einrichten:</p>
            <pre className="bg-gray-100 p-2 rounded">pivpn -qr</pre>
            
            <h2 className="text-2xl font-semibold">🛠 6. Problembehandlung</h2>
            <p>Falls Probleme auftreten, können diese Befehle helfen:</p>
            <pre className="bg-gray-100 p-2 rounded">pivpn -d  # Detaillierte Diagnose
                pivpn -c  # Aktive Clients anzeigen</pre>
            
            <h2 className="text-2xl font-semibold">🎯 Fazit</h2>
            <p>✅ Du hast jetzt einen vollständigen <strong>PiVPN (WireGuard) Server</strong> auf deinem Raspberry Pi eingerichtet!</p>
            <p>🚀 <strong>Fertig! Dein eigenes VPN läuft jetzt!</strong></p>
          </div>
    </div>

);

export default BlogContent;
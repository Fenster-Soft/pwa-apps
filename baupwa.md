<html lang="de">
  <head>  

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="Dipl.-Ing. (FH) Guido Strasser" name="author">
 	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"> 
 	
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>PWA-Apps</title>
   
    <link href="bootstrap.min.css" rel="stylesheet">	 
  
    <style type="text/css">
	.auto-style1 {
		font-size: 21px;
		line-height: 1.4;
		margin-bottom: 20px;
	}
	.auto-style2 {
	line-height: 1.4;
	margin-bottom: 20px;
}
	</style>
  
  </head>
  
  <body>
   <!-- Fixierte Navbar -->
    <nav class="navbar navbar-inverse navbar-fixed-top" style="background-color: #334460; color: #FFFFFF; font-weight: bold; top: 15px;">
      <div class="container" style="color: #FFFFFF; ">
        <div class="navbar-header" style="margin-right: 5px; margin-left: 5px; text-align: left;">
          PWA-Apps&nbsp;  
		<img alt="Logo" height="100" src="images/Logint1.gif" width="100"></div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="index.html" style="color: #FFFFFF">Alle</a></li>                 
            
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="color: #FFFFFF">Kontakt<span class="caret"></span></a>
              <ul class="dropdown-menu">
				<li><a href="kontakt.html">Kontakt</a></li>				
			  </ul>
			</li>
			<li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="color: #FFFFFF">PWA's Infos<span class="caret"></span></a>
              <ul class="dropdown-menu">
				<li><a href="pwa.html">Über PWA's</a></li>
				<li><a href="baupwa.html">PWA's bauen</a></li>
			  </ul>
			</li>			
         </ul>
        </div>
      </div>
    </nav>	
	
	<div class="container" style="position: relative; top: 80px">
     <div class="starter-template">
	<h3 style="position: relative; ">PWA's bauen</h3>
	
	<p class="lead">Nachfolgend wollen wir eine kleine App zur Berechnung eines 
	Kreises erstellen. Hierfür benötigen wir als erstes eine HTML-Seite.</p>
		 <p class="lead">Der "Rohling" könnte so aussehen: </p>
		 
		 <p class="auto-style1" style="font-size: 14px">&lt;!DOCTYPE html&gt;<br>
		 &lt;html&gt;<br>&lt;head&gt;<br>&lt;meta charset="UTF-8"&gt;<br>&lt;meta content="PWA zur 
		 Berechnung eines Kreises" name="description"&gt;<br>&lt;meta name="viewport" 
		 content="width=device-width, initial-scale=1.0, viewport-fit=contain"&gt;<br>
		 &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;<br>&lt;meta 
		 content="de" http-equiv="Content-Language"&gt; <br>&lt;link rel="manifest" 
		 href="manifest.webmanifest"&gt;<br>&lt;link rel="shortcut icon" 
		 type="image/x-icon" href="favicon.ico"&gt; <br>&lt;title&gt;Geometrie 
		 Kreis&lt;/title&gt;<br>&lt;script src="kreis.js" 
		 type="text/javascript"&gt;&lt;/script&gt; <br>&lt;/head&gt;<br><br>&lt;body&gt;<br>&lt;!--Für 
		 die Auslösung des install prompt --&gt;<br>&lt;!-- ggf. mit button =&gt; &lt;button 
		 class="add-button"&gt;Install App&lt;/button&gt; --&gt;<br><br>&lt;script&gt;<br>// Code 
		 to handle install prompt on desktop<br>let deferredPrompt;<br>const 
		 addBtn = document.querySelector('.add-button');<br>addBtn.style.display 
		 = 'none'; <br><br>window.addEventListener('beforeinstallprompt', (e) =&gt; 
		 { <br>e.preventDefault(); <br>deferredPrompt = e; <br>
		 addBtn.style.display = 'block';<br><br>addBtn.addEventListener('click', 
		 (e) =&gt; { <br>addBtn.style.display = 'none'; <br>
		 deferredPrompt.prompt(); <br>
		 deferredPrompt.userChoice.then((choiceResult) =&gt; {<br>if 
		 (choiceResult.outcome === 'accepted') {<br>console.log('User accepted 
		 the Kreis prompt');<br>} else {<br>console.log('User dismissed the 
		 Kreis prompt');}<br>deferredPrompt = null;<br>});<br>});<br>});<br>&lt;/script&gt;<br>
		 <br>&lt;!--Deine Homepage --&gt; <br>&lt;div style="position: relative;"&gt; <br>
		 &lt;h3&gt;Deine Überschrift&lt;/h3&gt; <br>&lt;/div&gt;<br><br>&lt;!--Einbindung des 
		 Serviceworkers --&gt; <br>&lt;script&gt;<br>if ('serviceWorker' in navigator) {<br>
		 navigator.serviceWorker.register('./swkreis1.js')<br>.then(reg =&gt; 
		 console.log(reg))<br>.catch(err =&gt; console.error(err)); <br>} &lt;/script&gt;<br>
		 <br>&lt;/body&gt;<br><br>&lt;/html&gt;</p>
		 
		 <p class="lead">Im Beispiel werden das, für die PWA erforderliche 
		 "manifest.webmanifest" und die javascript Datei "kreis.js" schon 
		 eingebunden. Des Weiteren wird der "install prompt" eingeführt, der dem 
		 Browser mitteilt, dass die PWA installiert werden kann. Ein möglicher 
		 add-button wurde auskommentiert. </p>
		 <p class="lead">Der sichtbare Teil der Homepage wird hier nicht weiter 
		 ausgebaut. Dieser könnte auch responsive gestaltet werden. Im Beispiel 
		 wird anschließend noch der Serviceworker "swkreis1.js" eingebunden. Der 
		 Serviceworker übernimmt sozusagen die Schnittstelle zwischen PWA und 
		 Browser.</p>
		 <p class="lead">Nachfolgend für das Beispiel der Inhalt des 
		 Serviceworker "swkreis1.js":</p>
		 
		 <p class="auto-style1" style="font-size: 14px">
		 <span style="font-size: medium">&nbsp;self.addEventListener('fetch', () =&gt; void 0);</span><br>
		 <br>self.addEventListener('install', function(e) {<br>&nbsp;e.waitUntil(<br>&nbsp; 
		 caches.open('pwakreis1').then(function(cache) {<br>&nbsp;&nbsp; return 
		 cache.addAll([<br>&nbsp;&nbsp; '/',<br>&nbsp;&nbsp; '/index.html',<br>&nbsp;&nbsp; 
		 '/kreis.js', <br>&nbsp;&nbsp; '/logo192.png',<br>&nbsp;&nbsp; 
		 '/logo512.png',<br>&nbsp;&nbsp; '/logo624.png', <br>&nbsp;&nbsp; 
		 '/kreis.png',<br>&nbsp;&nbsp; '/favicon.ico'<br>&nbsp; ]);<br>&nbsp;})<br>&nbsp;);<br>
		 });<br><br>
		 self.addEventListener('fetch', function(e) {<br>&nbsp; 
		 console.log(e.request.url);<br>&nbsp;&nbsp; e.respondWith(<br>&nbsp; 
		 caches.match(e.request).then(function(response) {<br>&nbsp;return 
		 response || fetch(e.request);<br>&nbsp; })<br>&nbsp;);<br>});</p>
		 
		 <p class="lead">Danach werden die angegebenen Dateien in den cache 
		 namens "pwakreis1" geladen und so offline zur Verfügung gestellt.</p>
		 <p class="lead">Nun wird noch das "manifest.webmanifest" benötigt, das 
		 für das Beispiel nachfolgend wiedergegeben ist:</p>
		 
		 <p class="auto-style1" style="font-size: 14px">
		 <span style="font-size: medium">{</span><br>&nbsp;&nbsp; "name": "Geometrie: Kreis",<br>&nbsp;&nbsp; 
		 "short_name": "Kreis",<br>&nbsp;&nbsp; "description": "PWA Demo 
		 Berechnung Kreis", <br>&nbsp;&nbsp; "icons": [{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
		 "src": "logo512.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "type": 
		 "image/png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "sizes": "512x512"<br>
		 },<br>{&nbsp;&nbsp;&nbsp;&nbsp; "src": "logo192.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
		 "type": "image/png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "sizes": 
		 "192x192"<br>},<br>{&nbsp;&nbsp;&nbsp;&nbsp; "src": "logo624.png",<br>&nbsp;&nbsp;&nbsp;&nbsp; 
		 "type": "image/png",<br>&nbsp;&nbsp;&nbsp;&nbsp; "sizes": "624x624"<br>
		 }],<br>"background_color": "red",<br>"start_url": 
		 "/index.html",<br>"display": "standalone"<br>}</p>
		 
		 <p class="lead">Damit wären schon die notwendigen Einbindungen und 
		 Dateien zur PWA Erstellung erfolgt. Die Javascrit-Datei "kreis.js" 
		 finden Sie in der Zip-Datei zum downloaden. </p>
		 <p class="lead">Bitte beachten sie das Route-Verzeichnis, in dem die 
		 Dateien im Beispiel liegen müssen.</p>
		 <p class="lead">Die Beispieldateien können unter diesem Link als 
		 <a href="/pwa-apps/kreis.zip">kreis.zip</a> heruntergeladen werden.</p>
		 <h3>Viel Spaß beim ausprobieren !</h3>
		  <p class="lead">&nbsp; &nbsp;</p>
		  
	
	<h3 style="position: relative; ">Diese Seite befindet sich im Aufbau</h3>
	  <p style="position: relative; font-size: medium; margin-bottom: 50px;"><span style="font-size: medium">Stellen Sie ihre PWA in unser Portal.<br><br> 
	  </span>
	  <a style="text-decoration: none; color: rgb(204, 0, 0);" href="mailto:info@pwa-apps.de?subject=PWA Vorschlag, etc.&body=Bitte Name und Anschrift nicht vergessen.">
	  !! Kontaktieren Sie uns !!</a><br></p>
      
      
      
	  <p class="lead" style="font-size: small; position: relative; top: 100px; bottom: 50px;">Änderungen an unserer Software, Dokumentation und Internetseite behalten wir uns vor. Wir nutzen Google Analytics. 
      Bitte beachten Sie diesbezüglich die Hinweise auf unserer Kontaktseite!<br></p>
      <p class="lead" style="font-size: small; position: relative; top: 100px; bottom: 50px;">&nbsp;</p>
      
		
    

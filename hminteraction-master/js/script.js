// import * as THREE from 'https://www.goethe.de/pro/games/oas/hybridbynature/js/three.module.js';
// import * as THREE from '/js/three.module.js';
import * as THREE from '/js/three.module.js';


$(document).ready(function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    var renderer = new THREE.WebGLRenderer({ antialias: true,alpha: true });
    renderer.setSize(width, height);
    document.getElementById('canv_2').appendChild(renderer.domElement);
    var scene = new THREE.Scene();

      const color = 0x06f3bc;  // white
      const near = 2000;
      const far = 3500;
      // scene.fog = new THREE.Fog(color, near, far);
    var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}


























var db = [
    [
        ['Bat-Erdene Batchuluun'],
        ['H.M. Home'],
        ['baterdenebatchuluun_1.jpg', 'baterdenebatchuluun_2.jpg', 'baterdenebatchuluun_3.jpg', 'baterdenebatchuluun_4.jpg'],

        ['Bat-Erdene Batchuluun is a multi-artist, working mainly in different capacities with film, also creating multimedia installations, He has presented several works internationally and was educated at the Mongolian Academy of Fine Arts in Ulaanbaatar.'],

        ['Bat-Erdene Batchuluun arbeitet als Multi-Künstler hauptsächlich in verschiedenen Bereichen der Filmkunst und kreiert auch Multimedia-Installationen. Mehrere seiner Werke wurden international präsentiert. Seine Ausbildung absolvierte er an der Mongolischen Hochschule für Bildende Künste in Ulan Bator.'],

        ['../H-M-Home/index.html'],
        ['Bat Erdene Batchuluun is a multi-disciplinary artist from Mongolia who works with film and also creates media installations. His video H.M. Home is a poetic reflection of natural and man-made structures juxtaposed and interwoven. His camera work shifts from extreme close-ups, connecting the micro to the macro. Batchuluun works with video effects, overlapping frames and reflections, and a clear composition of images in the shape of a cross. Images of stones, earth, water, sky and landscape are juxtaposed with monotonous blocks of houses, technical junk and car dumps. The poetic video composition is accompanied by a mix of natural sounds and electronically manipulated sound elements. In this way, he creates hypnotic visual worlds in which he makes the encounter between nature and man, man and machine, and their structural interconnectedness vivid. '],
        ['Bat Erdene Batchuluun ist ein multi-disziplinärer Künstler aus der Mongolei, der mit Film arbeitet und auch Medieninstallationen schafft. Sein Video H.M. Home ist eine poetische Reflexion natürlicher und menschengemachter Strukturen, die einander gegenübergestellt und miteinander verwoben werden. Seine Kameraführung wechselt von extremen Nahsichten, verbindet die Mikro- mit der Makroebene. Batchuluun arbeitet mit Verfremdungseffekten, sich überlagernden Frames und Spiegelungen und einer klaren Bildkomposition in der Form eines Kreuzes. Bilder von Steinen, Erde, Wasser, Himmel und Landschaft werden einförmigen Häuserblocks, technischem Schrott und Autodeponien gegenübergestellt. Die poetische Videokomposition wird begleitet von einem Mix aus natürlichen Geräuschen und elektronisch verfremdeten Klangelementen. Er schafft damit hypnotisierende Bildwelten, in der er das Aufeinandertreffen von Natur und Mensch, Mensch und Maschine und deren strukturelle Verwobenheit anschaulich werden lässt. '],
        ['baterdenebatchuluun.jpg'],
        ['']
    
    ],[

        ['Chris Cheung Hon Him (aka h0nh1m)'],
        ['A Chronicle of Stones'],
        ['chrischeung_1.jpg',
        'chrischeung_2.jpg',
        'chrischeung_3.jpg'],

        ['Chris Cheung Hon Him (aka h0nh1m; b.1983) is best known for installation art and audiovisual performance, whose artistic expression depends upon electronic, sound, image and creative technology in new media. h0nh1m’s reverence for Eastern and Western philosophy are central to his oeuvre, which he blends traditional ideology and futuristic imagination to create immersive soundscape, generative art and data art.<br>\
            <br>\
            The RadianceScape project he initated in 2014 has garnered critical acclaim and was featured in Ars Electronica, FILE Festival, EMAF and other festivals. The live performance were toured in Sónar Festival and WRO Art Biennale in 2017. The project won ZKM – Giga Hertz Awards in 2020. And his calligraphy and ink installation (No Longer Write – Mochiji / InkFlux) are collected in Taoyuan Museum of Fine Arts and UOB Art collection respectively. Lately, InkFlux is selected in 24th Japan Media Arts Festival.'],

        ['Chris Cheung Hon Him (Künstlername h0nh1m; geb.1983) ist vor allem für seine Installationen und audiovisuellen Performances bekannt, deren künstlerische Ausdrucksformen auf elektronischen, Klang-, Bild- und Kreativtechnologien im Bereich der neuen Medien beruhen. Im Mittelpunkt des Werks von h0nh1m steht seine Verehrung für östliche und westliche Philosophien, die er mit traditionellen Weltanschauungen und futuristischen Vorstellungswelten verknüpft, um immersive Klanglandschaften, generative Kunst und Datenkunst zu erzeugen.<br>\
            <br>\
            Im Jahre 2014 startete er sein Projekt RadianceScape, das bei der Kritik auf Beifall stieß und auf Festivals wie Ars Electronica, FILE, EMAF und anderen gezeigt wurde. Die Live-Performance war 2017 auf dem Sónar Festival und der WRO Art Biennale zu sehen. Das Projekt gewann 2020 den Giga-Hertz-Preis des ZKM. Außerdem wurde seine Kalligraphie- und Tinten-Installation (No Longer Write – Mochiji / InkFlux) in die ständigen Sammlungen des Taoyuan Museum of Fine Arts und der UOB Art Gallery aufgenommen. Jüngst wurde InkFlux zur Teilnahme am 24. Japan Media Arts Festival ausgewählt.\
        '],
    
        ['../A_Chronicle_of_Stones/index.html'],
        ['“A Chronicle of Stones”, created by Chris Cheung Hon Him (aka h0nh1m), is an Artificial Intelligence (AI) artwork in line with the artist’s research of combining traditional ideology and futuristic imagination. “A Chronicle of Stones” is inspired by “Dream of the Red Chamber”, one of Four Great Classical Novels of Chinese Literature written in Qing dynasty about the forgotten flying stone in the myth of Nüwa (the mother goddess of Chinese mythology). “A Chronicle of Stones” is about an archaeological artificial nature with the visual representation trained by the data of the traditional aesthetic of scholar stone with machine learning algorithm called Generative Adversarial Networks (GANs). These hybrid stones are in between the past and the future, and between the real and artificial. '],
        ['"A Chronicle of Stones" von Chris Cheung Hon Him (auch bekannt als h0nh1m), ist ein Kunstwerk der Künstlichen Intelligenz (KI), das dem Interesse des Künstlers an der Verbindung von Tradition mit futuristischer Fantasie entspricht. "A Chronicle of Stones" ist inspiriert von "Dream of the Red Chamber", einem der vier großen klassischen Romane der chinesischen Literatur der Qing-Dynastie. Er handelt vom vergessenen fliegenden Stein im Mythos von Nüwa (der Muttergöttin der chinesischen Mythologie). "A Chronicle of Stones" zeigt uns die Darstellung einer archäologischen künstlichen Natur, die anhand der visuellen Daten von traditionellen Gelehrtensteinen mit einem maschinellen Lernalgorithmus namens Generative Adversarial Networks (GANs) erzeugt werden. Diese hybriden Steine befinden sich zwischen der Vergangenheit und der Zukunft, zwischen dem Realen und dem Künstlichen.'],
        ['chrischeung.jpg'],
        ['']
    
    ],[

        ['Stine Deja'],
        ['Dawn Chorus'],
        ['stinedeja_1.png',
        'stinedeja_2.png',
        'stinedeja_3.png',
        'stinedeja_4.png',
        'stinedeja_5.jpg'],

        ['Born in Denmark in 1986 and currently based in London/Copenhagen, Stine Deja received her MA from Royal College of Art in 2015 and her BA in interaction design from Kolding School of Design in 2012. Deja’s work often exists in the borderland between the real and the virtual. She creates video, sculpture and immersive installations where moving image pieces spill out into the physical space that they are presented in. Her shows offer a participatory experience, where the viewer is forced into the ‘world’ of the moving image both on the screen and around it. Deja encourages people to rethink and reimagine where we are and where we are going next, she borrows from familiar tropes and aesthetics to build upon peoples’ pre-existing attitudes and expectations in order to disrupt and skew them. '],

        ['Die 1986 in Dänemark geborene Künstlerin Stine Deja lebt und arbeitet zurzeit in London und Kopenhagen. Sie absolvierte 2015 ihren Master am Royal College of Art und 2012 ihren Bachelor an der Kolding School of Design. Deja lotet in ihren Werken wiederholt die Grenzen zwischen realen und virtuellen Welten aus. Sie schafft Videokunst, Skulpturen und immersive Installationen, in denen bewegte Teile von Bildern in den physischen Raum übergreifen, in dem sie präsentiert werden. Ihre Shows haben eine partizipative Komponente. Das Publikum wird in die „Welt“ der bewegten Bilder sowohl auf dem Bildschirm als auch in seiner Umgebung entführt. Deja ermutigt Menschen, ihr Hier und Jetzt und ihren weiteren Lebensweg zu überdenken und neu zu imaginieren. Dabei bedient sie sich vertrauter Muster und ästhetischer Ausdrucksformen, um bestehende Verhaltensweisen und Erwartungen von Menschen weiterzuentwickeln und auf den Kopf zu stellen.'],

        ['../Dawn_Chorus/index.html'],
        ['In Dawn Chorus, Stine Deja celebrates the dawn of a new age or emerging species. We see and hear the cracking of a melting block of ice, revealing a baby carriage with a screen and a digital creature inside. The title is a reference to the song of birds in the morning with which they greet the new day. The stroller references youth and the learning inherent in new life. In her video, Deja reflects on transhumanist notions of a new life - for example, through a digital upload or through cyro-preservation. Accompanied by dramatic vocals glorifying this new beginning, we witness the first coming together of this new species as a community. Despite the sterility of the artificial setting, Deja thus emphasizes the possibility of learning and exchange beyond the usual clichés of individualistic machines towards a technologically complex and complementary organization that in turn reflects human rituals and models of community. '],
        ['In „Dawn Chorus“ zelebriert Stine Deja das Anbrechen eines neuen Zeitalters und einer neu entstehenden Spezies. Wir sehen und hören das Knacken eines schmelzenden Eisblocks, der einen Kinderwagen mit einem Bildschirm und einem sich darin befindlichen digitalen Lebewesen zum Vorschein bringt. Der Titel ist eine Referenz auf den Gesang der Vögel am Morgen, mit dem sie den neuen Tag begrüßen. Der Kinderwagen verweist auf die Jugend und das Lernen, das neuem Leben inhärent ist. In ihrem Video reflektiert Deja transhumanistische Vorstellungen eines neuen Lebens – beispielsweise durch einen digitalen Upload oder durch Cyro-Konservierung. Unterlegt mit dramatischem Gesang, der diesen Neuanfang glorifiziert, erleben wir das erste Zusammenfinden dieser neuen Spezies zu einer Gemeinschaft. Trotz der Sterilität des künstlichen Settings betont Deja damit die Möglichkeit des Lernens und Austauschs jenseits der üblichen Klischees von individualistischen Maschinen, hin zu einer technologisch komplexen und komplementären Organisation, die wiederum menschliche Rituale und Gemeinschaftsmodelle widerspiegelt.'],
        ['stinedeja.jpeg'],
        ['']
    
    ],[

        ['Entangled Others (Sofia Crespo and Feileacan McCormick)'],
        ['Beneath the Neural Waves'],
        ['sofiamariacrespo_1.png',
        'sofiamariacrespo_2.png',
        'sofiamariacrespo_3.png',
        'sofiamariacrespo_4.png'],

        ['Entangled Others is the shared studio practice of artists Feileacan McCormick and Sofia Crespo. Their work focuses upon ecology, nature, and generative arts, with an emphasis on giving the more-than-human new forms a presence and life in digital space. This involves exploring questions of relationship, biodiversity, and awareness through biology-inspired technologies. In turn, they highlight how through conscious efforts, new technology can be used to bring attention and awareness to the unseen that we are tightly interwoven with. <br>\
        <br>\
        Sofia Crespo is an artist working with a huge interest in biology-inspired technologies. One of her main focuses is the way organic life uses artificial mechanisms to simulate itself and evolve, this implying the idea that technologies are a biased product of the organic life that created them and not a completely separated object.'],

        ['Entangled Others ist die gemeinsame Studiopraxis der Künstler*innen Feileacan McCormick und Sofia Crespo. Im Mittelpunkt ihrer Arbeit stehen Ökologie, Natur und generative Künste. Sie wollen insbesondere neuen übermenschlichen Formen eine Präsenz und ein Leben im digitalen Raum geben. Zu diesem Zweck nutzen sie von der Biologie inspirierte Technologien, um sich mit Fragen von Beziehungen, Artenvielfalt und Bewusstsein auseinanderzusetzen. Durch einen gezielten Einsatz neuer Technologien wollen sie auf diese Weise Aufmerksamkeit und Bewusstsein für das Unsichtbare schaffen, das eng mit unserem Dasein verflochten ist.<br>\
        <br>\
        Sofia Crespo interessiert sich in ihrem künstlerischen Schaffen ganz besonders für Technologien, die von der Biologie inspiriert wurden. Dabei befasst sie sich vor allem auch mit der Frage, wie sich das organische Leben künstlicher Mechanismen bedient, um sich selbst zu simulieren und zu entwickeln. Damit impliziert sie, dass Technologien ein zwiespältiges Produkt des organischen Lebens sind, von dem sie geschaffen wurden, und kein vollkommen losgelöstes Objekt.'],
    
        ['../Beneath_the_Neural_Waves/index.html'],
        ['With the interactive website Beneath the Neural Waves, the artist duo Entangled Others immerses us in a digital aquatic ecosystem shaped and transformed by artificial intelligence (AI). The seabed is populated by AI-generated artificial life that emerges by clicking in form of generative text descriptions, images and videos, and 3D structures. The work is a continuation of a series of works that explore the complex interconnectedness of natural life and how it is interpreted by an AI. Users are invited to navigate this artificial space and discover unfamiliar and fascinating creatures. At the same time, the artists illustrate the limitation of this dreamy AI world, as AI learns via existing data and new things only ever emerge out of the already known. The work is therefore a mirror of our (limited) representation of the non-human world.'],
        ['Mit der interaktiven Webseite „Beneath the Neural Waves“ lässt uns das Künstlerduo „Entangled Others“ in ein digitales aquatisches Ökosystem eintauchen, das von künstlicher Intelligenz (KI) geformt und verändert wird. Der Meeresboden ist von KI-generiertem, künstlichem Leben bevölkert und taucht durch Anklicken in Form von generativen Textbeschreibungen, Bildern und Videos sowie 3D-Strukturen auf. Die Arbeit setzt eine Werkserie fort, die sich mit den komplexen Verflechtungen des natürlichen Lebens beschäftigt und der Art und Weise, wie diese von einer KI interpretiert werden. Die User*innen sind eingeladen, durch diesen künstlichen Raum zu navigieren und neue, faszinierende Kreaturen zu entdecken. Zugleich wird die Begrenztheit dieser „erträumten“ KI-Welt deutlich. Da KI aus vorhandenen Daten entsteht Neues immer nur basierend auf Bekanntem. Die Arbeit ist gleichsam ein Spiegel unserer (begrenzten) Darstellung der nicht-menschlichen Welt.  '],
        ['entangledothers.jpg'],
        ['']
    
    ],[

        ['Exonemo'],
        ['Distance between two'],
        ['exonemo_1.png',
        'exonemo_2.png'],


        ['The Japanese artist unit "exonemo" (by SEMBO Kensuke and AKAIWA Yae) was formed in 1996 on the Internet. Their experimental projects are typically humorous and innovative explorations of the paradoxes of digital and analog computer networked and actual environments in our lives. Their The Road Movie won the Golden Nica for Net Vision category at Prix Ars Electronica 2006.<br>\
        They have been organizing the IDPW gatherings and "Internet Yami-Ichi" since 2012. They live and work in New York since 2015.'],

        ['Die japanische Künstler*innengruppe „exonemo“ (von SEMBO Kensuke und AKAIWA Yae) wurde 1996 im Internet gegründet. Ihre experimentellen Projekte zeichnen sich durch humorvolle und innovative Erkundungen der Absurditäten unserer digitalen und analogen, computergenerierten und tatsächlichen Lebensumgebungen aus. Ihre Installation The Road Movie wurde 2006 mit dem Goldenen Nica Prix Ars Electronica in der Kategorie Net Vision ausgezeichnet.<br>\
        Seit 2012 organisieren sie den Internet-Schwarzmarkt „Internet Yami-Ichi“. Sie leben und arbeiten seit 2015 in New York.'],

        ['https://exonemo.com/db2/'],
        ['The Japanese artist duo creates works that explore the intersection of the physical world and networked computers and digital environments, often through humorous staging. In their new work “Distance between two”, they invite the audience to get in touch with friends or even random strangers via the project website. For a short time a window strongly reminiscent of the shape of a smartphone opens and allows us to have digital encounters. The work can be understood as a direct reference to the pandemic in which encounters with others were reduced to a minimum and the computer screen often served as the only window to families and friends. In “Distance between two” the proximity of the screens circling each other is reduced further and further until the "window" finally closes again. The distance remains - no matter how close we get to each other on the screen.'],
        ['Das japanische Künstlerduo schafft Werke, die die Schnittstellen von physischer Welt und vernetzten Computern und digitalen Umgebungen, oft durch humorvolle Inszenierungen – erforschen. In ihrer neuen Arbeit „Distance between two“ laden sie das Publikum dazu ein, über die Projektwebseite mit Freunden oder zufälligen p Fremden in Kontakt zu treten. Für eine kurze Zeit öffnet sich ein Fenster, das stark an die Form eines Smartphones erinnert und ermöglicht uns digitale Begegnungen. Die Arbeit lässt sich als direkte Referenz an die Pandemie verstehen, in der Begegnungen mit anderen auf ein Minimum reduziert waren und oft nur der Computerbildschirm das Fenster zu Familien und Freunden war. In „Distance between two“ wird die Nähe der einander umkreisenden Bildschirme immer weiter reduziert, bis sich das „Fenster“ letztlich wieder schließt. Die Distanz bleibt – ganz gleich, wie nahe wir einander auf dem Bildschirm kommen.'],
        ['exonemo.png'],
        ['Photo by Niko']
    
    ],[

        ['Mario Klingemann'],
        ['Common Daemoniator'],
        [
            'marioklingemann_1.png',
            'marioklingemann_2.png',
            'marioklingemann_3.png',
            'marioklingemann_4.png',
            'marioklingemann_5.png',
            'marioklingemann_6.png',
        ],
        ["Mario Klingemann is an artist working with algorithms and data. He investigates the possibilities that machine learning and artificial intelligence offer in understanding how creativity, culture and their perception work. An important part of this investigation is his work with digital cultural archives like the British Library's, the Internet Archive's or the collection of the Google Arts & Culture where he currently is artist in residence. He is a regular speaker on international art, design and media conferences, winner of the 2015 creative award of the British Library and his works have been shown at the Ars Electronica Festival, the Photographers Gallery, London, the Centre Pompidou, Paris, the Met and the MoMA, New York."],

        ['Mario Klingemann ist ein Künstler, der mit Algorithmen und Daten arbeitet. Er erforscht die Möglichkeiten, die maschinelles Lernen und künstliche Intelligenz bieten, um zu verstehen, wie Kreativität, Kultur und deren Wahrnehmung funktionieren. Ein wichtiger Teil dieser Untersuchung ist seine Arbeit mit digitalen Kulturarchiven wie der British Library, dem Internet Archive oder der Sammlung von Google Arts & Culture, wo er derzeit Artist in Residence ist. Er ist regelmäßiger Redner auf internationalen Kunst-, Design- und Medienkonferenzen, Gewinner des Kreativpreises 2015 der British Library und seine Werke wurden beim Ars Electronica Festival, in der Photographers Gallery, London, im Centre Pompidou, Paris, im Met und im MoMA, New York, gezeigt.'],

        ['https://common-daemoniator.glitch.me/'],
        ['With his interactive website „Common Daemoniator“, based on the interactive installation of the same name, Mario Klingemann invites us to change the determining parameters of an Artificial Intelligence (AI) in real time and thus to create new "daemons" again and again as if in a laboratory. AI can now create realistic human faces of people who do not exist. „Common Daemoniator“ presents itself as a 21st century laboratory whose output is in constant flux. The work is a multi-user experience meaning it can be influenced by different people at the same time. The audience becomes the puppeteer and literally pulls the digital strings, giving rise to demonic creatures or unseen faces. Klingemann points out that Deep Learning is often described as a modern form of alchemy and designs the page accordingly with seemingly magical symbols. In his work he makes algorithmic processes accessible and vivid for us, opening up a latent space for us that surprises us with ever new pictorial inventions.'],
        ['Mit seiner interaktiven Webseite „Common Daemoniator“, die auf einer gleichnamigen interaktiven Installation beruht, lädt uns Mario Klingemann ein, die bestimmenden Parameter einer Künstlichen Intelligenz (KI) in Echtzeit zu verändern und damit wie in einem Laboratorium immer wieder neue „Dämonen“ zu erschaffen. KI kann mittlerweile realistische menschliche Gesichter von Personen zu erzeugen die nicht existieren. „Common Daemoniator“ präsentiert sich als Labor des 21. Jahrhunderts, dessen Ergebnis sich im ständigen Fluss befindet. Die Arbeit ist eine Multi-User*innen-Experience, d.h. sie kann von verschiedenen Personen gleichzeitig beeinflusst werden. Das Publikum wird zum Puppenspieler. Es zieht im wahrsten Sinne des Wortes die digitalen Fäden und lässt dämonische Kreaturen oder bisher ungesehene Gesichter entstehen. Klingemann verweist darauf, dass Deep Learning oft als eine moderne Form der Alchemie beschrieben wird und gestaltet die Seite entsprechend mit scheinbar magischen Symbolen. Er macht in seiner Arbeit algorithmische Prozesse für uns zugänglich und anschaulich und öffnet für uns einen latenten Raum, der uns mit immer neuen Bildfindungen überrascht.'],
        ['marioklingemann.jpg'],
        ['']
    
    ],[

        ['Vvzela Kook'],
        ['Confidential Records: Overwrite'],
        ['vvzelakook_1.jpg',
        'vvzelakook_2.jpg'],

        ["Vvzela Kook is a new media artist who mainly works in audio-visual mediums, including performance, theatre, computer graphics and drawing. Kook’s video works combine technology with her artistic practice to reproduce and convert urban cityscapes into an integrated virtual experience, guiding the audience on a cybernetic journey. The condensed textures in her works connect with multiple sensual levels in our perception and reintroduce the unexplored potential of video as a medium.The narrative plays an important role in her work, the transmedia storytelling is part of the artistic concept. Especially the mixing of delicate drawings, 3D printing and video game optics in her videos show the wide range of media and materials the artist uses to visually translate her research-based projects."],

        ["Vvzela Kook ist Künstlerin für Neue Medien und arbeitet in ihren audiovisuellen Werken mit Performances, Theaterelementen, Computergrafiken und Zeichnungen. In ihren Videoarbeiten kombiniert sie ihr künstlerisches Schaffen mit technischen Mitteln, um urbane Landschaften zu reproduzieren und in ein integriertes virtuelles Erlebnis zu konvertieren, das ihr Publikum mit auf eine kybernetische Reise nimmt. Mit Hilfe der verdichteten Strukturen ihrer Werke spricht sie mehrere Sinnesebenen in unserer Wahrnehmung an und erkundet das ungenutzte Potenzial des Mediums Video. Das Narrative spielt in ihrer Arbeit eine wichtige Rolle, das transmediale Storytelling ist Teil des künstlerischen Konzepts. Besonders die Vermischung von zarten Zeichnungen, 3D-Drucken und Videospiel-Optik in ihren Videos zeigt das breite Spektrum der Medien und Materialien, die die Künstlerin nutzt, um ihre recherchebasierten Projekte visuell umzusetzen."],

        ['../ConfidentialRecords/index.html'],
        ["“Confidential Records: Overwrite” is the third part of the “Confidential Records” series following “Dual Metropolitans” (2018) and “Execution” (2019) by Vvzela Kook based in Hong Kong. It is an imaginary world called “Underground Kowloon Walled City” which participants are invited to walk through virtually. Kowloon Walled City, known for its various historical, sociopolitical, and cultural contexts was a part of existing Hong Kong but was demolished. Underground Kowloon Walled City is questioning Artificial Intelligence (AI) governed cities inspired by Ray Kurzweil's technological singularity, the point at which machine intelligence surpasses human intelligence and radically transforms our reality. The virtual walk-through in this augmented urban scape blurs the boundaries of the real and virtual through maps, photos, and animations. It provides an opportunity to reflect on a new relationship between body and mind (memory) and human and machine."],
        ['“Confidential Records: Overwrite” ist nach “Dual Metropolitans” (2018) und “Execution” (2019) der dritte Teil aus der Reihe “Confidential Records” der in Hongkong lebenden und arbeitenden Künstlerin Vvzela Kook. Es geht darin um eine Fantasiewelt mit dem Namen „Underground Kowloon Walled City“, in die das Publikum zu einem virtuellen Spaziergang eingeladen wird. Tatsächlich gab es in Hongkong einmal die aufgrund ihrer zahlreichen historischen, soziopolitischen und kulturellen Zusammenhänge bekannte Kowloon Walled City, die jedoch abgerissen wurde. In Underground Kowloon Walled City hinterfragt die Künstlerin das Konzept einer von künstlicher Intelligenz (KI) gesteuerten Stadt und lässt sich dabei vom Konzept der technologischen Singularität von Ray Kurzweil inspirieren. Der Begriff beschreibt den Zeitpunkt, an dem die maschinelle die menschliche Intelligenz übertrifft und sich unsere Realität radikal verändert. Der von ihr kreierte virtuelle Spaziergang durch eine erweitere städtische Landschaft aus Karten, Fotos und Animationen, in der die Grenzen zwischen Realem und Virtuellem verschwimmen, bietet Gelegenheit, über ein neues Verhältnis zwischen Körper und Geist (Erinnerung) und Mensch und Maschine nachzudenken.'],
        ['vvzelakook.jpg'],
        ['Photo credit Yi Yi Lily Chan']

    
    ],[

        ['Loopntale'],
        ['Garden of Rules'],
        ['loopntale_1.png',
        'loopntale_2.png',
        'loopntale_3.png'],

        ["Loopntale is a game designer and artist duo consisting of Youngju Kim and Hoyoun Cho based in Seoul. Their practice exists across video games, interactive simulation, and collaborative storytelling utilizing social media. They explore video games as an artistic medium by experimenting with game mechanics, storytelling, and artificial intelligence. Their works were presented at Zer01ne, Paradise Art Lab, FACT, Hyundai Motorstudio. They also organize game-making workshops focusing on alternative video games."],

        ["Loopntale sind ein Spieledesigner*innen- und Künstler*innen-Duo aus Seoul, die mit Videospielen, interaktiven Simulationen und kooperativem Storytelling in sozialen Medien arbeiten. Sie erkunden Videospiele als künstlerisches Medium, indem sie mit Spielmechaniken, Storytelling und künstlicher Intelligenz experimentieren. Ihre Werke waren bei ZER01NE, Paradise Art Lab, FACT, Hyundai Motorstudio zu sehen. Sie veranstalten außerdem Workshops zur Spieleentwicklung mit einem Fokus auf alternativen Videospielen."],

        ['https://gardenofrules.com/ '],
        ["“Garden of Rules” created by Korean duo Loopntale is a simulation game using the interaction between humans and artificial intelligence agents. Participants, along with an AI agent, are invited to a virtual space full of plants abandoned in commercial buildings during the pandemic lockdown. When participants follow the AI ​​agent's messages and click delivery boxes and text boxes, changes occur, but it is difficult to figure out the exact causal relationship. While humans communicate with plants through visible interfaces in a rather superficial level of interaction, the AI agents seem to engage with plants through deep invisible control. “Garden of Rules” raises awareness of the unexposed nature of the current digital platforms and broadens our understanding of the relationship between human, nature, and technology."],
        ['Mit “Garden of Rules” hat das koreanische Duo Loopntale ein Simulationsspiel über die Interaktion zwischen Menschen und künstlicher Intelligenz (KI) entwickelt. Die Teilnehmenden werden während des Pandemie-Lockdowns zusammen mit einer KI in einen virtuellen Raum voller Pflanzen gebeten, der sich in einem leerstehenden Gewerbegebäude befindet. Immer wenn die Teilnehmenden den Hinweisen der KI folgen und auf Handlungs- und Textfelder klicken, geschieht etwas. Allerdings lässt sich der genaue Zusammenhang schwer nachvollziehen. Während die Menschen und die Pflanzen über sichtbare Schnittstellen auf einer eher oberflächlicheren Interaktionsebene miteinander kommunizieren, verfügt die KI offenbar über eine ausgeklügelte unsichtbare Steuerung, um mit den Pflanzen in Kontakt zu treten. Mit “Garden of Rules” soll ein Bewusstsein für die unbekannten Eigenschaften von digitalen Plattformen geschaffen und das Verständnis des Publikums für die Beziehung zwischen Mensch, Natur und Technologie erweitert werden.'],
        ['loopntale.png'],
        ['']
    
    ],[

        ['Sebastian Schmieg'],
        ['«How To»: How To Give Your Best Self Some Rest / Wie man seinem besten Ich etwas Ruhe gönnt'],
        ['sebastianschmieg_1.jpg',
        'sebastianschmieg_2.jpg'],

        ['Sebastian Schmieg investigates the algorithmic circulation of images, texts, and bodies. He creates playful interventions that penetrate the shiny interfaces of our networked society and explore the realities that lie behind them. In particular Schmieg focuses on labor, algorithmic management, and artificial intelligence. He works in a wide range of media including video, website, installation, artist book, custom software, lecture performance, and delivery service.<br>\
            Schmieg’s work has been exhibited internationally at The Photographers’ Gallery London, MdbK Leipzig, HEK Basel, and Chronus Art Center Shanghai. He is based in Berlin and is professor for interface design at HTW Dresden.'],

        ['Sebastian Schmieg untersucht in seinen Arbeiten die algorithmische Zirkulation von Bildern, Texten und Körpern. Er schafft spielerische Interventionen, mit denen er die glänzenden Schnittstellen unserer vernetzten Gesellschaft durchdringt und die dahinterliegenden Realitäten erkundet. Im Mittelpunkt von Schmiegs Werken stehen Arbeit, algorithmisches Management und künstliche Intelligenz. Er setzt ein breites Spektrum von Medien wie Videos, Websites, Installationen, Künstlerbücher, Lecture Performances und Lieferdienste ein.<br>\
            Schmiegs Werke wurden international ausgestellt, unter anderem in der Photographers’ Gallery in London, im MdbK in Leipzig, im HEK Basel und im Chronus Art Center in Shanghai. Er lebt in Berlin und ist Professor für Interfacedesign an der HTW Dresden.'],

        ['https://how-to-give-your-best-self-some.rest/'],
        ['In many of his works, Sebastian Schmieg addresses the topic of man and machine, or rather man and software, and asks what the increasing digitalization of the living world means for the individual. Digital work, self-optimization, machine vision and writing as well as interventions within algorithmic systems are core to his artistic exploration. In his new work, «How To»: How To Give Your Best Self Some Rest / How To Give Your Best Self Some Rest, visitors will be introduced to the “aesthetics of detachment” as a strategy they could use themselves. Rather than lamenting that machines are becoming human-like or that people are hidden behind the surfaces of glossy apps, Schmieg humorously explores and affirms this blur.'],
        ['In vielen seiner Werke thematisiert Sebastian Schmieg das Thema Mensch und Maschine oder besser Mensch und Software und fragt, was die zunehmende Digitalisierung der Lebenswelt für den Einzelnen bedeutet. Digitale Arbeit, Selbstoptimierung, maschinelles Sehen und Schreiben sowie Interventionen innerhalb algorithmischer Systeme sind Kern seiner künstlerischen Auseinandersetzung. In seiner neuen Arbeit «How To»: How To Give Your Best Self Some Rest / Wie man seinem besten Ich etwas Ruhe gönnt werden die Besucher*innen in die „Ästhetik der Loslösung“ eingeführt, die sie selbst als Strategie anwenden können. Anstatt zu beklagen, dass Maschinen menschenähnlich werden oder dass Menschen hinter den Oberflächen von Hochglanz-Apps verschwinden, erforscht und bejaht Schmieg diese Unschärfe auf humorvolle Art und Weise.'],
        ['sebastianschmieg.jpg'],
        ['']
    
    ],[
        ['Ruini Shi'],
        ['Funeral Play'],
        ['ruinishi_1.png',
        'ruinishi_2.png',
        'ruinishi_3.png'],

        ["Ruini Shi is an animation director based in London, currently pursuing her PhD on the possibilities presented by the confluence of crypto and animation. Combining film language and technological aesthetics, she creates narratives that interrogate the compatibility between humanity and emerging technologies. Her first film Strings won the Award of Distinction at Prix Ars Electronica 2019. She was nominated for the 2019 Rapoport Award for Women in Art and Technology."],

        ["Ruini Shi arbeitet als Animationsregisseurin in London zurzeit an ihrer Doktorarbeit über die Möglichkeiten des Zusammenspiels von Krypto und Animation. Sie verbindet Filmsprache und technologische Ästhetik zu Erzählungen, die die Kompatibilität zwischen Menschlichkeit und neuen Technologien hinterfragen. Ihr erster Film Strings erhielt auf der Ars Electronica 2019 den Award of Distinction. Im Jahre 2019 wurde sie für den Rapoport Award for Women in Art and Technology nominiert."],

        ['http://www.funeralplay.com'],
        ["“Funeral Play”, created by London based artist Ruini Shi, is a kind of simulation game powered by blockchain technology. Participants are invited to a virtual funeral for a loved one and to interact throughout the various scenes with hidden tasks and collectibles. For example, they can choose a specific style of digital funeral according to the taste of the deceased. During the funeral, the deceased's electronic footprint can be deleted or uploaded as an electronic heritage to the online memorial space. The participants can purchase NFTs to remember the lost and some real crypto tokens can be found. However, the platform has no real financial capabilities. Any items you collect can also be displayed in the online memorial space. As an extension of the artist's interest in the relationship between humanity and emerging technology, “Funeral Play” examines online commemoration, a new way of reflecting on death in the digital age."],
        ["“Funeral Play”der in London lebenden Künstlerin Ruini Shi ist ein Simulationsspiel auf Grundlage der Blockchain-Technologie. Die Teilnehmenden sind zum virtuellen Begräbnis eines geliebten Menschen einladen und können in verschiedenen Szenen  geheime Aufgaben lösen und Objekte sammeln. Auch der Stil des digitalen Begräbnisses kann nach dem Geschmack der verstorbenen Person ausgewählt werden. Im Verlauf der Beisetzung kann der elektronische Fußabdruck des oder der Verstorbenen gelöscht oder als elektronische Erinnerung in einen Online-Gedenkraum hochgeladen werden. Die Teilnehmenden können als Erinnerung an den verlorenen Menschen NFT erwerben und echte Krypto-Token finden. Allerdings verfügt die Plattform nicht über tatsächliche Finanzfunktionen. Die Künstlerin bringt mit diesem Werk ihr Interesse an der Beziehung zwischen Menschen und neuen Technologien zum Ausdruck und befasst sich in “Funeral Play” mit Fragen des Online-Gedenkens als einer neuen Form der Auseinandersetzung mit dem Tod im digitalen Zeitalter."],
        ['ruinishi.jpg'],
        ['']
    
    ],[

        ['Yehwan Song'],
        ['walkingon.website'],
        ['yehwansong_1.png',
        'yehwansong_2.png'],

        ['Yehwan Song is an artist and designer who questions standardized design and interface conventions that lose their content awareness and oversimplify the user experience. She constructs outside-the-frame web interfaces and tools for websites in order to challenge the notion of user-friendliness and bring back content awareness. She pursues diversity instead of consistency, and respects variety in web design above efficiency. She has worked on various content-focused websites, including World on a wire commissioned by Rhizome of New Museum, Are you for real commissioned by ifa Institut für Auslandsbeziehungen, Digital Canon?! For a project from LIMA media art, Venice Biennale Korean Pavilion and the Typojanchi biennale. She has given talks and lectures at Typographics, Yale, Pratt, Parsons, HEAD Geneva, Taaaaalks and California College of the Arts, among others.'],

        ['Die Künstlerin und Designerin Yehwan Song hinterfragt in ihren Werken standardisierte Vorlagen und Schnittstellenkonventionen, die ihren inhaltlichen Bezug verloren haben und die Benutzer*innenerfahrung stark vereinfachen. Sie konstruiert außergewöhnliche Web-Schnittstellen und Website-Tools, um das gängige Verständnis von Nutzer*innenfreundlichkeit in Frage zu stellen und ein neues Bewusstsein für Inhalte zu schaffen. Ihr Webdesign zeichnet sich vor allem durch Vielfalt und weniger durch Gleichförmigkeit aus, und sie zieht Abwechslungsreichtum reiner Funktionalität vor. Sie hat zahlreiche inhaltsorientierte Websites entwickelt, darunter World on a Wire im Auftrag von Rhizome im New Museum, Are you for real im Auftrag des ifa Instituts für Auslandsbeziehungen, Digital Canon?! für ein Projekt von LIMA media art, sowie für den Koreanischen Pavillon auf der Biennale Venedig und auf der Biennale von Typojanchi. Sie hielt unter anderem Vorträge auf dem Typographics Festival, in Yale, am Pratt Institute, an der Parsons School of Design, an der HEAD in Genf, auf der Taaaaalks Konferenz und am California College of the Arts.'],

        ['https://walkingon.website/'],
        ['The “walkingon.website” is an interactive screen-based work that allows you to literally walk through the virtual space of the website. If you move like walking with your finger on the keyboard, it looks like walking on the screen of the website. The moment you stop or remove your finger from the keyboard, the movement on the screen stops. The designer and artist Yehwan Song is based in Seoul and has been challenging the typicality of the user interfaces. She borrows a way of walking in a virtual space as if walking in a real space rather than using a keyboard. -the “walkingon.website” questions the limited interaction between humans and machines in our current digital activities and evoke deeper reflection on diversity.'],
        ['Die "walkingon.website" ist ein interaktives bildschirmbasiertes Werk, das es buchstäblich ermöglicht, durch den virtuellen Raum der Website zu gehen. Durch die Bewegung des Fingers auf der Tastatur wie beim Gehen, entsteht das Gefühl, auch auf dem Bildschirm der Website zu gehen. In dem Moment, in dem man aufhört oder den Finger von der Tastatur nimmt, hört die Bewegung auf dem Bildschirm auf. Die in Seoul ansässige Designerin und Künstlerin Yehwan Song stellt die typischen Benutzeroberflächen in Frage. Die "walkingon.website" hinterfragt die begrenzte Interaktion zwischen Menschen und Maschinen in unseren aktuellen digitalen Aktivitäten und regt dazu an, über eine größere Interaktionsvielfalt nachzudenken.'],
        ['yehwansong.jpg'],
        ['']
    
    ],[

        ['UBERMORGEN'],
        ['177'],
        ['ubermorgen_1.png',
        'ubermorgen_2.png'],

        ["UBERMORGEN (the meaning of the word: ‘the day after tomorrow) is an artist duo founded in 1995. Autistic actionist lizvlx and pragmatic visionary Hans Bernhard are net.art pioneers and media hackers widely recognized for their high-risk research into data & matter, conceptual art, haute couture websites and polarising social experiments. CNN called them 'Maverick Austrian Business People' during their Vote-Auction online project. They reached a global audience of 500 million while challenging the FBI, CIA, and NSA during the US presidential election. In 2005, they launched their acclaimed EKMRZ Trilogy, a series of conceptual hacks – Google Will Eat Itself, Amazon Noir, and The Sound of eBay. UBERMORGEN controls 175 domains. Their exhibitions include Liverpool Biennial; Whitney Museum; Chronus Shanghai (2020); New Museum, New York; Somerset House, London; Haifa Museum of Art, Israel/Palestine (2019); Wei-Ling Contemporary Malaysia; HKW, Berlin; ZKM; National Art Gallery, Sofia (2017); ICA Miami; Mahatma Gandhi Institute, Mauritius (2015); Serpentine Galleries, London (2014); Kunsthal Aarhus; Ars Electronica, Austria; MoMA Ljubljana; ArtScience Museum, Singapore (2013); 3331 Arts Chiyoda, Japan (2012); Centre Pompidou; Gwangju Design Biennale; WRO Media Art Biennale (2011); Prague Biennale (2009); Biennale of Sydney (2008); MOCA Taipei (2007); The Premises, Johannesburg; ICC Tokyo (2005); SFMOMA, USA (2001)."],

        ["UBERMORGEN ist ein 1995 gegründetes Künstler*innenduo. Es besteht aus der autistischen Aktionistin lizvlx und dem pragmatischen Visionär Hans Bernhard. Beide sind Pionier*innen der net.art und Medienhacker*innen, bekannt für ihre risikoreichen Forschungen zu Datenangelegenheiten, ihre Konzeptkunst, Haute-Couture-Webseiten und polarisierenden Sozialexperimente. Der Fernsehsender CNN bezeichnete sie im Rahmen ihres Online-Projekts Vote-Action als „österreichische Business-Freigeister“. Während der US-Präsidentschaftswahl forderten sie FBI, CIA und NSA heraus und erreichten damit 500 Millionen Zuschauer*innen auf der ganzen Welt. Im Jahr 2005 starteten sie mit ihrer gefeierten EKMRZ-Trilogie eine Reihe konzeptueller Hacks: Google Will Eat Itself, Amazon Noir und The Sound of eBay. UBERMORGEN kontrolliert 175 Domains. Ihre Werke wurden vielerorts ausgestellt, darunter: Liverpool Biennale; Whitney Museum; Chronus Shanghai (2020); New Museum, New York; Somerset House, London; Haifa Museum of Art, Israel/Palästina (2019); Wei-Ling Contemporary Malaysia; HKW, Berlin; ZKM; National Art Gallery, Sofia (2017); ICA Miami; Mahatma Gandhi Institute, Mauritius (2015); Serpentine Galleries, London (2014); Kunsthal Aarhus; Ars Electronica, Österreich; MoMA Ljubljana; ArtScience Museum, Singapur (2013); 3331 Arts Chiyoda, Japan (2012); Centre Pompidou; Gwangju Design Biennale; WRO Media Art Biennale (2011); Prag Biennale (2009); Biennale von Sydney (2008); MOCA Taipei (2007); The Premises, Johannesburg; ICC Tokyo (2005); SFMOMA, USA (2001)."],

        ['../177'],
        ["With “177”, the artist duo UBERMORGEN, based in Cologne and Vienna, has created a work that invites us to think about a future beyond our anthropocentric view of the world, imagining utopian spaces of potentiality. The interactive website consists of a terrain of colored sediment layers that are dynamically re-rendered based on user interaction each time they load. Users are asked to enter a year between 0 (today) and 177,000. By moving with the cursor, text fragments emerge describing different ideas of the future and their geological and bioinformatic changes, for example, with possible post-evolutionary organisms, a machinistically upgraded flora and fauna, polymerized plants, or even altered ecological states. The vertical breaks represent radical changes on the imaginary time axis, such as extreme climatic changes or civilizational catastrophes. As the sediment layers scroll, song fragments are played that are taken from animated films that ultimately bring fictional worlds to life. The songs are distorted by scrolling, and only when pausing do the pop songs resound as echoes from the present in an imaginary and speculative future. "],
        ['Mit "177" hat das in Köln und Wien ansässige Künstlerduo UBERMORGEN ein Werk geschaffen, das uns dazu einlädt, über eine Zukunft jenseits unserer anthropozentrischen Weltsicht nachzudenken und sich utopische Räume der Potenzialität vorzustellen. Die interaktive Website besteht aus einem Terrain aus farbigen Sedimentschichten, die bei jedem Ladevorgang auf der Grundlage der Benutzerinteraktion dynamisch neu gerendert werden. Die Benutzer werden aufgefordert, ein Jahr zwischen 0 (heute) und 177.000 einzugeben. Durch Bewegen des Cursors erscheinen Textfragmente, die verschiedene Vorstellungen von der Zukunft und ihren geologischen und bioinformatischen Veränderungen beschreiben, zum Beispiel mit möglichen post-evolutionären Organismen, einer maschinell aufgerüsteten Flora und Fauna, polymerisierten Pflanzen oder sogar veränderten ökologischen Zuständen. Die vertikalen Brüche stehen für radikale Veränderungen auf der imaginären Zeitachse, wie extreme klimatische Veränderungen oder zivilisatorische Katastrophen. Beim Durchlaufen der Sedimentschichten werden Liedfragmente abgespielt, die aus Animationsfilmen stammen, die letztlich fiktive Welten zum Leben erwecken. Die Songs werden durch das Scrollen verzerrt und nur wenn man innehält, erklingen die Popsongs als Echo der Gegenwart in einer imaginären und spekulativen Zukunft.'],
        ['ubermorgen.jpg'],
        ['']
    
    ],[
        ['Issei Yamagata'],
        ['Blank Screen'],
        ['lsseiyamagata_1.jpg',
        'lsseiyamagata_2.jpg',
        'lsseiyamagata_3.jpg'],

        ["Issei Yamagata is a visual artist based in Japan. His works are focused on his interests in image circulation on the internet and its politics."],

        ["Issei Yamagata ist bildender Künstler aus Japan. Seine Werke zeichnen sich durch sein Interesse an der Zirkulation von Bildern im Internet und der Politik des Internets aus."],
        ['https://issei.in/blank_screen/'],
        ["“Blank Screen”, created by Japanese artist Issei Yamagata, is a browser-based net film that can be accessed from networked digital devices such as smartphones, tablets, and computers. It is programmed by HTML/Java Script with simple aesthetics of black and white pixel art. “Blank Screen” is generated through various interactions of participants, such as entering text to answer questions and uploading images to respond requests. Unlike most other online experiences, participants can experience it on their own freely without sharing their activities with others. Also, they can participate only once, and they can't go back to the previous stage like in real life."],
        ["“Blank Screen”, geschaffen vom japanischen Künstler Issei Yamagata, ist ein browserbasierter Web-Film, der von vernetzten digitalen Geräten wie Smartphones, Tablets und Computern aus aufgerufen werden kann. Er ist mit HTML/Java Script programmiert und zeichnet sich durch eine einfache Ästhetik aus schwarz-weißer Pixelkunst aus. “Blank Screen” wird durch verschiedene Interaktionen der Teilnehmer erzeugt, z. B. durch die Eingabe von Text zur Beantwortung von Fragen und das Hochladen von Bildern. Im Gegensatz zu den meisten anderen Online-Erfahrungen können die Teilnehmer*innen das Projekt allein erleben, ohne ihre Aktivitäten mit anderen zu teilen. Außerdem können sie nur einmal teilnehmen und nicht wie im wirklichen Leben zu vorherigen Stufen zurückkehren."],
        ['isseiyamagata.jpg'],
        ['Photo Credit Masanori Tomita']
    ]
]
var intro_en = [
    'HYBRID BY NATURE – Human.Machine.Interaction<br>',
    '<br><br>Online exhibition and conference<br>\
    <br>\
    Machine learning, algorithms and intelligent robots are increasingly determining our everyday lives. The distinction between humans and technical systems is becoming more and more blurred. This transformative development has the potential to dramatically change all aspects of life and society as a whole in the near future. “Posthumanism” and “Transhumanism”, which actively promote human enhancement, challenge our image of what it means to be human. What reflections does the increasing convergence between human and machine find in art? What kind of questions are raised by these developments? What are the boundaries? The project seeks utopian, visionary, or speculative approaches in art that explore this new coexistence between humans and machines and life with intelligent objects and systems – our new natural hybridity.<br>\
    <br>\
    Our reality has become more complex. Today, there is hardly any area that is not controlled or permeated by algorithms or in which machine control processes are not built in. As a result of major advances in the technical development of sensors, data transmission, information processing and artificial intelligence, typical human abilities are increasingly being reproduced by machines. Artificial intelligence based on “machine learning” is ubiquitously in use today: as smart assistants such as Siri or Alexa, in self-driving cars, in the control of transport infrastructure, the global stock exchanges, even in military drones. It is already part of the social, material and economic foundations of our daily lives. We live in intertwined relationships with machines; this hybridity has become our new nature. <br>\
    Through the further development of automated learning processes and artificial intelligence, qualities such as intuition and creativity, be it in the field of music or art which were previously attributed exclusively to humans, are being imitated by machines with increasing success. At the same time, human capabilities are themselves changing, expanding, and improving through machine assistance. Technology is being used as an enhancement and extension for human senses and actions. Our biological bodies, which have been technologically upgraded with bionic prostheses and neuro-implants, are merging with technological ones. Biotechnological developments in regenerative medicine, genetic research and antibody research have enabled direct intervention in the human genome. This has blurred the distinction between humans and technical systems; no longer is there an opposition – we are part of these technical formations. Our lives are now assisted by smart objects and environments that listen to us. Intelligent robots play an increasing role in our everyday life – as household robots and humanoid robots that take care of our needs, that are used in healthcare or that compensate for the deficits of human relationships as sex partners. This transformative development has the potential to dramatically change all aspects of life and society as a whole in the near future. <br>\
    <br>\
    HYBRID BY NATURE – Human.Machine.Interaction is curated by Sabine Himmelsbach, Director of HEK (House of Electronic Arts) in Basel, Switzerland, and DooEun Choi, Curator in art and technology in Seoul, South Korea. '
]
var intro_de = [
    'HYBRID BY NATURE – Human.Machine.Interaction<br>',
    'Online-Ausstellung und Online-Eröffnungskonferenz<br>\
    <br>\
    Maschinelles Lernen, Algorithmen und intelligente Roboter bestimmen zunehmend unseren Alltag. Die Grenzen zwischen Menschen und technischen Systemen verschwimmen immer mehr. Diese transformative Entwicklung hat das Potenzial, in naher Zukunft alle Aspekte des Lebens und der Gesellschaft als Ganzes dramatisch zu verändern. „Posthumanismus“ und „Transhumanismus“, die die Verbesserung des Menschen aktiv vorantreiben, stellen unser Bild davon, was es bedeutet, ein Mensch zu sein, in Frage. Wie spiegelt sich die zunehmende Konvergenz zwischen Mensch und Maschine in der Kunst wider? Welche Fragen werden durch diese Entwicklungen aufgeworfen? Wo liegen die Grenzen? Das Projekt sucht nach utopischen, visionären oder spekulativen Ansätzen in der Kunst, die diese neue Koexistenz zwischen Menschen und Maschinen und dem Leben mit intelligenten Objekten und Systemen erforschen - unsere neue natürliche Hybridität.<br>\
    <br>\
    Unsere Realität ist komplexer geworden. Es gibt heute kaum noch einen Bereich, der nicht von Algorithmen gesteuert oder durchdrungen ist oder in dem keine maschinellen Steuerungsprozesse eingebaut sind. Durch große Fortschritte in der technischen Entwicklung von Sensoren, Datenübertragung, Informationsverarbeitung und künstlicher Intelligenz werden typische menschliche Fähigkeiten zunehmend von Maschinen nachgebildet. Künstliche Intelligenz, die auf „maschinellem Lernen“ basiert, ist heute allgegenwärtig im Einsatz: als intelligente Assistenten wie Siri oder Alexa, in selbstfahrenden Autos, bei der Steuerung der Verkehrsinfrastruktur, der globalen Börsen und sogar in militärischen Drohnen. Sie ist bereits Teil der sozialen, materiellen und wirtschaftlichen Grundlagen unseres täglichen Lebens. Wir leben in verflochtenen Beziehungen mit Maschinen; diese Hybridität ist zu unserer neuen Natur geworden. <br>\
    <br>\
    Durch die Weiterentwicklung von maschinellen Lernprozessen und künstlicher Intelligenz werden Eigenschaften wie Intuition und Kreativität, sei es im Bereich der Musik oder der Kunst, die bisher ausschließlich dem Menschen zugeschrieben wurden, mit zunehmendem Erfolg von Maschinen nachgeahmt. Gleichzeitig verändern, erweitern und verbessern sich auch die menschlichen Fähigkeiten durch maschinelle Unterstützung. Die Technik wird als Ergänzung und Erweiterung der menschlichen Sinne und Handlungen eingesetzt. Unsere biologischen Körper, die mit bionischen Prothesen und Neuroimplantaten technologisch aufgerüstet wurden, verschmelzen mit den technischen. Die biotechnologischen Entwicklungen in der regenerativen Medizin, der Genforschung und der Antikörperforschung haben direkte Eingriffe in das menschliche Genom ermöglicht. Die Unterschiede zwischen Menschen und technischen Systemen haben sich damit verwischt; es gibt keinen Gegensatz mehr - wir sind Teil dieser technischen Gebilde. Unser Leben wird nun von intelligenten Gegenständen und Umgebungen unterstützt, die auf uns hören. Intelligente Roboter spielen in unserem Alltag eine immer größere Rolle - als Haushaltsroboter und humanoide Roboter, die sich um unsere Bedürfnisse kümmern, die im Gesundheitswesen eingesetzt werden oder die als Sexualpartner*innen die Defizite menschlicher Beziehungen ausgleichen. Diese transformative Entwicklung hat das Potenzial, in naher Zukunft alle Aspekte des Lebens und der Gesellschaft als Ganzes dramatisch zu verändern. <br>\
    <br>\
    HYBRID BY NATURE - Human.Machine.Interaction wird kuratiert von Sabine Himmelsbach, Direktorin des HEK (Haus der Elektronischen Künste) in Basel, Schweiz, und DooEun Choi, Kuratorin für Kunst und Technologie in Seoul, Südkorea.<br>'
    
]
var bio_nominator_en = [
    'Art Center Nabi, Kattie Fan, Fei Jun, Ying Kwok, Joel Kwong, Nam June Paik Art Center, Odgerel Odonchimed, Christian Sandor, Yohsuke Takahashi, Jo Wei, Huang Wen-Hao, Bi Xin, Kazuhiko Yoshizaki, Yasuko Yubisui, ZER01NE'
]
var bio_nominator_de = [
    'Art Center Nabi, Kattie Fan, Fei Jun, Ying Kwok, Joel Kwong, Nam June Paik Art Center, Odgerel Odonchimed, Christian Sandor, Yohsuke Takahashi, Jo Wei, Huang Wen-Hao, Bi Xin, Kazuhiko Yoshizaki, Yasuko Yubisui, ZER01NE'
]
var bio_curator_en = [
    [
    'Sabine Himmelsbach – Director, HEK (House of Electronic Arts)',
    'Since 2012, Sabine Himmelsbach has been the director of HEK (House of Electronic Arts) in Basel. After studying art history in Munich she worked for galleries in Munich and Vienna from 1993–1996 and later became project manager for exhibitions and conferences for the Steirischer Herbst Festival in Graz, Austria. In 1999 she became exhibition director at the ZKM | Center for Art and Media in Karlsruhe. From 2005–2011 she was the artistic director of the Edith-Russ-House for Media Art in Oldenburg, Germany. In 2011 she curated Gateways: Art and Networked Culture for the Kumu Art Museum in Tallinn as part of the European Capital of Culture initiative. Her exhibitions at HEK in Basel include Ryoji Ikeda (2014), Poetics and Politics of Data (2015), Rafael Lozano-Hemmer: Preabsence (2016), unREAL (2017), Lynn Hershman Leeson: Anti-Bodies, Eco-Visionaries (2018), Entangled Realities. Living with Artificial Intelligence (2019), Making FASHION Sense and Real Feelings. Emotion and Technology (2020). As a writer and lecturer she is dedicated to topics related to media art and digital culture. ',
    'sabinehimmelsbach.JPG',
    'Photo Irina Kresic'
    ],[
    'DooEun Choi - Curator in art and technology',
    'DooEun Choi is currently serving as art director of Hyundai Motor and co-curator of the 5th International Digital Art Biennial in Montreal. Choi has recently worked as curator for the Pioneer Tower Iconic Public Art Project in Fort Worth, co-curator of Aurora 2018 in Dallas, and art director of Da Vinci Creative 2015 and 2017 in Seoul. Since 2000, she has curated numerous international exhibitions of art and technology in many cities in Asia, Europe, America, and virtual spaces. Choi treats the space as a laboratory for experimenting with the types of experience and aesthetics that can emerge from combining scientific knowledge, artistic practices, and historical narratives. Choi’s projects include Quayola: Asymmetric Archaeology, at Paradise Art Space, HOW Art Museum; Han Youngsoo: Photographs of Seoul 1956–63, at ICP MANA; Why Future Still Needs Us: AI and Humanity, at Art Center Nabi, QUT Art Museum; Mediacity Seoul 2012 Biennale, at Seoul Museum of Art; and ZERO1 Biennial 2012, at Zero1 Garage.',
    'dooeunchoi.jpg',
    ''
    ]
]
var bio_curator_de = [
    [
    'Sabine Himmelsbach – Direktorin, HEK (Haus der Elektronischen Künste)',
    'Seit 2012 ist Sabine Himmelsbach Direktorin des HEK (Haus der Elektronischen Künste) in Basel. Nach einem Kunstgeschichtsstudium in München arbeitete sie von 1993–1996 für Galerien in München und Wien und wurde anschließend Projektleiterin für Ausstellungen und begleitende Symposien beim Steirischen Herbst Festival in Graz. 1999 übernahm sie die Ausstellungsleitung am ZKM | Zentrum für Kunst und Medien in Karlsruhe. Von 2005–2011 leitete sie das Edith-Russ-Haus für Medienkunst in Oldenburg. 2011 kuratierte sie Gateways. Kunst und vernetzte Kultur für das Kumu Kunstmuseum in Tallinn, Estland, im Rahmen der Europäischen Kulturhauptstadt Tallinn 2011. Zu ihren Ausstellungsprojekten am HEK in Basel gehören Ryoji Ikeda (2014), Poetics and Politics of Data (2015), Rafael Lozano-Hemmer: Preabsence (2016), unREAL (2017), Lynn Hershman Leeson: Anti-Bodies, Eco-Visionaries (2018), Entangled Realities. Leben mit künstlicher Intelligenz (2019), Making FASHION Sense und Real Feelings. Emotionen und Technologie (2020). In Vorträgen und Texten arbeitet sie zu Themen der Medienkunst und digitalen Kultur.',
    'sabinehimmelsbach.JPG',
    'Photo Irina Kresic'
    ],[
    'DooEun Choi – Kuratorin für Kunst und Technologie',
    'DooEun Choi ist zurzeit künstlerische Leiterin bei Hyundai Motor und Co-Kuratorin der 5. Internationalen Biennale für digitale Kunst in Montreal. Zuvor arbeitete Choi als Kuratorin des Pioneer Tower Iconic Public Art Projects in Fort Worth, als Co-Kuratorin für Aurora 2018 in Dallas und als künstlerische Leiterin von Da Vinci Creative 2015 & 2017 in Seoul. Seit 2000 kuratierte sie zahlreiche internationale Ausstellungen in den Bereichen Kunst und Technologie in vielen Städten in Asien, Europa und Amerika sowie in virtuellen Räumen. Choi betrachtet den Raum als Labor zur Erforschung verschiedener Erfahrungen und ästhetischer Formen, die aus der Kombination von wissenschaftlichen Erkenntnissen, künstlerischen Praktiken und historischen Narrativen entstehen können. Zu Chois Projekten zählen unter anderem Quayola: Asymmetric Archaeology im Paradise Art Space, HOW Art Museum; Han Youngsoo: Photographs of Seoul 1956–63 im ICP MANA; Why Future Still Needs Us: AI and Humanity im Art Center Nabi, QUT Art Museum; Mediacity Seoul 2012 Biennale im Seoul Museum of Art und ZERO1 Biennial 2012 in der Zero1 Garage.',
    'dooeunchoi.jpg',
    ''
    ]
]
var credit_en = ['\
    Hybrid by Nature is a media art project in collaboration between the Goethe-Instituts of East Asia and HEK (House of Electronic Arts) in Basel, Switzerland. It is jointly organized by Goethe-Institut Hong Kong and Goethe-Institut Korea.​<br>\
    <br>\
    Contact:​<br>\
    WooJung Choi, Goethe-Institut Korea ​<br>\
    Woojung.Choi@goethe.de ​<br>\
    ​<br>\
    Web design: ​Yehwan Song <br>\
    Social Media Handles: Sohee Shin<br><br><br><br>\
    <a href="disclaimer_en.html" class="a_button">Disclaimer</a>\
     <br>\
    <a href="dataprotection_en.html" class="a_button">Data Protection Declaration</a>\
     <br>\
    <a href="term_en.html" class="a_button">Terms</a>\
']
var credit_de = ['\
    Hybrid by Nature ist ein Medienkunstprojekt in Kooperation zwischen den Goethe-Instituten in Ostasien und dem HEK (Haus der Elektronischen Künste) in Basel, Schweiz. Es wird gemeinsam vom Goethe-Institut Hongkong und dem Goethe-Institut Korea organisiert.<br>\
    <br>\
    Kontakt:​<br>\
    WooJung Choi, Goethe-Institut Korea ​<br>\
    Woojung.Choi@goethe.de ​<br>\
    ​<br>\
    Web-Design: ​ Yehwan Song <br>\
    Handles für soziale Medien: Sohee Shin<br><br><br><br>\
    <a href="disclaimer_en.html" class="a_button">Impressum</a>\
    <br>\
    <a href="dataprotection_en.html" class="a_button">Datenschutz</a>\
    <br>\
    <a href="term_en.html" class="a_button">Nutzungsbedingungen</a>\
']
var db_conf_en = ['\
    <div class="c_start c_start_1 bf"><br><br>Day 1 - October 7th Thursday</div>\
    <div class="c_time">7.30-9.30pm HKT / 8.30-10.30pm KST / 1.30-3.30pm CET / 7.30-9.30am EDT</div>\
    \
    <div class="c_title bf">Introduction – virtual walk-through event with the artists and curators </div>\
    \
    <br><br>\
    <div class="c_subtitle">Project Introduction</div>\
    <div class="c_detail"><div>Melanie Bono</div><div>Director of Cultural Programs East Asia, Goethe-Institut Korea</div></div>\
    <div class="c_detail"><div>Almuth Meyer-Zollitsch</div><div>Director, Goethe-Institut Hong Kong</div></div>\
    \
    \
    <br><br>\
    <div class="c_subtitle">Curatorial Introduction</div>\
    <div class="c_detail"><div>Sabine Himmelsbach</div><div>Director, HEK (House of Electronic Arts)</div></div>\
    <div class="c_detail"><div>DooEun Choi</div><div>Curator in art and technology</div></div>\
    \
    \
    <br><br>\
    <div class="c_subtitle">Introduction of Artwork and Discussions</div>\
    \
    <div class="c_detail c_subsubtitle">Artists</div>\
    <div class="c_detail"><div>Blurred Boundaries</div><div>Bat-Erdene Batchuluun, Exonemo, Sebastian Schmieg, Yehwan Song</div></div>\
    <div class="c_detail"><div>AI</div><div>Chris Cheung, Entangled Others, Mario Klingemann, Vvzela Kook</div></div>\
    <div class="c_detail"><div>Metaverse</div><div>Stine Deja, Loopntale, Ruini Shi, UBERMORGEN & Atractor, Issei Yamagata</div></div>\
    \
    <div class="c_detail c_subsubtitle">Moderators</div>\
    <div class="c_detail"><div>Sabine Himmelsbach</div><div>Director, HEK (House of Electronic Arts)</div></div>\
    <div class="c_detail"><div>DooEun Choi</div><div>Curator in art and technology</div></div>',
     
     
     
     
     
     
     
     
     
     
     
     
    '<br><br><br><br><br><br><br><br>\
    <div class="c_start c_start_2 bf"><br><br>Day 2 - October 8th Friday</div>\
    <div class="c_time">7.30 -9.30 am EDT / 1.30-3.30 pm CET / 7.30-9.30 pm HKT / 8.30-10.30 pm KST</div>\
    \
    <div class="c_title bf">Blurred Boundaries – convergence of real and virtual spaces</div>\
    <div class="en">During the pandemic, we were all confined behind our screens as physical encounters were to be reduced to a minimum. The digital sphere suddenly became our most important window to the world, to families and friends, in order to stay in touch with our loved ones even in times of limited mobility. Our new normal, in which periods of quarantine continue, is of a new space that is interior, intimate, and mediated even for working with endless Zoom meetings and conference calls. This kind of blurred spaces requires a high degree of emotional intelligence and navigational skills. Therefore, many new cultural formats have been revisited and developed further. Net art, which emerged in the 1990s, experienced a revival and rightly so, the digital space has been newly occupied with artistic works and exhibitions. Even before the pandemic we have been living in a state of hyper-connectivity, where the separation between off- and online worlds has become obsolete. The conference’s focus “blurred boundaries” takes into account these shifts and overlaps and presents concepts and projects that reflect the impact of information and communication technologies on our human condition and on our lives. </div>\
    \
    <br><br>\
    <div class="c_subtitle">Discussion</div>\
    <div class="c_detail"><div>Exonemo</div><div>Artist</div></div>\
    <div class="c_detail"><div>Sebastian Schmieg</div><div>Artist</div></div>\
    <div class="c_detail"><div>Yukiko Shikata</div><div>Curator/Critic based in Tokyo</div></div>\
    <div class="c_detail"><div>Anne-Cécile Worms</div><div>Co-Founder and President, ArtJaws</div></div>\
    \
    <div class="c_detail c_subsubtitle">Moderator</div>\
    <div class="c_detail"><div>Moderator&nbsp;&nbsp;&nbsp;Bi Xin</div><div>Curator – Researcher </div></div>',
     
     
     
     
     
     
     
     
     
     
     
     
    '<br><br><br><br><br><br><br><br>\
    <div class="c_start c_start_3 bf"><br><br>Day 3 - October 9th Saturday</div>\
    <div class="c_time">7.30 -9.30 am EDT / 1.30-3.30 pm CET / 7.30-9.30 pm HKT / 8.30-10.30 pm KST</div>\
    \
    <div class="c_title bf">AI – human machine interactions </div>\
    <div>Artificial intelligence based on machine learning has been going through the various stages of experimenting its potential in different realms. However, it is also true that artificial intelligence still requires human assistance with regards to input, categorization, management, and assessment. Perhaps the viability of AI art depends on how genuine and creative human help or intervention is. It is observed that artists’ unique ability of imagination might provide a possible breakthrough in artificial intelligence to overcome the current technical limitations and complete Artificial General Intelligence. It might allow the machines to think comprehensively and freely like human beings not limited to a special field of skill. On the other hand, all the social and ethical issues the current artificial intelligence is facing should be discussed further through artistic exploration for our shared future between human and machine. For whatever reason, it is clear that in the age of AI, the creativity of artists is being challenged, and at the same time, more attention has been given to the needs of the times. </div>\
    \
    <br><br><div class="c_subtitle">Discussion</div>\
    <div class="c_detail"><div>Clemens Apprich</div><div>Professor, University of Applied Arts in Vienna – Guest Researcher, Centre for Digital Cultures                    of Leuphana University of Lüneburg</div></div>\
    <div class="c_detail"><div>Vvzela Kook</div><div>Artist </div></div>\
    <div class="c_detail"><div>Irini Papadimitriou</div><div>Creative Director, FutureEverything</div></div>\
    <div class="c_detail"><div>Shinseungback Kimyonghun</div><div>Artist</div></div>\
    \
    <div class="c_detail"><div>Moderator&nbsp;&nbsp;&nbsp;Iris Long</div><div>Curator - Researcher</div></div>',













    '<br><br><br><br><br><br><br><br>\
    <div class="c_start c_start_4 bf"><br><br>Day 4 - October 10th Sunday</div>\
    <div class="c_time">7.30 -9.30 am EDT / 1.30-3.30 pm CET / 7.30-9.30 pm HKT / 8.30-10.30 pm KST</div>\
    \
    <div class="c_title bf">Metaverse – a collective virtual space </div>\
    <div>From the very beginning of the Internet, utopian visions have been associated with it, promising greater access and democracy for all. The current hype around blockchain technologies, crypto-currencies and NFTs is fueling the notion of an expanded Internet in which 3D worlds, games, off- and online formats and platforms merge into a single metaverse.<br>\
    These developments have been described as the fourth industrial revolution of decentralized, super-automation and hyper-connectivity. Already, games like Fortnite are played by over 350 million people daily. Visionaries see a convergence of today’s networks into a digital space where everything is one. This new metaverse promises the emergence of new economies and currencies, new communities, and cultural formats. During the pandemic, online exhibition formats became popular again and we could experience a revival of Net.Art. NFTs as a new sales format is currently breaking all records and showcases the importance of the blockchain as a key digital technology. The panel explores these new virtual spaces and platforms, the possibilities offered by the blockchain for cooperation and collaboration and questions what possibilities and challenges this opens up for artists.</div>\
    \
    <br><br><div class="c_subtitle">Discussion</div>\
    \
    <div class="c_detail"><div>Auriea Harvey</div><div>Digital Sculptor, Auriea Harvey Studio</div></div>\
    <div class="c_detail"><div>Loopntale</div><div>Artist</div></div>\
    <div class="c_detail"><div>Anika Meier</div><div>Curator</div></div>\
    <div class="c_detail"><div>Ruini Shi</div><div>Artist</div></div>\
    \
    <div class="c_detail c_subsubtitle">Moderators</div>\
    <div class="c_detail"><div>Michael Connor</div><div>Artistic Director, Rhizome</div></div>\
    '
]
var db_conf_de = ['\
    <div class="c_start c_start_1 bf"><br>Tag 1 - Donnerstag, 7. Oktober</div>\
    <div class="c_time">7.30-9.30pm HKT / 8.30-10.30pm KST / 1.30-3.30pm CET / 7.30-9.30am EDT</div>\
    \
    <div class="c_title bf">Einführung - virtuelle Begehung mit den Künstler*innen und Kuratorinnen </div>\
    \
    <br><br>\
    <div class="c_subtitle">Projekteinführung</div>\
    <div class="c_detail"><div>Melanie Bono</div><div>Director of Cultural Programs East Asia, Goethe-Institut Korea</div></div>\
    <div class="c_detail"><div>Almuth Meyer-Zollitsch</div><div>Director, Goethe-Institut Hong Kong</div></div>\
    \
    \
    <br><br>\
    <div class="c_subtitle">Kuratorische Einführung</div>\
    <div class="c_detail"><div>Sabine Himmelsbach</div><div>Director, HEK (House of Electronic Arts)</div></div>\
    <div class="c_detail"><div>DooEun Choi</div><div>Curator in art and technology</div></div>\
    \
    \
    <br><br>\
    <div class="c_subtitle">Vorstellung der Kunstwerke und Gespräche</div>\
    \
    <div class="c_detail c_subsubtitle">Künstler*innen</div>\
    <div class="c_detail"><div>Blurred Boundaries</div><div>Bat-Erdene Batchuluun, Exonemo, Sebastian Schmieg, Yehwan Song</div></div>\
    <div class="c_detail"><div>AI</div><div>Chris Cheung, Entangled Others, Mario Klingemann, Vvzela Kook</div></div>\
    <div class="c_detail"><div>Metaverse</div><div>Stine Deja, Loopntale, Ruini Shi, UBERMORGEN & Atractor, Issei Yamagata</div></div>\
    \
    <div class="c_detail c_subsubtitle">Moderatorinnen</div>\
    <div class="c_detail"><div>Sabine Himmelsbach</div><div>Director, HEK (House of Electronic Arts)</div></div>\
    <div class="c_detail"><div>DooEun Choi</div><div>Curator in art and technology</div></div>',
     
     
     
     
     
     
     
     
     
     
     
     
    '<br><br><br><br><br><br><br><br>\
    <div class="c_start c_start_2 bf"><br><br>Tag 2 - Freitag, 8. Oktober</div>\
    <div class="c_time">7.30 -9.30 am EDT / 1.30-3.30 pm CET / 7.30-9.30 pm HKT / 8.30-10.30 pm KST</div>\
    \
    <div class="c_title bf">Blurred Boundaries - Zur Annäherung von realen und virtuellen Räumen</div>\
    <div>Während der Pandemie waren wir alle hinter unseren Bildschirmen eingesperrt, da physische Begegnungen auf ein Minimum reduziert werden sollten. Die digitale Sphäre wurde plötzlich zu unserem wichtigsten Fenster zur Welt, zur Familie und zu Freunden, um auch in Zeiten eingeschränkter Mobilität mit unseren Lieben in Kontakt bleiben zu können. Unsere neue Normalität ist ein neuer Raum, in dem sich Privates ebenso wie die Arbeit durch endlose Zoom-Meetings und Telefonkonferenzen vermittelt. Diese Art von verschwommenen Räumen erfordern ein hohes Maß an emotionaler Intelligenz und Navigationsfähigkeit. Viele digitale Kulturformate wurden neu aufgegriffen und weiter entwickelt. Die Netzkunst, die in den 1990er Jahren aufkam, erlebte ein Revival, und zu Recht wurde der digitale Raum mit künstlerischen Arbeiten und Ausstellungen neu besetzt. Schon vor der Pandemie lebten wir in einem Zustand der Hyperkonnektivität, in dem die Trennung zwischen Off- und Online-Welt obsolet geworden ist. Der Konferenzschwerpunkt "Blurred Boundaries" trägt diesen Verschiebungen und Überschneidungen Rechnung und stellt Konzepte und Projekte vor, die die Auswirkungen der Informations- und Kommunikationstechnologien auf unser Menschsein und unser Leben reflektieren. </div>\
    \
    <br><br>\
    <div class="c_subtitle">Gespräch</div>\
    <div class="c_detail"><div>Exonemo</div><div>Künstler</div></div>\
    <div class="c_detail"><div>Sebastian Schmieg</div><div>Künstler</div></div>\
    <div class="c_detail"><div>Yukiko Shikata</div><div>Kuratorin/Kritikerin, Tokio</div></div>\
    <div class="c_detail"><div>Anne-Cécile Worms</div><div>Mitbegründerin und Präsidentin, ArtJaws</div></div>\
    \
    <div class="c_detail c_subsubtitle">Moderatorin</div>\
    <div class="c_detail"><div>Moderator&nbsp;&nbsp;&nbsp;Bi Xin</div><div>Kuratorin - Wissenschaftlerin</div></div>',
     
     
     
     
     
     
     
     
     
     
     
     
    '<br><br><br><br><br><br><br><br>\
    <div class="c_start c_start_3 bf"><br><br>Tag 3 - Samstag 9. Oktober</div>\
    <div class="c_time">7.30 -9.30 am EDT / 1.30-3.30 pm CET / 7.30-9.30 pm HKT / 8.30-10.30 pm KST</div>\
    \
    <div class="c_title bf">KI - Mensch-Maschine-Interaktionen </div>\
    <div>Künstliche Intelligenz, die auf maschinellem Lernen basiert, hat verschiedene Phasen durchlaufen, in denen ihr Potenzial in unterschiedlichen Bereichen erprobt wurde. Es ist jedoch auch wahr, dass künstliche Intelligenz immer noch menschliche Unterstützung bei der Eingabe, Kategorisierung, Verwaltung und Bewertung benötigt. Vielleicht hängt die Lebensfähigkeit der KI-Kunst davon ab, wie echt und kreativ die menschliche Hilfe oder Intervention ist. Es ist aber auch zu beobachten, dass die besondere Kreativität von Künstler*innen einen möglichen Durchbruch in der künstlichen Intelligenz darstellen könnte, die die derzeitigen technischen Grenzen überwindet und es den Maschinen ermöglicht, so umfassend und frei wie Menschen zu denken. Andererseits müssen die sozialen und ethischen Fragen, mit denen uns die künstliche Intelligenz konfrontiert, durch künstlerische Erkundungen für unsere gemeinsame Zukunft zwischen Mensch und Maschine weiter diskutiert werden. Aus welchen Gründen auch immer, es ist klar, dass im Zeitalter der KI die Kreativität der Künstler*innen herausgefordert wird und gleichzeitig den Bedürfnissen der Zeit mehr Aufmerksamkeit geschenkt wird.</div>\
    \
    <br><br><div class="c_subtitle">Gespräch</div>\
    <div class="c_detail"><div>Clemens Apprich</div><div>Professor, Universität für angewandte Kunst in Wien - Gastwissenschaftler, Zentrum für digitale Kulturen der Leuphana Universität Lüneburg</div></div>\
    <div class="c_detail"><div>Vvzela Kook</div><div>Künstlerin</div></div>\
    <div class="c_detail"><div>Irini Papadimitriou</div><div>Kreativdirektorin, FutureEverything</div></div>\
    <div class="c_detail"><div>Shinseungback Kimyonghun</div><div>Künstler</div></div>\
    \
    <div class="c_detail"><div>Moderator&nbsp;&nbsp;&nbsp;Iris Long</div><div>Kuratorin - Wissenschaftlerin</div></div>',













    '<br><br><br><br><br><br><br><br>\
    <div class="c_start c_start_4 bf"><br><br>Tag 4 – Sonntag, 10. Oktober</div>\
    <div class="c_time">7.30 -9.30 am EDT / 1.30-3.30 pm CET / 7.30-9.30 pm HKT / 8.30-10.30 pm KST</div>\
    \
    <div class="c_title bf">Metaverse - ein kollektiver virtueller Raum</div>\
    <div>Seit den Anfängen des Internets werden mit ihm utopische Visionen verbunden, die mehr Zugang und Demokratie für alle versprechen. Der aktuelle Hype um Blockchain-Technologien, Kryptowährungen und NFTs befeuert die Vorstellung von einem erweiterten Internet, in dem 3D-Welten, Spiele, Off- und Online-Formate und -Plattformen zu einem einzigen Metaversum verschmelzen.<br>\
    Diese Entwicklungen wurden als die vierte industrielle Revolution der Dezentralisierung, Superautomatisierung und Hyperkonnektivität beschrieben. Schon jetzt werden Spiele wie Fortnite täglich von über 350 Millionen Menschen gespielt. Visionäre sehen eine Verschmelzung der heutigen Netzwerke zu einem digitalen Raum, in dem alles eins ist. Dieses neue Metaversum verspricht das Entstehen neuer Wirtschaftssysteme und Währungen, neuer Gemeinschaften und kultureller Formate. Während der Pandemie wurden Online-Ausstellungsformate wieder populär, und wir konnten eine Wiederbelebung der Net.Art erleben. NFTs als neues Verkaufsformat brechen derzeit alle Rekorde und zeigen die Bedeutung der Blockchain als digitale Schlüsseltechnologie auf. Das Panel erkundet diese neuen virtuellen Räume und Plattformen, die Möglichkeiten der Blockchain für Kooperation und Kollaboration und fragt, welche Möglichkeiten und Herausforderungen sich daraus für Künstler*innen ergeben.</div>\
    \
    <br><br><div class="c_subtitle">Gespräch</div>\
    \
    <div class="c_detail"><div>Auriea Harvey</div><div>Digitale Bildhauerin, Auriea Harvey Studio</div></div>\
    <div class="c_detail"><div>Loopntale</div><div>Künstler</div></div>\
    <div class="c_detail"><div>Anika Meier</div><div>Kuratorin</div></div>\
    <div class="c_detail"><div>Ruini Shi</div><div>Künstlerin</div></div>\
    \
    <div class="c_detail c_subsubtitle">Moderatorin</div>\
    <div class="c_detail"><div>Moderator&nbsp;&nbsp;&nbsp;Michael Connor</div><div>Künstlerischer Leiter von Rhizome</div></div>\
    '
]






var conference_bio = [
    [


    [
    'Exonemo - Artists',
    'The Japanese artist unit "exonemo" (by SEMBO Kensuke and AKAIWA Yae) was formed in 1996 on the Internet. Their experimental projects are typically humorous and innovative explorations of the paradoxes of digital and analog computer networked and actual environments in our lives. Their The Road Movie won the Golden Nica for Net Vision category at Prix Ars Electronica 2006. They have been organizing the IDPW gatherings and "Internet Yami-Ichi" since 2012. They live and work in New York since 2015.',

    'Exonemo – Künstler',
    'Die japanische Künstler*innengruppe „exonemo“ (von SEMBO Kensuke und AKAIWA Yae) wurde 1996 im Internet gegründet. Ihre experimentellen Projekte zeichnen sich durch humorvolle und innovative Erkundungen der Absurditäten unserer digitalen und analogen, computergenerierten und tatsächlichen Lebensumgebungen aus. Ihre Installation The Road Movie wurde 2006 mit dem Goldenen Nica Prix Ars Electronica in der Kategorie Net Vision ausgezeichnet.<br>\
    Seit 2012 organisieren sie den Internet-Schwarzmarkt „Internet Yami-Ichi“. Sie leben und arbeiten seit 2015 in New York.',

    'exonemo.png'
    ],



    [
    'Sebastian Schmieg - Artist',
    'Sebastian Schmieg investigates the algorithmic circulation of images, texts, and bodies. He creates playful interventions that penetrate the shiny interfaces of our networked society and explore the realities that lie behind them. In particular Schmieg focuses on labor, algorithmic management, and artificial intelligence. He works in a wide range of media including video, website, installation, artist book, custom software, lecture performance, and delivery service.<br>\
    Schmieg’s work has been exhibited internationally at The Photographers’ Gallery London, MdbK Leipzig, HeK Basel, and Chronus Art Center Shanghai. He is based in Berlin and is professor for interface design at HTW Dresden.',

    'Sebastian Schmieg - Künstler',
    'Sebastian Schmieg untersucht in seinen Arbeiten die algorithmische Zirkulation von Bildern, Texten und Körpern. Er schafft spielerische Interventionen, mit denen er die glänzenden Schnittstellen unserer vernetzten Gesellschaft durchdringt und die dahinterliegenden Realitäten erkundet. Im Mittelpunkt von Schmiegs Werken stehen Arbeit, algorithmisches Management und künstliche Intelligenz. Er setzt ein breites Spektrum von Medien wie Videos, Websites, Installationen, Künstlerbücher, Lecture Performances und Lieferdienste ein.<br>\
    Schmiegs Werke wurden international ausgestellt, unter anderem in der Photographers’ Gallery in London, im MdbK in Leipzig, im HeK Basel und im Chronus Art Center in Shanghai. Er lebt und arbeitet in Berlin und hat eine Professur für Interfacedesign an der HTW Dresden.',


    'sebastianschmieg.jpg'
    ],



    [
    'Yukiko Shikata - Curator/Critic based in Tokyo',
    'Director “Open Water” Committee. Visiting professor at Tama Art University and Tokyo Zokei University, lecturer at Musashino Art University and IAMAS. Since 1990 focuses on “Border” by traversing art, science, technology, society. 1990-2010 worked as a curator of Canon ARTLAB, associate curator of Mori Art Museum, senior curator of NTT ICC. Since the late 1990s, as an independent realized many experimental exhibitions and projects. Recent works include SIAF2014, KENPOKU ART 2016, both as curator, and director of media art festival AMIT 2014-2018. In 2000 chairperson of Symposium of AICA Japan, director of MMFS (Micro Media Festival Seeds) 2020, Fuyuki  Yamakawa performance “DOMBRA"  (on boat, Tokyo Harbor), “Forking PiraGene”  (Co-curator, Taipei).  In 2021: Forum “Information as a form of  <capital> ” (Kyoto Prefecture), "EIR (Energies in Rural) ” (Curator, ACAC Aomori+Liminaria, Italy, ongoing), “Minamisanriku=Haag SAEZ” (Curator, ongoing), ”Land and Beyond” (Curator). Juror of many international competitions, many co-publications.',

    'Yukiko Shikata - Kuratorin/Kritikerin aus Tokio',
    'Direktorin des „Open Water“ Committee. Gastprofessorin an der Tama Art University und der Zokei University in Tokio, Dozentin an der Musashino Art University und am IAMAS. Seit 1990 lotet sie mit „Border“ die Grenzen zwischen Kunst, Wissenschaft, Technologie und Gesellschaft aus. Von 1990-2010 Kuratorin des Canon ARTLAB, stellvertretende Kuratorin des Mori Art Museum, Chefkuratorin des NTT ICC. Seit Ende der 1990er Jahre zahlreiche experimentelle Ausstellungen und Projekte als selbstständige Künstlerin. In jüngster Zeit als Kuratorin für das SIAF2014 und KENPOKU ART 2016 und als Leiterin des Medienkunstfestivals AMIT 2014-2018 tätig. Im Jahre 2000 war sie Vorsitzende des Symposiums von AICA Japan und übernahm die Leitung des MMFS (Micro Media Festival Seeds) 2020, der Performance DOMBRA von Fuyuki Yamakawa (auf einem Boot im Hafen von Tokio), Forking PiraGene (Co-Kuratorin, Taipei). Im Jahre 2021: Forum Information as a form of <capital> (Präfektur Kyoto), EIR (Energies in Rural) (Kuratorin, ACAC Aomori+Liminaria, Italien, laufend), Minamisanriku=Haag SAEZ (Kuratorin, laufend), Land and Beyond (Kuratorin). Jurorin bei zahlreichen internationalen Wettbewerben, zahlreiche Ko-Publikationen.',


    'yukikoshikata.jpg'
    ],





    ['Anne-Cécile Worms - Co-Founder and President, ArtJaws',

    'Anne-Cécile Worms, graduated from Paris Institut d’Etudes Politiques, is a serial entrepreneur in the fields of art & technologies. She has been publishing MCD, the printed Magazine of Digital Cultures, from 2003 to 2016, with thematic issues such as “The Open Future”, “Change Money”, “Digital Africa”, “Net Art”, … In 2009, she founded the start-up Art2M (Art to Machine) and launched Makery in June 2014, the online media for all labs <www.makery.info>. Makery is currently leading a European cooperation about Art and Medecine: <https://art4med.eu>. <br>\
    In 2017, she co-founded ArtJaws, a unique online marketplace specialized in Tech/Art that offers artworks selected by major curators. <www.artjaws.com><br>\
    Anne-Cécile Worms is a qualified personality for the Institut Français. In 2018, she became the U.S East Coast Operations Director of the Women Initiative Foundation. She has just been named Chair of Artano’s Council of Artists, a NFT platform linked to the Cardano blockchain.',

    'Anne-Cécile Worms – Mitbegründerin und Präsidentin, ArtJaws',

    'Anne-Cécile Worms ist Absolvention des Institut d’Etudes Politiques in Paris und Gründerin mehrerer Unternehmen in den Bereichen Kunst und Technologien. Von 2003 bis 2016 war sie Herausgeberin des Magazins MCD für digitale Kulturen zu Themen wie The Open Future, Change Money, Digital Africa oder Net Art. Im Jahre 2009 gründete sie das Startup Art2M (Art to Machine) und rief im Juni 2014 das Online-Medium Makery für Kunstlabore aller Art ins Leben www.makery.info. Aktuell leitet Makery ein europäisches Kooperationsprojekt zu Kunst und Medizin: https://art4med.eu. <br>\
    Im Jahre 2017 war sie Mitbegründerin von ArtJaws, dem einzigen auf Technologie/Kunst spezialisierten Online-Marktplatz, der von einflussreichen Kurator*innen ausgewählte Werke anbietet. <www.artjaws.com><br>\
    Anne-Cécile Worms arbeitet als Expertin für das Institut Français. Im Jahre 2018 wurde sie zur Geschäftsführerin der Women Initiative Foundation für die US-Ostküste und erst kürzlich zur Vorsitzenden des Künstler*innenrats von Artano, einer NFT-Plattform auf der Cardano-Blockchain, ernannt.',

    'annececileworms.jpg'
    ],





    [
    'Bi Xin – Curator - Researcher',
    'BI Xin is a curator and researcher based in Shanghai. As well as being the Executive Director of Chronus Art Center, she also leads the curatorial vision of public events at CAC. Her curatorial practices focus on the intersection of arts, decentralised technologies and contemporary social-culture/subculture.',

    'Bi Xin – Kuratorin - Wissenschaftlerin',
    'BI Xin arbeitet als Kuratorin und Forscherin in Shanghai. Neben ihrer Tätigkeit als Geschäftsführerin des Chronus Art Center in Shanghai ist sie auch Leiterin der Kuratorischen Abteilung und der Abteilung für öffentliche Programme des CAC. Ihre kuratorische Praxis konzentriert sich auf die Schnittstelle zwischen Kunst, dezentralen Technologien und zeitgenössischen Sozialkulturen/Subkulturen.',

    'bixin.jpeg'
    ],


],[

    [
    'Clemens Apprich - Professor, University of Applied Arts in Vienna – Guest Researcher, Centre for Digital Cultures of Leuphana University of Lüneburg',
    'Clemens Apprich is full professor in media theory and history at the University of Applied Arts in Vienna, as well as guest researcher at the Centre for Digital Cultures at Leuphana University of Lüneburg. He is an affiliated member of the Research Centre for Media Studies and Journalism at the University of Groningen, of the Digital Democracies Institute at Simon Fraser University, and of the Global Emergent Media Lab at Concordia University. His current research deals with filter algorithms and their application in data analysis as well as machine learning methods. Apprich is the author of Technotopia: A Media Genealogy of Net Cultures (Rowman & Littlefield International, 2017), and, together with Wendy Chun, Hito Steyerl, and Florian Cramer, co-authored Pattern Discrimination (University of Minnesota Press/meson press, 2019). He is is a founding co-editor of spheres – Journal for Digital Cultures (www.spheres-journal.org).',

    'Clemens Apprich - Professor, Universität für Angewandte Kunst Wien – Gastwissenschaftler am Centre for Digital Cultures (CDC) der Leuphana Universität Lüneburg',
    'Clemens Apprich ist Professor für Medientheorie und Mediengeschichte an der Universität für Angewandte Kunst Wien sowie Gastwissenschaftler am Centre for Digital Cultures (CDC) der Leuphana Universität Lüneburg. Er ist affiliiertes Mitglied des Centre for Media and Journalism Studies an der Reichsuniversität Groningen, des Digital Democracies Institute an der Simon Fraser University und des Global Emergent Media Lab an der Concordia University. Seine aktuelle Forschung beschäftigt sich mit Filteralgorithmen und deren Einsatz in Verfahren der Datenanalyse sowie Methoden des maschinellen Lernens. Er ist der Autor von Technotopia: A Media Genealogy of Net Cultures (Rowman & Littlefield International, 2017) und hat, zusammen mit Wendy Chun, Hito Steyerl und Florian Cramer, das Buch Pattern Discrimination (University of Minnesota Press/meson press, 2019) veröffentlicht. Darüber hinaus ist er Gründungsmitglied von spheres — Journal for Digital Cultures (www.spheres-journal.org).',


    'clemensapprich.jpg'
    ],





    [
    'Vvzela Kook - Artist',
    'Vvzela Kook is a new media artist who mainly works in audio-visual mediums, including performance, theatre, computer graphics and drawing. Kook’s video works combine technology with her artistic practice to reproduce and convert urban cityscapes into an integrated virtual experience, guiding the audience on a cybernetic journey. The condensed textures in her works connect with multiple sensual levels in our perception and reintroduce the unexplored potential of video as a medium.The narrative plays an important role in her work, the transmedia storytelling is part of the artistic concept. Especially the mixing of delicate drawings, 3D printing and video game optics in her videos show the wide range of media and materials the artist uses to visually translate her research-based projects.',

    'Vvzela Kook',
    'Vvzela Kook ist Künstlerin für Neue Medien und arbeitet in ihren audiovisuellen Werken mit Performances, Theaterelementen, Computergrafiken und Zeichnungen. In ihren Videoarbeiten kombiniert sie ihr künstlerisches Schaffen mit technischen Mitteln, um urbane Landschaften zu reproduzieren und in ein integriertes virtuelles Erlebnis zu konvertieren, das ihr Publikum mit auf eine kybernetische Reise nimmt. Mit Hilfe der verdichteten Strukturen ihrer Werke spricht sie mehrere Sinnesebenen in unserer Wahrnehmung an und erkundet das ungenutzte Potenzial des Mediums Video. Das Narrative spielt in ihrer Arbeit eine wichtige Rolle, das transmediale Storytelling ist Teil des künstlerischen Konzepts. Besonders die Vermischung von zarten Zeichnungen, 3D-Drucken und Videospiel-Optik in ihren Videos zeigt das breite Spektrum der Medien und Materialien, die die Künstlerin nutzt, um ihre recherchebasierten Projekte visuell umzusetzen',


    'vvzelakook.jpg'
    ],





    [
    'Irini Papadimitriou - Creative Director, FutureEverything',

    'Irini Papadimitriou is a curator, whose practice draws on interdisciplinary and critical discourse to explore the impact of technology in society and culture, and the role of art in helping us engage with contemporary issues. Currently Creative Director at FutureEverything, she was previously Digital Programmes Manager at the V&A and Head of New Media Arts Development at Watermans.<br>\
    Her display, Artificially Intelligent, was exhibited at the V&A in 2018 and her most recent exhibition, YOU and AI: Through the Algorithmic Lens, commissioned by Onassis Foundation was presented in Athens in summer 2021.<br>\
    <br>\
    Irini is a co-founder of Maker Assembly, a critical gathering about maker culture, an Industry Advisory Group member for SODA (School of Digital Arts) at Manchester Metropolitan University, and an Advisory Board member for ONX Studio, a new major collaboration between Onassis USA and New Museum’s cultural incubator NEW INC. <br>\
    She has been a co-curator for the Arts & Culture experience at Mozilla Festival, a recipient of curatorial research programmes including MOBIUS (Finnish Institute), Art Fund, Mondriaan Fonds and British Council. She has served as a jury member for Prix Ars Electronica, D&AD Awards, Lumen Prize, EU STARTS and ACM Siggraph.<br>',

    'Irini Papadimitriou - Creative Director, FutureEverything',

    'Irini Papadimitriou ist Kuratorin. Ihre Praxis stützt sich auf einen interdisziplinären und kritischen Diskurs, um die Auswirkungen von Technologie auf Gesellschaft und Kultur sowie die Rolle der Kunst bei der Auseinandersetzung mit aktuellen Themen zu untersuchen. Sie ist aktuell Creative Director bei FutureEverything und war zuvor Managerin für digitale Programme beim Victoria & Albert Museum (V&A) und Leiterin der Entwicklung neuer Medienkünste bei Watermans.<br>\
    Ihre Ausstellung Artificially Intelligent wurde 2018 im V&A gezeigt. Ihre aktuelle Ausstellung YOU and AI: Through the Algorithmic Lens im Auftrag der Onassis-Stiftung wurde im Sommer 2021 in Athen präsentiert.<br>\
    <br>\
    Irini ist Mitbegründerin der Maker Assembly, einer kritischen Community zur Maker-Kultur, Mitglied der Industry Advisory Group für SODA (School of Digital Arts) an der Manchester Metropolitan University und Mitglied im Advisory Board des ONX Studio, einem neuen einflussreichen Zusammenschluss zwischen Onassis USA und NEW INC, dem Gründerzentrum für Kulturschaffende des New Museum.<br>\
    Sie war Co-Kuratorin für Kunst und Kultur beim Mozilla Festival und nahm an kuratorischen Forschungsprogrammen wie MOBIUS (Finnisches Institut), dem Art Fund, der Mondriaan Fonds und dem British Council teil. Irini war Jurymitglied für den Prix Ars Electronica, die D&AD Awards, den Lumen Prize, EU STARTS und ACM Siggraph. <br>',

    'Irinipapadimitriou.jpeg'
    ],


    [
    'Shinseungback Kimyonghun - Artists',
    'Shinseungback Kimyonghun is a Seoul based artistic duo consisting of engineer Shin Seung Back and artist Kim Yong Hun. Their collaborative practice explores technology and humanity. Their work has been exhibited internationally including Ars Electronica Center, ZKM, NTT ICC and MMCA.',

    'Shinseungback Kimyonghun – Künstler',
    'Das Künstlerduo Shinseungback Kimyonghun aus Seoul (KR) besteht aus dem Informatiker Shin Seung Back (*1979) und dem Künstler Kim Yong Hun (*1980). In ihrer gemeinsamen künstlerischen Praxis versuchen sie, sowohl die Technologie als auch die Menschheit zu verstehen. Ihre Werke wurden international ausgestellt, darunter im Ars Electronica Center, ZKM, NTT ICC und MMCA.',

    'shinseungbackkimyonghun.png'
    ],


    [
    'Iris Long - Curator - Researcher',
    'Iris Long is a writer and independent curator. She currently works as a researcher on art, science and technology at Central Academy of Fine Arts, with a research focus on how art responses to the current global reality of ubiquitous computing and big data. <br>\
    She was shortlisted by the first M21-IAAC Award (International Awards for Art Criticism). In 2018, she was the recipient of Hyundai Blue Prize for curators. In 2019 she curated “Lying Sophia and Mocking Alexa”(Hyundai Motorstudios Beijing). She is also the art jury of ISEA 2019, and art jury of SIGGRAPH ASIA 2020.<br>\
    Her research work has been presented in “Art and Artificial Intelligence”(Open Conference, ZKM), “Korea Research Fellow”(MMCA), “Art Machines: International Symposium on Computational Media Art (ISCMA)”(Hong Kong),International Symposium on Electronic Art and Digital Research in the Humanities and Arts and ISEA.',

    'Iris Long - Kuratorin - Forscherin',
    'Iris Long ist Autorin und unabhängige Kuratorin. Sie arbeitet derzeit als Forscherin zu Kunst, Wissenschaft und Technologie an der Central Academy of Fine Arts, mit dem Forschungsschwerpunkt, wie Kunst auf die aktuelle globale Realität von Ubiquitous Computing und Big Data reagiert.<br>\
    Sie war auf der Shortlist des ersten M21-IAAC Award (International Awards for Art Criticism). Im Jahre 2018 wurde sie mit dem Hyundai Blue Prize für Kurator*innen ausgezeichnet. Sie kuratierte 2019 Lying Sophia and Mocking Alexa (Hyundai Motorstudios Peking). Außerdem war sie Mitglied der Kunstjury von ISEA 2019 und SIGGRAPH ASIA 2020.<br>\
    Ihre Forschungsarbeit wurde im Rahmen von Künstliche Intelligenz und Kunst (Öffentliche Konferenz, ZKM), Korea Research Fellow (MMCA), rt Machines: International Symposium on Computational Media Art (ISCMA, Hongkong) sowie auf dem International Symposium on Electronic Art and Digital Research in the Humanities and Arts und dem ISEA präsentiert.',

    'irislong.jpeg'
    ]



],[
    [
    'Auriea Harvey - Digital Sculptor, Auriea Harvey Studio',
    "Auriea Harvey is an artist producing simulations and sculptures that bridge physical and digital space. She is half of the artist duo Entropy8Zuper!/Tale of Tales/Song of Songs, known for their pioneering works in Internet art, video games, and XR. Harvey lives and works in Rome and is a Professor of Games at Kunsthochschule Kassel. The artist's work can be found in the permanent collections of the Walker Art Center, San Francisco Museum of Modern Art, the Lot 555 NFT collection, and Rhizome’s Net Art Anthology. Her video games and VR works have had international success, including exhibitions at the Tinguely Museum, Basel; the Victoria & Albert Museum, London; the New Museum, New York; and ZKM, Karlsruhe. She is the recipient of a Creative Capital grant and a winner of the Independent Games Festival Nuovo Award. She is represented by bitforms gallery, NYC.<br>\
    (Kuratorin)",

    'Auriea Harvey – Digitalkünstlerin und Bildhauerin, Auriea Harvey Studio',
    'Die Künstlerin Auriea Harvey produziert Simulationen und Skulpturen, die physische und digitale Räume miteinander verbinden. Sie ist Teil des Künstler*innenpaars Entropy8Zuper!/Tale of Tales/Song of Songs, das für seine Pionierarbeit in den Bereichen Internetkunst, Videospiele und XR bekannt ist. Harvey lebt und arbeitet in Rom und ist Professorin für Spiele an der Kunsthochschule Kassel. Die Werke der Künstlerin sind Teil der ständigen Sammlungen des Walker Art Center, des San Francisco Museum of Modern Art, der Lot 555 NFT Collection und der Net Art Anthology von Rhizome. Ihre Videospiele und VR-Arbeiten waren international erfolgreich und in Ausstellungen im Museum Tinguely, Basel, im Victoria & Albert Museum, London, im New Museum, New York und im ZKM, Karlsruhe, zu sehen. Darüber hinaus erhielt sie einen Creative Capital Grant und gewann den Nuovo Award des Independent Games Festival. Sie wird von der bitforms gallery in New York vertreten.<br>\
    (Kuratorin)',

    'aurieaharvey.JPG'
    ],



    [
    'Loopntale – Artists',
    'Loopntale is a game designer and artist duo consisting of Youngju Kim and Hoyoun Cho based in Seoul. Their practice exists across video games, interactive simulation, and collaborative storytelling utilizing social media. They explore video games as an artistic medium by experimenting with game mechanics, storytelling, and artificial intelligence. Their works were presented at Zer01ne, Paradise Art Lab, FACT, Hyundai Motorstudio. They also organize game-making workshops focusing on alternative video games.',

    'Loopntale – Künstler',
    'Loopntale sind ein Spieledesigner*innen- und Künstler*innen-Duo aus Seoul, die mit Videospielen, interaktiven Simulationen und kooperativem Storytelling in sozialen Medien arbeiten. Sie erkunden Videospiele als künstlerisches Medium, indem sie mit Spielmechaniken, Storytelling und künstlicher Intelligenz experimentieren. Ihre Werke waren bei Zer01ne, Paradise Art Lab, FACT, Hyundai Motorstudio zu sehen. Sie veranstalten außerdem Workshops zur Spieleentwicklung mit einem Fokus auf alternativen Videospielen.',

    'loopntale.png'
    ],



    [
    'Anika Meier – Curator',
    ' ',

    'Anika Meier – Kuratorin',
    ' ',

    ' '
    ],




    [
    'Ruini Shi – Artist',
    'Ruini Shi is an animation director based in London, currently pursuing her PhD on the possibilities presented by the confluence of crypto and animation. Combining film language and technological aesthetics, she creates narratives that interrogate the compatibility between humanity and emerging technologies. Her first film Strings won the Award of Distinction at Prix Ars Electronica 2019. She was nominated for the 2019 Rapoport Award for Women in Art and Technology.',

    'Ruini Shi – Künstlerin',
    'Ruini Shi arbeitet als Animationsregisseurin in London zurzeit an ihrer Doktorarbeit über die Möglichkeiten des Zusammenspiels von Krypto und Animation. Sie verbindet Filmsprache und technologische Ästhetik zu Erzählungen, die die Kompatibilität zwischen Menschlichkeit und neuen Technologien hinterfragen. Ihr erster Film Strings erhielt auf der Ars Electronica 2019 den Award of Distinction. Im Jahre 2019 wurde sie für den Rapoport Award for Women in Art and Technology nominiert.',

    'ruinishi.jpg'
    ],




    [
    'Michael Connor – Artistic Director, Rhizome',
    "Michael Connor is Artistic Director of Rhizome, where he oversaw the Net Art Anthology initiative, a web-based exhibition, gallery exhibition, and book that retold the history of online art through 100 artworks from the 1980s to the present. He has curated exhibitions and projects for Cornerhouse, Manchester, the Museum of Moving Image, New York, ACMI, Melbourne, Bell Lightbox, Toronto, FACT, Liverpool, and BFI, London. His writing has appeared in 'You Are Here: Art After the Internet' (Cornerhouse), Digital Video Abstraction (UCPress), and 'MBCBFTW' (Hatje Cantz).",

    'Michael Connor – Künstlerischer Leiter, Rhizome',
    'Ruini Shi arbeitet als Animationsregisseurin in London zurzeit an ihrer Doktorarbeit über die Möglichkeiten des Zusammenspiels von Krypto und Animation. Sie verbindet Filmsprache und technologische Ästhetik zu Erzählungen, die die Kompatibilität zwischen Menschlichkeit und neuen Technologien hinterfragen. Ihr erster Film Strings erhielt auf der Ars Electronica 2019 den Award of Distinction. Im Jahre 2019 wurde sie für den Rapoport Award for Women in Art and Technology nominiert.',

    'michaelconnor.jpeg'
    ]



]
]



















function append_contents(){
    appended = true
    console.log('hey')
     var a_arrow_counter = 0
     $('.detail_wrapper_0').append('<div class="intro bio_0"></div>')
     $('.detail_wrapper_0').append('<div class="bio_curator bio_1"><div class="bf en"><br><br><br>Curators</div><div class="bf de"><br><br><br>Kuratorinnen</div></div>')
     $('.detail_wrapper_0').append('<div class="bio_nominator bio_2"><div class="bf en"><br><br><br>Nominators</div><div class="bf de"><br><br><br>Nominator*innen</div></div>')
     $('.detail_wrapper_0').append('<div class="bio_credit bio_3"><div class="bf en"><br><br><br>Credit</div><div class="bf de"><br><br><br>Credit</div></div>')
         $('.bio_0').append('\
             <div class="en bf top_title">'+intro_en[0]+'</div>\
             <div class="en"><br>'+intro_en[1]+'<br><br><br><br></div>\
             <div class="de bf top_title">'+intro_de[0]+'</div>\
             <div class="de"><br>'+intro_de[1]+'<br><br><br><br></div>\
             </div>\
         ')
         $('.bio_2').append('\
             <div class="en a_bio_'+(i+1)+' a_bio"><br>'+bio_nominator_en[0]+'<br><br><br><br></div>\
             <div class="de a_bio_'+(i+1)+' a_bio"><br>'+bio_nominator_de[0]+'<br><br><br><br></div>\
             </div>\
         ')
     for (var i = 0; i < bio_curator_en.length; i++) {
         $('.bio_1').append('\
             <div class="en bf a_b_name_'+(i+1)+' a_b_name"><br>'+bio_curator_en[i][0]+'</div>\
             <div class="en a_bio_'+(i+1)+' a_bio"><br>'+bio_curator_en[i][1]+'<br><br><br><br></div>\
             <div class="de bf a_b_name_'+(i+1)+' a_b_name"><br>'+bio_curator_de[i][0]+'</div>\
             <div class="de a_bio_'+(i+1)+' a_bio"><br>'+bio_curator_de[i][1]+'<br><br><br><br></div>\
             <div class="a_img a_img_bio" style="background-image :url(thumb/bioimg/'+bio_curator_en[i][2]+')"></div><br><br><br><br><br><br><br><br><br><br>\
             </div>\
         ')
     }
     $('.bio_3').append('\
         <div class="en"><br>'+credit_en[0]+'<br><br><br><br></div>\
         <div class="de"><br>'+credit_de[0]+'<br><br><br><br></div>\
         </div>\
     ')




    $('.detail_wrapper_1').append('\
        <div class="en bf top_title"><br>Exhibition</div><div class="de bf top_title"><br>Ausstellung</div>\
        <div class=""><br><br><br>Bat-Erdene Batchuluun,  Chris Cheung,  Stine Deja, Entangled Others,   Exonemo,   Mario Klingemann,  Vvzela Kook,  Loopntale, Sebastian Schmieg,  Ruini Shi,  Yehwan Song, UBERMORGEN & Atractor, Issei Yamagata <br><br><br><br><br><br><br><br></div>')
        for (var i = 0; i < db.length; i++) {
         $('.detail_wrapper_1').append('\
             <div class="a_img_'+(i+1)+' a_img a_img_counter_0"></div>\
             <div class="bf a_title_'+(i+1)+' a_title">'+db[i][1][0]+'</div>\
             <div class="a_name_'+(i+1)+' a_name">'+db[i][0][0]+'<br><br></div>\
             <a target="blank" class="a_button_'+(i+1)+' a_button">Click to Explore</a><br><br>\
             <div class="en a_dis_en_'+(i+1)+' a_dis_en">'+db[i][6][0]+'<br><br></div>\
             <div class="de a_dis_de_'+(i+1)+' a_dis_de">'+db[i][7][0]+'<br><br><br><br></div>\
             <div class="bf a_name_'+(i+1)+' a_name"><br>'+db[i][0][0]+'</div>\
             <div class="a_img a_img_bio" style="background-image :url(thumb/bioimg/'+db[i][8][0]+')"></div>\
             <div class="en a_dis_en_'+(i+1)+' a_dis_en">'+db[i][3][0]+'<br><br><br><br><br><br><br><br><br><br></div>\
             <div class="de a_dis_de_'+(i+1)+' a_dis_de">'+db[i][4][0]+'<br><br><br><br><br><br><br><br><br><br></div>\
    ')
         if((db[i][5][0]).split('/')[0] == '..'){
             var current = window.location.href.split('/#')[0]
             var current = 'https://www.goethe.de/pro/games/oas/hybridbynature/'
             $('.a_button_'+(i+1)).attr('href', current+'/'+db[i][5][0].split('../')[1])
         }else{
              $('.a_button_'+(i+1)).attr('onclick',"return confirm('This page is sending you to external page.')")
              $('.a_button_'+(i+1)).attr('href',db[i][5][0])
         }
         for (var k = 0; k < db[i][2].length; k++) {
             $('.a_img_'+(i+1)).append('<div class="a_img_elem" style="background-image :url(thumb/artwork/'+db[i][2][k]+')"></div>')
             if(k==db[i][2].length-1){
                 $('.a_img_'+(i+1)).append('<div class="a_arrow a_arrow_r"></div><div class="a_arrow a_arrow_l"></div>')
                 $('.a_arrow_r').click(function(){
                     parseInt($(this).parent().attr('class').split('a_img_counter_')[1])+1
                     var num = parseInt($(this).parent().attr('class').split('a_img_counter_')[1])
                     $(this).parent().removeClass('a_img_counter_'+num).addClass('a_img_counter_'+((num+1+$(this).parent().find('.a_img_elem').length)%$(this).parent().find('.a_img_elem').length))
                 })
                 $('.a_arrow_l').click(function(){
                     parseInt($(this).parent().attr('class').split('a_img_counter_')[1])+1
                     var num = parseInt($(this).parent().attr('class').split('a_img_counter_')[1])
                     $(this).parent().removeClass('a_img_counter_'+num).addClass('a_img_counter_'+((num-1+$(this).parent().find('.a_img_elem').length)%$(this).parent().find('.a_img_elem').length))
                 })
             }
         }
    }
     $('.detail_wrapper_2').append(
         '<div class="title top_title bf en"><br>Conference</div><div class="title top_title bf de"><br>Konferenz</div>\
                 <div class="en">'+db_conf_en[0]+'</div>\
                 <div class="de">'+db_conf_de[0]+'</div>\
                 \
                 <div class="en">'+db_conf_en[1]+'</div>\
                 <div class="de">'+db_conf_de[1]+'</div>\
                 <div class="a_bio a_img_counter_0 a_bio_2"></div>\
                 \
                 <div class="en">'+db_conf_en[2]+'</div>\
                 <div class="de">'+db_conf_de[2]+'</div>\
                 <div class="a_bio a_img_counter_0 a_bio_3"></div>\
                 \
                 <div class="en">'+db_conf_en[3]+'</div>\
                 <div class="de">'+db_conf_de[3]+'</div>\
                 <div class="a_bio a_img_counter_0 a_bio_4"></div>'
    )
        // $('.a_bio_1').append('\
        //     <div class="a_img a_img_bio" style="background-image :url(thumb/bioimg/'+conference_bio[0][4]+')">conference_bio[0][4]</div>\
        //     <div class="en">'+conference_bio[0][0]+'</div>\
        //     <div class="en">'+conference_bio[0][1]+'</div>\
        //     <div class="de">'+conference_bio[0][2]+'</div>\
        //     <div class="de">'+conference_bio[0][3]+'</div>\
        // ')
        for (var i = 0; i < conference_bio[0].length; i++) {
            $('.detail_wrapper_2 .a_bio_2').append('\
                <div class="a_bio_sub a_img_elem">\
                <br><div class="a_img a_img_bio" style="background-image :url(thumb/bioimg/'+conference_bio[0][i][4]+')"></div>\
                <div class="en">'+conference_bio[0][i][0]+'</div>\
                <div class="en"><br>'+conference_bio[0][i][1]+'</div>\
                <div class="de">'+conference_bio[0][i][2]+'</div>\
                <div class="de"><br>'+conference_bio[0][i][3]+'</div>\
                </div>\
            ')
            if(i==conference_bio[0].length-1){
                setTimeout(function(){
                    $('.detail_wrapper_2 .a_bio_2').find('.a_img_elem').each(function(){
                        if($(this).outerHeight()>$('.detail_wrapper_2 .a_bio_2').outerHeight()) {
                            $('.detail_wrapper_2 .a_bio_2').css({'height':$(this).outerHeight()+'px'})
                        }
                    })
                },1000)
                $('.detail_wrapper_2 .a_bio_2').append('<div class="a_arrow a_arrow_r"></div><div class="a_arrow a_arrow_l"></div>')
            }
        }
        for (var i=0; i < conference_bio[1].length; i++) {
            $('.a_bio_3').append('\
                <div class="a_bio_sub a_img_elem">\
                <br><div class="a_img a_img_bio" style="background-image :url(thumb/bioimg/'+conference_bio[1][i][4]+')"></div>\
                <div class="en">'+conference_bio[1][i][0]+'</div>\
                <div class="en"><br>'+conference_bio[1][i][1]+'</div>\
                <div class="de">'+conference_bio[1][i][2]+'</div>\
                <div class="de"><br>'+conference_bio[1][i][3]+'</div>\
                </div>\
            ')
            if(i==conference_bio[1].length - 1){
                setTimeout(function(){
                    $('.a_bio_3').find('.a_img_elem').each(function(){
                        console.log($(this).outerHeight())
                        console.log($('.a_bio_3').outerHeight())
                        if($(this).outerHeight()>$('.a_bio_3').outerHeight()) {
                            $('.a_bio_3').css({'height':$(this).outerHeight()+'px'})
                        }
                    })
                },1000)
                $('.a_bio_3').append('<div class="a_arrow a_arrow_r"></div><div class="a_arrow a_arrow_l"></div>')
            }
        }
        for (var i = 0; i < conference_bio[2].length; i++) {
            $('.a_bio_4').append('\
                <div class="a_bio_sub a_img_elem">\
                <br><div class="a_img a_img_bio" style="background-image :url(thumb/bioimg/'+conference_bio[2][i][4]+')"></div>\
                <div class="en">'+conference_bio[2][i][0]+'</div>\
                <div class="en"><br>'+conference_bio[2][i][1]+'</div>\
                <div class="de">'+conference_bio[2][i][2]+'</div>\
                <div class="de"><br>'+conference_bio[2][i][3]+'</div>\
                </div>\
            ')
            if(i==conference_bio[2].length - 1){
                setTimeout(function(){
                    $('.a_bio_4').find('.a_img_elem').each(function(){
                        console.log($(this).outerHeight())
                        console.log($('.a_bio_4').outerHeight())
                        if($(this).outerHeight()>$('.a_bio_4').outerHeight()) {
                            $('.a_bio_4').css({'height':$(this).outerHeight()+'px'})
                        }
                    })
                },1000)
                $('.a_bio_4').append('<div class="a_arrow a_arrow_r"></div><div class="a_arrow a_arrow_l"></div>')
            }
        }
                 $('.a_arrow_r').click(function(){
                     parseInt($(this).parent().attr('class').split('a_img_counter_')[1])+1
                     var num = parseInt($(this).parent().attr('class').split('a_img_counter_')[1])
                     $(this).parent().removeClass('a_img_counter_'+num).addClass('a_img_counter_'+((num+1+$(this).parent().find('.a_img_elem').length)%$(this).parent().find('.a_img_elem').length))
                 })
                 $('.a_arrow_l').click(function(){
                     parseInt($(this).parent().attr('class').split('a_img_counter_')[1])+1
                     var num = parseInt($(this).parent().attr('class').split('a_img_counter_')[1])
                     $(this).parent().removeClass('a_img_counter_'+num).addClass('a_img_counter_'+((num-1+$(this).parent().find('.a_img_elem').length)%$(this).parent().find('.a_img_elem').length))
                 })



     $('.menu_15').append('<div><span class="en_button">EN</span>/<span class="de_button">DE</span></div>')

     $('.menu_16').append('<div> </div>')

     $('.menu_17').append('<div>Human.Machine.Interaction</div>')
     $('.menu_18').append('<div class="en">Curators</div><div class="de">Kuratorinnen</div>')
     $('.menu_19').append('<div class="en">Nominators</div><div class="de">Nominator*innen</div>')
     $('.menu_20').append('<div class="en">Credit</div><div class="de">Credit</div>')

     $('.menu_21').append('<div> &nbsp;</div>')

     $('.menu_22').append('<div class="en">Exhibition</div><div class="de">Ausstellung</div>')
     for (var i = 23; i < 36; i++) {
         $('.menu_'+i).append('<div>'+db[i-23][0][0].split('(')[0]+'</div>')
     }

     $('.menu_37').append('<div> &nbsp;</div>')

     $('.menu_38').append('<div class="en">Conference</div><div class="de">Konferenz</div>')
     $('.menu_39').append('<div class="en">Day 1. October 7th Thursday</div>    <div class="de">Tag 1. Donnerstag, 7. Oktober</div>')
     $('.menu_40').append('<div class="en">Day 2. October 8th Friday</div>      <div class="de">Tag 2. Freitag, 8. Oktober</div>')
     $('.menu_41').append('<div class="en">Day 3. October 9th Saturday</div>    <div class="de">Tag 3. Samstag, 9. Oktober</div>')
     $('.menu_42').append('<div class="en">Day 4. October 10th Sunday</div>     <div class="de">Tag 4. Sonntag, 10. Oktober</div>')

    }








































































































































































$('.menu_popup').css({'height':height+'px'})
    var donecounter = 0
    var appended = false
    var click_counter = 0
    // scene.background = new THREE.Color( 0xdef6ff );
    var curve_array = Array()
    var isScrolling
    var currentScrolling
    var prev_scroll = 0
    var artsit_amount = 13
    var global_i = 0 
    var global_i_2 = 0 

    var texture_c_array = Array(artsit_amount)
    var material_c_array = Array(artsit_amount)
    var mesh_c_array = Array(artsit_amount)
    var program_amount = 4/2
    var extra_amout = 1
    var side_amount = 26
    var depth_amount = 13*13
    var wall_group, wall_group_clone;
    var random_array
    var image_mesh_array = Array(0)
    var image_mesh_array_position_z = Array(10)
    var image_mesh_array_position_x = Array(10)
    var image_mesh_array_position_y = Array(10)
    var mesh_image_array = Array(depth_amount)

    var gridHelper_array = Array(0)
    // var sidegridHelper_array = Array(Math.floor(depth_amount/6))

    var terrain_group = new THREE.Group()

    var unit = 30
    var unit_h = unit/17
    var unit_h_img = unit/2.5
    var imgrat = 100
    var offset_unit = (unit/unit_h)/imgrat

    var rad = 85
    var counter = 0
    var scroll_counter = 0
        
    var speed = 100
    var curve_val_x = 0.1
    var curve_val_y = 0.1
    var mousePos = { x: 0, y: 0};

    var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
    var camera_pos_y = 12.5
    // var camera_pos_y = -100
    var camera_pos_z = (unit/(1.414))*(depth_amount - 1);
    camera.position.z = camera_pos_z 
    camera.position.y = camera_pos_y
    // camera.rotation.y = degrees_to_radians(180)

    // camera.lookAt(0,0,0);
    var scrolled = false

    var cameragroup = new THREE.Group()
    cameragroup.add(camera)
    scene.add(cameragroup);

    var whole_group = new THREE.Group()
    var wall_group_sub
    var wall_group_sub_2
    var wall_group_sub_3
    scene.add(whole_group)

    const geometry = new THREE.PlaneGeometry( unit, unit_h );

    const geometry_b = new THREE.PlaneGeometry( unit, unit_h*1.2 );
    const geometry_w = new THREE.PlaneGeometry( unit*2, unit_h );
    const geometry_img = new THREE.PlaneGeometry( unit, unit_h_img );
    var texture_array = Array(side_amount)
    var img_texture_array = Array(depth_amount)
    var material_array = Array(side_amount)
    var img_material_array = Array(depth_amount)

    var ani_position_x = Array(depth_amount)
    var ani_position_y = Array(depth_amount)
    var ani_position_z = Array(depth_amount)
    var loader = new THREE.TextureLoader()
    loader.crossOrigin = "";




    for (var i = img_material_array.length - 1; i >= 0; i--) {
        img_material_array[i] = Array(side_amount)
    }
    for (var i = img_texture_array.length - 1; i >= 0; i--) {
        img_texture_array[i] = Array(side_amount)
    }
    var ar_counter = Array(texture_array.length)
    for (var i = ar_counter.length - 1; i >= 0; i--) {
        ar_counter[i] = i
    }
    function pad_with_zeroes(number, length) {

        var my_string = '' + number;
        while (my_string.length < length) {
            my_string = '0' + my_string;
        }
        return my_string;
    }



col1setting()
$( window ).resize(function() {
  col1setting()

    width = window.innerWidth;
    height = window.innerHeight;
});
function col1setting(){
    console.log('et')
    if(width/height>118/102){
        $('.col1_under_1').css({'height':$('.col1').outerHeight() - $('.col1_under_2').outerHeight() + 'px'})
    }else if(width/height>80/100){
        $('.col1').css({'width':(height-0.02*height)+'px'})
        $('.col1_under_1').css({'height':'11.25vh'})
    }else {
        $('.col1').css({'width':(height-0.02*height)+'px'})
        $('.col1_under_1').css({'height':'6.25vh'})
    }
}












    loading_texture_1()
    var loaded_tex_img_array = Array(13)
    var loaded_tex_array = Array(13)
    var offset_array = [4, 5, 4, 6, 6, 6, 5, 4, 4, 6, 3, 2, 6]
    function loading_texture_1(){
        loader.load( 'img/title-demo.png',
            function (tex) {
                texture_array[global_i_2] = tex
                texture_array[global_i_2].needsUpdate = true;
                texture_array[global_i_2].wrapS = texture_array[global_i_2].wrapT = THREE.RepeatWrapping;
                texture_array[global_i_2].repeat.set( offset_unit , 1 );
                texture_array[global_i_2].offset.x = offset_unit*global_i_2
                material_array[global_i_2] = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: texture_array[global_i_2]} );
                if(global_i_2<13-1){
                    global_i_2++
                    loading_texture_1()
                }else{
                    loading_img_texture_1()
                }
            }
        )
    }
    function loading_texture_2(){
        for (var i = texture_array.length - 1; i >= 0; i--) {
            for (var j = texture_array[i].length - 1; j >= 0; j--) {
                if(i==0)
                if(i==0&&j==0){
                    loading_img_texture_1()
                }
            }
        }
    }
    function loading_img_texture_1(){
        loader.load( 'thumb/img_rsp_'+(global_i+1)+'.jpg' ,
            function (tex) {
                loaded_tex_img_array[global_i] = tex
                if(global_i<13-1){
                    global_i++
                    loading_img_texture_1()
                }else{
                    loading_img_texture_2()
                }
            }
        )
    }
    function loading_img_texture_2(){
                for (var i = img_texture_array.length - 1; i >= 0; i--) {
                    for (var j = img_texture_array[i].length - 1; j >= 0; j--) {
                        if( ((Math.floor(i/13)+1) == 1 &&  (j-1)<4)||
                            ((Math.floor(i/13)+1) == 2 &&  (j-1)<5)|| 
                            ((Math.floor(i/13)+1) == 3 &&  (j-1)<4)|| 
                            ((Math.floor(i/13)+1) == 4 &&  (j-1)<6)|| 
                            ((Math.floor(i/13)+1) == 5 &&  (j-1)<6)|| 
                            ((Math.floor(i/13)+1) == 6 &&  (j-1)<6)|| 
                            ((Math.floor(i/13)+1) == 7 &&  (j-1)<5)|| 
                            ((Math.floor(i/13)+1) == 8 &&  (j-1)<4)|| 
                            ((Math.floor(i/13)+1) == 9 &&  (j-1)<4)|| 
                            ((Math.floor(i/13)+1) == 10 && (j-1)<6)|| 
                            ((Math.floor(i/13)+1) == 11 && (j-1)<3)|| 
                            ((Math.floor(i/13)+1) == 12 && (j-1)<2)|| 
                            ((Math.floor(i/13)+1) == 13 && (j-1)<6)
                            ){  
                                img_texture_array[i][j] = loaded_tex_img_array[Math.floor(i/13)].clone();
                                img_texture_array[i][j].needsUpdate = true;
                                img_texture_array[i][j].wrapS = img_texture_array[i][j].wrapT = THREE.RepeatWrapping;
                                img_texture_array[i][j].repeat.set( 1/offset_array[Math.floor(i/13)] ,  1/13);
                                img_texture_array[i][j].offset.x = 1/offset_array[Math.floor(i/13)] * j
                                img_texture_array[i][j].offset.y = (i%13)/13
                                img_material_array[i][j] = new THREE.MeshBasicMaterial( {  color:0xffffff, side: THREE.DoubleSide, map: img_texture_array[i][j]} );
                                if(i==0&&j==0){create_wall()}
                            }
                        }
                    }
    }
    const material_blank = new THREE.MeshBasicMaterial( {color:0xffffff, side: THREE.DoubleSide} );
    for (var i = texture_c_array.length - 1; i >= 0; i--) {
        texture_c_array[i] = loader.load( 'thumb/title-c_demo.png');
        texture_c_array[i].wrapS = texture_c_array[i].wrapT = THREE.RepeatWrapping;
        texture_c_array[i].repeat.set( 1, 1 );
        material_c_array[i] = new THREE.MeshBasicMaterial( {map: texture_c_array[i], transparent: true} );
    }
    const material_c3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide, transparent: true,  opacity:1} );

    var terrain;
    var t_w = 1000
    var t_wdiv = 100
    var t_depth = 0
    var image_wrapper = new THREE.Group();

    $('.wrapper').each(function(index){
        $(this).css({'background-position':Math.floor(Math.random()*10)*10+'% '+Math.floor(Math.random()*10)*10+'% '})
        $(this).css({'background-image':'url(img/img_'+(index%13+1)+'.png)'})
    })

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var plainarray = Array(depth_amount)
    var sub_group_array = Array(depth_amount)
    var sub_group_boxarray = Array(depth_amount)
    function shuffle(array) {
        var currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    function rgbToHex(red, green, blue) {
      const rgb = (red << 16) | (green << 8) | (blue << 0);
      return '0x' + (0x1000000 + rgb).toString(16).slice(1);
    }
    function create_wall(){
        wall_group = new THREE.Group()
        wall_group_sub = new THREE.Group()
        wall_group_sub_2 = new THREE.Group()
        wall_group_sub_3 = new THREE.Group()

        for (var j = Math.floor(depth_amount/6)- 1; j >= 0; j--) {
            var group_b = new THREE.Group()
            for (var i = side_amount - 1; i >= 0; i--) {
                const geometry_grid = new THREE.PlaneGeometry( 1.5, unit*1  );
                const wireframe = new THREE.EdgesGeometry( geometry_grid );

                if(isMobile){
                    var box = new THREE.LineSegments( wireframe, new THREE.LineBasicMaterial( { 
                        linewidth: 0,color: 0x000000, opacity:0.25 } ) )
                }else{
                    var box = new THREE.LineSegments( wireframe, new THREE.LineBasicMaterial( { 
                        linewidth: 0,color: 0x000000, opacity:0.25 } ) )
                }

                if((i%2 == 0)){
                    box.rotation.x = degrees_to_radians(-45)
                }else{
                    box.rotation.x = degrees_to_radians(45)
                }
                box.position.x = rad

                sub_group_boxarray[j] = Array(Math.floor(depth_amount/6))
                sub_group_boxarray[j][i] = new THREE.Group()
                sub_group_boxarray[j][i].add(box)
                sub_group_boxarray[j][i].rotation.z = degrees_to_radians((360/side_amount)*j+(360/side_amount)*i+180)
                group_b.add(sub_group_boxarray[j][i])
            }
            wall_group_sub.add(group_b)
            if(j==0){
                whole_group.add( wall_group_sub );
                for (var i = Math.floor(depth_amount/6) - 1; i >= 0; i--) {
                    wall_group_sub.children[i].position.x = xx(curve_val_x*i)
                    wall_group_sub.children[i].position.y = xx(curve_val_y*i)
                    wall_group_sub.children[i].rotation.z = degrees_to_radians(-90)
                }
                done()
            }
        }
        var texture_l_array = Array(12)
        for (var i = texture_l_array.length - 1; i >= 0; i--) {
            texture_l_array[i] = loader.load( 'img/let-demo.png' );
            texture_l_array[i].wrapS = texture_l_array[i].wrapT = THREE.RepeatWrapping;
        }
        //         var texture_g = loader.load( 'img/grad2.png' );
        //             texture_g.wrapS = texture_g.wrapT = THREE.RepeatWrapping;
        // var materials_000_array = Array(texture_array.length)
        // for (var i = texture_array.length - 1; i >= 0; i--) {
        //     materials_000_array[i] = [
        //        new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map:texture_array[i]} ),
        //        new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map:texture_array[i]} ),
        //        new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map:texture_array[i]} ),
        //        new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map:texture_array[i]} ),
        //        new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map:texture_array[i]} ),
        //        new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, color:0xff2d03} )
        //     ];
        // }
        for (var j = Math.floor(depth_amount/6)- 1; j >= 0; j--) {
            if(j%2 == 1){
                        var group_b_2 = new THREE.Group()
                        wall_group_sub_2.add(group_b_2)
                    }
                        var group_b_2_sub_1 = new THREE.Group()
                        var group_b_2_sub_2 = new THREE.Group()
                        var group_b_2_sub_3 = new THREE.Group()
                        var group_b_2_sub_4 = new THREE.Group()


            const material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: texture_l_array[j%texture_l_array.length]} );

            const geometry = new THREE.BoxGeometry(  unit*0.95, unit*0.95, unit_h_img )
            const plane = new THREE.Mesh( geometry, material );
                  plane.position.x = rad+(unit_h_img/2)
                  plane.rotation.y = degrees_to_radians(90)
                  plane.rotation.z = degrees_to_radians(90)
                  plane.rotation.x = degrees_to_radians(225)
                  group_b_2_sub_1.add(plane)
            const plane2 = new THREE.Mesh( geometry, material );
                  plane2.position.x = rad+(unit_h_img/2)
                  plane2.rotation.y = degrees_to_radians(90)
                  plane2.rotation.z = degrees_to_radians(90)
                  plane2.rotation.x = degrees_to_radians(225)
                    group_b_2_sub_2.add(plane2)
            const plane3 = new THREE.Mesh( new THREE.PlaneGeometry( unit*1.5, unit_h_img), material );
                  plane3.position.x = rad+(unit_h_img/2)
                  plane3.rotation.y = degrees_to_radians(0)
                  plane3.rotation.z = degrees_to_radians(90)
                  plane3.rotation.x = degrees_to_radians(135)
                    group_b_2_sub_3.add(plane3)
            const plane4 = new THREE.Mesh( geometry, material );
                  plane4.position.x = rad+(unit_h_img/2)
                  plane4.rotation.y = degrees_to_radians(0)
                  plane4.rotation.z = degrees_to_radians(90)
                  plane4.rotation.x = degrees_to_radians(135)
                    group_b_2_sub_4.add(plane4)

                  wall_group_sub_2.children[wall_group_sub_2.children.length-1].add(group_b_2_sub_1)
                  wall_group_sub_2.children[wall_group_sub_2.children.length-1].add(group_b_2_sub_2)
                  wall_group_sub_2.children[wall_group_sub_2.children.length-1].add(group_b_2_sub_3)
                  wall_group_sub_2.children[wall_group_sub_2.children.length-1].add(group_b_2_sub_4)

                if(j==0){
                    whole_group.add( wall_group_sub_2 );
                    for (var i = 0; i < wall_group_sub_2.children.length*2 - 1; i = i+2) {
                        wall_group_sub_2.children[i/2].position.x = xx(curve_val_x*i*2)
                        wall_group_sub_2.children[i/2].position.y = xx(curve_val_y*i*2)
                        // console.log(wall_group_sub_2.children[i])
                            wall_group_sub_2.children[i/2].children[0].children[0].geometry = new THREE.BoxGeometry(  unit*0.85, unit*0.85, unit*0.85 )
                            wall_group_sub_2.children[i/2].children[0].children[0].position.x = rad+(unit*0.4)
                            wall_group_sub_2.children[i/2].children[1].children[0].geometry = new THREE.BoxGeometry(  unit*0.85, unit*0.85, unit*0.85 )
                            wall_group_sub_2.children[i/2].children[1].children[0].position.x = rad+(unit*0.4)

                            wall_group_sub_2.children[i/2].children[3].children[0].geometry = new THREE.PlaneGeometry( unit*1.5, unit_h_img)
                            wall_group_sub_2.children[i/2].children[3].children[0].position.x = rad+(unit*0.4)
                            wall_group_sub_2.children[i/2].children[7].children[0].geometry = new THREE.PlaneGeometry( unit*1.5, unit_h_img)
                            wall_group_sub_2.children[i/2].children[7].children[0].position.x = rad+(unit*0.4)
                            wall_group_sub_2.children[i/2].children[1].rotation.z = degrees_to_radians((360/(side_amount))*i )
                            wall_group_sub_2.children[i/2].children[3].rotation.z = degrees_to_radians((360/(side_amount))*(i+15) )
                            wall_group_sub_2.children[i/2].children[7].rotation.z = degrees_to_radians((360/(side_amount))*(i+22) )
                            wall_group_sub_2.children[i/2].children[4].rotation.z = degrees_to_radians((360/(side_amount))*(i+8))
                            wall_group_sub_2.children[i/2].children[5].rotation.z = degrees_to_radians((360/(side_amount))*(i+16))
                            wall_group_sub_2.children[i/2].children[2].rotation.z = degrees_to_radians((360/(side_amount))*(i+18))
                            wall_group_sub_2.children[i/2].children[6].rotation.z = degrees_to_radians((360/(side_amount))*(i+10))
                            wall_group_sub_2.children[i/2].children[4].children[0].material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, color:0xff2d03} )
                            wall_group_sub_2.children[i/2].children[5].children[0].material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, color:0x01ecff} )
                            wall_group_sub_2.children[i/2].children[3].children[0].material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, color:0x24ffcd} )
                            wall_group_sub_2.children[i/2].children[7].children[0].material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, color:0x24ffcd} )
                            wall_group_sub_2.children[i/2].children[2].children[0].material = material_array[i%13]
                            wall_group_sub_2.children[i/2].children[6].children[0].material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, color:0xffffff, map:texture_array[i%13]})
                            if(i == (wall_group_sub_2.children.length-1)*2){
                                done()
                            }
                    }
                }
        }

        for (var j = depth_amount- 1; j >= 0; j--) {
            var group = new THREE.Group()
            sub_group_array[j] = Array(side_amount)
            plainarray[j]=Array(side_amount)

            for (var i = side_amount - 1; i >= 0; i--) {
                plainarray[j][i] = new THREE.Mesh( geometry, material_blank );
                sub_group_array[j][i] = new THREE.Group()

                if(i%2 == 0){
                    plainarray[j][i].rotation.x = degrees_to_radians(-45)
                }else{
                    plainarray[j][i].rotation.x = degrees_to_radians(45)
                }
                plainarray[j][i].position.x = rad
                plainarray[j][i].rotation.z = degrees_to_radians(90)

                if(j%2==0){
                    sub_group_array[j][i].rotation.z = degrees_to_radians((360/side_amount)*j+(360/side_amount)*i)
                }else{
                    sub_group_array[j][i].rotation.z = degrees_to_radians((360/side_amount)*j+(360/side_amount)*i)
                }

                group.add(sub_group_array[j][i])
            }
            group.position.z = (unit/(1.414))*j
            ani_position_z[j] = (unit/(1.414))*j


            wall_group.add(group)

            if(j==0){
                    whole_group.add( wall_group );
                    for (var i = depth_amount - 1; i >= 0; i--) {
                        ani_position_x[depth_amount-i-1] = xx(curve_val_x*i)
                        ani_position_y[depth_amount-i-1] = xx(curve_val_y*i)
                        wall_group.children[i].position.x = xx(curve_val_x*i)
                        wall_group.children[i].position.y = xx(curve_val_y*i)
                        wall_group.children[i].rotation.z = degrees_to_radians(-90)
                    }
                    for (var i = depth_amount - 1; i >= 0; i--) {
                        mesh_image_array[i] = Array()
                        for (var k = side_amount - 1; k >= 0; k--) {
                                plainarray[i][(k-i+side_amount*10)%side_amount].geometry = geometry_img

                            if(k==1 && i%2==1){ 
                                plainarray[i][k].material = material_array[i%13]
                                plainarray[i][k].geometry =  new THREE.PlaneGeometry( unit*1.5, unit_h_img)
                                plainarray[i][k].position.x = rad-(unit_h*2)
                                sub_group_array[i][k].add(plainarray[i][k])
                            }
                            if(
                                    ((Math.floor(i/13)+1) == 1 &&  (k-1)<4)||
                                    ((Math.floor(i/13)+1) == 2 &&  (k-1)<5)|| 
                                    ((Math.floor(i/13)+1) == 3 &&  (k-1)<4)|| 
                                    ((Math.floor(i/13)+1) == 4 &&  (k-1)<6)|| 
                                    ((Math.floor(i/13)+1) == 5 &&  (k-1)<6)|| 
                                    ((Math.floor(i/13)+1) == 6 &&  (k-1)<6)|| 
                                    ((Math.floor(i/13)+1) == 7 &&  (k-1)<5)|| 
                                    ((Math.floor(i/13)+1) == 8 &&  (k-1)<4)|| 
                                    ((Math.floor(i/13)+1) == 9 &&  (k-1)<4)|| 
                                    ((Math.floor(i/13)+1) == 10 && (k-1)<6)|| 
                                    ((Math.floor(i/13)+1) == 11 && (k-1)<3)|| 
                                    ((Math.floor(i/13)+1) == 12 && (k-1)<2)|| 
                                    ((Math.floor(i/13)+1) == 13 && (k-1)<6)
                             ){
                                    plainarray[i][(k-i+side_amount*10)%side_amount].material = img_material_array[i][k]
                                    sub_group_array[i][(k-i+side_amount*10)%side_amount].add(plainarray[i][(k-i+side_amount*10)%side_amount])
                                    mesh_image_array[i].push(plainarray[i][(k-i+side_amount*10)%side_amount])
                                    sub_group_array[i][(k-i+side_amount*10)%side_amount].position.x = (unit_h_img/2)
                                    if(Math.floor(i/13)%2 == 0){
                                        if(((k-i+side_amount*10)%side_amount)%2==0){
                                            sub_group_array[i][(k-i+side_amount*10)%side_amount].rotation.z = degrees_to_radians((360/side_amount)*i+(360/side_amount)*((k-i+side_amount*10)%side_amount))+degrees_to_radians(-360/side_amount*6)
                                        }else{
                                            sub_group_array[i][(k-i+side_amount*10)%side_amount].rotation.z = degrees_to_radians((360/side_amount)*i+(360/side_amount)*((k-i+side_amount*10)%side_amount))+degrees_to_radians(-360/side_amount*6)
                                        }
                                    }
                                    else{
                                        if(((k-i+side_amount*10)%side_amount)%2==0){
                                            sub_group_array[i][(k-i+side_amount*10)%side_amount].rotation.z = degrees_to_radians((360/side_amount)*i+(360/side_amount)*((k-i+side_amount*10)%side_amount))
                                        }else{
                                            sub_group_array[i][(k-i+side_amount*10)%side_amount].rotation.z = degrees_to_radians((360/side_amount)*i+(360/side_amount)*((k-i+side_amount*10)%side_amount))
                                        }
                                    }
                                    if(Math.floor(i/13) == 0){
                                        if(((k-i+side_amount*10)%side_amount)%2==0){
                                            sub_group_array[i][(k-i+side_amount*10)%side_amount].rotation.z = degrees_to_radians((360/side_amount)*i+(360/side_amount)*((k-i+side_amount*10)%side_amount))+degrees_to_radians(-360/side_amount*3)
                                        }else{
                                            sub_group_array[i][(k-i+side_amount*10)%side_amount].rotation.z = degrees_to_radians((360/side_amount)*i+(360/side_amount)*((k-i+side_amount*10)%side_amount))+degrees_to_radians(-360/side_amount*3)
                                        }
                                        plainarray[i][(k-i+side_amount*10)%side_amount].material = material_blank
                                    }
                            }
                            if(i==0&&k==0){
                                done()
                            }
                            if( (i%13 == 0&&(k-i+side_amount*10)%side_amount == 5)){
                                mesh_c_array[i] = plainarray[i]
                                plainarray[i][(k-i+side_amount*10)%side_amount].position.x = 0
                                // plainarray[i][(k-i+side_amount*10)%side_amount].rotation
                                plainarray[i][(k-i+side_amount*10)%side_amount].material = material_c_array[Math.floor(i/13)]
                                plainarray[i][(k-i+side_amount*10)%side_amount].geometry = new THREE.PlaneGeometry( rad*1.8, rad*1.8)
                                plainarray[i][(k-i+side_amount*10)%side_amount].rotation.x = degrees_to_radians(0)
                                curve_array.push(plainarray[i][(k-i+side_amount*10)%side_amount])
                                sub_group_array[i][(k-i+side_amount*10)%side_amount].add(plainarray[i][(k-i+side_amount*10)%side_amount])
                            }
                        }
                    }
                }
        }
        scroll_func((15000))
        render()
    }



    function done(){
        donecounter++
        if(donecounter==3 && !appended){ append_contents(); console.log('ehy')}
    }



    document.addEventListener('mousemove', function(e) {
                let body = document.querySelector('body');
                let circle = document.getElementsByClassName('scroll_cursor')[0];
                let left = e.offsetX;
                let top = e.offsetY;
                circle.style.left = left + 'px';
                circle.style.top = top + 'px';
    });
    $('.back_button').click(function(){
        $('body').removeClass('menu_on')
    })
    $('.menu_button').click(function(){
        $('body').addClass('menu_on')  
    })
    $('.scroll').click(function(){
        $('body').removeClass('menu_on') 
    })
    $('.detail_wrapper_wrapper').click(function(){
        $('body').removeClass('menu_on') 
    })
    $('.close_button').click(function(){
        $('.detail_wrapper_wrapper').removeClass('animation_activated')
        window.location.hash = ''
        page_move()
    })
    var hor_pos = 0
    var vir_pos = 0
    $('.arrow_r').click(function(){
        hor_pos++
        hor_pos = hor_pos%3
        window.location.hash = '#' + hor_pos + '_' + 0;
        $('.detail_wrapper_wrapper').addClass('animation_activated')
        console.log('1')
        page_move()
    })
    $('.arrow_l').click(function(){
        hor_pos--
        hor_pos = (hor_pos+3)%3
        window.location.hash = '#' + hor_pos + '_' + 0;
        $('.detail_wrapper_wrapper').addClass('animation_activated')
        console.log('2')
        page_move()
    })

 



page_move()
function page_move(){
    var hash = window.location.hash.substring(1);
    if(window.location.hash){
        $('body').addClass('menuon')
        if(!appended){
            append_contents()
            appended=true
        }
        hor_pos = window.location.hash.split('#')[1].split('_')[0]
        vir_pos = window.location.hash.split('#')[1].split('_')[1]
        $('.detail_wrapper_wrapper').show()
        if(hor_pos == 0){
            $('.detail_wrapper_0').scrollTop(0)
            if(vir_pos == 0){
                $('.detail_wrapper_0').scrollTop(0)
            }else{
                $('.detail_wrapper_0').scrollTop($('.bio_'+vir_pos).position().top)
            }
        }
        if(hor_pos == 1){
            $('.detail_wrapper_1').scrollTop(0)
            if(vir_pos == 0){
                $('.detail_wrapper_1').scrollTop(0)
            }else{
                $('.detail_wrapper_1').scrollTop($('.a_img_'+vir_pos).position().top)
            }
        }
        if(hor_pos == 2){
            $('.detail_wrapper_1').scrollTop(0)
            if(vir_pos == 0){
                $('.detail_wrapper_1').scrollTop(0)
            }else{
                $('.detail_wrapper_1').scrollTop($('.c_start_'+vir_pos).position().top)
            }
        }
        if(width<height){
            $('.detail_wrapper_wrapper').css({'margin-left':hor_pos*-100+'vw'})
        }else{
            $('.detail_wrapper_wrapper').css({'margin-left':hor_pos*-100+'vh'})

        }
        $('.detail_wrapper').css({'opacity':0.5})
        $('.detail_wrapper_'+Math.abs(hor_pos)).css({'opacity':'1'})
    }else{
        $('body').removeClass('menuon')
        $('.detail_wrapper_wrapper').hide()
    }
}




$('.menu_15').click(function(){
    if($('body').attr('class').split('body_en').length>1){
        $('body').removeClass('body_en').addClass('body_de')
    }else{
        $('body').removeClass('body_de').addClass('body_en')
    }
})
$('.menu_elem_ex').click(function(){
    window.location.hash = '#1_'+$(this).attr('class').split('menu_elem_ex_')[1].split(' ')[0];
    page_move()
    $('body').removeClass('menu_on')
})

$('.menu_elem_ab').click(function(){
    window.location.hash = '#0_'+$(this).attr('class').split('menu_elem_ab_')[1].split(' ')[0];
    page_move()
    $('body').removeClass('menu_on')

})
$('.menu_elem_con').click(function(){
    window.location.hash = '#2_'+$(this).attr('class').split('menu_elem_con_')[1].split(' ')[0];
    page_move()
    $('body').removeClass('menu_on')
})

    function dis(x1, x2, y1, y2){
        var a = x1 - x2;
        var b = y1 - y2;
        return Math.sqrt( a*a + b*b );
    }

    var clock = new THREE.Clock();
    function render() {
        if(!scrolled){
            setTimeout(function(){
                 render();
            },1000)
        }
        renderer.render(scene, camera);
    }
    $(".fakescroll").scroll(function(){
        scrolled = true
        $('.popup_wrapper').css({'bottom':-1*(($(".fakescroll").scrollTop()+15000)%($('.popup_wrapper').outerHeight()-height))+'px'})
        scroll_func($(".fakescroll").scrollTop())
        

        window.clearTimeout( isScrolling );
        window.clearTimeout( currentScrolling );


        // isScrolling = setTimeout(function() {
        //     scroll_ani(0,50,prev_scroll,$(".fakescroll").scrollTop())
        // },10);
    })
    detect_scrolling()
    function detect_scrolling(){
        requestAnimationFrame(detect_scrolling)
        if($('.show').length>0){
        }
    }
    $(".scroll-content").scroll(function(){
        scroll_func(getTransform())
    })
    function getTransform() {
        const values = -1*parseInt(document.getElementsByClassName('scroll-content')[0].style.transform.split('translate3d(0px, ')[1].split('px, 0px)')[0])
        // const transform = values[1].split(/,\s?/g).map(parseInt);

        return values
    }
    function easeInOutQuint2(x){
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    function easeInOutQuint(x){
        if(x < 0.5){
            var k = (x)*2
            return (k * k * k * k * k)/2
        }else{
            var k = (x-0.5)*2
            return (1 - Math.pow(1 - k, 5))/2+0.5
        }
    }
    function degrees_to_radians(degrees){
      var pi = Math.PI;
      return degrees * (pi/180);
    }

    raycaster = new THREE.Raycaster();
    var m = new THREE.Vector2(), INTERSECTED;
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );   
    function onDocumentMouseDown( event ) {
    event.preventDefault();
    m.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    m.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    // find intersections
    raycaster.setFromCamera( m, camera );
        var intersects = raycaster.intersectObjects( image_wrapper.children );
        if ( intersects.length > 0 ) {
            if ( INTERSECTED != intersects[ 0 ].object ) {
                if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
                INTERSECTED = intersects[ 0 ].object;
                INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                INTERSECTED.material.emissive.setHex( 0xff0000 );
            }
        } else {
            if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
            INTERSECTED = null;
        }
    }

    // document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; 
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
        // camera.position.y = 15;
        // camera.position.x = 0;
        // camera.position.y = map_range(mousePos.y, 0,  height, -10, 10)
        camera.position.x = -1*map_range(mousePos.x, 0,   width,  -10, 10)
        // for (var i = wall_array_2.length - 1; i >= 0; i--) {
        //     wall_array_2[wall_array_2.length-i-1].position.x = xx(-1*map_range(mousePos.x, 0,  width,  -0.5, 0.5)*i)
        // }
    }
    function xx(x){
        if(x<0){
            return -1*x*x
        }else{
            return x*x
        }
    }
    function map_range(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }
    function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "0x" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


    function scroll_func(scroll_counter){
        var slow_speed_x = speed*200
        var slow_speed_y = speed*260
        var eased_val_x = easeInOutQuint((scroll_counter%slow_speed_x)/slow_speed_x)*slow_speed_x
        var eased_val_y = easeInOutQuint((scroll_counter%slow_speed_y)/slow_speed_y)*slow_speed_y
        if(eased_val_x<slow_speed_x/2){
            curve_val_x = map_range(eased_val_x, 0,  slow_speed_x/2, -0.2,0.2)
        }else{
            curve_val_x = map_range(eased_val_x, slow_speed_x/2, slow_speed_x, 0.2,-0.2)
        }
        if(eased_val_y<slow_speed_y/2){
            curve_val_y = map_range(eased_val_y, 0,  slow_speed_y/2, 0.2,-0.2)
        }else{
            curve_val_y = map_range(eased_val_y, slow_speed_y/2, slow_speed_y, -0.2,0.2)
        }
            // curve_val_y =0.
        $('.wrapper').css({'transform-origin':((0.4-curve_val_x+0.2)*100)+'% '+((0.4-curve_val_y+0.2)*100)+'%'})
        for (var i = depth_amount - 1; i >= 0; i--) {
            ani_position_x[depth_amount-i-1] = xx(curve_val_x*i)
            ani_position_y[depth_amount-i-1] = -1*xx(curve_val_y*i)
        }

        scroll_counter = (scroll_counter+15000)+8.3*height
        for (var i = wall_group.children.length - 1; i >= 0; i--) {
            wall_group.children[i].children[0].position.x = x
            
            wall_group.children[i].position.x = -1*map_range((scroll_counter%speed), 0,  speed, ani_position_x[(Math.floor(scroll_counter/speed)-i)%depth_amount-1], ani_position_x[(Math.floor(scroll_counter/speed)-i)%depth_amount])
            wall_group.children[i].position.y = -1*map_range((scroll_counter%speed), 0,  speed, ani_position_y[(Math.floor(scroll_counter/speed)-i)%depth_amount-1], ani_position_y[(Math.floor(scroll_counter/speed)-i)%depth_amount])
            wall_group.children[i].position.z = map_range((scroll_counter%speed), 0,  speed, ani_position_z[(Math.floor(scroll_counter/speed)-i)%depth_amount-1], ani_position_z[(Math.floor(scroll_counter/speed)-i)%depth_amount])
        }
        // grid
        for (var i = wall_group_sub.children.length - 1; i >= 0; i--) {
            var x = map_range(Math.abs(((scroll_counter)/10+i*2)%100-50),0,50,0,rad/4)+rad/4*3
            wall_group_sub.children[i].position.x = -1*map_range((scroll_counter%speed), 0,  speed, ani_position_x[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_x[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5])
            wall_group_sub.children[i].position.y = -1*map_range((scroll_counter%speed), 0,  speed, ani_position_y[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_y[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5])
            wall_group_sub.children[i].position.z = map_range((scroll_counter%speed), 0,  speed, ani_position_z[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_z[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5])
            
            for (var k = wall_group_sub.children[i].children.length - 1; k >= 0; k--) {
                var x = map_range(Math.abs(((scroll_counter)/10+k*10)%100-50),0,50,1,30)
                // wall_group_sub.children[i].children[k].children[0].scale.x = x
            }
            // wall_group_sub.children[i].children[0].position.x = Math.abs(((scroll_counter/10+i*2))%(rad)-rad/2)+rad/2
        }
        //plate
        for (var i = 0; i < wall_group_sub_2.children.length*2-1; i = i+2) {
            wall_group_sub_2.children[i/2].position.x = -1*map_range((scroll_counter%speed), 0,  speed, ani_position_x[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_x[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5])
            wall_group_sub_2.children[i/2].position.y = -1*map_range((scroll_counter%speed), 0,  speed, ani_position_y[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_y[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5])
            wall_group_sub_2.children[i/2].position.z = map_range((scroll_counter%speed), 0,  speed, ani_position_z[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_z[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5]) + unit/1.414/2
                        
            // if(i%2==0){
            //             wall_group_sub_2.children[i+1].position.z = map_range((scroll_counter%speed), 0,  speed, ani_position_z[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_z[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5]) + unit/1.414/2
            //         }
            var x = map_range(Math.abs(((scroll_counter)/10+i*5)%100-50),0,50,0,1)
            var x2 = map_range(Math.abs(((scroll_counter)/10+i*5)%50-25),0,25,0,1)
            var z = map_range(Math.abs(((scroll_counter)/10+i*5)%100-50),0,50,1.5,1)
            var pos = map_range(Math.abs(((scroll_counter)/10+i*5)%100-50),0,50,rad,rad*1.4)
            var pos2 = map_range(Math.abs(((scroll_counter)/10+i*5)%50-25),0,25,rad,rad*1.2)
            var pos3 = map_range(Math.abs(((scroll_counter)/10+i*5)%100-50),0,50,rad,rad*2)
            wall_group_sub_2.children[i/2].children[0].children[0].scale.x = x
            wall_group_sub_2.children[i/2].children[1].children[0].scale.x = x2
            wall_group_sub_2.children[i/2].children[5].children[0].scale.x = x
            wall_group_sub_2.children[i/2].children[4].children[0].scale.x = x
            wall_group_sub_2.children[i/2].children[0].children[0].scale.z = z
            // wall_group_sub_2.children[i/2].children[1].children[0].scale.z = z
            wall_group_sub_2.children[i/2].children[5].children[0].scale.z = z
            // wall_group_sub_2.children[i/2].children[3].children[0].scale.z = z
            wall_group_sub_2.children[i/2].children[1].children[0].position.x = pos2
            wall_group_sub_2.children[i/2].children[4].children[0].position.x = pos
            wall_group_sub_2.children[i/2].children[2].children[0].position.x = pos2
            wall_group_sub_2.children[i/2].children[6].children[0].position.x = pos2

            wall_group_sub_2.children[i/2].children[3].children[0].position.x = pos2
            wall_group_sub_2.children[i/2].children[7].children[0].position.x = pos3
        }
        for (var i = curve_array.length - 1; i >= 0; i--) {
            curve_array[i].rotation.z = degrees_to_radians(scroll_counter/10)
        }
        // //outer
        // for (var i = wall_group_sub_3.children.length - 1; i >= 0; i--) {
        //     wall_group_sub_3.children[i].position.x = -1*map_range((scroll_counter%speed), 0,  speed, ani_position_x[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_x[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5])
        //     wall_group_sub_3.children[i].position.y = -1*map_range((scroll_counter%speed), 0,  speed, ani_position_y[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_y[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5])
        //     wall_group_sub_3.children[i].position.z = map_range((scroll_counter%speed), 0,  speed, ani_position_z[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5-1], ani_position_z[(Math.floor(scroll_counter/speed)-i)%Math.floor(depth_amount/6)+Math.floor(depth_amount/6)*5])
        //     wall_group_sub_3.children[i].rotation.z = degrees_to_radians(scroll_counter)
        // }
        animate()
    }
    function animate(scroll_counter){
        var counter = scroll_counter
        var speed = 400
        var orbit = speed*depth_amount
        var val = counter%speed
        var val_off = (counter+speed/2)%speed
        var eased_val = easeInOutQuint((counter%speed)/speed)*speed
        var round  = Math.floor(counter/speed)
        for (var i = texture_array.length - 1; i >= 0; i--) {
            // texture_array[i%13].offset.x  =offset_unit *i + counter
        }
        render()
    }

})

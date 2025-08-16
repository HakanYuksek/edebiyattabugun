import React, { useState } from "react";
import {Button, Col, Card, CardGroup, CardFooter, CardText, CardHeader } from "reactstrap";

export default function BookRecommendation() {
  const [query, setQuery] = useState("");
  const [summary, setSummary,] = useState([
{
    name: "1984",
    summary: "Baskıcı bir totaliter rejimde, bireysel özgürlüklerin yok edildiği distopik bir dünyada geçen bir hikâye.",
    details: "George Orwell'in distopik klasiği, Büyük Birader'in totaliter rejimi altında yaşayan Winston Smith'in hikayesini anlatır. Devletin sürekli gözetim, propaganda ve dil manipülasyonu yoluyla bireyin düşünce ve davranışlarını kontrol ettiği bu dünyada, Winston özgürlük ve gerçeklik arayışına girer. Roman, totalitarizm, bireysel özgürlükler ve devletin gücü üzerine derin bir eleştiridir."
  },
  {
    name: "Savaş ve Barış",
    summary: "Napolyon'un Rusya Seferi sırasında aristokrat ailelerin yaşamı ve savaşın etkileri.",
    details: "Lev Tolstoy'un epik romanı, Napolyon savaşları döneminde Rus aristokrasisinin yaşamını ve tarihsel olayları kapsamlı bir şekilde ele alır. Pierre, Andrey ve Natasha gibi karakterlerin kişisel yaşamları ve içsel dönüşümleri savaşın gölgesinde anlatılır. Tarih ve bireysel kaderler iç içe geçer, savaşın hem toplumsal hem de bireysel etkileri incelenir."
  },
  {
    name: "Suç ve Ceza",
    summary: "Fakir bir öğrenci olan Raskolnikov'un işlediği cinayet sonrası yaşadığı vicdan azabı.",
    details: "Fyodor Dostoyevski'nin psikolojik romanı, genç hukuk öğrencisi Raskolnikov'un işlediği cinayetin ardından yaşadığı suçluluk ve psikolojik bunalımı konu alır. Roman, ahlak, suç, ceza, vicdan ve insan doğası üzerine derin sorgulamalar içerir. Raskolnikov'un ruhsal mücadelesi ve toplumla çatışması merkezdedir."
  },
  {
    name: "Anna Karenina",
    summary: "Evli bir kadının yasak aşkı ve bunun trajik sonuçları.",
    details: "Tolstoy'un bu başyapıtı, aristokrat Anna Karenina'nın mutsuz evliliği ve genç subay Vronsky ile yaşadığı yasak aşkı anlatır. Roman, aşk, ihanet, toplum normları ve bireysel özgürlükler arasındaki çatışmayı derinlemesine işler. Anna'nın aşk uğruna toplum tarafından dışlanması ve trajik sonu, dönemin Rus aristokrasisinin portresini sunar."
  },
  {
    name: "Madame Bovary",
    summary: "Hayalperest bir kadının romantik beklentilerinin hayal kırıklığıyla sonuçlanması.",
    details: "Gustave Flaubert'in realist romanı, sıradan bir kasaba doktorunun eşi Emma Bovary'nin sıkıcı evlilikten kaçmak için hayal kuruşunu ve ardından yaşadığı trajediyi anlatır. Roman, toplumun baskısı, bireysel arzular ve hayal kırıklıkları temalarını işler, realizm akımının önemli örneklerindendir."
  },
  {
    name: "Bülbülü Öldürmek",
    summary: "Irkçılığın ve adaletsizliğin gölgesinde büyüyen küçük bir kızın hikâyesi.",
    details: "Harper Lee'nin romanı, 1930'ların Alabama'sında geçen çocukluk anılarını ve toplumdaki ırkçılık ile adaletsizliği anlatır. Scout Finch adlı küçük kızın gözünden, babası Atticus'un savunduğu masum bir siyah adamın davası ve kasaba hayatının sosyal dinamikleri derinlemesine işlenir."
  },
  {
    name: "Don Kişot",
    summary: "Hayal dünyasında yaşayan bir şövalye ve sadık yaverinin maceraları.",
    details: "Miguel de Cervantes'in klasik eseri, hayalperest Don Kişot'un şövalyelik ideallerini yaşatmaya çalışırken başına gelen komik ve trajik olayları anlatır. Roman, gerçeklik ve hayal arasındaki ince çizgiyi, toplum eleştirisini ve insan doğasını mizahi bir dille işler."
  },
  {
    name: "Gurur ve Önyargı",
    summary: "Aşk, yanlış anlamalar ve sosyal sınıf farklılıkları üzerine bir hikâye.",
    details: "Jane Austen'in romanı, Elizabeth Bennet ve Bay Darcy arasındaki aşk hikayesini anlatır. Romanda, 19. yüzyıl İngiltere’sinde sosyal sınıflar, aile ilişkileri ve bireysel gurur ile ön yargıların etkileri ustaca işlenir. Karakterlerin gelişimi ve mizahi dili dikkat çeker."
  },
  {
    name: "Beyaz Geceler",
    summary: "Yalnız bir adamın kısa süreliğine tanıştığı bir kadınla yaşadığı romantik anlar.",
    details: "Fyodor Dostoyevski'nin kısa romanı, Petersburg'da yalnız bir adamın genç bir kadınla yaşadığı dört gecelik duygusal ve hayali ilişkiyi anlatır. Roman, yalnızlık, aşk ve insan psikolojisi üzerine ince bir çalışma olarak kabul edilir."
  },
  {
    name: "Karamazov Kardeşler",
    summary: "Üç kardeşin baba cinayeti üzerinden gelişen ahlaki ve felsefi çatışmaları.",
    details: "Dostoyevski'nin başyapıtı, Karamazov ailesinin bireyleri üzerinden inanç, ahlak, özgür irade ve insan doğasının karanlık yönlerini sorgular. Baba cinayeti etrafında gelişen dramatik olaylar, derin felsefi tartışmalarla örülmüştür."
  },
  {
    name: "Monte Kristo Kontu",
    summary: "İhanete uğrayıp hapse atılan bir adamın intikam planı.",
    details: "Alexandre Dumas'ın macera romanı, genç Edmond Dantès'in haksız yere hapse atılması ve yıllar sonra Monte Kristo Kontu olarak dönüp düşmanlarından intikam almasını anlatır. Roman, adalet, ihanet, aşk ve özgürlük temalarını kapsayan zengin bir macera hikâyesidir."
  },
  {
    name: "İki Şehrin Hikayesi",
    summary: "Fransız Devrimi’nin gölgesinde geçen fedakârlık ve aşk hikâyesi.",
    details: "Charles Dickens'ın tarihi romanı, Paris ve Londra arasında geçen, Fransız Devrimi'nin karmaşasında iki adam ve iki kadının hayatlarının iç içe geçtiği dramatik bir hikâye sunar. Fedakârlık, kurtuluş ve toplumsal değişim temalarını işler."
  },
  {
    name: "Fareler ve İnsanlar",
    summary: "Büyük Buhran döneminde hayalleri olan iki işçi arkadaşın trajedisi.",
    details: "John Steinbeck'in kısa romanı, George ve Lennie adlı iki göçmen işçinin Amerikan rüyasını gerçekleştirme hayalleri ve trajik sonuçlarını anlatır. Roman, dostluk, umutsuzluk ve insanlık hallerine dair derin bir gözlemdir."
  },
  {
    name: "Deniz Feneri",
    summary: "Bir ailenin yıllar içinde değişen ilişkileri ve hayatın anlamı üzerine bir anlatı.",
    details: "Virginia Woolf'un modernist romanı, Ramsay ailesinin bir yaz boyunca İngiltere'deki deniz feneri evinde yaşadıklarını ve bireylerin içsel dünyalarını yansıtır. Zamanın akışı, bilinç akışı tekniği ve insan ilişkilerinin geçiciliği temel temalardır."
  },
  {
    name: "Moby Dick",
    summary: "Takıntılı bir kaptanın beyaz balinayı avlama mücadelesi.",
    details: "Herman Melville'in klasik eseri, Kaptan Ahab'ın beyaz balina Moby Dick'i avlama takıntısını ve bu arayışın trajik sonuçlarını anlatır. Roman, doğa ile insan, takıntı, kader ve varoluş üzerine derin metaforlar içerir."
  },
  {
    name: "Sefiller",
    summary: "Eski bir mahkûmun kurtuluş arayışı ve adalet mücadelesi.",
    details: "Victor Hugo'nun epik romanı, Jean Valjean'ın hapis hayatından kurtulup yeni bir hayata başlaması ve adalet sistemiyle mücadelesini anlatır. Roman, sevgi, fedakârlık, toplumsal adaletsizlik ve insanlık temalarını işler."
  },
  {
    name: "Yeraltından Notlar",
    summary: "Toplumdan kopmuş bir adamın içsel çatışmaları ve yalnızlığı.",
    details: "Fyodor Dostoyevski'nin kısa romanı, toplumdan soyutlanmış bir adamın iç dünyasındaki karanlık düşüncelerini, kendine yabancılaşmasını ve toplumsal eleştirilerini içerir. Varoluşsal sorgulamalarla doludur."
  },
  {
    name: "Küçük Kadınlar",
    summary: "Dört kız kardeşin çocukluktan yetişkinliğe geçiş süreci.",
    details: "Louisa May Alcott'un yarı-otobiyografik romanı, March ailesinin dört kız kardeşinin hayatındaki zorlukları, sevinçleri ve büyüme süreçlerini anlatır. Aile bağları, kadınların rolü ve kişisel gelişim temaları ön plandadır."
  },
  {
    name: "Dracula",
    summary: "Transilvanya’dan İngiltere’ye taşınan bir vampirin dehşet dolu hikâyesi.",
    details: "Bram Stoker'ın gotikromanı, Kont Dracula'nın İngiltere'ye gelişi ve vampirlik tehditleri karşısında insanlığın mücadelesini anlatır. Korku, doğaüstü ve Victorian dönemi toplumsal korkuları temalarındandır."
  },
  {
    name: "Frankenstein",
    summary: "Bilim uğruna yaratılan canavarın ve yaratıcısının trajik hikâyesi.",
    details: "Mary Shelley'nin gotik romanı, bilim adamı Victor Frankenstein'ın ölüyü diriltme çabası sonucu yarattığı canavarın yaşadığı dışlanma, yalnızlık ve öfkeyi anlatır. Yaratıcı ve yaratılan arasındaki ilişki, insan doğası, etik ve sorumluluk temaları derinlemesine işlenir."
  },
  {
    name: "Vadideki Zambak",
    summary: "Karşılıksız aşk yaşayan bir adamın duygusal mücadelesi.",
    details: "Honoré de Balzac'ın eseri, asil ve saf bir adamın, karşılıksız aşkı uğruna yaşadığı içsel çatışmaları ve toplumun karmaşıklıkları arasında sıkışmasını anlatır. Roman, idealizm ve gerçeklik arasındaki gerilimi inceler."
  },
  {
    name: "Babalar ve Oğullar",
    summary: "Nesiller arası çatışmalar ve nihilizmin yükselişi.",
    details: "Ivan Turgenyev'in romanı, Rusya'da genç nihilist Bazarov ile babaları arasındaki kuşak çatışmasını ele alır. Değişen değerler, ideolojiler ve aile ilişkileri üzerinden modernleşme teması işlenir."
  },
  {
    name: "Oliver Twist",
    summary: "Yetim bir çocuğun Londra’nın karanlık sokaklarında hayatta kalma mücadelesi.",
    details: "Charles Dickens'ın romanı, yetim Oliver Twist'in kötü koşullar, kötü niyetli insanlar ve suç dünyası içinde hayatta kalma mücadelesini anlatır. Sosyal adaletsizlik ve fakirlik eleştirisi güçlüdür."
  },
  {
    name: "Martin Eden",
    summary: "Kendi kendini yetiştiren bir yazarın sınıf atlama çabası ve hayal kırıklıkları.",
    details: "Jack London'un yarı-otobiyografik romanı, işçi sınıfından gelen Martin Eden’in yazar olma arzusu ve toplumdaki elit sınıfa yükselme çabalarını konu alır. Başarı, bireysellik ve toplumun sınıf yapısına dair sert eleştiriler içerir."
  },
  {
    name: "Körlük",
    summary: "Bir şehirde aniden yayılan körlük salgınının toplum üzerindeki etkileri.",
    details: "José Saramago'nun distopik romanı, aniden tüm toplumun kör olması sonrası insan doğasının karanlık ve kaotik yönlerini keşfeder. Toplum düzeninin çöküşü, dayanışma ve insanın hayatta kalma mücadelesi temaları öne çıkar."
  },
  {
    name: "İçimizdeki Şeytan",
    summary: "İnsanın içsel çatışmaları ve karanlık yönleri üzerine bir roman.",
    details: "Sabahattin Ali'nin bu eseri, bireyin içsel şeytanlarıyla mücadelesini ve ahlaki ikilemlerini konu alır. İnsan psikolojisi, vicdan ve toplum baskısı temaları ön plandadır."
},
{
    name: "Jane Eyre",
    summary: "Bir yetim kızın büyüme ve aşk hikayesi.",
    details: "Charlotte Brontë'nin klasik romanı, Jane Eyre'in zor bir çocukluk sonrası kendi bağımsızlığını bulma ve aşkı keşfetme sürecini anlatır. Sosyal sınıf, cinsiyet rolleri ve bireysel özgürlük temaları öne çıkar."
},
{
    name: "Çavdar Tarlasında Çocuklar",
    summary: "Ergenlikteki yabancılaşma ve isyan üzerine bir hikaye.",
    details: "J.D. Salinger'ın eseri, Holden Caulfield'in ergenlik bunalımları ve toplumun yapaylığına karşı isyanını konu alır. Yabancılaşma, kimlik arayışı ve ergenlik sancıları temaları işlenir."
},
{
    name: "Martin Eden",
    summary: "Bir yazarın başarı ve aşk yolculuğu.",
    details: "Jack London'ın romanı, Martin Eden'in yoksulluktan edebiyat dünyasına yükselmesini ve aşk hayatındaki çatışmalarını anlatır. Toplumsal sınıf, bireysel azim ve aşk temaları işlenir."
},
{
    name: "Beyaz Diş",
    summary: "Yabani bir köpeğin evcilleşme ve hayatta kalma mücadelesi.",
    details: "Jack London'ın eseri, Beyaz Diş adlı köpeğin vahşi doğadan insan dünyasına adaptasyon sürecini anlatır. Hayatta kalma, doğa-insan ilişkisi ve sadakat temaları ön plandadır."
},
{
    name: "Vahşetin Çağrısı",
    summary: "Bir köpeğin vahşi doğada hayatta kalma mücadelesi.",
    details: "Jack London'ın klasik romanı, Buck adlı köpeğin doğada hayatta kalma ve içsel vahşetini keşfetme hikayesini anlatır. Doğa, hayatta kalma ve vahşi içgüdüler temaları işlenir."
},
{
    name: "Oblomov",
    summary: "Tembel ve hayalperest bir aristokratın hayatı.",
    details: "İvan Gonçarov'un romanı, Oblomov'un tembelliği, erteleme alışkanlıkları ve hayata karşı ilgisizliğini konu alır. Toplumsal değişim, tembellik ve bireysel sorumluluk temaları ön plandadır."
},
{
    name: "İki Şehrin Hikâyesi",
    summary: "Fransa'daki Devrim öncesi ve devrim dönemi hikayesi.",
    details: "Charles Dickens'ın eseri, Londra ve Paris'te geçen olaylar üzerinden devrim öncesi toplumun sosyal ve politik yapısını anlatır. Aşk, fedakârlık ve tarih temaları öne çıkar."
},
{
    name: "Küçük Kadınlar",
    summary: "Dört kız kardeşin çocukluktan yetişkinliğe geçiş süreci.",
    details: "Louisa May Alcott'un yarı-otobiyografik romanı, March ailesinin dört kız kardeşinin hayatındaki zorlukları, sevinçleri ve büyüme süreçlerini anlatır. Aile bağları, kadınların rolü ve kişisel gelişim temaları ön plandadır."
},
{
    name: "Fahrenheit 451",
    summary: "Kitapların yasaklandığı distopik bir toplum.",
    details: "Ray Bradbury'nin distopik romanı, Montag adlı itfaiyecinin kitapları yakmakla görevli olduğu bir dünyada bilinçlenmesini anlatır. Sansür, bilgi özgürlüğü ve bireysel bilinç temaları işlenir."
},
{
    name: "Kırmızı Pazartesi",
    summary: "Bir cinayetin önceden bilinmesine rağmen önlenememesi.",
    details: "Gabriel García Márquez'in kısa romanı, Santiago Nasar’ın öldürülmesini ve kasaba halkının tepkilerini anlatır. Kader, toplumsal sorumluluk ve öngörü temaları ön plandadır."
},
  {
    name: "İnce Memed",
    summary: "Anadolu’da bir köylünün zalim ağa düzenine karşı mücadelesi.",
    details: "Yaşar Kemal'in epik romanı, yoksul köylü Memed’in zalim ağa"
  }
,
{
    name: "Gizli Bahçe",
    summary: "Yalnız ve kapalı bir bahçede kendini keşfetme hikayesi.",
    details: "Frances Hodgson Burnett'in eseri, Mary Lennox'un keşfettiği gizli bir bahçede arkadaşlık, iyileşme ve doğayla bağ kurma sürecini anlatır. Kişisel gelişim, doğa sevgisi ve dostluk temaları ön plandadır."
},
{
    name: "Sefiller",
    summary: "Adalet, aşk ve fedakârlık ekseninde Fransız toplumunu anlatan epik roman.",
    details: "Victor Hugo'nun başyapıtı, Jean Valjean'ın yaşamı üzerinden 19. yüzyıl Fransasındaki sosyal adaletsizlikleri, toplumsal eşitsizlikleri ve bireysel ahlak mücadelesini konu alır. Toplumsal eleştiri, sevgi ve fedakârlık temaları ön plandadır."
},
{
    name: "Madame Bovary",
    summary: "Bir kadının hayal kırıklıkları ve arzuları üzerine roman.",
    details: "Gustave Flaubert'in romanı, Emma Bovary'nin sıradan hayatından kaçarak aradığı aşk ve mutluluğu bulma çabasını anlatır. Aşk, hayal kırıklığı ve toplumun kadına bakışı temaları öne çıkar."
},
{
    name: "Notre-Dame'ın Kamburu",
    summary: "Ortaçağ Paris'inde aşk ve kader üzerine bir hikaye.",
    details: "Victor Hugo'nun eseri, kambur Quasimodo ve güzel Esmeralda üzerinden aşk, fedakârlık ve kaderi konu alır. Sosyal sınıf, adalet ve insan doğasının karmaşıklığı temaları işlenir."
},
{
    name: "Kızıl Veba",
    summary: "Bir salgının insanlar ve toplum üzerindeki etkileri.",
    details: "Albert Camus'un romanı, kurgusal bir şehirde yayılan salgın üzerinden insanın ölüm, yalnızlık ve dayanışma ile olan ilişkisini anlatır. İnsan doğası, toplumsal dayanışma ve ölüm temaları ön plandadır."
},
{
    name: "Yaban",
    summary: "Toplumla yabancılaşmış bir bireyin içsel ve dışsal mücadelesi.",
    details: "Yakup Kadri Karaosmanoğlu'nun romanı, köy yaşamı ve modernleşme arasındaki çatışmayı yaşayan Ahmet Celal’in içsel yalnızlığını ve toplumsal yabancılaşmasını konu alır. Yalnızlık, bireysel kimlik ve toplumsal uyumsuzluk temaları öne çıkar."
},
{
    name: "Monte Cristo Kontu",
    summary: "Haksızlığa uğrayan bir adamın intikam hikayesi.",
    details: "Alexandre Dumas'nın eseri, Edmond Dantès’in haksız yere hapse düşmesini ve yıllar sonra Monte Cristo Kontu olarak geri dönüp intikamını almasını anlatır. Adalet, ihanet, aşk ve intikam temaları ön plandadır."
},
{
    name: "Kış Bahçesi",
    summary: "Kadınların duygusal gücünü ve hayatın iniş çıkışlarını keşfetme hikayesi.",
    details: "Susan Fletcher'in romanı, karakterlerin sevinç ve üzüntülerle dolu yaşamları üzerinden dayanıklılık, yalnızlık ve ruhsal keşif temalarını işler. Birlikte olmanın fiziksel değil, duygusal bağlarla mümkün olduğu anlatılır."
},
{
    name: "Yeraltından Notlar",
    summary: "Bireyin toplumdan yabancılaşması ve içsel monologları üzerine kısa roman.",
    details: "Fyodor Dostoyevski'nin eseri, toplumun dayattığı normlara karşı bireyin yalnızlığını, isyanını ve bilinçli tembelliğini konu alır. İnsan doğası, özgür irade ve yalnızlık temaları ön plandadır."
},
{
    name: "Açlık",
    summary: "Fakirlik ve açlık içinde bireyin ruhsal ve fiziksel çöküşü.",
    details: "Knut Hamsun'un romanı, bir gencin açlık ve yoksullukla mücadelesini, hayatta kalma ve insan psikolojisinin sınırlarını keşfetmesini anlatır. Yoksulluk, insanın çaresizliği ve psikolojik mücadele temaları işlenir."
},
{
    name: "Faust",
    summary: "İnsanın bilgi, güç ve tatmin arayışı üzerine klasik dramatik eser.",
    details: "Johann Wolfgang von Goethe'nin eseri, Faust'un bilgi ve dünya deneyimi arayışı ile şeytanla yaptığı anlaşmayı konu alır. İnsanın hırsı, ahlaki seçimleri ve varoluşsal sorgulamaları temaları ön plandadır."
},
{
    name: "Genç Werther'in Acıları",
    summary: "Yoğun duygular ve aşkın trajik sonuçları üzerine bir roman.",
    details: "Johann Wolfgang von Goethe'nin eseri, Werther’in aşk ve tutkuya dayalı yaşamını, toplumsal sınıf çatışmaları ve kişisel duygusal krizler üzerinden anlatır. Aşk, tutku ve çaresizlik temaları öne çıkar."
},
{
    name: "Germinal",
    summary: "Maden işçileri ve işçi sınıfının zorlukları üzerine toplumsal roman.",
    details: "Émile Zola'nın romanı, Fransa’da kömür madenlerinde çalışan işçilerin yaşamını ve toplumsal adaletsizliklerle mücadelesini konu alır. Sınıf mücadelesi, emek sömürüsü ve insan dayanıklılığı temaları işlenir."
},
{
    name: "Dönüşüm",
    summary: "Bireyin ani ve radikal değişimi sonrası yaşadığı yabancılaşma.",
    details: "Franz Kafka'nın kısa romanı, Gregor Samsa'nın bir sabah dev bir böceğe dönüşmesiyle başlayan absürd ve trajikomik olayları anlatır. Yabancılaşma, aile bağları ve bireysel kimlik temaları ön plandadır."
},
{
    name: "Korku",
    summary: "Bireyin içsel korku ve tehlikelerle yüzleşmesi.",
    details: "Stefan Zweig'in eseri, insan psikolojisinin sınırlarını, yalnızlık ve tehlike ile karşılaşıldığında ortaya çıkan davranışları konu alır. Korku, insan ilişkileri ve gerçek ile yüzleşme temaları işlenir."
},
{
    name: "Kıyı",
    summary: "Gençlik, umut ve hayatın gölgeli yönleri üzerine düşünsel bir roman.",
    details: "Ahmet Hamdi Tanpınar’ın eseri, gençliğin idealleri ve insanlık düşlerini, bireyin yaşamla mücadelesi üzerinden işler. Kötümserlik, hayal kırıklığı ve içsel sorgulamalar temaları ön plandadır."
},
{
    name: "Ateşten Gömlek",
    summary: "Milli Mücadele döneminde bireylerin içsel ve toplumsal mücadeleleri.",
    details: "Halide Edib Adıvar’ın romanı, Kurtuluş Savaşı sırasında bireylerin psikolojik ve duygusal durumlarını, cesaret ve korku arasındaki gerilimi anlatır. Toplumsal ve bireysel sorumluluk temaları işlenir."
},
{
    name: "Kırık Hayatlar",
    summary: "Aşk, ihanet ve insanın içsel karmaşası üzerine trajik bir roman.",
    details: "Halit Ziya Uşaklıgil’in eseri, bireylerin duygusal çalkantılarını, aşk ve hayal kırıklıkları üzerinden anlatır. Saflık, umut, belirsizlik ve insan psikolojisinin ince işleyişi temaları öne çıkar."
},
{
    name: "Eylül",
    summary: "Aşkın karmaşası ve bireysel arzuların çatışması üzerine roman.",
    details: "Mehmet Rauf'un romanı, karakterlerin aşkı, özlemi ve beklentilerini detaylı bir şekilde işler. Sevgi, fedakârlık, arzular ve reddedilme temaları ön plandadır."
},
{
    name: "Suç ve Ceza",
    summary: "Bireyin suç, vicdan ve ahlak ile yüzleşmesi üzerine klasik roman.",
    details: "Fyodor Dostoyevski’nin eseri, Raskolnikov’un işlediği suçun psikolojik ve ahlaki sonuçlarını detaylandırır. Yalnızlık, vicdan, toplumsal adalet ve bireysel sorumluluk temaları işlenir."
},
{
    name: "İvan İlyiç'in Ölümü",
    summary: "Ölüm ve insanın yalnızlığı üzerine derin bir roman.",
    details: "Lev Tolstoy’un eseri, İvan İlyiç’in ölüm süreci ve yalnızlığını, insanın yaşam ve ölüm karşısındaki çaresizliğini anlatır. Ölüm, yalnızlık, acı ve varoluş sorgulamaları temaları işlenir."
},
{
    name: "Beyaz Geceler",
    summary: "Yalnızlık, hayaller ve kısa süreli mutluluklar üzerine bir öykü.",
    details: "Fyodor Dostoyevski’nin kısa romanı, bir insanın yalnızlık içinde hayal kurması ve kısa süreli mutluluk anlarını deneyimlemesini anlatır. Yalnızlık, hayal, umut ve duygusal hassasiyet temaları öne çıkar."
},
{
    name: "Efsuncu Baba",
    summary: "İnsanın doğası, kötülük ve yaşamın gizemleri üzerine derin düşünceler.",
    details: "Hüseyin Rahmi Gürpınar’ın eseri, insan doğasının temel özelliklerini, iyilik ve kötülük arasındaki çatışmayı ve toplumun mizahi yönlerini ele alır. İnsan ruhunun karmaşıklığı ve yaşamın değişmez döngüsü temaları öne çıkar."
},
{
    name: "Vatan Yahut Silistre",
    summary: "Vatan sevgisi ve bireysel fedakârlık üzerine dramatik bir eser.",
    details: "Namık Kemal’in tiyatro eseri, milli bilinç, vatan sevgisi ve bireyin fedakârlığı temalarını işler. Aşk ve vatanın birlikte işlediği dramatik sahneler, karakterlerin duygusal derinlikleriyle sunulur."
},
{
    name: "Mai ve Siyah",
    summary: "Genç bir adamın hayaller, çevresel etkiler ve aşk karşısındaki mücadelesi.",
    details: "Halit Ziya Uşaklıgil’in romanı, bireyin çevre ve toplum etkileri altında yaşadığı psikolojik çatışmaları anlatır. Başarı, aşk ve kişisel özgürlük temaları detaylı bir şekilde işlenir."
},
{
    name: "Sergüzeşt",
    summary: "Aşk, acı ve insanın yaşamla mücadelesi üzerine dramatik roman.",
    details: "Samipaşazade Sezai’nin romanı, aşk ve kişisel trajediyi ele alır. İnsan ruhunun dayanıklılığı, aşkın etkisi ve sosyal adalet temaları işlenir."
},
{
    name: "Aşk-ı Memnu",
    summary: "Aşk, tutku ve toplumsal kuralların çatışması üzerine klasik roman.",
    details: "Halit Ziya Uşaklıgil’in eseri, yasak aşk, bireysel arzular ve toplumsal baskı temalarını işler. Aşkın etkisi, vicdan ve duygusal çelişkiler ön plandadır."
},
{
    name: "Saatleri Ayarlama Enstitüsü",
    summary: "Modern yaşam, bürokrasi ve insanın toplumsal rolü üzerine mizahi roman.",
    details: "Ahmet Hamdi Tanpınar’ın eseri, bireyin toplumsal roller, modernleşme ve zamanın düzenlenmesiyle ilgili çatışmalarını mizahi bir dille anlatır. İnsan doğasının paradoksları, zaman ve düzen temaları işlenir."
},
{
    name: "Çalıkuşu",
    summary: "Genç bir kadının aşk, fedakârlık ve hayata karşı mücadelesi.",
    details: "Reşat Nuri Güntekin’in romanı, bireyin aşk ve fedakârlık üzerinden hayat mücadelesini anlatır. Aşkın zorlukları, yalnızlık, duygusal dayanıklılık ve toplumsal roller temaları öne çıkar."
},
{
    name: "Şair Evlenmesi",
    summary: "Aşk ve evlilikteki toplumsal ve bireysel çatışmalar üzerine bir komedi.",
    details: "Şinasi’nin tiyatro eseri, Osmanlı’da batılı anlamda yazılan ilk tiyatro örneklerinden biridir. Eserde bireylerin evlilik ve aşk hayatındaki zorluklar, toplumsal baskılar ve maddiyat temaları mizahi bir dille işlenir."
}
,
{
    name: "Aşk ve Gurur",
    summary: "Aşk, evlilik ve sosyal statü üzerinden bireylerin ilişkilerini anlatan bir roman.",
    details: "Jane Austen’in eseri, 19. yüzyıl İngiltere’sinde kadınların toplumsal rollerini ve evlilik seçimlerini mizahi ve eleştirel bir dille işler. Karakterlerin gurur ve önyargıları, aşk ve gerçek duygularla çatışır."
},
{
    name: "Bülbülü Öldürmek",
    summary: "Adalet, masumiyet ve insan doğasının sorgulandığı bir roman.",
    details: "Harper Lee’nin romanı, Amerika’nın güneyinde ırkçılık ve önyargı ile mücadele eden bir ailenin hikâyesini anlatır. Atticus Finch gibi karakterler aracılığıyla doğruluk, empati ve insan sevgisi temaları işlenir."
}
,
{
    name: "Moby Dick",
    summary: "İnsan doğası, obsesyon ve kader üzerine bir roman.",
    details: "Herman Melville’in eseri, Kaptan Ahab’ın beyaz balina Moby Dick’i avlama takıntısı üzerinden insanın hırs, öfke ve takıntılarını işler. Roman, denizcilik yaşamı ve insan ruhunun derinliklerini keşfeder."
},
{
    name: "Yüzyıllık Yalnızlık",
    summary: "Aile, tarih ve yalnızlık temaları etrafında kurulu bir epik roman.",
    details: "Gabriel García Márquez’in romanı, Buendía ailesinin Macondo kasabasındaki yüzyıllık tarihini büyülü gerçekçilik tarzıyla anlatır. İnsan ilişkileri, kader ve zamanın döngüselliği ön plandadır."
},
{
    name: "Büyük Umutlar",
    summary: "Sosyal statü, aşk ve kişisel gelişim üzerine bir hikâye.",
    details: "Charles Dickens’ın romanı, Pip’in çocukluktan yetişkinliğe geçişini, aşk, hırs ve hayal kırıklıkları ile birlikte anlatır. Roman, İngiltere toplumunun sınıf farklılıklarını ve bireyin ahlaki gelişimini işler."
},
{
    name: "Gülün Adı",
    summary: "Ortaçağda gizem, suç ve bilgi arayışı üzerine bir roman.",
    details: "Umberto Eco’nun eseri, bir manastırda işlenen cinayetleri ve rahip William’ın bunları çözme çabalarını konu alır. Roman, tarih, dini inançlar ve bilginin gücü üzerine yoğun bir şekilde düşünür."
},
{
    name: "Don Kişot",
    summary: "Hayal ile gerçek arasındaki çatışmayı mizahi bir dille anlatan roman.",
    details: "Miguel de Cervantes’in eseri, kendini şövalye sanan Don Kişot’un maceraları üzerinden toplum, idealizm ve insan doğasının mizahi ve eleştirel bir portresini çizer."
},
{
    name: "Uğultulu Tepeler",
    summary: "Tutku, intikam ve trajik aşk üzerine bir roman.",
    details: "Emily Brontë’nin romanı, Heathcliff ve Catherine’in tutkulu ve yıkıcı ilişkisi üzerinden aşkın karanlık, kıskançlık ve öfke ile iç içe geçmiş doğasını işler."
},
{
    name: "Küçük Prens",
    summary: "Arkadaşlık, sevgi ve insan doğası üzerine felsefi bir masal.",
    details: "Antoine de Saint-Exupéry’nin eseri, bir çocuğun farklı gezegenleri keşfi ve karşılaştığı karakterler aracılığıyla insan doğası, sevgi, arkadaşlık ve hayal gücünün önemini anlatır. Kitap, basit bir masal diliyle derin felsefi mesajlar verir."
},
{
    name: "İnce Mehmed",
    summary: "Köy yaşamı, aşk ve adalet arayışı üzerine bir roman.",
    details: "Yaşar Kemal’in eseri, doğa ve toplumsal koşullar içinde yetişen İnce Mehmed’in hikâyesini anlatır. Roman, köylülerin yaşadığı zorluklar, feodal düzen, adalet arayışı ve aşk temalarını işleyerek Anadolu’nun sosyo-kültürel yapısını güçlü bir anlatımla yansıtır."
}


  ]);

  const uniqueSummary = Array.from(new Set(summary.map(item => item.summary)))
    .map(summaryText => summary.find(item => item.summary === summaryText));

  const [book, setBook] = useState(uniqueSummary[Math.floor(Math.random() * uniqueSummary.length)]);

  const selectRandom = () => {
    const selected = uniqueSummary[Math.floor(Math.random() * uniqueSummary.length)];
    setBook(selected);
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 p-4">
      <Button color="aliceblue" size="lg" className="mb-4 rounded-pill px-4 hover-button" onClick={selectRandom}>
        Kitap Öner
      </Button>

      <p className="center-align mb-4 mb-4" style={{color:"white", fontSize:"20px"}}>Kitap Konusu ChatGPT den alınmıştır.</p>


      {book && (
        <Col xs="12" sm="12" md="10" lg="8" className="mb-4">
          <CardGroup className="centered-container">
            <Card className='summary-card me-1 ms-1' style={{ border: '2px solid white'}}>
              <CardHeader className="text-red font-weight-bold text-center mt-0" style={{color:"red", fontStyle: 'italic', fontSize: "34px"}}>
                <strong>{book.name}</strong>
              </CardHeader>

              <CardText className="text-white" style={{ fontStyle: 'italic', fontSize:"20px", margin:"20px"}}>
                "{book.summary}"
              </CardText>

              <CardFooter className="text-black text-left mt-0" style={{color:"black", backgroundColor:"white", fontStyle: 'italic', fontSize:"18px"}}>
                {book.details}
              </CardFooter>
            </Card>
          </CardGroup>
        </Col>
      )}
    </div>
  );
}
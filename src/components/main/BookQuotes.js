import React, { useState } from "react";
import { Input, Button, Form, FormGroup, Row, Col, Card, CardGroup, CardFooter, CardBody, CardText } from "reactstrap";

export default function QutoesApp() {
  const [query, setQuery] = useState("");
  const [quotes, setQuotes] = useState([
    { name: "Sineklerin Tanrısı", quote: "Hiç kimsenin tam sanıldığı gibi olmadığını anlatmak istiyordu." },
    { name: "Sineklerin Tanrısı", quote: "Bazen küçücük bir ayrıntı dikkatini çeker ve alır götürür insanı." },
    { name: "Sineklerin Tanrısı", quote: "En büyük düşünceler, en basit olanlarıdır." },
    { name: "Sineklerin Tanrısı", quote: "Bilinen ama söylenemeyenlerin ağırlığı çökmüştü havaya." },
    { name: "Sineklerin Tanrısı", quote: "Her şey iyiydi eskiden; güler yüzlü ve dostçaydı her şey." },
    { name: "1984", quote: "Büyük Birader sizi izliyor." },
    { name: "1984", quote: "Her eylemin sonuçları eylemin kendi içinde mevcuttur." },
    { name: "1984", quote: "Geçmiş, günü gününe, neredeyse dakikası dakikasına güncelleniyordu." },
    { name: "1984", quote: "İnsan sevilmekten çok anlaşılmayı istiyordu belki de." },
     { "name": "Korku", "quote": "Korku cezadan daha zor katlanabilir bir şeydir çünkü ceza somuttur. Gergin bir durumda beklemeden daha yorucu bir şey yoktur." },
  { "name": "Anna Karenina", "quote": "Bütün mutlu aileler birbirine benzer, her mutsuz ailenin mutsuzluğu kendine göredir." },
  { "name": "Muhteşem Süleyman", "quote": "Sen gözleri uyurken kalpleri uyanık olanlardan ol. Her şeyin başı adalettir." },
  { "name": "Hyunam-Dong Kitabevi", "quote": "Mutluluk denilen şey geçmişimizde ya da uzak geleceğimizde beklemiyor. Hemen gözlerimizin önünde duruyor." },
  { "name": "Hyunam-Dong Kitabevi", "quote": "Kitap okuyanlar, yani başkalarının acılarını paylaşabilenler çoğalmalı ki dünya daha hızlı güzelleşebilsin." },
  { name: "İnsanlar", quote: "İnsanlar birbirlerine artık katlanmak istemiyorlar ya da katlanabilecekleri doğru insanları bulamıyorlar." },
  { name: "Yaban", quote: "Yalnızlık dinmeyen bir sızıdır." },
  { name: "Zamanı Durdurmanın Yolları", quote: "Sonsuzluk demiş Emily Dickinson, şimdilerden oluşur. Peki insan yaşadığı anda olmayı nasıl başarabilir?" },
  { name: "İnsanlar", quote: "İnsanlar birbirlerine artık katlanmak istemiyorlar ya da katlanabilecekleri doğru insanları bulamıyorlar." },
  { name: "Yaban", quote: "Yalnızlık dinmeyen bir sızıdır." },
  { name: "Yaban", quote: "Yalnızlık dinmeyen bir sızıdır." },
{ name: "İnsanlar", quote: "İnsanlar birbirlerine artık katlanmak istemiyorlar ya da katlanabilecekleri doğru insanları bulamıyorlar." },
{ name: "Zamanı Durdurmanın Yolları", quote: "İmkansızı reddetmek kendini reddetmektir." },
{ name: "Felaket Anlarında :(", quote: "Büyük felaket anlarında olduğu gibi, büyük sevinç günlerinde de duygularımızı başkalarıyla paylaşmak bizim için bir derin ihtiyaçtır." },
{ name: "Korku", quote: "Korku, insanın en temel duygularından biridir." },
{ name: "Muhteşem Süleyman", quote: "Tarih kitaplarının büyüsü çok farklı değil mi sizce de?" },
{ name: "Hyunam-Dong Kitabevi", quote: "Rahatlatıcı, dinlendirici aynı zamanda ise ufuk açıcı bir kitap." },
{ name: "Siyah İnci", quote: "Hayatın en güzel anları, beklenmedik anlarda karşımıza çıkar." },
{ name: "A’mak-ı Hayal", quote: "Hayal kurmak, insanın ruhunu besler." },
{ name: "Ceza Sömürgesi", quote: "Adalet, bazen en acımasız şekliyle tecelli eder." },
{ "name": "1984", "quote": "Özgürlük, iki kere iki dört eder diyebilmektir. Buna izin verilirse, arkası gelir." },
  { "name": "1984", "quote": "Birini seviyorsan gerçekten severdin, verecek başka hiçbir şeyin yoksa bile sevgin yeterdi." },
  { "name": "Bülbülü Öldürmek", "quote": "Bülbüller sadece bizi keyiflendirmek için öterler. İnsanların bahçelerini didiklemez, mısır ambarlarına yuva yapmazlar. Kalplerini bize açıp şarkı söylerler. İşte bu yüzden bülbülleri öldürmek günahtır." },
    { name: "Küçük Prens", quote: "Sadece evcilleştirdiklerini tanıyabilirsin, demiş tilki. İnsanların artık hiçbir şeyi tanıyacak vakti yok. Her şeyi gidip dükkandanlardan hazır alıyorlar. Ama arkadaş dükkanı olmadığı için artık hiç arkadaşları yok." },
    { name: "Küçük Prens", quote: "Gözler kör, yürekle aramak gerek." },
    { name: "Küçük Prens", quote: "Ben üzgünüm ama onlara yorgunum dedim" },
    { name: "Küçük Prens", quote: "Bir yıldızda yaşayan bir çiçeği seversen geceleri gökyüzüne bakmak hoş olur. O zaman bütün yıldızlar çiçek açar." },
    { name: "Küçük Prens", quote: "İnsan istese bile fazla uzağa gidemez…" },
    { name: "Küçük Prens", quote: "İnsan ancak yüreğiyle baktığı zaman doğruyu görebilir." },
    { name: "Küçük Prens", quote: "Hakikati en iyi kalp gözüyle görebilir insan. Gözler asıl görülmesi gerekeni göremez." },
    { name: "Savaş ve Barış", quote: "Herkesten çok güldü. Belli ki acı çekiyor, soluğu tıkanıyordu." },
    { name: "Savaş ve Barış", quote: "Güzellik için sevilmez, sevdiğin güzeldir." },
    { name: "Savaş ve Barış", quote: "Bir insanın iyi, güzel şeyler yaptığı ve hayatta kötülük, mutsuzluk ya da acı olduğuna inanmadığındaki kadar mutluydu." },
    { name: "Savaş ve Barış", quote: "Bu yüksek gökyüzünü nasıl olmuş da daha önce hiç görmemişim? Onu nihayet farkedebildiğim için ne kadar şanslıyım." },
    { name: "Anna Karenina", quote: "Bütün mutlu aileler birbirine benzer, her mutsuz ailenin mutsuzluğu kendine göredir." },
    { name: "Anna Karenina", quote: "Bu tembellik benim için ne büyük bir zevk inanmazsın. Kafamda tek bir düşünce yok, bomboş." },
    { name: "Anna Karenina", quote: "Resmi hakkında hüküm verenlerin bu tabloda onun gördüğü şeyin küçük bir kısmını olsun gördüğünü gösteren her düşünce, en önemsizi bile, ruhunun derinlerine kadar heyecanlandırıyordu." },
    { name: "Anna Karenina", quote: "Aile hayatına girdikten sonra her adımda bunun hayal ettiği şey olmadığını görüyordu." },
    { name: "Anna Karenina", quote: "Yapmacıklık, ne şekilde olursa olsun en akıllı, en sağgörülü adamı bile kandırabilir; ama yapmacıklık ne kadar büyük bir ustalıkla gizlenirse gizlensin en kıt anlayışlı çocuk bile onu anlar ve tiksinir." },
    { name: "Anna Karenina", quote: "Başkalarını, kendimi tanıdığım kadar tanımayı ne kadar isterdim." },
    { name: "Moby Dick", quote: "Çünkü onun yarası vicdanında ve vicdan yarasının kanını da hiçbir şey durduramaz." },
    { name: "Moby Dick", quote: "Her anlaşılmaz şey karşısında yapılacak en akıllıca, en kolay iş gülmektir." },
    { name: "Moby Dick", quote: "Korku bilgisizlikten doğar." },
    { name: "Moby Dick", quote: "Büyük bir sır saklıyormuş gibi görünmek, bu dünyadaki en kolay şey." },
    { name: "Yüzyıllık Yalnızlık", quote: "Dünya yuvarlak tıpkı bir portakal gibi.." },
    { name: "Yüzyıllık Yalnızlık", quote: "Ne var ki, aşırı yoğunluk ruhuna huzur bahşetti." },
    { name: "Yüzyıllık Yalnızlık", quote: "Bütün ölülere seslenip acısını paylaşmaya çağırmakla geçirdi. Ama gelen giden olmadı." },
    { name: "Yüzyıllık Yalnızlık", quote: "Dünya öylesine yeniydi ki, birçok şeyin adı yoktu ve onları belirtmek için parmakla göstermek gerekirdi." },
    { name: "Büyük Umutlar", quote: "Sevmek demek güçsüzlük demektir." },
    { name: "Büyük Umutlar", quote: "Beni bekleyen ölüm korkunçtu, ama ölümden sonra kötü anılmak kaygısı bin kat daha korkunçtu." },
    { name: "Büyük Umutlar", quote: "Sonra yıldızlara baktım; insanın soğuktan donarken yüzünü göğe çevirmesi, gene de bu sayısız parıltılı yığınlarda hiçbir acıma, hiçbir yardım bulamaması kim bilir nasıl acı gelir, diye düşündüm." },
    { name: "Büyük Umutlar", quote: "Beni nasıl yarattıysanız öyle kabul etmek zorundasınız. Ne başarılardan, ne de başarısızlıklardan sorumlu olan benim, ama ikisinin karışımından ortaya çıkmış bir varlığım." },
    { name: "Büyük Umutlar", quote: "yaşamak dediğin nedir ki? Kaynakla birbirine tutturulmuş ayrılık halkalarından biri zincirdir. İnsan dediğinde kimi demircidir ,kimi bakırcıdır ,kimi de kuyumcu. Bu tür ayrımlar eninde sonunda kaçınılmaz olur; karşılaştıkça da katlanmaktan başka çıkar yol yoktur." },    
    { name: "Gülün Adı", quote: "Her gerçek her kulağa göre değildir." },
    { name: "Gülün Adı", quote: "İnsan soyuna güvenimi yitiriyorum…" },
    { name: "Gülün Adı", quote: "Kitap kolayca incinebilen bir yaratıktır ; zamanın geçişi acı verir ona ; kemirgenlerden ,kötü havalardan , beceriksiz ellerden korkar. Yüzyıllar boyunca, her önüne gelen elyazmalarımıza canı istediği gibi dokunabilseydi , bugün onların büyük bir çoğu var olmazdı. Böylece kütüphaneci onları yalnız insanlardan değil, doğadan da korur ve yaşamını ,gerçeğin düşmanı olan unutuşun güçlerine karşı yürüttüğü bu savaşa adar." },
    { name: "Gülün Adı", quote: "Ne çok zaman geçti! Ama seni hâlâ anımsıyorum!" },
    { name: "Gülün Adı", quote: "Kitaplar inanmak için değil, araştırmak için yazılır. Bir kitap karşısında onun ne dediğini değil, ne demek istediğini sormalıyız kendi kendimize;" }, 
  { name: "Don Kişot", quote: "Hürriyetsiz saadet olmaz..." },
  { name: "Don Kişot", quote: "Zaten şerefini kaybeden insan ölmüş demektir." },
  { name: "Don Kişot", quote: "Yergi ve şaka, ağır işleyen zekâlardan çıkmaz." },
  { name: "Don Kişot", quote: "Üç tane devle savaşıyoruz sevgili Sancho: 'Adaletsizlik, korku ve cehalet.'" },
  { name: "Don Kişot", quote: "Yapmacıklık, en büyük kusurdur." },
  { name: "Uğultulu Tepeler", quote: "Sizin ve benim cennete benzettiğiniz yerlerde ve dilediğimiz şekilde birer gün geçirme planımızı hatırlıyor musunuz?" },
  { name: "Uğultulu Tepeler", quote: "İçimde tek bir istek var, tüm varlığım, tüm yetilerim bu isteği gerçekleştirmek için çırpınıyor; o kadar uzun zamandır o kadar yılmadan bu isteğime kavuşma özlemi içindeyim ki, hiç kuşkum yok, bu olacaktır, hem de çok geçmeden; çünkü bu istek artık tüm varlığımı kemirip tüketti. Bu umutla tükenip bittim artık." },
  { name: "Uğultulu Tepeler", quote: "Dış görünüşü de zihinsel gerilemesine ayak uydurdu." },
  { name: "Uğultulu Tepeler", quote: "Beni umursamadığı sürece, gözümde gerçek bir tanrıçaydı bu kız. Ona olan aşkımı 'asla sözcüklere dökememiştim', ama eğer bakışların da bir dili varsa dünyanın en aptal insanı bile onun için deli divane olduğumu anlayabilirdi." },
  { name: "Uğultulu Tepeler", quote: "Beni iyi etmen için gelmen gerekiyor." },
  { name: "Frankenstein", quote: "Ölüm her zaman, yüzüstü bıraktıklarını, birbirinden ayıracağı vakitten önce acı çektirerek yakınlaştırır." },
  { name: "Frankenstein", quote: "Tanrı'nın yarattığı Adem'in bile Havva'sı vardı. Benim kimim var? Herkesin tek başına bıraktığı yapayalnız bir kişiyim ben." },
  { name: "Frankenstein", quote: "İnsanın iyiliğine nasıl inanırım artık?" },
  { name: "Frankenstein", quote: "Beni yaratırken, bir insanın en büyük arzularından biri olan sevgiyi, bana niye bahşetmedin?" },
  { name: "Frankenstein", quote: "Yalnızlık, hor görülme ve herkes tarafından dışlanınca Frankenstein çıldırıyor desem yerinde olur." },   
  { name: "Suç ve Ceza", quote: "Hiçbir eksiği bulunmasın diye bakacak olursak, dünyada kaç tane iyi insan kalır dersin?" },
  { name: "Suç ve Ceza", quote: "İnsan boğulmamak için nasıl bir saman çöpüne sarılabiliyor!" },
  { name: "Suç ve Ceza", quote: "Yaşayan ruh hayat ister. Ruh matematikçilerin kurallarına uymaz. Ruh isyankârdır!" },
  { name: "Suç ve Ceza", quote: "Bazen iyiden acımasız olurdu mujikler, kamçıyı hayvanın yüzüne, hatta gözlerine vururlardı." },
  { name: "Suç ve Ceza", quote: "İnsanlar kim daha yürekliyse onu takip ediyor, onun dediklerini doğru kabul ediyorlar." },   
  { name: "Karamazov Kardeşler", quote: "Düşünüyorum da, şeytan yoksa, o zaman onu insan icat etmiştir; hem de kendi benzeri olarak icat etmiştir." },
  { name: "Karamazov Kardeşler", quote: "İnsanın yeryüzünde rahatını kaçıran muammaların haddi hesabı yok!" },
  { name: "Karamazov Kardeşler", quote: "Eğrilikle dünyanın öbür ucuna gidilir; ama geri dönülmez." },
  { name: "Karamazov Kardeşler", quote: "Yakınlarımı nasıl seveceğimi hiçbir zaman bilemedim. Bence özellikle yakınlarını sevmek, yabancıları sevmekten daha zordur." },
  { name: "Karamazov Kardeşler", quote: "Suçlular yokmuş, her şey zincirleme birbirinden doğuyormuş, ben biliyormuşum bunları." },
  { name: "Cesur Yeni Dünya", quote: "Eğer farklıysan yalnızlığa mahkum oluyorsun. Yalnız olana acımasız davranıyorlar." },
  { name: "Cesur Yeni Dünya", quote: "İnsan eğer sorgulamaksızın kabullenmeye şartlandırılmışsa, mutluluk gerçekten çok daha zor bir uğraş..." },
  { name: "Cesur Yeni Dünya", quote: "Mutluluk zor zanaat, özellikle de konu başkalarının mutluluğu olunca..." },
  { name: "Cesur Yeni Dünya", quote: "İnsanlar kendi başlarına hareket etmeye başlasalardı, tüm sosyal düzen altüst olurdu..." },
  { name: "Cesur Yeni Dünya", quote: "Evet, kaçınılmaz bir biçimde Tanrı'ya yöneliriz; bu dini duygu, doğası gereği öyle saftır ve bunu yaşayan ruha öyle bir mutluluk verir ki, diğer bütün yitirdiklerimizi telafi eder." },
  { name: "Görünmez Adam", quote: "Çalışıp üstesinden gelmeyi başardığım her zorlu dağın zirvesinde yeni bir dağ görünüyordu." },
{ name: "Görünmez Adam", quote: "Havada hafif bir huzursuzluk kokusu vardı şüphesiz ama insanların çoğu içlerinde yaşadıkları karamsarlıkları gizlemeyi bilecek kadar düşünce sahibiydiler." },
{ name: "Görünmez Adam", quote: "Görünmezim, izole ve yalnız." },
{ name: "Görünmez Adam", quote: "Bir insanın arzu duyabileceği her şeyin üzerinden geçip gidiyordum. Şüphesiz görünmezlik bunları elde etmemi sağlıyordu, ama elde ettiğim zaman onların tadını çıkarmamı da imkânsız kılıyordu." },
{ name: "Görünmez Adam", quote: "En müthiş anlarımda hep yalnız olmuşumdur." },


{ name: "Aşk ve Gurur", quote: "Eline kitap alınca zamanı unuturdu." },
{ name: "Aşk ve Gurur", quote: "Gerçekten sevdiğim pek az insan var; hele saygı duyduğum daha az insan var. Dünyayı tanıdıkça hoşnutsuzluğum daha da artıyor; her geçen gün insan karakterinin tutarsızlığına ve akıllı, duygulu görünenlere bile güvenilmeyeceğine olan inancım güçleniyor." },
{ name: "Aşk ve Gurur", quote: "Hangi ressam o anlamlı gözlerin hakkını verebilir ki?" },
{ name: "Aşk ve Gurur", quote: "İnsan isteyince mesafenin önemi yoktur." },
{ name: "Aşk ve Gurur", quote: "Kendi evim olduğu zaman müthiş bir kütüphanem olmazsa mutsuz olurum.." },
{ name: "Bülbülü Öldürmek", quote: "Bülbüller bizi eğlendirmek için şarkı söylemek dışında bir şey yapmaz. İnsanların bahçelerindeki bitkileri yemezler, mısır ambarlarına yuvalanmazlar, tek yaptıkları iş bize içlerini dökmektir. İşte bu yüzden bülbülleri öldürmek günahtır." },
{ name: "Bülbülü Öldürmek", quote: "İnsanların çoğu iyidir, yeter ki onları bir gün gör." },
{ name: "Bülbülü Öldürmek", quote: "Herkesin, istediği gibi düşünmeye ve düşündüklerinin doğru olduğuna inanmaya hakkı var, dedi Atticus. Ama ben, başkalarından önce kendi kendimle yaşamak zorundayım." },
{ name: "Bülbülü Öldürmek", quote: "Atticus bana, sıfatları kaldırırsan geriye gerçekler kalır demişti." },
{ name: "Bülbülü Öldürmek", quote: "Hayatımdan çıkıp gitti ama aklımdan çıkmış değildi." },

{ name: "Pal Sokağı Çocukları", quote: "Boka akıllı bir çocuktu, ama insanların birbirinden farklı olduğunu, bu farklılıkların nedenlerini kavramak için acı çekmemiz gerektiğini henüz öğrenmemişti." },
{ name: "Pal Sokağı Çocukları", quote: "Hayata dair, hani içinde hepimizin bazen kederli, bazen neşeli köleler olduğumuz hayata dair, bazı gerçekleri kavramaya başladığını hissediyordu." },
{ name: "Pal Sokağı Çocukları", quote: "Her zaman en çok sesi çıkanlar en aptal olanlardır." },
{ name: "Pal Sokağı Çocukları", quote: "Beni dışlayabilirsiniz, ama yüreğimde olanları değiştiremezsiniz." },
{ name: "Pal Sokağı Çocukları", quote: "Bir insanın büyüklüğü, yüreğinin büyüklüğüyle ölçülür." },

{ name: "Silas Marner", quote: "İnsanların kurtulmak için parayı ödeyeceği şeyler de vardır, haşarat gibi." },
{ name: "Silas Marner", quote: "Hoşumuza gitse de gitmese de her şey değişir; hiçbir şey uzun zaman olduğu gibi, değişmeden kalmaz." },
{ name: "Silas Marner", quote: "Belki de ihtiyacımız olan tek şey; değer verince değişmeyen insanlar..." },
{ name: "Silas Marner", quote: "Eylemler bir kez yalana dönüştü müydü ruh bunları tıpkı bir resimde yapılan ufak tefek düzeltmeler gibi üstünde taşır." },
{ name: "Silas Marner", quote: "Çünkü dediğim gibi, iyilik diye bir şey varsa bize bu dünyada lazım..." },

{ name: "Tess", quote: "Erkekler çok kez sevdikleri kadınlara aşırı sert davranırlar. Ne var ki, bu sertlik, kendisini doğurmuş olan evrensel katılığın -niyetlerin olanaklara, bugünün düne, yarının bugüne karşı katılığının- yanında hiç kalır." },
{ name: "Tess", quote: "Tess bu sert, hoşgörüsüz düşünceleri kafasından atmaya karar verdi. Ruhunun kurtuluşa erebilmesi için kötülüğe sırtını dönen ilk kötü kişi Alec d'Urberville değildi elbet. Öyleyse neden bu denli olmayacak bir şey gözüyle bakıyordu Alec'in iyi yola dönüşüne? En büyük günahkârlardan en ulu ermişler çıkar. Bunu keşfetmek için, Hıristiyan tarihinin çok derinliklerine dalmak hiç de şart değil." },
{ name: "Tess", quote: "Sabır —manevi yüreklilikle maddi çekingenliğin bu garip karışımı— artık Tess'in önemsiz bir özelliği değil, onu ayakta tutan şeydi." },
{ name: "Tess", quote: "Tess kendini dışarı atıp otlaklara doğru seğirtti. Açık havanın yüreğinin sıkıntısını gidermesini umuyordu sanki... Sonra, sınırsız yerlere alışık kadınların o umursamaz, o sereserpe hareketleriyle, kendini doğaya bırakıverdi; tıpkı bir yüzücünün kendini dalgalara bırakıvermesi gibi." },
{ name: "Tess", quote: "Ben gene de dua ediyorum onun için. Bakarsın, zavallı sözlerimin biri bir gün yüreğinde iyi bir tohum yeşertir, belli olmaz ki." },

{ name: "Yaşlı Adam ve Deniz", quote: "İhtiyarlar neden o kadar erken uyanır ki? Bir uzun gün daha yaşamak için mi?" },
{ name: "Yaşlı Adam ve Deniz", quote: "Ama insanoğlu yenilgi için yaratılmamıştır. İnsan yok edilebilir ama yenilemez." },
{ name: "Yaşlı Adam ve Deniz", quote: "Deniz çok güzel, çok merhametlidir. Fakat birden öyle değişiverir, öyle zalimleşir ki; başımızın üstünde fırıl fırıl dönen bu ufacık ve ötüşleri hüzünlü kuşlar..." },
{ name: "Yaşlı Adam ve Deniz", quote: "Düşündüğüm kadar güçlü olmayabilirim, dedi yaşlı adam. Ama epey numara bilirim ve azimliyim." },
{ name: "Yaşlı Adam ve Deniz", quote: "Her sefer yeni bir seferdi ve bunu yaparken asla geçmişi düşünmezdi." },

{ name: "Dorian Gray'in Portresi", quote: "Kadınlar bizde başyapıtlar yaratma isteği uyandırırlar, sonra da her keresinde buna engel olurlar." },
{ name: "Dorian Gray'in Portresi", quote: "Sen sen ol evlenme Dorian. Erkekler yoruldukları için, kadınlarsa meraktan evlenir; sonuç olarak ikisi de hüsrana uğrar." },
{ name: "Dorian Gray'in Portresi", quote: "Sıradan kadınlar her zaman kendilerini avutmanın bir yolunu bulur." },
{ name: "Dorian Gray'in Portresi", quote: "Bana öyle geldi ki alınyazım bana seçme sevinçler ve sevme ıstıraplar gösterecek." },
{ name: "Dorian Gray'in Portresi", quote: "Bu dünyaya ahlaki değer yargılarımızla caka satalım diye gönderilmedik. Ne vasat insanların sözlerini dinlerim, ne de güzellerin işine karışırım." },

{ name: "Zamanı Durdurmanın Yolları", quote: "İnsan olmak için tehlikeli zamanlardı. Hissetmek, düşünmek, umursamak için." },
{ name: "Zamanı Durdurmanın Yolları", quote: "Yıldızlar da, gökyüzü de, okyanuslar da oydu. O an bir tek o minicik zaman parçası ve içine ektiğimiz aşk tohumu vardı." },
{ name: "Zamanı Durdurmanın Yolları", quote: "Hayat da böyledir. Kaybedecek bir şeyiniz yoksa değişiklikten korkmaya ya da ona kucak açmaya gerek yoktur. Değişim hayatın ta kendisidir. Değişmediğini bildiğim tek şeydir." },
{ name: "Zamanı Durdurmanın Yolları", quote: "Geçmişle yapabileceğimiz tek şey, onu sırtımızda taşımak ve ağırlığının gitgide arttığını hissederken altında kalıp ezilmemek için dua etmek." },
{ name: "Zamanı Durdurmanın Yolları", quote: "Bazen gözümüzün önündeki şeylere bakıp burnumuzun dibindeki şeyleri keşfederiz. Sevdiğimiz insanları." },

{ name: "Genç Bir Doktorun Anıları", quote: "Bir şeyle mücadele etmek için onunla yüz yüze gelmek gerekir." },
{ name: "Genç Bir Doktorun Anıları", quote: "Köyde büyük tecrübeler kazanılabilir, fakat okumak, okumak ve daha çok okumak gerek..." },
{ name: "Genç Bir Doktorun Anıları", quote: "İnanılması güç zorluklara katlanmak zorunda kalıyorum." },
{ name: "Genç Bir Doktorun Anıları", quote: "Yalnızlık da berbat bir şey. Yalnızım işte." },
{ name: "Genç Bir Doktorun Anıları", quote: "Ah, ne kadar da cahil bu insanlar." },
{ name: "Kürk Mantolu Madonna", quote: "Bir kitabı okurken geçen iki saatin, ömrümün birçok senelerinden daha dolu, daha ehemmiyetli olduğunu fark edince insan hayatının ürkütücü hiçliğini düşünür ve yeis içinde kalırdım." },
{ name: "Kürk Mantolu Madonna", quote: "Hayat ve zaruretler insana birçok şeyler öğretir." },
{ name: "Kürk Mantolu Madonna", quote: "İnsanları, kendi cinslerinden biri üzerinde kudret ve salahiyetlerini denemek kadar tatlı sarhoş eden ne vardır?" },
{ name: "Kürk Mantolu Madonna", quote: "Yanımda ağzını açmadan yürüyen, karşımda ses çıkarmadan çalışan bu adamdan, ne öğrendiğimi iyice bilmediğim halde, bana senelerce ders veren birinden öğrenebileceğimden çok daha fazla şeyler öğrendiğime emindim." },
{ name: "Kürk Mantolu Madonna", quote: "On seneden beri ona karşı duyduğum hiddetin, etrafıma karşı kendimi aşılmaz bir duvar içine alışımın hakiki sebebini şimdi anlıyordum: On sene, hiç azalmayan bir aşkla, onu sevmekte devam etmiştim. İçimde ondan başka hiçbir kimsenin girmesine müsaade etmemiştim. Fakat şimdi onu her zamandan ziyade seviyordum." },
   

{ name: "İntibah", quote: "Tarağın, saçının bir teline zarar verse o tarağın yapıldığı ağacın yetiştiği yerleri yakarım." },
{ name: "İntibah", quote: "Gönülde bir garip durum vardır ki, sevmekten aldığı fayda sevilmekten gördüğü en küçük nişaneyle boy ölçüşemezdi." },
{ name: "İntibah", quote: "Meşhurdur, son pişmanlık fayda vermez." },
{ name: "İntibah", quote: "İnsana en büyük kararlar en büyük bela zamanlarında gelir." },
{ name: "İntibah", quote: "Sevdiğini üzmemek için doğruyu saklama! Çünkü bir zaman gelir, sevdiğin o gizlenen şeyden haber alır da sandığından çok üzülür." },

{ name: "Efsuncu Baba", quote: "İnsan daima göze görünür. Geberirse gömülür. Bir de ruh vardır diyorlarsa insan mefat olunca bu da mezarda oturur? Nereye gider? Bilmiyoruz." },
{ name: "Efsuncu Baba", quote: "İnsanın mayası hep o maya… Kötüler daha kurnazlaştı. Birbirine zarar verme ilerledi. Fenalık büyüdü." },
{ name: "Efsuncu Baba", quote: "Hakikatin büyüklüğünü tanıyıp da onunla dost olmayanlar, o kılığa bürünmüş yalanlarla oyalanırlar." },
{ name: "Efsuncu Baba", quote: "Bu dünya henüz büyük komik Molière çağından üç adım ileri gitmedi. Daima üstadın ebedî komedyaları tekrarlanıp duruyor. Yalnız sahnenin dekorları değişti." },
{ name: "Efsuncu Baba", quote: "Biri sana budala derse 'Eyvallah' de geç. Bırak ki o adam kendini senden daha akıllı sanarak övünsün." },

{ name: "Vatan Yahut Silistre", quote: "Beni Allah yarattı, vatan büyüttü. Allah besliyor, vatan için besliyor!" },
{ name: "Vatan Yahut Silistre", quote: "Dünyayı ömrümde bir gün gördüm. Çünkü bana göre dünya sensin." },
{ name: "Vatan Yahut Silistre", quote: "Önceden yaşamak nedir bilmezdim. Yine de yaşamayı herkesten daha fazla severdim. Şimdi hayatımın kıymetini iyice biliyorum. Yine de senin için ölmeyi, yaşamaya tercih ediyorum." },
{ name: "Vatan Yahut Silistre", quote: "Sanki ömrümde gördüğüm, işittiğim, okuduğum, düşündüğüm ne kadar güzel şey varsa hepsi bir yerde toplanmış da bir insan çehresi olup karşıma gelmişti." },
{ name: "Vatan Yahut Silistre", quote: "Seviyorum, sevmekten kendimi bir türlü alamıyorum." },

{ name: "Mai ve Siyah", quote: "Ben hayatımı kendim kazandım? Ben yine kendi işimle yaşıyorum!" },
{ name: "Mai ve Siyah", quote: "Muhitin tesirlerine (çevrenin etkilerine) ne kadar esiriz!" },
{ name: "Mai ve Siyah", quote: "İnsanlar tuhaftır!.." },
{ name: "Mai ve Siyah", quote: "Zihni o kadar dağınıktı ki düşüncelerine bir düzen veremiyordu." },
{ name: "Mai ve Siyah", quote: "Bu kadar mağlup, bu kadar teslim olarak seveceğine ihtimal vermemişti." },

{ name: "Şair Evlenmesi", quote: "Geçinemeyecek ne varmış; ya o akıllanır, ya sen çıldırırsın." },
{ name: "Şair Evlenmesi", quote: "Aşk ve sevgisiz evlenen geçinebilirse aşk olsun!" },
{ name: "Şair Evlenmesi", quote: "Öyleyse bilmediğin şeye neden karışıyorsun?" },
{ name: "Şair Evlenmesi", quote: "Ah! Düşmanlarım benim bu halimi bilseler nasıl gülerler." },


{ name: "Küçük Paşa", quote: "Cehaletin en koyusundan ne gibi eserler ve sonuçlar beklenirse hepsi memleketimizde mevcuttur." },
{ name: "Küçük Paşa", quote: "Vatan sevgisinden boş gönül, vatan özleminden uzak insan mı olur?" },
{ name: "Küçük Paşa", quote: "Köyleri gelişmiş, köylüleri mutlu olmayan bir memlekette düzgün ve sabit bir ilerleme ve saadet ancak rüyada görülebilir." },
{ name: "Küçük Paşa", quote: "Zalimin zulmü mazlumun sabrını, mazlumun sabrı zalimin zulmünü arttırmaya başlayınca; zalim istediği kadar zulümde özgür, mazlum da tahammül edemeyeceği kadar sabra mecbur olunca, iş sırası kime gelir?" },
{ name: "Küçük Paşa", quote: "Büyük şehirlerdeki komşulukların çoğu, birbirlerinin ahvalinden habersiz olan ölülerin mezar komşuluğuna yakın bir komşuluktur." },

{ name: "Sergüzeşt", quote: "Çünkü seni seviyordum. Zararı yok... İlk gördüğüm zaman senin gözlerin kalbimde öldürücü yaralar açmıştı. Zaten yaşayamazdım." },
{ name: "Sergüzeşt", quote: "Güzellikten büyük asâlet, kalp sâfiyetinden büyük servet mi olur?" },
{ name: "Sergüzeşt", quote: "Ağlamak, uğradığımız felaketlere karşı vücudumuzda kalan son kuvvetin bir feryadıdır." },
{ name: "Sergüzeşt", quote: "Senin bana ne kadar tesir ettiğini biliyor musun? Beni gündüzleri düşündüren, gece sabahlara kadar uyutmayan hep sensin." },
{ name: "Sergüzeşt", quote: "Hayatın anlamı yok olursa, yaşamakta ne tat var?" },

{ name: "İstanbul Hatırası", quote: "İnsan anlaşılması zor bir varlık." },
{ name: "İstanbul Hatırası", quote: "Ölülerimizin yüzlerine bakıyorduk... Onların gözlerindeki kendi kederimize." },
{ name: "İstanbul Hatırası", quote: "Beden olmazsa ruh da olmaz. Ve ister acı çeksin, ister mutlu olsun, ruhun yaşayabilmesi için bedeni beslemek lazım." },
{ name: "İstanbul Hatırası", quote: "İnsanoğlu pek de vefalı bir varlık değil." },
{ name: "İstanbul Hatırası", quote: "Hayat, canlılara öncelik tanırdı. Ölenlerin görüntüleri, sesleri, korkuları, anıları, izleri ağır ağır silinir giderdi." },

{ name: "Aşk-ı Memnu", quote: "İnsanlar tuhaftır; fena bir şey yapmakta olduklarını hissedecek olurlarsa, mutlaka en evvel vicdanlarını susturacak bir sebep bulurlar." },
{ name: "Aşk-ı Memnu", quote: "Aşkta kalp susmaya başlayıp da zihin yetilerini kullanmaya başlarsa o aşk öyle bir hasta çocuğa benzer ki damarlarında taze bir kan yerine zehirli ilaçlar dolaşsın." },
{ name: "Aşk-ı Memnu", quote: "Lakin asıl şiir kadınlardır, bu çiçeklerden oluşturularak odanızın yaldızlı hücrelerinde narin vazolarda güzel kokulu hatıralarıyla size gülümseyen demetlerdir." },
{ name: "Aşk-ı Memnu", quote: "O, otuz yaşına kadar oldukça masum bir hayat geçirmişti, hayatının en büyük aşk olayı evlenmesiydi." },
{ name: "Aşk-ı Memnu", quote: "Beraber, hep beraber, yaşarken ve ölürken..." },

{ name: "Beyoğlu Rapsodisi", quote: "Bir insanı sevmek, onu; zayıflıkları, zaafları, yanlışlarıyla birlikte kabul etmek demektir." },
{ name: "Beyoğlu Rapsodisi", quote: "Mutluluk, yetinmeyi bilmektir." },
{ name: "Beyoğlu Rapsodisi", quote: "Peki normal nedir Allah aşkına? Herkes gibi olmak mı?" },
{ name: "Beyoğlu Rapsodisi", quote: "Kaybetmeye alıştıkça daha çok özgürleşiyor insan." },
{ name: "Beyoğlu Rapsodisi", quote: "Bu kadar saçma sapan bir dünyada, bu kadar mantıklı olmaya çalışmanın ne yararı var?" },


{ name: "Saatleri Ayarlama Enstitüsü", quote: "Yanılıyorsunuz Hayri Bey, başlamak, başarmaktır." },
{ name: "Saatleri Ayarlama Enstitüsü", quote: "İnsanlar niçin yalan söylerler ve iftira ederler? Benim naçiz kanaatıma göre, iftira sade çirkin değil, aynı zamanda gülünç ve âciz bir şeydir de." },
{ name: "Saatleri Ayarlama Enstitüsü", quote: "Metih veya zem, Saatleri Ayarlama Enstitüsü'nden bahsedilirken daima bir hakikat unutulmuştur. O da bu müessesenin benim şahsımla, hatta mazimle olan sıkı bağlılığıdır." },
{ name: "Saatleri Ayarlama Enstitüsü", quote: "Hayatta uğradığımız bütün güçlükler az çok kafamıza gelen ilk fikirden bir türlü silkinip çıkamayışımız yüzünden değil midir?" },
{ name: "Saatleri Ayarlama Enstitüsü", quote: "Şu hakikatı kendi hayatım bana öğretti: İnsanoğlu, insanoğlunun cehennemidir." },

{ name: "Çalıkuşu", quote: "İnsan, birini sevmek felaketine uğradı mı, esir gibi bir şey oluyor." },
{ name: "Çalıkuşu", quote: "O vakit, sadece gözlerim ağlamıştı. Bu gece gönlüm ağlıyor." },
{ name: "Çalıkuşu", quote: "Ne bileyim, insan kalbi, öyle anlaşılmaz bir şey ki!" },
{ name: "Çalıkuşu", quote: "Sende de ne zamana kadar bu pısırıklık, bu görücüye çıkan eski zaman kızı naz ve edaları?" },
{ name: "Çalıkuşu", quote: "Bu bir sene içinde, birkaç defa, kendimi zapt edemedim, ağladım. Fakat bunların hiçbirisinde bu gece göz kapaklarımın içini yakan yaşlardaki acılık yoktu." },

{ name: "Kıyı", quote: "Gençlik düşleri insanlık düşleridir." },
{ name: "Kıyı", quote: "Sabahtan gece yarılarına dek bir cümle ararım, çoğunlukla da bulamam." },
{ name: "Kıyı", quote: "Sen yaşamın gölgeli yönünde kötümser bir şarkıcısın." },
{ name: "Kıyı", quote: "Biraz daha bekle incelemem bitmedi." },
{ name: "Kıyı", quote: "Üç şeytan adına kaçalım burdan." },

{ name: "Ateşten Gömlek", quote: "Zannediyorum ki, ben denilen şey başımdaki birkaç sima ve onların hatıralarından ibaret." },
{ name: "Ateşten Gömlek", quote: "Bilmiyorum Peyami. Bütün yeşil gözlü kadınlar gibi o da bir sır. Karanlıktan geldi, karanlığa gitti." },
{ name: "Ateşten Gömlek", quote: "İçimdeki sıkıntı beni boğuyor." },
{ name: "Ateşten Gömlek", quote: "Ölmekten korkmamak askerlere mi özgüdür?" },


{ name: "Kırık Hayatlar", quote: "Hayatın hakikatlerinden böyle uzaklarda dolaşmak için ne uslanmaz bir saflığı vardı." },
{ name: "Kırık Hayatlar", quote: "Aklın, idrakin doğru kabul ettiğine kalbin de uyması beklenebilir miydi?" },
{ name: "Kırık Hayatlar", quote: "Ah! Sen hayatın birden fazla, hiç olmazsa iki çehresi olduğuna akıl erdiremeyeceksin yavrum!" },
{ name: "Kırık Hayatlar", quote: "Sizden ne beklenecek bir ümidim, ne alınacak bir emelim vardı; size gelirken yalnız bir şeyi düşünüyordum: Sizi!" },
{ name: "Kırık Hayatlar", quote: "Pek çocukluğun ait bir sevda hatırası vardı ki yalnız onu düşünürken belki o zaman aşık olduğunu zannederdi; fakat bu o derece uzak ve uzaklığıyla o derece silik bir hatıraydı ki doğru bir hüküm verecek kadar ayrıntıyı hatırlayamazdı." },

{ name: "Eylül", quote: "Sevmeye gelince, o öyle sokaktan geçerken karşıdan görmekle erkek sevmeyi anlamıyordu. Bu ona, seveyim diye sevmek gibi geliyordu. Sevmek için bilmeyerek sevmek, sonra fark etmek lazım diye düşünüyordu." },
{ name: "Eylül", quote: "Ah, hayatın bu kadar fedakârlığa değecek nesi ve ne mükâfatı vardı?" },
{ name: "Eylül", quote: "Eldivenlerin dokuması o kadar onun eli gibi hoş ve narin idi ki gerçekten onun ellerinin kokluyormuş gibi geliyordu. Bir an oldu ki, bunları alıp saklamanın ne büyük bir mutluluk olduğunu acı bir özlemle düşündü." },
{ name: "Eylül", quote: "Erkek kalbinin, kadınların kalbinden daha çok şey istiyor olması haksızlık değil miydi?" },
{ name: "Eylül", quote: "Mümkün olmayan şeyi istemek bile bile reddedilmektir." },

{ name: "Suç ve Ceza", quote: "İnsanın canını sıkan ne biliyor musun? Herhalde onların yalan söylemesi değil. Yalan, her zaman affedilebilir… Yalan sevimli bir şeydir, çünkü insanı gerçeğe ulaştırır. Hayır, burada insanın canını sıkan şey, yalnız yalan söylemeleri değil, kendi yalanlarına kendilerinin de inanmalarıdır." },
{ name: "Suç ve Ceza", quote: "Hiçbir eksiği bulunmasın diye bakacak olursak, dünyada kaç tane iyi insan kalır dersin?" },
{ name: "Suç ve Ceza", quote: "Kimseye, hiç kimseye ne yardımına, ne ilgisine ihtiyacım var... Ben... yapayalnızım..." },
{ name: "Suç ve Ceza", quote: "Yapayalnız olmanın, tek başına kalmışlığın sonsuz acı verici karanlık duygularıyla doluvermişti birden yüreği." },
{ name: "Suç ve Ceza", quote: "Eylemlerimin ahlaki olup olmadıklarını, onların hitap ettiği kitle belirler." },

{ name: "İvan İlyiç'in Ölümü", quote: "Tıpkı çocukları okşayıp avutur gibi onu da öpsünler, sevip okşasınlar, başucunda gözyaşı döksünler istiyordu." },
{ name: "İvan İlyiç'in Ölümü", quote: "Ölümün kıyısında, onu anlayacak, ona acıyacak hiç kimse olmadan böyle tek başına yaşayacaktı." },
{ name: "İvan İlyiç'in Ölümü", quote: "Hep aynı bazen küçük bir umut ışığı çakıyor, bazen umutsuzluk denizleri kuduruyordu.." },
{ name: "İvan İlyiç'in Ölümü", quote: "İvan İlyiç yalnız kalınca inlemeye başladı; inlemesi ağrısı ne kadar şiddetli olursa olsun, ağrıdan değil, iç sıkıntısından dolayıydı." },
{ name: "İvan İlyiç'in Ölümü", quote: "Çaresizliğine, yalnızlığına, insanın ve Tanrı'nın zalimliğine, Tanrı'nın yokluğuna ağlıyordu." },

{ name: "Beyaz Geceler", quote: "Tanrım, yalnızca mutluluk dolu bir an mı? Böyle bir an bir insanın hayatı için yeterli sayılmaz mı?" },
{ name: "Beyaz Geceler", quote: "Yalnız kalmak, tamamen tek başına kalmak ve hayalanacak bir şey bile bulamamak ne kadar boğucu..." },
{ name: "Beyaz Geceler", quote: "Bazen hayal kurmak iyidir! Ama Tanrı bilir! Özellikle hayaller dışında da düşünecek bir şeyiniz varsa." },
{ name: "Beyaz Geceler", quote: "Neden herkes olduğundan daha sert gözükmeye çalışıyor? Bir insan, içini içtenlikle ortaya dökmeyi neden duygularına bir hakaret olarak kabul ediyor?" },
{ name: "Beyaz Geceler", quote: "Bırakın gözyaşlarım dökülsün, dökülsünler, kimseye bir zararı olmaz. Onlar da kuruyup giderler, Nastenka..." },

{ name: "Kış Bahçesi", quote: "Her nasılsa, biz kadınlar daha güçlüyüz." },
{ name: "Kış Bahçesi", quote: "Sevinç ve üzüntü hayatın bir parçasıydı; belki de işin sırrı, bütün bunları hissetmek, fakat sevince biraz daha sıkı sarılmaktı, çünkü güçlü bir kalbin ne zaman duracağını asla bilemezdiniz." },
{ name: "Kış Bahçesi", quote: "İnsan kalbinin nelere katlanabileceğine şaşarsın." },
{ name: "Kış Bahçesi", quote: "Birlikte olmak için birlikte olmamıza gerek yok." },
{ name: "Kış Bahçesi", quote: "Ruhum karanlığı seviyor, ne yapayım bazısı böyledir." },

{ name: "Yeraltından Notlar", quote: "Hiçbir şey yapmamaktan sıkıldım. Bilinçli olmanın, her şeyi anlamanın en akla uygun ve kaçınılmaz sonucu tembelliktir, kollarını kavuşturup oturmaktır." },
{ name: "Yeraltından Notlar", quote: "Beni kıyamet kopmasıyla çaysız kalmam arasında seçim yapmak zorunda bıraksalar, dünya yıkılsa umurumda olmayacağını, ama çayımdan vazgeçmeyeceğimi haykırırdım." },
{ name: "Yeraltından Notlar", quote: "İnsanoğluna gereken tek şey hür, başıboş bir istektir." },
{ name: "Yeraltından Notlar", quote: "Evet, insan yaşamayı önce kendi öğrenmeli, sonra başkalarını suçlamalı!" },
{ name: "Yeraltından Notlar", quote: "Bizi tek başımıza bırakın, elimizden kitapları alın o saat şaşkına döner, ne yana gideceğimizi, kimden yana çıkacağımızı, kimi sevip, kimden nefret edeceğimizi bilemeyiz..." },

{ name: "Açlık", quote: "İnsanın, henüz yaşarken, sadece açlık yüzünden çirkin, korkunç biçimlere girmesi, çok rezil bir şeydi, çok rezil." },
{ name: "Açlık", quote: "Kafatasımın içindeki boşluğu benliğimin her hücresinde hissedebiliyordum. Tepeden tırnağa içim oyulmuş gibiydi." },
{ name: "Açlık", quote: "Öte yandan bu kişilerin arasında yürüyen ben, gençliğime ve yeni serpilmiş olmama karşın, mutluluğun neye benzediğini bile unutmuştum!" },
{ name: "Açlık", quote: "Sonbahar, fanilik karnavalı ortasındaki mevsim. Güllerin kızartısı artık hastalıklıdır, kansız toprağın üstünde harikulâde ve aldatıcı pembelik." },
{ name: "Açlık", quote: "Sokaklarda sürtmeye devam ettim. Her şeye kayıtsız, avare yürüyor, bir sokak başında sebepsiz duruyor, hiç işim olmayan bir yan sokağa sapıyordum." },

{ name: "Faust", quote: "Boşunadır, sağır kulaklara söylenen akıllıca sözler." },
{ name: "Faust", quote: "En iyisi size bir sır vereyim: Önce kendi aynanıza bakın…" },
{ name: "Faust", quote: "Oyuncağı mıyız rastlantıların?" },
{ name: "Faust", quote: "Alnına yazılmış belli, Sevmemesi hiç kimseyi." },
{ name: "Faust", quote: "Hassas bir ruh, bütün kaba şeylerin düşmanıdır." },

{ name: "Genç Werther'in Acıları", quote: "Başkaları istiyor diye kendi tutkusunu, kendi gereksinimini dikkate almadan, para, onur ve başka şeyler uğruna kendini yiyip bitiren insan her zaman budalanın biridir." },
{ name: "Genç Werther'in Acıları", quote: "Bazen bir anlığına beni yerimden sıçratıp kendime getiren bir cesarete kapılıyorum, o an nereye gideceğimi bilsem, koşa koşa gideceğim." },
{ name: "Genç Werther'in Acıları", quote: "Nasıl oluyor da insanı mesut eden bir şey aynı zamanda felaketinin de kaynağı oluyor." },
{ name: "Genç Werther'in Acıları", quote: "Hepimiz önyargıyı kötüleriz, ama hala önyargılıyız." },
{ name: "Genç Werther'in Acıları", quote: "Dostum söylemek çok kolay, gerçekleştirmek zor." },

{ name: "Germinal", quote: "İnsan güçlü olmadığı zaman akıllı olmak zorundadır." },
{ name: "Germinal", quote: "Umut kalmayınca insanın yaşama isteği de kayboluyor." },
{ name: "Germinal", quote: "Adalet istemenin karşılığı bunca acı mı olmalıydı?" },
{ name: "Germinal", quote: "Aptal gibi ne umutlar beslemiştim..." },
{ name: "Germinal", quote: "İnsan tekrar tepetaklak çamurun içine düşünce bir daha kendine gelemiyor..." },

{ name: "Dönüşüm", quote: "Biraz daha uyusam bütün bu olanlardan kurtulabilir miyim?" },
{ name: "Dönüşüm", quote: "Sürekli değişen, hiç kalıcı ve samimi olmayan insan ilişkileri..." },
{ name: "Dönüşüm", quote: "Paltom bile ağır gelirken, nasıl taşırım koskoca dünyayı sırtımda?" },
{ name: "Dönüşüm", quote: "Ölmekten müthiş bir şekilde korkuyordu çünkü henüz gerçek anlamda yaşamamıştı." },
{ name: "Dönüşüm", quote: "Herkes beraberinde taşıdığı bir parmaklığın ardında yaşıyor." },

{ name: "Korku", quote: "Şimdi dehşet verici bir kesinlikle felaketin kaçınılmaz, kurtuluşun olanaksız olduğunu hissediyordu." },
{ name: "Korku", quote: "Duyular uygun dozda sansasyondan oluşan alışılmış besinini bulamayınca isyan ediyor ve yalnızlık kısa sürede kendi kendine düşmanlığı getiriyordu." },
{ name: "Korku", quote: "Çoğu kadın gibi o da sanatçıları uzaktan çok romantik, kişisel ilişkilerde çok nazik görmek istiyordu ama göreneklerin, demir parmaklıkların arkasından onlar göz alıcı vahşi yaratıklardı." },
{ name: "Korku", quote: "Maceranın gerçek bedeli tehlikeye atılabilmektir." },
{ name: "Korku", quote: "Tehlikeyle, dolayısıyla gerçek duygularla tanıştığından beri en uzağındakine kadar bütün hallerle bir ortaklık hisseder olmuştu." },

{ name: "Gizli Bahçe", quote: "İnsanlardan kilometrelerce uzaktaydı; ama her nedense yine de kendini hiç yalnız hissetmiyordu." },
{ name: "Gizli Bahçe", quote: "İyileşeceğine kendini inandırmıştı; bu inanç, aslında savaşın yarısından fazlasıydı ama bunu fark etmedi." },
{ name: "Gizli Bahçe", quote: "Sanki… Sanki yaşadığımı hisseder gibiyim!" },
{ name: "Gizli Bahçe", quote: "Seni sevdim ve sen sevdiğim beşinci kişi oluyorsun. Hiçbir zaman beş insanı sevebileceğimi düşünmemiştim." },
{ name: "Gizli Bahçe", quote: "Elbette dünyada sınırsız sihir olmalı, ama insanlar bunun neye benzediğini veya nasıl yapılacağını bilmiyor. Belki de başlangıç, güzel şeyler meydana gelinceye kadar güzel şeyler olacağını söylemektir sadece." },

{ name: "Sefiller", quote: "Doğru ya da yanlış, insanlar hakkında söylenenler, onların yaşamlarında ve özellikle kaderleri üzerinde yaptıkları işler kadar önemli bir etkiye sahiptir." },
{ name: "Sefiller", quote: "Uygarlık çağının ortasında, yasalar ve gelenekler aracılığıyla, dünyayı yapay olarak cehenneme çeviren ve ilahi kaderi insanlık belasına bulaştıran toplumsal lanetlenme hali devam ettikçe, yüzyılın ilki insanın emeğinin sömürülmesinden dolayı aşağılanması, ikincisi kadının açlık yüzünden alçalması, üçüncüsü çocukların eğitimsizlik nedeniyle yeteneklerinin gelişmemesi olan üç temel sorunu çözülmedikçe, bazı bölgelerde toplumsal baskı devam ederken, daha geniş anlamda yeryüzünde cehalet ve yoksulluk hüküm sürdükçe, böyle kitaplar yararlı olmayı sürdüreceklerdir." },
{ name: "Sefiller", quote: "Karanlık baş döndürücüdür. İnsana aydınlık gerekir. Gündüzün aksi istikametine dalan yüreğinin sıkıştığını hisseder. Göz karanlıklara bakınca zihin bulanır. Ay tutulmasında, gecede, isli bir donuklukta en gözüpekler için bile endişe vardır. Kimse gece vakti, tek başına içi titremeden ormanda yürüyemez. Karanlık ve ağaçlar, ürkütücü ve kalın katmanlar oluşturur. Tam olarak seçilemeyen derinliklerde düşsel bir gerçeklik belirir. Algılanamayacak nesneler birkaç adım ötenizde hülyalı bir biçim alır. Boşlukta ya da zihinde uyuyan çiçeklerin düşlerine benzeyen belli belirsiz ve kavranması mümkün olmayan bir şeylerin dalgalandığı görülür. Ufukta ürkütücü görüntüler vardır. Devasa karanlık boşluğun yayıntıları solunur. İnsan korksa da, arkasına bakmak ister. Gecenin oyukları, iç karartıcı hale gelen nesneler, yüründükçe dağılan suskun şekiller, iç içe geçmiş karanlıklar, öfkeli çalılıklar, kurşuni renkte su birikintileri, karanlığın içine yansıyan kasvet, sessizliğin mezarlıkları andıran enginliği, karşılaşılması olası meçhul varlıklar, gizemle eğilen dallar, ürkütücü ağaç gövdeleri, titreşen uzun ot yığınları; tüm bunların karşısında savunmasız kaldığında ürpermeyen, endişeyi yakınında hissetmeyen bir gözüpeklik yoktur. Adeta ruhun karanlığa karışmasına benzer iğrenç bir his duyulur. Karanlıkların bedene nüfuz etmesi bir çocuk için tasvir edilemeyecek ölçüde ürkütücüdür." },
{ name: "Sefiller", quote: "Her ordunun suçlanması gereken bir kuyruğu vardır. Yarasa insanlar, yarı uşak yarı haydutlar, savaş denen alacakaranlıkla birlikte ortaya çıkan tüm yarasagiller, savaşmayan üniformalılar, sahte hastalar, ürkütücü görünümlü sakatlar, bazen yanlarındaki karılarıyla küçük arabalarıyla tırıs giden ve çaldıklarını satan sahtekâr erzak tedarikçileri, subaylara rehberlik etmek isteyen dilenciler, serseriler, kapkaççılar." },
{ name: "Sefiller", quote: "Savaşla övünenlerden değiliz, yeri geldiğinde ona kendi gerçeklerini söyleriz. Savaşın hiç saklamadığımız ürkütücü güzelliklerinin yanı sıra bazı çirkinliklerinin de olduğunu kabul etmeliyiz. Bu çirkinliklerden en şaşırtıcısı zaferden sonra aceleyle ölülerin soyulmasıdır. Savaşı izleyen günün güneşi her zaman için çıplak cesetlerin üzerine doğar. Bunu kim yapar? Zaferi bu şekilde kim lekeler? Zaferin cebine elini uzatan o kaçamak, iğrenç eller kime aittir? Zaferin arkasından işlerini gören o yankesiciler kimlerdir? Aralarında Voltaire'in de bulunduğu bazı düşünürler bunların zaferi kazananlardan başkası olmadığını, ayakta kalanın yere düşeni yağmaladığını söyler." },

{ name: "Madame Bovary", quote: "O büyük isteklerle, öfkeyle, kinle doluydu. Bu dik pilili giysi, altüst olmuş bir yürek saklıyor, bu pek terbiyeli dudaklar, içindeki fırtınayı anlatmıyorlardı." },
{ name: "Madame Bovary", quote: "Beri yandan da, benliğinin ta içlerinde, bir şeyler olmasını bekleyip duruyordu. Tıpkı kazaya uğramış bir gemici gibi, yaşamının çoraklığı üzerinde umutsuz bakışlarını dolaştırıyor; ta uzaklarda, ufkun sisleri arasında beyaz bir yelken araştırıyordu." },
{ name: "Madame Bovary", quote: "Birbirlerine söyleyecek başka şeyleri yok muydu hiç? Gözleri daha önemli bir konuşmayla doluydu." },
{ name: "Madame Bovary", quote: "Mısraları düzyazıdan daha duygulu bulurum, onlar daha iyi ağlatır." },
{ name: "Madame Bovary", quote: "Mutluluktan vazgeçilmez, mutluluğa alıştın mı, bırakamazsın bir daha!" },

{ name: "Notre-Dame'ın Kamburu", quote: "Zamanın gözü kördür, insan ahmaktır." },
{ name: "Notre-Dame'ın Kamburu", quote: "Kadınların saygı gördükleri yerlerde tanrılar hoşnuttur, onların aşağılandığı yerde ise dua etmek yararsızdır." },
{ name: "Notre-Dame'ın Kamburu", quote: "Ahh şapkam ahh! Kafamdan neler geçtiğini bilseydin seni yakardım!" },
{ name: "Notre-Dame'ın Kamburu", quote: "Gülümseyiş iç çekişten muhakkak ki daha acıydı." },
{ name: "Notre-Dame'ın Kamburu", quote: "Bu çağ acımasızdır." },

{ name: "Kızıl Veba", quote: "Zaman geçtikçe insanlara duyduğum özlem arttı da arttı. Ama kimseyi bulamadım." },
{ name: "Kızıl Veba", quote: "Medeniyet, insanoğlu uygarlık yolundaki kanlı ilerleyişine başlamadan önce, ilkelliğin karanlığına giderek daha çok batmaya mahkûmdur." },
{ name: "Kızıl Veba", quote: "Gelip geçici düzenler köpük gibi yok olur gider." },
{ name: "Kızıl Veba", quote: "Bir başka ilginç şey de ölenin vücudunun büyük bir hızla dağılmasıydı. Öldüğü andan itibaren vücudu parçalanıp dağılmaya, gözlerinizin önünde erimeye başlardı." },
{ name: "Kızıl Veba", quote: "Her yandan yardım isteyen çığlıkların geldiği bu tür sahnelere fazlasıyla tanık olmak, insanın kalbini taşa çeviriyordu." },

{ name: "Yaban", quote: "Eşek; zira, bu, mübarek bir hayvandır. Bütün gökten inanan kitaplarda bunun adı var." },
{ name: "Yaban", quote: "Utanmak, kendi kendinden nefret etmenin eşitidir." },
{ name: "Yaban", quote: "Yalnızlık dinmeyen bir sızıdır." },
{ name: "Yaban", quote: "Bu bir zeka işi değildir. Ruhun derinliklerinde bizden daha içeri bir şey, kör, sağır, dilsiz ve karanlık bir varlık; o ister, o istemez. O sever, o sevmez ve biz onun itaatli aleti oluruz." },
{ name: "Yaban", quote: "Ben Kemal Paşa'dan yana olmam da, kimden yana olurum? Çünkü, o, yarın bu dev işini başaracak olan serden-geçti gönüllülerin başıdır." },


{ name: "Monte Cristo Kontu", quote: "Tanrı'nın iradesinin bile yetersiz kaldığı olayları anmak neye yarar? Tanrı geleceği değiştirebilir ama geçmişi değiştiremez. Biz insanların yapabileceği, yaşananları inkar etmesek de en azından üzerlerine bir çizgi çekmektir." },
{ name: "Monte Cristo Kontu", quote: "Yani intikam: göze göz, dişe diş … ölüm bir işkence olabilir ama günahların bedelinin ödenmesi değildir." },
{ name: "Monte Cristo Kontu", quote: "Zaten beni ürküten de bu, insanın böyle kolayca mutlu olabileceğine inanamıyorum! Mutluluk o büyülü adalarda kapılarını ejderhaların koruduğu saraylara benzer âdeta. Ona sahip olmak için mücadele etmek gerekir..." },
{ name: "Monte Cristo Kontu", quote: "Belki kaba bir ifade tarzı ama gerçek. Ondan istediğimi alamadan karım olmadı çok kötü. Hayatım boyunca onunla yaşamak, onunla konuşmak, onu şarkı söylerken dinlemek düşüncesi beni korkutuyor. Metresinizden daima ayrılabilirsiniz. Fakat karınız başka. Onunla ömrümüz boyunca yaşamak mecburiyetindesiniz." },
{ name: "Monte Cristo Kontu", quote: "Benimle geçmiş arasında olduğu gibi sizin de insanlarla aranızda bir uçurum var ve size şunu söyleyeyim ki benim için en ızdıraplı işkence kıyaslama yapmaktır, çünkü dünyada size benzeyen, sizin kadar değerli bir insan yok." },

{ name: "Üç Silahşör", quote: "Ne yaparsınız komutanım, bütün savaşlar kazanılmıyor." },
{ name: "Üç Silahşör", quote: "Tanrı, kendini kötülüğe kaptıranları terk eder." },
{ name: "Üç Silahşör", quote: "Bazı durumlarda, beş dakika beş asra bedeldir." },
{ name: "Üç Silahşör", quote: "Genellikle tavsiyeler uymamak için istenir, ya da tavsiyeye tavsiye veren kişiyi sonradan suçlamak için uyulur." },

{ name: "Kamelyalı Kadın", quote: "Ben bir ilkeye inanıyorum yalnız, bu ilke de şu: İyiliği eğitim yoluyla öğrenememiş bir kadının önünde, iyiliğe giden iki yol açar Tanrı; hemen her zaman böyledir. Biri acı, biri de aşktır bu yolların. Çetin yollardır bunlar; bu yollara giren kadınlar ayaklarını kanatırlar, ellerini parçalarlar, ama yolun dikenlerine günahın süslü giyimlerini de bırakırlar aynı zamanda, Tanrı önünde yüz kızartmayan çıplaklıkla erişirler amaca." },
{ name: "Kamelyalı Kadın", quote: "Tanrı'nın belki de esirgemediği, ama geliştirmeyi hiç kimsenin düşünmediği iyilik ve kötülük duygularını öldürmüştü onda." },
{ name: "Kamelyalı Kadın", quote: "Daha dün ruhlarının yalnızlığında hasta odalarının loşluğunda çabucak ölmeyi arzulayanlar, başkalarının yaşamını ve mutluluğunu görünce nasıl da yaşamak istiyorlar." },
{ name: "Kamelyalı Kadın", quote: "Kadınlar sevmedikleri insanlara karşı acımasızdır." },
{ name: "Kamelyalı Kadın", quote: "Beni seviyorsan, bana acı çektirme; çünkü ben seni öyle bir aşkla seviyorum ki, bu aşk beni öldürecek." },

{ name: "İçimizdeki Şeytan", quote: "Ne zaman irademe müracaat edersem büyük bir yorgunluk duyuyorum. Kendimi hadiselerin eline bırakayım mı?" },
{ name: "İçimizdeki Şeytan", quote: "Hayat dediğin başka nedir zaten? Ben şuna inanıyorum ki, üç buçuk günlük ömrümüzü kendimize zehir etmemek için ne mazideki hayatımıza ve kaçırdığımız fırsatlara ne de istikbalin olmayacak hülyalarına kulak asmayarak bugünümüze hapsolup yaşamalıyız." },
{ name: "İçimizdeki Şeytan", quote: "Kendi ruhunun pisliğini bu kadar yakından gören bir adam başkalarının temiz olacağına inanabilir mi?" },
{ name: "İçimizdeki Şeytan", quote: "İnsan bir kere öğrenmeye başladı mı, artık peşini bırakmamalı. Araya azıcık soğukluk girdi mi bu ilim dedikleri namert, adamı ürkütür." },
{ name: "İçimizdeki Şeytan", quote: "Bu sefer hiçbir doğru ve akıllıca tarafını bulamadığım bu hayata beni bağlayan kuvvetin, içimde saklı bir şeytan olması sahiden mümkündü." },

{ name: "Jane Eyre", quote: "Göğsüme saplanmış dikenli bir ok gibi, çıkarmak istedikçe paralıyor, anıların etkisiyle büsbütün etime gömüldükçe beni bitiriyordu." },
{ name: "Jane Eyre", quote: "Ben de bir tür kriz geçirmiş olsam gerek: Bayılmışım." },
{ name: "Jane Eyre", quote: "O karanlık ikindi saatleri boyunca ruhum öylesine bunaldı ki! Kafam kargaşa içinde, bütün duygularım ayağa kalkmış, ama içimdeki bu savaş öyle koyu bir karanlık, öyle kör bir bilgisizlik içinde geçiyordu ki!.. Çünkü içimden hiç durmaksızın yükselen o soruya, 'Neden acı çekiyorum?' sorusuna, hiç ama hiçbir karşılık bulamıyordum." },
{ name: "Jane Eyre", quote: "Kulaklarım deli karımın hâlâ çığlık çığlığa sıralamakta olduğu sövgülerle doluydu. Bu sövgülerin arasına benim adımı da karıştırıyordu. Sesi öyle şeytansı bir kinle dolu, kullandığı sözler öyle pisti ki! En adi bir sokak kadını bile ondan daha çirkin konuşamazdı." },
{ name: "Jane Eyre", quote: "Her Tanrı'nın günü onu görüp işitmek zorundaydım. Ciğerlerime sinen havaya onun da soluğu karışıyordu. İğrenç düşünce!" },

{ name: "Çavdar Tarlasında Çocuklar", quote: "Sakın kimseye bir şey anlatmayın. Herkesi özlemeye başlıyorsunuz sonra." },
{ name: "Çavdar Tarlasında Çocuklar", quote: "Oldukça cahilimdir, ama epey okurum." },
{ name: "Çavdar Tarlasında Çocuklar", quote: "Tanıştığıma hiç memnun olmadığım kimselere, durmadan 'Tanıştığımıza memnun oldum.' demek beni öldürüyor. Ama, hayatta kalmak istiyorsanız, ille de bu zarvaları söylemek zorundasınız." },
{ name: "Çavdar Tarlasında Çocuklar", quote: "Öldükten sonra çiçeği kim ne yapsın?" },
{ name: "Çavdar Tarlasında Çocuklar", quote: "Bir kitabı okuyup bitirdiğiniz zaman, bunu yazan keşke çok yakın bir arkadaşım olsaydı da, canım her istediğinde onu telefonla arayıp konuşabilseydim diyorsanız, o kitap bence gerçekten iyidir." },


{ name: "Martin Eden", quote: "Hayat, düşünceleri dondurmadan ve erkek arkadaştan öteye geçemeyen bu iki kızdan çok daha fazla şey ifade ediyordu ona." },
{ name: "Martin Eden", quote: "Güzellik ve görkem şimdi onunla beraber, el ele yürüyordu; bütün güç ondaydı." },
{ name: "Martin Eden", quote: "Kültür araç değil, kendi içinde amaçtır." },
{ name: "Martin Eden", quote: "Bir şeyin varlığı, onun var olmaya uygunluğunun yeterli bir kanıtıdır." },
{ name: "Martin Eden", quote: "Şairlerin her dizesi zarif hakikatlerle yüklüdür, insanın yüce ve asil yanlarına seslenir." },

{ name: "Beyaz Diş", quote: "Yenilgiyi peşinen kabul etmek demek yarı yarıya yenilmek demektir." },
{ name: "Beyaz Diş", quote: "Çünkü hayat, ne yapmak için donanımlıysa, en çok onu yaparken zirvesine ulaşır." },
{ name: "Beyaz Diş", quote: "Tüm zorluk ve olanaksızlıklara rağmen meydan okuyan bir hali vardı." },
{ name: "Beyaz Diş", quote: "Ne pahasına olursa olsun hiç durmadan hareket etmek istiyordu, çünkü hareket etmek var olmak anlamına geliyordu." },
{ name: "Beyaz Diş", quote: "Dünyada sonsuz özgürlük diye bir şeyin olmadığını, hayatın bazı kısıtlamaları ve sınırları olduğu duygusunu yerleştirmişti ona." },


{ name: "Vahşetin Çağrısı", quote: "Makine gibi bir düzenle devam eden monoton bir hayattı bu. Günler bir diğerinin aynısıydı." },
{ name: "Vahşetin Çağrısı", quote: "Ya sahip olacaksın ya da sahip olunacaksın." },
{ name: "Vahşetin Çağrısı", quote: "Acı çekiyorlardı. Hatta kalpleri sızlıyordu." },
{ name: "Vahşetin Çağrısı", quote: "Tekdüze bir hayattı, makine gibi bir düzenle devam ediyordu. Günler birbirinin neredeyse aynısıydı." },
{ name: "Vahşetin Çağrısı", quote: "Cehenneme kadar yolunuz var, efendim. Size söyleyebileceğim tek şey budur, efendim." },


{ name: "Oblomov", quote: "Oysa insan mütevazı, ağırbaşlı, sakin bir hayat arkadaşının yanında ne rahat uyur. Akşam yatarken, sabah uyanırken aynı sevimli bakışı bulacağından emindir. Yirmi otuz yıl sonra insan, kendi sıcak bakışına cevap veren uysal, sıcak, sevgi dolu bir bakış görür, ölünceye kadar da hayat böyle geçer. Her kadınla erkeğin gizli amacı da bu değil midir?" },
{ name: "Oblomov", quote: "Ruhun sıkılır da sıkılır, yaşmak istemezsin." },
{ name: "Oblomov", quote: "Geçmişine ait boş pişmanlıklar, yakıcı vicdan azapları ona iğne gibi batıyor; bütün gücüyle bu işkenceden kurtulmaya uğraşıyor, suçu yükleyecek kendisinden başka birini bulmaya çalışıyordu. Ama bu kim olabilirdi? Hep Zahar yüzünden, diye mırıldandı." },
{ name: "Oblomov", quote: "Dikkat et de, fısıltıların kaderinin kulağına gitmesin, senin nankör olduğunu düşünmesin. O bahşettiği armağanların değerini bilmeyenleri sevmez! Sen bugüne kadar hayatı sadece tanıdın ve keşfettin, onu yaşaman, denemen de gerekecek! Biraz bekle, hayat gelecek ve o zaman sorularına, şüphelerine ayıracak vaktin olmayacak..." },
{ name: "Oblomov", quote: "İnanılmaz bir hızla ilerleyen aşk tıpkı manevi bir kangren gibidir." },


{ name: "İki Şehrin Hikâyesi", quote: "Gelmiş geçmiş en iyi günlerdi, gelmiş geçmiş en kötü günlerdi; hem bilgelik çağıydı hem ahmaklık; hem inancın devriydi hem şüpheciliğin; hem Aydınlık hem Karanlık bir mevsimdi; umudun baharı, umutsuzluğun kışıydı..." },
{ name: "İki Şehrin Hikâyesi", quote: "Her insanın bir diğeri için engin bir muamma oluşu, üzerine kafa yorulması gereken şaşırtıcı bir gerçektir." },
{ name: "İki Şehrin Hikâyesi", quote: "Zaten sevgi her zaman nefretten üstün değil miydi?" },
{ name: "İki Şehrin Hikâyesi", quote: "İnsanlar bazen karşılarındaki kalben uzak olduğu için anlamakta güçlük çekerler. Bazen her ne kadar karşımızdakine yakın olsak bile, duygularını bilmediğimiz olabilir." },
{ name: "İki Şehrin Hikâyesi", quote: "Yaşayabilmek için her şey vardı önümüzde ve yaşayabilmek için önümüzde hiçbir şey yoktu." },

{ name: "Küçük Kadınlar", quote: "Gücün bütün çekiciliği alçakgönüllülüktedir." },
{ name: "Küçük Kadınlar", quote: "Bir anlamı olan güçlü sözcükleri seviyorum ben." },
{ name: "Küçük Kadınlar", quote: "Keşke yüreklerimizi de yıkayabilseydik geçen zamanın kirlerinden." },
{ name: "Küçük Kadınlar", quote: "Öfkelendiğimde her şeyi yapabilecekmişim gibi geliyor bana. Çok vahşileşiyorum, herkesi incitebilir ve bundan da keyif alabilirim." },
{ name: "Küçük Kadınlar", quote: "Siz dilediğinizi yapabilirsiniz ama ben kitabımı şu masaya koyup her sabah uyanır uyanmaz biraz okuyacağım, bunun bana iyi geleceğine ve gün boyu bana yardımcı olacağına inanıyorum." },

{ name: "Fahrenheit 451", quote: "Mutlu olmamız için gerekli her şeye sahibiz, ama mutlu değiliz. Bir şey eksik." },
{ name: "Fahrenheit 451", quote: "Kitaplar bir tür depo gibidir ve biz onlarda unutacağımızdan korktuğumuz şeyleri saklarız. İçlerinde büyülü bir şey yoktur." },
{ name: "Fahrenheit 451", quote: "Kendini kurtar, boğulsan bile en azından kıyıya doğru gittiğini bilerek ölürsün." },
{ name: "Fahrenheit 451", quote: "Bir kadının yanan bir evde kalmasına yol açtıklarına göre, kitaplarda bir şey olmalı... hayal edemeyeceğimiz bir şeyler; orada bir şey olmalı. İnsan bir hiç uğruna kalmaz." },
{ name: "Fahrenheit 451", quote: "Gözlerini mucizelerle doldur, hayatı on saniye sonra ölecekmişsin gibi yaşa." },

{ name: "Kırmızı Pazartesi", quote: "Bana bir önyargı verin, dünyayı yerinden oynatayım." },
{ name: "Kırmızı Pazartesi", quote: "Aşk da öğrenilir." },
{ name: "Kırmızı Pazartesi", quote: "Kader bizleri görünmez kılar." },
{ name: "Kırmızı Pazartesi", quote: "Aşk avına çıkmak, şahinle avlanmak gibidir." },
{ name: "Kırmızı Pazartesi", quote: "Onlar kusursuz kızlar, her erkek onlarla mutlu olur, çünkü acı çekmek için yetiştirilmişler." }
  ]);

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

  const uniqueQuotes = Array.from(
    new Set(quotes.map(item => item.quote))
  ).map(quote => {
    return quotes.find(item => item.quote === quote);
  });

  const [filteredQuotes, setfilteredQuotes] = useState(shuffleArray(uniqueQuotes));
  
  const handleSearch = () => {
    const filtered = uniqueQuotes.filter(item =>
      item.quote.toLowerCase().includes(query.toLowerCase()) ||
      item.name.toLowerCase().includes(query.toLowerCase())
    );


    
    setfilteredQuotes(filtered);
  };

  const handleKeyDown = (event) => {

    if (event.key === "enter") {
        event.preventDefault();  
        handleSearch(); 
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
   <div className="d-flex flex-column align-items-center min-vh-100 p-4">
        <Form className="d-flex flex-column flex-md-row align-items-center gap-2 shadow-sm rounded-2xl p-2 w-50 max-w-md" onSubmit={handleFormSubmit}>
        <FormGroup className="flex-grow-1 mb-0">
          <Input
            type="text"
            className="form-control rounded-pill"
            placeholder="Alıntı ara..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </FormGroup>
        <FormGroup>        
          <Button color="primary" onClick={handleSearch} className="rounded-pill px-4">
            Ara
          </Button>
        </FormGroup>

      </Form>

      <Row className="mt-4 w-100 justify-content-center">

      <p className="center-align mb-4 mb-4" style={{color:"white", fontSize:"20px"}}>Alıntılar ChatGPT den alınmıştır.</p>

        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((item, index) => (
          <Col key={index} xs="12" sm="12" md="10" lg="8" className="mb-4">
            <CardGroup className="centered-container">
                      <Card key={index} className='summary-card me-1 ms-1' style={{ border: '2px solid white'}}>
                
                      <CardText className="text-white" style={{ fontStyle: 'italic' }}>
                          "{item.quote}"
                      </CardText>

                      <CardFooter className="text-white font-weight-bold text-right mt-0" style={{textAlign:"right", fontStyle: 'italic'}}>
                        <strong>{item.name}</strong>
                      </CardFooter>
                    </Card>
            </CardGroup>                           
          </Col>

          ))
        ) : (
          <p className="text-white">Aramanıza uygun alıntı bulunamadı.</p>
        )}
      </Row>
    </div>
  );
}

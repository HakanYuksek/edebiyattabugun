import React, { useState } from "react";
import { Input, Button, Form, FormGroup, Row, Col, Card, CardGroup, CardFooter, CardBody, CardText } from "reactstrap";

export default function AlintilarApp() {
  const [query, setQuery] = useState("");
  const [alintilar, setAlintilar] = useState([
    { kitapAdi: "Sineklerin Tanrısı", alinti: "İnsanlar ne kadar korkunçlar." },
    { kitapAdi: "1984", alinti: "Büyük Birader sizi izliyor." },
    { kitapAdi: "Küçük Prens", alinti: "En önemli şey gözle görünmez." },
    { kitapAdi: "Savaş ve Barış", alinti: "Her savaşın sonunda bir barış doğar." },
    { kitapAdi: "Anna Karenina", alinti: "Bütün mutluluklar birbirine benzer, her mutsuz aile ise mutsuzdur kendi yolunda." },
    { kitapAdi: "1984", alinti: "Savaş barıştır. Özgürlük köleliktir. Cehalet güçtür." },
    { kitapAdi: "Moby Dick", alinti: "Ve bu denizin derinliklerinde, belki de dünyanın en büyük ve en korkunç canavarı, Moby Dick adlı beyaz balina, bir adamı öldürmeye karar verdi." },
    { kitapAdi: "Yüzyıllık Yalnızlık", alinti: "Bir insan bir kez yalnızlığa mahkûm oldu mu, o yalnızlık bir ömür boyu devam eder." },
    { kitapAdi: "Büyük Umutlar", alinti: "Herkesin hayalleri vardır, fakat hayallerin gerçekleşip gerçekleşmeyeceğini hiç kimse bilemez." },
    { kitapAdi: "Gülün Adı", alinti: "İnsanlar, içinde yaşadıkları dünyayı anlamaktan çok, dünyayı değiştirmeyi düşünürler." },
    { kitapAdi: "Savaş ve Barış", alinti: "Hayat kısa, sanat uzun, zaman ise sonsuz." },
    { kitapAdi: "Don Kişot", alinti: "Dünyada doğru ile yanlış arasında birçok gri alan vardır." },
    { kitapAdi: "Uğultulu Tepeler", alinti: "Aşk, sahip olmayı değil, özgür bırakmayı öğrenmektir." },
    { kitapAdi: "Frankenstein", alinti: "Bütün insanlık bana karşı döndü. Bir yaratık olarak, benden kimseye zarar gelmeyeceğini bilseniz de, bana zarar vermeye devam ettiniz." },
    { kitapAdi: "Suç ve Ceza", alinti: "Bir insanın başkalarına olan sorumluluğu, onların ihtiyaçlarını görmezden gelmek değildir." },
    { kitapAdi: "Karamazov Kardeşler", alinti: "İnsanlık, sonsuz bir barış içinde yaşamak için var olmalıdır, ama yine de insanlar birbirlerine acı çektiriyor." },
    { kitapAdi: "Cesur Yeni Dünya", alinti: "Herkesin her şeyden eğlenmesini sağlamak, dünyayı istenilen şekilde düzenlemek gibi bir çabadır." },
    { kitapAdi: "Görünmez Adam", alinti: "Beni yalnızca senin gibi biri anlayabilir." },
    { kitapAdi: "Aşk ve Gurur", alinti: "Aşk, öyle anlarda gelir ki, kişinin kendini adeta başka bir dünyada hisseder." },
    { kitapAdi: "Bülbülü Öldürmek", alinti: "Herkesin eşit olduğu bir toplumda, bazıları daha eşit olmaktan gurur duyar." },
    { kitapAdi: "Sineklerin Tanrısı", alinti: "Herkesin içindeki karanlık, sonunda hep bir şekilde ortaya çıkar." },
    { kitapAdi: "Küçük Prens", alinti: "Bir şeyin değeri, onu kaybettiğinizde anlaşılır." },
    { kitapAdi: "Pal Sokağı Çocukları", alinti: "Bütün dünya bir sahne, ama biz hep figüranız." },
    { kitapAdi: "Silas Marner", alinti: "Bazen en büyük umutlar, en karanlık zamanlardan çıkar." },
    { kitapAdi: "Tess", alinti: "İnsanlar sadece kendi doğrularını bilirler, başkalarının doğruları onların için bir hiçtir." },
    { kitapAdi: "Yaşlı Adam ve Deniz", alinti: "Bir insan sadece gerçekten kaybettiğinde, gerçek gücünü gösterir." },
    { kitapAdi: "Dorian Gray'in Portresi", alinti: "İnsanın dünyada geçirdiği süreye ruhani bir boyut kazandırmaya çalışması son derece kıymetli bir şeydir. Eğer bu kız yaşamını ruhsuz geçirmişlere ruh kazandırabiliyorsa, sefil ve çirkin yaşamlar sürenlere güzellik duygusu aşılayabiliyorsa, onları bencilliklerinden arındırıp başkaları için akıtılacak gözyaşları ödünç verebiliyorsa, hem senin hem de bütün dünyanın hayranlığını sonuna kadar hak ediyor demektir."},
    { kitapAdi: "Don Kişot", alinti: "Kör köre kılavuzluk ederse, ikisi de çukura düşer" },
    { kitapAdi: "Zamanı Durdurmanın Yolları", alinti: "Bu işi seviyorum.Şu an hayatta öğretmenlik yapmaktan daha iyi bir amaç göremiyorum. Öğretmenlik yapmak zamana bekçilik ettiğiniz, şekillendireceğiniz zihinler yoluyla gelecekteki mutluluğu garanti altına aldığınız hissini veriyor." },
    { kitapAdi: "Genç Bir Doktorun Anıları", alinti: "Okumak, okumak ve daha çok okumak gerek..." },
    { kitapAdi: "Kürk Mantolu Madonna", alinti: "Aşk, bir insanın tüm varlığını alır ve onu başka bir varlıkla paylaşma arzusuna dönüştürür." },
    { kitapAdi: "İntibah", alinti: "Bir insanın yalnızca kendisini düşündüğü bir dünyada, başkalarını düşünmek büyük bir erdemdir." },
    { kitapAdi: "Efsuncu Baba", alinti: "İnsanlar bazen tüm yanlışları yapmalarına rağmen, doğruyu bulmaya çalışırlar." },
    { kitapAdi: "Vatan Yahut Silistre", alinti: "Bir milletin hürriyeti, ancak o milleti savunanların cesaretiyle mümkündür." },
    { kitapAdi: "Mai ve Siyah", alinti: "Her insan bir dünya kurar, ama bazen dünya onu kurar." },
    { kitapAdi: "Şair Evlenmesi", alinti: "Sanatçı, insanın ruhunu yansıtan bir aynadır." },
    { kitapAdi: "Küçük Paşa", alinti: "Çocukken kurduğumuz hayaller, büyüdüğümüzde hep yanımızda olur." },
    { kitapAdi: "Sergüzeşt", alinti: "Hayat, bir yolculuktur ve her yolculuk, yeni bir keşif demektir." },
    { kitapAdi: "İstanbul Hatırası", alinti: "İstanbul'da her köşe başı, bir hatıradır." },
    { kitapAdi: "Aşk-ı Memnu", alinti: "Aşk, insanın en derin duygularını uyandıran bir yangındır." },
    { kitapAdi: "Genç Kız Kalbi", alinti: "Bir kadının kalbi, zamanla değişen bir deniz gibidir." },
    { kitapAdi: "Beyoğlu Rapsodisi", alinti: "Beyoğlu, geçmişin izlerini taşıyan bir zaman tünelidir." },
    { kitapAdi: "Sait Faik Abasıyanık", alinti: "Hayat, en güzel olduğu zamanlarda bile kayıplar barındırır." },
    { kitapAdi: "Meyhanede Hanımlar", alinti: "Bir şehrin ruhunu, içki içerken anlayabilirsiniz." },
    { kitapAdi: "Reşat Nuri Güntekin", alinti: "Bir insanın ruhunu okuyabilmek, onun yaşadığı acıları hissetmektir." },
    { kitapAdi: "Sabahattin Ali", alinti: "Aşk, insanın ruhunu en derin şekilde saran bir acıdır." },
    { kitapAdi: "Oya Baydar", alinti: "Kadın, her zaman güçlüdür, çünkü duyguları dünyayı şekillendirir." },
    { kitapAdi: "Huzur", alinti: "İnsan, bazen huzuru kaybetmeden önce gerçekten anlamaz." },
    { kitapAdi: "Bir Düğün Gecesi", alinti: "Düğünler, aynı zamanda kayıpların başlangıcıdır." },
    { kitapAdi: "Saatleri Ayarlama Enstitüsü", alinti: "Zaman, insanın en büyük düşmanıdır." },
    { kitapAdi: "Kara Kitap", alinti: "Her insanın iç dünyasında bir kitap yazılır." },
    { kitapAdi: "Aşk ve Gurur", alinti: "Gerçek aşk, sadece bir insanı sevmek değil, onu tüm hatalarıyla kabullenmektir." },
    { kitapAdi: "Çalıkuşu", alinti: "İnsan, bazen en güçlü olduğu zamanlarda bile yalnızdır." },
    { kitapAdi: "İstanbul'un İç Yüzü", alinti: "Her sokak, bir başka hikayeyi fısıldar." },
    { kitapAdi: "Köle", alinti: "Özgürlük, insanın kendi iradesine sahip olduğu andır." },
    { kitapAdi: "Ankara", alinti: "Bir şehir, bir halkın ruhunu yansıtır." },
    { kitapAdi: "Yalnızım Çünkü Sen Varsın", alinti: "Bazen insan, sadece yalnızlığı sevdiklerinden korumak için gereklidir." },
    { kitapAdi: "Kıyı", alinti: "İnsan, bazen denizle konuşarak rahatlar." },
    { kitapAdi: "Halide Edib Adıvar", alinti: "Kadın olmak, bazen dünyaya karşı tek başına durmaktır." },
    { kitapAdi: "Sözde Dostlar", alinti: "Dostluk, bir zaman sonra kendini gösterecek olan gerçek bir bağdır." },
    { kitapAdi: "Kırık Hayatlar", alinti: "Hayat, bazen bir yıkımdan sonra yeniden inşa edilir." },
    { kitapAdi: "Ferit Edgü", alinti: "Hayatta hiçbir şey, sonlu değildir." },
    { kitapAdi: "Ahmet Mithat Efendi", alinti: "Bir milletin yükselmesi, o milleti eğitimle doğru şekilde yönlendirebilmekle mümkündür." },
    { kitapAdi: "Tarık Buğra", alinti: "Bir insan, yaşadığı çağın en iyi yansımasıdır." },
    { kitapAdi: "İnsanlık Hali", alinti: "İnsan, bazen en derin duygularını yalnızca karanlıkta hisseder." },
    { kitapAdi: "Süleyman Nazif", alinti: "Bazen insan, bir kelimeyle hayatını değiştirebilir." },
    { kitapAdi: "Beylik", alinti: "Bir insan, bazen yalnızca kendini bulmak için bir toplumun parçası olmalıdır." },
    { kitapAdi: "Alemdağ'da Var Bir Yılan", alinti: "Hayat, biz ona hangi gözle bakarsak öyle bir şekil alır." },
    { kitapAdi: "Çıplak", alinti: "Gerçek güzellik, insanın içindeki saflıktadır." },
    { kitapAdi: "Kuşlar da Gitti", alinti: "Bazen bir insan, kaybolmuş gibi hissetse de, hala bulunduğu yerdedir." },
    { kitapAdi: "Beni Hiç Göremezsin", alinti: "İnsan, her zaman bilinçli olarak kendini gizlemeyi seçer." },
    { kitapAdi: "Kıskanmak", alinti: "Kıskanmak, insanın en derin zaafıdır." },
    { kitapAdi: "Kendi Gök Kubbemiz", alinti: "Her insan, kendi hayatını kurma hakkına sahiptir." },
    { kitapAdi: "Hayat", alinti: "Hayat, insanın kendisini bulduğu bir yolculuktur." },
    { kitapAdi: "Ağustos", alinti: "Bazen insan, sadece zamanın geçmesini bekler." },
    { kitapAdi: "Hayaline Firar Et", alinti: "Hayal, insanın en büyük özgürlüğüdür." },
    { kitapAdi: "Eylül", alinti: "Bazen insanlar birbirlerini anlamak için çok geç kalırlar." },
    { kitapAdi: "Felsefi Edebiyat", alinti: "Hayat, anlam arayışının en yüksek seviyesidir." },
    { kitapAdi: "Kadınlar", alinti: "Kadın, bazen bir toplumun tüm yükünü taşır." },
    { kitapAdi: "Hayal", alinti: "Hayaller, insanın ruhunun en özgür halidir." },
    { kitapAdi: "Kervansaray", alinti: "Bazen insan, yola çıkarken kendini kaybetmiştir." },
    { kitapAdi: "Türk Edebiyatı", alinti: "Edebiyat, halkın kalbini en iyi anlatan araçtır." },
    { kitapAdi: "Yitik Zaman", alinti: "Zaman kaybolur ama hatıralar hep kalır." },
    { kitapAdi: "Suç ve Ceza", alinti: "Bir insan, düşünmeden yaşadığı sürece, hiçbir zaman huzur bulamaz." },
    { kitapAdi: "Karamazov Kardeşler", alinti: "İnsanın ruhu, derin bir uçurum gibidir." },
    { kitapAdi: "Anna Karenina", alinti: "Aşk, insanı her şeyden önce kendisine yabancı kılar." },
    { kitapAdi: "İvan Ilyiç'in Ölümü", alinti: "Ölüm, hayatın gerçek yüzünü gösterir." },
    { kitapAdi: "Yüzeydeki İnsanlar", alinti: "Hayat, içsel bir boşluktur; bir yerinden başlamalıdır." },
    { kitapAdi: "Eugene Onegin", alinti: "Gerçek aşka ulaşmak için bazen kaybetmek gerekir." },
    { kitapAdi: "Savaş ve Barış", alinti: "Barış, bir halkın en yüksek arzusudur." },
    { kitapAdi: "Beyaz Geceler", alinti: "İnsanlar bazen geceleri, en derin sırlarını paylaşırlar." },
    { kitapAdi: "Karamazov Kardeşler", alinti: "İnsanın en büyük gücü, bir başkasına karşı duyduğu sevgisidir." },
    { kitapAdi: "Çehov'un Öyküleri", alinti: "Bir insanın hayatını değiştiren tek şey, başka bir insanın gözleridir." },
    { kitapAdi: "Küçük Bir Yaşam", alinti: "Birçok insanın gücü, diğerlerinin yanında yok olur." },
    { kitapAdi: "Puşkin - Yevgeniy Onegin", alinti: "Bir insan, hayatını bir kelimeyle değiştirebilir." },
    { kitapAdi: "Anna Karenina", alinti: "Gerçek aşk, insanın en derin duygularını ortaya çıkarır." },
    { kitapAdi: "Dr. Jekyll ve Bay Hyde", alinti: "İçindeki karanlık, insanın tüm dünyasını değiştirir." },
    { kitapAdi: "Kış Bahçesi", alinti: "Aşk, bazen bir insanın en büyük cezasıdır." },
    { kitapAdi: "Yeraltı Edebiyatı", alinti: "Bir insanın en büyük yalanı, kendini tanımamaktır." },
    { kitapAdi: "Beyaz Geceler", alinti: "Gecenin en karanlık anında bile bir umut ışığı vardır." },
    { kitapAdi: "Venedik Taciri", alinti: "Aşk, bazen insanı en beklenmedik anlarda bulur." },
    { kitapAdi: "Kayıp Zamanın İzinde", alinti: "Geçmişin hatıraları, insanın kalbinde sonsuza dek yaşar." },
    { kitapAdi: "Suç ve Ceza", alinti: "Bir insanın ruhunu, yalnızca bir başkası anlayabilir." },
    { kitapAdi: "Puşkin'in Şiirleri", alinti: "Şiir, bir insanın ruhunun derinliklerinden gelir." },
    { kitapAdi: "Gömülü Çiçek", alinti: "Bazen en derin acılar, en güzel duyguların arkasında gizlidir." },
    { kitapAdi: "Açlık", alinti: "İçindeki boşluk, seni her zaman bir arayışa sürükler." },
    { kitapAdi: "Venedik Taciri", alinti: "Herkesin içinde bir düşman vardır." },
    { kitapAdi: "Küçük Paşa", alinti: "Bazen insanlar, en büyük hayal kırıklıklarını en derin duygularıyla yaşarlar." },
    { kitapAdi: "Efsuncu Baba", alinti: "İnsanların yaşadığı dünya, içsel bir yansımanın dışa vurumudur." },
    { kitapAdi: "Savaş ve Barış", alinti: "Bir halkın özgürlüğü, insanın en büyük hakkıdır." },
    { kitapAdi: "Gözleri Görmeyen", alinti: "Bazen, insanın ruhu, gözlerindeki karanlıkla eşleşir." },
    { kitapAdi: "Demir Yolculukları", alinti: "Hayat, bir yolculuktur ve her yolculuk, yeni bir başlangıçtır." },
    { kitapAdi: "Yaralı Ruh", alinti: "İçsel acılar, bazen bir insanı en yüksek zirvelere taşır." },
    { kitapAdi: "Beyaz Geceler", alinti: "Bazen en karanlık zamanlarda, ışık da vardır." },
    { kitapAdi: "Yeraltı Edebiyatı", alinti: "Bir insan, ruhunun derinliklerine inmeden kendini asla bilemez." },
    { kitapAdi: "Çehov'un Öyküleri", alinti: "Bir hikaye, bazen bir insanın tüm hayatını anlatabilir." },
    { kitapAdi: "Vatan Yahut Silistre", alinti: "Bir milletin yükselmesi, ancak birlik ve beraberlikle mümkündür." },
    { kitapAdi: "Puşkin", alinti: "Bir şairin kelimeleri, bazen bir toplumun geleceğini şekillendirir." },
    { kitapAdi: "Puşkin'in Şiirleri", alinti: "Bir insanın kalbi, bazen hiç olmadık bir anda açılır." },
    { kitapAdi: "Tolstoy'un Hikayeleri", alinti: "Bir insanın gerçekliği, bazen hayalinin de ötesine geçer." },
    { kitapAdi: "Savaş ve Barış", alinti: "Savaşlar, insanları öldürür; barışlar ise onları yaşatır." },
    { kitapAdi: "Karamazov Kardeşler", alinti: "İnsan, yalnızca doğruyu bilmekle değil, aynı zamanda onu yapmakla yükümlüdür." },
    { kitapAdi: "İntihar", alinti: "Bazen bir insan, ölümü düşünmeden önce içindeki boşluğu doldurmalıdır." },
    { kitapAdi: "Beyaz Geceler", alinti: "Bir insan, bazen yalnız kalır ama yine de bir şeyler bulur." },
    { kitapAdi: "Hayat ve Edebiyat", alinti: "Hayat, edebiyatın tam ortasında şekillenir." },
    { kitapAdi: "Küçük Bir Yaşam", alinti: "Bir insanın içindeki boşluk, büyüdükçe daha fazla yer kaplar." },
    { kitapAdi: "Demir Yolculukları", alinti: "Bir yolculuk, insanın kimliğini şekillendirir." },
    { kitapAdi: "Savaş ve Barış", alinti: "Barış, insanın aradığı en büyük huzurdur." },
    { kitapAdi: "Venedik Taciri", alinti: "İçindeki aşk, seni her zaman yanlış yollara sürükler." },
    { kitapAdi: "Karamazov Kardeşler", alinti: "İnsan, yalnızca kendi içindeki karanlığı keşfettiğinde özgürleşir." },
    { kitapAdi: "Savaş ve Barış", alinti: "Bir halk, sadece birlikte hareket ettiğinde gerçek gücünü keşfeder." },
    { kitapAdi: "Çehov'un Hikayeleri", alinti: "Hayat, her anıyla bir öyküdür." },
    { kitapAdi: "Karamazov Kardeşler", alinti: "İnsanlar, en büyük acılarını genellikle yalnızken yaşarlar." },
    { kitapAdi: "Beyaz Geceler", alinti: "Bir insan, yalnız kalmaktan korkar ama bazen yalnızlık en iyi arkadaştır." },
    { kitapAdi: "Faust", alinti: "İnsan, her zaman daha fazlasını ister." },
    { kitapAdi: "Genç Werther'in Acıları", alinti: "Aşk, insanın kalbini en derinden sarar." },
    { kitapAdi: "Savaş ve Barış", alinti: "Bir halk, özgürlüğünü kaybettiğinde, tüm dünyası değişir." },
    { kitapAdi: "Yüzyıllık Yalnızlık", alinti: "Hayat, bazen en beklenmedik anlarda değişir." },
    { kitapAdi: "Alman Ruhunun Çöküşü", alinti: "Bir toplum, kendi kimliğini kaybettiğinde, geleceği kaybetmiş olur." },
    { kitapAdi: "Siddhartha", alinti: "İçsel huzur, insanın en büyük arzusudur." },
    { kitapAdi: "Don Kişot", alinti: "Bir insan, hayalini kaybetmeden önce yaşamayı seçmelidir." },
    { kitapAdi: "Frankenstein", alinti: "İnsan, yarattığından daha fazla güç arar." },
    { kitapAdi: "Meydan Larousse", alinti: "Bir insan, kendi yolunu bulmak için zaman içinde kaybolur." },
    { kitapAdi: "İçimdeki Çığlık", alinti: "İçsel acılar bazen insanın en derin hislerini ortaya çıkarır." },
    { kitapAdi: "Hayvanlardan Tanrılara", alinti: "Toplum, insanın en büyük öğretmenidir." },
    { kitapAdi: "Tüm Eserler", alinti: "Gerçek aşk, zamanın ötesine geçer." },
    { kitapAdi: "Uğultulu Tepeler", alinti: "Aşk, bazen insanın en büyük cezasıdır." },
    { kitapAdi: "Germinal", alinti: "Toplumsal adaletsizlik, bazen bir halkın isyanına yol açar." },
    { kitapAdi: "Berlin Alexanderplatz", alinti: "Bir insan, geçmişin gölgelerinden kaçarken geleceği inşa eder." },
    { kitapAdi: "Efsus'un Kitapları", alinti: "Bir toplum, ne kadar güçlü olursa olsun, kimliğini kaybedebilir." },
    { kitapAdi: "Der Steppenwolf", alinti: "İnsanın içindeki boşluk, hiçbir zaman dolmaz." },
    { kitapAdi: "Metamorfoz", alinti: "Bir insan, kendini kaybetmeden önce içindeki değişimi kabullenmelidir." },
    { kitapAdi: "Dönüşüm", alinti: "Bir insan, gerçeği görmeden önce ruhunu keşfetmelidir." },
    { kitapAdi: "İyi Bir İnsan", alinti: "İnsanlık, ancak doğruluğun peşinden giderse anlam bulur." },
    { kitapAdi: "Gülün Adı", alinti: "Bir insan, bilgiyle savaşırken kendini de kaybeder." },
    { kitapAdi: "Günümüzün Alman Edebiyatı", alinti: "Bir toplumun gücü, kelimelerle şekillenir." },
    { kitapAdi: "Edebiyatın Çıkışı", alinti: "Bir insanın kalbi, kitaplarla konuşur." },
    { kitapAdi: "İyi Bir Çalışan", alinti: "Gerçek başarı, içsel huzurda bulunur." },
    { kitapAdi: "Kış Bahçesi", alinti: "Bir insan, bazen yalnızlıktan en büyük gücü bulur." },
    { kitapAdi: "Bıçak Sırtı", alinti: "Hayat, sadece anlamlı kılındığında değerlidir." },
    { kitapAdi: "Derin Kökler", alinti: "İnsan, geçmişin köklerinden beslenerek geleceği inşa eder." },
    { kitapAdi: "Korku", alinti: "Bazen en derin korkular, insanın kendisinden gelir." },
    { kitapAdi: "Görünmeyen Adam", alinti: "Bir insan, göründüğünden daha fazlasıdır." },
    { kitapAdi: "Alman Ruhunun Kökleri", alinti: "Bir toplum, kendi kimliğini bulmak için tarihine bakmalıdır." },
    { kitapAdi: "Yalnızlık", alinti: "Bazen en derin huzur, yalnızlıkta bulunur." },
    { kitapAdi: "Alman Edebiyatı Üzerine", alinti: "Edebiyat, bir toplumun ruhunu şekillendirir." },
    { kitapAdi: "Hayatın En Güzel Anları", alinti: "Bir insan, bazen en büyük öğrenişini acılardan alır." },
    { kitapAdi: "Son Akşam Yemeği", alinti: "Bir toplumun yemek kültürü, onların hayatını belirler." },
    { kitapAdi: "Yıkılan Dünyalar", alinti: "Bir halk, kendi içindeki çatlaklardan yıkılır." },
    { kitapAdi: "Kısa Çıkış", alinti: "Hayat, bazen insanın en zor yolculuğudur." },
    { kitapAdi: "Gizli Bahçe", alinti: "Bir insan, içsel bahçesini ancak kabul ettiğinde bulur." },
    { kitapAdi: "Kırmızı Çizgi", alinti: "Bir toplum, bazen kendi çizgilerini aşmamalıdır." },
    { kitapAdi: "Bütün Şiirleri", alinti: "Şiir, bir insanın ruhunun derinliklerinden gelir." },
    { kitapAdi: "Gölgedeki Kıyı", alinti: "İnsan, yalnız kalmadığında en büyük keşfi yapar." },
    { kitapAdi: "Bütün İnsanlar", alinti: "Bir toplum, kendi insanını anlamadan ilerleyemez." },
    { kitapAdi: "Zamanın Çehresi", alinti: "Bir insan, geçmişin zamanında kaybolmadan geleceği inşa edebilir." },
    { kitapAdi: "Ölülerin Efsaneleri", alinti: "Bir halk, kendi ölülerinin izinde yürüyerek geleceğini bulur." },
    { kitapAdi: "Özgürlük", alinti: "Gerçek özgürlük, insanın içindeki kısıtlamaları aşmasıyla gelir." },
    { kitapAdi: "Büyüme", alinti: "Bir insanın en büyük büyümesi, kendisini kabul etmesidir." },
    { kitapAdi: "Geceye Dönüş", alinti: "Bir insan, geceyi aydınlatmadan önce içindeki karanlıkla yüzleşmelidir." },
    { kitapAdi: "Karanlıkta", alinti: "Karanlık, bir insanın en derin içsel yolculuğudur." },
    { kitapAdi: "Aşk ve Büyü", alinti: "Aşk, bir büyüdür, bazen en beklenmedik anlarda ortaya çıkar." },
    { kitapAdi: "Şiir ve Toplum", alinti: "Şiir, toplumu yönlendiren en güçlü silah olabilir." },
    { kitapAdi: "Alman Edebiyatı", alinti: "Edebiyat, bir halkın kimliğini biçimlendirir." },
    { kitapAdi: "Kayıp Zamanın İzinde", alinti: "Bir zamanın kaybı, insanın ruhunda sonsuz izler bırakır." },
    { kitapAdi: "Derin Kökler", alinti: "İnsanlar geçmişin köklerine bağlı kalmalıdır." },
    { kitapAdi: "Hayal Gücü", alinti: "Hayal gücü, bir insanın en güçlü aracıdır." },
    { kitapAdi: "Sefiller", alinti: "İnsan, kalbinin derinliklerinden gelir." },
    { kitapAdi: "Madame Bovary", alinti: "Gerçek mutluluk, hayallerin peşinden gitmekle bulunmaz." },
    { kitapAdi: "Küçük Prens", alinti: "En önemli şeyler gözle görülmez." },
    { kitapAdi: "Notre-Dame’ın Kamburu", alinti: "Kader, bazen insanı haksız yere cezalandırır." },
    { kitapAdi: "Veba", alinti: "Ölüm, insanın her zaman yüzleşmesi gereken bir gerçektir." },
    { kitapAdi: "Germinal", alinti: "Bir halk, kendi gücünü kaybettiğinde, isyan eder." },
    { kitapAdi: "Kötülük Çiçekleri", alinti: "Aşk, bazen insanın en derin yaralarını açar." },
    { kitapAdi: "Yabancı", alinti: "İnsan, bazen dünyaya yabancı hisseder." },
    { kitapAdi: "Swann’ın Tarafı", alinti: "Zaman, insanın en değerli kaybıdır." },
    { kitapAdi: "Monte Kristo Kontu", alinti: "İntikam, insanın içindeki karanlık duyguları besler." },
    { kitapAdi: "Kırmızı ve Siyah", alinti: "Bazen insan, kendisiyle savaşı kazanmak zorundadır." },
    { kitapAdi: "Candide", alinti: "İnsanlar, bazen en büyük dersleri acılardan alır." },
    { kitapAdi: "Yabancı", alinti: "İnsan, yaşamın anlamını kendi içinde bulur." },
    { kitapAdi: "Üç Silahşörler", alinti: "Birlikte olmak, insanın gücünü artırır." },
    { kitapAdi: "Kamelyalı Kadın", alinti: "Aşk, bir insanı hem özgürleştirir hem de zincirler." },
    { kitapAdi: "Operadaki Hayalet", alinti: "Aşk, bazen insanın en derin korkularını ortaya çıkarır." },
    { kitapAdi: "Yalnızlık", alinti: "Bazen, yalnızlık insanın en büyük arkadaşıdır." },
    { kitapAdi: "Kayıp Zamanın İzinde", alinti: "Zaman, insanın her şeyinden daha değerli olabilir." },
    { kitapAdi: "Huzur", alinti: "İnsan, huzuru dış dünyada değil, içsel bir dengeyle bulur." },
    { kitapAdi: "Savaş ve Barış", alinti: "Savaşın acımasızlığı, barışın değerini daha da artırır." },
    { kitapAdi: "Aşkın Çeşitleri", alinti: "Aşkın yüzlerce çeşidi vardır, her biri farklı bir deneyim sunar." },
    { kitapAdi: "Gerçek Aşk", alinti: "Gerçek aşk, insanın özüne dokunan bir duygudur." },
    { kitapAdi: "Bir Aşkın Tarihi", alinti: "Aşkın tarihi, insanlık tarihinin en eski hikayelerindendir." },
    { kitapAdi: "İntikam", alinti: "İntikam bazen en iyi çözüm gibi görünse de insanı yok eder." },
    { kitapAdi: "Aşkın Anlamı", alinti: "Aşkın anlamı, kişisel bir yolculuk ve keşif sürecidir." },
    { kitapAdi: "İnsan ve İnsan", alinti: "Her insanın içinde bir dünya vardır." },
    { kitapAdi: "Gözlerindeki Aşk", alinti: "Aşk, bir bakışta başlar ve sonsuza kadar sürer." },
    { kitapAdi: "İçimizdeki Şeytan", alinti: "İçimizdeki şeytan, bazen en karanlık arzularımızı yansıtır." },
    { kitapAdi: "Hayalet", alinti: "Geçmişin hayaletleri, bazen bugünü şekillendirir." },
    { kitapAdi: "Kıskançlık", alinti: "Kıskançlık, insanın ruhunu harap eden bir duygudur." },
    { kitapAdi: "Geceyi Sevmek", alinti: "Gece, insanın iç dünyasını daha derinlemesine keşfetmesine olanak tanır." },
    { kitapAdi: "Zamanın Pençesi", alinti: "Zaman, kaybolduğunda geri getirilemez." },
    { kitapAdi: "İkili Hayatlar", alinti: "Herkesin birden fazla yüzü vardır." },
    { kitapAdi: "Aşkı Düşlemek", alinti: "Aşk, bazen hayal ve gerçek arasında bir çizgidir." },
    { kitapAdi: "Kölelik", alinti: "Kölelik, insanın en temel haklarını çalan bir sömürüdür." },
    { kitapAdi: "Sadakat", alinti: "Sadakat, her ilişkide güvenin temelidir." },
    { kitapAdi: "Yalnızlar", alinti: "Yalnızlık, bazen bir insanın kendini en iyi şekilde keşfetmesidir." },
    { kitapAdi: "Aşk ve Ölüm", alinti: "Aşk ve ölüm, insan yaşamının kaçınılmaz parçalarıdır." },
    { kitapAdi: "İkilik", alinti: "İkilik, insanın en derin çatışmalarından birisidir." },
    { kitapAdi: "Çıkmaz Sokak", alinti: "Bazı yollar, insanı bir çıkmaza sokar." },
    { kitapAdi: "Hikayenin Sonu", alinti: "Her hikayenin bir sonu vardır, ama bazen sonu bilmeden yaşarsınız." },
    { kitapAdi: "Sonsuz Aşk", alinti: "Sonsuz aşk, insanın varoluşunun en yüksek halidir." },
    { kitapAdi: "Kayıp Zaman", alinti: "Zaman kaybolduğunda, insanın kaybolanları geri getirmesi imkansızdır." },
    { kitapAdi: "Yanlış Anlaşılmalar", alinti: "Yanlış anlaşılmalar, insan ilişkilerinin en büyük engelleridir." },
    { kitapAdi: "Çaresizlik", alinti: "Çaresizlik, insanın en büyük düşmanıdır." },
    { kitapAdi: "Mutluluk", alinti: "Mutluluk, insanın içsel huzurundan gelir." },
    { kitapAdi: "Bilinçaltı", alinti: "Bilinçaltı, insanın tüm duygularını şekillendirir." },
    { kitapAdi: "Hikayenin Başlangıcı", alinti: "Her hikayenin bir başlangıcı vardır ve çoğu zaman bu başlangıçlar önemlidir." },
    { kitapAdi: "Ruhsal Derinlik", alinti: "Ruhsal derinlik, insanın hayatını şekillendiren anahtardır." },
    { kitapAdi: "Bütün Zamanlar", alinti: "Bütün zamanlar, bir arada yaşanan bir anın parçalarıdır." },
    { kitapAdi: "Gizli Duygular", alinti: "Gizli duygular, bazen insanın kalbinde barındığı hazineye dönüşür." },
    { kitapAdi: "Kaybolan Zaman", alinti: "Zaman kaybolduğunda, onu yeniden bulmak çok zordur." },
    { kitapAdi: "Gurur ve Önyargı", alinti: "Herkesin kabul ettiği bir gerçektir ki, iyi bir servete sahip bekar bir adam, mutlaka bir karıya ihtiyaç duyar." },
    { kitapAdi: "Uğultulu Tepeler", alinti: "Ruhlarımız neyle yapılmışsa, onun ve benimkiler aynıdır." },
    { kitapAdi: "Büyük Umutlar", alinti: "Onu, akıl, vaat, barış, umut, mutluluk ve tüm cesaret kırıcı şeylere karşı sevmiştim." },
    { kitapAdi: "Jane Eyre", alinti: "Bir insanın gerçeği, başka bir insanın yanlışına, diğerinin ise saadetinin kaybına dönüşebilir." },
    { kitapAdi: "1984", alinti: "Savaş barıştır. Özgürlük köleliktir. Cehalet güçtür." },
    { kitapAdi: "Yüzyıllık Yalnızlık", alinti: "Bazen insanlar birbirine o kadar alışır ki, sadece birlikte olmak bile bir anlam taşır." },
    { kitapAdi: "Suç ve Ceza", alinti: "İnsanın vicdanı, sadece iyi bir insan olma isteği değil, aynı zamanda kötü bir insan olmamak için de yaşar." },
    { kitapAdi: "Bir Delinin Hatıra Defteri", alinti: "Benim içimde bir dünya var, ancak her şey, içinde yaşadığımız o dünyaya bağlı." },
    { kitapAdi: "Çavdar Tarlasında Çocuklar", alinti: "Gerçek bir insan olmanın nasıl bir şey olduğunu hiç bilemedim." },
    { kitapAdi: "Küçük Prens", alinti: "En iyi şeyler gözle görülmeyenlerdir." },
    { kitapAdi: "Don Kişot", alinti: "İnsanlık, yüce bir amaca ulaşma yolunda pek çok yanlışlık yapar." },
    { kitapAdi: "Martin Eden", alinti: "Hayatta en değerli şey, doğru olmak, ne olursa olsun." },
    { kitapAdi: "Beyaz Diş", alinti: "Zayıf ve güçsüz bir varlık, yaşamak için her şeyle mücadele eder." },
    { kitapAdi: "Vahşetin Çağrısı", alinti: "Doğada bir varlık olarak hayatta kalabilmek için, insan sadece içgüdülerini dinler." },
    { kitapAdi: "Savaş ve Barış", alinti: "Bütün meseleler birer sınavdır, hayatın gerçekliği bir karar anıdır." },
    { kitapAdi: "Frankenstein", alinti: "Korku, insanın içindeki en korkunç şeyleri ortaya çıkaran bir güçtür." },
    { kitapAdi: "Tess", alinti: "Hayat, insana ne zaman ne vereceğini asla bilemezsiniz." },
    { kitapAdi: "Aşk ve Gurur", alinti: "Bir insan ne kadar güçlü olursa olsun, kalp her zaman kırılgan bir yer olabilir." },
    { kitapAdi: "Oblomov", alinti: "Bazen bir insana, ona sevgiyle bakmak ne kadar zordur." },
    { kitapAdi: "Madam Bovary", alinti: "İnsanların hayatı ve yüce duyguları, onlara bir kez verilen kararlara bağlıdır." },
    { kitapAdi: "Uğultulu Tepeler", alinti: "İnsanın içindeki karanlık, dışarıdaki dünyadan daha güçlüdür." },
    { kitapAdi: "Karamazov Kardeşler", alinti: "İnsan her zaman doğruyu bulsa bile, o doğrular insanın arzusunun hüsranına dönüşebilir." },
    { kitapAdi: "Dorian Gray'in Portresi", alinti: "Zaman ve yaşlanma, bir insanın içindeki en büyük korkudur." },
    { kitapAdi: "Sherlock Holmes", alinti: "Her şeyin çözümü, doğru soruyu sormakla başlar." },
    { kitapAdi: "Gulliver'in Gezileri", alinti: "Gerçekten görmek istediğimiz şeyleri görmek, gözlerimizin ötesinde bir bakış açısı gerektirir." },
    { kitapAdi: "Rüzgâr Gibi Geçti", alinti: "Her şey değişir ama hayatın akışını hiç kimse durduramaz." },
    { kitapAdi: "İki Şehrin Hikayesi", alinti: "Bu en iyi zaman ve en kötü zaman, bilgiyle yapılan büyük savaşın sonucu." },
    { kitapAdi: "Silas Marner", alinti: "Bir insanın geçmişi, şimdiki halini ve geleceğini şekillendirir." },
    { kitapAdi: "Küçük Kadınlar", alinti: "Hayat, mücadelelerle dolu olsa da, insanın hayatta kalmaya ve sevdiklerine bağlı kalmaya devam etmesi gerekir." },
    { kitapAdi: "Moby Dick", alinti: "İntikam, bir insanın yaşamındaki en güçlü güdülerden biridir." },
    { kitapAdi: "Tom Sawyer'ın Maceraları", alinti: "Bir çocuğun yüreğinde her zaman bir şeyler yapmak isteği vardır." },
    { kitapAdi: "Yaşlı Adam ve Deniz", alinti: "Bir insanın azmi, yaşamının anlamını bulduğu yerdir." },
    { kitapAdi: "Bülbülü Öldürmek", alinti: "Adalet, bazen gerçeklikten çok daha farklı bir şey olabilir." },
    { kitapAdi: "Bulantı", alinti: "Hayatın anlamını sorgulamak, insanın kendini bulma yolundaki ilk adımdır." },
    { kitapAdi: "Fahrenheit 451", alinti: "Kitapları yakmak, insanın özgürlüğüne saldırmak demektir." },
    { kitapAdi: "Cesur Yeni Dünya", alinti: "Gerçek özgürlük, her insanın kendisi için bir anlam yaratmasıyla mümkündür." },
    { kitapAdi: "Büyük Umutlar", alinti: "Bazen hayatta elde edebileceğimiz en büyük şey, kendi kimliğimizi keşfetmektir." },
    { kitapAdi: "Cesur Yeni Dünya", alinti: "Hayat, bazı zamanlar amacını kaybeder, ama hala bir amaç varmış gibi yaşamalıyız." },
    { kitapAdi: "Geceyi Seyret", alinti: "Hayatta ne olursa olsun, bir umut her zaman vardır." },
    { kitapAdi: "Isabel", alinti: "Sevgi, en zor zamanlarda bile umut ışığı olabilir." },
    { kitapAdi: "Sherlock Holmes", alinti: "Hayatın çözümüne ulaşmanın anahtarı, doğru gözlem yapmaktan geçer." },
    { kitapAdi: "Küçük Prens", alinti: "İnsanların sevdiklerini kaybetmeden önce, ne kadar değerli olduklarını anlamaları gerekir." },
    { kitapAdi: "Güzel ve Çirkin", alinti: "İç güzellik, dış güzellikten çok daha uzun ömürlüdür." },
    { kitapAdi: "Aşk ve Gurur", alinti: "Kalbin en derinliklerinde sevginin gücü, her şeyin önündedir." },
    { kitapAdi: "Görünmeyen Adam", alinti: "Bazen insanlar, kim olduklarını bile bulamayacak kadar kaybolurlar." },
    { kitapAdi: "Gerçekten Ne Oluyor?", alinti: "Bazen bir insanın hayatı, kendi algılarının ötesinde bir yerlerde olabilir." },
    { kitapAdi: "Dönüşüm", alinti: "Değişim, insanın hayatındaki en belirgin ve korkutucu şey olabilir." },
    { kitapAdi: "Anna Karenina", alinti: "Aşk, her şeyin ötesindedir ve insanın ruhunda iz bırakır." },
    { kitapAdi: "Kayıp Zamanın Peşinde", alinti: "Bir anı, zamanın ne kadar değerli olduğunu hatırlatır." },
    { kitapAdi: "Kırmızı Pazartesi", alinti: "Gerçek suçluyu anlamak, geriye kalan izleri çözmekle mümkündür." }
    // Daha fazla alıntı ekleyebilirsiniz
  ]);

  const uniqueAlintilar = Array.from(
    new Set(alintilar.map(item => item.alinti))
  ).map(alinti => {
    return alintilar.find(item => item.alinti === alinti);
  });

  const [filteredAlintilar, setFilteredAlintilar] = useState(uniqueAlintilar);
  
  const handleSearch = () => {
    const filtered = uniqueAlintilar.filter(item =>
      item.alinti.toLowerCase().includes(query.toLowerCase()) ||
      item.kitapAdi.toLowerCase().includes(query.toLowerCase())
    );


    
    setFilteredAlintilar(filtered);
  };

  const handleKeyDown = (event) => {

    if (event.key === "enter") {
        event.preventDefault();  // Enter tuşu ile sayfa yenilemesini engelle
        handleSearch(); // Enter tuşuna basıldığında arama yap
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

      {/* Alıntıların Listesi */}
      <Row className="mt-4 w-100 justify-content-center">
        {filteredAlintilar.length > 0 ? (
          filteredAlintilar.map((item, index) => (
          <Col key={index} xs="12" sm="12" md="10" lg="8" className="mb-4">
            <CardGroup className="centered-container">
                      <Card key={index} className='summary-card me-1 ms-1' style={{ border: '2px solid white'}}>
                
                      <CardText className="text-white" style={{ fontStyle: 'italic' }}>
                          "{item.alinti}""
                      </CardText>

                      <CardFooter className="text-white font-weight-bold text-right mt-0" style={{textAlign:"right", fontStyle: 'italic'}}>
                        <strong>{item.kitapAdi}</strong>
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

import React, { useState } from "react";
import { Input, Button, Form, FormGroup, Row, Col, Card, CardGroup, CardFooter, CardBody, CardText } from "reactstrap";

export default function QutoesApp() {
  const [query, setQuery] = useState("");
  const [quotes, setQuotes] = useState([
    { name: "Sineklerin Tanrısı", quote: "İnsanlar ne kadar korkunçlar." },
    { name: "1984", quote: "Büyük Birader sizi izliyor." },
    { name: "Küçük Prens", quote: "En önemli şey gözle görünmez." },
    { name: "Savaş ve Barış", quote: "Her savaşın sonunda bir barış doğar." },
    { name: "Anna Karenina", quote: "Bütün mutluluklar birbirine benzer, her mutsuz aile ise mutsuzdur kendi yolunda." },
    { name: "1984", quote: "Savaş barıştır. Özgürlük köleliktir. Cehalet güçtür." },
    { name: "Moby Dick", quote: "Ve bu denizin derinliklerinde, belki de dünyanın en büyük ve en korkunç canavarı, Moby Dick adlı beyaz balina, bir adamı öldürmeye karar verdi." },
    { name: "Yüzyıllık Yalnızlık", quote: "Bir insan bir kez yalnızlığa mahkûm oldu mu, o yalnızlık bir ömür boyu devam eder." },
    { name: "Büyük Umutlar", quote: "Herkesin hayalleri vardır, fakat hayallerin gerçekleşip gerçekleşmeyeceğini hiç kimse bilemez." },
    { name: "Gülün Adı", quote: "İnsanlar, içinde yaşadıkları dünyayı anlamaktan çok, dünyayı değiştirmeyi düşünürler." },
    { name: "Savaş ve Barış", quote: "Hayat kısa, sanat uzun, zaman ise sonsuz." },
    { name: "Don Kişot", quote: "Dünyada doğru ile yanlış arasında birçok gri alan vardır." },
    { name: "Uğultulu Tepeler", quote: "Aşk, sahip olmayı değil, özgür bırakmayı öğrenmektir." },
    { name: "Frankenstein", quote: "Bütün insanlık bana karşı döndü. Bir yaratık olarak, benden kimseye zarar gelmeyeceğini bilseniz de, bana zarar vermeye devam ettiniz." },
    { name: "Suç ve Ceza", quote: "Bir insanın başkalarına olan sorumluluğu, onların ihtiyaçlarını görmezden gelmek değildir." },
    { name: "Karamazov Kardeşler", quote: "İnsanlık, sonsuz bir barış içinde yaşamak için var olmalıdır, ama yine de insanlar birbirlerine acı çektiriyor." },
    { name: "Cesur Yeni Dünya", quote: "Herkesin her şeyden eğlenmesini sağlamak, dünyayı istenilen şekilde düzenlemek gibi bir çabadır." },
    { name: "Görünmez Adam", quote: "Beni yalnızca senin gibi biri anlayabilir." },
    { name: "Aşk ve Gurur", quote: "Aşk, öyle anlarda gelir ki, kişinin kendini adeta başka bir dünyada hisseder." },
    { name: "Bülbülü Öldürmek", quote: "Herkesin eşit olduğu bir toplumda, bazıları daha eşit olmaktan gurur duyar." },
    { name: "Sineklerin Tanrısı", quote: "Herkesin içindeki karanlık, sonunda hep bir şekilde ortaya çıkar." },
    { name: "Küçük Prens", quote: "Bir şeyin değeri, onu kaybettiğinizde anlaşılır." },
    { name: "Pal Sokağı Çocukları", quote: "Bütün dünya bir sahne, ama biz hep figüranız." },
    { name: "Silas Marner", quote: "Bazen en büyük umutlar, en karanlık zamanlardan çıkar." },
    { name: "Tess", quote: "İnsanlar sadece kendi doğrularını bilirler, başkalarının doğruları onların için bir hiçtir." },
    { name: "Yaşlı Adam ve Deniz", quote: "Bir insan sadece gerçekten kaybettiğinde, gerçek gücünü gösterir." },
    { name: "Dorian Gray'in Portresi", quote: "İnsanın dünyada geçirdiği süreye ruhani bir boyut kazandırmaya çalışması son derece kıymetli bir şeydir. Eğer bu kız yaşamını ruhsuz geçirmişlere ruh kazandırabiliyorsa, sefil ve çirkin yaşamlar sürenlere güzellik duygusu aşılayabiliyorsa, onları bencilliklerinden arındırıp başkaları için akıtılacak gözyaşları ödünç verebiliyorsa, hem senin hem de bütün dünyanın hayranlığını sonuna kadar hak ediyor demektir."},
    { name: "Don Kişot", quote: "Kör köre kılavuzluk ederse, ikisi de çukura düşer" },
    { name: "Zamanı Durdurmanın Yolları", quote: "Bu işi seviyorum.Şu an hayatta öğretmenlik yapmaktan daha iyi bir amaç göremiyorum. Öğretmenlik yapmak zamana bekçilik ettiğiniz, şekillendireceğiniz zihinler yoluyla gelecekteki mutluluğu garanti altına aldığınız hissini veriyor." },
    { name: "Genç Bir Doktorun Anıları", quote: "Okumak, okumak ve daha çok okumak gerek..." },
    { name: "Kürk Mantolu Madonna", quote: "Aşk, bir insanın tüm varlığını alır ve onu başka bir varlıkla paylaşma arzusuna dönüştürür." },
    { name: "İntibah", quote: "Bir insanın yalnızca kendisini düşündüğü bir dünyada, başkalarını düşünmek büyük bir erdemdir." },
    { name: "Efsuncu Baba", quote: "İnsanlar bazen tüm yanlışları yapmalarına rağmen, doğruyu bulmaya çalışırlar." },
    { name: "Vatan Yahut Silistre", quote: "Bir milletin hürriyeti, ancak o milleti savunanların cesaretiyle mümkündür." },
    { name: "Mai ve Siyah", quote: "Her insan bir dünya kurar, ama bazen dünya onu kurar." },
    { name: "Şair Evlenmesi", quote: "Sanatçı, insanın ruhunu yansıtan bir aynadır." },
    { name: "Küçük Paşa", quote: "Çocukken kurduğumuz hayaller, büyüdüğümüzde hep yanımızda olur." },
    { name: "Sergüzeşt", quote: "Hayat, bir yolculuktur ve her yolculuk, yeni bir keşif demektir." },
    { name: "İstanbul Hatırası", quote: "İstanbul'da her köşe başı, bir hatıradır." },
    { name: "Aşk-ı Memnu", quote: "Aşk, insanın en derin duygularını uyandıran bir yangındır." },
    { name: "Genç Kız Kalbi", quote: "Bir kadının kalbi, zamanla değişen bir deniz gibidir." },
    { name: "Beyoğlu Rapsodisi", quote: "Beyoğlu, geçmişin izlerini taşıyan bir zaman tünelidir." },
    { name: "Sait Faik Abasıyanık", quote: "Hayat, en güzel olduğu zamanlarda bile kayıplar barındırır." },
    { name: "Meyhanede Hanımlar", quote: "Bir şehrin ruhunu, içki içerken anlayabilirsiniz." },
    { name: "Reşat Nuri Güntekin", quote: "Bir insanın ruhunu okuyabilmek, onun yaşadığı acıları hissetmektir." },
    { name: "Sabahattin Ali", quote: "Aşk, insanın ruhunu en derin şekilde saran bir acıdır." },
    { name: "Oya Baydar", quote: "Kadın, her zaman güçlüdür, çünkü duyguları dünyayı şekillendirir." },
    { name: "Huzur", quote: "İnsan, bazen huzuru kaybetmeden önce gerçekten anlamaz." },
    { name: "Bir Düğün Gecesi", quote: "Düğünler, aynı zamanda kayıpların başlangıcıdır." },
    { name: "Saatleri Ayarlama Enstitüsü", quote: "Zaman, insanın en büyük düşmanıdır." },
    { name: "Kara Kitap", quote: "Her insanın iç dünyasında bir kitap yazılır." },
    { name: "Aşk ve Gurur", quote: "Gerçek aşk, sadece bir insanı sevmek değil, onu tüm hatalarıyla kabullenmektir." },
    { name: "Çalıkuşu", quote: "İnsan, bazen en güçlü olduğu zamanlarda bile yalnızdır." },
    { name: "İstanbul'un İç Yüzü", quote: "Her sokak, bir başka hikayeyi fısıldar." },
    { name: "Köle", quote: "Özgürlük, insanın kendi iradesine sahip olduğu andır." },
    { name: "Ankara", quote: "Bir şehir, bir halkın ruhunu yansıtır." },
    { name: "Yalnızım Çünkü Sen Varsın", quote: "Bazen insan, sadece yalnızlığı sevdiklerinden korumak için gereklidir." },
    { name: "Kıyı", quote: "İnsan, bazen denizle konuşarak rahatlar." },
    { name: "Halide Edib Adıvar", quote: "Kadın olmak, bazen dünyaya karşı tek başına durmaktır." },
    { name: "Sözde Dostlar", quote: "Dostluk, bir zaman sonra kendini gösterecek olan gerçek bir bağdır." },
    { name: "Kırık Hayatlar", quote: "Hayat, bazen bir yıkımdan sonra yeniden inşa edilir." },
    { name: "Ferit Edgü", quote: "Hayatta hiçbir şey, sonlu değildir." },
    { name: "Ahmet Mithat Efendi", quote: "Bir milletin yükselmesi, o milleti eğitimle doğru şekilde yönlendirebilmekle mümkündür." },
    { name: "Tarık Buğra", quote: "Bir insan, yaşadığı çağın en iyi yansımasıdır." },
    { name: "İnsanlık Hali", quote: "İnsan, bazen en derin duygularını yalnızca karanlıkta hisseder." },
    { name: "Süleyman Nazif", quote: "Bazen insan, bir kelimeyle hayatını değiştirebilir." },
    { name: "Beylik", quote: "Bir insan, bazen yalnızca kendini bulmak için bir toplumun parçası olmalıdır." },
    { name: "Alemdağ'da Var Bir Yılan", quote: "Hayat, biz ona hangi gözle bakarsak öyle bir şekil alır." },
    { name: "Çıplak", quote: "Gerçek güzellik, insanın içindeki saflıktadır." },
    { name: "Kuşlar da Gitti", quote: "Bazen bir insan, kaybolmuş gibi hissetse de, hala bulunduğu yerdedir." },
    { name: "Beni Hiç Göremezsin", quote: "İnsan, her zaman bilinçli olarak kendini gizlemeyi seçer." },
    { name: "Kıskanmak", quote: "Kıskanmak, insanın en derin zaafıdır." },
    { name: "Kendi Gök Kubbemiz", quote: "Her insan, kendi hayatını kurma hakkına sahiptir." },
    { name: "Hayat", quote: "Hayat, insanın kendisini bulduğu bir yolculuktur." },
    { name: "Ağustos", quote: "Bazen insan, sadece zamanın geçmesini bekler." },
    { name: "Hayaline Firar Et", quote: "Hayal, insanın en büyük özgürlüğüdür." },
    { name: "Eylül", quote: "Bazen insanlar birbirlerini anlamak için çok geç kalırlar." },
    { name: "Felsefi Edebiyat", quote: "Hayat, anlam arayışının en yüksek seviyesidir." },
    { name: "Kadınlar", quote: "Kadın, bazen bir toplumun tüm yükünü taşır." },
    { name: "Hayal", quote: "Hayaller, insanın ruhunun en özgür halidir." },
    { name: "Kervansaray", quote: "Bazen insan, yola çıkarken kendini kaybetmiştir." },
    { name: "Türk Edebiyatı", quote: "Edebiyat, halkın kalbini en iyi anlatan araçtır." },
    { name: "Yitik Zaman", quote: "Zaman kaybolur ama hatıralar hep kalır." },
    { name: "Suç ve Ceza", quote: "Bir insan, düşünmeden yaşadığı sürece, hiçbir zaman huzur bulamaz." },
    { name: "Karamazov Kardeşler", quote: "İnsanın ruhu, derin bir uçurum gibidir." },
    { name: "Anna Karenina", quote: "Aşk, insanı her şeyden önce kendisine yabancı kılar." },
    { name: "İvan Ilyiç'in Ölümü", quote: "Ölüm, hayatın gerçek yüzünü gösterir." },
    { name: "Yüzeydeki İnsanlar", quote: "Hayat, içsel bir boşluktur; bir yerinden başlamalıdır." },
    { name: "Eugene Onegin", quote: "Gerçek aşka ulaşmak için bazen kaybetmek gerekir." },
    { name: "Savaş ve Barış", quote: "Barış, bir halkın en yüksek arzusudur." },
    { name: "Beyaz Geceler", quote: "İnsanlar bazen geceleri, en derin sırlarını paylaşırlar." },
    { name: "Karamazov Kardeşler", quote: "İnsanın en büyük gücü, bir başkasına karşı duyduğu sevgisidir." },
    { name: "Çehov'un Öyküleri", quote: "Bir insanın hayatını değiştiren tek şey, başka bir insanın gözleridir." },
    { name: "Küçük Bir Yaşam", quote: "Birçok insanın gücü, diğerlerinin yanında yok olur." },
    { name: "Puşkin - Yevgeniy Onegin", quote: "Bir insan, hayatını bir kelimeyle değiştirebilir." },
    { name: "Anna Karenina", quote: "Gerçek aşk, insanın en derin duygularını ortaya çıkarır." },
    { name: "Dr. Jekyll ve Bay Hyde", quote: "İçindeki karanlık, insanın tüm dünyasını değiştirir." },
    { name: "Kış Bahçesi", quote: "Aşk, bazen bir insanın en büyük cezasıdır." },
    { name: "Yeraltı Edebiyatı", quote: "Bir insanın en büyük yalanı, kendini tanımamaktır." },
    { name: "Beyaz Geceler", quote: "Gecenin en karanlık anında bile bir umut ışığı vardır." },
    { name: "Venedik Taciri", quote: "Aşk, bazen insanı en beklenmedik anlarda bulur." },
    { name: "Kayıp Zamanın İzinde", quote: "Geçmişin hatıraları, insanın kalbinde sonsuza dek yaşar." },
    { name: "Suç ve Ceza", quote: "Bir insanın ruhunu, yalnızca bir başkası anlayabilir." },
    { name: "Puşkin'in Şiirleri", quote: "Şiir, bir insanın ruhunun derinliklerinden gelir." },
    { name: "Gömülü Çiçek", quote: "Bazen en derin acılar, en güzel duyguların arkasında gizlidir." },
    { name: "Açlık", quote: "İçindeki boşluk, seni her zaman bir arayışa sürükler." },
    { name: "Venedik Taciri", quote: "Herkesin içinde bir düşman vardır." },
    { name: "Küçük Paşa", quote: "Bazen insanlar, en büyük hayal kırıklıklarını en derin duygularıyla yaşarlar." },
    { name: "Efsuncu Baba", quote: "İnsanların yaşadığı dünya, içsel bir yansımanın dışa vurumudur." },
    { name: "Savaş ve Barış", quote: "Bir halkın özgürlüğü, insanın en büyük hakkıdır." },
    { name: "Gözleri Görmeyen", quote: "Bazen, insanın ruhu, gözlerindeki karanlıkla eşleşir." },
    { name: "Demir Yolculukları", quote: "Hayat, bir yolculuktur ve her yolculuk, yeni bir başlangıçtır." },
    { name: "Yaralı Ruh", quote: "İçsel acılar, bazen bir insanı en yüksek zirvelere taşır." },
    { name: "Beyaz Geceler", quote: "Bazen en karanlık zamanlarda, ışık da vardır." },
    { name: "Yeraltı Edebiyatı", quote: "Bir insan, ruhunun derinliklerine inmeden kendini asla bilemez." },
    { name: "Çehov'un Öyküleri", quote: "Bir hikaye, bazen bir insanın tüm hayatını anlatabilir." },
    { name: "Vatan Yahut Silistre", quote: "Bir milletin yükselmesi, ancak birlik ve beraberlikle mümkündür." },
    { name: "Puşkin", quote: "Bir şairin kelimeleri, bazen bir toplumun geleceğini şekillendirir." },
    { name: "Puşkin'in Şiirleri", quote: "Bir insanın kalbi, bazen hiç olmadık bir anda açılır." },
    { name: "Tolstoy'un Hikayeleri", quote: "Bir insanın gerçekliği, bazen hayalinin de ötesine geçer." },
    { name: "Savaş ve Barış", quote: "Savaşlar, insanları öldürür; barışlar ise onları yaşatır." },
    { name: "Karamazov Kardeşler", quote: "İnsan, yalnızca doğruyu bilmekle değil, aynı zamanda onu yapmakla yükümlüdür." },
    { name: "İntihar", quote: "Bazen bir insan, ölümü düşünmeden önce içindeki boşluğu doldurmalıdır." },
    { name: "Beyaz Geceler", quote: "Bir insan, bazen yalnız kalır ama yine de bir şeyler bulur." },
    { name: "Hayat ve Edebiyat", quote: "Hayat, edebiyatın tam ortasında şekillenir." },
    { name: "Küçük Bir Yaşam", quote: "Bir insanın içindeki boşluk, büyüdükçe daha fazla yer kaplar." },
    { name: "Demir Yolculukları", quote: "Bir yolculuk, insanın kimliğini şekillendirir." },
    { name: "Savaş ve Barış", quote: "Barış, insanın aradığı en büyük huzurdur." },
    { name: "Venedik Taciri", quote: "İçindeki aşk, seni her zaman yanlış yollara sürükler." },
    { name: "Karamazov Kardeşler", quote: "İnsan, yalnızca kendi içindeki karanlığı keşfettiğinde özgürleşir." },
    { name: "Savaş ve Barış", quote: "Bir halk, sadece birlikte hareket ettiğinde gerçek gücünü keşfeder." },
    { name: "Çehov'un Hikayeleri", quote: "Hayat, her anıyla bir öyküdür." },
    { name: "Karamazov Kardeşler", quote: "İnsanlar, en büyük acılarını genellikle yalnızken yaşarlar." },
    { name: "Beyaz Geceler", quote: "Bir insan, yalnız kalmaktan korkar ama bazen yalnızlık en iyi arkadaştır." },
    { name: "Faust", quote: "İnsan, her zaman daha fazlasını ister." },
    { name: "Genç Werther'in Acıları", quote: "Aşk, insanın kalbini en derinden sarar." },
    { name: "Savaş ve Barış", quote: "Bir halk, özgürlüğünü kaybettiğinde, tüm dünyası değişir." },
    { name: "Yüzyıllık Yalnızlık", quote: "Hayat, bazen en beklenmedik anlarda değişir." },
    { name: "Alman Ruhunun Çöküşü", quote: "Bir toplum, kendi kimliğini kaybettiğinde, geleceği kaybetmiş olur." },
    { name: "Siddhartha", quote: "İçsel huzur, insanın en büyük arzusudur." },
    { name: "Don Kişot", quote: "Bir insan, hayalini kaybetmeden önce yaşamayı seçmelidir." },
    { name: "Frankenstein", quote: "İnsan, yarattığından daha fazla güç arar." },
    { name: "Meydan Larousse", quote: "Bir insan, kendi yolunu bulmak için zaman içinde kaybolur." },
    { name: "İçimdeki Çığlık", quote: "İçsel acılar bazen insanın en derin hislerini ortaya çıkarır." },
    { name: "Hayvanlardan Tanrılara", quote: "Toplum, insanın en büyük öğretmenidir." },
    { name: "Tüm Eserler", quote: "Gerçek aşk, zamanın ötesine geçer." },
    { name: "Uğultulu Tepeler", quote: "Aşk, bazen insanın en büyük cezasıdır." },
    { name: "Germinal", quote: "Toplumsal adaletsizlik, bazen bir halkın isyanına yol açar." },
    { name: "Berlin Alexanderplatz", quote: "Bir insan, geçmişin gölgelerinden kaçarken geleceği inşa eder." },
    { name: "Efsus'un Kitapları", quote: "Bir toplum, ne kadar güçlü olursa olsun, kimliğini kaybedebilir." },
    { name: "Der Steppenwolf", quote: "İnsanın içindeki boşluk, hiçbir zaman dolmaz." },
    { name: "Metamorfoz", quote: "Bir insan, kendini kaybetmeden önce içindeki değişimi kabullenmelidir." },
    { name: "Dönüşüm", quote: "Bir insan, gerçeği görmeden önce ruhunu keşfetmelidir." },
    { name: "İyi Bir İnsan", quote: "İnsanlık, ancak doğruluğun peşinden giderse anlam bulur." },
    { name: "Gülün Adı", quote: "Bir insan, bilgiyle savaşırken kendini de kaybeder." },
    { name: "Günümüzün Alman Edebiyatı", quote: "Bir toplumun gücü, kelimelerle şekillenir." },
    { name: "Edebiyatın Çıkışı", quote: "Bir insanın kalbi, kitaplarla konuşur." },
    { name: "İyi Bir Çalışan", quote: "Gerçek başarı, içsel huzurda bulunur." },
    { name: "Kış Bahçesi", quote: "Bir insan, bazen yalnızlıktan en büyük gücü bulur." },
    { name: "Bıçak Sırtı", quote: "Hayat, sadece anlamlı kılındığında değerlidir." },
    { name: "Derin Kökler", quote: "İnsan, geçmişin köklerinden beslenerek geleceği inşa eder." },
    { name: "Korku", quote: "Bazen en derin korkular, insanın kendisinden gelir." },
    { name: "Görünmeyen Adam", quote: "Bir insan, göründüğünden daha fazlasıdır." },
    { name: "Alman Ruhunun Kökleri", quote: "Bir toplum, kendi kimliğini bulmak için tarihine bakmalıdır." },
    { name: "Yalnızlık", quote: "Bazen en derin huzur, yalnızlıkta bulunur." },
    { name: "Alman Edebiyatı Üzerine", quote: "Edebiyat, bir toplumun ruhunu şekillendirir." },
    { name: "Hayatın En Güzel Anları", quote: "Bir insan, bazen en büyük öğrenişini acılardan alır." },
    { name: "Son Akşam Yemeği", quote: "Bir toplumun yemek kültürü, onların hayatını belirler." },
    { name: "Yıkılan Dünyalar", quote: "Bir halk, kendi içindeki çatlaklardan yıkılır." },
    { name: "Kısa Çıkış", quote: "Hayat, bazen insanın en zor yolculuğudur." },
    { name: "Gizli Bahçe", quote: "Bir insan, içsel bahçesini ancak kabul ettiğinde bulur." },
    { name: "Kırmızı Çizgi", quote: "Bir toplum, bazen kendi çizgilerini aşmamalıdır." },
    { name: "Bütün Şiirleri", quote: "Şiir, bir insanın ruhunun derinliklerinden gelir." },
    { name: "Gölgedeki Kıyı", quote: "İnsan, yalnız kalmadığında en büyük keşfi yapar." },
    { name: "Bütün İnsanlar", quote: "Bir toplum, kendi insanını anlamadan ilerleyemez." },
    { name: "Zamanın Çehresi", quote: "Bir insan, geçmişin zamanında kaybolmadan geleceği inşa edebilir." },
    { name: "Ölülerin Efsaneleri", quote: "Bir halk, kendi ölülerinin izinde yürüyerek geleceğini bulur." },
    { name: "Özgürlük", quote: "Gerçek özgürlük, insanın içindeki kısıtlamaları aşmasıyla gelir." },
    { name: "Büyüme", quote: "Bir insanın en büyük büyümesi, kendisini kabul etmesidir." },
    { name: "Geceye Dönüş", quote: "Bir insan, geceyi aydınlatmadan önce içindeki karanlıkla yüzleşmelidir." },
    { name: "Karanlıkta", quote: "Karanlık, bir insanın en derin içsel yolculuğudur." },
    { name: "Aşk ve Büyü", quote: "Aşk, bir büyüdür, bazen en beklenmedik anlarda ortaya çıkar." },
    { name: "Şiir ve Toplum", quote: "Şiir, toplumu yönlendiren en güçlü silah olabilir." },
    { name: "Alman Edebiyatı", quote: "Edebiyat, bir halkın kimliğini biçimlendirir." },
    { name: "Kayıp Zamanın İzinde", quote: "Bir zamanın kaybı, insanın ruhunda sonsuz izler bırakır." },
    { name: "Derin Kökler", quote: "İnsanlar geçmişin köklerine bağlı kalmalıdır." },
    { name: "Hayal Gücü", quote: "Hayal gücü, bir insanın en güçlü aracıdır." },
    { name: "Sefiller", quote: "İnsan, kalbinin derinliklerinden gelir." },
    { name: "Madame Bovary", quote: "Gerçek mutluluk, hayallerin peşinden gitmekle bulunmaz." },
    { name: "Küçük Prens", quote: "En önemli şeyler gözle görülmez." },
    { name: "Notre-Dame’ın Kamburu", quote: "Kader, bazen insanı haksız yere cezalandırır." },
    { name: "Veba", quote: "Ölüm, insanın her zaman yüzleşmesi gereken bir gerçektir." },
    { name: "Germinal", quote: "Bir halk, kendi gücünü kaybettiğinde, isyan eder." },
    { name: "Kötülük Çiçekleri", quote: "Aşk, bazen insanın en derin yaralarını açar." },
    { name: "Yabancı", quote: "İnsan, bazen dünyaya yabancı hisseder." },
    { name: "Swann’ın Tarafı", quote: "Zaman, insanın en değerli kaybıdır." },
    { name: "Monte Kristo Kontu", quote: "İntikam, insanın içindeki karanlık duyguları besler." },
    { name: "Kırmızı ve Siyah", quote: "Bazen insan, kendisiyle savaşı kazanmak zorundadır." },
    { name: "Candide", quote: "İnsanlar, bazen en büyük dersleri acılardan alır." },
    { name: "Yabancı", quote: "İnsan, yaşamın anlamını kendi içinde bulur." },
    { name: "Üç Silahşörler", quote: "Birlikte olmak, insanın gücünü artırır." },
    { name: "Kamelyalı Kadın", quote: "Aşk, bir insanı hem özgürleştirir hem de zincirler." },
    { name: "Operadaki Hayalet", quote: "Aşk, bazen insanın en derin korkularını ortaya çıkarır." },
    { name: "Yalnızlık", quote: "Bazen, yalnızlık insanın en büyük arkadaşıdır." },
    { name: "Kayıp Zamanın İzinde", quote: "Zaman, insanın her şeyinden daha değerli olabilir." },
    { name: "Huzur", quote: "İnsan, huzuru dış dünyada değil, içsel bir dengeyle bulur." },
    { name: "Savaş ve Barış", quote: "Savaşın acımasızlığı, barışın değerini daha da artırır." },
    { name: "Aşkın Çeşitleri", quote: "Aşkın yüzlerce çeşidi vardır, her biri farklı bir deneyim sunar." },
    { name: "Gerçek Aşk", quote: "Gerçek aşk, insanın özüne dokunan bir duygudur." },
    { name: "Bir Aşkın Tarihi", quote: "Aşkın tarihi, insanlık tarihinin en eski hikayelerindendir." },
    { name: "İntikam", quote: "İntikam bazen en iyi çözüm gibi görünse de insanı yok eder." },
    { name: "Aşkın Anlamı", quote: "Aşkın anlamı, kişisel bir yolculuk ve keşif sürecidir." },
    { name: "İnsan ve İnsan", quote: "Her insanın içinde bir dünya vardır." },
    { name: "Gözlerindeki Aşk", quote: "Aşk, bir bakışta başlar ve sonsuza kadar sürer." },
    { name: "İçimizdeki Şeytan", quote: "İçimizdeki şeytan, bazen en karanlık arzularımızı yansıtır." },
    { name: "Hayalet", quote: "Geçmişin hayaletleri, bazen bugünü şekillendirir." },
    { name: "Kıskançlık", quote: "Kıskançlık, insanın ruhunu harap eden bir duygudur." },
    { name: "Geceyi Sevmek", quote: "Gece, insanın iç dünyasını daha derinlemesine keşfetmesine olanak tanır." },
    { name: "Zamanın Pençesi", quote: "Zaman, kaybolduğunda geri getirilemez." },
    { name: "İkili Hayatlar", quote: "Herkesin birden fazla yüzü vardır." },
    { name: "Aşkı Düşlemek", quote: "Aşk, bazen hayal ve gerçek arasında bir çizgidir." },
    { name: "Kölelik", quote: "Kölelik, insanın en temel haklarını çalan bir sömürüdür." },
    { name: "Sadakat", quote: "Sadakat, her ilişkide güvenin temelidir." },
    { name: "Yalnızlar", quote: "Yalnızlık, bazen bir insanın kendini en iyi şekilde keşfetmesidir." },
    { name: "Aşk ve Ölüm", quote: "Aşk ve ölüm, insan yaşamının kaçınılmaz parçalarıdır." },
    { name: "İkilik", quote: "İkilik, insanın en derin çatışmalarından birisidir." },
    { name: "Çıkmaz Sokak", quote: "Bazı yollar, insanı bir çıkmaza sokar." },
    { name: "Hikayenin Sonu", quote: "Her hikayenin bir sonu vardır, ama bazen sonu bilmeden yaşarsınız." },
    { name: "Sonsuz Aşk", quote: "Sonsuz aşk, insanın varoluşunun en yüksek halidir." },
    { name: "Kayıp Zaman", quote: "Zaman kaybolduğunda, insanın kaybolanları geri getirmesi imkansızdır." },
    { name: "Yanlış Anlaşılmalar", quote: "Yanlış anlaşılmalar, insan ilişkilerinin en büyük engelleridir." },
    { name: "Çaresizlik", quote: "Çaresizlik, insanın en büyük düşmanıdır." },
    { name: "Mutluluk", quote: "Mutluluk, insanın içsel huzurundan gelir." },
    { name: "Bilinçaltı", quote: "Bilinçaltı, insanın tüm duygularını şekillendirir." },
    { name: "Hikayenin Başlangıcı", quote: "Her hikayenin bir başlangıcı vardır ve çoğu zaman bu başlangıçlar önemlidir." },
    { name: "Ruhsal Derinlik", quote: "Ruhsal derinlik, insanın hayatını şekillendiren anahtardır." },
    { name: "Bütün Zamanlar", quote: "Bütün zamanlar, bir arada yaşanan bir anın parçalarıdır." },
    { name: "Gizli Duygular", quote: "Gizli duygular, bazen insanın kalbinde barındığı hazineye dönüşür." },
    { name: "Kaybolan Zaman", quote: "Zaman kaybolduğunda, onu yeniden bulmak çok zordur." },
    { name: "Gurur ve Önyargı", quote: "Herkesin kabul ettiği bir gerçektir ki, iyi bir servete sahip bekar bir adam, mutlaka bir karıya ihtiyaç duyar." },
    { name: "Uğultulu Tepeler", quote: "Ruhlarımız neyle yapılmışsa, onun ve benimkiler aynıdır." },
    { name: "Büyük Umutlar", quote: "Onu, akıl, vaat, barış, umut, mutluluk ve tüm cesaret kırıcı şeylere karşı sevmiştim." },
    { name: "Jane Eyre", quote: "Bir insanın gerçeği, başka bir insanın yanlışına, diğerinin ise saadetinin kaybına dönüşebilir." },
    { name: "1984", quote: "Savaş barıştır. Özgürlük köleliktir. Cehalet güçtür." },
    { name: "Yüzyıllık Yalnızlık", quote: "Bazen insanlar birbirine o kadar alışır ki, sadece birlikte olmak bile bir anlam taşır." },
    { name: "Suç ve Ceza", quote: "İnsanın vicdanı, sadece iyi bir insan olma isteği değil, aynı zamanda kötü bir insan olmamak için de yaşar." },
    { name: "Bir Delinin Hatıra Defteri", quote: "Benim içimde bir dünya var, ancak her şey, içinde yaşadığımız o dünyaya bağlı." },
    { name: "Çavdar Tarlasında Çocuklar", quote: "Gerçek bir insan olmanın nasıl bir şey olduğunu hiç bilemedim." },
    { name: "Küçük Prens", quote: "En iyi şeyler gözle görülmeyenlerdir." },
    { name: "Don Kişot", quote: "İnsanlık, yüce bir amaca ulaşma yolunda pek çok yanlışlık yapar." },
    { name: "Martin Eden", quote: "Hayatta en değerli şey, doğru olmak, ne olursa olsun." },
    { name: "Beyaz Diş", quote: "Zayıf ve güçsüz bir varlık, yaşamak için her şeyle mücadele eder." },
    { name: "Vahşetin Çağrısı", quote: "Doğada bir varlık olarak hayatta kalabilmek için, insan sadece içgüdülerini dinler." },
    { name: "Savaş ve Barış", quote: "Bütün meseleler birer sınavdır, hayatın gerçekliği bir karar anıdır." },
    { name: "Frankenstein", quote: "Korku, insanın içindeki en korkunç şeyleri ortaya çıkaran bir güçtür." },
    { name: "Tess", quote: "Hayat, insana ne zaman ne vereceğini asla bilemezsiniz." },
    { name: "Aşk ve Gurur", quote: "Bir insan ne kadar güçlü olursa olsun, kalp her zaman kırılgan bir yer olabilir." },
    { name: "Oblomov", quote: "Bazen bir insana, ona sevgiyle bakmak ne kadar zordur." },
    { name: "Madam Bovary", quote: "İnsanların hayatı ve yüce duyguları, onlara bir kez verilen kararlara bağlıdır." },
    { name: "Uğultulu Tepeler", quote: "İnsanın içindeki karanlık, dışarıdaki dünyadan daha güçlüdür." },
    { name: "Karamazov Kardeşler", quote: "İnsan her zaman doğruyu bulsa bile, o doğrular insanın arzusunun hüsranına dönüşebilir." },
    { name: "Dorian Gray'in Portresi", quote: "Zaman ve yaşlanma, bir insanın içindeki en büyük korkudur." },
    { name: "Sherlock Holmes", quote: "Her şeyin çözümü, doğru soruyu sormakla başlar." },
    { name: "Gulliver'in Gezileri", quote: "Gerçekten görmek istediğimiz şeyleri görmek, gözlerimizin ötesinde bir bakış açısı gerektirir." },
    { name: "Rüzgâr Gibi Geçti", quote: "Her şey değişir ama hayatın akışını hiç kimse durduramaz." },
    { name: "İki Şehrin Hikayesi", quote: "Bu en iyi zaman ve en kötü zaman, bilgiyle yapılan büyük savaşın sonucu." },
    { name: "Silas Marner", quote: "Bir insanın geçmişi, şimdiki halini ve geleceğini şekillendirir." },
    { name: "Küçük Kadınlar", quote: "Hayat, mücadelelerle dolu olsa da, insanın hayatta kalmaya ve sevdiklerine bağlı kalmaya devam etmesi gerekir." },
    { name: "Moby Dick", quote: "İntikam, bir insanın yaşamındaki en güçlü güdülerden biridir." },
    { name: "Tom Sawyer'ın Maceraları", quote: "Bir çocuğun yüreğinde her zaman bir şeyler yapmak isteği vardır." },
    { name: "Yaşlı Adam ve Deniz", quote: "Bir insanın azmi, yaşamının anlamını bulduğu yerdir." },
    { name: "Bülbülü Öldürmek", quote: "Adalet, bazen gerçeklikten çok daha farklı bir şey olabilir." },
    { name: "Bulantı", quote: "Hayatın anlamını sorgulamak, insanın kendini bulma yolundaki ilk adımdır." },
    { name: "Fahrenheit 451", quote: "Kitapları yakmak, insanın özgürlüğüne saldırmak demektir." },
    { name: "Cesur Yeni Dünya", quote: "Gerçek özgürlük, her insanın kendisi için bir anlam yaratmasıyla mümkündür." },
    { name: "Büyük Umutlar", quote: "Bazen hayatta elde edebileceğimiz en büyük şey, kendi kimliğimizi keşfetmektir." },
    { name: "Cesur Yeni Dünya", quote: "Hayat, bazı zamanlar amacını kaybeder, ama hala bir amaç varmış gibi yaşamalıyız." },
    { name: "Geceyi Seyret", quote: "Hayatta ne olursa olsun, bir umut her zaman vardır." },
    { name: "Isabel", quote: "Sevgi, en zor zamanlarda bile umut ışığı olabilir." },
    { name: "Sherlock Holmes", quote: "Hayatın çözümüne ulaşmanın anahtarı, doğru gözlem yapmaktan geçer." },
    { name: "Küçük Prens", quote: "İnsanların sevdiklerini kaybetmeden önce, ne kadar değerli olduklarını anlamaları gerekir." },
    { name: "Güzel ve Çirkin", quote: "İç güzellik, dış güzellikten çok daha uzun ömürlüdür." },
    { name: "Aşk ve Gurur", quote: "Kalbin en derinliklerinde sevginin gücü, her şeyin önündedir." },
    { name: "Görünmeyen Adam", quote: "Bazen insanlar, kim olduklarını bile bulamayacak kadar kaybolurlar." },
    { name: "Gerçekten Ne Oluyor?", quote: "Bazen bir insanın hayatı, kendi algılarının ötesinde bir yerlerde olabilir." },
    { name: "Dönüşüm", quote: "Değişim, insanın hayatındaki en belirgin ve korkutucu şey olabilir." },
    { name: "Anna Karenina", quote: "Aşk, her şeyin ötesindedir ve insanın ruhunda iz bırakır." },
    { name: "Kayıp Zamanın Peşinde", quote: "Bir anı, zamanın ne kadar değerli olduğunu hatırlatır." },
    { name: "Kırmızı Pazartesi", quote: "Gerçek suçluyu anlamak, geriye kalan izleri çözmekle mümkündür." }
  ]);

  const uniqueQuotes = Array.from(
    new Set(quotes.map(item => item.quote))
  ).map(quote => {
    return quotes.find(item => item.quote === quote);
  });

  const [filteredQuotes, setfilteredQuotes] = useState(uniqueQuotes);
  
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

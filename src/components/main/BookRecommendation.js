import React, { useState } from "react";
import { Input, Button, Form, FormGroup, Row, Col, Card, CardGroup, CardFooter, CardBody, CardText, CardHeader } from "reactstrap";

export default function BookRecommendation() {
  const [query, setQuery] = useState("");
  const [ozet, setOzet,] = useState([
{
    kitapAdi: "1984",
    ozet: "Baskıcı bir totaliter rejimde, bireysel özgürlüklerin yok edildiği distopik bir dünyada geçen bir hikâye.",
    detailed: "George Orwell'in distopik klasiği, Büyük Birader'in totaliter rejimi altında yaşayan Winston Smith'in hikayesini anlatır. Devletin sürekli gözetim, propaganda ve dil manipülasyonu yoluyla bireyin düşünce ve davranışlarını kontrol ettiği bu dünyada, Winston özgürlük ve gerçeklik arayışına girer. Roman, totalitarizm, bireysel özgürlükler ve devletin gücü üzerine derin bir eleştiridir."
  },
  {
    kitapAdi: "Savaş ve Barış",
    ozet: "Napolyon'un Rusya Seferi sırasında aristokrat ailelerin yaşamı ve savaşın etkileri.",
    detailed: "Lev Tolstoy'un epik romanı, Napolyon savaşları döneminde Rus aristokrasisinin yaşamını ve tarihsel olayları kapsamlı bir şekilde ele alır. Pierre, Andrey ve Natasha gibi karakterlerin kişisel yaşamları ve içsel dönüşümleri savaşın gölgesinde anlatılır. Tarih ve bireysel kaderler iç içe geçer, savaşın hem toplumsal hem de bireysel etkileri incelenir."
  },
  {
    kitapAdi: "Suç ve Ceza",
    ozet: "Fakir bir öğrenci olan Raskolnikov'un işlediği cinayet sonrası yaşadığı vicdan azabı.",
    detailed: "Fyodor Dostoyevski'nin psikolojik romanı, genç hukuk öğrencisi Raskolnikov'un işlediği cinayetin ardından yaşadığı suçluluk ve psikolojik bunalımı konu alır. Roman, ahlak, suç, ceza, vicdan ve insan doğası üzerine derin sorgulamalar içerir. Raskolnikov'un ruhsal mücadelesi ve toplumla çatışması merkezdedir."
  },
  {
    kitapAdi: "Anna Karenina",
    ozet: "Evli bir kadının yasak aşkı ve bunun trajik sonuçları.",
    detailed: "Tolstoy'un bu başyapıtı, aristokrat Anna Karenina'nın mutsuz evliliği ve genç subay Vronsky ile yaşadığı yasak aşkı anlatır. Roman, aşk, ihanet, toplum normları ve bireysel özgürlükler arasındaki çatışmayı derinlemesine işler. Anna'nın aşk uğruna toplum tarafından dışlanması ve trajik sonu, dönemin Rus aristokrasisinin portresini sunar."
  },
  {
    kitapAdi: "Madame Bovary",
    ozet: "Hayalperest bir kadının romantik beklentilerinin hayal kırıklığıyla sonuçlanması.",
    detailed: "Gustave Flaubert'in realist romanı, sıradan bir kasaba doktorunun eşi Emma Bovary'nin sıkıcı evlilikten kaçmak için hayal kuruşunu ve ardından yaşadığı trajediyi anlatır. Roman, toplumun baskısı, bireysel arzular ve hayal kırıklıkları temalarını işler, realizm akımının önemli örneklerindendir."
  },
  {
    kitapAdi: "Bülbülü Öldürmek",
    ozet: "Irkçılığın ve adaletsizliğin gölgesinde büyüyen küçük bir kızın hikâyesi.",
    detailed: "Harper Lee'nin romanı, 1930'ların Alabama'sında geçen çocukluk anılarını ve toplumdaki ırkçılık ile adaletsizliği anlatır. Scout Finch adlı küçük kızın gözünden, babası Atticus'un savunduğu masum bir siyah adamın davası ve kasaba hayatının sosyal dinamikleri derinlemesine işlenir."
  },
  {
    kitapAdi: "Don Kişot",
    ozet: "Hayal dünyasında yaşayan bir şövalye ve sadık yaverinin maceraları.",
    detailed: "Miguel de Cervantes'in klasik eseri, hayalperest Don Kişot'un şövalyelik ideallerini yaşatmaya çalışırken başına gelen komik ve trajik olayları anlatır. Roman, gerçeklik ve hayal arasındaki ince çizgiyi, toplum eleştirisini ve insan doğasını mizahi bir dille işler."
  },
  {
    kitapAdi: "Gurur ve Önyargı",
    ozet: "Aşk, yanlış anlamalar ve sosyal sınıf farklılıkları üzerine bir hikâye.",
    detailed: "Jane Austen'in romanı, Elizabeth Bennet ve Bay Darcy arasındaki aşk hikayesini anlatır. Romanda, 19. yüzyıl İngiltere’sinde sosyal sınıflar, aile ilişkileri ve bireysel gurur ile ön yargıların etkileri ustaca işlenir. Karakterlerin gelişimi ve mizahi dili dikkat çeker."
  },
  {
    kitapAdi: "Beyaz Geceler",
    ozet: "Yalnız bir adamın kısa süreliğine tanıştığı bir kadınla yaşadığı romantik anlar.",
    detailed: "Fyodor Dostoyevski'nin kısa romanı, Petersburg'da yalnız bir adamın genç bir kadınla yaşadığı dört gecelik duygusal ve hayali ilişkiyi anlatır. Roman, yalnızlık, aşk ve insan psikolojisi üzerine ince bir çalışma olarak kabul edilir."
  },
  {
    kitapAdi: "Karamazov Kardeşler",
    ozet: "Üç kardeşin baba cinayeti üzerinden gelişen ahlaki ve felsefi çatışmaları.",
    detailed: "Dostoyevski'nin başyapıtı, Karamazov ailesinin bireyleri üzerinden inanç, ahlak, özgür irade ve insan doğasının karanlık yönlerini sorgular. Baba cinayeti etrafında gelişen dramatik olaylar, derin felsefi tartışmalarla örülmüştür."
  },
  {
    kitapAdi: "Monte Kristo Kontu",
    ozet: "İhanete uğrayıp hapse atılan bir adamın intikam planı.",
    detailed: "Alexandre Dumas'ın macera romanı, genç Edmond Dantès'in haksız yere hapse atılması ve yıllar sonra Monte Kristo Kontu olarak dönüp düşmanlarından intikam almasını anlatır. Roman, adalet, ihanet, aşk ve özgürlük temalarını kapsayan zengin bir macera hikâyesidir."
  },
  {
    kitapAdi: "İki Şehrin Hikayesi",
    ozet: "Fransız Devrimi’nin gölgesinde geçen fedakârlık ve aşk hikâyesi.",
    detailed: "Charles Dickens'ın tarihi romanı, Paris ve Londra arasında geçen, Fransız Devrimi'nin karmaşasında iki adam ve iki kadının hayatlarının iç içe geçtiği dramatik bir hikâye sunar. Fedakârlık, kurtuluş ve toplumsal değişim temalarını işler."
  },
  {
    kitapAdi: "Fareler ve İnsanlar",
    ozet: "Büyük Buhran döneminde hayalleri olan iki işçi arkadaşın trajedisi.",
    detailed: "John Steinbeck'in kısa romanı, George ve Lennie adlı iki göçmen işçinin Amerikan rüyasını gerçekleştirme hayalleri ve trajik sonuçlarını anlatır. Roman, dostluk, umutsuzluk ve insanlık hallerine dair derin bir gözlemdir."
  },
  {
    kitapAdi: "Deniz Feneri",
    ozet: "Bir ailenin yıllar içinde değişen ilişkileri ve hayatın anlamı üzerine bir anlatı.",
    detailed: "Virginia Woolf'un modernist romanı, Ramsay ailesinin bir yaz boyunca İngiltere'deki deniz feneri evinde yaşadıklarını ve bireylerin içsel dünyalarını yansıtır. Zamanın akışı, bilinç akışı tekniği ve insan ilişkilerinin geçiciliği temel temalardır."
  },
  {
    kitapAdi: "Moby Dick",
    ozet: "Takıntılı bir kaptanın beyaz balinayı avlama mücadelesi.",
    detailed: "Herman Melville'in klasik eseri, Kaptan Ahab'ın beyaz balina Moby Dick'i avlama takıntısını ve bu arayışın trajik sonuçlarını anlatır. Roman, doğa ile insan, takıntı, kader ve varoluş üzerine derin metaforlar içerir."
  },
  {
    kitapAdi: "Sefiller",
    ozet: "Eski bir mahkûmun kurtuluş arayışı ve adalet mücadelesi.",
    detailed: "Victor Hugo'nun epik romanı, Jean Valjean'ın hapis hayatından kurtulup yeni bir hayata başlaması ve adalet sistemiyle mücadelesini anlatır. Roman, sevgi, fedakârlık, toplumsal adaletsizlik ve insanlık temalarını işler."
  },
  {
    kitapAdi: "Yeraltından Notlar",
    ozet: "Toplumdan kopmuş bir adamın içsel çatışmaları ve yalnızlığı.",
    detailed: "Fyodor Dostoyevski'nin kısa romanı, toplumdan soyutlanmış bir adamın iç dünyasındaki karanlık düşüncelerini, kendine yabancılaşmasını ve toplumsal eleştirilerini içerir. Varoluşsal sorgulamalarla doludur."
  },
  {
    kitapAdi: "Küçük Kadınlar",
    ozet: "Dört kız kardeşin çocukluktan yetişkinliğe geçiş süreci.",
    detailed: "Louisa May Alcott'un yarı-otobiyografik romanı, March ailesinin dört kız kardeşinin hayatındaki zorlukları, sevinçleri ve büyüme süreçlerini anlatır. Aile bağları, kadınların rolü ve kişisel gelişim temaları ön plandadır."
  },
  {
    kitapAdi: "Dracula",
    ozet: "Transilvanya’dan İngiltere’ye taşınan bir vampirin dehşet dolu hikâyesi.",
    detailed: "Bram Stoker'ın gotikromanı, Kont Dracula'nın İngiltere'ye gelişi ve vampirlik tehditleri karşısında insanlığın mücadelesini anlatır. Korku, doğaüstü ve Victorian dönemi toplumsal korkuları temalarındandır."
  },
  {
    kitapAdi: "Frankenstein",
    ozet: "Bilim uğruna yaratılan canavarın ve yaratıcısının trajik hikâyesi.",
    detailed: "Mary Shelley'nin gotik romanı, bilim adamı Victor Frankenstein'ın ölüyü diriltme çabası sonucu yarattığı canavarın yaşadığı dışlanma, yalnızlık ve öfkeyi anlatır. Yaratıcı ve yaratılan arasındaki ilişki, insan doğası, etik ve sorumluluk temaları derinlemesine işlenir."
  },
  {
    kitapAdi: "Vadideki Zambak",
    ozet: "Karşılıksız aşk yaşayan bir adamın duygusal mücadelesi.",
    detailed: "Honoré de Balzac'ın eseri, asil ve saf bir adamın, karşılıksız aşkı uğruna yaşadığı içsel çatışmaları ve toplumun karmaşıklıkları arasında sıkışmasını anlatır. Roman, idealizm ve gerçeklik arasındaki gerilimi inceler."
  },
  {
    kitapAdi: "Babalar ve Oğullar",
    ozet: "Nesiller arası çatışmalar ve nihilizmin yükselişi.",
    detailed: "Ivan Turgenyev'in romanı, Rusya'da genç nihilist Bazarov ile babaları arasındaki kuşak çatışmasını ele alır. Değişen değerler, ideolojiler ve aile ilişkileri üzerinden modernleşme teması işlenir."
  },
  {
    kitapAdi: "Oliver Twist",
    ozet: "Yetim bir çocuğun Londra’nın karanlık sokaklarında hayatta kalma mücadelesi.",
    detailed: "Charles Dickens'ın romanı, yetim Oliver Twist'in kötü koşullar, kötü niyetli insanlar ve suç dünyası içinde hayatta kalma mücadelesini anlatır. Sosyal adaletsizlik ve fakirlik eleştirisi güçlüdür."
  },
  {
    kitapAdi: "Martin Eden",
    ozet: "Kendi kendini yetiştiren bir yazarın sınıf atlama çabası ve hayal kırıklıkları.",
    detailed: "Jack London'un yarı-otobiyografik romanı, işçi sınıfından gelen Martin Eden’in yazar olma arzusu ve toplumdaki elit sınıfa yükselme çabalarını konu alır. Başarı, bireysellik ve toplumun sınıf yapısına dair sert eleştiriler içerir."
  },
  {
    kitapAdi: "Körlük",
    ozet: "Bir şehirde aniden yayılan körlük salgınının toplum üzerindeki etkileri.",
    detailed: "José Saramago'nun distopik romanı, aniden tüm toplumun kör olması sonrası insan doğasının karanlık ve kaotik yönlerini keşfeder. Toplum düzeninin çöküşü, dayanışma ve insanın hayatta kalma mücadelesi temaları öne çıkar."
  },
  {
    kitapAdi: "İnce Memed",
    ozet: "Anadolu’da bir köylünün zalim ağa düzenine karşı mücadelesi.",
    detailed: "Yaşar Kemal'in epik romanı, yoksul köylü Memed’in zalim ağa"
  }

  ]);

  // Tekrarlayan özetleri temizle
  const uniqueSummary = Array.from(new Set(ozet.map(item => item.ozet)))
    .map(ozetText => ozet.find(item => item.ozet === ozetText));

  const [kitap, setKitap] = useState(uniqueSummary[Math.floor(Math.random() * uniqueSummary.length)]);

  const selectRandom = () => {
    const selected = uniqueSummary[Math.floor(Math.random() * uniqueSummary.length)];
    setKitap(selected);
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 p-4">
      <Button color="aliceblue" size="lg" className="mb-4 rounded-pill px-4 hover-button" onClick={selectRandom}>
        Kitap Öner
      </Button>

      {kitap && (
        <Col xs="12" sm="12" md="10" lg="8" className="mb-4">
          <CardGroup className="centered-container">
            <Card className='summary-card me-1 ms-1' style={{ border: '2px solid white'}}>
              <CardHeader className="text-red font-weight-bold text-center mt-0" style={{color:"red", fontStyle: 'italic', fontSize: "34px"}}>
                <strong>{kitap.kitapAdi}</strong>
              </CardHeader>

              <CardText className="text-white" style={{ fontStyle: 'italic', fontSize:"20px", margin:"20px"}}>
                "{kitap.ozet}"
              </CardText>

              <CardFooter className="text-black text-left mt-0" style={{color:"black", backgroundColor:"white", fontStyle: 'italic', fontSize:"18px"}}>
                {kitap.detailed}
              </CardFooter>
            </Card>
          </CardGroup>
        </Col>
      )}
    </div>
  );
}
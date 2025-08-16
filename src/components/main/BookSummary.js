import React, { useState } from "react";
import { Input, Button, Form, FormGroup, Row, Col, Card, CardGroup, CardFooter, CardText, CardHeader } from "reactstrap";

export default function SummaryApp() {
  const [query, setQuery] = useState("");
  const [summary, setSummary] = useState([
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
    name: "İnce Memed",
    summary: "Anadolu’da bir köylünün zalim ağa düzenine karşı mücadelesi.",
    details: "Yaşar Kemal'in epik romanı, yoksul köylü Memed’in zalim ağa"
  }

  ]);

 const uniqueSummary = Array.from(
  new Set(summary.map(item => item.summary))
).map(quote => {
  return summary.find(item => item.summary === quote);
});

  const [filteredsummary, setFilteredsummary] = useState(uniqueSummary);
  
  const handleSearch = () => {
    const filtered = uniqueSummary.filter(item =>
      item.summary.toLowerCase().includes(query.toLowerCase()) ||
      item.name.toLowerCase().includes(query.toLowerCase())
    );


    
    setFilteredsummary(filtered);
  };
const handleKeyDown = (event) => {
  if (event.key === "Enter") {
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
            placeholder="Kısa Özet ara..."
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
        {filteredsummary.length > 0 ? (
          filteredsummary.map((item, index) => (
          <Col key={index} xs="12" sm="12" md="10" lg="8" className="mb-4">
            <CardGroup className="centered-container">
                      <Card key={index} className='summary-card me-1 ms-1' style={{ border: '2px solid white'}}>

                      <CardHeader className="text-red font-weight-bold text-center mt-0" style={{color:"red", fontStyle: 'italic', fontSize: "34px"}}>
                        <strong>{item.name}</strong>
                      </CardHeader>

                      <CardText className="text-white" style={{ fontStyle: 'italic' }}>
                          "{item.summary}"
                      </CardText>


                      <CardFooter className="text-black text-left mt-0" style={{color:"black", backgroundColor:"white", fontStyle: 'italic', fontSize:"18px"}}>
                          {item.details}
                      </CardFooter>

                    </Card>
            </CardGroup>                           
          </Col>

          ))
        ) : (
          <p className="text-white">Aramanıza uygun özet bulunamadı.</p>
        )}
      </Row>
    </div>
  );
}

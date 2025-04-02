import React, { Component } from 'react'
import axios from "axios";
import { Card,Col,CardText, CardGroup, CardFooter } from 'reactstrap'

const Months = {
    "01":"Ocak",
    "02":"Şubat",
    "03":"Mart",
    "04":"Nisan",
    "05":"Mayıs",
    "06":"Haziran",
    "07":"Temmuz",
    "08":"Ağustos",
    "09":"Eylül",
    "10":"Ekim",
    "11":"Kasım",
    "12":"Aralık",
}

const TurkishClassics = [
    "Aşk-ı Memnu",
    "Cevdet Bey ve Oğulları",
    "Sefiller",
    "Kürk Mantolu Madonna",
    "İntibah",
    "Küçük Prens",
    "Beyaz Geceler",
    "Savaş ve Barış",
    "Gülün Adı",
    "İzlanda Günlükleri",
    "Vatan Yahut Silistre",
    "İstanbul Hatırası",
    "Eski İstanbul",
    "Çalıkuşu",
    "Kayıp Zamanın Peşinde",
    "İnsan Ne İle Yaşar?",
    "Edebiyat-ı Cedide",
    "Felsefe Tarihi",
    "Tüfek, Mikrop, Çelik",
    "Sinekli Bakkal",
    "Kuyucaklı Yusuf",
    "Kırmızı ve Siyah",
    "İçimizdeki Şeytan",
    "Yüksek Topuklar",
    "İki Şehrin Hikayesi",
    "Serim ve Demir",
    "Fakir Bir Kızın Hikayesi",
    "Felsefe ve Edebiyat",
    "Efsus",
    "Aşk ve Gurur",
    "Aziz İstanbul",
    "Son Akşam Yemeği",
    "Savaşın Kıyısında",
    "Şeytanın Akılları",
    "Denizler ve İnsanlar",
    "Güzel Günler",
    "Zoraki Koca",
    "Sahipsiz Yürek",
    "Yanlızlar Geceyi Sever",
    "Aşk-ı Memnu (Yeniden)",
    "Gözlerimi Kaparım, Vazifemi Yaparım",
    "Mavi Gözlü Dev",
    "Sessiz Ev",
    "Benim Adım Kırmızı",
    "Son Akşam Yemeği",
    "Hayaline Firar Etmek",
    "Bende Bir Kız Var",
    "Türk Edebiyatı",
    "Çok İyi Bir Şey Oldu",
    "Hayat Şarkısı",
    "Gülün Adı",
    "Gün Olur Alır Giderim",
    "Kendi Göğüslerinde",
    "Güneşin Feryadı",
    "Mavi Kuğu",
    "Sonsuz Sayılı Günler",
    "Çehov’un Sözleri",
    "Kardeşimin Hikayesi",
    "Gümüş Yelkenler",
    "Bütün Edebiyat",
    "Aşkın Dört Hali",
    "Bütün Masallar",
    "Havada Uçuşan Güvercinler",
    "Dünya’nın En Güzel Kitapları",
    "Rüzgarın Ardında",
    "Geceyi Beklerken",
    "Son Akşam Yemeği",
    "Kuyrukluyıldız Altında Bir İzdivaç",
    "Mürebbiye",
    "Efsuncu Baba",
    "İntibah",
    "Şair Evlenmesi",
    "Vatan Yahut Silistre",
    "Felâtun Bey İle Râkım Efendi",
    "Taaşşuk-ı Talat ve Fitnat",
    "Mai ve Siyah",
    "Refet",
    "Turfanda mı Yoksa Turfa mı?",
    "Ömer’in Çocukluğu",
    "Dolaptan Temaşa",
    "Gulyabani",
    "Salon Köşelerinde",
    "Falaka",
    "A’mâk-ı Hayal – Hayalin Derinlikleri",
    "Şeytankaya Tılsımı",
    "Sergüzeşt",
    "Genç Kız Kalbi",
    "Bize Göre ve Bir Seyahatin Notları",
    "Seyahat Jurnali",
    "Gönül Bir Yel Değirmenidir",
    "Hazan Bülbülü",
    "Aşk-ı Memnu",
    "Kürk Mantolu Madonna",
    "Levâyih-ı Hayat – Hayattan Sahneler",
    "İçimizdeki Şeytan",
    "Kuyucaklı Yusuf",
    "Halas – Kurtuluş",
    "Gurebahane-i Laklakan – Gariban Leylekler Evi",
    "Senin İçin (Toplu Hikâyeleri)",
    "Siyah Gözler",
    "Bahar ve Kelebekler",
    "Ferdâ-yı Garâm – Aşkın Yarını",
    "Menfi – Sürgün",
    "Primo Türk Çocuğu",
    "Karabibik",
    "Şıpsevdi",
    "Ayyar Hamza – Kokona Yatıyor",
    "Zavallı Necdet",
    "Hakka Sığındık",
    "Kuşdili’nde",
    "Bir Aşkın Tarihi",
    "Define",
    "Meyhanede Hanımlar",
    "Bataklık Çiçeği",
    "Müşahedat",
    "Ay Demir",
    "Kokotlar Mektebi",
    "Geçmişten Gelen – Bütün Şiirleri-1",
    "Kızıl Serap",
    "Haziranın Yirminci Günü",
    "Ayten",
    "Rübâb-ı Şikeste – Kırık Saz – Bütün Şiirleri-2",
    "Pervaneler",
    "Cani Mi, Masum Mu?",
    "Halûk’un Defteri – Şermîn, Son Şiirler – Bütün Şiirleri-3",
    "Çulluk"
  ];

  const WorldLiteratureBooksTurkish = [
   "Monte Kristo Kontu",
        "Vadideki Zambak",
        "Yüzbaşının Kızı",
        "Zamanımızın Bir Kahramanı",
        "Fareler ve İnsanlar",
        "Drakula",
        "Zaman Makinesi",
        "Görünmez Adam",
        "Anna Karenina",
        "İnsan Ne ile Yaşar",
        "Moby Dick",
        "Çavdar Tarlasında Çocuklar",
        "Genç Werther'in Acıları",
        "Sineklerin Tanrısı",
        "1984-Bin Dokuz Yüz Seksen Dört",
        "Yüzyıllık Yalnızlık",
        "Kırmızı Pazartesi",
        "Dönüşüm",
        "Bir Delinin Hatıra Defteri",
        "Pal Sokağı Çocukları",
        "Gulliver'in Gezileri",
        "Genç Bir Köy Hekimi",
        "Küçük Prens",
        "80 Günde Devri Alem",
        "Dünya Merkezine Yolculuk",
        "Denizler Altında Yirmi Bin Fersah",
        "Fahrenheit 451",
        "Cesur Yeni Dünya",
        "Sherlock Holmes",
        "Uğultulu Tepeler",
        "Rüzgâr Gibi Geçti",
        "Jane Eyre",
        "Aşk ve Gurur",
        "Silas Marner",
        "Kuzey ve Güney",
        "Bülbülü Öldürmek",
        "Küçük Kadınlar",
        "Madam Bovary",
        "Sefiller",
        "Martin Eden",
        "Kadınlar Okulu",
        "Vahşetin Çağrısı",
        "Beyaz Diş",
        "Kırmızı ve Siyah",
        "Karamazov Kardeşler",
        "Savaş ve Barış",
        "Don Kişot",
        "Üç Silahşorler",
        "Notre Dame'ın Kamburu",
        "Gurur Dünyası",
        "Oblomov",
        "Robinson Crusoe",
        "Karanlığın Yüreği",
        "İnce Memed",
        "Babalar ve Oğullar",
        "Tom Sawyer'ın Maceraları",
        "Yaşlı Adam ve Deniz",
        "Dorian Gray'in Portresi",
        "Cesur Yeni Dünya",
        "Saat 12'yi Gösteriyor",
        "Savaş ve Barış",
        "Sanatçının Genç Bir Adam Olarak Portresi",
        "Batıda Cephesi Yok",
        "Anna Karenina",
        "Savaş Sonrası",
        "Atlas Yeniden Sırtlandı",
        "Cesur Yeni Dünya",
        "Don Kişot",
        "Drakula",
        "Fahrenheit 451",
        "Frankenstein",
        "Rüzgar Gibi Geçti",
        "Büyük Umutlar",
        "Sinekler ve Beyler",
        "İki Şehrin Hikayesi",
        "Moby Dick",
        "Karamazov Kardeşler",
        "Aşk ve Gurur",
        "Sefiller",
        "Bütün İnsanlar Eşittir",
        "Küçük Prens",
        "İzlanda Efsaneleri",
        "Büyük Umutlar",
        "Ekim Devrimi",
        "Yüce Tanrı",
        "Gizli Bahçe",
        "Beyaz Zambaklar Ülkesinde",
        "Savaş ve Barış",
        "Karakter",
        "Çekirge",
        "Denizler Altında",
        "Kuzey Rüzgarı",
        "Küçük Kadınlar",
        "Tanrı'nın Kendi Kötülüğü",
        "Beyaz Gemi",
        "Günümüz İnsanı",
        "Köstebek",
        "Germinal",
        "Ne Zaman Ölürüz",
        "Yalnızlar"
  ];

  const turkishAuthors = [
    "Ahmet Hamdi Tanpınar",
    "Ahmet Mithat Efendi",
    "Ahmet Ümit",
    "Alaeddin Özdemir",
    "Alev Alatlı",
    "Ali Baba ve Kırk Haramiler",
    "Ali Erdal Yıldız",
    "Ali Kemal",
    "Alper Canıgüz",
    "Arda Turan",
    "Attila İlhan",
    "Aydın Boysan",
    "Aziz Nesin",
    "Bahaeddin Özkişi",
    "Baki",
    "Behçet Necatigil",
    "Bilge Karasu",
    "Canan Tan",
    "Cevat Şakir Kabaağaçlı (Halikarnas Balıkçısı)",
    "Cihan Aktaş",
    "Cumhuriyet Gazetesi",
    "Deniz Zeyrek",
    "Elif Şafak",
    "Emine Işınsu",
    "Emine Şenlikoğlu",
    "Ferit Edgü",
    "Fikret Otyam",
    "Haldun Dormen",
    "Halide Edib Adıvar",
    "Halit Refig",
    "Hikmet Temel Akarsu",
    "Hüseyin Rahmi Gürpınar",
    "İbrahim Balaban",
    "İbrahim Zeki Burdurlu",
    "İskender Pala",
    "İsmail Hakkı Baltacıoğlu",
    "Kahraman Tazeoğlu",
    "Kemal Tahir",
    "Köksal Yavuz",
    "Mahir Ünsal Eriş",
    "Mahmut Makal",
    "Mehmet Akif Ersoy",
    "Mehmet Eroğlu",
    "Melih Cevdet Anday",
    "Murat Menteş",
    "Mustafa Kutlu",
    "Mustafa Kemal Atatürk",
    "Mustafa Şahin",
    "Nedim Gürsel",
    "Neriman Kızılkaya",
    "Nezihe Meriç",
    "Orhan Kemal",
    "Orhan Pamuk",
    "Oya Baydar",
    "Ömer Seyfettin",
    "Reşat Nuri Güntekin",
    "Sabahattin Ali",
    "Sadık Yalsızuçanlar",
    "Sait Faik Abasıyanık",
    "Samiha Ayverdi",
    "Selim İleri",
    "Sevgi Soysal",
    "Süleyman Nazif",
    "Tarık Buğra",
    "Tezer Özlü",
    "Yaşar Kemal",
    "Yusuf Atılgan",
    "Zafer Şenocak",
    "Zeyyat Selimoğlu",
    "Ziya Gökalp",
    "Zülfü Livaneli",
    "Ayla Kutlu",
    "Atilla Tokatlı",
    "Fuat Sevimay",
    "Gülten Dayıoğlu",
    "Haluk Oral",
    "İhsan Sıtkı Yener",
    "Mehmet Şevket Eygi",
    "Nevzat Kösoğlu",
    "Peyami Safa",
    "Süreyya Berfe",
    "Süleyman Çobanoğlu",
    "Emine Yıldırım",
    "Ferhan Şensoy",
    "Hüseyin Nihal Atsız",
    "Mustafa Kemal Paşa",
    "Abdülhak Şinasi Hisar",
    "İsmail Gaspıralı",
    "Fatma Aliye",
    "Mahmut Öztürk",
    "Kemalettin Tuğcu",
    "Refik Halit Karay",
    "Hasan Ali Yücel",
    "Hakkı Tarık Us",
    "Recep Bilginer",
    "Ali Osman Benli",
    "Turan Gökçe",
    "Tamer Gülbay",
    "Taner Timur",
    "Zeynep Tokuş"
  ]
  
  const foreignAuthors  = [
    "William Shakespeare", "Homer", "Leo Tolstoy", "Fyodor Dostoevsky", "Charles Dickens",
    "Jane Austen", "Virginia Woolf", "Mark Twain", "Ernest Hemingway", "Gabriel García Márquez",
    "Franz Kafka", "Herman Melville", "James Joyce", "George Orwell", "Oscar Wilde",
    "Emily Dickinson", "Sylvia Plath", "J.R.R. Tolkien", "F. Scott Fitzgerald", "Dante Alighieri",
    "H.G. Wells", "Jack London", "John Steinbeck", "William Faulkner", "Aldous Huxley",
    "Ray Bradbury", "J.D. Salinger", "Maya Angelou", "Harper Lee", "Margaret Atwood",
    "Thomas Hardy", "Kurt Vonnegut", "Tennessee Williams", "Vladimir Nabokov", "Ayn Rand",
    "Samuel Beckett", "C.S. Lewis", "John Milton", "Gabriel García Márquez", "Albert Camus",
    "Ralph Waldo Emerson", "Edgar Allan Poe", "Robert Frost", "Langston Hughes", "Charles Baudelaire",
    "William Butler Yeats", "W.B. Yeats", "Soren Kierkegaard", "Dostoevsky", "John Updike",
    "Jack Kerouac", "Anaïs Nin", "Philip K. Dick", "George Bernard Shaw", "Jorge Luis Borges",
    "Isaac Asimov", "C.S. Lewis", "Harlan Ellison", "Boris Pasternak", "Aldous Huxley",
    "Herman Hesse", "Arthur Conan Doyle", "Pablo Neruda", "Mikhail Bulgakov", "Karl Marx",
    "Zadie Smith", "Toni Morrison", "Neil Gaiman", "Douglas Adams", "Haruki Murakami",
    "Chimamanda Ngozi Adichie", "J.K. Rowling", "Ian McEwan", "John Green", "Stephen King",
    "Kurt Vonnegut", "T.S. Eliot", "David Foster Wallace", "Kazuo Ishiguro", "Philip Roth",
    "Don DeLillo", "Martin Amis", "Tom Wolfe", "Marguerite Yourcenar", "V.S. Naipaul",
    "Michel Foucault", "Gustave Flaubert", "John Steinbeck", "Leonard Cohen", "Chuck Palahniuk",
    "Erich Maria Remarque", "Virginia Woolf", "Geoffrey Chaucer", "John Locke", "Voltaire",
    "Albert Einstein", "Sigmund Freud", "Jean-Paul Sartre", "Friedrich Nietzsche", "Emily Brontë",
    "Charlotte Brontë", "Anne Brontë", "Emily Dickinson", "Louisa May Alcott", "Elizabeth Barrett Browning",
    "Gertrude Stein", "William Wordsworth", "Rainer Maria Rilke", "William Blake", "Matthew Arnold",
    "Percy Bysshe Shelley", "Lord Byron", "John Keats", "Gerard Manley Hopkins", "Dylan Thomas",
    "Sylvia Plath", "Ted Hughes", "John Ashbery", "William Carlos Williams", "Frank O'Hara",
    "E.E. Cummings", "Ralph Waldo Emerson", "Walt Whitman", "T.S. Eliot", "Langston Hughes",
    "Rainer Maria Rilke", "Allen Ginsberg", "Jack London", "Emily Dickinson", "A.S. Byatt",
    "Margaret Atwood", "Ian McEwan", "Zadie Smith", "Jonathan Franzen", "J.R.R. Tolkien",
    "Douglas Adams", "Haruki Murakami", "Neil Gaiman", "Philip K. Dick", "Orson Scott Card",
    "Margaret Weis", "Raymond E. Feist", "George R.R. Martin", "Terry Pratchett", "Ursula K. Le Guin",
    "Isaac Asimov", "Arthur C. Clarke", "Philip K. Dick", "Anne Rice", "V.C. Andrews",
    "Edgar Allan Poe", "Stephen King", "Ray Bradbury", "Dan Brown", "J.K. Rowling",
    "George Orwell", "Aldous Huxley", "Margaret Atwood", "Franz Kafka", "H.G. Wells",
    "Clive Barker", "Stephen King", "Dean Koontz", "Anne Rice", "E.L. James",
    "Dan Brown", "John Grisham", "Mary Shelley", "Charles Dickens", "Victor Hugo",
    "Herman Melville", "Leo Tolstoy", "Fyodor Dostoevsky", "Gabriel García Márquez", "Jane Austen",
    "Arthur Conan Doyle", "Emily Brontë", "Charlotte Brontë", "William Shakespeare", "J.R.R. Tolkien",
    "George Bernard Shaw", "Tennessee Williams", "John Steinbeck", "Edgar Allan Poe", "Oscar Wilde",
    "F. Scott Fitzgerald", "Mark Twain", "Charles Dickens", "Hermann Hesse", "Oscar Wilde",
    "Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett", "Elmore Leonard",
    "William S. Burroughs", "Philip K. Dick", "Robert Heinlein", "L. Ron Hubbard", "Ursula K. Le Guin",
    "George Orwell", "Aldous Huxley", "Arthur C. Clarke", "Isaac Asimov", "Ray Bradbury",
    "Frank Herbert", "Robert Silverberg", "Gene Wolfe", "Octavia Butler", "Margaret Atwood",
    "Kim Stanley Robinson", "Philip K. Dick", "H.G. Wells", "Stanislaw Lem", "Raymond E. Feist"
  ]

const literaryTermsAndGenres  = [
    "Biyografi",
    "Edebiyat",
    "Edebiyat Eleştirisi",
    "Edebiyat Tarihi",
    "Edebi Akım",
    "Edebi Tür",
    "Eşleşme (Metafor)",
    "Fabl",
    "Felsefi Edebiyat",
    "Geriye Dönük Anlatım",
    "Görsel Edebiyat",
    "Hikaye",
    "Klasik",
    "Klasik Edebiyat",
    "Kitap",
    "Kitabı",
    "Olay Örgüsü",
    "Olayın Tersine Dönüşü",
    "Olay Zamanı",
    "Parodi",
    "Peripeteia",
    "Poetik",
    "Psikolojik Edebiyat",
    "Romantizm",
    "Sembolizm",
    "Şiirsel Dil",
    "Sosyal Edebiyat",
    "Strüktürel Edebiyat",
    "Süregelik Edebiyat",
    "Tinsel Edebiyat",
    "Toplumsal Gerçekçilik",
    "Tragedya",
    "Türk Edebiyatı",
    "İngiliz Edebiyatı",
    "Rus Edebiyatı",
    "Fransız Edebiyatı",
    "Alman Edebiyatı",
    "Ursus Edebiyatı",
    "Varlık Edebiyatı",
    "Vizyoner Edebiyat",
    "Yalnızlık Edebiyatı",
    "Yerli Edebiyat",
    "Zaman Yolculuğu Edebiyatı",

    // Edebiyat Türleri
    "Felsefi Edebiyat",
    "Gotik Edebiyat",
    "Hikaye",
    "Klasik Edebiyat",
    "Komedi",
    "Mizah",
    "Modernizm",
    "Romantizm",
    "Realizm",
    "Sürükleyici Edebiyat",
    "Şiir",
    "Toplumsal Edebiyat",
    "Tragedya",
    "Utopik Edebiyat",
    "Kısa Hikaye",
    "Efsanevi Edebiyat",
    "Çocuk Edebiyatı",
    "Bilim Kurgu",
    "Fantastik Edebiyat",
    "Biyografik Edebiyat",
    "Mektup Edebiyatı",
    "Edebiyat Eleştirisi",
    "Dünya Edebiyatı"
]

const keywords = WorldLiteratureBooksTurkish.concat(TurkishClassics, foreignAuthors, literaryTermsAndGenres,turkishAuthors)


export default class SummaryPage extends Component {

  
    constructor(props) {
        super(props);
        // state'in başlangıç değerini burada ayarlayabilirsiniz
        this.state = {
            events: [], // events başlangıçta boş
            births: [], // births başlangıçta boş
            deaths: [], // deaths başlangıçta boş
            month : "01",
            day: "01",
            Months : Months
          };
    
        // Fonksiyonun bağlanması
        this.fetchEvents = this.fetchEvents.bind(this);
      }

    fetchEvents = async () => {
            const currentDate = new Date();

            var dayOfMonth = currentDate.getDate();

            if (dayOfMonth < 10)
            {
                dayOfMonth = "0" + dayOfMonth;
            }

            this.state.day = dayOfMonth;

            var monthOfYear = currentDate.getMonth() + 1;
            if (monthOfYear < 10)
            {
                monthOfYear = "0" + monthOfYear;
            }
            this.state.month = monthOfYear;

          const response = await axios.get(
            "https://tr.wikipedia.org/api/rest_v1/feed/onthisday/all/" + monthOfYear + "/"+ dayOfMonth+ "/"
          )
          .then((response) => {
            const data = response.data;
            console.log(data);
            // Gelen veriyi işleyerek state'e kaydediyoruz
            const formattedData = {
              events: data.events
              .filter((event) => keywords.some((keyword) => event.text.includes(keyword))) // keywords'deki herhangi bir kelimeyi içerip içermediğini kontrol ediyoruz
              .map((event) => ({
                text: event.text,
                year: event.year,
                pages: event.pages.map((page) => ({
                  title: page.title,
                })),
              })),
              births: data.births
              .filter((birth) => keywords.some((keyword) => birth.text.includes(keyword))) // Aynı şekilde filter ve map işlemi
              .map((birth) => ({
                text: birth.text,
                year: birth.year,
                pages: birth.pages.map((page) => ({
                  title: page.title,
                })),
              })),
              deaths: data.deaths
              .filter((death) => keywords.some((keyword) => death.text.includes(keyword))) // Aynı şekilde filter ve map işlemi
              .map((death) => ({
                text: death.text,
                year: death.year,
                pages: death.pages.map((page) => ({
                  title: page.title,
                })),
              })),
            };
    

            this.setState(formattedData); // State'i güncelliyoruz
        });
    }

    componentDidMount()
    {
      this.fetchEvents();
    }

    render() {

        return (
            <div>
                 <h1 className="header-title center-align mb-4 mb-4">{this.state.day}-{this.state.Months[this.state.month]} Tarihinde Edebiyatta Yaşanan Olaylar...</h1>
                <hr></hr>
  
                <p className="center-align mb-4 mb-4" style={{color:"white", fontSize:"20px"}}>Bilgiler Vikipedi'den Alınmaktadır.</p>
                    {this.state.events.map((event, index) => (
                        <div className='row' style={{textAlign:"center"}}>

                            <CardGroup className="centered-container">
                                <Col className='card-col'>
                                    <Card key={index} className='summary-card me-1 ms-1' style={{ border: '2px solid white' }}>
                                        <CardText>
                                        {event.text}
                                        </CardText>
                                        <CardFooter>
                                            Yıl:{event.year}
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </CardGroup>                           
                     </div>
                    ))}
            
                  {this.state.births.map((event, index) => (
                        <div className='row' style={{textAlign:"center"}}>

                            <CardGroup className="centered-container">
                                <Col className='card-col'>
                                    <Card key={index} className='summary-card me-1 ms-1' style={{ border: '2px solid white' }}>
                                        <CardText>
                                        {event.text} "-" {event.year} tarihinde doğdu.
                                        </CardText>
                                        <CardFooter>
                                            Yıl:{event.year}
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </CardGroup>                           
                     </div>
                    ))}

        
                    {this.state.deaths.map((event, index) => (
                        <div className='row' style={{textAlign:"center"}}>

                            <CardGroup className="centered-container">
                                <Col className='card-col'>
                                    <Card key={index} className='summary-card me-1 ms-1' style={{ border: '2px solid white' }}>
                                        <CardText>
                                        {event.text} "-" {event.year} tarihinde vefat etti.
                                        </CardText>
                                        <CardFooter>
                                            Yıl:{event.year}
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </CardGroup>                           
                     </div>
                    ))}

            </div>
        )
    }
}

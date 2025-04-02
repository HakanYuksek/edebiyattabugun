import React, { useState } from "react";
import { Input, Button, Form, FormGroup,Row, Col, Card, CardBody, CardTitle, CardText, } from "reactstrap";

export default function DictionarySearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchWord = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`https://sozluk.gov.tr/gts?ara=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleKeyDown = (event) => {

    if (event.key === "enter") {
        event.preventDefault();  // Enter tuşu ile sayfa yenilemesini engelle
      searchWord(); // Enter tuşuna basıldığında arama yap
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchWord();
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 p-4">
      <Form className="d-flex align-items-center gap-2 shadow-sm rounded-2xl p-2 w-50 max-w-md"
              onSubmit={handleFormSubmit}>
                <FormGroup className="flex-grow-1 mb-0">
                    <Input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Kelime ara..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" onClick={searchWord} className="rounded-pill px-4">
                        Ara
                    </Button>
                </FormGroup>
      </Form>

      <p className="center-align mb-4 mb-4" style={{color:"orange"}} >Sonuçlar TDK'dan Alınmaktadır.</p>

      {loading && <p className="mt-4 text-secondary">Aranıyor...</p>}
     
     
      {/* Arama sonuçları */}
      <Row className="mt-4 w-100 justify-content-center">
        {results.length > 0 &&
          results.map((item, index) => (
            <Col key={index} xs="12" sm="12" md="10" lg="8" className="mb-4">
              <Card className="shadow-sm p-3 rounded-lg">
                <CardBody>
                  <CardTitle tag="h5" className="text-dark font-weight-bold">
                    {item.madde}
                  </CardTitle>
                  <CardText className="text-muted">
                    {item.anlamlarListe[0]?.anlam}
                  </CardText>
                  {/* Example sentence if available */}
                  {item.orneklerListe && item.orneklerListe.length > 0 && (
                    <CardText className="text-dark">
                      <strong>Örnek Cümle:</strong> {item.orneklerListe[0]?.ornek}
                    </CardText>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
      
    </div>
  );
}

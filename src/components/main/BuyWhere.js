import React, { useState } from "react";
import {
  Input,
  Button,
  Form,
  FormGroup,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardFooter,
} from "reactstrap";

export default function BuyWhereApp() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchBook = () => {
    if (!query) return;

    const searchLinks = [
      {
        site: "Hepsiburada",
        url: `https://www.hepsiburada.com/ara?q=${encodeURIComponent(query + " kitabı")}`,
        color: "#c49a00",
      },
      {
        site: "Trendyol",
        url: `https://www.trendyol.com/sr?q=${encodeURIComponent(query + " kitabı")}`,
        color: "#e67e22",
      },
      {
        site: "Amazon",
        url: `https://www.amazon.com.tr/s?k=${encodeURIComponent(query + " kitabı")}`,
        color: "#6e6e6e",
      },
      {
        site: "Kitapyurdu",
        url: `https://www.kitapyurdu.com/index.php?route=product/search&filter_name=${encodeURIComponent(query)}`,
        color: "#d32f2f",
      },
    ];

    setResults(searchLinks);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchBook();
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 p-4">
      <Form
        className="d-flex flex-column flex-md-row align-items-center gap-2 shadow-sm rounded-2xl p-2 w-50 max-w-md"
        onSubmit={handleFormSubmit}
      >
        <FormGroup className="flex-grow-1 mb-0">
          <Input
            type="text"
            className="form-control rounded-pill"
            placeholder="Kitap adı girin..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setResults([]);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                searchBook();
              }
            }}
          />
        </FormGroup>
        <FormGroup>
          <Button
            color="primary"
            className="rounded-pill px-4"
            onClick={searchBook}
          >
            Ara
          </Button>
        </FormGroup>
      </Form>

      <p className="center-align mb-4 mt-3" style={{color:"white", fontSize:"20px"}}>
        Arama sonuçları popüler sitelerden alınmaktadır.
      </p>

      <Row className="mt-4 w-100 justify-content-center">
        {results.length > 0 &&
          results.map((item, index) => (
            <Col key={index} xs="12" sm="12" md="10" lg="8" className="mb-4">
              <Card className="shadow-lg rounded-lg border-0 hover-card">
                <div
                  className="card-header font-weight-bold"
                  style={{
                    backgroundColor: item.color,
                    color: "white",
                    fontSize: "1.2rem",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                >
                  {item.site}
                </div>
                <CardBody>
                  <CardText>
                    "{query}" kitabı için {item.site} sitesinde arama yapmak için
                    aşağıdaki butona tıklayabilirsiniz.
                  </CardText>
                </CardBody>
                <CardFooter className="bg-light text-center">
                  <Button
                    color="primary"
                    outline
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.site} sitesinde Ara
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

import React from "react";
import { Container, Card, CardBody, CardHeader, CardText, CardFooter } from "reactstrap";

export default function About() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card 
        className='me-1 ms-1' 
        style={{ 
          border: '4px solid white', 
          width: '90%',        
          maxWidth: '800px',    
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          borderRadius: '12px'
        }}
      >
        <CardHeader 
          className="text-black font-weight-bold text-center mt-0" 
          style={{ color:"red", fontStyle: 'italic', fontSize: "34px" }}
        >
          Hakkında
        </CardHeader>
        <CardBody>
          <CardText style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6" }}>
            Edebiyatla dolu bir yolculuğa hazır mısınız? Bu site, tarihte bugün gerçekleşen önemli edebiyat olaylarını, kitap alıntılarını ve özetlerini hızlı ve kolay şekilde sunmak için hazırlanmıştır. Tamamen ücretsiz ve tutkulu edebiyat severler için tasarlandı.
          </CardText>
          <CardFooter style={{ fontSize: "16px" }}>
            İletişim: edebiyattabugun@gmail.com
          </CardFooter>
        </CardBody>
      </Card>
    </Container>
  );
}

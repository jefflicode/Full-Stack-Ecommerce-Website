import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>                      {/* padding bottom, y-axis */}
                    <Col className='text-center py-3'>
                        CopyRight &copy; Ecommerce Website
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer

import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Моё имя вы знаете, поэтому сразу к сути</Card.Title>
            <Card.Text>
                Я развиваюсь в сфере frontend разработки с большим энтузиазмом.
                Мой маленький <a className='link-info' target='_blank' href='https://scffsz.github.io/portfolio/' rel="noreferrer">сайт-портфолио</a> может рассказать подробнее о моем стеке и опыте.
            </Card.Text>
            <Card.Text>
                Мои основные языки программирования - C# и JS / TypeScript.
                У меня также есть опыт работы с другими технологиями frontend разработки (настройки конфига vite/eslint и пр).
                Я имею представление о backend разработке, что помогает мне лучше понимать взаимодействие между фронтендом и бекэндом.
            </Card.Text>
            <Card.Text>
                Сстремлюсь найти работу в интересной компании, где сотрудничество и взаимодействие с коллегами идут далеко за пределы решения задач.
            </Card.Text>
            <Card.Text>
                С нетерпением жду возможности внести свой вклад в вашу компанию и принять участие в захватывающих проектах.
            </Card.Text>
            <Card.Text className="text-center mt-4">
              <span className="mr-2">
                <a className="link-info" target="_blank" href="https://vk.com/scffs" rel="noreferrer">
                    VK
                </a>
              </span>
              <span className="mx-2">|</span>
              <span className="mx-2">
                <a className="link-info" target="_blank" href="https://github.com/scffs" rel="noreferrer">
                    GitHub
                </a>
              </span>
              <span className="mx-2">|</span>
              <span className="ml-2">
                <a className="link-info" target="_blank" href="https://habr.com/ru/users/scoffs/" rel="noreferrer">
                    Habr
                </a>
              </span>
            </Card.Text>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default About;

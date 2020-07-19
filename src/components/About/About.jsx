import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Краткая история" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Мы заключили договор в августе 2018 года. Нам обещали сдать в ноябре 2018 года. Рассчитались сразу полностью. На сегодняшнее число дом до сих пор не сдан. Я нахожусь в черном списке у Рафаэля, который рассказывает как прекрасно идут дела у компании, также в черном списке у юриста. Соответственно остается только подать в суд. Неустойка, прописанная в договоре, тоже до сих пор не выплачивается. Сайт создал, так как выяснилось, что они всех так кидают, после того как пообщался с соседями, поэтому решил предостеречь остальных.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Если желаете пообщаться со мной, пишите, с удовольствием отвечу.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Задать вопрос
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

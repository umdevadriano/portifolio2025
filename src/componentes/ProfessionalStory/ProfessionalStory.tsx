
import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const Container = styled.section`
  font-family: 'Courier New', Courier, monospace;
  color: #333;
  background: #f0f0f0;
  padding: 24px 32px;
  max-width: 700px;
  margin: 40px auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-right: 3px solid #333;
  white-space: nowrap;
  overflow: hidden;
  width: 18ch;
  animation: ${typewriter} 2.5s steps(18) 1 forwards,
             ${blink} 0.75s step-end infinite;
`;

const Section = styled.div`
  margin-top: 1.6rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
  color: #007acc;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 1rem;
  list-style-type: disc;
`;

const Link = styled.a`
  color: #007acc;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ProfessionalStory() {
  return (
    <Container>
      <Title>Minha Jornada como Desenvolvedor</Title>

      <Paragraph>
        Desde o início da minha trajetória como desenvolvedor, sempre fui movido pela curiosidade e pelo desejo de transformar ideias em soluções reais. Meu GitHub reflete essa caminhada: uma coleção de projetos que resolvem problemas práticos, otimizam processos e demonstram meu comprometimento com a evolução contínua.
      </Paragraph>

      <Section>
        <SectionTitle>🛠️ Projetos Reais, Problemas Reais</SectionTitle>
        <Paragraph>Entre os projetos que mais representam minha jornada estão:</Paragraph>

        <List>
          <li>
            <strong>
              <Link href="https://github.com/umdevadriano/ExcelUploader" target="_blank" rel="noopener noreferrer">
                ExcelUploader
              </Link>
            </strong>
            <br />
            Uma aplicação em Node.js que automatiza o envio e leitura de planilhas Excel para bancos de dados. Desenvolvi esse projeto pensando em facilitar o fluxo de dados em contextos empresariais e administrativos. Aqui, pude aplicar na prática conceitos como:
            <List>
              <li>Manipulação de arquivos <code>.xlsx</code></li>
              <li>Integração com banco de dados</li>
              <li>Upload seguro de arquivos</li>
            </List>
          </li>

          <li>
            <strong>
              <Link href="https://github.com/umdevadriano/pdf_extrator" target="_blank" rel="noopener noreferrer">
                pdf_extrator
              </Link>
            </strong>
            <br />
            Este projeto resolve uma dor muito comum: extrair dados relevantes de PDFs com precisão. Utilizei bibliotecas robustas em Node.js para processar documentos e automatizar o mapeamento de informações estruturadas.
          </li>
        </List>
      </Section>

      <Section>
        <SectionTitle>🌱 Tecnologias e Aprendizado Contínuo</SectionTitle>
        <Paragraph>
          Minha stack principal gira em torno de <strong>JavaScript/Node.js</strong>, mas estou sempre testando novas ferramentas e abordagens. Uso <strong>Express</strong>, manipulação de arquivos com bibliotecas como <code>xlsx</code>, <code>pdf-parse</code> e estou expandindo para aplicações com <strong>React</strong> e bancos de dados como <strong>SQLite</strong> e <strong>MongoDB</strong>.
        </Paragraph>
        <Paragraph>Os projetos também mostram preocupação com:</Paragraph>
        <List>
          <li>Clareza na estrutura de diretórios</li>
          <li>Modularização de código</li>
          <li>Reaproveitamento de componentes e funções</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>📈 Padrão de Contribuição</SectionTitle>
        <Paragraph>
          Minha contribuição é pautada na entrega de soluções funcionais e escaláveis. Prefiro projetos que resolvam um problema concreto e que possam ser utilizados no dia a dia. Além disso, sempre que possível, mantenho os repositórios documentados e com instruções claras de uso.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>🧩 Favoritos que Me Inspiram</SectionTitle>
        <Paragraph>Além dos meus próprios projetos, mantenho uma seleção de repositórios favoritos com foco em:</Paragraph>
        <List>
          <li>Templates de SaaS</li>
          <li>Boas práticas em React e Node</li>
          <li>Repositórios que ensinam com exemplos práticos</li>
        </List>
        <Paragraph>
          Esses favoritos refletem o que busco constantemente: <strong>evoluir como dev, tanto no back-end quanto no front-end, sem perder o foco na experiência do usuário final.</strong>
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>🧠 O Que Me Motiva</SectionTitle>
        <Paragraph>
          Gosto de resolver problemas do mundo real. Desde pequenas automações até ferramentas que impactam um processo maior — como controle de gastos em obras — tudo começa com uma ideia e a vontade de fazer melhor. Tenho como meta desenvolver soluções que possam ajudar tanto uma grande construtora quanto alguém construindo sua própria casa.
        </Paragraph>
      </Section>
    </Container>
  );
}

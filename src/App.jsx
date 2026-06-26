import { useState } from 'react';

const benefits = [
  ['01', 'Eficiência operacional', 'Sistemas para sua rotina, reduzindo tempo de execução e falhas.'],
  ['02', 'Escalabilidade', 'Arquiteturas modernas preparadas para crescer sem perder performance.'],
  ['03', 'Experiência do usuário', 'Interfaces intuitivas para sua equipe trabalhar sem fricção.'],
  ['04', 'Decisões com dados', 'Dashboards e relatórios com informações em tempo real.'],
  ['05', 'Segurança de código', 'Boas práticas para proteger os dados sensíveis da empresa.'],
  ['06', 'Automação completa', 'Fluxos inteligentes e integrações via APIs para reduzir custos.'],
  ['07', 'Modernização de legados', 'Migração de sistemas antigos com mais velocidade e estabilidade.'],
  ['08', 'Retorno sobre investimento', 'Tecnologia focada em economia e novas receitas digitais.'],
];

const services = [
  ['01', 'Landing pages', 'Páginas estratégicas desenvolvidas para apresentar ofertas com clareza, fortalecer o posicionamento da marca e conduzir visitantes à conversão.', 'Estrutura responsiva, carregamento otimizado, formulários de contato e integração com ferramentas de acompanhamento.'],
  ['02', 'Sites institucionais', 'Sites profissionais que traduzem a identidade e a credibilidade da empresa em uma presença digital consistente, acessível e preparada para diferentes dispositivos.', 'Arquitetura de conteúdo, páginas institucionais, canais de contato e fundamentos técnicos para mecanismos de busca.'],
  ['03', 'Sistemas simples', 'Aplicações objetivas para organizar informações, digitalizar rotinas e reduzir tarefas manuais em processos específicos da operação.', 'Painéis administrativos, cadastros, consultas, relatórios e automações desenvolvidos conforme a necessidade do negócio.'],
];

const process = [
  ['Alinhamento estratégico', 'Objetivos, dores do negócio e análise técnica inicial.'],
  ['Arquitetura e escopo', 'Tecnologias, banco de dados, integrações e fluxos.'],
  ['Design de interface', 'Wireframes e layouts com foco em usabilidade.'],
  ['Desenvolvimento ágil', 'Código limpo em ciclos de entrega rápidos.'],
  ['Testes de qualidade', 'Validações de performance, segurança e estabilidade.'],
  ['Integração e deploy', 'Publicação segura no ambiente definitivo.'],
  ['Treinamento e entrega', 'Repasse das funcionalidades para seu time.'],
  ['Manutenção e evolução', 'Suporte, monitoramento e evolução contínua.'],
];

const testimonials = [
  ['Nossa equipe reduziu pela metade o tempo de processamento de pedidos.', 'Diretor de Operações'],
  ['A reestruturação das APIs aumentou a estabilidade da plataforma em 45%.', 'CTO / Tech Lead'],
  ['Uma solução integrada que resolveu gargalos históricos da operação.', 'Gerente de Tecnologia'],
];

const faqs = [
  ['Por que escolher um site personalizado?', 'Ele acompanha os processos da sua empresa, evita recursos desnecessários e oferece independência para evoluir.'],
  ['Como custo e prazo são calculados?', 'A estimativa considera regras de negócio, telas, integrações e volume de dados. Tudo é detalhado antes do início.'],
  ['Eu serei dono do código-fonte?', 'Sim. O código proprietário é transferido após a conclusão e quitação das etapas contratuais.'],
  ['O site já vem otimizado?', 'Sim. Os projetos seguem diretrizes de segurança, arquitetura limpa, consultas eficientes e proteção de dados.'],
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState('idle');

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setFormStatus('sending');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/2b1cfbd52a6ed881eda946a865dae0f6',
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        },
      );

      if (!response.ok) throw new Error('Falha ao enviar formulário');

      form.reset();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  }

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#inicio" aria-label="NDG Sistemas, início">
          <img src="/ndg-hero.png" alt=""/>
          <span className="brandName">NDG <strong>Sistemas</strong></span>
        </a>
        <nav className="navLinks" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#processo">Processo</a><a href="#depoimentos">Resultados</a>
        </nav>
        <a className="headerCta" href="#contato">Solicitar orçamento <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="heroContent">
          <p className="eyebrow">Software sob medida para empresas</p>
          <h1>NDG Sistemas</h1>
          <p className="heroLead">Desenvolvimento de software exclusivo, robusto e pronto para escalar o seu negócio.</p>
          <div className="heroActions">
            <a className="primaryButton" href="#contato">Solicitar orçamento <span>↗</span></a>
            <a className="textLink" href="#solucoes">Conhecer soluções ↓</a>
          </div>
        </div>
        <div className="heroNote"><strong>Estratégia + engenharia</strong><span>Da descoberta ao produto em produção.</span></div>
      </section>

      <section className="intro section">
        <p className="sectionIndex">01 / O desafio</p>
        <div className="introCopy">
          <h2>Seu processo não precisa se adaptar a um software genérico.</h2>
          <div><p>Planilhas travadas e ferramentas desconectadas limitam produtividade, visão e crescimento.</p><p>Eu projeto aplicações dedicadas à sua operação, unindo arquitetura, experiência e resultado.</p></div>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="servicesHeading">
          <p className="sectionIndex">02 / Serviços</p>
          <div>
            <h2>Soluções digitais essenciais, construídas com propósito.</h2>
            <p>Projetos planejados para entregar presença, eficiência e uma base tecnológica adequada ao momento da sua empresa.</p>
          </div>
        </div>
        <div className="serviceList">
          {services.map(([number, title, description, details]) => (
            <article className="serviceItem" key={number}>
              <span className="serviceNumber">{number}</span>
              <h3>{title}</h3>
              <div className="serviceText"><p>{description}</p><small>{details}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions section" id="solucoes">
        <div className="sectionHeading"><p className="sectionIndex">03 / Benefícios</p><h2>Tecnologia que trabalha a favor da operação.</h2></div>
        <div className="benefitGrid">
          {benefits.map(([number, title, text]) => <article className="benefit" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="metrics" aria-label="Indicadores">
        {[['+16', 'anos de experiência'], ['100%', 'projetos entregues no prazo'], ['Alta', 'escalabilidade tecnológica']].map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="process section" id="processo">
        <div className="processIntro"><p className="sectionIndex">04 / Método</p><h2>Clareza em cada etapa, do escopo à evolução.</h2><p>Um processo transparente, com entregas frequentes e decisões conectadas aos objetivos.</p></div>
        <div className="processList">{process.map(([title, text], index) => <article className="processItem" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="testimonials section" id="depoimentos">
        <div className="sectionHeading"><p className="sectionIndex">05 / Resultados</p><h2>Impacto percebido por quem está na operação.</h2></div>
        <div className="testimonialGrid">{testimonials.map(([quote, author]) => <blockquote key={author}><span className="quoteMark">“</span><p>{quote}</p><footer>{author}</footer></blockquote>)}</div>
      </section>

      <section className="faq section">
        <div className="faqIntro"><p className="sectionIndex">06 / FAQ</p><h2>Perguntas frequentes.</h2></div>
        <div className="faqList">{faqs.map(([question, answer], index) => {
          const open = openFaq === index;
          return <article className={`faqItem ${open ? 'open' : ''}`} key={question}><button type="button" onClick={() => setOpenFaq(open ? -1 : index)} aria-expanded={open}><span>{question}</span><strong>{open ? '−' : '+'}</strong></button><div className="faqAnswer"><p>{answer}</p></div></article>;
        })}</div>
      </section>

      <section className="contact section" id="contato">
        <div className="contactCopy"><p className="sectionIndex">07 / Contato</p><h2>Vamos transformar o seu desafio em produto.</h2><p>Conte o que precisa resolver. O primeiro passo é um diagnóstico técnico sem compromisso.</p></div>
        <form className="contactForm" onSubmit={submit}>
          <input type="hidden" name="_subject" value="Novo pedido de orçamento pelo site" />
          <input type="hidden" name="_template" value="table" />
          <label>Nome completo<input name="nome" required placeholder="Seu nome" /></label>
          <label>E-mail corporativo<input name="email" type="email" required placeholder="voce@empresa.com" /></label>
          <label>WhatsApp / telefone<input name="telefone" type="tel" required placeholder="(31) 99999-9999" /></label>
          <label>Sobre o projeto<textarea name="mensagem" rows="4" placeholder="Qual problema você precisa resolver?" /></label>
          <button className="primaryButton" type="submit" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Enviando...' : 'Solicitar proposta'} <span>↗</span>
          </button>
          {formStatus === 'success' && <p className="formSuccess" role="status">Pedido enviado. Em breve entraremos em contato!</p>}
          {formStatus === 'error' && <p className="formError" role="alert">Não foi possível enviar. Tente novamente em instantes.</p>}
        </form>
      </section>

      <footer className="siteFooter"><a className="brand" href="#inicio" aria-label="NDG Sistemas, início"><img src="/ndg-hero.png" alt="" /><span className="brandName">NDG <strong>Sistemas</strong></span></a><p>Desenvolvimento de software & soluções corporativas.</p><span>© 2026 NDG Sistemas</span></footer>
    </main>
  );
}

export default App;

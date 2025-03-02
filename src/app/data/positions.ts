import { Position } from '../models/position';

export const Positions: Position[] = [
  {
    id: 1,
    title: 'Desenvolvedor Frontend Angular',
    location: 'Remoto',
    level: 'Pleno',
    description: 'Responsável pelo desenvolvimento de interfaces modernas e responsivas utilizando Angular 15+. Atuará na implementação de componentes reutilizáveis, integração com APIs RESTful, otimização de performance e implementação de testes automatizados.',
    requirements: [
      'Experiência sólida com Angular 15+',
      'Conhecimento avançado em TypeScript',
      'Experiência com RxJS e Observables',
      'Domínio de HTML5, CSS3 e SCSS',
      'Familiaridade com metodologias ágeis',
      'Conhecimentos em testes unitários (Jasmine/Karma)'
    ]
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    location: 'Híbrido - São Paulo',
    level: 'Sênior',
    description: 'Liderar a implementação e manutenção de pipelines de CI/CD, gerenciar infraestrutura em ambientes cloud (AWS/Azure), e automatizar processos de build, teste e deploy. Será responsável por monitoramento, troubleshooting e otimização de sistemas.',
    requirements: [
      'Experiência com Docker e Kubernetes',
      'Conhecimento em Terraform ou CloudFormation',
      'Experiência com Jenkins, GitLab CI ou Azure DevOps',
      'Familiaridade com monitoramento (Prometheus, Grafana)',
      'Conhecimentos em segurança de aplicações',
      'Experiência com Linux/Unix'
    ]
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    location: 'Remoto',
    level: 'Júnior',
    description: 'Criar experiências digitais intuitivas através da elaboração de wireframes, protótipos interativos e fluxos de usuário. Participará da realização de pesquisas com usuários, definição de personas e jornadas.',
    requirements: [
      'Conhecimento em Figma e Adobe XD',
      'Noções de princípios de design centrado no usuário',
      'Habilidade para criar wireframes e protótipos',
      'Conhecimento básico de HTML/CSS é um diferencial',
      'Boa comunicação e trabalho em equipe'
    ]
  },
  {
    id: 4,
    title: 'Desenvolvedor Backend Java',
    location: 'Híbrido - Rio de Janeiro',
    level: 'Sênior',
    description: 'Desenvolvimento e manutenção de aplicações robustas com Java Spring Boot. O profissional será responsável por implementar microsserviços escaláveis, garantir a segurança e performance das APIs, e colaborar com times multifuncionais.',
    requirements: [
      'Experiência sólida em Java 11+ e Spring Boot',
      'Conhecimento em arquitetura de microsserviços',
      'Domínio de bancos de dados SQL e NoSQL',
      'Experiência com JPA/Hibernate',
      'Conhecimento em sistemas de mensageria (Kafka/RabbitMQ)',
      'Experiência com testes unitários e de integração'
    ]
  },
  {
    id: 5,
    title: 'Especialista em Segurança da Informação',
    location: 'Híbrido - São Paulo',
    level: 'Pleno/Sênior',
    description: 'Implementação e gestão de práticas de segurança da informação, análise de vulnerabilidades e incidentes. O profissional atuará na criação de políticas de segurança, testes de penetração e garantia de conformidade com regulamentações como LGPD.',
    requirements: [
      'Certificações relevantes (CISSP, CEH, OSCP)',
      'Experiência em análise de vulnerabilidades',
      'Conhecimento em ferramentas de segurança (Nessus, Metasploit)',
      'Familiaridade com OWASP Top 10',
      'Experiência com segurança em ambientes cloud',
      'Conhecimento em ISO 27001 e LGPD'
    ]
  },
  {
    id: 6,
    title: 'Cientista de Dados',
    location: 'Remoto',
    level: 'Pleno',
    description: 'Analisar e interpretar grandes volumes de dados para extração de insights estratégicos. Desenvolvimento de modelos preditivos e visualizações para apoio na tomada de decisões. Atuará com equipes de negócios e tecnologia.',
    requirements: [
      'Domínio de Python e suas bibliotecas (pandas, numpy, scikit-learn)',
      'Experiência com técnicas de machine learning',
      'Conhecimento de SQL e bancos NoSQL',
      'Familiaridade com ferramentas de visualização (Power BI, Tableau)',
      'Experiência com processamento de grandes volumes de dados',
      'Conhecimentos estatísticos avançados'
    ]
  },
  {
    id: 7,
    title: 'Gerente de Projetos de TI',
    location: 'Híbrido - São Paulo',
    level: 'Sênior',
    description: 'Responsável pelo planejamento, execução e monitoramento de projetos de tecnologia. Liderará equipes multidisciplinares, gerenciará recursos, orçamentos e cronogramas, garantindo a entrega com qualidade e dentro do prazo.',
    requirements: [
      'Certificação PMP ou metodologias ágeis (CSM, CSPO)',
      'Experiência em gestão de projetos de TI (mínimo 5 anos)',
      'Conhecimento de ferramentas como JIRA, MS Project ou similar',
      'Excelentes habilidades de comunicação e liderança',
      'Experiência em gestão de stakeholders',
      'Conhecimento em metodologias ágeis e tradicionais'
    ]
  },
  {
    id: 8,
    title: 'Desenvolvedor Mobile Flutter',
    location: 'Remoto',
    level: 'Pleno',
    description: 'Desenvolvimento de aplicativos multiplataforma (iOS e Android) utilizando Flutter. Atuará na criação de interfaces responsivas, integração com APIs, implementação de funcionalidades e otimização de performance.',
    requirements: [
      'Experiência comprovada com Flutter e Dart',
      'Conhecimento do ecossistema de desenvolvimento mobile',
      'Experiência com consumo de APIs RESTful',
      'Conhecimento em gerenciamento de estado (BLoC, Provider, MobX)',
      'Familiaridade com publicação em lojas de aplicativos',
      'Noções de UI/UX para mobile'
    ]
  },
  {
    id: 9,
    title: 'Arquiteto de Soluções Cloud',
    location: 'Híbrido - São Paulo',
    level: 'Sênior',
    description: 'Desenho e implementação de arquiteturas cloud nativas, escaláveis e resilientes. Responsável pela definição de estratégias de migração para a nuvem, otimização de custos e governança.',
    requirements: [
      'Certificações em provedores cloud (AWS, Azure ou GCP)',
      'Experiência em arquitetura de sistemas distribuídos',
      'Conhecimento avançado em container e orquestração (Docker, Kubernetes)',
      'Experiência com IaC (Terraform, CloudFormation)',
      'Conhecimento em segurança e compliance em ambientes cloud',
      'Experiência com arquiteturas serverless'
    ]
  },
  {
    id: 10,
    title: 'Engenheiro de Machine Learning',
    location: 'Remoto',
    level: 'Pleno/Sênior',
    description: 'Desenvolvimento e implementação de modelos de machine learning em produção. Responsável pelo ciclo completo, desde o preprocessamento de dados até o deploy de modelos em ambientes de produção escaláveis.',
    requirements: [
      'Forte conhecimento em algoritmos de machine learning',
      'Experiência com frameworks como TensorFlow, PyTorch ou similares',
      'Domínio de Python e suas bibliotecas para ciência de dados',
      'Experiência com MLOps e ferramentas como MLflow, Kubeflow',
      'Conhecimento em processamento distribuído de dados',
      'Capacidade de trabalhar com problemas complexos e não estruturados'
    ]
  },
  {
    id: 11,
    title: 'Analista de Business Intelligence',
    location: 'Híbrido - Rio de Janeiro',
    level: 'Pleno',
    description: 'Análise e transformação de dados em insights de negócio. Desenvolvimento de dashboards e relatórios para suporte à tomada de decisão. Atuação próxima às áreas de negócio para entendimento de necessidades e métricas relevantes.',
    requirements: [
      'Experiência com ferramentas de BI (Power BI, Tableau, Looker)',
      'Conhecimento avançado em SQL',
      'Experiência com ETL e modelagem de dados',
      'Compreensão de conceitos de negócios e métricas-chave',
      'Capacidade analítica e atenção aos detalhes',
      'Boa comunicação para apresentação de resultados'
    ]
  },
  {
    id: 12,
    title: 'QA Automation Engineer',
    location: 'Remoto',
    level: 'Pleno',
    description: 'Elaboração e execução de estratégias de testes automatizados para garantir a qualidade do software. Criação de frameworks de automação, implementação de testes de regressão, performance e integração.',
    requirements: [
      'Experiência com ferramentas como Selenium, Cypress, Playwright',
      'Conhecimento em linguagens como JavaScript, Python ou Java',
      'Experiência com metodologias ágeis e TDD/BDD',
      'Conhecimento em CI/CD para integração de testes',
      'Experiência com testes de API (Postman, RestAssured)',
      'Capacidade de documentar casos de teste e resultados'
    ]
  },
  {
    id: 13,
    title: 'SRE (Site Reliability Engineer)',
    location: 'Híbrido - São Paulo',
    level: 'Pleno/Sênior',
    description: 'Garantir a confiabilidade, escalabilidade e performance de sistemas em produção. Atuação na automação de processos operacionais, monitoramento proativo, análise e resolução de incidentes.',
    requirements: [
      'Experiência com sistemas Linux e scripting',
      'Conhecimento em ferramentas de monitoramento (Prometheus, Grafana)',
      'Experiência com automação e IaC',
      'Conhecimento de práticas DevOps e SRE',
      'Experiência com cloud (AWS, Azure, GCP)',
      'Capacidade de atuar em incidentes de produção e on-call'
    ]
  }
];

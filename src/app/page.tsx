"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { CheckCircle, Leaf, Sparkles, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="large"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Início",          id: "#hero"},
        {
          name: "Serviços",          id: "#servicos"},
        {
          name: "Diferenciais",          id: "#diferenciais"},
        {
          name: "Estética",          id: "#estetica"},
        {
          name: "Depoimentos",          id: "#depoimentos"},
        {
          name: "Galeria",          id: "#galeria"},
        {
          name: "Contato",          id: "#contato"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/wet-glass-texture-background_557339-1033.jpg"
      logoAlt="Lava Rápido Sensacional Bar Logo"
      brandName="Lava Rápido Sensacional Bar"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain"}}
      imagePosition="right"
      title="Seu carro merece um tratamento premium."
      description="Qualidade, cuidado e acabamento impecável para deixar seu veículo sempre brilhando."
      tag="Qualidade, Cuidado e Atendimento Rápido"
      tagIcon={CheckCircle}
      buttons={[
        {
          text: "Agendar pelo WhatsApp",          href: "https://wa.me/5511947352145"},
        {
          text: "Ver Localização",          href: "#contato"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/closeup-shot-exterior-details-modern-black-car_181624-23579.jpg"
      videoSrc="http://img.b2bpic.net/free-photo/closeup-shot-soap-water-glass-window_181624-4201.jpg"
      imageAlt="Luxury car wash in progress"
      mediaAnimation="blur-reveal"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/front-view-man-holding-wrench_23-2148270710.jpg",          alt: "Cliente satisfeito 1"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-blonde-woman-siting-car_23-2148384908.jpg",          alt: "Cliente satisfeita 2"},
        {
          src: "http://img.b2bpic.net/free-photo/man-buying-car-showroom_1303-14589.jpg",          alt: "Cliente feliz 3"},
        {
          src: "http://img.b2bpic.net/free-photo/handsome-man-showing-thumb-up-while-buying-car-salon_7502-9630.jpg",          alt: "Cliente satisfeito 4"},
        {
          src: "http://img.b2bpic.net/free-photo/charming-pleased-satisfied-amused-male-with-beard-glasses-black-beanie-smiling-joyfully-showing-thumbs-up-like-gesture_176420-23561.jpg",          alt: "Cliente feliz 5"},
      ]}
      avatarText="Mais de 4.7k clientes satisfeitos"
      marqueeItems={[
        {
          type: "text-icon",          text: "Brilho Impecável",          icon: Sparkles,
        },
        {
          type: "text-icon",          text: "Atendimento Personalizado",          icon: Users,
        },
        {
          type: "text-icon",          text: "Produtos de Alta Qualidade",          icon: CheckCircle,
        },
        {
          type: "text-icon",          text: "Rapidez e Eficiência",          icon: Zap,
        },
        {
          type: "text-icon",          text: "Sustentabilidade no Cuidado",          icon: Leaf,
        },
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="servicos" data-section="servicos">
      <ProductCardFour
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="blur-reveal"
      products={[
        {
          id: "lavagem-completa",          name: "Lavagem Completa",          price: "Consulte-nos",          variant: "Limpeza profunda interior e exterior, com aspiração e hidratação.",          imageSrc: "http://img.b2bpic.net/free-photo/man-cleaning-his-car-self-service_329181-11843.jpg",          imageAlt: "Lavagem Completa de carro"},
        {
          id: "lavagem-detalhada",          name: "Lavagem Detalhada",          price: "Consulte-nos",          variant: "Foco nos mínimos detalhes, remoção de sujeiras incrustadas e acabamento manual.",          imageSrc: "http://img.b2bpic.net/free-photo/bright-blue-foam-dark-water_23-2147798313.jpg",          imageAlt: "Lavagem Detalhada de carro"},
        {
          id: "higienizacao-interna",          name: "Higienização Interna",          price: "Consulte-nos",          variant: "Eliminação de odores e bactérias, limpeza de estofados e revitalização de plásticos.",          imageSrc: "http://img.b2bpic.net/free-photo/man-vacuuming-car-seats_23-2149316438.jpg",          imageAlt: "Higienização Interna de carro"},
        {
          id: "limpeza-bancos",          name: "Limpeza de Bancos",          price: "Consulte-nos",          variant: "Remoção de manchas e sujeiras, com produtos específicos para cada tipo de tecido ou couro.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193615.jpg",          imageAlt: "Limpeza de Bancos de carro"},
        {
          id: "enceramento",          name: "Enceramento",          price: "Consulte-nos",          variant: "Proteção e brilho intenso para a pintura, com ceras de alta durabilidade.",          imageSrc: "http://img.b2bpic.net/free-photo/man-polishing-car-with-orbital-applicator_1303-30572.jpg",          imageAlt: "Enceramento de carro"},
        {
          id: "polimento",          name: "Polimento",          price: "Consulte-nos",          variant: "Restauração da pintura, remoção de riscos superficiais e imperfeições, devolvendo o brilho original.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193581.jpg",          imageAlt: "Polimento de carro"},
        {
          id: "cristalizacao",          name: "Cristalização",          price: "Consulte-nos",          variant: "Proteção avançada para a pintura, criando uma camada de brilho e resistência contra agentes externos.",          imageSrc: "http://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342625.jpg",          imageAlt: "Cristalização de carro"},
        {
          id: "cuidados-esteticos",          name: "Cuidados Estéticos Automotivos",          price: "Consulte-nos",          variant: "Serviços especializados para cada detalhe do seu veículo, garantindo um visual impecável.",          imageSrc: "http://img.b2bpic.net/free-photo/male-make-up-artist-putting-make-up-himself_23-2150166155.jpg",          imageAlt: "Cuidados Estéticos Automotivos"},
      ]}
      title="Nossos Serviços Premium"
      description="Explore a gama completa de cuidados automotivos que oferecemos, garantindo que seu veículo receba o melhor tratamento."
    />
  </div>

  <div id="diferenciais" data-section="diferenciais">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Por que escolher o Sensacional Bar?"
      description="Nosso compromisso com a excelência e a paixão por carros nos diferenciam. Veja o que fazemos para garantir sua satisfação e o brilho que seu veículo merece."
      metrics={[
        {
          value: "4.7k+",          title: "Avaliações Positivas"},
        {
          value: "10+",          title: "Anos de Experiência"},
        {
          value: "100%",          title: "Satisfação Garantida"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-man-selfcare-products_23-2149313067.jpg"
      imageAlt="Specialized team working on a car"
      mediaAnimation="blur-reveal"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="estetica" data-section="estetica">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Cuidado e Estética Automotiva de Alta Performance"
      description="Nossos serviços de estética automotiva vão além da limpeza, garantindo a proteção e o brilho duradouro que seu veículo merece com técnicas e produtos de ponta."
      accordionItems={[
        {
          id: "1",          title: "Proteção de Pintura",          content: "Aplicação de ceras e selantes de alta performance para proteger a pintura contra arranhões, raios UV e intempéries, mantendo o brilho por mais tempo."},
        {
          id: "2",          title: "Detalhes Internos Premium",          content: "Limpeza e hidratação de couros, revitalização de plásticos e aspiração profunda com produtos específicos para um interior impecável e perfumado."},
        {
          id: "3",          title: "Revitalização de Faróis",          content: "Restauração da transparência dos faróis para melhorar significativamente a visibilidade noturna e a estética frontal do seu veículo, com garantia de durabilidade."},
        {
          id: "4",          title: "Higienização de Ar Condicionado",          content: "Eliminação de fungos, bactérias e maus odores do sistema de ar condicionado, proporcionando um ambiente interno mais puro, saudável e agradável."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-person-cleaning-car-exterior_23-2148194141.jpg"
      imageAlt="Car detailing tools and professional applying wax"
      videoAriaLabel="Video of car detailing"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
    />
  </div>

  <div id="depoimentos" data-section="depoimentos">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Fernanda Lima",          imageSrc: "http://img.b2bpic.net/free-photo/man-checking-out-new-car_23-2148130139.jpg",          imageAlt: "Cliente Fernanda Lima"
        },
        {
          id: "2",          name: "Ricardo Mendes",          imageSrc: "http://img.b2bpic.net/free-photo/happy-beautiful-brunette-woman-holding-car-keys-front-new-vehicle-automobile-dealership-showroom_342744-741.jpg",          imageAlt: "Cliente Ricardo Mendes"
        },
        {
          id: "3",          name: "Mariana Costa",          imageSrc: "http://img.b2bpic.net/free-photo/young-family-buying-car_1303-13742.jpg",          imageAlt: "Cliente Mariana Costa"
        },
        {
          id: "4",          name: "Bruno Santos",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-customer-car-dealership_23-2149117120.jpg",          imageAlt: "Cliente Bruno Santos"
        },
        {
          id: "5",          name: "Patrícia Gomes",          imageSrc: "http://img.b2bpic.net/free-photo/happy-black-mechanic-taking-notes-while-talking-customer-auto-repair-shop_637285-11587.jpg",          imageAlt: "Cliente Patrícia Gomes"
        },
        {
          id: "6",          name: "Felipe Oliveira",          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-greeting-their-mechanic-auto-repair-shop_637285-8674.jpg",          imageAlt: "Cliente Felipe Oliveira"
        },
      ]}
      cardTitle="O que nossos clientes dizem"
      cardTag="Experiências Sensacionais"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="galeria" data-section="galeria">
      <BlogCardTwo
      textboxLayout="default"
      useInvertedBackground={false}
      title="Nossa Galeria de Transformações"
      description="Veja o antes e depois, o cuidado com os detalhes e o brilho que entregamos em cada veículo que passa por nossas mãos. Qualidade visível em cada imagem."
      blogs={[
        {
          id: "galeria-1",          category: "Antes e Depois",          title: "Revitalização Completa",          excerpt: "Um carro transformado do estado sujo para um brilho impecável.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-opening-hood-car_23-2148266240.jpg",          imageAlt: "Carro sujo antes da lavagem",          authorName: "Equipe Sensacional",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-man-holding-wrench_23-2148270710.jpg",          date: "2024-07-20"
        },
        {
          id: "galeria-2",          category: "Antes e Depois",          title: "Brilho Espelhado",          excerpt: "O mesmo carro, agora com uma pintura cristalina e reflexiva.",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-headlights-gray-car-with-man_158538-8150.jpg",          imageAlt: "Carro limpo e brilhante após a lavagem",          authorName: "Equipe Sensacional",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-man-holding-wrench_23-2148270710.jpg",          date: "2024-07-20"
        },
        {
          id: "galeria-3",          category: "Detalhes Internos",          title: "Interior Renovado",          excerpt: "A transformação de um interior desgastado para um ambiente limpo e higienizado.",          imageSrc: "http://img.b2bpic.net/free-photo/cushion-modern-car_1339-5502.jpg",          imageAlt: "Interior de carro sujo",          authorName: "Equipe Sensacional",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-man-holding-wrench_23-2148270710.jpg",          date: "2024-07-20"
        },
        {
          id: "galeria-4",          category: "Detalhes Internos",          title: "Conforto e Limpeza",          excerpt: "Bancos e painel restaurados, proporcionando uma nova experiência ao dirigir.",          imageSrc: "http://img.b2bpic.net/free-photo/car-transmission-inside-car-salon-close-up_1303-19223.jpg",          imageAlt: "Interior de carro limpo e organizado",          authorName: "Equipe Sensacional",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-man-holding-wrench_23-2148270710.jpg",          date: "2024-07-20"
        },
        {
          id: "galeria-5",          category: "Veículos Premium",          title: "Luxo Restaurado",          excerpt: "Um veículo de luxo recebendo o tratamento premium que merece, com cada detalhe valorizado.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sexy-fashion-blond-girl-model-with-bright-makeup-curly-hairstyle-retro-style-sitting-old-car_158538-9269.jpg",          imageAlt: "Carro premium limpo e brilhante",          authorName: "Equipe Sensacional",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-man-holding-wrench_23-2148270710.jpg",          date: "2024-07-20"
        },
        {
          id: "galeria-6",          category: "Acabamento Final",          title: "Toque de Mestre",          excerpt: "O brilho final e a proteção duradoura, evidenciando a paixão por cada carro.",          imageSrc: "http://img.b2bpic.net/free-photo/man-s-hand-is-cleaning-waxing-car_1150-6099.jpg",          imageAlt: "Detalhe do acabamento de pintura do carro",          authorName: "Equipe Sensacional",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-man-holding-wrench_23-2148270710.jpg",          date: "2024-07-20"
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Confiabilidade",        "Qualidade Superior",        "Atendimento Excepcional",        "Resultados Impecáveis",        "Valor Incomparável",        "Satisfação Garantida",        "Recomendado por Clientes"]}
      title="A Confiança de Milhares de Clientes"
      description="Mais de 4.700 avaliações positivas em diversas plataformas atestam a qualidade, o profissionalismo e a dedicação do Lava Rápido Sensacional Bar. Nosso compromisso é com a sua satisfação e com o cuidado impecável do seu veículo."
      tag="Reconhecimento"
      speed={30}
      showCard={true}
    />
  </div>

  <div id="contato" data-section="contato">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Fale Conosco"
      title="Deixe seu carro com aparência de novo."
      description="Entre em contato agora e agende seu atendimento no Lava Rápido Sensacional Bar. Estamos convenientemente localizados para servi-lo com excelência."
      buttons={[
        {
          text: "Falar no WhatsApp",          href: "https://wa.me/5511947352145"},
        {
          text: "Traçar Rota",          href: "https://www.google.com/maps/dir/?api=1&destination=Rua+Eugênia+de+Carvalho,+1155,+Vila+Matilde,+São+Paulo"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Serviços",          items: [
            {
              label: "Lavagem Completa",              href: "#servicos"},
            {
              label: "Polimento",              href: "#servicos"},
            {
              label: "Cristalização",              href: "#servicos"},
            {
              label: "Estética Automotiva",              href: "#estetica"},
          ],
        },
        {
          title: "Contato",          items: [
            {
              label: "Telefone: (11) 94735-2145",              href: "tel:+5511947352145"},
            {
              label: "WhatsApp",              href: "https://wa.me/5511947352145"},
            {
              label: "Endereço: Rua Eugênia de Carvalho, 1155",              href: "https://www.google.com/maps/place/Rua+Eugênia+de+Carvalho,+1155"},
            {
              label: "Vila Matilde – São Paulo/SP",              href: "https://www.google.com/maps/place/Rua+Eugênia+de+Carvalho,+1155"},
          ],
        },
        {
          title: "Horários",          items: [
            {
              label: "Segunda-feira: 12:00 às 17:30",              href: "#"},
            {
              label: "Terça-feira: 12:00 às 17:30",              href: "#"},
            {
              label: "Quarta-feira: 12:00 às 17:30",              href: "#"},
            {
              label: "Quinta-feira: 12:00 às 17:30",              href: "#"},
            {
              label: "Sexta-feira: 12:00 às 17:30",              href: "#"},
            {
              label: "Sábado: 12:00 às 16:00",              href: "#"},
            {
              label: "Domingo: Fechado",              href: "#"},
          ],
        },
        {
          title: "Redes Sociais",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Facebook",              href: "#"},
          ],
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/wet-glass-texture-background_557339-1033.jpg"
      logoText="Lava Rápido Sensacional Bar"
      copyrightText="© 2024 Lava Rápido Sensacional Bar. Todos os direitos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

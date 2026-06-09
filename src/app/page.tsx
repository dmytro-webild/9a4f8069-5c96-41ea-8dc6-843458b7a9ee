"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";

import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
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
          name: "Contato",          id: "#contato"}
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
          text: "Ver Localização",          href: "#contato"}
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
          src: "http://img.b2bpic.net/free-photo/charming-pleased-satisfied-amused-male-with-beard-glasses-black-beanie-smiling-joyfully-showing-thumbs-up-like-gesture_176420-23561.jpg",          alt: "Cliente feliz 5"}
      ]}
      avatarText="Mais de 4.7k clientes satisfeitos"
      marqueeItems={[
        {
          type: "text-icon",          text: "Brilho Impecável",          icon: Sparkles
        },
        {
          type: "text-icon",          text: "Atendimento Personalizado",          icon: Users
        },
        {
          type: "text-icon",          text: "Produtos de Alta Qualidade",          icon: CheckCircle
        },
        {
          type: "text-icon",          text: "Rapidez e Eficiência",          icon: Zap
        },
        {
          type: "text-icon",          text: "Sustentabilidade no Cuidado",          icon: Leaf
        }
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
          id: "lavagem-simples",          name: "Lavagem Simples",          price: "Preço sob consulta",          variant: "Limpeza básica exterior para o dia a dia.",          imageSrc: "http://img.b2bpic.net/free-photo/man-cleaning-his-car-self-service_329181-11843.jpg",          imageAlt: "Lavagem Simples de carro"},
        {
          id: "lavagem-completa",          name: "Lavagem Completa",          price: "Preço sob consulta",          variant: "Limpeza profunda exterior e interior, com aspiração.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-washing-car_23-2148194125.jpg",          imageAlt: "Lavagem Completa de carro"},
        {
          id: "lavagem-interna",          name: "Lavagem Interna",          price: "Preço sob consulta",          variant: "Foco na limpeza, aspiração e higienização do interior do veículo.",          imageSrc: "http://img.b2bpic.net/free-photo/man-vacuuming-car-seats_23-2149316438.jpg",          imageAlt: "Lavagem Interna de carro"},
        {
          id: "lavagem-externa",          name: "Lavagem Externa",          price: "Preço sob consulta",          variant: "Foco na lavagem, enceramento e brilho da carroceria.",          imageSrc: "http://img.b2bpic.net/free-photo/bright-blue-foam-dark-water_23-2147798313.jpg",          imageAlt: "Lavagem Externa de carro"}
      ]}
      title="Nossos Serviços de Lavagem"
      description="Oferecemos uma variedade de serviços de lavagem para atender às necessidades do seu veículo, garantindo limpeza e brilho."
      buttons={[
        {
          text: "Consultar",          href: "https://wa.me/5511947352145"}
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Confiabilidade",        "Qualidade Superior",        "Atendimento Excepcional",        "Resultados Impecáveis",        "Valor Incomparável",        "Satisfação Garantida",        "Recomendado por Clientes"      ]}
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
          text: "Traçar Rota",          href: "https://www.google.com/maps/dir/?api=1&destination=Rua+Eugênia+de+Carvalho,+1155,+Vila+Matilde,+São+Paulo"}
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Serviços",          items: [
            {
              label: "Lavagem Simples",              href: "#servicos"},
            {
              label: "Lavagem Completa",              href: "#servicos"},
            {
              label: "Lavagem Interna",              href: "#servicos"},
            {
              label: "Lavagem Externa",              href: "#servicos"}
          ]
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
              label: "Vila Matilde – São Paulo/SP",              href: "https://www.google.com/maps/place/Rua+Eugênia+de+Carvalho,+1155"}
          ]
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
              label: "Domingo: Fechado",              href: "#"}
          ]
        },
        {
          title: "Redes Sociais",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Facebook",              href: "#"}
          ]
        }
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

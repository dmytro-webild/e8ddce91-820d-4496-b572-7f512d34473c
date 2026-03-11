"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Mail, Scissors, Sparkles, Star, Users, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeLargeTitles"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "A Experiência", id: "experience" },
            { name: "Serviços", id: "services" },
            { name: "Contato", id: "contact" },
            { name: "Agendar", id: "booking" }
          ]}
          brandName="Beard Bastards"
          bottomLeftText="Leiria, Portugal"
          bottomRightText="hello@beardbastards.pt"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="MAIS DO QUE UM CORTE. UM RITUAL."
          description="A melhor barbearia de Leiria. Ambiente impecável, cerveja gelada e o corte que tu mereces. Aqui, cada detalhe importa. Desde a navalha que toca a tua pele até ao aperto de mão no final. Bem-vindo a Beard Bastards."
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "5.0", label: "Avaliação Google" },
            { value: "500+", label: "Clientes Satisfeitos" },
            { value: "10+", label: "Anos de Experiência" }
          ]}
          enableKpiAnimation={true}
          tag="Luxo Badass"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "AGENDAR O MEU CORTE", href: "https://booksy.com" },
            { text: "Saber Mais", href: "#experience" }
          ]}
          buttonAnimation="slide-up"
          mediaAnimation="opacity"
          imageSrc="http://img.b2bpic.net/free-photo/confident-young-indian-man-black-shirt-sitting-cafe_627829-5481.jpg"
          imageAlt="Barbershop Experience"
          imagePosition="right"
        />
      </div>

      <div id="experience" data-section="experience">
        <MetricSplitMediaAbout
          title="A Experiência Beard Bastards"
          description="Não é apenas um corte de cabelo. É uma imersão numa atmosfera de requinte, conforto e autenticidade. Os nossos clientes vêm pela técnica impecável do Luís e do Bernardo, mas voltam pela vibe inigualável do espaço."
          tag="A Nossa Vibe"
          tagIcon={Zap}
          tagAnimation="slide-up"
          metrics={[
            { value: "Profissionalismo & Arte", title: "Técnica impecável em cada detalhe" },
            { value: "Conforto Premium", title: "Sofás, cerveja e boa música" }
          ]}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-drinks-coffee-barbershop_613910-14697.jpg"
          imageAlt="Barbershop Interior"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardEight
          title="Os Nossos Serviços"
          description="Cada serviço é executado com precisão cirúrgica e paixão genuína. Nenhum corte é igual porque tu não és igual a ninguém."
          tag="Serviços Premium"
          tagIcon={Scissors}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Corte à Tesoura",              description: "Técnica clássica com acabamento impecável. Perfeito para quem quer um corte personalizado e detalhado.",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-drinks-coffee-barbershop_613910-14697.jpg",              imageAlt: "Corte à Tesoura"
            },
            {
              id: 2,
              title: "Buzz Cut",              description: "Limpeza total com máquina de precisão. Rápido, preciso e sempre perfeito. Ideal para manutenção regular.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-working-beer-factory_23-2150573936.jpg",              imageAlt: "Buzz Cut"
            },
            {
              id: 3,
              title: "Barba à Navalha",              description: "A arte clássica de bem receber. Navalha afiada, toalha quente e um toque de luxo que só nós sabemos dar.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-posing-with-sunglasses-motorbike_158595-3304.jpg",              imageAlt: "Barba à Navalha"
            },
            {
              id: 4,
              title: "Trim & Styling",              description: "Manutenção de barba e cabelo com produtos premium. Saias daqui pronto para conquistar o mundo.",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-drinks-coffee-barbershop_613910-14697.jpg",              imageAlt: "Trim & Styling"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          buttons={[
            { text: "MARCAR AGORA", href: "https://booksy.com" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="O Muro da Fama"
          description="Centenas de avaliações de 5 estrelas no Google. Os próprios clientes contam melhor do que nós."
          tag="Prova Social"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              title: "O Patrão é uma Máquina",              quote: "Corte e barba 5 estrelas e rápido. O Luís sabe exatamente o que faz. Sempre perfeito.",              name: "Alexandre R.",              role: "Cliente Regular",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-young-woman-wearing-life-jacket_23-2147562086.jpg",              imageAlt: "Alexandre R"
            },
            {
              id: "2",              title: "A Verdadeira Arte de Bem Receber",              quote: "Serviço personalizado e atenção ao detalhe. Não é só um corte, é uma experiência completa.",              name: "Renato N.",              role: "Cliente Fiel",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",              imageAlt: "Renato N"
            },
            {
              id: "3",              title: "Vim de Espanha de Propósito",              quote: "Sim, viajei de Espanha de propósito para cortar aqui. Brutal! Voltarei.",              name: "Andrey M.",              role: "Viajante",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-positive-man_23-2148012215.jpg",              imageAlt: "Andrey M"
            },
            {
              id: "4",              title: "Barbeiro Feio, Trabalho Incrível",              quote: "O Bernardo é feio mas incrível no trabalho que faz. A melhor barbearia de Leiria, sem dúvida.",              name: "Pedro S.",              role: "Cliente Habitual",              imageSrc: "http://img.b2bpic.net/free-photo/shallow-focus-shot-smiling-white-caucasian-male_181624-29344.jpg",              imageAlt: "Pedro S"
            },
            {
              id: "5",              title: "Ambiente Perfeito",              quote: "Boa música, sofás confortáveis, cerveja gelada e um corte de arte. Isto é o que chamo de barbearia premium.",              name: "João C.",              role: "Cliente Premium",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-young-woman-wearing-life-jacket_23-2147562086.jpg",              imageAlt: "João C"
            },
            {
              id: "6",              title: "A Mota é Incrível",              quote: "A mota na decoração, a vibe, o profissionalismo. Tudo. Recomendo a todos os meus amigos.",              name: "Marco T.",              role: "Amigo da Causa",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",              imageAlt: "Marco T"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          title="Conhece os Mestres"
          description="Por trás de cada corte perfeito, há duas máquinas. Luís e Bernardo. Técnica, paixão e dedicação são a assinatura deles."
          tag="O Talento"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          team={[
            {
              id: "1",              name: "Luís",              role: "Mestre Barbeiro & Fundador",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-barber-wearing-uniform-trimming-his-beard-with-hair-clippers-isolated-green-background-with-copy-space_141793-85020.jpg",              imageAlt: "Luís - Mestre Barbeiro"
            },
            {
              id: "2",              name: "Bernardo",              role: "Artista & Especialista em Barba",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-posing-chair_23-2149518251.jpg",              imageAlt: "Bernardo - Artista"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Fica Atualizado"
          description="Sê o primeiro a saber sobre promoções exclusivas, dicas de estilo e novos serviços. Apenas conteúdo relevante, sem spam."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          mediaPosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/male-hairdresser-combing-hair-senior-client_23-2148181882.jpg"
          imageAlt="Beard Bastards Location"
          inputPlaceholder="O teu email"
          buttonText="Inscrever"
          termsText="Respeitamos a tua privacidade. Desinscreve-te quando quiseres."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Navegar",              items: [
                { label: "Home", href: "#home" },
                { label: "A Experiência", href: "#experience" },
                { label: "Serviços", href: "#services" }
              ]
            },
            {
              title: "Contacto",              items: [
                { label: "Agendar", href: "https://booksy.com" },
                { label: "Email", href: "mailto:hello@beardbastards.pt" },
                { label: "Localização", href: "#contact" }
              ]
            },
            {
              title: "Social",              items: [
                { label: "Instagram", href: "https://instagram.com/beardbastards" },
                { label: "Facebook", href: "https://facebook.com/beardbastards" },
                { label: "Google", href: "https://google.com/maps" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacidade", href: "#" },
                { label: "Termos", href: "#" },
                { label: "Cookies", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Beard Bastards. Todos os direitos reservados."
          bottomRightText="Crafted with passion in Leiria"
        />
      </div>
    </ThemeProvider>
  );
}

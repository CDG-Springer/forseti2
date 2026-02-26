import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    name: "Maria Silva",
    username: "@mariasilva",
    body: "A Forseti transformou o aniversário da minha filha em um sonho! Tudo perfeito, desde a decoração até o entretenimento. Recomendo de olhos fechados!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "João Santos",
    username: "@joaosantos",
    body: "Contratamos a Forseti para nossa confraternização de fim de ano e foi um sucesso total! Equipe profissional, tudo organizado perfeitamente.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ana Costa",
    username: "@anacosta",
    body: "Quer fazer uma festa? Ligue para a Forseti! Eles realmente fazem acontecer. Minha festa de casamento foi inesquecível graças a eles.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Carlos Oliveira",
    username: "@carlosoliveira",
    body: "Evento corporativo impecável! A Forseti cuidou de todos os detalhes e superou nossas expectativas. Clientes ficaram impressionados.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Fernanda Lima",
    username: "@fernandalima",
    body: "Festa de 15 anos da minha filha foi um sonho realizado! A Forseti entendeu exatamente o que queríamos e executou com perfeição.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Roberto Alves",
    username: "@robertoalves",
    body: "Lançamento de produto foi um sucesso! A Forseti organizou tudo com maestria. Equipe dedicada e resultados excepcionais.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Patricia Mendes",
    username: "@patriciamendes",
    body: "Aniversário de 50 anos do meu marido foi perfeito! A Forseti criou uma atmosfera mágica que todos os convidados adoraram.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Marcos Ferreira",
    username: "@marcosferreira",
    body: "Workshop corporativo organizado pela Forseti foi um marco na nossa empresa. Profissionalismo e qualidade incomparáveis.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Lucia Rodrigues",
    username: "@luciarodrigues",
    body: "Festa junina da escola foi um arraso! A Forseti trouxe alegria e organização para nosso evento. Crianças e pais adoraram!",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#e78a53]/10 to-transparent blur-md"></div>

      <div className="text-white/90 leading-relaxed">{body}</div>

      <div className="mt-5 flex items-center gap-2">
        <img src={img || "/placeholder.svg"} alt={name} height="40" width="40" className="h-10 w-10 rounded-full" />
        <div className="flex flex-col">
          <div className="leading-5 font-medium tracking-tight text-white">{name}</div>
          <div className="leading-5 tracking-tight text-white/60">{username}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            
            
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            O que nossos clientes dizem
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
            Da organização perfeita à execução impecável, a Forseti se tornou a escolha preferida para eventos inesquecíveis.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Santos",
    avatar: "CS",
    quote: "Finalmente acabou aquela indecisão de toda sexta-feira! Agora eu e minha esposa conseguimos escolher filmes rapidamente.",
    rating: 5
  },
  {
    name: "Mariana Lima",
    avatar: "ML",
    quote: "Descobri filmes incríveis que jamais teria encontrado sozinha. O site é super intuitivo e as recomendações são ótimas!",
    rating: 5
  },
  {
    name: "Felipe Oliveira",
    avatar: "FO",
    quote: "O modo aleatório salvou várias noites de cinema em casa. Recomendo para quem está sempre em dúvida sobre o que assistir.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-8 bg-black/50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">O que nossos usuários dizem</h2>
          <p className="text-body max-w-2xl mx-auto">
            Milhares de pessoas já usam o EscolhaMeuFilme para descobrir novas obras e acabar com a indecisão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-netflix-red rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-custom-orange text-custom-orange" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="italic text-white/80 flex-1">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

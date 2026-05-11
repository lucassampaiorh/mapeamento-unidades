import { motion } from "motion/react";
import { 
  ClipboardCheck, 
  Map, 
  BookOpen, 
  CheckCircle2, 
  PhoneCall, 
  Calendar,
  AlertCircle,
  Clock,
  UserCheck
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* CAPA */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0a2540] via-[#0e4272] to-[#1a89d4] flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-white/5 border border-white/10" />
        <div className="absolute bottom-[-120px] left-[-60px] w-[500px] h-[500px] rounded-full bg-white/5 border border-white/5" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 border border-white/20 px-6 py-2 rounded-full text-xs font-display font-semibold tracking-widest text-[#a8d8f5] mb-8 z-10"
        >
          RECURSOS HUMANOS · 2026
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 bg-white/10 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 z-10"
        >
          <BookOpen className="w-12 h-12 text-[#a8d8f5]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold max-w-4xl leading-tight mb-8 z-10 drop-shadow-2xl"
        >
          Projeto de <span className="text-[#74c6f2]">Mapeamento de Cargos</span> e Atividades
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-[#74c6f2] rounded-full mb-8 z-10"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 z-10"
        >
          Cartilha de orientação para preenchimento do Descritivo de Atividades, P.O.P. e Fluxograma. 
          Este guia irá conduzi-lo passo a passo em cada etapa do processo.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-[#74c6f2]/20 border border-[#74c6f2]/30 rounded-2xl px-10 py-5 z-10"
        >
          <div className="text-[10px] text-[#74c6f2] font-semibold tracking-widest uppercase mb-1">Prazo de Entrega</div>
          <div className="text-2xl font-display font-bold">10 de julho de 2026</div>
        </motion.div>

        <div className="absolute bottom-10 right-10 opacity-5 font-display font-extrabold text-[150px] leading-none pointer-events-none select-none">
          RH
        </div>
      </section>

      {/* CONTEÚDO */}
      <main className="max-w-4xl mx-auto py-20 px-6 md:px-10">
        
        {/* INTRO */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0e4272] to-[#1565a8] rounded-3xl p-10 text-white relative overflow-hidden mb-16 shadow-xl"
        >
          <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-white/5" />
          <h2 className="text-2xl font-display font-bold text-[#74c6f2] mb-4">Bem-vindo(a) ao Projeto!</h2>
          <p className="text-white/90 leading-relaxed mb-6">
            Estamos iniciando o <strong>Projeto de Mapeamento de Cargos e Atividades</strong> com o objetivo 
            de organizar e padronizar as atribuições de cada função, fortalecer nossos processos internos 
            e trazer mais clareza para as atividades de cada área.
          </p>
          <div className="border-l-4 border-[#74c6f2] bg-white/10 rounded-r-lg p-5">
            <p className="text-[#d0ecfc] text-sm">
              <span className="mr-2">📌</span> O time administrativo será responsável por apoiar essa demanda, realizando a compilação dos 
              descritivos dos colaboradores de sua respectiva unidade para posterior envio ao 
              <strong> Lucas – Recursos Humanos</strong>.
            </p>
          </div>
        </motion.div>

        {/* ETAPAS */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-[#1565a8] rounded-full flex items-center justify-center shrink-0">
            <ClipboardCheck className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-[#0a2540]">Etapas do Processo</h2>
            <p className="text-sm text-[#5a7fa8]">Siga os passos abaixo na ordem indicada</p>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          <StepCard 
            num="01" 
            tag="Início" 
            title="Recebimento do Material" 
            desc='Você receberá o kit "Material de Apoio" contendo os modelos de Descritivo de Atividades, Fluxograma e P.O.P. Mantenha esses arquivos organizados.'
          />
          <StepCard 
            num="02" 
            tag="Principal" 
            title="Descritivo de Atividades" 
            desc="Abra o material e inicie pelo Descritivo de Atividades. Essa é a etapa mais importante. Preencha apenas os campos destacados em amarelo."
          />
          <StepCard 
            num="03" 
            tag="Detalhamento" 
            color="green"
            title="P.O.P. — Procedimento Operacional" 
            desc='Detalhe cada atividade listada no Descritivo, descrevendo o processo passo a passo, como uma "receita de bolo".'
          />
          <StepCard 
            num="04" 
            tag="Mapeamento" 
            color="teal"
            title="Fluxograma" 
            desc="Represente o fluxo de cada atividade e os envolvidos no processo. Identifique oportunidades de melhoria e padronização."
          />
        </motion.div>

        <hr className="border-t border-[#d0e6f7] mb-20" />

        {/* PASSO 2 */}
        <section id="step-2" className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1565a8] rounded-full flex items-center justify-center shrink-0 font-display font-bold text-white text-xl">2</div>
            <div>
              <h2 className="text-2xl font-display font-bold text-[#0a2540]">Descritivo de Atividades</h2>
              <p className="text-sm text-[#5a7fa8]">Preencha somente os campos destacados em amarelo</p>
            </div>
          </div>

          <p className="text-[#3a5a78] leading-loose mb-8">
            O Descritivo de Atividades é o documento central do projeto. Nele você deve informar 
            <strong> todas as atividades desenvolvidas em seu cargo</strong>. Pode ser feito um resumo simples, 
            descrevendo uma atividade por linha. Não é necessário um detalhamento extenso neste momento.
          </p>

          <div className="bg-[#fff8e1] border-l-4 border-[#f9c74f] p-6 rounded-r-2xl mb-8 flex gap-4">
            <AlertCircle className="w-6 h-6 text-[#f9c74f] shrink-0" />
            <p className="text-[#7a5c00] text-sm">
              <strong>Atenção:</strong> Preencha <em>apenas</em> os campos destacados em amarelo. 
              Os demais campos não precisam ser preenchidos neste momento — eles serão completados 
              em fases posteriores do projeto.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#d0e6f7] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#0e4272] to-[#1565a8] p-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-[#74c6f2] rounded-full" />
              <h4 className="text-white text-sm font-semibold font-display">Exemplo: Modelo de Descritivo de Atividades</h4>
            </div>
            <div className="p-8 bg-[#fdfdfd]">
              {/* Simplified visual representation instead of big base64 */}
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-8 bg-[#fffde7] border border-[#fbc02d]/30 rounded col-span-3"></div>
                  <div className="h-8 bg-gray-100 rounded"></div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-8 bg-[#fffde7] border border-[#fbc02d]/30 rounded col-span-3"></div>
                  <div className="h-8 bg-gray-100 rounded"></div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-8 bg-[#fffde7] border border-[#fbc02d]/30 rounded col-span-3"></div>
                  <div className="h-8 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
            <p className="px-8 pb-6 text-xs text-[#5a7fa8] italic">Figura 1 — Preencha os campos em amarelo conforme o exemplo.</p>
          </div>
        </section>

        {/* PASSO 3 */}
        <section id="step-3" className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1565a8] rounded-full flex items-center justify-center shrink-0 font-display font-bold text-white text-xl">3</div>
            <div>
              <h2 className="text-2xl font-display font-bold text-[#0a2540]">P.O.P. — Procedimento Padrão</h2>
              <p className="text-sm text-[#5a7fa8]">Um documento por atividade listada</p>
            </div>
          </div>

          <p className="text-[#3a5a78] leading-loose mb-8">
            O P.O.P. tem como objetivo <strong>detalhar cada atividade</strong> informada no Descritivo, 
            explicando o processo passo a passo — como se você fosse repassar a tarefa para alguém 
            que nunca a realizou antes.
          </p>

          <div className="bg-[#e3f2fd] border-l-4 border-[#1565a8] p-6 rounded-r-2xl mb-8 flex gap-4">
            <CheckCircle2 className="w-6 h-6 text-[#1565a8] shrink-0" />
            <p className="text-[#1565a8] text-sm font-medium">
              Deve existir um P.O.P. para cada atividade informada. Se você listou 8 atividades, precisará criar 8 documentos.
            </p>
          </div>
        </section>

        {/* PASSO 4 */}
        <section id="step-4" className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1565a8] rounded-full flex items-center justify-center shrink-0 font-display font-bold text-white text-xl">4</div>
            <div>
              <h2 className="text-2xl font-display font-bold text-[#0a2540]">Fluxograma</h2>
              <p className="text-sm text-[#5a7fa8]">Represente visualmente o fluxo das atividades</p>
            </div>
          </div>

          <p className="text-[#3a5a78] leading-loose mb-8">
            O fluxograma deverá descrever o fluxo de como cada atividade é realizada e quem são 
            os envolvidos no processo. Ele permite identificar falhas e promover a padronização.
          </p>

          <div className="bg-white rounded-3xl border border-[#d0e6f7] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#0e4272] to-[#1565a8] p-4 flex items-center gap-3">
              <Map className="text-[#74c6f2] w-5 h-5" />
              <h4 className="text-white text-sm font-semibold font-display">Exemplo: Modelo de Fluxograma</h4>
            </div>
            <div className="p-10 bg-[#fdfdfd] flex flex-col items-center gap-6">
              <div className="w-32 h-12 bg-[#1565a8] rounded-lg text-white text-[10px] flex items-center justify-center font-bold">INÍCIO</div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="w-48 h-16 bg-white border-2 border-[#1565a8] rounded-lg flex items-center justify-center p-3 text-center text-[11px] font-semibold text-[#0a2540] shadow-md">Execução da Atividade</div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="w-32 h-12 bg-[#0a2540] rounded-lg text-white text-[10px] flex items-center justify-center font-bold uppercase tracking-widest">Fim do Fluxo</div>
            </div>
          </div>
        </section>

        {/* RECAP */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0a2540] to-[#0e4272] rounded-[32px] p-12 text-white shadow-2xl mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <Calendar className="text-[#74c6f2] w-8 h-8" />
            <h2 className="text-2xl font-display font-bold text-[#74c6f2]">O que você deve entregar</h2>
          </div>

          <div className="space-y-8">
            <RecapItem 
              num="1" 
              title="Descritivo de Atividades" 
              desc="Liste as atividades do cargo (campos em amarelo)." 
            />
            <RecapItem 
              num="2" 
              title="P.O.P." 
              desc="Um documento detalhado para cada atividade listada." 
            />
            <RecapItem 
              num="3" 
              title="Fluxograma" 
              desc="Visualização do fluxo e responsabilidades." 
            />
            
            <div className="pt-6 border-t border-white/10 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#74c6f2]/20 flex items-center justify-center shrink-0">
                  <Clock className="text-[#74c6f2] w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#74c6f2] uppercase tracking-wider">Prazo final</p>
                  <p className="text-xl font-bold">10 de julho de 2026</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTATO */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <PhoneCall className="text-[#1565a8] w-7 h-7" />
            <div>
              <h2 className="text-2xl font-display font-bold text-[#0a2540]">Canais de Apoio</h2>
              <p className="text-sm text-[#5a7fa8]">Estamos aqui para ajudar durante todo o processo</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#d0e6f7] shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1565a8] to-[#1a89d4] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#1565a8]/20">
                <PhoneCall className="text-white w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-[#0a2540] mb-2">Canal WhatsApp — Dúvidas</h4>
              <p className="text-sm text-[#3a5a78] leading-relaxed mb-4">Para suporte direto e dúvidas rápidas sobre o projeto.</p>
              <p className="text-2xl font-display font-bold text-[#1565a8]">11 91350-3523</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#d0e6f7] shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1565a8] to-[#1a89d4] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#1565a8]/20">
                <UserCheck className="text-white w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-[#0a2540] mb-2">Plantão de Tecnologia</h4>
              <p className="text-sm text-[#3a5a78] leading-relaxed mb-4">
                Apoio com ferramentas do Office (Excel, Word) com <strong>Jenyfer Nicole</strong>.
              </p>
              <p className="text-sm font-semibold text-[#1565a8]">Datas divulgadas via WhatsApp.</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0a2540] py-12 px-6 text-center">
        <p className="text-white/80 font-display font-bold mb-2 tracking-wide uppercase text-sm">
          Projeto de Mapeamento de Cargos e Atividades · 2026
        </p>
        <p className="text-white/40 text-xs">
          Recursos Humanos · Área Administrativa · Prazo de entrega: 10/07/2026
        </p>
      </footer>
    </div>
  );
}

function StepCard({ num, tag, title, desc, color = "blue" }: { num: string, tag: string, title: string, desc: string, color?: string }) {
  const colorMap = {
    blue: "from-[#1565a8] to-[#74c6f2]",
    green: "from-[#0f6e56] to-[#5dcaa5]",
    teal: "from-[#0a4a6e] to-[#1a89d4]"
  };
  
  const tagColor = {
    blue: "bg-[#e8f3fc] text-[#1565a8]",
    green: "bg-[#e1f5ee] text-[#0f6e56]",
    teal: "bg-[#e0f2f1] text-[#0a4a6e]"
  };

  return (
    <motion.div 
      variants={fadeIn}
      className="bg-white rounded-3xl p-8 border border-[#d0e6f7] relative overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
    >
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colorMap[color as keyof typeof colorMap]}`} />
      
      <div className="text-[56px] font-display font-extrabold text-[#f0f7f9] leading-none mb-2 select-none group-hover:text-[#e1f0f5] transition-colors">
        {num}
      </div>
      
      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 ${tagColor[color as keyof typeof tagColor]}`}>
        {tag}
      </span>
      
      <h3 className="text-lg font-display font-bold text-[#0a2540] mb-3 group-hover:text-[#1565a8] transition-colors">{title}</h3>
      <p className="text-sm text-[#3a5a78] leading-relaxed line-clamp-3">{desc}</p>
    </motion.div>
  );
}

function RecapItem({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-8 h-8 rounded-full border-2 border-[#74c6f2] bg-[#74c6f2]/10 flex items-center justify-center shrink-0 font-display font-bold text-[#74c6f2] text-sm group-hover:bg-[#74c6f2] group-hover:text-[#0a2540] transition-all">
        {num}
      </div>
      <div>
        <h4 className="font-display font-bold text-[#74c6f2] mb-1">{title}</h4>
        <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

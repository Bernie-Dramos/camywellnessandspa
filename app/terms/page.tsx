
"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/app/providers"
import { ChevronDown } from "lucide-react"

const termsContent = {
  en: [
    {
      title: "Our Commitment",
      content:
        "CAMY Wellness and Spa is dedicated to providing a calm, safe, and restorative space for women to relax and focus on their well-being. All treatments are carried out with professionalism, care and confidentiality.",
    },
    {
      title: "Agreement to Terms",
      content:
        "By booking an appointment or utilizing any services at CAMY Wellness and SPA, you (hereinafter referred to as 'the Client') agree to be bound by these Terms and Conditions. These terms govern your use of the Spa and its services.",
    },
    {
      title: "Appointment Policies",
      items: [
        "Appointments: All services are provided by appointment only; these must be booked in advance through our official channels: phone, website, our indicated social media or in our establishment.",
        "Deposits: A 30% non-refundable deposit is required to confirm all bookings, the remaining balance is due on the day of the appointment at check out.",
        "Cancellation: Appointments must be cancelled or rescheduled at least 24 hours in advance, late cancellations will result in the loss of your deposit.",
        "No-Shows: Clients who fail to show up for their appointment without prior notice will lose their deposit.",
        "Late Arrivals: Arriving late may result in rescheduling or shortened appointment time to avoid delays for other clients. The full service fee will still apply even if the procedure time was cut short.",
        "Clients are advised to arrive at least 10 minutes before their appointment for check-in.",
      ],
    },
    {
      title: "Health and Safety",
      items: [
        "Health Information: Clients are required to disclose any medical conditions, allergies, or medications that may affect their treatment. This information is kept confidential and is used to ensure your safety and well-being.",
        "Hygiene: The Spa maintains strict hygiene standards. Clients are expected to maintain personal hygiene before attending appointments.",
        "Right to Refuse Service: The Spa reserves the right to refuse or adjust service to any client exhibiting signs of illness, intoxication, or inappropriate behaviour.",
      ],
    },
    {
      title: "Payment and Pricing",
      items: [
        "Pricing: Service prices are listed on our social medias and are subject to change without notice.",
        "Payment Methods: We accept bank transfers, Mpesa transfers and card payments.",
        "Gratuities: Gratuities are not included in the service price and are at the client's discretion.",
      ],
    },
    {
      title: "Liability",
      items: [
        "The Spa is not responsible for any loss or damage to personal belongings.",
        "While we take every precaution to ensure your safety and well-being, the Spa is not liable for any adverse reactions or injuries resulting from treatments, provided that clients have disclosed all relevant health information.",
        "Our liability is limited to the cost of the services provided.",
      ],
    },
    {
      title: "Privacy Policy",
      content:
        "Your personal information will be used solely for the purpose of providing and improving our services. We will not share your information with third parties without your consent, except as required by law.",
    },
    {
      title: "Conduct",
      items: [
        "Clients are expected to conduct themselves respectfully and appropriately while on the Spa premises.",
        "The Spa has a zero-tolerance policy for harassment, discrimination or any form of inappropriate behaviour towards staff or other clients.",
        "We reserve the right to terminate services immediately if a client's behaviour is deemed unacceptable.",
      ],
    },
    {
      title: "Vouchers",
      items: [
        "Vouchers are non-refundable and cannot be redeemed for cash.",
        "Vouchers are valid for 60 days from the date of purchase.",
        "Lost or stolen vouchers will not be replaced.",
      ],
    },
    {
      title: "Changes to Terms and Conditions",
      content:
        "The Spa reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on our social media and will be effective immediately.",
    },
  ],
  pt: [
    {
      title: "O nosso compromisso",
      content:
        "A Camy Wellness and Spa dedica-se a proporcionar um espaço calmo, seguro e restaurador para que as mulheres possam relaxar e focar no seu bem-estar. Todos os tratamentos são realizados com profissionalismo, cuidado e confidencialidade.",
    },
    {
      title: "Aceitação dos termos",
      content:
        "Ao confirmar a sua marcação ou ao utilizar quaisquer serviços no Camy Wellness and SPA, você (doravante referido como 'o Cliente') concorda em respeitar estes Termos e Condições. Estes termos regulam a sua utilização do Spa e dos seus serviços.",
    },
    {
      title: "Políticas de marcação",
      items: [
        "Reservas: Todos os serviços são prestados exclusivamente mediante marcação; estas devem ser agendadas antecipadamente através dos nossos canais oficiais: telefone, website, redes sociais indicadas ou directamente no nosso estabelecimento.",
        "Depositos: É necessário um depósito não reembolsável de 30% para confirmar todas as reservas, sendo o saldo restante devido no dia da marcação, no momento do pagamento.",
        "Cancelamentos: As marcações devem ser canceladas ou reagendadas com pelo menos 24 horas de antecedência; cancelamentos tardios resultarão na perda do seu depósito.",
        "No-Shows: Os clientes que não comparecerem à sua consulta sem aviso prévio perderão o seu depósito.",
        "Atrasos: Chegar atrasado pode resultar no reagendamento ou na redução do tempo da consulta para evitar atrasos para outros clientes. A taxa de serviço será aplicada na totalidade, mesmo que o tempo do procedimento seja reduzido.",
        "Aconselhamos aos clientes que cheguem pelo menos 10 minutos antes da sua marcação para a captação de dados.",
      ],
    },
    {
      title: "Saúde e Segurança",
      items: [
        "Informação de saúde: Os clientes são obrigados a revelar quaisquer condições médicas, alergias ou medicamentos que possam afetar o seu tratamento. Esta informação é mantida confidencial e é utilizada para garantir a sua segurança e bem-estar.",
        "Higiene: O spa mantém normas rigorosas de higiene. Espera-se que os clientes mantenham a higiene pessoal antes de comparecer ao nosso estabelicimento para suas marcações.",
        "Direito de recusar serviços: O Spa reserva-se o direito de recusar ou ajustar o serviço a qualquer cliente que apresente sinais de doença, intoxicação, condições ou comportamentos inadequados.",
      ],
    },
    {
      title: "Preços e pagamentos",
      items: [
        "Preços: Os preços dos serviços estão listados nas nossas redes sociais e estão sujeitos a alterações sem aviso prévio.",
        "Métodos de pagamento: Aceitamos transferências bancárias, transferências Mpesa e pagamentos com cartão.",
        "Gorjetas: As gorjetas não estão incluídas no preço do serviço e ficam ao critério do cliente.",
      ],
    },
    {
      title: "Responsabilidade",
      items: [
        "O Spa não se responsabiliza por qualquer perda ou dano a pertences pessoais.",
        "Embora tomemos todas as precauções para garantir a sua segurança e bem-estar, o Spa não se responsabiliza por quaisquer reações adversas ou lesões resultantes dos tratamentos, desde que os clientes tenham divulgado todas as informações de saúde relevantes.",
        "A nossa responsabilidade está limitada ao custo dos serviços prestados.",
      ],
    },
    {
      title: "Política de privacidade",
      content:
        "As suas informações pessoais serão utilizadas exclusivamente para o propósito de fornecer e melhorar os nossos serviços. Não partilharemos as suas informações com terceiros sem o seu consentimento, exceto quando exigido pela lei.",
    },
    {
      title: "Conduta",
      items: [
        "Espera-se que os clientes se comportem de forma respeitosa e apropriada enquanto se encontrem nas instalações do Spa.",
        "O Spa adopta uma política de tolerância zero relativamente ao assédio, discriminação ou qualquer outra forma de comportamento inadequado em relação aos funcionários ou a outros clientes.",
        "Reservamo-nos o direito de cessar os serviços imediatamente caso o comportamento de um cliente seja considerado inaceitável.",
      ],
    },
    {
      title: "Vouchers",
      items: [
        "Os vouchers são não-reembolsaveis e não podem ser trocados por dinheiro.",
        "Os vouchers são válidos por 60 dias após o dia de compra.",
        "Os vouchers perdidos ou roubados não serão substituídos.",
      ],
    },
    {
      title: "Alterações dos Termos e Condições",
      content:
        "O Spa reserva-se o direito de modificar estes Termos e Condições a qualquer momento. Os termos atualizados serão publicados nas nossas redes sociais e entrarão em vigor imediatamente.",
    },
  ],
}

function TermsSection({
  title,
  content,
  items,
  isOpen,
  onToggle,
}: { title: string; content?: string; items?: string[]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <h3 className="text-lg font-serif font-semibold text-[#1a3c34]">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 space-y-4">
          {content && <p className="text-gray-700 leading-relaxed">{content}</p>}
          {items && (
            <ul className="space-y-3 list-disc list-inside">
              {items.map((item, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default function Terms() {
  const { language } = useLanguage()
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    0: true,
  })

  const content = language === "en" ? termsContent.en : termsContent.pt

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#1a3c34] to-[#2d5a50]">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-2">
            {language === "en" ? "Terms & Conditions" : "Termos e Condições"}
          </h1>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto" />
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-center text-gray-600">
              {language === "en"
                ? "Please read our complete terms and conditions below. Last updated: January 2026"
                : "Por favor, leia nossos termos e condições completos abaixo. Última atualização: janeiro de 2026"}
            </p>
          </div>

          {/* Accordion */}
          <div className="rounded-lg shadow-md overflow-hidden border border-gray-200">
            {content.map((section, index) => (
              <TermsSection
                key={index}
                title={section.title}
                content={section.content}
                items={section.items}
                isOpen={openSections[index] || false}
                onToggle={() => toggleSection(index)}
              />
            ))}
          </div>

          {/* Legal Information */}
          <div className="mt-12 bg-gradient-to-r from-[#f8f5f0] to-white p-8 rounded-lg border border-[#d4af37]/30">
            <h3 className="text-2xl font-serif font-semibold text-[#1a3c34] mb-4">
              {language === "en" ? "Legal Information" : "Informação Legal"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="bg-linear-to-br from-[#f8f5f0] to-white p-6 rounded-lg border border-[#d4af37]/30">
                <h4 className="text-lg font-semibold text-[#1a3c34] mb-2">NUIT</h4>
                <p className="text-3xl font-serif text-[#d4af37]">402002026</p>
              </div>
              <div className="bg-linear-to-br from-[#f8f5f0] to-white p-6 rounded-lg border border-[#d4af37]/30">
                <h4 className="text-lg font-semibold text-[#1a3c34] mb-2">NUEL</h4>
                <p className="text-3xl font-serif text-[#d4af37]">105008783</p>
              </div>
              <div className="bg-linear-to-br from-[#f8f5f0] to-white p-6 rounded-lg border border-[#d4af37]/30">
                <h4 className="text-lg font-semibold text-[#1a3c34] mb-2">Alvará</h4>
                <p className="text-3xl font-serif text-[#d4af37]">279/10/01/2025</p>
              </div>
              <div className="bg-linear-to-br from-[#f8f5f0] to-white p-6 rounded-lg border border-[#d4af37]/30">
                <h4 className="text-lg font-semibold text-[#1a3c34] mb-2">Início de Atividade</h4>
                <p className="text-3xl font-serif text-[#d4af37]">01/10/2025</p>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#1a3c34] mb-4">
              {language === "en" ? "Summary" : "Resumo"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "These Terms and Conditions outline the agreement between CAMY Wellness and SPA and its clients. They cover booking and cancellation policies, health and safety guidelines, payment terms, liability limitations, privacy practices, acceptable conduct, voucher usage and the process for changes to these terms. By using our services, you agree to these terms, which are designed to ensure a safe, respectful and enjoyable experience for everyone."
                : "Estes Termos e Condições delineiam o acordo entre a CAMY Wellness and SPA e os seus clientes. Eles abrangem as políticas de reserva e cancelamento, diretrizes de saúde e segurança, condições de pagamento, limitações de responsabilidade, políticas de privacidade, conduta aceitável, utilização de vouchers e o processo de alterações destes termos. Ao utilizar os nossos serviços, você concorda com estes termos que foram concebidos para garantir uma experiência segura, respeitosa e agradável para todos."}
            </p>
          </div>

          {/* Contact for Questions */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              {language === "en"
                ? "Have questions about our terms? Contact us:"
                : "Tem dúvidas sobre nossos termos? Entre em contato:"}
            </p>
            <a
              href="https://wa.me/258841921846"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3 bg-[#d4af37] text-white font-medium rounded hover:bg-[#c9a63f] transition-colors"
            >
              {language === "en" ? "Contact Us" : "Entre em Contato"}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

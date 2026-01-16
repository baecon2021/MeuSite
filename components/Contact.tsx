import React, { useState } from 'react';
import { Mail, Instagram, Phone, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

interface Errors {
  name?: string;
  email?: string;
  whatsapp?: string;
  [key: string]: string | undefined;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    segment: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation Logic
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 3 ? 'Nome deve ter pelo menos 3 letras.' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Por favor, insira um e-mail válido.' : '';
      case 'whatsapp':
        // Remove non-digits and check length (simple check for BR numbers)
        const cleanNumber = value.replace(/\D/g, '');
        return cleanNumber.length < 10 ? 'Número inválido (mínimo 10 dígitos com DDD).' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    
    // Real-time validation if field was already touched or just validate immediately
    if (touched[name] || value.length > 0) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const isFormValid = () => {
    return (
      formState.name && !errors.name &&
      formState.email && !errors.email &&
      formState.whatsapp && !errors.whatsapp &&
      formState.message
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    const newErrors: Errors = {};
    Object.keys(formState).forEach(key => {
        if (key === 'name' || key === 'email' || key === 'whatsapp') {
            const error = validateField(key, (formState as any)[key]);
            if (error) newErrors[key] = error;
        }
    });

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setTouched({ name: true, email: true, whatsapp: true });
        return;
    }

    setIsSubmitting(true);

    // Formatação da mensagem para o WhatsApp
    // %0A é o código para quebra de linha em URLs
    const text = `*Olá Anthony! Vim através do seu site.*%0A%0A` +
      `*Nome:* ${formState.name}%0A` +
      `*Email:* ${formState.email}%0A` +
      `*WhatsApp:* ${formState.whatsapp}%0A` +
      `*Segmento:* ${formState.segment || 'Não informado'}%0A%0A` +
      `*Mensagem:*%0A${formState.message}`;

    // Número do Anthony conforme configurações anteriores
    const phoneNumber = "554792491544"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    // Simula um pequeno delay para feedback visual e redireciona
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      setFormState({ name: '', email: '', whatsapp: '', segment: '', message: '' });
      setTouched({});
      setErrors({});
    }, 1000);
  };

  const getInputClass = (fieldName: string) => {
    const base = "w-full px-4 py-3 rounded-lg border bg-slate-900/50 text-white placeholder-slate-500 focus:ring-2 transition-all outline-none";
    if (touched[fieldName] && errors[fieldName]) {
      return `${base} border-red-500/50 focus:border-red-500 focus:ring-red-500/20`;
    }
    if (touched[fieldName] && !errors[fieldName] && formState[fieldName as keyof typeof formState]) {
      return `${base} border-green-500/50 focus:border-green-500 focus:ring-green-500/20`;
    }
    return `${base} border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy-950 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-800">
          
          {/* Contact Info Side */}
          <div className="lg:w-5/12 bg-gradient-to-br from-navy-900 to-slate-900 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Vamos criar algo incrível?</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Não deixe para depois. Garanta seu site profissional antes de subir o preço. Condições especiais para novos projetos fechados este mês.
              </p>
              
              <div className="space-y-6">
                <a href="https://wa.me/554792491544" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-cyan-600 transition-colors border border-slate-700">
                    <Phone className="h-6 w-6 text-cyan-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">WhatsApp</span>
                    <span className="font-medium text-lg">+55 47 9249-1544</span>
                  </div>
                </a>

                <a href="mailto:anthonybanharavelho@gmail.com" className="flex items-center gap-4 group">
                  <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-cyan-600 transition-colors border border-slate-700">
                    <Mail className="h-6 w-6 text-cyan-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">E-mail</span>
                    <span className="font-medium break-all">anthonybanharavelho@gmail.com</span>
                  </div>
                </a>

                <a href="https://instagram.com/tony_.xra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-cyan-600 transition-colors border border-slate-700">
                    <Instagram className="h-6 w-6 text-cyan-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">Instagram</span>
                    <span className="font-medium text-lg">@tony_.xra</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 relative z-10">
               <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-md">
                  <p className="text-sm text-slate-300 italic">
                    "A melhor decisão que tomei foi investir em um site profissional. O retorno foi imediato!"
                  </p>
                  <p className="text-xs text-cyan-500 mt-2 font-bold">- Cliente Satisfeito</p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-10 md:p-12 bg-slate-900">
            <h3 className="text-2xl font-bold text-white mb-6">Solicite um orçamento gratuito</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Seu Nome</label>
                  <div className="relative">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('name')}
                        placeholder="João Silva"
                    />
                    {touched.name && !errors.name && formState.name && (
                        <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                    )}
                  </div>
                  {touched.name && errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                  )}
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-400 mb-2">WhatsApp</label>
                  <div className="relative">
                    <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formState.whatsapp}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('whatsapp')}
                        placeholder="(00) 00000-0000"
                    />
                     {touched.whatsapp && !errors.whatsapp && formState.whatsapp && (
                        <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                    )}
                  </div>
                  {touched.whatsapp && errors.whatsapp && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.whatsapp}
                      </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">E-mail Profissional</label>
                <div className="relative">
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('email')}
                    placeholder="seu@email.com"
                    />
                    {touched.email && !errors.email && formState.email && (
                        <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                    )}
                </div>
                 {touched.email && errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                  )}
              </div>

              <div>
                <label htmlFor="segment" className="block text-sm font-medium text-slate-400 mb-2">Segmento do Negócio</label>
                <select
                    id="segment"
                    name="segment"
                    value={formState.segment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-900/50 text-white focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-shadow outline-none"
                >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Serviços">Prestação de Serviços</option>
                    <option value="Comércio">Comércio / Loja</option>
                    <option value="Saúde">Saúde / Clínica</option>
                    <option value="Advocacia">Advocacia</option>
                    <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Fale um pouco sobre o projeto</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-900/50 text-white focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-shadow outline-none resize-none placeholder-slate-500"
                  placeholder="Gostaria de um site para..."
                />
              </div>

              <Button 
                type="submit" 
                fullWidth 
                disabled={isSubmitting || !isFormValid()} 
                className={`flex items-center justify-center gap-2 ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Redirecionando...' : (
                    <>
                        Enviar Solicitação <Send className="h-4 w-4" />
                    </>
                )}
              </Button>
              <p className="text-center text-xs text-slate-500 mt-4">
                Você será redirecionado para o WhatsApp para finalizar.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
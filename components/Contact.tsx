import React, { useState } from 'react';
import { Mail, Instagram, Phone, Send, CheckCircle2 } from 'lucide-react';
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

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 3 ? 'Nome muito curto.' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'E-mail inválido.' : '';
      case 'whatsapp':
        const cleanNumber = value.replace(/\D/g, '');
        return cleanNumber.length < 10 ? 'Mínimo 10 dígitos.' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
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
    const text = `*Olá Anthony! Vim através do seu site.*%0A%0A` +
      `*Nome:* ${formState.name}%0A` +
      `*Email:* ${formState.email}%0A` +
      `*WhatsApp:* ${formState.whatsapp}%0A` +
      `*Segmento:* ${formState.segment || 'Não informado'}%0A%0A` +
      `*Mensagem:*%0A${formState.message}`;

    const phoneNumber = "554792491544"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setFormState({ name: '', email: '', whatsapp: '', segment: '', message: '' });
      setTouched({});
      setErrors({});
    }, 1000);
  };

  const getInputClass = (fieldName: string) => {
    const base = "w-full px-4 py-2.5 rounded-lg border bg-navy-950/50 text-white placeholder-slate-600 focus:ring-2 transition-all outline-none appearance-none text-sm";
    if (touched[fieldName] && errors[fieldName]) {
      return `${base} border-red-500/40 focus:border-red-500 focus:ring-red-500/10`;
    }
    if (touched[fieldName] && !errors[fieldName] && formState[fieldName as keyof typeof formState]) {
      return `${base} border-green-500/40 focus:border-green-500 focus:ring-green-500/10`;
    }
    return `${base} border-white/5 focus:border-cyan-500/50 focus:ring-cyan-500/10`;
  };

  return (
    <section id="contact" className="py-12 lg:py-20 bg-navy-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy-900 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/5">
          
          {/* Info Side */}
          <div className="lg:w-5/12 bg-gradient-to-br from-navy-800 to-navy-900 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden order-2 lg:order-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Vamos criar algo incrível?</h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-xs md:text-sm">
                Não deixe para depois. Garanta seu site profissional antes de subir o preço. Condições especiais para novos projetos.
              </p>
              
              <div className="space-y-4">
                <a href="https://wa.me/554792491544" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group">
                  <div className="bg-navy-950 p-2.5 rounded-lg group-hover:bg-cyan-600 transition-colors border border-white/5">
                    <Phone className="h-5 w-5 text-cyan-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest group-hover:text-cyan-300 transition-colors">WhatsApp</span>
                    <span className="font-medium text-sm md:text-base">+55 47 9249-1544</span>
                  </div>
                </a>

                <a href="mailto:anthonybanharavelho@gmail.com" className="flex items-center gap-3.5 group">
                  <div className="bg-navy-950 p-2.5 rounded-lg group-hover:bg-cyan-600 transition-colors border border-white/5">
                    <Mail className="h-5 w-5 text-cyan-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest group-hover:text-cyan-300 transition-colors">E-mail</span>
                    <span className="font-medium text-xs md:text-sm">anthonybanharavelho@gmail.com</span>
                  </div>
                </a>

                <a href="https://instagram.com/tony_.xra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group">
                  <div className="bg-navy-950 p-2.5 rounded-lg group-hover:bg-cyan-600 transition-colors border border-white/5">
                    <Instagram className="h-5 w-5 text-cyan-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest group-hover:text-cyan-300 transition-colors">Instagram</span>
                    <span className="font-medium text-sm md:text-base">@tony_.xra</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 relative z-10">
               <div className="p-3 bg-navy-950/40 rounded-xl border border-white/5 backdrop-blur-md">
                  <p className="text-xs text-slate-400 italic">
                    "O retorno foi imediato com o novo site!"
                  </p>
                  <p className="text-[10px] text-cyan-500 mt-1.5 font-bold">- Cliente Satisfeito</p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-8 md:p-10 bg-navy-900 order-1 lg:order-2">
            <h3 className="text-xl font-bold text-white mb-6">Solicite um orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Nome</label>
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
                        <CheckCircle2 className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">WhatsApp</label>
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
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">E-mail</label>
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
                </div>
              </div>

              <div>
                <label htmlFor="segment" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Segmento</label>
                <select
                    id="segment"
                    name="segment"
                    value={formState.segment}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-white/5 bg-navy-950/50 text-white focus:ring-2 focus:ring-cyan-500/10 focus:border-cyan-500/50 transition-shadow outline-none text-sm appearance-none"
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
                <label htmlFor="message" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Projeto</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-white/5 bg-navy-950/50 text-white focus:ring-2 focus:ring-cyan-500/10 focus:border-cyan-500/50 transition-shadow outline-none resize-none placeholder-slate-600 text-sm"
                  placeholder="Gostaria de um site para..."
                />
              </div>

              <Button 
                type="submit" 
                fullWidth 
                disabled={isSubmitting || !isFormValid()} 
                className={`flex items-center justify-center gap-2 py-3 !text-sm ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Redirecionando...' : (
                    <>
                        Solicitar Orçamento <Send className="h-4 w-4" />
                    </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
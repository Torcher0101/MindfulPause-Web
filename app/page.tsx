'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Zap, Moon, ChevronRight, Globe } from 'lucide-react';

type Language = 'en' | 'zh';

const content = {
  en: {
    nav: {
      features: 'Features',
      privacy: 'Privacy',
      download: 'Download App',
    },
    hero: {
      title: 'Reclaim Your Time with Intentionality',
      subtitle: 'Mindful Pause helps you break free from mindless scrolling by introducing a conscious pause before you open distracting apps.',
      cta: 'Download on App Store',
    },
    features: [
      {
        title: 'The Bear Guard',
        description: 'A friendly guardian that asks you why you need to use an app, encouraging mindful decisions.',
        icon: Shield,
      },
      {
        title: 'Conscious Breathing',
        description: 'Take a deep breath. A 3-second pause can change your impulsive behavior into a conscious choice.',
        icon: Moon,
      },
      {
        title: 'Usage Insights',
        description: 'Track how many times you successfully resisted the urge to scroll.',
        icon: Zap,
      },
    ],
    footer: {
      copyright: '© 2024 Mindful Pause. All rights reserved.',
    }
  },
  zh: {
    nav: {
      features: '功能介紹',
      privacy: '隱私權政策',
      download: '下載 App',
    },
    hero: {
      title: '找回專注，拒絕無意識滑手機',
      subtitle: 'Mindful Pause 在您開啟 App 前加入一個「有意識的暫停」，幫助您打破數位成癮的迴圈。',
      cta: 'App Store 下載',
    },
    features: [
      {
        title: '熊守衛',
        description: '一位友善的守護者，會溫柔詢問您開啟 App 的理由，協助您做出更好的決定。',
        icon: Shield,
      },
      {
        title: '正念呼吸',
        description: '深呼吸。短短 3 秒的暫停，能將衝動轉化為有意識的選擇。',
        icon: Moon,
      },
      {
        title: '使用洞察',
        description: '記錄您成功抵抗誘惑的次數，看見自己的進步。',
        icon: Zap,
      },
    ],
    footer: {
      copyright: '© 2024 Mindful Pause. All rights reserved.',
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-primary to-secondary rounded-lg" />
            <span className="text-xl font-bold tracking-tight">Mindful Pause</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLang(l => l === 'en' ? 'zh' : 'en')}
              className="p-2 hover:bg-white/5 rounded-full transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? '中文' : 'English'}
            </button>
            <a
              href="https://apps.apple.com/app/idYOUR_ID"
              className="bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-colors hidden md:block"
            >
              {t.nav.download}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm md:text-base">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for iOS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                {t.hero.cta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />

            {/* Phone Mockup Placeholder */}
            <div className="relative mx-auto w-[300px] h-[600px] bg-card border-8 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-muted text-sm">App Screenshot</p>
                {/* Replace this with an actual image */}
                <div className="mt-4 w-16 h-16 bg-white/10 rounded-full mx-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

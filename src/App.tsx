/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  VolumeX,
  Copy,
  Check,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Mail,
  MessageCircle,
  ExternalLink,
  Gift,
  Sparkles,
  UserCheck,
  Quote
} from 'lucide-react';

// Curated high-res floral & drapery wedding assets
const WEDDING_FLOWERS = '/src/assets/images/wedding_bouquet_dusty_blue_1794052441491.jpg';
const DRAPERY_SILK = '/src/assets/images/dusty_blue_silk_background_1794052766449.jpg';

// Crisp, Pure Typographic Monogram ("P & D") — Completely clean, unobstructed, without background image interference
const MonogramBadge = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const containerSizes = {
    sm: 'w-14 h-14',
    md: 'w-18 h-18',
    lg: 'w-22 h-22',
  }[size];

  const letterSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  return (
    <div className={`relative ${containerSizes} mx-auto flex items-center justify-center select-none`}>
      {/* Clean double-ring border on crisp solid surface */}
      <div className="absolute inset-0 rounded-full border border-[#85A7BE] bg-[#F2F7FA] shadow-xs" />
      <div className="absolute inset-1 rounded-full border border-dashed border-[#C29F6C]/80" />

      {/* Crisp letters with no background clutter */}
      <div className="relative z-10 flex items-center justify-center gap-1">
        <span className={`font-cinzel ${letterSizes} font-bold tracking-tight text-[#223B4E]`}>
          P
        </span>
        <span className="font-cursive text-xl text-[#C29F6C] font-semibold">
          &
        </span>
        <span className={`font-cinzel ${letterSizes} font-bold tracking-tight text-[#223B4E]`}>
          D
        </span>
      </div>
    </div>
  );
};

// Elegant Floral & Drapery Divider in Dusty Blue & Champagne Gold
const FloralDivider = ({ icon = 'rings' }: { icon?: 'feather' | 'heart' | 'rings' | 'calendar' | 'gift' }) => {
  return (
    <div className="flex items-center justify-center gap-3 my-5 text-[#456C87]">
      {/* Left botanical flourish wave */}
      <svg className="w-16 sm:w-24 h-4 text-[#85A7BE]" viewBox="0 0 100 16" fill="none" preserveAspectRatio="none">
        <path d="M0,8 C25,14 40,2 65,8 C80,12 90,8 100,8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="95" cy="5" r="1.5" fill="#C29F6C" />
        <circle cx="85" cy="11" r="1.2" fill="#85A7BE" />
      </svg>
      
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F1F7] text-[#223B4E] border border-[#B2CADB] shadow-2xs">
        {icon === 'feather' && (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
        )}
        {icon === 'heart' && <Heart className="w-4 h-4 fill-[#C29F6C] text-[#C29F6C]" />}
        {icon === 'rings' && (
          <svg className="w-4 h-4 text-[#C29F6C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="12" r="5" />
            <circle cx="15" cy="12" r="5" />
          </svg>
        )}
        {icon === 'calendar' && <Calendar className="w-4 h-4 text-[#456C87]" />}
        {icon === 'gift' && <Gift className="w-4 h-4 text-[#C29F6C]" />}
      </span>

      {/* Right botanical flourish wave */}
      <svg className="w-16 sm:w-24 h-4 text-[#85A7BE]" viewBox="0 0 100 16" fill="none" preserveAspectRatio="none">
        <path d="M100,8 C75,14 60,2 35,8 C20,12 10,8 0,8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="5" cy="5" r="1.5" fill="#C29F6C" />
        <circle cx="15" cy="11" r="1.2" fill="#85A7BE" />
      </svg>
    </div>
  );
};

// Subtle Botanical Branch Corner Ornaments
const BotanicalCorner = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'scale(-1, 1)';
      case 'bottom-left':
        return 'scale(1, -1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-3 left-3';
      case 'top-right':
        return 'top-3 right-3';
      case 'bottom-left':
        return 'bottom-3 left-3';
      case 'bottom-right':
        return 'bottom-3 right-3';
    }
  };

  return (
    <svg
      className={`absolute w-7 h-7 text-[#5D85A1] pointer-events-none opacity-60 ${getPositionClasses()}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      style={{ transform: getTransform() }}
      aria-hidden="true"
    >
      <path d="M3,3 L22,3 C17,6 12,9 10,14 C8,19 5,23 3,27 Z" strokeLinecap="round" />
      <circle cx="8" cy="8" r="1.5" fill="#C29F6C" />
      <path d="M12,4 C14,7 13,10 11,12" stroke="#85A7BE" strokeWidth="1" />
    </svg>
  );
};

interface GuestWish {
  id: string;
  name: string;
  status: string;
  message: string;
  timestamp: string;
}

export default function App() {
  // Target Event: Rabu, 30 Desember 2026, 09:00:00 WIB (UTC+7)
  const targetDate = new Date('2026-12-30T09:00:00+07:00').getTime();

  // State
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isPlaying, setIsPlaying] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // RSVP Form State
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState('Hadir');
  const [rsvpCount, setRsvpCount] = useState('1 Orang');
  const [rsvpMessage, setRsvpMessage] = useState('');

  // Real user wishes only (strictly NO fake AI placeholder data)
  const [wishes, setWishes] = useState<GuestWish[]>([]);

  // Audio ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Read guest name from URL parameter ?to=Nama+Tamu
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const toParam = params.get('to');
      if (toParam && toParam.trim() !== '') {
        const decoded = decodeURIComponent(toParam.replace(/\+/g, ' '));
        setGuestName(decoded);
        setRsvpName(decoded);
      }
    } catch {
      // Fallback
    }

    // Load only real stored wishes from localStorage
    const saved = localStorage.getItem('putri_dify_wishes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setWishes(parsed);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  // Update Countdown Timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Audio Control
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      showToast('Musik dijeda');
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          showToast('Musik diputar');
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  };

  // Open Invitation
  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Autoplay restriction handled:', err);
        });
    }
  };

  // Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  // Copy to Clipboard
  const handleCopy = (text: string, key: string, label: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedKey(key);
        showToast(`${label} berhasil disalin!`);
        setTimeout(() => setCopiedKey(null), 2500);
      })
      .catch(() => {
        showToast('Gagal menyalin, silakan salin manual.');
      });
  };

  // Send RSVP to WhatsApp & Save Real Wish to Guestbook
  const handleSendRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) {
      showToast('Mohon masukkan nama Anda.');
      return;
    }

    const phone = '6281935384803';
    const text =
      `Halo Putri & Dify, saya ingin mengonfirmasi kehadiran untuk Akad Nikah:\n\n` +
      `*Nama:* ${rsvpName}\n` +
      `*Konfirmasi:* ${rsvpStatus}\n` +
      `*Jumlah Tamu:* ${rsvpCount}\n` +
      `*Pesan / Doa:* ${rsvpMessage ? rsvpMessage : '-'}\n\n` +
      `Terima kasih.`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // Save only real user wish
    if (rsvpMessage.trim()) {
      const now = new Date();
      const timeStr = `${now.getDate()} ${['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][now.getMonth()]} ${now.getFullYear()}, ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} WIB`;
      
      const newWish: GuestWish = {
        id: Date.now().toString(),
        name: rsvpName,
        status: rsvpStatus,
        message: rsvpMessage,
        timestamp: timeStr,
      };
      const updated = [newWish, ...wishes];
      setWishes(updated);
      localStorage.setItem('putri_dify_wishes', JSON.stringify(updated));
    }

    window.open(whatsappURL, '_blank');
    showToast('Membuka WhatsApp untuk mengirim konfirmasi...');
  };

  // Google Calendar Link
  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent('Akad Nikah: Putri & Dify');
    const details = encodeURIComponent(
      'Akad Nikah Wahyu Dia Putri & Dify Maulana Rizky.\nLokasi: Toko Kelontong Pak Rudi, Jln. Fatmawati Gading Tuntang RT 03 RW 02 kec tuntang Kab Semarang, 50773, Jawa Tengah, ID.'
    );
    const location = encodeURIComponent('Toko Kelontong Pak Rudi, Jln. Fatmawati Gading Tuntang RT 03 RW 02 kec tuntang Kab Semarang, 50773, Jawa Tengah, ID');
    const dates = '20261230T020000Z/20261230T060000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const gmapsLink = 'https://maps.google.com/maps/search/Toko%20Kelontong%20Pak%20Rudi/@-7.27160307,110.45567918,17z?hl=en';
  const fullAddress = 'Toko Kelontong Pak Rudi, Jln. Fatmawati Gading Tuntang RT 03 , RW 02 kec tuntang Kab Semarang, 50773, Jawa Tengah, ID';

  return (
    <div className="min-h-screen text-[#162836] selection:bg-[#B2CADB] selection:text-[#162836]">
      {/* Background Classical Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/05/16/audio_c6861ca125.mp3?filename=romantic-classical-wedding-piano-111497.mp3"
      />

      {/* Floating Music Toggle Button */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={toggleMusic}
            title={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
            aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#456C87] text-white shadow-2xl border-2 border-white hover:bg-[#2F4F66] transition-all duration-300 hover:scale-105 active:scale-95 ${
              isPlaying ? 'ring-4 ring-[#85A7BE]/40' : 'opacity-90'
            }`}
          >
            {isPlaying ? (
              <div className="relative flex items-center justify-center w-full h-full">
                <Volume2 className="w-5 h-5 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C29F6C] rounded-full border border-white" />
              </div>
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </button>
        </div>
      )}

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 bg-[#162836] text-white text-xs font-montserrat tracking-wider rounded-full shadow-2xl border border-[#C29F6C]/60 pointer-events-none transition-all duration-300 ${
          toastMessage ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#DFCAAB]" />
          <span>{toastMessage}</span>
        </div>
      </div>

      {/* =========================================================================
          COVER MODAL / HALAMAN PEMBUKA (DOMINAN DUSTY BLUE — BERSIH & TANPA DISTRAKSI GAMBAR)
          ========================================================================= */}
      <div
        className={`fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
        style={{
          background: 'linear-gradient(180deg, #38576E 0%, #2A465B 50%, #35536B 100%)',
        }}
      >
        {/* Soft elegant drapery backdrop framing outside the card */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
          <img
            src={DRAPERY_SILK}
            alt="Drapery Background"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
        </div>

        {/* Clean, Pristine White Wedding Card — Absolutely NO background image inside to ensure P & D and names are crisp and aesthetic */}
        <div className="relative w-full max-w-md bg-white rounded-[32px] sm:rounded-t-[80px] p-8 sm:p-11 text-center shadow-2xl border border-[#B8CFDE] drapery-card-inner">
          <BotanicalCorner position="top-left" />
          <BotanicalCorner position="top-right" />
          <BotanicalCorner position="bottom-left" />
          <BotanicalCorner position="bottom-right" />

          {/* Clean, Unobstructed "P & D" Monogram Emblem */}
          <div className="mb-4">
            <MonogramBadge size="md" />
          </div>

          <p className="font-cinzel text-xs tracking-[0.3em] text-[#456C87] uppercase font-semibold">
            The Wedding of
          </p>

          <FloralDivider icon="feather" />

          {/* Clear, Bold, Uncovered Bride & Groom Names */}
          <h1 className="font-cursive text-5xl sm:text-6xl text-[#162836] my-2 leading-tight">
            Putri & Dify
          </h1>

          {/* Clean Recipient Box */}
          <div className="my-6 py-4 px-3 border border-[#B8CFDE] bg-[#F2F7FA] rounded-2xl shadow-2xs">
            <p className="font-garamond text-base italic text-[#456C87] mb-1">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#223B4E] tracking-wide mt-1">
              {guestName}
            </h2>
            <p className="font-montserrat text-[11px] uppercase tracking-widest text-[#5D85A1] mt-1">
              Di Tempat
            </p>
          </div>

          <p className="font-garamond text-sm sm:text-base text-[#456C87] leading-relaxed max-w-xs mx-auto mb-6">
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang Anda untuk hadir dan memberikan doa restu pada prosesi Akad Nikah kami.
          </p>

          <button
            onClick={handleOpenInvitation}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#456C87] hover:bg-[#2F4F66] text-white font-cinzel text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Buka Undangan</span>
          </button>

          <div className="mt-5 text-[11px] font-montserrat text-[#5D85A1] tracking-wider">
            Rabu, 30 Desember 2026 · Kab. Semarang
          </div>
        </div>
      </div>

      {/* =========================================================================
          KONTEN UTAMA UNDANGAN (TAMPILAN DOMINAN DUSTY BLUE DENGAN ELEMEN BUNGA & DRAPERY)
          ========================================================================= */}
      <main className="max-w-[660px] mx-auto px-4 sm:px-6 pt-6 pb-24 relative">

        {/* -----------------------------------------------------------------------
            SECTION 1: HERO & AYAT SUCI DENGAN HEADER BUNGA MAWAR & EUCALYPTUS
            ----------------------------------------------------------------------- */}
        <section className="relative drapery-card drapery-arch rounded-b-[28px] mb-10 text-center overflow-hidden drapery-card-inner bg-white">
          {/* Header Bunga Cantik Mawar Putih & Eucalyptus di atas Kain Dusty Blue */}
          <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-[#38576E]">
            <img
              src={WEDDING_FLOWERS}
              alt="Buket Bunga Pernikahan Mawar & Eucalyptus"
              className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-cinzel text-xs uppercase tracking-[0.3em] font-bold text-[#223B4E] bg-white/95 px-5 py-2 rounded-full backdrop-blur-xs border border-[#B8CFDE] shadow-sm">
                The Sacred Union
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 pt-4 relative">
            <BotanicalCorner position="bottom-left" />
            <BotanicalCorner position="bottom-right" />

            {/* Bismillah Calligraphy */}
            <div className="font-arabic text-2xl sm:text-3xl text-[#2F4F66] mb-3 leading-relaxed tracking-wide">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </div>

            <h1 className="font-cursive text-5xl sm:text-7xl text-[#162836] my-1 leading-tight">
              Putri & Dify
            </h1>

            <FloralDivider icon="heart" />

            <blockquote className="font-garamond italic text-base sm:text-lg text-[#38576E] max-w-lg mx-auto leading-relaxed my-4">
              &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
            </blockquote>

            <p className="font-cinzel text-xs sm:text-sm font-semibold text-[#2F4F66] tracking-widest mt-2">
              (QS. Ar-Rum: 21)
            </p>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 2: MEMPELAI (THE BRIDE & GROOM)
            ----------------------------------------------------------------------- */}
        <section className="relative drapery-card drapery-arch rounded-b-[28px] p-8 sm:p-12 mb-10 text-center drapery-card-inner bg-white">
          <BotanicalCorner position="top-left" />
          <BotanicalCorner position="top-right" />
          <BotanicalCorner position="bottom-left" />
          <BotanicalCorner position="bottom-right" />

          {/* Clean Monogram Badge */}
          <div className="mb-4">
            <MonogramBadge size="sm" />
          </div>

          <p className="font-cinzel text-xs tracking-[0.24em] text-[#456C87] uppercase font-semibold">
            Mempelai yang Berbahagia
          </p>

          <p className="font-garamond text-base sm:text-lg text-[#38576E] max-w-md mx-auto mt-2 mb-8 leading-relaxed">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&apos;ala, kami mengundang Bapak/Ibu/Saudara/i pada prosesi Akad Nikah kami:
          </p>

          {/* Mempelai Wanita */}
          <div className="py-2">
            <div className="inline-block p-1 bg-[#E8F1F7] rounded-full mb-3 border border-[#B8CFDE]">
              <span className="font-montserrat text-[11px] font-semibold text-[#2F4F66] px-3.5 py-1 uppercase tracking-widest">
                Mempelai Wanita
              </span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#223B4E] tracking-wide">
              Wahyu Dia Putri
            </h2>
            <p className="font-garamond italic text-lg text-[#456C87] mt-1">(Putri)</p>
            <p className="font-garamond text-base sm:text-lg text-[#162836] mt-2">
              Putri tercinta dari
            </p>
            <p className="font-garamond text-base sm:text-lg text-[#162836]">
              <strong className="font-semibold text-[#2F4F66]">Bpk. Lili Muslihat</strong> & <strong className="font-semibold text-[#2F4F66]">Ibu Ani Sutiani</strong>
            </p>
          </div>

          {/* Cursive Ampersand with Warm Gold Touch */}
          <div className="font-cursive text-5xl sm:text-6xl text-[#C29F6C] my-4 leading-none select-none">
            &
          </div>

          {/* Mempelai Pria */}
          <div className="py-2">
            <div className="inline-block p-1 bg-[#E8F1F7] rounded-full mb-3 border border-[#B8CFDE]">
              <span className="font-montserrat text-[11px] font-semibold text-[#2F4F66] px-3.5 py-1 uppercase tracking-widest">
                Mempelai Pria
              </span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#223B4E] tracking-wide">
              Dify Maulana Rizky
            </h2>
            <p className="font-garamond italic text-lg text-[#456C87] mt-1">(Dify)</p>
            <p className="font-garamond text-base sm:text-lg text-[#162836] mt-2">
              Putra tercinta dari
            </p>
            <p className="font-garamond text-base sm:text-lg text-[#162836]">
              <strong className="font-semibold text-[#2F4F66]">Bpk. Mahmudi</strong> & <strong className="font-semibold text-[#2F4F66]">Ibu Suripah</strong>
            </p>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 3: WAKTU & TEMPAT AKAD NIKAH
            ----------------------------------------------------------------------- */}
        <section className="relative drapery-card drapery-arch rounded-b-[28px] p-8 sm:p-12 mb-10 text-center drapery-card-inner bg-white">
          <BotanicalCorner position="top-left" />
          <BotanicalCorner position="top-right" />
          <BotanicalCorner position="bottom-left" />
          <BotanicalCorner position="bottom-right" />

          <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#223B4E] uppercase">
            Waktu & Tempat Akad
          </h2>

          <FloralDivider icon="calendar" />

          {/* Date & Time Box */}
          <div className="my-6 py-5 px-4 border border-[#B8CFDE] bg-[#F2F7FA] rounded-2xl shadow-2xs">
            <p className="font-cinzel text-2xl sm:text-3xl font-bold text-[#162836] tracking-wide">
              Rabu, 30 Desember 2026
            </p>
            <div className="flex items-center justify-center gap-2 font-garamond text-lg font-semibold text-[#2F4F66] mt-2">
              <Clock className="w-4 h-4 text-[#C29F6C]" />
              <span>Pukul 09.00 WIB - Selesai</span>
            </div>
          </div>

          {/* Venue Details */}
          <div className="max-w-md mx-auto mb-6">
            <p className="font-cinzel text-lg sm:text-xl font-bold text-[#162836] mb-2 flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C29F6C]" />
              <span>Toko Kelontong Pak Rudi</span>
            </p>
            <p className="font-garamond text-base sm:text-lg text-[#38576E] leading-relaxed">
              Jln. Fatmawati Gading Tuntang RT 03 , RW 02 kec tuntang Kab Semarang, 50773, Jawa Tengah, ID
            </p>
          </div>

          {/* Action Buttons: Exact Google Maps Link & Calendar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#456C87] hover:bg-[#2F4F66] text-white font-montserrat text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MapPin className="w-4 h-4" />
              <span>Petunjuk Arah Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={createGoogleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#B8CFDE] bg-[#E8F1F7] hover:bg-[#D1E2EE] text-[#2F4F66] font-montserrat text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              <span>Simpan ke Kalender</span>
            </a>
          </div>

          {/* Live Countdown Timer in Soft Dusty Ice Glass */}
          <div className="pt-6 border-t border-[#B8CFDE]">
            <p className="font-cinzel text-xs tracking-[0.24em] text-[#456C87] uppercase font-semibold mb-4">
              Menuju Hari Bahagia
            </p>
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto">
              <div className="p-3 sm:p-4 bg-[#F2F7FA] border border-[#B8CFDE] rounded-xl shadow-xs">
                <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#223B4E] tabular-nums">
                  {timeLeft.days}
                </div>
                <div className="font-montserrat text-[10px] sm:text-xs uppercase tracking-wider text-[#456C87] mt-1">
                  Hari
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-[#F2F7FA] border border-[#B8CFDE] rounded-xl shadow-xs">
                <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#223B4E] tabular-nums">
                  {timeLeft.hours}
                </div>
                <div className="font-montserrat text-[10px] sm:text-xs uppercase tracking-wider text-[#456C87] mt-1">
                  Jam
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-[#F2F7FA] border border-[#B8CFDE] rounded-xl shadow-xs">
                <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#223B4E] tabular-nums">
                  {timeLeft.minutes}
                </div>
                <div className="font-montserrat text-[10px] sm:text-xs uppercase tracking-wider text-[#456C87] mt-1">
                  Menit
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-[#F2F7FA] border border-[#B8CFDE] rounded-xl shadow-xs">
                <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#223B4E] tabular-nums">
                  {timeLeft.seconds}
                </div>
                <div className="font-montserrat text-[10px] sm:text-xs uppercase tracking-wider text-[#456C87] mt-1">
                  Detik
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 4: TANDA KASIH (WEDDING GIFT)
            ----------------------------------------------------------------------- */}
        <section className="relative drapery-card drapery-arch rounded-b-[28px] p-8 sm:p-12 mb-10 text-center drapery-card-inner bg-white">
          <BotanicalCorner position="top-left" />
          <BotanicalCorner position="top-right" />
          <BotanicalCorner position="bottom-left" />
          <BotanicalCorner position="bottom-right" />

          <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#223B4E] uppercase">
            Tanda Kasih
          </h2>

          <FloralDivider icon="gift" />

          <p className="font-garamond text-base sm:text-lg text-[#38576E] max-w-md mx-auto mb-8 leading-relaxed">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda hendak memberikan tanda kasih, dapat melalui:
          </p>

          <div className="space-y-5 max-w-md mx-auto">
            {/* Rekening BCA Dify */}
            <div className="p-6 bg-[#F2F7FA] border border-[#B8CFDE] rounded-2xl text-center shadow-xs">
              <div className="flex items-center justify-between border-b border-[#B8CFDE] pb-2 mb-3">
                <span className="font-cinzel text-base font-bold text-[#223B4E]">BANK BCA</span>
                <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#456C87]">
                  Rekening Pria
                </span>
              </div>
              <p className="font-montserrat text-2xl font-semibold tracking-wider text-[#162836] my-2 select-all tabular-nums">
                0131721951
              </p>
              <p className="font-garamond text-base text-[#456C87] mb-4">
                a.n. <strong className="text-[#162836]">Dify Maulana Rizky</strong>
              </p>
              <button
                onClick={() => handleCopy('0131721951', 'bca_dify', 'Nomor rekening BCA (Dify)')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#456C87] text-[#223B4E] hover:bg-[#456C87] hover:text-white font-montserrat text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 shadow-xs"
              >
                {copiedKey === 'bca_dify' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey === 'bca_dify' ? 'Tersalin' : 'Salin No. Rekening'}</span>
              </button>
            </div>

            {/* Rekening BCA Putri */}
            <div className="p-6 bg-[#F2F7FA] border border-[#B8CFDE] rounded-2xl text-center shadow-xs">
              <div className="flex items-center justify-between border-b border-[#B8CFDE] pb-2 mb-3">
                <span className="font-cinzel text-base font-bold text-[#223B4E]">BANK BCA</span>
                <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#456C87]">
                  Rekening Wanita
                </span>
              </div>
              <p className="font-montserrat text-2xl font-semibold tracking-wider text-[#162836] my-2 select-all tabular-nums">
                3200901991
              </p>
              <p className="font-garamond text-base text-[#456C87] mb-4">
                a.n. <strong className="text-[#162836]">Wahyu Dia Putri</strong>
              </p>
              <button
                onClick={() => handleCopy('3200901991', 'bca_putri', 'Nomor rekening BCA (Putri)')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#456C87] text-[#223B4E] hover:bg-[#456C87] hover:text-white font-montserrat text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 shadow-xs"
              >
                {copiedKey === 'bca_putri' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey === 'bca_putri' ? 'Tersalin' : 'Salin No. Rekening'}</span>
              </button>
            </div>

            {/* Alamat Kado Fisik */}
            <div className="p-6 bg-[#F2F7FA] border border-[#B8CFDE] rounded-2xl text-center shadow-xs">
              <div className="flex items-center justify-center gap-2 text-[#223B4E] mb-2 font-cinzel text-base font-bold">
                <Gift className="w-4 h-4 text-[#C29F6C]" />
                <span>Kirim Kado Fisik</span>
              </div>
              <p className="font-cinzel text-sm font-semibold text-[#162836] mb-1">
                Toko Kelontong Pak Rudi
              </p>
              <p className="font-garamond text-base text-[#38576E] max-w-sm mx-auto mb-4 leading-relaxed">
                Jln. Fatmawati Gading Tuntang RT 03 , RW 02 kec tuntang Kab Semarang, 50773, Jawa Tengah, ID
              </p>
              <button
                onClick={() => handleCopy(fullAddress, 'alamat_kado', 'Alamat pengiriman kado')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#456C87] text-[#223B4E] hover:bg-[#456C87] hover:text-white font-montserrat text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 shadow-xs"
              >
                {copiedKey === 'alamat_kado' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey === 'alamat_kado' ? 'Alamat Tersalin' : 'Salin Alamat Pengiriman'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 5: RSVP (KONFIRMASI KEHADIRAN KE WHATSAPP)
            ----------------------------------------------------------------------- */}
        <section className="relative drapery-card drapery-arch rounded-b-[28px] p-8 sm:p-12 mb-10 text-center drapery-card-inner bg-white">
          <BotanicalCorner position="top-left" />
          <BotanicalCorner position="top-right" />
          <BotanicalCorner position="bottom-left" />
          <BotanicalCorner position="bottom-right" />

          <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#223B4E] uppercase">
            Konfirmasi Kehadiran (RSVP)
          </h2>

          <FloralDivider icon="feather" />

          <p className="font-garamond text-base sm:text-lg text-[#38576E] max-w-md mx-auto mb-6 leading-relaxed">
            Mohon konfirmasikan kehadiran Bapak/Ibu/Saudara/i untuk kenyamanan dan kelancaran prosesi acara.
          </p>

          <form onSubmit={handleSendRSVP} className="max-w-md mx-auto text-left space-y-4">
            <div>
              <label className="block font-montserrat text-xs font-semibold uppercase tracking-wider text-[#162836] mb-1.5">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={rsvpName}
                onChange={(e) => setRsvpName(e.target.value)}
                placeholder="Masukkan nama Anda"
                className="w-full p-3 border border-[#B8CFDE] bg-[#F2F7FA] focus:bg-white focus:border-[#456C87] focus:outline-none rounded-xl font-garamond text-base sm:text-lg text-[#162836] transition-colors shadow-2xs"
              />
            </div>

            <div>
              <label className="block font-montserrat text-xs font-semibold uppercase tracking-wider text-[#162836] mb-1.5">
                Konfirmasi Kehadiran
              </label>
              <select
                value={rsvpStatus}
                onChange={(e) => setRsvpStatus(e.target.value)}
                className="w-full p-3 border border-[#B8CFDE] bg-[#F2F7FA] focus:bg-white focus:border-[#456C87] focus:outline-none rounded-xl font-garamond text-base sm:text-lg text-[#162836] transition-colors cursor-pointer shadow-2xs"
              >
                <option value="Hadir">Insya Allah Hadir</option>
                <option value="Tidak Hadir">Mohon Maaf Belum Bisa Hadir</option>
                <option value="Ragu-ragu">Masih Ragu-ragu</option>
              </select>
            </div>

            <div>
              <label className="block font-montserrat text-xs font-semibold uppercase tracking-wider text-[#162836] mb-1.5">
                Jumlah Tamu
              </label>
              <select
                value={rsvpCount}
                onChange={(e) => setRsvpCount(e.target.value)}
                className="w-full p-3 border border-[#B8CFDE] bg-[#F2F7FA] focus:bg-white focus:border-[#456C87] focus:outline-none rounded-xl font-garamond text-base sm:text-lg text-[#162836] transition-colors cursor-pointer shadow-2xs"
              >
                <option value="1 Orang">1 Orang</option>
                <option value="2 Orang">2 Orang</option>
              </select>
            </div>

            <div>
              <label className="block font-montserrat text-xs font-semibold uppercase tracking-wider text-[#162836] mb-1.5">
                Pesan / Doa Restu
              </label>
              <textarea
                rows={3}
                value={rsvpMessage}
                onChange={(e) => setRsvpMessage(e.target.value)}
                placeholder="Tuliskan ucapan & doa restu Anda..."
                className="w-full p-3 border border-[#B8CFDE] bg-[#F2F7FA] focus:bg-white focus:border-[#456C87] focus:outline-none rounded-xl font-garamond text-base sm:text-lg text-[#162836] transition-colors resize-none shadow-2xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-[#456C87] hover:bg-[#2F4F66] text-white font-cinzel text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Kirim Konfirmasi via WhatsApp</span>
            </button>
          </form>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 6: UCAPAN & DOA RESTU (BUKU TAMU)
            ----------------------------------------------------------------------- */}
        <section className="relative drapery-card drapery-arch rounded-b-[28px] p-8 sm:p-12 mb-10 text-center drapery-card-inner bg-white">
          <BotanicalCorner position="top-left" />
          <BotanicalCorner position="top-right" />
          <BotanicalCorner position="bottom-left" />
          <BotanicalCorner position="bottom-right" />

          <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#223B4E] uppercase">
            Ucapan & Doa Restu
          </h2>

          <FloralDivider icon="rings" />

          <p className="font-garamond text-base sm:text-lg text-[#38576E] max-w-md mx-auto mb-6">
            Doa restu serta ucapan tulus dari Bapak/Ibu/Saudara/i yang telah dikirimkan melalui form di atas akan terhimpun di sini.
          </p>

          {/* Hanya menampilkan pesan riil dari pengguna (Bebas data fiktif AI) */}
          <div className="max-w-md mx-auto text-left">
            {wishes.length === 0 ? (
              <div className="py-8 px-4 text-center border border-dashed border-[#B8CFDE] rounded-2xl bg-[#F2F7FA]">
                <Quote className="w-8 h-8 mx-auto text-[#85A7BE] mb-2 opacity-60" />
                <p className="font-garamond text-base italic text-[#456C87]">
                  Belum ada ucapan atau doa restu yang masuk.
                </p>
                <p className="font-montserrat text-xs text-[#5D85A1] mt-1">
                  Kirimkan konfirmasi dan doa restu Anda melalui formulir di atas.
                </p>
              </div>
            ) : (
              <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1">
                {wishes.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-[#F2F7FA] border border-[#B8CFDE] rounded-2xl shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-cinzel font-bold text-sm text-[#223B4E]">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-montserrat text-[#5D85A1]">
                        {item.timestamp}
                      </span>
                    </div>
                    <div className="text-[11px] font-montserrat text-[#456C87] mb-2 flex items-center gap-1">
                      <UserCheck className="w-3 h-3" />
                      <span>Status: {item.status}</span>
                    </div>
                    <p className="font-garamond text-base italic text-[#162836] leading-relaxed">
                      &ldquo;{item.message}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            SECTION 7: FOOTER
            ----------------------------------------------------------------------- */}
        <footer className="text-center pt-4 pb-12 text-[#E8F1F7]">
          {/* Closing Monogram */}
          <div className="mb-4">
            <MonogramBadge size="sm" />
          </div>
          <div className="w-16 h-px bg-[#85A7BE] mx-auto mb-4 opacity-60" />
          <p className="font-cursive text-5xl sm:text-6xl text-white mb-2">
            Putri & Dify
          </p>
          <p className="font-garamond text-base sm:text-lg max-w-sm mx-auto leading-relaxed text-[#D2E2ED]">
            Terima kasih atas segala doa restu dan perhatian hangat Anda.
          </p>
          <p className="font-montserrat text-[11px] tracking-widest uppercase text-[#B2CADB] mt-5">
            Rabu, 30 Desember 2026 · Semarang, Indonesia
          </p>
        </footer>
      </main>
    </div>
  );
}

import React from 'react';
import { X, BookOpen, ShieldCheck, ExternalLink } from 'lucide-react';

interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const citations = [
    {
      institution: 'Archaeological Survey of India (ASI)',
      works: [
        'Ajanta: History and Development (Walter M. Spink, 2005)',
        'The Sun Temple of Konark: Architecture and Sculptural Analysis (K.S. Behera, 1996)',
        'Khajuraho: World Heritage Guide & Epigraphical Records (Devangana Desai, 2000)',
        'The Great Chola Temples: Thanjavur, Gangaikondacholapuram, Darasuram (2004)'
      ]
    },
    {
      institution: 'National Gallery of Modern Art (NGMA), New Delhi & Mumbai',
      works: [
        'The Making of Modern Indian Art: The Progressives (Yashodhara Dalmia, 2001)',
        'Santiniketan: The Making of a Contextual Modernism (R. Siva Kumar, 1997)',
        'Amrita Sher-Gil: A Self-Portrait in Letters and Art (Vivan Sundaram, 2010)'
      ]
    },
    {
      institution: 'UNESCO World Heritage Centre',
      works: [
        'Ajanta Caves (Dossier 242) & Ellora Caves (Dossier 243)',
        'Rani-ki-Vav (the Queen?s Stepwell) at Patan, Gujarat (Dossier 922)',
        'Group of Monuments at Hampi (Dossier 241)',
        'Santiniketan, West Bengal (Dossier 1375)'
      ]
    },
    {
      institution: 'Victoria & Albert Museum & The British Museum',
      works: [
        'The Imperial Image: Paintings for the Mughal Court (Milo Cleveland Beach, 1981)',
        'Chola: Sacred Bronzes of Southern India (Vidya Dehejia, 2006)',
        'Arts of Bengal: The Heritage of Bangladesh and Eastern India (Robert Skelton, 1979)'
      ]
    },
    {
      institution: 'Classical Treatises & Epigraphical Texts',
      works: [
        'Chitrasutra of the Vishnudharmottara Purana (Classical Indian canon of painting)',
        'Shilpa Shastras & Manasara (Architectural proportion and lost-wax bronze casting canons)',
        'Natya Shastra by Bharata Muni (Aesthetics of Rasa and Bhava)'
      ]
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] museum-glass rounded-2xl border border-[#d4af37]/40 shadow-2xl overflow-hidden flex flex-col p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#61a5c2]/20 text-[#61a5c2]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg font-bold text-white">
                Scholarly Citations & Sources
              </h2>
              <p className="text-xs text-gray-400">
                Academic bibliography and cultural institutional acknowledgements
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-300 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-[#d4af37] inline-block mr-1.5" />
            <strong>Curatorial Statement:</strong> &ldquo;India: A Living Canvas&rdquo; is developed as an educational digital atlas honoring India?s diverse and pluralistic artistic heritage. All geographical, historical, and material descriptions are rigorously grounded in verified archival literature and archaeological surveys.
          </div>

          <div className="space-y-4">
            {citations.map((cite, idx) => (
              <div key={idx} className="p-3.5 rounded-xl museum-glass-light border border-white/10 space-y-2">
                <h3 className="text-xs font-bold text-[#fcedc5] uppercase tracking-wider font-cinzel">
                  {cite.institution}
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-300 font-outfit">
                  {cite.works.map((work, wIdx) => (
                    <li key={wIdx} className="flex items-start gap-2">
                      <span className="text-[#d4af37] select-none">?</span>
                      <span className="italic">{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

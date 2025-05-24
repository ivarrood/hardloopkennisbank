'use client'

import React, { useState } from 'react';

const uitleg = {
  'uithoudingsvermogen': 'Het vermogen om een bepaalde belasting zo lang mogelijk vol te houden.',
  'kracht': 'De maximale kracht die een spier of spiergroep kan leveren.',
  'snelheid': 'De eigenschap om een beweging zo snel mogelijk uit te voeren.',
  'coördinatie': 'Het vermogen om bewegingen nauwkeurig en efficiënt uit te voeren.',
  'beweeglijkheid': 'De mate van flexibiliteit en bewegingsvrijheid in gewrichten en spieren.'
};

const MotorischeEigenschappenDiagram = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center my-8">
      <svg
        width="320"
        height="260"
        viewBox="0 0 320 260"
        className="mb-4"
      >
        {/* Cirkel */}
        <circle cx="160" cy="130" r="100" fill="none" stroke="#222" strokeWidth="2" />
        {/* Driehoek */}
        <polygon
          points="160,50 70,200 250,200"
          fill="none"
          stroke="#222"
          strokeWidth="2"
        />
        {/* Uithoudingsvermogen (midden driehoek) */}
        <text
          x="160" y="110" textAnchor="middle" fontSize="14" cursor="pointer"
          onMouseEnter={() => setSelected('uithoudingsvermogen')}
          onMouseLeave={() => setSelected(null)}
          onClick={() => setSelected('uithoudingsvermogen')}
        >
          uit-<tspan x="160" dy="1.2em">houdings-</tspan><tspan x="160" dy="1.2em">vermogen</tspan>
        </text>
        {/* Kracht (linksonder) */}
        <text
          x="80" y="210" textAnchor="middle" fontSize="14" cursor="pointer"
          onMouseEnter={() => setSelected('kracht')}
          onMouseLeave={() => setSelected(null)}
          onClick={() => setSelected('kracht')}
        >
          kracht
        </text>
        {/* Snelheid (rechtsonder) */}
        <text
          x="240" y="210" textAnchor="middle" fontSize="14" cursor="pointer"
          onMouseEnter={() => setSelected('snelheid')}
          onMouseLeave={() => setSelected(null)}
          onClick={() => setSelected('snelheid')}
        >
          snelheid
        </text>
        {/* Coördinatie (links buiten cirkel) */}
        <rect x="10" y="110" width="90" height="32" fill="#fff" stroke="#222" strokeWidth="1" rx="4" />
        <text
          x="55" y="132" textAnchor="middle" fontSize="14" cursor="pointer"
          onMouseEnter={() => setSelected('coördinatie')}
          onMouseLeave={() => setSelected(null)}
          onClick={() => setSelected('coördinatie')}
        >
          coördinatie
        </text>
        {/* Beweeglijkheid (rechts buiten cirkel) */}
        <rect x="220" y="110" width="90" height="32" fill="#fff" stroke="#222" strokeWidth="1" rx="4" />
        <text
          x="265" y="132" textAnchor="middle" fontSize="14" cursor="pointer"
          onMouseEnter={() => setSelected('beweeglijkheid')}
          onMouseLeave={() => setSelected(null)}
          onClick={() => setSelected('beweeglijkheid')}
        >
          beweeglijkheid
        </text>
        {/* Titel */}
        <text x="160" y="245" textAnchor="middle" fontSize="14">De motorische basiseigenschappen</text>
      </svg>
      <div className="min-h-[40px] text-center text-gray-800">
        {selected ? <span><b>{selected.charAt(0).toUpperCase() + selected.slice(1)}:</b> {uitleg[selected as keyof typeof uitleg]}</span> : <span>Beweeg over of klik op een eigenschap voor uitleg.</span>}
      </div>
    </div>
  );
};

export default MotorischeEigenschappenDiagram; 